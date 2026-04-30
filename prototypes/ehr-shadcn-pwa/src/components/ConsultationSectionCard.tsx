import { useMemo, useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { ClinicalTextTextarea } from '@/components/ClinicalTextTextarea'
import { SectionCodingField } from '@/components/SectionCodingField'
import { identifyClinicalTextConcepts, identifyClinicalTextSearchQuery } from '@/lib/clinicalTextConcepts'
import type { ClinicalTextSearchQuery } from '@/lib/clinicalTextConcepts'
import { getClinicalCodeMarkerCodes, insertClinicalCodeMarker, removeClinicalCodeMarkersByCode, replaceTextWithClinicalCodeMarker } from '@/lib/clinicalTextTokens'
import { cn } from '@/lib/utils'
import type { CodedEntry, ConsultationSection } from '@/types'

type ConsultationSectionCardProps = {
  section: ConsultationSection
  codes: CodedEntry[]
  onTextChange: (value: string) => void
  onAddCode: (entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onRemoveCode: (entryId: string) => void
  showValidationAttention?: boolean
}

const sectionPlaceholders: Partial<Record<ConsultationSection['id'], string>> = {
  reason: 'Diabetes medication review and diabetic annual review.',
  history: 'Polyuria and foot numbness.',
  examination: 'BP, BMI and diabetic foot check.',
  assessment: 'Type 2 diabetes with raised HbA1c.',
  plan: 'Diabetes medication review and diet education.',
  'follow-up': 'HbA1c, eGFR and urine ACR.',
}

export function ConsultationSectionCard({ section, codes, onTextChange, onAddCode, onRemoveCode, showValidationAttention = false }: ConsultationSectionCardProps) {
  const missingRequired = section.required && section.text.trim().length === 0
  const emptyOptional = !section.required && section.text.trim().length === 0
  const needsAttention = showValidationAttention && missingRequired
  const [focusPosition, setFocusPosition] = useState<number | null>(null)
  const [cursorOffset, setCursorOffset] = useState(section.text.length)
  const textCandidates = useMemo(() => {
    const codedConceptIds = new Set(codes.map((code) => code.code))

    return identifyClinicalTextConcepts(section.text).filter((match) => !codedConceptIds.has(match.concept.code))
  }, [codes, section.text])
  const textSearchQuery = useMemo(() => identifyClinicalTextSearchQuery(section.text, cursorOffset), [cursorOffset, section.text])

  function handleTextChange(nextValue: string) {
    const markerCodes = getClinicalCodeMarkerCodes(nextValue)

    codes
      .filter((entry) => !markerCodes.has(entry.code))
      .forEach((entry) => {
        onRemoveCode(entry.id)
      })

    onTextChange(nextValue)
  }

  function acceptTextCandidate(match: (typeof textCandidates)[number]) {
    onAddCode(match.concept)
    const nextText = replaceTextWithClinicalCodeMarker(section.text, match.start, match.end, match.concept)

    handleTextChange(nextText.value)
    setFocusPosition(nextText.caretOffset)
    setCursorOffset(nextText.caretOffset)
  }

  function addCodeFromSearch(entry: Omit<CodedEntry, 'id' | 'sectionId'>) {
    onAddCode(entry)

    const nextText = insertClinicalCodeMarker(section.text, entry, cursorOffset)

    handleTextChange(nextText.value)
    setFocusPosition(nextText.caretOffset)
    setCursorOffset(nextText.caretOffset)
  }

  function acceptTextSearchResult(query: ClinicalTextSearchQuery, entry: Omit<CodedEntry, 'id' | 'sectionId'>) {
    onAddCode(entry)
    const nextText = replaceTextWithClinicalCodeMarker(section.text, query.start, query.end, entry)

    handleTextChange(nextText.value)
    setFocusPosition(nextText.caretOffset)
    setCursorOffset(nextText.caretOffset)
  }

  function removeCodeFromPane(entryId: string) {
    const entry = codes.find((code) => code.id === entryId)

    if (!entry) {
      onRemoveCode(entryId)
      return
    }

    const nextText = removeClinicalCodeMarkersByCode(section.text, entry.code)

    onTextChange(nextText)
    setCursorOffset(Math.min(cursorOffset, nextText.length))
    onRemoveCode(entryId)
  }

  return (
    <Card className={cn(needsAttention && 'ring-2 ring-amber-300 bg-amber-50/40')} data-section-id={section.id}>
      <CardContent className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,32rem)] lg:items-stretch">
        <div className="grid min-w-0 gap-3 lg:grid-rows-[auto_minmax(10rem,1fr)]" data-consultation-notes-pane>
          <div className="grid min-h-9 auto-rows-min grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1" data-consultation-section-heading>
            <CardTitle>{section.label}</CardTitle>
            <ClinicalBadge data-consultation-section-status tone={missingRequired ? 'warn' : emptyOptional ? 'optional' : 'good'}>
              {missingRequired ? 'Needs entry' : emptyOptional ? 'Optional' : 'Ready'}
            </ClinicalBadge>
          </div>
          <ClinicalTextTextarea
            aria-label={`${section.label} notes`}
            aria-invalid={needsAttention}
            className="min-h-40 resize-y lg:h-full"
            focusPosition={focusPosition}
            onCursorOffsetChange={setCursorOffset}
            placeholder={sectionPlaceholders[section.id]}
            value={section.text}
            onChange={handleTextChange}
          />
        </div>
        <SectionCodingField
          entries={codes}
          frameless
          textCandidates={textCandidates}
          textSearchQuery={textSearchQuery}
          onAcceptTextCandidate={acceptTextCandidate}
          onAcceptTextSearchResult={acceptTextSearchResult}
          onAddCode={addCodeFromSearch}
          onRemoveCode={removeCodeFromPane}
        />
      </CardContent>
    </Card>
  )
}
