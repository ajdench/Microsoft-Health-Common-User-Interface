---
version: alpha
name: Health CUI EHR shadcn PWA Prototype V2
description: Clean shadcn-native visual standard for the consultation capture prototype.
---

## Purpose
This DESIGN.md governs `prototypes/ehr-shadcn-pwa`. It is a modern prototype
standard, not recovered historical Health CUI source material.

V2 exists because the first EHR PWA prototype proved the clinical contracts but
also accumulated legacy CSS and migration scars. V2 starts from native
shadcn/ui composition and app-owned clinical wrappers.

V2 is now the clean shadcn-native design track. V1 remains useful evidence and
comparison material, but new component decisions should be made here first.

## Principles
- Patient identity and sync/local draft state are persistent clinical chrome.
- Coded content belongs inside the relevant consultation section.
- Free text remains available, but coded content is made first-class.
- Inline clinical-code identification is assistive only: it may mark recognised
  terms inside consultation free text, but it must not silently create persisted
  coded entries.
- Validation belongs to the consultation banner with save/sign actions, because
  it describes the whole capture state.
- Follow-up narrative remains the final consultation section after Plan, and a
  distinct Tasks pane sits below it for actionable follow-up work that should
  stay separate from note text while still supporting task-local SNOMED CT
  coding.
- Medications, alerts, and results are contextual reference surfaces: they sit
  full-width above consultation capture at every viewport size, with a fixed
  MAR pane height so changing tabs does not move the consultation form.
- Tailwind utility composition is preferred for layout. Global CSS should define
  tokens and shadcn theme variables, not component-specific layout hacks.

## Components
- `PatientChrome`: patient identity, demographics, high-risk flags, draft state,
  and switch action.
- `SyncStateBar`: online, local save, recovered draft, and sync-failure action.
- `ConsultationSectionCard`: shadcn `Card` wrapper for section title, required
  status, note text, and section-local coded content. Section body layout uses
  a responsive split pane: the left notes pane owns the section title and status
  pill, while the right pane starts directly with the SNOMED CT add/search field
  without an extra parent card frame. The searchbar sits on the coding pane
  margins, and the selected concept list begins on the same vertical rail as
  the notes textarea at desktop widths; the layout collapses to one column on
  narrower screens. Empty optional sections use an `Optional` status pill in the
  `#80adce` blue family; once any note text is entered, they switch to the green
  `Ready` status.
- `ClinicalTextTextarea`: token-aware consultation note editor using a
  contenteditable textbox. Coded concepts render as non-editable inline pills
  inside the body text while the section still keeps structured coded entries
  in the coded-content pane.
- `SectionCodingField`: section-local SNOMED CT searchbar composed with shadcn
  `InputGroup`, `Popover`, and `Command`, selected concept pills, and shadcn
  `Dialog` confirmation before removing a code. The pane uses a light muted
  grey surface while the searchbar keeps the normal input background. It does
  not render a repeated "Coded content" title inside each section.
- Consultation banner: shadcn `Card` header containing consultation state,
  a top row of status pills, and a second row of corresponding actions. The
  rail uses a shared three-column grid so pills and buttons align.
- Follow-up section: final narrative `ConsultationSectionCard` after Plan.
- `TasksPane`: bottom shadcn `Card` for actionable follow-up task capture,
  using the same split-card body as consultation sections: title and a status
  pill on the left with task entry below; the status is `Optional` while the
  task entry field is empty and switches to green `Ready` when task text is
  entered. Frameless task-local `SectionCodingField` provides SNOMED CT-coded
  task concepts on the right. Task rows use full-width rounded shell pills
  rather than loose badges.
- `ReferencePanel`: shadcn `Tabs` for medications, alerts, and results.
  Tab labels provide the visible section identity; the tab panels do not repeat
  internal titles. Muted column header rows sit directly below the tabs.
  Medication cards align to Medication, Dose, Route, Frequency, and State; alert
  cards align to Alert, Rationale, and State; result cards align to Date, Result,
  Value, and Status. All three use compact card rows with fixed terminal status
  columns and identical header/row insets so values sit directly under their
  column titles; medication, alert, and result card surfaces follow the colour
  family of their state/status pill. Results rows do not carry the 60px minimum
  used by the medication and alert references, but they are explicitly sized so
  five results fill the same fixed MAR list area as three medication or alert rows.
  Item-card contents are vertically centred inside their row cards.
  The panel stays full-width before consultation capture at all breakpoints
  rather than becoming a right rail.

## Native Primitive Policy
The prototype keeps local shadcn source components available even when a
primitive is not yet used in a visible surface. Components such as `Empty`,
`ScrollArea`, and `Dialog` may be used in later passes without treating them as
legacy dependencies.

Current visible primitives include:

