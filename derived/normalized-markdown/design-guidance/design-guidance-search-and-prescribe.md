# Design Guidance -- Search and Prescribe

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Search and Prescribe.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-search-and-prescribe.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
Medications Management – Search and Prescribe

                             Wednesday, 20 January 2010
                                         Version 3.0.0.0

                                            Prepared by

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   Design Guidance Exploration – Search and Prescribe                                                                              2.0.0.0

   Pre-Release Design Guidance – Search and Prescribe                                                                              1.0.0.0

   Documents to be read in conjunction with this document

   Document Title                                                                                                                  Version
   Design Guidance – Medication Line                                                                                               2.0.0.0

   Design Guidance – Medications List                                                                                              1.0.0.0

   Design Guidance – Medications Management – Drug Administration                                                                  3.0.0.0

   Design Guidance – Time Display                                                                                                  3.0.0.0

   Design Guidance – Date Display                                                                                                  3.0.0.0

   Design Guidance – Date and Time Input                                                                                           3.0.0.0

   Design Guidance – Patient Banner                                                                                                4.0.0.0

   Design Guidance – Accessibility Principles                                                                                      1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.
All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2010. All rights reserved.

                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

TABLE OF CONTENTS
1    Introduction ....................................................................................................................................1
    1.1    Customer Need .........................................................................................................................2
    1.2    Scope ........................................................................................................................................4
     1.2.1        In Scope .............................................................................................................................4
     1.2.2        Out of Scope ......................................................................................................................4
    1.3    Assumptions..............................................................................................................................7
    1.4    Dependencies ...........................................................................................................................7

2    Search and Prescribe Guidance Overview ..................................................................................9
    2.1    Rationale Summary ................................................................................................................15
    2.2    Summary of Guidance ............................................................................................................16

3    Guidance Details for a Prescribing Area ...................................................................................18
    3.1    Introduction .............................................................................................................................18
    3.2    Principles .................................................................................................................................19
    3.3    Guidelines ...............................................................................................................................19
     3.3.1        Relating Prescribing to Context .......................................................................................19

4    Guidance Details for Quick Lists ................................................................................................23
    4.1    Introduction .............................................................................................................................23
    4.2    Principles .................................................................................................................................24
    4.3    Guidelines ...............................................................................................................................25
     4.3.1        Displaying a Quick List ....................................................................................................25
     4.3.2        Quick List Contents ..........................................................................................................28
     4.3.3        Notifying When a Quick List Has Changed .....................................................................31
     4.3.4        Accommodating Multiple Quick Lists ...............................................................................33

5    Guidance Details for Drug Search ..............................................................................................35
    5.1    Introduction .............................................................................................................................35
    5.2    Principles .................................................................................................................................37
    5.3    Guidelines ...............................................................................................................................38
     5.3.1        Positioning the Search Text Input Box ............................................................................38
     5.3.2        Defining Text Input Box Behaviour ..................................................................................40
     5.3.3        Displaying Results with Progressive Matching ................................................................44
     5.3.4        Providing Feedback for a Progressive Search ................................................................46
     5.3.5        Limiting the Height of a Search Results List ....................................................................48
     5.3.6        Extending the Search Results List ...................................................................................52
     5.3.7        Matching Input Text to Results ........................................................................................54
     5.3.8        Ordering Search Results .................................................................................................57
     5.3.9        Using Groups to Limit Search Results .............................................................................60

                                 Design Guidance – Medications Management – Search and Prescribe
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

     5.3.10     Supporting Spelling Matches and Synonyms ..................................................................62
     5.3.11     Co-Drugs and Their Ingredients ......................................................................................64
     5.3.12     Prioritising Results ...........................................................................................................65
     5.3.13     Shortcut Keys in Search Results .....................................................................................68
     5.3.14     Formatting Commonly Mis-Selected Matches .................................................................69
     5.3.15     Formatting Spelling Matches and Synonyms ..................................................................71
     5.3.16     Formatting Search Results Lists ......................................................................................73
     5.3.17     Generic Drug Names and Brand Names .........................................................................75

6    Guidance Details for Cascading Lists .......................................................................................78
    6.1   Introduction .............................................................................................................................78
    6.2   Principles .................................................................................................................................79
    6.3   Guidelines ...............................................................................................................................80
     6.3.1      Providing Cascading Lists ...............................................................................................80
     6.3.2      Displaying Cascading Lists ..............................................................................................85
     6.3.3      Contents of Cascading Lists ............................................................................................91
     6.3.4      Providing Cascading Lists for Brands ..............................................................................92

7    Guidance Details for Required Attributes .................................................................................97
    7.1   Introduction .............................................................................................................................97
    7.2   Principles .................................................................................................................................98
    7.3   Guidelines ...............................................................................................................................99
     7.3.1      Displaying Template Prescriptions ..................................................................................99
     7.3.2      Displaying a Selection Trail ...........................................................................................101
     7.3.3      Template Prescription Layout ........................................................................................104
     7.3.4      Contents of a Template Prescription .............................................................................107
     7.3.5      Maintaining Access to Template Prescriptions ..............................................................110
     7.3.6      Presenting Fields Step by Step .....................................................................................113
     7.3.7      Using Sentence Layout..................................................................................................120

8    Guidance Details for Prescription Forms ................................................................................126
    8.1   Introduction ...........................................................................................................................126
    8.2   Principles ...............................................................................................................................127
    8.3   Guidelines .............................................................................................................................128
     8.3.1      Presentation and Layout of Prescription forms..............................................................128
     8.3.2      Presenting a Detailed Prescription Form .......................................................................133
     8.3.3      Structuring a Detailed Prescription ................................................................................139
     8.3.4      Displaying Required and Optional Fields ......................................................................141

9    Guidance Details for Input Controls ........................................................................................149
    9.1   Introduction ...........................................................................................................................149
    9.2   Principles ...............................................................................................................................152
    9.3   Guidelines .............................................................................................................................153

                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

      9.3.1      Using Dynamic Controls ................................................................................................153
      9.3.2      Presenting Selection Lists in Prescription forms ...........................................................154
      9.3.3      Using Selection Lists to Prioritise ..................................................................................162
      9.3.4      Presenting Selection Lists for Inter-Related Fields........................................................165
      9.3.5      Pre-Filling Input Controls ...............................................................................................168
      9.3.6      Presenting Input Controls ..............................................................................................171

10      Guidance Details for Preview and Authorise .......................................................................179
     10.1        Introduction ....................................................................................................................179
     10.2        Principles .......................................................................................................................180
     10.3        Guidelines ......................................................................................................................181
      10.3.1     Providing a Preview .......................................................................................................181
      10.3.2     Presenting Controls for Authorising a Prescription ........................................................183

11      Document Information ...........................................................................................................186
     11.1        Terms and Abbreviations ...............................................................................................186
     11.2        Definitions ......................................................................................................................186
     11.3        Nomenclature ................................................................................................................187
      11.3.1     Body Text .......................................................................................................................187
      11.3.2     Cross References ..........................................................................................................188
     11.4        References.....................................................................................................................188

APPENDIX A           Usability Principles .................................................................................................191

APPENDIX B           Study ID 69: Executive Summary ..........................................................................193

APPENDIX C           Study ID 68: Executive Summary ..........................................................................198

APPENDIX D           Study ID 67: Executive Summary ..........................................................................204

APPENDIX E           Study ID 46: Executive Summary ..........................................................................210

APPENDIX F           Study ID 37: Executive Summary ..........................................................................215

                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

1             INTRODUCTION
    This document provides guidance for the design of searching for and prescribing of individual
    medications for single patients. It describes the area of focus, lists mandatory and recommended
    guidance points with usage examples and explains the rationale behind the guidance.
    Electronic prescribing is envisaged as being part of a clinical system that includes a series of views,
    some of which present medications information for each patient. Guidance for the display of a
    patient’s medications is defined in the document Design Guidance – Medications List {R1}.
    Guidance for another medications view, the drug chart, is defined in the document Design
    Guidance – Medications Management – Drug Administration {R2}.
    More detailed guidance for the layout and formatting of individual medications is defined in the
    document Design Guidance – Medication Line {R3}. This includes guidance that informs the
    selection of attributes and defines display formatting appropriate for the information used to
    express a single medication. (Later, this approach is referred to simply as ‘medication line’.)
    The structure of the prescribing processes considered in the creation of this guidance has been
    informed by the UK National Health Service (NHS) National Programme for Information Technology
                                                                      1
    (NPfIT) document dm+d Implementation Guide (Secondary Care) . This work describes a
    Prescribing Model that is designed to minimise the risk when prescribing (or ‘ordering’) medications
    in hospital and acute care. It advocates a dose-based prescribing system in which:
            A prescriber specifies a drug by its generic name plus dose, route and frequency
            A nurse (for example) then selects the correct quantity of an actual product to give to the
             patient
    The Prescribing Model aims to provide the safeguards needed to ensure dose-based prescribing
    results in prescriptions without any unsafe ambiguities for those giving medicines to patients. The
    Prescribing Model has been designed based on concepts such as those used in the NHS
                                          2
    Dictionary of Medicines and Devices (referred to as ‘dm+d’). The guidance in this document does
    not assume the use of the dm+d and is intended to work with any drug database that uses the
    concepts of generic drug name, which equates to Virtual Therapeutic Moiety (VTM) in the dm+d,
    and branded drug name, which equates to Trade Family Name (TFN) in the dm+d.
    The guidance in this document focuses on supporting hospital and acute care settings. Although all
    care settings have been considered as part of the analysis for this work, the guidance does not
    attempt to meet requirements for general practice or other requirements that are specialist or
    specific to settings outside of hospital and acute care.

           Alternative Design Solutions
           Whilst many different design alternatives have been considered, researched and tested in the construction
           of this guidance document, it is acknowledged that there are already a significant number of working
           electronic prescribing systems which may have employed design approaches that have not been directly
           assessed.
           Throughout this document, in sections where such alternatives are known to exist, the guidance document
           lists the key hazards that alternative design solutions must address. Within these sections, conformance
           ratings apply only where the guidance is followed by Independent Software Vendors (ISVs). Where the
           guidance is not followed it is the responsibility of the providers of alternative solutions to ensure that
           known risks are addressed.

    1
     NHS NPfIT – dm+d Implementation Guide (Secondary Care) {R4}:
    http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/refdocs/dmd_guidance.doc
    2
        NHS – dictionary of medicines + devices {R5}: http://www.dmd.nhs.uk/
                                                                                                               Page 1
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 To indicate their relative importance, each guideline in this document is ranked by Conformance
 and by Evidence Rating. Table 1 defines those terms:

 Term                    Definition
 Conformance             Indicates the extent to which you should follow the guideline when defining your UI implementation. There are
                         two levels:
                         Mandatory – An implementation should follow the guideline
                         Recommended – An implementation is advised to follow the guideline

 Evidence Rating         Summarises the strength of the research defining the guideline and the extent to which it mitigates patient safety
                         hazards. There are three ratings (with example factors used to determine the appropriate rating):
                          Low:
                             Does not mitigate specific patient safety hazards
                             User research findings unclear and with few participants
                             Unreferenced usability principles indicate the design is not significantly better than alternatives
                          Medium:
                             Mitigates specific patient safety hazards
                             User research findings clear but with few participants
                             References old authoritative guidance (for example, from the UK-based National Patient Safety Agency
                              (NPSA), Institute for Safe Medication Practices (ISMP) or World Health Organization (WHO)) that is
                              potentially soon to be superseded
                             Referenced usability principles indicate the design is significantly better than alternatives
                          High:
                             Mitigates specific patient safety hazards
                             User research findings clear and with a significant number of participants
                             References recent authoritative guidance (for example, from NPSA, ISMP or WHO)
                             Referenced usability principles indicate the design is significantly better than alternatives
 Table 1: Conformance and Evidence Rating Definitions

      Note
      Refer to section 11.2 for definitions of the specific terminology used in this document.

 Table 2 describes the changes made since the previous version of this guidance (Baseline version
 2.0.0.0 dated 21-May-2008):

 Change            IDs              Change Description
 Deleted                            This document has been significantly enhanced and extended since the previous version. That version
                                    was issued for consultation purposes and did not provide fully designed or safety assessed guidance.
 Modified
                                    Consequently, you should regard this design guidance as a new document and consider all of the
 Added                              content accordingly.
 Table 2: Updates since the Last Baseline Version

1.1        Customer Need
 The first electronic prescribing systems generally evolved from individuals taking the initiative to
 develop software that could replace paper-based systems, improve reporting and auditing and help
 to reduce medication errors. Since these systems have evolved largely independently of one
 another, there is no commonly used standard for the design of electronic prescribing systems. The
 lack of a standard is itself a source of patient safety risk since clinical staff who work in more than
 one location and use more than one system have to cope with very different processes and
 different user interfaces for completing the same tasks.

                                                                                                                                     Page 2
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

Medications Incidents – In a study of safety incidents (that excluded non-preventable adverse
drug reactions), the UK National Patient Safety Agency (NPSA) found that fifteen per cent of
medication incidents reported between January 2005 and June 2006 were related to prescribing.
To put this into perspective, the same study found that the majority of incidents related to the
administration of medications (59.3 per cent), followed by incidents related to preparation and
dispensing (17.8 per cent):
     59.3 per cent – administration of medications
     17.8 per cent – preparation and dispensing
     15 per cent – prescribing
These findings are published in the document Safety in doses: medication safety incidents in the
    3
NHS . In summary, the document lists the following as the most common types of reported
medication incidents, which together make up over half of all reported medication incidents:
     Incorrect dose, strength or frequency
     Omitted medication
     Wrong medication (including medications prescribed as a result of a mis-selection error)
Existing Systems – Inpatient hospital care settings currently use multiple kinds of medications
documents, in both paper-based and electronic formats. These documents differ depending on the
medications that they are used for and, furthermore, they differ between care settings. The
differences in the designs of these documents may well already impact patient safety, as care
professionals move between hospitals and are faced with new prescribing processes while working
in potentially time-pressured, high-stress environments. Differences in prescribing processes and
the design of electronic prescription forms are an increasing safety concern as electronic systems
are more widely adopted.
The Role of Electronic Prescribing – Research, in which extensive studies of medication-related
errors were reviewed, suggests that the most powerful means of preventing medication-related
errors are electronic prescribing and administration management, along with standards for
processes and for the writing of prescriptions (see Medication Errors {R7}, To Err Is Human {R8}
and Understanding Patient Safety {R9}).
When paper-based systems are replaced with electronic systems, visual cues, such as the colour
and thickness of a patient chart and the large surface area on which information can be displayed,
are lost. To be an effective replacement, the electronic system must find a different way of
presenting and communicating this information.
Whilst electronic prescribing is effective at mitigating some of the risks associated with paper-based
prescribing, and is generally found to reduce prescribing errors overall, it also has the potential to
introduce new kinds of errors (see The Extent and Importance of Unintended Consequences
Related to Computerized Provider Order Entry {R10}). Many of these errors are common to any
human-computer interface and can be effectively mitigated by following current best practice
usability principles.
The process of replacing a paper-based system with an electronic one inevitably also brings culture
changes and changes to processes. Electronic systems that are perceived as being too restrictive
are associated with loss of responsibility leading to complacency and over-reliance on the system.
Inflexible prescribing systems may be effective at supporting the prescribing of common
medications and the prevention of specific errors but the same inflexibility that supports these
processes also introduces problems for prescribing non-standard medications (see Role of
Computerised Physician Order Entry Systems in Facilitating Medication Errors {R11}).

3
 NPSA – Safety in doses: medication safety incidents in the NHS {R6}:
http://www.npsa.nhs.uk/nrls/alerts-and-directives/directives-guidance/safety-in-doses/
                                                                                                 Page 3
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

 The provision of a highly flexible electronic prescribing process, which still brings the benefits of
 reducing errors, relies on a comprehensive system that can perform complex error checking across
 information such as the patients’ medications, diagnoses, demographics and test results.

1.2       Scope
 This guidance informs the design of a user interface for prescribing a medication for a single patient
 in a hospital ward environment.

1.2.1          In Scope
 Guidance Areas              Details
 Users                       Hospital-based doctors, nurses and pharmacists who prescribe medications

 Care settings               Inpatient, hospital ward environment only

 Tasks                       Prescribing individual medications

 Medications                  Oral solids and liquids                    Granules and powders
                              Inhalers and sprays                        Suppositories and pessaries
                              Eye, ear and nose drops                    Topical patches
                              Topical liquids                            Nebuliser solutions
                              Creams, ointments and gels                 Injections (insulin example only)
                              Enemas and rectal solutions                Unlicensed medications (chloramphenicol example only)

 Finding a Drug               Text entry searching for generic or brand name
                              Pick lists (called ‘Quick Lists’)

 Search Results               Differentiating between generic drugs and brand names in lists
                              Displaying, ordering and formatting search results lists
                              Navigating within and between search results lists
                              Interacting with search result list items
                              Indicating non-formulary drugs in search results lists

 Template Prescriptions      Presentation of lists of predefined prescriptions

 Defining a Prescription      Structure and layout of the prescription form
                              Presentation of required and optional attributes
                              Guidance for efficiently prescribing commonly prescribed medications
                              Guidance for prescribing less commonly prescribed and more detailed medications

 Administration Schedules Selection from a predefined set of administration times or the definition of an individual administrative
                          event for a once only medication.

 Previewing a Prescription Guidance for supporting the review of a prescription before it is authorised
 Table 3: In Scope

1.2.2          Out of Scope
      Note
      Listing an item as out of scope does not classify it as unimportant. Project time and resource constraints
      inevitably restrict what can be in scope for a particular release. It is possible that items out of scope for
      this release may be considered for a future release.

 Table 4 defines areas that are not covered in this guidance. Although there may be specific risks
 associated with these areas that are not addressed in this guidance, it is likely that the principles in
 this guidance will extend to the display of medication information in many of the areas listed below.

                                                                                                                                  Page 4
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

The patient as a user of clinical software is out of scope; the guidance is designed to inform the
design of user interfaces used by clinicians. As such, it will therefore present information in formats
that are appropriate for healthcare professionals. The display of medication information in views
that are designed for patients is not addressed in this guidance.
The guidance has been written in such as way that it should be adaptable for use with various
display sizes and therefore does not make reference to specific dimensions for screen elements.
The care settings listed in Table 4 are out of scope because they have not been studied in depth in
our research. Some of this guidance is likely to be relevant to these care settings, but there will be
specific risks associated with each that have not been considered and therefore mitigated in this
guidance.
There are many medication types listed in Table 4 because they have not been sufficiently
researched to be able to make assumptions about the extent to which they are addressed by
guidance.

     Note
     Since this guidance uses a dose-based prescribing approach, it is not directly appropriate for general
     practice.

Guidance Areas         Details
Users                  Non-clinical staff, patients and other health care professionals not listed in the in scope section (that is,
                       only hospital-based doctors, nurses and pharmacists are in scope).

Care settings           Care settings other than inpatient, hospital ward environments, including: outpatients, clinics,
                         pharmacies, emergency services and departments, intensive care, High Dependency Unit (HDU),
                         primary care, including general practice, community and home visits, ward management, multi-patient
                         tasks
                        Paediatric prescribing

Tasks                  Any task other than prescribing individual medications, including:
                        Reviewing administration events to gain an understanding of the degree to which the medication has
                         been successfully administered
                        Relating medications to information elsewhere in the patient record, including the linking of information
                         in a plan or notes to medications
                        Medications reconciliation
                        Any task that follows authorisation of a prescription, such as editing or deleting a medication after it
                         has been prescribed
                        Creating links or associations between prescriptions or between prescriptions and other data (such as
                         test results)

Application Context     The display of the prescribing area in relation to other medications and non-medications views
                        Interactions between and access to other views whilst prescribing
                        Entry and exit points for the prescribing process, including ‘Cancel’ or ‘Close’, except for the default
                         entry point, ‘initiate prescribing’

                                                                                                                                  Page 5
                        Design Guidance – Medications Management – Search and Prescribe
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

Guidance Areas                Details
Medications                    Enteral feeds                                          Foams
                               Dressings and devices                                  Radioactive agents
These medications may          Implants and sticks                                    Regimens and order sets
have additional                Intrauterine devices (IUDs)                            Foodstuffs and other products specially
requirements or introduce                                                               formulated for medical use
                               Cements
specific risks that are not
                               Dialysis solutions                                     Over the counter (OTC) medications
explicitly addressed by
the guidance.                  Injections (except insulin example)                    Recreational drugs
                               Infusions and fluids (except by specific               Medications with titrating doses
                                examples)                                              Discharge medications – to take out (TTO)
                               Combination infusions                                  Patient’s own drugs (PODs)
                               Total Parenteral Nutrition (TPN)                       Epidurals and patient controlled analgesia
                               Gases                                                  Extemporaneous prescriptions
                               Blood and platelet products                            Unlicensed medications (except
                               Variable dose medications                               chloramphenicol example)
                                                                                       Controlled drugs

Prescription Types             Medication administered or supplied as part of medication instructions for defined groups of patients
                                (sometimes called Patient Group Direction (PGD))
                               Medication prescribed by prescribers other than clinicians (sometimes called supplementary
                                prescribers)
                               Corollary orders that require a view of additional patient-related information before and/or during
                                prescribing (for example, warfarin and International Normalized Ratio (INR) results).

Prescription Data              Specific data fields for prescriptions, including which should be required and which optional
                               Values for data fields for prescriptions

Formularies                    Formulary management, including the definition of formularies and which medications belong to them
                               The selection of a formulary for use during a drug search for prescribing

Recommendations               The definition of a draft prescription that is sent from one prescriber to another as a recommendation for
                              the treatment of a particular patient.

Prescriptions with            Definition of conditions such as criteria that must be met before administration can begin, criteria that
Conditions                    must be checked at each administration or criteria that determine when a medication should end.

Administration Schedules  The definition and modification of individual administrative events (except for once only medications)
                           in an administration schedule
                               Addition of once only medications to supplement a regular medication with a first dose too far in the
                                future

Previewing a prescription The saving of completed medications in a list (similar to a ‘shopping cart’) such that they can be reviewed
                          both individually and as a set before they are authorised.

Changing Prescriptions         The selection of a medication (such as in a Medications List or a Drug Administration view) and
                                modification of the prescription
                               The selection of a past medication for re-prescribing, such that the past medication is used as a
                                template for a new prescription
                               Discontinuing, suspending or restarting a medication

Retrospective Prescribing The recording of prescriptions for medications that have been or are being administered.

Partial Prescriptions         Saving of partially completed prescriptions for review and authorisation at another time.

Permissions                   Limiting access to individual controls (such as command buttons or input controls) and options available
                              within them (such as list items in a drop-down list) based on permissions (associated with login).

                                                                                                                                      Page 6
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Guidance Areas                 Details
 Input Forms                     Structure and layout that would apply to standard forms
                                 Validation and error handling
                                 Truncation and abbreviation

 Dose Calculation                Automatic calculation of doses
                                 Display and input of height, weight and mass

 Authorisation                   Any part of the user interface process that follows the activation of a control that authorises a
                                  prescription
                                 Cancelling, closing or otherwise exiting a prescription before it is complete

 Decision and knowledge          Decision support alerting for allergies
 support                         Decision support for drug-to-drug interactions
                                 Decision support alerting based on patient medical history, demographics or other information held in
                                  the patient record
                                 Knowledge support for browsing drugs by classification
                                 Knowledge support for looking up information about medications.

 Allergies                      The display and recording of allergy information and adverse drug reaction risks is covered in a separate
                                guidance document.

 Patient consent and            Patient preference, such as for a particular drug form. Patient consent, particularly in a mental health
 preference                     context.

 Other                           Restricted parts of the clinical record (sometimes referred to as 'sealed envelope')
                                 Supply and dispensing
                                 Guidance (other than notifications) that might be needed for when a patient is ‘Nil by Mouth’
 Table 4: Out of Scope

1.3          Assumptions
 ID          Assumption
 A1          The majority of medications prescribed by any given clinician will come from a short list of medications that are regularly
             prescribed by that clinician.

 A2          The majority of prescriptions (about 80%) can be prescribed by selecting a predefined template prescription.

 A3          When prescribers initiate the prescribing process, they know what they want to prescribe and are ready to prescribe it.

 A4          When using the prescribing interface, the Microsoft Health Common User Interface (CUI) Patient Banner remains visible
             throughout the prescribing process.

 A5          In general (with known exceptions) prescribing by generic drug name should be encouraged in preference to prescribing by
             products or brand names.
 Table 5: Assumptions

1.4          Dependencies
 ID          Dependency
 D1          This guidance is informed by the NHS NPfIT dm+d Implementation Guide (Secondary Care) {R4}

 D2          This guidance is informed by the NHS NPfIT ePrescribing Functional Specification4

 4
  NHS NPfIT – ePrescribing Functional Specification {R12}:
 http://www.connectingforhealth.nhs.uk/newsroom/news-stories/eprescfunctspec
                                                                                                                                           Page 7
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

ID       Dependency
D3       This guidance uses the concepts ‘generic drug’ and ‘brand name’ and depends on access to, or creation of, a database or
         dictionary, that can support these concepts. In the Dictionary of Medicines and Devices {R5} (known as ‘dm+d’), the concept
         Virtual Therapeutic Moiety (VTM) equates to generic drug name and the recently created Trade Family Name (TFN) equates
         to brand name.

D4       The display of drug names and medications is defined by the document Design Guidance – Medication Line {R3}.

D5       The display and entry of dates is defined by the documents Time Display {R13}, Date Display {R14} and Date and Time
         Input {R15}
Table 6: Dependencies

                                                                                                                              Page 8
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

2         SEARCH AND PRESCRIBE GUIDANCE OVERVIEW
    The guidance is divided into sections that are organised such that they follow the prescribing
    process from initiation through to authorisation. Within each section are a number of tables
    containing guidance points, usage examples and rationale for specific aspects of the user interface.
    The guidance assumes a flexible prescribing process that can support both a quick prescribing
    process for the most commonly prescribed drugs and a more detailed prescribing process for less
    common prescribing practices, whilst mitigating known risks and meeting a high standard of patient
    safety.

       Important
       The visual representations used within this document to display the guidance are illustrative only. They
       are simplified in order to facilitate understanding of the guidance points. Stylistic choices, such as colours,
       fonts or icons are not part of the guidance and unless otherwise specified are not mandatory requirements
       for compliance with the guidance in this document.
       The usage examples in this document include examples of sets of fields, some of which are shown as
       required and some as optional. These examples are illustrative only and are not intended to provide
       guidance on which fields should be available for specific types of medication nor which fields should be
       required or optional.

                                                                                                                Page 9
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

Figure 1 and Figure 2 show an example of a prescribing process. The process itself does not form
part of this guidance. The illustration shows how each section of the guidance can potentially relate
to the previous and the next steps in the prescribing process. It thus shows a subset of the many
valid alternative paths through the process of prescribing.

Figure 1: Overview of the Prescribing Process and Corresponding User Interface Prescribing Steps (Part 1 of 2)
                                                                                                                 Page 10
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Figure 2: Overview of the Prescribing Process and Corresponding User Interface Prescribing Steps (Part 2 of 2)

     Note
     Validation and error handling is out of scope (see section 1.2.2).

The process of creating a prescription can begin with a new, blank prescription. It may also begin
by selecting an item, such as a drug name, elsewhere in the application and using it to begin the
prescribing process.

                                                                                                                 Page 11
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

For example, prescribing may be started by:
       Selecting a drug name from a reference tool (for example, the British National
                  5
        Formulary (BNF))
       Selecting a drug name from a care plan or care pathway
By selecting a drug name elsewhere in the application, the first part of the prescribing process (in
which a drug is selected from a list) can be skipped. When a medication is selected from a list of
current or past medications for the current patient, the drug name and other attributes can be
carried through to the prescribing process, thus allowing other steps to be skipped. Although some
of these tasks may be performed in the view from which they were selected, other tasks may open
the medication in the prescribing area:
       Creating a prescription after one or more doses have been administered
       Modifying a prescription
       Suspending or restarting a prescription
       Discontinuing (stopping) a prescription
       Re-prescribing a past medication
Figure 3 shows these entry points in relation to (a simplified) prescribing process. Guidance relating
to these alternative entry points for the prescribing process is provided in section 3.

    Default Entry Point

                                      Create a prescription                    Select drug

    Select from a Drug Dictionary

                                           Drug name

                                                                               Select route
    Select from a Care Pathway

                                           Drug name

                                      Part or wholly defined
                                           prescription

    Select from a Medications View                                             Define other
                                                                                attributes
              Modify
                                            Change
                                        a wholly defined
             Suspend                      prescription

                                          Re-prescribe
              Restart
                                        a wholly defined
                                          prescription
                                                                                Complete
           Discontinue
                                                                               prescription

Figure 3: Entry Points

5
British National Formulary {R16}: http://www.bnf.org/bnf/
                                                                                                Page 12
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

Figure 4 represents the user interface process for prescribing. The sections in this document are
presented in the same order as the process in this diagram.

Figure 4: Overview of the Prescribing Process

                                                                                                 Page 13
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Figure 5 shows the specific user interface areas for which there is guidance in this document. They
are displayed in the same order as the steps in the prescribing process illustrated in Figure 4.

Figure 5: User Interface Prescribing Steps

                                                                                                 Page 14
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

2.1        Rationale Summary
 Each table of guidance includes a rationale that summarises the design analysis, provides a brief
 account of related primary and secondary research and lists the key patient safety hazards for the
 guidance points in that table. The design analysis describes the deciding factors in the assessment
 of alternative approaches to the user interface design and lists the usability principles that are most
 pertinent. The desk research section lists the publications that have informed the guidance. The
 patient safety section lists the hazards that are mitigated by the guidance and provides a brief
 description of how those hazards have been mitigated. Finally, the user research section describes
 findings from user feedback and user testing sessions that were used to inform the iterative design
 process.
 The following principles and existing standards provided benchmarks throughout the process of
 developing the guidance:
  Usability Principles (specifically for Search and Prescribe):
         Mitigate the risks of mis-selection and misinterpretation
         Increase efficiency by prioritising the prescription of commonly prescribed medications over
          less commonly prescribed medications
         Maximise safety in the absence of decision support systems by designing for the reduction
          of errors from invalid or inappropriate selections or entries
         Encourage simplicity of design by promoting user interface approaches that help to avoid
          overly complex displays and interactions that require many controls
         Ensure that the prescribing process can be supported in multiple layouts and is flexible
          enough to be presented in different screen dimensions
         Maximise scalability such that the prescribing process can be modified to accommodate
          additional information, steps or shortcuts
         Manage users expectations and improve their efficiency by providing a clear framework
          with consistent logic for the placement of user interface elements and the interactions that
          they support
         Minimise the potential for important information to be hidden from view
         Adhere to a user interface strategy that gives the impression of making progress within a
          single space (that has all the necessary information immediately or readily available) and
          avoids the impression of needing to move between many different spaces.
 General Usability Principles (see APPENDIX A):
                                                                6
         Jakob Nielsen’s Ten Usability Heuristics
         Ben Shneiderman’s eight golden rules of interface design {R18}
         ISO 9241: Presentation of information {R19}

 6
     Nielsen, J – Ten Usability Heuristics {R17}: http://www.useit.com/papers/heuristic_list.html
                                                                                                    Page 15
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Existing Guidance:
       NHS NPfIT – ePrescribing Functional Specification {R12}
       NHS NPfIT – Guidelines for the Design and Presentation of Medication Elements Required
        in Electronic Prescribing or Medication Ordering Systems {R20}
                                                                                                            7
       ISMP – Draft Guidelines for Safe Electronic Communication of Medication Orders
       NHS NPfIT – dm+d Implementation Guide (Secondary Care) {R4}

2.2      Summary of Guidance
 Table 7 summarises the content of this document by outlining each area of guidance (along with a
 cross reference to the relevant section) and providing a visual example to illustrate how it might be
 implemented:

 Areas of Guidance                           Visual Summary
 Section 3 Prescribing Area

 Section 4 Quick Lists

 Section 5 Drug Search

 Section 6 Cascading Lists

 7
  ISMP – ISMP MedicationSafetyAlert! – It’s Time for Standards to Improve Safety with Electronic Communication of
 Medication Orders – Draft Guidelines for Safe Electronic Communication of Medication Orders {R21}:
 http://www.ismp.org/Newsletters/acutecare/articles/20030220.asp
                                                                                                                    Page 16
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Areas of Guidance                             Visual Summary
Section 7 Required Attributes

Section 8 Prescription Forms
                                                    Label   drug – route

                                                    Label   strength
                                                    Label   dose
                                                    Label   frequency

                                                    Label  xxxxxx
                                                    Label  yyyyyy
                                                     Label zzzzzz

Section 9 Input Controls

Section 10 Preview and Authorise                  Prescription Form

                                                                                  Preview

                                                  Preview    Authorise                  Authorise

Table 7: Summary of Guidance

                                                                                                    Page 17
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

3            GUIDANCE DETAILS FOR A PRESCRIBING AREA

3.1          Introduction
    When the prescribing process is initiated, an area will be presented in which the controls for
    prescribing are displayed. Although the dimensions and layout of this area are dictated by the
    design and technology of the specific clinical application, guidance is provided to ensure
    consistency in areas where there are potential patient safety hazards. The guidance in this section
    mitigates specific hazards relating to how the prescribing area may interact with other views, such
    as a list of a patient’s medications, and how the display of that list may interact with other user
    interface elements, such as the patient banner.
    Figure 6 shows entry points for the prescribing process. The right-hand side of the diagram is a
    simplified version of the process illustrated in Figure 4. The left-hand side of the diagram illustrates
    some of the possible ways in which prescribing can be started, including some examples of drug
    names and medications that can be selected elsewhere in the application and carried forward into
    the prescribing process. The guidance in this section relates to the context in which the prescribing
    process is launched.

      Default Entry Point

                                                  Create a prescription                Select drug

      Select from a Drug Dictionary

                                                          Drug name

                                                                                       Select route
      Select from a Care Pathway

                                                          Drug name

                                                 Part or wholly defined
                                                      prescription

      Select from a Medications View                                                   Define other
                                                                                        attributes
                  Modify
                                                           Change
                                                       a wholly defined
                Suspend                                  prescription

                                                         Re-prescribe
                 Restart
                                                       a wholly defined
                                                         prescription
                                                                                        Complete
               Discontinue
                                                                                       prescription

    Figure 6: The Prescribing Process – Entry Points

                                                                                                       Page 18
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

3.2     Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Ensure that the prescribing process can be supported in multiple layouts and is flexible
        enough to be presented in different screen dimensions:
             Guidance does not specify the shape or dimensions of the prescribing area so that it
              can remain flexible and can be displayed alongside other views
       Manage users expectations and improve their efficiency by providing a clear framework
        with consistent logic for the placement of user interface elements and the interactions that
        they support:
             The consistent placement of toolbars that are part of medications views and of the
              patient banner ensure that prescribers know where to look for specific information

3.3     Guidelines
3.3.1        Relating Prescribing to Context
 This section describes important considerations when accessing other views whilst entering
 information into a prescription form. For example, views such as those for checking other
 medications, current diagnoses, allergies and test results (to name a few) may be essential to
 inform the prescribing process.
 Views that are displayed concurrently with prescribing should be assessed to check for patient
 safety risks introduced by the interactions (or perceived interactions) between the two views and by
 the impact of restricting the dimensions of any view that would normally be displayed full screen.

                                                                                                                    Evidence
 ID           Guideline                                                                               Conformance
                                                                                                                    Rating
 MSP-0010     Do not allow the prescribing area to occlude the Patient Banner                         Mandatory     Medium

 MSP-0020     Allow a patient’s current medications to be accessed whilst prescribing, preferably     Recommended   High
              by allowing current medications to be displayed simultaneously

 MSP-0030     Support switching to, or simultaneous presentation of, other views without losing       Recommended   Medium
              prescription information entered so far

 MSP-0040     If it is possible to navigate away from the prescribing area before completing a        Recommended   High
              prescription, ensure that a clear indication that there is an incomplete prescription
              remains displayed on screen

 MSP-0050     Do not allow the prescribing area to be positioned such that it separates the           Recommended   Low
              controls (such as those on a toolbar) from the view to which they relate (see
              Design Guidance – Medications List {R1})

                                                                                                                           Page 19
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Usage Examples
                                               In this correct example, the prescribing area does not occlude the
                                               Patient Banner (MSP-0010)

                                               This example is incorrect because the prescribing area has occluded
                                               the Patient Banner (MSP-0010)

                                               This example is incorrect because the prescribing area fills the screen
                                               and obscures the Patient Banner (MSP-0010)

                                               In this correct example, a prescribing area is displayed above a list of
                                               current medications (MSP-0020)

                                                                                                                Page 20
                 Design Guidance – Medications Management – Search and Prescribe
                 Prepared by Microsoft, Version 3.0.0.0
                 Last modified on 20 January 2010

                                                                   In this correct example, a prescribing area is displayed alongside a
                                                                   list of current medications and the toolbar for the Medications List
                                                                   view remains associated (MSP-0050)

                                                                   This example is not recommended because the prescribing area
                                                                   separates the medications list controls (represented by the
                                                                   medications list toolbar box) from the list of current medications
                                                                   (MSP-0050)

Rationale
Design Analysis:
Guidance from Design Guidance – Patient Banner {R22} is reiterated here to emphasise the importance of maintaining a link between
a prescribing window and a means of identifying which patient the prescription is being created for. Ensuring that the Patient Banner is
always visible when a prescription is being created (MSP-0010) helps to mitigate the risk that a drug is prescribed for the wrong
patient.
Prescribers are generally expected to review a patient record before they make the decision to prescribe a medication. Nonetheless,
the information that informs their prescribing decisions may be too much to hold in their short-term memory so it is likely to be useful if
they can access such information from other views and then return to prescribing (MSP-0020, MSP-0030).
If this is achieved by displaying the prescribing area alongside a medications list, then it is important that the two areas (Prescribing
Area and Medications List) can be reduced to the required dimensions without introducing further risks. If a view such as the
Medications List View is displayed alongside, the prescriber must be able to identify whether that list is displaying current or past
medications. Thus, the relationship between the toolbar (which includes a control that displays ‘current’ or ‘past’) must be clearly
associated with the list (MSP-0050).
If two areas (such as Prescribing Area and Medications List) cannot be displayed alongside one another, such that the user must
switch between them, there is still some dependency on the user’s short-term memory for the transfer of information from one to the
other. In this style of interaction there are two risks to be mitigated:
 That the system does not retain information entered so far when switching away from the prescription
 That the user switches to a Medications List View, is distracted by information in that view and forgets to return to the prescription
  to complete it, potentially assuming that it is complete
If information is lost when switching away from an incomplete prescription, then the user will be discouraged from doing so and is more
likely to rely on his or her short-term memory than to switch to another view to check information (MSP-0040).
Desk Research:
In Role of Computerized Physician Order Entry Systems in Facilitating Medication Errors {R11}, Koppel and others conducted a study
to find out what CPOE-related factors enhance the risk of prescription errors. In their findings, they report a number of ‘human-machine
flaws’ and one of these (reported by 55% of house staff) relates to the inability of prescribers to identify the patient whilst they are
prescribing because of fragmented displays. The Patient Banner is designed to mitigate this by always being displayed when a task is
being completed that relates to a single patient, so that there is always an on-screen reference to the current patient.
The ePrescribing Functional Specification {R12} requirement GEN.OS.005 indicates that the identification of the patient for whom
drugs are being prescribed is to be clear, consistent and visible at all times while medication pathways are being accessed.

                                                                                                                                     Page 21
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Visibility of system status – The Patient Banner clearly communicates the patient for whom the drug is being prescribed and, if the
  prescriber switches away from this view, the system maintains a notification on screen so that the prescriber knows that there is an
  incomplete prescription still open
 Recognition rather than recall – By allowing the prescriber to refer to information outside of the prescribing area, there is no need to
  rely on recall of any information available in other views
 Error prevention – Ensuring that the patient banner is always visible makes it less likely that a drug can be prescribed for the wrong
  patient
 User control and freedom – If prescribers begin the prescribing process and then find that they need to refer to other information,
  such as a test result, during the prescribing process, a system that allows them access to other views during prescribing prevents
  the need to cancel the prescription and start again
User Research:
In Study ID 69 (see APPENDIX B) the study participants indicated that access to current medications was important during prescribing
and that the ability to access this information without having to switch views is preferable.

                                                                                                                                  Page 22
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

4            GUIDANCE DETAILS FOR QUICK LISTS

4.1          Introduction
    The process of prescribing begins with the selection of a drug to prescribe. Drugs are presented in
    a Quick List and in search results. The Quick List is displayed when the prescribing process is
    started and search results are displayed when text is entered into a search text entry box. This
    section provides guidance for Quick Lists and section 5 provides guidance for searching for drug
    names.
    The guidance in this section is part of the first step in the prescribing process, which is shown with
    a grey background in Figure 7:

    Figure 7: The Prescribing Process – Select Drug

                                                                                                     Page 23
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

 Figure 8 is an extract from Figure 5 to illustrate the user interface prescribing steps covered in this
 section showing the Quick List step and links to other steps:

 Figure 8: User Interface Prescribing Steps – The Quick List

4.2       Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Mitigate the risks of mis-selection and misinterpretation:
                 Mitigate the risk of incorrect selection of a drug name from the Quick List
                 Mitigate the potential for the Quick List to be mistaken as a suggested list of drugs to
                  prescribe
                 Mitigate the risk of misinterpretation of the Quick List itself and the list items within it
       Maximise safety in the absence of decision support systems by designing for the reduction
        of errors from invalid or inappropriate selections or entries:
                 The Quick List allows drug names to be presented at the start of the prescribing
                  process

                                                                                                            Page 24
                                 Design Guidance – Medications Management – Search and Prescribe
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

4.3     Guidelines
4.3.1        Displaying a Quick List
                                                                                                                       Evidence
  ID           Guideline                                                                         Conformance
                                                                                                                       Rating
  MSP-0060     Support the display of a Quick List containing preselected drug names             Mandatory             Medium

  MSP-0070     Minimise the frequency with which the contents of the Quick List change           Recommended           Medium

  MSP-0080     When one or more Quick Lists are provided, display one by default when the        Mandatory             Medium
               prescribing process is started

  MSP-0090     Include a description of the contents of the Quick List at the top or bottom of   Mandatory             Medium
               the list

  MSP-0100     Display the Quick List below (or as a drop-down list extension of) the search     Recommended           Low
               text input box

  MSP-0110     Do not support navigation (such as expanding and collapsing or drilling down)     Mandatory             Medium
               within a Quick List

  MSP-0120     Limit the number of drugs in the Quick List such that they can be displayed in    Mandatory             Medium
               full without a scroll bar

  Usage Examples
                                                                     In this correct example, the Quick List is displayed by default
                                                                     when the prescribing process is started (MSP-0080), its contents
                                                                     have been preselected (MSP-0060) and it contains a label (‘10
                                                                     commonly prescribed medications’) that describes the contents
                                                                     (MSP-0090)

                                                                                                                              Page 25
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                               This example is incorrect because the frequency with which the
                                                               Quick List is changed has not been minimised. The example
                                                               shows a Quick List containing the ‘Last 10 drugs prescribed’ and
                                                               is thus updated every time it is displayed (MSP-0070)

                                                               This example is incorrect because the Quick List control does
                                                               not have a default so there is no list to display when prescribing
                                                               begins (MSP-0080)

                                                               This example is incorrect because a Quick List has not been
                                                               displayed by default (MSP-0080)

                                                               In this correct example, the Quick List is displayed below the
                                                               search text input box (MSP-0100)
Type a drug name to search

    paracetamol
    paracetamol                           Ctrl + 1

    aspirin                               Ctrl + 2

    warfarin                              Ctrl + 3

    oxycodone                             Ctrl + 4

                                                               This example is not recommended because the Quick List is not
Type a drug name to search                                     displayed below the search results (MSP-0100)
                             Quick List

                                                               This example of a Quick List is incorrect because expand and
                                                               collapse controls have been provided (MSP-0110)

                                                                                                                          Page 26
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

                                                                       This example of a Quick List is incorrect because a scroll bar (a
                                                                       form of navigation) has been provided (MSP-0120)

Rationale
Design Analysis:
The Quick List is designed to remove the need to search for some of the drugs that are prescribed most frequently. It can only add
value if it is faster or easier to use than searching for a drug name and is thus more effective if it contains a few drugs for which the
shortcut keys can be learned (MSP-0060, MSP-0070). Since most drug names can be found quickly by typing in a few letters, the
Quick List must be immediately accessible if it is to be useful (MSP-0080). It also needs to be short in length (MSP-0120) since there
is limited value in spending time scrolling or navigating a Quick List (or series of Quick Lists) if the entry of a few characters in the
search text input box is enough to find the drug (MSP-0110).
Since Quick Lists provide immediate access to a list of drug names without the need to search, their contents need to be carefully
managed and it may not be appropriate to include certain drugs in the list. For example, it may not be appropriate to include drugs
such as those specified in Look-alike/sound-alike drugs8 (or any drug that is often selected or prescribed when a different drug was
intended). The guidance therefore assumes that the drugs in a Quick List will be preselected (MSP-0060) and that an appropriate
Quick List will only be provided to users where relevant.
Whilst it may be possible to configure more than one Quick List, it is only useful to display one Quick List at a time for each user
(MSP-0080) for the same reasons that the list should be kept short. Since the Quick List contains only a few selected drugs, and is not
filtered by any search criteria, the drug names will not all begin with the same letters and the risk of selection error is reduced.
The Quick List is displayed in the same space as search results since it is a similar mechanism for accessing a similar list from which
to select a drug name. Since a novice or first time user may misinterpret the list or the purpose of the list, its contents should be
adequately described with a label (MSP-0090).
Guidance recommends that the Quick List is displayed below the search text input box to clarify the similarity in purpose of both lists
and to avoid potential confusion from the display of both a Quick List and a search results list simultaneously (MSP-0100).
If a Quick List is populated automatically, it may be possible for the placement of drug names adjacent in a list to cause unexpected
juxtapositions. For example, the following may appear adjacent in a list:
 Commonly confused drug names (see also section 5.3.14)
 Alternative drugs with similar or identical pharmaceutical properties
 A generic drug and a branded version of the same generic drug (see also section 6.3.4)
Mis-selection or confusion as a result of these juxtapositions can be mitigated by reviewing Quick Lists when first implemented and
again each time they are changed so that the list order can be manually altered if necessary. Since these activities are associated with
system configuration, guidance is not provided for managing the order of Quick Lists.

8
 The Joint Commission – National Patient Safety Goals – NPSG.03.03.01 – Look-alike/sound-alike drugs {R23}:
http://www.jointcommission.org/AccreditationPrograms/BehavioralHealthCare/Standards/09_FAQs/NPSG/Medication_safet
y/NPSG.03.03.01/look_alike_sound_alike_drugs.htm
                                                                                                                                   Page 27
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

  Desk Research:
  The ePrescribing Functional Specification {R12} includes a requirement (GEN.OS.082) in which it is stated that lists of favourite drugs
  should not be produced by individual users without their contents being reviewed and potentially updated centrally. Guidance for the
  Quick List (MSP-0060) reflects this principle of maintaining central control.
  Guidance in this section is informed by the following Nielsen heuristic {R17}:
   Flexibility and efficiency of use – A Quick List allows the prescriber to select a drug from a list instead of having to search for it,
    without impacting the efficiency of the process of searching for a drug. (The Quick List is displayed by default and no extra steps
    are needed to dismiss it before starting a drug search.)
  User Research:
  In Study ID 37 (see APPENDIX F), participants who were asked about the Quick List considered it to be useful providing it contained
  drugs that were relevant to them. The participants estimated that a trust-wide list of commonly prescribed drugs would not be as useful
  as a list constructed for their specific context or specialty.
  Hazard Risk Analysis Summary:
  From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
  which are mitigated by the guidance:
      Potential Hazards:                         Mitigations:
       The presence of a Quick List              This guidance document includes an assumption (see section 1.3) that prescribers
        influences the choice of drug              know what they want to prescribe before they initiate the prescribing process
        inappropriately for inexperienced         The limited length of the Quick List (MSP-0120) reduces the number of available
        users                                      choices. This reduces the likelihood that there will be a drug in the Quick List that is
                                                   similar to or an alternative for the one that the prescriber has in mind and thus
                                                   reduces the likelihood that the presence of such a drug may influence choice
                                                  If a progressive search is supported (see section 5.3.3), some inexperienced users
                                                   may find it easier to type in letters than to read the contents of a Quick List. (It is
                                                   expected that a Quick List would become more useful over time as users become
                                                   more familiar with its contents)
       The user thinks that the Quick List is  Text labels at the top or bottom of the search results list are used to describe the
        all there is                             contents of the list (MSP-0090)
                                                  The presence of the search text input box and the in-field prompt within it (see
                                                   section 5.3.1) mitigate this risk by clearly indicating that it is possible to search for a
                                                   drug

4.3.2         Quick List Contents
       Important
       This section contains guidance for which there may be alternative solutions. Accordingly, the conformance
       ratings in this section apply only where the guidance is adopted.
       The Rationale section contains a summary of the known risks which are addressed in this section and
       which must be addressed by any alternative solution. For more information, see the Alternative Design
       Solutions note in section1 .

                                                                                                                                 Evidence
 ID              Guideline                                                                                Conformance
                                                                                                                                 Rating
 MSP-0130        Allow only items that can be displayed in a search results list to be included in a      Mandatory              Medium
                 Quick List

 MSP-0140        Supplement Quick List entries with shortcut keys                                         Mandatory              Medium

 MSP-0150        Display shortcut keys to the right of each entry in the Quick List                       Mandatory              Medium

 MSP-0160        Use alternate row shading in the Quick List, as in the search results list               Recommended            Medium

                                                                                                                                        Page 28
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
                                                             In this correct example, the Quick List contains only
                                                             items that can be displayed in a search results list.
                                                             The entries are supplemented with shortcut keys
                                                             that are displayed to the right of each entry in the list
                                                             and the list uses alternate row shading (MSP-0130,
                                                             MSP-0140, MSP-0150, MSP-0160)

                                                             This example is incorrect because the Quick List
                                                             contains items (‘Dose’, ‘500 mg’ and
                                                             ‘modified-release’) that cannot be displayed in a
                                                             search results list (MSP-0130)

                                                             This example is not recommended because
                                                             alternate row shading has not been used in the
                                                             Quick List (MSP-0160)

                                                                                                              Page 29
                 Design Guidance – Medications Management – Search and Prescribe
                 Prepared by Microsoft, Version 3.0.0.0
                 Last modified on 20 January 2010

Rationale
Design Analysis:
The Quick List is designed to be a shortcut that removes the need to search for some of the drugs that are prescribed most frequently.
(See the rationale in section 4.3.1.)
The selection of a drug to prescribe is part of a process in which a series of selections are made to quickly define the prescription
details. The Quick List is a shortcut for the first part of this process.
The introduction of anything other than a drug name (or any item that can be displayed in a search results list) increases the cognitive
load associated with processing the list. This is because it takes longer to review a list containing a mixture of list item types (drug
names and template prescriptions) than a list of the same item types (just drug names). For example, displaying a template
prescription that contains a dose and frequency as well as a drug name runs the risk of it being seen as a shortcut (by pre-filling many
fields) and that only requires some fields defined by the template to be modified. In this case, selecting a template prescription in the
Quick List may not actually be any faster than selecting drug name, route and then a template prescription that contains the intended
values. As a workaround, it also introduces the risk that some of the values are not changed from the template values to the intended
value before the prescription is submitted. Thus guidance maintains the Quick List as an alternative for searching by ensuring that its
contents are of the same nature as those that might be displayed in a search results list (MSP-0130) and applying the same formatting
(MSP-0160).
The display of template prescriptions in a Quick List is not recommended because it allows the prescriber to select a template
prescription and authorise in two mouse clicks (or equivalent keyboard interactions). When adjacent template prescriptions are for
different drugs, the risk that the wrong drug is prescribed is thus greater. By separating the selection of drug name, route and other
attributes in order to display template prescriptions:
 The selections remain quick and takes little cognitive processing
 There is greater feedback for each selection
 There is more time and information to support noticing a mis-selection before the prescription is authorised
 The contents of the Quick List remain succinct and thus more likely to be committed to memory
The Quick List becomes more effective when its contents are familiar to the user so that shortcut keys can be learned and Quick List
entries can be selected quickly (MSP-0140, MSP-0150).
Desk Research:
As reported in The Use of Tall Man Lettering to Minimise Selection Errors of Medicine Names in Computer Prescribing and Dispensing
Systems, the selection of a drug name combined with dose and strength is associated with greater incidence of mis-selection errors
than the selection of drug name alone9.
Although specifically for Web pages and applications, the World-Wide Web Consortium (W3C) Web Content Accessibility Guidelines
1.010 is a recognised standard for accessibility. Guideline 9 recommends designing for device-independence and guideline 9.5 states
‘Provide keyboard shortcuts to important links (including those in client-side image maps), form controls, and groups of form controls.’
(MSP-0140).
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Flexibility and efficiency of use – If the Quick List contains drugs that prescribers often prescribe, it can improve their efficiency
  when they choose to use the Quick List (instead of searching)
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
is mitigated by the guidance:
     Potential Hazards:                                               Mitigations:
      An incorrect drug is prescribed because a template              Template prescriptions will not appear in a Quick List since it
       prescription was mis-selected from a Quick List and then         contains only items that can be displayed in a search results list
       authorised without review                                        (MSP-0130)

9
  The Use of Tall Man Lettering to Minimise Selection Errors of Medicine Names in Computer Prescribing and Dispensing
Systems {R24} : http://www.ccforpatientsafety.org/patient-safety-solutions/
10
     Web Content Accessibility Guidelines 1.0 {R25}: http://www.w3.org/TR/WAI-WEBCONTENT/
                                                                                                                                     Page 30
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

4.3.3       Notifying When a Quick List Has Changed
                                                                                                                                Evidence
 ID          Guideline                                                                                     Conformance
                                                                                                                                Rating
 MSP-0170    Display a notification when the contents of a Quick List have changed since it was            Mandatory            High
             last presented to the current user

 MSP-0180    Provide a control for closing the Quick List notification                                     Mandatory            Medium

 MSP-0190    Provide a control for disabling the notification so that it is not displayed again (until     Mandatory            Medium
             the Quick List is changed again)

 MSP-0200    Display the Quick List notification every time the Quick List is displayed (until the         Mandatory            Medium
             user selects an option that disables it)

 MSP-0210    Do not display the notification such that it obscures the contents of the Quick List          Recommended          Low

 MSP-0220    Close the notification automatically when either a drug is selected from the Quick List Recommended                Low
             or text is entered into the search text input box

 MSP-0230    Do not allow a drug to be selected from the Quick List by using the keyboard until the Mandatory                   Medium
             notification has been closed

 Usage Examples
                                                                                             This correct example of a Quick List
                                                                                             notification includes a control for closing this
                                                                                             instance of the message and a check box to
                                                                                             ensure that the message is not displayed
                                                                                             again (MSP-0170, MSP-0180, MSP-0190)

                                                                                             This example is incorrect because it does not
                                                                                             include a control for closing the notification
                                                                                             (MSP-0180)

                                                                                             This correct example includes a control for
                                                                                             closing the notification and a check box to
                                                                                             ensure that the notification is not displayed
                                                                                             again (MSP-0180, MSP-0190)

                                                                                             This example is incorrect because the
                                                                                             notification does not provide a control for
                                                                                             ensuring that the notification is not displayed
                                                                                             again (MSP-0200)

                                                                                                                                       Page 31
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                            This example is not recommended because
      Type a drug name to search                                                            the notification obscures the contents of the
                                                                                            Quick List (MSP-0210)
        paracetamol
                 The contents of the Quick List
        aspirin have changed.

        warfarin           Don’t show this message again

        oxycodone
                                                      OK
        furosemide

                                                                                            This example is not recommended because
                                                                                            the notification remains visible after text has
                                                                                            been entered into the search text input box
                                                                                            (MSP-0220)

Rationale
Design Analysis:
The Quick List improves efficiency for users who prefer to select a drug name from a familiar list instead of typing letters to search for a
drug. The benefits of the Quick List depend partially on familiarity with the list and partially on the brevity of the list. If the list is
changed, there is a risk that the wrong entry will be selected, especially if the prescriber has learned a shortcut key or series of
keystrokes and executes them without explicitly reviewing his or her selection. When the Quick List changes, it is thus important to
provide an interruption to the prescriber’s normal sequence of keystrokes or clicks and ensure that the changes to the list are explicitly
reviewed (MSP-0170).
The notification need only be displayed whilst the Quick List is open since it aims to draw attention to the changes and to ensure that
such changes are noticed before a shortcut key can be used (MSP-0230). Thus the notification can be closed as soon as text is typed
to search for a drug name or a selection is made from the Quick List (MSP-0220). Although shortcut keys cannot be used whilst the
notification is open, a selection can still be made using the keyboard (by navigating using arrow keys) or other direct selection (such as
selecting using a mouse). Thus the notification should not obscure the Quick List (MSP-0210).
If the notification is ignored, it should be displayed again every time the Quick List is displayed (MSP-0200) until the prescriber
acknowledges it (MSP-0190). Once acknowledged, the notification need not be displayed again until the next change to the contents
of the Quick List.
The guidance strikes a balance between preventing the selection of a Quick List item in error (as a result of the contents of the list
having changed) whilst at the same time not introducing extra steps that would reduce the efficiency of using a Quick List at all.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Error prevention – The notification is designed to prevent a learned shortcut or series of keystrokes from being used without
  reviewing selections on screen to avoid this behaviour from selecting the wrong drug when the contents of the Quick List have
  changed
 User control and freedom– The notification can be closed for this instance such that it will appear when the Quick List is next open,
  or the prescriber can choose to disable it so that it will not appear again until the Quick List is next changed

                                                                                                                                     Page 32
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
 is mitigated by the guidance:
      Potential Hazards:                      Mitigations:
       The user becomes over-reliant on  A notification is displayed when the contents of the Quick List has changed (MSP-0170)
        shortcut keys (or sequences of    Whilst a notification is displayed, shortcut keys or sequence of key strokes do not result
        key strokes) and the Quick List    in the selection of a Quick List entry (MSP-0230)
        has changed

4.3.4         Accommodating Multiple Quick Lists
                                                                                                                             Evidence
 ID             Guideline                                                                           Conformance
                                                                                                                             Rating
 MSP-0240       Limit the number of Quick Lists that are available to an individual user to the     Recommended              Medium
                minimum that are contextually appropriate

 MSP-0250       When multiple Quick Lists are available to a single user, provide a means of        Mandatory                Low
                navigating between them

 MSP-0260       When multiple Quick Lists are necessary, display the currently selected Quick Mandatory                      Medium
                List in the control that is used to select a Quick List

 MSP-0270       When multiple Quick Lists are necessary, use the words ‘Quick List’ in a label Recommended                   Medium
                for the Quick List control or within the control

 Usage Examples
                                                                           In this correct example, where multiple Quick Lists are
                                                                           necessary, a combo box is provided for the selection of a Quick
                                                                           List and the control has a default value (MSP-0250, MSP-0260)

                                                                           This example of a Quick List control is not recommended
                                                                           because it does not include the text ‘Quick List’ (MSP-0270)

 Rationale
 Design Analysis:
 Multiple Quick Lists are not recommended (MSP-0240) because the Quick List can only add value if it is faster or easier to use than
 searching for a drug name and is thus more effective if it contains a few drugs for which the shortcut keys can be learned (see the
 rationale in section 4.3.1). However, they may be useful for users who work in more than one context or may otherwise benefit from
 access to Quick Lists that are populated with drugs relevant to different tasks, contexts or specialties.
 Following on from the rationale in section 4.3.1, the Quick List is most useful if it is immediately available when prescribing is started.
 Thus, even when there is more than one Quick List defined, one of them should be the default.
 If multiple Quick Lists are defined, clear labelling is needed (MSP-0270) to clearly communicate the currently selected list (MSP-0260).
 It must also be possible to navigate between Quick Lists (MSP-0250).

                                                                                                                                      Page 33
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Desk Research:
The ePrescribing Functional Specification {R12} includes a requirement (GEN.OS.082) to support the display of different formularies
for specific users, groups of users, specialties or locations. Whilst formularies are out of scope, the principle of providing access to
multiple manually defined lists is reflected by the guidance in this section.
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Flexibility and efficiency of use – Access to more than one Quick List avoids an inappropriately constrained Quick List
User Research:
All participants in Study ID 37 (see APPENDIX F) considered the Quick List to be useful for specific areas (such as on a post-operative
cardiac ward or for the management of anaemia) in which there can be relatively small variation in prescribing. However, participants
also pointed out that some staff work in a variety of situations that might require different lists. For these situations, it may be relevant
to allow the context to define which Quick List is displayed or to allow the user to select an appropriate Quick List (that may then
remain the default for that session).

                                                                                                                                     Page 34
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5            GUIDANCE DETAILS FOR DRUG SEARCH

5.1          Introduction
    This section and section 4 provide guidance for the selection of a drug to prescribe (from a Quick
    List or from search results). Section 4 provides guidance for Quick Lists. This section provides
    guidance for searching for drug names, displaying a list of search results and selecting a drug to
    prescribe.
    The guidance in this section is part of the first step in the prescribing process, which is shown with
    a grey background in Figure 9:

    Figure 9: The Prescribing Process – Select Drug

                                                                                                     Page 35
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

The following prescribing tasks were used to inform assessment of design alternatives in order to
maintain an appropriate focus during the development of guidance:
      Find a drug that I prescribe every day
      Find a drug when I only know the brand name
      Find a drug that contains more than one ingredient and I only know one of them
      Find a drug to prescribe when the name of the drug has changed or is misspelled
      Select a medication from a list of search results containing medications that are easily
       misread or confused with another drug name
These prescribing tasks address specific known patient safety hazards associated with electronic
prescribing and ensure that guidance is user-focused.
The following tasks were used as a checklist during the creation of the guidance to ensure that it
remained sufficiently flexible:
      Prescribing very long drug names with an unusually large number of characters (for
       example, ‘Diphtheria + Haemophilus influenzae type B + Pertussis + Poliomyelitis +
       Tetanus vaccine’)
      Less common prescribing practices requiring greater user control (for example, prescribing
       a medication with an unusual or unlicensed route)
      Defining search criteria which have a large number of matches to display in the search
       results
      Working with a prescribing area when screen space is limited
This guidance aims to mitigate the following patient safety hazards:
      Risk of mis-selection when drug names that look or sound similar are displayed in a list
      Risks associated with lack of familiarity with combination drugs (co-drugs)
      Risks associated with the display of, and navigation within, long lists
Figure 10 is an extract from Figure 5 and illustrates the user interface prescribing steps that are
covered in this section showing the drug search step and links to and from other steps:

Figure 10: User Interface Prescribing Steps – Drug Search

                                                                                                  Page 36
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

5.2     Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Mitigate the risks of incorrect selection and misinterpretation:
            A limited list height, coupled with progressive searching (the progressive updating of
             search results as more letters are typed) encourages selection of drug names from
             shorter lists
            Formatting of drug names that are known to be mis-selected and the use of
             supplementary text in search results helps to avoid potential misinterpretation
            The potential for misinterpretation is mitigated by encouraging a simple user interface in
             which the need for copious or complex user interface elements (such as controls and
             labels) is minimised
       Increase efficiency by prioritising the prescription of commonly prescribed medications over
        less commonly prescribed medications:
            Guidance for drug search results lists encourages the prioritisation of results so that
             commonly prescribed medications can appear higher in the list
       Maximise safety in the absence of decision support systems by designing for the reduction
        of errors from invalid or inappropriate selections or entries:
            Search results can be formatted and supplemented with additional text (such as the
             ingredients of a co-drug) to help avoid inappropriate selections
            Handling of generic and brand names ensures that a brand name cannot be prescribed
             without the generic name being displayed, allowing generic equivalents to be
             prescribed and encouraging generic prescribing
       Adhere to a user interface strategy that gives the impression of making progress within a
        single space (which has all the necessary information immediately or readily available) and
        avoids the impression of needing to move between many different spaces:
            When search results lists are extended (so that all results can be seen instead of only
             the first page), the list is expanded in context
            The search results are displayed such that they replace the Quick List

                                                                                                   Page 37
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

5.3     Guidelines
5.3.1       Positioning the Search Text Input Box
                                                                                                                          Evidence
 ID          Guideline                                                                              Conformance
                                                                                                                          Rating
 MSP-0280    Do not allow the search results list to be positioned such that it is separated from   Mandatory             High
             the search text input box by other controls or by a significant space

 MSP-0290    Clearly describe the scope of the search                                               Mandatory             High

 MSP-0300    Use an in-field prompt in the search text input box to describe the scope of the       Recommended           High
             search

 Usage Examples
                                                            In this correct example, the search results appear directly below the
                                                            search text input box and the scope of the search is described briefly in
                                                            the search text input box (MSP-0280, MSP-0290, MSP-0300)

                                                            In this correct example, the search results are displayed as a drop-down
                                                            list extension of the search text input box (MSP-0280)

                                                            This example is incorrect because the search results appear on the right
                                                            and are not clearly associated with the search text input box on the left
                                                            (MSP-0280)

                                                                                                                                 Page 38
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                              This example is incorrect because the search text input box has been
                                                              separated from the search results (MSP-0280)

          Results

                                                              This example is incorrect because the scope of the search is not clear
                                                              (MSP-0290)

Rationale
Design Analysis:
The guidance for positioning the search text input box (MSP-0280) aims to:
 Remove the need for additional labelling and controls by placing the search text input box directly above the search results
 Ensure that the dynamically updating search results list (see section 5.3.3) is visible as text is being entered in the search text input
  box
Since a clinical application is likely to have more than one search mechanism, it is important to be clear when a search has a specific
scope. Providing this information directly in the search text input box reduces the need for additional labelling or signposting and
places the information where users’ attention is likely to be focused when they need that information. By providing this cue in the
search text input box, it is more likely to be noticed before text is entered and can thus prevent time being wasted on discovering the
scope of the search by entering text and reviewing a list of search results (MSP-0290).
Desk Research:
The Windows User Experience Interaction Guidelines11 states that a prompt should be used in preference to a label (MSP-0300). The
use of a prompt in a text input box is particularly useful when:
 Screen space is at such a premium that using a label or instruction is undesirable, such as on a toolbar
 The prompt is primarily for identifying the purpose of the text box in a compact way. It must not contain crucial information that the
  user needs to see while using the text box
User Research:
All 14 participants in Study ID 69 (see APPENDIX B) correctly anticipated that they should type letters in order to return search results
when the search text input box contained the in-field prompt ‘Type the drug name to search’ (MSP-0290, MSP-0300). The study also
used wireframes in which this text was omitted and, when reviewing these wireframes, one participant was unsure how to proceed in
the absence of the in-field prompt.

11
  Microsoft – Windows User Experience Interaction Guidelines – Guidelines, Controls, Command Buttons {R26}:
http://msdn.microsoft.com/en-us/library/aa511453.aspx#defaults
                                                                                                                                   Page 39
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.2         Defining Text Input Box Behaviour
 This section includes guidance that refers to the use of codes to search for drugs. Codes are
 arbitrary or made up sets of numbers or letters that are typed into a search text input box in order to
 quickly access a specific drug name.

                                                                                                                                     Evidence
 ID                Guideline                                                                                    Conformance
                                                                                                                                     Rating
 MSP-0310          Do not support entry of codes in the search text input box. (This does not preclude Mandatory                     Medium
                   the use of spelling matching or the provision of an alternative box for entering
                   codes)

 MSP-0320          Do not provide auto-complete in the search text input box                                    Mandatory            Medium

 MSP-0330          Retain focus in the search text input box until a selection is made in the search            Mandatory            High
                   results list

 MSP-0340          When focus is first switched to the results list, set focus to the first entry in the list   Mandatory            High
                   by default

 MSP-0350          When space is limited (such that the search results lists may obscure other                  Recommended          Low
                   information), support the replacement of the search text input box with an input
                   control in which the selected drug name is displayed

 MSP-0360          When a search results list has been replaced with a control in which the selected            Recommended          Low
                   drug name is displayed, re-display the search text input box, the search criteria
                   and the search results list when this control is selected

 Usage Examples
                                                                                                       In this sequence of correct examples,
                                                                                                       codes are entered into a separate text entry
                                                                                                       box (MSP-0310)
        1                                                                                1   2

      Type a drug name to search                                   Shorthand

        paracetamol                 Ctrl + 1

        aspirin                     Ctrl + 2

        warfarin                    Ctrl + 3

        oxycodone                   Ctrl + 4

        furosemide

        2

      Type a drug name to search                                   Shorthand eyc 500

        paracetamol                 Ctrl + 1                paracetamol – DOSE 500 mg
                                                           erythromycin

        aspirin                     Ctrl + 2

        warfarin                    Ctrl + 3

        oxycodone                   Ctrl + 4

        furosemide

                                                                                                                                            Page 40
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

                                                   This example is incorrect because the entry
                                                   of codes in the search text input box is
                                                   supported and has been matched to search
                                                   results (MSP-0310)

                                                   This example is incorrect because the text
                                                   that has been typed is supplemented with
                                                   an auto-complete prompt (MSP-0320)

                                                   In this correct example, only the text that
                                                   has been typed is displayed in the search
                                                   text input box (MSP-0310, MSP-0320)

                                                   In this correct example, five letters have
                                                   been entered and the focus remains in the
                                                   search text input box as the search results
                                                   list is displayed (MSP-0330)

                                                   This example of a search results list is
                                                   incorrect (assuming the user has not
                                                   selected paracetamol) because focus has
                                                   been automatically set to the first item in
                                                   the search results list (MSP-0330)

                                                   In this correct example, the user has
                                                   changed the focus to the search results list
                                                   (for example, by using the TAB key) and
                                                   this has caused the first item in the list to
                                                   have focus (MSP-0330, MSP-0340)

                                                                                         Page 41
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

                                                                                             In this sequence of correct examples in
                                                                                             which the search results are displayed as a
               dil
   1                                                                                         drop-down extension of the search text
                        Commonly prescribed matches
                                                                     1    2     3
                                                                                             input box:
                 diltiazem                        Ctrl + 1                                   1. Search results are displayed as a
                                                                                                drop-down extension of the search text
                                      Standard matches
                                                                                                input box
                 diloxanide                                                                  2. When a drug name is selected, the list
                                                                                                collapses (MSP-0350), the search text
                 diltiazem – DILCARDIA                                                          input box displays the selection and a
                                                                                                (cascading) list of routes is displayed
                 diltiazem – DILZEM SR
                                                                                             3. When the drug name is reselected
                 diltiazem – DILZEM XL                                                          (without having made a selection in the
                                                                                                cascading list), the list of search results
                                                                                                is reopened with the selected drug
                                                                                                highlighted and the search criteria
                                                                                                redisplayed in the search text input box
                                                                                                (MSP-0360)
   2           diltiazem            oral
                                     rectal

                                     intravenous infusion

                                     other...

   3           dil
                        Commonly prescribed matches

                 diltiazem                        Ctrl + 1

                                      Standard matches

                 diloxanide

                 diltiazem – DILCARDIA

                 diltiazem – DILZEM SR
                 diltiazem – DILZEM XL

Rationale
Design Analysis:
Efficient selection of a drug to prescribe depends on a simple search mechanism that:
 Presents few options quickly given a minimum input
 Presents the options in a format that facilitates rapid scanning and accurate selection from a list of results
Achieving this efficiency requires a balance between:
 Reducing the cognitive load associated with scanning and selecting from a list
 Providing mechanisms for accessing drug names quickly, especially those most frequently used

                                                                                                                                    Page 42
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Design Analysis for Coded Entry versus Progressive Search:
The guidance is informed by a limited analysis using Keyboard-Level Model — Goals, Objects, Methods and Selection (KLM-GOMS)
{R27} of alternative mouse and keyboard focused approaches. This included the use of both coded entry and cascading selection (see
section 6). Whilst the analysis was not detailed enough to predict times taken to select a drug in each design, it suggested that the use
of coded entry could be about one second faster than cascading selection using keyboard shortcuts. However, coded entry is not
without potential problems (see paragraphs below).
Coded entry is a mechanism for quick prescribing that depends on recall of codes for a limited number of drugs. It speeds up the
process of prescribing by minimising the need to read, navigate and select from lists, especially for frequently prescribed medications.
Coded entry is useful in a system that presents long lists from which selections need to be made or have complex processes for
finding a drug to prescribe.
This guidance presents a framework that provides alternative mechanisms for search and selection that help to:
 Reduce the lengths of lists
 Prioritise commonly prescribed drugs
 Minimise characters needed in the search text input box
 Provide additional alternative accelerators for quick access to commonly prescribed drugs and predefined prescriptions
When these mechanisms are combined, they help to reduce the cognitive load of the user, are comparable to coded entry for
frequently prescribed drugs and provide additional benefits for finding all drugs.
However, when combined with spelling matching, coded entry may increase the risks of misinterpretation and mis-selection, since the
relationship between codes entered and matches in the results list is difficult to communicate with clarity. Other issues with coded
entry include:
 The need to create and maintain a list of codes
 Ensuring consistency in the creation of codes
 Providing an effective mechanism for alerting users when codes have changed
 Avoiding clashes between codes and spelling matches
If coded entry is used, a separate control or area is needed for entering codes to provide support for feedback as codes are being
entered. The provision of a control for entering codes must be separate from the search text input box (MSP-0310). This allows
feedback to be provided as codes are entered and can be used to mitigate issues such as misinterpretation, mis-selection and
‘clashes’ between codes and spelling matches.
Design Analysis for Auto-Completion:
Auto-completion is effective for minimising the number of letters that need to be typed before a specific result is found and selected but
may increase the risk of mis-selection. A progressive search achieves similar benefits (see section 5.3.3), but instead of providing a
single match, like auto-complete, it requires a selection to be made from a list. Auto-complete introduces the risk that:
 An auto-completed drug name is accepted unintentionally
 The auto-complete suggestion may inappropriately influence the prescriber’s choice
Unlike a static search (that requires the text to be submitted before results are displayed), entering additional characters in progressive
matching reduces the number of search results. Editing those characters also changes the search results. Efficient editing of the
search text requires that the focus remains in the search text entry box. This avoids the need to navigate from the search results list
back to the search text input box before additional text can be typed or existing text edited (MSP-0320).
Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Error prevention – Avoiding typing codes into a search text input box, reduces the potential for display of unintended matches in a
  search results list
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
is mitigated by the guidance:
   Potential Hazards:                                       Mitigations:
    Auto-complete prompts the user to select                MSP-0320 mandates that auto-complete is not used in a drug search
     inappropriately                                          text entry box

                                                                                                                                   Page 43
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.3        Displaying Results with Progressive Matching
                                                                                                                                 Evidence
 ID             Guideline                                                                                   Conformance
                                                                                                                                 Rating
 MSP-0370       Display results using progressive matching where possible                                   Recommended          Medium

 MSP-0380       In the absence of progressive matching, provide a static search that submits text in        Recommended          High
                the search text input box by pressing the ENTER key and/or activating a control
                (such as a button) to submit the search

 Usage Examples
                                                                                            In this correct example, the search results list
                                                                                            shortens as more letters are typed in so that
                                                                                            there are fewer matches (MSP-0370)

                                                                                            In this correct example of a search that does not
                                                                                            have progressive matching; a button has been
                                                                                            provided for displaying the search results
                                                                                            (MSP-0380)

 Rationale
 Design Analysis:
 Guidance on the search results list (and Quick List) aims to:
  Encourage a search-based approach to finding drug names
  Support only limited browsing
  Limit the cognitive steps for selecting a drug to prescribe
 A progressive search (MSP-0370) improves the efficiency of the user by supporting strategies, such as typing in letters, until the
 search results are short enough for the desired result to be noticeable in the search results list. This helps the user make the selection
 quickly and easily. This approach allows attention to move quickly between the search text input box and the search results. This is
 considered to be more efficient than a static search in which attention shifts from the text input box to search results and back in a
 more sequential way.
 Selection of all the text entered in the search text input box is easier in a static search, since returning focus to the search text input
 box automatically selects the whole contents and allows it to be replaced with new text. The need to retain focus in the search text
 input box to support adding and correcting of individual letters is a more common need than to replace the entire contents of the
 search text input box.
 Where technology cannot support a progressive search, a static search may be provided in which search criteria are submitted by
 using a button (MSP-0380). This approach is less effective as a tool for accessing shorter lists since the prescriber must make a
 decision about how many letters to enter before submitting the search results (rather than responding to the changing list length that is
 visible in a progressive search).
      Note
      A progressive search may support the use of the ENTER key to submit the search criteria in addition to presenting the results
      automatically (but with a slight delay).

                                                                                                                                        Page 44
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Flexibility and efficiency of use – The progressive search allows users to access a short list of search results faster. The short list
  reduces cognitive load thus reducing the time it takes for them to find and select the drug to prescribe
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                       Mitigations:
    A drug name is mis-selected in          This risk is not wholly mitigated by guidance
     the search results list                 Search results are prioritised (see section 5.3.12) and listed in matched order before
                                              alphabetical order to maximise logical grouping (see section 5.3.8)
                                             The list is limited in length (see section 5.3.5) and progressive matching is
                                              recommended (MSP-0370) to encourage selection from shorter lists
    A drug name is mis-selected             Progressive matching encourages the typing of more letters for shorter lists of search
     because it appears next to or in         results (MSP-0370)
     the same list as a look-alike or        Search results lists are limited in height (see section 5.3.5)
     sound-alike drug name
                                             Drugs are displayed by searching and search results are matched to the beginnings of
                                              words so search results share the same initial letters (see section 5.3.7)
                                             Search results are ordered such that generic names are listed before brand names (see
                                              section 5.3.8)
                                             Search results are displayed in matched order and then alphabetically (see
                                              section 5.3.8)
                                             Search results are prioritised (see section 5.3.12)
                                             Brand names are supplemented with generic names (when they exist) (see
                                              section 5.3.17)
                                             Brand names are displayed after the generic name (when they exist) in a single list item
                                              (see section 5.3.17)
                                             If Design Guidance – Medication Line {R3} guidance is followed, brand names are
                                              differentiated by displaying them in capital letters
    The scroll bar in a list of search  The limited list length avoids the use of a scroll bar so that it is clearer when there are
     results is not noticed and the       further results off screen (see section 5.3.5)
     prescribers assume that the drug  The provision of a progressive search for achieving fewer search results (MSP-0370)
     they want is not available for
                                         A clear, noticeable and consistent way of communicating the extent of the search
     prescribing
                                          results, including the provision of text such as ‘Showing 10 of 40 matches’ at the end of
                                          a list of search results and the provision of a control such as a button labelled ‘Show All’
                                          at the end of a list of search results (see section 5.3.5)
    A long list of search results is         The list is limited in length and the length remains consistent (see section 5.3.5)
     returned and an inappropriate            A progressive search provides a mechanism for achieving fewer search results and puts
     selection is made in preference to        the users in control of the length of the search results list by allowing them to type in
     navigating further through the list       additional letters and see the list updated as they type (MSP-0370).
    Alternate row shading is mistaken  This risk is not wholly mitigated by guidance
     for selection or highlighting when  Alternate row shading should be subtle (see section 5.3.16)
     there are only two or three list
                                         When results are displayed using progressive matching (MSP-0370) the initial list of
     items in a list or section
                                          results is more likely to contain greater than three drugs in any one section of the list
                                          and the user is thus familiar with presence and meaning of the alternate row shading
                                          before the list is shortened such that this risk is introduced

                                                                                                                                     Page 45
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.4       Providing Feedback for a Progressive Search
                                                                                                                   Evidence
 ID           Guideline                                                                        Conformance
                                                                                                                   Rating
 MSP-0390     Require a minimum of two characters before displaying search results             Mandatory           High

 MSP-0400     When only one character has been entered, display a message that explains        Mandatory           Medium
              why there are no results and reports the two-character minimum

 MSP-0410     When two or more characters have been entered and no matches were           Mandatory                Medium
              found, display a message that clearly indicates a search has been performed
              and no matches were found

 MSP-0420     When a message is displayed, maintain a minimum height equivalent to at          Recommended         Low
              least three rows of results and a width that is at least as wide as the search
              text input box

 Usage Examples
                                                                 In this correct example, when only one letter has been typed in the
                                                                 search text input box, a message is displayed that explains why
                                                                 there are no results and reports the two-character minimum
                                                                 (MSP-0390, MSP-0400)

                                                                 This example is incorrect because the message displayed does not
                                                                 explain that there are no results because only one character has
                                                                 been entered (MSP-0400)

                                                                 This example is incorrect because fewer than two characters have
                                                                 been entered and there is no message displayed (MSP-0400)

                                                                 In this correct example, the message clarifies that a search was
                                                                 performed and no matches were found, the search results area has
                                                                 a height of at least three rows and the width is at least that of the
                                                                 search text input box (MSP-0410, MSP-0420)

                                                                                                                               Page 46
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                    This example is not recommended because the width of the search
                                                                    results area is less than the width of the search text input box
                                                                    (MSP-0420)

                                                                    This example is not recommended because the height of the search
     pax                                                            results is less than three rows of results (MSP-0420)

      No matches were found

Rationale
Design Analysis:
Since progressive searching does not require the text in the search input text box to be submitted using a control, it is especially
important to provide feedback of the progress of a search. When using a static search, clicking the control to submit a search removes
the focus from the search text input box. A progressive search retains focus in the search text input box (see section 5.3.2), so that
even this minor feedback is not available to reassure users that their search is being processed. It is therefore important to provide:
 Feedback when a search is being processed but results are not yet displayed
 Clearly visible (MSP-0420) feedback when the search has been processed but there are no matches to display (MSP-0410)
The two-character minimum (MSP-0390) is designed to return shorter lists of matches. It is based on a limited analysis of two and
three-character searches matched against the beginnings of generic drug names in the dm+d (June 2008). The simplistic analysis
suggests an average of three matches for three-character searches, and 16 matches for two-character searches.
When there are no search results, a message is needed (MSP-0400) to:
 Inform or remind the user of the two-character minimum
 Reassure the user that the search has been processed
 Allow the user to differentiate between the message about the two-character minimum and a message about a completed search
  for which no matches were found
A short delay is useful to encourage the entry of more letters and to avoid the need to retrieve search results for only one character
when further characters are about to be entered.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Visibility of system status – The messages displayed in the search results area (when there are no results to display) provides
  feedback on the status of the search and reassurance that the search is working
 Help users recognise, diagnose and recover from errors –If a drug name is mis-spelled when being entered in the search text input
  box, the messages displayed in the search results area provide feedback that the search has been successful and allows users to
  correct their spelling or simply remove letters to search on fewer letters
 User control and freedom – The users have control over how many search results they see because they can (in most cases)
  shorten the list by typing more letters in but they can also access the full list of search results if they choose

                                                                                                                                  Page 47
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.5        Limiting the Height of a Search Results List
                                                                                                                                   Evidence
 ID            Guideline                                                                                    Conformance
                                                                                                                                   Rating
 MSP-0430      Display search results in a list that is only as high as needed to show the                  Mandatory              Medium
               successful matches or up to a defined maximum height.

 MSP-0440      When the number of matches is too large to be displayed in the maximum list                  Mandatory              Medium
               height, display a message at the end of the search results list that contains counts
               of the displayed results and total matches

 MSP-0450      When the number of matches is too large to be displayed in the maximum list                  Mandatory              Medium
               height, place a control for displaying the full list at the end of the search results list

 MSP-0460      Allow the height of the search results list to grow to an upper limit to accommodate Mandatory                      Low
               the number of results matched

 Usage Examples
                                                                                                            In this correct example, the height
                                                                                                            of the search results list is no
                                                                                                            larger than it needs to be to display
                                                                                                            the matches (MSP-0430)

                                                                                                            This example is incorrect because
        salmeterol                                                                                          the height of the search results is
                                                                                                            greater than it needs to be to
                     Commonly prescribed matches                                                            display the matches (MSP-0430)
        salmeterol                                Ctrl + 1

        fluticasone + salmeterol                  Ctrl + 2

                                                                                                            In this correct example, the results
                                                                                                            are limited by the height of the
                                                                                                            search results area and a message
                                                                                                            is provided at the end of the search
                                                                                                            results list to indicate the number
                                                                                                            of search results displayed and the
                                                                                                            total number. A control is provided
                                                                                                            for accessing the full list
                                                                                                            (MSP-0440, MSP-0450).

                                                                                                                                         Page 48
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                         This example is incorrect because
                                                                         pagination is used to navigate the
                                                                         results list. It is also incorrect
                                                                         because there is no message
                                                                         containing counts of the displayed
                                                                         results and number of total
                                                                         matches (MSP-0440, MSP-0450).

                                                                         In this sequence of correct
1                                                                        examples (MSP-0460):
                                                                         1. A list of matches is displayed
parac                                                       1     2         for the five characters entered
                                                                            in the search text input box
                                  Commonly prescribed matches            2. Deleting two characters results
 paracetamol                                           Ctrl + 1             in more matches. The matches
                                                                            are displayed in a limited height
 paracetamol + phenylephrine                           Ctrl + 2             window.

 paracetamol + pseudoephedrine                         Ctrl + 3

 paracetamol + tramadol                                Ctrl + 4

 aspirin + paracetamol                                 Ctrl + 5

                                              Standard matches

 paracetamol + sodium salicylate

                                                                                                       Page 49
               Design Guidance – Medications Management – Search and Prescribe
               Prepared by Microsoft, Version 3.0.0.0
               Last modified on 20 January 2010

Rationale
Design Analysis:
The search results list length is limited (MSP-0430) in order to encourage the entry of more letters so that a shorter results list can be
returned. A shorter results list will be immediately noticeable since the window shrinks in height to fit the results. This approach is one
that promotes searching over browsing on the basis that:
 Searching is expected to be more efficient when looking for a specific drug name
 Browsing is more appropriate when it is important to expose the user to more options in a way that also communicates the
  structure of those options
One of the benefits of a progressive search is that it effectively supports the strategy of typing in enough letters to get a single match or
short list of matches. By allowing the height of the search results list to change as the length of the results list changes, the changes in
length can be picked up by peripheral vision, which allows the user’s attention to remain on typing in the search text input box. With a
background that is different in tone to the colours used in the search results list, this visual cue is an even stronger indication of the
changing search results list height.
Alternative design solutions that were assessed include:
 An unlimited search results list that is displayed with a scroll bar when necessary
 Search results lists broken down into pages with navigation controls for moving between the pages
Those two approaches are less effective than the recommended approach at achieving the following benefits:
 Encourage the typing of more letters to avoid the user having to use a control to access a longer list of search results
 Avoid longer lists to reduce the chances of mis-selection errors
 Avoid longer lists to speed up selection from a list with fewer choices
 Reduce the cognitive load associated with reviewing and selecting from a longer list
 Discourage the use of the prescribing tool as a drug dictionary (for browsing or for entering brand names to look up the generic
  name)
By allowing the full list of search results to be displayed, the drug search supports an approach to finding a medication that is closer to
browsing than searching whilst still encouraging the use of the progressive search to access and therefore select from shorter lists.
                                                                                                                                     Page 50
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Aesthetic and minimalist design – Limiting the height of the search results list keeps the drug search interface simple and removes
  the need for navigation controls that are unnecessary in an efficient progressive search that returns only drug names (and
  synonyms)
 Error prevention – Limiting the height of a search results lists limits the number of results immediately available for selection and
  thus reduces opportunity for mis-selection
 Flexibility and efficiency of use – The limited height of search results encourages the use of the progressive drug search and this is
  considered to be more efficient at supporting the task of finding a specific drug than browsing
 User control and freedom – Although the list of search results is limited, users still have the choice of extending the list so that they
  can browse a larger set of search results
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                     Mitigations:
    The scroll bar in a list of search  The limited list length (MSP-0430) avoids the use of a scroll bar so that it is clearer when
     results is not noticed and the       there are further results off screen
     prescribers assume that the         The provision of a progressive search for achieving fewer search results (see
     drug they want is not available      section 5.3.3)
     for prescribing
                                         A clear, noticeable and consistent way of communicating the extent of the search results,
                                          including the provision of text such as ‘Showing 10 of 40 matches’ at the end of a list of
                                          search results (MSP-0440) and the provision of a control such as a button labelled ‘Show
                                          All’ at the end of a list of search results (MSP-0450)
    A long list of search results is        The list is limited in length and the length remains consistent (MSP-0430)
     returned and an inappropriate           A progressive search provides a mechanism for achieving fewer search results and puts
     selection is made in preference          the users in control of the length of the search results list by allowing them to type in
     to navigating further through the        additional letters and see the list updated as they type (see section 5.3.3).
     list
    A drug name is mis-selected in        This risk is not wholly mitigated by guidance
     the search results list               The list is limited in length (MSP-0430) and progressive matching is recommended (see
                                            section 5.3.3) to encourage selection from shorter lists
                                           Search results are prioritised (see section 5.3.12) and listed in matched order before
                                            alphabetical order to maximise logical grouping (see section 5.3.8)
    A drug name is mis-selected       Progressive matching encourages the typing of more letters for shorter lists of search
     because it appears next to or in   results see section 5.3.3)
     the same list as a look-alike or  Search results lists are limited in height (MSP-0430)
     sound-alike drug name
                                       Drugs are displayed by searching and search results are matched to the beginnings of
                                        words so search results share the same initial letters (see section 5.3.7)
                                           Search results are ordered such that generic names are listed before brand names (see
                                            section 5.3.8)
                                           Search results are displayed in matched order and then alphabetically (see section 5.3.8)
                                           Search results are prioritised (see section 5.3.12)
                                           Brand names are supplemented with generic names (when they exist) (see section 5.3.17)
                                           Brand names are displayed after the generic name (when they exist) in a single list item
                                            (see section 5.3.17)
                                           If Design Guidance – Medication Line {R3} guidance is followed, brand names are
                                            differentiated by displaying them in capital letters

                                                                                                                                    Page 51
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.6       Extending the Search Results List
                                                                                                                           Evidence
 ID          Guideline                                                                                Conformance
                                                                                                                           Rating
 MSP-0470    When a limited list has been extended by selecting the control to display a full list,   Mandatory            Medium
             extend the list by providing a scroll bar

 MSP-0480    Keep search results ‘flat’. Do not provide expand or collapse mechanisms or              Mandatory            Medium
             tree-style browsing within the search results

 MSP-0490    When a selection has been made in a results list that has a scroll bar, allow the scroll Mandatory            Medium
             bar to be used such that the selection can be scrolled out of view

 Usage Examples
                                                                                                      In this sequence of correct
                                                                                                      examples (MSP-0470):
                                                                                                      1. A search results list is
                                                                                                         displayed and the ‘Show All’
                                                                                                         button is selected
                                                                                                      2. The full list is displayed with
                                                                                                         a scroll bar.

                                                                                                                                 Page 52
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                                           These four examples are
                                                                                                           incorrect because the search
                                                                                                           results are not flat (MSP-0480)

                                                                                                           In this correct example, the
                                                                                                           search results are flat
                                                                                                           (MSP-0480)

Rationale
Design Analysis:
Tasks such as browsing drugs by drug classifications, finding alternatives for specific drugs, or browsing drugs by indication or
therapeutic intent are considered to be better supported by knowledge support tools such as paper or electronic copies of reference
sources (for example, the BNF {R16}). Mechanisms for browsing within and between lists are kept to a minimum so that the focus on
simple search and selection is maintained. This simplicity is maintained by (initially) keeping lists short to avoid the need for a scroll bar
but still providing a mechanism by which the full list (with a scroll bar) can be accessed (MSP-0470, MSP-0480).
When a search results list is extended (by selecting the control that shows all matches for the search text), the need to provide
additional controls for navigating backwards and forwards should be avoided. The scroll bar achieves this by simply converting the
existing limited list into one that can display the full set of matches.
Although the list is limited, it may sometimes be necessary or useful for users to ask to see the full list (by activating a control). For
example, a user may not be sure of the spelling and the letters he or she has entered do not return the drug the user is looking for. In
this case, the user may prefer to enter fewer letters and simply browse the list instead of taking time to use a knowledge support tool to
look up the drug name spelling. The list is therefore displayed in a way that allows it to be extended (by activating a control) to make it
clear that the action of extending it simply opens the ‘window’ that changes the number of drugs that the user can see in the list
(MSP-0470). Once extended, it behaves like any other selection list with a scroll bar (MSP-0490).
See also the rationale in section 5.3.5.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 User control and freedom – Although the list of search results is limited, users still have the choice of extending the list so that they
  can browse a larger set of search results

                                                                                                                                      Page 53
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

5.3.7         Matching Input Text to Results
                                                                                                                          Evidence
 ID            Guideline                                                                             Conformance
                                                                                                                          Rating
 MSP-0500      Match the text in the search text input box to generic drug names and brand names     Mandatory            High
               respectively

 MSP-0510      Match text entered into the search text input box to beginning of any word (and not   Mandatory            High
               to substrings or endings of words)

 MSP-0520      Support multiple word searching by allowing the entry of letters separated with a     Mandatory            High
               space and matching those against multiple words

 Usage Examples
                                                                                                     In this correct example, the
                                                                                                     search for ‘can’ has returned
        can
                                                                                                     matches for both generic drug
                                                                                                     names and brand names
         candesartan                                                                                 (MSP-0500)

         clotrimazole – CANESTEN (CLOTRIMAZOLE)

         bifonazole – CANESTEN AF ONCE DAILY

         fluconazole + clotrimazole – CANESTEN DUO

                                                                                                     This example is incorrect
                                                                                                     because the search for ‘can’ has
                                                                                                     only returned matches for
                                                                                                     generic drug names and has not
                                                                                                     returned matches for brand
                                                                                                     names.
                                                                                                     It is also incorrect because the
                                                                                                     search results include matches
                                                                                                     for the ends of words.
                                                                                                     (MSP-0500, MSP-0510)

                                                                                                     This example is incorrect
                                                                                                     because the search for ‘can’ has
        can
                                                                                                     only returned matches for brand
                                                                                                     names and has not returned
         clotrimazole – CANESTEN (CLOTRIMAZOLE)                                                      matches for generic drug names
                                                                                                     (MSP-0500)
         bifonazole – CANESTEN AF ONCE DAILY

         fluconazole + clotrimazole – CANESTEN DUO

         clotrimazole + hydrocortisone – CANESTEN HC

                                                                                                                                 Page 54
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

                                                                                                        This example is incorrect
                                                                                                        because the search for ‘can’ has
                                                                                                        returned matches where the
                                                                                                        string ‘can’ appears in the middle
                                                                                                        of a word (MSP-0510)

                                                                                                        In this correct example, entries
                                                                                                        separated with a space are
                                                                                                        matched to multiple words
                                                                                                        (MSP-0520)

Rationale
Design Analysis – Matching Brand Names:
Returning matches on brand names in the search results (MSP-0500) is designed to support the following scenarios:
 The brand name is known and the generic equivalent or active ingredient is not known
 Prescribers know that they need to prescribe by brand and they search for that brand
 Prescribers know that they need to prescribe by brand and they search for the generic name
 The drug does not have a generic name (for example, ‘Gaviscon’ or ‘Dioralyte’) in the dm+d {R5})
When the brand name is used because the generic name is not known, the guidance ensures that the prescriber will find out the
generic name. The prescriber can then choose to prescribe a generic equivalent even when the drug has been found and selected by
searching for the brand name.
Design Analysis – Minimum Characters for a Drug Search:
A basic analysis of drug names (equivalent to VTMs in the dm+d {R5}) was used to determine how many characters are likely to be
needed in order to return a single result when the characters are matched only against the beginnings of words in a drug name.
Matches on endings of words are not recommended (MSP-0510) for two reasons:
1. There are many two-character combinations that would result in long lists where the text has been matched at both beginnings and
   endings of words, and long lists are less useful
2. Matching on endings of words is only really useful when prescribers do not yet know the name of the drug they want to prescribe.
   The task of finding that drug name would be better supported by a reference tool such as the BNF {R16}
Design Analysis – Multiple Word Matching:
Multiple word searches allow a relatively long list of matches to be quickly shortened to include very few results, or only the desired
drug name. For example, a search for ‘paracetamol’ returns many generic drug names with multiple active ingredients whereas a
search for ‘para asp’ would return only one match (‘paracetamol + aspirin’), making it much faster to find the desired drug name.
Multiple word searches are supported by existing electronic prescribing systems and are not associated with any specific patient
safety risks. Therefore, the guidance allows for the continuation of the user strategies associated with this behaviour (MSP-0520).
        Note
        In many cases, brand names begin with the same letters as the generic name for that brand. For example, a prescriber may
        type ‘nif’ and see results that match generic nifedipine and brand names for nifedipine products. The prevalence of the drug
        nifedipine in the search results could cause a prescriber to switch to thinking that they are browsing a list of nifedipine
        products. Guidance assumes that the prescriber knows what they want to prescribe (see section 1.3) and is thus not
        optimised for the task of browsing for alternative brand names.

                                                                                                                                   Page 55
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Flexibility and Efficiency – Multiple word searches allow the user to type in only four characters (two sets of two characters
  separated by a space) that are likely to result in a single match
 Aesthetic and minimalist design – The combination of matching letters to both generic names and to multiple words provides an
  effective search mechanism that produces a simple list of matches
User Research:
Feedback from participants involved in Study ID 37 (see APPENDIX F) suggests that prescribers often know the brand name and not
the generic name. Participants confirmed that it would be useful to be able to find a generic drug name by searching for the brand
name.
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                      Mitigations:
    A list of search results happens       This risk is not mitigated by the guidance
     to include more than one brand         Since guidance assumes that prescribers know the name of the generic drug or brand
     name for the same generic drug.         name that they are looking for (see section 1.3), prescribers are not expected to be
     The prescriber expects to see all       browsing the list to choose a brand name
     the brands for that generic drug.
    A list item is mis-selected            Search results lists contain only drug names (generic and brand) (MSP-0500)
     because a drug name appears            Results are ordered such that a brand drug is less likely to appear next to an equivalent
     more than once in a list                generic drug (see section 5.3.8)
                                            Cascading lists are not displayed until a drug name has been selected (see
                                             section 6.3.1)
    A drug name is mis-selected            Progressive matching encourages the typing of more letters for shorter lists of search
     because it appears next to or in        results (see section 5.3.3)
     the same list as a look-alike or       Search results lists are limited in height (see section 5.3.5)
     sound-alike drug name
                                            Drugs are displayed by searching and search results are matched to the beginnings of
                                             words so search results share the same initial letters (MSP-0510)
                                            Search results are ordered such that generic names are listed before brand names (see
                                             section 5.3.8)
                                            Search results are displayed in matched order and then alphabetically (see
                                             section 5.3.8)
                                            Search results are prioritised (see section 5.3.12)
                                            Brand names are supplemented with generic names (when they exist) (see
                                             section 5.3.17)
                                            Brand names are displayed after the generic name (when they exist) in a single list item
                                             (see section 5.3.17)
                                            If Design Guidance – Medication Line {R3} guidance is followed, brand names are
                                             differentiated by displaying them in capital letters

                                                                                                                                   Page 56
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.8       Ordering Search Results
      Important
      This section contains guidance for which there may be alternative solutions. Accordingly, the conformance
      ratings in this section apply only where the guidance is adopted.
      The Rationale section contains a summary of the known risks which are addressed in this section and
      which must be addressed by any alternative solution. For more information, see the Alternative Design
      Solutions note in section 1.

                                                                                                                       Evidence
 ID          Guideline                                                                           Conformance
                                                                                                                       Rating
 MSP-0530    List search results in matched order, such that matches are prioritised by proximity Mandatory            High
             to the beginning of the drug name and matches in generic drug names are
             prioritised above matches in brand names

 MSP-0540    Where relevancy ranking is not implemented, List search results alphabetically      Mandatory             High
             within each set that have the same text matched

 Usage Examples
                                                                                    In this correct example, the search results are
                                                                                    listed in matched order (within each of the
                                                                                    sections) (MSP-0530)

                                                                                    This example is incorrect because the drugs in
                                                                                    the ‘Standard matches’ section are listed in
                                                                                    alphabetical order (MSP-0530)

                                                                                                                              Page 57
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                                         In this correct example, matched drug names
                                                                                         are listed before matched brand names
                                                                                         (MSP-0530)
                                                                                         The brand names beginning with the matched
                                                                                         text ‘CAN’ are listed alphabetically within the set
                                                                                         of generic names and within the set of brand
                                                                                         names (MSP-0540)

                                                                                         This example is incorrect because the matched
        can                                                                              brand names are listed alphabetically with the
                                                                                         matched drug names (MSP-0530)
         candesartan

         clotrimazole – CANESTEN (CLOTRIMAZOLE)

         bifonazole – CANESTEN AF ONCE DAILY

         fluconazole + clotrimazole – CANESTEN DUO

         clotrimazole + hydrocortisone – CANESTEN HC

         sodium citrate – CANESTEN OASIS

         cannabidiol + dronabinol

Rationale
Design Analysis:
By ordering results in matched order (MSP-0530) before alphabetic order (MSP-0540), drug names are logically grouped before they
are alphabetically ordered. For example, when searching for ‘para’, the drug ‘aspirin + paracetamol’ will appear before ‘paracetamol’
when ordered purely alphabetically. When listed in matched order, ‘aspirin + paracetamol’ appears along with other drugs in which the
second component has been matched. A matched order groups associated co-drugs and matched brand names together in the
search results, creating a logical structure that allows prescribers to recognise the section of the list that their match may appear in.
Brand names are listed below generic names on the assumption that searching by generic name is (or will become) more likely and
prescribing by generic name should be promoted (see section 1.3).
An alphabetically ordered list can be helpful when scanning a list for a specific drug name. However, mitigating the risk of
mis-selection is a greater priority than facilitating scanning for a specific drug name. The progressive search is also designed to
support the entry of text to reduce the need for scanning the list to look for a specific drug name.
Many of the pairs of look-alike, sound-alike drug names that are on the ISMP’s List of Confused Drug Names12 do not begin with the
same letters. When the pairs are both generic drug names, they cannot appear in the same list (because two letters are needed to
search). Thus, the alphabetic ordering mitigates the risk that these drug names are mis-selected as a result of appearing in the same
list.
Other pairs of look-alike, sound-alike drug names include those that contain one generic and one brand name (such as ‘ketorolac’ and
‘KETALAR’). These are mitigated by guidance in section 5.3.17. For guidance on handling look-alike sound-alike drug names when
they do appear in the same search results list, see section 5.3.14.

12
     ISMP – List of Confused Drug Names {R28}: http://www.ismp.org/tools/confuseddrugnames.pdf
                                                                                                                                      Page 58
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Desk Research:
The ePrescribing Functional Specification {R12} includes a guideline (GEN.OS.40) that refers to the need to be able to search by
brand name and a guideline (GEN.DR.003) that refers to the need for a generic name to be included when a brand name is displayed.
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Match between system and the real world – The list order is designed to display the search results in an order that appears natural
  and logical (based on the task of prescribing, the search criteria entered and the scope of the search results list)
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                  Mitigations:
    A drug name is mis-selected        This risk is not wholly mitigated by guidance
     in the search results list         Search results are prioritised (see section 5.3.12) and listed in matched order before
                                         alphabetical order to maximise logical grouping (MSP-0530)
                                        The list is limited in length (see section 5.3.5) and progressive matching is recommended
                                         (see section 5.3.3) to encourage selection from shorter lists
    A list item is mis-selected        Search results lists contain only drug names (generic and brand) (see section 5.3.7)
     because a drug name                Results are ordered such that a brand drug is less likely to appear next to an equivalent
     appears more than once in a         generic drug (MSP-0530, and see section 5.3.17)
     list
                                        Cascading lists are not displayed until a drug name has been selected (see section 6.3.1)
    A drug name is mis-selected  Progressive matching encourages the typing of more letters for shorter lists of search results
     because it appears next to or   (see section 5.3.3)
     in the same list as a look-    Search results lists are limited in height (see section 5.3.5)
     alike or sound-alike drug
                                    Drugs are displayed by searching and search results are matched to the beginnings of
     name
                                     words so search results share the same initial letters (see section 5.3.7)
                                        Search results are ordered such that generic names are listed before brand names
                                         (MSP-0530)
                                        Search results are displayed in matched order and then alphabetically (MSP-0540)
                                        Search results are prioritised (see section 5.3.12)
                                        Brand names are supplemented with generic names (when they exist) (see section 5.3.17)
                                        Brand names are displayed after the generic name (when they exist) in a single list item
                                         (see section 5.3.17)
                                        If Design Guidance – Medication Line {R3} guidance is followed, brand names are
                                         differentiated by displaying them in capital letters

                                                                                                                                  Page 59
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.9       Using Groups to Limit Search Results
                                                                                                                         Evidence
 ID          Guideline                                                                             Conformance
                                                                                                                         Rating
 MSP-0550    For specific searches that return significantly more results (most of these will be    Recommended          Medium
             three or four character searches), support the display of groups in the search results
             list

 MSP-0560    When a group is displayed in a search results list, provide a control (such as a           Recommended      Medium
             button) that, when selected, replaces the original text in the search text input box
             with the full title of the group and replaces the original search results with the results
             within the group.

 Usage Examples
                                                                                                   In this correct example, a group
                                                                                                   has been created for matches
                                                                                                   containing ‘paraffin’ for a context
                                                                                                   in which paraffin is less
                                                                                                   commonly prescribed
                                                                                                   (MSP-0550)

                                                                                                   This example of a search results
                                                                                                   used in a context in which
                                                                                                   paraffin is rarely or never
                                                                                                   prescribed is not recommended
                                                                                                   because the list contains many
                                                                                                   matches for paraffin.(MSP-0550)

                                                                                                                               Page 60
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                                                              In this correct example, the
      paraffin                                                                                                contents of a group are displayed
                                                                                                              and the search criteria in the
      paraffin hard                                                                                           search text input box have been
                                                                                                              updated to display the search
      liquid paraffin                                                                                         criteria corresponding to that
      white soft paraffin                                                                                     group (MSP-0560)

      liquid paraffin + magnesium hydroxide

      liquid paraffin + white soft paraffin

      soft paraffin + wool fat

      white soft paraffin + zinc oxide

      hard paraffin + liquid paraffin + soft paraffin + wood alchohols

Rationale
Design Analysis:
Based on a simplistic analysis of the drug names in the dm+d (see section 5.3.4), there are likely to be some combinations of three
and four characters (such as ‘hom’, ‘sod’, ‘hyd’, ‘chl’, ‘met’, ‘flu’, ‘home’, ‘sodi’, ‘hydr’, ‘chlo’, ‘pota’ and ‘calc’) that will return a large
number of search results. When these results contain significant sets of clearly related drugs with similar names (for example, paraffin
or sodium) they can be replaced with a single entry to significantly reduce the number of search results (MSP-0550). The single entry
can provide access to this sub-set of matches by displaying the set when the control is activated. The selection of the single entry that
represents the set is effectively the same as entering the search criteria which the set have in common and these search criteria can
therefore be shown in the search text input box (MSP-0560).
As discussed in the rationale for section 5.3.6, this approach is one that promotes searching over browsing by keeping the search
results list flat and minimising navigation within and between lists. The search results list always displays a flat list of results. Those
results can be replaced with a new list by changing the search criteria. Changing the search criteria can be done by typing text in the
search text input box or by clicking a group button. The two approaches thus conform to the same list behaviour.
Although this is an effective means of breaking down a long list of results, it is only recommended for groups of significant numbers of
less commonly prescribed drugs. This is because it introduces extra complexity to the search results list and risks taking the focus
away from encouraging the entry of more characters in the search text input box in order to generate a shorter results list.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Aesthetic and minimalist design – Groups allow long lists of similar drug names that are less frequently prescribed to be removed
  from the initial search results list so that drugs more likely to be prescribed appear in the list

                                                                                                                                           Page 61
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

5.3.10      Supporting Spelling Matches and Synonyms
 See section 5.3.15 for guidance on formatting spelling matches and synonyms in the search results
 lists.

                                                                                                                      Evidence
 ID          Guideline                                                                       Conformance
                                                                                                                      Rating
 MSP-0570    Support spelling matches                                                        Recommended              Medium

 MSP-0580    Support synonyms such that a drug name for which a synonym has been             Recommended              Low
             defined is displayed when the synonym is matched

 MSP-0590    When there are spelling matches or synonyms to display, list them along with    Recommended              Low
             other results in the search results list

 Usage Examples
                                                                                  In this correct example, spelling matches are
                                                                                  included in the search results (MSP-0570)

                                                                                  This example is not recommended because
                                                                                  spelling matches are not provided (MSP-0570)

                                                                                                                            Page 62
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                                      In this correct example, the drug furosemide is
                                                                                      matched because it has ‘frusemide’ defined as a
                                                                                      synonym (MSP-0580)

                                                                                      This example is incorrect because the spelling
                                                                                      matches are not displayed along with other
                                                                                      results (MSP-0590)

Rationale
Design Analysis:
The guidance for spelling matches (MSP-0570) is designed to allow users to find the drugs they are searching for in the results list
(MSP-0590), even when they have mis-typed or mis-spelled the name of the drug. Alternative approaches may slow down the
process, or interrupt the flow, by reporting the presence of matches and requiring acknowledgement before displaying those matches.
This guidance places more emphasis on allowing the drug name to be found, in the same way as those that are matched directly, than
on ensuring that the correct spelling is learned.
By supporting matching against synonyms (MSP-0580), the drug search can provide support for finding drugs when the drug name
has changed (such as from ‘frusemide’ to ‘furosemide’) and when a more familiar name is commonly used instead of the correct
generic drug name. For example, ‘saline’ is often used to refer to sodium chloride and could be displayed as a synonym for sodium
chloride in the search results list providing such a synonym is found to be safe.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Help users recognise, diagnose, and recover from errors – By displaying spelling matches, users are still likely to find the drug they
  are looking for in the search results and learn the correct spelling in the process
 Aesthetic and minimalist design – Displaying the spelling matches directly in the search results list keeps the searching area free of
  additional controls or results lists that might be needed to facilitate alternative approaches to supporting spelling matches

                                                                                                                                Page 63
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.11       Co-Drugs and Their Ingredients
                                                                                                                                   Evidence
 ID             Guideline                                                                                  Conformance
                                                                                                                                   Rating
 MSP-0600       Supplement co-drugs with text that lists the ingredients of the co-drug                    Mandatory               High

 MSP-0610       Format text that lists the ingredients of co-drugs such that it is differentiated from     Mandatory               High
                the drug name

 Usage Examples
                                                                                                 In this correct example, the matches that
                                                                                                 are co-drugs are supplemented with text
                                                                                                 that lists the ingredients of the co-drug
                                                                                                 (MSP-0600)

                                                                                                 In this correct example, the matches that
                                                                                                 are co-drugs include grey italic text that lists
                                                                                                 the ingredients of the co-drug (MSP-0610)

                                                                                                 This example is incorrect because, the
                                                                                                 matches that are co-drugs do not include
                                                                                                 grey italic text that lists the ingredients of
                                                                                                 the co-drug (MSP-0610)

 Rationale
 Design Analysis:
 Prescribing co-drugs requires knowledge of the active ingredients since they are not easy to infer from the drug name. Always
 supplementing the drug name with a description of its active ingredients can mitigate the risk that the drug is prescribed with imperfect
 knowledge of those ingredients (MSP-0600).
 Desk Research:
 Guidance in this section is informed by the following Nielsen heuristic {R17}:
  Error Prevention – Displaying the ingredients of co-drugs helps prevent them from being prescribed when the prescriber has made
   an erroneous assumption about their active ingredients

                                                                                                                                          Page 64
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
 is mitigated by the guidance:
      Potential Hazards:                                                  Mitigations:
       A prescriber is unfamiliar with a co-drug and makes an             Co-drugs are supplemented with text that describes their
        incorrect assumption about its ingredients                          active ingredients (MSP-0600)

5.3.12        Prioritising Results
 Drug search results, cascading lists (see section 6) and other selection lists can be divided into
 sections in order to bring prioritised list items to the top of a list. See section 6.3.3 for guidance on
 prioritisation within cascading lists and section 9.3.3 for guidance on prioritisation within selection
 lists used as input controls.

                                                                                                                               Evidence
 ID             Guideline                                                                                 Conformance
                                                                                                                               Rating
 MSP-0620       Display prioritised results in a separate section that appears above other results in Recommended              Medium
                the list

 MSP-0630       Separate the prioritised results from standard matches with a horizontal line             Recommended          Medium

 MSP-0640       Provide a label for the prioritised results that gives a brief indication of how they     Recommended          Medium
                are prioritised

 MSP-0650       Ensure that the labels are sufficiently different from list items in the search results   Recommended          Medium

 MSP-0660       Label results that are not prioritised with ‘Standard Matches’                            Recommended          Medium

 MSP-0670       When there are no prioritised matches, omit the prioritised section, horizontal line      Recommended          Medium
                and label

 Usage Examples
                                                                                               In this correct example, prioritised matches
                                                                                               appear above a horizontal line, and standard
                                                                                               matches appear below the line. Both sections
                                                                                               are labelled at the beginning of the section
                                                                                               and the results that are not prioritised are
                                                                                               labelled ‘Standard Matches’ (MSP-0620,
                                                                                               MSP-0630, MSP-0640, MSP-0650).

                                                                                               This example is not recommended because
                                                                                               the search results have not been prioritised
                                                                                               (MSP-0620)

                                                                                                                                     Page 65
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                          This example is not recommended because
                                                                                          the labels for the two sections are not
                                                                                          sufficiently different from the search result list
                                                                                          items (MSP-0650)

                                                                                          In this correct example, there are no
                                                                                          prioritised matches for the text entered in the
                                                                                          search text input box, therefore the prioritised
                                                                                          section does not appear (MSP-0670)

                                                                                          This example is not recommended because
                                                                                          the prioritised section ‘Commonly prescribed
                                                                                          matches’ should not appear when there are
                                                                                          no matches to display (MSP-0670)

Rationale
Design Analysis:
Prioritisation can provide a mechanism of promoting certain drugs, such as commonly prescribed drugs (or other locally defined
priorities). Promoted drug names are displayed at the top of the list so that they are first in the reading order (MSP-0620) and are
clearly labelled (MSP-0640) so that the reason for, or method of, prioritisation is clear. Prioritised matches are separated from standard
matches (MSP-0630) so that the order in which search results are displayed can be applied in each section respectively and there is
no confusion or apparent inconsistency in the list.

                                                                                                                                    Page 66
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

There are alternative approaches to prioritising drugs that may have different merits depending on the context in which they are used.
The matches that appear in the prioritised section could be those that are prescribed most frequently by an individual or by a specific
location or trust or by manually maintaining a list. In some cases, it may be appropriate to use the prioritised section to promote the
use of medications that are on formulary and demote those that are off-formulary. Further analysis would have to be completed before
guidance could recommend the use of a particular approach to prioritisation.
The prioritised section is only needed when there are prioritised matches to be displayed (MSP-0670). Similarly, the label for the
standard matches section is only needed to differentiate it from the prioritised section and is thus not needed when there are no
prioritised matches (MSP-0660).
The guidance is designed to promote clear differentiation between the labels and the drug names in the search list so that the list can
be scanned without additional information (for example, no labels or warnings interrupting the scanning of the list (MSP-0650)).
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Flexibility and efficiency of use – Accelerators are provided for prioritised medications so that they remain at the top of the list and
  are easier to find and select
 Aesthetic and minimalist design – Ensuring that the search results are most prominent (reducing both the presence of, and
  emphasis on, other elements of the search results lists) minimises distractions from scanning the drug names and maximises the
  emphasis on the drug names
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                       Mitigations:
    A drug name is mis-selected in          This risk is not wholly mitigated by guidance
     the search results list                 The list is limited in length (see section 5.3.5) and progressive matching is
                                              recommended (see section 5.3.3) to encourage selection from shorter lists
                                             Search results are prioritised (MSP-0620) and listed in matched order before
                                              alphabetical order to maximise logical grouping (see section 5.3.8)
    A drug name is mis-selected             Progressive matching encourages the typing of more letters for shorter lists of search
     because it appears next to or in         results (MSP-0370)
     the same list as a look-alike or        Search results lists are limited in height (see section 5.3.5)
     sound-alike drug name
                                             Drugs are displayed by searching and search results are matched to the beginnings of
                                              words so search results share the same initial letters (see section 5.3.7)
                                             Search results are ordered such that generic names are listed before brand names (see
                                              section 5.3.8)
                                             Search results are displayed in matched order and then alphabetically (see
                                              section 5.3.8)
                                             Search results are prioritised (MSP-0620)
                                             Brand names are supplemented with generic names (when they exist) (see
                                              section 5.3.17)
                                             Brand names are displayed after the generic name (when they exist) in a single list item
                                              (see section 5.3.17)
                                             If Design Guidance – Medication Line {R3} guidance is followed, brand names are
                                              differentiated by displaying them in capital letters

                                                                                                                                    Page 67
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

5.3.13        Shortcut Keys in Search Results
                                                                                                                             Evidence
 ID              Guideline                                                                               Conformance
                                                                                                                             Rating
 MSP-0680        Display keyboard shortcuts for prioritised matches only                                 Recommended         Medium

 MSP-0690        Display keyboard shortcuts on the same line as each match. Display them                 Recommended         Medium
                 right-aligned after each match

 Usage Examples
                                                                                In this correct example, shortcut keys are provided for
                                                                                prioritised matches only (MSP-0680). The shortcut keys
                                                                                are displayed as grey italics on the same line as each
                                                                                match and are right-aligned (MSP-0690)

                                                                                This example is not recommended because shortcut keys
                                                                                should not be provided for standard matches (MSP-0680)

 Rationale
 Design Analysis:
 Shortcut keys are recommended so that prioritised drug names can be easily selected using the keyboard (MSP-0680). Shortcut keys
 are a supplementary way of selecting results that supplements the standard keyboard navigation keys for moving the focus and
 selecting list items.
 Desk Research:
 Guidance in this section is informed by the following Nielsen heuristics {R17}:
  Flexibility and efficiency of use – Shortcut keys provide accelerators for prioritised drugs in the list
  Recognition rather than recall – The display of shortcut keys clearly indicates that there are accelerators and tells users which keys
   they can use
 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
 is partially mitigated by the guidance:
      Potential Hazards:                                                 Mitigations:
       The user becomes over-reliant on a combination of letters         This risk is not wholly mitigated by guidance
        types into the search text input box and a shortcut key (or       The risk could be mitigated by the removal of shortcut keys
        sequences of key strokes) and the prioritised drugs for this       (MSP-0680) when a newly added drug appears in a prioritised
        combination of letters have changed                                list. However, this approach has not been tested

                                                                                                                                   Page 68
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

5.3.14      Formatting Commonly Mis-Selected Matches
                                                                                                                        Evidence
 ID          Guideline                                                                      Conformance
                                                                                                                        Rating
 MSP-0700    Where drug names associated with mis-selection errors are listed in the        Mandatory                   High
             search results, use formatting to draw attention to them

 MSP-0710    Where drug names associated with mis-selection errors are listed in the        Recommended                 Low
             search results, highlight the row with a pale background colour

 MSP-0720    Where drug names associated with mis-selection errors are listed in the        Mandatory                   Medium
             search results, supplement the drug name with a brief warning message

 MSP-0730    Display mis-selection warning messages in grey italics and in a smaller font   Recommended                 Medium
             size than the drug name

 Usage Examples
                                                                          In this correct example, Tall Man lettering has been used
                                                                          to draw attention to drug names associated with
                                                                          mis-selection errors and the row has been highlighted with
                                                                          a pale colour (MSP-0700, MSP-0710)

                                                                          In this correct example, search results that are associated
                                                                          with known mis-selection errors are highlighted with a pale
                                                                          background colour and are supplemented with a brief
                                                                          warning messages in grey italics (MSP-0700, MSP-0710,
                                                                          MSP-0720, MSP-0730)

                                                                                                                               Page 69
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                              This example is not recommended because the commonly
                                                                              mis-selected drugs are not highlighted with a pale
                                                                              background colour (MSP-0700)

                                                                              This example is incorrect because the specific drugs that
     quin                                                                     are often mis-selected are not marked with text or
                                                                              highlighting (MSP-0700, MSP-0710, MSP-0720,
     Please select carefully. This list contains                              MSP-0730)
     similar looking or similar sounding drug
     names that are often mis-selected.
      quinagolide
      quinapril

      quinidine

      quinine

      quinine bisulphate

      quinine dihydrochloride

      quinine hydrochloride

Rationale
Design Analysis:
A consistently placed generic message at the beginning of a search results list is less likely to capture attention than a message
placed alongside the drug name, where attention is focused when a selection is made from the list.
Selection of a drug name from a search results list is just one of a number of steps that must be completed to prescribe. There are
other mechanisms for mitigating the risks of mis-selection at other stages in the prescribing process. However, it is still considered a
significant enough risk for both formatting and text to be used to draw attention to these drugs in the search results list.
Desk Research:
Patient safety risks associated with mis-selection of drug names are widely reported in Safety in doses: medication safety incidents in
the NHS13 and the World Health Organization (WHO) news release WHO Collaborating Centre for Patient Safety Releases Nine Life-
Saving Patient Safety Solutions14.

13
  NHS NPSA – The fourth report from the Patient Safety Observatory – PSO/4 – Safety in doses: medication safety
incidents in the NHS {R6}: http://www.npsa.nhs.uk/nrls/alerts-and-directives/directives-guidance/safety-in-doses/
14
  The Joint Commission International – WHO Collaborating Centre for Patient Safety Releases Nine Life-Saving Patient
Safety Solutions {R29}: http://www.ccforpatientsafety.org/patient-safety-solutions/
                                                                                                                                   Page 70
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 The US Food and Drug Administration (FDA) Office of Generic Drugs Name Differentiation Project15 requested manufacturers of 16
 look-alike drug names to use a system known as ‘Tall Man’ lettering to mitigate the risk that they are mistaken for similar looking drug
 names. However, as reported in The Use of Tall Man Lettering to Minimise Selection Errors of Medicine Names in Computer
 Prescribing and Dispensing Systems {R24}, findings from studies of Tall Man lettering are not conclusive and Tall Man lettering has
 been statistically proven to be useful in only very specific circumstances. The only experiment within this study that tested the selection
 of drug names within a selection list also included dose and formulation as part of that selection list and noted that error was more
 related to dose and formulation or a combination of these than with look-alike medication names. The most effective of the three Tall
 Man lettering variants used in the study was also found to significantly affect the time for the action of selecting a medication.
 Tall Man lettering has been found to be useful when:
  Distinguishing names in same-different judgement tasks when participants understood the purpose of Tall Man lettering
  Improving recognition memory by increasing attention (and slowing down reading speed)
  Improving selection from an array when lettering is simulated as packaging
 In short, there is no conclusive evidence that Tall Man lettering is effective at mitigating selection errors in lists of drug names when
 presented as part of a prescribing process that builds the prescription step by step. Therefore, this guidance recommends the use of
 other mechanisms for drawing attention to the potential for mis selection. Unlike Tall Man lettering, these mechanisms are specific to
 the selection of a drug name from a list of drug names and are not expected to be implemented throughout a prescribing system to
 appear whenever the drug name is displayed.
 The ePrescribing Functional Specification {R12} includes a requirement (GEN.OS.94) to specifically address the risk of mis-selection
 when drugs that are known to be mis-selected are displayed in selection lists.
 Guidance in this section is informed by the following Nielsen heuristic {R17}:
  Error prevention – Formatting of commonly mis-selected matches helps to prevent the mis-selection of an unintended drug in the
   list
 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
 is mitigated by the guidance:
      Potential Hazards:                       Mitigations:
       A look-alike or sound-alike drug is     Formatting (MSP-0700) and supplementary text warnings (MSP-0720) are used to
        selected in error                        mark look-alike sound-alike drugs at the point of selection

5.3.15        Formatting Spelling Matches and Synonyms
 This section includes guidance for formatting spelling matches and synonyms when they appear in
 a search results list. See section 5.3.10 for guidance on supporting spelling matching and
 synonyms.

                                                                                                                              Evidence
 ID              Guideline                                                                               Conformance
                                                                                                                              Rating
 MSP-0740        Use background colour to highlight differences in characters between text that has      Recommended          Medium
                 been entered and spelling matches

 MSP-0750        When spelling matches are displayed, ensure that there is sufficient colour and         Mandatory            Medium
                 contrast differences between text and both background highlighting and spelling
                 matching highlighting

 MSP-0760        When spelling matches are displayed, ensure that there is sufficient colour and         Mandatory            Medium
                 contrast differences between background highlighting and spelling matching
                 highlighting

 MSP-0770        For drug names that are displayed when matched on a synonym, supplement the             Mandatory            Medium
                 drug name with a message that includes the synonym

 15
    US Federal Drug Administration (FDA) Center for Drug Evaluation and Research (CDER) – Name Differentiation Project
 {R30}: http://www.fda.gov/Drugs/DrugSafety/MedicationErrors/ucm164587.htm
                                                                                                                                    Page 71
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Usage Examples
                                                                                         In this correct example, the difference between
                                                                                         the text entered and the spelling matches is
                                                                                         highlighted in the search results list (MSP-0740,
                                                                                         MSP-0750, MSP-0760)

                                                                                         This example is incorrect because all text that
                                                                                         was matched has been highlighted (MSP-0740)

                                                                                         In this correct example, a synonym has been
                                                                                         matched and the relevant drug name has been
                                                                                         supplemented with a message that includes the
                                                                                         synonym (MSP-0770)

Rationale
Design Analysis:
Any form of highlighting in the search results list draws attention away from the contents of the list, and makes it more difficult to scan
the drug names quickly. The guidance therefore minimises the use of highlighting by highlighting the differences instead of the
matched text (MSP-0740).
The highlighting of search results is a solution that is commonly used on Web pages when search results consist of a paragraph of text
rather than a short name. However, when search results are usually only one or two words in length, this approach results in an
unnecessarily large quantity of highlighting that is more likely to hinder readability of the list than to help identify the one drug name
that the prescriber is looking for.
The colour and contrast used for the highlighted text should be chosen such that the potential for reducing readability of the search
results is minimised (MSP-0750, MSP-0760).

                                                                                                                                     Page 72
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 When a search is tightly scoped:
  The matched text is easier to see and predict
  The expectation is that one result will be exactly what is being searched for
  Highlighting all matches is not likely to help draw attention to the drug name that is being searched for
 In this guidance, only the results that are exceptions to the rules are highlighted. By restricting highlighting to the differences between
 the text entered in the search text input box and the spelling matches in the list, the highlights draw attention to exceptional matches,
 as well as communicating the specific difference in spelling.
 Desk Research:
 Guidance in this section is informed by the following Nielsen heuristic {R17}:
  Help users recognise, diagnose and recover from errors – The formatting draws attention to the specific differences between the
   text entered and the ‘spelling matches’ thus allowing users to recognise that they (potentially) mis-spelled the drug name and to
   identify the correct spelling

5.3.16       Formatting Search Results Lists
                                                                                                                                 Evidence
 ID             Guideline                                                                                  Conformance
                                                                                                                                 Rating
 MSP-0780       Use subtle alternate shading of matches in the search results list                         Mandatory             Medium

 MSP-0790       Avoid the use of strong horizontal lines to separate individual list results               Mandatory             Medium

 MSP-0800       Re-start alternate shading at the beginning of a new section in a search results list      Mandatory             Medium

 Usage Examples
                                                                                                           This correct example shows the
                                                                                                           use of subtle alternate shading
                                                                                                           of matches in the list
                                                                                                           (MSP-0780)

                                                                                                           This example is incorrect
                                                                                                           because no shading has been
                                                                                                           used to help differentiate lines in
                                                                                                           the list (MSP-0780)

                                                                                                                                      Page 73
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                                           This example is incorrect
    neomycin                                                                                               because strong horizontal lines
                                                                                                           have been used to separate the
                              Commonly prescribed matches
                                                                                                           matches in the search results
     neomycin                                           Ctrl + 1                                           (MSP-0790)
                                            Standard matches

     neomycin + prednisolone

     neomycin + triamcinolone

      betamethasone + neomycin

                                                                                                           In this correct example, the list
                                                                                                           results are alternately shaded,
                                                                                                           with the second result in the list
                                                                                                           being the first one to have a
                                                                                                           shaded background (MSP-0800)

                                                                                                           This example is incorrect
                                                                                                           because the alternate row
                                                                                                           shading continues from one
                                                                                                           section to the next. It should be
                                                                                                           restarted at the beginning of the
                                                                                                           ‘Standard matches’ section so
                                                                                                           that the first item in that section
                                                                                                           does not have a shaded
                                                                                                           background (MSP-0800)

Rationale
Design Analysis:
The alternate row shaded background (MSP-0780) is designed to mitigate the risk of mis-selection and help to associate the drug
names with the shortcut keys without reducing the readability of the search results. Maintaining readability of the list by minimising
formatting (MSP-0790) is considered to be a higher priority than using formatting to clearly differentiate individual lines in the list. A
subtle shaded background is therefore recommended above the use of horizontal lines.
When static lists are presented with strong alternate row shading, and there are only two or three items in the list, the strong shading
can be mistaken for selection or highlighting on first use. Subtle shading helps reduce the likelihood of this misinterpretation. This is
less of an issue when the list is dynamic because an initial list is likely to be longer. This thus allows users to become familiar with
alternate row shading before the list is shortened as they type further characters into the search text input box.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Error prevention – Alternate row shading is recommended in search results lists to help avoid mis-selection when drugs are
  selected from the list

                                                                                                                                       Page 74
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
 is partially mitigated by the guidance:
      Potential Hazards:                       Mitigations:
       Alternate row shading is mistaken       This risk is not wholly mitigated by guidance
        for selection or highlighting when      Alternate row shading should be subtle (MSP-0780)
        there are only two or three list items
                                                When results are displayed using progressive matching (see section 5.3.3), the initial
        in a list or section
                                                 list of results is more likely to contain greater than three drugs in any one section of
                                                 the list. The user is thus familiar with the presence and meaning of the alternate row
                                                 shading before the list is shortened such that this risk is introduced

5.3.17        Generic Drug Names and Brand Names
                                                                                                                          Evidence
 ID              Guideline                                                                           Conformance
                                                                                                                          Rating
 MSP-0810        When brand names that have a generic name are matched, display the generic          Mandatory            Medium
                 drug name and supplement it with the brand name

 MSP-0820        Separate generic drug names and brand names with a hyphen that has a space          Mandatory            Medium
                 either side

 MSP-0830        Do not display brand names unless they have been matched with text entered in       Mandatory            Medium
                 the search text input box

 MSP-0840        Display generic and brand names in the same order as described in Design            Recommended          Medium
                 Guidance – Medication Line {R3}

 Usage Examples
                                                                                                     In this correct example, the text
                                                                                                     entered in the search text input box
                                                                                                     matches only brand names. Both
                                                                                                     the brand names and the generic
                                                                                                     names are listed in the search
                                                                                                     results and a hyphen is used to
                                                                                                     separate the brand name from the
                                                                                                     drug name (MSP-0810, MSP-0820).

                                                                                                     This example is incorrect because
                                                                                                     only brand names are listed in the
                                                                                                     search results (MSP-0810)

                                                                                                                                   Page 75
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                                                   This example is incorrect because
                                                                                                   the brand name CANESTEN has
                                                                                                   not been matched by the text in the
                                                                                                   search text input box, and should
                                                                                                   not appear in the results list
                                                                                                   (MSP-0830)

                                                                                                   This example is not recommended
                                                                                                   because the generic and brand
                                                                                                   names are displayed in a different
                                                                                                   order than in a medication line
                                                                                                   (MSP-0840)

Rationale
Design Analysis:
The guidance aims to encourage generic prescribing by always displaying the generic name (if there is one) for each item in a search
result list (MSP-0810). Also, only displaying brand names in the search results when the text entered in the search text input box is
matched against text in a brand name (MSP-0830). This approach facilitates prescribing by generic name, even when only the brand
name is known, since it allows the brand name to be entered in the search text input box and the generic name to be displayed
alongside the matched brand names in the search results.
The display of brand name first and generic name second helps to mitigate mis-selection risks associated with look-alike and
sound-alike drug names. Drug name pairs such as ‘ketorolac’ and ‘KETALAR’ which are on the ISMP’s List of Confused Drug Names
{R28} are not likely to be displayed next to one another in a search results list when the list is ordered such that generic names appear
earlier in the list than those with brand names. Furthermore, by supplementing brand names with the generic name (MSP-0810), the
two drug names are displayed in the list as ‘ketorolac’ and ‘ketamine – KETALAR’ further reducing the potential for confusion even if
they were displayed next to one another in the list. Guidance in Design Guidance – Medication Line {R3} further mitigates the risk of
mis-selection in this example since the brand name is displayed in capital letters and the two names are displayed with the generic
name first and the brand name second (MSP-0840).
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Aesthetic and minimalist design – By matching brand names in the search results list and displaying them alongside generic
  names, the drug search facilitates searching for brand names and discovering the generic names
 Consistency and standards – The generic and brand names are listed in the same order as indicated in Design Guidance –
  Medication Line {R3} and in a prescription form (MSP-0840, MSP-0820), with the same formatting to separate them

                                                                                                                                 Page 76
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                     Mitigations:
    A list item is mis-selected           Search results lists contain only drug names (generic and brand) (see section 5.3.7)
     because a drug name appears           Results are ordered such that a brand drug is less likely to appear next to an equivalent
     more than once in a list               generic drug (see section 5.3.8 and MSP-0810)
                                           Cascading lists are not displayed until a drug name has been selected (see
                                            section 6.3.1)
    A drug name is mis-selected           Progressive matching encourages the typing of more letters for shorter lists of search
     because it appears next to or in       results (see section 5.3.3)
     the same list as a look-alike or      Search results lists are limited in height (see section 5.3.5)
     sound-alike drug name
                                           Drugs are displayed by searching and search results are matched to the beginnings of
                                            words so search results share the same initial letters (see section 5.3.7)
                                           Search results are ordered such that generic names are listed before brand names (see
                                            section 5.3.8)
                                           Search results are displayed in matched order and then alphabetically (see
                                            section 5.3.8)
                                           Search results are prioritised (see section 5.3.12)
                                           Brand names are supplemented with generic names (when they exist) (MSP-0810)
                                           Brand names are displayed after the generic name (when they exist) in a single list item
                                            (MSP-0840)
                                           If Design Guidance – Medication Line {R3} guidance is followed, brand names are
                                            differentiated by displaying them in capital letters

                                                                                                                              Page 77
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

6            GUIDANCE DETAILS FOR CASCADING LISTS

6.1          Introduction
    After a drug has been selected, either from the Quick List or a list of search results, a number of
    other attributes are needed to determine the type of medication that is being prescribed. This
    section provides guidance for cascading lists as a means of facilitating the definition of those
    attributes.
    Figure 11 shows the full user interface prescribing process in which the steps covered in this
    section are shown with a grey background:

    Figure 11: The Prescribing Process – Select Further Attributes

                                                                                                     Page 78
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

 Figure 12 is an extract from Figure 5 to illustrate the user interface prescribing steps covered in this
 section showing the cascading list step and links to and from other steps:

 Figure 12: User Interface Prescribing Steps – Cascading Lists

6.2       Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Mitigate the risks of mis-selection and misinterpretation:
                 Lists can be kept open so that feedback for selections is maximised
                 The contents of lists are limited by the previous selection, so a mis-selection is more
                  likely to be noticed because of the contents of the following list
       Encourage simplicity of design by promoting user interface approaches that help to avoid
        overly complex displays and interactions that require many controls:
                 Cascading lists allow the majority of a prescription to be defined using a series of
                  identical user input controls
       Ensure that the prescribing process can be supported in multiple layouts and is flexible
        enough to be presented in different screen dimensions:
                 Cascading lists can be displayed opened or closed depending on the available space
                  and can wrap onto a new line if necessary
       Adhere to a user interface strategy that gives the impression of making progress within a
        single space (which has all the necessary information immediately or readily available) and
        avoids the impression of needing to move between many different spaces:
                 Cascading lists are presented within the same space, with each list supplementing the
                  last

                                                                                                         Page 79
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

6.3     Guidelines
6.3.1       Providing Cascading Lists
      Important
      This section contains guidance for which there may be alternative solutions. Accordingly, the conformance
      ratings in this section apply only where the guidance is adopted.
      The Rationale section contains a summary of the known risks which are addressed in this section and
      which must be addressed by any alternative solution. For more information, see the Alternative Design
      Solutions note in section 1.

                                                                                                                            Evidence
 ID           Guideline                                                                              Conformance
                                                                                                                            Rating
 MSP-0850     Display a cascading list on the selection of drug name and up to two further           Mandatory              High
              cascading lists for basic prescription attributes

 MSP-0860     Present a second list when a selection is made in the search results list              Mandatory              Medium

 MSP-0870     Allow the width of the search results list to extend into available space to           Mandatory              High
              accommodate the longest entry when first presented

 MSP-0880     Allow different cascading lists (such as route and form or route and strength) to be Recommended              Medium
              presented depending on the drug selected

 MSP-0890     Limit the options presented within cascading lists to those that are relevant to the   Mandatory              High
              previous selection

 Usage Examples
                                                                                                     In this sequence of correct
                                                                                                     examples (MSP-0850):
                                                                                                     1. A list of search results is
                                                                                                        displayed
                                                                                                     2. A cascading list is displayed
                                                                                                        when a drug name is selected
                                                                                                        in the search results list
                                                                                                     3. A second cascading list that is
                                                                                                        displayed when a selection is
                                                                                                        made in the first cascading list

                                                                                                                                   Page 80
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                      In this sequence of correct
                                                                                      examples (MSP-0860):
                                                                                      1. A cascading list is displayed
                                                                                         when the drug diltiazem is
                                                                                         selected from the search
                                                                                         results list
                                                                                      2. The selection of a route causes
                                                                                         display of a cascaded list of
                                                                                         forms

                                                                                      In this correct example of the lower
                                                                                      part of a search results list, the list
                                                                                      width accommodates the longest
paraldehyde
                                                                                      search results entry (MSP-0870)
                                                           oavailable spaceo
parathyroid hormone

paracetamol + sodium salicylate

Showing 10 of 40 matches.                   Show all

                                                                                      This example of the lower part of a
                                                                                      search results list is incorrect
                                                                                      because it has not used available
                                                                                      space to expand in width to
                                                                                      accommodate the longest search
                                                                                      results entry (MSP-0870)

                                                                                                                    Page 81
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

                                                                        In this sequence of correct
 1                                                                      examples (MSP-0880):
                                                                        1. Selecting a drug name in
salbut                                                                     search results displays a
                                                            1    2         cascading list
 salbutamol     paracetamol
                inhaled – breath-actuated inhaler                       2. Selecting in that cascading list
                                                                           displays template prescriptions
               inhaled – dry powder inhaler

                inhaled – metered dose inhaler

                inhaled – nebuliser

                oral

               oral – modified-release

                other...

 2

 salbutamol    inhaled – nebuliser

DOSE 2.5 mg   four times a day
DOSE 5 mg     four times a day
 other...

                                                                        In this sequence of correct
                                                                        examples (in which there is
                                                                        enough room to display the
                                                                        template prescriptions to the right
                                                                        of the cascading lists) (MSP-0880):
                                                                        1. Selecting a drug name in
                                                                           search results displays a
                                                                           cascading list
                                                                        2. Selecting in that cascading list
                                                                           displays template prescriptions

                                                                                                      Page 82
              Design Guidance – Medications Management – Search and Prescribe
              Prepared by Microsoft, Version 3.0.0.0
              Last modified on 20 January 2010

                                                                        In this sequence of correct
 1                                                                      examples (MSP-0880):
                                                                        1. Selecting a drug name in the
salbut
                                                                           search results displays a
                                                         1    2    3
                                                                           cascading list
 salbutamol   paracetamol
              inhaled
                                                                        2. Selecting in that cascading list
              oral                                                         displays template prescriptions

              other...

 2
salbut

 salbutamol   paracetamol
              inhaled                 breath-actuated

              oral                    dry powder

              other...                metered dose

                                      nebuliser

                                       other...
 3
salbut

 salbutamol   paracetamol
              inhaled                 tablets and capsules

              oral                    modified-release preparations

              other...                liquids and solutions

                                      other...

                                                                        This example is incorrect because
                                                                        the options displayed in the
                                                                        cascading list have not been
                                                                        limited to those that are relevant to
                                                                        the previous selection (MSP-0890)

                                                                                                      Page 83
              Design Guidance – Medications Management – Search and Prescribe
              Prepared by Microsoft, Version 3.0.0.0
              Last modified on 20 January 2010

Rationale
Design Analysis:
Cascading lists allow the most important aspects of a prescription to be defined by making a few selections from short lists
(MSP-0850, MSP-0860). They achieve the following:
 The most important information for a large percentage of prescriptions can be defined with a few selections
 Selections are easier to make because they are part of a short list
 The sequence and structure of cascading lists is consistent
 The contents of cascading lists will become familiar very quickly
 The cascading lists can be likened to ‘multiple choice answers’ whereas a set of empty fields is more like a set of ‘questions’ and
  the cognitive weight of the former is considered to be much lighter
 The lists and contents can change depending on previous selections (MSP-0880)
Some of the usage examples in this section show routes or combinations of route and form in cascading lists. Cascading lists could
also be used to select from other sets of options (such as regular oral, one-off injections, continuous infusions and regular injections).
However they are divided, the information presented in cascading lists should be enough to determine the type of medication and thus
a list of relevant template prescriptions and a set of required fields.
Cascading lists are most effective at mitigating the risk of mis-selection when they are kept open. However, they can also be treated as
dynamic width selection lists (MSP-0870) and presented using sentence layout (see section 7.3.7). This means that the cascading lists
are flexible enough to work with most layout schemes and in spaces with restricted widths or heights.
Desk Research:
Guidance requires the options that are displayed in cascading lists to be limited according to the previous selections (MSP-0890). This
matches a requirement (GEN.OS.094) in the ePrescribing Functional Specification {R12} to limit administration routes for specific
drugs (such as vinca alkaloids).
The Guidelines for hazard review of ePrescribing systems16 advises that when drug forms are selectable, they should be limited to
those appropriate for the drug name selected (guideline 4.1) and that route selections should be limited to those that are pertinent to
the medicine combinations selected (guideline 4.4)
As reported in The Use of Tall Man Lettering to Minimise Selection Errors of Medicine Names in Computer Prescribing and Dispensing
Systems, the display of drug names combined with dose and strength is associated with greater incidence of mis-selection errors than
the selection of drug name alone {R24}. The combination of guidance on Drug Search (see section 5) and Cascading Lists (see
section 6) ensures that the drug name and attributes needed to define the type of medication being prescribed are selected before
dose and strength options are presented. This also means that the dose and strength options presented can be limited to those
relevant for the medication type and the specific drug name that has been selected.
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Flexibility and efficiency – Cascading lists help to focus on entering the relevant information in the right order without having to
  review a much large set of fields and determine which need to be completed
 Error prevention – By presenting limited lists whose contents are tailored according to previous selections, the opportunities for
  mis-selections are reduced
 Help users recognise, diagnose and recover from errors – By keeping the cascading lists open even when a selection has been
  made, users can see their selection within the context of the list it was selected from and have a greater opportunity to notice when
  they have mis-selected

16
  NHS ePrescribing: Guidelines for hazard review of ePrescribing systems {R31}:
http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/hazard_framework.pdf
                                                                                                                                   Page 84
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
 some of which are mitigated and some partially mitigated by the guidance:
      Potential Hazards:                   Mitigations:
       The name of the drug being          The options presented after a drug is selected are filtered to be relevant to that drug
        prescribed is not noticed at the     (MSP-0850)
        top of the form and is not the      The drug name remains at the top of the form when switching to a detailed prescription
        intended drug                        and is visible throughout, even when the prescription is long enough to need a scroll bar
                                             (see section 8.3.3)
       Selections in the search results  This risk is not wholly mitigated by guidance
        list and cascading lists are mis-  The cascading list that is displayed on selection contains only options that are relevant to
        interpreted because they are        the selection and thus may not contain the expected options (MSP-0880, MSP-0890) in
        not (or may not be) horizontally    the event of a mis-selection
        aligned
                                           Cascading lists are presented one at a time after a selection has been made in the
                                            previous list (MSP-0860)
                                            When space is limited such that cascading lists obscure other information, the list
                                             collapses (see section 6.3.2)
       A list item is mis-selected         Search results lists contain only drug names (generic and brand) (see section 5.3.7)
        because a drug name appears         Results are ordered such that a brand drug is less likely to appear next to an equivalent
        more than once in a list             generic drug (see section 5.3.8)
                                            Cascading lists are not displayed until a drug name has been selected (MSP-0850)

6.3.2         Displaying Cascading Lists
                                                                                                                              Evidence
 ID              Guideline                                                                             Conformance
                                                                                                                              Rating
 MSP-0900        When a cascaded list is displayed and the search results list remains open, reduce Recommended               Medium
                 the width of the search results list as necessary (following Design Guidance –
                 Medication Line {R3} for wrapping)

 MSP-0910        Do not allow any of the results or cascaded lists to obscure one another              Mandatory              High

 MSP-0920        Maintain visibility of selections, and the list from which they were selected         Recommended            Medium
                 (including the search results), throughout the cascade select, as long as there is
                 enough space to do so without obscuring other information

 MSP-0930        When the width of the search results list is reduced and a scroll bar is displayed,   Recommended            Low
                 expand the list to show all results

                                                                                                                                     Page 85
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
                                                                                 In this correct example (in which
        Commonly prescribed matches
                                            oral                                 the search results list is kept open
  paracetamol                                                                    after a selection), the width of the
                                            rectal                               search results list has been
  paroxetine                                                                     restricted to accommodate the
                                            intravenous infusion                 cascaded list (MSP-0900)
  paracetamol + tramadol
                                            other...
  paracetamol +
  pseudoephedrine
  paracetamol +
  phenylephrine

  aspirin + paracetamol
                    Standard matches

  ascorbic acid +
  paracetamol
  caffeine + paracetamol

  diphenhydramine +
  paracetamol
 Showing 9 of 32 matches.
                            Show all

                                                                                 This example is incorrect because
                        Commonly prescribed matches                              the width of the search results list
                                            oral                                 has not been reduced to
     paracetamol                                                                 accommodate the next cascading
                                            rectal
                                                                                 list (MSP-0900) and because the
     paroxetine                                                                  cascaded list obscures the search
                                            intravenous infusion
                                                                                 results list (MSP-0910)
     aspirin + paracetamol
                                            other...
     paracetamol + tramadol

     paracetamol + pseudoephedrine

     paracetamol + phenylephrine
                                       Standard matches

     ascorbic acid + paracetamol

     caffeine + paracetamol

     diphenhydramine + paracetamol
    Showing 9 of 32 matches.               Show all

                                                                                                              Page 86
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

                                                                              In this sequence of correct
1                                                                             examples:
                                                                              1. A list of search results is
                    Commonly prescribed matches                  1    2          displayed
 paracetamol                                                                  2. A cascading list is displayed on
                                                                                 selection of a drug, causing the
 paroxetine                                                                      width of the search results list
                                                                                 to be reduced. The search
 aspirin + paracetamol                                                           results list is automatically
                                                                                 expanded (MSP-0930) and has
 paracetamol + tramadol                                                          a scroll bar so that the
                                                                                 selection can be kept in view
 paracetamol + pseudoephedrine                                                   (MSP-0920).
 paracetamol + phenylephrine
                                Standard matches

 ascorbic acid + paracetamol

 caffeine + paracetamol
 diphenhydramine + paracetamol

 domperidone + paracetamol
 isometheptene + paracetamol
Showing 9 of 32 matches.
                                     Show all

2
paroxetine
                                          oral
paracetamol +
phenylephrine                             other...
paracetamol +
pseudoephedrine

paracetamol + tramadol

aspirin + paracetamol
                 Standard matches

ascorbic acid +
paracetamol
caffeine + paracetamol

diphenhydramine +
paracetamol
domperidone +
paracetamol

isometheptene +
paracetamol

                                                                                                            Page 87
                    Design Guidance – Medications Management – Search and Prescribe
                    Prepared by Microsoft, Version 3.0.0.0
                    Last modified on 20 January 2010

                                                          This example is not recommended
                                                          because the selected drug is not
                                                          visible and the user would have to
                                                          scroll down in the first list to see it
                                                          (MSP-0920)

                                                          In this correct example, the lists
                                                          from which ‘diltiazem’ and ‘oral’
                                                          were selected are visible
                                                          throughout the cascade selection
                                                          (MSP-0920)

                                                                                         Page 88
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

                                                                                                         This example is not recommended
                                                                                                         because the lists from which
                                                                                                         ‘diltiazem’ and ‘oral’ were selected
                                                                                                         are not visible (MSP-0920)

                                                                                                         This example is not recommended
                                                                                                         because the lists from which
                                                                                                         ‘diltiazem’ and ‘oral’ were selected
                                                                                                         are not visible (MSP-0920)

Rationale
Design Analysis – List Widths:
When a search results list is displayed without a cascaded list, there is no need to restrict the width of the list to accommodate the
cascading lists that are not yet displayed. By allowing the full width available in the prescribing area to be used, the risks associated
with wrapping drug names are mitigated as far as possible. Once a selection has been made, and a cascaded list is displayed, the
search results column can narrow so that the cascaded list can appear in a consistent place (MSP-0900). When this narrowing
happens, the drug selected in the search results should remain visible. In some unusual cases, this may require a scroll bar to be
introduced (as if the list had been manually extended, see section 5.3.6) and the drugs originally at the top of the list may be scrolled
out of view.
Reducing the width of the search results list may cause drug names to wrap and the limited height may then cause fewer matches to
be visible than before the cascaded list appeared. The loss of visibility of the last few items in that search results list is outweighed by
the benefit of providing visibility of, and access to, the search results list whilst selections are made in the cascading lists. It is
expected that a prescriber will rarely return to the search results list to select an alternative drug after already selecting options in the
cascading lists.

                                                                                                                                       Page 89
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

This approach to managing the width of the search results lists avoids the following potential risks:
 Truncation of drug names (see Design Guidance – Medication Line {R3}) or items in cascading lists
 The unnecessary partial display (partially off-screen) of a cascading list as a result of limited screen space, when a reduced width
  search results list would bring the cascading list back into view
When a cascading list is presented with options that are not expected (because of a mis-selection) the intended selection is still
visible, thus allowing the mistakes to be confirmed
Design Analysis – Maintaining Visibility of Selections:
Keeping the selection lists open as prescribers make their selections allows them to continue seeing their selections in context
(MSP-0910, MSP-0920). Visibility of both the list and their selection may improve the speed at which prescribers notice when they
have mis-selected. The list that is presented after a selection has been made is also providing visual feedback. When this list does not
present the options expected, it is even more likely to help the prescriber spot a mis-selection.
Keeping the cascading lists open so that selections are displayed within the list from which they were selected achieves the following:
 Provides positive feedback for the selection
 Improves feedback for mis-selections since the intended selection is still visible (but not selected or highlighted)
 When a cascading list is presented with options that are not expected (because of a mis-selection) the intended selection is still
  visible, thus allowing the mistakes to be confirmed and corrected quickly
 Cascading lists also enhance a sense of place and provide feedback for progress through the simple two to three-step selections
The cascade select approach is designed to keep the right balance between:
 A system that allows medications to be prescribed with an absolute minimum of interaction
 A system that mitigates the risks of being able to complete a prescription without paying enough attention to the details
Cascading lists guide selections in such a way that reduces the potential for mistakes and inappropriate selections.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Help users recognise, diagnose and recover from errors – By retaining the cascading lists open even when a selection has been
  made, and ensuring that they are not obscured, users can see their selection within the context of the list it was selected from and
  have a greater opportunity to notice when they have mis-selected
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                             Mitigations:
    A prescriber mis-selects a prescription       MSP-0920 requires that selections in cascading lists remain visible until the last
     element because lists contain too many         cascading list (until template prescriptions are presented or fields are presented
     similar options                                step by step)
    A selection list in the prescribing area      Pressing the ESC key or clicking outside of a list are mechanisms that can be
     may obscure important information in a         used to close a list without making a selection (see section 9.3.1)
     list of current medications                   Selection lists can collapse once a selection has been made if necessary to
                                                    preserve visibility of other information (MSP-0920)
    Selections in the search results list and     This risk is not wholly mitigated by guidance
     cascading lists are mis-interpreted           The cascading list that is displayed on selection contains only options that are
     because they are not (or may not be)           relevant to the selection and thus may not contain the expected options (see
     horizontally aligned                           section 6.3.1) in the event of a mis-selection
                                                   Cascading lists are presented one at a time after a selection has been made in
                                                    the previous list (see section 6.3.1)
                                                   When space is limited such that cascading lists obscure other information, the list
                                                    collapses (MSP-0920)

                                                                                                                                     Page 90
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

6.3.3       Contents of Cascading Lists
 Drug search results, cascading lists and other selection lists can be divided into sections in order to
 bring prioritised list items to the top of a list. See section 5.3.12 for guidance on prioritisation within
 a search results list and section 9.3.3 for guidance on prioritisation within selection lists used as
 input controls.

                                                                                                                              Evidence
 ID          Guideline                                                                                 Conformance
                                                                                                                              Rating
 MSP-0940    Include a list item in each cascading list that provides access to values that are not Mandatory                 Medium
             in the list (where they exist)

 MSP-0950    Place the list item that provides access to values that are not in the list last in the   Mandatory              Medium
             list and separate it from the rest of the list items with a horizontal line

 MSP-0960    Do not provide keyboard shortcuts for the item that provides access to values that        Mandatory              Medium
             are not in the list

 MSP-0970    Where relevant, allow a selection to be made from a cascading list that                   Recommended            Medium
             differentiates preparations with different bio-availability properties (such as
             modified release)

 Usage Examples
                                                                                                       In this correct example, the
                                                                                                       cascading list includes a list item
                                                                                                       (‘other…’) that provides access to
                                                                                                       other values that are not in the list
                                                                                                       and this list item is separated from
                                                                                                       the main list with a horizontal line
                                                                                                       (MSP-0940, MSP-0950)

                                                                                                       This example is incorrect because
                                                                                                       the cascading list does not include
                                                                                                       a list item (‘other…’) that provides
                                                                                                       access to other values that are not
                                                                                                       in the list (MSP-0940)

                                                                                                       This example is incorrect because
                                                                                                       the list item (‘other…’) that
                                                                                                       provides access to other values
                                                                                                       that are not in the list is not
                                                                                                       separated from the other options in
                                                                                                       the list with a horizontal line
                                                                                                       (MSP-0950)

                                                                                                                                     Page 91
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                                       In this correct example, the
      dilt                                                                                             selection list differentiates between
        diltiazem                  oral              tablets and capsules
                                                                                                       modified-release and non-modified
                                                                                                       release preparations (MSP-0970)
                                   cutaneous         modified-release

                                    other...          liquid

                                                      other...

 Rationale
 Design Analysis:
 Cascading lists are designed for quick and safe selection of drugs and other attributes. Supplementing these lists with a ‘catch-all’
 option allows the same process to remain effective for unusual and specialist prescribing. This approach allows the selection of
 unlisted options or unusual combinations (for example, unusual route and form combinations) at every step of the process.
 The provision of a list item that provides access to values that are not in the list (MSP-0940) provides an exit from the step-by-step
 approach of the cascading lists that takes the prescriber directly to a detailed prescription form. This approach allows unusual and
 specialist prescribing to be accommodated within the same process as more common prescribing.
 Cascading lists should be used to differentiate modified-release preparations from non-modified-release preparations (MSP-0970).
 This avoids the display of a list of template prescriptions that contains a mixture of modified-release preparations and non-modified-
 release preparations.
 Desk Research:
 Guidance in this section is informed by the following Nielsen heuristic {R17}:
  User control and freedom – The ‘catch all’ option allows the user to access less frequently used options and to switch to viewing a
   prescription form earlier in the process
 User Research:
 Study ID 46 (see APPENDIX E) recommends avoiding the display of lists containing both modified-release and non-modified-release
 templates.

6.3.4        Providing Cascading Lists for Brands
 When a prescriber selects a brand name from a search results list, there are three possible types of
 match that affect the options that should be available from the subsequent cascading list:

      1. On selection of a brand name that does not have a generic name (such as DIORALYTE or
         GAVISCON) cascading lists (such as route and form) will be displayed in the same way as
         those presented for generic drugs. A cascading list may not need to be presented if the
         brand name is for a single drug or group of drugs that do not need further attributes in order
         to determine the type of medication (and thus which fields are required). See Figure 13

      2. On selection of a brand name that does have a generic equivalent, a cascading list
         containing both the brand selected and generic equivalents should be displayed. See
         Figure 14

      3. On selection of a brand name for which the display (and selection) of a generic equivalent
         is not recommended (for example, because an equivalent may not be truly bio-equivalent),
         cascading lists will be displayed for the brand only. See Figure 15

                                                                                                                                    Page 92
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

These three cases are illustrated in Figure 13, Figure 14 and Figure 15:

Figure 13: Selection of a Brand Name That Does Not Have a Generic Name

  teno

    tenofovir                                                                                atenolol – oral

   tenoxicam                                                                                 TENORMIN – oral
    emtricitabine + tenofovir                                                                other...
    chlortalidone + atenolol + co-tenidone – TENORET

    chlortalidone + atenolol + co-tenidone – TENORETIC

    atenolol – TENORMIN

Figure 14: Selection of a Brand Name That Has a Generic Equivalent (That Is Recommended to Display)

  dil

           Commonly prescribed matches
                                                      DILZEM SR – oral – modified-release
    diltiazem
                                                      other...
                          Standard matches

    diloxanide

    diltiazem – DILCARDIA

    diltiazem – DILZEM

   diltiazem – DILZEM SR

    diltiazem – DILZEM XL

Figure 15: Selection of a Brand Name for Which There Are No Generic Equivalents (That Are Recommended to Display)

                                                                                                                    Page 93
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                                                       Evidence
ID           Guideline                                                                            Conformance
                                                                                                                       Rating
MSP-0980     When a brand name is selected for which generic equivalents are available,           Mandatory            Medium
             present a cascading list that includes options for the selected brand and for
             generic equivalents

MSP-0990     When a brand name is selected for which there are no generic equivalents             Mandatory             Medium
             displayed, present template prescriptions for the brand (or proceed to a
             step-by-step approach)

MSP-1000     When a cascading list is presented that includes options for the selected brand      Recommended          Medium
             and for generic equivalents, include the drug names (generic and brand
             respectively) in the cascading list

MSP-1010     When a cascading list includes options for the selected brand and for generic        Recommended          Medium
             equivalents, divide the list into two parts

MSP-1020     Display generic equivalent options above specific brand options in cascading lists   Recommended          Medium

Usage Examples
                                                                                                  In this sequence of correct
     1                                                                                            examples (MSP-0980, MSP-0990
                                                                                                  MSP-1000, MSP-1010):
     teno
                                                                                                  1. The brand ‘TENORMIN’ is
                                                                                    1   2
      tenofovir                                                                                      selected in the search results
                                                                                                     list
      tenoxicam
                                                                                                  2. A cascading list with two parts
      emtricitabine + tenofovir
                                                                                                     is presented with options for
      chlortalidone + atenolol + co-tenidone – TENORET                                               generic equivalent drugs first
                                                                                                     and options for the specific
      chlortalidone + atenolol + co-tenidone – TENORETIC
                                                                                                     brand second.
      atenolol – TENORMIN

     2

     teno

      tenofovir                                                       atenolol – oral

      tenoxicam                                                       TENORMIN – oral
      emtricitabine + tenofovir                                       other...
      chlortalidone + atenolol + co-tenidone – TENORET

      chlortalidone + atenolol + co-tenidone – TENORETIC

      atenolol – TENORMIN

                                                                                                                              Page 94
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                                                       This usage example is incorrect
                                                                                                       because a (recommended) generic
                                                                                                       equivalent exists and has not been
                                                                                                       displayed (MSP-0980)

                                                                                                       This example is not recommended
     teno                                                                                              because the generic equivalent
                                                                                                       options have been displayed below
      tenofovir                                                        TENORMIN – oral
                                                                                                       the branded options in the
      tenoxicam                                                        atenolol – oral                 cascading list (MSP-1020)
      emtricitabine + tenofovir                                        other...
      chlortalidone + atenolol + co-tenidone – TENORET

      chlortalidone + atenolol + co-tenidone – TENORETIC

      atenolol – TENORMIN

Rationale
Design Analysis:
Prescribers may search by brand name because they want to prescribe that specific brand or because they want to find out the
generic name and then prescribe an equivalent (see section 5.3.7). When a brand name is selected in the search result list, the
prescriber has the following choices:
1. Proceed with prescribing that specific brand
2. Prescribe a generic equivalent
3. Type in text to search for the generic drug name and select it from the search results list (cascading lists will then include options
   that may not be equivalent to the brand that was searched for originally)
After selections are made from the cascading lists, template prescriptions will be displayed and these may include brand names even if
the selections so far have been generic.
Guidance balances the need to be able to prescribe a generic equivalent to a brand name with the need to look up the generic name
of a branded drug. It achieves the following:
 Provides easy access to prescribing a generic equivalent (MSP-0980)
 Allows the generic name to be discovered
 Mitigates the risk that the prescriber will search for a brand and then ‘switch’ to prescribing the generic drug without understanding
  that the generic is not equivalent
The following alternative design approaches were assessed:
 Reverting to the generic drug name (where one exists) when a brand is selected from the search results list
 Displaying the brand and generic equivalents in a cascading list when a brand is selected from the search results list (this is the
  recommended approach)
 Displaying the brand and generic drug (not necessarily equivalent to the brand) in a cascading list when a brand is selected from
  the search results list
 Displaying brands in the search results list such that they cannot be selected
 Not displaying brands (for which there are generic drug names) in the search results list such that every prescription must start with
  a generic drug (or brand for which there is no generic drug)
Guidance maintains a balance between an approach that forces the prescriber to start again by searching for the generic name and
one that avoids the need for a second search when the prescriber wants to switch to a generic equivalent.
In some instances, the selection of a brand name in the search results may be followed by the presentation of a cascading list that only
contains a brand. This simply re-confirms the selection of a brand and clearly communicates that there are no equivalents to display.

                                                                                                                                    Page 95
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

The following scenarios are possible on selection of a brand name in a search results list:
 Template prescriptions are displayed for the branded drug. The prescriber selects a template prescription or returns to the search
  input box and searches for the generic name
 The next required fields are presented step by step for the branded drug. The prescriber completes those fields or returns to the
  search input box and searches for the generic name
 A cascading list is displayed that shows the branded drug and one generic equivalent. The prescriber can continue with the brand
  or can select the generic equivalent to prescribe generically or to see a list of template prescriptions containing alternative (and
  equivalent) brands
 A cascading list is displayed that shows more than one branded drug and more than one generic equivalent. The brands and
  equivalents should be supplemented with information (such as route and form) that allows the prescriber to differentiate these
  products
Prescribing a generic equivalent may not be a valid choice if all possible prescriptions for the selected brand name require a brand to
be specified as part of the prescription.
Once a selection has been made in the cascading list, the next step is the same as if a generic name had been selected in the search
results list: template prescriptions are displayed (MSP-0990) and a step-by-step approach may used to complete the prescription (see
section 7.3.6).
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 User control and freedom – By displaying generic equivalents, the user can choose to switch to generic prescribing (instead of
  prescribing the specific brand) without having to search for the generic name
 User control and freedom – The guidance promotes generic prescribing whilst allowing the user to search for and prescribe by
  brand at this stage as well as at later stages of the prescribing process
 Flexibility and efficiency of use – By allowing a brand to be selected and providing an opportunity to switch to a generic equivalent
  without introducing any further steps, the need to start a new search is avoided thus making the process more efficient
User Research:
Study ID 46 (see APPENDIX E) elicited feedback on alternative design approaches for selecting a brand name and proceeding
through to a prescription form. The findings confirmed that the display of a mixture of template prescriptions for both the specific brand
and for the generic drug increased the risk of confusion and misinterpretation. Guidance for cascading lists thus ensures that the
choice between a specific brand and a generic equivalent is made before template prescriptions are displayed (MSP-0980,
MSP-0990).
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
is partially mitigated by the guidance:
   Potential Hazards:                  Mitigations:
    Prescriber searches for a          This risk is not wholly mitigated by guidance
     brand name and then                Only options for the specific brand and generic equivalents for that specific brand should be
     prescribes a generic name           presented in cascading lists when a brand name is selected in search results (MSP-0980)
     thinking that the generic is
                                            Note
     equivalent
                                            This is a partial mitigation since in some cases a generic name will be pharmaceutically
                                            equivalent but not bioequivalent.

                                                                                                                                   Page 96
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

7            GUIDANCE DETAILS FOR REQUIRED ATTRIBUTES

7.1          Introduction
    The selection of a drug name and some other attributes in cascading lists allows the system to
    determine the type of drug being prescribed. The definition of the remaining required attributes can
    be made easier by presenting options that are only relevant to the selected drug type. Template
    prescriptions (order sentences) are predefined and partially completed prescriptions that allow
    several attributes to be defined with a single selection from a list.
    In the absence of template prescriptions, a prescription can be defined using the step-by-step
    approach or the full prescription form. In a step-by-step approach some or all of the remaining
    required fields are presented and completed one by one. Guidance for the step-by-step approach
    and the remaining steps is covered in section 9.
    Figure 16 shows the full user interface prescribing process in which the steps covered in this
    section are shown with a grey background:

    Figure 16: The Prescribing Process – Select a Template Prescription
                                                                                                     Page 97
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

 Figure 17 is an extract from Figure 5 to illustrate the user interface prescribing steps that are
 covered in this section showing the template prescriptions step and links to and from other steps:

 Figure 17: User Interface Prescribing Steps for Completing Required Fields – Template Prescriptions and Step by Step

7.2       Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Increase efficiency by prioritising the prescription of commonly prescribed medications over
        less commonly prescribed medications:
                 Template prescriptions are a means of defining commonly prescribed regimens so that
                  many prescription values can be defined with a single selection
       Maximise safety in the absence of decision support systems by designing for the reduction
        of errors from invalid or inappropriate selections or entries:
                 The provision of template prescriptions reduces the number of individual selections that
                  need to be made for a prescription and provides access to combinations of values that
                  are unlikely to be invalid
                 Template prescriptions can be used to display standard regimens that an organisation
                  may wish to promote
       Encourage simplicity of design by promoting user interface approaches that help to avoid
        overly complex displays and interactions that require many controls:
                 Template prescriptions allow several values to be selected at once and those options
                  are displayed in a format similar to a final prescription
       Maximise scalability such that the prescribing process can be modified to accommodate
        additional information, steps or shortcuts:
                 Template prescriptions can contain whichever values are most useful or relevant and
                  can be supplemented with descriptive text if necessary

                                                                                                                        Page 98
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

       Adhere to a user interface strategy that gives the impression of making progress within a
        single space (which has all the necessary information immediately or readily available) and
        avoids the impression of needing to move between many different spaces:
             As with drug search results and cascading lists, template prescriptions are presented
              within the same space as a prescription is built up

7.3      Guidelines
7.3.1        Displaying Template Prescriptions
                                                                                                                      Evidence
 ID           Guideline                                                                         Conformance
                                                                                                                      Rating
 MSP-1030     Require at least drug name and route (or attributes from which the type of        Mandatory             High
              medication can be derived) to be selected before template prescriptions are
              displayed

 MSP-1040     Display template prescriptions only after selections have been made (manually     Mandatory             Medium
              or automatically) in all other cascading lists

 MSP-1050     Keep the number of template prescriptions displayed to a practical and useful     Recommended           Medium
              minimum

 Usage Examples
                                                                                    In this correct example, at least drug name and
                                                                                    route (or attributes from which the type of
                                                                                    medication can be derived) are selected before
                                                                                    template prescriptions are displayed (MSP-1030)

                                                                                    In this correct example, at least the drug name
                                                                                    and one other option (from which the type of
                                                                                    medication can be derived) are selected before
                                                                                    template prescriptions are displayed (MSP-1030)
                                                                                    This correct example is an alternative to the
                                                                                    previous usage example.

                                                                                    This example is incorrect because template
                                                                                    prescriptions are displayed immediately after the
                                                                                    drug name. At least one other option (from which
                                                                                    the type of medication can be derived) must be
                                                                                    selected before template prescriptions are
                                                                                    displayed (MSP-1030)

                                                                                    This example is incorrect because template
                                                                                    prescriptions are displayed even though a
                                                                                    selection has not yet been made from the
                                                                                    cascading list (containing ‘option 1, option 2,
                                                                                    option 3’) (MSP-1040)

                                                                                                                                Page 99
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

Rationale
Design Analysis:
Cascading lists are designed to create a quick, two or three step series of selections so that the type of medication can be determined
and then either template prescriptions (if available) or a series of further fields (such as dose, frequency and duration) can be
presented step by step. After the cascading lists have succeeded in helping the prescriber quickly establish the type of medication
being prescribed, they are not needed for the remaining attributes. By using the cascading lists to determine the type of medication
(MSP-1030, MSP-1040), the list of possible template prescriptions will be as short as possible. Hence, the principle of selecting from
short lists of options can continue with the selection of a template prescription.
Template prescriptions are a means of improving the efficiency of the prescribing process by allowing a number of values to be
selected with a single selection. They are also a means of providing access to prioritised sets of values for drugs that are commonly
prescribed and, conversely, demoting access to less frequently selected values and combinations.
As with Quick Lists, search results and cascading lists, a list of template prescriptions needs to be kept short to improve efficiency and
minimise opportunities for mis-selection (MSP-1050).
Desk Research:
In Using information technology to reduce rates of medication errors in hospitals {R32}, the use of an ePrescribing system is reported
to improve safety by:
 Introducing template prescriptions that include dose route and frequency
 Ensuring that all (prescriptions) are legible and that the prescriber can be identified
 Providing information to the prescriber during the process
 Checking all prescriptions for a number of problems including allergies, drug interactions, overly high doses, drug-laboratory
  problems and whether the dose is appropriate for the patient’s liver and kidney function
A later study, reported in Prescribing errors in hospital inpatients: their incidence and clinical significance {R33}, found errors in 1.5%
of the 36,200 medication orders that were analysed. Most of the errors (54%) were associated with choice of dose. Errors such as the
following two (as quoted from the study) could potentially have been mitigated by the provision of template prescriptions:
 ‘An elderly patient was prescribed 10 ml IV diazepam (equivalent to 50 mg) to be given when required, instead of the intended
  10 mg’
 ‘Captopril 250 mg twice daily was prescribed when 25 mg twice daily was intended’
The ePrescribing Functional Specification {R12} requirement GEN.OS.040 states that a prescribing system must support the selection
of a treatment option according to predefined regimens (such as template prescriptions).
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Error prevention – Template prescriptions are displayed only when enough information has been selected from cascading lists so
  that the list of template prescriptions will be as short as possible thus helping to avoid mis-selection
 Flexibility and efficiency of use – Shorter lists of template prescriptions also lighten the cognitive load of reviewing and selecting
  from the list
User Research:
All 14 participants in Study ID 69 (see APPENDIX B) understood what the template prescriptions were when they were presented after
a drug and route had been selected. The interpretation of template prescriptions is influenced by their contents, the way in which
displayed (and formatted) and the point at which they are presented (MSP-1040).
In Study ID 46 (see APPENDIX E) participants reviewed alternative designs in which the template prescriptions were displayed at
various stages of the prescribing process, with as little as just the drug name or as much as the drug, route and form being selected
before template prescriptions were displayed. The study findings include a recommendation for the approach in which the drug and
route are selected before template prescriptions are displayed (MSP-1030).

                                                                                                                                   Page 100
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
 some of which are mitigated and some partially mitigated by the guidance:
      Potential Hazards:                                             Mitigations:
       A template prescription with an unlicensed dose is            This risk is not mitigated by guidance
        selected and prescribed inappropriately
       A large number (such as 25) of template prescriptions  The number of template prescriptions presented in one list is limited
        causes a prescriber to select the first one in the list by the selection of drug name and further attributes (that define the
        without reading the full list                           type of medication) in cascading lists (MSP-1030, MSP-1040)
                                                                      MSP-1050 requires the number of templates prescriptions in a list to
                                                                       be limited
       A prescriber selects an inappropriate template                This risk is not mitigated by guidance
        prescription on the assumption that the template              Mitigations for this risk are out of scope, see section 1.2.2
        prescriptions presented have been validated against
        information (such as age, weight, test results,
        diagnoses and so on) available in the patient record
       A prescriber selects the template prescription from           This risk is not mitigated by guidance
        the top of the list without reviewing the alternatives

7.3.2         Displaying a Selection Trail
                                                                                                                                 Evidence
 ID              Guideline                                                                                 Conformance
                                                                                                                                 Rating
 MSP-1060        When a selection has been made in the last cascading list, display a selection trail Mandatory                  Medium

 MSP-1070        Where space is limited such that text within the list of template prescriptions may Mandatory                   Medium
                 wrap onto a new line, display the whole list of template prescriptions on a new line
                 (below the other input controls)

 MSP-1080        When an item in a selection trail is selected, reopen the lists for all the items in the Recommended            Medium
                 selection trail

 MSP-1090        When lists are reopened before a template prescription has been selected, remove Recommended                    Medium
                 the list of template prescriptions from view

 MSP-1100        When lists are reopened, display them all as they were before the template                Recommended           Medium
                 prescriptions were displayed

 Usage Examples
                                                                                                        In this correct example, a selection
                                                                                                        trail consisting of a text box for each
        cla
                                                                                                        selection (drug name and route) is
                                                                                                        displayed and template prescriptions
        clarithromycin                     oral                  DOSE 250 mg        twice a day
                                                                                                        are shown to the right of the
                                                                 DOSE 500 mg        twice a day         selection trail (MSP-1060)
                                                                 other...

                                                                                                                                       Page 101
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                        In this correct example in which
                                                                        space is limited, a selection trail
                                                                        consisting of a text box for each
                                                                        selection (drug name and route) is
                                                                        displayed and template prescriptions
                                                                        are displayed below the selection
                                                                        trail (MSP-1060, MSP-1070)

                                                                        This example is incorrect because
                                                                        the selections made in the search
cla                                                                     results list and two cascading lists
                                                                        are not displayed as text boxes
clarithromycin > oral                                                   (MSP-1060)

DOSE 250 mg       twice a day

DOSE 500 mg       twice a day

other...

                                                                        In this sequence of correct examples
                                                                        (MSP-1080, MSP-1090):
                                                                        1. A selection has been made in the
                                                                           only cascading list and template
                                                                           prescriptions are displayed
                                                                        2. The selection of an item (‘oral’) in
                                                                           the selection trail causes both
                                                                           cascading lists to reopen and
                                                                           template prescriptions are
                                                                           removed from view, such that the
                                                                           cascading lists are displayed as
                                                                           they were before the template
                                                                           prescriptions were first displayed.

                                                                                                      Page 102
               Design Guidance – Medications Management – Search and Prescribe
               Prepared by Microsoft, Version 3.0.0.0
               Last modified on 20 January 2010

Rationale
Design Analysis:
Selections made in cascading lists are designed to allow the type of medication to be determined quickly so that a minimum set of
required fields can then be displayed. Selections in cascading lists need to be made quickly and accurately. The efficiency of those
selections is improved by keeping the lengths of the lists to a minimum. The selection trail (MSP-1060) is designed to improve
accuracy by making it easier to notice and to change mis-selections whilst directing attention on the next step.
The selection list provides immediate access to the selections and the lists from which they were selected, thus increasing the
chances that the mis-selection is noticed.
The selection trail was assessed alongside alternative approaches that required navigational controls (such as those needed when
moving from one page to another). These controls (such as back and forward buttons) were assessed as an alternative means of
moving from the process of selecting from cascading lists to the process of selecting a template prescription and vice versa.
The following disadvantages are associated with an approach that requires navigational controls:
 It introduces unnecessary segmentation of the information that can be effectively displayed on screen simultaneously
 Additional controls (such as back and forward buttons) are needed for the approach to be effective
 Moving from one screen to another creates the perception of greater complexity and has a slower response time compared to a
  series of steps that can be completed in one place and that remain visible and directly accessible
An approach in which an ‘undo’ control is provided has similar constraints. The provision of an ‘undo’ control is unnecessary provided
the prescriber has visibility of, and direct access to, values already entered into controls so that they can be changed. (MSP-1080,
MSP-1090, MSP-1100).
Desk Research:
The selection trail, the re-display of cascading lists and the ability to edit any value entered into an input control are examples of
supporting ‘undo’. About Face: The Essentials of Interaction Design {R34} describes the principle of supporting reversal or change of
one or more previous actions in a way that enables exploration and avoids implying a user failure.
GUI Bloopers: Don’ts and Do’s for Software Developers and Web Designers refers to the principle of ‘display inertia’. This principle
suggests that when a display is updated to show the effect of a user’s actions, the changes should be minimised such that as much of
the display as possible remains unchanged. This principle is reflected by guidance that recommends a solution that does not depend
on navigation controls (and thus an implied presentation of a new display) {R35}.
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                  Mitigations:
    A drug name is mis-selected        This risk is not wholly mitigated by guidance
     in the search results list         The list is limited in length (see section 5.3.5) and progressive matching is recommended
                                         (see section 5.3.3) to encourage selection from shorter lists
                                        Search results are prioritised (see section 5.3.12) and listed in matched order before
                                         alphabetical order to maximise logical grouping (see section 5.3.8)
                                        Cascading lists are kept open, such that each selection is visible in the context of the list
                                         from which it was selected, until enough attributes have been selected to be able to
                                         determine the type of medication and to display template prescriptions (MSP-1080 and see
                                         section 6.3.1)
    One or more attributes of a  Template prescriptions can be displayed at the beginning of a new line after selections have
     template prescription are     been made from cascading lists (MSP-1070)
     mis-read because it wrapped  Attributes can be combined into a single column to reduce the number of columns (and thus
     onto a new line               the width of the template prescriptions) and medication line style can be used when space
                                   is limited (see section 7.3.3)
                                        Dose is always displayed at the beginning of a template prescriptions and is thus always
                                         consistently placed (see section 7.3.3)
                                        The number of attributes defined by a template prescription should be kept to a minimum
                                         (see section 7.3.4)

                                                                                                                                  Page 103
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

7.3.3        Template Prescription Layout
                                                                                                                                Evidence
 ID                Guideline                                                                              Conformance
                                                                                                                                Rating
 MSP-1110          Present template prescriptions in a list without column headings                       Mandatory             Medium

 MSP-1120          Where necessary, combine attributes into a single column to reduce the number of Recommended                 Medium
                   columns

 MSP-1130          Display dose or a dose equivalent at the beginning of each template prescription       Mandatory             Medium

 MSP-1140          When space is limited, display template prescriptions in the style described in        Recommended           Medium
                   Design Guidance – Medication Line {R3}

 MSP-1150          Do not allow horizontal scrolling of a list of template prescriptions                  Mandatory             Medium

 Usage Examples
                                                                                                     This example is incorrect because the
                                                                                                     template prescriptions are displayed in
                                                                                                     a table with column headings
                                                                                                     (MSP-1110)

                                                                                                     In this correct example, attributes for
      paracetamol              oral                                                                  form and frequency are displayed in
                                                                                                     the same column since only one of the
                                                                                                     template prescriptions has a form
      DOSE 500 mg               four times a day                                                     (MSP-1120)

      DOSE 1 g                  oral solution – four times a day

        other...

                                                                                                     This example is not recommended
                                                                                                     because form (‘oral solution’) is
                                                                                                     displayed in a separate column and
                                                                                                     the first template prescription does not
                                                                                                     have a form (MSP-1120)

                                                                                                     In this correct example, the template
                                                                                                     prescriptions are presented in a list
                                                                                                     without column headings and dose is
                                                                                                     displayed at the beginning of the
                                                                                                     column (MSP-1110, MSP-1130)

                                                                                                                                    Page 104
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

                                                                                                   In this correct example of a list of
                                                                                                   template prescriptions displayed in a
                                                                                                   constrained space, the template
                                                                                                   prescriptions are displayed in the style
                                                                                                   of a medication line and the number of
                                                                                                   columns has been kept to a minimum
                                                                                                   (MSP-1140, MSP-1120)

                                                                                                   This example is incorrect because a
                                                                                                   horizontal scroll bar has been used in
                                                                                                   a list of template prescriptions
                                                                                                   (MSP-1150)

Rationale
Design Analysis:
Template prescriptions include different attributes depending on the type of medication (determined by selections made in the
preceding cascading lists). For example, the template prescriptions for a fluid may contain volume and rate whilst the template
prescriptions for a modified-release product may include a brand name.
The following three designs with varying levels of structure were compared:
 A table with many columns, each displaying one attribute of the template prescription
 A table in which there are fewer columns and some columns contain more than one attribute
 A list (in a single column) in which each line item was displayed as a medication line, thus combining all the attributes for the
  template prescription into one line
Template prescriptions are displayed in a list rather than a table (MSP-1110) in order to maximise the use of space. Design Guidance
– Medications List {R1} contains a more detailed analysis of the pros and cons of using a table with many columns versus using a
more flexible layout in which attributes that could otherwise be displayed in separate columns are combined into a single column
(MSP-1120). Horizontal scrolling in a list of template prescriptions introduces the risk that information is missed because it is off screen
(to the right) and the presence of the scroll bar is not noticed (MSP-1150).
By using medication line style to group attributes into a single column and reduce the number of columns the following is achieved:
 Each template prescription can have a set of values for different attributes without creating blank cells. (Blank cells may be
  interpreted as a system error and thus need to be populated with null values so that the user knows they are intentionally blank)
 The list can be displayed in a smaller space (because there are no columns containing a value for only one item in the list and
  because each line can wrap)
 Template prescriptions can be displayed in a format similar to that of a medication line (MSP-1140)
Column headings for columns that contain more than one attribute are unlikely to be useful since they will need to have labels that
describe the composite set of attributes rather than labels identifying specific attributes. For example, usage examples in Design
Guidance – Medications List {R1} show a column containing attributes such as drug name, dose, form and frequency that is labelled
‘Drug Details’.
When a dose is displayed in a list of template prescriptions, it is preceded by a dose label. The other attributes in a template
prescription should not need labels since the values of those attributes will be enough to identify them. The display of column headings
would create a barrier between the list and the input control from which it was activated (and to which it will ‘collapse’). The need to
avoid this is considered to outweigh the benefits that the column headings and their labels can bring (MSP-1110).

                                                                                                                                   Page 105
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Flexibility and efficiency of use – By using the medication line format to display template prescriptions the display is both more
  compact and more flexible (it can wrap) so less space is needed to display them
 Consistency and standards – Each template prescription begins with the dose (or equivalent) and it is recommended that template
  prescriptions are displayed following the same format as a medication line
User Research:
Study ID 46 (see APPENDIX E) found that the use of a table with many columns was preferred. The preference appears to come from
the need to compare attributes between template prescriptions and to pick out specific information (such as dose) more easily. The
examples used for testing showed template prescriptions in five columns and each template prescription included a minimum of four
attributes and a maximum of six. The need to compare across template prescriptions may have been a reflection of the large number
of columns and attributes in the template prescriptions used for testing.
The display of dose first (MSP-1140) helps to mitigate the concern that it may be difficult to compare important information between
template prescriptions. Guidance allows the use of a limited number of columns so that attributes, such as dose, can be placed at the
beginning of the text in a column and thus easily compared across template prescriptions.
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                           Mitigations:
    A template prescription is selected       A horizontal scroll bar should not be used for lists of template prescriptions
     from a list with a horizontal scroll bar   (MSP-1150)
     and one of the attributes being defined
     was missed because it was off screen
    A template prescription is selected         Template prescriptions are presented without column headings (MSP-1110)
     based on reading the contents of a          The number of columns is kept to a minimum (MSP-1130)
     single column (for example, the dose
                                                 Template prescriptions are displayed in the style of a medication line (MSP-1140)
     column)
                                                 The number of attributes in a template prescription is kept to a minimum (see
                                                  section 7.3.4)
    A prescription is not wholly reviewed       Guidance recommends that the number of different types of controls are minimised,
     because the information is displayed         which reduces the different display formats (see section 8.1)
     in different formats, split across many     Selection lists are used to combine values (such as those in a template
     different controls                           prescription) and display them a format similar to that displayed in a medication line
                                                  (MSP-1140)
                                                 Guidance recommends combining controls into a single control (see section 9.3.1)
    One or more attributes of a template        Template prescriptions can be displayed at the beginning of a new line after
     prescription are mis-read because it         selections have been made from cascading lists (see section 7.3.2)
     wrapped onto a new line                     Attributes can be combined into a single column to reduce the number of columns
                                                  (and thus the width of the template prescriptions) and medication line style can be
                                                  used when space is limited (MSP-1120 and MSP-1140)
                                                 Dose is always displayed at the beginning of a template prescriptions and is thus
                                                  always consistently placed (MSP-1130)
                                                 The number of attributes defined by a template prescription should be kept to a
                                                  minimum (see section 7.3.4)

                                                                                                                                 Page 106
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

7.3.4            Contents of a Template Prescription
                                                                                                                                 Evidence
 ID               Guideline                                                                           Conformance
                                                                                                                                 Rating
 MSP-1160         Display only template prescriptions relevant to the drug and selections from        Mandatory                  Medium
                  cascading lists

 MSP-1170         Minimise (where possible, avoid) the number of template prescriptions that         Mandatory                   High
                  have only one attribute that is different from other template prescriptions in the
                  same list

 MSP-1180         Where possible include dose (or equivalent) and frequency in template               Recommended                High
                  prescriptions

 MSP-1190         Include strength in template prescriptions when it is required for this drug        Recommended                High

 MSP-1200         Include brand in template prescriptions when it is required for this drug           Recommended                High

 MSP-1210         When a template prescription includes supplementary information, display this Recommended                      Low
                  information in grey italics

 MSP-1220         Keep the number of attributes defined by a template prescription to a minimum Recommended                      Medium

 MSP-1230         Include an option to proceed directly to the prescription form without selecting    Mandatory                  Medium
                  a template prescription

 MSP-1240         Display the option for proceeding directly to the prescription form at the end of   Mandatory                  Medium
                  the list and separate it from the template prescriptions with a horizontal line

 Usage Examples
                                                                                                      In this correct example, the template
                                                                                                      prescriptions shown are for the drug
                                                                                                      and route selected in the previous lists
                                                                                                      and the template prescriptions contain
                                                                                                      dose and frequency (MSP-1160,
                                                                                                      MSP-1180)

                                                                                                      This example is incorrect because this
      salbutamol       inhaled – metered dose inhaler                                                 medication requires a strength and the
                                                                                                      last template prescription does not
      DOSE 2 puffs – 100 micrograms per puff – four times a day – as required                         include a strength (MSP-1190)
      DOSE 1 or 2 puffs – four times a day – as required

      other...

                                                                                                      This example is incorrect because this
                                                                                                      medication requires a brand name and
                                                                                                      the first template prescription does not
                                                                                                      include a brand name (MSP-1200)

                                                                                                                                     Page 107
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                                                    In this correct example, the list of
                                                                                                    template prescriptions includes
                                                                                                    supplementary information that is
                                                                                                    displayed in grey italics and has an
                                                                                                    option for accessing the detailed
                                                                                                    prescription form that is displayed in a
                                                                                                    section separated by a horizontal line
                                                                                                    (MSP-1210, MSP-1230, MSP-1240)
                                                                                                        Note
                                                                                                        The supplementary information in
                                                                                                        this example helps to differentiate
                                                                                                        between template prescriptions
                                                                                                        that would otherwise only differ in
                                                                                                        dose (MSP-1170)

                                                                                                    This example is incorrect because the
                                                                                                    list of template prescriptions does not
                                                                                                    include an option for accessing the
                                                                                                    detailed prescription form (MSP-1230)

Rationale
Design Analysis:
Template prescriptions are a means of completing several required fields (such as dose, frequency, strength and brand name) with a
single selection and prioritising the selection of predefined (potentially more common and more appropriate) combinations of those
required fields (MSP-1180, MSP-1190, MSP-1200). They can help to mitigate errors by presenting short lists of predefined sets of
values (and thus valid combinations) that are commonly prescribed.
In some circumstances, it may be appropriate to prescribe some drugs (such as warfarin) without a specific dose value or equivalent.
This is reflected in the conformance for guidance point MSP-1180 despite the high evidence rating.
Mis-selection errors in lists of template prescriptions can be reduced by ensuring that each template is sufficiently different from the
other templates in the list. For example, a list containing four template prescriptions, each of which only has one digit difference in a
strength or dose, creates a higher risk of mis-selection and should thus be avoided or at least minimised (MSP-1170).
A set of template prescriptions that contain many required values would create a complex list that would be more difficult to review and
from which it would be harder to make an accurate selection. A list of template prescriptions should therefore remain simple if it is to be
effective (MSP-1220).
The inclusion of dose in template prescriptions (MSP-1180) helps to mitigate the risk that an inappropriate dose is mistakenly entered.
The drug name and route (or selections that can determine the type of medication) allow the system to determine appropriate template
prescriptions to display and thus mitigate the risk that a dose is selected in error that was intended for a prescription of that drug by
another route.
Desk Research:
An example of a prescribing error involving selection of an inappropriate dose is reported in Prescribing errors in hospital inpatients:
their incidence and clinical significance {R33}: ‘An elderly patient was prescribed 10 ml IV diazepam (equivalent to 50 mg) to be given
when required, instead of the intended 10 mg.’ This kind of error can be mitigated by the provision of a set of template prescriptions
that include common dose values (MSP-1160).
The provision of template prescriptions may depend on a framework of medications types that can use a drug name and route (or form
or similar attribute) to determine what other information is needed to safely describe that medication. For example, a framework for
using the dm+d is defined in dm+d Implementation Guide (Secondary Care) {R4}.

                                                                                                                                   Page 108
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Flexibility and efficiency of use – Template prescriptions contain values for required fields in such a way that several required fields
  can be completed with a single selection
 Error prevention – The provision of template prescriptions for commonly prescribed sets of values may help to reduce mis-selection
  errors and mistaken combinations
 User controls and freedom – As with cascading lists, the user is not forced to select a template prescription and may choose to
  access a detailed prescription form instead of selecting a template prescription (MSP-1230)
User Research:
Study ID 46 (see APPENDIX E) included findings that relate to the display of modified-release and non-modified-release options in
cascading lists and in template prescriptions. The findings included a suggestion to consider clarification of release times when
displayed modified-release preparations. The use of supplementary text (MSP-1210) provides a means of achieving this.
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                           Mitigations:
    A template prescription is selected         Template prescriptions that have only one attribute that is different from other
     from a list of very similar template         template prescriptions in the same list should be minimised and where possible,
     prescriptions                                avoided (MSP-1170)
    A template prescription is selected         Template prescriptions are presented without column headings (see section 7.3.3)
     based on reading the contents of a          The number of columns is kept to a minimum (see section 7.3.3)
     single column (for example, the dose
                                                 Template prescriptions are displayed in the style of a medication line (see
     column)
                                                  section 7.3.3)
                                                 The number of attributes in a template prescription is kept to a minimum
                                                  (MSP-1220)
    An input control for a dose is           Dose and strength can be entered by selecting a template prescription (MSP-1180,
     displayed adjacent to an input control    MSP-1190) or by selecting values for individual fields that are presented in
     for a strength and causes the dose        sequence (see section 7.3.6). Thus they only appear adjacent after they have
     value to be interpreted as the strength   already been completed
     or vice versa                            In sentence layout (when dose and strength are most likely to appear adjacent),
                                               guidance recommends that labels are incorporated into fields, so the dose label
                                               immediately precedes the dose value (see section 7.3.7)
                                                 Guidance recommends that labels are used for all fields whose contents could be
                                                  interpreted as belonging to a different control (see section 7.3.7)
                                                 The dose field is always labelled (see section 9.3.6)
    One or more attributes of a template        Template prescriptions can be displayed at the beginning of a new line after
     prescription are mis-read because it         selections have been made from cascading lists (see section 7.3.2)
     wrapped onto a new line                     Attributes can be combined into a single column to reduce the number of columns
                                                  (and thus the width of the template prescriptions) and medication line style can be
                                                  used when space is limited (see section 7.3.3)
                                                 Dose is always displayed at the beginning of a template prescriptions and is thus
                                                  always consistently placed (see section 7.3.3)
                                                 The number of attributes defined by a template prescription should be kept to a
                                                  minimum (see section MSP-1220)

                                                                                                                                 Page 109
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

7.3.5       Maintaining Access to Template Prescriptions
                                                                                                                         Evidence
 ID          Guideline                                                                             Conformance
                                                                                                                         Rating
 MSP-1250    After a template prescription has been selected, display editable pre-filled input    Mandatory             High
             controls for each of the data values defined by the template prescription

 MSP-1260    After a template prescription has been selected (and one or more fields are             Mandatory           Medium
             displayed as a result) provide a control that allows the list of template prescriptions
             to be reopened

 MSP-1270    After a template prescription has been selected, allow the selection of an            Mandatory             Medium
             alternative template prescription

 MSP-1280    When the control for re-opening template prescriptions has focus or is activated,     Recommended           Medium
             draw attention to the fields that are defined by the template prescriptions

 MSP-1290    When the template prescription control is selected, provide visual cues to draw       Recommended           Medium
             attention to the fields that are defined by the template

 MSP-1300    When there are no template prescriptions to display and a known set of safe           Recommended           Medium
             values are available (for example, for dose and frequency), present selection lists
             for those fields sequentially (step by step)

 Usage Examples
                                                                                                   In this sequence of correct
                                                                                                   examples (MSP-1250):
                                                                                                   1. A list of template prescriptions
                                                                                                      is presented
                                                                                                   2. A template prescription has
                                                                                                      been selected and the values it
                                                                                                      defined are displayed in
                                                                                                      individual, editable input
                                                                                                      controls.
                                                                                                   3. The control for reopening the
                                                                                                      list of template prescriptions is
                                                                                                      selected and the list displayed.
                                                                                                       Note
                                                                                                       Selections in all fields can be
                                                                                                       altered, even when they were
                                                                                                       first populated by selecting
                                                                                                       from a cascading list (see
                                                                                                       section 7.3.2) or a list of
                                                                                                       template prescriptions
                                                                                                       (MSP-1250).

                                                                                                                                 Page 110
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                          In this correct example, the focus
                                                          is on the control for reopening the
                                                          list of template prescriptions and
                                                          formatting has been used to draw
                                                          attention to the fields that are
                                                          defined by the template
                                                          prescriptions (MSP-1260,
                                                          MSP-1280)

                                                          In this correct example (in which
                                                          the fields are styled as drop-down
                                                          lists), a control is provided for
                                                          reopening the list of template
                                                          prescriptions (MSP-1260)

                                                          This example is incorrect because
                                                          there is no control for reopening
                                                          the list of template prescriptions
                                                          (MSP-1260)

                                                          In this correct example, the list of
                                                          template prescriptions has been
                                                          reopened, the control is associated
                                                          with the fields that are defined by
                                                          the templates and formatting has
                                                          been used to draw attention to the
                                                          fields that are defined by the
                                                          templates (MSP-1270, MSP-1290)

                                                          In this correct example, in which:
                                                           There are no template
                                                            prescriptions
                                                           A list of commonly defined
                                                            values for each attribute (such
                                                            as dose) has been predefined
                                                           The commonly prescribed
                                                            values are dynamically filtered
                                                            to display only values that are
                                                            valid given values already
                                                            defined in other attributes
                                                          Selection lists for fields are
                                                          displayed sequentially (MSP-1300)

                                                                                     Page 111
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

Rationale
Design Analysis:
When a template prescription is selected, more than one field is displayed and populated. If a mis-selection is made, the user needs to
be able to re-present the list and make a new selection (MSP-1260, MSP-1270). Since the control for redisplaying a list of template
prescriptions cannot be associated with a single field (because it affects more than one field), communication of the purpose of the
control relies on:
 The time at which the control appears (after a template prescription has been selected)
 Its behaviour when the user interacts with it
The guidance thus recommends the use of formatting and visual cues to help the user to understand how to interact with the control,
set expectations for what the control does and ensure that it is discoverable (MSP-1280, MSP-1290). It is anticipated that any
unfamiliarity with this style of control may be overcome through initial usage or basic training.
When template prescriptions cannot be provided, the presentation of fields (and their selection lists) in sequence helps to reduce the
options available in each list to those that are valid given the values that have been selected (or entered) so far (MSP-1300). See
section 7.3.6 for further guidance on presenting fields step by step.
Desk Research:
Template prescriptions or order sentences are particularly useful at mitigating errors such as factor 10 errors in doses or selection of
an incorrect frequency (such as four times a day instead of twice a day). In Prescribing errors in hospital inpatients: their incidence and
clinical significance {R33}, errors in dose amounts and dose units were identified that may have been mitigated by the provision of
template prescriptions. Template prescriptions can be effective when they present a predetermined set of common values, thus
preventing the need for individual selection of attribute values (such as dose and frequency). They also help mitigate factor 10 errors in
doses by supporting a standardisation of dosing.
In Causes of prescribing errors in hospital inpatients: a prospective study {R36}, an example of a slip {R37} is provided in which the
prescriber changes values in fields (that have already been populated) and authorises the prescription with an unintended but valid
combination of values. Template prescriptions allow sets of values to be selected so that a number of fields (such as dose and
frequency) can be filled in at once. Filled in fields can then be changed individually. Providing a control that allows the list of template
prescriptions to be re-opened may encourage prescribers to select an alternative template prescription, instead of editing individual
fields, thus avoiding the kinds of errors reported by this study.
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 User control and freedom – Ensuring that the user maintains control over selections and can ‘go back’ to select a alternative
 Flexibility and efficiency of use – The use of a template prescription as an accelerator
User Research:
Study ID 67 (see APPENDIX D) includes the recommendation that brand name should not be displayed in the working area of a
prescription form unless it is mandatory. A brand name will generally be selected in a search results list or a template prescription, so
when a brand name is mandatory (or has been explicitly selected) it will be known and displayed alongside the generic name in the
‘read only’ part of a prescription form. Thus a brand name is only likely to be changed by reopening a list of template prescriptions
(MSP-1260) or by clearing the current drug and starting again (see section 8).

                                                                                                                                     Page 112
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

7.3.6         Presenting Fields Step by Step
 Prescribing begins with the selection of a drug to prescribe and continues with further selections
 (from cascading lists and template prescriptions) to define the required attributes of the
 prescription. Once sufficient information has been defined to determine the type of medication
 being prescribed (and thus determine which other attributes will be needed), a more detailed
 prescription form can be displayed.
 Figure 18 illustrates the process by which a system identifies which fields should appear in a
 prescription form:

    1
               dilt
                        Commonly prescribed matches

                diltiazem
               More Options ▼                                                  Preview         Author

                                       Standard matches

                 diloxanide

                 diltiazem – DILCARDIA

                 diltiazem – DILZEM SR
                 diltiazem – DILZEM XL

     2
                diltiazem           oral

                                    oral – modified-release
               Full Prescription Form                                           Preview        Author
                                    rectal

                                    intravenous infusion

                                    other...

    3
               diltiazem          oral – modified-release

                 paracetamol
                 DILZEM SR                     DOSE 60 mg            three times a day

                 CALCICARD
              Full Prescription    CR
                                Form           DOSE 90 mg            three times a  day
                                                                               Preview        Author

                 other...

    4
               diltiazem         oral – modified-release             DOSE 60 mg          twice a day

              DILZEM SR                    at these times        08:00; 14:00; 20:00       first dose

              Full Prescription Form                                           Preview       Author

 Figure 18: User Interface Example for Identifying Required Fields

                                                                                                        Page 113
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

The sequence of events shown in Figure 18 is as follows

     1. A drug name is selected

     2. A list of other attributes relevant to that drug (including a route) are displayed in a cascading
        list

     3. Using the drug name and selection in the cascading list, the system can determine the type
        of medication (such as ‘oral — modified-release’) and use this to display available template
        prescriptions (if there are any)

     4. When enough attributes have been defined by selecting a template prescription (or by
        completing fields such as dose and frequency step by step), the remaining required fields
        can be presented. The required fields are determined based on the type of medication. For
        example, an ‘oral — modified-release’ medication may have the following required fields:
           a. Drug name
           b. Brand name
           c. Route
           d. Dose
           e. Frequency
           f.    Administration times
           g. Time of first dose
           h. Duration
Table 8 shows a notional example of the different sets of required fields that might be identified for
four types of medication. The four types are determined by the combination of drug name and
selections made in cascading lists.

Field                                Drug A               Drug B             Drug C     Drug D
Generic Drug Name                    Required             Required           Required   Required

Brand name                           Optional             Required           Optional   Optional

Route                                Required             Required           Required   Required

Strength                             Optional              Optional          Required   Required

Dose                                 Required             Required           Required   Required

Method                                  N/A                  N/A               N/A      Required

Frequency                            Required             Required           Required   Required

Administration Times                 Required             Required           Required     N/A

Time of First Dose                   Required             Required           Required     N/A

Start Date and Time                     N/A                  N/A               N/A      Required

Duration                             Required             Required           Required   Optional
Table 8: Examples of Required Fields for Four Notional Types of Medication

The majority of prescriptions have only a few required fields and thus, in most cases, a prescription
can be completed in a small number of steps. A more detailed prescription is only necessary when
additional (optional) information or a less common set of attributes needs to be defined.
In most cases, a template prescription can be selected and the set of required fields can then be
displayed. However, in the absence of template prescriptions, a step-by-step process can be used
to encourage the selection of important attributes (such as dose) from predefined, limited lists.
                                                                                                   Page 114
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

     Important
     This section contains guidance for which there may be alternative solutions. Accordingly, the conformance
     ratings in this section apply only where the guidance is adopted.
     The Rationale section contains a summary of the known risks which are addressed in this section and
     which must be addressed by any alternative solution. For more information, see the Alternative Design
     Solutions note in section 1.

                                                                                                              Evidence
ID          Guideline                                                                           Conformance
                                                                                                              Rating
MSP-1310    Require the selection of at least drug name and route (or attributes from which Mandatory         Medium
            the type of medication can be derived) before presenting input controls for any
            other values

MSP-1320    After selections have been made in all cascading lists, if there are no template Mandatory        Medium
            prescriptions, display any required fields that will not be pre-filled in sequence
            such that a field is displayed when the previous one has been completed

MSP-1330    If a selection from a cascading list (such as a frequency of ‘as required’)         Recommended   Low
            requires a further field to be completed, display that field before the remaining
            required fields

MSP-1340    Provide a control (such as a button) for switching to a detailed view from which Mandatory        Medium
            input controls for all valid fields for this prescription can be accessed

MSP-1350    Disable the control for displaying all valid input controls until at least a drug   Recommended   Medium
            name and route (or attributes from which the type of medication can be
            derived) have been selected

MSP-1360    Provide a control that allows the switch to a more detailed prescription form to Mandatory        Medium
            be undone, thus returning to the previous view containing only the required
            fields

MSP-1370    Restrict the number of input controls to the minimum required to enter              Recommended   Medium
            information needed to complete the prescription

MSP-1380    When presenting fields step by step, support pre-filling of one or more of the      Recommended   Medium
            fields that are already displayed when a selection is made in a related field

MSP-1390    When presenting fields step by step, allow the contents of all fields to be         Recommended   Medium
            reselected such that a pre-filled value, previous choice or text entry can be
            changed (even if the associated selection list has only one option)

MSP-1400    Do not display optional fields, or controls for accessing optional fields (apart    Recommended   Medium
            from the button for accessing a more detailed prescription form)

MSP-1410    Ensure that no data is lost whilst switching from one form to another               Mandatory     Medium

MSP-1420    Minimise the number of controls that are needed for navigation                      Recommended   Medium

MSP-1430    Ensure that no data is lost whilst switching from one form to another               Recommended   Medium

MSP-1440    Minimise the number of controls that are needed to navigate between forms           Recommended   Medium

                                                                                                                    Page 115
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

Usage Examples
                                                                                                 In this sequence of correct examples
                                                                                                 (MSP-1320):
                                                                                                 1. A cascading list is displayed after a drug
                                                                                1     2      3      name has been selected
   1                                                                                             2. A template prescription is selected from
                                                                                                    the list
           clarithromycin             paracetamol
                                      oral                                                       3. Input controls for the remaining required
                                                                                                    fields are displayed.
                                      oral – modified-release

                                      intravenous – infusion
           Full Prescription Form                                    Preview
                                      other...

   2

           oral       DOSE 250 mg                twice a day

                      DOSE 500 mg                twice a day

                      other...
   orm                                                                    Authorise

       3

           clarithromycin            oral      DOSE 250 mg        twice a day

           at these times        08:00; 20:00         first dose Today 20:00        durati

           Full Prescription Form                                    Preview          Author

                                                                                                 In this correct example, a list (‘Give when...’)
                                                                                                 has been presented because an ‘as required’
  ol       inhaled     100 micrograms per puff            DOSE 1 to 2 puffs
                                                                                                 frequency has been selected (MSP-1330)
  day as required                   Give when...

                                    Breathless
                                                                    Authorise
 on Form
                                    PEFR is below 200

                                    other...

                                                                                                 In this correct example, a ‘Full Prescription
                                                                                                 Form’ button is provided for opening a view
                                                                                                 from which input controls for all valid fields
                                                                                                 (required and optional) can be accessed
                                                                                                 (MSP-1340)

                                                                                                                                        Page 116
                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

                                                                        In this correct example, the control for
                                                                        opening a more detailed prescription (‘Full
                                                                        Prescription Form’) is disabled because the
                                                                        route has not yet been selected (MSP-1350)

                                                                        This example is incorrect because the button
                                                                        for displaying all valid input controls (‘Full
                                                                        Prescription Form’) is enabled before a route
                                                                        has been selected (MSP-1350)

                                                                        In this correct example, in which all valid
                                                                        input controls are displayed a button (‘Go
                                                                        Back’) is provided for undoing the display of
                                                                        all valid fields, thus returning to a view of only
                                                                        the required fields (MSP-1360)

                                                                        This example is incorrect because a route
                                                                        has not yet been selected and there are input
                                                                        controls for other values (MSP-1310)

                                                                        In this correct example, the administration
                                                                        times can be edited (even though there is
clarithromycin     oral    DOSE 250 mg     twice a day
                                                                        only one option that can be selected in the
at these times   08:00; 20:00   first dose Today 20:00                  list) (MSP-1390)
                                                          durati

 08:00; 20:00
More Options ▼                                 Preview     Author
 Edit Administration Times...

                                                                        This example is not recommended because it
                                                                        includes ‘Select a Strength’ and ‘Select a
                                                                        Form’, which are controls for accessing
                                                                        optional fields (MSP-1400)

                                                                                                                 Page 117
                      Design Guidance – Medications Management – Search and Prescribe
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 20 January 2010

Rationale
Design Analysis:
The contents of the prescription form are constrained (by keeping the input controls to a minimum (MSP-1370, MSP-1320) in order to
promote more efficient prescribing. Limited choices in selection lists and sets of predefined values are used to speed up the process
within parameters that are more likely to be safe. This step-by-step or ‘progressive disclosure’ approach is similar to a wizard, except
that only a few selections (and, in most cases, only drug name and route) need to be made before other fields are also presented and
before there is an option to switch to a more detailed prescription form.
Guidance for prescription forms strikes a balance between:
 Giving the user control (by providing access to controls that allow all fields to be modified)
 Speeding up the process of prescribing (by presenting only a few fields)
 Keeping selection lists short
 Tailoring selection lists according to the previous selections
 Pre-filling fields where appropriate
See also section 9.3.5 for general guidance on pre-filling input controls and section 9.3.6 for guidance on the pre-filling of specific input
controls.
Since it is an aspiration of this guidance that the majority of prescriptions (an estimated 80%) can be completed by defining only a few
attributes (see section 1.3), there is no need to present a prescription form with many input controls for all prescriptions. Presenting a
prescription form that is designed to elicit the minimum set of information necessary (MSP-1320) achieves the following:
 Reduces the ‘cognitive load’ on the user by presenting short lists of choices that are refined based on a previous choice
 Speeds up the process of prescribing for the majority of prescriptions by removing the need to scan the prescription form to find the
  input controls that are needed
 Reduces the presentation of controls that are displayed to a minimum thus focusing attention more effectively on the important
  information on screen
 Reduces opportunity for errors by presenting limited choices for attributes that must be completed and by presenting them one at a
  time
 Ensures a degree of security when providing access to less frequent and potentially dangerous choices
Access to all other valid input controls must also be available so that users remain in control of the information they want to specify for
their prescription (MSP-1340, MSP-1350, MSP-1360). A prescriber who normally prescribes using only the required input controls may
still need occasional access to controls for medications that he or she prescribes less frequently.
In anecdotal evidence from a feedback session with clinicians in which wireframes were reviewed, a doctor preferred prescription
forms that only showed required fields because it appeared to be more efficient to use. A nurse preferred the full screen and more
detailed prescription form because it removed the distractions of optional fields and other views that can be seen simultaneously.
The guidance is written such that it can be extended to support moving between detailed and more concise views of the prescription,
where appropriate (such as those presented after a template prescription has been selected or during a step-by-step process)
(MSP-1340, MSP-1350, MSP-1360). For example, a more detailed prescription form could be accessed to specify an optional attribute
before returning to the original prescription form to preview and authorise. Whilst the principles of ensuring that no data is lost when
switching between forms (MSP-1430) and minimising the number of controls needed for navigation (MSP-1440) are both well
supported by usability literature, the details of this approach would require further design exploration, analysis and user testing.
Presenting the minimum (and thus, probably, the only required) fields by default (MSP-1370):
 Discourages the unnecessary completion and viewing of optional fields and in turn speeds up the prescribing process
 Removes the risk that optional fields are completed unnecessarily, thus removing the need for later clarification of the reasons for
  the unnecessarily completed optional fields
 Removes the need to mark which fields are required and which are optional since the intention is that they will all be completed
  (see also the rationale in section 8.1 for the placement of field labels)
The presentation of the minimum set of fields depends on first selecting drug name and route (at least) before the type of medication
can be determined and therefore the remaining required fields presented (MSP-1310). This approach is dependent on a medications
types framework such as that defined in dm+d Implementation Guide (Secondary Care) {R4}.
After a minimal set of fields has been completed, the presentation of other fields then completes the minimum total set of fields before
a prescription can be authorised. Even though some of these fields may be pre-filled, all fields should still be editable so that the user
is in control. Although some fields are only presented when other selections are made (MSP-1330), there is no reason to prevent the
user from going back a couple of steps to change a selection he or she made previously. Thus it should be possible to interact with all
fields to change their values.

                                                                                                                                    Page 118
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Desk Research:
The paper The Impact of Computerized Physician Order Entry on Medication Error Prevention {R38} reports the findings of a study of
medications errors before and after implementation of an electronic prescribing system. The study (which excluded ‘missed dose’
errors from its analysis) reported a significant reduction (80%) in medication errors. Three quarters of this reduction was achieved with
a relatively simple system that structured the entry of prescriptions (the paper refers to them as ‘orders’) and included rudimentary
‘order checking’. The default prescription form reduces the possibility of errors by providing a highly structured approach to entering
prescriptions and reducing the possibilities for error by limiting the options available based on values that must be entered in a
particular order, thus providing a more pro-active approach to ‘order checking’.
An earlier study, Effect of Computerised Physician Order Entry and a Team Intervention on Prevention of Serious Medication Errors
{R39} reports that implementing even a modest electronic prescribing system can result in important error reduction if the system
includes a dose selection menu, simple drug-allergy and drug-drug checking and the requirement that clinicians indicate the route and
frequency of drug doses. The prescription form first presents doses as part of a template prescription or as a selection menu when
there are no template prescriptions. (A more detailed prescription form can then also present doses within a selection menu but may in
some cases support the entry of a dose amount in figures, see section 9.3.1.)
The provision of a default prescription form that only presents fields that are relevant to the selections made so far, depends on the
availability of a framework of medications types that can use a drug name and route (or form or similar attribute) to determine what
other information is needed to safely describe that medication. For example, a framework for using the dm+d is defined in dm+d
Implementation Guide (Secondary Care) {R4}.
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 User control and freedom – The provision of a control that allows the user to switch to a more detailed prescription form as soon as
  possible (MSP-1340) allows the user to decide whether to continue with the default prescription form or to switch to a detailed
  approach to prescribing. MSP-1360 ensures that the user can undo the action of switching from default to more detailed
  prescription forms without losing any information entered or selected so far
 Flexibility and efficiency of use – By presenting a step-by-step prescription form first (MSP-1320), efficiency is improved for most
  prescriptions whilst also providing the flexibility needed to prescribed more detailed prescriptions
 Aesthetic and minimalist design – In the default prescription form, input controls are kept to a minimum, are presented one at a
  time for critical information and are presented such that information that is rarely needed is hidden, thus increasing the relative
  visibility of important information
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                           Mitigations:
    The system presents a prescription     MSP-1320 ensures that explicit selections are made for the most important parts of
     form complete with default values and   a prescription (and see section 6 for selections in cascading lists)
     the prescriber is unaware of other     Template prescriptions (see section 7) are presented as a list so that the prescriber
     prescription regimens                   can see commonly prescribed regimens
    Individual administration times have to  Where appropriate, pre-fill one or more fields when a selection is made in a related
     be defined by the prescriber and result   field (MSP-1380)
     in non-standard times                    Pre-filling administration times when the frequency is defined (see section 9.3.5)
                                                 Providing a selection list of (common) administration schedules (see section 9.3.6)
                                                 Restricting the definition of individual administration event times to a more detailed
                                                  view (see section 9.3.6)
    A prescription is authorised with a         The contents of all fields can be changed such that a pre-filled value can be
     value that was not the intended value        changed (MSP-1390)
     because it had been automatically           Guidance requires the use of formatting to draw attention to a field whose contents
     updated when a value was defined in          have changed automatically (see section 9.3.5)
     another field

                                                                                                                                 Page 119
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

     An input control for a dose is           Dose and strength can be entered by selecting a template prescription (see
      displayed adjacent to an input control    section 7.3.4) or by selecting values for individual fields that are presented in
      for a strength and causes the dose        sequence (MSP-1320). Thus they only appear adjacent after they have already
      value to be interpreted as the strength   been completed
      or vice versa                            In sentence layout (when dose and strength are most likely to appear adjacent),
                                                guidance recommends that labels are incorporated into fields, so the dose label
                                                immediately precedes the dose value (see section 7.3.7)
                                                Guidance recommends that labels are used for all fields whose contents could be
                                                 interpreted as belonging to a different control (see section 7.3.7)
                                                The dose field is always labelled (see section 9.3.6)
     A prescriber selects a template           When there are no template prescriptions, the required fields can be presented and
      prescription in order to avoid using the   completed one by one (MSP-1320)
      more detailed prescription form
      because it is too complicated

7.3.7         Using Sentence Layout
 Sentence layout is the display of input fields as if they were words in a sentence. Display rules
 (such as those for width and wrapping) that might apply to words in a sentence are applied to the
 dynamic display of input fields. This means that input fields can grow in width as values are entered
 into them and wrap onto a new line as necessary. Figure 19 illustrates wrapping in sentence layout,
 showing the wrapping of an input control such that it is placed at the beginning of a new line and
 followed by the next input control:

 Figure 19: Wrapping in Sentence Layout

 Figure 20 shows a sequence of steps in which values are typed into two dynamic width input
 controls. In steps 3 and 6 the input controls grow in width to accommodate the values that have
 been typed into them.

 Figure 20: Dynamic Width Input Controls

      Important
      This section contains guidance for which there may be alternative solutions. Accordingly, the conformance
      ratings in this section apply only where the guidance is adopted.
      The Rationale section contains a summary of the known risks which are addressed in this section and
      which must be addressed by any alternative solution. For more information, see the Alternative Design
      Solutions note in section 1.

                                                                                                                            Page 120
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                                                                          Evidence
ID            Guideline                                                                              Conformance
                                                                                                                          Rating
MSP-1450      Use sentence layout when fields are displayed in an area with much greater width       Mandatory            Medium
              than height (a thin horizontal strip)

MSP-1460      Use sentence layout for cascading lists and whenever selection lists are presented Recommended              Low
              step by step

MSP-1470      When using sentence layout, for fields that have labels, incorporate labels into the   Recommended          Low
              fields

MSP-1480      When using sentence layout, wrap fields onto a new line as necessary                   Mandatory            Medium

MSP-1490      When grouping fields in sentence layout, start a new line after each group             Recommended          Low

MSP-1500      When using sentence layout, allow fields to grow in width to fit the text entered or   Mandatory            Medium
              value selected from a list

MSP-1510      When using sentence layout, allow fields to shrink in width when a value is            Recommended          Medium
              changed

MSP-1520      Provide labels for controls whose contents could be interpreted as belonging to a      Recommended          High
              different control

Usage Examples

                                  Patient Banner                                                     In this correct example, the fields
                                                                                                     are displayed in an area with much
                                                                                                     greater width than height and
                                                                                                     sentence layout has been used
                                                                                                     (MSP-1450)
                                      Medications
                                         List

     clarithromycin            oral       DOSE

     at these times        08:00; 20:00

     Full Prescription Form                         Authorise          Cancel

                                                                                                                                 Page 121
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                   This example is incorrect because
                                                                                   fields are displayed in an area with
                                                                                   much greater width than height
                                                                                   and sentence layout has not been
                                                                                   used (MSP-1450)

                                                                                   In this correct example, a series of
                                                                                   controls are presented like words
                                                                                   in a sentence, with labels
                                                                                   incorporated into the fields and
                                                                                   wrapped onto a new line as
                                                                                   necessary (MSP-1460,
                                                                                   MSP-1470).

                                                                                   In this correct example where dose
                                                                                   and frequency are grouped, dose
salbutamol         inhaled      100 micrograms per puff                            appears on a new line (MSP-1490)

DOSE 1 puff          four times a day as required         When breathles

starting from Today 11:00           duration ongoing       CFC free MDI

Full Prescription Form                                 Preview      Author

                                                                                                              Page 122
                         Design Guidance – Medications Management – Search and Prescribe
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                                   In this sequence of correct
                                                                                   examples:
                                                                                   1. A prescription is shown that
                                                                                      has a regular frequency (as
                                                                                      opposed to a once only or as
                                                                                      required)
                                                                                   2. The frequency is changed, the
                                                                                      field increases in width to
                                                                                      accommodate the new value
                                                                                      (MSP-1500) and the duration
                                                                                      field wraps onto a new line
                                                                                      (MSP-1480)

                                                                                   In this correct example, the dose
                                                                                   was changed from ‘1 puff’ (see the
salbutamol         inhaled      100 micrograms per puff                            previous usage example) to ‘1 or 2
                                                                                   puffs’ and the width of the field has
DOSE 1 or 2 puffs          four times a day as required          When bre          grown in width to match the new
                                                                                   content (MSP-1510)
starting from Today 11:00           duration ongoing       CFC free MDI

Full Prescription Form                                 Preview      Author

                                                                                   In this correct example, the dose
                                                                                   field contains the label ‘DOSE’ and
                                                                                   the time and date of first dose
                                                                                   contains the label ‘first dose’
                                                                                   (MSP-1520)

                                                                                                                 Page 123
                         Design Guidance – Medications Management – Search and Prescribe
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                                                         This example is not recommended
                                                                                                         because (MSP-1520):
                                                                                                          The dose field does not contain
                                                                                                           a label and could be confused
                                                                                                           with strength
                                                                                                          The date and time of first dose
                                                                                                           does not contain a label and
                                                                                                           could be confused with another
                                                                                                           event such as time of
                                                                                                           prescribing or end date

Rationale
Design Analysis:
Sentence layout is designed to enhance legibility of the data and minimise distractions. Sentence layout maximises the similarity
between the way that the medication is displayed in a prescription form and the way that it is displayed in other views, such as a list of
medications or a Drug Administration View. The use of sentence layout mirrors the principles used for Design Guidance – Medication
Line {R3} guidance on displaying a medication line.
Sentence layout is most appropriate for use with cascading lists and step-by-step selection lists because the fields are revealed
dynamically (one by one and in groups based on a selection). Hence, the space in which they are displayed is small initially and can
grow as necessary (MSP-1460, MSP-1500, MSP-1510). This allows more room on the screen for the display of other information
either within the prescribing area or alongside it. When the available space is a horizontal rectangle that is much wider than it is high,
sentence layout maximises use of the space and avoids the need for a scroll bar. A layout using columns may require more space
(height), may need a scroll bar and, compared to sentence layout, is likely to be able to display fewer fields at any one time. When the
available space is a vertical rectangle that is much higher than it is wide, sentence layout is still effective since the fields can wrap onto
a new line. In such a case, a layout using columns is also effective since there is sufficient vertical space for many fields to be placed
in a column without the need for a scroll bar (MSP-1450).
When using sentence layout, displaying labels before fields interrupts the reading flow. For most fields, a label will be unnecessary.
However, some fields (such as a dose, strength or dates) need to be differentiated from other fields that may have similar content
(MSP-1520). When fields with labels are displayed, placing them within the field ensures that the full ‘sentence’ is constructed with
similar objects rather than a mixture of fields (often shown as a rectangle with a dark border and white background) and labels
(MSP-1470).
Grouping in sentence layout (MSP-1490) ensures that related fields are kept together even when fields have to wrap onto a new line.
The purpose of the grouping is not to communicate what those groups are but to maintain the related fields together.
Even when sentence layout is used, fields must still be displayed in a consistent order (MSP-1530).
Desk Research:
In Label Placement in Forms {R40}, Matteo Penzo proposes a set of guidelines for building Web forms. One of these guidelines
recommends using the default value for a drop-down list box instead of a separate label. This approach is recommended for sentence
layout to remove the need for separate labels and thus the need to associate labels to corresponding fields.
The use of a prompt inside a drop-down list or combo box is recommended by the Windows User Experience Interaction Guidelines
{R26} when:
 Screen space is at such a premium that using a label or instruction is undesirable, such as on a toolbar
 The prompt is primarily for identifying the purpose of the list in a compact way. It must not be crucial information that users need to
  see while using the combo box
The use of a prompt inside the fields also follows the principle of minimising clutter by reducing the number of separate elements
displayed (since labels do not need to be displayed separately). This follows the principle of increasing the data to ink ratio referred to
by Tufte in The Visual Display of Quantitative Information {R43}.
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Aesthetic and minimalist design – By identifying controls using text in boxes, relative emphasis is placed on the information within
  the controls instead of the controls themselves. By placing labels within the controls instead of providing separate labels,
  unnecessary clutter is reduced

                                                                                                                                     Page 124
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risk which
is partially mitigated by the guidance:
   Potential Hazards:                        Mitigations:
    An input control for a dose is         This risk is not wholly mitigated by guidance
     displayed adjacent to an input         Dose and strength can be entered by selecting a template prescription (see section
     control for a strength and causes the   7.3.4) or by selecting values for individual fields that are presented in sequence (see
     dose value to be interpreted as the     section 7.3.6). Thus they only appear adjacent after they have already been
     strength or vice versa                  completed
                                              In sentence layout (when dose and strength are most likely to appear adjacent),
                                               guidance recommends that labels are incorporated into fields, so the dose label
                                               immediately precedes the dose value (MSP-1470)
                                              Guidance recommends that labels are used for all fields whose contents could be
                                               interpreted as belonging to a different control (MSP-1520)
                                              The dose field is always labelled (see section 9.3.6)

                                                                                                                             Page 125
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

8            GUIDANCE DETAILS FOR PRESCRIPTION FORMS

8.1          Introduction
    It is assumed (see section 1.3) that the majority of prescriptions will be completed by selecting a
    template prescription and entering values for any remaining required fields. However, in some
    cases, additional specific fields or more detailed prescriptions may be needed and forms with a
    larger number of fields would be required to support these.
    Figure 21 shows the full user interface prescribing process in which the step covered in this section
    is shown with a grey background:

    Figure 21: The Prescribing Process – Full Prescription Form

                                                                                                     Page 126
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

 Figure 22 is an extract from Figure 21 to illustrate the user interface prescribing steps covered in
 this section showing the full prescription form and links to and from other steps:

 Figure 22: User Interface Prescribing Steps – The Prescription Form

8.2       Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Encourage simplicity of design by promoting user interface approaches that help to avoid
        overly complex displays and interactions that require many controls:
                 The number of input controls for a detailed prescription form is kept to a minimum
                 The need to navigate between sections of a detailed prescription form is kept to a
                  minimum by displaying a view containing required fields and input controls for common
                  optional fields by default
       Ensure that the prescribing process can be supported in multiple layouts and is flexible
        enough to be presented in different screen dimensions:
                 Guidance supports (and usage examples illustrate) multiple approaches to layout,
                  including using columns to show labels and input controls and using sentence layout for
                  input controls
       Maximise scalability such that the prescribing process can be modified to accommodate
        additional information, steps or shortcuts:
                 Guidance supports alternative means providing access to individual optional fields,
                  groups of optional fields and views with larger sets of fields
                 The process by which the prescriber arrives at a prescription form can incorporate
                  additional steps
                 The prescription form can include controls that add further steps to be completed before
                  the prescription can be authorised

                                                                                                       Page 127
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

       Manage users expectations and improve their efficiency by providing a clear framework
        with consistent logic for the placement of user interface elements and the interactions that
        they support:
             Efficiency is improved by presenting input controls for the fields that must be completed
              and ensuring quick access to those that are most likely to be needed
             Input controls (and controls for accessing some optional controls) are placed in a
              consistent order
       Minimise the potential for important information to be hidden from view:
             Placement of the drug name and design of the form ensures that the drug name cannot
              be scrolled out of view

8.3     Guidelines
8.3.1        Presentation and Layout of Prescription forms
 This section provides guidance for layout of input controls. Although most relevant for a more
 detailed prescription form, the guidance in this section applies to all stages of a prescription form,
 from cascading lists, template prescriptions and step-by-step required fields. See section 9 for
 guidance specifically for input controls.

                                                                                                                           Evidence
 ID           Guideline                                                                                Conformance
                                                                                                                           Rating
 MSP-1530     Display fields (and controls for accessing individual optional fields) in a consistent   Mandatory           Medium
              order for all prescriptions

 MSP-1540     Minimise the number of different types of input controls displayed in any one view       Recommended         Medium

 MSP-1550     Do not allow the drug name to be scrolled out of view. Keep the drug name visible at     Mandatory           High
              the top of the prescription form, even when the form has a scroll bar

 MSP-1560     When displaying a prescription form with fields arranged in a column, display field      Recommended         Medium
              labels right-aligned and on the left with the fields left-aligned and on the right

 MSP-1570     When placing field labels above input controls, display the labels left-aligned and in a Recommended         Medium
              smaller font than the text displayed in the control

 Usage Examples
                                                                                                       In this correct example the
                                                                                                       types of input controls have
                                                                                                       been minimised (MSP-1540)
                                                                                                       See sections 9.3.1, 9.3.5 and
                                                                                                       9.3.6 for more on input controls

                                                                                                                              Page 128
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                               This example is not
                                                                                               recommended because it uses
                                                                                               an unnecessary number of
                                                                                               different types of controls
                                                                                               (including text entry boxes,
                                                                                               drop-down lists, spin controls,
                                                                                               radio buttons, date entry and
                                                                                               check boxes) (MSP-1540)

Drug Details   Administration Schedule                                                         This example of a detailed
                                                                                               prescription form is incorrect
                                                                                               because the drug name has
   Administration     at these times...                                                        been scrolled out of view
                                                                                               (MSP-1550)
                      first dose...                              For Self Administration

   Duration           ongoing            Add a Start Condition        Add a Review Date

                         Add Special Instructions

                         Patient’s own medication

                                                                    Preview        Authorise

                                                                                                                       Page 129
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

                                                                                      In this correct example, the
                                                                                      fields are arranged in a column,
                                                                                      the labels are right-aligned and
          Drug Name      clarithromycin                                               the fields are left-aligned
                                                                                      (MSP-1560)
                                                                                      This example also illustrates
               Route     oral                                                         the use of more than one type
                                                                                      of input control where
                                                                                      necessary (where dictated by
                Dose               250      mg                                        system constraints) whilst still
                                                                                      using the minimum possible
           Frequency     twice a day                                                  number of input controls
                                                                                      (MSP-1540)
Administration Times     08:00; 20:00

           First Dose    02-Apr-2010 20:00

             Duration    7 days

Full Prescription Form                   Preview    Authorise      Cancel

                                                                                      This example with fields
                                                                                      arranged in a column is not
                                                                                      recommended because the
                                                                                      labels are left-aligned
                                                                                      (MSP-1560)

                                                                                      In this correct example, the
                                                                                      labels above the controls are
                                                                                      left-aligned and in a smaller
                                                                                      font than the text in the control
                                                                                      (MSP-1570)

                                                                                                               Page 130
                         Design Guidance – Medications Management – Search and Prescribe
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                                                           This example of labels placed
                                                                                                           above controls is not
                                                                                                           recommended because the
                                                                                                           labels are in the same font size
                                                                                                           as the text in the control
                                                                                                           (MSP-1570)

Rationale
Design Analysis:
When designing forms for capturing information from users, fields can be placed in the following ways:
 Absolute placement, in which fields are placed in the same order and the same place on the screen
 Relative placement, in which fields are placed in the same order relative to one another, but not necessarily the same place on the
  screen
 Dynamic placement, in which the fields are placed in different orders depending on the type of medication
 Dynamic groups, in which the fields are placed consistently in groups and ordered consistently within those groups but the groups
  may be displayed in different orders depending on the type of medication
For example, in dynamic placement, the view could be divided such that required fields are placed in one area and optional fields are
placed in another. Since different medications will have different sets of required and optional fields, any field that can be either
required or optional might appear in one section or the other.
The task of ensuring that fields are easily found involves achieving a balance between consistent placement and dynamic placement.
Consistent placement may involve more clutter, since some consistently placed fields are less likely to be used. Dynamic placement
moves less frequently used fields (such as those that are optional) to a separate area, presenting a simple, short form with fewest
possible fields.
If all medications needed exactly the same set of fields, then the consistent, absolute placement of fields would be uncontroversial and
would ensure the building of a clear mental model of where to expect fields to be. When the set of fields that are needed changes,
depending on the type of medication being prescribed (we are assuming this to be determined largely by drug name and route), then
consistent placement may result in a large set of fields being presented out of which only a few need to be used. Furthermore, the few
that are used may be distributed unevenly amongst other fields and controls, with some potentially being out of view (if the page is
long enough to need a scroll bar).
In the alternatives that were assessed, the best balance was achieved when all fields were placed in a consistent order (relative
placement). This tips the balance in favour of knowing where to look but increases the visual complexity of the form since the optional
fields are displayed amongst the required fields (MSP-1530). For more guidance on the presentation of required and optional fields,
see section 8.3.4.
A successful layout will achieve the following:
 Make it easier to read the important information by reducing the relative emphasis of other elements on the screen
 Minimise the need for a preview by displaying the medication in a format sufficiently similar to other views (such as a medications
  list)
 Provide the most important information ‘at a glance’, thus also making it easier to recognise the type of medication
Since a prescription form may need to be greater in height than the available vertical space, it may be necessary to display a scroll
bar. When a scroll bar is displayed, the drug name should remain in view to reduce opportunity for prescribers to mentally switch to
thinking about a different drug half way through a prescription (for example, after an interruption) and to define later values thinking
that they are prescribing a different drug (MSP-1550).

                                                                                                                                   Page 131
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Desk Research:
The paper, Label Placement in Forms17 examined eye-tracking to assess the relative cognitive load of Web forms with different label
placement and alignment and different input controls. In this paper, Matteo Penzo confirmed findings from a previous study that
drop-down controls are the most eye-catching of (Web) form elements. In this study, he finds that they are more eye-catching than
both text-input controls and buttons. Penzo attributes this to the success of the form element in conveying its meaning and how the
user must interact with it. Since each different input control conveys meaning and how the user should interact with it differently, the
introduction of different types of controls increases the ‘competition’ for attention and understanding. This does not happen if all input
controls convey their meaning in the same way and exhibit the same interactions. This finding is relevant to MSP-1540 since it refers
to the general principle of reducing the visual noise introduced by controls.
The paper, Should I use a drop-down?18, focuses on the use of drop-down controls in Web forms. Miller and Jarrett suggest a
four-step process for choosing form elements. The third is ‘Third, look at the impact of your choice on the form as a whole. Choose a
sensible order for the options, keep the options short and avoid too many different input methods.’ This is reflected in MSP-1540.
MSP-1560 and MSP-1570 refer to the placement of labels in relation to forms when the fields have been arranged in a column. In
Label Placement in Forms – What’s Best {R42}, Caroline Jarrett concludes that appropriate placement of field labels depends on the
users, task and specific design. Both Jarrett (in Label Placement in Forms – What’s Best {R42}) and Penzo (in Label Placement in
Forms {R40}) point out that the placement of a label depends on whether the labels are needed to:
 Understand the whole form. In which case, they should be placed so that they can be scanned independently of the fields
 Work out what to fill in and what to leave blank. This is relevant when only some of the fields are required and the user wants to
  provide the minimum information
 Understand what information is needed. This is relevant when the user is not familiar with the form as a whole or not familiar
  with the information needed in one or more specific fields
These tasks reflect the focus of Jarrett and Penzo’s papers on the design of Web forms and are less relevant to the task of prescribing
using a more sophisticated interface than a simple Web form since:
 Users will already be familiar with the prescription form (and many will use it regularly)
 There is no need to determine which fields should be filled in since required fields are displayed and the display of optional fields is
  significantly discouraged
 When watermark text is used as a prompt within the fields, there is no need to read a separate label to determine what the field is
  for
 The pattern of the prescription form is likely to be familiar
 The options presented in selection lists when a field is active also tells the user what the input control is for
Whilst usability references for the design of Web forms can inform the design of application forms as well, there are some differences
that are important in this context. One of the most significant differences is that, in general, studies on Web forms indicate they are
designed for users who will encounter that form rarely and probably only once. This impacts findings that relate to orientation when
viewing a form for the first time and the need to scan all labels in order to build up a picture of what the form covers and what must be
filled in. These usage examples are far less relevant to the design of a form that is expected to be used regularly by trained users.
The visual design principle ‘data to ink ratio’, coined by Edward Tufte in The Visual Display of Quantitative Information {R43}, is
informed by his analysis of many examples of visual design in artefacts that are widely considered to be exemplary at efficient and
effective communication. His principle holds that the quantity of ink (in a printing metaphor) needed for the display of information
should exceed that which is used to display supporting visual structures and embellishments.
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Consistency and standards – Input controls for fields (both required and optional) are displayed in a consistent (relative) order
  (MSP-1530)
 Aesthetic and minimalist design – The number of different input controls is limited, thus also limiting the number of different
  interactions required to input information (MSP-1540)

17
  Penzo, M – Label Placement in Forms {R40}:
http://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php
18
  Miller S, Jarrett C – Should I use a drop-down? Four steps for choosing form elements on the Web {R41}:
http://www.formsthatwork.com/files/Articles/dropdown.pdf
                                                                                                                                    Page 132
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
 which are mitigated by the guidance:
      Potential Hazards:                            Mitigations:
       A prescription is not wholly reviewed        MSP-1540 recommends that the number of different types of controls are
        because the information is displayed in       minimised, which reduces the different formats used to display it
        different formats, split across many         Selection lists are used so that the combined list items can be displayed in a
        different controls                            format similar to that of a medication line (see section 7.3.3)
                                                     Guidance in section 9.3.1 recommends combining controls into a single control
       Optional information is missed from a          Controls for accessing optional fields are displayed in a consistent order
        prescription because the prescriber could       (MSP-1530)
        not find the control for accessing optional    Controls for optional fields are displayed alongside required fields (see
        fields or other areas of a detailed             section 8.3.2)
        prescription form
                                                       Controls should be provided for all areas of a detailed prescription form such that
                                                        there is no area that can only be accessed by selecting an item from a selection
                                                        list (see section 8.3.2)
                                                     Controls for accessing optional fields are placed where the optional field appears
                                                      when it is displayed (see section 8.3.4)

8.3.2         Presenting a Detailed Prescription Form
 Some prescriptions may be defined using template prescriptions or completing the required fields
 step by step. When prescribers need to be more specific or to enter more (and optional)
 information, they need access to a more detailed prescription form. This section contains guidance
 for presenting such a prescription form.

                                                                                                                               Evidence
 ID              Guideline                                                                               Conformance
                                                                                                                               Rating
 MSP-1580        In a detailed prescription form, require the selection of drug name and route (or drug Mandatory              Medium
                 name and attributes that allow the type of medication to be determined) before fields
                 are displayed in the rest of the detailed prescription form

 MSP-1590        Present the required fields by default when a detailed prescription form is opened      Mandatory             Medium

 MSP-1600        Provide access to a detailed prescription form that presents the most important         Mandatory             High
                 attributes by default and from which all fields can be accessed

 MSP-1610        Provide controls such as tabs or buttons for navigating between areas of the            Mandatory             Medium
                 detailed prescription form

 MSP-1620        Provide controls for accessing all areas of the detailed prescription such that there is Mandatory            High
                 no area that can only be accessed by selecting an item (such as edit administration
                 times) from a selection list.

 MSP-1630        When displaying the input controls in a detailed prescription form, include an          Recommended           Medium
                 appropriate set of controls for accessing optional fields

 MSP-1640        When displaying a detailed prescription form, combine the drug name and route (or       Recommended           Low
                 drug name and attributes that allow the type of medication to be determined) into a
                 single control

 MSP-1650        When the combined drug name and route field is selected, provide an option to           Recommended           Low
                 change the drug name and route

                                                                                                                                     Page 133
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

MSP-1660   Do not rely on disabling fields (or controls for accessing optional fields) to impose an Mandatory            Medium
           order.

MSP-1670   After selections from cascading lists have been completed, do not automatically           Mandatory           Medium
           open a selection list for a control in the a detailed prescription form unless a change
           to a field has triggered the need to confirm or re-enter values in related fields

Usage Examples
                                                                                                     In this correct example, tabs are
                                                                                                     provided for accessing other sets
                                                                                                     of fields. The drug name and
                                                                                                     route have been combined into a
                                                                                                     single field (MSP-1610,
                                                                                                     MSP-1640)

                                                                                                     This example is incorrect
                                                                                                     because a list item provides
                                                                                                     access to an area in which
                                                                                                     individual administration times
                                                                                                     can be edited but there is no
                                                                                                     other control (such as a tab or
                                                                                                     button) for accessing this area
                                                                                                     directly (MSP-1620)

                                                                                                                              Page 134
                        Design Guidance – Medications Management – Search and Prescribe
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

                                                            In this correct example, a route
                                                            must be selected before other
                                                            fields are displayed (MSP-1580)

                                                            This example is incorrect
                                                            because fields are displayed
                                                            before a drug name and route
                                                            have been selected (MSP-1580)

                                                                                    Page 135
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

                                                                                                                                 This example is incorrect
                                                                                                                                 because disabled fields are
                                                                                                                                 displayed before a drug name
                                                                                                                                 and route have been selected
                                                                                                                                 (MSP-1580)

Drug Details                                                                                                                     In this correct example, required
                                                                                                                                 fields and controls for accessing
  Drug Name and Route          diltiazem – DILZEM SR – oral – modified release                    Add a Reason for Prescribing   an appropriate set of optional
                                                                                                                                 fields have been displayed after
   Strength, Form and Device     Select a Strength   modified-release capsules                                                   the selection of drug, route and
   Dose and Frequency          DOSE 60 mg
                                                                                                                                 template prescription
                                                                                                                                 (MSP-1580, MSP-1630)
                               three times a day                        As Required

   Administration              at these times 08:00; 14:00; 20:00

                               first dose Today 14:00                   For Self Administration

   Duration                    ongoing          Add a Start Condition       Add a Review Date

                                   Add Special Instructions

                                  Patient’s own medication

                                                                                                       Preview       Authorise

                                                                                                                                 This example is not
                                                                                                                                 recommended because the drug
                                                                                                                                 name and route are displayed in
                                                                                                                                 separate fields (MSP-1640)

                                                                                                                                                          Page 136
                                  Design Guidance – Medications Management – Search and Prescribe
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 20 January 2010

                                                                                                            In this correct example, the
                                                                                                            combined field for drug name
                                                                                                            and route has been selected and
                                                                                                            an option to edit the drug name
                                                                                                            and route is displayed
                                                                                                            (MSP-1650)

                                                                                                            This example is incorrect
                                                                                                            because fields are disabled so
                                                                                                            that the order in which they can
                                                                                                            be completed is set (MSP-1660)

Rationale
See the rationale in section 8.1 for more information relating to the presentation of prescription forms.
Design Analysis:
Guidance recommends that detailed prescription forms include the most important information, including required fields and potentially
some optional fields that have been ‘promoted’. This approach aims to maximise efficiency for most prescriptions by minimising the
navigation that is likely to be needed for accessing fields (MSP-1600, MSP-1590). Some of the areas of a prescription form can be
accessed by selecting an option from a selection list but it must also be possible to get to these areas by other means (such as
selecting a tab). This is so these options are immediately visible (MSP-1610) without having to open a selection list. For example, a
detailed administration schedule (in which individual administration times can be added and edited) could be accessed by selecting
‘Edit administration times’ from the selection list that shows the administration times as text. The same detailed administration view
should also be accessible by a tab or a button. By providing access to these additional areas from within selection lists (MSP-1620),
users are not required to build an accurate model of where to look for options that relate to values they are selecting.
The presentation of required fields depends on first selecting drug name and route (at least) before the type of medication can be
determined and therefore the remaining required fields presented (MSP-1580). Since the combination of drug name and route
determines the other fields in the form, they cannot be changed without potentially removing some fields that may have already been
completed. The drug name and route are thus combined since selecting and changing them signifies a return to the previous step and
may result in the display of a new set of fields (MSP-1640).
The display of required fields by default in a prescription form improves efficiency and helps prevent errors by removing the
distractions of optional fields (MSP-1590). Access to optional fields and the controls that are used to access those optional fields can
be placed alongside related fields to reduce or remove the need for the user to search for them (MSP-1630).

                                                                                                                                    Page 137
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Unlike the step by step, cascading list or template prescription parts of the prescribing process, a detailed prescription does not impose
an order on the entry of information in fields. A detailed prescription form is more likely to be used when a less common prescription is
being defined. Some of the fields are inter-related so the optimal way of completing a prescription may be different from one
prescription to another. Imposing an order would remove this flexibility and thus also remove the opportunity for a more efficient way of
completing the prescription (MSP-1660, MSP-1670).
Desk Research:
The guidance for a detailed prescription form follows the user interface principles of ‘chunking’ and prioritising (see the rationale in
section 9.3.3).
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Flexibility and efficiency of use – A detailed prescription presents as little information as possible to focus attention on what needs
  to be completed and removes distractions
 User control and freedom – Although input controls for only the required fields are displayed by default, the prescriber has access
  to optional attributes and additional fields. The prescriber may also choose to complete the input controls in a different order to the
  one in which they are presented
User Research:
Study ID 67 (see APPENDIX D) includes the recommendation that brand name should not be displayed in the working area of a
prescription form unless it is mandatory. A brand name will generally be selected in a search results list or a template prescription so
when a brand name is mandatory (or has been explicitly selected) it will be known and displayed alongside the generic name in a
prescription form. Thus, a brand name is only likely to be changed by reopening a list of template prescriptions (see section 7.3.5) or
by clearing the current drug and starting again (MSP-1650).
Study ID 68 (see APPENDIX C) identified the need to limit optional fields that are presented by default (so that they are less likely to
be filled in unnecessarily) and to allow easy access to an appropriate set of optional fields.
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                              Mitigations:
    The name of the drug being prescribed  The options presented after a drug is selected are filtered to be relevant to that
     is not noticed at the top of the form and   drug (see section 6.3.1)
     is not the intended drug                   The drug name remains at the top of the form when switching to a detailed
                                                 prescription and is visible throughout, even when the prescription is long enough
                                                 to need a scroll bar (see section 8.3.3)
    The prescriber cannot tell which fields        In principle, the prescription form only shows required fields (MSP-1590)
     are required and which are optional            Optional fields are accessed by clicking on a different style of control (see
                                                     section 8.3.4)
    Optional information is missed from a          Controls for accessing optional fields are displayed in a consistent order (see
     prescription because the prescriber             section 8.3.1)
     could not find the control for accessing       Controls should be provided for all areas of a detailed prescription form such that
     optional fields or other areas of the           there is no area that can only be accessed by selecting an item from a selection
     detailed prescription                           list (MSP-1620)
                                                    Controls for optional fields are displayed alongside required fields (MSP-1630)
                                                    Controls for accessing optional fields are placed where the optional field appears
                                                     when it is displayed (see section 8.3.4)

                                                                                                                                     Page 138
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

8.3.3       Structuring a Detailed Prescription
                                                                                                                    Evidence
 ID          Guideline                                                                         Conformance
                                                                                                                    Rating
 MSP-1680    Display the drug name and route (or drug name and attributes that allow the type of Mandatory          Medium
             medication to be determined) in a section at the top of the detailed prescription view

 MSP-1690    Display the first field in each section on a new line                             Mandatory            Medium

 MSP-1700    When section labels are provided, display them at the top of the section          Recommended          Low

 MSP-1710    Label at least each input control, group of input controls or section             Mandatory            Medium

 Usage Examples
                                                                                               In this correct example:
                                                                                                Drug name and route are
                                                                                                 displayed in a section at the
                                                                                                 top (MSP-1680)
                                                                                                Each group of input controls is
                                                                                                 labelled (MSP-1710)
                                                                                               This example uses section labels
                                                                                               which are left-aligned. Individual
                                                                                               field labels have been
                                                                                               incorporated into the fields.

                                                                                               In this correct example, labels are
                                                                                               provided for all input controls in
                                                                                               addition to labels for sections,
                                                                                               which have been placed at the
                                                                                               top of each section (MSP-1700,
                                                                                               MSP-1710)
                                                                                               This example uses left-aligned
                                                                                               section labels and right-aligned
                                                                                               individual field labels.

                                                                                                                          Page 139
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                                          This example is incorrect
                                                                                                          because some input controls do
                          clarithromycin – oral                                                           not have individual labels or
                                                                                                          group labels and are in sections
  How Much and When                                                                                       that do not have labels
                                                                                                          (MSP-1710)
                                      250     mg

                          twice a day

                          08:00; 20:00

                          02-Apr-2010 20:00

                          7 days

                                                           Preview        Authorise

Rationale
Design Analysis:
If we assume that a prescriber usually has a ‘whole’ prescription in mind, then a system could prompt for any part of that prescription
first and then go on to complete the prescription by completing fields in any order. However, it is likely that different clinicians will have
different structures for the prescription in mind, so the order of fields and the structure provided by grouping is unlikely to successfully
match a clinician’s mental model. The primary aim of the grouping is to provide a structure that, over time, becomes familiar and
achieves ‘recognition over recall’.
Guidance for placing certain fields on a new line (MSP-1690), labelling sections (MSP-1700) and labelling controls (MSP-1710) is
designed to provide a flexible and consistent set of mechanisms by which a structure is implied in the prescription form.
Desk Research:
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Error prevention – Maintaining the drug name on screen helps mitigate errors that might be caused by interruption or distraction
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                                      Mitigations:
    The name of the drug being prescribed is not           The options presented after a drug is selected are filtered to be relevant to
     noticed at the top of the form and is not the           that drug (see section 6.3.1)
     intended drug                                          The drug name remains at the top of the form when switching to a detailed
                                                             prescription and is visible throughout even when the prescription is long
                                                             enough to need a scroll bar (MSP-1680)
    Optional information is missed from a                  Controls for accessing optional fields are displayed in a consistent order
     prescription because the prescriber could not           (see section 8.3.1)
     find the control for accessing optional fields or      All areas of a detailed prescription should be accessible through a
     other areas of the detailed prescription                separate control as well as a list item in a selection list (see section 8.3.2)
                                                            Controls for accessing optional fields are placed where the optional field
                                                             appears when it is displayed (see section 8.3.4)

                                                                                                                                      Page 140
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

8.3.4         Displaying Required and Optional Fields
 This section includes guidance for how to display required and optional fields and to communicate
 which fields must be completed before a prescription can be authorised.
 When a detailed prescription form is presented, the required fields are displayed by default. Also
 displayed are controls for accessing optional fields and, when those controls are selected, the
 optional fields appear alongside the required fields. This approach is based on the assumption (see
 section 1.3) that the majority of prescriptions will be completed using template prescriptions and
 that most of the time only a few optional fields may be needed. However, in some cases, additional
 specific fields or more detailed prescriptions may be needed and forms with a larger number of
 fields would be required to support these.
 This section refers to three types of control:

      1. Controls for accessing individual (or very small groups) of optional fields. These controls
         are defined by guidance in this section

      2. Controls for accessing small sets of fields (see Figure 23)

      3. Controls (such as tabs or buttons) for accessing large sets of fields (see Figure 24 and
         Figure 25).

 Figure 23: Accessing Small Sets of Fields

 Figure 24: Using a Tab to Access a Large Set of Fields

                                                                                                  Page 141
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

Figure 25: Using a Button to Access a Large Set of Fields

                                                                                                                               Evidence
ID               Guideline                                                                                 Conformance
                                                                                                                               Rating
MSP-1720         Only when it is important to encourage the completion of an optional field, promote it Recommended            Medium
                 by displaying an input control for it

MSP-1730         When an optional input control is promoted, support the entry or selection of a null      Recommended         Medium
                 value and require it to be completed

MSP-1740         Display in-field prompts for fields that have to be completed by the user and would       Mandatory           Medium
                 otherwise be blank. (A field does not have to have an in-field prompt if it contains a
                 label)

MSP-1750         Use a phrase that begins with a verb for in-field prompts in fields that have to be       Recommended         Medium
                 completed by the user

MSP-1760         Provide access to individual optional fields by placing a control in the place where      Mandatory           High
                 the field will appear when the control is selected

MSP-1770         If the value selected for an optional field causes it to increase in width, allow it to   Recommended         Low
                 wrap onto a new line if necessary

MSP-1780         When necessary, display more than one optional field on activation of a control for       Recommended         Low
                 displaying an optional field

MSP-1790         Use formatting to reduce the relative emphasis on optional controls                       Recommended         Medium

MSP-1800         Allow values entered in optional fields to be removed such that the optional field or     Recommended         Medium
                 control is returned to the state it was in when the prescription form was opened

MSP-1810         Use other formatting to mark required fields (or their labels) in a detailed prescription Recommended         Medium
                 form where necessary to ensure consistency with other areas of the application

Usage Examples
                                                                                                           In this correct example, an input
                                                                                                           control is displayed for the
                                                                                                           optional field ‘Reason for
                                                                                                           Prescribing’ (MSP-1720)

                                                                                                                                   Page 142
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                     In this correct example, in which
                                                                     an input control is displayed for
                                                                     the optional field ‘Reason for
                                                                     Prescribing’, a null value ‘None
                                                                     (leave blank)’ is provided
                                                                     (MSP-1720, MSP-1730)

                                                                     In this correct example, in which
                                                                     an input control is displayed for
                                                                     the optional field ‘Reason for
                                                                     Prescribing’, a null value ‘None
                                                                     (leave blank)’ is provided
                                                                     (MSP-1720, MSP-1730)
                                                                     This is an alternative to the
                                                                     previous example

                                                                     In this correct example, an in-
                                                                     field prompt is displayed in the
  Select a Strength   modified-release capsules                      field that will have to be
                                                                     completed by the user, the
DOSE 60 mg                                                           prompt begins with a verb and
                                                                     visual formatting has been used
                                                                     to reduce the relative emphasis
Select a frequency                As Required
                                                                     on optional controls (MSP-1740,
                                                                     MSP-1790)
at these times

first dose                         For Self Administration

                                                                                              Page 143
        Design Guidance – Medications Management – Search and Prescribe
        Prepared by Microsoft, Version 3.0.0.0
        Last modified on 20 January 2010

                                                                                                                                          This example is incorrect
                                                                                                                                          because the frequency field
                               Select a Strength          modified-release capsules                                                       must be completed by the user
                                                                                                                                          and does not have an in-field
                         DOSE 60 mg                                                                                                       prompt (MSP-1740)

                                                                                    As Required

                         at these times

                         first dose                                                  For Self Administration

                                                                                                                                          This example is incorrect
                           diltiazem – DILZEM SR – oral – modified release                                                                because the prompts do not
                                                                                                                                          begin with a verb (MSP-1750)
nd Device                       Select a Strength           modified-release capsules

                           DOSE 60 mg

                           frequency                                                  As Required

                           at these times

                           first dose                                                     For Self Administration

Drug Details                                                                                                                              In this correct example, the
                                                                                                                                          controls for accessing individual
  Drug and Route                    diltiazem – DILZEM SR – oral – modified release                     Add a Reason for Prescribing      optional fields (in grey text
                                                                                                                                          preceded by a ‘+’) are placed
   Strength, Form and Device        modified-release capsules               Select a Strength         Select a Device                     where the field will appear when
                                                                                                                                          the control is selected
   Dose and Frequency               DOSE 60 mg                             Enter a Site
                                                                                                                                          (MSP-1760)
                                    Select a frequency                     As Required

   Administration                   at these times

                                    first dose                             For Self Administration

   Duration                         ongoing        Add a Start Condition          Add a Review Date

                                       Add Special Instructions

                                       Patient’s own medication

                                                                                                                Preview       Authorise

                                                                                                                                                                  Page 144
                                      Design Guidance – Medications Management – Search and Prescribe
                                      Prepared by Microsoft, Version 3.0.0.0
                                      Last modified on 20 January 2010

                                                                                                                                  In this sequence of incorrect
                                                                                                                                  examples (MSP-1760):
1                                                                                                                     1       2   1. A prescription form is
                                                                                                                                     displayed in which the
Drug Details                                                                                                                         controls for accessing
                                                                                                                                     individual optional fields are
    Drug and Route              diltiazem – DILZEM SR – oral – modified release     Add a Reason for Prescribing                     displayed on the right.
                                                                                                                                  2. When the ‘Add a Reason for
    Strength, Form and Device   modified-release capsules                               Select a Strength
                                                                                                                                     Prescribing’ control is
                                                                                                                                     selected, the corresponding
    Dose and Frequency          DOSE 60 mg
                                                                                                                                     field appears on a new line
                                                                                        As Required
                                Select a frequency
                                                                                        For Self Administration
                                                                                                                                     below the drug name.
    Administration              at these times

                                first dose

                                                                                        Add a Start Condition
    Duration                    ongoing
                                                                                        Add a Review Date

                                                                                        Add Special Instructions

                                                                                        Patient’s own medication

                                                                                                Preview           Authorise

2

Drug Details

    Drug and Route              diltiazem – DILZEM SR – oral – modified release

                                angina
                                mild hypertension
    Strength, Form and Device   modified-release capsules   modified-release capsules
                                moderate hypertension

    Dose and Frequency          other...60 mg
                                DOSE
                                                                                        As Required
                                Select a frequency
                                                                                        For Self Administration

    Administration              at these times

                                first dose

                                                                                        Add a Start Condition
    Duration                    ongoing
                                                                                        Add a Review Date

                                                                                        Add Special Instructions

                                                                                        Patient’s own medication

                                                                                                Preview           Authorise

                                                                                                                                                           Page 145
                                 Design Guidance – Medications Management – Search and Prescribe
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

                                                             In this correct example, a
                                                             drop-down list for the optional
                                                             attribute ‘as required’ provides a
                                                             means of removing that attribute
                                                             (MSP-1800)

                                                             In this correct example, required
                                                             fields are marked using
                                                             asterisks to maintain
                                                             consistency with other areas of
                                                             the application (MSP-1810)

                                                             In this correct example, required
                                                             fields are marked using
                                                             asterisks and bold labels to
                                                             maintain consistency with other
                                                             areas of the application
                                                             (MSP-1810)

                                                                                      Page 146
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

Rationale
Design Analysis:
Presenting only required fields by default discourages the unnecessary completion and viewing of optional fields (MSP-1720). It also
removes the need for a mechanism by which required and optional fields can be identified. (See the rationale in section 8.1 for a more
detailed description of the relationship between form layout and the presentation of required and optional fields). By not displaying
optional fields by default, they are less likely to be completed unnecessarily. Unnecessarily completed optional fields can take up
valuable time later in the process when the reasons for their completion may need to be followed up.
The prescribing area is being used to communicate to the prescriber what the minimum set of information required for a prescription is.
This is most effective when controls for any other (not required) information are kept to a minimum to reduce distractions (MSP-1760).
When an input field that is normally considered to be optional is important enough that it should be completed, it can be treated like a
required field. If the optional field must remain optional because the prescriber may not want to select any of the values available in the
selection list, then a ‘null’ value in the selection list allows the input control to be treated as a required field whilst effectively remaining
optional (MSP-1720, MSP-1730)
By placing controls for accessing optional fields amongst the required fields, the following is achieved:
 Optional fields can be placed consistently for all types of medication
 Optional fields can be grouped with related required fields
 No navigation is needed to access optional fields that are not immediately present
 It is possible to become familiar with the pattern of required fields (and controls for optional fields)
 Controls clearly labelled for accessing options to refine or extend the standard choices
 Interpretation of labels for optional controls benefit from the context in which they are placed
The set of required fields that are displayed when a prescription is first opened may include some fields that have labels within the
input control, some fields that already contain values and other fields that have been pre-filled. Prompts within those empty fields
(MSP-1740) help to keep the prescribers attention on the fields and the values within them and to minimise the need to review section
labels and field labels (that are outside of the input controls). Starting in-field prompts with verbs (MSP-1750) clearly indicates that
those fields need to be completed.
When a control for an optional field is selected, an input control for that field must be available. The display of that input field in the
same place as the control that was used to access it minimises disruption to the fields already presented in the prescription form whilst
remaining consistent with sentence layout (see section 7.3.7) and preserving the emphasis on required fields (MSP-1760, MSP-1770,
MSP-1780, MSP-1790, MSP-1800).
In some applications, conventions may already exist for marking which fields in a form are required and must be completed for the
form to be submitted. Although these conventions are not necessary in the prescribing form, they can still be displayed for consistency
with the rest of the application (MSP-1810).
Desk Research:
Accepted methods for marking required fields are informed largely by studies of Web forms that contain required and optional fields
that are mixed together (for example, Label Placement in Forms {R40}, Should I use a drop-down? {R41} and Label Placement in
Forms – What’s Best? {R42}). It is harder for users of such forms to tell when they have skipped a required field because the visual
cue (usually a red star or asterisk) is small and is usually placed nearer the label than the field. This approach is effective when the
field label must be carefully read before the user can know what to enter into the corresponding field. The detailed prescription form
follows a different model so that it avoids these problems.
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 User control and freedom – Guidance ensures that the user remains in control of values entered in optional fields by requiring that
  values entered in optional fields can be amended or cleared

                                                                                                                                        Page 147
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

User Research:
All 14 participants in Study ID 69 (see APPENDIX B) preferred to avoid a prescription form in which the layout of fields is absolutely
identical for all drugs. Fields in this design of a prescription form were enabled or disabled depending on the drug being prescribed.
The primary reasons they gave for their preference were:
 They did not know where they had to enter information
 They incorrectly tried to enter values in the wrong field
 The process was, or appeared to be, longer
 The disabled fields were a distraction
Guidance for cascading lists (section 6) and template prescriptions (section 7), dynamic layout of prescription forms (section 8.1) and
required fields versus optional fields (MSP-1720, MSP-1790) are designed to focus attention on the fields that are relevant, thus
avoiding the distraction caused by fields that do not need to (or cannot) be filled
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                                           Mitigations:
    When optional attributes are specified unnecessarily,       The unnecessary completion of optional fields is discouraged by not
     the need for clarification may delay treatment               displaying them by default (see section 8) and requiring an
                                                                  additional selection before they are displayed (MSP-1760)
                                                                 The definition of drug name and route before a detailed prescription
                                                                  form can be displayed (see section 8) ensures only the appropriate
                                                                  (required) input fields are displayed
    Important information is not included in the                Controls for accessing optional fields (MSP-1760) must be
     prescription because only required fields were               consistently placed and presented (see section 8.1)
     presented
    Presentation of both required and optional input            Optional fields are not displayed by default (see section 8.1)
     controls slows the process of prescribing
    Prescriber can’t work out why the prescription can’t be  Prompts are displayed in required input controls until they are
     authorised                                                populated with a value (MSP-1740)
    The prescriber cannot tell which fields are required        In principle, the prescription form only shows required fields (see
     and which are optional                                       section 8)
                                                                 Optional fields are accessed by clicking on a different style of
                                                                  control (MSP-1760)
    Optional information is missed from a prescription        Controls for accessing optional fields are displayed in a consistent
     because the prescriber could not find the control for      order (see section 8.3.1)
     accessing optional fields or other areas of the detailed  Controls should be provided for all areas of a detailed prescription
     prescription                                               form such that there is no area that can only be accessed by
                                                                selecting an item from a selection list (MSP-1620)
                                                                 Controls for optional fields are displayed alongside required fields
                                                                  (MSP-1630)
                                                                 Controls for accessing optional fields are placed where the optional
                                                                  field appears when it is displayed (see section 8.3.4)

                                                                                                                                Page 148
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

9            GUIDANCE DETAILS FOR INPUT CONTROLS

9.1          Introduction
    This section contains guidance for the display of input controls and guidance for particular types of
    controls such as selection lists.
    Figure 26 shows the full user interface prescribing process in which the steps covered in this
    section are shown with a grey background:

    Figure 26: The Prescribing Process – Input Controls

                                                                                                     Page 149
                                   Design Guidance – Medications Management – Search and Prescribe
                                   Prepared by Microsoft, Version 3.0.0.0
                                   Last modified on 20 January 2010

Figure 27 is an extract from Figure 5 to illustrate the user interface prescribing steps that are
covered in this section showing the step-by-step alternative to template prescriptions and the
remaining steps for completing a prescription:

Figure 27: User Interface Prescribing Steps – The Prescription Form

The contents of a prescription form depend on the type of medication being prescribed and this
determines which attributes are required and thus which input controls will be displayed. The
prescription form is thus dynamic.
There are four aspects of a prescription form that can be considered to be ‘dynamic’:
      The display of a set of input controls. The controls displayed will depend on the type of
       medication being prescribed (see section 9.3.1)
      Input controls that may appear when a value is defined in another input control (see
       section 9.3.1)
      Input controls that may be pre-filled depending on selections elsewhere in the form (see
       section 9.3.5)
      Input controls whose dimensions may change as the form or field is completed (see
       section 7.3.7)
Figure 28 and Figure 29 show detailed prescription forms for two different types of medication that
have different sets of required fields.

                                                                                                    Page 150
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

The oral — modified-release medication in Figure 28 requires a brand name and a dose:
  Drug Details

     Drug Name and Route              diltiazem – DILZEM SR – oral – modified release                       Add a Reason for Prescribing

     Strength, Form and Device          Select a Strength    modified-release capsules

     Dose and Frequency               DOSE 60 mg

                                      twice a day             As Required

      Administration                  at these times 08:00; 20:00

                                      first dose Today 20:00                For Self Administration

     Duration                         ongoing           Add a Start Condition       Add a Review Date

                                           Add Special Instructions

                                           Patient’s own medication

                                                                                                                  Preview      Authorise

Figure 28: Detailed Prescription Showing a Set of Fields for an Oral — Modified-Release Medication

The topical medication in Figure 29 does not require a brand name but does require a method, a
strength and site:
  Drug Details

     Drug Name and Route              hydrocortisone – cutaneous                       Add a Reason for Prescribing

     Strength, Form and Device        1%                      cream

     Dose and Frequency               METHOD Apply as directed                  Left knee

                                      once a day

      Administration                  at night

                                      start Today            For Self Administration

     Duration                         ongoing           Add a Start Condition       Add a Review Date

                                         Add Special Instructions

                                         Patient’s own medication

                                                                                                                  Preview       Authorise

Figure 29: Detailed Prescription Showing a Set of Fields for a Topical Medication (Unlicensed Route)

                                                                                                                                            Page 151
                                 Design Guidance – Medications Management – Search and Prescribe
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

9.2     Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Maximise safety in the absence of decision support systems by designing for the reduction
        of errors from invalid or inappropriate selections or entries:
            Since options available in selection lists are dependent on values in other input fields,
             the opportunity for inappropriate selections or invalid combinations is reduced
       Encourage simplicity of design by promoting user interface approaches that help to avoid
        overly complex displays and interactions that require many controls:
            Prescribing forms are initially presented with as few controls as possible and it is up to
             the prescriber to progressively reveal the less frequently used options and controls
             associated with them
       Maximise flexibility and scalability of both the way that the prescribing process is supported
        by the user interface and the dimensions of the spaces in which prescribing takes place:
            The prescribing process is flexible so that it can support a short path through the
             process and many potential different longer paths
            Additional screens can be incorporated into a detailed prescription form so that many
             sets of input controls can be included in a prescription if necessary
       Manage users expectations and improve their efficiency by providing a clear framework
        with consistent logic for the placement of user interface elements and the interactions that
        they support:
            In the absence of template prescriptions, the parts that might make up a template
             prescription are simply revealed step by step
            Input fields in a prescription form are placed using the same logic that is used to place
             drug search results, cascading lists and template prescriptions
            As far as possible, all input controls use the interaction model that is familiar from
             selection list interaction model similar to that of drop-down lists, combo boxes, menus
             with submenus (see Windows User Experience Interaction Guidelines {R26}) or column
             views (see Apple Human Interface Guidelines {R44})
       Minimise the potential for important information to be hidden from view:
            Prescription forms begin by presenting input controls for the minimum required
             information and progressively reveal further input controls on demand
       Adhere to a user interface strategy that gives the impression of making progress within a
        single space (which has all the necessary information immediately or readily available) and
        avoids the impression of needing to move between many different spaces:
            The prescription allows most prescriptions to be completed within a small space whilst
             providing access to a more detailed view at any point after the type of medication has
             been established
            Navigation to additional spaces is only necessary for more complex prescriptions,
             detailed editing of administration schedules or for unusual attributes or combinations of
             attributes

                                                                                                   Page 152
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

9.3     Guidelines
      Important
      The usage examples in this section include examples of sets of fields, some of which are shown as
      required and some as optional. These examples are illustrative only and are not intended to provide
      guidance on which fields should be available for specific types of medication nor which fields should be
      required or optional.

9.3.1       Using Dynamic Controls
                                                                                                                       Evidence
 ID          Guideline                                                                            Conformance
                                                                                                                       Rating
 MSP-1820    Allow some input controls to be defined that are only displayed when certain         Mandatory            Medium
             values are selected in another input control

 MSP-1830    When determining the order in which to display input controls, prioritise the     Recommended             Low
             placement of fields whose values determine which other fields may be displayed in
             the form

 MSP-1840    When determining the order in which to display input controls, prioritise the        Recommended          Medium
             grouping together of controls whose values affect the options available in other
             controls

 MSP-1850    When an input causes new input control(s) to appear, allow other input controls to   Recommended          Low
             move so that the new one can be placed correctly and consistently

 MSP-1860    When an input causes new input control(s) to appear, place the new input controls Recommended             Low
             next (at least in sequence if not in layout) to the control that caused it to appear

 Usage Examples
                                                                                                  In this correct example, the
                                                                                                  attribute ‘Give when...’ is only
                                                                                                  displayed when a frequency
                                                                                                  including ‘as required’ has been
                                                                                                  selected (MSP-1820, MSP-1830)

                                                                                                  This example is not recommended
                                                                                                  because the field ‘Give when...’
                                                                                                  does not appear next (in
                                                                                                  sequence) to the field that caused
                                                                                                  it to appear (frequency, containing
                                                                                                  ‘as required’). (MSP-1860)

                                                                                                                             Page 153
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

                                                                                                         In this sequence of correct
                                                                                                         examples (MSP-1850, MSP-1860):
                                                                                                         1. The field ‘Give when...’ only
                                                                                                            appears when an ‘as required’
                                                                                                            frequency is selected and has
                                                                                                            already been completed by the
                                                                                                            prescriber
                                                                                                         2. When a regular frequency is
                                                                                                            selected, the field containing
                                                                                                            ‘Give when breathless’ is
                                                                                                            removed

 Rationale
 Design Analysis:
 By presenting some fields only when a specific value has been selected in a previous list (MSP-1820), the prescription form can
 proactively display dynamic fields that would otherwise not be displayed. For example, when a frequency of ‘as required’ is selected, a
 field can be presented for the selection (or entry) of a description for the conditions in which to give the medication.
 If dynamic input controls are not used, the prescription form has to display all fields for all types of medications at all times and those
 fields then have to be enabled or disabled as values are entered in other fields. This approach is not effective at prioritising fields and
 is likely to result in the required fields being spread over a larger area.
 Sentence layout depends on dynamic width controls in order to reduce the space between each prescription element so that it can be
 read as a sentence.
 Desk Research:
 Guidance in this section is informed by the following Nielsen heuristics {R17}:
  Flexibility and efficiency of use – By dynamically presenting fields based on information in other fields, the number of fields
   displayed can be kept to a minimum whilst still providing access to various additional fields that are displayed only when they are
   needed
  Aesthetic and minimalist design – The dynamic presentation of fields allows some fields to be displayed only when they are
   needed, thus keeping the remainder of fields to a minimum
 User Research:
 Study ID 68 (see APPENDIX C) identified some scenarios in which a prescription with an ‘as required’ frequency would need one or
 more additional fields to be displayed. Guidance allows the additional fields to be presented when such a frequency is selected
 depending on (at least) the drug and route. This study also identified the need to clearly label the time from which the ‘as required’
 medication can be administered and to differentiate this from the label used for a first dose for regular medications.

9.3.2        Presenting Selection Lists in Prescription forms
 Selection lists can be used to speed up the entry of prescription information by presenting
 predefined sets of choices in a list that might otherwise have to be presented as a series of
 separate input controls. For example, when entering a dose, a selection list could contain a
 predefined list of dose values and units. Alternatively, it could present a free-text box for the dose
 amount and a selection list for the dose units. If the predefined sets of doses are appropriate, the
 former approach is faster and potentially safer than the latter approach of typing in the amount in
 digits and then selecting a unit (such as milligrams or grams).

                                                                                                                                     Page 154
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

This section includes illustrations (such as those in Table 9) that show dose units (such as ‘mg’ and
‘g’) in lists that are not ordered alphabetically. The display of dose values in alphanumeric order
can result in selection lists with options such as those in Figure 30. This illustration shows a high
value dose (such as 1 g) listed next to a much lower value dose (such as 15 mg) and highlights the
patient safety risks associated with lists ordered in this way. The research necessary to provide
guidance for this area is not within the scope of this work so there is no guidance in this document
for mitigating this risk.

Figure 30: Example of a List of Dose Values in Alphanumeric Order

Table 9 illustrates a set of alternative input control styles for entering a dose. The table shows a
progression from a simple set of separate input boxes through to a more sophisticated selection list
with predefined values and a list item that includes a nested text entry box.

Style          Visual Summary                                       Description
1                                                                   Two text entry boxes
                                                                    This approach, combined with form validation to check the
                                                                    combination of the dose value and the dose unit, may be preferred
                                                                    when the selection of appropriate dose units is high risk. Form
                                                                    validation and confirmation from the user may be safer in this context
                                                                    than a pre-populated selection list.
                                                                    This approach is not recommended in the absence of sophisticated
                                                                    form validation dependent on a knowledgebase that performs
                                                                    extensive checks on the values entered.

2                                                                   A text entry box combined with a selection list
                                                                    A text entry box for a dose may be necessary when it is not
                                                                    appropriate or safe to display predefined dose values in a list. The
                                                                    dose entered will need to be validated by the system and/or
                                                                    confirmed by the user.

3                                                                   A spin control and a predefined dose unit
                                                                    This approach may be appropriate for drugs with a narrow range of
                                                                    valid doses.

                                                                                                                                   Page 155
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Style           Visual Summary                                     Description
4                                                                  A selection list containing predefined sets of values
                                                                   When it is possible to define the dose values that are commonly used
                                                                   and are appropriate for this drug, a pre-populated list can be
                                                                   effectively used to improve efficiency and require additional effort to
                                                                   define unusual dose values.
                                                                   Risks are reduced when it is possible to combine this approach with
                                                                   validation that checks the combination of prescription values and that
                                                                   those values are appropriate for the patient.

5                                                                  A selection list containing predefined sets of values including a
                                                                   list item that combines a text entry box with a predefined value.
                                                                   This approach combines style 2 with style 4 but with predefined dose
                                                                   units. It thus encourages selection rather than text entry whilst
                                                                   allowing both so that any dose value can be entered.

Table 9: Alternative Input Controls for Entering a Dose

Whilst each of these styles may be appropriate in specific circumstances, guidance promotes the
use of controls such as styles 4 and 5. It is recommended to use these styles wherever possible to
improve efficiency by allowing more than one value to be defined with a single selection and to help
limit choices to predefined values and valid combinations. Styles 1, 2 and 3 need to be combined
with form validation to check that values entered in the dose and dose unit fields are valid for the
drug and for the values entered for other attributes.
The use of controls such as styles 4 and 5 depends on the availability of predefined dose values. In
most cases, a dose value is expected to be selected as part of a template prescription and has thus
been predefined along with the other attributes in the template prescription. If a selection list
containing predefined doses is displayed independently of other attributes (as part of a step-by-step
process, see section 7.3.6), it can be pre-filled based on the drug name and attributes selected in
cascading lists. However, if a dose selection list is displayed after values have been entered for
attributes such as strength and frequency, it may no longer be valid to display those values. See
section 9.3.4 for guidance on inter-related fields and see the rationale in that section for the
associated hazards.

                                                                                                                            Evidence
ID              Guideline                                                                              Conformance
                                                                                                                            Rating
MSP-1870        Allow the ESC key to be used to close a selection list                                 Mandatory            High

MSP-1880        Combine controls (such as check boxes and text entry boxes) into a single list         Recommended          Medium
                control where this achieves a usability benefit

MSP-1890        Do not empty other fields when a selection list is reopened                            Mandatory            Medium

MSP-1900        Where possible, encourage the selection of an item from a selection list before        Recommended          Medium
                allowing free text to be entered

MSP-1910        When there is supplementary information to display for an entry in a selection list,   Recommended          Low
                display the information in grey italics

                                                                                                                                   Page 156
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

Usage Examples
                                                                                   In this correct example, the
                                                                                   frequency input control combines
     1%                    eye ointment                Select a Device             standard list items and one list item
                                                                                   that incorporates a text entry box
     METHOD Enter a method of administration                Enter a site           (MSP-1880)

     Select a frequency                 As Required

       in the morning
     at these times...
       at bedtime
     first dose...                      For Self Administration
       twice a day

      three times a day
     ongoing        Add a Start Condition     Add a Review Date
      four times a day

     every         hours

      other...

                                                                                   This example is not recommended
                                                                                   because the long list is less usable
                                                                                   (MSP-1880)

                                                                                                               Page 157
                         Design Guidance – Medications Management – Search and Prescribe
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                               This example is not recommended
                                                                               because several input controls
                                                                               have had to be used for a
                                                                               frequency input (MSP-1880)

                                                                               In this sequence of correct
                                                                               examples (MSP-1890):
                                                                               1. All the required fields for a
                                                                                  prescription have been
                                                                 1    2           completed
1                                                                              2. A selection list is reopened and
                                                                                  values remain displayed in the
                                                                                  other fields
clarithromycin           oral    DOSE 250 mg       twice a day

at these times       08:00; 20:00      first dose Today 20:00        durati

Full Prescription Form                                Preview         Author

2

clarithromycin           oral  DOSE 250 mg
                          paracetamol
                          oral                     twice a day

at these times          oral20:00
                     08:00;  – modified-release
                                      first dose Today 20:00         durati
                          intravenous – infusion
Full Prescription Form                                Preview         Author
                          other...

                                                                                                             Page 158
                   Design Guidance – Medications Management – Search and Prescribe
                   Prepared by Microsoft, Version 3.0.0.0
                   Last modified on 20 January 2010

                                                          In this sequence of correct
                                                          examples (MSP-1900):
                                                          1. A selection list is displayed
                                                          2. When ‘other’ is selected,
                                                             free-text can be entered

                                                                                        Page 159
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

                                                          In this sequence of correct
                                                          examples (MSP-1900):
                                                          1. A selection list is displayed
                                                          2. When ‘other’ is selected,
                                                             free-text can be entered
                                                          This is an alternative to the
                                                          previous example.

                                                          This example is not recommended
                                                          because free-text must be entered
                                                          and there is no opportunity to
                                                          make a selection from a list
                                                          (MSP-1900)

                                                          In this correct example,
                                                          supplementary information is
                                                          included in the list and has been
                                                          displayed in grey italics
                                                          (MSP-1910)

                                                                                        Page 160
Design Guidance – Medications Management – Search and Prescribe
Prepared by Microsoft, Version 3.0.0.0
Last modified on 20 January 2010

Rationale
Design Analysis:
Input controls for some attributes are more complex than others. Date and time guidance (including Design Guidance – Time Display
{R13}, Design Guidance – Date Display {R14} and Design Guidance – Date and Time Input {R15}) exemplifies where separate sets of
guidance are provided to ensure that these attributes are handled consistently. Within a prescription, the definition of a field such as
‘frequency’ or ‘dose’ is relatively straightforward if a preconfigured list of regularly used frequencies or doses can be presented.
The input of a frequency could be facilitated by providing more than one input control. For example, to enter any possible frequency,
the system would need to support the entry of a quantity and the selection of a unit to be able to display ‘5 days’. If presented as a
selection list, it would have to display a long list of all valid combination of values. Very long lists of values, especially where items in
the list are very similar, increase the risk of mis-selection and should be avoided as far as possible. It is thus more effective to combine
list items and text input (such as ‘5’ for ‘5 days’) and provide them for selection from within the same control (MSP-1880).
One of the advantages of building the prescription using selection lists and fields presented one by one is that the selections remain
visible and can be continually reviewed along with the other information being added to the prescription. This increases opportunities
to notice a mistake. To confirm a mistake, prescribers may want to reopen a selection list so that they can see their selection within the
list from which it was selected and still have visibility of the other attributes in the prescription (MSP-1890).
Whilst free-text fields are useful for providing flexibility in highly structured prescription forms, there is a risk that they are used
inappropriately and may result in discrepancies between the information entered in structured fields and the free-text comments. This
kind of error is reported in Prescription Errors and Outcomes Related to Inconsistent Information Transmitted Through Computerized
Order Entry {R45}. For example, a free-text field labelled ‘Special Instructions’ could be used to enter important information about
administrations that should have been entered in a separate field for which there is a selection list of predefined values. Since
selection lists are populated with predefined options, they can also be used to link to information elsewhere in the system and may be
needed for reporting and auditing. Although the provision of any free-text field is best avoided, since it may be used inappropriately, it
will still need to be provided in some instances. By providing access to a free-text field only after a selection has been made in a list
(MSP-1900), the selection of a list item is encouraged over the entry of free-text. This is because selecting from a list is easier and
because proactively presenting the selection list does not limit the user to a selection that may not be wholly appropriate. Not limiting
the user to predefined selections is particularly important if there is a risk that the user may interpret the pre-populated values as
recommendations (and this will depend on the specific example and its context).
Desk Research:
The paper Prescription Errors and Outcomes Related to Inconsistent Information Transmitted Through Computerized Order Entry
{R45} studied the incidence of inconsistencies in prescriptions created using a single electronic prescribing system in tertiary care.
The findings suggest that free-text fields can be used inappropriately to supplement or even modify values entered (or selected)
elsewhere in the prescription and that their inappropriate use may be higher for more complex prescriptions.
The ePrescribing Functional Specification {R12} includes requirements (GEN.AD.003 and GEN.AD.011) that refer to the need to allow
for different schedules for administration to be determined according to ward, specialty or drug. This requirement can be met by using
supplementary text (MSP-1910).
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Aesthetic and minimalist design – By combining controls (such as dose or frequency) the total number of controls that needs to be
  displayed is reduced
 Error prevention – A reduction in the number of selections that has to be made reduces the number of times a user is exposed to
  the risk of mis-selection
 Flexibility and efficiency of use – Combining controls allows the user to define a number of values by making a single selection
  from a pre-populated set of values presented as a list
User Research:
Guidance for the display of supplementary text in selection lists (MSP-1910), meets a requirement identified in Study ID 67 (see
APPENDIX D) to indicate administration schedules that do not correspond with ward round times.

                                                                                                                                    Page 161
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

  Hazard Risk Analysis Summary:
  From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
  some of which are mitigated by the design and one that is not mitigated by guidance
      Potential Hazards:                                              Mitigations:
       A selection list in the prescribing area may obscure           Selection lists can collapse once a selection has been made if
        important information in a list of current medications          necessary to preserve visibility of other information (see
                                                                        section 6.3.2)
       Important information about a prescription is not carried  MSP-1900 recommends that ,wherever possible, drop-down lists
        forward into other medications views because it was          are presented before free-text can be entered
        entered into a free-text field instead of a structured field
       A prescription is not wholly reviewed because the            Guidance recommends that the number of different types of
        information is displayed in different formats, split across   controls are minimised, which reduces the different formats used
        many different controls                                       to display it (see section 8.1)
                                                                       Selection lists are used to combine values (such as those in a
                                                                        template prescription) and display them a format similar to that
                                                                        displayed in a medication line (see section 7.3.3)
                                                                       MSP-1880 recommends combining controls into a single control
       Individual administration times have to be defined by          MSP-1910 recommends the use of grey italic text for
        the prescriber and result in non-standard times                 supplementary information and this could be used to indicate
                                                                        when an administration schedule is non-standard
       A large dose value is mis-selected because it is               This risk is not mitigated by guidance
        displayed adjacent to the intended small dose value in
        a selection list ordered alphanumerically

9.3.3         Using Selection Lists to Prioritise
 When a selection list is used to enter values for a prescription, more common values can be placed
 at the top of the list so that they are easier to find. This process of placing such values at the top of
 the list is referred as ‘prioritisation’ and this section provides guidance for prioritising selection lists
 that may be presented in any part of the prescribing process.

                                                                                                                              Evidence
 ID              Guideline                                                                               Conformance
                                                                                                                              Rating
 MSP-1920        Prioritise the items displayed in a selection list by separating them into sections     Recommended          Medium

 MSP-1930        Limit the options available in the first section of a selection list (and in automatically Recommended       Medium
                 presented cascading lists) to relevant values

 MSP-1940        When there are further choices than are displayed by default in a prioritised list,     Recommended          Low
                 provide access to further options with an additional section of the list

 MSP-1950        When a more detailed view is available for defining the values in a prioritised list    Recommended          Medium
                 (such as one for editing individual administration times), include a single list item
                 for accessing that view at the end of the selection list

                                                                                                                                    Page 162
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
                                                                           In this sequence of correct
                                                                           examples (in which the prescriber
    1
                                                                           can access an extended list of
                                                                           routes)
   chloramphenicol      auricular
                        paracetamol                     1   2   3          (MSP-1920, MSP-1930,
                                                                           MSP-1940):
                        ocular
                                                                           1. A list of routes is presented
                        other...                                           2. ‘Other’ is selected and a further
                                                                              (unlicensed) route is revealed
                                                                           3. ‘Other’ is selected again and
    2                                                                         an extended list of routes is
                                                                              revealed
   chloramphenicol      paracetamol
                        auricular                                              Note

                        ocular                                                 In practice, the word ‘other’
                                                                               may be replaced by a label
                        cutaneous                                              that more accurately describes
                                                                               the contents of the list that will
                        other...                                               be revealed when that option
                                                                               is selected.
    3

   chloramphenicol      paracetamol
                        auricular

                        ocular

                        cutaneous

                        auricular

                        body cavity use

                        cutaneous

                        dental

                        endosinusial

                                                                                                       Page 163
                 Design Guidance – Medications Management – Search and Prescribe
                 Prepared by Microsoft, Version 3.0.0.0
                 Last modified on 20 January 2010

                                                                                                           This example is incorrect because
                                                                                                           the long list could have been
     chloramphenicol                   auricular                                                           separated into sections and a first
                                                                                                           section could have been provided
                                       body cavity use                                                     that contains appropriate
    Full Prescription Form                                                  Preview            Author      commonly selected routes (MSP-
                                       cutaneous                                                           1920, MSP-1930)

                                       dental

                                       endosinusial

                                       endotracheopulmonary

                                       epidural

                                       gingival

                                       intraarterial

                                       intraarticular

                                        intravenous – infusion

                                        intravenous – injection

                                        ocular

                                        oral

                                                                                                           In this correct example, a list of
                                                                                                           sets of administration times is
                                                                                                           supplemented with an option that
                                                                                                           opens a more detailed view in
                                                                                                           which individual administration
                                                                                                           times can be edited (MSP-1950)

Rationale
Design Analysis:
The guidance in this section is primarily aimed at mitigating the risks of mis-selection. Prioritising selection lists by dividing the list into
sections (MSP-1920) helps to:
 Mitigate the mis-selection risks that are attributed to the difficulties associated with navigating and selecting from long lists
 Reduce the cognitive load associated with making a choice because there are fewer choices within each section (MSP-1930)
 Make the most common options readily available and ensure that the less common options take a little more effort to get to
  (MSP-1940)
In some cases, it may not be advisable for an item to be available in a selection list because it should be defined in the context of other
information or because patient safety concerns require that it is much more difficult to access. For example, it may be acceptable to
select from a list of predefined sets of administration times but not to edit individual administration times so that they are different on
consecutive days without viewing the whole schedule. In this case, to maintain the simplicity of the prescription whilst providing access
to these less frequently used and sometimes more complex options, a list item (such as ‘Other...’ or ‘Edit administration times’), can be
provided that opens a new dialog or redirects users to an area of the prescription form in which they can specify more information
(MSP-1950).

                                                                                                                                        Page 164
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Desk Research:
 The use of sections in a selection list and the hiding of options that can be considered to be more ‘advanced’ help to break the
 information into chunks. The use of ‘chunking’ and the principle of reducing load on short-term and working memory are described in
 Shneiderman’s Strategies for effective human-computer interaction {R18}.
 MSP-1940 allows the prioritisation of routes that are normally prescribed whilst still allowing routes not normally associated with the
 drug to be selected. This meets a requirement (GEN.OS.050) in the ePrescribing Functional Specification {R12} to support prescribing
 drugs using routes that are not normally associated with them. The prioritisation of routes can also be used as part of a mechanism
 that meets the requirement (GEN.OS.062). The requirement is to be able to prioritise specific routes of administration for patients that
 have reduced or unusual requirements but to still provide access to other routes (with reminders or alerts).
 Guidance in this section is informed by the following Nielsen heuristics {R17}:
  Flexibility and efficiency of use – Selection lists can be prioritised so that the most likely (or most appropriate) values appear
   towards the top, thus reducing the need for the complete list to be reviewed
  User control and freedom – Even though lists are prioritised, other options are available by making selections from the list that
   reveal further choices
 User Research:
 Findings from Study ID 67 (see APPENDIX D) suggest that the ability to change the dose units (for example, from milligrams to grams)
 introduces the risk that an incorrect unit (and therefore an incorrect dose) can be easily selected. Selection lists can be used to limit
 the choices based on other values selected (MSP-1930) such that the dose units could be set to milligrams if appropriate and either
 ‘locked’, so that it cannot be changed, or displayed as the only value in the prioritised section of a selection list. An option such as
 ‘other’ can be provided to display an input control for changing the dose units.
 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
 which are mitigated by the guidance:
      Potential Hazards:                 Mitigations:
       An antibiotic is prescribed       Appropriate pre-filling of fields based on the drug name and route (see section 9.3.5)
        without an end date               Prioritising options in selection lists (MSP-1920)
       A list item is mis-selected       Prioritising of selection lists to promote the most likely (or most appropriate) selection targets
                                           to the top of the list (MSP-1920)
                                          Restricting options available in selection lists so that some selections are more difficult to
                                           access than others (MSP-1930)

9.3.4         Presenting Selection Lists for Inter-Related Fields
 This section includes guidance for the placement of fields with dynamic selection lists that may
 contain different list items depending on selections made in other fields. It also includes guidance
 for the behaviour of fields when a value is selected in a related field or a value is selected that
 affects other fields.
 Entering a value into a field may also cause a related field to be pre-filled. See section 9.3.5 for
 guidance on pre-filling.

                                                                                                                               Evidence
 ID              Guideline                                                                                Conformance
                                                                                                                               Rating
 MSP-1960        Where relevant, use supplementary text in a drop-down list of options if the             Recommended          Low
                 selection will affect other options in the form

 MSP-1970        Where data is available, update the contents of a selection list based on selections Mandatory                High
                 made in related fields

 MSP-1980        When displaying list items that are not valid in relation to values selected in other    Recommended          Low
                 fields, list them in a separate section in the selection list

 MSP-1990        When a list item is selected that is not valid in relation to values selected in other   Mandatory            High
                 fields (and data is available to support this) clear the other fields

                                                                                                                                      Page 165
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

MSP-2000   As far as possible, present input controls for fields that are inter-dependent close   Recommended            Medium
           to one another

MSP-2010   In a system that cannot validate entered values (because decision support              Recommended            Medium
           checking is not available), when a selection list is reopened and a different value
           selected, clear entries in all input controls that are interdependent

Usage Examples
                                                                                                  In this correct example of a list of
                                                                                                  strengths, a selection will limit or
                                                                                                  change the options available for
                                                                                                  form. Both grouping and
                                                                                                  supplementary text for each group
                                                                                                  have been used to indicate that a
                                                                                                  selection will affect other options in
                                                                                                  the form (MSP-1960)

                                                                                                  This example is not recommended
                                                                                                  because the selection list has not
                                                                                                  been divided into sections and
                                                                                                  supplemented with text. When an
                                                                                                  item in this selection list for
                                                                                                  strength is selected, it will affect
                                                                                                  the choices available in the form
                                                                                                  selection list (MSP-1960)

                                                                                                                               Page 166
                         Design Guidance – Medications Management – Search and Prescribe
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                                 In this sequence of correct
                                                                                 examples (MSP-1970, MSP-1980,
                                                                                 MSP-1990, MSP-2000):
                                                               1   2     3   4   1. Strength has been selected
                                                                                    and form is required
1                                                                                2. The selection list for form
    100 micrograms per dose    Select a form           Select a Device              displays choices that are
                                                                                    relevant for the selected
                                                                                    strength. Choices for other
2                                                                                   strengths are listed in a
    100 micrograms per dose    aerosol                 Select a Device              separate section (in this case
                                                                                    accessible through ‘Other…’)
                                paracetamol
                                aerosol
                                                                                 3. When ‘Other’ is clicked, the
                                aerosol CFC free                                    choices that relate to other
                                                                                    strengths are displayed
                                Other... for other strengths
                                                                                 4. If a form is selected from the
                                                                                    ‘For other strengths’ section,
                                                                                    the strength is cleared and
3                                                                                   must be re-entered
    100 micrograms per dose    aerosol                 Select a Device

                                paracetamol
                                aerosol

                                aerosol CFC free

                                                   For other strengths

                                powder capsules

                                powder blisters

                                powder cartridge

                                nebuliser liquid

4
    Select a strength   powder cartridge         Select a Device

                                                                                 This example is incorrect because
                                                                                 the contents of this selection list
                                                                                 have not been updated to match
                                                                                 the selected strength (MSP-1970)
                                                                                 It is also not recommended
                                                                                 because the list has not been
                                                                                 separated into sections such that
                                                                                 the choices that are not valid for
                                                                                 the selected strength are displayed
                                                                                 in a separate section (MSP-1980)

                                                                                                            Page 167
                Design Guidance – Medications Management – Search and Prescribe
                Prepared by Microsoft, Version 3.0.0.0
                Last modified on 20 January 2010

 Rationale
 Design Analysis:
 When the contents of some fields are dependent on the value entered or selected in others, providing a set of input controls that can
 be completed in any order presents some patient safety challenges.
 The patient safety risks are well illustrated by an example of the relationship between dose, strength and form. Taking salbutamol as
 an example, if a strength of ‘100 micrograms per dose’ is selected and then a form of ‘aerosol’ is selected, the dose can only be
 defined as a number of puffs. If the form is then changed from aerosol to dry powder, the strength must be cleared because it is no
 longer valid for that form. When the form control is activated, the list may contain ‘dry powder’, even though it is not valid, but it should
 be displayed in a separate section and labelled so that the user knows that selecting it will result in the strength being cleared. In a
 design alternative in which the form selection list would only display ‘aerosol’, because that is the only form that is valid for the selected
 strength, the user is forced to change the strength in order to change the form.
 The placement of inter-related controls close to one another helps to communicate the relationship between them and ensure that,
 when changes in one field impacts another, they cause minimum disruption to the dynamic form and provide strong feedback for the
 results of a selection.
 The presentation of ‘invalid’ options in a separate section provides some flexibility for ‘unusual’ combinations to be selected that would
 normally be disallowed. If a combination of values is very rarely used, but must be accommodated, a system that is unable to check
 values entered may instead require extra confirmation or reselection of one or more related values.
 Desk Research:
 Guidance in this section is informed by the following Nielsen heuristics {R17}:
  Visibility of system status – The feedback for a selection of an entry in an inter-related field is stronger if the fields that it effects are
   visibly grouped
  Error prevention – The demotion of options that will affect values in other fields draws attention to the fact that selecting them
   results in an invalid combination of values in the prescription
  Flexibility and efficiency of use – The presentation of values that might otherwise be suppressed allows flexibility in the system
   design that could be used to accommodate specialist use
 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
 which are mitigated by the guidance:
      Potential Hazards:                                         Mitigations:
       Strength is changed after a dose has already been         When strength is selected or changed after dose, the dose must be
        defined and the resulting combination is not               reconfirmed (MSP-1970)
        relevant for the patient
       Inappropriate combinations are selected                   When a list item is selected that is not valid in relation to values
                                                                   selected in other fields, clear the other fields (MSP-1970, MSP-1990)

9.3.5         Pre-Filling Input Controls
 This section contains guidance for presenting field that already contain a value and pre-filling fields
 when values are defined in other fields.
 Pre-filling input controls is most likely when fields are inter-related such that a value in one causes
 the other to be pre-filled. See section 9.3.4 for guidance on inter-related fields.

                                                                                                                                    Evidence
 ID             Guideline                                                                                   Conformance
                                                                                                                                    Rating
 MSP-2020       Support pre-filling of fields (or sets of fields) when they are first displayed and         Mandatory               High
                ensure that the pre-filled values are based on at least the drug name and route (or
                attributes from which the type of medication can be derived).

 MSP-2030       Allow the contents of all fields to be reselected such that a pre-filled value, previous Recommended                Medium
                choice or text entry can be changed (even if the associated selection list has only
                one option)

                                                                                                                                        Page 168
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

MSP-2040   When a value is selected in a field, pre-fill appropriate fields that have defaults (or   Recommended           Low
           only one possible value) based on the selected value (for example, pre-fill
           administration times when a frequency is selected)

MSP-2050   Use formatting (such as highlighting) to draw attention to a field whose contents         Mandatory             High
           have changed automatically rather than directly by the user

MSP-2060   Pre-fill administration times and time of first dose (or equivalent for once only and     Recommended           Low
           as required medications) when frequency has been selected

Usage Examples
                                                                                                     In this sequence of correct
                                                                                                     examples:
                                                                                                     1. A frequency has not yet
                                                                                                          been entered
                                                                                                     2. When the frequency has
                                                                                                          been entered, the
                                                                                                          administration times and first
                                                                                                          dose fields are pre-filled
                                                                                                          automatically (MSP-2060)
                                                                                                     The automatically filled values are
                                                                                                     based on the drug and route as
                                                                                                     well as the frequency (MSP-2020)
                                                                                                     The pre-filled fields are
                                                                                                     highlighted to emphasise that they
                                                                                                     have been completed
                                                                                                     automatically (MSP-2050)

                                                                                                                                 Page 169
                         Design Guidance – Medications Management – Search and Prescribe
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                                                      In this sequence of incorrect
                                                                                                      examples:
                                                                                                      1. A frequency has not yet
                                                                                                           been entered
                                                                                                      2. When the frequency has
                                                                                                           been entered, the
                                                                                                           administration times and first
                                                                                                           dose fields are pre-filled
                                                                                                           automatically.
                                                                                                      This sequence of examples is
                                                                                                      incorrect because the
                                                                                                      administration times and time of
                                                                                                      first dose have been filled
                                                                                                      automatically and formatting has
                                                                                                      not been used to draw attention to
                                                                                                      them. (MSP-2050)

Rationale
Design Analysis:
Alternative designs were assessed in which one design presented a list of template prescriptions that can be selected to fill in a
number of fields and the other displayed fields already pre-filled when the prescription form was opened. The display of template
prescriptions requires the prescriber to make an explicit and active choice whereas pre-filled values can be passively accepted.
Guidance must balance the need to improve efficiency with the need for the prescriber to make an active choice. The following
approach to pre-filling is thus reflected in the guidance:
 Drug name and other attributes that define the type of medication must be explicitly selected. Pre-filling happens when there is only
  one possible value
 Template prescriptions allow other important attributes (such as dose and frequency) to be explicitly selected
 In the absence of template prescriptions, important attributes (such as dose and frequency) are presented one by one and an
  explicit choice must be made. Pre-filling happens when there is only one possible value
 When a prescription form is opened, remaining fields are only pre-filled if appropriate and can all be modified by the prescriber
  (MSP-2020)
 Fields can be pre-filled when a specific value is selected in another field. For example, administration times could be pre-filled once
  a frequency has been selected (MSP-2040, MSP-2060))

                                                                                                                                Page 170
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 See also section 7.3.6 for guidance on pre-filling when presenting fields step by step and section 9.3.6 for guidance on the pre-filling of
 specific input controls.
 Desk Research:
 The pre-filling of fields such as administration times (MSP-2020), reflects the GEN.OS.052 requirement in the ePrescribing Functional
 Specification {R12} to provide the ability to define that specific medications should be routinely scheduled for administration at certain
 times of day and to allow the system to default to these values.
 Guidance in this section is informed by the following Nielsen heuristic {R17}:
  Flexibility and efficiency of use – Efficiency is improved by pre-filling appropriate fields (such as administration times
 User Research:
 Two designs were assessed in Study ID 46 (see APPENDIX E), one of which used pre-filling and the other used template
 prescriptions. The study recommended the use of active selection (template prescriptions) rather than passive pre-filling.
 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
 which are mitigated by the guidance:
    Potential Hazards:                                                Mitigations:
     A default value is defined that is inappropriate for the         Pre-filled values must be appropriate for the drug and route at
      selected drug and or other values in the prescription             least and preferably also reflect other values defined in the
                                                                        prescription (MSP-2020)
     A prescription is authorised with a value that was not the       Guidance requires the use of formatting to draw attention to a
      intended value because it had been automatically                  field whose contents have changed automatically (MSP-2050)
      updated when a value was defined in another field                The contents of all fields can be changed such that a pre-filled
                                                                        value can be changed (see section 7.3.6)
     An antibiotic is prescribed without an end date                  Appropriate pre-filling of fields based on the drug name and
                                                                        route (MSP-2020).
     Individual administration times have to be defined by the        Pre-filling administration times when the frequency is defined
      prescriber and result in non-standard times                       (MSP-2060)
                                                                       Providing a selection list of (common) administration schedules
                                                                        (see section 9.3.6)
                                                                       Restricting the definition of individual administration event times
                                                                        to a more detailed view (see section 9.3.6)
                                                                       Where appropriate, pre-fill one or more fields when a selection is
                                                                        made in a related field (see section 7.3.6).

9.3.6        Presenting Input Controls
 This section includes guidance relating to the display of specific input controls such as those for
 dose and administration times.

                                                                                                                                Evidence
   ID             Guideline                                                                            Conformance
                                                                                                                                Rating
   MSP-2070       When a dose field (or equivalent) is displayed, also display a label for the dose Mandatory                   High
                  (either within or outside of the input control)

   MSP-2080       If possible, do not allow the selection of a unit of measurement for a dose that     Recommended              High
                  would result in an invalid value when combined with the number entered for
                  the dose amount

   MSP-2090       When a strength field is displayed, also display a label for the strength field or   Mandatory                Medium
                  a group label including the word ‘strength’

   MSP-2100       Do not present strength and dose input controls next to each other (side by          Mandatory                Medium
                  side) in a detailed prescription form

                                                                                                                                       Page 171
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

MSP-2110   When displaying a list of administration times, display the dose for the first        Mandatory             Medium
           scheduled administration in bold

MSP-2120   Do not display a horizontal (text-only) list of administration times for schedules Recommended              Low
           containing more than six administration events in 24 hours

MSP-2130   Provide a selection list containing predefined sets of administration times           Recommended           Medium

MSP-2140   Do not display input controls for entering or editing individual administration       Mandatory             Medium
           times within the view that shows all the required fields for a prescription

MSP-2150   For all prescriptions, require a date and time to be defined (or pre-filled) for:     Recommended           Medium
            The first dose (for regular medications)
            The starting date and time (for as required medications)
            The only dose (for once only medications)

MSP-2160   Use unique labels for the following fields:                                           Recommended           Medium
            The first dose (for regular medications)
            The starting date and time (for as required medications)
            The only dose (for once only medications)
               Note
               This guidance point does not constitute a recommendation for the specific
               text of those labels

MSP-2170   Do not provide a check box for fields with two opposite states when one of            Recommended           Low
           those states causes a related field to be presented. (For example, do not
           provide a check box to set ‘as required’ to on or off if a setting of ‘on’ requires
           another field to be presented to qualify the conditions for administration)

Usage Examples
                                                                                                 This example is incorrect because
                                                                                                 a dose field is displayed without a
                                                                                                 label (MSP-2070)

                                                                                                                              Page 172
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

Drug Details                                                                      In this correct example, a label is
                                                                                  provided for the strength, form and
                                                                                  device fields (MSP-2090)
   Drug Name and Route         chloramphenicol – cutaneous

                               Reason for prescribing using an unlicens

   Strength and Form           1%                  eye ointment

   Dose and Frequency          METHOD Apply as directed               Left knee

                                twice a day

   Administration              at these times 08:00; 20:00               Add an

                               first dose Today 20:00

   Duration                     ongoing       Add a Start Condition

                                                                                  In this correct example, a label is
                                                                                  provided for the strength field
                                                                                  (MSP-2090)

                                                                                                                Page 173
                        Design Guidance – Medications Management – Search and Prescribe
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

                                                                     This example is incorrect because
                                                                     a strength field is displayed without
                                                                     a label for the field or for the group
                                                                     (MSP-2090)

                                                                     This example is correct because
                                                                     the strength and dose fields are not
                                                                     next to one another (side by side)
                                                                     (MSP-2100)

                                                                     This example is incorrect because
                                                                     the strength and dose fields are
  Select a Form    Select a Device        Enter a Site               next to one another (side by side)
                                                                     (MSP-2100)
100 micrograms per puff        DOSE 1 to 2 puffs

four times a day         As Required

at these times 08:00; 14:00; 20:00

first dose Today 14:00               For Self Administration

                                                                                                    Page 174
            Design Guidance – Medications Management – Search and Prescribe
            Prepared by Microsoft, Version 3.0.0.0
            Last modified on 20 January 2010

                                                                                In this correct example, the
         Drug Name     clarithromycin – oral                                    scheduled administration time at
                                                                                which the first dose is due to be
                                                                                given is displayed in bold.
               Dose              250   mg                                       (MSP-2110)

          Frequency    twice a day

Administration Times   08:00; 20:00

          First Dose   02-Apr-2010 20:00

           Duration    7 days

                                                  Preview      Authorise

                                                                                This example is not recommended
                                                                                because horizontal lists of
                                                                                administration times should not be
                                                                                displayed for schedules containing
                                                                                more than six administration events
                                                                                in 24 hours (MSP-2120)

                                                                                In this correct example, a selection
                                                                                list is provided that contains sets of
                                                                                administration times that are valid
                                                                                for the prescription attributes
                                                                                defined so far (MSP-2130)

                                                                                This example is incorrect because
                                                                                administration times should not be
                                                                                displayed in controls that allow
                                                                                them to be edited individually
                                                                                (MSP-2140)

                                                                                                               Page 175
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

                                                                                      In this sequence of correct
                                                                                      examples:
                                                                                      1. A selection list is used to
     1                                                                    1       2        remove the attribute ‘as
            salbutamol – inhaled               Add a Reason for Prescribing
                                                                                           required’.
                                                                                      2. When ‘as required’ is
                                                                                           removed, the related field
   Device     Select a Strength    nebuliser liquid             Select a Device
                                                                                           containing ‘Give when
                                                                                           breathless’ is also removed
            DOSE 2.5              mg              Enter a Site                             and its contents are lost
                                                                                           (MSP-2170)
            four times a day                  as required

                                                      Remove
            Give when breathless

            starting from Today 11:04

     2
            salbutamol – inhaled               Add a Reason for Prescribing

   Device     Select a Strength    nebuliser liquid             Select a Device

            DOSE 2.5              mg              Enter a Site

            four times a day

            starting from Today 11:04

                                                                                      This example is not recommended
            salbutamol – inhaled              Add a Reason for Prescribing            because a checkbox has been
                                                                                      used for a control (‘as required’)
                                                                                      that causes another input control to
nd Device     Select a Strength    nebuliser liquid             Select a Device
                                                                                      appear. If the checkbox is selected,
                                                                                      the related field containing ‘Give
            DOSE 2.5              mg             Enter a Site                         when breathless’ is removed and
                                                                                      its contents are lost (MSP-2170)
            four times a day                   As Required

            Give when breathless

            starting from Today 11:04

                                                                                                                      Page 176
                 Design Guidance – Medications Management – Search and Prescribe
                 Prepared by Microsoft, Version 3.0.0.0
                 Last modified on 20 January 2010

Rationale
Design Analysis:
See also the rationale in section 7.3.7 for guidance on the provision of labels for fields whose contents may be interpreted as
belonging to a different control.
The use of text boxes that present selection lists when activated is an effective means of minimising the number of controls and
focusing more attention on the information and less on the controls. Guidance recommends not using a check box for attributes
that are linked to the appearance of new controls such that ticking the check box causes a new field to appear. (MSP-2170)
For example, ‘as required’ (PRN) medications may need an additional field for selecting or entering a description of when to give
the medication. If the ‘as required’ attribute is displayed as a check box, then ticking it causes the dynamic field (description of
when to give the medication) to appear. If a selection or entry is made in that field, and the tick is removed from the check box,
then either the information entered in the field is lost or alerting the user is necessary to draw attention to the field’s removal. Since
removing the tick inadvertently is simple, but re-entering the lost information lost takes time, a better control can help to avoid this
loss of information.
It is considered acceptable to display up to six administration times as a horizontal list because:
 They are likely to be pre-filled when a frequency is selected
 The individual times are expected to conform to ward round times that are preconfigured
 The list of administration times can be supplemented with text such as ‘standard times’
 The specific administration times are supplemented by the frequency and time of first dose (or equivalent)
 More frequent administration times are better handled in a more detailed view in which a more detailed administration schedule
  can be displayed (MSP-2120)
When a set of administration times is pre-filled, or selected from a drop-down list, the display of the times in a horizontal line (such
as 08:00, 20:00) is designed to supplement the frequency and to support recognition of a familiar set of administration times. The
readability issues with displaying administration times in a horizontal list are thus mitigated by the display of the frequency and the
time and date of the first scheduled administration. The display of administration times in a horizontal list (a sentence) for more
than six administration times is unlikely to be useful in supporting quick recognition of a familiar set of administration times and an
alternative control or a more detailed administration view may be more effective.
See also section 9.3.5 for general guidance on pre-filling input controls and section 7.3.6 for guidance on pre-filling when
presenting fields step by step.
For rationale relating to the display of labels, see the following:
 Section 7.3.7 for labels in sentence layout
 Section 8.3.1 for guidance on label alignment
 Section 8.3.3 for when to display labels
Desk Research:
The ePrescribing Functional Specification {R12} requirement GEN.OS.043 indicates that an ‘as required’ medication has an
indicative frequency (or maximum dose or frequency) and requires qualification of the circumstances in which it is to be given
(MSP-2170).
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Aesthetic and minimalist design – Minimising the visual noise introduced by input controls (fields) and maximising the relative
  emphasis on the information within them
 User control and freedom – By providing selection lists to change values in a field that may cause other fields to be removed or
  cleared, the user is less likely to choose an action that results in loss of data

                                                                                                                                   Page 177
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks,
some of which are mitigated and some partially mitigated by the guidance:
   Potential Hazards:                        Mitigations:
    An inappropriate administration        Providing a selection list of (common) administration schedules (MSP-2130)
     schedule is defined as a result of an  Not recommended to allow individual administration times to be edited only in the
     individual administration time being    context of a view that displays a detailed administration schedule (MSP-2140)
     edited inappropriately
    A medication is started later than       The first scheduled dose is displayed in bold within the list of administration times
     intended because the prescriber           (MSP-2110)
     does not notice that the first           When there is more than one dose, the first dose date and time is displayed in a
     scheduled dose is too far into the        separate field (in addition to the administration times) (MSP-2150)
     future
    The label ‘start date’ is incorrectly  Guidance recommends that the label for this field is different for regular, as
     interpreted causing an inappropriate    required and once only medications to clarify the meaning of the date and time
     administration schedule                 (MSP-2160)
    Individual administration times have     Pre-filling administration times when the frequency is defined (see section 9.3.5)
     to be defined by the prescriber and      Providing a selection list of (common) administration schedules (MSP-2130)
     result in non-standard times
                                              Restricting the definition of individual administration event times to a more
                                               detailed view (MSP-2140)
                                              Where appropriate, pre-fill one or more fields when a selection is made in a
                                               related field (see section 7.3.6)
    An inappropriate value is defined as  This risk is not mitigated by the guidance. The definition of appropriate default
     a default                              values is a local system configuration issue and is thus outside of the scope of
                                            this design guidance
    An input control for a dose is            Dose and strength can be entered by selecting a template prescription (see
     displayed adjacent to an input             section 7.3.4) or by selecting values for individual fields that are presented in
     control for a strength and causes the      sequence (see section 7.3.6). Thus they only appear adjacent after they have
     dose value to be interpreted as the        already been completed
     strength or vice versa                    In sentence layout (when dose and strength are most likely to appear adjacent),
                                                guidance recommends that labels are incorporated into fields, so the dose label
                                                immediately precedes the dose value (see section 7.3.7)
                                              Guidance recommends that labels are used for all fields whose contents could be
                                               interpreted as belonging to a different control (see section 7.3.7)
                                              The dose field is always labelled (MSP-2070)
                                              Strength and dose fields must not be placed adjacent in detailed prescription
                                               forms (MSP-2100) and strength fields must be accompanied by a label that uses
                                               the word ‘strength’ for the individual field or the group containing the strength field
                                               (MSP-2090)

                                                                                                                               Page 178
                          Design Guidance – Medications Management – Search and Prescribe
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

10        GUIDANCE DETAILS FOR PREVIEW AND AUTHORISE

10.1 Introduction
 Once a prescriber has completed entering prescription details, a preview of the prescription in a
 more familiar format (such as that displayed in a Current Medications View) allows the prescriber to
 review his or her entry before authorising. This section provides some guidance relating to
 previews and the placement of controls for authorising prescriptions.
 Figure 31 shows the full user interface prescribing process in which the steps covered in this
 section are shown with a grey background:

 Figure 31: The Prescribing Process – Preview and Authorise

                                                                                                  Page 179
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Figure 32 is an extract from Figure 31 to illustrate the user interface prescribing steps covered in
 this section showing the preview and authorise steps and the links to and from them:

 Figure 32: User Interface Prescribing Steps–- Preview and Authorise

10.2 Principles
 All guidance is informed by all of the principles for search and prescribe listed in section 2.1. The
 following are particularly relevant to this section:
       Mitigate the risks of mis-selection and misinterpretation:
                 Appropriate setting of focus can help avoid mis-selection of a control such as
                  ‘Authorise’.
       Maximise safety in the absence of decision support systems by designing for the reduction
        of errors from invalid or inappropriate selections or entries:
                 The preview is always available so that prescribers have access to the full prescription
                  in a format that is both more condensed and familiar from other medications views
       Maximise scalability such that the prescribing process can be modified to accommodate
        additional information, steps or shortcuts:
                 The preview can be extended in a system that can save completed prescriptions before
                  authorisation such that they can then be reviewed and authorised as a group
       Minimise the potential for important information to be hidden from view:
                 A preview can become a required step when more detailed prescriptions are defined in
                  which the input controls are distributed across more than one screen

                                                                                                     Page 180
                                Design Guidance – Medications Management – Search and Prescribe
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

10.3 Guidelines
10.3.1      Providing a Preview
 This section includes guidance for how to provide and display a preview of all information defined
 within a prescription, before final authorisation of the prescription.

                                                                                                                          Evidence
 ID          Guideline                                                                              Conformance
                                                                                                                          Rating
 MSP-2180    Provide a control for displaying a preview                                             Mandatory             High

 MSP-2190    Include all values defined as part of the prescription in a preview                    Mandatory             High

 MSP-2200    Adhere to guidance in Design Guidance – Medication Line {R3} for the display of        Mandatory             Medium
             drug details in a preview

 MSP-2210    Do not introduce a preview as a compulsory step before a detailed prescription         Recommended           Medium
             form has been opened

 MSP-2220    Require a preview to be presented before a prescription can be authorised when         Mandatory             High
             the prescription details are distributed over more than one screen such that a
             navigation control (such as a button or tab) is needed to move between screens

 MSP-2230    Do not display the medication line within a preview as a long line of text extending   Recommended           Low
             for longer than 120 characters without wrapping onto a new line

 MSP-2240    Where relevant, display some prescription attributes in a preview using a format     Recommended             Medium
             similar to that used in other medications views (though different to the format used
             for the input control)

 MSP-2250    Provide a control for closing the preview and returning to the prescription form       Mandatory             Medium
             (such that the prescription can be amended)

 MSP-2260    Set default focus to the control that closes the preview                               Mandatory             Medium

 Usage Examples
                                                                                                    In this correct example, a button is
                                                                                                    provided for displaying a preview
                                                                                                    (MSP-2180)

                                                                                                                                 Page 181
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

                                                                                                      In this correct example, the
                                                                                                      preview displays the prescription
                                                                                                      information in a format similar to
                                                                                                      that used in a Medications List
                                                                                                      View and a control for closing the
                                                                                                      preview is provided and has focus
                                                                                                      by default (MSP-2190, MSP-2200,
                                                                                                      MSP-2250, MSP-2260)

                                                                                                      In this correct example, the
                                                                                                      preview displays administration
                                                                                                      times in a format similar to that
                                                                                                      used in a Drug Administration View
                                                                                                      (MSP-2190, MSP-2200,
                                                                                                      MSP-2220, MSP-2240)

                                                                                                      This illustration of a preview is not
                                                                                                      recommended because the
                                                                                                      preview has been displayed as a
                                                                                                      long line of text that exceeds 120
                                                                                                      characters without wrapping onto a
                                                                                                      new line (MSP-2230)

Rationale
Design Analysis:
When a preview is displayed for every single prescription, the risk that the contents of the preview are ignored is higher than when the
preview is only displayed in specific circumstances or on demand. The more information that has been entered into a prescription, the
more important it is that a preview is provided so that the information can be reviewed without having to read it from within a series of
input controls. The prescription can be displayed in a preview such that it looks the same as it would in another view, such as a
Medications List View or a Drug Administration View.
When the design of a prescription form makes it easy to read the information (without getting distracted by input controls, command
buttons or visual design), a preview is less critical. However, a preview is very effective at encouraging a review of the prescription
details prior to authorisation when information has been entered into a prescription form that spans many tabs or windows (such as
pop-up dialogs).
Desk Research:
Guidance in this section is informed by the following Nielsen heuristics {R17}:
 Error prevention – When the contents of a prescription cannot be displayed within a single view, a preview can facilitate the review
  of all prescription values before the prescription is submitted (MSP-2180, MSP-2190)
 User control and freedom – The preview is an optional step (MSP-2210) since, in the simplest prescriptions, all of the prescription
  details can be effectively reviewed within the input controls
User Research:
Guidance for the presentation of a preview when prescription details are spread across more than one screen (MSP-2220) is informed
by the findings of Study ID 67 (see APPENDIX D). The study found that, when considering prescribing processes with greater and
fewer steps (longer and shorter prescribing processes), a preview becomes more useful and important when there are more steps (a
longer process). User research was unable to determine whether a mandatory preview step is beneficial since some participants
currently using such a system reported that the preview step was often ignored.
Study ID 67 also recommends that a preview step has an option that allows the user to return to the prescription form and amend it
(MSP-2250).

                                                                                                                                  Page 182
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Hazard Risk Analysis Summary:
 From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
 which are mitigated by the guidance:
      Potential Hazards:                                             Mitigations:
       A prescription is authorised with unintended values that  Require a preview when the prescription values cannot be seen in
        were not visible from the page from which it was           a single screen (regardless of whether the view has a scroll bar)
        authorised                                                 (MSP-2220)
       A prescription is authorised by activating a control in       By default, focus is set to the control that closes the preview
        error                                                          (MSP-2260)

10.3.2        Presenting Controls for Authorising a Prescription
 This section includes guidance for the placement and focus of command buttons used to preview
 and authorise a prescription.

                                                                                                                              Evidence
 ID              Guideline                                                                              Conformance
                                                                                                                              Rating
 MSP-2270        Place the preview button before the authorise button and reflect this in the tabbing   Mandatory             High
                 order

 MSP-2280        Provide a button for authorising the prescription and label it ‘Authorise’             Mandatory             Medium

 MSP-2290        Place the Authorise button at the bottom right of the prescription form such that it   Mandatory             High
                 may be out of view if the form is long enough to need a scroll bar

 MSP-2300        Do not set the focus to the Authorise button by default                                Mandatory             High

 MSP-2310        Disable the Authorise button until all required fields have been completed             Mandatory             High

 Usage Examples
                                                                                                        In this correct example, a button
                                                                                                        for authorising the prescription is
               clarithromycin            oral                                                           placed at the bottom right of the
                                                                                                        prescription form and is labelled
                                                                                                        Authorise (MSP-2280, MSP-2290)
               DOSE 250 mg              twice a day
                                                                                                        The preview button has been
                                                                                                        placed before the Authorise button
              at these times          08:00; 20:00                                                      (MSP-2270)

              starting Today 20:00

               continuing for 7 days

                                                      Preview           Authorise

                                                                                                                                     Page 183
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                      This example is incorrect because
                                                                      the preview button is placed after
                                                                      the Authorise button (MSP-2270)

                                                                      This example is incorrect because
                                                                      the Authorise button has not been
clarithromycin     oral                      Authorise
                                                                      placed at the bottom right of the
                                                                      prescription form such that it may
DOSE 250 mg        twice a day                                        be out of view if the form is long
                                                                      enough to need a scroll bar
at these times   08:00; 20:00                                         (MSP-2290)

starting Today 20:00

continuing for 7 days

                                                                      In this correct example, the
                                                                      ‘Preview’ button has focus by
                                                                      default (MSP-2300)

                                                                      This example is incorrect because
                                                                      the Authorise button has focus by
                                                                      default (MSP-2300)

                                                                      In this correct example, the
                                                                      Authorise button is placed at the
                                                                      bottom right and has been disabled
                                                                      because some required fields have
                                                                      not yet been completed
                                                                      (MSP-2290, MSP-2310)

                                                                                                Page 184
            Design Guidance – Medications Management – Search and Prescribe
            Prepared by Microsoft, Version 3.0.0.0
            Last modified on 20 January 2010

Rationale
Design Analysis:
If the Authorise button becomes active as soon as all required fields have been completed, and the button has focus by default, then it
is possible to authorise a prescription in error. In some cases, this may also mean that a set of fields that have been displayed and
pre-filled are not reviewed before the prescription is authorised. When this is the case, the severity of the inadvertent authorisation may
depend on the ease with which the prescription can be checked immediately afterwards and the ease with which it can be amended.
Not setting focus on the Authorise button by default (MSP-2270, MSP-2300) can mitigate these risks. If necessary, a check box can be
introduced that must be selected before the Authorise button can be activated.
Alternative designs were explored in which the Authorise button was available even when the required fields had not been completed.
This approach depends on the use of alerting and error-reporting to draw attention to the required fields that have not been completed.
This approach is also only possible in a detailed prescription form in which the fields can be completed in any order. Our analysis
indicates that it is better to present a form with only required fields so that all fields need to be completed and none will be missed out.
This approach also avoids the irritation and alert fatigue associated with error reporting and alerts that would otherwise be needed.
Desk Research:
The paper, The Extent and Importance of Unintended Consequences Related to Computerized Provider Order Entry {R10}, reports
the findings of a qualitative study in which unintended consequences of computerized provider order entry (CPOE) were monitored
and evaluated. New kinds of errors reported by this study included that of ‘desensitization to alerts’. Although the problem of alert
fatigue needs to be addressed primarily in the context of decision support, even in the absence of decision support the guidance
promotes a way of working that can help to reduce unnecessary alerts during prescribing.
The Guidelines for hazard review of ePrescribing systems {R31} lists the risk that a prescription can be completed with a series of
identical keystrokes (guideline 4.8). Guidance reduces this risk by the use of cascading lists and template prescriptions and mitigates
the risk by ensuring that focus is not set to the Authorise button by default.
There are two usability principles to consider in defining which command button should have focus by default:
 Setting the default command button to a command that is safest prevents loss of data and is the most secure (see Windows User
  Experience Interaction Guidelines {R26})
 Setting the default to a command button that invokes an action that can be undone (see ePrescribing Functional
  Specification {R12})
Guidance in this section is informed by the following Nielsen heuristic {R17}:
 Error Prevention – Tabbing order and placement of the preview and Authorise button helps to ensure that a prescription is not
  authorised by activating the Authorise button by mistake
User Research:
Recommendations from Study ID 67 (see APPENDIX D) include the use of the term ‘Authorise’ (MSP-2280) as a label for the button
that equates to signing a completed prescription.
Hazard Risk Analysis Summary:
From our Patient Safety Risk Assessment analyses, we identified a number of potential hazards, including the following key risks
which are mitigated by the guidance:
   Potential Hazards:                              Mitigations:
    A prescription is not wholly reviewed          A Preview button is placed before the Authorise button both in terms of layout
     because the authorise button was                and tabbing order and that the Authorise button does not have focus by default
     selected by mistake                             (MSP-2270, MSP-2300, MSP-2310)
    A prescription is not wholly reviewed          The Authorise button is at the bottom of the form so if there are fields out of view,
     because some fields were out of view            the form must be scrolled to the bottom in order to authorise (MSP-2290)

                                                                                                                                   Page 185
                             Design Guidance – Medications Management – Search and Prescribe
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

11        DOCUMENT INFORMATION

11.1 Terms and Abbreviations
 Abbreviation                 Definition
 BNF                          British National Formulary

 CDER                         Center for Drug Evaluation and Research

 Co-Drugs                     Combination Drugs

 CUI                          Common User Interface

 dm+d                         Dictionary of Medicines and Devices

 FDA                          US Food and Drug Administration

 HDU                          High Dependency Unit

 INR                          International Normalized Ratio

 ISMP                         Institute for Safe Medication Practices

 ISV                          Independent Software Vendor

 IUD                          Intrauterine Devices

 KLM-GOMS                     Keyboard-Level Model — Goals, Objects, Methods and Selection

 NHS                          National Health Service

 NHS CFH                      NHS Connecting for Health

 NPfIT                        National Programme for Information Technology

 NPSA                         National Patient Safety Agency

 OTC                          Over the Counter

 PGD                          Patient Group Direction

 POD                          Patient’s Own Drugs

 PRN                          ‘As required’ medication

 TFN                          Trade Family Name

 TPN                          Total Parenteral Nutrition

 TTO                          To Take Out

 VDT                          Visual Display Terminal

 VTM                          Virtual Therapeutic Moiety

 W3C                          World-Wide Web Consortium

 WHO                          World Health Organization
 Table 10: Terms and Abbreviations

11.2 Definitions
 Term                    Definition
 Authorise               Equivalent to signing a prescription

 Brand name              Proprietary drug name for a product (as used by the brand originator)
                                                                                                 Page 186
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Term                     Definition
 Conformance              In the guidance tables, indicates the extent to which you should follow the guideline when defining your UI
                          implementation. There are two levels:
                          Mandatory – An implementation should follow the guideline
                          Recommended – An implementation is advised to follow the guideline

 Current best practice Current best practice is used rather than best practice, as over time best practice guidance may change or be
                       revised due to changes to products, changes in technology, or simply the additional field deployment
                       experience that comes over time.

 Evidence Rating          In the guidance tables, summarises the strength of the research defining the guideline and the extent to which
                          it mitigates patient safety hazards. There are three ratings (with example factors used to determine the
                          appropriate rating):
                           Low:
                              Does not mitigate specific patient safety hazards
                              User research findings unclear and with few participants
                              Unreferenced usability principles indicate the design is not significantly better than alternatives
                           Medium:
                              Mitigates specific patient safety hazards
                              User research findings clear but with few participants
                              References old authoritative guidance (for example, from National Patient Safety Agency (NPSA),
                               Institute for Safe Medication Practices (ISMP) or World Health Organization (WHO)) that is potentially
                               soon to be superseded
                              Referenced usability principles indicate the design is significantly better than alternatives
                           High:
                              Mitigates specific patient safety hazards
                              User research findings clear and with a significant number of participants
                              References recent authoritative guidance (for example, from NPSA, ISMP or WHO)
                              Referenced usability principles indicate the design is significantly better than alternatives

 Generic drug name        The chemical or approved name of a product as opposed to the proprietary name often used by the brand
                          originator

 Template                 Predefined and partially completed prescriptions that allow several attributes to be defined with a single
 prescriptions            selection from a list
 Table 11: Definitions

11.3 Nomenclature
 This section shows how to interpret the different styles used in this document to denote various
 types of information.

11.3.1        Body Text
 Text                                                                   Style
 Code                                                                   Monospace

 Script

 Other markup languages

 Interface dialog names                                                 Bold

 Field names

 Controls

                                                                                                                                     Page 187
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Text                                                               Style
 Folder names                                                       Title Case

 File names
 Table 12: Body Text Styles

11.3.2        Cross References
 Reference                                                          Style
 Current document – sections                                        Section number only

 Current document – figures/tables                                  Caption number only

 Other project documents                                            Italics and possibly a footnote

 Publicly available documents                                       Italics with a footnote

 External Web-based content                                         Italics and a hyperlinked footnote
 Table 13: Cross Reference Styles

11.4 References
 Reference Document                                                                                             Version
 R1.              Design Guidance – Medications List                                                            1.0.0.0

 R2.              Design Guidance – Medications Management – Drug Administration                                3.0.0.0

 R3.              Design Guidance – Medication Line                                                             2.0.0.0

 R4.              NHS NPfIT – dm+d Implementation Guide (Secondary Care):                                     29-May-2009
                  http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/refdocs/dmd_guidance.
                  doc

 R5.              NHS – dictionary of medicines + devices:                                                      Release 2.3
                  http://www.dmd.nhs.uk/

 R6.              NHS NPSA – The fourth report from the Patient Safety Observatory – PSO/4 – Safety in doses:   2007-08
                  medication safety incidents in the NHS:
                  http://www.npsa.nhs.uk/nrls/alerts-and-directives/directives-guidance/safety-in-doses/

 R7.              Cohen M R (Ed) – Medication Errors – Causes, Prevention, and Risk Management – Jones and      2004
                  Bartlett Publishers

 R8.              Kohn L, Corrigan J, Donaldson M – To Err is Human – Building a Safer Health System –          2000
                  Washington, DC: National Academy Press, 2000

 R9.              Wachter R M – Understanding Patient Safety – The McGraw-Hill Companies, Inc, 2008             2008

 R10.             Ash JS, Sittig DF, Poon EG, Guappone K, Campbell E, Dykstra RH – JAMA – The Extent and        July / August 2007
                  Importance of Unintended Consequences Related to Computerized Provider Order Entry –Vol
                  14, No. 4, p415

 R11.             Koppel R, Metlay JP, Cohen A, Abaluck B, Localio AR, Kimmel SE, Strom BL – Role of            09-Mar-2005
                  Computerized Physician Order Entry Systems in Facilitating Medication Errors – JAMA – Vol
                  293, No. 10, p1197

 R12.             NHS NPfIT – ePrescribing Functional Specification:                                            1.0
                  http://www.connectingforhealth.nhs.uk/newsroom/news-stories/eprescfunctspec

 R13.             Design Guidance – Time Display                                                                3.0.0.0

 R14.             Design Guidance – Date Display                                                                3.0.0.0

                                                                                                                          Page 188
                               Design Guidance – Medications Management – Search and Prescribe
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Reference Document                                                                                      Version
R15.     Design Guidance – Date and Time Input                                                          3.0.0.0

R16.     British National Formulary:                                                                    58
         http://www.bnf.org/bnf/                                                                        (September 2009)

R17.     Nielsen, J – Ten Usability Heuristics:                                                         1994
         http://www.useit.com/papers/heuristic/heuristic_list.html

R18.     Shneiderman, B and Reading, MA – Designing the user interface: Strategies for effective human- Third Edition,1998
         computer interaction – Addison-Wesley Publishing

R19.     British Standards Institute – BS EN ISO 9241-12: 1999 Ergonomic requirements for office work   1999
         with visual display terminals (VDTs) – Part 12: Presentation of information

R20.     NHS NPfIT – Guidelines for the Design and Presentation of Medication Elements Required in      2005
         Electronic Prescribing or Medication Ordering Systems – NPfIT-EP-DB-0003.01

R21.     ISMP – ISMP Medication Safety Alert! – It’s Time for Standards to Improve Safety with Electronic 20-Feb-2003
         Communication of Medication Orders – Draft Guidelines for Safe Electronic Communication of
         Medication Orders:
         http://www.ismp.org/Newsletters/acutecare/articles/20030220.asp

R22.     Design Guidance – Patient Banner                                                               4.0.0.0

R23.     The Joint Commission – National Patient Safety Goals – NPSG.03.03.01 – Look-alike/sound-       Dec-2009
         alike drugs:
         http://www.jointcommission.org/AccreditationPrograms/BehavioralHealthCare/Standards/09_FA
         Qs/NPSG/Medication_safety/NPSG.03.03.01/look_alike_sound_alike_drugs.htm

R24.     NHS CFH – The Use of Tall Man Lettering to Minimise Selection Errors of Medicine Names in      July 2009
         Computer Prescribing and Dispensing Systems – Loughborough University Enterprises Ltd:
         http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/refdocs/tallman.pdf

R25.     W3C – Web Content Accessibility Guidelines – W3C Recommendation 5-May-1999:                    1.0
         http://www.w3.org/TR/WAI-WEBCONTENT/

R26.     Microsoft – Windows User Experience Interaction Guidelines – Guidelines, Controls, Command     2009
         Buttons:
         http://msdn.microsoft.com/en-us/library/aa511453.aspx#defaults

R27.     Card SK, Moran TP, Newell A – The Keystroke-Level Model for User Performance Time with         1980
         Interactive Systems – Palo Alto Research Center

R28.     ISMP – List of Confused Drug Names:                                                            2009
         http://www.ismp.org/tools/confuseddrugnames.pdf

R29.     The Joint Commission International – WHO Collaborating Centre for Patient Safety Releases –
         Nine Life-Saving Patient Safety Solutions:
         http://www.ccforpatientsafety.org/patient-safety-solutions/

R30.     US FDA Center for Drug Evaluation and Research – Name Differentiation Project:                 May 2001
         http://www.fda.gov/Drugs/DrugSafety/MedicationErrors/ucm164587.htm

R31.     NHS CFH – Guidelines for hazard review of ePrescribing systems:                                1.0
         http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/hazard_framework.pdf

R32.     Bates DW – Using information technology to reduce rates of medication errors in hospitals – BMJ 2000
         2000; 320:788-91

R33.     Dean B, Schachter M, Vincent C, Barber N – Prescribing errors in hospital inpatients: their    2002
         incidence and clinical significance – Quality Healthcare – 2002:11:340-344

R34.     Cooper A, Reimann R, Cronin, D – About Face 3: The Essentials of Interaction Design – Wiley    2007
         Publishing Inc – 2007

                                                                                                                    Page 189
                     Design Guidance – Medications Management – Search and Prescribe
                     Prepared by Microsoft, Version 3.0.0.0
                     Last modified on 20 January 2010

Reference Document                                                                                                Version
R35.            Johnson J – GUI Bloopers: Don’ts and Do’s for Software Developers and Web Designers –             2000
                Morgan Kaufmann Publishers – 2000

R36.            Dean B, Schachter M, Vincent C, Barber N – Causes of prescribing errors in hospital inpatients:   20-Apr-2002
                a prospective study –The Lancet – Vol 359

R37.            Reason J – Human Error –Cambridge                                                                 1990

R38.            Bates DW, Teich JM, Lee J, Seger D, Kuperman GJ, Ma’Luff N, Boyle D, Leape L – The Impact         1999
                of Computerized Physician Order Entry on Medication Error Prevention –JAMIA – 1999;6:313-
                321

R39.            Bates DW, Leape LL, Cullen DJ, Laird N, Petersen LA, Teich JM, Burdick E, Hickey M, Kleefield     1998
                S, Shea B, Vander Vliet M, Seger DL – Effect of Computerised Physician Order Entry and a
                Team Intervention on Prevention of Serious Medication Errors –JAMA – 1998;280:1311-1316

R40.            Penzo M – Label Placement in Forms –UX Matters:                                                   12-Jul-2006
                http://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php

R41.            Miller S, Jarrett C – Should I use a drop-down? Four steps for choosing form elements on the      2001
                Web:
                http://www.formsthatwork.com/files/Articles/dropdown.pdf

R42.            Jarrett C – Label Placement in Forms – What’s Best? –British Computer Society Conference on Sept-2008
                Human-Computer Interaction – Proceedings of the 22nd British CHI Group Annual Conference on
                HCI 2008: People and Computers XXII: Culture, Creativity, Interaction – Volume 2, pp229-30

R43.            Tufte E, Cheshire, CT – The Visual Display of Quantitative Information – Graphics Press, 2001     Second Edition
                                                                                                                  2001

R44.            Apple Inc – Apple Human Interface Guidelines                                                      June 2008

R45.            Singh H, Mani S, Espadas D, Petersen N, Franklin V, Petersen LA – Prescription Errors and   25-May-2009
                Outcomes Related to Inconsistent Information Transmitted Through Computerized Order Entry –
                Arch Intern Med– Vol 169, No.10, p982-989
Table 14: References

                                                                                                                              Page 190
                            Design Guidance – Medications Management – Search and Prescribe
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

APPENDIX A                       USABILITY PRINCIPLES
 The following usability principles have been applied through this guidance document. They are
 well-recognised principles within the user experience domain.

A.1     Nielsen’s Usability Heuristics
 See Usability Engineering {R17} for more information on these principles:
       Visibility of system status
       Match between system and the real world
       User control and freedom
       Consistency and standards
       Error prevention
       Recognition rather than recall
       Flexibility and efficiency of use
       Aesthetic and minimalist design
       Help users recognise, diagnose, and recover from errors
       Help and documentation

A.2     Shneiderman’s Eight Golden Rules of Interface Design
 See Designing the User Interface – Strategies for Effective Human-Computer Interaction {R18} for
 more information on these principles:
       Strive for consistency
       Enable frequent users to use shortcuts
       Offer informative feedback
       Design dialogs to yield closure
       Offer error prevention and simple error handling
       Permit easy reversal of actions
       Support internal locus of control
       Reduce short-term memory load

A.3     ISO 9241: Presentation of Information
 See Ergonomic requirements for office work with visual display terminals (VDTs) – Part 12:
 Presentation of information {R19} for more information on these principles:
       Clarity (the information content is conveyed quickly and accurately)
       Discriminability (the displayed information can be distinguished accurately)
       Conciseness (users are given only the information necessary to accomplish the task)
       Consistency (the same information is presented in the same way throughout the
        application, according to the user’s expectation)
       Detectability (the user’s attention is directed towards information required)

                                                                                              Page 191
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

 Legibility (information is easy to read)
 Comprehensibility (meaning is clearly understandable, unambiguous, interpretable and
  recognisable)

                                                                                    Page 192
                 Design Guidance – Medications Management – Search and Prescribe
                 Prepared by Microsoft, Version 3.0.0.0
                 Last modified on 20 January 2010

APPENDIX B                      STUDY ID 69: EXECUTIVE SUMMARY

B.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
                  ®
 between Microsoft and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in April 2009 by the CUI CAPS
 team on course definition in Medications Search and Prescribe. These findings are a subset from a
 larger internal report prepared for the CUI CAPS Search and Prescribe team.
 Purpose:
 To gain clinical feedback on design concepts for prescribing medications in electronic systems.
 Method:
 Interviews: structured interviews with 14 Health Care Professionals (HCPs) eliciting HCP
 preferences and qualitative feedback on design alternatives.
 Key Results:
 Based on clinician preference and rationale:
       Form layout and prescribing pane orientation should not (as yet) be mandated by the CUI,
        as there was no clear preference or concrete safety risks elicited for the contrasting designs
        shown
       Fields on the full form should be grouped by ‘field type’ rather than ‘mandatory-ness’
       Seeing the medications list while prescribing is favourable but not essential
       A field strategy like ‘dynamic mandatory’ was supported, as opposed to a display whereby
        all possible fields are displayed and then the mandatory fields varied based on the drug
        type
       An authorisation ‘safety catch’ cannot be mandated without further evidence

B.2     Research Objectives
 To gather HCP preferences and qualitative feedback on, and to identify possible patient safety
 hazards with, CUI course definition designs.

B.3     Research Design
 Structured one hour interviews carried out in person. Using three common prescribing tasks
 participants were taken through:

      1. Wireframe design alternatives for each design area

      2. An interactive prototype for one of the tasks

                                                                                                 Page 193
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

 Participants were then asked for preferences based on patient safety criteria. Other qualitative
 feedback was elicited covering:
        Rationale for preference
        Design fit with current and best practice
        Design understandability
        Any potential hazards resulting from the designs
 Design alternatives were order-balanced per task (in that, they were presented in differing orders to
 different participants to try and minimise an order effect), and all designs were shown as a full
 prescribing sequence, beginning and ending in the Medication List View.
 Detailed notes from the interviews were qualitatively analysed using thematic coding.

B.4       Results
B.4.1         Participant Description
 14 participants were interviewed in 12 sessions. Each had either volunteered through the NHS
 CFH Event Management System (EMS) signup or had been recruited by an HCP who had
 volunteered. 7 out of 14 respondents had previously taken part in CUI clinical engagement for other
 work areas. Table 5 shows a summary of the participants’ profiles:

                                                                                                          Used
 Session Job Role                      Specialty          Level       Site                  Prescriber?
                                                                                                          ePrescribing?
 402           Doctor                                     FY1         Teaching Hospital A   Yes           eTTAs

 403           Doctor                                     FY1         Teaching Hospital A   Yes           eTTAs
               Doctor                                     FY1                               Yes           eTTAs

 404           Doctor                  Surgery            ST1         Teaching Hospital B   Yes           eTTAs

 405           Doctor                  Endocrine and      FY1         Teaching Hospital C   Yes           PICS
                                       General Medicine

 406           Doctor                  Endocrine          FY2         Teaching Hospital C   Yes           PICS

 407           Doctor                  Acute Medicine     FY1         Teaching Hospital C   Yes           PICS
               Doctor                  Acute Medicine     ST2                               Yes           PICS

 408           Clinical                ePrescribing       Consultant Teaching Hospital C    Yes           PICS
               Pharmacologist

 409           Pharmacist              Oncology                       Teaching Hospital D   No            CIS Healthcare
                                                                                                          ChemoCare®

 410           Pharmacist              Paediatrics and                Teaching Hospital D   No            No
                                       Women’s Services

 411           Pharmacist              Oncology and       Principle   Teaching Hospital D   Independent   CIS Healthcare
                                       Haematology                                                        ChemoCare, Cerner
                                                                                                          Millennium® LC1, Local
                                                                                                          databases and
                                                                                                          spreadsheets

 412           Pharmacy                Oncology and                   Teaching Hospital D   No            CIS Healthcare
               technician              Haematology                                                        ChemoCare

 413           Pharmacist              Renal                          Teaching Hospital D   No            Local databases and
                                                                                                          spreadsheets
 Table 15: Interview Participants
                                                                                                                           Page 194
                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

 All participants were clinical staff who prescribe as part of their role, or monitor prescribing and are
 aware of related medication safety issues. All participants were from acute secondary care. Eight
 participants were junior doctors (who carry out the majority of inpatient prescribing). The
 participants were from four different trusts and nine participants were from trusts in London.
 13 out of 14 participants had used some kind of electronic system for prescribing medications,
 though only those in sessions 405—409, 411 and 412 could be said to have used ‘proper’
 ePrescribing systems. The majority had ‘medium’ computer experience as they had to use
 computers as part of their clinical work. Several had ‘High’ computer experience, which includes
 items such as being familiar with spreadsheet calculation functions and having an understanding of
 databases.

B.4.2        Design Areas
 Bullet text in italics represents researcher recommendations or comments in order to distinguish
 them from user feedback.

 Drug Search
      As the drug search field gets focus automatically, its in-field prompt is never shown thus
       causing confusion to some users as to where to start:
             Therefore, the drug search prompt should remain even when the field is in focus (if
              technology allows)

 Route Selection
      One participant felt it was not clear enough that the prescriber was selecting an unlicensed
       route, and that additional actions might be required (such as a justification):
             If in scope for CUI, consider how this could be made more obvious and what additional
              actions might be necessary
      It was felt that some routes were likely to be unfamiliar to many clinicians:
             If in scope for CUI, consider how ‘very uncommon’ routes might be de-prioritised

 Templates
      One participant felt that in some instances you might want to apply default values even if
       you have not selected a template prescription (for example, saline strength of 0.9%):
             Consider the arguments for use of defaults even off-template

 Prescribing Pane Orientation
      There was no clear preference or concrete safety risks elicited for either orientation
       (horizontal or vertical box):
             Therefore, continue to allow for both approaches: horizontal or vertical orientation

 Authorising
      Opinion was divided as to whether a ‘safety-catch’ was necessary or would be effective to
       prevent prescribers from accidentally selecting ‘Authorise’ before having reviewed the
       whole prescription:
             Do not mandate an extra ‘safety-catch’ step without harder evidence to its effectiveness
              at improving the safety of authorising
             Consider other ways to improve chances of reviewing before authorising

                                                                                                     Page 195
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

New Prescription Building Up
    6 of 12 participants were slightly unclear or felt others might be unclear about the status of
     the prescription building up (that is, it might be perceived as prescribed when it has not yet
     been authorised):
         Consider how the ‘not yet prescribed’ status could be made clearer

Prescription Status
    All five participants asked agreed that a prescription status of ‘Started’ was ambiguous (as
     has been seen in previous CUI user feedback):
         Discuss prescription status options with the ePrescribing team, and ensure examples
          given in guidance do not include the potentially ambiguous ‘Started’

Medications List
    Having the Medications List visible while prescribing was seen as favourable but not
     necessarily essential:
         Continue to allow the Medications List to be simultaneously viewable while prescribing
          but not that this is mandatory in all cases
         It raises questions about:
          i.   Where the prescription building up is displayed if the Medications List is grouped or
               sorted so that the new prescription would not appear at the top during prescribing
          ii. Whether there are any limits on interaction with the Medications List after a
              prescription has started to be written

Access to More Options (Quick Prescribe)
    One participant did not initially notice the ‘More Options’ button (though had it not been
     missing from many of the designs this error might have been more frequent):
         Explore different positioning of the access to ‘More Options’ to ensure it is considered
          by prescribers before authorising

Adding a ‘Stat’
    All participants were unsure how to ‘add a stat’. Numerous requirements were elicited:
         Assuming ‘adding a stat’ is out of scope for this CUI release, ensure that example
          designs are not mistakenly interpreted as providing guidance on adding a stat

Field Strategy
    Participants supported the ‘dynamic mandatory’ approach to presenting fields on the form
     compared to the ‘set fields per page’ approach
    However, it is likely that there are other approaches to presenting fields that are acceptable
     but not exactly like the CUI ‘dynamic mandatory’ one:
         In the absence of more detailed evidence, continue to use a field strategy that:
              Promotes the mandatory fields
              Demotes or hides the inapplicable fields
              Does not require the user to choose which template they require UNLESS they are
               specifying some additional information (for example, a complex schedule)

                                                                                               Page 196
                    Design Guidance – Medications Management – Search and Prescribe
                    Prepared by Microsoft, Version 3.0.0.0
                    Last modified on 20 January 2010

              Does not promote fields that are optional but may mislead the prescriber (for
               example, presenting an optional strength field before a mandatory dose field)
              Reduces the need to navigate when reviewing the prescription before authorisation

Field Layout (Quick Prescribe)
   There was no clear overall preference or conclusive safety rationale given for either of the
    three layouts (in the absence of any hard data on the actual safety or performance):
          Therefore, there is no user feedback evidence to mandate a particular layout. Though
           certain ‘good’ layout principles might be described

Field Grouping (Full Form)
   All seven participants who commented on the grouping of fields on the full form preferred
    fields grouped by ‘field type’ (for example, dose and frequency) rather than by whether they
    were mandatory or not:
          Therefore continue to group fields (on the full form) by ‘field type’ rather than by
           ‘mandatory-ness’
   There was no specific feedback on the actual grouping taxonomy to use

Field Layout (Full Form)
   Though a more linear, vertical field layout was generally preferred, feedback was not
    conclusive (and was not based on actual usage of the form):
          Also given the other factors that would influence form layout in a real application (inline
           error markers, decision support, application conventions on layout, ‘reviewability’ of the
           resulting prescription, and so on), the CUI should not mandate an exact form layout

Access to More Options (Full Form)
   All seven participants asked would prefer ‘More Options’ to open inline rather than opening
    a new page. However, one participant felt this addition would have to be balanced against
    the need to be able to ‘review’ the page before authorising
          Therefore, expand options inline, though there may be exceptions when accessing
           large ‘extra options’ such as administration scheduling. However, it should be
           considered what happens once optional data has been added

Administration Times
   As has been seen in previous user feedback, several participants suggested that arranging
    administration times vertically would be preferable to a horizontal arrangement

Duration
   In relation to infusions, one participant was confused by the use of the label ‘continuing’ for
    the duration field:
          Therefore use ‘duration’ as opposed to ‘continuing’
          Consider the potential confusion between ‘duration’ and ‘dose duration’

Infusions
   Three participants were confused by the lack of clear field labels for the ‘rate’ field:
          Therefore consider which fields must have explicit labels or prompts

                                                                                                  Page 197
                     Design Guidance – Medications Management – Search and Prescribe
                     Prepared by Microsoft, Version 3.0.0.0
                     Last modified on 20 January 2010

APPENDIX C                     STUDY ID 68: EXECUTIVE SUMMARY

C.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
 between Microsoft® and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in November 2008 by the CUI
 CAPS team on Course Definition (part of the Search and Prescribe work). These findings are a
 subset of those in a larger internal report prepared for the CUI CAPS Search and Prescribe team.
 Purpose:
 To further understand existing hazards and requirements relating to medication course definition.
 Method:
 Interviews: structured interviews with 14 Healthcare Professionals (HCPs) using paper drug charts
 and existing CUI designs as a stimulus for discussion.
 Requirements analysis: requirements relating to course definition identified from the existing NHS
 CFH ePrescribing requirements documents.

C.2     Research Objectives
 To further understand existing hazards and requirements relating to medication course definition
 focusing on the areas of:
       Scheduling and ‘time’ attributes
       Conditions

C.3     Research Design
 Interviews were structured, lasted 30—60 minutes and carried out in person, with one to three
 participants per interview. Participants were shown existing paper drug charts and old CUI course
 definition designs to help elicit risks and uncover further requirements.
 Detailed notes from the interviews were qualitatively analysed using thematic coding.
 The NHS CFH ePrescribing requirements were searched for a set of keywords relating to course
 definition. Once a requirement was flagged, relevance to CUI scope was assessed and the
 requirement categorised. The output was a spreadsheet of ePrescribing requirements that can be
 filtered by category relating to course definition thus aiding later analysis and retrieval.

                                                                                               Page 198
                      Design Guidance – Medications Management – Search and Prescribe
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 20 January 2010

C.4        Results
C.4.1         Participant Description
 14 participants were interviewed in 7 sessions. Each participant had either volunteered through the
 NHS CFH Event Management System (EMS) signup or had been recruited by an HCP who had
 volunteered. Table 15: Interview Participants Shows a summary of the participants’ profiles:

                                                                                                             CUI       Computer
 Session Job Role                         Specialty Level           Prescriber? Systems Used
                                                                                                             Feedback? Experience
 374           Pharmacist                 ENT           ?           No                PCIS                                     Medium

 360           EPR Pharmacist                           Senior      All deal with     Customised i.CM        No                High
               EPR Nurse                                Senior      ePrescribing      (full ePrescribing     Yes               Medium
                                                                    and eMAR          and eMAR)
               EPR Nurse                                Senior                                               Yes               Medium
                                                                    aspect of
                                                                    system

 361           Pharmacist                 ?             Senior      Yes               Electronic TTOs        Yes               Medium

 362           Doctor                     ?             F1          Yes               Electronic TTOs        No                High

 363           Doctor                     ?             F1          Yes               Electronic TTOs        No                High
               Doctor                     ?             F1          Yes               Electronic TTOs        No                Medium

 364           Doctor                     Emergency     ST3         Yes               Electronic TTOs        No                Medium
               Nurse Practitioner         Emergency     Senior      PGD               No                     No                Medium
               Nurse Practitioner         Emergency     Senior      PGD               No                     No                Medium

 365           Nurse Practitioner         Emergency     Senior      PGD               No                     No                Medium
               Nurse Practitioner         Emergency     Senior      PGD               No                     No                Medium
               Nurse Practitioner         Emergency     Senior      PGD               Seen several           Yes               High
                                                                                      systems
 Table 16: Interview Participants

 All interview participants were clinical staff, either prescribers and/or pharmacists. All participants
 were from acute secondary care and from three different trusts with diverse geographical locations.
 Two interview participants had used electronic prescribing before and five others had used an
 electronic TTO system with very basic prescribing functionality. The majority had medium or high
 computer experience, where high experience includes items such as being familiar with
 spreadsheet calculation functions and having an understanding of databases.

C.4.2         Hazards
 Table 17 lists and describes the hazards identified:

 ID Keywords                 Hazards
 1                           Cannot specify prescription-specific logic as all orders are treated the same (for example, cannot do different
                             mandatory fields for as-required prescriptions)

 2                           Cannot specify medication-order-specific logic as medications are treated as just another kind of order (for
                             example, cannot do Adverse Drug Reaction (ADR) checking on medications)

 3                           Delay in first dose as the doctor is not communicating new (or changed) prescriptions

 4     Additional            If the prescriber (or verifier) relies on the administerer reading the relevant knowledge support, instead of
       Instructions          highlighting it to them by recording notes in 'additional instructions', then the administerer may not attend to
                             these instructions

                                                                                                                                      Page 199
                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

ID Keywords         Hazards
5   Additional      If, during prescribing, the prescriber does not have access to the same knowledge support as the administer
    Instructions    has, then the prescriber may add information in 'additional instructions' that is contradicted by this knowledge
                    support thereby confusing the administerer

6   Attributes      Prescribers may be confused by the difference between 'strength' and 'dose' at the point of course definition

7   Attributes      Presenting non-mandatory fields by default may be: distracting, confusing, unnecessarily filled in

8   Attributes      Due to the large number of potential optional fields that could be displayed on the course definition form,
                    those that are chosen to be displayed (either by default or on demand) may be suboptimal in some
                    circumstances (for example, how do you choose which optional fields get displayed or are accessible?)

9   Conditions      Administration conditions not documented or not 'formalised' in a system may be missed, misinterpreted, or
                    cannot take advantage of system functions (for example, done through free text, ‘additional instructions’ or
                    given verbally)

10 Have Sight Of    If the prescriber is not prompted to consider previous prescriptions for the patient for the same medication or
                    class (especially reasons for discontinuation) they may prescribe suboptimally

11 Have Sight Of,   If prescribers only see the medications and administration schedule for the day of prescribing (or a few days
   Schedule         around it) before, during or after prescribing, they may not be aware of all the patient's current medications.
                    Administration views in systems are likely to show a few days by default (though should provide access to the
                    other current medications)

12 Have Sight Of,   If, during prescribing, prescribers do not have access to current (and past?) medication details, including their
   Schedule         schedule, they may not have the necessary information to accurately complete the prescription

13 PRN              PRN has indication recorded rather than the symptom as the condition for giving (for example, asthma not
                    wheeze)

14 PRN              PRN prescription does not record he conditions under which it was given (currently poorly documented on
                    paper)

15 PRN              As most people know what the PRN will be for, being forced to record the reason is unnecessary (unlikely to
                    be a view shared by pharmacists)

16 PRN              Clinicians may expect PRN to have an indication of maximum dose in 24 hours, maximum frequency, and/or
                    minimum interval. A course definition label for 'frequency' associated with PRN may be misinterpreted as one
                    of these rather than as an indicative frequency

17 PRN              Though it may be theoretically correct for a PRN to always have an indicative frequency, prescribers may not
                    want to specify one as long as the eventual administration schedule conforms to the minimum and/or
                    maximum restrictions (that is, the schedule that results from the administerer administering the PRN)
                    For some medications, an indicative frequency might seem odd (for example, nappy rash cream 'apply as
                    required')

18 PRN              A start date and time for PRN is likely to be confusing as the start date and time usually refers to the first
                    intended administration (which is not known with a PRN) (though it could be changed to 'valid from' for PRN?)

19 PRN              Prescribers may feel they have to provide maximum and/or minimum restrictions on PRN administration if
                    they do not realise that these are provided by the system (if indeed they are, though they should be according
                    to the CUI Drug Administration guidance)

20 Record           Some medications administered in some contexts (for example, entonox or lignocaine in ED) may be written
                    up as part of the documentation of care and not duplicated into the medication’s record

21 Record           A patient may self administer in A&E and this is not being recorded or is not recorded in the medications
                    record (perhaps as it is deemed to be irrelevant to the presenting complaint)

22 Review and/or    ‘Review’ and/or ‘stop’ date is missed as it has a ‘point’ value and is not followed up. That is, it is not ‘sticky’ or
   Stop Date        persistent over time if it is not completed (for example, if the review date falls on a weekend)

23 Review and/or    No review criteria specified at time of prescribing makes it hard to subsequently review
   Stop Date

                                                                                                                                 Page 200
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

ID Keywords         Hazards
24 Review and/or    Medications stopped rather than reviewed
   Stop Date

25 Review and/or    The term 'review' is interpreted in different ways (for example, 'review after 2 days of 7 day course’ versus ‘to
   Stop Date        be followed by a review at end of 7 days', for example 'let's see how they get on after 5 days' versus 'hard
                    stop after 5 days').
                    Therefore potential confusion about what it means to schedule 'a review'

26 Review and/or    Implied requirement to be able to schedule a review during a course as well as at the end of one
   Stop Date

27 Schedule         Scheduling information has to be inferred from chart graphical mark-up ‘hieroglyphics’ which may be non-
                    standard. Some staff may use more ‘certain’ mark-up than others (for example, blocking out days not to
                    administer is a pretty clear mark-up)

28 Schedule         Scheduling and frequency information ‘trapped’ in graphical section of paper chart rather than conveyed in
                    prescription text on the left-hand side of a paper chart can be missed when transcribing for discharge, (and at
                    other times too)

29 Schedule         The prescriber schedules administration at a suboptimal time for that medication (for example, breaking ward
                    conventions to administer warfarin at 18:00 or simvastatin in the morning rather than at night)

30 Schedule         Not clear that the administration time has been changed from standard times when done by crossing out
                    usual time on paper

31 Schedule         Medications that do not have an obvious default schedule (for example, ‘bd’ and ‘tds’) are 'automatically'
                    scheduled to times that are either unexpected by the prescriber or do not take into account all the relevant
                    factors.
                    ‘od’ and ‘qds’ are more obvious as ‘od’ is likely to be scheduled at 08:00 or a medication-specific default time
                    and ‘qds’ will fill the usual four drug-round slots

32 Schedule         Self administered drugs may not be administered according to a schedule that was suggested to the patient
                    at the time of prescribing. Therefore if the system 'schedules' the administration according to this suggestion,
                    and then does not require the actual times to be recorded, the administration record may be misleading

33 Schedule         If the scheduling (either automatic or manual) does not take account of local ward conventions beyond
                    'normal' drug rounds (such as IV rounds at slightly different times to non-IV rounds), certain medications will
                    systematically be administered 'too early' or 'too late' (according to the system's schedule)

34 Schedule,        Non-time dependant conditions scheduled with spurious time specificness and/or and incorrect time (for
   Conditions       example, with food in evening, pre-meds)
                    This might be solved by having a long time tolerance administration, plus a conditional ‘IF’, if it cannot have
                    formalised conditions

35 Schedule, Dose   Double administration as the first dose was given in A&E, but was not recorded on the inpatient chart, then
   Interval         another dose given on admission to the ward.
                    This is solved if all administrations are recorded and A&E and ward have interoperable medication record

36 Schedule, Dose   Dose administered in A&E and to maintain the dose interval the prescriber therefore schedules the next dose
   Interval         at a non-drug round time. Then, on admission to the ward, nurses get another prescriber to alter the time of
                    administration to be more convenient to drug rounds, which may then break the dose interval with the first
                    dose given in A&E

37 Schedule, Dose   Breaking strict dose intervals due to set round times or administration non-compliance with strict dose interval
   Interval         schedule (for example, antibiotic prescribing) has historically never been administered 'correctly' at exact time
                    intervals

38 Schedule, Dose   System does not alert users if they are trying to schedule doses of the same medication (including those in
   Interval         other prescriptions) within a minimum dose interval (especially for 'stat' followed by regular schedule)

39 Schedule, Dose   Prescriber has become used to accepted practice of scheduling certain medications (for example, antibiotics)
   Interval         at standard drug round times, rather than at recommended dose intervals. Another hazard is that prescribers
                    may not realise that in some contexts (for example, serious infection in ITU) they must prescribe at strict dose
                    intervals or they mistakenly do not use the strict dose interval frequency option
                                                                                                                             Page 201
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

ID Keywords             Hazards
40 Schedule, Dose       Prescribers may need to schedule administration such that it breaks a minimum interval. They should
   Interval             probably be forced to record a reason (from CUI Drug Administration Feedback Study ID 40)

41 Schedule, Dose       Breaking of dose interval as the ‘stat’ dose is ‘too quickly’ followed by the first regular dose
   Interval, Once
   Only

42 Schedule,            Duration is calculated as calendar days (either by system or by user) rather than days of doses (for example,
   Duration             if the first dose of a five day course is given at night, this is not a whole day of treatment so the patient needs
                        to continue onto the sixth day of treatment)

43 Schedule, Have       If prescribers do not see the administration schedule represented graphically before authorising a prescription
   Sight Of             (as on the paper drug chart), they may not notice a scheduling error or suboptimal scheduling as the textual
                        expression of the frequency and schedule is less familiar (and perhaps more open to error) (for example, that
                        the first dose is not due for a longer time than they intended, such as on the next day)

44 Schedule, Once       ‘Double’ administration of ‘first’ dose as ‘stat’ and the first regular dose both given at same time (especially if
   Only                 ‘stat’ is added automatically by the system?)

45 Schedule, Once       Delay in first dose until the next day as the default schedule is for a time that has already passed that day (so
   Only                 is scheduled for the next day) and no ‘stat’ created for today (known cause of death from a long delay in the
                        first administration of meningitis medication)

46 Schedule, Once       Delay in first dose until the next round as it was not scheduled ‘due’ until the next round that day and no ‘stat’
   Only                 was created for now

47 Schedule, Once       Prescribing a 'stat' followed by a regular schedule may subsequently give a false impression of when that
   Only                 medication started if 'separated' from each other on the chart (that is, medication line identity question)

48 Schedule, Once       If prescribers have to prescribe a regular medication, started with a ‘stat’, as separate prescriptions in two
   Only                 unlinked steps they may:
                        Forget to do one of the steps (probably by being distracted in between)
                        Make a mistake when scheduling them together
                        Not have the correct total duration for that medication (for example, total duration = stat plus four days minus
                        one dose of regular medication)

49 Schedule, Once       Correct urgency of a once only prescription is not communicated. Either because of a spurious urgency by
   Only                 treating all once only prescriptions as 'stat' (causing unnecessary disruption) or a genuinely urgent once only
                        is not administered on time (could be a problem for other types as well, for example, once a day medication?)

50 Schedule, Once       Correct degree of time-specificness of a ‘stat’ is not communicated. Either because of a spurious specificness
   Only, Time           by specifying a time when it does not really matter or by being administered outside of a correct narrow time
   Tolerance            tolerance (could be a problem for other types as well, for example, once a day medication?)

51 Schedule, Review Antibiotic issues: often continued inappropriately as they do not have a stop date (or accurate stop date),
   and/or Stop Date prescribed inappropriately as a wrong indication and so on

52 Schedule, Supply     Delay in ‘stat’ and/or first dose due to supply issues (for example, the prescriber did not know that the product
                        was not in the ward stock)

53 Start Date           CUI design: course 'Start' is ambiguous as to whether it means prescription date or intended first dose date
                        and/or time.
                        All that the Wales chart says is: 'Time to be given' for its once only prescriptions. We could try: 'first dose',
                        'first administration', 'Start on'.

54 Start Date           CUI Design: The 'Approx' flag on start date and time is confusing. It might imply it is a non-specific way to
                        alter the administration time tolerance (and it might not be). It might also imply that if it is not checked then
                        the start date and/or time has a very low time tolerance (which it might not do). It might also imply that all
                        administration events for this prescription are affected by this control (which they might not be).

55 Supply               Prescribers are often unaware of patients not getting medications due to supply issues

                                                                                                                                   Page 202
                           Design Guidance – Medications Management – Search and Prescribe
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

ID Keywords                    Hazards
56 Therapeutic Intent Prescribers may not know the exact reason for prescribing as they are just following the consultant's orders
                      (and they may have not provided the rationale). Also, they may be prescribing some time after the consultant
                      requested the prescription.

57 Therapeutic Intent If the therapeutic intent and/or rationale for treatment is not recorded by the prescriber, subsequent clinicians
                      may not be able to review the prescription as effectively as the prescriber (especially after discharge or for
                      antibiotics)

58 Therapeutic Intent A clinician's answer for 'reason' could be described in multiple ways, which may miss out key information for
                      a subsequent reviewer or decision support trying to act on it (for example, ‘animal bite’ versus 'laceration'
                      versus 'infected wound', where the fact it is an animal that caused the injury is the important factor, and 'for
                      infection' versus 'based on microbiology reports', where the authoritative recommendation is important)

59 Therapeutic Intent Treatment goals may not be perceived to be 'necessary' for some medications in some contexts (for
                      example, PDG medications in ED)

60 Variation                   Nurses changing heparin dose based on results (is this allowed?)

61 Variation                   Warfarin prescription unclear as to whether it is to continue each day as it is prescribed as a separate
                               prescription for every day without a clear indication of the 'overall' course duration

62 Variation                   If a medication line identity is such that prescribed variations in dose, frequency and so on (either during a
                               day or over days) are displayed as separate medication lines, there is a chance that:
                               The lines become separated and disassociated
                               It becomes harder for the user (and system?) to perform operations aggregating the lines
                               For example, working out 'how much drug X the patient is getting?' or 'how long have they been getting drug
                               X for?'

63 Variation                   If a medication varies either during a day or over days, there is a chance that the variations will get mixed up
                               either at the time of prescribing or of administration (for example, prescribing the dose intended for 22:00 at
                               8:00 and vice versa)

64 Variation                   Prescribers may desire a templated prescription that defines a schedule of varying doses over several days,
                               which cannot be supported by the template UI (for example, ‘10 mg 1 day, 10 mg 1 day, 5 mg 1 day, then as
                               per INR value’)

65 Attributes                  Basic dropdowns may not be the most appropriate input mechanism for a field (for example, an ISV may
                               have a very large number of possible frequencies or some fields will require 'other' options to access
                               unlicensed routes) (partially from CUI Search and Prescribe user feedback 2006)

66 Schedule                    Some workflows may have the schedule set by the administerer rather than the prescriber (from CUI Search
                               and Prescribe user feedback 2006)

67 Attributes                  Different contexts may require different default settings for attributes (for example, the Emergency
                               Department may default its medication frequency to 'stat' (or its equivalent)

68 Attributes                  Form design: the user may accidentally scroll a dropdown and be unaware that they have changed one of the
                               values on the form

69 Attributes                  After a template has populated a form, the prescriber may make alterations to some fields that imply other
                               fields should be checked and/or changed (for example, if changing route what should happen to a prefilled
                               dose?)
Table 17: Hazards Identified

                                                                                                                                        Page 203
                                  Design Guidance – Medications Management – Search and Prescribe
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 20 January 2010

APPENDIX D                      STUDY ID 67: EXECUTIVE SUMMARY

D.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
 between Microsoft® and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in January 2009 by the CUI
 CAPS team on defining a medication’s course (part of the Search and Prescribe work). These
 findings are a subset of those in a larger internal report prepared for the CUI CAPS Search and
 Prescribe team.
 Purpose:
 To gain clinical feedback on design concepts for defining a medication’s course in electronic
 systems.
 Method:
 Interviews: structured interviews with 16 Healthcare Professionals (HCPs) eliciting HCP
 preferences and qualitative feedback on design alternatives.
 Workshops: two workshops with six HCPs per workshop, eliciting HCP preferences and qualitative
 feedback on the same design alternatives as used in interview.
 Key Results:
 Based on clinician preference and rationale:
       First dose, the administration schedule and any extra system or user-defined attributes
        should be clearly visible to the prescriber before authorising the prescription
       Participant opinion and perception of risk was divided on whether a mandatory preview step
        would be safer than not having one, though the arguments against having one were made
        on efficiency rather than safety grounds
       The horizontal administration schedule format was disliked compared to a vertical or
        ‘calendar-style’ format
       Even with a ‘mandatory only’ model of displaying fields on the main prescribing form, some
        optional fields may also need to be displayed on the main form either for all prescriptions or
        on a per case basis

D.2     Research Objectives
 To gather HCP design preferences, qualitative feedback and possible patient safety hazards of CUI
 drug search designs focusing on the areas of:
       Information and workflow required before prescription authorisation (also known as ‘the
        Preview’)
       Overall design of the course definition form (that is, dealing with mandatory versus optional
        attributes)

                                                                                                 Page 204
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

D.3       Research Design
 Interviews were structured, lasted one hour and carried out in person. Participants were taken
 through wireframe design alternatives for each area of investigation and asked for preference
 based on patient safety criteria. Other qualitative feedback was elicited covering:
        Rationale for preference
        Design fit with current and best practice
        Design understandability
        Any potential hazards resulting from the designs
 Workshops lasted 2.5 hours and were similar to the interviews except that they focused on
 qualitative feedback and involved group discussion.
 Detailed notes from the interviews and workshops were qualitatively analysed using thematic
 coding.

D.4       Results
D.4.1         Participant Description
 Interviews
 Sixteen participants were interviewed in thirteen sessions. Each participant had either volunteered
 through the NHS CFH EMS signup or had been recruited by an HCP who had volunteered. Four
 out of sixteen participants had previously taken part in CUI clinical engagement for other work
 areas. Table 5 shows a summary of the participants’ profiles:

                                                                                                               Computer
 Session Job Role                      Specialty           Level        Prescriber?   Systems Used
                                                                                                               Experience
 374           Pharmacist              ENT                 ?            No            PCIS                     Medium

 375           Pharmacist and          Systems             ?            ?             PCIS                     High
               Analyst

 376           Pharmacist              Various             ?            No            PCIS                     Medium

 377           Pharmacist              Medication Safety   Senior       Yes           eTTOs – McKesson         Medium/High

 378           Pharmacist              Care of Elderly     ?            Yes           eTTOs – McKesson         Med

 379           Doctor                  Endocrine           F1           Yes           eTTOs – McKesson         High

 381           Pharmacist              ?                   Lead         No            eTTOs and seen various   ?

 382           Doctor                  Stroke              Consultant   Yes           PICCS                    Medium/High

 383           Doctor                  Care of Elderly     SpR          Yes           PICCS                    ?

 384           Doctor                  Acute Medicine      ST2          Yes           PICCS                    ?
               Doctor                                      FY2

 385           Doctor                  Respiratory and     Consultant   Yes           PICCS                    Medium
               Doctor                  Transplant          Consultant

 386           Doctor                  Renal               Consultant   Yes           PICCS                    High
               Pharmacist              Systems             Consultant
 Table 18: Interview Participants

                                                                                                                      Page 205
                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

All interview participants were clinical staff, either prescribers and/or pharmacists. All participants
were from acute secondary care, from three different trusts with diverse geographical locations.
12 interview participants had used electronic prescribing before, and the remaining 4 had used an
electronic To Take Out (TTO) system with very basic prescribing functionality. The majority had
medium or high computer experience, where high experience includes items such as being familiar
with spreadsheet calculation functions and having an understanding of databases.

Workshops
12 participants were interviewed in 2 workshops (sessions 387 and 388). Each participant had
volunteered through the NHS CFH Event Management System (EMS) signup. All 12 participants
had previously taken part in CUI clinical engagement. Table 19 shows a summary of the
participants’ profiles:

                                                                                                          Computer
Session Job Role                  Specialty           Level        Prescriber?   Systems Used
                                                                                                          Experience
387a         Pharmacist           Systems             ?            ?             JAC                      High

387b         Doctor               Paediatrics         Consultant   Yes           Trust Developed          Medium/High

387c         Midwife and          Midwifery           Senior       Yes           No                       Medium/High
             Patient Safety
             Officer

387d         Pharmacist           ?                   Senior       Yes           Lorenzo, JAC, Ascribe®   High

387e         Doctor               General Practice    GP           Yes           Vision                   High

387f         Pharmacist           ?                   Senior       ?             Cerner Millennium®       Medium/High

388a         Pharmacist           Systems             Senior       ?             Cerner, Lorenzo          High

388b         Pharmacist           Medication Safety   Senior       ?             eTTO                     Medium/High

388c         Nurse                Mental Health       Senior       ?             No                       High

388d         Nurse                ?                   Senior       ?             eTTO                     ?

388e         Pharmacist           Medication Safety   Senior       ?             JAC, eTTO                Medium

388f         Pharmacist           Systems             Senior       ?             JAC                      Medium/High
Table 19: Workshop Participants

The majority of participants were clinical staff, either prescribers and/or pharmacists. 11
participants were from secondary care, from a number of different trusts with diverse geographical
locations.
Eight workshop participants had used full electronic prescribing systems before and only two had
never used any kind of electronic prescribing. The majority had medium or high computer
experience, where high experience includes items such as being familiar with spreadsheet
calculation functions and having an understanding of databases.

                                                                                                                 Page 206
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

D.4.2       Design Areas
 Information Required Before Authorisation
     Analysis of participant’s responses concluded that, as well as the ‘main’ drug details, before
      authorising a prescription prescribers should see:
            The time of the first dose
            A representation of the schedule defined
        ‘Type’ was not seen as necessary.
     A principle implied from responses was that prescribers should be able to review anything
      defined by the prescriber or system before authorisation

 Format of Information Before Authorisation
     ‘Structured’ previews were preferred (where the drug name, drug details, first dose and
      scheduled were all distinct by virtue of their positioning and formatting or labels) rather than
      a single string of text as a ‘sentence’
     Consideration should be given to how to provide consistency of representation so that the
      format of the prescription before authorisation is not only clear but familiar and consistent
      with other representations in the application

 Workflow – Should There Be a Mandatory Confirmation Step?
     Participants were divided on whether a mandatory confirmation step would be safer. Some
      felt that an extra step would be ignored anyway and merely served to increase the number
      of user actions to prescribe. Others felt that an extra step would remind some prescribers to
      check the prescription and that seeing the information in a different format to that entered
      would provide additional safety
     With this difference of opinion, it would be highly desirable to gain real usage data on the
      efficacy of having an extra mandatory step on the accuracy of prescribing (or other similar
      processes such as ecommerce)
     Whether a preview step is used or not, throughout the process the prescriber must be clear
      as to the state of the prescription (that is, has it been prescribed or not?)

 Administration Schedule Format
     The horizontal format (administration times in a sentence) was negatively commented on by
      all participants
     Where shown, a vertical format, or ‘calendar’ format was thought to be more familiar and
      easier to read than the horizontal format
     Whatever the format, the prescription frequency should have a clear relationship with the
      schedule
     There is a risk that a ‘normal’ day’s schedule may mislead about the first dose (as this will
      often not be the normal first dose of the day)

                                                                                                Page 207
                      Design Guidance – Medications Management – Search and Prescribe
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 20 January 2010

Field Layout
    Though participants provided some feedback on the different layouts, user experience
     rationale should be applied here. For example:
          Is it necessary for the fields to be easily scannable in these forms?
          How consistent does the form layout need to be with other forms in the application?
          What space will be available in the application to present the form?

Mandatory Versus Optional Fields Model
    Participants felt that some optional fields might need to be ‘always’ displayed so as to
     remind the prescriber to consider them (for example, a ‘Special Instructions’ field)
    Participants pointed out that for certain medications there may be local policy that would
     recommend use of some fields even if they are not mandatory (for example, ‘reason’ when
     prescribing antibiotics):
          Therefore guidance should allow for non-mandatory ‘recommended’ fields to be
           included with mandatory fields on the form
    Though the model of ‘demoting’ optional attributes by placing them on a different form was
     generally supported (with the exceptions noted above), some participants felt that a
     ‘consistency’ model would be better. That is, that the attributes always retain a consistent
     placement for all medications, rather than moving depending on whether they are
     mandatory or not:
          If guidance recommends not using such a ‘consistency’ model, then it should provide
           clear rationale as to why not

Issues with Start/First Dose
    Several participants were keen to have a clear option to ‘add a stat’ as this is problem in
     current practice (and suggested that the system might even suggest adding a stat if the first
     dose is a long time in the future):
          Adding a stat may have an effect on the label for ‘first dose’ and the subsequent
           schedule times
    Making whether the date was ‘Today’ was seen as useful
    As has been seen in previous feedback, ‘Approx’ was seen as confusing

Duration/End
    Analysis of participant responses suggests that duration should generally have a default
     value of ‘ongoing’ (for inpatients), unless an exception to this default such as for antibiotics:
          Therefore duration should be displayed on the main form and/or in a preview as a
           system defined value
    Participants identified risks concerning:
          What a specific duration means. In that if the prescription is given a duration of ‘5 days’
           but the patient only receives two doses during this time, has the duration been
           completed?
          Whether the system should automatically stop a prescription if the duration is based on
           a condition (for example, if based on measurement parameters) and how this is
           communicated to the prescriber

                                                                                                Page 208
                    Design Guidance – Medications Management – Search and Prescribe
                    Prepared by Microsoft, Version 3.0.0.0
                    Last modified on 20 January 2010

Product (Form, Strength, Brand)
   On balance, if strength is not mandatory it should be made less prominent during course
    definition (that is, not be displayed on a ‘main’ form) due to potential confusion with dose
    (several participants were confused between the two)
   Though out of scope for this CUI work, participant feedback implies the need for a default
    for many prescriptions to a strength of ‘pharmacist’s choice’ or ‘dispenser to specify’
   Brand should not be displayed unless mandatory
   Participants raised the use case where a prescription is made up of multiple strength
    products to achieve a dose (for example, ‘with 6 mg of warfarin’)

Special Instructions
   Analysis of participant feedback suggests that it may be necessary to consider display of a
    special instructions field on the ‘main’ prescribing form
   However, it should be clear to prescribers what should and should not be included in a
    ‘Special Instructions’ field (as it may facilitate the unstructured recording of information that
    should be structured)
   The relationship with knowledge support should also be considered

Miscellaneous
   Participants supported the idea of prescribing while the medications list was visible, though
    several improvements to the design shown were suggested
   Several participants felt that the field for selecting ‘form’ should come before that for
    choosing ‘strength’, as they felt form usually determined strength
   Seven issues were raised with the current design of the medications list or information
    required per medication

                                                                                                Page 209
                    Design Guidance – Medications Management – Search and Prescribe
                    Prepared by Microsoft, Version 3.0.0.0
                    Last modified on 20 January 2010

APPENDIX E                     STUDY ID 46: EXECUTIVE SUMMARY

E.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
 between Microsoft® and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in October 2008 by the CUI
 CAPS team on drug search (part of the Search and Prescribe work). These findings are a subset of
 those in a larger internal report prepared for the CUI CAPS Search and Prescribe team.
 Purpose:
 To gain clinical feedback on design concepts for drug search in electronic systems.
 Method:
 Interviews: structured interviews with 14 Healthcare Professionals (HCPs) eliciting HCP
 preferences and qualitative feedback on design alternatives.
 Survey: online survey with 48 HCPs using open and closed questions.
 Key Results:
 Based on clinician preference and rationale:
       Templating should be used rather than default values
       A tabular template layout should be used
       The number of templates presented to the user should be cut down by a prior selection of
        route
       Generic versus branded designs require some improvements

E.2     Research Objectives
 To gather HCP design preferences, qualitative feedback and possible patient safety hazards of CUI
 drug search designs focusing on the areas of:
       Template prescriptions
       Generic versus branded issues
       General usability issues

                                                                                               Page 210
                      Design Guidance – Medications Management – Search and Prescribe
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 20 January 2010

E.3       Research Design
 Interviews were structured, lasted one hour and carried out in person. Participants were taken
 through wireframe design alternatives for each area of investigation and asked for preference
 based on patient safety criteria. Other qualitative feedback was elicited covering:
        Rationale for preference
        Design fit with current and best practice
        Design understandability
        Any potential hazards resulting from the designs.
 The online survey used open and closed questions, generally took 20—40 minutes for respondents
 to complete and focused only the template prescription issues. As with the interviews, respondents
 were shown design alternatives and asked for preferences and rationale based on patient safety
 criteria.
 Detailed notes from the interviews were qualitatively analysed using thematic coding.

E.4       Results
E.4.1         Participant Description
 Interviews
 14 participants were interviewed in 11 sessions. Each participant had either volunteered through
 the NHS CFH Event Management System (EMS) signup or had been recruited by an HCP who had
 volunteered. 8 out of 14 participants had previously taken part in CUI clinical engagement for other
 work areas. Table 5 shows a summary of the participants’ profiles:

                                                                                                                CUI
 Session Job Role                                Specialty         Level          Prescriber? Systems Used
                                                                                                                Feedback?
 342           Pharmacy Technician               ?                 ?              Drug history   Discharge      No
               Pharmacist                        Cancer Services   Senior         Independent    Discharge      No

 343           Pharmacist and Governance         ?                 Senior         Supplementary Discharge       Yes
               Pharmacist                        Renal             ?              Independent    Discharge      No
               Pharmacist                        Cancer Services   ?              ?              Chemotherapy   No
                                                                                                 System

 344           Nurse Analyst                     ?                 Senior         Limited        PCIS           Yes

 345           Nurse Analyst                     Diabetes          Senior         Limited        PCIS           Yes

 346           Doctor                            Paediatrics       Consultant     Yes            PCIS           Yes

 347           Pharmacist                        Paediatrics       Consultant     Independent    PCIS           No

 348           Pharmacist and System             ?                 Senior         Independent    PCIS           Yes
               Manager

 349           Doctor                            Psychiatry        SpR            Yes            JAC, HIS       Yes

 350           Doctor                            Psychiatry        Consultant     Yes            No             Yes

 351           Nurse                             Oncology          Senior         Limited        No             No

 352           Doctor                            SpR               Elderly care   Yes            Discharge      Yes
 Table 20: Interview Participants

                                                                                                                      Page 211
                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

 All interview participants were clinical staff and were from five different trusts with diverse
 geographical locations.
 Seven interview participants had used electronic prescribing before and a further five had used an
 electronic To Take Out (TTO) system with very basic prescribing functionality.

 Online Survey
 Survey respondents had either volunteered through the NHS CFH EMS signup or had previously
 participated in a CUI clinical engagement. Responses were anonymous. Table 21 shows a
 summary of the respondents’ job roles:

 Job Role                              Number of Respondents
 Community Nurse                                  1

 Other Nurse                                      2

 Junior Doctor                                    4

 Consultant (Medical)                             9

 Surgeon                                          1

 Anaesthetist                                     2

 Pharmacist                                      23

 Healthcare Scientist                             1

 Pharmacy Technicians                             2

 Healthcare Informatician                         1

 Healthcare Manager                               1

 Change Agent                                     1
 Table 21: Online Survey Respondents

 The total number of respondents was 48. 70% of respondents described themselves as patient
 facing and 48% had never used an ePrescribing system before.

E.4.2          Design Areas
 Defaults and Templates
       When comparing defaulting values versus template prescriptions:
                60% preferred templating
                14% preferred defaulting
                Other respondents answered: ‘no preference’ (10%), ‘it depends’ (8%) or ‘none are
                 safe’(8%)
       Though disadvantages were raised with both approaches, on balance the rationale given by
        interview participants and survey respondents suggested that templates were the safer and
        more scalable solution:
                For example, when compared with defaulting, templates forced a choice (rather than
                 unconscious acceptance) and the presence of alternatives prompted (though did not
                 ensure) thinking
       If a template approach were to be used, consideration would have to be given as to
        whether the order of presentation was by ‘commoness’ or by having the ‘lowest’ first

                                                                                                   Page 212
                              Design Guidance – Medications Management – Search and Prescribe
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

   A number of other issues were raised with the approach of suggesting values to prescribers
    including how to:
        Handle ‘non-normal’ groups (such as renal insufficient and paediatric patients)
        Encourage prescribers to consider whether templates are really appropriate for their
         patient
        Ensure full knowledge support is not ignored
        Prevent mis-selection if the list of templates changes over time
        Convey what the template is appropriate for and then whether this indication changes
         the overall prescribing UI workflow
        Handle different ‘commonness’ in different clinical contexts
        Convey trust by provenance
        Ensure templates are easy to compare
        Ensure there is a clear path if prescribers do not want a template

Template Layout
   When comparing possible layouts, the clear preference in the survey and interviews was for
    the tabular layout as this:
        Allowed comparison of each attribute
        Had dose as the first attribute
        Did not repeat attributes previously selected
   Criticism of the tabular layout was that it discouraged ‘reading the prescription as a
    recognisable entity’
   Though a tabular layout was deemed superior in this feedback, consideration should be
    given to its increased requirements for space

Drug Name in Template
   Though preference was slight, the majority of interview participants and survey respondents
    said they would prefer not to have the drug name repeated in the template, as long as it
    was clear elsewhere (such as from a still visible previous selection):
        There are other factors that would argue against the name redisplay such as the
         additional space taken up and distraction when comparing different templates

Access to Templates
   Before they could see the template prescriptions, design alternatives covered whether
    prescribers should have to select:
     a. Just the drug
     b. Drug and route
     c. Drug, route and form
     Each additional selection would cut down the number of templates that would be displayed.
   Preferences from the survey are likely to have been distorted by the use of a controlled
    drug example, as controlled drugs require mandatory specification of the form

                                                                                             Page 213
                   Design Guidance – Medications Management – Search and Prescribe
                   Prepared by Microsoft, Version 3.0.0.0
                   Last modified on 20 January 2010

   Based on the rationale given for preference, restriction of the visible templates by a
    selection in addition to drug seems the safer approach:
         Participants felt that route was appropriate for this selection as it is almost always
          known
   The NHS CFH ePrescribing team have also specified that mandatory recording of form for
    each prescription will not be necessary for every prescription under their ‘modified marker’
    scheme:
         Previous CUI user feedback suggested that mandatory recording of form would be
          unpopular with secondary care clinicians

Do Not Want a Template?
   Interview participant preference and rationale suggested that there should be an explicit
    option to not choose a template presented at the same time as the templates. Though it
    may need to be made distinct from the templates to ensure it is not mistaken for one
   Consideration should also be given to:
         Retaining the prescriber’s existing selections
         A prompt if the system can tell if the templates are not appropriate for the patient

Modified Release
   Participants suggested that the modified release filter be up-front so that prescribers were
    not shown templates which mixed modified and non-modified release medications:
         Also that there could be more explicit differentiation such as ‘Immediate release’
   Participants also raised issues around the clarification of exactly how fast the release was:
    4, 12, or 24 hours

Generic Versus Branded – Morphine
   Form definition before brand is problematic for morphine as some brands are only available
    as specific forms
   The heading ‘Generic’ was seen as very confusing for branded templates

Generic Versus Branded – Tylex
   Participants had difficulty with all four design alternatives
   Recommendations resulting from the issues raised:
         When switching from a brand to a generic name, the exact equivalent to the brand
          should be clear (either by only showing it or by marking it up)
         Consider how to prescribe co-drugs as separate entities
         Mitigate the issue of combination drug contents in search being obscured after selection
         Improve encouragement of generic prescribing, perhaps by defaulting selection to the
          generic option

                                                                                                   Page 214
                    Design Guidance – Medications Management – Search and Prescribe
                    Prepared by Microsoft, Version 3.0.0.0
                    Last modified on 20 January 2010

APPENDIX F                      STUDY ID 37: EXECUTIVE SUMMARY

F.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
 between Microsoft® and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in July 2008 by the CUI CAPS
 team on searching for drugs to prescribe. These findings are a subset of those in a larger internal
 report prepared for the CUI CAPS Search and Prescribe team.
 Purpose:
 To gain clinical feedback on design concepts for searching for drugs to prescribe in electronic
 systems.
 Method:
 Interviews: structured interviews with 15 Healthcare Professionals (HCPs) eliciting HCP
 preferences and qualitative feedback on design alternatives.
 Key Results:
 Based on clinician preference and rationale:
       The current method of searching for brands is inappropriate
       The ‘Commonly Prescribed’ grouping was well received though questions remain about
        where this is ‘common’ to
       There are several suggestions for improving aspects of the search interaction
       The number of characters to trigger results display is still unclear. Current preferences are
        based on speculation of possible error, which might be clarified either with real data or more
        robust experimentation

F.2     Research Objectives
 To gather HCP design preferences, qualitative feedback and possible patient safety hazards of CUI
 course definition designs focusing on the areas of:
       Character trigger level
       Generic versus brand search

F.3     Research Design
 Interviews were structured, lasted on average one hour and carried out in person. Using a variety
 of prescribing tasks, participants were taken through:

      1. An interactive prototype for drug searching

      2. Static wireframes for some aspects of design

                                                                                               Page 215
                       Design Guidance – Medications Management – Search and Prescribe
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

 Participants were then asked for preferences based on patient safety criteria. Other qualitative
 feedback was elicited covering:
        Rationale for preference
        Design fit with current and best practice
        Design understandability
        Any potential hazards resulting from the designs.
 Design alternatives were order balanced per task.
 Detailed notes from the interviews were qualitatively analysed using thematic coding.

F.4       Results
F.4.1         Participant Description
 15 participants were interviewed in 11 sessions. Each had either volunteered through the NHS
 CFH Event Management System (EMS) signup or had been recruited by an HCP who had
 volunteered. 4 out of 15 respondents had previously taken part in CUI clinical engagement for other
 work areas. Table 5 shows a summary of the participants’ profiles:

                                                                      Used a Drug Search             Computer
 Session Job Role                     Specialty          Level                           System Used
                                                                      before?                        Experience
 280           Pharmacist             Systems            Senior       Yes                       PCIS           High
               Nurse Analyst          ?                  ? Junior     No (but trains doctors)   ?              Medium

 281           Doctor                 Diabetes and       SpR          Yes                       PCIS           Medium
                                      Endocrinology

 282           Doctor                  Paediatrics       Consultant   Yes                       PCIS           Medium

 284           Nurse Analyst          ?                  ?            Yes (trains doctors)      PCIS           Medium

 285           Pharmacist and         Systems            ?            Yes (manages system)      PCIS           High
               Analyst

 286           Nurse                  Critical Care      Senior       Yes                       PICCS          Medium

 287           Doctor                 Intensive Care     Consultant   Yes                       PICCS          Medium
               Doctor                 Anaesthetics       Consultant   Yes                       PICCS          Medium
               Pharmacist             Systems            Consultant   Yes                       PICCS          High

 288           Doctor                 Elderly Medicine   SpR          No                        -              Medium

 289           Pharmacist             Paediatric         Senior       Yes                       Chemotherapy   Medium
                                      Oncology                                                  one

 290           Nurse                  Nephrology         ?            A little                  Proton         Medium
               Pharmacist             Nephrology         Senior       Yes                       Proton         Medium

 291           Doctor                 Paediatrics        Associate    No                        -              Medium
                                                         Specialist
 Table 22: Interview Participants

 All participants were clinical staff who prescribe as part of their role, or are involved with prescribing
 and are aware of related medication safety issues. All participants were from acute secondary care.
 The participants were from a number of different trusts, with diverse geographical locations.
 12 out of 15 participants had used some kind of electronic search to find drugs for prescribing. The
 majority had medium computer experience as they had to use computers as part of their clinical

                                                                                                                        Page 216
                                    Design Guidance – Medications Management – Search and Prescribe
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

 work. High experience includes items such as being familiar with spreadsheet calculation functions
 and having an understanding of databases.

F.4.2       Design Areas
 Advantages of Current System Drug Search
     Find a medication through generic or brand name, or local synonym
     Results filtered based on context (for example, filtered to those generally used in current
      specialty)
     Indication matched to drug selected at start of prescribing process as part of decision
      support check

 ‘Commonly Prescribed’ Grouping
     Participants were supportive of the feature
     Questions were raised about to whom the results were ‘common’. That is, if it meant
      ‘commonly prescribed in this trust’ is the set of commonly prescribed medications across all
      contexts in that trust a small enough set to be useful?
     While some participants suggested ‘commoness’ could be per context (for example, per
      specialty), this would pose problems for people working cross-speciality such as junior
      doctors at night
     Some degree of banner blindness observed as four participants did not initially see the
      group

 Co-Drug Search
     All participants struggled to find co-drugs as missing hyphens were not tolerated by the
      search

 Naming Issues
     Due to the search matching on the first word in a term, participants struggled to find results
      such as ‘yellow soft paraffin’ and ‘aspirin + paracetamol’ because their search key was not
      at the start of the term
     Brands which have the first few letters the same as the generic drug are likely to be
      promoted, as both would be returned by searches on the first few characters

 Insulin
     Participants described insulin prescribing as a difficult problem, with the implication that
      certain drugs such as insulin and heparin may require special handling in the search (for
      example, using ‘insulin’ to return a set of related insulins)

 Generic and Brand Search
     All participants felt the current design was incorrect. That is, if you search using a brand,
      they felt having to re-enter the generic name in order to prescribe the generic drug was too
      time-consuming
     Suggested solutions were split between:
            Returning both brand and generic names if searching on a brand name (four sessions)
            Directly diverting the prescriber to the generic name if searching on a brand name,
             apart from where branded prescribing is mandatory (four sessions)

                                                                                                Page 217
                      Design Guidance – Medications Management – Search and Prescribe
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 20 January 2010

Co-Drugs
   All participants liked and understood the idea of displaying the ingredients of co-drugs
   Of 11 participants asked, 9 were confused by the co-drug search and felt it was problematic
    (consequently, this feature has been removed from CUI designs)

Quick List
   The majority of participants felt the Quick List would be useful, though all assumed it would
    be a list customised to their clinical context (team, department or specialty) rather than a
    trust-wide list
   From their explanations of why it would be useful, participants confirmed that for many
    clinical contexts, or individuals, the number of medications used is small (at least for those
    that are commonly prescribed)
   Participants raised concerns about mis-selection if the list slowly changed, and also
    questioned how the Quick List was different to the ‘common matches’ at the top of the
    search results

Character Trigger
   After performing a number of prescribing tasks on the prototype using two and four
    character triggers, participant preference for a character trigger level was very mixed.
    Preferences were dependant on which risk participants saw as the more serious:
        Not finding a drug due to an incorrect character being typed (potential issue with four
         characters)
        Mis-selecting from a longer list of results (potential issue with two characters)
   Some participants felt four characters relied too much on correct spelling of drug names
    and might increase the use of free-text prescriptions (which would be dangerous), also that
    mis-selection error was still possible on four characters
   Some participants felt two characters would continue to allow clinicians to not learn the
    correct spelling of drug names (a bad thing) and encourage longer results lists, which might
    lead to longer reading times and mis-selection
   One participant was confused as to why results were not appearing (confirming the utility of
    the ‘type X characters’ hint)

                                                                                               Page 218
                   Design Guidance – Medications Management – Search and Prescribe
                   Prepared by Microsoft, Version 3.0.0.0
                   Last modified on 20 January 2010
