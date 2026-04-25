# EHR Prototype Spacing Governance

## Status
Modern companion note.

This page diagnoses spacing inconsistencies in the EHR PWA prototype and
documents the spacing governance approach. It is not recovered Health CUI source
material.

## What was driving the inconsistency
The prototype spacing issues were not primarily caused by React, TanStack,
React Aria, or browser rendering. They were caused by local CSS decisions made
incrementally across components.

The original `prototypes/ehr-pwa/src/styles.css` used many near-equivalent
spacing values directly in component rules:

- `0.35rem`, `0.4rem`, `0.45rem`, `0.48rem`
- `0.55rem`, `0.6rem`, `0.65rem`, `0.7rem`
- `0.75rem`, `0.8rem`, `0.85rem`
- `1rem`, `1.1rem`, `1.25rem`

Those values are individually defensible, but collectively they create a
surface where related elements do not feel governed by the same system.

Specific drivers:

| Area | Problem |
| --- | --- |
| Header and sync strip | Different vertical and horizontal padding values made the app chrome feel unrelated. |
| Cards and panels | Section cards, panel cards, medication rows, alerts, and code results each had slightly different internal spacing. |
| Chips and badges | Chip padding and chip gaps were not tokenized, so status flags and state chips could drift. |
| Form controls | Buttons, inputs, textareas, and combobox controls had separate padding values. |
| Reference panel stickiness | `top` and `max-height` used magic numbers tied to header height without naming that dependency. |
| Mobile breakpoint | The narrow layout changed only some spacing, so mobile inherited desktop density unevenly. |
| Grid alignment defaults | The consultation action tray stretched to match the taller note column, so compact cards appeared to have excessive vertical spacing. |
| Nested column pressure | At the in-app browser width, the page attempted to show the reference panel, note column, and action rail at the same time. This made Validation, Coded entries, and Follow-up tasks look cramped even after token normalization. |
| Reference-pane contract drift | The right-hand reference pane reused workspace header spacing, which double-inset headings inside already padded content. Its results table also remained a desktop table on narrow/mobile widths, clipping the status column and exposing noisy sort-state text. |
| Persistent state chrome | The patient banner was sticky, but the online/offline, draft-state, recovered-draft, local-save, and sync-failure simulation strip scrolled away from the clinical workspace. |

## Relevant design principles
### Spacing Is A System
Spacing should express hierarchy, containment, and density. Values should come
from a small named scale rather than from isolated component tuning.

For this prototype, spacing tokens now distinguish:

- primitive scale tokens such as `--space-m`, `--space-l`, `--space-xl`
- semantic tokens such as `--space-card`, `--space-panel`, `--space-page`
- component tokens such as `--space-button-y`, `--space-chip-x`
- layout dependency tokens such as `--sticky-reference-top`

### Dense Clinical UI Still Needs Rhythm
An EHR can be dense, but density should be deliberate. Clinical density should
come from smaller repeated units, stable row anatomy, and clear grouping, not
from arbitrary compression.

### Related Components Should Share Spacing Roles
The following should not all invent local spacing:

- section card header
- panel card body
- medication row
- alert card
- coded-entry result
- filter summary

They should use shared card/panel/content tokens unless their clinical role
requires a documented exception.

### Layout Contracts Need Width Gates
Responsive behavior should be based on the space available to the component, not
only on the full viewport width. The consultation workspace now uses a container
query: the action tray is a full-width compact action block before the note
sections until the consultation workspace itself is wide enough to support a
side-by-side note/action layout.

This matters because a two-column page can leave an inner component too narrow
even on a nominally desktop-sized viewport.

### Reference Panes Need Their Own Content Anatomy
The reference pane is not a second workspace header. It has a tab strip, then
content with its own heading, controls, summaries, and clinical data objects.
Those pieces need a local anatomy:

- tab strip
- reference heading and optional actions
- filter or status summary
- clinical cards or table

The results view now uses a table where the reference pane is wide enough and a
card list on narrow/mobile widths. Medication rows use a title/status header row
and fixed label anatomy so terms such as `Frequency` do not split inside the
word.

### State Must Not Collapse Layout
Chips, alerts, sync state, and recovered-draft banners should use stable spacing
so clinical state changes do not resize the page unpredictably.

The sync-state strip is now part of the sticky app chrome with the patient
banner, because online/offline state, draft state, recovered local draft status,
and last local save time are safety-relevant context while editing.

### Magic Numbers Need Names
The reference panel's sticky offset is inherently tied to the patient header and
sync strip. That relationship is now named as a token and driven from the
measured sticky app-chrome height. This keeps the reference pane on the same
initial top rail as the consultation pane while still making it stick below the
patient and sync state chrome during scroll.

## Where the principles were not being applied
Before the governance pass:

