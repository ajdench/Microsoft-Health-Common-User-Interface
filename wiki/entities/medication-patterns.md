# Medication Patterns

## Retrieved source basis
- [Design Guidance -- Medication Line](../source-notes/design-guidance-medication-line.md)
- [Design Guidance -- Search and Prescribe](../source-notes/design-guidance-search-and-prescribe.md)

## Structured pattern inventory
| Pattern | Historical basis | Why it matters | Modern relevance |
| --- | --- | --- | --- |
| Stable medication attribute order | Medication Line guidance defines a preferred order and fallback labeling rules | Reduces scanning effort and misassociation under pressure | Still valid |
| Explicit dose labeling | Medication Line mandates `DOSE` before dose values | Gives clinicians a reliable visual anchor for one of the riskiest attributes | Still valid |
| Wrap, do not truncate | Medication Line repeatedly prohibits truncation of critical medication text | Avoids silent omission of key dose, route, or frequency details | Still valid |
| Current vs past medication distinction | Medications guidance separates current and historical review contexts | Prevents temporal ambiguity in medication review | Still valid |
| Progressive search with prioritization | Search and Prescribe recommends progressive search and prioritised result sections | Balances speed with safer narrowing and selection | Valid with reinterpretation |
| Cascading selection for constrained attributes | Search and Prescribe uses cascading lists for route/form/strength choices | Prevents invalid combinations and narrows decisions progressively | Valid with reinterpretation |
| Preview before authorisation | Search and Prescribe treats preview and authorisation as distinct stages | Preserves a deliberate final verification step | Still valid |

## Modern mapping
- `components`: medication line renderer, search results list, prioritised-result section, prescription preview card
- `patterns`: review list plus detail pane, constrained selection flow, final authorization checkpoint
- `governance rules`: no silent truncation, preserve explicit dose language, keep unsafe ambiguity visible

## Cautions
- Historical exact typography and label capitalization are less important than preserving semantic salience.
- Modern e-prescribing implementations should be checked against current regulatory and clinical workflow requirements.

