import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ClinicalTone } from '@/types'
import type { ComponentProps } from 'react'

const toneClasses: Record<ClinicalTone, string> = {
  neutral: 'border-border bg-secondary text-muted-foreground',
  good: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  warn: 'border-amber-200 bg-amber-50 text-amber-800',
  bad: 'border-red-200 bg-red-50 text-red-800',
  critical: 'border-red-200 bg-red-50 text-red-900',
  high: 'border-amber-200 bg-amber-50 text-amber-900',
  routine: 'border-border bg-secondary text-muted-foreground',
  purple: 'border-purple-200 bg-purple-50 text-purple-900',
}

type ClinicalBadgeProps = ComponentProps<typeof Badge> & {
  tone?: ClinicalTone
}

export function ClinicalBadge({ tone = 'neutral', className, ...props }: ClinicalBadgeProps) {
  return <Badge variant="outline" className={cn('font-semibold capitalize', toneClasses[tone], className)} {...props} />
}
