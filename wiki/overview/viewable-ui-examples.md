# Viewable UI Examples

## Retrieved facts
- The localized toolkit mirror includes a full sample website under `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/`.
- That sample website preserves ASP.NET sample pages, design-guidance quick-guide pages, showcase thumbnails, a small WMV media file, and a downloadable Care Pathways demonstrator MSI.
- The toolkit README says the original `mscui.net` site provided examples of toolkit controls and interactive sample pages.
- `PatientJourneyDemonstrator.htm` says the Patient Journey Demonstrator was not available as a code download.
- As checked on 2026-04-19, `mscui.net` and `pjd.mscui.net` were no longer serving the original public experience and were responding from a parking host instead.

## Plain answer
- Yes, UI examples were provided.
- Yes, some examples can still be viewed locally in this repo today.
- The strongest surviving material is the toolkit sample website plus design-guidance imagery and showcase remnants.
- The original live Silverlight web experiences do not appear to remain publicly viewable now.

## Wiki UI preview gallery
These mirrored previews are included so the Astro/Starlight wiki UI can show representative surviving artefacts directly on the page. The set below prefers actual UI-heavy examples over generic showcase thumbnails.

![Medication preview example](/viewable-ui-examples/msp2190.png)

Source file: `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/QuickGuides/SearchPrescribe/images/msp2190.png`

![Search and prescribe surface](/viewable-ui-examples/search-and-prescribe.jpg)

Source file: `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/SearchAndPrescribe.jpg`

![Patient banner example](/viewable-ui-examples/patient-banner.gif)

Source file: `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/images/PatientBanner.gif`

![Clinical graphing example](/viewable-ui-examples/graphing.gif)

Source file: `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/graphing.gif`

![Single concept matching example](/viewable-ui-examples/single-concept-matching.jpg)

Source file: `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/SingleConceptMatching.jpg`

## What is directly viewable now

### Rendered static visuals
- `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/QuickGuides/SearchPrescribe/images/msp2190.png` — preserved prescribing preview UI with medication line and action buttons.
- `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/SearchAndPrescribe.jpg` — fuller prescribing surface with structured drug, dose, administration, duration, and authorization controls.
- `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/images/PatientBanner.gif` — side-by-side patient-banner guidance and toolkit control example.
- `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/graphing.gif` — dense multi-vital graphing screen with alerts, ranges, and time controls.
- `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/SingleConceptMatching.jpg` — terminology search and matching surface with result list and detail pane.
- `raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/QuickGuides/GenderSex/images/` — preserved control and option illustrations for that guidance area.

### Inspectable sample-page implementations
- [Extended Patient Banner sample](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Samples/PatientBanner/ExtendedPatientBanner.aspx) — composite patient banner example with expandable sections and additional demographic/context content.
- [Restyled Patient Banner sample](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Samples/PatientBanner/RestyledPatientBanner.aspx) — evidence that Microsoft expected the banner to be re-skinned while preserving behavior.
- [Date and Time sample](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Samples/DateTime/DateTimeSample.aspx) — concrete `DateInputBox` and `TimeInputBox` usage example.
- [Patient Search Input Box sample](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Samples/PSIB/PatientSearchInputBox.aspx) — free-text and structured patient-search parsing example.
- [Validators sample](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Samples/Validators/InputBoxValidators.aspx) — sample validation patterns for toolkit inputs.

### Preserved demonstrator artefacts
- [Demonstrators page](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Showcase/Demonstrators.aspx) — source for the showcase branch that embedded the Silverlight demonstrator host.
- [DemonstratorsPage.xaml](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.ShowcaseControls/DemonstratorsPage.xaml) — names the showcase experiences and describes their scenarios.
- [Default showcase video](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Showcase/Media/DefaultVideo.wmv) — a small preserved WMV media file.
- [Care Pathways demonstrator installer](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Showcase/Download/Microsoft%20Health%20CUI%20Care%20Pathways%20Demonstrator.msi) — preserved executable artefact for one demonstrator.
- [Patient Journey Demonstrator placeholder](../../raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/PatientJourneyDemonstrator.htm) — explicit statement that this demonstrator was not shipped as source download.

## What these examples are good for
- Reconstructing the visual and interaction character of the programme more concretely than the PDF corpus alone.
- Seeing how Microsoft combined safety-oriented formatting rules into larger clinician-facing workflows.
- Distinguishing between atomic toolkit controls, guidance illustrations, and more ambitious showcase demonstrations.

## Important limits
- Many of the preserved sample pages are source files rather than live rendered pages in the current wiki UI.
- The strongest directly viewable artefacts today are still images, thumbnails, page markup, and preserved media/installers.
- The repo proves that showcase and demonstrator experiences existed, but it does not preserve the full original live Silverlight site.
- Public historical URLs such as `http://pjd.mscui.net/default.htm` and `http://pjd.mscui.net/PrimaryCare.htm` should now be treated as historical references, not current destinations.

## Best next places to look
- [Showcase and Demonstrators Remnants](../source-notes/showcase-and-demonstrators-remnants.md)
- [Patient Journey Demonstrator 2008](../source-notes/patient-journey-demonstrator-2008.md)
- [Toolkit mirror](../source-notes/toolkit-mirror-mscui.md)
- [Archive Limits and Dead Ends](archive-limits-and-dead-ends.md)
