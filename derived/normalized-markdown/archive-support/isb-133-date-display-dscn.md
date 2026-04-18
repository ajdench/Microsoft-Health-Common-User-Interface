# isb-133-date-display-dscn

## Provenance
- Source file: `raw/sources/references/nhs-archives/isb-standards/dscn-pdfs/isb-133-date-display-dscn.pdf`
- Extracted text: `derived/extracted-text/archive-support/isb-133-date-display-dscn.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

DSC Notice: 07/2010
Date of Issue: January 2010


Sponsoring Organisation:                                Implementation Date:   01 December 2015
                                                        Subject:
    DH Informatics                                      Date Display for Clinical Systems
                                                        within the NHS in England
     Directorate
                                      DATA SET CHANGE NOTICE

This DSCN informs users of the approval of a new information standard by the Information Standards
Board for Health and Social Care (ISB). It was presented at ISB’s meeting on 24 September 2009
and subsequently approved following meeting the required actions.

Summary:
This user interface standard defines the valid display values for single precise dates in short and long
date format.

Organisations developing or upgrading applications for which the standard is in scope MAY
implement the date display standard immediately and SHOULD do so at their next major system
release. All clinical systems within the NHS in England MUST conform to the date display standard
by 01 December 2015.

Patient safety risks associated with the date display standard are specified in the safety case
accompanying the standard. Organisations that develop, supply, deploy and use clinical systems
must identify and manage any risks in current systems and mitigate implementation risks for which
responsibility for mitigation has been transferred to the supplying or deploying organisation. The
process for managing safety risks is detailed in NHS information standards for the application of
patient safety risk management to the manufacture, deployment and use of health software.

The standard can also be used to inform design of user interfaces in other systems and devices
provided any safety risks are identified and managed, for example, risks related to reduced screen
size.


Other Datasets / Return Affected: None


Related DSCNs:

 DSCN 18/2009 - Application of Patient Safety Risk Management to the Deployment and Use of Health
   Software.
 DSCN 14/2009 - Application of Patient Safety Risk Management to the Manufacture of Health Software.
 AN 22/2007 – Date and Time Display and Input for Clinical Systems in the NHS in England.
 DSCN 09/2010 – Patient Banner for Clinical Systems within the NHS in England.
 DSCN 08/2010 – Time Display for Clinical Systems within the NHS in England.
 DSCN 02/2010– Date and Time Input for Clinical Systems within the NHS in England.

Impact of Change:
Service:           Major                                  System Suppliers:    Major


The Information Standards Board for Health and Social Care (ISB) is responsible for approving information
standards.




 Further information about ISB can be found at www.isb.nhs.uk
 Data Set Change Notices can be found at www.connectingforhealth.nhs.uk/dscn
                                DATA SET CHANGE NOTICE

Reference No:                    DSCN 07/2010
Version No:                      1.0
Subject:                         Date Display for Clinical Systems within the NHS in England
Type of Change:                  Introduction of a new approved Information Standard
Implementation Date:             01 December 2015
Business Justification:          To make display and user interaction consistent across all clinical
                                 systems within the NHS in England in order to increase patient
                                 safety by maximising clinical utility and minimising reading and
                                 transcribing errors.


 Introduction
 Displaying and inputting unambiguous information in a consistent format is a core element in
 ensuring effective patient care. It is vital that healthcare IT users correctly interpret and input
 information relating to all aspects of patient care and management. This user interface standard
 defines the valid display values for single precise dates in short and long date format.

 The standard has been developed as part of the Common User Interface (CUI) programme within the
 Technology Office of the Department of Health Informatics Directorate. This programme is
 addressing the safety risks posed by variation across the NHS in the way information is input and
 displayed. Its aim is to support healthcare IT users in correctly inputting and interpreting information
 relating to all aspects of patient care and management.

 Background
 Unambiguous date display enhances patient safety and application usability by eliminating confusion
 between day, month and year elements. Displaying unambiguous dates is a core element in ensuring
 effective patient care. It is vital that healthcare professionals correctly interpret dates relating to
 patient demographics, clinical episodes and planned treatments, among others. Dates have several
 forms; they can be precise, approximate or be a date range. Currently, inconsistency and ambiguity
 of date display exists within the NHS and existing standards.

 Clinical and healthcare IT systems used across all care settings in the NHS in England differ in the
 way they display dates. Inherent within this variation is the risk that healthcare IT users, such as
 healthcare professionals moving between clinical systems provided by different developers, can
 misinterpret dates, potentially leading to patient safety incidents.

 None of the existing standards provide an entirely unambiguous date display (see the World Wide
 Web Consortium (W3C®) and the Organization for Standardization (ISO)).For example, ISO
 stipulates that the day and month elements of a date are pairs of numerical values. This presents a
 risk of date misinterpretation by confusing month for day and vice versa. W3C reduces this ambiguity
 by using letters for the month, but it does not specify a format for long dates to compliment the short
 date format. The guidance in this document builds on these standards.

 Healthcare professionals working within the NHS have generally been educated in and have
 experience in multiple locations, and are therefore used to seeing dates in a wide variety of formats.
 The proportion of healthcare professionals to whom this applies is increasing. Considering the mixed
 NHS workforce using clinical systems displaying dates, there is a patient-safety concern, and
 therefore a pressing need, for the unambiguous display of dates.



DSCN 07/2010                                                                               Page 2 of 4
 Details of the Standard
 The standard is published with associated guidance in a Common User Interface Design Guide. It is
 applicable to user interfaces displayed on desktop or laptop computers. It is assumed that, at a
 minimum, these computers are capable of operating at a minimum display resolution of 1024 x 768,
 and have a keyboard and pointing device.

 The following items are covered in the guidance:
     Single precise date display – short date.
     Single precise date display - long date format.
 Aspects that are out of scope:
     Date input.
     Time (display and input).
     Default dates.
     Multi language applications.
     Other languages.
     Labels.
     Data storage
     Display styles.

 Safety Case
 Clinical safety requirements and objectives related to the display of dates in clinical systems are
 documented in the safety case that accompanies this standard (www.isb.nhs.uk/documents/cui).
 Organisations that develop, supply, deploy and use clinical systems are required to identify and
 manage any risks in current systems until the standard can be implemented. They must also mitigate
 those live implementation risks outlined in the safety case for which responsibility for mitigation has
 been transferred to the supplying or deploying organisation.

 The process for assessing and managing safety risks is detailed in NHS information standards for the
 application of patient safety risk management to the manufacture, deployment and use of health
 software (http://www.connectingforhealth.nhs.uk/dscn/dscn2009/data-set-change/), i.e.:
    Application of Patient Safety Risk Management to the Manufacture of Health Software (DSCN
    14/2009); and
    Application of Patient Safety Risk Management to the Deployment and Use of Health Software
    (DSCN 18/2009).

 Conformance
 For full conformance to be demonstrated, the elements marked as ‘Mandatory’ in the Common User
 Interface Design Guide must be complied with and there must have been mitigation of those live
 implementation risks outlined in the safety case for which responsibility for mitigation has been
 transferred to the supplying or deploying organisation.

 Timescales for Implementation
                                         Health and Social
          FR AM EW O RK                                        Organisation          IT Suppliers
                                          Care Personnel

           Effective Date
                                            Immediate           Immediate            Immediate
               “may use”

        Implementation Date              When available in     At next major        At next major
               “must use”                    system           system release       system release

         Conformance Date
“must be used effectively and assessed   01 December 2015    01 December 2015    01 December 2015
               for use”

Superseded Date (of prior standard)
                                           Not applicable      Not applicable      Not applicable
      “stop using prior standard”

DSCN 07/2010                                                                            Page 3 of 4
 Effects on Other Information Standards:
 None

 Sponsor Details
 Ken Lunn, Director of Data Standards and Products
 Department of Health Informatics Directorate
 Technology Office

 Further Information and Support
         CUI Date Display Design Guide - www.cui.nhs.uk
         Clinical Safety Case - www.isb.nhs.uk/documents/cui
         CUI website - www.cui.nhs.uk
         Standards documentation – www.isb.nhs.uk/documents/cui
         Queries - cuistakeholder.mailbox@nhs.net



 Appendix
 This DSCN must be read in conjunction with the Clinical Safety Case and Closure Report for
 Demographics / Information Input and Display, which can be found at the following link:
 www.isb.nhs.uk/documents/cui




 Table Notes:
         1.
                Relevant organisations are those organisations as defined in the standard who must take direct action to
                implement the standard
         2.                                                                    1
                IT Suppliers are all suppliers to the organisations listed at who supply functionality pertinent to that standard
                Effective Date is the date from which a new standard can be used but may not be mandatory. This might
         3.

                facilitate piloting, for example, or enable time for system functionality development. At this point, you “may
                use” the standard.
         4.
                Implementation Date is the point from which the new standard becomes mandatory. Ideally, it inherently
                implies organisations use appropriate systems i.e. the date is the same for organisations and suppliers.
                However, there maybe circumstances where interim workarounds are required i.e. the date is different for
                organisations and suppliers. At this date, you “must use” the standard. Where the standard demands data
                is submitted centrally, sub components of implementation date (and possibly ‘effective date’) are:
                      5.
                           Collection Start Date – this is the date collection of data must begin
                      6.
                           First Submission Date – this is the date of first submission of data centrally
                      7.
                           Reporting Period / Submission Cycle – If the standard calls for further collection and submission at
                           defined intervals, this cell provides text of the reporting period (e.g. calendar month, financial year)
                                                                                                th
                           and the submission cycle (e.g. submit data monthly on the 10 working day of the subsequent
                           month).
         8.
                Conformance Date is the date from which the service and IT system suppliers must use the standard as
                envisaged i.e. using appropriate IT solutions rather than interim workarounds and, if the standard requires it,
                an independent, authoritative body or legitimate internal audit would conduct a conformity assessment with the
                expectation of full conformance by all relevant parties. It is the “must use standard effectively and
                assessed for use” date
         9.
                Superseded Date of the prior standard sets the date at which the prior standard is replaced by the new
                standard i.e. the prior standard must no longer be used. This date will apply only where there was a pre-
                existing standard made redundant by the new standard. It might be different from preceding dates in the
                framework if, for example, a new and old standard run in parallel for a period. It is the date from which you
                “stop using the prior standard”.




DSCN 07/2010                                                                                                      Page 4 of 4
