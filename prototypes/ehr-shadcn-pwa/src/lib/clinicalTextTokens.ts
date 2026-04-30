import type { CodeSuggestion } from '@/types'

const TOKEN_START = '\uE000'
const TOKEN_END = '\uE001'
const TOKEN_PATTERN = /\uE000([^]+)\uE001/g

export type ClinicalTextTokenSegment =
  | {
      text: string
      type: 'text'
    }
  | {
      concept: CodeSuggestion
      marker: string
      type: 'code'
    }

export function createClinicalCodeMarker(concept: CodeSuggestion) {
  return `${TOKEN_START}${encodeURIComponent(JSON.stringify(concept))}${TOKEN_END}`
}

export function getClinicalCodeMarkerLength(concept: CodeSuggestion) {
  return createClinicalCodeMarker(concept).length
}

export function parseClinicalCodeMarker(marker: string): CodeSuggestion | null {
  if (!marker.startsWith(TOKEN_START) || !marker.endsWith(TOKEN_END)) {
    return null
  }

  try {
    return JSON.parse(decodeURIComponent(marker.slice(1, -1))) as CodeSuggestion
  } catch {
    return null
  }
}

export function segmentClinicalTextTokens(value: string): ClinicalTextTokenSegment[] {
  const segments: ClinicalTextTokenSegment[] = []
  let cursor = 0

  for (const match of value.matchAll(TOKEN_PATTERN)) {
    const marker = match[0]
    const index = match.index ?? 0
    const concept = parseClinicalCodeMarker(marker)

    if (index > cursor) {
      segments.push({ text: value.slice(cursor, index), type: 'text' })
    }

    if (concept) {
      segments.push({ concept, marker, type: 'code' })
    } else {
      segments.push({ text: marker, type: 'text' })
    }

    cursor = index + marker.length
  }

  if (cursor < value.length) {
    segments.push({ text: value.slice(cursor), type: 'text' })
  }

  return segments
}

export function clinicalTextToPlainText(value: string) {
  return segmentClinicalTextTokens(value)
    .map((segment) => (segment.type === 'text' ? segment.text : segment.concept.display))
    .join('')
}

export function getClinicalCodeMarkerCodes(value: string) {
  return new Set(
    segmentClinicalTextTokens(value)
      .filter((segment) => segment.type === 'code')
      .map((segment) => segment.concept.code)
  )
}

export function removeClinicalCodeMarkersByCode(value: string, code: string) {
  let nextValue = ''

  for (const segment of segmentClinicalTextTokens(value)) {
    if (segment.type === 'code' && segment.concept.code === code) {
      continue
    }

    const segmentText = segment.type === 'text' ? segment.text : segment.marker
    const hasBoundaryWhitespace = /\s$/.test(nextValue) && /^\s/.test(segmentText)

    nextValue += hasBoundaryWhitespace ? segmentText.replace(/^\s+/, '') : segmentText
  }

  return nextValue.replace(/^\s+/, '').replace(/\s+$/, '')
}

export function insertClinicalCodeMarker(value: string, concept: CodeSuggestion, offset: number) {
  const boundedOffset = Math.max(0, Math.min(offset, value.length))
  const marker = createClinicalCodeMarker(concept)
  const needsLeadingSpace = boundedOffset > 0 && !/\s/.test(value[boundedOffset - 1])
  const needsTrailingSpace = value[boundedOffset] === undefined || !/\s/.test(value[boundedOffset])
  const prefix = needsLeadingSpace ? ' ' : ''
  const suffix = needsTrailingSpace ? ' ' : ''
  const insert = `${prefix}${marker}${suffix}`

  return {
    caretOffset: boundedOffset + insert.length,
    value: `${value.slice(0, boundedOffset)}${insert}${value.slice(boundedOffset)}`,
  }
}

export function replaceTextWithClinicalCodeMarker(value: string, start: number, end: number, concept: CodeSuggestion) {
  const marker = createClinicalCodeMarker(concept)
  const nextCharacter = value[end]
  const suffix = nextCharacter === undefined || !/\s/.test(nextCharacter) ? ' ' : ''

  return {
    caretOffset: start + marker.length + suffix.length,
    value: `${value.slice(0, start)}${marker}${suffix}${value.slice(end)}`,
  }
}
