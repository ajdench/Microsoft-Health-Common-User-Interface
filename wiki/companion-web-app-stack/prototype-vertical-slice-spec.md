# Prototype Vertical Slice Spec

## Status
Draft build specification.

This page converts the EHR UI stack ADR into a first prototype scope. It is a
modern companion note, not recovered Health CUI source material.

## Goal
Build one offline-capable EHR work surface that proves the hardest UI and data
contracts before choosing broader infrastructure.

The prototype should answer:

- Can a clinician document a consultation without losing patient context?
- Can draft, offline, save, sync, and sign-off state stay visible?
- Can medications, alerts, and reference data be embedded without hiding
  transformed state?
- Can the app recover a local draft after offline reload?
- Can the component stack support dense, accessible clinical workflows without
  silent truncation of critical information?

## Non-goals
Do not build a full EHR.

Out of scope for this prototype:

- real patient data
- real terminology integration
- real prescribing
- real decision support
- multi-user collaboration
- production sync conflict resolution
- WebView2 native host packaging
- paid grid or paid sync product integration

Use realistic fake data and explicit placeholders where production services
would later attach.

## Baseline stack
Use the ADR baseline:

| Concern | Choice |
| --- | --- |
| Runtime | React + TypeScript |
| Build | Vite |
| Router | TanStack Router |
| Tables | TanStack Table |
| UI primitives | Native shadcn/ui source components on Radix |
| Clinical wrappers | App-owned EHR components over shadcn primitives |
| Styling | Tailwind CSS v4, shadcn theme variables, and clinical design tokens |
| Forms | React Hook Form + Zod |
| Local store | Dexie over IndexedDB |
| PWA shell | Workbox through `vite-plugin-pwa` |
| Tests | Vitest, Testing Library, Playwright, axe-core |

## User scenario
A clinician opens a single patient record, reviews active medication and alerts,
documents a consultation, adds one coded entry, records a follow-up task, goes
offline, reloads the app, recovers the draft, and then signs the consultation
after reviewing unresolved warnings.

## Screen shape
Use one primary screen with stable regions:

| Region | Purpose |
| --- | --- |
| Patient context header | Persistent identity and high-risk status. |
| Consultation editor | Structured note capture with section status. |
| Right reference panel | Medication, alerts, and recent clinical data. |
| Action tray | Codes, tasks, orders/prescribing placeholder, save, sign. |
| Offline/sync strip | Visible local persistence and sync state. |

The layout can adapt for narrow screens, but patient context and draft/sync
state must remain visible or immediately restatable.

## Component contracts
### `PatientContextShell`
Responsibilities:

- Keep patient name, date of birth, age, identifier, and status visible.
- Show high-risk states with redundant cues beyond color.
- Preserve identity visibility during consultation editing and panel changes.
- Require explicit confirmation before switching patient while a draft exists.

Acceptance criteria:

- Patient identifier is visible at desktop and tablet widths.
- Patient context remains present after navigation, filtering, drawer opening,
  and offline reload.
- A dirty draft blocks patient switch until the user confirms save/discard.

### `ConsultationCaptureWorkspace`
Responsibilities:

- Own consultation layout, draft status, validation summary, sign-off flow, and
  embedded clinical reference areas.
- Separate note text from actions such as codes, tasks, orders, and follow-up.
- Make author, encounter time, draft timestamp, and sign-off state visible.

Acceptance criteria:

- Draft state is visible without opening a menu.
- Unsaved local changes survive reload while offline.
- Sign-off cannot proceed without surfacing unresolved sync failures or
  critical warnings.

### `ConsultationSectionEditor`
Responsibilities:

- Provide structured sections: reason, history, examination, assessment, plan,
  follow-up.
- Preserve section-level dirty, saved, validation, and collapsed/expanded state.
- Avoid hiding text behind uncontrolled fixed-height boxes.

Acceptance criteria:

