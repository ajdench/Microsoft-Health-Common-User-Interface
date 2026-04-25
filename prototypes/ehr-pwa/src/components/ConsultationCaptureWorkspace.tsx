import { type ReactNode, useState } from 'react'
import type { ConsultationCode, ConsultationDraft, ConsultationSection } from '../types'

type ConsultationCaptureWorkspaceProps = {
  draft: ConsultationDraft
  children: ReactNode
  onUpdateSection: (sectionId: string, text: string) => void
  onRemoveCode: (codeId: string, sectionId: string) => void
  onAddTask: (label: string) => void
  onSave: () => void
  onSign: () => void
  signingAttempted: boolean
  criticalAlertCount: number
}

export function ConsultationCaptureWorkspace({
  draft,
  children,
  onUpdateSection,
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
          <button type="button" onClick={onSave}>
            Save locally and queue sync
          </button>
          <button type="button" className="primary" onClick={onSign}>
            Sign consultation
          </button>
        </div>
      </header>

      {signingAttempted && (criticalAlertCount > 0 || draft.state === 'syncFailed') ? (
        <section className="clinical-warning" role="alert">
          <strong>Sign-off blocked.</strong>
          <span>
            Resolve {criticalAlertCount} critical alert{criticalAlertCount === 1 ? '' : 's'} and any sync failure before finalization.
          </span>
        </section>
      ) : null}

      <div className="consultation-body">
        <div className="section-stack">
          {draft.sections.map((section) => (
            <article className="section-card" key={section.id}>
              <header>
                <div>
                  <h2>{section.label}</h2>
                  <p>{section.validationState === 'missingRequired' ? 'Required before sign-off' : section.dirty ? 'Saved locally with changes' : 'Ready'}</p>
                </div>
                <span className={`state-chip ${section.validationState === 'missingRequired' ? 'warn' : 'good'}`}>
                  {section.validationState === 'missingRequired' ? 'Needs entry' : 'Visible'}
                </span>
              </header>
              <SectionCodedContent
                codes={draft.codes.filter((code) => code.sectionId === section.id)}
                section={section}
                onRemoveCode={onRemoveCode}
              />
              <textarea
                aria-label={`${section.label} section`}
                value={section.text}
                onChange={(event) => onUpdateSection(section.id, event.target.value)}
                placeholder={`Add ${section.label.toLowerCase()} notes`}
              />
            </article>
          ))}
        </div>

        <div className="action-stack" aria-label="Consultation action tray">
          <section className="panel-card">
            <header>
              <div>
                <h2>Validation</h2>
                <p>{requiredMissing.length} required section{requiredMissing.length === 1 ? '' : 's'} incomplete</p>
              </div>
              <span className={`state-chip ${requiredMissing.length > 0 ? 'warn' : 'good'}`}>{requiredMissing.length > 0 ? 'Open' : 'Clear'}</span>
            </header>
          </section>

          {children}

          <section className="panel-card">
            <header>
              <div>
                <h2>Follow-up tasks</h2>
                <p>Kept separate from note text.</p>
              </div>
            </header>
            <div className="code-search">
              <input
                className="task-input"
                value={taskText}
                onChange={(event) => setTaskText(event.target.value)}
                placeholder="Add follow-up task"
                aria-label="Follow-up task"
              />
              <button type="button" onClick={addTask}>
                Add task
              </button>
              {draft.tasks.length > 0 ? (
                <ul className="task-list">
                  {draft.tasks.map((task) => (
                    <li className="code-chip" key={task.id}>
                      {task.label} · {task.dueText}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="meta">No follow-up tasks yet.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

function SectionCodedContent({
  codes,
  section,
  onRemoveCode,
}: {
  codes: ConsultationCode[]
  section: ConsultationSection
  onRemoveCode: (codeId: string, sectionId: string) => void
}) {
  return (
    <section className="section-coded-content" aria-label={`${section.label} coded content`}>
      <h3>Coded content</h3>
      {codes.length > 0 ? (
        <ul className="section-code-list">
          {codes.map((code) => (
            <li key={`${section.id}-${code.id}`}>
              <span>
                {code.display}
                <small>SNOMED CT {code.code}</small>
              </span>
              <button
                type="button"
                className="compact-button"
                onClick={() => onRemoveCode(code.id, section.id)}
                aria-label={`Remove ${code.display} from ${section.label}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="meta">No coded content recorded for this section.</p>
      )}
    </section>
  )
}
