import Dexie, { type EntityTable } from 'dexie'
import type { ClinicalAlert, ConsultationDraft, Medication, Patient, ReferenceRow, SyncOutboxEntry } from '../types'
import { createInitialDraft, fakeAlerts, fakeMedications, fakePatients, fakeReferenceRows } from './fakeData'

export class EhrPrototypeDatabase extends Dexie {
  patients!: EntityTable<Patient, 'id'>
  consultationDrafts!: EntityTable<ConsultationDraft, 'id'>
  medications!: EntityTable<Medication, 'id'>
  alerts!: EntityTable<ClinicalAlert, 'id'>
  referenceRows!: EntityTable<ReferenceRow, 'id'>
  syncOutbox!: EntityTable<SyncOutboxEntry, 'id'>

  constructor() {
    super('ehr-pwa-prototype')
    this.version(1).stores({
      patients: 'id',
      consultationDrafts: 'id, patientId, state',
      medications: 'id, status',
      alerts: 'id, priority, unresolved',
      referenceRows: 'id, status, date',
      syncOutbox: 'id, draftId, state',
    })
  }
}

export const db = new EhrPrototypeDatabase()

export async function seedPrototypeData() {
  const patientCount = await db.patients.count()

  if (patientCount > 0) {
    return
  }

  await db.patients.bulkPut(fakePatients)
  await db.medications.bulkPut(fakeMedications)
  await db.alerts.bulkPut(fakeAlerts)
  await db.referenceRows.bulkPut(fakeReferenceRows)
  await db.consultationDrafts.bulkPut(fakePatients.map((patient) => createInitialDraft(patient.id)))
}
