import { Button } from '@/components/ui/button'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import type { Patient } from '@/types'

type PatientChromeProps = {
  patient: Patient
}

export function PatientChrome({ patient }: PatientChromeProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-sky-300 bg-slate-900 text-white" aria-label="Current patient context">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <strong className="text-base">{patient.displayName}</strong>
          <span className="text-sm text-slate-200">DOB {patient.dateOfBirth}</span>
          <span className="text-sm text-slate-200">{patient.ageText}</span>
          <span className="text-sm text-slate-200">{patient.sexOrGender}</span>
          <span className="text-sm text-slate-200">{patient.identifier}</span>
          <span className="flex flex-wrap gap-2" role="group" aria-label="Patient status flags">
            {patient.statusFlags.map((flag) => (
              <ClinicalBadge tone={flag.severity === 'critical' ? 'critical' : 'neutral'} key={flag.label}>
                {flag.severity === 'critical' ? 'Critical' : 'Status'}: {flag.label}
              </ClinicalBadge>
            ))}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ClinicalBadge tone="warn">Local draft active</ClinicalBadge>
          <Button variant="secondary" size="sm" type="button">
            Switch patient
          </Button>
        </div>
      </div>
    </header>
  )
}
