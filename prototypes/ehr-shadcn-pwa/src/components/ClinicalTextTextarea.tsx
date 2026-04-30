import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { conceptPillClasses, formatSemanticTag } from '@/lib/clinicalCodeDisplay'
import { segmentClinicalTextTokens } from '@/lib/clinicalTextTokens'
import { cn } from '@/lib/utils'

type ClinicalTextTextareaProps = {
  'aria-invalid'?: boolean
  'aria-label': string
  className?: string
  focusPosition?: number | null
  onChange: (value: string) => void
  onCursorOffsetChange?: (offset: number) => void
  placeholder?: string
  value: string
}

export function ClinicalTextTextarea({ className, focusPosition, onChange, onCursorOffsetChange, placeholder, value, ...props }: ClinicalTextTextareaProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const lastAppliedFocusKeyRef = useRef('')
  const lastInputValueRef = useRef(value)
  const pendingCaretOffsetRef = useRef<number | null>(null)
  const [renderedValue, setRenderedValue] = useState(value)
  const [renderVersion, setRenderVersion] = useState(0)
  const segments = useMemo(() => segmentClinicalTextTokens(renderedValue), [renderedValue])

  useLayoutEffect(() => {
    if (lastInputValueRef.current === value) {
      return
    }

    lastInputValueRef.current = value
    setRenderedValue(value)
    setRenderVersion((current) => current + 1)
  }, [value])

  useLayoutEffect(() => {
    const editor = editorRef.current
    const focusKey = focusPosition !== null && focusPosition !== undefined && renderedValue === value ? `${focusPosition}:${value}` : ''
    const shouldApplyFocusPosition = focusKey.length > 0 && lastAppliedFocusKeyRef.current !== focusKey
    const nextOffset = shouldApplyFocusPosition ? focusPosition : pendingCaretOffsetRef.current

    if (!editor || nextOffset === null || nextOffset === undefined) {
      return
    }

    editor.focus({ preventScroll: true })
    setEditorCaretOffset(editor, nextOffset)
    pendingCaretOffsetRef.current = null
    if (shouldApplyFocusPosition) {
      lastAppliedFocusKeyRef.current = focusKey
    }
  }, [focusPosition, renderedValue, renderVersion, value])

  function handleEditorInput(editor: HTMLDivElement) {
    const nextValue = readEditorValue(editor)

    lastInputValueRef.current = nextValue
    pendingCaretOffsetRef.current = getEditorCaretOffset(editor)
    onChange(nextValue)
    onCursorOffsetChange?.(pendingCaretOffsetRef.current)

    return nextValue
  }

  return (
    <div
      {...props}
      aria-multiline="true"
      className={cn(
        'field-sizing-content relative min-h-16 w-full overflow-auto rounded-lg border border-input bg-transparent px-2.5 pt-2 pb-8 text-base whitespace-pre-wrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        className
      )}
      contentEditable
      data-clinical-text-editor
      data-clinical-text-instruction={placeholder ? `Type: "${placeholder}"` : undefined}
      key={renderVersion}
      onBlur={(event) => {
        const nextValue = readEditorValue(event.currentTarget)
        const nextOffset = getEditorCaretOffset(event.currentTarget)

        lastInputValueRef.current = nextValue
        pendingCaretOffsetRef.current = null
        onChange(nextValue)
        onCursorOffsetChange?.(nextOffset)
        setRenderedValue(nextValue)
        setRenderVersion((current) => current + 1)
      }}
      onInput={(event) => {
        handleEditorInput(event.currentTarget)
      }}
      onKeyUp={(event) => onCursorOffsetChange?.(getEditorCaretOffset(event.currentTarget))}
      onMouseUp={(event) => onCursorOffsetChange?.(getEditorCaretOffset(event.currentTarget))}
      ref={editorRef}
      role="textbox"
      suppressContentEditableWarning
    >
      {segments.map((segment, index) => {
        if (segment.type === 'text') {
          return <span key={`${index}-text`}>{segment.text}</span>
        }

        return (
          <span
            className={cn('inline-flex rounded-full border px-1.5 py-0 font-normal leading-[inherit] text-foreground align-baseline', conceptPillClasses[segment.concept.semanticTag])}
            contentEditable={false}
            data-clinical-code-type={segment.concept.semanticTag}
            data-inline-clinical-code
            data-inline-code-marker={segment.marker}
            data-snomed-code={segment.concept.code}
            key={`${index}-${segment.concept.code}`}
            title={`${segment.concept.display} (${formatSemanticTag(segment.concept.semanticTag)})`}
          >
            {segment.concept.display}
          </span>
        )
      })}
    </div>
  )
}

