# Health CUI Overview

## Retrieved facts
- Microsoft Health Common User Interface (Health CUI) was developed with the NHS in England to improve patient safety and clinician effectiveness through consistent clinical UI design and supporting toolkit controls.
- The public Microsoft launch was announced on 10 September 2007, with version 1.3 announced on 13 May 2008.
- The localized corpus in this repo includes the toolkit source mirror plus 58 bundled guidance PDFs and crib sheets copied from the sample website inside that mirror.
- NHS retrospective sources state that nine Common User Interface standards were published in 2010 and deprecated in 2019.

## What this repo now contains
- Raw toolkit source under `raw/sources/toolkit/mscui`.
- Primary guidance PDFs and crib sheets under `raw/sources/design-guidance/`.
- Archived NHS and ISB standards/compliance material under `raw/sources/references/nhs-archives/`.
- Extracted text and normalized markdown in `derived/`.
- Maintained wiki pages in `wiki/`.

## Synthesis
- Health CUI was not just a component library. It was a combined programme of design guidance, sample implementations, controls, roadmap communication, and patient-safety framing.
- The historically strongest areas in the current corpus are patient context display, identification, medication presentation, clinician data entry, alerts/decision support, and table/list manipulation.
- The corpus now also shows a meaningful afterlife: supplier uptake claims, demonstrators, later NHS requirements references, and recent research combining CUI with the NHS Design System.

## Modern reinterpretation
- Health CUI is most useful today as a source of safety-sensitive interaction patterns for clinician-facing systems rather than as a ready-to-ship visual style.
- The most reusable ideas are consistency of patient context, careful handling of medication information, explicit alert prioritization, and support for dense clinical workflows under time pressure.

## Uncertainty
- Some historically referenced websites and release pages are still only represented by references or mirrors rather than fully re-acquired originals.
- The repo should treat the toolkit mirror as strong evidence, but not assume it is a perfect or complete preservation of every historical release.

## Related sources
- [Toolkit mirror source note](../source-notes/toolkit-mirror-mscui.md)
- [Bundled design-guidance corpus source note](../source-notes/bundled-design-guidance-corpus.md)
- [Microsoft launch press release source note](../source-notes/microsoft-health-cui-launch-2007.md)
- [ISB 1500-1508 archive branch](../source-notes/isb-1500-1508-archive-branch.md)
- [CUI CAPS compliance artefacts](../source-notes/cui-caps-compliance-artefacts.md)
- [Adoption, Retirement, and Afterlife](adoption-retirement-and-afterlife.md)
