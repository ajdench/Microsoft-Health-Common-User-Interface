import { useMemo, useState } from 'react'
import { ConsultationSectionCard } from '@/components/ConsultationSectionCard'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { PatientChrome } from '@/components/PatientChrome'
import { ReferencePanel } from '@/components/ReferencePanel'
import { SyncStateBar } from '@/components/SyncStateBar'
import { TasksPane } from '@/components/TasksPane'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { initialCodes, initialSections, initialTasks, patient } from '@/data/demo'
import type { CodedEntry, ConsultationSection, FollowUpTask } from '@/types'
import './styles.css'

const TASKS_CODE_SECTION_ID = 'tasks'

export function App() {
  const [sections, setSections] = useState<ConsultationSection[]>(initialSections)
  const [codes, setCodes] = useState<CodedEntry[]>(initialCodes)
  const [tasks, setTasks] = useState<FollowUpTask[]>(initialTasks)
  const [showValidationAttention, setShowValidationAttention] = useState(false)
  const missingRequiredSections = useMemo(() => sections.filter((section) => section.required && section.text.trim().length === 0), [sections])
  const missingRequiredCount = missingRequiredSections.length

  function updateSection(sectionId: string, text: string) {
    setSections((current) => current.map((section) => (section.id === sectionId ? { ...section, text } : section)))
  }

  function addCode(sectionId: string, code: Omit<CodedEntry, 'id' | 'sectionId'>) {
    setCodes((current) => {
      if (current.some((entry) => entry.sectionId === sectionId && entry.code === code.code)) {
        return current
      }

      return [...current, { ...code, id: `code-${sectionId}-${code.code}`, sectionId }]
    })
  }

  function removeCode(entryId: string) {
    setCodes((current) => current.filter((entry) => entry.id !== entryId))
  }

  function addTask(label: string) {
    const trimmed = label.trim()

    if (!trimmed) {
      return
    }

    setTasks((current) => [
      ...current,
      {
        id: `task-${Date.now()}`,
        label: trimmed,
        dueText: 'Within 2 weeks',
        createdAt: new Date().toISOString(),
      },
    ])
  }

  function reviewValidation() {
    setShowValidationAttention(true)

    const firstMissingSection = missingRequiredSections[0]
    if (!firstMissingSection) {
      return
    }

    window.requestAnimationFrame(() => {
      const sectionElement = document.querySelector(`[data-section-id="${firstMissingSection.id}"]`)
      sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      sectionElement?.querySelector<HTMLElement>('[data-clinical-text-editor]')?.focus({ preventScroll: true })
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PatientChrome patient={patient} />
      <SyncStateBar />
      <main className="mx-auto grid max-w-[1440px] gap-4 p-4" data-app-main-grid>
        <ReferencePanel />
        <section className="grid gap-4" aria-label="Consultation capture" data-consultation-column>
          <Card>
            <CardHeader className="gap-y-2 sm:grid-rows-[auto]! sm:items-start sm:gap-y-0!">
              <div className="grid gap-y-2 sm:h-[3.8125rem] sm:grid-rows-[1.25rem_13px_1.75rem] sm:gap-y-0 sm:whitespace-nowrap" data-consultation-banner-text-stack>
                <CardTitle>Consultation capture</CardTitle>
                <span className="text-[0.8rem] leading-none font-semibold text-muted-foreground sm:self-center sm:translate-y-[4.3px]" data-consultation-banner-clinician>
                  Dr Taylor Reed
                </span>
                <CardDescription className="inline-flex h-7 items-center text-[0.8rem] leading-none font-normal" data-consultation-banner-incomplete-status>
                  <span className="translate-y-px leading-none" data-consultation-banner-incomplete-text>
                    {missingRequiredCount} required sections incomplete
                  </span>
                </CardDescription>
              </div>
              <CardAction className="row-start-2 mt-2 grid w-full justify-items-start gap-y-2.5 sm:row-span-1 sm:row-start-1 sm:mt-0 sm:w-auto sm:self-start sm:gap-y-[13px]" data-testid="consultation-banner-action-rail">
                <div className="grid gap-4 sm:grid-cols-[repeat(3,10rem)]">
                  <ClinicalBadge className="w-40 justify-center" tone={missingRequiredCount > 0 ? 'warn' : 'good'}>
                    {missingRequiredCount > 0 ? 'Validation open' : 'Validation clear'}
                  </ClinicalBadge>
                  <ClinicalBadge className="w-40 justify-center" tone="bad">
                    Not saved locally
                  </ClinicalBadge>
                  <ClinicalBadge className="w-40 justify-center" tone="purple">
                    Consultation not signed
                  </ClinicalBadge>
                </div>
                <div className="grid gap-4 sm:grid-cols-[repeat(3,10rem)]">
                  <Button className="w-40" variant="clinicalWarn" type="button" size="sm" onClick={reviewValidation}>
                    <span className="leading-none" data-consultation-banner-action-text>
                      Review Validation
                    </span>
                  </Button>
                  <Button className="w-40" variant="clinicalSuccess" type="button" size="sm">
                    <span className="leading-none" data-consultation-banner-action-text>
                      Save Locally
                    </span>
                  </Button>
                  <Button className="w-40" variant="clinicalPurple" size="sm" type="button" disabled={missingRequiredCount > 0}>
                    <span className="leading-none" data-consultation-banner-action-text>
                      Sign Consultation
                    </span>
                  </Button>
                </div>
              </CardAction>
            </CardHeader>
          </Card>
          {sections.map((section) => (
            <ConsultationSectionCard
              codes={codes.filter((entry) => entry.sectionId === section.id)}
              key={section.id}
              section={section}
              onTextChange={(value) => updateSection(section.id, value)}
              onAddCode={(entry) => addCode(section.id, entry)}
              onRemoveCode={removeCode}
              showValidationAttention={showValidationAttention}
            />
          ))}
          <TasksPane
            tasks={tasks}
            codes={codes.filter((entry) => entry.sectionId === TASKS_CODE_SECTION_ID)}
            onAddTask={addTask}
            onAddCode={(entry) => addCode(TASKS_CODE_SECTION_ID, entry)}
            onRemoveCode={removeCode}
          />
        </section>
      </main>
    </div>
  )
}
