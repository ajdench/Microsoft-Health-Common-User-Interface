# cuifullsubmission

## Provenance
- Source file: `raw/sources/references/nhs-archives/isb-standards/cuifullsubmission.pdf`
- Extracted text: `derived/extracted-text/archive-support/cuifullsubmission.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

            DHID – Technology Office – DS&P - CUI Programme – CAPS Project
            CUI Full Information Standard Submissions – Demographics and Date and Time
            Programme        NPfIT               Document Record ID Key
            Sub-Prog /       Technology Office   <Insert Document Record ID Key>
            Project          DS&P
                             CUI Programme
            Prog. Director   Ken Lunn            Status         Draft
                             Keith Naylor
            Owner            Tim Chearman        Version        1.0
            Author           Beverley Scott      Version Date   15 September 2009




       COMMON USER INTERFACE (CUI) PROGRAMME
Clinical Applications and Patient Safety (CAPS) Project:

   Demographics and Date and Time Display and Input

                     Full Operational Information Standards
                   CUI Full Operational Information Standard Submissions – Demographics and Date and Time



Amendment History:

 Version    Date                 Amendment History

 0.1        06-Aug-2009          First draft version for appraisal

 1.0        15-Sep-2009          Final version for submission to ISB HaSC on 23-Sep-2009

Reviewers:
This document must be reviewed by the following:<author to indicate reviewers>

Name                       Signature                Title / Responsibility               Date               Version

Tim Chearman                                        CUI CAPS Project Lead

Approvals:
This document must be approved by the following:

Name                       Signature                Title / Responsibility               Date               Version

Tim Chearman                                        CUI CAPS Project Lead

Roarke Batten                                       CUI Programme Manager

Keith Naylor                                        Head of DS&P

Ken Lunn                                            Director of DS&P

Distribution:
<Author to say who the document will be distributed to>
Document Status:
This is a controlled document.
Whilst this document may be printed, the electronic version maintained internally by the owning
department is the controlled copy. Any printed copies of the document are not controlled.
Related Documents:
These documents will provide additional information.

Ref no     Title                                                                                        Version

   1.      CUI CAPS Development Lifecycle – 26 Aug 2009                                                 5v0

   2.      CUI CAPS – ISB Submission Overview and Table of Contents – 6 Aug 2009                        v1.0
           (This document lists all Appendices and supporting documents).




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                               Page 2 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
                     CUI Full Operational Information Standard Submissions – Demographics and Date and Time



Table of Contents

1. Standard Demographics .................................................................................................................4
1.1.  Name of Standards .....................................................................................................................4
1.2.  Sponsors .....................................................................................................................................5
1.3.  Developers / Submitters .............................................................................................................5
1.4.  Commercial Issues .....................................................................................................................5
1.5.  Customer Need ...........................................................................................................................5
2. Requirement and Draft Stage Update ............................................................................................6
2.1.  Response to ISB HaSC feedback from Draft submissions ......................................................6
2.2.  Restated Purpose and Scope.....................................................................................................6
2.3.  Changes to Requirement and Draft submissions .....................................................................6
3. Full Stage .........................................................................................................................................6
3.1.  Implementation Architecture......................................................................................................6
3.2.  Standard Specification ...............................................................................................................8
3.3.  Governance .................................................................................................................................8
3.4.  Consultation and Support ..........................................................................................................8
4.    Adoption, Compliance and Maintenance ..................................................................................8
4.1.  Migration Plans ...........................................................................................................................9
4.2.  Human Behavioural, Organisational and Technical User Implementation Guidance ............9
4.3.  Safety ...........................................................................................................................................9
4.4.  Maintenance and Update Process Plans .................................................................................10
APPENDIX A .........................................................................................................................................11
Sponsor Statement(s) ..........................................................................................................................11
APPENDIX B .........................................................................................................................................11
Department of Health Informatics Directorate - Technology Office Statement ................................11




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                                                         Page 3 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
               CUI Full Operational Information Standard Submissions – Demographics and Date and Time



INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE

Full Operational Information Standards
Submission Toolkit for Standard Developers


An Operational standard is a detailed and precisely defined standard for operational use within a specific
area of the NHS or Social Care. The bulk of the standards considered by ISB HaSC are Operational
standards.

The purpose of a Full Standard submission is to set out appropriate evidence that the Full Operational
Information Standard in question is fit for purpose and implementable.

Please refer to the document, “ISB HaSC Submission Guidance Notes for Operational Information
Standards – v2.0 - 14 February 2008” for information on how to complete this form.



1.     Standard Demographics

Please refer to the following documents when reviewing the submissions:

1.     “CUI CAPS – ISB Submissions Overview and Table of Contents – v1.0 – 6 Aug 2009”. This
       document provides the full list of appendices and supporting documents to the submission
       package.

2.     “CUI - Clinical Applications and Patient Safety (CAPS) Project - Development Lifecycle - 5v0 – 26
       Aug 2009”.

This reference document outlines a delivery lifecycle applicable to the work of the Common User
Interface (CUI) programme. The lifecycle intends to draw together the multiple stakeholders involved in
the work of CUI and identify interdependencies between them. In particular, this document describes the
integration of NHS Clinical Safety and the NHS Information Standards activities, in order to satisfy both
safety requirements and authorities, and to gain successful standards submissions through the
Information Standards Board for Health and Social Care (ISB HASC).

The document also serves as a supplementary source of generic process information, in support of each
of the standards submitted to the ISB HASC, where a single source of generic cross-standard
information better suits the purposes of submissions, than duplication of information across the
submissions.
All new versions of the document will be referenced in subsequent submissions to the ISB HaSC.

1.1.    Name of Standards

9 x CUI Full Operational Standards are being submitted as a package to ISB HaSC:

      Patient Banner for Clinical Systems within the NHS in England
      Address Input for Clinical Systems within the NHS in England
      Patient Name Input for Clinical Systems within the NHS in England
      NHS Number Input for Clinical Systems within the NHS in England
      Sex and Current Gender Input for Clinical Systems within the NHS in England
INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                        Page 4 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
              CUI Full Operational Information Standard Submissions – Demographics and Date and Time



      Telephone Number Input for Clinical Systems within the NHS in England
      Date Display for Clinical Systems within the NHS in England
      Time Display for Clinical Systems within the NHS in England
      Date and Time Input for Clinical Systems within the NHS in England.

1.2.    Sponsors

Kenn Lunn, Director of Data Standards and Products, Technology Office, Department of Health
Informatics Directorate.

Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section: Sponsor
Statement.

1.3.    Developers / Submitters

Common User Interface (CUI) Programme, Clinical Applications and Patient Safety (CAPS) Project,
Data Standards and Products Directorate, Technology Office, Department of Health Informatics
Directorate.

Submitter Contact: Beverley Scott, Clinical Safety Advisor, Technology Office, Department of Health
Informatics Directorate – Beverley.Scott@nhs.net – 0113 397 4349.

1.4.    Commercial Issues

The relevant Intellectual Property Rights, which might concern the use of the proposed standard within
the NHS, are owned jointly by the NHS and Microsoft. This is defined in the Development Agreement,
Clause 13, "Intellectual Property Rights".

The Development Agreement is an exhibit of the Contract between the Authority (NHS) and the
Company (Microsoft), signed December 2005. The Development Agreement and Contract can be
obtained from the Department of Health Informatics Directorate (DHID) Technology Office.

The intention is to license Design Guidance and Standards on a royalty free licence basis to any and all
suppliers to the NHS in England, as well as to international clinical systems suppliers, as long as such
use is in line with the terms and conditions defined in the Participation Agreement (where suppliers play
an active role in the programme) or in the End User Licence Agreement, the terms of which must be
accepted prior to access being granted to the CUI Web site where all guidance will be published.

It is envisaged that the ongoing costs of maintenance of guidance and standards will be covered with the
existing operating budget of the Tech Office and the CUI programme agreement with Microsoft until
December 2009, and then based on a separate (to be defined) agreement beyond that date, managed
by the Technology Office.

1.5.    Customer Need

Inputting and displaying unambiguous information in a consistent format is a core element in ensuring
effective patient care. It is vital that healthcare employees correctly input and interpret names, telephone
numbers, dates, times and other information in healthcare systems relating to patient demographics,
clinical episodes and planned treatments, amongst others.




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                       Page 5 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
              CUI Full Operational Information Standard Submissions – Demographics and Date and Time



Clinical systems used within the NHS in England across all care settings currently differ in the way
demographic information is entered. Inherent within this is the risk that end users moving between
clinical systems delivered by different suppliers can mis-enter and misinterpret information, potentially
leading to Patient Safety Incidents, as defined by the National Patient Safety Agency (NPSA).

The NHS Common User Interface (CUI) Programme is supporting the development of a common look
and feel for the applications that are used across the health service, which should have major benefits
for staff and for safety.

Part of the NHS CUI Programme is called the Clinical Applications and Patient Safety (CAPS) Project.
The CAPS Project is responsible for producing document based Design Guidance representing key
health care staff user experience guidelines, principles and design knowledge that can be applied to any
clinical applications being developed and / or implemented within the NHS. It is also intended that as far
as possible the guidance is international in its context and applicability.

It is intended that CUI design guidance will ultimately become mandatory information standards for all
clinical system suppliers to the NHS in England by progressing them through the Information Standards
Board for Health and Social Care (ISB HaSC).

For Customer Need statements for individual submissions, ie. Address Input, please refer to the
relevant ISB HaSC Requirement submission document which outlines the Customer Need in full.

2.     Requirement and Draft Stage Update

2.1.    Response to ISB HaSC feedback from Draft submissions

Please refer to individual ISB HaSC Disposition documents for the specific submissions for this
response.

2.2.    Restated Purpose and Scope

For Purpose and Scope statements for individual submissions, ie. Address Input, please refer to the
relevant ISB HaSC Requirement submission document which outlines the Purpose and Scope in full.

For details of research, development and testing, please refer to the Draft Standard submission and
supporting documentation.

2.3.    Changes to Requirement and Draft submissions

See above.


3.     Full Stage

3.1.    Implementation Architecture

Implementation Architecture sponsorship is via the main Sponsor:                 Kenn Lunn, Director of Data
Standards and Products, Department of Health Informatics Directorate.

Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section: Sponsor
Statement.

INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                       Page 6 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
            CUI Full Operational Information Standard Submissions – Demographics and Date and Time




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                     Page 7 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
                CUI Full Operational Information Standard Submissions – Demographics and Date and Time



3.2.     Standard Specification

Please refer to the individual CUI Design Guides as specified below. Please note, the CUI Design
Guides are both the standard specification and implementation guidance and should not be separated.

        Patient Banner
        Address Display and Input
        NHS Number Display and Input
        Patient Name Display and Input
        Sex and Current Gender Display and Input
        Telephone Number Display and Input
        Date Display
        Time Display
        Date and Time Input.

3.3.     Governance

Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section:
Governance.

3.4.     Consultation and Support

Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section:
Consultation and Support.


4.       Adoption and Engagement Outputs
During 2008 / 2009, CUI CAPS was able to get a good summary of which suppliers are taking an active
interest in implementing CUI standards. The majority are focusing on the demographics standards
initially in relation to their roadmaps. Discussions with these vendors raised some questions around
what compliance framework would be most useful. There is work underway in Release 8 (July 2009 -
December 2009) to define the approach to CUI compliance. After this exercise, the CUI CAPS Project
will have a better framework to assess uptake and evaluate how well the standards are implemented in
any given applications and also a better understanding of how we use existing mechanisms such as the
NIC, Intellect and GPSoC to fulfil these aims.

Due to project budget limitations, CUI CAPS no longer has a product manager assigned to the project.
However, there is a prioritised list of „Top 5 ISV‟s‟ who will be focused on, including:

        EMIS
        InPractice
        RIO
        SystemC
        TPP.

Due to the hard focus on core delivery for iSOFT and Cerner up to November 2009, it was decided it
would not be profitable to pursue iSOFT and Cerner at this time.

The overall project has now moved from the Infrastructure directorate to Data Standards and Products,
who will own maintenance of standards moving forward. Please refer to the document, “CAPS Delivery
Team Transition Summary.ppt”, for a summary of mapping of original roles and the planned structure of
the team moving forward. This included designers and researchers who will be responsible for
maintenance and development.
INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                         Page 8 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
              CUI Full Operational Information Standard Submissions – Demographics and Date and Time




Please refer to the following documents for continued work within CUI CAPS on adoption, progress,
engagement with Suppliers and the CUI CAPS Roadmap.

      ISV Update – August 2008 – CAPS Project Board.ppt
      ISV CUI Adoption Evidence.ppt
      NHS CFH ISV Update – December 2008.ppt
      CAPS Roadmap Progress and Adoption 0v4
      CAPS Output Adoption – Sept 2008
      UK ISV Adoption Status.xls.

4.1.    Migration Plans

Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section: Migration
Plans.

4.2.    Human Behavioural, Organisational and Technical User Implementation Guidance

The individual CUI Design Guides comprise of the standard specification and implementation guidance.
Due to the nature of the standards, it is not considered appropriate nor safe to separate out the
specification from the implementation guidance as there are clear safety and fitness for purpose
dependencies.

In addition, during safety and user acceptability testing, lessons learnt and actions for mitigation of
potential patient safety hazards have been documented within the Hazard Logs. In progressing towards
Clinical Authority to Release from the DHID Clinical Safety Group and approval as a Full Operational
Standard by the ISB HaSC, a full Patient Safety Assessment report, Clinical Safety Case and Safety
Closure Report has been specified. These are key documents to be used by anyone implementing CUI
standards – both system suppliers and end users.

Please refer to the individual CUI Design Guides and safety documentation (as outlined in section 4.6
“Safety” below).

4.3.    Safety

Please also refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section:
Clinical Safety.

The development lifecycle for all CUI Design Guidance is compliant with the Clinical Safety Management
System (CSMS) - the patient safety risk assessment and management process defined by NHS
Connecting for Health in conjunction with the National Patient Safety Agency (NPSA). Although outputs
from the CAPS Project of CUI, namely Design Guidance, are not systems per se, they will inform the
user interface work carried out by clinical system suppliers which will in turn end up being part of a live
deployed system. It is crucial therefore that the outputs from CUI are also clinically safe.

The Clinical Safety Management System (CSMS) prescribed by DHID covers four areas: End to end
clinical processes; Technical risk; Message risk; and Patient safety risk. It is important to understand at
this point, the CAPS Project of CUI, dealing only with the user interface layer of an application - is only
concerned with patient safety risks. The other risk types are out of CUI scope.




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                       Page 9 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
              CUI Full Operational Information Standard Submissions – Demographics and Date and Time



During the early stages of development, known hazards and patient safety risks in current practice
around patient identification and display of demographic, date and time information were identified. The
CUI Design Guides have been developed to mitigate these known patient safety risks. In addition, by
applying a continuous patient safety risk assessment process, any potential new risks identified have
been assessed and managed as part of the development of an ongoing Clinical Safety Case for these
CUI deliverables.

All hazards and risks raised throughout the development lifecycle have been recorded in the relevant
Hazard Logs. The Hazard Logs includes mitigatory actions which, in some cases, will be applicable to
implementers and end users of CUI Design Guidance. It is, therefore, essential that CUI Design Guides
are reviewed in conjunction with the relevant Hazard Log. The Hazard Log is a live document which will
be updated on an ongoing basis as the CUI Design Guide and information standard is maintained.

All clinical safety documentation has been submitted to the DHID Clinical Safety Group for Clinical
Authority to Release (CATR) as per the CSMS process and Conditional CATR awarded pending ISB
HaSC Board outcome. Please refer to the documents provided as part of this Standard for a full
description of the DHID CSMS process and the Clinical Safety Case and Safety Closure Report.

4.4.    Maintenance and Compliance

Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section:
Maintenance.

However, please also note that the processes for maintenance and compliance going forward will be
updated with the transition to the new delivery team in Data Standards and Products.

CUI CAPS is developing a compliance framework, in conjunction with the wider Data Standards and
Products directorate and the DHID National Integration Centre.




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                       Page 10 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
              CUI Full Operational Information Standard Submissions – Demographics and Date and Time



APPENDIX A

Sponsor Statement(s)
(Insert copy of statement from sponsor(s) here)


Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section: Sponsor
Statement.



APPENDIX B

Department of Health Informatics Directorate - Technology Office Statement
(Insert copy of statement from DHID - Technology Office here)


Please refer to the document: CUI CAPS Development Lifecycle - 5v0 - 26 Aug 2009, section: Sponsor
Statement.




INFOMATION STANDARDS BOARD FOR HEALTH AND SOCIAL CARE SUBMISSION                                       Page 11 of 11
CUI Full Operational Information Standard Submissions:
Demographics and Date and Time
v1.0 – 15 Sep 2009
