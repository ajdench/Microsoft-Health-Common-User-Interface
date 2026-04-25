import type { ClinicalAlert, CodeSuggestion, ConsultationSection, CodedEntry, Medication, Patient, Result } from '@/types'

export const patient: Patient = {
  displayName: 'Alex Morgan',
  dateOfBirth: '1958-04-17',
  ageText: '68 years',
  identifier: 'MRN 946 730 1120',
  sexOrGender: 'Female',
  statusFlags: [
    { label: 'Allergy: penicillin', severity: 'critical' },
    { label: 'Falls risk', severity: 'routine' },
  ],
}

export const initialSections: ConsultationSection[] = [
  { id: 'reason', label: 'Reason', required: true, text: 'Medication review and diabetes follow-up.' },
  { id: 'history', label: 'History', required: false, text: '' },
  { id: 'examination', label: 'Examination', required: false, text: '' },
  { id: 'assessment', label: 'Assessment', required: true, text: '' },
  { id: 'plan', label: 'Plan', required: true, text: '' },
]

export const initialCodes: CodedEntry[] = [
  {
    id: 'code-reason-hypertension',
    sectionId: 'reason',
    display: 'Hypertensive disorder',
    code: '38341003',
    system: 'SNOMED CT',
    priority: 'prioritised',
  },
]

export const codeSuggestions: CodeSuggestion[] = [
  { display: 'Type 2 diabetes mellitus', code: '44054006', system: 'SNOMED CT', priority: 'prioritised' },
  { display: 'Medication review done', code: '182836005', system: 'SNOMED CT', priority: 'standard' },
  { display: 'Diabetic annual review', code: '401191002', system: 'SNOMED CT', priority: 'standard' },
  { display: 'Hypertensive disorder', code: '38341003', system: 'SNOMED CT', priority: 'prioritised' },
  { display: 'Diabetes mellitus', code: '73211009', system: 'SNOMED CT', priority: 'ambiguous' },
]

export const medications: Medication[] = [
  { id: 'med-1', name: 'Metformin modified-release tablets', dose: 'Two tablets', route: 'Oral', frequency: 'Twice daily with food', status: 'active' },
  { id: 'med-2', name: 'Ramipril capsules', dose: 'One capsule', route: 'Oral', frequency: 'Once daily in the morning', status: 'active' },
  { id: 'med-3', name: 'Co-codamol 30 mg / 500 mg tablets', dose: 'One or two tablets when required', route: 'Oral', frequency: 'Maximum eight in 24 hours', status: 'stopped' },
]

export const alerts: ClinicalAlert[] = [
  { id: 'alert-1', title: 'Penicillin allergy recorded', priority: 'critical', rationale: 'Avoid beta-lactam antibiotics unless allergy status has been clinically reviewed.' },
  { id: 'alert-2', title: 'Renal function monitoring overdue', priority: 'high', rationale: 'Check renal profile before medication changes.' },
  { id: 'alert-3', title: 'Annual diabetes review due', priority: 'routine', rationale: 'Routine chronic disease monitoring is due.' },
]

export const results: Result[] = [
  { id: 'row-1', date: '2026-04-18', label: 'HbA1c', value: '68 mmol/mol', status: 'abnormal' },
  { id: 'row-2', date: '2026-04-18', label: 'eGFR', value: '58 mL/min/1.73m2', status: 'abnormal' },
  { id: 'row-3', date: '2026-03-21', label: 'Blood pressure', value: '136/82 mmHg', status: 'normal' },
  { id: 'row-4', date: '2026-04-22', label: 'Urine ACR', value: 'Pending', status: 'pending' },
]
