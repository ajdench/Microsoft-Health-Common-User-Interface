# EHR shadcn V2 Prototype

This page records the architectural pivot from the first EHR PWA prototype to a
clean shadcn-native V2 prototype.

It is companion-stack synthesis, not recovered Health CUI source material.

## Why V2 Exists
The first prototype was useful. It proved and refined the clinical contracts:

- persistent patient identity
- persistent online/local draft/sync state
- section-local coded content
- validation attached to the consultation banner
- follow-up narrative captured as the final consultation section after Plan
- a distinct bottom Tasks pane for actionable follow-up work
- top full-width medications, alerts, and results
- spacing governance and browser layout checks

The later shadcn migration also showed a limit: the app was increasingly
fighting old markup, old CSS hooks, and layout assumptions. Continuing to
reshape V1 would mix design-system learning with migration cleanup.

V2 therefore keeps V1 as evidence and creates a clean implementation target.

## Prototype Location
`prototypes/ehr-shadcn-pwa/`

The new prototype starts from native shadcn/ui source components and app-owned
clinical wrappers. It reuses the clinical data shape and lessons, not the old
UI class structure.

## Initial V2 Contracts
| Surface | V2 direction |
| --- | --- |
| Patient identity | `PatientChrome`, persistent top clinical anchor |
| Sync/local state | `SyncStateBar`, always visible below patient chrome |
| Consultation section | `ConsultationSectionCard`, shadcn `Card` anatomy |
| Section coding | `SectionCodingField`, SNOMED CT searchbar composed with shadcn `InputGroup` + `Popover` + `Command`, concept pills, confirmation `Dialog` |
| Validation/actions | Consultation banner `CardAction`; status pills above matching same-width buttons |
| Follow-up | Final narrative consultation section after Plan |
| Tasks | Bottom shadcn `Card` using the same split body as consultation sections, with actionable follow-up task entry on the left and frameless task-local SNOMED CT coding on the right |
| Reference context | `ReferencePanel`, shadcn `Tabs`, compact shadcn `Card` rows, and `ClinicalBadge` state pills |

## First Implementation
The first V2 implementation creates a consultation capture page with:

- patient chrome
- sync-state bar
- consultation sections with a split desktop body: free-text notes on the left
  and section-local coded content on the right, with a single-column fallback on
  narrower screens
- fixture-backed clinical-code identification from consultation note text,
  rendered through the same section-local clinical-code results popover as
  search results and accepted into both the body text as inline concept pills
  and the section coded-content list
- validation, local-save state, and signature state as top consultation-banner
  pills with matching action buttons below
- follow-up narrative as the final consultation section after Plan
- a bottom Tasks pane after Follow-up, keeping actionable work separate from
  free-text note content while using the same left-entry/right-coding card
  layout as consultation sections
- medication, alert, and results reference tabs, ordered full-width above
  consultation capture at every viewport size with a fixed MAR pane height and
  visible identity carried by the shadcn tab labels rather than repeated panel
  headings. The column header row sits directly below each tab panel: medication
  reference cards align to Medication, Dose, Route, Frequency, and State with
  state-matched row colour; alert reference cards align to Alert, Rationale,
  and State with state-matched row colour; and result reference cards align to
  Date, Result, Value, and Status with status-matched row colour. The demo result set includes diabetes-relevant
  abnormal, normal, and pending entries, including a normal `Body mass index`
  row that matches the SNOMED CT concept fixture. Result cards keep a smaller
  row treatment than medication and alert rows, but are explicitly sized so five
  results fill the fixed MAR list area without changing the overall pane height.
  Header and row grids share the same inset, track definitions, and fixed
  terminal status columns so values sit directly below their corresponding
  titles. Item-card contents are vertically centred within the row cards.
- unit and Playwright layout tests

## Native shadcn Hygiene
The initial scaffold copied some V1 package dependencies for speed. These have
now been removed where V2 does not use them directly:

- `@tanstack/react-router`
- `@tanstack/react-table`
- `dexie`
- `react-aria-components`
- `react-hook-form`
- `zod`

The visible app surfaces now use shadcn source components plus app-owned
clinical wrappers. Remaining `zod` references in `package-lock.json` are
transitive tooling dependencies, not V2 application imports.

The consultation page header was also converted from a hand-styled header box to
shadcn `Card`, `CardHeader`, `CardTitle`, and `CardDescription` composition.
Card titles and reference section titles now use the normal app text size with
subtitle weight and foreground colour, so they remain black but no longer read
as oversized headings.

