# Adoption, Retirement, and Afterlife

<blockquote>
<p><strong>Plain English context</strong></p>
<p>This page answers a practical historical question: did Health CUI only exist as guidance and demos, or did it actually travel into real products and later NHS work? The evidence in this repo now shows a mixed but meaningful afterlife.</p>
</blockquote>

## Retrieved facts
- A March 2007 Digital Health report said EMIS planned to incorporate CUI elements into EMIS Web and that INPS was also looking at guidance adoption.
- A September 2007 Digital Health launch report said NHS adoption was still limited at that point and described EMIS as the largest supplier then beginning to incorporate CUI into products.
- A 2008 paper described the Patient Journey Demonstrator as an exemplar implementation built in Silverlight 2 and said it increased interest in the programme.
- A 2008 System C investor statement said Medway Sigma became the first trust-wide UK product available to standardize on the new CUI developed jointly by Microsoft and the NHS.
- A July 2009 Digital Health report said EMIS and CareWorks were Microsoft award finalists and that iLink Systems had used HealthVault plus Health CUI in a community-based personal health record implementation.
- A November 2009 Digital Health report said Aintree University Hospitals NHS Foundation Trust had gone live with System C's Medway Sigma Clinician's Desktop across more than 1,000 staff, including 700 clinicians, with up to 3,000 users expected by early 2010, and said the Sigma suite incorporated significant CUI elements.
- A February 2012 Indra article said Valencia's ABUCASIS programme adapted Microsoft Health Common User Interface principles and reported coverage of 98% of the Valencian population, all primary-care centers, hospital outpatient clinics, and more than 15,000 daily users.
- The recovered CodePlex archive shows a release history running from July 2007 to May 2010.
- 2015 NHS follow-on requirements for EPaCCS and palliative-care co-ordination still said CUI demographic standards `MUST` be followed and broader CUI guidance `SHOULD` be followed.
- NHS Digital's 4 July 2019 withdrawal blog says the standards had become outdated, had not been updated since the closure of NHS Connecting for Health in 2013, and no longer matched current design/build practice.
- A 2024 paper explicitly combined NHS CUI and the NHS Design System and found Patient Banner and Patient Name Input components were still feasible modern targets, while also identifying inconsistencies.
- A current Civica product page still references relevant CUI guidance such as the patient banner.

## What the evidence suggests
- Health CUI was more than an internal Microsoft exercise. It reached suppliers, demonstrators, release channels, and later requirements writing.
- The strongest evidence of real uptake is not "the NHS standardized everything around it." It is narrower:
- supplier adoption claims
- named product-line integration claims
- at least one trust-wide System C deployment example
- a substantial Valencia/ABUCASIS regional adaptation claim
- demonstrator/showcase work
- downstream requirements that kept referencing it
- later research and product pages that still find parts of it useful

## Why it was retired
- The official NHS Digital explanation is that the standards became out of date as the digital landscape shifted from desktop-era assumptions toward mobile devices, tablets, touch, and newer design/build methods.
- The standards were no longer maintained after NHS Connecting for Health closed in 2013.
- NHS Digital also said the old patient banner pattern was not meeting current accessibility and usability expectations in some services.
- A second reason was governance clarity: the standards were still being referenced in contracts and requirements, so a formal deprecation was needed instead of leaving them in ambiguous limbo.
- The official position was not that all CUI thinking was worthless. NHS Digital said some data elements still had residual value and should be separated from outdated presentation assumptions.

## Best current interpretation
- The programme appears historically successful as a safety-oriented guidance corpus, demonstrator set, and partial supplier influence layer.
- The evidence is now strong enough to say CUI principles reached real implementations, but not strong enough to quantify adoption comprehensively across all named suppliers, trusts, or regions.
- It appears less successful as a permanently maintained, universally adopted national UI standard.
- The patient banner and demographic-display standards had the strongest afterlife.
- Medication, workflow, and navigation guidance are still conceptually rich, but their survival seems to be more indirect and interpretive than formally maintained.

## Uncertainty
- There is still not enough localized evidence to prove exact deployment depth across every supplier Microsoft named in 2007.
- Some cited implementation examples are industry press or vendor claims rather than audited deployment records.
- CodePlex archive attachments remain partly inaccessible because direct readme/package URLs currently reject unauthenticated fetches.
- The old `cui.nhs.uk` programme site now looks close to exhausted in the surviving archive, but one discovered `Default.aspx` path still sits behind a fresh WAF challenge.

## Related sources
- [CodePlex Archive MSCUI](../source-notes/codeplex-archive-mscui.md)
- [EMIS commitment 2007](../source-notes/emis-commitment-2007.md)
- [Digital Health CUI launch and limited NHS adoption 2007](../source-notes/digital-health-cui-launch-2007.md)
- [System C Medway Sigma adoption](../source-notes/system-c-medway-sigma-cui-adoption.md)
- [EMIS, CareWorks, and iLink 2009](../source-notes/emis-careworks-and-ilink-2009.md)
- [Indra Valencia / ABUCASIS 2012](../source-notes/indra-valencia-abucasis-2012.md)
- [Patient Journey Demonstrator 2008](../source-notes/patient-journey-demonstrator-2008.md)
- [NHS follow-on CUI references 2015](../source-notes/nhs-follow-on-cui-references-2015.md)
- [NHS Digital withdrawal blog 2019](../source-notes/nhs-digital-withdrawal-blog-2019.md)
- [HCI modelling 2024](../source-notes/hci-modelling-cui-and-nhs-design-system-2024.md)
- [Civica Care Records CUI reference](../source-notes/civica-care-records-cui-reference.md)
