import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { alerts, medications, results } from '@/data/demo'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function ReferencePanel({ className }: { className?: string }) {
  return (
    <aside className={className} data-reference-panel>
      <Card className="h-[325px]" data-mar-card>
        <CardContent className="grid h-full min-h-0 gap-4">
          <Tabs className="h-full min-h-0" defaultValue="medications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            <TabsContent className="min-h-0" value="medications">
              <ReferenceSection
                title="Medication review"
                columnHeader={
                  <ReferenceColumnHeader
                    className="grid-cols-[minmax(11rem,1.6fr)_minmax(5.5rem,0.7fr)_minmax(3.5rem,0.45fr)_minmax(8rem,1fr)_5.5rem]"
                    data-testid="medication-column-header"
                    labels={['Medication', 'Dose', 'Route', 'Frequency', 'State']}
                  />
                }
              >
                <div className="grid gap-2" data-medication-review-list>
                  {medications.map((medication) => (
                    <Card className={cn('min-h-[60px] justify-center gap-0 py-2', medicationCardClasses[medication.status])} size="sm" key={medication.id} data-medication-card>
                      <CardHeader className="grid! grid-cols-[minmax(11rem,1.6fr)_minmax(5.5rem,0.7fr)_minmax(3.5rem,0.45fr)_minmax(8rem,1fr)_5.5rem]! items-center gap-x-3 gap-y-0">
                        <CardTitle className="truncate leading-5">{medication.name}</CardTitle>
                        <span className="truncate text-sm text-foreground" data-medication-dose>
                          {medication.dose}
                        </span>
                        <span className="truncate text-sm text-foreground" data-medication-route>
                          {medication.route}
                        </span>
                        <span className="truncate text-sm text-foreground" data-medication-frequency>
                          {medication.frequency}
                        </span>
                        <CardAction className="col-start-5! row-start-1! self-center! justify-self-end!">
                          <ClinicalBadge tone={medication.status === 'active' ? 'good' : 'neutral'}>{medication.status}</ClinicalBadge>
                        </CardAction>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </ReferenceSection>
            </TabsContent>
            <TabsContent className="min-h-0" value="alerts">
              <ReferenceSection
                title="Alerts and decision support"
                columnHeader={
                  <ReferenceColumnHeader
                    className="grid-cols-[minmax(10rem,0.95fr)_minmax(14rem,1.45fr)_5.75rem]"
                    data-testid="alerts-column-header"
                    labels={['Alert', 'Rationale', 'State']}
                  />
                }
              >
                <div className="grid gap-2" data-alerts-list>
                  {alerts.map((alert) => (
                    <Card className={cn('min-h-[60px] justify-center gap-0 py-2', alertCardClasses[alert.priority])} size="sm" key={alert.id} data-alert-card>
                      <CardHeader className="grid! grid-cols-[minmax(10rem,0.95fr)_minmax(14rem,1.45fr)_5.75rem]! items-center gap-x-3 gap-y-0">
                        <CardTitle className="truncate leading-5">{alert.title}</CardTitle>
                        <span className="truncate text-sm text-foreground" data-alert-rationale>
                          {alert.rationale}
                        </span>
                        <CardAction className="col-start-3! row-start-1! self-center! justify-self-end!">
                          <ClinicalBadge tone={alert.priority}>{alert.priority}</ClinicalBadge>
                        </CardAction>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </ReferenceSection>
            </TabsContent>
            <TabsContent className="min-h-0" value="results">
              <ReferenceSection
                title="Recent results"
                columnHeader={
                  <ReferenceColumnHeader
                    className="grid-cols-[minmax(5.75rem,0.75fr)_minmax(5.5rem,0.9fr)_minmax(7rem,1fr)_5.75rem]"
                    data-testid="results-column-header"
                    labels={['Date', 'Result', 'Value', 'Status']}
                  />
                }
              >
                <div className="grid gap-2" data-results-list>
                  {results.map((result) => (
                    <Card className={cn('min-h-[33px] justify-center gap-0 py-1 data-[size=sm]:py-1', resultCardClasses[result.status])} size="sm" key={result.id} data-result-card>
                      <CardHeader className="grid! grid-cols-[minmax(5.75rem,0.75fr)_minmax(5.5rem,0.9fr)_minmax(7rem,1fr)_5.75rem]! items-center gap-x-3 gap-y-0">
                        <span className="truncate text-sm text-foreground" data-result-date>
                          {result.date}
                        </span>
                        <CardTitle className="truncate leading-5">{result.label}</CardTitle>
                        <span className="truncate text-sm text-foreground" data-result-value>
                          {result.value}
                        </span>
                        <CardAction className="col-start-4! row-start-1! self-center! justify-self-end!">
                          <ClinicalBadge tone={result.status === 'abnormal' ? 'warn' : result.status === 'normal' ? 'good' : 'neutral'}>{result.status}</ClinicalBadge>
                        </CardAction>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </ReferenceSection>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </aside>
  )
}

const alertCardClasses = {
  critical: 'border-red-200 bg-red-50/50',
  high: 'border-amber-200 bg-amber-50/50',
  routine: 'border-border bg-secondary/50',
}

const medicationCardClasses = {
  active: 'border-emerald-200 bg-emerald-50/50',
  stopped: 'border-border bg-secondary/50',
}

const resultCardClasses = {
  abnormal: 'border-amber-200 bg-amber-50/50',
  normal: 'border-emerald-200 bg-emerald-50/50',
  pending: 'border-border bg-secondary/50',
}

function ReferenceColumnHeader({ className, labels, 'data-testid': dataTestId }: { className: string; labels: string[]; 'data-testid': string }) {
  return (
    <div
      className={cn('grid items-center gap-x-3 px-3 text-sm text-muted-foreground', className)}
      data-alerts-column-header={dataTestId === 'alerts-column-header' ? '' : undefined}
      data-medication-column-header={dataTestId === 'medication-column-header' ? '' : undefined}
      data-results-column-header={dataTestId === 'results-column-header' ? '' : undefined}
      data-testid={dataTestId}
    >
      {labels.map((label, index) => (
        <span className={index === labels.length - 1 ? 'justify-self-end' : undefined} key={label}>
          {label}
        </span>
      ))}
    </div>
  )
}

function ReferenceSection({ title, description, columnHeader, children }: { title: string; description?: string; columnHeader?: ReactNode; children: ReactNode }) {
  return (
    <section className="grid h-full min-h-0 grid-rows-[auto_auto_minmax(0,1fr)] gap-3 pt-3" aria-label={title}>
      {columnHeader ?? (description ? <p className="text-sm text-muted-foreground">{description}</p> : null)}
      <Separator />
      {children}
    </section>
  )
}
