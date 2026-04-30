import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { SearchIcon, XIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input-group'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ClinicalBadge } from '@/components/ClinicalBadge'
import { codeSuggestions } from '@/data/demo'
import { conceptPillClasses, formatPriority, formatSemanticTag, getConceptTitleClass, getPriorityTone } from '@/lib/clinicalCodeDisplay'
import { suggestionMatchesClinicalQuery, type ClinicalTextConceptMatch, type ClinicalTextSearchQuery } from '@/lib/clinicalTextConcepts'
import { cn } from '@/lib/utils'
import type { CodeSuggestion, CodedEntry } from '@/types'

type SectionCodingFieldProps = {
  entries: CodedEntry[]
  frameless?: boolean
  textCandidates?: ClinicalTextConceptMatch[]
  textSearchQuery?: ClinicalTextSearchQuery | null
  onAcceptTextCandidate?: (match: ClinicalTextConceptMatch) => void
  onAcceptTextSearchResult?: (query: ClinicalTextSearchQuery, entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onAddCode: (entry: Omit<CodedEntry, 'id' | 'sectionId'>) => void
  onRemoveCode: (entryId: string) => void
}

const resultColumnGuideClasses = 'border-l border-dashed border-slate-400/70'

function getExpansionKey(scope: 'result' | 'selected' | 'candidate', code: string) {
  return `${scope}:${code}`
}

function getResultElementId(prefix: string, key: string) {
  return `${prefix}-${key.replace(/[^A-Za-z0-9_-]/g, '-')}`
}

type ExpandableConceptTitleProps = {
  candidateTerm?: boolean
  className?: string
  code: string
  display: string
  expandedKey: string | null
  scope: 'result' | 'selected' | 'candidate'
  titleClassName: string
  onDisclosurePointerDown?: () => void
  onToggle: (key: string) => void
}

function ExpandableConceptTitle({
  candidateTerm = false,
  className,
  code,
  display,
  expandedKey,
  scope,
  titleClassName,
  onDisclosurePointerDown,
  onToggle,
}: ExpandableConceptTitleProps) {
  const titleRef = useRef<HTMLElement | null>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const expansionKey = getExpansionKey(scope, code)
  const isExpanded = expandedKey === expansionKey
  const isExpandable = hasOverflow || isExpanded

  useLayoutEffect(() => {
    const title = titleRef.current

    if (!title || isExpanded) {
      return
    }

    function measureOverflow() {
      if (!title) {
        return
      }

      if (title.clientWidth === 0 || title.clientHeight === 0) {
        return
      }

      setHasOverflow(title.scrollWidth > title.clientWidth + 1 || title.scrollHeight > title.clientHeight + 1)
    }

    measureOverflow()

    const resizeObserver = new ResizeObserver(measureOverflow)
    resizeObserver.observe(title)

    return () => resizeObserver.disconnect()
  }, [display, isExpanded])

  if (!isExpandable) {
    return (
      <span
        className={cn(className, 'block max-w-full', titleClassName)}
        data-clinical-text-candidate-term={candidateTerm ? true : undefined}
        data-snomed-result-title={scope !== 'selected' ? true : undefined}
        data-snomed-selected-title={scope === 'selected' ? true : undefined}
        ref={(node) => {
          titleRef.current = node
        }}
      >
        {display}
      </span>
    )
  }

  return (
    <button
      className={cn(
        className,
        'block max-w-full',
        titleClassName,
        'cursor-pointer appearance-none border-0 bg-transparent p-0 text-left underline decoration-primary/70 underline-offset-2 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
        isExpanded && 'whitespace-normal break-words text-sm'
      )}
      data-clinical-text-candidate-term={candidateTerm ? true : undefined}
      data-snomed-expand-control
      data-snomed-result-title={scope !== 'selected' ? true : undefined}
      data-snomed-selected-title={scope === 'selected' ? true : undefined}
      type="button"
      aria-expanded={isExpanded}
      aria-label={isExpanded ? `Collapse ${display}` : `Show full concept text for ${display}`}
      onPointerDown={(event) => {
        event.stopPropagation()
        onDisclosurePointerDown?.()
      }}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        onToggle(expansionKey)
      }}
      ref={(node) => {
        titleRef.current = node
      }}
    >
      {display}
    </button>
  )
}

