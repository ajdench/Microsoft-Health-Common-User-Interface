import type { ClinicalAlert } from '../types'

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
        <section className="clinical-warning" role="alert">
          <strong>Sync failure unresolved.</strong>
          <span>Finalization is blocked until local changes can be reconciled.</span>
        </section>
      ) : null}
      <div className="alert-stack">
        {sortedAlerts.map((alert) => (
          <article className={`alert-card ${alert.priority}`} key={alert.id}>
            <span className={`priority-chip priority-${alert.priority}`}>{alert.priority}</span>
            <h3>{alert.title}</h3>
            <p>{alert.rationale}</p>
            {alert.relatedAction ? <p className="meta">{alert.relatedAction}</p> : null}
            <span className={`state-chip ${alert.unresolved ? 'warn' : 'good'}`}>{alert.unresolved ? 'Unresolved' : 'Reviewed'}</span>
          </article>
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