Section-local coded content does not render repeated no-code empty boxes. Empty
coded sections show only the SNOMED CT concept searchbar until concepts are
selected, reducing visual noise across the consultation stack.

Consultation section bodies now separate capture modes into a two-column
desktop layout: the free-text note remains on the left for narrative entry,
while section-local coded content sits on the right as a first-class structured
capture surface. This keeps coded content attached to the relevant section
without making it compete vertically with the note text; narrower viewports
collapse back to one column. The right coded-content pane uses a wider fixed
range so selected SNOMED concept pills remain readable at the desktop split.
Section title and the status pill now live in the left notes pane, with the
older `Required before sign-off` and `Optional clinical context` subtext removed
from every consultation section. Empty optional sections show an `Optional` pill
in the `#80adce` blue family; once any note text is entered, the section switches
to the green `Ready` status. This lets coded content begin at the top of the
right pane instead of below a full-width section header.

The consultation clinical-code pane no longer uses an extra framed parent box.
Its `Add clinical code` searchbar sits directly on the right-pane margins, and
it is the topmost element against the coding pane top margin. Selected SNOMED
concept pills begin below it on the same vertical rail as the free-text note
editor. The framed muted coding surface remains available where a separate
standalone pane is still useful, such as the Tasks pane.

The note field is now a token-aware clinical text editor rather than a native
textarea. A deterministic fixture-backed recogniser identifies conservative
matches, such as `Medication review`, `diabetes`, and `t2dm`, and places those
matches into the section-local clinical-code results popover as selectable
result rows. The editor also turns the current typed span into a live search
query where it matches the demo code list, so partial text such as `diab` shows
filtered code results while the clinician types. This is intentionally not
autocomplete: typed text stays as typed until the clinician selects a result.
The section `Add clinical code` field can mirror the current recognised typed
span so the search target is visible, but that mirror is passive display state:
focus remains in the note editor, continued typing is uninterrupted, and no
code is added until a result row is explicitly selected.
Accepting a text-derived result replaces the source phrase or typed query span
with a non-editable inline concept pill, adds the same concept to the section
coded-content list, inserts a trailing space when needed, and returns the caret
to the next typing position. Selecting a concept from search also inserts the
inline pill at the current editor caret and adds the concept to the coded list.
The inline note token and the section coded-content pill are now paired:
deleting the inline token removes the corresponding selected code from that
section, while removing the selected code with the pane `x` also removes the
inline note token that produced it. This keeps the narrative representation and
the structured section coding list from drifting apart. The dismissal state for
a text-derived result is also scoped to the active typed span only; once the
inline token or source text has been deleted, retyping the same clinical phrase
can open the clinical-code results again.
Inline pills, text-derived result rows, selected concept pills, and
code-search type badges share the same semantic type colour families so
disorders, procedures, findings, observables, situations, regimes/therapies,
and products remain visually distinct.

The consultation sections no longer start with seeded clinical text. They show
visual example instructions, such as `Type: "Diabetes medication review and
diabetic annual review."`, with the example phrase styled in grey italic text.
Subsequent sections use similarly short diabetes-review prompts: history uses `Polyuria
and foot numbness.`, examination uses `BP, BMI and diabetic foot check.`,
assessment uses `Type 2 diabetes with raised HbA1c.`, plan uses `Diabetes
medication review and diet education.`, and follow-up uses `HbA1c, eGFR and
urine ACR.`. These instructions are anchored to the bottom of the note editor
and remain visible when the field is focused, filled, or resized. They are not
part of the editor value, do not count for required-section validation, and are
ignored by the free-text concept recogniser, so the initial consultation state
correctly reports required sections incomplete until the clinician enters real
content.

The demo consultation also no longer seeds selected clinical-code entries. Each
section starts with only the `Add clinical code` searchbar; selected concept
pills appear only after explicit selection from section-local search or a
text-derived result row.

