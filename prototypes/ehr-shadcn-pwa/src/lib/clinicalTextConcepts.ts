import { codeSuggestions } from '@/data/demo'
import type { CodeSuggestion } from '@/types'

type ClinicalTermCandidate = {
  concept: CodeSuggestion
  term: string
}

export type ClinicalTextConceptMatch = {
  concept: CodeSuggestion
  start: number
  end: number
  text: string
  term: string
}

export type ClinicalTextSearchQuery = {
  start: number
  end: number
  text: string
}

const conceptAliases: Record<string, string[]> = {
  '44054006': ['type 2 diabetes', 'type ii diabetes', 't2dm'],
  '73211009': ['diabetes'],
  '714628002': ['prediabetes', 'pre diabetes'],
  '80394007': ['hyperglycemia', 'hyperglycaemia', 'high blood glucose'],
  '302866003': ['hypoglycemia', 'hypoglycaemia', 'low blood glucose'],
  '38341003': ['hypertension', 'high blood pressure'],
  '182836005': ['medication review', 'medicines review'],
  '394725008': ['diabetes medication review', 'diabetes medicines review'],
  '170777000': ['diabetic annual review', 'diabetes annual review', 'annual diabetes review'],
  '401191002': ['diabetic foot exam', 'diabetic foot check'],
  '75367002': ['bp'],
  '60621009': ['bmi'],
  '313835008': ['hba1c', 'a1c', 'glycated haemoglobin', 'glycated hemoglobin'],
  '444751005': ['raised hba1c', 'high hba1c', 'hba1c above range'],
  '271075006': ['urine acr', 'acr', 'albumin creatinine ratio', 'albumin/creatinine ratio'],
  '312975006': ['microalbuminuria'],
  '80274001': ['egfr', 'gfr'],
  '863929001': ['low egfr', 'reduced egfr', 'gfr below range'],
  '433144002': ['ckd stage 3', 'stage 3 ckd', 'chronic kidney disease'],
  '127013003': ['diabetic kidney disease', 'diabetic nephropathy'],
  '424736006': ['diabetic neuropathy', 'peripheral neuropathy'],
  '28442001': ['passing urine often', 'polyuria'],
  '309538000': ['numb foot', 'numbness in foot', 'foot numbness'],
  '284350006': ['diabetes diet education', 'diet education'],
  '699826006': ['diabetes lifestyle education', 'lifestyle education'],
  '698472009': ['blood glucose monitoring', 'glucose monitoring', 'self monitoring blood glucose', 'smbg'],
}

const termCandidates: ClinicalTermCandidate[] = codeSuggestions
  .flatMap((concept) => [concept.display, ...(conceptAliases[concept.code] ?? [])].map((term) => ({ concept, term })))
  .sort((left, right) => right.term.length - left.term.length)

export function suggestionMatchesClinicalQuery(suggestion: CodeSuggestion, query: string) {
  return [suggestion.display, suggestion.code, suggestion.system, ...(conceptAliases[suggestion.code] ?? [])].join(' ').toLowerCase().includes(query)
}

function isTermBoundary(text: string, index: number) {
  if (index < 0 || index >= text.length) {
    return true
  }

  return !/[A-Za-z0-9]/.test(text[index])
}

function overlaps(start: number, end: number, matches: ClinicalTextConceptMatch[]) {
  return matches.some((match) => start < match.end && end > match.start)
}

export function identifyClinicalTextConcepts(text: string): ClinicalTextConceptMatch[] {
  const lowerText = text.toLowerCase()
  const matches: ClinicalTextConceptMatch[] = []

  for (const candidate of termCandidates) {
    const lowerTerm = candidate.term.toLowerCase()
    let searchFrom = 0

    while (searchFrom < lowerText.length) {
      const start = lowerText.indexOf(lowerTerm, searchFrom)

      if (start === -1) {
        break
      }

      const end = start + lowerTerm.length

      if (isTermBoundary(text, start - 1) && isTermBoundary(text, end) && !overlaps(start, end, matches)) {
        matches.push({
          concept: candidate.concept,
          end,
          start,
          term: candidate.term,
          text: text.slice(start, end),
        })
      }

      searchFrom = end
    }
  }

  return matches.sort((left, right) => left.start - right.start)
}

export function identifyClinicalTextSearchQuery(text: string, cursorOffset: number): ClinicalTextSearchQuery | null {
  const boundedOffset = Math.max(0, Math.min(cursorOffset, text.length))

  if (boundedOffset === 0 || !/[A-Za-z0-9]/.test(text[boundedOffset - 1])) {
    return null
  }

  let segmentStart = boundedOffset

  while (segmentStart > 0 && !/[\n\r.;,!?()[\]{}]/.test(text[segmentStart - 1])) {
    segmentStart -= 1
  }

  const segment = text.slice(segmentStart, boundedOffset)
  const tokens = Array.from(segment.matchAll(/[A-Za-z0-9]+/g))

  if (tokens.length === 0) {
    return null
  }

  const lastToken = tokens[tokens.length - 1]

  if ((lastToken.index ?? 0) + lastToken[0].length !== segment.length) {
    return null
  }

  for (let tokenCount = Math.min(4, tokens.length); tokenCount > 0; tokenCount -= 1) {
    const firstToken = tokens[tokens.length - tokenCount]
    const start = segmentStart + (firstToken.index ?? 0)
    const query = text.slice(start, boundedOffset).trim().toLowerCase()

    if (query.length >= 2 && codeSuggestions.some((suggestion) => suggestionMatchesClinicalQuery(suggestion, query))) {
      return {
        end: boundedOffset,
        start,
        text: text.slice(start, boundedOffset),
      }
    }
  }

  return null
}
