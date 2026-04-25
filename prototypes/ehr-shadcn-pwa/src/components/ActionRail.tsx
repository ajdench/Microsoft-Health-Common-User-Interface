import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ClinicalBadge } from '@/components/ClinicalBadge'

type ActionRailProps = {
  missingRequiredCount: number
}

export function ActionRail({ missingRequiredCount }: ActionRailProps) {
  return (
    <aside className="grid gap-3 lg:sticky lg:top-32">
      <Card>
        <CardHeader>
          <CardTitle>Validation</CardTitle>
          <CardDescription>{missingRequiredCount} required sections incomplete</CardDescription>
          <CardAction>
            <ClinicalBadge tone={missingRequiredCount > 0 ? 'warn' : 'good'}>{missingRequiredCount > 0 ? 'Open' : 'Clear'}</ClinicalBadge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Follow-up tasks</CardTitle>
          <CardDescription>Kept separate from note text.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Input aria-label="Follow-up task" placeholder="Add follow-up task" />
          <ClinicalBadge>Diabetes review in 3 months</ClinicalBadge>
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-2">
        <Button type="button">Save locally</Button>
        <Button variant="outline" type="button" disabled={missingRequiredCount > 0}>
          Sign consultation
        </Button>
      </div>
    </aside>
  )
}
