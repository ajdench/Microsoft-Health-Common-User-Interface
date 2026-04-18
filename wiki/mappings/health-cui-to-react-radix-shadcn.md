# Health CUI to React / Radix / shadcn

## Inferred mapping
- `Patient banner`: React layout component using sticky positioning, semantic regions, and dedicated subcomponents for name, DOB, identifier, gender, and status.
- `Alert container`: Radix `Collapsible`, `Popover`, or `Dialog` only where interruption is justified; otherwise inline surfaces and drawers are safer defaults.
- `Filtered table state`: shadcn table tooling plus explicit filter summary bar above the table, never hidden in a menu alone.
- `Medication line`: custom renderer component, not a generic text cell, because ordering, spacing, bolding, and wrapping behaviour are safety-relevant.

## Suggested component decomposition
- `PatientContextShell`
- `PatientIdentityBlock`
- `PatientStatusFlags`
- `MedicationLine`
- `MedicationListTable`
- `DecisionSupportStatus`
- `AlertInboxPanel`
- `ClinicalFilterSummary`

## Suggested implementation rules
- Avoid uncontrolled truncation in key data cells.
- Encode alert priority and patient-status semantics in typed props, not ad hoc class names.
- Prefer headless primitives for interaction while keeping domain-specific rendering logic in app-owned components.
- Write tests around formatting and state visibility, especially for identifiers, dose strings, and active filter state.

## Caution
- Radix and shadcn provide primitives, not clinical semantics. The Health CUI value is mainly in the domain rules that should sit above those primitives.
