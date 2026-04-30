import { useState } from 'react'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
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
          <div className="grid auto-rows-min grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1" data-tasks-pane-heading>
            <CardTitle>Tasks</CardTitle>
            <ClinicalBadge data-tasks-pane-status tone="good">
              Ready
            </ClinicalBadge>
            <CardDescription className="col-start-1">Actionable follow-up work</CardDescription>
          </div>
          <div className="grid content-start gap-3" data-tasks-entry-pane>
            <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
              <Input aria-label="Task" placeholder="Add task" value={taskText} onChange={(event) => setTaskText(event.target.value)} />
              <Button variant="outline" type="button" onClick={addTask}>
                Add task
              </Button>
            </div>
            {tasks.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label="Tasks">
                {tasks.map((task) => (
                  <li key={task.id}>
                    <ClinicalBadge>{task.label} · {task.dueText}</ClinicalBadge>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <SectionCodingField entries={codes} onAddCode={onAddCode} onRemoveCode={onRemoveCode} />
      </CardContent>
    </Card>
  )
}
