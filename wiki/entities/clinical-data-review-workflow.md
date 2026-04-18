# Clinical Data Review Workflow

<blockquote>
<p><strong>Plain English context</strong></p>
<p>Filtering, sorting, grouping, and patient search are part of clinical reasoning in this corpus. The workflow risk is that a user sees transformed data and mistakes it for the whole record.</p>
</blockquote>

## Source basis
- [Design Guidance -- Filtering Sorting and Grouping](../source-notes/design-guidance-filtering-sorting-and-grouping.md)
- [Clinical Data State Rules](clinical-data-state-rules.md)
- [Layout and Navigation](../guidance-domains/layout-navigation.md)

## Workflow shape
1. Start from a table or list that represents a full result set.
2. Apply filter, sort, or grouping controls in a predictable order.
3. Keep the transformed-state notice attached to the data it affects.
4. Make the active sort/group state visible where interpretation happens.
5. Provide a clear reset path back to the untransformed view.

## Historically strong carry-overs
- Attached filtered-state notice
- In-place sort indicators
- Reversible groupings
- Keyboard-efficient access for frequent users

## Modern interpretation
- This translates directly into modern clinical tables, search-result workspaces, and result-review panels.
- The key lesson is not the old toolbar layout. It is the insistence that transformed-state visibility is a patient-safety issue.

## Related wiki pages
- [Layout and Navigation](../guidance-domains/layout-navigation.md)
- [Clinical Table State Checklist](clinical-table-state-checklist.md)

