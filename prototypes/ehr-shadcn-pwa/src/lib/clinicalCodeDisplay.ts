import type { ClinicalTone, CodedEntry } from '@/types'

export function formatPriority(priority: CodedEntry['priority']) {
  return priority.charAt(0).toUpperCase() + priority.slice(1)
}

export function getPriorityTone(priority: CodedEntry['priority']): ClinicalTone {
  if (priority === 'prioritised') {
    return 'good'
  }

  if (priority === 'ambiguous') {
    return 'warn'
  }

  return 'neutral'
}

export function formatSemanticTag(tag: CodedEntry['semanticTag']) {
  if (tag === 'regime') {
    return 'Regime/therapy'
  }

  return tag.charAt(0).toUpperCase() + tag.slice(1)
}

export function getConceptTitleClass() {
  return 'truncate text-sm font-normal [line-height:1.25rem]'
}

export const conceptPillClasses: Record<CodedEntry['semanticTag'], string> = {
  finding: 'border-pink-100 bg-pink-50/40',
  disorder: 'border-blue-100 bg-blue-50/40',
  procedure: 'border-orange-100 bg-orange-50/40',
  observable: 'border-cyan-100 bg-cyan-50/40',
  situation: 'border-lime-100 bg-lime-50/40',
  regime: 'border-violet-100 bg-violet-50/40',
  product: 'border-teal-100 bg-teal-50/40',
}
