import type { ConsultationDraft, PersistenceState } from '../types'

type OfflineSyncStatusProps = {
  state: PersistenceState
  draft: ConsultationDraft
  onSimulateFailure: () => void
}

export function OfflineSyncStatus({ state, draft, onSimulateFailure }: OfflineSyncStatusProps) {
  const stateClass = draft.state === 'syncFailed' || state.storageError ? 'bad' : draft.state === 'pendingSync' || state.recovered ? 'warn' : 'good'

  return (
    <section className="sync-strip" aria-label="Offline and sync state">
      <div className="sync-items">
        <span className={`state-chip ${state.isOnline ? 'good' : 'warn'}`}>{state.isOnline ? 'Online' : 'Offline'}</span>
        <span className={`state-chip ${stateClass}`}>Draft state: {formatDraftState(draft.state)}</span>
        {state.recovered ? <span className="state-chip warn">Recovered local draft</span> : null}
        {draft.lastSavedLocalAt ? <span className="state-chip">Local save {formatTime(draft.lastSavedLocalAt)}</span> : null}
        {state.storageError ? <span className="state-chip bad">Storage error: {state.storageError}</span> : null}
      </div>
      <button className="compact-button" type="button" onClick={onSimulateFailure} aria-label="Simulate sync failure">
        Simulate failure
      </button>
    </section>
  )
}

function formatDraftState(state: ConsultationDraft['state']) {
  switch (state) {
    case 'savedLocal':
      return 'saved locally'
    case 'pendingSync':
      return 'pending sync'
    case 'syncFailed':
      return 'sync failed'
    case 'signed':
      return 'signed'
    case 'draft':
      return 'draft'
  }
}

function formatTime(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(value))
}
