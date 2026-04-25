import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Medication } from '../types'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'

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
    <Card className={medication.status === 'active' ? undefined : 'bg-secondary'} size="sm">
      <CardHeader className="grid-cols-[1fr_auto]">
        <CardTitle className="medication-name">{medication.name}</CardTitle>
        <ClinicalStatusBadge tone={medication.status === 'active' ? 'good' : 'neutral'}>{medication.status}</ClinicalStatusBadge>
      </CardHeader>
      <CardContent className="grid gap-2">
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
      </CardContent>
    </Card>
  )
}