Section coding now presents the entry point as a real SNOMED CT concept
searchbar labelled `Add clinical code`, composed as a shadcn `InputGroup`
with a leading search icon and an inline `SNOMED CT` addon, rather than a
generic add button or a button that opens a second search field. The containing
clinical-code pane uses a light muted grey surface while the searchbar keeps the
normal input background. For the demo fixture, focusing or clicking an empty
clinical-code searchbar opens the full code list so the available coded content
is discoverable, and the list stays visible while the field retains focus;
typing filters that list. When results are visible from the searchbar or from a
text-derived result list opened by note typing, the first row is active by
default; `ArrowDown` and `ArrowUp` move a highlighted row without wrapping at
the top or bottom, the active row is exposed via `aria-activedescendant` on the
focused text or search control, and `Enter` accepts the highlighted concept. In
the note editor, `Shift+Enter`
remains a normal newline/typing action and must not select a result. Passive
free-text recognition still opens a scoped
text-derived result only when the searchbar has not been explicitly opened. The
pane no longer repeats a `Coded content` title inside
every section. Results open beneath that field and use a header row plus fixed
metadata columns for semantic type and priority: type pills are right-aligned,
and priority pills are right-aligned against the search-result row's right
margin. The `Type` and `Priority` header labels are inset by the same horizontal
padding used inside the badges, so header text aligns to the pill text rail
rather than the pill border rail. Temporary dashed guide lines are currently
drawn on the search-result Type and Priority columns to make the active column
contract inspectable while it is being reconciled; the Type guide is sized to
the longest current type pill, `Regime/therapy`, so it marks that pill's left
edge rather than passing through it. Result rows show the code
without repeating `SNOMED CT`, because the searchbar addon already identifies
the code system;
the popover intentionally omits a separate "Suggested concepts" heading because
the search field and column header already provide enough context. Selected
concepts render as full-width pills in the section, aligned to the same
vertical rail as the left free-text textarea, using primary display text, a
and nested semantic-type and priority pills that match the search-result
categorisation colours. The numeric clinical code is not repeated inside the
selected pill; it remains available in search results and removal confirmation
where it supports selection and provenance without crowding the consultation
section. Type and priority sit in fixed columns so multiple selected concepts
scan like structured rows rather than independent tags. Priority pills keep
their natural text-driven width inside a constrained priority column, so they
do not become a common-size badge. The row grid uses the same
`gap-3`/12px separation as the consultation free-text/code split between the
concept, type, and priority columns, while the type track is narrowed so
concept titles are not shrunk by unused metadata whitespace. Search-result
and selected-pill concept titles now stay at the normal body text size; the
previous shrink on `Medication review done by doctor` was caused by a
character-count rule rather than actual overflow. The parent
selected-concept pill now uses a lighter tint from the same semantic family as
the type pill, with title, semantic type, priority, and remove control
aligned on one centre rail and with symmetric left/right insets. Concept titles
in both search results and selected concept pills now use a link-like underline
only when measured overflow shows that the current title column is truncating
the display text. Clicking the title expands the full display text in place and
temporarily removes the type/priority pills, plus the remove control for
selected concepts, so the title can use the full row width. Clicking the title
again or clicking away restores the normal fixed metadata columns.
`Disorder`
uses a calmer blue family rather than red/warning colour, because it is a
semantic category rather than a safety state. `Finding` uses a distinct pink
family rather than the earlier sky/blue or fuchsia/violet-adjacent families,
so findings do not collapse into either disorders or regimes/therapies.
`Procedure` uses orange rather than indigo so it does not sit between blue
disorders and violet regimes/therapies. `Situation` has also moved off grey so
contextual statements remain visibly classifiable. Removing a selected concept
opens a confirmation dialog before the code is deleted from the section. The remove control is pinned to the
right side of the selected-concept pill and uses a quiet red `x` by default,
with the circular red affordance appearing only on hover, active, or keyboard
focus. The remove column is sized to the `x` glyph itself, with the hover/focus
circle drawn as an overlay rather than driving layout spacing. The glyph is
offset slightly toward the rounded end so the overlay circle has equal top,
bottom, and rounded-end margins when active, and the selected-concept title's
left inset is driven from that resulting visual right inset. It is separated by
the same layout grid gap as the other chip elements to separate deletion from
concept metadata. The selected-concept title uses the same normal body text
scale as consultation free-text fields, leaving the nested pills to carry
emphasis. The seed concept
set now includes examples across
disorder, finding, procedure, observable, situation, and regime/therapy tags so
section-local coding can show the difference between diagnoses/problems,
observations, procedures, contextual statements, and care regimes.

### SNOMED Fixture Truth Pass
The V2 seed concepts were checked against public SNOMED terminology endpoints
on 2026-04-26 and expanded/rechecked with the CSIRO Ontoserver FHIR
terminology endpoint on 2026-04-27. This confirmed that the current fixture
SCTIDs are active SNOMED CT concepts and that their semantic type badges match
the semantic tag in the fully specified name. Inactive candidates found during
research, such as some generic medication-review, renal-function-test, dietary
advice, and exercise-advice terms, were not added to the fixture.

