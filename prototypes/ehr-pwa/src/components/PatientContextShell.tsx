import type { Patient } from '../types'

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
        <span className="status-flags" aria-label="Patient status flags">
          {patient.statusFlags.map((flag) => (
            <span className={`status-flag ${flag.severity}`} key={flag.label}>
              {flag.severity === 'critical' ? 'Critical' : 'Status'}: {flag.label}
            </span>
          ))}
        </span>
      </div>
      <div className="patient-actions">
        {hasDirtyDraft ? <span className="patient-detail">Local draft active</span> : null}
        <button type="button" onClick={onSwitchPatient}>
          Switch patient
        </button>
      </div>
    </header>
  )
}

