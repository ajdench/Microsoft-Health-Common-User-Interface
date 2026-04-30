import { useState } from 'react'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SectionCodingField } from '@/components/SectionCodingField'
import type { CodedEntry, FollowUpTask } from '@/types'

type TasksPaneProps = {
  tasks: FollowUpTask[]
  onAddTask: (label: string) => void
  codes: CodedEntry[]
  onAddCode: (entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onRemoveCode: (entryId: string) => void
}

export function TasksPane({ tasks, onAddTask, codes, onAddCode, onRemoveCode }: TasksPaneProps) {
  const [taskText, setTaskText] = useState('')

  function addTask() {
    onAddTask(taskText)
    setTaskText('')
  }

  return (
    <Card data-tasks-pane>
      <CardContent className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(28rem,32rem)] lg:items-stretch">
        <div className="grid min-w-0 gap-3 lg:grid-rows-[auto_minmax(10rem,1fr)]" data-tasks-list-pane>
          <div className="grid min-h-8 auto-rows-min grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1" data-tasks-pane-heading>
            <CardTitle>Tasks</CardTitle>
            <ClinicalBadge data-tasks-pane-status tone="good">
              Ready
            </ClinicalBadge>
          </div>
          <div className="grid content-start gap-3" data-tasks-entry-pane>
            <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
              <Input
                aria-label="Actionable follow-up task"
                placeholder="Add actionable follow-up task"
                value={taskText}
                onChange={(event) => setTaskText(event.target.value)}
              />
              <Button variant="outline" type="button" onClick={addTask}>
                Add actionable follow-up task
              </Button>
            </div>
            {tasks.length > 0 && (
              <ul className="grid gap-2" aria-label="Tasks">
                {tasks.map((task) => (
                  <li
                    className="grid w-full max-w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-4xl border border-border bg-background py-1 pr-3 pl-2"
                    data-task-result-shell
                    key={task.id}
                  >
                    <span className="min-w-0 truncate text-sm leading-5 text-foreground">{task.label}</span>
                    <ClinicalBadge>{task.dueText}</ClinicalBadge>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <SectionCodingField entries={codes} frameless onAddCode={onAddCode} onRemoveCode={onRemoveCode} />
      </CardContent>
    </Card>
  )
}
