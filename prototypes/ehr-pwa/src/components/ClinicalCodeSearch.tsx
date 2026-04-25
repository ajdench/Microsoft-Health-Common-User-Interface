import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { ConsultationCode } from '../types'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'

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
  const [open, setOpen] = useState(false)
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

  function selectCode(code: CodeOption) {
    onAddCode(code, sectionId)
    setQuery('')
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="clinical-combobox">
        <label htmlFor={`${sectionId}-code-search`}>Add coded content</label>
        <PopoverAnchor asChild>
          <div className="clinical-combobox-group">
            <Input
              id={`${sectionId}-code-search`}
              role="combobox"
              aria-label={`Search coded entries for ${sectionLabel}`}
              aria-expanded={open}
              aria-controls={`${sectionId}-code-results`}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setOpen(true)
              }}
              onFocus={() => setOpen(true)}
              placeholder={`Search ${sectionLabel.toLowerCase()} concepts`}
            />
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" type="button" aria-label={`Show coded entry options for ${sectionLabel}`}>
                Codes
              </Button>
            </PopoverTrigger>
          </div>
        </PopoverAnchor>
      </div>
      <PopoverContent className="clinical-combobox-popover p-1" align="start" onOpenAutoFocus={(event) => event.preventDefault()}>
        <Command shouldFilter={false}>
          <CommandList id={`${sectionId}-code-results`} className="clinical-combobox-list">
            <CommandEmpty>No matching coded entries.</CommandEmpty>
            <CommandGroup>
              {filteredResults.map((result) => (
                <CommandItem className="code-result" key={result.id} value={`${result.display} ${result.code}`} onSelect={() => selectCode(result)}>
                  <span>
                    <strong>
                      {result.display} ({result.code})
                    </strong>
                    <small>{result.category}</small>
                    <ClinicalStatusBadge tone={result.priority === 'ambiguous' ? 'warn' : result.priority === 'prioritised' ? 'good' : 'neutral'}>
                      {result.priority}
                    </ClinicalStatusBadge>
                    <small className="meta">{result.matchReason}</small>
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
