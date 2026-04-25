import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { ClinicalAlert } from '../types'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'

type AlertPanelProps = {
  alerts: ClinicalAlert[]
  signingAttempted: boolean
  syncFailed: boolean
}

export function AlertPanel({ alerts, signingAttempted, syncFailed }: AlertPanelProps) {
  const sortedAlerts = [...alerts].sort((first, second) => priorityRank(first.priority) - priorityRank(second.priority))

  return (
    <section className="reference-content" aria-label="Alerts and decision support">
      <header className="reference-header">
        <div>
          <h2>Alerts and decision support</h2>
          <p>Summary-first review with explanation available in context.</p>
        </div>
      </header>
      {signingAttempted && syncFailed ? (
        <Alert className="border-[#e8c06d] bg-[var(--warning-soft)] text-[#593600]">
          <AlertTitle>Sync failure unresolved.</AlertTitle>
          <AlertDescription className="text-[#593600]">Finalization is blocked until local changes can be reconciled.</AlertDescription>
        </Alert>
      ) : null}
      <div className="alert-stack">
        {sortedAlerts.map((alert) => (
          <Card className={alert.priority === 'critical' ? 'border-[#ee9f9a] bg-[var(--critical-soft)]' : undefined} key={alert.id} size="sm">
            <CardHeader>
              <CardTitle>{alert.title}</CardTitle>
              <ClinicalStatusBadge tone={alert.priority}>{alert.priority}</ClinicalStatusBadge>
            </CardHeader>
            <CardContent className="grid gap-2">
              <p>{alert.rationale}</p>
              {alert.relatedAction ? <p className="meta">{alert.relatedAction}</p> : null}
              <ClinicalStatusBadge tone={alert.unresolved ? 'warn' : 'good'}>{alert.unresolved ? 'Unresolved' : 'Reviewed'}</ClinicalStatusBadge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function priorityRank(priority: ClinicalAlert['priority']) {
  switch (priority) {
    case 'critical':
      return 0
    case 'high':
      return 1
    case 'routine':
      return 2
  }
}
