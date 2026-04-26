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
            <CardHeader>
              <CardTitle>Consultation capture</CardTitle>
              <CardDescription>
                Author Dr Taylor Reed · {missingRequiredCount} required sections incomplete
              </CardDescription>
              <CardAction className="mt-2 grid w-full gap-2 sm:mt-0 sm:min-w-[34rem]" data-testid="consultation-banner-action-rail">
                <div className="grid gap-2 sm:grid-cols-3">
                  <ClinicalBadge className="h-7 w-full justify-center px-2.5 text-[0.8rem]" tone={missingRequiredCount > 0 ? 'warn' : 'good'}>
                    {missingRequiredCount > 0 ? 'Validation open' : 'Validation clear'}
                  </ClinicalBadge>
                  <ClinicalBadge className="h-7 w-full justify-center px-2.5 text-[0.8rem]" tone="bad">
                    Not saved locally
                  </ClinicalBadge>
                  <ClinicalBadge className="h-7 w-full justify-center px-2.5 text-[0.8rem]" tone="purple">
                    Consultation not signed
                  </ClinicalBadge>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  <Button className="w-full" variant="outline" type="button" size="sm" onClick={reviewValidation}>
                    Review validation
                  </Button>
                  <Button className="w-full" type="button" size="sm">
                    Save locally
                  </Button>
                  <Button className="w-full" variant="outline" size="sm" type="button" disabled={missingRequiredCount > 0}>
                    Sign consultation
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
