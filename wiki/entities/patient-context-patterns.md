# Patient Context Patterns

## Retrieved source basis
- [Design Guidance -- Patient Banner](../source-notes/design-guidance-patient-banner.md)
- [Bundled design-guidance corpus](../source-notes/bundled-design-guidance-corpus.md)

## Structured pattern inventory
| Pattern | Historical basis | Why it matters | Modern relevance |
| --- | --- | --- | --- |
| Persistent patient-context shell | Patient banner guidance requires a stable identification area when a single patient record is open | Reduces wrong-patient risk during navigation and task switching | Still valid |
| Minimum identity cluster | Banner guidance defines a minimum data set for safe identification | Forces consistent presence of the most safety-critical fields | Still valid |
| Primary vs supplementary context split | Zone 1 carries core identity; Zone 2 carries supplementary context | Keeps supporting information available without displacing core identifiers | Valid with reinterpretation |
| Deceased-patient differentiation | Banner guidance mandates a clearly differentiated deceased-patient state | Prevents misreading a deceased record as current/active | Still valid |
| In-line access to definitions and records | Banner guidance recommends access to definitions and record detail from labels/data items | Helps resolve ambiguity without forcing context switches | Valid with reinterpretation |
| Allergy summary in patient context | Banner guidance reserves supplementary space for allergy propensity | Keeps high-salience risk context close to identity | Valid with reinterpretation |

## Modern mapping
- `tokens`: patient-context emphasis, deceased-state styling, warning-state spacing and hierarchy
- `components`: patient banner, patient identity block, identifier formatter, context summary chips
- `composite patterns`: sticky patient shell, record-switch confirmation, compact/expanded context modes

## Cautions
- The historical two-zone geometry should not be copied literally into mobile or narrow web layouts.
- Hover-based disclosure and desktop assumptions should be reworked for accessibility and responsive behavior.

