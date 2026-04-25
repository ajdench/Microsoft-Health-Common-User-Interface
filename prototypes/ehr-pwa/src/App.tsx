import { Navigate, Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { RouterProvider } from '@tanstack/react-router'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './styles.css'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertPanel } from './components/AlertPanel'
import { ClinicalDataTable } from './components/ClinicalDataTable'
import { ConsultationCaptureWorkspace } from './components/ConsultationCaptureWorkspace'
import { MedicationReviewPanel } from './components/MedicationReviewPanel'
import { OfflineSyncStatus } from './components/OfflineSyncStatus'
import { PatientContextShell } from './components/PatientContextShell'
import { fakePatients, fakeReferenceRows, getPatientRecord } from './data/fakeData'
import { seedPrototypeData } from './data/store'
import { useConsultationDraft } from './hooks/useConsultationDraft'
import type { ConsultationPanel, ConsultationSearch } from './types'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Navigate to="/patients/$patientId/consultation" params={{ patientId: fakePatients[0].id }} />,
})

const consultationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patients/$patientId/consultation',
  validateSearch: (search: Record<string, unknown>): ConsultationSearch => ({
    panel: isConsultationPanel(search.panel) ? search.panel : 'medications',
    filter: search.filter === 'abnormal' ? 'abnormal' : undefined,
  }),
  component: ConsultationRoute,
})

const routeTree = rootRoute.addChildren([indexRoute, consultationRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function isConsultationPanel(value: unknown): value is ConsultationPanel {
  return value === 'medications' || value === 'alerts' || value === 'results'
}

function ConsultationRoute() {
  const chromeRef = useRef<HTMLDivElement | null>(null)
  const { patientId } = consultationRoute.useParams()
  const search = consultationRoute.useSearch()
  const navigate = consultationRoute.useNavigate()
  const record = getPatientRecord(patientId)
  const [signingAttempted, setSigningAttempted] = useState(false)
  const [switchWarning, setSwitchWarning] = useState(false)
  const {
    draft,
    isLoading,
    persistenceState,
    updateSection,
    addCode,
    removeCode,
    addTask,
    simulateSyncFailure,
    markPendingSync,
    signDraft,
  } = useConsultationDraft(record.patient.id)

  useEffect(() => {
    void seedPrototypeData()
  }, [])

  useLayoutEffect(() => {
    const chrome = chromeRef.current

    if (!chrome) {
      return
    }

    const chromeElement = chrome

    function setChromeHeight() {
      document.documentElement.style.setProperty('--app-chrome-height', `${chromeElement.getBoundingClientRect().height}px`)
    }

    setChromeHeight()

    const resizeObserver = new ResizeObserver(setChromeHeight)
    resizeObserver.observe(chromeElement)
    window.addEventListener('resize', setChromeHeight)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', setChromeHeight)
    }
  }, [isLoading])

  const criticalUnresolved = useMemo(
    () => record.alerts.filter((alert) => alert.priority === 'critical' && alert.unresolved),
    [record.alerts],
  )

  const activePanel = search.panel ?? 'medications'

  function setPanel(panel: ConsultationPanel) {
    void navigate({
      search: (previous) => ({ ...previous, panel }),
      replace: true,
    })
  }

  function toggleAbnormalFilter() {
    void navigate({
      search: (previous) => ({
        ...previous,
        filter: previous.filter === 'abnormal' ? undefined : 'abnormal',
      }),
      replace: true,
    })
  }

  function handlePatientSwitch() {
    if (draft.state !== 'signed') {
      setSwitchWarning(true)
      return
    }

    void navigate({
      to: '/patients/$patientId/consultation',
      params: { patientId: fakePatients[1].id },
      search: { panel: 'medications' },
    })
  }

  function handleSign() {
    setSigningAttempted(true)

    if (criticalUnresolved.length > 0 || draft.state === 'syncFailed') {
      return
    }

    void signDraft()
  }

  if (isLoading) {
    return <main className="loading-shell">Loading local clinical workspace...</main>
  }

  return (
    <div className="app-shell">
      <div className="app-chrome" ref={chromeRef}>
        <PatientContextShell
          patient={record.patient}
          hasDirtyDraft={draft.state !== 'signed'}
          onSwitchPatient={handlePatientSwitch}
        />

        <OfflineSyncStatus state={persistenceState} draft={draft} onSimulateFailure={simulateSyncFailure} />
      </div>

      <main className="workspace-main">
        {switchWarning ? (
          <Alert className="clinical-warning border-[#e8c06d] bg-[var(--warning-soft)] text-[#593600]">
            <div>
              <AlertTitle>Patient switch paused.</AlertTitle>
              <AlertDescription className="text-[#593600]">Save, sign, or deliberately discard this local draft before changing patient context.</AlertDescription>
            </div>
            <Button variant="outline" type="button" onClick={() => setSwitchWarning(false)}>
              Stay with current patient
            </Button>
          </Alert>
        ) : null}

        <section className="workspace-grid" aria-label="Consultation workspace">
          <ConsultationCaptureWorkspace
            draft={draft}
            onUpdateSection={updateSection}
            onAddCode={addCode}
            onRemoveCode={removeCode}
            onAddTask={addTask}
            onSave={markPendingSync}
            onSign={handleSign}
            signingAttempted={signingAttempted}
            criticalAlertCount={criticalUnresolved.length}
          />

          <aside className="reference-panel" aria-label="Clinical reference panel">
            <Tabs value={activePanel} onValueChange={(value) => setPanel(value as ConsultationPanel)}>
              <TabsList className="panel-tabs" aria-label="Reference panel">
                <TabsTrigger value="medications">Medications</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>

              <TabsContent value="medications">
                <MedicationReviewPanel medications={record.medications} />
              </TabsContent>
              <TabsContent value="alerts">
                <AlertPanel alerts={record.alerts} signingAttempted={signingAttempted} syncFailed={draft.state === 'syncFailed'} />
              </TabsContent>
              <TabsContent value="results">
                <ClinicalDataTable rows={fakeReferenceRows} filter={search.filter} onToggleAbnormal={toggleAbnormalFilter} />
              </TabsContent>
            </Tabs>
          </aside>
        </section>
      </main>
    </div>
  )
}

export function App() {
  return <RouterProvider router={router} />
}
