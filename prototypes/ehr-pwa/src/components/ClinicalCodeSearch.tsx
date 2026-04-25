import {
  Button as AriaButton,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Text,
  type Key,
} from 'react-aria-components'
import { useMemo, useState } from 'react'
import type { ConsultationCode, ConsultationSection } from '../types'

type CodeOption = Omit<ConsultationCode, 'addedAt' | 'sectionId'>

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
  addedCodes: ConsultationCode[]
  sections: ConsultationSection[]
  onAddCode: (code: CodeOption, sectionId: string) => void
  onRemoveCode: (codeId: string, sectionId: string) => void
}

export function ClinicalCodeSearch({ addedCodes, sections, onAddCode, onRemoveCode }: ClinicalCodeSearchProps) {
  const [query, setQuery] = useState('diabetes')
  const [targetSectionId, setTargetSectionId] = useState('reason')
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)
  const sectionLabels = useMemo(() => new Map(sections.map((section) => [section.id, section.label])), [sections])
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
    <section className="panel-card">
      <header>
        <div>
          <h2>Add coded content</h2>
          <p>Attach structured clinical concepts to the relevant consultation section.</p>
        </div>
        <span className={`state-chip ${addedCodes.length > 0 ? 'good' : ''}`}>
          {addedCodes.length} coded
        </span>
      </header>
      <div className="code-search">
        <label className="section-target-control">
          <span>Add to section</span>
          <select value={targetSectionId} onChange={(event) => setTargetSectionId(event.target.value)}>
            {sections.map((section) => (
              <option value={section.id} key={section.id}>
                {section.label}
              </option>
            ))}
          </select>
        </label>

        <ComboBox<CodeOption>
          aria-label="Search coded entries"
          className="clinical-combobox"
          inputValue={query}
          items={filteredResults}
          menuTrigger="focus"
          onInputChange={setQuery}
          onSelectionChange={(key) => {
            const selectedCode = codeResults.find((result) => result.id === key)

            if (selectedCode) {
              setSelectedKey(key)
              onAddCode(selectedCode, targetSectionId)
            }
          }}
          selectedKey={selectedKey}
        >
          <Label>Search coded entries</Label>
          <Group className="clinical-combobox-group">
            <Input />
            <AriaButton aria-label="Show coded entry options">Options</AriaButton>
          </Group>
          <Text slot="description">
            Results expose prioritisation and ambiguity before the code is added.
          </Text>
          <Popover className="clinical-combobox-popover">
            <ListBox<CodeOption> className="clinical-combobox-list">
              {(result) => (
                <ListBoxItem className="code-result" id={result.id} textValue={`${result.display} ${result.code}`}>
                  <strong>
                    {result.display} ({result.code})
                  </strong>
                  <span>{result.category}</span>
                  <span
                    className={`state-chip ${result.priority === 'ambiguous' ? 'warn' : result.priority === 'prioritised' ? 'good' : ''}`}
                  >
                    {result.priority}
                  </span>
                  <span className="meta">{result.matchReason}</span>
                </ListBoxItem>
              )}
            </ListBox>
          </Popover>
        </ComboBox>

        <section className="selected-code-panel" aria-labelledby="selected-code-heading">
          <h3 id="selected-code-heading">Consultation coded content</h3>
          {addedCodes.length > 0 ? (
            <ul className="added-codes" aria-label="Added coded entries">
              {addedCodes.map((code) => (
                <li className="selected-code-row" key={`${code.sectionId}-${code.id}`}>
                  <span>
                    {code.display}
                    <small>{sectionLabels.get(code.sectionId) ?? 'Section'} · SNOMED CT {code.code}</small>
                  </span>
                  <button
                    type="button"
                    className="compact-button"
                    onClick={() => onRemoveCode(code.id, code.sectionId)}
                    aria-label={`Remove ${code.display} from ${sectionLabels.get(code.sectionId) ?? 'section'}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="meta">No coded content has been attached to the consultation yet.</p>
          )}
        </section>
      </div>
    </section>
  )
}
