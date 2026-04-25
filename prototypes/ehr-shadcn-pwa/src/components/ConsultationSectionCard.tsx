import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { SectionCodingField } from '@/components/SectionCodingField'
import type { CodedEntry, ConsultationSection } from '@/types'

type ConsultationSectionCardProps = {
  section: ConsultationSection
  codes: CodedEntry[]
  onTextChange: (value: string) => void
  onAddCode: (entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onRemoveCode: (entryId: string) => void
}

export function ConsultationSectionCard({ section, codes, onTextChange, onAddCode, onRemoveCode }: ConsultationSectionCardProps) {
  const missingRequired = section.required && section.text.trim().length === 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>{section.label}</CardTitle>
        <CardDescription>{section.required ? 'Required before sign-off' : 'Optional clinical context'}</CardDescription>
        <CardAction>
          <ClinicalBadge tone={missingRequired ? 'warn' : 'good'}>{missingRequired ? 'Needs entry' : 'Ready'}</ClinicalBadge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <SectionCodingField entries={codes} onAddCode={onAddCode} onRemoveCode={onRemoveCode} />
        <Textarea
          aria-label={`${section.label} notes`}
          className="min-h-28 resize-y"
          placeholder={`Add ${section.label.toLowerCase()} notes`}
          value={section.text}
          onChange={(event) => onTextChange(event.target.value)}
        />
      </CardContent>
    </Card>
  )
}