- `Badge` through `ClinicalBadge`
- `Button`
- `Card`
- `Command`
- `Dialog`
- `Input`
- `Popover`
- `Separator`
- `Tabs`
- `Textarea`

App-owned wrappers should name clinical meaning; shadcn primitives should own
interaction, slot anatomy, and visual consistency.

## Do's And Don'ts
- Do compose shadcn primitives directly unless a clinical wrapper names a real
  product contract.
- Do keep status chips as `ClinicalBadge` wrappers over shadcn `Badge`.
- Do use full shadcn `CardHeader`/`CardTitle`/`CardDescription` composition for
  card-like headers instead of hand-styled header boxes.
- Do keep card titles and reference section titles at the normal app text size
  (`text-sm`) with subtitle weight and foreground colour; they should read as
  black sub-titles, not oversized display headings or muted descriptions.
- Do let card actions stack below title/description on narrow viewports and
  move to the right-hand header rail from `sm` upward.
- Do keep the consultation banner action rail as state pills first
  (`Validation open`, `Not saved locally`, `Consultation not signed`) followed
  by matching action buttons below.
- Do stack the consultation banner text as title, clinician, then incomplete
  count. `Consultation capture` remains the title rail. The clinician name sits
  between title and incomplete-count rails, is bold, is not prefixed by
  `Author`, and keeps the same muted grey colour as the incomplete-count text.
  The `n required sections incomplete` text stays on its lower compact rail
  aligned to the lower action-button label on desktop, uses normal weight, and
  does not use a separator dot. Keep all three text rails in normal document
  flow; do not use absolute positioning to fake rail alignment. From the
  desktop breakpoint upward, the right action rail defines the banner content
  height as one badge row, a 13px middle gap, and one small-button row
  (`3.8125rem` at the current token values). The left text stack mirrors that
  height with CSS grid: title pinned to the top rail, incomplete count pinned to
  the button rail, and clinician optically centred against the visible text
  rails between the title bottom and incomplete-count text top. The header grid
  must not create an empty second row or extra row gap; card padding should
  remain the normal 16px top and bottom.
- Do use a compact two-thirds pane rhythm (`gap-y-2.5`) between the
  consultation banner status-pill row and button row, while retaining the pane
  rhythm (`gap-4`) between aligned status/action columns.
- Do keep consultation banner rail controls fixed to the widest status-pill
  width (`w-40`, 10rem), preserving normal shadcn pill side padding instead of
  stretching pills and buttons across the available header rail.
- Do keep banner status pills at normal shadcn `Badge` height; they may fill
  the fixed rail-control width for alignment, but should not be enlarged to
  button height.
- Do use clinical button variants in the consultation action rail: yellow for
  `Review Validation`, green for `Save Locally`, and purple for
  `Sign Consultation`.
- Do keep consultation action button colours tied to their status/pane
  families: validation fill/border is `#efc52e` with white text so it behaves
  like the other block-fill actions, save uses a softer `emerald-700`
  fill/border to stay in the local-state green family without overpowering the
  purple sign action, and sign uses the unsigned purple text colour as its fill
  and border.
- Do use red-family status for unsaved local state and purple-family status
  for unsigned consultation state.
- Do make `Review validation` reveal required sections needing attention and
  scroll/focus the first incomplete section.
- Do split consultation section bodies into free-text notes on the left and
  section-local coded content on the right from the desktop content breakpoint;
  keep the coded pane wide enough for selected SNOMED concept pills to remain
  readable, keep section status pills in the left notes pane rather than a
  full-width header so coded content starts higher, keep the responsive fallback
  as a single column, and keep validation focus on the text area.
- Do identify conservative fixture-backed clinical terms from consultation note
  text and open the section-local clinical-code results popover as a selectable
  result list. Do not autocomplete note text or render a separate `From text`
  rail. Partial typed spans that match the demo code list, such as `diab`,
  should behave as live search queries and show filtered result rows while the
  clinician types. The section search field may mirror the recognised typed
  span as display state, but passive recognition must keep keyboard focus and
  continued typing in the note editor. It must not autocomplete or commit a
  coded concept until the clinician explicitly selects a result row. Selecting
  a live text-query result should replace the typed
  span with a non-editable inline concept pill, add the same concept to the
  coded-content list, insert a trailing space when needed, and return the caret
  to the next typing position. Selecting a concept from explicit search should
  add the same concept to both the body text at the current caret position and
  the section coded-content list. Inline concept pills and the section
  coded-content list must stay bidirectionally synchronised: deleting an inline
  pill from the note editor removes the corresponding selected concept from
  that section's coding pane, and removing a selected concept with the pane `x`
  also removes the inline token that created it. Text-derived result dismissal
  is scoped to the active source span only: once that source phrase or inline
  pill is gone, retyping the same phrase must seed the clinical-code search
  again.
