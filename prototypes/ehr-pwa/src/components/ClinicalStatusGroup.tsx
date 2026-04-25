import type { ReactNode } from 'react'

type ClinicalStatusGroupProps = {
  label: string
  children: ReactNode
}

export function ClinicalStatusGroup({ label, children }: ClinicalStatusGroupProps) {
  return (
    <span className="clinical-status-group" role="group" aria-label={label}>
      {children}
    </span>
  )
}