function getEditorCaretOffset(editor: HTMLElement) {
  const selection = window.getSelection()

  if (!selection || selection.rangeCount === 0) {
    return readEditorValue(editor).length
  }

  const range = selection.getRangeAt(0)
  const offset = getCaretOffsetInsideNode(editor, range.startContainer, range.startOffset)

  return offset ?? readEditorValue(editor).length
}

function readEditorValue(editor: HTMLElement) {
  let text = ''

  editor.childNodes.forEach((node) => {
    if (node instanceof HTMLElement && node.dataset.clinicalTextPlaceholder !== undefined) {
      return
    }

    if (node instanceof HTMLElement && node.dataset.inlineCodeMarker) {
      text += node.dataset.inlineCodeMarker
      return
    }

    text += node.textContent ?? ''
  })

  return text
}

function getNodeMarkerLength(node: ChildNode) {
  if (node instanceof HTMLElement && node.dataset.clinicalTextPlaceholder !== undefined) {
    return 0
  }

  if (node instanceof HTMLElement && node.dataset.inlineCodeMarker) {
    return node.dataset.inlineCodeMarker.length
  }

  return node.textContent?.length ?? 0
}

function setEditorCaretOffset(editor: HTMLElement, offset: number) {
  const selection = window.getSelection()

  if (!selection) {
    return
  }

  if (setCaretOffsetInsideNode(editor, Math.max(0, offset), selection)) {
    return
  }

  selection.setPosition(editor, editor.childNodes.length)
}

function getCaretOffsetInsideNode(node: Node, container: Node, containerOffset: number): number | null {
  if (node instanceof HTMLElement && node.dataset.clinicalTextPlaceholder !== undefined) {
    return null
  }

  if (node === container) {
    if (node.nodeType === Node.TEXT_NODE) {
      return containerOffset
    }

    let offset = 0
    const children = Array.from(node.childNodes)

    for (let index = 0; index < Math.min(containerOffset, children.length); index += 1) {
      offset += getNodeMarkerLength(children[index])
    }

    return offset
  }

  if (!node.contains(container)) {
    return null
  }

  let offset = 0

  for (const child of Array.from(node.childNodes)) {
    const childOffset = getCaretOffsetInsideNode(child, container, containerOffset)

    if (childOffset !== null) {
      return offset + childOffset
    }

    offset += getNodeMarkerLength(child)
  }

  return null
}

function setCaretOffsetInsideNode(node: Node, offset: number, selection: Selection): boolean {
  let remaining = offset
  const children = Array.from(node.childNodes)

  for (const [index, child] of children.entries()) {
    const childLength = getNodeMarkerLength(child)

    if (remaining <= childLength) {
      if (child.nodeType === Node.TEXT_NODE) {
        selection.setPosition(child, remaining)
        return true
      }

      if (child instanceof HTMLElement && (child.dataset.inlineCodeMarker || child.dataset.clinicalTextPlaceholder !== undefined)) {
        selection.setPosition(node, index + (remaining === 0 ? 0 : 1))
        return true
      }

      if (setCaretOffsetInsideNode(child, remaining, selection)) {
        return true
      }

      selection.setPosition(node, index)
      return true
    }

    remaining -= childLength
  }

  return false
}