- Do keep example note text as visual-only instruction content, not seeded
  clinical input. Consultation sections should show short grey `Type: "..."`
  prompts, with the example phrase italicised, anchored to the bottom of the
  note editor and always visible as the text box is focused, filled, or resized.
  These instructions must not count as text for validation or clinical-code
  recognition. Current section prompts are concise diabetes-review examples:
  Reason `Diabetes medication review and diabetic annual review.`, History
  `Polyuria and foot numbness.`, Examination `BP, BMI and diabetic foot check.`,
  Assessment `Type 2 diabetes with raised HbA1c.`, Plan `Diabetes medication
  review and diet education.`, and Follow-up `HbA1c, eGFR and urine ACR.`.
- Do not seed any default selected clinical-code entries in the demo
  consultation. Coded concepts should appear only after explicit clinician
  selection from a section-local search or text-derived result.
- Do not render repeated no-code empty boxes in section-local coded content;
  an empty coded section should show only the SNOMED CT concept searchbar until
  concepts are selected.
- Do give the bottom Tasks pane the same SNOMED CT coding affordance as
  consultation sections and the same split-card layout rail, including the
  frameless searchbar treatment, scoped to task-owned coded entries rather
  than to a narrative consultation section.
- Do keep coded-content entry as a clinical code searchbar, not a generic add
  button, and not a button that opens a second searchbar. Use `Add clinical
  code` as the field prompt. The control should be visually obvious as a search
  field by using shadcn `InputGroup`, a leading search icon, and an inline
  `SNOMED CT` addon rather than a bare input. Keep the containing pane a light
  muted grey and the searchbar itself on the normal input background. In this
  demo, focusing or clicking an empty clinical-code searchbar should open the
  full demo code list and keep it visible while the field retains focus; typing
  then filters the list. While the searchbar or a text-derived result list has
  visible results, the first result row is active by default; `ArrowDown` and
  `ArrowUp` must move one highlighted result row at a time without wrapping at
  the top or bottom, expose the active row with `aria-activedescendant` on the
  focused text or search control, and `Enter` must accept the highlighted
  result. In the note editor, `Shift+Enter`
  remains a normal newline/typing action and must not select a clinical-code
  result. Passive free-text
  recognition may still open a scoped text-derived result when the searchbar has
  not been explicitly opened.
- Do avoid repeating a `Coded content` title in every consultation section; the
  split pane already establishes that the right side is structured coding.
- Do align the selected SNOMED concept list with the free-text textarea rail in
  the left pane, so coded entries and prose entries begin from the same row. In
  consultation sections, do not wrap the clinical-code pane in an additional
  card-like border or muted parent box; keep the searchbar and selected pills on
  the section grid margins. The searchbar must be the topmost coding-pane
  element against the top margin; selected concept pills begin below it on the
  note-textbox rail.
- Do render section-local SNOMED search results as fixed-column rows: concept
  and code on the left, semantic type in a right-aligned metadata column, and
  priority in a fixed right-aligned metadata column against the search-result
  row's right margin. Do not repeat `SNOMED CT` before every result code
  because the search field already declares the code system.
- Do include result column headers above the aligned SNOMED result metadata
  columns, using the same grid tracks as result rows, without a separate
  "Suggested concepts" group title. Inset the `Type` and `Priority` header
  labels by the badge horizontal padding so their text aligns with the pill
  text rail, not the pill border rail.
- Temporary diagnostic: show dashed vertical column guide lines on SNOMED
  search result Type and Priority columns while the metadata layout is being
  reconciled. The Type guide should sit at the left edge of the longest
  configured type pill (`Regime/therapy` in the current fixture), not cut
  through that pill. Remove these guides once the column contract is accepted.
- Do render selected concepts as full-width parent pills with primary display
  text on the left, the search-result semantic type and priority as nested
  `ClinicalBadge` pills in fixed metadata columns, and an end remove affordance
  with confirmation dialog. Do not repeat the numeric clinical code inside the
  selected pill; keep the code visible in search results and removal
  confirmation where it supports selection and provenance without adding noise
  to the consultation section.
- Do keep the visible gap between the type and priority metadata pills to the
  consultation split-pane gap (`gap-3`, 12px) while preserving natural-width
  priority pills. Right-align type and priority pills within their fixed
  columns, inset the priority column label to the right edge of the priority
  pill text, use the same `gap-3` between the concept column and type column,
  and constrain the type track enough that concept titles are not needlessly
  shrunk by unused metadata whitespace.
- Do not shrink SNOMED concept titles from character count. Search-result and
  selected-pill titles should use the normal body text size; measured overflow
  should create the underline expansion affordance instead of reducing type
  size.
- Do make actually truncated SNOMED concept titles discoverable. In search
  results and selected concept pills, a title should only look link-like with
  an underline when measured overflow shows that the current title column cannot
  display the full text. Activating it should expand the full display text in
  place and temporarily remove the metadata pills and remove affordance that
  constrain the title column. Activating the title again, or clicking away,
  should restore the normal fixed-column metadata layout.
