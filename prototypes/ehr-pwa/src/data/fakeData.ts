import type { ClinicalAlert, ConsultationDraft, Medication, Patient, ReferenceRow } from '../types'

export const fakePatients: Patient[] = [
  {
    id: 'p-1001',
    displayName: 'Alex Morgan',
    dateOfBirth: '1958-04-17',
    ageText: '68 years',
    identifier: 'MRN 946 730 1120',
    sexOrGender: 'Female',
    statusFlags: [
      { label: 'Allergy: penicillin', severity: 'critical' },
      { label: 'Falls risk', severity: 'routine' },
    ],
  },
  {
    id: 'p-1002',
    displayName: 'Samir Patel',
    dateOfBirth: '1973-11-08',
    ageText: '52 years',
    identifier: 'MRN 203 944 7711',
    sexOrGender: 'Male',
    statusFlags: [{ label: 'Interpreter required', severity: 'routine' }],
  },
]

export const fakeMedications: Medication[] = [
  {
    id: 'med-1',
    name: 'Metformin modified-release tablets',
    strength: '500 mg',
    dose: 'Two tablets',
    route: 'Oral',
    frequency: 'Twice daily with food',
    status: 'active',
    startedOn: '2025-11-02',
  },
  {
    id: 'med-2',
    name: 'Ramipril capsules',
    strength: '5 mg',
    dose: 'One capsule',
    route: 'Oral',
    frequency: 'Once daily in the morning',
    status: 'active',
    startedOn: '2024-05-18',
  },
  {
    id: 'med-3',
    name: 'Co-codamol tablets 30 mg / 500 mg with long administration note',
    strength: '30 mg / 500 mg',
    dose: 'One or two tablets when required',
    route: 'Oral',
    frequency: 'Up to four times daily; maximum eight tablets in 24 hours',
    status: 'stopped',
    startedOn: '2025-01-04',
    stoppedOn: '2025-01-11',
  },
]

export const fakeAlerts: ClinicalAlert[] = [
  {
    id: 'alert-1',
    priority: 'critical',
    title: 'Penicillin allergy recorded',
    rationale: 'Avoid beta-lactam antibiotics unless allergy status has been clinically reviewed.',
    relatedAction: 'Review allergy record before prescribing antibiotics.',
    unresolved: true,
  },
  {
    id: 'alert-2',
    priority: 'high',
    title: 'Renal function monitoring overdue',
    rationale: 'Recent eGFR result is older than the configured monitoring interval for current medicines.',
    relatedAction: 'Check renal profile before medication changes.',
    unresolved: true,
  },
  {
    id: 'alert-3',
    priority: 'routine',
    title: 'Annual diabetes review due',
    rationale: 'The patient is due routine chronic disease monitoring.',
    unresolved: false,
  },
]

export const fakeReferenceRows: ReferenceRow[] = [
  { id: 'row-1', date: '2026-04-18', label: 'HbA1c', value: '68 mmol/mol', status: 'abnormal' },
  { id: 'row-2', date: '2026-04-18', label: 'eGFR', value: '58 mL/min/1.73m2', status: 'abnormal' },
  { id: 'row-3', date: '2026-03-21', label: 'Blood pressure', value: '136/82 mmHg', status: 'normal' },
  { id: 'row-4', date: '2026-04-22', label: 'Urine ACR', value: 'Pending', status: 'pending' },
]

export function createInitialDraft(patientId: string): ConsultationDraft {
  const now = new Date().toISOString()

  return {
    id: `draft-${patientId}`,
    patientId,
    encounterStartedAt: now,
    authorName: 'Dr Taylor Reed',
    state: 'draft',
    sections: [
      {
        id: 'reason',
        label: 'Reason',
        text: 'Medication review and diabetes follow-up.',
        dirty: false,
        validationState: 'valid',
      },
      {
        id: 'history',
        label: 'History',
        text: '',
        dirty: false,
        validationState: 'warning',
      },
      {
        id: 'examination',
        label: 'Examination',
        text: '',
        dirty: false,
        validationState: 'valid',
      },
      {
        id: 'assessment',
        label: 'Assessment',
        text: '',
        dirty: false,
        validationState: 'missingRequired',
      },
      {
        id: 'plan',
        label: 'Plan',
        text: '',
        dirty: false,
        validationState: 'missingRequired',
      },
      {
        id: 'follow-up',
        label: 'Follow-up',
        text: '',
        dirty: false,
        validationState: 'valid',
      },
    ],
    codes: [],
    tasks: [],
    lastSavedLocalAt: now,
  }
}

export function getPatientRecord(patientId: string) {
  return {
    patient: fakePatients.find((patient) => patient.id === patientId) ?? fakePatients[0],
    medications: fakeMedications,
    alerts: fakeAlerts,
  }
}

