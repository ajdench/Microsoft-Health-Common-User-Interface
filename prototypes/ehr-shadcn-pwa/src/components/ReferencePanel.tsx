import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { alerts, medications, results } from '@/data/demo'
import type { ReactNode } from 'react'

export function ReferencePanel() {
  return (
    <aside className="lg:sticky lg:top-32">
      <Card>
        <CardContent className="grid gap-4">
          <Tabs defaultValue="medications">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            <TabsContent value="medications">
              <ReferenceSection title="Medication review" description="Dose, route, frequency, and current state stay visible.">
                <div className="grid gap-3">
                  {medications.map((medication) => (
                    <Card size="sm" key={medication.id}>
                      <CardHeader>
                        <CardTitle>{medication.name}</CardTitle>
                        <CardDescription>{medication.frequency}</CardDescription>
                        <CardAction>
                          <ClinicalBadge tone={medication.status === 'active' ? 'good' : 'neutral'}>{medication.status}</ClinicalBadge>
                        </CardAction>
                      </CardHeader>
                      <CardContent className="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1 text-sm">
                        <span className="text-muted-foreground">Dose</span>
                        <strong>{medication.dose}</strong>
                        <span className="text-muted-foreground">Route</span>
                        <span>{medication.route}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ReferenceSection>
            </TabsContent>
            <TabsContent value="alerts">
              <ReferenceSection title="Alerts and decision support" description="High-risk context is available without leaving the consultation.">
                <div className="grid gap-3">
                  {alerts.map((alert) => (
                    <Alert className={alert.priority === 'critical' ? 'border-red-200 bg-red-50' : undefined} key={alert.id}>
                      <AlertTitle className="flex flex-wrap items-center justify-between gap-2">
                        {alert.title}
                        <ClinicalBadge tone={alert.priority}>{alert.priority}</ClinicalBadge>
                      </AlertTitle>
                      <AlertDescription>{alert.rationale}</AlertDescription>
                    </Alert>
                  ))}
                </div>
              </ReferenceSection>
            </TabsContent>
            <TabsContent value="results">
              <ReferenceSection title="Recent results" description="Result state remains attached to the data.">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Result</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell>{result.date}</TableCell>
                        <TableCell>{result.label}</TableCell>
                        <TableCell>{result.value}</TableCell>
                        <TableCell>
                          <ClinicalBadge tone={result.status === 'abnormal' ? 'warn' : result.status === 'normal' ? 'good' : 'neutral'}>{result.status}</ClinicalBadge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ReferenceSection>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </aside>
  )
}

function ReferenceSection({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 pt-3" aria-label={title}>
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Separator />
      {children}
    </section>
  )
}
