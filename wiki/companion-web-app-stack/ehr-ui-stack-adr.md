# ADR: EHR UI Stack Baseline

## Status
Accepted for the current prototype.

This is a companion implementation decision record. It is informed by the
primary Health CUI wiki, but it is not recovered historical Health CUI source
material.

## Context
The target system is a modern EHR-style web application with offline-first
requirements, progressive web app deployment, nominal Microsoft Edge support,
and a possible dedicated Edge-based host for stronger local data preservation.

The Health CUI wiki does not prescribe modern web stacks. It does, however,
create a strong constraint set:

- Patient context must remain visible and hard to confuse.
- Medication, alert, decision-support, and transformed-table states are
  safety-relevant UI contracts.
- Critical data should not be silently truncated.
- Generic controls need domain wrappers and governance rules.
- Source-backed rules, modern inferences, and exploratory extensions should be
  labelled separately.

This ADR chooses a practical baseline stack for first implementation work.

2026-04-25 implementation update: the EHR PWA prototype has moved from custom
CSS and React Aria-led primitives to native shadcn/ui source components on
Radix, Tailwind CSS v4, and app-owned clinical wrappers. The earlier React
Aria/Base UI recommendation remains a valid general option, but it is no longer
the active prototype baseline.

## Decision
Use the following default stack for the clinician-facing EHR web app:

| Concern | Baseline choice |
| --- | --- |
| Language | TypeScript |
| UI runtime | React |
| Build tool | Vite |
| Routing | TanStack Router |
| Tables | TanStack Table |
| UI primitives | Native shadcn/ui source components on Radix |
| Clinical wrappers | Application-owned components over shadcn primitives |
| Microsoft-aligned option | Fluent UI React v9 where Edge/Microsoft 365 familiarity is valuable |
| Styling | Tailwind CSS v4, shadcn theme variables, and clinical CSS custom properties |
| Forms | React Hook Form plus Zod |
| App-shell PWA | Workbox through `vite-plugin-pwa`, with an explicit caching strategy |
| Local structured data | Dexie over IndexedDB |
| Local large/file-like data | OPFS |
| Local relational option | PGlite or SQLite WASM on OPFS when the workflow justifies local SQL |
| Sync model | Explicit local outbox and replay first; evaluate Electric or PowerSync when backend rules are known |
| Dedicated host | WebView2 with custom user data folder plus app-owned backup/storage path |
| Tests | Vitest, Testing Library, Playwright, and axe-core |

## Rationale
React and TypeScript are the lowest-risk baseline for a complex clinical UI
because the ecosystem has strong accessible primitives, table tooling,
form tooling, offline/local-first libraries, and browser automation support.

Vite fits an offline-first PWA because it can produce a static app shell without
making server rendering a dependency of the core clinical workspace.

TanStack Router is preferred because URL search parameters can model filter,
sort, tab, and selection state in a typed way. That matters because the Health
CUI-derived table guidance treats transformed data state as safety-relevant.

TanStack Table is preferred over an opinionated grid at the first stage because
it keeps filter, sort, grouping, pagination, virtualization, and row rendering
under application control. Paid grids such as AG Grid Enterprise or MUI X should
be evaluated only after the prototype exposes real needs for column tooling,
virtualization, export, or large-scale keyboard workflows.

The current prototype uses native shadcn/ui source components because they are
open source, copied into the project, inspectable, and composable. This matches
the need for an AI-readable and locally governed clinical UI layer better than
a closed or black-box component package. Radix owns much of the interaction
mechanics, while application-owned clinical components retain responsibility
for patient safety semantics, density, state visibility, and wording.

The second shadcn pass made the adoption visible rather than only structural:
consultation and action panels now use shadcn `CardHeader`, `CardContent`, and
`CardAction` anatomy; repeated no-data states use compact shadcn `Empty`;
reference tabs use a segmented shadcn `TabsList`; and app surfaces use
shadcn-style rings/shadows while preserving the clinical density contracts.

The next reconciliation step introduced an app-owned `ReferencePanelSection`
over shadcn `Separator` so medications, alerts, and results share the same
right-pane heading, action, divider, and body rhythm. The domain cards now use
native shadcn `CardAction` and `CardDescription` slots for status and secondary
facts rather than local one-off grid header classes.

Dexie over IndexedDB is the default local store because it is pragmatic for
structured browser data. OPFS is the right companion for large files, exports,
attachments, local database files, or other file-like state. Cache API and
service-worker storage are only for app shell and request/response caching, not
canonical clinical data.

WebView2 is the preferred route for a dedicated Edge-based browser because it
allows a controlled host application and custom user data folder. For stronger
"lossless" needs, the WebView2 user data folder is still not enough by itself:
the design should include app-owned storage, backup, export, or sync outside
ordinary browser cache semantics.

## Application-owned clinical components
The design system should expose domain components rather than generic UI kit
surfaces:

| Component | Contract |
| --- | --- |
| `PatientContextShell` | Keeps core identity and high-risk status visible across single-patient workflows. |
| `PatientIdentityBlock` | Renders name, date of birth, identifier, and status without uncontrolled truncation. |
| `MedicationLine` | Preserves medication attribute order, wrapping, dose salience, and current/past state. |
| `MedicationReviewWorkspace` | Supports dense review, safe comparison, and explicit prescribing preview. |
| `ClinicalDataTable` | Shows active filter, sort, grouping, result count, and reset state near the data. |
| `ClinicalFilterSummary` | Keeps transformed-state information attached to the list or table it affects. |
| `AlertPanel` | Groups alerts by priority and keeps rationale accessible without unnecessary modal interruption. |
| `DecisionSupportStatus` | Shows whether decision support is active, unavailable, incomplete, stale, or pending. |
| `OfflineSyncStatus` | Makes local, pending, failed, stale, and reconciled states visible where they affect interpretation. |
| `ConsultationCaptureWorkspace` | Captures notes, codes, observations, orders, plans, and follow-up actions while preserving patient context and draft/sync state. |

