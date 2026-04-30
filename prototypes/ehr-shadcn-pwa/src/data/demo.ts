import type { ClinicalAlert, CodeSuggestion, ConsultationSection, CodedEntry, FollowUpTask, Medication, Patient, Result } from '@/types'

export const patient: Patient = {
  displayName: 'Margaret Ellis',
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
  { id: 'reason', label: 'Reason', required: true, text: '' },
  { id: 'history', label: 'History', required: false, text: '' },
  { id: 'examination', label: 'Examination', required: false, text: '' },
  { id: 'assessment', label: 'Assessment', required: true, text: '' },
  { id: 'plan', label: 'Plan', required: true, text: '' },
  { id: 'follow-up', label: 'Follow-up', required: false, text: '' },
]

export const initialCodes: CodedEntry[] = []

export const initialTasks: FollowUpTask[] = []

export const codeSuggestions: CodeSuggestion[] = [
  { display: 'Type 2 diabetes mellitus', code: '44054006', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'prioritised' },
  { display: 'Diabetes mellitus', code: '73211009', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'ambiguous' },
  { display: 'Prediabetes', code: '714628002', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'standard' },
  { display: 'Hyperglycaemia', code: '80394007', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'standard' },
  { display: 'Hypoglycaemia', code: '302866003', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'standard' },
  { display: 'Hypertensive disorder', code: '38341003', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'prioritised' },
  { display: 'Review of medication', code: '182836005', system: 'SNOMED CT', semanticTag: 'procedure', priority: 'standard' },
  { display: 'Medication review done by doctor', code: '719328007', system: 'SNOMED CT', semanticTag: 'situation', priority: 'standard' },
  { display: 'Diabetic foot examination', code: '401191002', system: 'SNOMED CT', semanticTag: 'regime', priority: 'prioritised' },
  { display: 'Blood pressure', code: '75367002', system: 'SNOMED CT', semanticTag: 'observable', priority: 'standard' },
  { display: 'Systolic blood pressure', code: '271649006', system: 'SNOMED CT', semanticTag: 'observable', priority: 'standard' },
  { display: 'Diastolic blood pressure', code: '271650006', system: 'SNOMED CT', semanticTag: 'observable', priority: 'standard' },
  { display: 'Body mass index', code: '60621009', system: 'SNOMED CT', semanticTag: 'observable', priority: 'standard' },
  { display: 'Diabetic annual review', code: '170777000', system: 'SNOMED CT', semanticTag: 'regime', priority: 'prioritised' },
  { display: 'Diabetes medication review', code: '394725008', system: 'SNOMED CT', semanticTag: 'procedure', priority: 'prioritised' },
  { display: 'HbA1c measurement (DCCT aligned)', code: '313835008', system: 'SNOMED CT', semanticTag: 'procedure', priority: 'prioritised' },
  { display: 'Haemoglobin A1c above reference range', code: '444751005', system: 'SNOMED CT', semanticTag: 'finding', priority: 'standard' },
  { display: 'Urine albumin/creatinine ratio measurement', code: '271075006', system: 'SNOMED CT', semanticTag: 'procedure', priority: 'prioritised' },
  { display: 'Microalbuminuria', code: '312975006', system: 'SNOMED CT', semanticTag: 'finding', priority: 'standard' },
  { display: 'Glomerular filtration rate', code: '80274001', system: 'SNOMED CT', semanticTag: 'observable', priority: 'standard' },
  { display: 'Glomerular filtration rate below reference range', code: '863929001', system: 'SNOMED CT', semanticTag: 'finding', priority: 'standard' },
  { display: 'Chronic kidney disease stage 3', code: '433144002', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'standard' },
  { display: 'Disorder of kidney due to diabetes', code: '127013003', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'standard' },
  { display: 'Diabetic peripheral neuropathy', code: '424736006', system: 'SNOMED CT', semanticTag: 'disorder', priority: 'standard' },
  { display: 'Polyuria', code: '28442001', system: 'SNOMED CT', semanticTag: 'finding', priority: 'standard' },
  { display: 'Numbness of foot', code: '309538000', system: 'SNOMED CT', semanticTag: 'finding', priority: 'standard' },
  { display: 'Diabetes diet education', code: '284350006', system: 'SNOMED CT', semanticTag: 'procedure', priority: 'standard' },
  { display: 'Lifestyle education regarding risk of diabetes', code: '699826006', system: 'SNOMED CT', semanticTag: 'procedure', priority: 'standard' },
  { display: 'Blood glucose monitoring', code: '698472009', system: 'SNOMED CT', semanticTag: 'regime', priority: 'standard' },
]

export const medications: Medication[] = [
  { id: 'med-1', name: 'Metformin modified-release tablets', dose: 'Two tablets', route: 'Oral', frequency: 'Twice daily with food', status: 'active' },
  { id: 'med-2', name: 'Ramipril capsules', dose: 'One capsule', route: 'Oral', frequency: 'Once daily in the morning', status: 'active' },
  { id: 'med-3', name: 'Atorvastatin tablets', dose: 'One tablet', route: 'Oral', frequency: 'Once nightly', status: 'active' },
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
  { id: 'row-4', date: '2026-04-18', label: 'Body mass index', value: '24.8 kg/m2', status: 'normal' },
  { id: 'row-5', date: '2026-04-22', label: 'Urine ACR', value: 'Pending', status: 'pending' },
]
