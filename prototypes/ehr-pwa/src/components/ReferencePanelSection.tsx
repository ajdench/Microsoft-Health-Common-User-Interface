import type { ReactNode } from 'react'
import { Separator } from '@/components/ui/separator'

type ReferencePanelSectionProps = {
  label: string
  title: string
  description: string
  actions?: ReactNode
  children: ReactNode
}

export function ReferencePanelSection({ label, title, description, actions, children }: ReferencePanelSectionProps) {
  return (
    <section className="reference-content" aria-label={label}>
      <header className="reference-header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {actions ? <div className="reference-actions">{actions}</div> : null}
      </header>
      <Separator className="reference-separator" />
      {children}
    </section>
  )
}
