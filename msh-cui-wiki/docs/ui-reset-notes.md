# UI Reset Notes

## Purpose

This app is a read-only window into the canonical LLM Wiki. The UI should support that purpose by being:

- calm
- legible
- predictable
- browser-consistent
- secondary to the content

The UI is not meant to behave like a product marketing site or a database-backed wiki product.

## What happened

An earlier pass introduced the `@pelagornis/page` theme to get a more stylized wiki shell quickly.

That led to several problems:

- theme-level header and control overrides replaced Starlight defaults
- icon rendering depended on theme-specific font assets
- light-mode contrast and panel separation became harder to tune cleanly
- Safari-like validation in Playwright WebKit exposed runtime font-loading issues
- each visual fix increased divergence from default Starlight behavior

In short: the app started fighting its theme instead of presenting the corpus clearly.

## Reset decision

The over-customized header/control experiment was removed.

However, after comparing the result in-browser, the plain native-Starlight reset was judged too far from the original visual identity of this app. The live baseline was therefore restored to the original `@pelagornis/page` theme shell, with the rule that only minor fixes are allowed on top of it.

The final working compromise was:

- keep the original `@pelagornis/page` layout shell
- remove dependence on the theme's visible icon glyph rendering for the top-right controls
- strengthen only the header, sidebar, and TOC surfaces so light mode reads more cleanly
- leave the content model and route structure unchanged

## Current UI policy

Allowed:

- restrained color tuning
- typography selection
- subtle surface/background treatment
- CSS-only icon replacement where a theme asset renders unreliably
- clearer canonical note styling
- slight spacing and card treatment where it improves readability

Not allowed without a strong reason:

- replacing core theme/header controls
- heavy component overrides
- decorative animation-first themes
- UI behavior that obscures the file-first nature of the wiki

## Browser validation target

The UI should be checked in:

- Playwright WebKit on macOS as the closest Safari-like target
- Playwright Chrome channel where available
- Edge only if available locally; otherwise Chrome plus WebKit is the minimum practical check

The goal is visual coherence, not pixel-identical rendering.

## Verification performed

Validated on April 18, 2026 against the local app at `http://localhost:4321/` with Playwright:

- WebKit light mode: passed, search/theme controls visible and no console errors
- WebKit dark mode: passed, search/theme controls visible and no console errors
- Chrome light mode: passed, layout and controls matched WebKit and no console errors
- Chrome dark mode: passed, layout and controls matched WebKit and no console errors
- Edge light mode: passed, layout and controls matched Chrome and no console errors
- Edge dark mode: passed, layout and controls matched Chrome and no console errors

Observed result:

- layout hierarchy stayed consistent across engines
- search and theme controls rendered coherently in both color modes
- sidebar and right-hand TOC panels remained visually aligned across engines
- the original theme feel was preserved while the fragile visible icon-font dependency was bypassed for the two affected controls

## Current baseline

The current baseline is:

- `@pelagornis/page` theme shell restored
- no local replacement header/search/theme-toggle components
- minor local CSS only
- CSS pseudo-element icons for the header search and theme controls
- restrained header/sidebar/TOC surface treatment for clearer light-mode segmentation
- browser verification against WebKit, Chrome, and Edge

## Nested TOC Phases

The nested right-hand TOC should now be handled in explicit phases:

### Phase 0: Pure defaults

- remove all local nested TOC measurement-shell logic
- remove all local nested TOC selected-hash logic
- let `@pelagornis/page` own nested TOC hover/current/select behavior entirely
- verify the default behavior in Playwright WebKit before making any new TOC change

This is the current reset baseline.

### Phase 1: Measure the default contract

- record the Page default nested TOC geometry as rendered:
  - horizontal inset
  - vertical margins
  - radius
  - fill token
  - wrap behavior under hover/current
- do not change behavior in this phase; only observe and capture

### Phase 2: Add contract-only logic

- if needed, add a minimal local layer that preserves the default wrap contract across states
- that layer must not own color, radius, or spacing tokens
- it may only reserve width so non-state wrapping matches the active-state text box

### Phase 3: Restore deep-hash continuity only if needed

- if the theme still keeps `aria-current` on the page-title TOC node instead of the deep section anchor, add a minimal selected-hash continuity layer
- that layer must reuse the theme’s own visible styling rather than inventing new chip geometry

Implementation rule:

- never mix visual restyling and contract logic in the same pass
- each phase should be verified in WebKit before moving to the next phase

## Later references

- `https://fevol.github.io/starlight-site-graph/` — keep as a future reference if we revisit graph-style discovery/navigation inside the Astro/Starlight layer
