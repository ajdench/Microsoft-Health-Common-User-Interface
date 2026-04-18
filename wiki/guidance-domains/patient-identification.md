# Patient Identification

## Retrieved facts
- The Patient Banner guidance defines the banner as the UI area most often used for cross-checking that the correct patient record is in view.
- The Patient Banner document calls for a minimum data set and emphasizes ordering, grouping, and positioning of patient-identifying information.
- The Patient Identification Number guidance requires displaying the identifier in full, on a single line, grouped for readability, and without truncation.
- The Patient Name guidance treats family name and given name as crucial for correct patient identification.

## Historically strong patterns
- Persistent patient banner near the top of the clinical workspace.
- Consistent ordering of name, date of birth, gender, and patient identification number.
- Special handling for deceased-patient status, including date of death and distinct styling.
- Supportive but demoted supplementary information such as contact details and allergies.

## Synthesis
- Health CUI frames patient identification as a composite pattern, not a single field.
- The corpus suggests that safe patient identification depends on a stable cluster of cues presented consistently across screens.

## Modern interpretation
- Modern clinician-facing web apps should preserve a durable patient-context shell across record views.
- Good candidates for modern design-system assets:
- `tokens`: emphasis, status colors/patterns for deceased or cautionary states, spacing for patient context blocks.
- `components`: patient banner, identifier formatter, patient name formatter, allergy summary chip/list.
- `composite patterns`: sticky patient-context header, patient-switch transitions that visibly confirm context change.

## Current relevance
- `still valid`: persistent patient-context shell, minimum identity cluster, explicit deceased-patient differentiation
- `valid with reinterpretation`: supplementary context expansion, allergy summary placement within the banner, in-context definitions and record links
- `historically interesting only`: literal zone geometry, fixed desktop assumptions, hover-first disclosure

## Cautions
- The exact historical layout was designed for desktop-era fixed-width views.
- Modern responsive layouts should preserve hierarchy and visibility rather than literal geometry.

## Related sources
- [Bundled design-guidance corpus](../source-notes/bundled-design-guidance-corpus.md)
- [Formal CUI Standards Family](../entities/formal-cui-standards-family.md)
- [Single Patient Record Workflow](../entities/single-patient-record-workflow.md)
- [Design Guidance -- Patient Banner](../source-notes/design-guidance-patient-banner.md)
- [Patient Context Patterns](../entities/patient-context-patterns.md)
- [Patient Banner Checklist](../entities/patient-banner-checklist.md)
- [Design Guidance -- Patient Banner](../../derived/normalized-markdown/design-guidance/design-guidance-patient-banner.md)
