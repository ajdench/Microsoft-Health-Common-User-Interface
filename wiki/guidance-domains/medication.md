# Medication

## Retrieved facts
- The Medication Line guidance was motivated by medication incidents involving incorrect dose, incorrect strength or frequency, omitted medicine, and wrong medicine.
- The guidance defines a standard attribute order for medication text and mandates the `DOSE` label before dose values.
- The guidance also requires wrapping rather than truncating medication line information and separating one medication line from the next with visible white space.
- The drug-administration guidance treats the administration view as part of a medications framework and requires the chart to accurately reflect medications that were current during the visible time window.

## Historically strong patterns
- Explicit formatting of dose amount and units.
- Stable ordering of medication attributes.
- Medication views that differentiate current and past medications clearly.
- Search-and-prescribe workflows that help clinicians choose the right medication representation.

## Synthesis
- The medication corpus is concerned with preventing misreading, misassociation, and omission under dense display conditions.
- It assumes medication review is a recurring, high-risk, multi-view workflow rather than a one-off form.

## Modern interpretation
- The most reusable modern ideas are:
- `components`: medication line renderer, medication list row, dose formatter, schedule/history panel.
- `patterns`: current/past medication split, review list plus details, prescribing flow with clear preview/confirmation states.
- `governance rules`: never truncate critical medication attributes silently; preserve unambiguous dose display; standardize medication attribute order.

## Current relevance
- `still valid`: explicit dose salience, stable medication attribute order, no silent truncation, preview before authorization
- `valid with reinterpretation`: progressive search, prioritised-result sections, cascading selection, keyboard accelerators
- `historically interesting only`: literal label casing and exact example layouts

## Cautions
- Some specific typography and line-break rules were tuned for narrow, desktop list layouts and need reinterpretation for responsive web.
- Medication decision support should be integrated with, but not reduced to, visual formatting alone.

## Related sources
- [Design Guidance -- Medication Line](../source-notes/design-guidance-medication-line.md)
- [Design Guidance -- Search and Prescribe](../source-notes/design-guidance-search-and-prescribe.md)
- [Medication Review And Prescribing Workflow](../entities/medication-review-and-prescribing-workflow.md)
- [Medication Patterns](../entities/medication-patterns.md)
- [Medication Line Checklist](../entities/medication-line-checklist.md)
- [Design Guidance -- Medication Line](../../derived/normalized-markdown/design-guidance/design-guidance-medication-line.md)
- [Design Guidance -- Search and Prescribe](../../derived/normalized-markdown/design-guidance/design-guidance-search-and-prescribe.md)
- [Design Guidance -- Drug Administration](../../derived/normalized-markdown/design-guidance/design-guidance-drug-administration.md)
