import { useMemo, useState } from 'react'
import { ActionRail } from '@/components/ActionRail'
import { ConsultationSectionCard } from '@/components/ConsultationSectionCard'
import { PatientChrome } from '@/components/PatientChrome'
import { ReferencePanel } from '@/components/ReferencePanel'
import { SyncStateBar } from '@/components/SyncStateBar'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { initialCodes, initialSections, patient } from '@/data/demo'
import type { CodedEntry, ConsultationSection } from '@/types'
import './styles.css'

export function App() {
  const [sections, setSections] = useState<ConsultationSection[]>(initialSections)
  const [codes, setCodes] = useState<CodedEntry[]>(initialCodes)
  const missingRequiredCount = useMemo(
    () => sections.filter((section) => section.required && section.text.trim().length === 0).length,
    [sections],
  )

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PatientChrome patient={patient} />
      <SyncStateBar />
      <main className="mx-auto grid max-w-[1440px] gap-4 p-4 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)]">
        <section className="grid gap-4" aria-label="Consultation capture">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Consultation capture</CardTitle>
                  <CardDescription>Author Dr Taylor Reed · Health CUI-informed shadcn-native V2</CardDescription>
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
                />
              ))}
            </div>
            <ActionRail missingRequiredCount={missingRequiredCount} />
          </div>
        </section>
        <ReferencePanel />
      </main>
    </div>
  )
}
