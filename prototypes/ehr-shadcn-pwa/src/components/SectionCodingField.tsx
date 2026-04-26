import { useState } from 'react'
import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Empty, EmptyDescription } from '@/components/ui/empty'
import { Input } from '@/components/ui/input'
import { Popover, PopoverAnchor, PopoverContent } from '@/components/ui/popover'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { codeSuggestions } from '@/data/demo'
import { cn } from '@/lib/utils'
import type { ClinicalTone, CodedEntry } from '@/types'

type SectionCodingFieldProps = {
  entries: CodedEntry[]
  onAddCode: (entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onRemoveCode: (entryId: string) => void
}

function formatPriority(priority: CodedEntry['priority']) {
  return priority.charAt(0).toUpperCase() + priority.slice(1)
}

function getPriorityTone(priority: CodedEntry['priority']): ClinicalTone {
  if (priority === 'prioritised') {
    return 'good'
  }

  if (priority === 'ambiguous') {
    return 'warn'
  }

  return 'neutral'
}

function formatSemanticTag(tag: CodedEntry['semanticTag']) {
  if (tag === 'regime') {
    return 'Regime/therapy'
  }

  return tag.charAt(0).toUpperCase() + tag.slice(1)
}

const conceptPillClasses: Record<CodedEntry['semanticTag'], string> = {
  finding: 'border-sky-100 bg-sky-50/40',
  disorder: 'border-blue-100 bg-blue-50/40',
  procedure: 'border-indigo-100 bg-indigo-50/40',
  observable: 'border-cyan-100 bg-cyan-50/40',
  situation: 'border-lime-100 bg-lime-50/40',
  regime: 'border-violet-100 bg-violet-50/40',
  product: 'border-teal-100 bg-teal-50/40',
}

export function SectionCodingField({ entries, onAddCode, onRemoveCode }: SectionCodingFieldProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [entryPendingRemoval, setEntryPendingRemoval] = useState<CodedEntry | null>(null)
  const normalizedQuery = query.trim().toLowerCase()
  const filteredSuggestions = normalizedQuery
    ? codeSuggestions.filter((suggestion) => {
        return [suggestion.display, suggestion.code, suggestion.system, formatSemanticTag(suggestion.semanticTag), formatPriority(suggestion.priority)]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      })
    : codeSuggestions

  return (
    <Card className="border-dashed bg-muted/30 shadow-none" size="sm">
      <CardHeader>
        <CardTitle>Coded content</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverAnchor asChild>
            <Input
              aria-label="Search SNOMED CT concepts"
              placeholder="Search SNOMED CT concepts"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setOpen(true)
              }}
              onFocus={() => setOpen(true)}
            />
          </PopoverAnchor>
          <PopoverContent align="start" className="max-w-[calc(100vw-2rem)] w-[var(--radix-popover-trigger-width)] p-0">
            <Command shouldFilter={false}>
              <CommandList>
                {filteredSuggestions.length === 0 ? (
                  <CommandEmpty>No matching concepts.</CommandEmpty>
                ) : (
                  <CommandGroup heading="Suggested concepts">
                    <div
                      className="grid grid-cols-[minmax(0,1fr)_7.75rem_6.75rem] items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground"
                      data-snomed-result-header
                    >
                      <span>Concept</span>
                      <span className="text-right" data-snomed-result-header-column="type">
                        Type
                      </span>
                      <span className="text-right" data-snomed-result-header-column="priority">
                        Priority
                      </span>
                    </div>
                    {filteredSuggestions.map((suggestion) => (
                      <CommandItem
                        className="grid! grid-cols-[minmax(0,1fr)_7.75rem_6.75rem] items-center gap-2 [&>svg:last-child]:hidden"
                        key={suggestion.code}
                        value={`${suggestion.display} ${suggestion.code}`}
                        onMouseDown={(event) => event.preventDefault()}
                        onSelect={() => {
                          onAddCode(suggestion)
                          window.setTimeout(() => {
                            setQuery('')
                            setOpen(false)
                          }, 0)
                        }}
                      >
                        <span className="grid min-w-0 gap-0.5">
                          <span className="truncate">{suggestion.display}</span>
                          <span className="truncate text-xs text-muted-foreground">
                            {suggestion.system} {suggestion.code}
                          </span>
                        </span>
                        <span className="flex justify-end" data-snomed-result-column="type">
                          <ClinicalBadge tone={suggestion.semanticTag}>{formatSemanticTag(suggestion.semanticTag)}</ClinicalBadge>
                        </span>
                        <span className="flex justify-end" data-snomed-result-column="priority">
                          <ClinicalBadge tone={getPriorityTone(suggestion.priority)}>{formatPriority(suggestion.priority)}</ClinicalBadge>
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {entries.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Selected SNOMED CT concepts">
            {entries.map((entry) => (
              <li
                className={cn(
                  'inline-grid max-w-full grid-cols-[minmax(0,1fr)_auto_auto_auto_auto] items-center gap-2 rounded-4xl border px-3 py-1',
                  conceptPillClasses[entry.semanticTag]
                )}
                key={entry.id}
              >
                <span className="min-w-0 truncate text-sm leading-5 font-normal" data-snomed-selected-title>
                  {entry.display}
                </span>
                <span className="text-xs leading-5 text-muted-foreground" data-snomed-selected-code>
                  {entry.code}
                </span>
                <ClinicalBadge data-snomed-selected-type tone={entry.semanticTag}>
                  {formatSemanticTag(entry.semanticTag)}
                </ClinicalBadge>
                <ClinicalBadge data-snomed-selected-priority tone={getPriorityTone(entry.priority)}>
                  {formatPriority(entry.priority)}
                </ClinicalBadge>
                <Button
                  className="relative size-3 justify-self-end overflow-visible rounded-full border-0 bg-transparent p-0 text-red-700 hover:bg-transparent hover:text-red-800 active:bg-transparent focus-visible:border-transparent focus-visible:bg-transparent focus-visible:ring-0 before:pointer-events-none before:absolute before:-inset-1.5 before:rounded-full before:border before:border-transparent before:bg-transparent before:transition-colors hover:before:border-red-200 hover:before:bg-red-50 active:before:border-red-200 active:before:bg-red-100 focus-visible:before:border-red-300 focus-visible:before:bg-red-50 [&_svg]:relative [&_svg]:z-10"
                  variant="ghost"
                  size="icon-xs"
                  type="button"
                  aria-label={`Remove ${entry.display}`}
                  onClick={() => setEntryPendingRemoval(entry)}
                >
                  <XIcon strokeWidth={3} />
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <Empty className="min-h-0 items-start gap-0 rounded-lg border bg-background p-3 text-left">
            <EmptyDescription>No codes added.</EmptyDescription>
          </Empty>
        )}
      </CardContent>
      <Dialog open={entryPendingRemoval !== null} onOpenChange={(nextOpen) => !nextOpen && setEntryPendingRemoval(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove coded concept?</DialogTitle>
            <DialogDescription>
              This will remove {entryPendingRemoval ? `${entryPendingRemoval.display} [${entryPendingRemoval.code}]` : 'this concept'} from this consultation section.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              type="button"
              onClick={() => {
                if (entryPendingRemoval) {
                  onRemoveCode(entryPendingRemoval.id)
                  setEntryPendingRemoval(null)
                }
              }}
            >
              Remove concept
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
