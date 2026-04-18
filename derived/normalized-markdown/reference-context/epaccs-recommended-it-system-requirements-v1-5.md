# EPaCCS Recommended IT System Requirements v1.5

## Provenance
- Source file: `raw/sources/references/secondary/nhs-follow-on/epaccs-recommended-it-system-requirements-v1-5.pdf`
- Extracted text: `derived/extracted-text/reference-context/epaccs-recommended-it-system-requirements-v1-5.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

Document filename: EPaCCS Recommended IT System Requirements v1 5
Directorate / Programme     Architecture,     Project                              EPaCCS
                            Standards and
                            Innovation

Document Reference                            N/A
Project Manager             Katie Lindsey,    Status                               Draft
                            Jeri Hawkins

Owner                       Jeri Hawkins      Version                              1.5
Author                      Adam Hatherly     Version issue date                   14/09/2015
                            Tim Coates




EPaCCS Recommended IT
System Requirements




                                                Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                    V1.5    14/09/2015



Revision History
Version        Date         Summary of Changes
0.2            15/05/2013   Rebranded for HSCIC and extracted system requirements specifically for
                            publication in this document. Replaced eGIF reference with Government
                            Service Design Manual.
0.3            05/06/2013   Updated following feedback from NHS IQ and PHE.
1.0            30/07/2013   Updated following architect peer review
1.1            17/04/2015   Updated to align with updates to information standard – change to
                            requirement EPA-DAT-04.
1.2            24/04/2015   Tweak to fix mistake in requirements summary table
1.3            10/08/2015   Tweaks to align with latest SCCI standard documents
1.4            08/09/2015   Changes requested by NHS England (added EPA-INT-09)
1.5            14/09/2015   Removed Katie Lindsey from list of Approvers



Reviewers
This document must be reviewed by the following people:
Reviewer name                           Title / Responsibility                    Date               Version
Katie Lindsey                           Programme Manager, National
                                        End of Life Care Intelligence
                                        Network, Public Health England
Jeri Hawkins                            NHS Improving Quality –Delivery
                                        Team
HSCIC Solution Architect                Peer review
Inderjit Singh                          NHS England - Head of Enterprise
                                        Architecture



Approved by
This document must be approved by the following people:
Name                        Signature                 Title                        Date              Version
Jeri Hawkins




Document Control:
The controlled copy of this document is maintained in the HSCIC corporate network. Any
copies of this document held outside of that area, in whatever format (e.g. paper, email
attachment), are considered to have passed out of control and should be checked for
currency and validity.




Page 2 of 20                                             Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                       V1.5    14/09/2015



Contents
1 Introduction                                                                                    4
  1.1     Audience                                                                                 4
  1.2     Background                                                                               4
  1.3     Disclaimer                                                                               4

2 EPaCCS Functional Overview                                                                      5
3 Information Governance                                                                          7
4 Interoperability                                                                                7
5 Functional Requirements                                                                         9
  5.1     General                                                                                  9
  5.2     Patient Access                                                                         11
  5.3     Reporting                                                                              12
  5.4     Clinical Safety                                                                        13

6 Technical Requirements                                                                        14
  6.1     Data                                                                                   14
  6.2     Infrastructure                                                                         15
  6.3     User Interface                                                                         16

7 Requirements Summary                                                                          17
8 Glossary of Terms                                                                             18
9 References                                                                                    19




Page 3 of 20                                Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                               V1.5    14/09/2015




1 Introduction
This document outlines a number of system requirements that local teams and
commissioners can consider using when procuring or specifying an EPaCCS.
Requirements are listed as “MUST”, “SHOULD” or “MAY” as per the definitions in RFC2119
[Ref: 7]. Local teams may want to upgrade some of the “SHOULD” or “MAY” requirements
to be “MUST” if they feel that the requirement is particularly important.

1.1 Audience
The document is primarily aimed at commissioners who are planning on procuring an
EPaCCS, as well as providers and support organisations that may be looking to either
procure or build an in-house EPaCCS.
The document could also be used to assess the suitability of existing clinical systems to act
as an EPaCCS for the locality, and could then support additional feature requests for those
existing clinical systems.
Some of the requirements in this document may be considered challenging, and it is possible
that not all requirements will be appropriate in all cases. Where a local team is aware of
limitations in their existing IT landscape that make certain requirements difficult or impossible
to achieve they should take this into account and make amendments to ensure their local
requirements meet their needs and are achievable.

1.2 Background
The majority of these requirements are taken from the text of the SCCI requirement
specifications [Ref: 3], and the associated Record Keeping Guidance [Ref: 4] and
Implementation Guidance [Ref: 5] documents. They have been re-worded to form a concise
set of requirements, but in each case a reference back to the source of the requirement is
also included. In some cases, additional “Best Practice” requirements have also been added
to incorporate other best practice areas identified during discussions with EPaCCS teams
and other national teams.
This document was prepared by the QIPP Digital Technology team, a function within the
Health and Social Care Information Centre established to assist with the delivery of national
QIPP objectives, to support local teams to exploit digital technology in order to accelerate
delivery of their QIPP priorities [Ref:1].
The function focuses on helping to overcome digital challenges and barriers, to accelerate
delivery, to spread initiatives and to maximise the potential value from technology enabled
healthcare delivery

1.3 Disclaimer
This document is intended as a useful resource for teams looking to implement EPaCCS
systems in-line with the SCCI1580 standard. This document does not itself form part of an
agreed national standard (it is non-normative). In the event that information in this document
conflicts with the published SCCI requirement specification or other published national
standards, the published standards will take precedence.
Reference to any specific commercial product, process or service by trade name, trademark
manufacturer, or otherwise, does not constitute or imply its endorsement, recommendation,
or favouring by the Health and Social Care Information Centre. The views and opinions of



Page 4 of 20                                        Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                              V1.5    14/09/2015


authors expressed within this document shall not be used for advertising or product
endorsement purposes.
Any party relying on or using any information contained in this document and/or relying on or
using any system implemented based upon information contained in this document should
do so only after performing a risk assessment. A correctly completed risk assessment
enables an NHS organisation to demonstrate that a methodical process has been
undertaken which can adequately describe the rationale behind any decisions made. Risk
assessments should include the potential impact to live services of implementing changes.
This means that changes implemented following this guidance are done so at the
implementers’ risk. Misuse or inappropriate use of this information can only be the
responsibility of the implementer.



2 EPaCCS Functional Overview
In order to help contextualise the requirements in this document, it is worth re-stating some
of the high level functions that an EPaCCS would typically provide. The below high level use-
case diagram give a suggested set of functions that one might expect an EPaCCS system to
support – this is illustrative and not intended to be prescriptive:




Page 5 of 20                                       Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                                                       V1.5          14/09/2015



                                         Electronic Palliative Care Co-Ordination System


                          Support EOL                    Gain consent to
                         Discussion with                record and share                  Create EPaCCS
                             Patient                     EPaCCS Record                        Record
                                                                                                                        EPaCCS System



                                            «include»        «include»       «include»


                                                                                                     Share EPaCCS
                    Run Reports or                          Capture EOL                                 Record
                       Extracts                             Preferences          «include»




                                                                                                      «include»        Clinical System     Clinical System
                                                                                     «include»                        (Scheduled Care)   (Unscheduled Care)
                                                                         «include»

                                                                                                 Receive New or
                                                                                                 Updated EPaCCS
                                                                    «include»                        Record
 Clinician
                                       Capture Changes to
                                         EOL Preferences
                                                                                                                                Clinical System
                                                                                         «include»

                                                        «include»

                                                                          Notify EPaCCS
                                                                         Record Changes
         Patient
                                                                                                                                  IT System


                                                     View EPaCCS
                                                     Preferences



                                                 «include»        «include»

                                                                           Check if EPaCCS                                         Portal
 Unscheduled Care                    Obtain Permission to                   Record Exists
     Clinician                               View




Page 6 of 20                                                                              Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                         V1.5    14/09/2015




3 Information Governance
The information governance requirements have been captured in a separate document [Ref:
8] to allow for additional elaboration and supporting information to be included specific to an
IG audience, and will not be duplicated here.
In addition to the EPaCCS requirements outlined in that document, solutions utilising ITK-
compliant interfaces will need to adhere to the IG principles outlined in the ITK Trust
Operating Model, which is part of the ITK “Core” specification available from TRUD [Ref:9].




4 Interoperability
National interoperability specifications exist under the NHS Interoperability Toolkit (ITK) for
sharing information electronically with EPaCCS systems [Ref: 10]. When using the national
specifications, there are additional requirements that should be implemented – these are
outlined in detail in documents included with the published interoperability specifications.
There are some more general system requirements relating to interoperability however,
which are presented here:


                        EPA-INT-01: Information shared MUST be kept up-to-date
The solution MUST include controls to ensure that (as far as reasonably possible) discrepancies cannot occur
between the Palliative care co-ordination: Core content record and other systems or databases holding this
information.
Source: SCCI1580 Requirements Specification [Ref: 3]




                 EPA-INT-02: Those involved in care MUST be notified of updates
The system MUST include functionality to notify staff caring for people approaching the end of their life that an
EPaCCS record has been created or updated. This MUST be communicated securely in line with information
governance requirements.
NOTE: This SHOULD use the national ITK notifications specification where possible.
Source: SCCI1580 Requirements Specification [Ref: 3]




           EPA-INT-03: It SHOULD be possible for others to be notified of updates
It SHOULD be possible to send notifications of record creation/update to staff or individuals (including the
patient's family and carers) not registered as users of the system.
Source: Best Practice




Page 7 of 20                                                  Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                         V1.5    14/09/2015



                        EPA-INT-04: National demographics services MAY be used
The system MAY use the national PDS service to trace patients, retrieve and manage updates to their
demographic information.
Source: SCCI1580 Requirements Specification [Ref: 3]




            EPA-INT-05: National Summary Care Record information MAY be used
The system MAY use the national SCR service to retrieve medication, allergy and adverse reaction information
for a patient where this is available.
Source: SCCI1580 Requirements Specification [Ref: 3]




          EPA-INT-06: Where national ITK specifications exist these MUST be used
All integration with other systems (other than Spine services such as PDS or SCR) MUST be built using
national ITK specifications unless agreed otherwise with the local NHS organisation
Source: SCCI1580 Requirements Specification [Ref: 3]




            EPA-INT-07: Information that will be shared MUST be clearly identified
Local systems may hold more information than is shared with other systems using ITK messaging. The sending
system MUST make it clear to the sender exactly what information will be sent to other systems and what will
be held locally and not shared.
Source: Best Practice




            EPA-INT-08: Users who “click-through” MUST be able to view and edit
Users who "click-through" into a record from another system MUST be able to view and update the record,
subject to RBAC controls, and having a legitimate relationship with the patient.
Source: Best Practice




                         EPA-INT-09: The ability to electronically access records
Local systems MUST provide an Open API which allows another system to be able to both view and update a
record. This interface must be implemented in line with EPA-INT-06 above.
Any view or update of records made via this interface must still consider and address (in principle) the rest of
this specification.
Source: NHS England Open API Policy [Ref: 20]




Page 8 of 20                                                  Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                        V1.5    14/09/2015



5 Functional Requirements
The SCCI standard and associated documents also set out some functional requirements for
EPaCCS systems:


5.1 General
   EPA-FNC-01: The system MUST support recording of Palliative care co-ordination
                                 Preferences
The system MUST allow users to capture person's palliative and end of life care preferences (including as a
minimum the data items in SCCI 1580).
Source: SCCI1580 Requirements Specification [Ref: 3]




                         EPA-FNC-02: Data items MUST conform to SCCI1580
All data items captured, held or displayed in the system MUST do so in compliance with SCCI1580.
Source: SCCI1580 Requirements Specification [Ref: 3]




         EPA-FNC-03: Additional data items SHOULD be agreed with organisations
Any additional data capture requirements beyond the data items specified in SCCI1580 SHOULD be agreed
with the local organisations and care providers using the system.
Source: SCCI1580 Requirements Specification [Ref: 3]




                  EPA-FNC-04: It MUST be possible to remove EPaCCS records
The system MUST allow users to update and logically delete records (in-line with retention policies for clinical
data and RBAC controls). This (as with all changes to a record) must be fully auditable.
Source: SCCI1580 Requirements Specification [Ref: 3]




               EPA-FNC-05: It MUST be possible to have a minimal EPaCCS record
It MUST be possible to create a record for a person with a minimum set of data fields: Demographic fields, GP
details (as per the definitions in SCCI 1580). All mandatory items MUST be included, along with any relevant
items marked as “Required” in the standard
Source: SCCI1580 Requirements Specification [Ref: 3]




               EPA-FNC-06: Changes MUST be made available in a timely fashion
The system MUST ensure that any changes to the person’s preferences are updated and made available in a
timely fashion. The specific timescale required should be agreed with the local lead organisation
Source: SCCI1580 Requirements Specification [Ref: 3]




Page 9 of 20                                                 Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                                    V1.5    14/09/2015



                 EPA-FNC-07: A prompt MAY be used to support ADRT recording
The system MAY include controls or a user prompt to ensure that any advanced decision to refuse treatment is
only recorded for a person who is over 18 and who has mental capacity. There is no requirement to capture
anything in the record relating to this.
Source: Palliative care co-ordination Record keeping guidance [Ref: 4]




            EPA-FNC-08: A prompt MAY clarify that ADRT must be made in writing
When recording advanced decisions to refuse life sustaining treatment, the system MAY prompt the user that
such statements must be made in writing, signed and witnessed as well as being recorded in the system.
Source: Palliative care co-ordination Record keeping guidance [Ref: 4]




          EPA-FNC-09: Professional record keeping principles MUST be adhered to
General record keeping principles stipulated by GMC (2006) [Ref: 11], NMC (2015) [Ref: 12], HPC (2008) [Ref:
13], AoMRC (2008) [Ref: 14] and AoMRC and the NHS (2008) [Ref: 15] MUST be adhered to, including all
entries and amendments being dated and timed, confidentiality, accuracy and timeliness of content.
Source: Palliative care co-ordination Record keeping guidance [Ref: 4]




                     EPA-FNC-10: The system SHOULD prompt for a review date
The system SHOULD prompt for a review date to be set when a record is created, and also at each review.
The review date should not be more than 3 months from the date of creation or review.
Source: Palliative care co-ordination Record keeping guidance [Ref: 4]




              EPA-FNC-11: The system SHOULD allow reminders for review dates
The system SHOULD allow for reminders to users when a planned review date is approaching or has been
reached.
Source: Best Practice




            EPA-FNC-12: The system SHOULD allow all formal carers to contribute
The system SHOULD allow any of the formal carers involved in the care of the person to contribute to the
record (subject to relevant IG controls)
Source: Palliative care co-ordination Record keeping guidance [Ref: 4]




Page 10 of 20                                                            Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                                    V1.5    14/09/2015



EPA-FNC-13: The system SHOULD provide prompts about recording cardiopulmonary
                           resuscitation decisions
The system SHOULD prompt users that cardiopulmonary resuscitation decisions should only be recorded by
the senior responsible clinician.
NOTE: The choice of who the senior responsible clinician is will be made by the user and there is no
requirement for the system to verify this
Source: Palliative care co-ordination Record keeping guidance [Ref: 4]




5.2 Patient Access
                        EPA-PA-01: The system MUST allow printing of records
The solution MUST allow a copy of a person’s record to be printed.
Source: SCCI1580 Requirements Specification [Ref: 3]




          EPA-PA-02: It MUST be possible to filter information provided to a patient
Local organisations will make decisions about any data fields not to be reproduced on the person’s copy and
any fields to be filtered out depending on how they have been answered. The system MUST support this.
This should be in line with the principles established under Section 7 of the Data Protection Act which gives
individuals a right of access to personal data about them.
Source: Palliative care co-ordination Implementation guidance [Ref: 5]




        EPA-PA-03: The system MAY allow patients to view and update their record
The system MAY allow the person to access their own record electronically, and to have editing rights for
specific fields. The requirements for this must be agreed with the local lead organisation.
Source: Palliative care co-ordination Implementation guidance [Ref: 5]




Page 11 of 20                                                            Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                                      V1.5    14/09/2015



5.3 Reporting
                    EPA-RPT-01: The system MUST provide reporting capabilities
The system MUST include reporting capabilities as agreed with the local NHS organisation.
Source: SCCI1580 Requirements Specification [Ref: 3]




                     EPA-RPT-02: The system MUST provide data quality reports
The system MUST allow for the creation of data quality and validation reports as agreed with the local NHS
organisation.
Source: SCCI1580 Requirements Specification [Ref: 3]




                    EPA-RPT-03: The system SHOULD support equality reporting
The solution SHOULD provide capabilities allow reporting of equality information to support organisations in
ensuring equitable provision of services, where such information has been recorded in the record.
Source: Palliative care co-ordination Implementation guidance, Section 3 [Ref: 5]




              EPA-RPT-04: It MUST be possible to extract data for secondary uses
It MUST be possible to extract effectively anonymised or pseudonymised data from the system to support
secondary analysis.
Source: SCCI1580 Requirements Specification [Ref: 3]




             EPA-RPT-05: Data extracted for secondary uses MUST be anonymised
Data extracted for secondary uses MUST be effectively anonymised or pseudonymised unless explicit consent
has been gained from the person for this use of their data.
Source: Palliative care co-ordination Implementation guidance [Ref: 5]




                        EPA-RPT-06: The system MUST support full data extracts
It MUST be possible to extract all user-entered and necessary reference data from the system in patient-
identifiable form in a standard format (e.g. CSV or XML) to allow for local analysis.
Source: Palliative care co-ordination Implementation guidance [Ref: 5]




          EPA-RPT-07: Extracted PI records MUST be limited to users organisation
PI data extracts should be limited to records “owned” by the organisation of the user running the extract (i.e. for
whom they are the data controller) unless data sharing agreements are in place that allow for other
organisations data to be included.
Source: Best Practice




Page 12 of 20                                                              Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                          V1.5    14/09/2015



5.4 Clinical Safety
        EPA-CS-01: The solution MUST confirm to national clinical safety standards
The solution MUST conform to safety risk management standards ISB 0129 and ISB 0160 [Ref: 19].
Source: SCCI1580 Requirements Specification [Ref: 3]




             EPA-CS-02: Nationally identified safety risks SHOULD be considered
The solution SHOULD be built with consideration for the clinical safety risks identified in the Clinical Safety
Report included with SCCI1580.
Source: SCCI1580 Requirements Specification [Ref: 3]




                     EPA-CS-03: Data entry and display MUST be clinically safe
Entry, display and printing of data MUST be assessed as clinically safe.
Source: SCCI1580 Requirements Specification [Ref: 3]




Page 13 of 20                                                  Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                      V1.5    14/09/2015



6 Technical Requirements
The SCCI standard and associated documents also set out technical requirements for
EPaCCS systems:

6.1 Data
                        EPA-DAT-01: Coded information SHOULD use SNOMED-CT
All coded information held within the system SHOULD be held using SNOMED CT.
NOTE: This aligns with SCCI-0034 [Ref: 16].
Source: SCCI1580 Requirements Specification [Ref: 3]




                  EPA-DAT-02: Other clinical coding systems MAY be supported
Where necessary, other clinical coding systems COULD be supported alongside SNOMED CT to support
interoperability with other clinical systems.
Source: SCCI1580 Requirements Specification [Ref: 3]




             EPA-DAT-03: SNOMED code reference data MUST be kept up-to-date
Where SNOMED CT codes are supported, the system MUST be updated with the latest releases of SNOMED
CT codes in a timely fashion (SLA to be agreed with local NHS organisation).
Source: SCCI1580 Requirements Specification [Ref: 3]




                               EPA-DAT-04: The NHS number MUST be used
The system MUST use the NHS number as the primary unique identifier for a person (other identifiers can be
held locally if required). The trace status of the NHS number must also be recorded to identify whether the
number has been verified against PDS.
Source: Best Practice

Note: The above requirement has been updated to MUST in the latest version of the
information standard.

                  EPA-DAT-05: The system MUST allow attachments for records
The system MUST allow electronic copies of documents to be attached to a person’s record. It should be
possible to enable or disable this functionality for any given organisation.
Source: SCCI1580 Requirements Specification [Ref: 3]




            EPA-DAT-06: The system MUST allow for changes to the core data set
The system MUST allow for changes to the data set over time, including any changes to the locally defined
additional information that is captured.
Source: SCCI1580 Requirements Specification [Ref: 3]




Page 14 of 20                                              Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                        V1.5    14/09/2015



6.2 Infrastructure

                            EPA-INF-01: The system MUST be highly available
The system MUST be highly available - in line with service levels agreed with the local organisation.
Source: SCCI1580 Requirements Specification [Ref: 3]




                          EPA-INF-02: The system MUST be accessible over N3
The system MUST be accessible to authorised users on the N3 network (or its successor).
Source: SCCI1580 Requirements Specification [Ref: 3]




                        EPA-INF-03: The system SHOULD be accessible outside N3
The system SHOULD be accessible to authorised users who are not on the N3 network. Appropriate security
and information governance controls must be in place and agreed by the Health and Social Care Information
Centre (or its successor).
Source: SCCI1580 Requirements Specification [Ref: 3]




                            EPA-INF-04: Offline access SHOULD be provided
Users SHOULD be able to access records without a network connection (e.g. On a mobile device).
Source: Best Practice




                        EPA-INF-05: Offline digital capture SHOULD be supported
It SHOULD be possible to capture information using an offline digital capture mechanism such as a digital pen
or scanning solution.
Source: Best Practice




Page 15 of 20                                                Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                                    V1.5    14/09/2015



6.3 User Interface

                 EPA-UI-01: Common User Interface standards MUST be followed
Common User Interface Standards: SCCI standards (1500 to 1507) [Ref: 17] MUST be followed for input and
display of demographic data. This applies to devices capable of operating at 1024x768 which have a keyboard
and pointing device, but can also be applied to smaller devices.
Source: SCCI1580 Requirements Specification [Ref: 3]




                EPA-UI-02: Common User Interface guidance SHOULD be followed
The solution SHOULD comply with guidance developed by the Common User Interface programme within the
Health and Social Care Information Centre (formerly CFH).
Source: SCCI1580 Requirements Specification [Ref: 3]




             EPA-UI-03: CUI navigation and noting standards SHOULD be followed
Common User Interface guidance relating to navigation and clinical noting SHOULD be followed.
Source: SCCI1580 Requirements Specification [Ref: 3]




             EPA-UI-04: A persons preferences SHOULD appear as a single record
Information about a person’s end of life care and preferences should appear as a single record which is
updated whenever/if ever the person wishes to change it.
Source: Palliative care co-ordination Implementation guidance [Ref: 5]




                               EPA-UI-05: The system SHOULD be accessible
The system SHOULD be accessible for those with disabilities, and SHOULD comply with guidance set out in
the Government Service Design Manual for accessibility [Ref: 18]. Specific accessibility needs of the users
within a local organisation using the system should be taken into account.
Source: Best Practice




                EPA-UI-06: Web interfaces MUST meet W3C accessibility standards
All web interfaces for general users or patients MUST meet level AA success criteria of WCAG 2.0 (Web
Content Accessibility Guidelines 2.0).
Source: Best Practice




                                    EPA-UI-07: Online help MAY be provided
The system MAY provide online help and/or training facilities to help users understand how to use the system.
Source: SCCI1580 Requirements Specification [Ref: 3]




Page 16 of 20                                                            Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                             V1.5    14/09/2015



7 Requirements Summary
The below table provides a simple summary of all the recommended system requirements
listed in this document (excluding IG and ITK requirements listed in other documents):
ID               Level         Description
Interoperability
EPA-INT-01      MUST           Information shared MUST be kept up-to-date
EPA-INT-02      MUST           Those involved in care MUST be notified of updates
EPA-INT-03      SHOULD         It SHOULD be possible for others to be notified of updates
EPA-INT-04      MAY            National demographics services MAY be used
EPA-INT-05      MAY            National Summary Care Record information MAY be used
EPA-INT-06      MUST           Where national ITK specifications exist these MUST be used
EPA-INT-07      MUST           Information that will be shared MUST be clearly identified
EPA-INT-08      MUST           Users who “click-through” MUST be able to view and edit
EPA-INT-09      MUST           The ability to electronically access records
Functional > General
EPA-FNC-01      MUST           The system MUST support recording of Palliative care co-ordination Preferences
EPA-FNC-02      MUST           Data items MUST conform to SCCI1580
EPA-FNC-03      SHOULD         Additional data items SHOULD be agreed with organisations
EPA-FNC-04      MUST           It MUST be possible to remove EPaCCS records
EPA-FNC-05      MUST           It MUST be possible to have a minimal EPaCCS record
EPA-FNC-06      MUST           Changes MUST be made available in a timely fashion
EPA-FNC-07      MAY            A prompt MAY be used to support ADRT recording
EPA-FNC-08      MAY            A prompt MAY clarify that ADRT must be made in writing
EPA-FNC-09      MUST           Professional record keeping principles MUST be adhered to
EPA-FNC-10      SHOULD         The system SHOULD prompt for a review date
EPA-FNC-11      SHOULD         The system SHOULD allow reminders for review dates
EPA-FNC-12      SHOULD         The system SHOULD allow all formal carers to contribute
EPA-FNC-13      SHOULD         The system SHOULD provide prompts about recording cardiopulmonary resuscitation
                               decisions
Functional > Patient Access
EPA-PA-01       MUST           The system MUST allow printing of records
EPA-PA-02       MUST           It MUST be possible to filter information provided to a patient
EPA-PA-03       MAY            The system MAY allow patients to view and update their record
Functional > Reporting
EPA-RPT-01      MUST           The system MUST provide reporting capabilities
EPA-RPT-02      MUST           The system MUST provide data quality reports
EPA-RPT-03      SHOULD         The system SHOULD support equality reporting
EPA-RPT-04      MUST           It MUST be possible to extract data for secondary uses
EPA-RPT-05      MUST           Data extracted for secondary uses MUST be anonymised
EPA-RPT-06      MUST           The system MUST support full data extracts
EPA-RPT-07      MUST           Extracted PI records MUST be limited to users organisation
Functional > Clinical Safety
EPA-CS-01       MUST           The solution MUST confirm to national clinical safety standards
EPA-CS-02       SHOULD         Nationally identified safety risks SHOULD be considered
EPA-CS-03       MUST           Data entry and display MUST be clinically safe
Technical > Data
EPA-DAT-01      SHOULD         Coded information SHOULD use SNOMED-CT
EPA-DAT-02      MAY            Other clinical coding systems MAY be supported
EPA-DAT-03      MUST           SNOMED code reference data MUST be kept up-to-date
EPA-DAT-04      MUST           The NHS number MUST be used
EPA-DAT-05      MUST           The system MUST allow attachments for records
EPA-DAT-06      MUST           The system MUST allow for changes to the core data set
Technical > Infrastructure
EPA-INF-01      MUST           The system MUST be highly available
EPA-INF-02      MUST           The system MUST be accessible over N3
EPA-INF-03      SHOULD         The system SHOULD be accessible outside N3
EPA-INF-04      SHOULD         Offline access SHOULD be provided
EPA-INF-05      SHOULD         Offline digital capture SHOULD be supported
Technical > User Interface
EPA-UI-01       MUST           Common User Interface standards MUST be followed
EPA-UI-02       SHOULD         Common User Interface guidance SHOULD be followed
EPA-UI-03       SHOULD         CUI navigation and noting standards SHOULD be followed
EPA-UI-04       SHOULD         A persons preferences SHOULD appear as a single record
EPA-UI-05       SHOULD         The system SHOULD be accessible
EPA-UI-06       MUST           Web interfaces MUST meet W3C accessibility standards
EPA-UI-07       MAY            Online help MAY be provided




Page 17 of 20                                                     Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                  V1.5    14/09/2015




8 Glossary of Terms
Term / Abbreviation     What it stands for
AoMRC                   Academy of Medical Royal Colleges
API                     Application Programming Interface (see NHS England Open API Policy [Ref: 20])
CFH                     Connecting for Health
EPaCCS                  Electronic Palliative Care Co-Ordination Systems
GMC                     General Medical Council
HSCIC                   Health and Social Care Information Centre
IG                      Information Governance
SCCI                    Standardisation Committee for Care Information
ITK                     Interoperability Toolkit
NEoLCIN                 National End of Life Care Intelligence Network (part of PHE)
NHS IQ                  NHS Improving Quality
NMC                     Nursing and Midwifery Council
PHE                     Public Health England
QIPP                    Quality, Innovation, Productivity and Prevention
RCP                     Royal College of Physicians
RFC                     Request for Comments
SNOMED CT               Systematised Nomenclature of Medicine Clinical Terms
TRUD                    Technology Reference data Update Distribution




Page 18 of 20                                          Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                                         V1.5    14/09/2015



9 References
Ref   Title                        Source
1     QIPP Digital Technology      http://systems.hscic.gov.uk/qipp
      Resources
2     NHS IQ – Making the          http://www.nhsiq.nhs.uk/4424.aspx
      case for change
3     SCCI1580 Requirements        http://www.endoflifecare-intelligence.org.uk/national_information_standard/
      Specification:
4     Palliative care co-          www.endoflifecare-
      ordination Record            intelligence.org.uk/resources/publications/record_keeping_guidance
      keeping guidance
5     Palliative care co-          www.endoflifecare-
      ordination Implementation    intelligence.org.uk/resources/publications/implementation_guidance
      guidance
6     End of life care             http://www.endoflifecare-intelligence.org.uk
      intelligence network
7     RFC2119: Requirement         http://www.ietf.org/rfc/rfc2119.txt
      Levels
8     EPaCCS IG Guidance           http://systems.hscic.gov.uk/qipp/library/epaccsig.pdf
9     TRUD: ITK Core               https://isd.hscic.gov.uk/trud3/user/guest/group/41/pack/30/subpack/123/rele
      Specifications               ases
10    NHS Developer Network:       http://developer.nhs.uk/library/interoperability/care-co-ordination-
      Care Co-Ordination           interoperability/
      Interoperability
11    GMC: Good Medical            http://www.gmc-uk.org/guidance/good_medical_practice.asp
      Practice
12    NMC: The Code                http://www.nmc.org.uk/globalassets/sitedocuments/nmc-
      Professional standards of    publications/revised-new-nmc-code.pdf
      practice and behaviour for
      nurses and midwives
13    HPC: Standards of            http://www.hpc-
      conduct, performance and     uk.org/aboutregistration/standards/standardsofconductperformanceandethic
      ethics                       s/
14    AoMRC: Record                https://www.rcoa.ac.uk/sites/default/files/FPM-clinicians-guide1.pdf
      Standards
15    AoMRC and NHS: Record        https://www.rcoa.ac.uk/sites/default/files/FPM-clinicians-guide2.pdf
      Standards – Structure
      and Content
16    SCCI0034: SNOMED CT          http://webarchive.nationalarchives.gov.uk/+/http:/www.isb.nhs.uk/documents
                                   /isb-0034
17    Common User Interface        http://webarchive.nationalarchives.gov.uk/+/http:/www.isb.nhs.uk/use/baseli
      Standards                    nes/cui
18    Government Service           https://www.gov.uk/service-manual
      Design Manual
19    Clinical Safety Standards    http://www.hscic.gov.uk/isce/publication/isb0129
                                   http://www.hscic.gov.uk/isce/publication/isb0160




Page 19 of 20                                                 Copyright ©2015 Health and Social Care Information Centre
EPaCCS Recommended IT System Requirements                                              V1.5    14/09/2015


20    NHS England Open API   http://www.england.nhs.uk/wp-content/uploads/2014/05/open-api-
      Policy                 policy.pdf




Page 20 of 20                                      Copyright ©2015 Health and Social Care Information Centre
