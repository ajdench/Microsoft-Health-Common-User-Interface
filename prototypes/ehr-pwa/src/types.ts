export type PatientStatusFlag = {
  label: string
  severity: 'routine' | 'critical'
}

export type Patient = {
  id: string
  displayName: string
  dateOfBirth: string
  ageText: string
  identifier: string
  sexOrGender: string
  statusFlags: PatientStatusFlag[]
}

export type ConsultationState = 'draft' | 'savedLocal' | 'pendingSync' | 'syncFailed' | 'signed'

export type ConsultationSection = {
  id: string
  label: string
  text: string
  dirty: boolean
  validationState: 'valid' | 'missingRequired' | 'warning'
}

export type ConsultationCode = {
  id: string
  sectionId: string
  code: string
  display: string
  category: string
  matchReason: string
  priority: 'prioritised' | 'standard' | 'ambiguous'
  addedAt: string
}

export type FollowUpTask = {
  id: string
  label: string
  dueText: string
  createdAt: string
}

export type ConsultationDraft = {
  id: string
  patientId: string
  encounterStartedAt: string
  authorName: string
  state: ConsultationState
  sections: ConsultationSection[]
  codes: ConsultationCode[]
  tasks: FollowUpTask[]
  lastSavedLocalAt?: string
  lastSyncAttemptAt?: string
  recoveredAt?: string
}

export type Medication = {
  id: string
  name: string
  strength: string
  dose: string
  route: string
  frequency: string
  status: 'active' | 'stopped' | 'historical'
  startedOn?: string
  stoppedOn?: string
}

export type ClinicalAlert = {
  id: string
  priority: 'critical' | 'high' | 'routine'
  title: string
  rationale: string
  relatedAction?: string
  unresolved: boolean
}

export type ReferenceRow = {
  id: string
  date: string
  label: string
  value: string
  status: 'normal' | 'abnormal' | 'pending'
}

export type SyncOutboxEntry = {
  id: string
  draftId: string
  action: 'save' | 'sign'
  createdAt: string
  state: 'pending' | 'failed' | 'sent'
}

export type ConsultationPanel = 'medications' | 'alerts' | 'results'

export type ConsultationSearch = {
  panel?: ConsultationPanel
  filter?: 'abnormal'
}

export type PersistenceState = {
  isOnline: boolean
  recovered: boolean
  storageError?: string
}
