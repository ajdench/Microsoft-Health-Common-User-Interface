import {
  Button as AriaButton,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  type Key,
} from 'react-aria-components'
import { useMemo, useState } from 'react'
import type { ConsultationCode } from '../types'

export type CodeOption = Omit<ConsultationCode, 'addedAt' | 'sectionId'>

const codeResults: CodeOption[] = [
  {
    id: 'code-1',
    code: '44054006',
    display: 'Type 2 diabetes mellitus',
    category: 'Problem',
    matchReason: 'Prioritised because this is on the active problem list.',
    priority: 'prioritised',
  },
  {
    id: 'code-2',
    code: '38341003',
    display: 'Hypertensive disorder',
    category: 'Problem',
    matchReason: 'Standard match from coded condition set.',
    priority: 'standard',
  },
  {
    id: 'code-3',
    code: '73211009',
    display: 'Diabetes mellitus',
    category: 'Problem',
    matchReason: 'Ambiguous broader term; prefer a more specific code if known.',
    priority: 'ambiguous',
  },
]

type ClinicalCodeSearchProps = {
  sectionId: string
  sectionLabel: string
  onAddCode: (code: CodeOption, sectionId: string) => void
}

export function ClinicalCodeSearch({ sectionId, sectionLabel, onAddCode }: ClinicalCodeSearchProps) {
  const [query, setQuery] = useState('')
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)
  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return codeResults
    }

    return codeResults.filter(
      (result) =>
        result.display.toLowerCase().includes(normalizedQuery) ||
        result.code.includes(normalizedQuery) ||
        result.category.toLowerCase().includes(normalizedQuery),
    )
  }, [query])

  return (
    <ComboBox<CodeOption>
      aria-label={`Search coded entries for ${sectionLabel}`}
      className="clinical-combobox"
      inputValue={query}
      items={filteredResults}
      menuTrigger="focus"
      onInputChange={setQuery}
      onSelectionChange={(key) => {
        const selectedCode = codeResults.find((result) => result.id === key)

        if (selectedCode) {
          setSelectedKey(key)
          onAddCode(selectedCode, sectionId)
          setQuery('')
        }
      }}
      selectedKey={selectedKey}
    >
      <Label>Add coded content</Label>
      <Group className="clinical-combobox-group">
        <Input placeholder={`Search ${sectionLabel.toLowerCase()} concepts`} />
        <AriaButton className="compact-button" aria-label={`Show coded entry options for ${sectionLabel}`}>
          Codes
        </AriaButton>
      </Group>
      <Popover className="clinical-combobox-popover">
        <ListBox<CodeOption> className="clinical-combobox-list">
          {(result) => (
            <ListBoxItem className="code-result" id={result.id} textValue={`${result.display} ${result.code}`}>
              <strong>
                {result.display} ({result.code})
              </strong>
              <span>{result.category}</span>
              <span className={`state-chip ${result.priority === 'ambiguous' ? 'warn' : result.priority === 'prioritised' ? 'good' : ''}`}>
                {result.priority}
              </span>
              <span className="meta">{result.matchReason}</span>
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ComboBox>
  )
}
