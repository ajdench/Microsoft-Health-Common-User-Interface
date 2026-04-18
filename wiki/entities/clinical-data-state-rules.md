# Clinical Data State Rules

<blockquote>
<p><strong>Plain English context</strong></p>
<p>Health CUI treats filtering, sorting, and grouping as clinical reasoning aids. That means the UI must make transformed data states obvious enough that clinicians do not mistake a subset for the full record.</p>
</blockquote>

## Source basis
- [Design Guidance -- Filtering Sorting and Grouping](../source-notes/design-guidance-filtering-sorting-and-grouping.md)
- [Layout and Navigation](../guidance-domains/layout-navigation.md)

## Rule extraction
| Source anchor | Historical rule | Why the historical source cared | Modern interpretation |
| --- | --- | --- | --- |
| `FSG-0001` | Provide controls for filtering, sorting, and grouping in that order. | The source aligns control order with observed clinician workflow. | Put the most common reasoning tools in a predictable, task-oriented order. |
| `FSG-0003` | Provide keyboard commands to access filtering, sorting, and grouping. | Frequent users needed speed, not only discoverability. | Preserve keyboard-efficient pathways for dense data tasks. |
| `FSG-0071` | Ensure the filter notification area is always attached to the corresponding table. | Users may not notice a transformed subset if the state indicator drifts away from the data. | Keep transformed-state messaging visually attached to the affected result set. |
| `FSG-0073` | Prefix the filter notification with `Data filtered to show`. | The wording makes subset state explicit and hard to miss. | Use plain, explicit subset language rather than subtle icon-only state. |
| `FSG-0099` | Display a sort indicator in the header cell of the sorted column. | Sort state must be visible where users interpret the column. | Show sort state in-place, not only in external toolbars or menus. |
| `FSG-0121` | Permit progressive sorting. | Multi-attribute sorting is clinically useful and should stay legible. | Support layered sort state when it materially helps interpretation. |
| `FSG-0131` | Allow grouping to be removed via `None`. | Grouping should be reversible and not trap the user in transformed state. | Always provide a clear reset path for grouped views. |

## Notes
- The strongest current relevance here is not the exact widget design but the insistence on visible, reversible data-state transformations.
- These rules are especially useful for tables, results lists, and medication or observation review surfaces.

