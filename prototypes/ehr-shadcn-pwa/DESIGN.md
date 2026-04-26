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
- Validation belongs to the consultation banner with save/sign actions, because
  it describes the whole capture state.
- Follow-up tasks are captured as the final consultation section after Plan, so
  they remain part of the clinical narrative without becoming free-text-only.
- Right-pane medications, alerts, and results are contextual reference surfaces.
- Tailwind utility composition is preferred for layout. Global CSS should define
  tokens and shadcn theme variables, not component-specific layout hacks.

## Components
- `PatientChrome`: patient identity, demographics, high-risk flags, draft state,
  and switch action.
- `SyncStateBar`: online, local save, recovered draft, and sync-failure action.
- `ConsultationSectionCard`: shadcn `Card` wrapper for section title, required
  status, section-local coded content, and note text.
- `SectionCodingField`: section-local SNOMED CT searchbar trigger over shadcn
  `Popover` and `Command`, selected concept pills, and shadcn `Dialog`
  confirmation before removing a code.
- Consultation banner: shadcn `Card` header containing consultation state,
  a top row of status pills, and a second row of corresponding actions. The
  rail uses a shared three-column grid so pills and buttons align.
- Follow-up section: final `ConsultationSectionCard` after Plan.
- `ReferencePanel`: shadcn `Tabs` for medications, alerts, and results.

## Native Primitive Policy
The prototype keeps local shadcn source components available even when a
primitive is not yet used in a visible surface. Components such as `Empty`,
`ScrollArea`, and `Dialog` may be used in later passes without treating them as
legacy dependencies.

Current visible primitives include:

- `Alert`
- `Badge` through `ClinicalBadge`
- `Button`
- `Card`
- `Command`
- `Dialog`
- `Empty`
- `Input`
- `Popover`
- `Separator`
- `Table`
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
- Do let card actions stack below title/description on narrow viewports and
  move to the right-hand header rail from `sm` upward.
- Do keep the consultation banner action rail as state pills first
  (`Validation open`, `Not saved locally`, `Consultation not signed`) followed
  by matching action buttons below.
- Do align the consultation author/incomplete-status text to the lower action
  rail on desktop, using the same compact `text-[0.8rem]` and `leading-7`
  rhythm as small action-button text, and keep it to a single nowrap line from
  the desktop rail breakpoint upward.
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
  families: validation fill is `#ffd230` with matched gold border/text, save
  uses a softer `emerald-700` fill/border to stay in the local-state green
  family without overpowering the purple sign action, and sign uses the unsigned
  purple text colour as its fill and border.
- Do use red-family status for unsaved local state and purple-family status
  for unsigned consultation state.
- Do make `Review validation` reveal required sections needing attention and
  scroll/focus the first incomplete section.
- Do use shadcn `Empty` for compact no-data states, including repeated
  section-local states.
- Do keep coded-content entry as a SNOMED CT concept searchbar, not a generic
  add button, and not a button that opens a second searchbar.
- Do render section-local SNOMED search results as fixed-column rows: concept
  and SNOMED CT code on the left, semantic type and priority in right-aligned
  metadata columns sized for the largest expected pill text.
- Do include result column headers above the aligned SNOMED result metadata
  columns, using the same grid tracks as result rows.
- Do render selected concepts as compact parent pills with primary display
  text, a smaller muted SNOMED CT code without brackets, the search-result
  semantic type and priority as nested `ClinicalBadge` pills, and an end
  remove affordance with confirmation dialog.
- Do tint the whole selected-concept parent pill from the same semantic family
  as the type pill, but one lighter step, so the parent pill supports rather
  than competes with the nested type badge.
- Do keep selected-concept title, code, semantic type, priority, and remove
  affordance on one centre-aligned grid rail with symmetric left/right insets.
- Do keep selected-concept remove controls in their own right-aligned chip
  column sized to the `x` glyph itself, not to an invisible larger hit box.
  Draw the circular red affordance as an overlay only on hover, active, or
  keyboard focus so it can overlap the chip margin without changing the glyph
  rail or the grid gap to the priority pill.
- Do keep selected-concept title text at the same normal body scale and weight
  as consultation free-text fields; reserve emphasis for type and priority
  pills, not the concept title.
- Do use consistent semantic-type colours in SNOMED search and selected-code
  display, for example finding, disorder, procedure, observable, situation,
  regime/therapy, and product. Do not use red/warning-like colour for
  `Disorder`; it is a semantic category, not a safety state.
- Do keep layout responsive with grid/flex utility classes and stable gaps.
- Do add tests with the component contract as soon as a new surface is added.
- Don't import V1 CSS class names or recreate V1's component-local spacing
  layer.
- Don't keep V1 libraries in the dependency graph unless V2 actively uses them.
- Don't make generic primitives own clinical meaning.