- Each section has an explicit saved/draft state.
- Long section text can be reviewed without silent truncation.
- Keyboard users can move through sections and actions predictably.

### `ClinicalCodeSearch`
Responsibilities:

- Support fake coded entry search with prioritised results and disambiguating
  metadata.
- Preview the selected code before adding it to the consultation.
- Keep uncertainty visible when a result is approximate or ambiguous.

Acceptance criteria:

- Search results show code, display term, category, and match reason.
- Prioritised results are visibly labelled as prioritised, not silently promoted.
- Adding a code creates a removable consultation entry with provenance.

### `MedicationLine`
Responsibilities:

- Render active medication with stable ordering, dose salience, status, and
  visible wrapping.
- Preserve separation between medication rows.
- Avoid generic table-cell truncation for medicine name, strength, dose, route,
  frequency, and status.

Acceptance criteria:

- Dose remains easy to find at narrow widths.
- Long medicine names wrap instead of disappearing.
- Active, stopped, and historical states are distinguishable by text and visual
  treatment.

### `ClinicalDataTable`
Responsibilities:

- Show reference data in a table where filters, sort order, grouping, and result
  count are visible near the affected data.
- Keep reset controls close to transformed state.
- Support keyboard-efficient review.

Acceptance criteria:

- Applying a filter creates a visible `ClinicalFilterSummary`.
- Sort direction is visible in the header.
- Reset returns the table to the unfiltered state and updates result count.

### `AlertPanel`
Responsibilities:

- Show active fake alerts grouped by priority.
- Keep rationale and related data accessible.
- Use blocking dialogs only for the sign-off moment or explicitly high-risk
  unresolved warnings.

Acceptance criteria:

- High-priority alerts are visible in the reference panel by default.
- Alert rationale can be expanded without losing patient or draft context.
- Sign-off shows unresolved critical alerts before finalization.

### `OfflineSyncStatus`
Responsibilities:

- Show online/offline, local draft saved, pending sync, failed sync, and
  recovered draft states.
- Keep storage errors visible.
- Avoid toast-only persistence feedback.

Acceptance criteria:

- Going offline changes visible state.
- Reloading while offline restores the draft and shows recovered status.
- Simulated sync failure remains visible until resolved or dismissed with an
  explicit reason.

## Data model sketch
Use fake deterministic data with stable IDs.

```ts
type Patient = {
  id: string;
  displayName: string;
  dateOfBirth: string;
  ageText: string;
  identifier: string;
  sexOrGender: string;
  statusFlags: PatientStatusFlag[];
};

type ConsultationDraft = {
  id: string;
  patientId: string;
  encounterStartedAt: string;
  authorName: string;
  state: "draft" | "savedLocal" | "pendingSync" | "syncFailed" | "signed";
  sections: ConsultationSection[];
  codes: ConsultationCode[];
  tasks: FollowUpTask[];
  lastSavedLocalAt?: string;
  lastSyncAttemptAt?: string;
  recoveredAt?: string;
};

type ConsultationSection = {
  id: string;
  label: string;
  text: string;
  dirty: boolean;
  validationState: "valid" | "missingRequired" | "warning";
};

type Medication = {
  id: string;
  name: string;
  strength: string;
  dose: string;
  route: string;
  frequency: string;
  status: "active" | "stopped" | "historical";
  startedOn?: string;
  stoppedOn?: string;
};

type ClinicalAlert = {
  id: string;
  priority: "critical" | "high" | "routine";
  title: string;
  rationale: string;
  relatedAction?: string;
  unresolved: boolean;
};
```

Dexie stores:

- `patients`
- `consultationDrafts`
- `medications`
- `alerts`
- `referenceRows`
- `syncOutbox`
- `appEvents`

## Routes
Minimal route set:

| Route | Purpose |
| --- | --- |
| `/` | Redirect to the fake patient workspace. |
| `/patients/$patientId/consultation` | Main vertical slice. |
| `/patients/$patientId/consultation?panel=medications` | Opens medication reference panel. |
| `/patients/$patientId/consultation?panel=alerts` | Opens alert reference panel. |
| `/patients/$patientId/consultation?filter=abnormal` | Demonstrates URL-visible transformed state. |

