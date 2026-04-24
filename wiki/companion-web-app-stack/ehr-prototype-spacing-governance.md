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

### State Must Not Collapse Layout
Chips, alerts, sync state, and recovered-draft banners should use stable spacing
so clinical state changes do not resize the page unpredictably.

### Magic Numbers Need Names
The reference panel's sticky offset is inherently tied to the patient header and
sync strip. That relationship should be named as a token even if the first value
is still manually chosen.

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
- No tool prevented future raw spacing values.

## Implemented formalization
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

The check scans spacing-sensitive declarations in `src/styles.css` and fails on
raw length values in properties such as `gap`, `padding`, `margin`, and
positional offsets. This is intentionally narrower than a full CSS linter: it
guards the problem observed in the prototype without introducing a large style
linting policy before the design system is mature.

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
