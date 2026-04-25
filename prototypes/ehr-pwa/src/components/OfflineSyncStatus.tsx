import { Button } from '@/components/ui/button'
import type { ConsultationDraft, PersistenceState } from '../types'
import { ClinicalStatusGroup } from './ClinicalStatusGroup'
import { ClinicalStatusBadge } from './ClinicalStatusBadge'

type OfflineSyncStatusProps = {
  state: PersistenceState
  draft: ConsultationDraft
  onSimulateFailure: () => void
}

export function OfflineSyncStatus({ state, draft, onSimulateFailure }: OfflineSyncStatusProps) {
  const stateTone = draft.state === 'syncFailed' || state.storageError ? 'bad' : draft.state === 'pendingSync' || state.recovered ? 'warn' : 'good'

  return (
    <section className="sync-strip" aria-label="Offline and sync state">
      <ClinicalStatusGroup label="Offline and sync status">
        <ClinicalStatusBadge tone={state.isOnline ? 'good' : 'warn'}>{state.isOnline ? 'Online' : 'Offline'}</ClinicalStatusBadge>
        <ClinicalStatusBadge tone={stateTone}>Draft state: {formatDraftState(draft.state)}</ClinicalStatusBadge>
        {state.recovered ? <ClinicalStatusBadge tone="warn">Recovered local draft</ClinicalStatusBadge> : null}
        {draft.lastSavedLocalAt ? <ClinicalStatusBadge>Local save {formatTime(draft.lastSavedLocalAt)}</ClinicalStatusBadge> : null}
        {state.storageError ? <ClinicalStatusBadge tone="bad">Storage error: {state.storageError}</ClinicalStatusBadge> : null}
      </ClinicalStatusGroup>
      <Button variant="outline" size="sm" type="button" onClick={onSimulateFailure} aria-label="Simulate sync failure">
        Simulate failure
      </Button>
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
