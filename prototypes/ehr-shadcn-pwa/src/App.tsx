import { useMemo, useState } from 'react'
import { ConsultationSectionCard } from '@/components/ConsultationSectionCard'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { PatientChrome } from '@/components/PatientChrome'
import { ReferencePanel } from '@/components/ReferencePanel'
import { SyncStateBar } from '@/components/SyncStateBar'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { initialCodes, initialSections, patient } from '@/data/demo'
import type { CodedEntry, ConsultationSection } from '@/types'
import './styles.css'

export function App() {
  const [sections, setSections] = useState<ConsultationSection[]>(initialSections)
  const [codes, setCodes] = useState<CodedEntry[]>(initialCodes)
  const [showValidationAttention, setShowValidationAttention] = useState(false)
  const missingRequiredSections = useMemo(() => sections.filter((section) => section.required && section.text.trim().length === 0), [sections])
  const missingRequiredCount = missingRequiredSections.length

  function updateSection(sectionId: string, text: string) {
    setSections((current) => current.map((section) => (section.id === sectionId ? { ...section, text } : section)))
  }

  function addCode(sectionId: string, code: Omit<CodedEntry, 'id' | 'sectionId'>) {
    setCodes((current) => {
      if (current.some((entry) => entry.sectionId === sectionId && entry.code === code.code)) {
        return current
      }

      return [...current, { ...code, id: `code-${sectionId}-${code.code}`, sectionId }]
    })
  }

  function removeCode(entryId: string) {
    setCodes((current) => current.filter((entry) => entry.id !== entryId))
  }

  function reviewValidation() {
    setShowValidationAttention(true)

    const firstMissingSection = missingRequiredSections[0]
    if (!firstMissingSection) {
      return
    }

    window.requestAnimationFrame(() => {
      const sectionElement = document.querySelector(`[data-section-id="${firstMissingSection.id}"]`)
      sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      sectionElement?.querySelector<HTMLTextAreaElement>('textarea')?.focus({ preventScroll: true })
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PatientChrome patient={patient} />
      <SyncStateBar />
      <main className="mx-auto grid max-w-[1440px] gap-4 p-4 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)]">
        <section className="grid gap-4" aria-label="Consultation capture">
          <Card>
            <CardHeader className="sm:gap-y-2">
              <CardTitle>Consultation capture</CardTitle>
              <CardDescription className="text-[0.8rem] leading-7 font-medium sm:whitespace-nowrap">
                Author Dr Taylor Reed · {missingRequiredCount} required sections incomplete
              </CardDescription>
              <CardAction className="mt-2 grid w-full justify-items-start gap-y-2.5 sm:mt-0 sm:w-auto" data-testid="consultation-banner-action-rail">
                <div className="grid gap-4 sm:grid-cols-[repeat(3,10rem)]">
                  <ClinicalBadge className="w-40 justify-center" tone={missingRequiredCount > 0 ? 'warn' : 'good'}>
                    {missingRequiredCount > 0 ? 'Validation open' : 'Validation clear'}
                  </ClinicalBadge>
                  <ClinicalBadge className="w-40 justify-center" tone="bad">
                    Not saved locally
                  </ClinicalBadge>
                  <ClinicalBadge className="w-40 justify-center" tone="purple">
                    Consultation not signed
                  </ClinicalBadge>
                </div>
                <div className="grid gap-4 sm:grid-cols-[repeat(3,10rem)]">
                  <Button className="w-40" variant="clinicalWarn" type="button" size="sm" onClick={reviewValidation}>
                    Review Validation
                  </Button>
                  <Button className="w-40" variant="clinicalSuccess" type="button" size="sm">
                    Save Locally
                  </Button>
                  <Button className="w-40" variant="clinicalPurple" size="sm" type="button" disabled={missingRequiredCount > 0}>
                    Sign Consultation
                  </Button>
                </div>
              </CardAction>
            </CardHeader>
          </Card>
          {sections.map((section) => (
            <ConsultationSectionCard
              codes={codes.filter((entry) => entry.sectionId === section.id)}
              key={section.id}
              section={section}
              onTextChange={(value) => updateSection(section.id, value)}
              onAddCode={(entry) => addCode(section.id, entry)}
              onRemoveCode={removeCode}
              showValidationAttention={showValidationAttention}
            />
          ))}
        </section>
        <ReferencePanel />
      </main>
    </div>
  )
}
