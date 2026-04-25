---
version: alpha
name: Health CUI EHR shadcn PWA Prototype V2
description: Clean shadcn-native visual standard for the consultation capture prototype.
---

## Purpose
This DESIGN.md governs `prototypes/ehr-shadcn-pwa`. It is a modern prototype
standard, not recovered historical Health CUI source material.

V2 exists because the first EHR PWA prototype proved the clinical contracts but
also accumulated legacy CSS and migration scars. V2 starts from native
shadcn/ui composition and app-owned clinical wrappers.

## Principles
- Patient identity and sync/local draft state are persistent clinical chrome.
- Coded content belongs inside the relevant consultation section.
- Free text remains available, but coded content is made first-class.
- Validation and follow-up tasks sit beside the consultation, not inside note
  text.
- Right-pane medications, alerts, and results are contextual reference surfaces.
- Tailwind utility composition is preferred for layout. Global CSS should define
  tokens and shadcn theme variables, not component-specific layout hacks.

## Components
- `PatientChrome`: patient identity, demographics, high-risk flags, draft state,
  and switch action.
- `SyncStateBar`: online, local save, recovered draft, and sync-failure action.
- `ConsultationSectionCard`: shadcn `Card` wrapper for section title, required
  status, section-local coded content, and note text.
- `SectionCodingField`: shadcn `Popover` and `Command` concept picker with
  selected codes attached to the section.
- `ActionRail`: validation state, follow-up task entry, and save/sign actions.
- `ReferencePanel`: shadcn `Tabs` for medications, alerts, and results.

## Do's And Don'ts
- Do compose shadcn primitives directly unless a clinical wrapper names a real
  product contract.
- Do keep status chips as `ClinicalBadge` wrappers over shadcn `Badge`.
- Do use full shadcn `CardHeader`/`CardTitle`/`CardDescription` composition for
  card-like headers instead of hand-styled header boxes.
- Do keep layout responsive with grid/flex utility classes and stable gaps.
- Do add tests with the component contract as soon as a new surface is added.
- Don't import V1 CSS class names or recreate V1's component-local spacing
  layer.
- Don't keep V1 libraries in the dependency graph unless V2 actively uses them.
- Don't make generic primitives own clinical meaning.
