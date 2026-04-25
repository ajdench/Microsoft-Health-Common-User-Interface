# DESIGN.md UI Standard For The EHR Prototype

## Status
Modern companion note.

This page introduces DESIGN.md as the agent-readable UI standard for the
current EHR PWA prototype. It is not recovered Health CUI source material.

## Why Add DESIGN.md
The prototype already has a CSS token layer, spacing governance notes, and
layout-contract tests. Those are implementation-level safeguards. DESIGN.md
adds a higher-level contract that coding agents can read before editing UI:

- exact visual tokens in YAML front matter
- prose explaining why those tokens exist
- component-level styling intent
- explicit do/don't guardrails for clinical-density work
- a lintable file that can be diffed as the UI standard changes

This is a good fit for the repo because the Health CUI work is source-aware and
rule-oriented. DESIGN.md gives modern prototype work a similar, but clearly
separate, governance artifact.

## Boundary
The app-local file is:

`prototypes/ehr-pwa/DESIGN.md`

It governs the current EHR PWA prototype only. It does not govern the primary
markdown wiki, the Starlight wiki mirror, or the historical Health CUI corpus.

## Current Prototype Interpretation
The EHR PWA standard describes a clinical work surface that should feel:

- calm, dense, and work-focused
- strongly anchored by persistent patient identity
- explicit about local draft and sync state
- conservative with color, reserving stronger colors for patient context,
  primary action, warning, success, and critical states
- structured around stable cards, tables, chips, and reference panels rather
  than marketing-style sections

## Token Relationship
`DESIGN.md` is now the design-system source of intent for the prototype. The CSS
custom properties in `prototypes/ehr-pwa/src/styles.css` are the implementation
reflection of that intent.

For this first pass, the DESIGN.md file captures the existing UI rather than
redesigning it. The main token families are:

| DESIGN.md group | CSS implementation |
| --- | --- |
| `colors` | `:root` color custom properties such as `--surface`, `--accent`, and `--critical` |
| `typography` | shared font stack, heading, metadata, chip, and patient-name sizing |
| `spacing` | primitive and semantic spacing tokens such as `--space-l`, `--space-card`, and `--space-page` |
| `rounded` | `--radius-s` and `--radius` |
| `components` | button, patient banner, chips, cards, panels, inputs, and result-row contracts |

## Working Rule
When editing the prototype UI:

1. Read `prototypes/ehr-pwa/DESIGN.md` before changing visual styling.
2. Change DESIGN.md first when the visual standard changes.
3. Reflect the change in `src/styles.css`.
4. Run `npm run design:lint` and `npm run check:spacing`.
5. Use Playwright checks when the change affects layout, density, responsive
   behavior, or state visibility.

## Known Caveat
The upstream DESIGN.md format is currently `alpha`. This repo should keep the
prototype file conservative and avoid relying on speculative schema features.
Domain-specific clinical component rules should remain in prose where the
component-token schema is still evolving.

## Sources
- [Source Note: DESIGN.md Format Specification](../source-notes/design-md-format-specification.md)
- [EHR Prototype Spacing Governance](ehr-prototype-spacing-governance.md)
