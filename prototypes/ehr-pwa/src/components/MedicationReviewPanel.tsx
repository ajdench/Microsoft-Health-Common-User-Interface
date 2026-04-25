import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Medication } from '../types'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'
import { ReferencePanelSection } from './ReferencePanelSection'

type MedicationReviewPanelProps = {
  medications: Medication[]
}

export function MedicationReviewPanel({ medications }: MedicationReviewPanelProps) {
  return (
    <ReferencePanelSection
      label="Medication review"
      title="Medication review"
      description="Stable ordering, visible dose, wrapping, and current/past state."
    >
      <div className="medication-list">
        {medications.map((medication) => (
          <MedicationLine medication={medication} key={medication.id} />
        ))}
      </div>
    </ReferencePanelSection>
  )
}

function MedicationLine({ medication }: { medication: Medication }) {
  return (
    <Card className={medication.status === 'active' ? undefined : 'bg-secondary'} size="sm">
      <CardHeader>
        <CardTitle className="medication-name">{medication.name}</CardTitle>
        <CardDescription>
          Started {medication.startedOn ?? 'unknown'}
          {medication.stoppedOn ? ` · stopped ${medication.stoppedOn}` : ''}
        </CardDescription>
        <CardAction>
          <ClinicalStatusBadge tone={medication.status === 'active' ? 'good' : 'neutral'}>{medication.status}</ClinicalStatusBadge>
        </CardAction>
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
      </CardContent>
    </Card>
  )
}
