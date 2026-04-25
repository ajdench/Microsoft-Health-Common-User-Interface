import { Button } from '@/components/ui/button'
import type { Patient } from '../types'
import { ClinicalStatusGroup } from './ClinicalStatusGroup'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'

type PatientContextShellProps = {
  patient: Patient
  hasDirtyDraft: boolean
  onSwitchPatient: () => void
}

export function PatientContextShell({ patient, hasDirtyDraft, onSwitchPatient }: PatientContextShellProps) {
  return (
    <header className="patient-shell" aria-label="Current patient context">
      <div className="patient-identity">
        <span className="patient-name">{patient.displayName}</span>
        <span className="patient-detail">DOB {patient.dateOfBirth}</span>
        <span className="patient-detail">{patient.ageText}</span>
        <span className="patient-detail">{patient.sexOrGender}</span>
        <span className="patient-detail">{patient.identifier}</span>
        <ClinicalStatusGroup label="Patient status flags">
          {patient.statusFlags.map((flag) => (
            <ClinicalStatusBadge tone={flag.severity === 'critical' ? 'critical' : 'neutral'} key={flag.label}>
              {flag.severity === 'critical' ? 'Critical' : 'Status'}: {flag.label}
            </ClinicalStatusBadge>
          ))}
        </ClinicalStatusGroup>
      </div>
      <div className="patient-actions">
        {hasDirtyDraft ? <span className="patient-detail">Local draft active</span> : null}
        <Button variant="secondary" type="button" onClick={onSwitchPatient}>
          Switch patient
        </Button>
      </div>
    </header>
  )
}
