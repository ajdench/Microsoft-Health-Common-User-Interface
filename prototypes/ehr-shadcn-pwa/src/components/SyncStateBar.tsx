import { Button } from '@/components/ui/button'
import { ClinicalBadge } from '@/components/ClinicalBadge'

export function SyncStateBar() {
  return (
    <section className="border-b bg-background" aria-label="Offline and sync state">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Offline and sync status">
          <ClinicalBadge tone="good">Online</ClinicalBadge>
          <ClinicalBadge tone="warn">Draft state: saved locally</ClinicalBadge>
          <ClinicalBadge tone="warn">Recovered local draft</ClinicalBadge>
          <ClinicalBadge>Local save 17:05:52</ClinicalBadge>
        </div>
        <Button variant="outline" size="sm" type="button">
          Simulate failure
        </Button>
      </div>
    </section>
  )
}
