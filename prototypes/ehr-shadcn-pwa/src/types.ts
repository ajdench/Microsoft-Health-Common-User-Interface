export type ClinicalTone =
  | 'neutral'
  | 'good'
  | 'warn'
  | 'bad'
  | 'critical'
  | 'high'
  | 'routine'
  | 'optional'
  | 'purple'
  | 'finding'
  | 'disorder'
  | 'procedure'
  | 'observable'
  | 'situation'
  | 'regime'
  | 'product'

export type SnomedSemanticTag = 'finding' | 'disorder' | 'procedure' | 'observable' | 'situation' | 'regime' | 'product'

export type PatientStatusFlag = {
  label: string
  severity: 'routine' | 'critical'
}

export type Patient = {
  displayName: string
  dateOfBirth: string
  ageText: string
  identifier: string
  sexOrGender: string
  statusFlags: PatientStatusFlag[]
}

export type ConsultationSection = {
  id: string
  label: string
  required: boolean
  text: string
}

export type FollowUpTask = {
  id: string
  label: string
  dueText: string
  createdAt: string
}

export type CodedEntry = {
  id: string
  sectionId: string
  display: string
  code: string
  system: string
  semanticTag: SnomedSemanticTag
  priority: 'prioritised' | 'standard' | 'ambiguous'
}

export type CodeSuggestion = Omit<CodedEntry, 'id' | 'sectionId'>

export type Medication = {
  id: string
  name: string
  dose: string
  route: string
  frequency: string
  status: 'active' | 'stopped'
}

export type ClinicalAlert = {
  id: string
  title: string
  priority: 'critical' | 'high' | 'routine'
  rationale: string
}

export type Result = {
  id: string
  date: string
  label: string
  value: string
  status: 'normal' | 'abnormal' | 'pending'
}
