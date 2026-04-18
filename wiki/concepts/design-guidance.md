# Design Guidance

## Retrieved facts
- The localized corpus currently contains 37 main design-guidance and exploration PDFs plus 21 crib sheets.
- The documents cover concrete topics such as patient banner, patient identification number, patient name, date/time, address, medication line, medications views, search and prescribe, adverse drug reaction risks, filtering/sorting/grouping, and timeline view.
- The Patient Banner PDF is version `4.0.0.0`, dated 28 January 2010, and explicitly lists related documents to be read together.

## How the guidance works
- The guidance documents are more specific than a style guide. They combine scope statements, safety rationale, examples of correct and incorrect usage, and numbered guidance statements.
- Crib sheets provide single-page visual summaries and appear designed for practical implementation and review conversations.

## Synthesis
- This is a rules-and-rationale corpus, not just inspirational design material.
- Many topics are interdependent. For example, patient banner guidance depends on separate guidance for date display, time display, patient identification numbers, gender display, accessibility, and address formatting.

## Modern interpretation
- The historical guidance can inform design tokens, component APIs, and workflow patterns, but it should be translated into modern responsive/web-native patterns rather than copied literally.
- The strongest modern use is to preserve intent, data hierarchy, wording clarity, and safety checks while rethinking layout, accessibility implementation, and interaction techniques for current platforms.

## Uncertainty
- Some guidance pages on the sample website may encode additional context beyond the downloadable PDFs; future passes should compare them more closely.

## Related sources
- [Bundled design-guidance corpus](../source-notes/bundled-design-guidance-corpus.md)
- [Guidance document inventory](../../derived/inventories/guidance-document-inventory.md)
