# Layout and Navigation

## Retrieved facts
- The filtering, sorting, and grouping guidance recommends presenting controls in the order `filter`, then `sort`, then `group by`, reflecting observed clinician workflow.
- The guidance insists that filtered data must be visibly identified as filtered and recommends a prominent notification area attached to the relevant table.
- The Find a Patient guidance discusses grouped search forms, sortable result columns, and search UI that may sit within global navigation.
- The patient banner guidance states that banner positioning must optimize quick and accurate patient identification.

## Historically strong patterns
- Prominent state communication when data has been transformed.
- Structured grouping of search inputs and search results.
- Clinician-oriented table manipulation rather than purely decorative data tables.
- Layout decisions driven by speed, clarity, and reduced misinterpretation.

## Synthesis
- In Health CUI, navigation is tightly linked to information state, not just page movement.
- A clinically safe layout must help users understand what patient they are in, what subset of data they are seeing, and what actions are available next.

## Modern interpretation
- Good modern web mappings include:
- sticky patient-context region plus page-level breadcrumbs or workflow labels.
- table toolbars that show active filters and allow quick removal.
- search-and-select patterns that expose sort state clearly.
- dense but readable list/detail layouts for record review.

## Current relevance
- `still valid`: explicit subset visibility, visible filter/sort/group state, easy reset/removal of transformed views
- `valid with reinterpretation`: desktop toolbar patterns, progressive sorting behavior, older navigation control layouts
- `historically interesting only`: literal control styling and desktop-era interaction arrangements

## Cautions
- Some historical assumptions reflect desktop software with abundant width and persistent panels.
- Modern responsive layouts should keep state visibility and safe transitions even when sidebars collapse or panels move.

## Related sources
- [Design Guidance -- Filtering Sorting and Grouping](../source-notes/design-guidance-filtering-sorting-and-grouping.md)
- [Clinical Data Review Workflow](../entities/clinical-data-review-workflow.md)
- [Clinical Data Manipulation Patterns](../entities/clinical-data-manipulation-patterns.md)
- [Clinical Table State Checklist](../entities/clinical-table-state-checklist.md)
- [Design Guidance -- Filtering Sorting and Grouping](../../derived/normalized-markdown/design-guidance/design-guidance-filtering-sorting-and-grouping.md)
- [Design Guidance -- Find a Patient](../../derived/normalized-markdown/design-guidance/design-guidance-find-a-patient.md)
