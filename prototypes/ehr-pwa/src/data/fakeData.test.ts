import { describe, expect, it } from 'vitest'
import { createInitialDraft, fakeMedications } from './fakeData'

describe('prototype fake clinical data', () => {
  it('creates a consultation draft with required assessment and plan sections', () => {
    const draft = createInitialDraft('p-1001')

    expect(draft.patientId).toBe('p-1001')
    expect(draft.sections.map((section) => section.id)).toContain('assessment')
    expect(draft.sections.map((section) => section.id)).toContain('plan')
    expect(draft.sections.filter((section) => section.validationState === 'missingRequired')).toHaveLength(2)
  })

  it('keeps medication dose data explicit for the renderer contract', () => {
    expect(fakeMedications.every((medication) => medication.dose.trim().length > 0)).toBe(true)
    expect(fakeMedications.every((medication) => medication.route.trim().length > 0)).toBe(true)
    expect(fakeMedications.every((medication) => medication.frequency.trim().length > 0)).toBe(true)
  })
})

