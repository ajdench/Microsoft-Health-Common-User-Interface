# EHR shadcn V2 Prototype

This page records the architectural pivot from the first EHR PWA prototype to a
clean shadcn-native V2 prototype.

It is companion-stack synthesis, not recovered Health CUI source material.

## Why V2 Exists
The first prototype was useful. It proved and refined the clinical contracts:

- persistent patient identity
- persistent online/local draft/sync state
- section-local coded content
- validation and follow-up tasks outside free text
- right-pane medications, alerts, and results
- spacing governance and browser layout checks

The later shadcn migration also showed a limit: the app was increasingly
fighting old markup, old CSS hooks, and layout assumptions. Continuing to
reshape V1 would mix design-system learning with migration cleanup.

V2 therefore keeps V1 as evidence and creates a clean implementation target.

## Prototype Location
`prototypes/ehr-shadcn-pwa/`

The new prototype starts from native shadcn/ui source components and app-owned
clinical wrappers. It reuses the clinical data shape and lessons, not the old
UI class structure.

## Initial V2 Contracts
| Surface | V2 direction |
| --- | --- |
| Patient identity | `PatientChrome`, persistent top clinical anchor |
| Sync/local state | `SyncStateBar`, always visible below patient chrome |
| Consultation section | `ConsultationSectionCard`, shadcn `Card` anatomy |
| Section coding | `SectionCodingField`, shadcn `Popover` + `Command` |
| Validation/actions | `ActionRail`, compact card contracts |
| Reference context | `ReferencePanel`, shadcn `Tabs`, `Alert`, `Table`, and `Card` |

## First Implementation
The first V2 implementation creates a consultation capture page with:

- patient chrome
- sync-state bar
- section-local coded content in each consultation section
- validation/follow-up action rail
- medication, alert, and results reference tabs
- unit and Playwright layout tests

The prototype is available locally during development at:

`http://127.0.0.1:5175/`

## Verification
Initial verification for V2:

- `npm run lint`
- `npm run check:spacing`
- `npm run test`
- `npm run build`
- `npm run e2e`
- `npm audit`

All passed on the first V2 implementation stage.

## Next Decisions
- Trim the V2 dependency graph once the component set stabilizes.
- Add offline draft persistence deliberately rather than inheriting V1 Dexie
  implementation details.
- Add visual screenshot baselines for patient chrome, coding fields, and right
  pane once the first-pass layout is reviewed.
- Decide whether V2 should become the active prototype after side-by-side review.
