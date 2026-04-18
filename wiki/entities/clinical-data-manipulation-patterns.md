# Clinical Data Manipulation Patterns

## Retrieved source basis
- [Design Guidance -- Filtering Sorting and Grouping](../source-notes/design-guidance-filtering-sorting-and-grouping.md)
- [Design Guidance -- Displaying Graphs and Tables](../../derived/normalized-markdown/design-guidance/design-guidance-displaying-graphs-and-tables.md)

## Structured pattern inventory
| Pattern | Historical basis | Why it matters | Modern relevance |
| --- | --- | --- | --- |
| Subset visibility | Filtering guidance emphasizes notifying users when they are viewing a subset of data | Prevents misreading filtered output as the whole record | Still valid |
| Explicit filter/sort/group state | The guidance treats data manipulation as part of clinical interpretation, not hidden system state | Supports safe reasoning about what is on screen | Still valid |
| Progressive narrowing | Filter criteria and search narrowing are designed to help focus large datasets | Reduces cognitive load on dense records | Still valid |
| Reversible manipulation controls | Sorting and filtering flows include clear removal/reset operations | Helps clinicians recover from stale or misleading views | Still valid |
| Keyboard-efficient dense-data workflows | Historical guidance values speed for repeated data tasks | Important in clinician-facing grids and medication tables | Valid with reinterpretation |

## Modern mapping
- `components`: active-state chips, table toolbar, subset-status banner, result-count summary
- `patterns`: filter drawer plus persistent state summary, sortable headers with visible direction, grouped clinical lists
- `governance rules`: never hide active filters, never imply a filtered subset is complete data, make reset obvious

## Cautions
- The old desktop control patterns should be adapted, not copied, into responsive web.
- Generic enterprise data-grid defaults are often too opaque for clinical work.