The expanded fixture is deliberately diabetes-review coherent: it covers reason
for review, symptoms/history, examination, assessment, plan/advice,
follow-up/task coding, and the medications/alerts/results context. It is still
static demo data. A production build should use the NHS England Terminology
Server/UK SNOMED CT edition, section-specific value sets, and dm+d for medicines.

| SCTID | Prototype display | SNOMED preferred / FSN evidence | UI type |
| --- | --- | --- | --- |
| `44054006` | Type 2 diabetes mellitus | Preferred term `Type 2 diabetes mellitus`; FSN `Diabetes mellitus type 2 (disorder)` | Disorder |
| `73211009` | Diabetes mellitus | FSN `Diabetes mellitus (disorder)` | Disorder |
| `714628002` | Prediabetes | FSN `Prediabetes (disorder)` | Disorder |
| `80394007` | Hyperglycaemia | FSN `Hyperglycemia (disorder)` | Disorder |
| `302866003` | Hypoglycaemia | Preferred term `Hypoglycaemia`; FSN `Hypoglycemia (disorder)` | Disorder |
| `38341003` | Hypertensive disorder | FSN `Hypertensive disorder, systemic arterial (disorder)` | Disorder |
| `182836005` | Review of medication | FSN `Review of medication (procedure)` | Procedure |
| `719328007` | Medication review done by doctor | FSN `Medication review done by doctor (situation)` | Situation |
| `401191002` | Diabetic foot examination | FSN `Diabetic foot examination (regime/therapy)` | Regime/therapy |
| `75367002` | Blood pressure | FSN `Blood pressure (observable entity)` | Observable |
| `271649006` | Systolic blood pressure | FSN `Systolic blood pressure (observable entity)` | Observable |
| `271650006` | Diastolic blood pressure | FSN `Diastolic blood pressure (observable entity)` | Observable |
| `60621009` | Body mass index | FSN `Body mass index (observable entity)` | Observable |
| `170777000` | Diabetic annual review | FSN `Diabetic annual review (regime/therapy)` | Regime/therapy |
| `394725008` | Diabetes medication review | FSN `Diabetes medication review (procedure)` | Procedure |
| `313835008` | HbA1c measurement (DCCT aligned) | FSN `Hemoglobin A1c measurement aligned to the Diabetes Control and Complications Trial (procedure)` | Procedure |
| `444751005` | Haemoglobin A1c above reference range | FSN `Hemoglobin A1c above reference range (finding)` | Finding |
| `271075006` | Urine albumin/creatinine ratio measurement | FSN `Urine albumin/creatinine ratio measurement (procedure)` | Procedure |
| `312975006` | Microalbuminuria | FSN `Microalbuminuria (finding)` | Finding |
| `80274001` | Glomerular filtration rate | FSN `Glomerular filtration rate (observable entity)` | Observable |
| `863929001` | Glomerular filtration rate below reference range | FSN `Glomerular filtration rate below reference range (finding)` | Finding |
| `433144002` | Chronic kidney disease stage 3 | FSN `Chronic kidney disease stage 3 (disorder)` | Disorder |
| `127013003` | Disorder of kidney due to diabetes | FSN `Disorder of kidney due to diabetes mellitus (disorder)` | Disorder |
| `424736006` | Diabetic peripheral neuropathy | FSN `Peripheral neuropathy due to diabetes mellitus (disorder)` | Disorder |
| `28442001` | Polyuria | FSN `Polyuria (finding)` | Finding |
| `309538000` | Numbness of foot | FSN `Numbness of foot (finding)` | Finding |
| `284350006` | Diabetes diet education | FSN `Diabetes mellitus diet education (procedure)` | Procedure |
| `699826006` | Lifestyle education regarding risk of diabetes | FSN `Lifestyle education regarding risk of diabetes (procedure)` | Procedure |
| `698472009` | Blood glucose monitoring | FSN `Blood glucose monitoring (regime/therapy)` | Regime/therapy |

The remaining `Priority` values are not SNOMED CT truth. `Prioritised`,
`Standard`, and `Ambiguous` are prototype search-ranking metadata standing in
for context-sensitive ranking, local value-set promotion, and disambiguation.
A production implementation must compute or source these labels from the
terminology/ranking layer and persist provenance separately from the SNOMED
concept identity.

