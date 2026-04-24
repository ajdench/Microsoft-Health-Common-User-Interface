import { useCallback, useEffect, useMemo, useState } from 'react'
import { createInitialDraft } from '../data/fakeData'
import { db } from '../data/store'
import type { ConsultationCode, ConsultationDraft, FollowUpTask, PersistenceState } from '../types'

export function useConsultationDraft(patientId: string) {
  const [draft, setDraft] = useState<ConsultationDraft>(() => createInitialDraft(patientId))
  const [isLoading, setIsLoading] = useState(true)
  const [recovered, setRecovered] = useState(false)
  const [storageError, setStorageError] = useState<string>()
  const [isOnline, setIsOnline] = useState(() => navigator.onLine)

  useEffect(() => {
    let cancelled = false

    async function loadDraft() {
      setIsLoading(true)
      setStorageError(undefined)

      try {
        const draftId = `draft-${patientId}`
        const existing = await db.consultationDrafts.get(draftId)
        const nextDraft = existing ?? createInitialDraft(patientId)

        if (!existing) {
          await db.consultationDrafts.put(nextDraft)
        }

        if (!cancelled) {
          setDraft({
            ...nextDraft,
            recoveredAt: existing ? new Date().toISOString() : undefined,
          })
          setRecovered(Boolean(existing))
        }
      } catch (error) {
        if (!cancelled) {
          setStorageError(error instanceof Error ? error.message : 'Unable to load local draft')
          setDraft(createInitialDraft(patientId))
          setRecovered(false)
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    void loadDraft()

    return () => {
      cancelled = true
    }
  }, [patientId])

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }

    function handleOffline() {
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const persistDraft = useCallback(async (nextDraft: ConsultationDraft) => {
    setDraft(nextDraft)
    setStorageError(undefined)

    try {
      await db.consultationDrafts.put(nextDraft)
    } catch (error) {
      setStorageError(error instanceof Error ? error.message : 'Unable to save local draft')
    }
  }, [])

  const updateSection = useCallback(
    (sectionId: string, text: string) => {
      const now = new Date().toISOString()
      const nextDraft: ConsultationDraft = {
        ...draft,
        state: 'savedLocal',
        lastSavedLocalAt: now,
        sections: draft.sections.map((section) =>
          section.id === sectionId
            ? {
                ...section,
                text,
                dirty: true,
                validationState: section.id === 'assessment' || section.id === 'plan' ? (text.trim() ? 'valid' : 'missingRequired') : 'valid',
              }
            : section,
        ),
      }

      void persistDraft(nextDraft)
    },
    [draft, persistDraft],
  )

  const addCode = useCallback(
    (code: Omit<ConsultationCode, 'addedAt'>) => {
      const nextCode: ConsultationCode = { ...code, addedAt: new Date().toISOString() }
      const nextDraft: ConsultationDraft = {
        ...draft,
        state: 'savedLocal',
        codes: draft.codes.some((existing) => existing.id === code.id) ? draft.codes : [...draft.codes, nextCode],
        lastSavedLocalAt: new Date().toISOString(),
      }

      void persistDraft(nextDraft)
    },
    [draft, persistDraft],
  )

  const removeCode = useCallback(
    (codeId: string) => {
      const nextDraft: ConsultationDraft = {
        ...draft,
        state: 'savedLocal',
        codes: draft.codes.filter((code) => code.id !== codeId),
        lastSavedLocalAt: new Date().toISOString(),
      }

      void persistDraft(nextDraft)
    },
    [draft, persistDraft],
  )

  const addTask = useCallback(
    (label: string) => {
      const trimmed = label.trim()

      if (!trimmed) {
        return
      }

      const nextTask: FollowUpTask = {
        id: `task-${crypto.randomUUID()}`,
        label: trimmed,
        dueText: 'Within 2 weeks',
        createdAt: new Date().toISOString(),
      }
      const nextDraft: ConsultationDraft = {
        ...draft,
        state: 'savedLocal',
        tasks: [...draft.tasks, nextTask],
        lastSavedLocalAt: new Date().toISOString(),
      }

      void persistDraft(nextDraft)
    },
    [draft, persistDraft],
  )

  const markPendingSync = useCallback(() => {
    const now = new Date().toISOString()
    const nextDraft: ConsultationDraft = {
      ...draft,
      state: 'pendingSync',
      lastSyncAttemptAt: now,
      lastSavedLocalAt: now,
    }

    void db.syncOutbox.put({
      id: `outbox-${crypto.randomUUID()}`,
      draftId: draft.id,
      action: 'save',
      createdAt: now,
      state: 'pending',
    })
    void persistDraft(nextDraft)
  }, [draft, persistDraft])

  const simulateSyncFailure = useCallback(() => {
    const now = new Date().toISOString()
    const nextDraft: ConsultationDraft = {
      ...draft,
      state: 'syncFailed',
      lastSyncAttemptAt: now,
    }

    void db.syncOutbox.put({
      id: `outbox-${crypto.randomUUID()}`,
      draftId: draft.id,
      action: 'save',
      createdAt: now,
      state: 'failed',
    })
    void persistDraft(nextDraft)
  }, [draft, persistDraft])

  const signDraft = useCallback(() => {
    const now = new Date().toISOString()
    const nextDraft: ConsultationDraft = {
      ...draft,
      state: 'signed',
      lastSyncAttemptAt: now,
    }

    void db.syncOutbox.put({
      id: `outbox-${crypto.randomUUID()}`,
      draftId: draft.id,
      action: 'sign',
      createdAt: now,
      state: 'pending',
    })
    void persistDraft(nextDraft)
  }, [draft, persistDraft])

  const persistenceState: PersistenceState = useMemo(
    () => ({
      isOnline,
      recovered,
      storageError,
    }),
    [isOnline, recovered, storageError],
  )

  return {
    draft,
    isLoading,
    persistenceState,
    updateSection,
    addCode,
    removeCode,
    addTask,
    markPendingSync,
    simulateSyncFailure,
    signDraft,
  }
}

