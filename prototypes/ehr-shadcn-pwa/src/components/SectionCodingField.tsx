import { useState } from 'react'
import { XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Empty, EmptyDescription } from '@/components/ui/empty'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { codeSuggestions } from '@/data/demo'
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

export function SectionCodingField({ entries, onAddCode, onRemoveCode }: SectionCodingFieldProps) {
  const [open, setOpen] = useState(false)
  const [entryPendingRemoval, setEntryPendingRemoval] = useState<CodedEntry | null>(null)

  return (
    <Card className="border-dashed bg-muted/30 shadow-none" size="sm">
      <CardHeader>
        <CardTitle>Coded content</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" type="button" className="w-full justify-start text-muted-foreground">
              Search SNOMED CT concepts
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
                      <ClinicalBadge className="ml-auto" tone={getPriorityTone(suggestion.priority)}>
                        {formatPriority(suggestion.priority)}
                      </ClinicalBadge>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {entries.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Selected SNOMED CT concepts">
            {entries.map((entry) => (
              <li className="inline-flex items-center gap-1.5 rounded-4xl border bg-background px-2 py-1" key={entry.id}>
                <span className="text-sm font-medium">{entry.display}</span>
                <span className="text-xs text-muted-foreground">{entry.code}</span>
                <ClinicalBadge tone={getPriorityTone(entry.priority)}>{formatPriority(entry.priority)}</ClinicalBadge>
                <Button variant="ghost" size="icon-xs" type="button" aria-label={`Remove ${entry.display}`} onClick={() => setEntryPendingRemoval(entry)}>
                  <XIcon />
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
