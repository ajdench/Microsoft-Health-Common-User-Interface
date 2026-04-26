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
- follow-up captured as the final consultation section after Plan
- right-pane medications, alerts, and results
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
| Section coding | `SectionCodingField`, SNOMED CT searchbar, shadcn `Popover` + `Command`, concept pills, confirmation `Dialog` |
| Validation/actions | Consultation banner `CardAction`; status pills above matching same-width buttons |
| Follow-up | Final consultation section after Plan |
| Reference context | `ReferencePanel`, shadcn `Tabs`, `Alert`, `Table`, and `Card` |

## First Implementation
The first V2 implementation creates a consultation capture page with:

- patient chrome
- sync-state bar
- section-local coded content in each consultation section
- validation, local-save state, and signature state as top consultation-banner
  pills with matching action buttons below
- follow-up as the final consultation section after Plan
- medication, alert, and results reference tabs
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

The section-local coded-content empty state now uses shadcn `Empty` instead of
plain paragraph text. This keeps repeated no-data states on the same primitive
family as the rest of the V2 surface.

Section coding now presents the entry point as a real SNOMED CT concept
searchbar rather than a generic add button or a button that opens a second
search field. Results open beneath that field and use a header row plus fixed
right-aligned metadata columns for semantic type and priority so the type and
priority titles and pills line up across result rows. Selected concepts render as compact pills in the
section, using primary display text, a smaller muted SNOMED CT code without
brackets, and nested semantic-type and priority pills that match the
search-result categorisation colours. Removing a selected concept opens a
confirmation dialog before the code is deleted from the section. The remove
control is pinned to the right side of the selected-concept pill and uses a
bold red `XIcon` affordance to separate deletion from concept metadata. The
selected-concept title uses the same normal body text scale as consultation
free-text fields, leaving the nested pills to carry emphasis. The seed
concept set now includes examples across disorder, finding, procedure,
observable, situation, and regime/therapy tags so section-local coding can show
the difference between diagnoses/problems, observations, procedures, contextual
statements, and care regimes.

The middle-column action rail has been removed. Validation is part of the
top consultation banner because it is a whole-consultation state. Follow-up is
part of the consultation flow after Plan because it is clinical content, not a
generic side action.

The consultation banner action rail now separates state from action: the top
rail uses pills for validation, local-save, and signature state; the row below
contains the corresponding review, save, and sign buttons. This keeps status
scannable without making every status look like an action.

The rail is a shared three-column grid so each status pill aligns with the
matching button below. Unsaved local state uses a red-family pill; unsigned
consultation state uses a purple-family pill. `Review validation` marks all
incomplete required consultation sections and scrolls/focuses the first one.
The action buttons use clinical button variants: yellow warning for
`Review Validation`, green for `Save Locally`, and purple for
`Sign Consultation`. The button colours are intentionally tied back to nearby
status colours: validation uses `#ffd230` as the button fill with matched
gold border/text, save uses the green pill text colour family as its fill and
border, and sign uses the unsigned consultation purple text colour as its fill
and border.

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
- Decide whether V2 should become the active prototype after side-by-side review.