Route/search state should model UI state that affects interpretation. Purely
temporary editor cursor state should remain local.

## Offline and persistence behavior
Prototype the following:

1. App shell loads once online, then reloads offline.
2. Consultation draft autosaves to IndexedDB.
3. Offline reload restores patient context and draft.
4. Recovered draft state is visible before editing continues.
5. A fake outbox entry is created on save/sign.
6. A simulated sync failure remains visible and blocks silent finalization.

Use Workbox for app-shell and asset caching only. Do not store consultation
content in Cache API.

## Acceptance test matrix
| Area | Test |
| --- | --- |
| Patient context | Identity remains visible during editing, panel changes, and reload. |
| Draft recovery | Offline reload restores note text and shows recovered draft state. |
| Patient switch | Dirty draft requires explicit save/discard/switch decision. |
| Consultation sections | Long text remains reviewable without silent truncation. |
| Code search | Prioritised and ambiguous fake code results are labelled. |
| Medication display | Long medication names and dose strings wrap safely. |
| Alerts | Critical unresolved alert appears before sign-off. |
| Table state | Filter, sort, result count, and reset controls are visible near table. |
| Sync state | Pending and failed sync states are visible outside toast history. |
| Accessibility | Core workflow passes keyboard path and axe checks. |
| PWA | App reloads offline after first online visit. |

## Design tokens needed
Start with semantic tokens rather than brand tokens:

- `patient-context.*`
- `patient-status.*`
- `consultation-draft.*`
- `sync-state.*`
- `alert-priority.*`
- `medication-emphasis.*`
- `clinical-density.*`
- `data-state.filtered.*`
- `data-state.sorted.*`
- `focus-ring.*`

Each token should map to visual treatment and, where appropriate, layout or
visibility behavior. Color alone is not sufficient for clinical state.

## Implementation phases
### Phase 1: Static clinical shell
- Build fake data.
- Build `PatientContextShell`.
- Build consultation layout regions.
- Build basic token CSS.

### Phase 2: Draft persistence
- Add Dexie schema.
- Autosave consultation sections.
- Restore draft after reload.
- Show `OfflineSyncStatus`.

### Phase 3: Reference panels
- Add medications with `MedicationLine`.
- Add alerts with `AlertPanel`.
- Add transformed clinical table with `ClinicalFilterSummary`.

### Phase 4: Consultation actions
- Add fake `ClinicalCodeSearch`.
- Add follow-up task capture.
- Add sign/finalize flow and unresolved-warning review.

### Phase 5: PWA and tests
- Add Workbox app-shell caching.
- Add Playwright offline tests.
- Add axe checks.
- Add formatter/unit tests for medication and state rendering.

## Review questions after prototype
- Did React Aria/Base UI provide enough primitive coverage, or did Radix/shadcn
  speed up delivery without weakening contracts?
- Did TanStack Table remain controllable enough for clinical state visibility?
- Did Dexie handle draft persistence cleanly enough, or is local SQL needed?
- Which states were hardest to make visible: draft, sync, filter, alert, or
  patient-switch state?
- Is a paid grid or sync library justified by observed friction?
- What additional requirements emerge for WebView2 packaging and app-owned
  backup storage?

## Local source anchors
- [ADR: EHR UI stack baseline](ehr-ui-stack-adr.md)
- [Offline-first PWA stack recommendation](offline-first-pwa-stack-recommendation.md)
- [Patient safety](../concepts/patient-safety.md)
- [Patient banner checklist](../entities/patient-banner-checklist.md)
- [Medication line checklist](../entities/medication-line-checklist.md)
- [Clinical table state checklist](../entities/clinical-table-state-checklist.md)
- [Alerting checklist](../entities/alerting-checklist.md)
