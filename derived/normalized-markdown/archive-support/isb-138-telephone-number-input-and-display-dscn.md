# isb-138-telephone-number-input-and-display-dscn

## Provenance
- Source file: `raw/sources/references/nhs-archives/isb-standards/dscn-pdfs/isb-138-telephone-number-input-and-display-dscn.pdf`
- Extracted text: `derived/extracted-text/archive-support/isb-138-telephone-number-input-and-display-dscn.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

DSC Notice: 06/2010
Date of Issue: January 2010


Sponsoring Organisation:                                Implementation Date:    01 December 2015
                                                        Subject:
     DH Informatics                                     Telephone Number Input and Display
                                                        for Clinical Systems within the NHS in
      Directorate                                       England

                                        DATA SET CHANGE NOTICE

This DSCN informs users of the approval of a new information standard by the Information Standards
Board for Health and Social Care (ISB). It was presented at ISB’s meeting on 24 September 2009 and
subsequently approved having met the required conditions.

Summary:
This user interface standard defines the valid values for input and display of telephone numbers,
definition of telephone number elements and values, how items of information are to be labelled, the
layout and structure of the control and input field sizes.

Organisations developing or upgrading applications for which the standard is in scope MAY implement
the telephone number input and display standard immediately and SHOULD do so at their next major
system release. All clinical systems within the NHS in England MUST conform to the telephone number
input and display standard by 01 December 2015.

Patient safety risks associated with the telephone number input and display standard are specified in the
safety case accompanying the standard. Organisations that develop, supply, deploy and use clinical
systems must identify and manage any risks in current systems and mitigate implementation risks for
which responsibility for mitigation has been transferred to the supplying or deploying organisation. The
process for managing safety risks is detailed in NHS information standards for the application of patient
safety risk management to the manufacture, deployment and use of health software.

The standard can also be used to inform design of user interfaces in other systems and devices provided
any safety risks are identified and managed, for example, risks related to reduced screen size.


Other Datasets / Return Affected: None


Related DSCNs:

 DSCN 18/2009 - Application of Patient Safety Risk Management to the Deployment and Use of Health Software.
 DSCN 14/2009 - Application of Patient Safety Risk Management to the Manufacture of Health Software.
 AN/0904 – Demographics Display and Input for Clinical Systems in the NHS in England.
 DSCN 09/2010 – Patient Banner for Clinical Systems within the NHS in England.

Impact of Change:
Service:            Major                                  System Suppliers:    Major


The Information Standards Board for Health and Social Care (ISB) is responsible for approving
information standards.




 Further information about ISB can be found at www.isb.nhs.uk
 Data Set Change Notices can be found at www.connectingforhealth.nhs.uk/dscn
                                DATA SET CHANGE NOTICE

Reference No:                    DSCN 06/2010
Version No:                      1.0
Subject:                         Telephone Number Input and Display for Clinical Systems
                                 within the NHS in England

Type of Change:                  Introduction of a new approved Information Standard
Implementation Date:             01 December 2015
Business Justification:          To make display, input and user interaction consistent across
                                 all clinical systems within the NHS in England in order to
                                 increase patient safety by maximising clinical utility and
                                 minimising reading and transcribing errors.


 Introduction
 Displaying and inputting unambiguous information in a consistent format is a core element in
 ensuring effective patient care. It is vital that healthcare IT users correctly interpret and input
 information relating to all aspects of patient care and management.

 This user interface standard defines the valid values for input and display of telephone numbers, the
 layout and structure of the control and input field sizes.

 The standard has been developed as part of the Common User Interface (CUI) programme within the
 Technology Office of the Department of Health Informatics Directorate. This programme is
 addressing the safety risks posed by variation across the NHS in the way information is input and
 displayed. Its aim is to support healthcare IT users in correctly inputting and interpreting information
 relating to all aspects of patient care and management.

 Background
 Telephone numbers are used in various contexts within NHS applications and are frequently
 displayed within clinical systems. It is an important requirement for both patient safety and general
 usability that each number can be easily read and recognised as unique, in order to reduce errors
 and increase efficiency. By assisting the user when inputting telephone numbers, errors are reduced
 and data quality is increased.

 Significant inconsistencies exist across the labelling, inputting, and displaying of telephone numbers
 across various clinical applications. With clinical users often switching between applications, these
 inconsistencies can lead to the incorrect identification of patients as well as errors in one of the
 means of communicating with them, which in turn, leads to safety issues. Reduction of inconsistency
 is therefore an important goal in itself and the primary aim of the Telephone Number Input and
 Display CUI design guide.

 Having a consistent layout and set of values for the input and display of data items in clinical and
 healthcare systems potentially makes the design and development of such systems safer, easier, and
 quicker.

 Details of the Standard
 The standard is published with associated guidance in a Common User Interface Design Guide. It is
 applicable to user interfaces displayed on desktop or laptop computers. It is assumed that, at a
 minimum, these computers are capable of operating at a minimum display resolution of 1024 x 768,
 and have a keyboard and pointing device.

DSCN 06/2010                                                                               Page 2 of 4
 The following items are covered in the guidance:
     Defining the valid values for telephone number display and input.
     Control layout and structure, in order to achieve:
            o Optimal visibility of the values.
            o Easy recognition of the values in the context of the wider clinical application.
            o Easy recognition of data type requested for input.
            o Reduction of invalid entries.
            o Optimal size of input fields.

 Aspects that are out of scope:
    Data storage and transmission.
    Terms of use.
    Form design.
    Reduced size form factors.
    Fax numbers.
    Mobile numbers.
    Data input control types.

 Safety Case
 Clinical safety requirements and objectives related to the input and display of telephone numbers in
 clinical systems are documented in the safety case that accompanies this standard
 (www.isb.nhs.uk/documents/cui). Organisations that develop, supply, deploy and use clinical systems are
 required to identify and manage any risks in current systems until the standard can be implemented.
 They must also mitigate those live implementation risks outlined in the safety case for which
 responsibility for mitigation has been transferred to the supplying or deploying organisation.

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
          FR AM EW O RK                                          Organisation           IT Suppliers
                                          Care Personnel

           Effective Date
                                            Immediate             Immediate              Immediate
               “may use”

        Implementation Date              When available in       At next major         At next major
               “must use”                    system             system release        system release

         Conformance Date
“must be used effectively and assessed   01 December 2015     01 December 2015      01 December 2015
               for use”

Superseded Date (of prior standard)
                                           Not applicable       Not applicable         Not applicable
      “stop using prior standard”

DSCN 06/2010                                                                               Page 3 of 4
 Effects on Other Information Standards:
 None

 Sponsor Details
 Ken Lunn, Director of Data Standards and Products
 Department of Health Informatics Directorate
 Technology Office

 Further Information and Support
         CUI Telephone Number Input and Display Design Guide - www.cui.nhs.uk
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




DSCN 06/2010                                                                                                      Page 4 of 4
