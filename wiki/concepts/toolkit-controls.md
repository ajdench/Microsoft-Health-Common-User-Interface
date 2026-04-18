# Toolkit Controls

## Retrieved facts
- The localized toolkit mirror includes Web, WinForms, and WPF-oriented control libraries.
- Major control families in the source tree include patient banner, name label/input, identifier label/input, gender display, date/time input and display, medication line/grid, search and prescribe, patient search, graphing, and timeline-related sample content.
- The toolkit README states that full source code, sample applications, and unit tests were distributed as part of the toolkit.

## Synthesis
- The toolkit is best seen as a reference implementation of parts of the guidance rather than a complete coverage layer for the whole corpus.
- Patient context and medication-related components are especially prominent.

## Modern interpretation
- For modern web work, these controls map more naturally to headless or semi-headless React component families than to monolithic widget libraries.
- The most important carry-over is not the exact .NET control design but the behavioural contract behind each control: what data it shows, what must remain consistent, and what safety risks it mitigates.

## What to preserve conceptually
- Strong component boundaries around patient context.
- Explicit formatting rules for high-risk data such as dose, identifiers, and date/time.
- Sample-backed composite patterns such as patient banner plus surrounding workflow views.

## What not to copy directly
- Platform assumptions tied to Web Forms, WinForms, WPF, or Silverlight.
- Visual styling details that were tuned for fixed-width, desktop-era interfaces without modern accessibility expectations.

## Related sources
- [Toolkit mirror source note](../source-notes/toolkit-mirror-mscui.md)
- [Toolkit file inventory](../../derived/inventories/toolkit-file-inventory.md)
- [Toolkit control inventory](../controls/toolkit-control-inventory.md)