- Do tint the whole selected-concept parent pill from the same semantic family
  as the type pill, but one lighter step, so the parent pill supports rather
  than competes with the nested type badge.
- Do keep selected-concept title, semantic type, priority, and remove
  affordance on one centre-aligned grid rail; make every selected-concept pill
  fill the clinical-code pane width so type and priority columns line up across
  selected concepts. Drive the title's left inset from the visual right inset
  of the `x` glyph, while preserving enough right padding for the hover/focus
  circle to sit evenly inside the rounded pill end.
- Do keep selected-concept remove controls in their own right-aligned chip
  column sized to the `x` glyph itself, not to an invisible larger hit box.
  Draw the circular red affordance as an overlay only on hover, active, or
  keyboard focus, and offset the glyph only enough for that overlay circle to
  have equal top, bottom, and rounded-end margins without changing the layout
  grid gap to the priority pill.
- Do keep selected-concept title text at the same normal body scale and weight
  as consultation free-text fields; reserve emphasis for type and priority
  pills, not the concept title.
- Do use consistent semantic-type colours in SNOMED search and selected-code
  display, for example finding, disorder, procedure, observable, situation,
  regime/therapy, and product. Do not use red/warning-like colour for
  `Disorder`; it is a semantic category, not a safety state. Keep `Disorder`
  in the calm blue family, `Finding` in a distinct pink family,
  `Procedure` in orange, and `Regime/therapy` in violet so adjacent SNOMED
  semantic tags are not visually confusable. Temporary layout guide lines
  should use neutral slate rather than a semantic type colour.
- Do use the same semantic type colour family for inline coded concepts,
  text-derived result rows, selected concept parent pills, and type badges
  so `Disorder`, `Finding`, `Procedure`, `Observable`, `Situation`,
  `Regime/therapy`, and `Product` remain visually distinct wherever they
  appear.
- Do treat the demo clinical-code fixture as terminology-shaped evidence, not
  as an authored local vocabulary. Concept ids, preferred displays, active
  state, and semantic-type pills should be checked against a terminology service
  before they are used in design decisions. Current verified fixture types are
  derived from the SNOMED CT fully specified name semantic tag, for example
  `(disorder)`, `(finding)`, `(procedure)`, `(situation)`,
  `(regime/therapy)`, and `(observable entity)`. The UI may shorten
  `observable entity` to `Observable` for space, but the source tag should
  remain known. `Priority` is not a SNOMED CT property; it is prototype ranking
  metadata for context promotion and ambiguity handling.
- Do keep the demo diabetes-review fixture clinically coherent across the
  consultation cards. The current code list includes active concepts for
  annual diabetes review, medication review, HbA1c, urine ACR,
  microalbuminuria, eGFR/GFR, diabetic kidney disease, diabetic neuropathy,
  foot examination, diet/lifestyle education, and blood-glucose monitoring.
  Avoid adding inactive or non-current SNOMED terms just because their display
  text sounds convenient.
- Do keep top-pane medication, alert, and result cards space-efficient. They
  should preserve the individual-card affordance and explicit field/value
  pairing, using shared muted column header rows rather than repeated label
  pills inside each card. Header and row grids must share the same inset, grid
  tracks, and fixed terminal status column so list-item values sit beneath the
  corresponding title text. The row header grid must be vertically centred
  inside the item card. Medication, alert, and result row surfaces should follow
  the same colour family as their state/status pill.
- Known visual bug, defer implementation: the MAR pane currently measures as a
  correct 16px internal inset on all sides, but the active tab shadow, rounded
  grey tab-list surface, item-card ring, and nearby cropped viewport can make
  the top and bottom spacing read optically tighter than the left/right spacing.
  Do not change this now. Future MAR layout work should be driven by design
  review and visual/screenshot baselines, not box-model measurements alone.
  The target is visual equality: top and bottom should look like the same rail
  as left and right once paint, shadow, border, and radius are considered.
- Do treat the top-pane medicines as diabetes-context reference data, not as
  SNOMED-coded medicines. The current coherent set is metformin modified
  release for type 2 diabetes, ramipril for hypertension/renal-risk context,
  and atorvastatin for cardiovascular-risk management. A production version
  should replace this static list with dm+d-backed medication statements.
- Do make reference context available full-width before the consultation form
  at every viewport size.
- Do keep layout responsive with grid/flex utility classes and stable gaps.
- Do add tests with the component contract as soon as a new surface is added.
- Don't import V1 CSS class names or recreate V1's component-local spacing
  layer.
- Don't keep V1 libraries in the dependency graph unless V2 actively uses them.
- Don't make generic primitives own clinical meaning.