export function SectionCodingField({
  entries,
  frameless = false,
  textCandidates = [],
  textSearchQuery = null,
  onAcceptTextCandidate,
  onAcceptTextSearchResult,
  onAddCode,
  onRemoveCode,
}: SectionCodingFieldProps) {
  const fieldRef = useRef<HTMLDivElement>(null)
  const fieldId = useId()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeResult, setActiveResult] = useState({ key: '', passiveSession: '' })
  const [entryPendingRemoval, setEntryPendingRemoval] = useState<CodedEntry | null>(null)
  const [dismissedTextCandidate, setDismissedTextCandidate] = useState({ generation: -1, key: '' })
  const [dismissedTextSearch, setDismissedTextSearch] = useState({ generation: -1, key: '' })
  const [expandedTitleKey, setExpandedTitleKey] = useState<string | null>(null)
  const [textCandidateLifecycle, setTextCandidateLifecycle] = useState({ generation: 0, key: '' })
  const [textSearchLifecycle, setTextSearchLifecycle] = useState({ generation: 0, key: '' })
  const recentSelectionKeyRef = useRef('')
  const suppressCommandSelectionRef = useRef(false)
  const normalizedQuery = query.trim().toLowerCase()
  const textCandidateKey = useMemo(() => textCandidates.map((match) => `${match.start}:${match.end}:${match.concept.code}`).join('|'), [textCandidates])
  const textSearchKey = textSearchQuery ? `${textSearchQuery.start}:${textSearchQuery.end}:${textSearchQuery.text}` : ''

  if (textCandidateLifecycle.key !== textCandidateKey) {
    setTextCandidateLifecycle({
      generation: textCandidateLifecycle.generation + 1,
      key: textCandidateKey,
    })
  }

  if (textSearchLifecycle.key !== textSearchKey) {
    setTextSearchLifecycle({
      generation: textSearchLifecycle.generation + 1,
      key: textSearchKey,
    })
  }

  const textCandidateDismissed =
    dismissedTextCandidate.key === textCandidateKey && dismissedTextCandidate.generation === textCandidateLifecycle.generation
  const textSearchDismissed = dismissedTextSearch.key === textSearchKey && dismissedTextSearch.generation === textSearchLifecycle.generation
  const autoOpenForTextCandidates = textCandidateKey.length > 0 && normalizedQuery.length === 0 && !textCandidateDismissed
  const autoOpenForTextSearch = !autoOpenForTextCandidates && textSearchKey.length > 0 && normalizedQuery.length === 0 && !textSearchDismissed
  const activeQuery = autoOpenForTextSearch ? (textSearchQuery?.text.trim().toLowerCase() ?? '') : normalizedQuery
  const filteredSuggestions = activeQuery
    ? codeSuggestions.filter((suggestion) => {
        return (
          suggestionMatchesClinicalQuery(suggestion, activeQuery) ||
          [formatSemanticTag(suggestion.semanticTag), formatPriority(suggestion.priority)].join(' ').toLowerCase().includes(activeQuery)
        )
      })
    : codeSuggestions
  const showTextCandidateResults = !open && autoOpenForTextCandidates
  const showTextSearchResults = !open && autoOpenForTextSearch
  const searchResults = showTextCandidateResults ? [] : filteredSuggestions
  const hasResults = showTextCandidateResults ? textCandidates.length > 0 : searchResults.length > 0
  const popoverOpen = open || autoOpenForTextCandidates || showTextSearchResults
  const mirroredTextQuery = showTextCandidateResults ? (textCandidates[0]?.text ?? '') : showTextSearchResults ? (textSearchQuery?.text ?? '') : ''
  const displayedQuery = open ? query : mirroredTextQuery
  const keyboardResults = showTextCandidateResults
    ? textCandidates.map((match) => ({
        key: `candidate:${match.start}:${match.end}:${match.concept.code}`,
        match,
        type: 'candidate' as const,
      }))
    : searchResults.map((suggestion) => ({
        key: `result:${suggestion.code}`,
        suggestion,
        type: 'result' as const,
      }))
  const resultListId = `${fieldId}-clinical-code-results`
  const passiveTextResultsOpen = !open && (showTextCandidateResults || showTextSearchResults)
  const passiveResultSessionKey = passiveTextResultsOpen ? `${textCandidateLifecycle.generation}:${textSearchLifecycle.generation}` : ''
  const activeResultOwnsCurrentSession = !passiveTextResultsOpen || activeResult.passiveSession === passiveResultSessionKey
  const defaultActiveResultKey = popoverOpen && keyboardResults.length > 0 ? keyboardResults[0].key : ''
  const currentActiveResultKey =
    activeResultOwnsCurrentSession && keyboardResults.some((item) => item.key === activeResult.key) ? activeResult.key : defaultActiveResultKey
  const activeKeyboardResult = keyboardResults.find((item) => item.key === currentActiveResultKey)
  const activeResultId = activeKeyboardResult ? getResultElementId(fieldId, activeKeyboardResult.key) : undefined

  useEffect(() => {
    if (!expandedTitleKey) {
      return
    }

    function clearExpandedTitle(event: PointerEvent) {
      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      if (target.closest('[data-snomed-expand-control]')) {
        return
      }

      setExpandedTitleKey(null)
    }

    document.addEventListener('pointerdown', clearExpandedTitle)

    return () => document.removeEventListener('pointerdown', clearExpandedTitle)
  }, [expandedTitleKey])

  useEffect(() => {
    if (!activeResultId) {
      return
    }

    document.getElementById(activeResultId)?.scrollIntoView({ block: 'nearest' })
  }, [activeResultId])

  function toggleExpandedTitle(key: string) {
    setExpandedTitleKey((current) => (current === key ? null : key))
  }

  function suppressCommandSelectionOnce() {
    suppressCommandSelectionRef.current = true
    window.setTimeout(() => {
      suppressCommandSelectionRef.current = false
    }, 0)
  }

  function beginSelection(key: string) {
    if (recentSelectionKeyRef.current === key) {
      return false
    }

    recentSelectionKeyRef.current = key
    window.setTimeout(() => {
      if (recentSelectionKeyRef.current === key) {
        recentSelectionKeyRef.current = ''
      }
    }, 0)

    return true
  }

  function acceptTextCandidate(match: ClinicalTextConceptMatch) {
    if (suppressCommandSelectionRef.current) {
      return
    }

    if (!beginSelection(`candidate:${match.start}:${match.end}:${match.concept.code}`)) {
      return
    }

    setQuery('')
    setOpen(false)
    setActiveResult({ key: '', passiveSession: '' })
    setDismissedTextCandidate({ generation: textCandidateLifecycle.generation, key: textCandidateKey })
    onAcceptTextCandidate?.(match)
  }

  function acceptSuggestion(suggestion: CodeSuggestion) {
    if (suppressCommandSelectionRef.current) {
      return
    }

    if (!beginSelection(`suggestion:${suggestion.code}:${showTextSearchResults ? textSearchKey : query}`)) {
      return
    }

    if (showTextSearchResults && textSearchQuery && onAcceptTextSearchResult) {
      onAcceptTextSearchResult(textSearchQuery, suggestion)
    } else {
      onAddCode(suggestion)
    }
    window.setTimeout(() => {
      setQuery('')
      setOpen(false)
      setActiveResult({ key: '', passiveSession: '' })
      setDismissedTextSearch({ generation: textSearchLifecycle.generation, key: textSearchKey })
    }, 0)
  }

  function acceptKeyboardResult(key: string) {
    const result = keyboardResults.find((item) => item.key === key)

    if (!result) {
      return
    }

    if (result.type === 'candidate') {
      acceptTextCandidate(result.match)
    } else {
      acceptSuggestion(result.suggestion)
    }
  }

  function getSectionTextEditor() {
    return fieldRef.current?.closest('[data-section-id]')?.querySelector<HTMLElement>('[data-clinical-text-editor]') ?? null
  }

  function moveActiveResult(direction: 1 | -1, options: { keepPassiveOpen?: boolean } = {}) {
    if (keyboardResults.length === 0) {
      setActiveResult({ key: '', passiveSession: '' })
      return
    }

    const nextPassiveSessionKey = options.keepPassiveOpen ? passiveResultSessionKey : ''

    if (!options.keepPassiveOpen) {
      setOpen(true)
    }

    setActiveResult((current) => {
      const currentKey = current.key || currentActiveResultKey
      const currentIndex = keyboardResults.findIndex((item) => item.key === currentKey)

      if (currentIndex === -1) {
        return {
          key: direction === 1 ? keyboardResults[0].key : keyboardResults[keyboardResults.length - 1].key,
          passiveSession: nextPassiveSessionKey,
        }
      }

      const nextIndex = Math.max(0, Math.min(keyboardResults.length - 1, currentIndex + direction))

      return {
        key: keyboardResults[nextIndex].key,
        passiveSession: nextPassiveSessionKey,
      }
    })
  }

  function handleSearchKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      moveActiveResult(event.key === 'ArrowDown' ? 1 : -1)
      return
    }

    if (event.key !== 'Enter' || !currentActiveResultKey) {
      return
    }

    event.preventDefault()
    acceptKeyboardResult(currentActiveResultKey)
  }

  useEffect(() => {
    const editor = getSectionTextEditor()

    if (!editor) {
      return
    }

    if (!passiveTextResultsOpen) {
      editor.removeAttribute('aria-controls')
      editor.removeAttribute('aria-expanded')
      editor.removeAttribute('aria-activedescendant')
      return
    }

    editor.setAttribute('aria-controls', resultListId)
    editor.setAttribute('aria-expanded', 'true')

    if (activeResultId) {
      editor.setAttribute('aria-activedescendant', activeResultId)
    } else {
      editor.removeAttribute('aria-activedescendant')
    }

    return () => {
      editor.removeAttribute('aria-controls')
      editor.removeAttribute('aria-expanded')
      editor.removeAttribute('aria-activedescendant')
    }
  }, [activeResultId, passiveTextResultsOpen, resultListId])

  useEffect(() => {
    if (!passiveTextResultsOpen || keyboardResults.length === 0) {
      return
    }

    function handlePassiveTextKeyDown(event: globalThis.KeyboardEvent) {
      const editor = getSectionTextEditor()
      const target = event.target

      if (!editor || !(target instanceof Node) || !editor.contains(target)) {
        return
      }

      if (event.altKey || event.ctrlKey || event.metaKey) {
        return
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        event.stopPropagation()
        moveActiveResult(event.key === 'ArrowDown' ? 1 : -1, { keepPassiveOpen: true })
        return
      }

      if (event.key !== 'Enter' || event.shiftKey || !activeKeyboardResult) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      acceptKeyboardResult(activeKeyboardResult.key)
    }

    document.addEventListener('keydown', handlePassiveTextKeyDown, true)

    return () => document.removeEventListener('keydown', handlePassiveTextKeyDown, true)
  }, [acceptKeyboardResult, activeKeyboardResult, keyboardResults.length, moveActiveResult, passiveTextResultsOpen])

  return (
    <Card
      className={cn(frameless ? 'gap-0 overflow-visible rounded-none bg-transparent py-0! shadow-none' : 'border-border bg-muted/20 shadow-xs')}
      size="sm"
      data-section-coding-field
      data-section-coding-field-frameless={frameless ? true : undefined}
      style={frameless ? { boxShadow: 'none' } : undefined}
      ref={fieldRef}
      onPointerDownCapture={(event) => {
        if (!expandedTitleKey || event.target instanceof Element && event.target.closest('[data-snomed-expand-control]')) {
          return
        }

        setExpandedTitleKey(null)
      }}
    >
      <CardContent className={cn('grid', frameless ? 'gap-3 px-0!' : 'gap-2')}>
        <Popover
          open={popoverOpen}
          onOpenChange={(nextOpen) => {
            if (nextOpen && !open && (autoOpenForTextCandidates || autoOpenForTextSearch)) {
              return
            }

            setOpen(nextOpen)
            if (!nextOpen) {
              setDismissedTextCandidate({ generation: textCandidateLifecycle.generation, key: textCandidateKey })
              setDismissedTextSearch({ generation: textSearchLifecycle.generation, key: textSearchKey })
              setActiveResult({ key: '', passiveSession: '' })
            }
          }}
        >
          <PopoverTrigger asChild>
            <InputGroup
              className="h-8 border-primary/40 bg-background shadow-sm"
              data-snomed-search-field
              onClick={(event) => {
                event.preventDefault()
                setOpen(true)
              }}
            >
              <InputGroupAddon align="inline-start">
                <SearchIcon aria-hidden="true" className="size-3.5 -translate-x-px" />
              </InputGroupAddon>
              <InputGroupInput
                className="leading-5"
                aria-label="Add clinical code"
                aria-activedescendant={activeResultId}
                aria-controls={popoverOpen ? resultListId : undefined}
                aria-expanded={popoverOpen}
                placeholder="Add clinical code"
                value={displayedQuery}
                onChange={(event) => {
                  setQuery(event.target.value)
                  setDismissedTextCandidate({ generation: -1, key: '' })
                  setDismissedTextSearch({ generation: -1, key: '' })
                  setActiveResult({ key: '', passiveSession: '' })
                  setOpen(true)
                }}
                onFocus={() => setOpen(true)}
                onKeyDown={handleSearchKeyDown}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupText className="leading-5">SNOMED CT</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="max-w-[calc(100vw-2rem)] w-[var(--radix-popover-trigger-width)] p-0"
            onCloseAutoFocus={(event) => event.preventDefault()}
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <Command shouldFilter={false}>
              <CommandList id={resultListId}>
                {!hasResults ? (
                  <CommandEmpty>No matching concepts.</CommandEmpty>
                ) : (
                  <CommandGroup>
                    <div
                      className="grid grid-cols-[minmax(0,1fr)_7.125rem_5.5rem] items-center gap-3 px-2 py-1 text-xs font-medium text-muted-foreground"
                      data-snomed-result-header
                    >
                      <span>Concept</span>
                      <span className={cn('flex justify-end pr-2', resultColumnGuideClasses)} data-snomed-result-header-column="type">
                        <span data-snomed-result-header-label="type">Type</span>
                      </span>
                      <span className={cn('flex justify-end border-r pr-2', resultColumnGuideClasses)} data-snomed-result-header-column="priority">
                        <span data-snomed-result-header-label="priority">Priority</span>
                      </span>
                    </div>
                    {showTextCandidateResults &&
                      textCandidates.map((match) => {
                        const resultKey = `candidate:${match.start}:${match.end}:${match.concept.code}`
                        const isActiveResult = currentActiveResultKey === resultKey

                        return (
                          <CommandItem
                            className={cn(
                              'grid! items-center gap-3 [&>svg:last-child]:hidden',
                              !isActiveResult && 'data-selected:!bg-transparent data-selected:!text-popover-foreground',
                              isActiveResult && '!bg-muted !text-foreground',
                              expandedTitleKey === getExpansionKey('candidate', match.concept.code) ? 'grid-cols-[minmax(0,1fr)]' : 'grid-cols-[minmax(0,1fr)_7.125rem_5.5rem]'
                            )}
                            data-clinical-text-candidate
                            data-clinical-text-source="free-text"
                            data-snomed-result-active={isActiveResult ? true : undefined}
                            key={`${match.start}-${match.end}-${match.concept.code}`}
                            value={`${match.concept.display} ${match.concept.code} ${match.text}`}
                            onPointerDown={(event) => event.preventDefault()}
                            onPointerMove={() => setActiveResult({ key: resultKey, passiveSession: passiveTextResultsOpen ? passiveResultSessionKey : '' })}
                            onClick={() => acceptTextCandidate(match)}
                            onSelect={() => acceptTextCandidate(match)}
                          >
                            <span className="grid min-w-0 gap-0.5" id={getResultElementId(fieldId, resultKey)}>
                              <ExpandableConceptTitle
                                candidateTerm
                                className="min-w-0"
                                code={match.concept.code}
                                display={match.concept.display}
                                expandedKey={expandedTitleKey}
                                scope="candidate"
                                titleClassName="truncate text-sm font-normal [line-height:1.25rem]"
                                onDisclosurePointerDown={suppressCommandSelectionOnce}
                                onToggle={toggleExpandedTitle}
                              />
                              <span className="truncate text-xs leading-4 text-muted-foreground" data-snomed-result-code>
                                {match.concept.code}
                              </span>
                            </span>
                            {expandedTitleKey !== getExpansionKey('candidate', match.concept.code) && (
                              <>
                                <span className={cn('flex justify-end', resultColumnGuideClasses)} data-snomed-result-column="type">
                                  <ClinicalBadge data-clinical-text-candidate-type data-snomed-result-type tone={match.concept.semanticTag}>
                                    {formatSemanticTag(match.concept.semanticTag)}
                                  </ClinicalBadge>
                                </span>
                                <span className={cn('flex justify-end border-r', resultColumnGuideClasses)} data-snomed-result-column="priority">
                                  <ClinicalBadge data-snomed-result-priority tone={getPriorityTone(match.concept.priority)}>
                                    {formatPriority(match.concept.priority)}
                                  </ClinicalBadge>
                                </span>
                              </>
                            )}
                          </CommandItem>
                        )
                      })}
                    {searchResults.map((suggestion) => {
                      const resultKey = `result:${suggestion.code}`
                      const isActiveResult = currentActiveResultKey === resultKey

                      return (
                        <CommandItem
                          className={cn(
                            'grid! items-center gap-3 [&>svg:last-child]:hidden',
                            !isActiveResult && 'data-selected:!bg-transparent data-selected:!text-popover-foreground',
                            isActiveResult && '!bg-muted !text-foreground',
                            expandedTitleKey === getExpansionKey('result', suggestion.code) ? 'grid-cols-[minmax(0,1fr)]' : 'grid-cols-[minmax(0,1fr)_7.125rem_5.5rem]'
                          )}
                          data-snomed-result-active={isActiveResult ? true : undefined}
                          key={suggestion.code}
                          value={`${suggestion.display} ${suggestion.code}`}
                          onPointerDown={(event) => event.preventDefault()}
                          onPointerMove={() => setActiveResult({ key: resultKey, passiveSession: passiveTextResultsOpen ? passiveResultSessionKey : '' })}
                          onClick={() => acceptSuggestion(suggestion)}
                          onSelect={() => acceptSuggestion(suggestion)}
                        >
                          <span className="grid min-w-0 gap-0.5" id={getResultElementId(fieldId, resultKey)}>
                            <ExpandableConceptTitle
                              className="min-w-0"
                              code={suggestion.code}
                              display={suggestion.display}
                              expandedKey={expandedTitleKey}
                              scope="result"
                              titleClassName="truncate text-sm font-normal [line-height:1.25rem]"
                              onDisclosurePointerDown={suppressCommandSelectionOnce}
                              onToggle={toggleExpandedTitle}
                            />
                            <span className="truncate text-xs leading-4 text-muted-foreground" data-snomed-result-code>
                              {suggestion.code}
                            </span>
                          </span>
                          {expandedTitleKey !== getExpansionKey('result', suggestion.code) && (
                            <>
                              <span className={cn('flex justify-end', resultColumnGuideClasses)} data-snomed-result-column="type">
                                <ClinicalBadge data-snomed-result-type tone={suggestion.semanticTag}>
                                  {formatSemanticTag(suggestion.semanticTag)}
                                </ClinicalBadge>
                              </span>
                              <span className={cn('flex justify-end border-r', resultColumnGuideClasses)} data-snomed-result-column="priority">
                                <ClinicalBadge data-snomed-result-priority tone={getPriorityTone(suggestion.priority)}>
                                  {formatPriority(suggestion.priority)}
                                </ClinicalBadge>
                              </span>
                            </>
                          )}
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {entries.length > 0 && (
          <ul className="grid content-start gap-2" aria-label="Selected SNOMED CT concepts">
            {entries.map((entry) => (
              <li
                className={cn(
                  'grid w-full max-w-full items-center gap-3 rounded-4xl border py-1 pr-3 pl-2',
                  expandedTitleKey === getExpansionKey('selected', entry.code)
                    ? 'grid-cols-[minmax(0,1fr)]'
                    : 'grid-cols-[minmax(0,1fr)_5.75rem_5.5rem_auto] sm:grid-cols-[minmax(0,1fr)_6.75rem_5.5rem_auto]',
                  conceptPillClasses[entry.semanticTag]
                )}
                key={entry.id}
              >
                <ExpandableConceptTitle
                  className="min-w-0"
                  code={entry.code}
                  display={entry.display}
                  expandedKey={expandedTitleKey}
                  scope="selected"
                  titleClassName={getConceptTitleClass()}
                  onToggle={toggleExpandedTitle}
                />
                {expandedTitleKey !== getExpansionKey('selected', entry.code) && (
                  <>
                    <span className="flex justify-end" data-snomed-selected-type-column>
                      <ClinicalBadge data-snomed-selected-type tone={entry.semanticTag}>
                        {formatSemanticTag(entry.semanticTag)}
                      </ClinicalBadge>
                    </span>
                    <span className="flex justify-end" data-snomed-selected-priority-column>
                      <ClinicalBadge data-snomed-selected-priority tone={getPriorityTone(entry.priority)}>
                        {formatPriority(entry.priority)}
                      </ClinicalBadge>
                    </span>
                    <Button
                      className="relative size-3 translate-x-1 justify-self-end overflow-visible rounded-full border-0 bg-transparent p-0 text-red-700 hover:bg-transparent hover:text-red-800 active:bg-transparent focus-visible:border-transparent focus-visible:bg-transparent focus-visible:ring-0 before:pointer-events-none before:absolute before:-inset-1.5 before:rounded-full before:border before:border-transparent before:bg-transparent before:transition-colors hover:before:border-red-200 hover:before:bg-red-50 active:before:border-red-200 active:before:bg-red-100 focus-visible:before:border-red-300 focus-visible:before:bg-red-50 [&_svg]:relative [&_svg]:z-10"
                      variant="ghost"
                      size="icon-xs"
                      type="button"
                      aria-label={`Remove ${entry.display}`}
                      onClick={() => setEntryPendingRemoval(entry)}
                    >
                      <XIcon strokeWidth={3} />
                    </Button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <Dialog open={entryPendingRemoval !== null} onOpenChange={(nextOpen) => !nextOpen && setEntryPendingRemoval(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove coded concept?</DialogTitle>
            <DialogDescription>
              This will remove {entryPendingRemoval ? `${entryPendingRemoval.display} [${entryPendingRemoval.code}]` : 'this concept'} from this consultation section.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              type="button"
              onClick={() => {
                if (entryPendingRemoval) {
                  onRemoveCode(entryPendingRemoval.id)
                  setEntryPendingRemoval(null)
                }
              }}
            >
              Remove concept
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}
