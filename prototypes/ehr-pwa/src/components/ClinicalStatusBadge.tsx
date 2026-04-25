import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type ClinicalStatusTone = 'neutral' | 'good' | 'warn' | 'bad' | 'critical' | 'high' | 'routine'

const toneClasses: Record<ClinicalStatusTone, string> = {
  neutral: 'border-border bg-secondary text-muted-foreground',
  good: 'border-[#a7d8bd] bg-[var(--success-soft)] text-[var(--success)]',
  warn: 'border-[#e8c06d] bg-[var(--warning-soft)] text-[var(--warning)]',
  bad: 'border-[#ee9f9a] bg-[var(--critical-soft)] text-[var(--critical)]',
  critical: 'border-[#ee9f9a] bg-[var(--critical-soft)] text-[#7d1d16]',
  high: 'border-[#e8c06d] bg-[var(--warning-soft)] text-[var(--warning)]',
  routine: 'border-border bg-secondary text-muted-foreground',
}

type ClinicalStatusBadgeProps = ComponentProps<typeof Badge> & {
  tone?: ClinicalStatusTone
}

export function ClinicalStatusBadge({ tone = 'neutral', className, ...props }: ClinicalStatusBadgeProps) {
  return <Badge variant="outline" className={cn('font-bold capitalize', toneClasses[tone], className)} {...props} />
}
