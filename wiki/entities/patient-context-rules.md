# Patient Context Rules

<blockquote>
<p><strong>Plain English context</strong></p>
<p>These are the historically strongest patient-context rules in the corpus. They matter because Health CUI treated wrong-patient risk as a user-interface problem, not only a training problem.</p>
</blockquote>

## Source basis
- [Design Guidance -- Patient Banner](../source-notes/design-guidance-patient-banner.md)
- [ISB 1500-1508 archive branch](../source-notes/isb-1500-1508-archive-branch.md)
- [CUI CAPS compliance artefacts](../source-notes/cui-caps-compliance-artefacts.md)

## Rule extraction
| Source anchor | Historical rule | Why the historical source cared | Modern interpretation |
| --- | --- | --- | --- |
| `PAB-0073` | The patient banner must include `Zone 1`. | Core identity data had to stay persistently visible when a single patient record was open. | Keep a durable identity block visible across record views. |
| `PAB-0017` | For a living patient, the banner additionally displays contact details. | Identification was treated as a cluster of cues, not a single identifier string. | Allow supporting context, but keep it secondary to core identity. |
| `PAB-0018` and `PAB-0024` | For a deceased patient, show last known contact details, date of death, and age at death. | The UI had to make deceased-patient context hard to misread. | Include explicit deceased-state information close to primary identity. |
| `PAB-0031` | Allergy propensity information may be shown in `Zone 2`. | The banner could carry high-salience supplementary risk information without displacing core identity. | Put cautionary context near the patient shell, but do not let it dominate identity confirmation. |
| `PAB-0055` and `PAB-0056` | A deceased patient requires both color and pattern differentiation. | The source explicitly avoids relying on one visual cue alone. | Use redundant cues, not color alone, for high-risk patient-status states. |
| ISB 1505 description | The standard specifies minimum information, grouping, layout, labeling, size, and location for the patient banner. | Patient context was formalized as a standard, not just an aesthetic suggestion. | Treat patient-context shells as governed clinical patterns with explicit requirements. |

## Notes
- The historical `Zone 1` / `Zone 2` language is useful conceptually even if the exact geometry should not be copied directly.
- The compliance checklist gives a practical route for turning these rules into review criteria.