- There was a color token set, but no spacing token set.
- There was a single `--radius` token, but controls still used raw `6px`.
- Component cards used raw padding values rather than `card` or `panel` roles.
- Text stack spacing used a unique `0.15rem` margin.
- The combobox popover and list used their own local spacing.
- Sticky reference-panel offsets were unnamed hardcoded values.
- Consultation columns and stacked card groups relied on CSS Grid's default
  stretch behavior, which allowed compact cards to expand vertically when a
  neighboring column was taller.
- The action tray had no minimum usable width contract, so it could render as a
  narrow third column beside both the note sections and reference panel.
- `panel-card` had a padding token, but not a formal header/body gap. This left
  the Coded entries and Follow-up tasks headings too close to their controls.
- Selected coded entries were technically rendered, but the list was too easy
  to miss after the combobox selection flow because it lacked a clear selected
  area and could land outside the visible part of the panel.
- Panel headers vertically centered status chips against multi-line text rather
  than top-aligning them with the heading block.
- `reference-header` inherited workspace-header padding and borders, so
  headings were misaligned with the controls and cards underneath.
- The results table used visible sort-state words such as `sortable`, which
  turned compact column headers into awkward multi-line text.
- The results table remained visible on mobile, where four columns could not
  preserve readable labels, values, and status chips.
- Medication attribute labels used a narrow flex label column, allowing
  `Frequency` to split in the right pane on mobile.
- The sync-state strip was normal page content rather than persistent app
  chrome, so it disappeared while scrolling through the consultation.
- The sync-failure simulation action used the default button sizing, making a
  secondary prototype control visually louder than the status chips.
- No tool prevented future raw spacing values.

## Implemented formalization
The prototype now has two related governance artefacts:

- `prototypes/ehr-pwa/DESIGN.md` for the agent-readable visual standard,
  token intent, and clinical component rationale.
- `prototypes/ehr-pwa/src/styles.css` for the CSS implementation of that
  standard.

The prototype now defines a spacing/radius system in
`prototypes/ehr-pwa/src/styles.css`:

```css
--space-2xs: 0.125rem;
--space-xs: 0.25rem;
--space-s: 0.375rem;
--space-m: 0.5rem;
--space-l: 0.75rem;
--space-xl: 1rem;
--space-2xl: 1.25rem;
--space-3xl: 1.5rem;
--space-4xl: 2rem;

--space-button-y: var(--space-m);
--space-button-x: var(--space-l);
--space-chip-y: var(--space-xs);
--space-chip-x: var(--space-m);
--space-card: var(--space-xl);
--space-card-compact: var(--space-l);
--space-panel: var(--space-xl);
--space-page: var(--space-xl);
```

The prototype now also includes:

- `npm run check:spacing`
- `prototypes/ehr-pwa/scripts/check-spacing.mjs`
- explicit grid-stack alignment rules so consultation columns and stacked cards
  pack to content height unless a component intentionally opts into stretching
- a consultation-workspace container query that only permits a side action rail
  when the consultation component is at least `52rem` wide
- an action-panel anatomy rule: panel cards are grids with an explicit
  header/body gap, and status chips align to the top of heading blocks
- an explicit selected-code area in Coded entries with an empty state, count
  chip, selected rows, and compact remove actions
- a section-local coded-content contract that keeps repeated coding controls
  compact when they appear inside every consultation section
- a Playwright layout-contract test that verifies constrained consultation
  layouts render the action block before the note sections at usable width
- a Playwright coded-content density test that checks the section-local coding
  field height, compact codes trigger, and horizontal overflow at in-app and
  mobile widths
- a separate reference-pane header contract so right-pane headings align with
  filters, cards, and tables
- a responsive clinical-results contract: table on wider reference panes, card
  list on mobile/narrow panes
- a medication-row contract with a title/status header and non-breaking
  attribute labels
- a Playwright reference-pane contract test that checks all three tabs for
  horizontal overflow at in-app and mobile widths
- a sticky app-chrome contract that keeps patient identity and sync/draft state
  visible while scrolling
- a measured app-chrome height token used by the reference-pane sticky offset,
  so the right pane starts on the same top rail as the consultation pane
- a Playwright top-rail contract that checks the consultation workspace and
  reference pane share the same y-position on the two-column layout
- a compact secondary button contract for the sync-failure simulation control,
  with the full action preserved as the accessible name

The check scans spacing-sensitive declarations in `src/styles.css` and fails on
raw length values in properties such as `gap`, `padding`, `margin`, and
positional offsets. This is intentionally narrower than a full CSS linter: it
guards the problem observed in the prototype without introducing a large style
linting policy before the design system is mature.

## How the first pass missed it
The first pass treated spacing as mostly a token-governance problem and then
verified that the most obvious stretch defect had gone away. That was
insufficient.