The most standards-aligned real-world replacement is a result-reason model
rather than a single loose `Priority` field. Ordered SNOMED reference sets can
provide governed prioritisation or alternative search-result ordering. Simple
reference sets and FHIR ValueSets can show that a concept is part of the
allowed or recommended list for a section. Search-engine scoring can order text
matches, and patient/encounter context can promote clinically relevant
concepts, but both are application ranking evidence rather than SNOMED concept
properties. Clinical safety severity should remain in alert/CDS surfaces, not
inside the coding search priority badge.

The middle-column action rail has been removed. Validation is part of the
top consultation banner because it is a whole-consultation state. Follow-up
narrative is part of the consultation flow after Plan because it is clinical
content, while the separate Tasks pane now sits at the bottom for actionable
follow-up work. Tasks also use the same split-card rail, frameless SNOMED CT
search treatment, selected concept pill pattern, and full-width shell row
rhythm as consultation sections, but the left side is task entry rather than
narrative note text and the resulting codes are scoped to task-owned entries
rather than a narrative section.

The consultation banner action rail now separates state from action: the top
rail uses pills for validation, local-save, and signature state; the row below
contains the corresponding review, save, and sign buttons. This keeps status
scannable without making every status look like an action.

The rail is a shared three-column grid so each status pill aligns with the
matching button below. The gap between pill and button rows uses a compact
two-thirds pane rhythm (`gap-y-2.5`), while each status/action column keeps the
full pane `gap-4` rhythm. Each pill and button is fixed to the widest
status-pill width (`w-40`, 10rem), preserving normal shadcn pill side padding
instead of stretching controls across the header. The banner text is stacked as
title, clinician, then incomplete count. `Consultation capture` remains the title
rail; `Dr Taylor Reed` sits between the title and incomplete-count rails in bold
muted text without the `Author` prefix; and the `n required sections incomplete`
text stays on the lower compact rail in normal weight without a separator dot.
The incomplete-count rail is aligned to the lower action-button label on
desktop. The text stack must remain in normal document flow rather than using
absolute positioning, so the clinician rail cannot collide with the title rail.
From the desktop breakpoint upward, the right action rail defines the content
height: one badge row, a 13px middle gap, and one small-button row
(`3.8125rem` with the current tokens). The left text stack mirrors that height
with CSS grid so the title pins to the top rail, the incomplete count pins to
the button rail, and the clinician name is optically centred against the visible
text rails between the title bottom and incomplete-count text top. The header
grid must not create an empty second row or extra row gap; card padding remains
the normal 16px top and bottom.
Unsaved local state uses a red-family pill;
unsigned consultation state uses a purple-family pill. `Review validation` marks all
incomplete required consultation sections and scrolls/focuses the first one.
The action buttons use clinical button variants: yellow warning for
`Review Validation`, green for `Save Locally`, and purple for
`Sign Consultation`. The button colours are intentionally tied back to nearby
status colours: validation uses `#efc52e` as the button fill/border with white
text so it behaves like the other block-fill actions, save uses a softer
`emerald-700` fill/border to stay in the local-state green family without
overpowering the purple sign action, and sign uses the unsigned consultation
purple text colour as its fill and border.

Known deferred visual issue: the MAR pane measures correctly at a 16px internal
inset on all sides, but the active tab shadow, rounded grey tab-list surface,
item-card ring, and viewport cropping can make the top and bottom spacing read
optically tighter than the left/right spacing. This should not be changed in
the current pass. A later design pass should drive the fix with visual review
and screenshot baselines rather than box-model measurements alone. The design
target is visual equality: top and bottom should appear to sit on the same rail
as left and right after paint, shadow, border, and radius are considered.

Unused local shadcn source components are intentionally retained. They are not
legacy dependencies; they are available native primitives for upcoming passes.

The prototype is available locally during development at:

`http://127.0.0.1:5175/`

## Verification
Initial verification for V2:

- `npm run lint`
- `npm run check:spacing`
- `npm run test`
- `npm run build`
- `npm run e2e`
- `npm audit`

All passed on the first V2 implementation stage.

## Next Decisions
- Add offline draft persistence deliberately rather than inheriting V1 Dexie
  implementation details.
- Add visual screenshot baselines for patient chrome, coding fields, and right
  pane once the first-pass layout is reviewed.
- Add MAR optical-spacing screenshot baselines and resolve the known difference
  between measured 16px internal inset and perceived top/bottom spacing.
- Decide whether V2 should become the active prototype after side-by-side review.
