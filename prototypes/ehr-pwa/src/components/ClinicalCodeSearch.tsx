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
import type { ConsultationCode } from '../types'

type CodeOption = Omit<ConsultationCode, 'addedAt'>

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
  onAddCode: (code: CodeOption) => void
  onRemoveCode: (codeId: string) => void
}

export function ClinicalCodeSearch({ addedCodes, onAddCode, onRemoveCode }: ClinicalCodeSearchProps) {
  const [query, setQuery] = useState('diabetes')
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
    <section className="panel-card">
      <header>
        <div>
          <h2>Coded entries</h2>
          <p>Selection preview keeps prioritisation and uncertainty visible.</p>
        </div>
      </header>
      <div className="code-search">
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
              onAddCode(selectedCode)
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
        {addedCodes.length > 0 ? (
          <ul className="added-codes" aria-label="Added coded entries">
            {addedCodes.map((code) => (
              <li key={code.id}>
                <button type="button" className="code-chip" onClick={() => onRemoveCode(code.id)}>
                  {code.display} · remove
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
