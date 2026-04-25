# Source Note: DESIGN.md Format Specification

## Source
- Title: DESIGN.md format specification
- Publisher / project: Google Labs Code / Stitch
- Original URLs:
  - <https://stitch.withgoogle.com/docs/design-md/specification>
  - <https://github.com/google-labs-code/design.md>
  - <https://raw.githubusercontent.com/google-labs-code/design.md/main/docs/spec.md>
- Access date: 2026-04-25
- Local files:
  - `raw/sources/references/design-md/spec.md`
  - `raw/sources/references/design-md/README.md`
  - `raw/sources/references/design-md/LICENSE`

## Provenance Note
This is current external design-system tooling guidance, not recovered Health
CUI source material. It is stored in `raw/sources/references/` because it is a
modern reference used to govern companion prototype work.

## What It Provides
DESIGN.md defines a plain-text format for giving coding agents a persistent
visual-identity and design-system reference. The current spec combines:

- YAML front matter for machine-readable tokens.
- Markdown sections for human-readable rationale and use guidance.
- Color, typography, spacing, radius, and component-token groups.
- A canonical section order covering overview, colors, typography, layout,
  elevation, shapes, components, and practical do/don't rules.
- CLI validation, diffing, export, and spec-output commands through
  `@google/design.md`.

## Trust And Caveats
The source is high-trust for the format itself because it comes from the
project repository and official documentation. The main caveat is maturity: the
repository identifies the format as `alpha`, so this wiki should treat the file
shape as a useful current convention rather than a stable long-term standard.

## Relevance To This Wiki
DESIGN.md is useful here because the Health CUI corpus already separates
source guidance, component behavior, safety rationale, and modern mapping work.
The new format gives the prototype app a compact, agent-readable design
contract that can sit beside CSS and implementation tests.

It should not be used to blur historical boundaries. A prototype `DESIGN.md`
can encode a modern reinterpretation of Health CUI-informed principles, but it
does not turn that reinterpretation into historical Health CUI fact.

## Follow-On Pages
- [DESIGN.md UI Standard For The EHR Prototype](../companion-web-app-stack/design-md-ui-standard.md)
- [EHR Prototype Spacing Governance](../companion-web-app-stack/ehr-prototype-spacing-governance.md)
