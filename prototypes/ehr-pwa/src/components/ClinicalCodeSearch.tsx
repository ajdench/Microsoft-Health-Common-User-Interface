import { useMemo, useState } from 'react'
import type { ConsultationCode } from '../types'

const codeResults: Omit<ConsultationCode, 'addedAt'>[] = [
  {
    id: 'code-1',
    code: '44054006',
    display: 'Type 2 diabetes mellitus',
    category: 'Problem',
    matchReason: 'Prioritised because this is on the active problem list.',
    priority: 'prioritised',
  },
  {
    id: 'code-2',
    code: '38341003',
    display: 'Hypertensive disorder',
    category: 'Problem',
    matchReason: 'Standard match from coded condition set.',
    priority: 'standard',
  },
  {
    id: 'code-3',
    code: '73211009',
    display: 'Diabetes mellitus',
    category: 'Problem',
    matchReason: 'Ambiguous broader term; prefer a more specific code if known.',
    priority: 'ambiguous',
  },
]

type ClinicalCodeSearchProps = {
  addedCodes: ConsultationCode[]
  onAddCode: (code: Omit<ConsultationCode, 'addedAt'>) => void
  onRemoveCode: (codeId: string) => void
}

export function ClinicalCodeSearch({ addedCodes, onAddCode, onRemoveCode }: ClinicalCodeSearchProps) {
  const [query, setQuery] = useState('diabetes')
  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return codeResults
    }

    return codeResults.filter(
      (result) =>
        result.display.toLowerCase().includes(normalizedQuery) ||
        result.code.includes(normalizedQuery) ||
        result.category.toLowerCase().includes(normalizedQuery),
    )
  }, [query])

  return (
    <section className="panel-card">
      <header>
        <div>
          <h2>Coded entries</h2>
          <p>Selection preview keeps prioritisation and uncertainty visible.</p>
        </div>
      </header>
      <div className="code-search">
        <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search coded entries" />
        {filteredResults.map((result) => {
          const selected = addedCodes.some((code) => code.id === result.id)

          return (
            <button
              type="button"
              className="code-result"
              aria-pressed={selected}
              onClick={() => onAddCode(result)}
              key={result.id}
            >
              <strong>
                {result.display} ({result.code})
              </strong>
              <span>{result.category}</span>
              <span className={`state-chip ${result.priority === 'ambiguous' ? 'warn' : result.priority === 'prioritised' ? 'good' : ''}`}>
                {result.priority}
              </span>
              <span className="meta">{result.matchReason}</span>
            </button>
          )
        })}
        {addedCodes.length > 0 ? (
          <ul className="added-codes" aria-label="Added coded entries">
            {addedCodes.map((code) => (
              <li key={code.id}>
                <button type="button" className="code-chip" onClick={() => onRemoveCode(code.id)}>
                  {code.display} · remove
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

