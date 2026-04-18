# isb-132-address-input-and-display-dscn

## Provenance
- Source file: `raw/sources/references/nhs-archives/isb-standards/dscn-pdfs/isb-132-address-input-and-display-dscn.pdf`
- Extracted text: `derived/extracted-text/archive-support/isb-132-address-input-and-display-dscn.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

DSC Notice: 01/2010
Date of Issue: January 2010


Sponsoring Organisation:                                Implementation Date:    01 December 2015
                                                        Subject:
     DH Informatics                                     Address Input and Display for Clinical
                                                        Systems within the NHS in England
      Directorate
                                        DATA SET CHANGE NOTICE

This DSCN informs users of the approval of a new information standard by the Information Standards
Board for Health and Social Care (ISB). It was presented at ISB’s meeting on 24 September 2009 and
subsequently approved having met the required conditions.

Summary:
This user interface standard specifies the rules for the display of addresses, input of address data
elements, input of UK addresses, the UK address finder and input of non-UK addresses.

Organisations developing or upgrading applications for which the standard is in scope MAY implement
the address input and display standard immediately and SHOULD do so at their next major system
release. All clinical systems within the NHS in England MUST conform to the address input and display
standard by 01 December 2015.

Patient safety risks associated with the address input and display standard are specified in the safety
case accompanying the standard. Organisations that develop, supply, deploy and use clinical systems
must identify and manage any risks in current systems and mitigate implementation risks for which
responsibility for mitigation has been transferred to the supplying or deploying organisation. The process
for managing safety risks is detailed in NHS information standards for the application of patient safety risk
management to the manufacture, deployment and use of health software.

The standard can also be used to inform design of user interfaces in other systems and devices provided
any safety risks are identified and managed, for example, risks related to reduced screen size.

Other Datasets / Return Affected: None

Related DSCNs:

 DSCN 18/2009 - Application of Patient Safety Risk Management to the Deployment and Use of Health Software.
 DSCN 14/2009 - Application of Patient Safety Risk Management to the Manufacture of Health Software.
 AN/0904 – Demographics Display and Input for Clinical Systems in the NHS in England.
 DSCN 09/2010 – Patient Banner for Clinical Systems within the NHS in England.

Impact of Change:
Service:           Major                                   System Suppliers:    Major


The Information Standards Board for Health and Social Care (ISB) is responsible for approving
information standards.




 Further information about ISB can be found at www.isb.nhs.uk
 Data Set Change Notices can be found at www.connectingforhealth.nhs.uk/dscn
                                DATA SET CHANGE NOTICE

Reference No:                    DSCN 01/2010
Version No:                      1.0
Subject:                         Address Input and Display for Clinical Systems within the NHS
                                 in England

Type of Change:                  Introduction of a new approved Information Standard
Implementation Date:             01 December 2015
Business Justification:          To make display, input and user interaction consistent across
                                 all clinical systems within the NHS in England in order to
                                 increase patient safety by maximising clinical utility and
                                 minimising reading and transcribing errors.


 Introduction
 Displaying and inputting unambiguous information in a consistent format is a core element in
 ensuring effective patient care. It is vital that healthcare IT users correctly interpret and input
 information relating to all aspects of patient care and management. This user interface standard
 specifies the rules for the display of addresses, input of address data elements, input of UK
 addresses, the UK address finder and input of non-UK addresses.

 The standard has been developed as part of the Common User Interface (CUI) programme within the
 Technology Office of the Department of Health Informatics Directorate. This programme is
 addressing the safety risks posed by variation across the NHS in the way information is input and
 displayed. Its aim is to support healthcare IT users in correctly inputting and interpreting information
 relating to all aspects of patient care and management.

 Background
 NHS clinical and healthcare applications store and display addresses in various contexts. For
 example, the address may be a patient’s residential address, or the address of a doctor's surgery.
 Addresses play an important, though secondary, part in patient identification. Where only a patient’s
 name and gender are known, the address can help identify the correct patient from a list of matching
 results. The address must therefore be easily accessed, such as from the Patient Banner, as
 described in the CUI Patient Banner standard.

 Addresses need to be stored by clinical applications, displayed on monitors and printed on referral
 letters and envelopes. There is therefore a need to identify best practice regarding address input and
 display and to promote its correct usage across all NHS clinical and healthcare applications. This
 ensures that users have a consistent experience and maintains a high standard of data quality across
 the NHS.

 Addresses must be accurate to enable delivery to, collection from or visits at the correct location.
 Therefore, it is essential that all NHS clinical and healthcare applications provide an easily-readable
 and consistent display format for address information. Promoting patient safety is of primary
 importance, so it is critical that addresses are presented in a clear form that minimises ambiguity and
 reading and transcribing errors. An address that is not displayed in a clear form can be misread, or
 not understood at all. This could have patient safety issues if, for example:

        A patient needs to be sent a letter about an appointment.
        Test results need to be sent to a hospital or General Practitioner (GP) surgery.
        A next of kin needs to be contacted about the patient.
        A consultant needs to be contacted about a patient.
DSCN 01/2010                                                                               Page 2 of 5
 If clinical systems made by different developers vary in the way they display addresses, there is a risk
 of misinterpretation by healthcare professionals moving between those systems. This has the
 potential of leading to Patient Safety Incidents, as defined by the National Patient Safety Agency
 (NPSA).

 Having a standard method of displaying addresses makes the design and development of clinical
 systems easier and quicker. This benefits the NHS by having new systems available earlier and at
 lower cost.

 Details of the Standard
 The standard is published with associated guidance in a Common User Interface Design Guide. It is
 applicable to user interfaces displayed on desktop or laptop computers. It is assumed that, at a
 minimum, these computers are capable of operating at a minimum display resolution of 1024 x 768,
 and have a keyboard and pointing device.

 The following items are covered in the guidance:
    Address display.
    Address input data elements.
    UK address input.
    UK address finder.
    Non-UK address input.

 Aspects that are out of scope:
    Validation of an entered address as a real address.
    Validation that a given address is that of the stated person.
    Multi-language applications.
    Display styles.
    Reduced-size form factors.
    Data storage and transmission.
    Data history and provenance.
    Address types.
    Method of providing help text and user messages.
    Address picker.
    Form design.

 Safety Case
 Clinical safety requirements and objectives related to the input and display of addresses in clinical
 systems are documented in the safety case that accompanies this standard
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
DSCN 01/2010                                                                               Page 3 of 5
 Timescales for Implementation

                                                   Health and Social
              FR AM EW O RK                                                      Organisation                 IT Suppliers
                                                    Care Personnel

              Effective Date
                                                       Immediate                   Immediate                   Immediate
                 “may use”

        Implementation Date                       When available in              At next major               At next major
                 “must use”                           system                    system release              system release

          Conformance Date
“must be used effectively and assessed           01 December 2015            01 December 2015            01 December 2015
               for use”

Superseded Date (of prior standard)
                                                    Not applicable              Not applicable              Not applicable
      “stop using prior standard”


 Effects on Other Information Standards:
 None

 Sponsor Details
 Ken Lunn, Director of Data Standards and Products
 Department of Health Informatics Directorate
 Technology Office

 Further Information and Support
         CUI Address Input and Display Design Guide - www.cui.nhs.uk
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


DSCN 01/2010                                                                                                      Page 4 of 5
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




DSCN 01/2010                                                                                               Page 5 of 5
