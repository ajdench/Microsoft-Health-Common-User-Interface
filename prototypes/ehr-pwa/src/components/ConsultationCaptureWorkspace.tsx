import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { ClinicalCodeSearch, type CodeOption } from './ClinicalCodeSearch'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'
import type { ConsultationCode, ConsultationDraft, ConsultationSection } from '../types'

type ConsultationCaptureWorkspaceProps = {
  draft: ConsultationDraft
  onUpdateSection: (sectionId: string, text: string) => void
  onAddCode: (code: CodeOption, sectionId: string) => void
  onRemoveCode: (codeId: string, sectionId: string) => void
  onAddTask: (label: string) => void
  onSave: () => void
  onSign: () => void
  signingAttempted: boolean
  criticalAlertCount: number
}

export function ConsultationCaptureWorkspace({
  draft,
  onUpdateSection,
  onAddCode,
  onRemoveCode,
  onAddTask,
  onSave,
  onSign,
  signingAttempted,
  criticalAlertCount,
}: ConsultationCaptureWorkspaceProps) {
  const [taskText, setTaskText] = useState('')
  const requiredMissing = draft.sections.filter((section) => section.validationState === 'missingRequired')

  function addTask() {
    onAddTask(taskText)
    setTaskText('')
  }

  return (
    <section className="consultation-workspace" aria-label="Consultation capture">
      <header className="workspace-header">
        <div>
          <h1>Consultation capture</h1>
          <p>
            Author {draft.authorName} · Started {new Date(draft.encounterStartedAt).toLocaleString('en-GB')}
          </p>
        </div>
        <div className="workspace-actions">
          <Button variant="outline" type="button" onClick={onSave}>
            Save locally and queue sync
          </Button>
          <Button type="button" onClick={onSign}>
            Sign consultation
          </Button>
        </div>
      </header>

      {signingAttempted && (criticalAlertCount > 0 || draft.state === 'syncFailed') ? (
        <Alert className="clinical-warning border-[#e8c06d] bg-[var(--warning-soft)] text-[#593600]">
          <AlertTitle>Sign-off blocked.</AlertTitle>
          <AlertDescription className="text-[#593600]">
            Resolve {criticalAlertCount} critical alert{criticalAlertCount === 1 ? '' : 's'} and any sync failure before finalization.
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="consultation-body">
        <div className="section-stack">
          {draft.sections.map((section) => (
            <Card className="section-card" key={section.id}>
              <header>
                <div>
                  <h2>{section.label}</h2>
                  <p>{section.validationState === 'missingRequired' ? 'Required before sign-off' : section.dirty ? 'Saved locally with changes' : 'Ready'}</p>
                </div>
                <ClinicalStatusBadge tone={section.validationState === 'missingRequired' ? 'warn' : 'good'}>
                  {section.validationState === 'missingRequired' ? 'Needs entry' : 'Visible'}
                </ClinicalStatusBadge>
              </header>
              <SectionCodedContent
                codes={draft.codes.filter((code) => code.sectionId === section.id)}
                section={section}
                onAddCode={onAddCode}
                onRemoveCode={onRemoveCode}
              />
              <Textarea
                aria-label={`${section.label} section`}
                value={section.text}
                onChange={(event) => onUpdateSection(section.id, event.target.value)}
                placeholder={`Add ${section.label.toLowerCase()} notes`}
              />
            </Card>
          ))}
        </div>

        <div className="action-stack" aria-label="Consultation action tray">
          <Card className="panel-card">
            <header>
              <div>
                <h2>Validation</h2>
                <p>{requiredMissing.length} required section{requiredMissing.length === 1 ? '' : 's'} incomplete</p>
              </div>
              <ClinicalStatusBadge tone={requiredMissing.length > 0 ? 'warn' : 'good'}>{requiredMissing.length > 0 ? 'Open' : 'Clear'}</ClinicalStatusBadge>
            </header>
          </Card>

          <Card className="panel-card">
            <header>
              <div>
                <h2>Follow-up tasks</h2>
                <p>Kept separate from note text.</p>
              </div>
            </header>
            <div className="code-search">
              <Input
                className="task-input"
                value={taskText}
                onChange={(event) => setTaskText(event.target.value)}
                placeholder="Add follow-up task"
                aria-label="Follow-up task"
              />
              <Button variant="outline" type="button" onClick={addTask}>
                Add task
              </Button>
              {draft.tasks.length > 0 ? (
                <ul className="task-list">
                  {draft.tasks.map((task) => (
                    <ClinicalStatusBadge key={task.id}>
                      {task.label} · {task.dueText}
                    </ClinicalStatusBadge>
                  ))}
                </ul>
              ) : (
                <p className="meta">No follow-up tasks yet.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

function SectionCodedContent({
  codes,
  section,
  onAddCode,
  onRemoveCode,
}: {
  codes: ConsultationCode[]
  section: ConsultationSection
  onAddCode: (code: CodeOption, sectionId: string) => void
  onRemoveCode: (codeId: string, sectionId: string) => void
}) {
  return (
    <section className="section-coded-content" aria-label={`${section.label} coded content`}>
      <header>
        <div>
          <h3>Coded content</h3>
        </div>
        <ClinicalStatusBadge tone={codes.length > 0 ? 'good' : 'neutral'}>{codes.length} coded</ClinicalStatusBadge>
      </header>
      <ClinicalCodeSearch sectionId={section.id} sectionLabel={section.label} onAddCode={onAddCode} />
      {codes.length > 0 ? (
        <ul className="section-code-list">
          {codes.map((code) => (
            <li key={`${section.id}-${code.id}`}>
              <span>
                {code.display}
                <small>SNOMED CT {code.code}</small>
              </span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => onRemoveCode(code.id, section.id)}
                aria-label={`Remove ${code.display} from ${section.label}`}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="meta section-coded-empty">No codes added.</p>
      )}
    </section>
  )
}