What should have been checked:

- the component anatomy of Validation, Coded entries, and Follow-up tasks
- the in-app browser's actual constrained viewport, not only a wider desktop
  screenshot
- whether the consultation workspace had enough internal width to support a
  side action rail
- whether header/body gaps existed inside compact panels, not only between cards

The resulting process correction is that spacing governance must include both:

- token checks for raw spacing values
- layout-contract checks for component width, order, and alignment

## Reconciliation After Section-Local Coding
Moving coded search into each consultation section fixed the clinical attachment
problem, but introduced a new density problem. The same explanatory text,
description text, and full-size `Options` control were repeated inside every
section, turning a placeholder field group into a secondary panel.

The reconciliation keeps the section-local model and changes the contract:

- section-coded content is a compact field group, not a teaching panel
- repeated helper copy is removed from each section instance
- the combobox trigger is visually compact while preserving an explicit
  accessible name
- empty state copy is short enough to scan in every section
- Playwright now checks the coded-content field height and compact trigger at
  both the in-app width and mobile width

## Shadcn Visual Reconciliation
After the first shadcn replatform, the app still looked close to the legacy
prototype because the old CSS card and panel contracts still controlled most of
the visible surface. The second pass moved visible composition to shadcn slots:

- consultation sections use `CardHeader`, `CardContent`, `CardAction`, and
  `CardTitle`
- Validation and Follow-up tasks use the same shadcn card anatomy
- repeated empty states use compact shadcn `Empty` rather than plain paragraph
  placeholders
- reference tabs use a segmented shadcn `TabsList` treatment
- cards and major panels use subtle shadcn-style rings and shadows while
  preserving dense clinical spacing

The important constraint is that shadcn visual defaults are adopted only where
they do not break clinical density, patient context, coded-content field height,
reference-pane alignment, or no-horizontal-overflow contracts.

## Recommended governance model
Use a three-layer model:

| Layer | Purpose | Example |
| --- | --- | --- |
| Primitive tokens | Small numeric scale | `--space-l: 0.75rem` |
| Semantic tokens | Product/design roles | `--space-card`, `--space-panel` |
| Component contracts | Clinical usage rules | `MedicationLine` uses compact card spacing but never truncates dose text |

Rules:

- New layout spacing should use semantic tokens first.
- Primitive spacing tokens are for defining semantic tokens or genuinely local
  exceptions.
- Raw spacing lengths in component CSS should fail review unless documented.
- Visual review should include desktop and narrow viewports because density
  changes can expose spacing drift.
- Clinical state additions should be checked for layout stability.

## Tooling options
### Implemented Now
`check-spacing.mjs` is the first guardrail. It is local, free, easy to inspect,
and specific to this prototype.

### Stylelint
Stylelint is the broader CSS linting candidate. Its documentation says rules
are configured explicitly and no rules are enabled by default. It can enforce
property/value policies and can be extended through plugins or rule
configuration. This would be appropriate once the prototype has more CSS files
or multiple contributors.

Use later for:

- custom-property naming rules
- unit restrictions
- disallowed raw color/spacing values
- selector complexity limits

### Style Dictionary
Style Dictionary is the design-token production candidate. Its documentation
frames design tokens as platform-agnostic design decisions. This becomes useful
when the same spacing, color, density, and clinical-state tokens must generate
CSS variables, Figma tokens, JSON documentation, or native-app tokens.

Use later when:

- tokens move out of `styles.css`
- Figma/design-system synchronization matters
- WebView2/native host surfaces need shared values

### Playwright Visual Comparisons
Playwright already exists in the prototype. Its visual comparison API supports
`toHaveScreenshot()` and snapshot paths. This is the best next free tool for
page-level visual drift once layout stabilizes.

Use later for:

- desktop EHR shell baseline
- narrow/mobile consultation baseline
- sign-off dialog baseline
- medication panel baseline

### Storybook And Chromatic
Storybook plus Chromatic is the stronger component-review path. Chromatic
captures snapshots and compares them with baselines in cloud browsers. This is
useful once the app has reusable component stories for patient context,
medication lines, alert panels, coded-entry search, and consultation sections.

Use later if:

- component variants multiply
- visual review needs workflow across browsers
- paid/cloud visual governance is acceptable

## Current Recommendation
Keep the local token check now. Add full Stylelint only when there are multiple
CSS files or repeated violations. Add Playwright screenshot baselines after the
current layout and content model stabilizes enough that visual diffs will catch
real regressions rather than churn.

## External Sources
- [Stylelint configuration](https://stylelint.io/user-guide/configure/)
- [Stylelint declaration property value rule](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/)
- [Style Dictionary design tokens](https://styledictionary.com/info/tokens/)
- [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots)
- [Chromatic visual tests](https://www.chromatic.com/docs/visual/)
