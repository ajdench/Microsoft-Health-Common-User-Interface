# Health CUI to Modern Web UI

## Directly supported by historical sources
- Persistent patient context is safety-critical.
- Medication information requires careful formatting, labeling, and stable ordering.
- Filtering, sorting, and alert states must be visible and understandable.
- Design decisions were explicitly tied to clinician workflow and patient-safety concerns.

## Inferred mapping to modern web practice
- Persistent desktop banners become sticky patient-context shells in web apps.
- Historical line-based medication formatting becomes reusable renderers with strict spacing, emphasis, and truncation rules.
- Alert containers become composable panels, drawers, and inline surfaces rather than always modal interruptions.
- Historical table-manipulation guidance maps well to explicit toolbar state, filter chips, and sortable clinical tables.

## What still feels valid
- Treat usability as a clinical-safety issue.
- Standardize patient context across modules.
- Make transformed data states visible.
- Prefer clarity over visual novelty in high-risk workflows.

## What is historically interesting but should not be adopted directly
- Desktop-era fixed layout assumptions.
- Technology-specific patterns from Web Forms, WinForms, WPF, and Silverlight.
- Any appearance-level standard that conflicts with modern accessibility, responsiveness, or browser interaction norms.

## Practical output for a modern stack
- `design tokens`: emphasis, semantic priority, patient-status states, table-density scales.
- `components`: patient banner, identifier formatter, medication line, alert summary, filter notification bar.
- `page templates`: chart review, prescribing workspace, medication administration view, patient search/result selection.
- `governance rules`: no silent truncation of critical data, explicit filter state, explicit patient-switch confirmation, explicit decision-support availability.
