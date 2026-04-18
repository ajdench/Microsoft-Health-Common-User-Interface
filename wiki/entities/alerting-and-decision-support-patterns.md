# Alerting And Decision Support Patterns

## Retrieved source basis
- [Design Guidance Exploration -- Decision Support](../source-notes/design-guidance-exploration-decision-support.md)
- [Design Guidance -- Displaying Adverse Drug Reaction Risks](../../derived/normalized-markdown/design-guidance/design-guidance-displaying-adverse-drug-reaction-risks.md)

## Structured pattern inventory
| Pattern | Historical basis | Why it matters | Modern relevance |
| --- | --- | --- | --- |
| Explicit decision-support capability status | Decision Support exploration includes active/inactive capability communication | Prevents over-trust when support is unavailable or partial | Still valid |
| Priority-grouped alert containers | Alerts are grouped by `High Priority` and `Priority` with different default states | Supports triage without making every alert maximally interruptive | Still valid |
| Summary first, explanation on demand | Information windows include summary plus deeper explanation areas | Preserves speed while still supporting review and accountability | Still valid |
| New-alert pop-up summary | Exploration includes pop-up notification for newly generated high-priority alerts | Helps surface change without forcing full modal workflows | Valid with reinterpretation |
| Choice lists with graded preference | The exploration distinguishes recommendation from warning | Makes system support more nuanced than binary alerting | Valid with reinterpretation |
| Explicit incomplete-coverage messaging | ADR guidance notes that not every recorded risk will trigger alerts | Prevents dangerous assumptions about automated coverage | Still valid |

## Modern mapping
- `components`: alert badge, grouped alert panel, decision-support status badge, inline evidence drawer
- `patterns`: non-modal alert review, escalated high-priority default expansion, recommendation lists with provenance
- `governance rules`: reserve interruption for justified cases, separate system status from clinical content, communicate coverage limits clearly

## Cautions
- This part of the corpus is partly exploratory rather than wholly finalized.
- Local governance may require a richer priority model than the historical two-level example.

