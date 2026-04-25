import { Navigate, Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { RouterProvider } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import './styles.css'
import { AlertPanel } from './components/AlertPanel'
import { ClinicalCodeSearch } from './components/ClinicalCodeSearch'
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
      <div className="app-chrome">
        <PatientContextShell
          patient={record.patient}
          hasDirtyDraft={draft.state !== 'signed'}
          onSwitchPatient={handlePatientSwitch}
        />

        <OfflineSyncStatus state={persistenceState} draft={draft} onSimulateFailure={simulateSyncFailure} />
      </div>

      <main className="workspace-main">
        {switchWarning ? (
          <section className="clinical-warning" role="alert">
            <div>
              <strong>Patient switch paused.</strong>
              <span> Save, sign, or deliberately discard this local draft before changing patient context.</span>
            </div>
            <button type="button" onClick={() => setSwitchWarning(false)}>
              Stay with current patient
            </button>
          </section>
        ) : null}

        <section className="workspace-grid" aria-label="Consultation workspace">
          <ConsultationCaptureWorkspace
            draft={draft}
            onUpdateSection={updateSection}
            onAddTask={addTask}
            onSave={markPendingSync}
            onSign={handleSign}
            signingAttempted={signingAttempted}
            criticalAlertCount={criticalUnresolved.length}
          >
            <ClinicalCodeSearch addedCodes={draft.codes} onAddCode={addCode} onRemoveCode={removeCode} />
          </ConsultationCaptureWorkspace>

          <aside className="reference-panel" aria-label="Clinical reference panel">
            <div className="panel-tabs" role="tablist" aria-label="Reference panel">
              <button
                type="button"
                role="tab"
                aria-selected={activePanel === 'medications'}
                onClick={() => setPanel('medications')}
              >
                Medications
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activePanel === 'alerts'}
                onClick={() => setPanel('alerts')}
              >
                Alerts
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activePanel === 'results'}
                onClick={() => setPanel('results')}
              >
                Results
              </button>
            </div>

            {activePanel === 'medications' ? <MedicationReviewPanel medications={record.medications} /> : null}
            {activePanel === 'alerts' ? (
              <AlertPanel alerts={record.alerts} signingAttempted={signingAttempted} syncFailed={draft.state === 'syncFailed'} />
            ) : null}
            {activePanel === 'results' ? (
              <ClinicalDataTable rows={fakeReferenceRows} filter={search.filter} onToggleAbnormal={toggleAbnormalFilter} />
            ) : null}
          </aside>
        </section>
      </main>
    </div>
  )
}

export function App() {
  return <RouterProvider router={router} />
}
