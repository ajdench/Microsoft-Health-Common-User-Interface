import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { codeSuggestions } from '@/data/demo'
import type { CodedEntry } from '@/types'

type SectionCodingFieldProps = {
  entries: CodedEntry[]
  onAddCode: (entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onRemoveCode: (entryId: string) => void
}

export function SectionCodingField({ entries, onAddCode, onRemoveCode }: SectionCodingFieldProps) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="border-dashed bg-muted/30 shadow-none" size="sm">
      <CardContent className="grid gap-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm font-medium">Coded content</div>
          <ClinicalBadge tone={entries.length > 0 ? 'good' : 'neutral'}>{entries.length} coded</ClinicalBadge>
        </div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" type="button" className="w-fit">
              Add coded content
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-[min(28rem,calc(100vw-2rem))] p-0">
            <Command>
              <CommandInput placeholder="Search SNOMED CT concepts..." />
              <CommandList>
                <CommandEmpty>No matching concepts.</CommandEmpty>
                <CommandGroup heading="Suggested concepts">
                  {codeSuggestions.map((suggestion) => (
                    <CommandItem
                      key={suggestion.code}
                      value={`${suggestion.display} ${suggestion.code}`}
                      onSelect={() => {
                        onAddCode(suggestion)
                        setOpen(false)
                      }}
                    >
                      <span className="grid gap-0.5">
                        <span>{suggestion.display}</span>
                        <span className="text-xs text-muted-foreground">
                          {suggestion.system} {suggestion.code}
                        </span>
                      </span>
                      <ClinicalBadge className="ml-auto" tone={suggestion.priority === 'ambiguous' ? 'warn' : suggestion.priority === 'prioritised' ? 'good' : 'neutral'}>
                        {suggestion.priority}
                      </ClinicalBadge>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {entries.length > 0 ? (
          <ul className="grid gap-2">
            {entries.map((entry) => (
              <li className="flex flex-wrap items-center justify-between gap-2 rounded-lg border bg-background p-2" key={entry.id}>
                <span className="grid gap-0.5">
                  <strong className="text-sm">{entry.display}</strong>
                  <span className="text-xs text-muted-foreground">
                    {entry.system} {entry.code}
                  </span>
                </span>
                <Button variant="ghost" size="sm" type="button" onClick={() => onRemoveCode(entry.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No codes added.</p>
        )}
      </CardContent>
    </Card>
  )
}
