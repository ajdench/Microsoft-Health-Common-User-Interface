# Toolkit Control Inventory

## Retrieved control families
- `PatientBannerControl`: patient context header and related demographic/allergy presentation.
- `NameLabelControl` and related input/display components: name formatting and entry.
- `IdentifierLabelControl` and input components: patient identification number display and entry.
- `DateInputBoxControl`, `DateLabelControl`, `TimeInputBoxControl`, `TimeLabelControl`, `TimeSpan*` controls: date/time entry and display.
- `GenderLabelControl` and gender input components.
- `Address*`, `Contact*`, `Telephone*`, `Email*` controls.
- `MedicationLineControl`, `MedicationGridControl`, `MedicationNameLabelControl`.
- `PatientSearchInputBoxControl`.
- `SearchAndPrescribeControl`.
- `GraphingControl`, `GenericGridControl`, and related sample website components.

## Platform coverage
- ASP.NET Web Forms / AJAX-era controls in `NhsCui.Toolkit.Web`.
- WinForms controls in `NhsCui.Toolkit.WinForms`.
- WPF-oriented controls in `Microsoft.Cui.Controls` and `Microsoft.Cui.WPFControls`.

## Synthesis
- The toolkit provides both atomic formatting/display controls and larger composite clinical controls.
- Patient context and medication handling appear to be the most strategically important domains.

## Modern interpretation
- Likely modern component layers:
- formatting primitives: identifier, date/time, name, contact, dosage.
- context composites: patient banner, allergy summary, patient header.
- workflow composites: medication list, prescribing workspace, administration chart.

## Related derived inventory
- [Toolkit file inventory](../../derived/inventories/toolkit-file-inventory.md)