These components now use shadcn/ui primitives internally where possible. The
clinical contract belongs to the application, not to shadcn, Radix, TanStack, or
any generic UI primitive.

## First prototype scope
Build one vertical slice before choosing paid infrastructure:

- Single-patient workspace with sticky `PatientContextShell`.
- Consultation capture area with structured sections for reason, history,
  examination, assessment, plan, coded entries, tasks, and follow-up.
- Medication review table using `MedicationLine` renderers.
- Alert side panel with `DecisionSupportStatus`.
- Clinical table with visible filter/sort summary and reset path.
- Offline indicator and local draft persistence through Dexie.
- App-shell caching through Workbox.
- Playwright tests for offline reload, patient context persistence, keyboard
  operation, visible filter/sort state, draft recovery, and no critical
  truncation.

This prototype should deliberately avoid broad EHR scope. The point is to test
the hardest contracts early: patient context, data visibility, local state,
draft safety, and clinical text capture.

## Consultation capture assessment
Health CUI does not currently appear, in this repo, to define a dedicated
consultation note capture component in the way it defines or informs patient
banner, medication, alert, and transformed-table patterns.

However, CUI strongly informs consultation capture indirectly:

- It should run inside a durable single-patient shell so the clinician never
  loses patient context while documenting.
- Draft, saved, signed, amended, offline, pending-sync, failed-sync, and
  reconciled states should be explicit because they change how the note can be
  interpreted.
- If consultation capture embeds filtered lists, previous problems, medications,
  allergies, observations, or search results, the transformed-state rules still
  apply.
- Medication and prescribing actions launched from a consultation should use the
  medication-line and preview/authorization rules rather than generic form rows.
- Alerts and decision-support prompts should be attached to the relevant
  documentation or ordering context, with modal interruption reserved for
  justified high-risk cases.
- Coded entry search should follow the same safety stance as medication search:
  make prioritisation explicit, show disambiguating detail, and avoid hiding
  uncertainty.
- Free-text capture should not become an ungoverned dumping ground. The system
  should expose structured sections, provenance, author/time metadata, amendment
  history, and review/sign-off state.

The resulting component set is therefore:

| Consultation component | CUI-informed responsibility |
| --- | --- |
| `ConsultationCaptureWorkspace` | Owns the overall layout, patient context continuity, draft status, and sign-off flow. |
| `ConsultationSectionEditor` | Provides structured section capture without hiding save/sync/validation state. |
| `ClinicalCodeSearch` | Supports coded entry search with clear prioritisation, disambiguation, and selected-code preview. |
| `EmbeddedClinicalReferencePanel` | Shows prior data with visible filter/sort/recency state. |
| `ConsultationActionTray` | Keeps orders, prescribing, follow-up, and task actions visible but separated from note text. |
| `DraftRecoveryBanner` | Makes recovered, stale, conflicting, or unsynced drafts explicit before editing continues. |
| `SignAndFinalizeDialog` | Confirms finalization only when it is clinically meaningful and shows unresolved warnings. |

This is modern inference. It should be documented and tested as an extension of
CUI principles, not represented as a recovered Health CUI consultation standard.

## Consequences
Positive:

- The stack keeps clinical semantics above UI-library mechanics.
- Offline and PWA behavior can be tested without committing to a server-first
  framework.
- Paid grid or sync tools can be evaluated against real clinical workflow
  pressure rather than abstract feature lists.
- Consultation capture can reuse CUI-informed safety rules without pretending
  that Health CUI directly specified the whole pattern.

Tradeoffs:

- More application-owned components must be designed and tested.
- The team must maintain accessibility, keyboard behavior, and state visibility
  contracts instead of delegating them entirely to a component library.
- Sync and conflict handling remain product architecture decisions, not solved
  by the UI stack alone.
- WebView2 packaging and storage preservation need a separate implementation
  design.

## Follow-up decisions
- ADR for WebView2 host packaging, user data folder location, backup policy, and
  native storage bridge scope.
- ADR for local data schema, draft recovery, sync outbox, conflict visibility,
  and audit-state handling.
- ADR for component library choice after the first prototype compares React
  Aria Components, Base UI, and Radix/shadcn on actual EHR flows.
- ADR for whether a paid grid or paid sync product adds enough value.

## Local source anchors
- [Offline-first PWA stack recommendation](offline-first-pwa-stack-recommendation.md)
- [Patient safety](../concepts/patient-safety.md)
- [Single patient record workflow](../entities/single-patient-record-workflow.md)
- [Clinical data review workflow](../entities/clinical-data-review-workflow.md)
- [Medication review and prescribing workflow](../entities/medication-review-and-prescribing-workflow.md)
- [Health CUI to page templates](../mappings/health-cui-to-page-templates.md)
- [Health CUI to component contracts](../mappings/health-cui-to-component-contracts.md)
- [Health CUI to governance rules](../mappings/health-cui-to-governance-rules.md)
