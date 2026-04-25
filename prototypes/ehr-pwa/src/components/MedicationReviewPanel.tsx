import type { Medication } from '../types'

type MedicationReviewPanelProps = {
  medications: Medication[]
}

export function MedicationReviewPanel({ medications }: MedicationReviewPanelProps) {
  return (
    <section className="reference-content" aria-label="Medication review">
      <header className="reference-header">
        <div>
          <h2>Medication review</h2>
          <p>Stable ordering, visible dose, wrapping, and current/past state.</p>
        </div>
      </header>
      <div className="medication-list">
        {medications.map((medication) => (
          <MedicationLine medication={medication} key={medication.id} />
        ))}
      </div>
    </section>
  )
}

function MedicationLine({ medication }: { medication: Medication }) {
  return (
    <article className={`medication-line ${medication.status}`}>
      <header className="medication-line-header">
        <div className="medication-name">{medication.name}</div>
        <span className={`state-chip ${medication.status === 'active' ? 'good' : ''}`}>{medication.status}</span>
      </header>
      <div className="medication-attributes">
        <div className="medication-attribute">
          <strong>Strength</strong>
          <span>{medication.strength}</span>
        </div>
        <div className="medication-attribute">
          <strong>Dose</strong>
          <span className="dose-value">{medication.dose}</span>
        </div>
        <div className="medication-attribute">
          <strong>Route</strong>
          <span>{medication.route}</span>
        </div>
        <div className="medication-attribute">
          <strong>Frequency</strong>
          <span>{medication.frequency}</span>
        </div>
      </div>
      <p className="meta">
        Started {medication.startedOn ?? 'unknown'}
        {medication.stoppedOn ? ` · stopped ${medication.stoppedOn}` : ''}
      </p>
    </article>
  )
}
