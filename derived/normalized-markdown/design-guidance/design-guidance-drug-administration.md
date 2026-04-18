# Design Guidance -- Drug Administration

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Drug Administration.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-drug-administration.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
Medications Management – Drug Administration

                            Wednesday, 20 January 2010
                                        Version 3.0.0.0

                                           Prepared by

PREFACE
    Documents replaced by this document

   Document Title                                                                                                        Version
   Design Guidance – Medications Management – Drug Administration                                                          2.0.0.0

   Design Guidance – Medications Management – Drug Administration                                                          1.0.0.0

    Documents to be read in conjunction with this document

   Document Title                                                                                                        Version
   Design Guidance – Medications List                                                                                      1.0.0.0

   Design Guidance – Time Display                                                                                          3.0.0.0

   Design Guidance – Date Display                                                                                          3.0.0.0

   Design Guidance – Date and Time Input                                                                                   3.0.0.0

   Design Guidance – Patient Banner                                                                                        4.0.0.0

   Design Guidance – Medications Management – Search and Prescribe                                                         3.0.0.0

   Design Guidance – Accessibility Principles                                                                              1.0.0.0

   Design Guidance – Accessibility Checklist                                                                               1.0.0.0

   Design Guidance – Medication Line                                                                                       2.0.0.0

   Design Guidance – Timeline View                                                                                         1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.
All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2010. All rights reserved.

                                    Design Guidance – Medications Management – Drug Administration
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

TABLE OF CONTENTS
1    Introduction ....................................................................................................................................1
    1.1    Customer Need .........................................................................................................................2
    1.2    Scope ........................................................................................................................................3
     1.2.1      In Scope...............................................................................................................................8
     1.2.2      Out of Scope ........................................................................................................................9
     1.2.3      Decision Support Statement ..............................................................................................11
    1.3    Assumptions............................................................................................................................11
    1.4    Dependencies .........................................................................................................................12

2    Guidance Overview ......................................................................................................................13
    2.1    Rationale Summary ................................................................................................................13
    2.2    Summary of Guidance ............................................................................................................14

3    Drug Administration Guidelines .................................................................................................21
    3.1    Introduction .............................................................................................................................21
    3.2    Principles .................................................................................................................................21
    3.3    Structure and Contents ...........................................................................................................22
     3.3.1      Composition of the Drug Administration View ...................................................................22
     3.3.2      Inclusion Criteria ................................................................................................................24
    3.4    List Order ................................................................................................................................26
    3.5    Drug Administration View Controls .........................................................................................31
     3.5.1      Controls in the Drug Administration View ..........................................................................31
     3.5.2      Grouping ............................................................................................................................33
     3.5.3      Status Bar ..........................................................................................................................35
    3.6    Navigation ...............................................................................................................................37
    3.7    The Look-Ahead Scroll Bar .....................................................................................................40
    3.8    Left-Hand Panel ......................................................................................................................43
     3.8.1      LHP Structure and Contents..............................................................................................43
     3.8.2      LHP Icons ..........................................................................................................................47
     3.8.3      LHP Information Panel ......................................................................................................49
    3.9    Chart Area ...............................................................................................................................51
     3.9.1      Chart Area Structure and Layout .......................................................................................51
     3.9.2      Time Scale .........................................................................................................................57
     3.9.3      Indicating Past and Future.................................................................................................61
     3.9.4      Indicating Today ................................................................................................................62
     3.9.5      Indicating the Currently-Selected Day ...............................................................................64
     3.9.6      Information Display ............................................................................................................65
     3.9.7      Information Display for the Currently-Selected Day ..........................................................67
     3.9.8      Chart Area Access to More Details ...................................................................................70
     3.9.9      Symbols and Icons ............................................................................................................71
                                 Design Guidance – Medications Management – Drug Administration
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

    3.10        Overdue Drugs ..................................................................................................................73
     3.10.1        Overdue Drugs ..............................................................................................................73
     3.10.2        Past Overdue .................................................................................................................74
    3.11        Displaying As Required Administration Events .................................................................76
    3.12        Displaying Once Only Administration Events ....................................................................78
    3.13        Administrations of Significant Duration ..............................................................................79
     3.13.1        Displaying Significant Duration Drugs ...........................................................................79
     3.13.2        Status Box .....................................................................................................................83
     3.13.3        Detailed View .................................................................................................................84
     3.13.4        Recording Significant Duration Drug Administrations ...................................................85
    3.14        When a Patient is Nil by Mouth .........................................................................................86
     3.14.1        Displaying Nil by Mouth Status ......................................................................................86
     3.14.2        Supporting Administrations While a Patient is Nil by Mouth .........................................87
    3.15        Complex Drugs ..................................................................................................................89
     3.15.1        Variable Dose Drugs .....................................................................................................89
     3.15.2        Preconditions .................................................................................................................92
     3.15.3        Time-Critical Administration Events ..............................................................................93
     3.15.4        Witnessed, Role-Specific and Self-Administrations ......................................................94
     3.15.5        Displaying Partially-Logged Administrations .................................................................95
    3.16        Recording Administration Events ......................................................................................96
     3.16.1        Recording Administration Events ..................................................................................96
     3.16.2        Structure of the Form .....................................................................................................98
     3.16.3        Recording Administrations ...........................................................................................100
    3.17        Medication Updates .........................................................................................................102

4    Document Information ...............................................................................................................104
    4.1    Terms and Abbreviations ......................................................................................................104
    4.2    Definitions .............................................................................................................................104
    4.3    Nomenclature ........................................................................................................................105
     4.3.1      Body Text.........................................................................................................................105
     4.3.2      Cross References ............................................................................................................106
    4.4    References ............................................................................................................................106

APPENDIX A           Study ID 8: Executive Summary ............................................................................108

APPENDIX B           Studies ID 14 and 40: Executive Summary ...........................................................113

APPENDIX C           Changes Since Previous Version ..........................................................................119

                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

1            INTRODUCTION
    This document provides design guidance for Drug Administration. It describes the area of focus,
    provides guidance and recommendations and explains the rationale behind the guidance and
    recommendations.
    To indicate their relative importance, each guideline in this document is ranked by Conformance
    and by Evidence Rating. Table 1 defines those terms:

    Term                  Definition
    Conformance           Indicates the extent to which you should follow the guideline when defining your UI implementation. There are
                          two levels:
                           Mandatory – An implementation should follow the guideline
                           Recommended – An implementation is advised to follow the guideline

    Evidence Rating       Summarises the strength of the research defining the guideline and the extent to which it mitigates patient safety
                          hazards. There are three ratings (with example factors used to determine the appropriate rating):
                           Low:
                               Does not mitigate specific patient safety hazards
                               User research findings unclear and with few participants
                               Unreferenced usability principles indicate the design is not significantly better than alternatives
                           Medium:
                               Mitigates specific patient safety hazards
                               User research findings clear but with few participants
                               References old authoritative guidance (for example, from the UK-based National Patient Safety Agency
                                (NPSA), Institute for Safe Medication Practices (ISMP) or World Health Organization (WHO)) that is
                                potentially soon to be superseded
                               Referenced usability principles indicate the design is significantly better than alternatives
                           High:
                               Mitigates specific patient safety hazards
                               User research findings clear and with a significant number of participants
                               References recent authoritative guidance (for example, from NPSA, ISMP or WHO)
                               Referenced usability principles indicate the design is significantly better than alternatives
    Table 1: Conformance and Evidence Rating Definitions

         Note
         It is also important to understand the meaning of the term ‘current’ as used in this document. Current
         medications refer to those that have been prescribed to a patient and have not yet been discontinued or
         completed. A medication can also be termed current with reference to a time in the past when the
         medication was current for the patient.
         Refer to section 4.2 for definitions of the specific terminology used in this document.

    This document is intended for use by anyone whose role involves screen design and the
    implementation or assessment of clinical applications. This document can therefore be used as
    guidance for the specification of display and interaction models for drug administration.
         Note
         Since research for this guidance was based on UK conventions for medication administration, care should
         be taken when considering the guidance for application outside the UK.

                                                                                                                                       Page 1
                                  Design Guidance – Medications Management – Drug Administration
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 20 January 2010

 Table 2 describes the changes made since the previous version of this guidance (Baseline version
 2.0.0.0 dated 19-Dec-2007):

 Change            IDs              Change Description
 Deleted
                                    This document has been significantly enhanced since the previous version. Many guidelines have
 Modified                           been deleted, modified and added as have their associated Usage Examples and Rationales. In
                                    consequence, the list of changes is very extensive and has been relocated to APPENDIX C.
 Added
 Table 2: Updates since the Last Baseline Version

1.1        Customer Need
 The administration (or giving) of drugs to patients has long been recognised as a safety-critical
      1
 area . It is both a complex activity in itself and the last possibility for care professionals to pick up
 errors made earlier in the overall process of drug management. A successful display solution must
 therefore perform a dual function:
       Provide sufficient information to review the intended schedule and previous history of
        administration
       Support the tasks at hand safely (for example, record administration events).
 Paper Charts – Over 20 paper-based charts from a variety of locations and specialities have been
 assessed. The overall format of paper drug charts are broadly consistent, however there are
 significant differences in design, with no clearly-favoured standard for layout and organisation.
 Some of these design differences may well already impact patient safety as care professionals
 move between hospitals and have to get used to new information groupings while working in
 stressful environments. A key feature of paper charts is their size: they typically run to a number of
 sides and contain large amounts of information that needs to be viewed simultaneously for
 maximum comprehension.
 Consistent design principles identified through these reviews are reflected in the design outlined in
 this document (for example, locating the information about the drug on the left hand side of the
 screen and the administration events on the right hand side). Much of this document will refer to
 this ‘Typical Generic Paper’ (TGP) drug chart, an example of which is shown in Figure 1:

 Figure 1: Example of a TGP Drug Chart Format for a Regular Drug

 1
  Building a safer NHS for patients: Improving Medication Safety, Department of Health {R1}:
 http://www.dh.gov.uk/en/Publicationsandstatistics/Publications/PublicationsPolicyAndGuidance/DH_4071443
                                                                                                                                Page 2
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

 Points to note about this TGP drug chart style are:
       The drug details are located in a panel located on the left hand side
       Dates of administration are located along a top title bar
       Administration times are not fixed
       Administration times are located between the left hand details and the main administration
        event area
       Six administration timeslots are permanently available
       Drugs are often split into the following categories:
             Once Only
             Regular
             As Required (also known as ‘PRN’, referencing the Latin Pro Re Nata)
             Infusions
       There are often additional categories (such as ‘Oral Anticoagulants’ and ‘Insulin’) that have
        dedicated areas on the chart or are recorded on subsidiary charts
 Electronic systems – The display formats for medicines administration information within
 electronic systems are much less consistent than the formats of paper charts. These differences
 impact both the review and task completion functions referred to above and will become a safety
 concern as electronic systems become more widely available. The challenge for developers of
 electronic systems is particularly great in this area, as there are no universally-accepted,
 paper-based standards to refer to and computer screens are not capable of displaying the same
 density of information as a sheet of paper (let alone a fold-out chart, which may cover up to three
 sheets). This ‘information density problem’ is one of the primary reasons why designers of
 electronic systems resort to ‘creative solutions’ and why display solutions inevitably diverge. The
 intention of this guidance is to use design principles that are common across paper drug charts so
 that there is a familiarity with aspects of the current paper drug charts, thus reducing the training
 required to move to these electronic systems.

1.2     Scope
 The guidance in this document is for the Drug Administration View. This view is envisaged as being
 part of a clinical system that includes a series of views, some of which present medications
 information for each patient. Guidance for the display of a patient's medications is defined in Design
 Guidance – Medications List {R2}, and more detailed guidance for the layout and formatting of
 individual medications is defined in Design Guidance – Medication Line {R3}. Medications may also
 be displayed within another view, such as a Timeline View as defined in Design Guidance –
 Timeline View {R4}.
 Figure 2 shows a simple outline of the structure and layout of elements within the Drug
 Administration View. This illustration is used throughout the document, with shaded sections
 highlighting the area to which the guidance in that section applies.
      Important
      The visual representations used within this document to display the guidance are illustrative only. They
      are simplified in order to support understanding of the guidance points. Stylistic choices, such as colours,
      fonts or icons are not part of the guidance and unless otherwise specified are not mandatory requirements
      for compliance with the guidance in this document.
      Some examples within this document are based on the requirements for the NHS within the UK. You
      should consider how your clinical application will need to handle information, such as patient identification
      numbers (shown with the label ‘NHS No.’ in some images in this guidance), within the country of use.

                                                                                                              Page 3
                          Design Guidance – Medications Management – Drug Administration
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

Figure 2: Drug Administration View Outline

Figure 3 contains an example of how this outline may appear when implemented in a styled
application:

Figure 3: Example of Styled Medical Application Featuring the Drug Administration View

                                                                                                 Page 4
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

The guidance within this document relates to the area highlighted in Figure 4. All other areas
displayed outside of this will not be discussed in this document.

Figure 4: Outline Displaying Drug Administration View Area

Figure 5 provides an overview of the Drug Administration View structure. Drugs are presented in
the Drug Administration View as a set of horizontal strips within a list. Controls for manipulating the
list are positioned above the Drug Administration View in an area called the Toolbar and controls
for changing the days in view (time navigation) are in the area labelled Navigation Controls.

                                                             Navigation Controls
                                    Toolbar                  and Column Headings
                                                                                                 Notification
                                                                                                 Area (for
                                                                                                 example, ‘Nil
                                                                                                 by Mouth’)

                                                                                                    Look-
                                                                                                    Ahead
                                                                                                    Scroll Bar
    Drugs                                                                                           (LASB)

                                                                                                     Scroll Bar

                                                                      Currently                 Look-Ahead
                                 Time Scale Column
                                                                      selected day              Scroll Bar (LASB)

Figure 5: Overview of the Drug Administration View Areas

                                                                                                                     Page 5
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Figure 6 indicates two key areas of the Drug Administration View: the Left-Hand Panel (LHP) and
the Chart Area. Broadly speaking, information about the drug’s prescription is displayed in the
Left-Hand Panel and the drug’s administration schedule is represented in the Chart Area.

                 Left-Hand Panel                     Chart Area

Figure 6: The Left-Hand Panel and Chart Area in the Drug Administration View

The Drug Administration View displays four days of the administration schedule at any one time.
Days are represented by columns and drugs by rows, as shown in Figure 7:

Figure 7: Outline Display of the Four Day View

                                                                                                 Page 6
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Column three is the widest column and is often referred to in this document as being ‘in focus’ or
‘selected’ (see Figure 8). This column uses the additional width to display more detail than can be
viewed in the surrounding narrower columns.

Figure 8: The Location of the Currently Selected Day in the Drug Administration View

Columns one and two display the administration information for the two days prior to the day ‘in
focus’, with column one displaying the information for two days prior and column two displaying the
information for one day prior. The fourth column displays the details for the day after, as shown in
Figure 9:

Figure 9: The Location of the Unfocused Days in the Drug Administration View

                                                                                                 Page 7
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

1.2.1     In Scope
 This guidance has been developed for, and is supported by research in, short-term acute managed
 care settings. The guidance is relevant to the presentation of, and interaction with, drug information
 for a single patient. This is specifically to support the detailed review of administration events and to
 record drug administrations.
 Although this view has been developed for a particular setting, the design has been created so that
 it can be used in other settings. There are some areas where the detail required is more than the
 space available in the Chart Area. In this case, the user should be able to click in the relevant area
 to view more detail. The Drug Administration View remains a valid overview. The drugs referred to
 in the out of scope section (section 1.2.2) will either fit into the summary view or require an
 additional level of detail that the user can navigate to so are catered for by the generic design
 principles in this document.
 The guidance in this document covers the following features:
      Recording a successful drug administration for a single patient
      Recording an unsuccessful drug administration for a single patient
      Reviewing details of an individual administration event (past administrations) for a single
       patient
 The following users are covered in this guidance:
      Doctor
      Nurse
      Pharmacist
 The following care settings are covered in this guidance:
      Acute managed care (Inpatient)
 The following types of drugs are covered in this guidance:
      Oral solids and liquids
      Inhalers and sprays
      Eye/ear/nose drops
      Topical liquids
      Creams, ointments and gels
      Enemas and rectal solutions
      Granules and powders
      Suppositories and pessaries
      Topical patches
      Nebules
      Patients own drugs (PODs)
      Drugs prescribed by independent prescribers
 Other situations considered in this document:
      When a patient is Nil by Mouth

                                                                                                     Page 8
                       Design Guidance – Medications Management – Drug Administration
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

1.2.2      Out of Scope
    Note
    Listing an item as out of scope does not classify it as unimportant. Project time and resource constraints
    inevitably restrict what can be in scope for a particular release. It is possible that items out of scope for
    this release may be considered for a future release.

 The guidance in this document does not cover the following features:
     Prescribing a drug
     Reviewing what drugs a patient is prescribed
     Checking the accuracy of a prescription
     Adjusting a prescription
     Diagnosing a patient’s condition
     Reviewing drugs for a handover
     Recording administrations without a prescription
     Supporting dose calculation
     Making changes to drugs
     Reconciliation
     Verification
     Compliance
     Discharge
     Drug stock checking
     Multi-patient tasks
     Views framework for a single patient (for example, access to the Care Plan)
     Microsoft Health CUI Medications List View
     Microsoft Health CUI Timeline View
     Monitoring chart view
     Selection and action in mixed views
     Drugs in other views
     Display of observations and test results
     Single day view (and additional levels of detail)
     Recording administered doses different from those prescribed
     Incomplete administration
     Partial dose administration
     Administration errors
     Partially-logged administrations
     Management of adverse reactions
     Recording administrations on behalf of another clinician
     Recording self-administrations
     Preparation and administration instructions
                                                                                                              Page 9
                        Design Guidance – Medications Management – Drug Administration
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

The following users are not covered in this guidance:
    Patients
    Ward managers (multiple patient use)
    Non-clinical staff
    Other health professionals
    Anaesthetists
The following care settings are not covered in this guidance:
    Outpatients
    Clinics
    Pharmacies
    Emergency
    Intensive care
    High-Dependency Units (HDU)
    Primary care (including GP practices)
    Community and home visits
The following types of drugs are not covered in this guidance:
    Enteral feeds
    Dressings and devices
    Implants and sticks
    Intrauterine devices (IUDs)
    Cements
    Homeopathic products (including complementary and alternative therapies)
    Dialysis drugs
    Injections
    Anaesthetics
    Insulin
    Warfarin
    Infusions and fluids (these are partially addressed by Section 3.13)
    Combination Infusions
    Total Parenteral Nutrition (TPN)
    Gases
    Blood and platelet products
    Radio-pharmacy
    Foams
    Radioactive agents
    Controlled drugs
    Unlicensed drugs

                                                                                      Page 10
                     Design Guidance – Medications Management – Drug Administration
                     Prepared by Microsoft, Version 3.0.0.0
                     Last modified on 20 January 2010

       Regimens and order sets
       Foodstuffs and other products specially formulated for medical use
       Over the counter (OTC)
       Under the counter
       Recreational
       Unscheduled drugs, other than unscheduled As Required (for example, drugs to be
        administered two hours before surgery where the date and time of surgery is unscheduled)
       Drugs with titrating doses
       Discharge drugs – to take out (TTO)
       Variable dose drugs
       Drugs prescribed by medication instructions for a named patient (sometimes called Patient
        Specific Direction (PSD))
       Drugs prescribed by medication instructions for defined groups of patients (sometimes
        called Patient Group Direction (PGD))
       Drugs supplied under homely remedy protocols
       Drugs prescribed by prescribers other than clinicians (sometimes called supplementary
        prescribers)
 The following are not covered in this guidance:
       Restricted parts of the clinical record (sometimes referred to as 'sealed envelope')
       Decision support (see section 1.2.3)
       Knowledge support
       Alerts and warnings
       Allergies and adverse reactions

1.2.3        Decision Support Statement
 Some of the guidance points in this document might be interpreted as implying that the system
 offers a degree of decision support (for example, time lockouts on As Required medication).
 However, a full definition of decision support is out of scope for this document.

1.3      Assumptions
 ID       Assumption
 A1       The Drug Administration View is one of a set of drugs views within a medications framework that assumes the presence of a
          drugs section within a patient record.

 A2       This guidance assumes that the clinical application will have a complete record of drugs for each patient and that the
          application can access and combine information about current and previous drugs.

 A3       This guidance assumes that the user can access any allergy information recorded about the patient.
 Table 3: Assumptions

                                                                                                                                   Page 11
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

1.4        Dependencies
 ID        Dependency
 D1        The display of dates and time and the controls used to input them are defined by the guidance in the Time Display {R5},
           Date Display {R6} and Date and Time Input {R7} documents.

 D2        This guidance is informed by the UK NHS National Programme for Information Technology (NPfIT) document dm+d
           Implementation Guide (Secondary Care)2 referred to in this document as the NHS Connecting for Health (NHS CFH)
           Medication Types Rules. Changes to this work may trigger changes to this guidance

 D3        This guidance is informed by the UK NHS CFH ePrescribing Functional Specification3

 D4        This project is in turn informed by The Dictionary of Medicines + Devices4 (referred to as ‘dm+d’).

 D5        The display of the drug details (name, dose, form, route, frequency and so on) in the Left-Hand Panel conforms to the
           guidance in the Medication Line {R3} document.
 Table 4: Dependencies

 2
  NHS NPfIT – dm+d Implementation Guide (Secondary Care) {R8}:
 http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/refdocs/index_html
 3
  NHS CFH – ePrescribing Functional Specification for NHS Trusts {R9}:
 http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/baselinefunctspec.pdf
 4
     The Dictionary of Medicines + Devices {R10}: http://www.dmd.nhs.uk/
                                                                                                                                   Page 12
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

2         GUIDANCE OVERVIEW
    The guidance in this document describes a view for displaying a single patient’s drug administration
    schedule and history and for the recording of individual drug administration events. This Drug
    Administration View supports the tasks of drug administration recording and drug administration
    review from a single view.
    The structure of the full end-to-end process of drug administration has been considered when
    designing this guidance. However, only the items listed in section 1.2.1 are in scope for this
    document. Section 2.2 summarises the guidance points detailed in the rest of this document.
        Important
        Though it is not explicit guidance, the illustrations in this document and in Medications List {R2} follow the
        secondary care convention of having each fixed dose prescription on a new line, rather than, for example,
        putting all prescriptions for the same medication on the same line. Variable dose prescriptions may follow
        different conventions
        In several of the usage examples, notional icons are illustrated by placeholders. Figure 10 shows
        examples of such notional icons:

        Figure 10: Examples of Notional Icons

2.1       Rationale Summary
    The guidance in this document works towards reducing patient safety risks arising from the
    information used to administer drugs.
    General Principles:
         The identification of specific drugs that are due for administration
         Supporting the safe recording of drug administrations
         Must be able to record what actually happened
         Aim not to introduce any additional risks from current paper practice
    Usability Principles:
         Highlight the primary functions to support accurate recording of what happened for an
          administration event
         Display safety critical elements to the clinician without requiring user action
         Promote the primary functions to support quick recording of an administration event
         Support access to secondary functions without introducing screen clutter
         Transfer key design principles from the paper drug charts studied to reduce the need for
          training and increase familiarity when users move to electronic systems.

                                                                                                                Page 13
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

 Existing Standards:
        UK NPfIT ePrescribing Functional Specification for NHS Trusts {R9}
                                                                         5
        UK Nursing and Midwifery Council (NMC) Standards
        UK NHS NPfIT dm+d Implementation Guide (Secondary Care) {R8}

2.2       Summary of Guidance
 Table 5 summarises the content of this document by outlining each area of guidance (along with a
 cross reference to the relevant section) and providing a visual example to illustrate how it might be
 implemented:

 Areas of Guidance                                   Visual Summary
 3.3.1 Composition of the Drug Administration View

 3.3.2 Inclusion Criteria

 3.4 List Order

 3.5.1 Controls in the Drug Administration View

 3.5.2 Grouping

 5
     Standards for medicines management {R11}: http://www.nmc-uk.org/aDisplayDocument.aspx?DocumentID=6228
                                                                                                             Page 14
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Areas of Guidance                                     Visual Summary
3.5.3 Status Bar

3.6 Navigation

3.7 The Look-Ahead Scroll Bar

3.8.1 LHP Structure and Contents

3.8.2 LHP Icons

3.8.3 LHP Information Panel

3.9.1 Chart Area Structure and Layout

                                                                                               Page 15
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Areas of Guidance                                          Visual Summary
3.9.2 Time Scale

3.9.3 Indicating Past and Future

3.9.4 Indicating Today

3.9.5 Indicating the Currently-Selected Day

3.9.6 Information Display

3.9.7 Information Display for the Currently-Selected Day

                                                                                             Page 16
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Areas of Guidance                                   Visual Summary
3.9.8 Chart Area Access to More Details

3.9.9 Symbols and Icons

3.10.1 Overdue Drugs

3.10.2 Past Overdue

3.11 Displaying As Required Administration Events

3.12 Displaying Once Only Administration Events

                                                                                            Page 17
                           Design Guidance – Medications Management – Drug Administration
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

Areas of Guidance                                          Visual Summary
3.13.1 Displaying Significant Duration Drugs

3.13.2 Status Box

3.13.3 Detailed View

3.13.4 Recording Significant Duration Drug
Administrations

3.14.1 Displaying Nil by Mouth Status

3.14.2 Supporting Administrations While a Patient is Nil
by Mouth

                                                                                             Page 18
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Areas of Guidance                                      Visual Summary
3.15.1 Variable Dose Drugs

3.15.2 Preconditions

3.15.3 Time-Critical Administration Events

3.15.4 Witnessed, Role-Specific and Self-
Administrations

3.16.1 Recording Administration Events

3.16.2 Structure of the Form

                                                                                                Page 19
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Areas of Guidance                                      Visual Summary
3.16.3 Recording Administrations

3.17 Medication Updates                                No Visual Summary associated with this guidance
Table 5: Summary of Guidance

                                                                                                         Page 20
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

3         DRUG ADMINISTRATION GUIDELINES

3.1       Introduction
    This section of the document presents the guidance for the Drug Administration View split by
    component or topic area.

3.2       Principles
    The following key principles inform this guidance:
        Provide a visually-rich chart of information relevant to, and prioritised for, the administration
         of drugs
        Support the presentation of drugs with different characteristics (such as Significant
         Duration, Once Only or As Required drugs) within one view
        Display sufficient information for an accurate interpretation of the administration schedule
         (past, current and planned) and status of administration events within a relevant time
         interval
        Restrict the display of unnecessary information to reduce clutter and prioritise the
         information most likely to require action
        Provide access, in context, to further details on demand
        Mitigate the potential for action to be taken without sufficient information by presenting
         carefully selected information and explicit labels to clarify what information is displayed and
         the extent to which it is complete
        When dynamically presenting information (such as status information, error messages or
         warnings), display the information in context and facilitate action where necessary by
         clearly providing associated controls
        Support efficient and accurate recording of administration events with enough flexibility for
         differences in drugs and working practices

                                                                                                     Page 21
                         Design Guidance – Medications Management – Drug Administration
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

3.3       Structure and Contents
 This section of the guidance document looks at the general composition of the Drug Administration
 View. It describes the rules concerning the overall structure and contents required.

3.3.1         Composition of the Drug Administration View
 The guidance points in this section relate to the whole Chart Area used to display the medication
 lines in the Drug Administration View. Figure 11 highlights this area:

 Figure 11: Drug Administration View Area

                                                                                                                      Evidence
 ID                Description                                                                          Conformance
                                                                                                                      Rating
 MEDa-0001         In the Drug Administration View, present a list of discrete drugs equivalent to      Mandatory     Medium
                   medication lines in the Medications List View as described in the Medications
                   List document {R2}

 MEDa-0002         Ensure that each drug in the Drug Administration View is bounded by a border         Mandatory     Medium

 MEDa-0003         Ensure that medication lines are separated by ‘white space’ (that is, clear space Mandatory
                                                                                                                      Medium
                   unused for other purposes)

 MEDa-0246         Allow a medication line to be selected by clicking any part of it except those       Mandatory     Medium
                   parts that are clicked to perform other actions (for example, an information icon)
                   See section 3.8.2 for guidance relating to the information icons

 Usage Examples

 Figure 12: Example of a Single Selected Medication Line

                                                                                                                          Page 22
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Figure 13: List of Single Discrete Drugs Bounded by a Border and Separated by White Space (Shown in Blue)

Figure 14: List Not Separated by White Space (Shown in Blue)

Rationale
MEDa-0001
The rows on the Drug Administration View should be consistent with the rows on the Medications List View so that clinicians can
switch between the two views and easily understand which rows correspond. If the rows did not match up between the two views,
clinicians may be confused and assume a medication is ‘missing’ from one of the views or take longer to find particular medications
when switching between the two. For example, confusion could arise if two sequential bags of an Infusion were shown as two lines in
one view but aggregated as only one in another.

                                                                                                                             Page 23
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

 MEDa-0002
 Though it is not explicit guidance, the illustrations in this document and in Medications List {R2} follow the hospital and acute care
 convention of having each fixed dose prescription on a new line, rather than, for example, putting all prescriptions for the same
 medication on the same line. Variable dose prescriptions may follow different conventions.
 Medication ‘lines’ in the Drug Administration View are collections of text, lines and symbols. Medication lines need to be clearly
 demarcated from each other in order to prevent misreading between the lines. For example, misassociating the left hand drug details
 with another line’s administration events. Alternative means of demarcating the lines (such as alternate row shading or keylines) would
 not on their own be sufficient to distinguish the medication line.
 MEDa-0003
 Medication lines are separated by ‘white space’ to provide a clear but uncluttered division between the lines to reduce the risk of
 misreading.

3.3.2          Inclusion Criteria
 The guidance points in this section relate to when a medication line is included in the available list
 in the Drug Administration View. Figure 15 displays an example of this list:

 Figure 15: Inclusion Criteria Area

      Note
      In this document, ‘current’ medications refer to those that have been prescribed to a patient and have not
      yet been discontinued or completed. A medication can also be termed current with reference to a time in
      the past when the medication was current for the patient.

                                                                                                                              Evidence
 ID                 Description                                                                           Conformance
                                                                                                                              Rating
 MEDa-0262          Always show all medications that were or are current for the patient at any point     Mandatory           High
                    during the visible time window. As such, when a medication is discontinued, it
                    should remain in the list only as long as the visible time window includes a time
                    when the medication was current for the patient.

 MEDa-0263          When the user navigates through time (for example, scrolling into the past) retain    Recommended         Medium
                    those medications which are current as of ‘now’.

 MEDa-0007          Dynamically update the drugs in the Drug Administration View list as the              Mandatory           Medium
                    navigation controls are used to change the days visible in the Chart Area

 Usage Examples
 Figure 16, Figure 17 and Figure 18 show a list of three drugs and how the view behaves as the clinician scrolls into the future
 (MEDa-0262, MEDa-0007):
  Figure 16 – A completed medication (Drug C) is shown in the view because it was current for some time still in view (yesterday and
   two days ago). Drug B is also displayed because it is still current, even though it only has one administration event a week
  Figure 17 – The clinician has advanced the view by one day so tomorrow is now the currently selected day. Drug B is still displayed
   in the list because it is still current, despite it having no administration events visible in the four day time window
  Figure 18 – The clinician has advanced the view by four days. Drugs A and B are still current and so included. Drug C has been
   removed from the list because it is completed and the time period in view (plus two days to plus five days) does not cover a time
   when the drug was current. Drug C is still accessible by scrolling back in time, or by using an alternative medications view

                                                                                                                                     Page 24
                                 Design Guidance – Medications Management – Drug Administration
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

Figure 16: Step One – Displaying All Drugs That Were Current for the Time in View (A, B and C)

Figure 17: Step Two – Displaying All Drugs That Were Current for the Time in View

Figure 18: Step Three – Displaying Only Drugs A and B as Drug C Is No Longer Current in the Four Days in View

                                                                                                                Page 25
                           Design Guidance – Medications Management – Drug Administration
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

 Rationale
 MEDa-0262
 The drug Chart Area (in the default four day window) must always accurately reflect the state of the patient‘s medications during that
 time, otherwise the clinician may be misled. All the medications that were or are current during that time must be included in the list.
 This includes medications that may be or may have been current but have no administration event. For example, it may be important
 to know that the patient has been on As Required analgesia for the past five days but has not required any administration of it.
 Medications that have been completed or discontinued within the visible time window may still be relevant to current administration
 concerns. A clinician may need to be able to review the administration history of past medications as well as current ones. As per the
 guidance on list ordering (see section 3.4), current medication is always sorted above past medication.
 User feedback with a small number of clinicians unanimously agreed that the Drug Administration View should always display the
 ‘complete’ list of drugs that were administered during the time window that is currently visible (if the data exists in the system) {R12}.
 Including past medications only when their ‘current’ period falls within the four day window in view avoids the issue of processing and
 displaying the potentially hundreds of past medications.
 As the list is ‘filtered’ by the four days in view, rather than by status, it avoids the need for additional filter indication. For example, if the
 view only showed the current medications, and never the past, this implies the need for an indication of filtering, an explanation of filter
 criteria and a way to access the filtered out medications.
 MEDa-0263
 It is recommended to always display drugs current as of now so that they are easily accessible while navigated into the past or future
 enabling comparison of the current medications with those prescribed in the past.

3.4       List Order
 The guidance points in this section relate to the hierarchical list order for the drug lines in the Drug
 Administration View. Figure 19 displays an example of this list using just the labels:

 Figure 19: List Order

 This section includes guidance that defines the rules for determining the list order for drugs in the
 Drug Administration View. This guidance assumes that the system will have access to information
 about when the drugs are scheduled to be administered and what is considered to be a safe
 threshold of time tolerance for how early or late a drug can be given before it is not considered to
 have been given on time.
      Note
      Time tolerances will be down to local governance and are not defined in this document.

                                                                                                                                            Page 26
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

The terms defined in Table 6 are used in this section and later in the document to refer to states of
scheduled administrations:

Event Schedule                                                                                     Possible Administration
               Quick Definition                       Description
State                                                                                              Status If Recorded
Empty                   Future                        The event is scheduled but is not Due,       Depends on context
                                                      Overdue or Next

Next                    Next event to be Given        The event is the Next chronological event    If administered while Next, the
                                                      for that drug that is not Due or Overdue     administration might be
                                                                                                   categorised as Given Early

Due                     Ready to be Given             The event is within the tolerances for the If administered while Due, the
                                                      drug administration schedule (example time administration might be
                                                      tolerances could be one hour before and    categorised as Given
                                                      after the scheduled administration time)

Overdue                 Should have been Given by The event is later than the time constraints     If administered while Overdue, the
                        now                       of the drug administration schedule              administration might be
                                                                                                   categorised as Given Late.

Begun                   Drug administration           A Significant Duration drug such as an         Depends on context
                        underway                      infusion (see section 3.13), for which a start
                                                      date and time have been recorded, is
                                                      scheduled to still be running and has
                                                      nothing recorded to indicate that it has
                                                      stopped.

Unscheduled             A drug that is administered   A drug that has not been given a regular     If administered As Required, the
As Required             according to patient need     schedule and therefore is only given on an   administration might be
                                                      as needed basis based on clinical            categorised as Given
                                                      judgement and preset criteria. For more on
                                                      As Required medication see section 3.9.1.
Table 6: Scheduled Administration Terms

In summary, the list-ordering rules place:
        Overdue drugs at the top of the list
        Drugs with scheduled administrations that are not yet Due lower in the list
        Drugs with only past administrations (and no further planned administrations) at the bottom
         of the list

       Note
       The list order is based on the time of Next scheduled administration and not on any clinical decision
       support.

                                                                                                                               Page 27
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                                                   Evidence
ID          Description                                                                              Conformance
                                                                                                                   Rating
MEDa-0023   Order the list of drugs in the Drug Administration View according to the scheduled Mandatory           Medium
            time of the Next administration, such that the most Due drugs appear at the top.
            Order Overdue drugs higher in the list than those that are Due only
                     RISK
                     There is an unmitigated risk that clinicians may mistakenly assume that
                     the medications in the Drug Administration View are ordered by clinical
                     priority as opposed to by scheduled time. If desirable, ordering by clinical
                     priority would be by clinical decision support, which is out of scope

MEDa-0025   For drugs that share the same Next administration time, place those with a higher Mandatory            Medium
            priority of administration (for example, those with more stringent time tolerances)
            higher in the list

MEDa-0026   Place Regular drugs higher in the list than unscheduled As Required drugs that:          Mandatory     Medium
             Share the same Next administration time as the Regular drugs
             Are available for administration (in that they have not been ‘locked out’ due to
              a time constraint)
                     RISK
                     There is an acknowledged risk with placing As Required drugs below
                     Regular drugs. This risk is that the As Required drugs may be missed by
                     the clinician if they are off screen. However, on balance, it is felt more
                     important to display Regular drugs at the top of the list and that
                     presenting the As Required drugs in the same list is superior to them
                     being in a separate section where they would always be out of immediate
                     view.

MEDa-0027   Place unscheduled As Required drugs that are unavailable for administration due Mandatory              Medium
            to a time constraint, below those drugs with administrations that are scheduled
            before the active time constraint ends

MEDa-0028   Place Significant Duration drugs that have Begun (and not been discontinued or           Mandatory     Medium
            stopped) below drugs that are Due

MEDa-0029   Place drugs that have no Due administrations below those ‘Significant Duration’          Mandatory     Medium
            drugs that have Begun (and not been discontinued or stopped)

MEDa-0030   Place past drugs with more recent administration events higher in the list than          Mandatory     Medium
            past drugs whose last administration events are further in the past

MEDa-0031   Place past drugs lower in the list than current (including not started) drugs            Mandatory     Medium

MEDa-0032   Maintain the order of the list until it is refreshed manually or the patient record is   Mandatory     Medium
            closed and the Drug Administration View re-opened

MEDa-0252   An administration event should become ‘Next’ when the following conditions are           Mandatory     Medium
            met:
             It is not an event for an unscheduled ‘As Required’ drug
             The event is for a drug that does not have either a Due or an Overdue
              administration event
             The event is the Next chronological event for that drug

MEDa-0264   Use the label ‘Begun’ when referring to Significant Duration drugs that have been Recommended          Low
            recorded to have started and have not been stopped or discontinued

                                                                                                                         Page 28
                        Design Guidance – Medications Management – Drug Administration
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

Usage Examples
Figure 20 shows how the list order of three drugs might change over time using simplified medication lines. The icons and time
tolerances used are notional. These demonstrate the list order guidance for Due, Overdue and As Required medications.

                                                                               Drug A has an administration Due at 08:00, Drug C
                                                                               has one Due at 09:00 and Drug B is an unscheduled
                                                                               As Required. Therefore, Drug A is ordered first.

                                                           
                                                                               The 08:00 event for Drug A has been successfully
                                                                               administered and, since the Next is not Due until
                                                                               12:00, Drug C moves to the top of the list because its
                                                                               09:00 event is most Due. Drug B is still ordered below
                                                                               the Due medication.

                                                           
                                                                               Drug C has been Overdue for three hours but remains
                                                                               sorted above the Next Due medication for Drug A (due
                                                                               at 12:00) (for more guidance on Overdue events, see
                                                                               Section 3.10). As both Drug A and Drug C now have
                                                                               Due or Overdue events, they are sorted above Drug B.

                                                           
Figure 20: Examples of How the Order of Three Medications Might Change Over Time

                                                                                                                                 Page 29
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

The list of event statuses in Figure 21 demonstrates the effect of the list ordering guidance. Figure 21 shows a list of 11 example
medication lines with different statuses present in a Drug Administration View at the same time. The Overdue medications are sorted
to the top and the Next medications are towards the bottom. As per the guidance, medications with only Future events and no status
would be sorted beneath those and medications that have been completed or discontinued would be sorted below them.
The examples in Figure 21 are predicated on the current time being 08:15:
                                           A drug that was Due to be administered at 04:30 and that is now Overdue
                                           as a result of its time tolerances
                                           A drug that was Due to be administered at 06:30 and that is now Overdue
                                           as a result of its time tolerances. This is less Overdue than the Overdue
                                           item above
                                           A drug that is now Due for administration and has specific time tolerances
                                           (the notional icon represents a specific time tolerance)
                                           A Significant Duration drug that was Due to be started at 08:00 (15
                                           minutes ago). Using an additional ‘Start’ label is not part of guidance
                                           A drug that is now Due

                                           A drug that is Due for administration at the same time as the previous
                                           drug, is within time tolerances and is listed second as a result of ordering
                                           by a second attribute (such as drug name). Guidance does not specify
                                           what these second attributes should be
                                           ‘Begun’ indicates a Significant Duration drug that has been started, is
                                           scheduled to still be running and has not been recorded as being stopped
                                           or discontinued
                                           An unscheduled As Required drug that is available for administration

                                           The Next scheduled administrative event that is not yet Due

                                           An unscheduled As Required drug with a pre-condition (represented by
                                           the icon) that has an advisory lockout. The advisory lockout indicates that
                                           the minimum time interval from the previous administration has not yet
                                           been reached
                                           The Next scheduled administrative event that is further in the future, is not
                                           yet Due
Figure 21: List Order of an Example Set of Event Schedule Statuses

Rationale
MEDa-0023, MEDa-0025—MEDa-0031, MEDa-0252
The ordering of the list in the Drug Administration View, together with the dynamic status information and the Look-Ahead Scroll Bar,
helps to bring drugs that are most likely to require attention for administration concerns to the top of the list.
Based on the administration event schedule status, this continual reordering of the list has been introduced to address two main
issues:
 The reduced amount of space for data on standard computer screens compared to TGP drug charts
 The effort currently required with paper drug charts to determine which medications are Due for administration at a particular time
  and the errors that occur when the difficulty of this process causes administration to be delayed or missed altogether
By bringing those medications which most require attention to the top of the view, clinicians do not have to scan the view to find those
Due and administration can be prioritized. For example, an Overdue administration would have most prominence in the view and so
encourage the clinician to attend to it.
Reordering does not prevent clinicians from viewing or administering medication in any order they choose, as there may be additional
clinical factors affecting which medication should be given first.

                                                                                                                                 Page 30
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Given that reordering of drug lists is unfamiliar to the vast majority of current healthcare staff, the feature was the subject of repeated
 clinician assessment. Three rounds of user feedback with small numbers of clinicians showed support for a dynamic ordering by
 ‘dueness’ as the most appropriate order for supporting the task of drug administration, as opposed to a fixed sort order (for example,
 by start date) ({R12, R13}, see APPENDIX A and APPENDIX B). Those responses were based on the assumption that users would be
 able to access a ‘fixed’ sort order (for example, by start date) if required. Staff who use the administration schedule and history for
 tasks other than drug administration (such as pharmacists) felt the ordering by dueness was less appropriate (see APPENDIX A).
 Though positive about the concept of dynamic ordering, clinicians were generally concerned that it would require training to explain its
 use.
 Another approach to bringing Due and Overdue medications to the clinician’s attention would have been to filter the list (or provide
 access to a filtered list) of only those medications which are Due or Overdue. However, this approach was felt to reduce the clinician’s
 awareness of the patient’s other medications. In addition, reordering can provide a more fine-grained distinction between medication
 priorities than pure filtering (for example, by ordering Overdue above Due and more Due above less Due).
 Though not specified in guidance, use of reordering would allow additional rules to support local administration conventions. For
 example, some wards may have a convention to administer intravenous (IV) medications after non-IV medications if both are
 scheduled for the same drug round time. In this case, an additional setting (which has not been hazard assessed) might be that for
 medications Due at the same time, non-IV should be ordered above IV.
 MEDa-0032
 The list reordering should not be totally dynamic. It should only reorder when:
  It is manually refreshed
  The view is re-opened
  A medication is added or updated (by anyone)
 This is so users retain control and can see feedback from the actions they perform that trigger a change in order. For example, when a
 clinician records a Due administration as Given, a totally dynamic reordering would immediately move the medication further down the
 list. The medication would seem to ‘disappear’ from view and another medication ‘appear’ in its place. This potential confusion is
 removed by not allowing automatic reordering while the list is open.
 MEDa-0264
 The label of ‘Begun’ is only recommended as it was only suggested late in the guidance development process and has not been
 evaluated or formally risk assessed. The challenges for this label are that it has to be unambiguous such that:
  It is associated only with Significant Duration drugs (‘Start’ is used as a label associated with all medications courses)
  It only conveys that the medication has been started and not that it is running to plan (the system does not know this at this point)
  It is not confused with the ‘To Start At’ indicator for Significant Duration medications

3.5       Drug Administration View Controls
3.5.1         Controls in the Drug Administration View
 The guidance points in this section relate to the main controls for the Drug Administration View.
 Figure 22 highlights the area in which they are located:

 Figure 22: Main Controls

 Guidance for the controls for navigating between different views of drugs and for manipulating the
 Drug Administration View is defined in the Medications List document {R2}. The guidance in this
 section is for the controls associated specifically with the Drug Administration View.

                                                                                                                                    Page 31
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                                                              Evidence
ID               Description                                                                          Conformance
                                                                                                                              Rating
MEDa-0247        Within the Drug Administration View, as a minimum, provide the following two         Mandatory               Medium
                 controls: Status Bar and Grouping Control

MEDa-0248        Do not provide filtering controls in the Drug Administration View                    Recommended             Medium

Usage Examples
The shaded area (blue with a thick broken border) in Figure 23 shows where the Drug Administration View controls are positioned:

Figure 23: Drug Administration View Area – Controls

Figure 24 shows how the Drug Administration View controls could be displayed on the Toolbar. The Grouping Control and Status
Bar are defined in sections 3.5.2 and 3.5.3 respectively.

                                        Drug Chart Controls

Figure 24: Drug Administration View Controls on the Toolbar

Rationale
MEDa-0247
Rationale for inclusion of the Status Bar is described in section 3.5.3.
The Grouping Control (further defined in section 3.5.2) is included in the Drug Administration View because of the universal convention
on current TGP drug charts to group medication in related sets. A common grouping being: Once Only (stat), As Required (PRN),
Regular and Infusions. Whether or not the view is grouped by default, and irrespective of what grouping sets are available, clinician
feedback was that it should at least be possible to group the medications in the list. In particular, some clinicians would likely want to
be able to arrange the view in a way familiar from their trust’s paper charts ({R12} and see APPENDIX B).
Grouping the list is also a feature common to the Medications List View.
Though grouping the list would disrupt the dynamic list ordering, on balance the risks of clinician rejection of the system through
unfamiliarity of the view (by not being able to group the list) are thought to outweigh any risks that might be caused by ordering within
groups rather than across the whole list.

                                                                                                                                   Page 32
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 MEDa-0248
 Filtering of the view introduces the risk that a clinician may miss a medication or administration event when looking at the chart and, as
 a result, he or she may potentially not perform or delay an administration. This guidance assumes that longer, scrollable lists are less
 likely to cause the clinician to overlook items. This principle is similar to that used in the Medications List document {R2}.
 User controlled filtering of the view is also not permitted as:
  The list is already filtered to those medications current within the four days in view
  It would be difficult to clearly communicate further filtering
  The view is already visually rich and further filtering controls and indications might overwhelm a user

3.5.2         Grouping
 The guidance points in this section relate to the Grouping Control for the Drug Administration View.
 Figure 25 highlights the area in which it is located:

 Figure 25: Grouping Control

 The Grouping Control is a standard control that is also used in the Medications List View and may
 be used in other drug views. Generic guidance for this control, including examples of grouping that
 may be applied, is defined in the Medications List document {R2}.

                                                                                                                           Evidence
 ID             Description                                                                         Conformance
                                                                                                                           Rating
 MEDa-0012 Do not apply a grouping to the Drug Administration View by default                       Mandatory              Medium

 MEDa-0013 When grouping is applied in the Drug Administration View, maintain the order of          Mandatory              Medium
           items in the list within each group according to guidance on the List Order
           (section 3.4)

 MEDa-0218 Provide an option in the Grouping Control to provide a static sort on medication Recommended                    Medium
           start date and time. This should be clearly labelled (for example, with ‘Start Date
           and Time List Order’). This static sort order should override the dynamic list
           order described in section 3.4
                          RISK
                          Though the requirement to have this feature has been established, the
                          means of providing it has not been risk assessed

 MEDa-0219 Provide an option in the Grouping Control to group by Once Only, Regular, As             Recommended            Low
           Required and Significant Duration. (For guidance on Significant Duration
           medication, please see section 3.13.)

 MEDa-0261 Provide an option to remove an applied grouping option for the Drug                      Recommended            Medium
           Administration View

 MEDa-0249 When grouping is applied, use a display style for the group headings that is             Mandatory              Medium
           consistent with other drugs views such as the Medications List View

                                                                                                                                    Page 33
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
Figure 26 and Figure 27 show how a Grouping Control could be displayed:

Figure 26: Grouping Control Example

Figure 27: Example Location of the Grouping Control and the Collapsible Grouping Controls Applied to This List

Rationale
MEDa-0012
User feedback on whether the Drug Administration View should be grouped by default has been divided ({R12} and see APPENDIX
B).
Some clinicians felt that the safety benefits of having reordering across the whole list meant that the list should not be grouped when
the clinician first opens it, as long as the grouping settings are easy to apply. The disadvantage of grouping by default is that both Due
and Overdue medications may be below the bottom of the screen (depending on the number of medications in the list). Though they
are at the top of their group, the group may not be at the top of the list. These Due and Overdue medications may then be overlooked.
With no grouping by default, the prioritised medications are always towards the top of the list so more likely to be immediately in view.
Other clinicians felt that the conventions, mental models and administration practices derived from the paper chart groupings are so
ingrained that clinicians would be significantly disrupted or confused by their removal. This was even if clinicians could apply the
grouping setting once they had opened the view.
There was also the view that the classic TGP groupings supported a beneficial process of considering groups in turn for each patient.
For example, check the Once Only first, then the Regular, then the Infusions and then the As Required. However, this sequence might
also be partially supported by the ordering rules. Examples might include:
 An ordering rule where a medication with a scheduled time is above an As Required medication
 An ordering rule where a medication with a narrower time tolerance (for example, some Once Onlys) is above ‘normal’ Regulars
 With additional rules (not covered in this guidance), an ordering where IV medication is below non-IV medication
The decision to mandate not grouping by default was taken on the basis that use of the Grouping Control can mitigate initial clinician
confusion or unfamiliarity. However, the patient safety risk of important Due medication not being seen could only be mitigated by not
grouping by default.

                                                                                                                                   Page 34
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 MEDa-0218
 As described in the section 3.4 rationale, the reordering of drug lists was the subject of repeated clinician assessment as it is unfamiliar
 to the vast majority of current healthcare staff. User responses showed support for a dynamic ordering by ‘dueness’. However, those
 responses were based on the assumption that users would be able to access a ‘fixed’ order (for example, by start date) if required, as
 this was more familiar ({R12, R13}, see APPENDIX A and APPENDIX B). Medications List {R2} defaults to a static sort order by start
 date and time.
 MEDa-0219
 Of the 20 or so paper drug charts from different medical organizations analysed, the majority had a core set of groups:
  Once Only
  As Required
  Regular
  Infusions
 But, many had further subdivisions including variable medications, oral anticoagulants, syringe drivers, IV regulars and so on. That is,
 there is no current, universal convention for the exact groups to use but a fairly standard minimum set does exist. Furthermore,
 observations of chart usage showed that the ‘Infusions’ group was used differently by different clinicians.

3.5.3         Status Bar
 The guidance points in this section relate to the Status Bar control for the Drug Administration
 View. Figure 28 highlights the area in which it is located:

 Figure 28: Status Bar Control

 The Status Bar serves two main functions:

      1. It highlights drugs with important states, such as those that have administrations that are
         Overdue

      2. It provides controls that allow drugs in the list to be reordered according to a predefined set
         of rules that are designed to bring drugs that need attention to the top of the list

                                                                                                                              Evidence
 ID                Description                                                                          Conformance
                                                                                                                              Rating
 MEDa-0015         Display a real-time indicator of the numbers of items that may require attention     Mandatory             Medium
                   from the administrator

 MEDa-0016         Within the Status Bar in the Drug Administration View, display counts for at least Mandatory               Medium
                   drugs with administrations that are: Overdue, Due, As Required and Begun

 MEDa-0017         In the Drug Administration View, use formatting to draw attention to the Overdue Mandatory                 High
                   and Due items in the Status Bar and to differentiate between them

 MEDa-0018         Use similar formatting to draw attention to Overdue and Due items in the Status Mandatory                  Medium
                   Bar, Chart Area and Look-Ahead Scroll Bar. For example, the background for
                   the Overdue label for the administration events in Figure 21 is the same as for
                   the drug name in the Look-Ahead Scroll Bar in Figure 40 and the count in Figure
                   42. The colour of the Overdue label on the chart is shared with that in the Status
                   Bar in Figure 29

 MEDa-0020         Provide a control for refreshing the order in which drugs are listed in the Drug     Mandatory             Medium
                   Administration View

                                                                                                                                     Page 35
                                 Design Guidance – Medications Management – Drug Administration
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 20 January 2010

MEDa-0021        Disable the control that is used to refresh the order of the list of drugs in the Mandatory                 Medium
                 Drug Administration View until there is a change that affects the order in which
                 the drugs should be displayed (for example, when a drug is administered and so
                 changes status from Due to Given)

MEDa-0257        The As Required status should contain two pieces of information:                      Recommended           Low
                  A count of how many As Required drugs are in the list (as per MEDa-0016)
                  A count of how many As Required drugs do not have a current lockout (that
                   is, that are available for administration)

Usage Examples
Figure 29 illustrates how the Status Bar could look:

                Dynamic Status Information                              List Order
                                                                      Refresh Control
Figure 29: The Status Bar
Dynamic status information is presented on the left of the Status Bar. This information updates in response to changing states of the
drugs in the list.
The Update List Order button on the right of the Status Bar becomes enabled when a system or user initiated action has been
conducted, which means that the current order is out of date according to the list-ordering rules. The status of drugs can change as
time passes or as administrations are recorded. The Update List Order button indicates whether the order of the list is likely to be
current or to need reordering. This control is provided for re-applying the list-ordering rules to the list, thus reordering the list.

Figure 30 is an example of how a Status Bar may change as the states of drugs change and as administration events are recorded. It
shows how the Status Bar would behave with a drug chart containing four medications:
 Drug A – Regular – Next administration at 08:00
 Drug B – Infusion – Next administration at 08:00
 Drug C – As Required – Comes off lockout at 08:00
 Drug D – As Required – Comes off lockout at 10:00
The notional time tolerances are:
 Due status begins at the intended time of administration
 Overdue status begins one hour after the intended time of administration
At 07:40, none of the drugs are Due and both of the As Required are still locked out. The list order update button is disabled because
there are no order changes pending:

At 08:00, Drugs A and B become Due and Drug C comes off lockout:

At 08:09, the clinician administers Drug A and so it is no longer Due. As this would change the list order, but the list order does not
dynamically update while the list is open, the Update List Order button is enabled to indicate a pending change:

                                                                                                                                    Page 36
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 At 08:13, the clinician administers Drug B, closes the view and then reopens it at 08:15. The Status Bar now shows that there are:
  No Due administrations
  One Significant Duration drug has begun (Drug B)
  One As Required is available for administration (Drug C) and one is still locked out (drug D)
 As closing and reopening the view updates the list sort order, there are no pending updates and the Update List Order button is
 therefore disabled:

 Figure 30: Changing States of the Status Bar

 Rationale
 MEDa-0015—MEDa-0018, MEDa-0020, MEDa-0021
 Many drug details were reported to be important for this view and as a consequence the Drug Administration View contains a lot of
 information on the screen at any one time, often with the need to scroll the view to see all details. Since the Medications List View is
 designed to support an overall review of drugs, the Drug Administration View does not duplicate this function by having its own
 summary view. Therefore the Status Bar was created in order to give clinicians a very high level summary of the information most
 pertinent to the task of administration. Clinicians can see just enough information to draw attention to important drugs without
 displaying a high-level summary (which would take up much needed screen space).
 The Status Bar is intended to highlight the presence of, and draw attention to, drugs in the list with important time-based states. Part of
 the function of the Status Bar, together with the Look-Ahead Scroll Bar (LASB), is to draw attention to important drugs that are out of
 view (above or below the visible section of the list) and require action.
 The states used in Figure 30 (Overdue, Due, Begun and As Required) are examples of important categories of drugs that may require
 attention. Whether a drug is Due or Overdue is based solely on the time of scheduled administration and the time tolerance threshold
 for the drug. These specific examples are not a complete set for all contexts, since in some areas other drugs (such as Once Only
 drugs) may need to be highlighted in this way. This guidance offers a ‘model’ of states and dueness based upon general principles but
 these may need to vary in specific practice.
 MEDa-0021, MEDa-0257
 User feedback (see APPENDIX B) showed support for including a count of As Required medications in the Status Bar. Anecdotal
 reports suggest that As Required medications are not always given as often as needed because they may be forgotten and so not
 considered for administration. However, since As Required medications may be subject to lockouts (for example, paracetamol cannot
 be administered repeatedly with no time gap between administrations), some As Required medications may not be administrable at a
 particular time. User feedback on the options for their display (see APPENDIX B) concluded that showing both the number of ‘givable’
 As Required medications and the total number of As Required medications was preferable. This conclusion was preferred as it did not
 hide one class of information. However, there were concerns that the display would need some initial explanation as counting ‘givable’
 and ‘non-givable’ medications is not current practice.

3.6       Navigation
 The guidance points in this section relate to the day navigation controls for the Drug Administration
 View. Figure 31 highlights the area in which they are located:

 Figure 31: Day Navigation Controls

 Navigation involves using the controls to move the Chart Area backwards or forwards one day or
 using the calendar control to move a specific date into view.

                                                                                                                                    Page 37
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

In this section, ‘navigation’ refers to navigating the chart by changing the time interval being
displayed in the Chart Area so that administration events further in the past or future can be
reviewed.
Navigation controls that step through the chart day-by-day are provided at either side of the column
headings for the Chart Area and the calendar control is displayed within the column heading for the
currently-selected day.

                                                                                                               Evidence
ID              Description                                                                      Conformance
                                                                                                               Rating
MEDa-0033       Provide controls for navigating back and forward one day at a time. Place        Mandatory     Medium
                these controls to the left and right respectively of the set of date columns

MEDa-0034       Provide a calendar control within the column heading for the currently-selected Mandatory      Medium
                day

MEDa-0035       Within the calendar control, provide a quick means of setting the                Mandatory     Medium
                currently-selected day to today. The calendar control should conform to Date
                and Time guidance {R5, R6, R7}

MEDa-0036       When a drug in the Drug Administration View has no administration event          Recommended   Medium
                visible, mark the presence and direction of previous or Future administrations
                with an arrow or icon at the edge of the Chart Area for that medication line
                (this arrow or icon must have a tooltip to explain its purpose)

MEDa-0037       When an arrow or icon is displayed to mark administration events for previous Mandatory        Medium
                or Future administrations that are currently out of view in the Drug
                Administration View, support clicking on these icons to jump to the Next
                administration event in that direction for that drug

MEDa-0038       Maintain the order of the list when the navigation controls are used to change   Mandatory     High
                the time interval displayed in the Chart Area

Usage Examples
The shaded area in Figure 32 shows where the Navigation controls are positioned:

Figure 32: Drug Administration View Areas – Column Headings and Navigation Controls

                                                                                                                        Page 38
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Figure 33 illustrates using the navigation controls. In this figure, a placeholder is used to represent the icon that marks ‘Today’. See
section 3.9.4 for guidance on indicating ‘Today’.

                                          Placeholder for an
                                          Icon for ‘Today’                                         Control for navigating
    Control for navigating                                                                         forward one day
    back one day
                                                                   Calendar Control

Figure 33: The Navigation Controls

Figure 34: Example where the Currently Selected Day Starts at Today and then Steps Backwards Two Days

Figure 35: Example Where the Currently Selected Day Starts at Today and Then Steps Forwards Two Days

                                                                                                                                    Page 39
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Rationale
 MEDa-0033
 Navigation one day at a time allows different days to be shown in more detail. Analysis suggested that for normal inpatient drug
 administration, it would be more common to want to look one day or a few days into the past or future rather than weeks.
 User feedback also supported the use of arrows as controls at either end of the time interval column headings to navigate forward and
 backward in time, so long as these arrows were clear {R14}.
 For further explanations of, and rationale for, the various components displayed in Figure 34 and Figure 35, see section 3.9.
 MEDa-0034, MEDa-0035
 Use of a calendar control allows larger movements in time without having to scroll through days of empty or irrelevant data. For
 example, the clinician may want to look at the drug administration record for a patient’s previous admission. Resetting to the current
 day allows a quick return to the immediate administration task.
 MEDa-0038
 As described in section 3.4, by default the Drug Administration View is sorted by medication dueness, which is likely to change
 throughout a day. Therefore, it is not possible to go back to a previous day’s sort order when navigating back to view that day. In
 addition, retaining the sort order by the current time’s ‘dueness’ means that the list order remains the same as the user navigates days
 into the past and future, which makes it easier to follow a particular medication row. It would be confusing if the list reordered while the
 user navigated time. User feedback from a small number of clinicians unanimously supported maintaining the order of the list as time
 is navigated {R12}.

3.7       The Look-Ahead Scroll Bar
 The guidance points in this section relate to the Look-Ahead Scroll Bar (LASB) control for the Drug
 Administration View. Figure 36 highlights the area in which it is located:

 Figure 36: Look-Ahead Scroll Bar Area

 The LASB is a modification from a standard scroll bar control that is designed to enhance visibility
 of the presence of list items that are out of view. Generic guidance for the Look-Ahead Scroll Bar is
 defined in the Medications List document {R2}. This section defines additional guidance specifically
 for enhancements to the Look-Ahead Scroll Bar when it is used in the Drug Administration View.
 The guidance in this section relates specifically to the display of Overdue and Due drugs in the
 look-ahead notification areas.

                                                                                                                               Evidence
 ID                Description                                                                          Conformance
                                                                                                                               Rating
 MEDa-0039         Use a Look-Ahead Scroll Bar in the Drug Administration View and adhere to            Mandatory              High
                   guidance for the Look-Ahead Scroll Bar as defined in the Medications List
                   document {R2}.

 MEDa-0040         Apply similar formatting to Overdue and Due drugs in the look-ahead                  Recommended            High
                   notifications as in the Chart Area and the Status Bar in the Drug Administration
                   View

 MEDa-0041         Do not display drug names for ‘past’ drugs in the Look-Ahead Scroll Bar              Mandatory              High
                   notification in the Drug Administration View

                                                                                                                                      Page 40
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
The shaded area in Figure 37 shows the location of the two look-ahead notifications (in addition to the standard scroll bar):

Figure 37: Drug Administration View Areas – Look-Ahead Scroll Bar

Figure 38 to Figure 40 illustrates a Look-Ahead Scroll Bar with drugs in the look-ahead notifications at the top and bottom of a short list
of drugs (12 in this case):

Figure 38: Example LASB with the Top of a List of Twelve Medication Lines

Figure 39: Example LASB with the Middle of a List of Twelve Medication Lines
                                                                                                                                   Page 41
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Figure 40: Example LASB with the Bottom of a List of 12 Medication Lines

Figure 41 to Figure 43 illustrates a Look-Ahead Scroll Bar with drugs in the look-ahead notifications at the top and bottom of a longer
list of drugs (26 in this case):

Figure 41: Example LASB with the Top of a List of 26 Medication Lines

Figure 42: Example LASB with the Middle of a List of 26 Medication Lines: Indicators for Overdue (Shown as Red) and Due (Shown as
Blue) Drugs are Still Present at the Top of the LASB

                                                                                                                                 Page 42
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Figure 43: Example LASB with the Bottom of a List of 26 Medication Lines

 Rationale
 MEDa-0040
 Using the same formatting for Due and Overdue throughout the Drug Administration View provides ease of recognition through
 consistency.
 Overdue and Due drugs are prioritised in the Drug Administration View via the order of the drugs in the list and the Status Bar
 information, as well as by applying formatting to these drugs when they appear in a look-ahead notification area. These three areas of
 guidance combined are a strong mitigation for the risk that important drugs in the list not currently in view may be missed.
 Generic guidance for the Look-Ahead Scroll Bar (as defined in the Medications List document {R2}.) supports clicking on (selecting) a
 drug name to navigate to that place in the list, thus bringing that drug into view. By highlighting Overdue and Due drugs in the
 look-ahead notification areas, all Overdue and Due drugs are either visible or accessible with a single click.
 MEDa-0041
 The Medications List View does not combine past and current medication and hence the LASB can have optimised behaviour for each
 type. However, the Drug Administration View can show both past and current medications (as described in section 3.3.2). As the LASB
 has limited horizontal space, it is unlikely it can hold the names of all past medications (there may be hundreds or even thousands).
 Also, the main aim of the Drug Administration View is to support the administration of medication. To achieve this aim, it is of primary
 importance to draw the clinician’s attention to Due, Overdue or upcoming medications that are out of view. Therefore, past medications
 should not be indicated in the LASB.

3.8       Left-Hand Panel
 The Left-Hand Panel (LHP) is a static area that contains a text description of the drug represented
 on that line, as well as controls which indicate the presence of further information and allow this
 further information to be displayed. The following sections describe the contents of the Left-Hand
 Panel and guidance for accessing and displaying further information.

3.8.1         LHP Structure and Contents
 The guidance points in this section relate to the whole of the Left-Hand Panel and its associated
 contents for the medication lines in the Drug Administration View. Figure 44 highlights the area in
 which it is located:

 Figure 44: Left-Hand Panel

                                                                                                                                 Page 43
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

The Left-Hand Panel contains a text description of the drug; this is similar to the information in the
Drug Details column of the Medications List View, as defined in the Medications List document
{R2}. It contains a further set of attributes which are relevant to users of the Drug Administration
View. Some of these attributes are displayed as text and some are represented by icons.

                                                                                                                   Evidence
ID           Description                                                                             Conformance
                                                                                                                   Rating
MEDa-0265    Display drug names and details in accordance with Medication Line guidance {R2} Mandatory             High

MEDa-0042    Display the details of the drug at the top of the Left-Hand Panel in the Drug           Mandatory     Medium
             Administration View

MEDa-0043    Display the name of the prescriber below the drug details in the Left-Hand Panel of Recommended       Medium
             the Drug Administration View and precede this information with a prescriber icon

MEDa-0044    Display the start date below the prescriber information in the Left-Hand Panel of       Mandatory     Medium
             the Drug Administration View and precede it with a text label. Before the
             medication has been administered, the start date will be the date and time of the
             intended first administration. After the first dose has been administered, the start
             date will be the actual date and time of the first dose
                      RISK
                      There is a potential hazard that the indication of the start date in the
                      Left-Hand Panel does not show whether the first dose was administered
                      on time or, if it was delayed, to what degree it was late in starting. Under
                      the current guidance, the clinician must view the start of the medication in
                      the chart area in order to see whether it was late.

MEDa-0045    If an end or review date exists, then display it below the start date in the Left-Hand Mandatory      Medium
             Panel of the Drug Administration View and precede it with a text label

MEDa-0046    Allow the Left-Hand Panel to be flexible in height to support long drug names and       Mandatory     Medium
             extended drug details

MEDa-0222    For ‘past’ drugs, display either a ‘Completed’ or ‘Discontinued’ label as appropriate Mandatory       Medium
             in place of the end or review date label

MEDa-0223    Ensure that the ‘past’ drug label is visually distinct and noticeable (for example,     Recommended   Medium
             using reverse video)

MEDa-0224    Ensure that As Required and Once Only medication lines are visually distinct from       Mandatory     Medium
             other lines and from each other (in addition to the display of the frequency as per
             adherence to the Medication Line guidance {R2})

MEDa-0225    Provide a label to explain that a medication line is either As Required or Once         Recommended   Medium
             Only, in addition to the frequency displayed in the drug details

MEDa-0251    Allow the timescale and medication line to be flexible in height to support high        Mandatory     Medium
             frequency administrations that require more granular time scales

                                                                                                                          Page 44
                         Design Guidance – Medications Management – Drug Administration
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

Usage Examples
The shaded area in Figure 45 shows the location of the Left-Hand Panel:

Figure 45: Drug Administration View Areas – Left-Hand Panel

Figure 46 displays examples of different styles used to highlight Once Only and As Required drugs in the LHP:

Figure 46: Example of LHP Styles for Once Only, As Required and Regular Drugs

                                                                                                                Page 45
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Figure 47 shows an example of a Left-Hand Panel in which a drug with a very long drug name is displayed. This illustrates the
dynamic expansion of the Left-Hand Panel relative to the rest of the line that is displayed within the Chart Area.

Figure 47: Displaying a Long Drug Name in the Left-Hand Panel

Figure 48 and Figure 49 illustrate:
 Visually distinct labels for ‘Past’ medications, replacing the review date label with one indicating whether the medication was
  completed or discontinued (MEDa-0222)
 The use of reverse video on these labels as an example of how they could be made more noticeable (MEDa-0223)

Figure 48: Completed Medication Indicated by a Date Label

Figure 49: Discontinued Medication Indicated by a Date Label

Rationale
MEDa-0042
Display of the drug name and details in the top left of the LHP follows the format of existing paper charts so should reduce the need for
training and increase familiarity.
MEDa-0043
Display of the prescriber name with the drug details follows the format of existing paper charts. On paper, the prescriber name is used
both as:
 A confirmation that the medication has been prescribed by a prescriber
 A means for other staff to identify the prescriber so that they can be contacted if necessary

                                                                                                                                    Page 46
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 NMC guidance on medications management {R11} requires that the registrant must make certain checks before administering a
 medicinal product:
  The prescription (or other direction to administer) is signed and dated by the authorised prescriber
  That they can contact the prescriber
 It is arguable that a continually visible prescriber name is not necessary as medication cannot get onto the Drug Administration View
 unless it has been prescribed by an authorised prescriber. Additionally, accessing the prescriber’s name could perhaps be by a link or
 button rather than a continually visible name. However, it was felt that there is a strong expectation to see the prescriber name due to
 many years of experience with the paper charts, and that continual display of the prescriber name provides a reassuring familiarity.
 MEDa-0044, MEDa-0045
 Display of the start, end and/or review dates allows the clinician to see the duration of the course immediately. The clinician does not
 have to navigate by time through the view to find the dates and then calculate the duration manually. Displaying the dates helps
 support the NMC requirement for the registrant to check the start and end dates before administration. Display of the start date is
 common to many examples of existing paper charts (some also display the stop date).
 MEDa-0222, MEDa-0223
 User feedback (see APPENDIX B) concluded that it was important to clearly indicate both whether a medication was past and, if so,
 whether it was completed or discontinued.

3.8.2         LHP Icons
 The guidance points in this section relate to the icons presented in the Left-Hand Panel of the drug
 lines in the Drug Administration View. Figure 50 highlights the area in which these might be
 located:

 Figure 50: LHP Information Icon Area

 Icons are used in two different ways in the Information Panel:

      1. As additions to text labels (label icons)

      2. To signify the presence (or absence) of certain types of information (status icons)
 The icons that are used to signify the presence of information (status icons) are also controls used
 to open the Information Panel in which that information is displayed.

                                                                                                                             Evidence
 ID             Description                                                                            Conformance
                                                                                                                             Rating
 MEDa-0051 Provide status icons in the Left-Hand Panel of a drug line in the Drug                      Mandatory             Medium
           Administration View to indicate the status of certain types of information for that
           drug. For example, whether the medication has been verified by a pharmacist or
           whether there are additional administration instructions

 MEDa-0050 In the Left-Hand Panel of a drug line in the Drug Administration View, place status         Mandatory             Low
           icons in a group in a consistent location for all medications

 MEDa-0053 Support selection of the status icons in the Left-Hand Panel of a drug line to open         Mandatory             Medium
           an Information Panel for that line

 MEDa-0054 When a status icon in the Left-Hand Panel is selected, present the information              Mandatory             Medium
           associated with that icon in the Information Panel

 MEDa-0059 Include icons for prescriber, start date and end or review date in the Left-Hand            Recommended           Medium
           Panel

 MEDa-0058 Support selection of the Prescriber icon to display information relating to the             Mandatory             Medium
           prescriber in the Information Panel

                                                                                                                                   Page 47
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

MEDa-0227 Ensure that each of the icons represents the same information in each drug line              Mandatory             Medium
          and is located in the same position

MEDa-0266 In environments where pharmacist verification is used, provide a pharmacist                  Mandatory             Medium
          verification icon as one of the status icons. This icon should have (at least) two
          clear statuses: ‘verified’ and ‘awaiting verification’. This icon should also provide
          access to the verifier’s details

MEDa-0229 Place the pharmacist verification icon in the leftmost position in the icon group to         Recommended           Low
          increase visibility

MEDa-0267 Use a tick in the pharmacist verification icon to mark those medications that have           Recommended           Medium
          been verified

MEDa-0268 If pharmacist verification is not used in a particular context, or not supported by the Mandatory                  Medium
          system, the pharmacist verification icon should not be presented, as opposed to
          being ‘disabled’

MEDa-0298 The pharmacist verification icon should use green prominently                                Recommended           Medium

Usage Examples
In Figure 51, the icons are indicated by filled placeholders:

Figure 51: Example Icon Positions in the Left-Hand Panel

Figure 52 and Figure 53 show examples that use both colour and shape to highlight the status of the icon:

Figure 52: Enlarged Example of an Icon Showing the Medication has Been Verified by a Pharmacist

Figure 53: Enlarged Example of an Icon Showing the Medication Is Awaiting Verification by a Pharmacist (Where Pharmacist
Verification Is Used)

Rationale
MEDa-0051
In order to maintain an effective Drug Administration View that presents the most important attributes for each of a list of drugs, the
information that can be presented for each drug must be limited. The information icons can be used to indicate the presence of
additional information that may need to be reviewed before administration. By providing this information in an Information Panel, it can
be displayed in full, thus mitigating the risks associated with truncating information in an attempt to fit it into the Drug Administration
View.
User feedback from a small number of clinicians showed support for being able to access some of the drug information on demand as
opposed to having it displayed all the time {R12}.

                                                                                                                                    Page 48
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 MEDa-0050
 Consistent placement of a notification near to the main drug details helps remind the clinician this information may need to be checked.
 MEDa-0059
 Icons for start date, end or review dates are used in the Chart Area. Using them as additional labels in the LHP helps provide
 familiarity with the icons and reinforces their meaning. The prescriber icon provides access to more details about the prescriber.
 MEDa-0266, MEDa-0267, MEDa-0229
 Widespread current practice is for pharmacists to mark verified prescriptions on the paper drug chart, often using notation such as a
 green tick. User feedback from nurses reported that seeing a medication has been verified provided extra confidence that the
 medication was correct, even though administration of most medications is allowed before pharmacy verification (see APPENDIX A).
 User feedback from a wider variety of clinicians highlighted that it would be beneficial to know at a glance if the prescription has been
 checked (see APPENDIX A and APPENDIX B).
 The guidance to mark verified medications (as opposed to marking unverified medications) follows this existing practice in order to
 increase the familiarity of the view. User feedback supports marking verified medications (see APPENDIX B).
 MEDa-0268
 A ‘disabled’ pharmacist verification icon might be incorrectly interpreted as meaning ‘not verified’. In fact, it is intended to mean ‘the
 system does not know if the medication has been verified’. In a worst case scenario, a ‘disabled’ verification icon might be
 misinterpreted as meaning that the medication has been checked. This might arise because the use of three states (verified, not
 verified and disabled) reduces the clarity between the verified and not verified states.
 Presenting no icon also reduces clutter in the view.
 MEDa-0298
 From anecdotal evidence, many pharmacists use green ink when marking on paper drug charts.

3.8.3        LHP Information Panel
 The guidance points in this section relate to the Information Panel attached to the Left-Hand Panel
 of the medication lines in the Drug Administration View. Figure 54 highlights the area in which it is
 located:

 Figure 54: LHP Information Panel Area

 When an information icon is selected to access more information, the information is displayed
 within an area referred to as the Information Panel.

                                                                                                                                 Evidence
 ID             Description                                                                               Conformance
                                                                                                                                 Rating
 MEDa-0060 In the Information Panel, provide tabs for each of the information icons, and label            Mandatory              Medium
           the tabs with text and icons

 MEDa-0061 In the Information Panel, provide a control for opening all details for that drug. This Recommended                   Medium
           is likely to include administration and preparation instructions

 MEDa-0062 In the Information Panel, order the tabs in the same way that the corresponding       Mandatory                       Medium
           information icons are grouped in the Left-Hand Panel. For example, group the
           icons in the same sequential order as they are placed in the LHP (translating left to
           right into top to bottom) followed by the Prescriber icon

 MEDa-0063 Display the Information Panel as an extension downwards from the Left-Hand                     Recommended            Medium
           Panel

                                                                                                                                       Page 49
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
Figure 55 is one example of how the Information Panel could be presented. In this illustration, the information icons are marked with a
blue dashed border and the Information Panel with a black dotted border. The arrow indicates that, when the Information Panel is
opened by selecting the Prescriber icon (icon ‘A’), the panel is opened to display the Prescriber information (tab with icon ‘A’). This
behaviour is identical for the other icons, such as the pharmacist icon (icon ‘B’). In this illustrative example, the different sections of
information are presented within tabs.

Figure 55: Illustration of an Information Panel Opened from the Left-Hand Panel

Rationale
MEDa-0060—MEDa-0063
By providing important information in an Information Panel, it can be displayed in full thus mitigating risks associated with truncating
information in an attempt to fit it into the Drug Administration View.
User feedback from a small number of clinicians showed strong support for access to detailed preparation instructions including
calculations and the facility to show instructions for different products {R15}. Access to this information could be provided by the
information panel.

                                                                                                                                    Page 50
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

3.9       Chart Area
 The Chart Area is the time window for the Drug Administration View in which icons representing
 administration events are plotted for each drug and supplemented with descriptive text where
 appropriate.
 This section contains guidance on the presentation of information within the Chart Area.

3.9.1         Chart Area Structure and Layout
 The guidance points in this section relate to the Chart Area for the administration event icons and
 details in the Drug Administration View. Figure 56 highlights the area in which it is located:

 Figure 56: Chart Area

 Administration events for each individual drug are plotted against both a vertical and a horizontal
 time scale as on the traditional TGP drug chart for recording prescriptions. The vertical time scale
 on the right of the Left-Hand Panel represents times of day such that time progresses from top to
 bottom. Columns in the horizontal time scale represent days and events that are plotted such that
 time progresses from left to right.
 In order to interpret some of the guidance points below, it is necessary to clarify different types of
 ‘As Required’ prescription that might be supported by a system. The following three types have
 been identified after discussions with healthcare professionals:

      1. Unscheduled As Required
            The medication can be given whenever necessary as long as it does not contravene its
            minimum interval or maximum frequency rules

      2. Unscheduled As Required with Indicative Frequency
            The same as type 1 but the medication has a suggested frequency to guide those
            administering it as to how often it should be administered (such as ‘morphine one to four
            times hourly As Required’). The suggested frequency is only present as an instruction and
            is not plotted as one or more planned events

      3. Scheduled As Required
            The medication is scheduled to specific times (as for Regular medications), but at each
            scheduled administration time those administering it should consider whether the
            medication should be given or not. These medications would be plotted as for other
            scheduled medications and so follow the appropriate guidance on list ordering and event
            positioning

                                                                                                    Page 51
                         Design Guidance – Medications Management – Drug Administration
                         Prepared by Microsoft, Version 3.0.0.0
                         Last modified on 20 January 2010

                                                                                                             Evidence
ID          Description                                                                        Conformance
                                                                                                             Rating
MEDa-0064   For 1024 x 768 resolution displays used in the context of inpatient drug           Mandatory     High
            administration, show administration events for four days at a time: one day in
            focus, two days back and one day forward

MEDa-0065   The default day in focus should be the current day                                 Mandatory     High

MEDa-0066   Plot administration events in the Chart Area using a concise set of symbols.       Mandatory     Medium
            These symbols should reflect the administration statuses mandated in
            MEDa-0119

MEDa-0067   Plot administration events against a horizontal time scale such that each column Mandatory       High
            represents one day and days progress from left to right

MEDa-0068   Within a single column, plot administration events against a vertical time scale   Mandatory     High
            for that drug line such that time progresses from top to bottom

MEDa-0269   Plot administration events with an icon whose outline shape is symmetrical         Mandatory     High
            about a horizontal axis

MEDa-0232   Plot administration event icons such that the icon’s centre aligns horizontally    Mandatory     High
            with the time associated with it

MEDa-0270   Plot scheduled administration events against their intended time of                Mandatory     High
            administration

MEDa-0271   For every unscheduled As Required medication, plot an administration event at      Mandatory     Medium
            the current time and update its position as the current time updates
                    RISK
                    There is an unmitigated risk that using the same icon for this
                    unscheduled As Required event as is used on the Due administration
                    events may encourage clinicians to over-administer the As Required
                    medication. That is, clinicians mistake the unscheduled administration
                    for a scheduled administration

MEDa-0272   After an administration event has had a status recorded against it (for example,   Recommended   Medium
            Given or a not given status), display the event such that the intended time of
            administration and the recorded time of administration are both clear. Here,
            ‘recorded time of administration’ means the time recorded for when the
            administration occurred as opposed to the time the recording was made, which
            might be different
                    RISK
                    As discussed in the rationale, there are risks with plotting recorded
                    administration events that have not been mitigated by this guidance and
                    are not mitigated by the positive usage examples for this guidance
                    point.

MEDa-0273   After an unscheduled As Required medication has had a status recorded against Mandatory          Medium
            it, plot the event against the recorded time of administration

MEDa-0274   Plot events so neither they nor their associated information overlap the boundary Mandatory      Medium
            of the medication’s line, are truncated by the border or fall outside of it

MEDa-0275   Plot events so they do not overlap each other. If an overlap might otherwise       Recommended   Medium
            occur, extend the timescale (as per MEDa-0233)

                                                                                                                    Page 52
                        Design Guidance – Medications Management – Drug Administration
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

Usage Examples
The shaded area in Figure 57 shows the Chart Area:

Figure 57: Drug Administration View Areas – Structure and Layout

Administration events within the Chart Area are plotted in a grid structure against a vertical and horizontal axis. The vertical axis is
indicated by a time scale that appears to the right of the Left-Hand Panel and remains statically-placed on the screen.

Figure 58: Drug Administration View Areas – Time Scale

                                                                                                                                     Page 53
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Figure 59 illustrates MEDa-0064, MEDa-0065, MEDa-0068 and MEDa-0069 with four days running horizontally (with today as the
default day in focus) and time running vertically down the page for each drug. The As Required does not have times in the timescale
as it is unscheduled.

Figure 59: Time Running Vertically and Horizontally

Figure 60 shows a Regular medication administered twice a day at 08:00 and 20:00. It illustrates MEDa-0269 and MEDa-0232 by
plotting icons with a symmetrical outline for each administration event and positioning then so that the centre of the icon aligns with the
time they are associated with. It illustrates MEDa-0270 by plotting scheduled events (the boxes with dashed borders) against their
intended time of administration (in this case 08:00 and 20:00).

Figure 60: Icon Positions

Figure 61 shows an unscheduled As Required medication that has been administered several times over the last few days. It
illustrates MEDa-0271 by plotting an event on the current time, which would allow recording of an administration. It illustrates
MEDa-0273 by plotting recorded events (for an unscheduled As Required) at the time they were administered.

Figure 61: Plotting Events for As Required Medication

                                                                                                                                   Page 54
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Figure 62 and Figure 63 show two different ways that MEDa-0272 might be complied with. They both display the same data in that the
medication has had four administrations recorded, two of which were roughly on time while two were late. The first administration was
six and a half hours after the Due time of 18:00, while the third administration was an hour after the Due time. Figure 62 shows these
recorded events plotted at the recorded time of administration. Figure 63 shows events plotted at their intended time with a time to
indicate the actual recorded time of administration. See also the risks with these approaches discussed in the rationale for this section.

Figure 62: Events Plotted at the Recorded Time of Administration

Figure 63: Events Plotted at the Intended Time of Administration

Figure 64 does not conform to guidance MEDa-0274 as an event’s information overlaps the medication line’s boundary:

Figure 64: Events Overlapping Medication Boundary

Figure 65 does not conform to guidance MEDa-0274 as an event’s information is truncated by the medication line’s boundary:

Figure 65: Events Truncated by Medication Boundary

Rationale
MEDa-0064
User feedback concluded that displaying now, two days back and one day forward is satisfactory for short-stay inpatients. Users
regarded this as satisfactory provided the start and end dates are clear and it is possible to navigate into the past and future {R12}.
The number of days to display is a trade-off between the detail shown per day and the number of days simultaneously visible. User
research concluded that it was preferable to see more detail for a smaller number of days and that the 14-day interval shown on most
TGP drug charts is generally not necessary for administration during a shift. However, it is acknowledged that for other related tasks
(such as gaining context) a larger timeframe could be beneficial. It is envisaged that these related tasks would be supported by other
views (such as a Timeline View {R4}) and the use of start date and time ordering {R12, R15}.
More past days are shown than future days as the result of user research. Clinicians felt that information about administration events
from the past few days was generally more useful than information about events in the future few days.

                                                                                                                                  Page 55
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

MEDa-0067, MEDa-0068
Four rounds of user feedback with small numbers of clinicians showed strong support for the TGP drug chart style of displaying
administration events on two time axes (hours and days). This was due to its familiarity for acute care clinicians {R12, R13, R14, R15}.
Laying the chart out in a similar way to current paper charts is likely to reduce the training load on staff as drug administration moves
from paper to electronic.
It is envisaged that other views (such as a Timeline View {R4}) can provide the ability to view administration events on a single
horizontal timescale, which allows graphing of other data (such as patient observations) against the administration events.
MEDa-0269, MEDa-0232
Icons need to clearly represent the time they are plotted against. Therefore, they have to have a consistent match between the icon’s
outline shape and the time it is associated with. If an icon is to be plotted with its ‘centre’ aligning with a time, then the icon’s outline
shape must not mislead clinicians as to which time it relates to. For this reason, the icon should be symmetrical about a horizontal axis.
MEDa-0270
Plotting scheduled events against their intended time follows current practice and gives an accurate visual representation of when
events are Due and how far apart they are.
MEDa-0271
Unscheduled As Required drugs do not have an intended time of administration and so cannot be plotted at specific times. Plotting an
event tied to the current time allows an unscheduled As Required drug to be administered whenever it is appropriate. Plotting the
event in this way also helps to remind those administering it that the drug can be given. See section 3.11 for more guidance on As
Required administrations.
MEDa-0272
Administration events that have a ‘recorded’ status have three times associated with them:
 The intended time of administration
 The recorded time of administration
 The time of recording
The clinician is most likely to be interested in the intended time and the recorded administration time, and potentially the size of the
difference between these. It is especially important to highlight a significant difference between the intended time and recorded time as
this may indicate delayed treatment and put administration events closer together then intended by the prescriber. Figure 62 and
Figure 63 showed that positioning the events at either time still allows the other time to be communicated (or at least inferred) but with
reduced emphasis. There are risks with either approach:
 The risk with plotting the events at the recorded time (Figure 62) is that if the event has been administered late or early, the
  intended time is less clear, and once again how late or how early is not immediately apparent
 The risk with plotting the events at the intended time (Figure 63) is that if the event has been administered late or early, how late or
  how early is not made apparent by the position
Another option would be to display both times as two linked events, but this raises the potential for confusion and creates a more
cluttered view.
Anecdotal reports suggest that the current practice on paper charts is to ‘re-plot’ significantly late events in a time closer to the
recorded rather than the intended time of administration. However the decision to ‘re-plot’ is at the documenter’s discretion.
Implementers of this guidance should consider these risks with the different approaches to plotting administration events and their
possible mitigations.
MEDa-0273
As unscheduled As Required medications do not have an intended time of administration, plotting them at their recorded time of
administration gives the most accurate record of the administrations. This follows current practice of documenting the time of
administration for As Required medication.

                                                                                                                                        Page 56
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

3.9.2        Time Scale
 The guidance points in this section relate to the time scale area of the drug lines in the Drug
 Administration View. Figure 66 highlights the area in which it is located:

 Figure 66: Time Scale Area

                                                                                                                       Evidence
 ID               Description                                                                            Conformance
                                                                                                                       Rating
 MEDa-0069        For each drug in the Drug Administration View, display a vertical time scale at        Mandatory     Medium
                  the left-side of the Chart Area, such that it clearly associates with the line’s
                  Left-Hand Panel

 MEDa-0070        The vertical time scale should be presented with ruler-style demarcations              Mandatory     Medium

 MEDa-0071        Mark the current time clearly in the time scale with a horizontal line                 Mandatory     Medium

 MEDa-0072        Mark the current time within the selected day in the same way as the horizontal        Recommended   Medium
                  line in MEDa-0071 (orange lines in these examples)

 MEDa-0073        Shade the past in the time scale the same way as in the Chart Area (section            Recommended   Medium
                  3.9.3)

 MEDa-0231        Plot the movement of time throughout the day in an even and predictable                Mandatory     High
                  manner
                  For example, the full height of the drug line represents 24 hours and half the
                  height represents 12 hours

 MEDa-0233        Keep the vertical time scale the same for different drug items.                        Mandatory     Medium
                  An exception is where a drug line needs to grow past the default height to
                  accommodate the administration events

 MEDa-0234        The height of each drug item should be no less than can accommodate six                Recommended   Medium
                  administration events, where four of those events are positioned at the
                  ‘standard’ drug round times for that clinical context

 MEDa-0235        Display the scheduled administration times for each drug in the Left-Hand              Mandatory     High
                  Panel’s vertical time scale

 MEDa-0276        Do not display times other than the scheduled times for that drug in the vertical      Mandatory     High
                  time scale

 MEDa-0236        Do not display any times in the vertical time scale for unscheduled As Required        Recommended   Medium
                  drugs
                              RISK
                              There is an unmitigated risk that by not showing times in the timescale
                              for unscheduled As Required medications, a viewer of the chart will be
                              unclear as to the scale of the timescale and so misinterpret the times
                              that the events are plotted. Some of the illustrations in this document
                              show the recorded time of administration next to events in the currently
                              selected day for unscheduled medications, which may mitigate this risk.
                              However, showing the times in this way is not guidance.

                                                                                                                              Page 57
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

MEDa-0237        The very bottom of the ruler should represent 24:00 hours (that is, 00:00:00) and Mandatory               Medium
                 the very top should represent the first moment after 00:00 hours (for example,
                 00:00:01). However they should both be labelled ‘00:00’.
                 If additional space is required to accommodate administration events in these
                 locations, increase the line height accordingly

MEDa-0255        The current time indicator from MEDa-0071 and MEDa-0072 should move down Mandatory                        Medium
                 the drug line during the passage of a day

MEDa-0259        The current time indicator line should not interfere with the legibility of any text in Mandatory         Medium
                 the Chart Area (for example, the text could have a solid background)

Usage Examples
Figure 67 to Figure 69 illustrate how a time scale could be displayed:

Figure 67: Illustration of Typical Time Scales with Four Daily events

Figure 68: Illustration of a Drug with an Administration Schedule that Requires the Chart Area to Grow (Hourly Schedule)

Figure 69: Illustration of a Drug with Enough Details to Require the LHP to Expand Deeper than the Chart Area

                                                                                                                               Page 58
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Figure 70 to Figure 73 illustrate how a timescale should not be displayed:

Figure 70: Incorrect Illustration of Timescales (Times in the Timescale Do Not Match the Scheduled Times Indicated by the Box Icons)

Figure 71: Incorrect Illustration of Timescales (Not All Drug Schedule Times Are Displayed)

Figure 72: Incorrect Illustration of Timescales (Times Are Not for all 24 Hours)

Figure 73: Incorrect Illustration of Timescales (Times Are Not Spaced at Intervals Proportional to the Time Difference)

                                                                                                                             Page 59
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Rationale
MEDa-0069, MEDa-0235
Indication of the scheduled times of administration in a column to the right of the drug details is a feature common to all 20 of the TGP
drug charts analysed during the guidance development. In most TGP drug chart examples, those times are the only indication of
administration frequency and so would be seen as a necessary component of the drug details. Though the drug chart design indicated
by this guidance already includes the frequency (in the LHP drug details), retaining the vertical column of times in this position was
seen as important for familiarity of the view. It also provides quick reference to the actual scheduled times and a row header for the
administration events on the chart.
TGP charts vary in their features. Some display a list of standard times that are then circled to indicate the scheduled times for the
medication. Some provide only for the clinician to write in the scheduled times for the medication. Risk analysis concluded that it was
safer to display only the scheduled times as it was less likely to result in standard times being misinterpreted as scheduled times.
User feedback supported the presentation of scheduled times in such a timescale (see APPENDIX A and APPENDIX B).
MEDa-0071, MEDa-0072, MEDa-0255
In user feedback, an indication of the current time was felt to be a helpful tool when conducting a medication administration task.
However, clinicians felt that they would already have that information from elsewhere (for example, personal watch, workflow in the
day, and so on) and that they would only use the current time in the system to confirm their knowledge and add accuracy (see
APPENDIX A).
MEDa-0231
Using a real-time scale for time within a day means that the position of events on the vertical timescale conveys the time it relates to
more accurately. For example, if the events were plotted so that they were always the same distance apart, irrespective of the time
between them, then the plotted position may lead to a misinterpretation about the time of, or time difference between, events.
Positioning the events in real time may remind clinicians that the usual ‘standard’ drug round times are not evenly spaced throughout a
24-hour period.
MEDa-0233
Keeping the vertical time axis as similar as possible for different drug items maintains consistency of display. It also avoids possible
misinterpretation due to items appearing in the same position relative to the scale but which represent different specific times.
MEDa-0234
Analysis of the patient prescription charts from around 15 acute medical organizations showed that allowing space for six time slots
per drug was the standard and that these generally represented the medical organization’s average ward four drug-round times plus
space for two other times. Therefore, the drug line should be of a height that can accommodate the display of six time slots per drug,
and accommodate the events when four of them are plotted at the ‘standard’ drug round times. This guidance aims to give each
medication line a roughly standard height to provide a degree of consistency across the chart. This standard height is worked out
based on what is likely to be a common high frequency of four times a day at local drug-round times plus two more administrations.
MEDa-0235, MEDa-0276
Analysis of the patient prescription charts from around 15 acute medical organizations showed two conventions for marking
administration times for Regular medications:
 Displaying a set of ‘normal’ drug round times, which were then ringed as appropriate by the prescriber
 Displaying an empty set of time boxes, which were then filled in by the prescriber with the appropriate times
The guidance chooses to follow the convention of displaying only the time scheduled by the prescriber because:
 The electronic administration view does not need to guide the prescriber to the normal drug round times as this is achieved during
  prescribing
 Displaying times additional to the scheduled times may lead to confusion as to what the actual times of administration are for that
  medication
 Displaying times additional to the scheduled times contributes to a more cluttered view
MEDa-0236
Times should not be plotted in the timescale for unscheduled As Required medication because they do not have scheduled times.
Also, actual times of administration are likely to vary per day so it would be misleading to display them in a timescale common to all
days.
        Note
        The 24-hour clock is mandated by the Time Display document {R5}, for reasons of safety, legibility and ubiquity.

                                                                                                                                   Page 60
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

3.9.3         Indicating Past and Future
 The guidance points in this section relate to the indication of past and future time in the Chart Area
 of the Drug Administration View. Figure 74 highlights the default example areas in which they are
 located:

 Figure 74: Example Areas for Indicating Past and Future

                                                                                                                                 Evidence
 ID                Description                                                                            Conformance
                                                                                                                                 Rating
 MEDa-0277         Use shading of the Chart Area to differentiate past and future time. Try to ensure     Mandatory              Medium
                   the shading used is consistent with other displays of past and future, such as in a
                   Timeline View {R4}.

 MEDa-0078         Differentiate between scheduled events that have had an administration status          Mandatory              Medium
                   recorded and those that have not by the form of the symbols used

 Usage Examples
 Figure 75 illustrates how the past and future could be indicated using shading (MEDa-0277):

                      Filled Area: Past                                   Filled Area: Past

                                                                           Line: Now
                                                                                                         Unfilled Area: Future
 Figure 75: Different Shading Used to Represent Past and Future Time

 Figure 76 and Figure 77 illustrate how different times can be displayed in the Chart Area:

 Figure 76: How Different Times Can Be Displayed In a Medication Line (Navigating Back Two Days)

                                                                                                                                    Page 61
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

 Figure 77: How Different Times Can Be Displayed in a Medication Line (Navigating Forward Two Days)

 Rationale
 MEDa-0277
 Clinicians considered including a visual cue of what was past, present and future would be a useful addition to the chart (see
 APPENDIX A and APPENDIX B). The colour of the shading should be determined by factors such as readability and consistency of
 design with other views in the clinical application (such as a Timeline View {R4}).

3.9.4        Indicating Today
 The guidance points in this section relate to the display of the current day in the Chart Area of the
 Drug Administration View. Figure 78 highlights the area in which it is located:

 Figure 78: Current Day Area

                                                                                                                       Evidence
 ID               Description                                                                            Conformance
                                                                                                                       Rating
 MEDa-0079        Mark 'today' in the column heading with an icon and precede the date with the          Mandatory     High
                  word ‘Today’

 MEDa-0080        Use formatting of the column heading to indicate which day is today in the Drug        Mandatory     Medium
                  Administration View (for example, give it a different background colour)

 MEDa-0081        Indicate the current time (now) with a clearly visible horizontal line in the column   Recommended   Medium
                  for ‘today’ in the same manner that ‘now’ is represented in the LHP time scale
                  area (MEDa-0071)

                                                                                                                              Page 62
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
Figure 79 shows how the currently-selected day could be located in the Chart Area: The figure shows ‘now’ represented for each
medication line as a horizontal orange line.

Figure 79: Example with Today as the Currently-Selected Day in the Chart Area

Figure 80 illustrates 0080 by showing how ‘Today’ retains an indication (in this case an orange header) even when today is not the
focused day:

Figure 80: Representing Today When Not in Focus

Rationale
MEDa-0079, MEDa-0080, MEDa-0081
User feedback from a small number of clinicians showed that multiple indications of the current day (for example, the icon, shading
change and column formatting) were useful to ensure correct identification of the current day, as opposed to the currently-selected day
{R14, R15}.

                                                                                                                               Page 63
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

3.9.5         Indicating the Currently-Selected Day
 The guidance points in this section relate to the display of the currently selected day in the Chart
 Area of the Drug Administration View. Figure 81 highlights the area in which it is located:

 Figure 81: Currently-Selected Day Area

                                                                                                                       Evidence
 ID             Description                                                                              Conformance
                                                                                                                       Rating
 MEDa-0082 Use a border to indicate the currently-selected day in the Drug Administration View Mandatory               Medium

 MEDa-0083 Extend the border round the currently-selected day across all drug items                      Recommended   Low

 MEDa-0084 Ensure that the currently-selected day in the Drug Administration View remains                Mandatory     Medium
           placed consistently on the screen (that is, that the third column is always the
           expanded details column rather than moving when the days are navigated)

 Usage Examples
 Figure 82 displays the use of a border to highlight the selected day:

 Figure 82: Use of a Border to Indicate the Selected Day (Three Days Displayed)

 Rationale
 MEDa-0082, MEDa-0083
 The border of the day currently selected helps visually align the date with the administration events in the list.

                                                                                                                             Page 64
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

3.9.6         Information Display
 The guidance points in this section relate to the display of administration event information in the
 Chart Area of the Drug Administration View. Figure 83 highlights an example area in which it is
 located:

 Figure 83: Example Information Display Area

 The guidance models administration events so that they are represented by different types of icons:
       Scheduled events that are not yet Due are represented by a simple generic icon. Although
        not explicitly represented as such, these icons are clickable to enable early administration
        where necessary
       Administration events that are Overdue or Due are represented by ‘clickable' icons since an
        administration is expected to be recorded for them
       Administration events for which an event has been recorded are represented by an icon
        that indicates the status (such as Given or Patient Refused). The status is recorded using
        the administration recording form

                                                                                                                  Evidence
 ID             Description                                                                         Conformance
                                                                                                                  Rating
 MEDa-0085 Display administration event icons for every administration event                        Mandatory     Medium

 MEDa-0086 Make administration events that are ‘active’ (Due or Overdue) and look clickable         Mandatory     Medium

 MEDa-0087 Display administration event icons in a single column per day. Ensure the icons          Mandatory     Medium
           are not placed alongside each other within a day

 MEDa-0278 Additional icons can be placed to the right of the administration event icons in         Recommended   Medium
           cases such as:
                 Start of a new drug (the first administration)
                 When a drug has had multiple entries (rather than the single entry displayed by
                  the single visible icon)
                 When a review is scheduled at the same time as an scheduled administration
                 A lockout has been placed upon the drug line

 MEDa-0089 In the Chart Area, use text formatting, explicit labelling and colour to distinguish     Mandatory     High
           clearly between items with different administration statuses

 MEDa-0090 For UK systems, use white text on a red background to highlight Overdue                  Recommended   Medium
           administrations

 MEDa-0091 Use reverse video (inverting the foreground and background colours) to highlight         Recommended   Medium
           the text label of Overdue and Due drugs

 MEDa-0094 In the Chart Area, mark start and end/review times with the same icons as those          Recommended   Medium
           used in the Left-Hand Panel

 MEDa-0095 When the status of an administration event has been edited after an initial              Mandatory     High
           recording, display the icon for the latest status. For example, if an administration
           was initially Given but the patient vomited the medication shortly afterwards, then
           display the icon appropriate for this change of status

                                                                                                                         Page 65
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

MEDa-0096 When the status of an administration event has been edited after an initial                 Mandatory             Low
          recording, display an additional icon to indicate that it has been edited

MEDa-0238 Ensure that notes can be recorded for any event, including Future events                    Mandatory             Medium

MEDa-0250 Ensure that the administrations event labels (Overdue, Due, Next) also contain the Mandatory                      Medium
          time that they were Due

MEDa-0258 If the functionality is available, ensure that there is a clear indicator icon in the       Recommended           Medium
          Chart Area if a test result is available that relates to the administration event

Usage Examples
Figure 84 shows how supplementary icons can be used for information display. In this figure, the purple icons represent placeholder
supplementary icons. In this figure, the cursor is placed over an administration event for which more than one status (‘Patient
Refused’, ‘Given’) has been recorded.
Figure 85 illustrates the display of information on hover (or keyboard selection) of the administration event icon. Guidance for the
display of information by hovering (placing the mouse cursor) over administration event icons is defined in section 3.9.8.

                        Supplementary icons to show that the
                        administration status has been edited

                               Administration icons showing the first administration
                               status that was recorded for this event

Figure 84: Supplementary Icons in Addition to the Administration Event Icon

Figure 85 shows the three different types of icons for administration events: scheduled with no recordings as yet, ‘active’, and those
which have had an event recorded against them. It also illustrates how the use of text formatting, explicit labelling and colour can be
used to clearly distinguish between items with different administration statuses (MEDa-0089). The design of these icons is notional.

                        ‘Active’ scheduled administrations

   Administration Event Icons for administration events which                          Administration Event Icons for
          have had an administration status recorded                                    scheduled administrations

Figure 85: Types of Administration Event Icons

                                                                                                                                  Page 66
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Figure 86 shows the display of a supplementary icon in addition to the administration event status icon:

                                                             Special Icon for Representing
    Administration Event Icons                                  Additional Information

 Figure 86: Display of Icons Supplementary to the Administration Event Icons

 Rationale
 MEDa-0087, MEDa-0278
 Guidance aims to support recognition ‘at a glance’ of the frequency and schedule of administrations through the placement of the
 administration event icons. It promotes the presentation of information so deviations and exceptions are noticeable and easy to
 recognise.
 Administration status icons are placed in columns for a clearer and less cluttered layout that supports accurate reading along rows and
 down columns in order to clearly associate the icons with the relevant time period.
 MEDa-0090
 The recommendation to use white text on a red background to add emphasis to Overdue drugs follows conventions for the use of the
 colour red as a warning in the UK (see Human Factors In Engineering and Design {R16}). It is recognised that these conventions are
 subject to cultural factors that may heavily influence the final choice of colour.
 MEDa-0095, MEDa-0096
 Since it is possible to edit an administration status and only the final status is displayed, it is important to mark that the original entry
 was changed. Previous designs in which this indication of an edit was displayed only when actively accessed by the user (rather than
 being surfaced constantly) raised patient safety concerns. Those concerns related to the need to be aware of changes to
 administration statuses and the patterns that may emerge from these changes (for example, the patient always refuses at first but then
 asks for the drug 30 minutes later).

3.9.7         Information Display for the Currently-Selected Day
 The guidance points in this section relate to the display of administration event information in the
 currently selected day in the Chart Area of the Drug Administration View. Figure 87 highlights the
 area in which it is located:

 Figure 87: Area Displaying Information for the Currently-Selected Day

                                                                                                                                      Page 67
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

                                                                                                                        Evidence
ID              Description                                                                               Conformance
                                                                                                                        Rating
MEDa-0097       In the Chart Area, display a wider column for the currently-selected day                  Mandatory     High

MEDa-0098       In the Chart Area, provide more information for the currently-selected day and only       Mandatory     Medium
                significant information (such as when an administration has not gone to plan) for
                other days

MEDa-0099       Provide important information in days other than the currently-selected day only          Recommended   Medium
                when the information is additional to what would ordinarily be expected

MEDa-0100       Within the currently-selected day, display information (for example, Mandatory            Mandatory     Medium
                Notes) to support the Next administration event for that drug within that day

MEDa-0101       When truncating text in the currently-selected day of the Chart Area, use an ellipsis     Mandatory     High
                to indicate the presence of more information

MEDa-0102       In the Chart Area, allow information for the Next administration within the currently-    Mandatory     Medium
                selected day to obscure other information if necessary

MEDa-0103       In the Chart Area, when displaying information for the currently-selected day,            Mandatory     High
                display as much information as possible before truncating

MEDa-0104       Do not display a time within the Chart Area of the Drug Administration View for           Mandatory     Medium
                administrations that occurred within time constraints and for which no more precise
                time was given or required

MEDa-0105       When an approximate time (optional or mandatory) has been recorded for an                 Mandatory     Low
                administration, precede the display of the time of administration with the word
                'Approx' in the Chart Area of the Drug Administration View when that administration
                is shown in the currently-selected day

MEDa-0106       When an exact time has been recorded for an administration, display the time within Mandatory           Low
                the currently-selected day of the Drug Administration View

MEDa-0256       Where there is space in the currently selected day, display information that has          Recommended   Medium
                been entered as notes during the administration recording

MEDa-0299       Guide the administering clinician to view all the relevant information for an             Recommended   Low
                administration event before administering the medication, even when this event is
                not in the currently selected day
                         RISK
                         There is an unmitigated risk that relevant information for an administration
                         event may not display appropriately in a day not currently selected and
                         therefore make administration on days not currently selected unsafe. One
                         potential mitigation that has not been fully explored is restricting recording
                         of administration to events in a currently selected day.

Usage Examples
Figure 88 illustrates MEDa-0098 by showing more information for administrations in the currently focused day:

Figure 88: More Information in the Focused Day

                                                                                                                               Page 68
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Figure 89 illustrates MEDa-0098, MEDa-0100, MEDa-0101, MEDa-0102 and MEDa-0103 by showing how additional information for a
scheduled administration can be displayed for the currently-selected day:

                                                                                                               Truncated
                                                                                                               notes

                                                                                                               Obscured
                                                                                                               information about
                                                                                                               a future event

Figure 89: Display of Additional Information for a Specific Scheduled Administration in the Currently-Selected Day

Figure 90 shows examples of the display of:
 ‘Approx’ for drugs that were recorded with an approximate time
 A time for drugs that were recorded with an exact time

Figure 90: Examples of Information Display for the Currently Selected Day

Rationale
MEDa-0097—MEDa-0100
The advantage of displaying fewer days in the view is that more information can be shown per day, especially information that will
support upcoming administration and notify clinicians of important issues with previous administrations. Locating this detail at the point
of administration means that the clinician is:
 More likely to be reminded of it
 Less likely to have to navigate the record looking for the information
MEDa-0104
A medication recorded as administered as Given within time tolerance is assumed to be administered correctly and sufficiently on time.
As such, the clinician does not need to be alerted to extra information about the event. Not displaying the times of these events results
in a less cluttered view that allows other information to stand out more.
MEDa-0299
As this guidance does not currently preclude recording administration from events not in the currently selected day, clinicians should
be aware of the information relevant for that administration event before they administer the medication, even when the event is not in
the currently selected day.
As the associated risk describes, the smaller space allocated to days not currently selected may mean that this information (such as
criteria for administration) does not display as effectively as when in the currently selected day. Potential mitigations of this risk might
be to restrict recording administration to events in the currently selected day or to make the day ‘currently selected’ when an event
within it is selected.

                                                                                                                                      Page 69
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

3.9.8         Chart Area Access to More Details
 The guidance points in this section relate to the display of further details of administration events in
 the Chart Area of the Drug Administration View. Figure 91 highlights an example of an area in
 which this is located:

 Figure 91: Example Area for Display of Further Details

 This section relates specifically to the mechanism of obtaining additional information about
 administration events that have had administrations recorded. Details on the mechanism for
 recording an administration are provided in section 3.16.
 Additional information for an already recorded administration could be details about that
 administration or it could be that the user wishes to undertake an additional action for the
 administration (for example, add notes to the recorded administration).

                                                                                                                          Evidence
 ID                Description                                                                              Conformance
                                                                                                                          Rating
 MEDa-0108         In the Chart Area, for administration events that have administrations recorded,         Mandatory     Medium
                   provide access to more details and the actions available for that event on hover,
                   click or keyboard selection of the administration event icon

 MEDa-0109         In the Chart Area, if using a hover to display details and actions for the events, use   Mandatory     Medium
                   a time delay for the display (and closing) of details and actions

 MEDa-0111         When displaying details and actions for administration events that have                  Mandatory     Low
                   administrations recorded in the Chart Area, display the details for the event above
                   the actions

 MEDa-0112         Support closing the details and actions menu for an administration event in the    Mandatory           Medium
                   Chart Area by clicking elsewhere in the display or by pressing ESC on the keyboard

 MEDa-0113         When using hover or click to display further details about an administration, ensure     Mandatory     Medium
                   that the details are associated spatially and visually with the administration icon

 Usage Examples
 Figure 92 illustrates how more information for administration events and actions might be accessed. The event being hovered over
 here has been edited from a ‘Patient Refused’ status to a ‘Given’ status. The purple and blue icons are notional.

 Figure 92: Examples of Information for Administration Events Reached Through Hovering Over an Event

                                                                                                                                Page 70
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

 Figure 93 illustrates MEDa-0111 by showing how actions for the event are shown below the details of the event. The green icons are
 notional.

             11:00
                  Given as Planned

                  Change
                  Add a note

 Figure 93: Accessing Actions From an Event

 Rationale
 MEDa-0108
 There is likely to be more information about the administration event and the clinician should have easy access to it.
 MEDa-0109
 A slight time delay should be used on hover-over in order to prevent the extra details appearing unintentionally (for example, when the
 clinician’s mouse pointer runs over the events on the chart on the way to another part of the screen).
 MEDa-0113
 Spatial and visual association of the extra details with the event reduces the likelihood that the details will be mistakenly associated
 with another event.

3.9.9        Symbols and Icons
 The guidance points in this section relate to the display of symbols and icons in the administration
 events in the Chart Area of the Drug Administration View. Figure 94 highlights an example of where
 these may be located:

 Figure 94: Example Locations for Symbols and Icons

      Note
      MEDa-0066 should also be considered when reading the guidance points below.

                                                                                                                              Evidence
 ID             Description                                                                             Conformance
                                                                                                                              Rating
 MEDa-0115 Always display an administration status icon for each administration event                   Mandatory             High

 MEDa-0116 Special icons for representing additional information about administration events in Mandatory                     Medium
           the Chart Area are supplementary to the administration status icon

 MEDa-0117 In the Chart Area of the Drug Administration View, use filled-in icons to indicate           Mandatory             Medium
           successful administrations and unfilled icons to indicate those that have not been
           successfully administered. Unfilled icons must have a solid border

 MEDa-0118 Use a simple icon with a dotted border to represent scheduled administrations that Recommended                     Low
           are not yet Due

                                                                                                                                     Page 71
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

MEDa-0119 Support administration statuses that are described by ePrescribing {R9} as a                Mandatory          Medium
          minimum
                         RISKS
                          There is an unmitigated risk that presenting a large number of
                               possible administration statuses in a single list recording form may
                               confuse clinicians or increase the chance of mis-selection
                          There is an unmitigated risk that the administration statuses
                               mentioned by the ePrescribing functional specification {R9} are not
                               fully defined in publically available documentation

MEDa-0120 Ensure that colour is not the only attribute used to distinguish similar symbols            Mandatory          High

MEDa-0121 Ensure that symbols that can be activated or hovered over are of sufficient size to         Mandatory          Medium
          be easily pointed to by pointing devices (as a minimum, use a 16 pixel ×16 pixel
          icon)

Usage Examples
Figure 95 displays example icons that could be used for administration event statuses that can be:
 Selected when recording an administration event (where the icons label a function)
 Displayed in the main chart display (where the icons indicate a status)
This set includes the option to clear the event details (MEDa-0260) and extends the statuses defined by ePrescribing {R9} to include:
 Given Late – Not guidance, but implied by the notional model described in section 3.4
 Given Early – Not guidance, but implied by the notional model described in section 3.4
 Unknown (MEDa-0283)

          Given

          Given Once Only drug

          Given Late

          Given Early

          Recording of a self-administration

          Patient refused

          Patient absent

          Other clinical reason

          Drug unavailable

          Nil by Mouth

          Drug-free interval

          Deferred administration

          Unknown

          Clear the administrative event (for example, if it
          has been recorded in error)
Figure 95: Example of a Possible Set of Administration Event Status Icons

                                                                                                                                Page 72
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Figure 96 provides examples of icons that could be used to represent administrations for which an administration status has yet to be
 recorded (for example, administration events that are Not Yet Due, Due or Overdue):
           An administrative event scheduled in the future
           with no status recorded against it
           An event that has become Due but has not yet
           had a status recorded against it
           Administration that requires a witness
           Due Once Only administration that has not had a
           status recorded against it
 Figure 96: Examples of Icons Representing Administrative Events for Which No Status Has Been Recorded Yet

 Rationale
 MEDa-0117
 Unambiguous differentiation of successful and unsuccessful administration events is of high importance. Both of these states are likely
 to have subcategories and so any icon will need to represent these concepts as well (for example, ‘successful’ might consist of ‘all ok’,
 ‘late’, ‘early’ and so on and ‘unsuccessful’ might consist of ‘refused’, ‘absent’ and so on). Use of filled and unfilled icons allows a
 background that can be supplemented by more detail (the subcategories), follow the familiar conventions for filled and unfilled
 checkboxes and are accessible.
 MEDa-0118
 An icon with a dotted border allows a clear differentiation from both Due and Overdue events and those that have had a status
 recorded against them.

3.10 Overdue Drugs
 This section refers to administration events that have become Overdue and what should happen
 after a medication has been Overdue for some time with no administration status recorded against
 it.

3.10.1       Overdue Drugs
 The guidance points in this section relate to the display of Overdue administration events in the
 Chart Area of the Drug Administration View. Figure 97 highlights an example of where these could
 be located:

 Figure 97: Example Overdue Drug Display Areas

                                                                                                                            Evidence
 ID             Description                                                                           Conformance
                                                                                                                            Rating
 MEDa-0122 In the Chart Area of the Drug Administration View, use text formatting, explicit           Mandatory             High
           labelling and colour to draw attention to Overdue items

 MEDa-0123 In the Chart Area of the Drug Administration View, display administration events           Mandatory             Medium
           that are Overdue according to system rules governing time tolerance

 MEDa-0279 The Overdue indication should be clear even when an Overdue event is displayed Mandatory                         Medium
           in a day that is not currently in focus (in that it has a narrower column)

                                                                                                                                   Page 73
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Usage Examples
 Figure 98 shows an example of how an Overdue drug administration event could be displayed in the drug line:

 Figure 98: Illustration of an Overdue Drug

 Rationale
 MEDa-0122
 As discussed earlier, a major aim of this guidance is to bring the clinician’s attention to drugs with administration events that require
 action. As Overdue events are likely to require action, text formatting, labelling and colour are used in addition to list ordering to attract
 the clinician’s attention.
 MEDa-0279
 Drawing a clinician’s attention to Overdue events cannot rely on the clinician viewing the event in the currently selected day.

3.10.2       Past Overdue
 The guidance points in this section relate to the behaviour of administration events after they have
 been Overdue for some time. Figure 99 highlights an example of where these could be located:

 Figure 99: Example Past Overdue Areas

 There are conditions which determine when an event’s status changes from ‘Next’ to Due and from
 Due to ‘Overdue’. The conditions are most likely to be time tolerances (as described in section 3.4).
 For example, an event might become Due 15 minutes before its scheduled time and become
 ‘Overdue’ 1 hour after its scheduled time. Similarly, a system developer might consider including an
 additional condition which causes an ‘Overdue’ event to automatically change at some point. This
 does not mean that such a condition is supported by this guidance.

                                                                                                                                 Evidence
 ID             Description                                                                            Conformance
                                                                                                                                 Rating
 MEDa-0280 Retain a drug’s position in the list if it has past events that have not had an             Mandatory                 Medium
           administration status recorded (for example, Given or one of the Not Given
           statuses). Determine the position according to the oldest event that has not had
           a status recorded. For example, a drug with Overdue events should not re-sort
           even if the event is four hours Overdue or if another event for that drug or
           another drug becomes Due.

                                                                                                                                       Page 74
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

MEDa-0281 Do not automatically change events with an ‘Overdue’ status to another status.       Recommended         Medium
          For example, they should not change to a status of ‘Unknown’ three hours after
          their scheduled time.
                      RISK
                      There is a risk unmitigated by this guidance that the presence of
                      multiple Overdue events for the same medication might cause a
                      clinician to mistakenly administer the medication for all these events
                      one after the other to ‘clear the backlog’

MEDa-0282 If a system automatically changes status (contravening recommended guidance Mandatory                    Medium
          MEDa-0281) then this new status must imply that the status is unknown. The
          status must not imply that the administration has not occurred. Specifically
          prohibited are labels of ‘Missed’ or ‘Not Recorded’, and use of a cross icon

MEDa-0283 When recording any administration event, the clinician should have the               Recommended         Medium
          opportunity to mark the event with a status of ‘Unknown’

MEDa-0284 Display a message if a clinician tries to record an administration status for any    Recommended         Medium
          event where the drug has multiple past events with no administration status
          recorded. For example, a drug may have two Overdue events or an Overdue
          and a Due event. The message should alert the clinician to the presence of the
          Due or Overdue events and describe the process for dealing with them.

Usage Examples
Figure 100 illustrates MEDa-0281 by showing that an Overdue event has not automatically changed status even when four hours
Overdue:

Figure 100: Overdue Event Has Not Changed Status

Figure 101 illustrates MEDa-0281 by showing that an Overdue event has not automatically changed status even though another event
for the same drug has become Overdue as well:

Figure 101: Two Overdue Events for the Same Medication Line

Figure 102 does not conform to MEDa-0281 because the 08:00 event has automatically changed status and does not conform to
MEDa-0282 because it has used the label ‘Not Recorded’ plus a cross icon:

Figure 102: Event Has Automatically Changed Status

                                                                                                                         Page 75
                           Design Guidance – Medications Management – Drug Administration
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

 Rationale
 MEDa-0280
 In current paper practice, pharmacists reported that ‘blank’ events on paper administration charts were a common and ‘insidious’
 problem (see APPENDIX B). Blanks represent an absence of documentation and it may be that the administration has occurred but
 just not been documented. This absence of documentation not only leaves clinicians without important information but also may
 expose the patient to further risk if the medication is administered again if the ‘blank’ is assumed to mean ‘not administered’.
 Pharmacists and nurses felt that blanks were an error that should be avoided (see APPENDIX B).
 In the same way, an event which has become Due and Overdue cannot automatically be assumed to be ‘missed’ just because it has
 no administration status against it. Neither does the error disappear as time passes.
 When presented with alternatives for the behaviour of Overdue items, clinicians overwhelmingly chose a model that did not re-sort
 these items after the event had been Overdue for several hours. They gave rationale such as that re-sorting gave the impression that
 the event no longer mattered and that “people need to sort out blanks” as opposed to ignoring them. Clinicians did not like the idea that
 the system would automatically ‘demote’ an event without a clinician having attended to it.
 MEDa-0281, MEDa-0282
 In a similar way to re-sorting, an Overdue event changing status after some condition (for example, having been Overdue for three
 hours) might imply that the event no longer matters as much as other Due and Overdue events. Other points of view would be that it
 would be useful to differentiate between ‘recently’ and ‘long’ Overdues or that it is illogical to have two Overdue events for the same
 drug. The majority of feedback on whether the status should change after some condition supported retaining an Overdue status until
 actioned by a clinician. Those clinicians that supported a change in status felt this would only be appropriate once the event had been
 Overdue for a long time and that two hours Overdue was too short a time (see APPENDIX A).
 In addition, research has not concluded on a possible ‘after Overdue’ status that is unambiguous. In user feedback, a number of
 clinicians mistakenly interpreted the status ‘Not Recorded’ to mean ‘Not Administered’. ‘Missed’ has an obvious incorrect connotation,
 as does a cross icon (see APPENDIX A).
 Therefore, based on research, the least ambiguous status is to retain Overdue until actioned by a clinician.
 MEDa-0283
 In the rare event that, after investigation, clinicians are not able to determine the actual administration status, the option to record as
 ‘unknown’ allows the documentation to move on and deprioritises the ‘unknown’ event from the view. It is anticipated that recording of
 such statuses would be audited.
 MEDa-0284
 If two or more events for the same medication are Due or Overdue a clinician may be confused about which one to record
 administration against or mistakenly ‘leapfrog’ over a previous event without realising. A message should help clarify the policy for
 dealing with multiple Due or Overdue events. This policy may change depending on the drug and the clinical context.

3.11 Displaying As Required Administration Events
 The guidance points in this section relate to the display of As Required administration events in the
 Chart Area of the Drug Administration View. Figure 103 highlights an example of where these could
 be located:

 Figure 103: Example As Required Display Area

 The three types of As Required medication are defined in section 3.9.1.

                                                                                                                                     Page 76
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

                                                                                                                    Evidence
ID              Description                                                                    Conformance
                                                                                                                    Rating
MEDa-0133       For As Required drugs, display icons for past administration events in the     Mandatory            High
                Chart Area of the Drug Administration View only when an administration
                status has been recorded using the administration recording form

MEDa-0134       For As Required drugs, show explicitly the criteria required to be met for     Mandatory            Medium
                administration
                        RISK
                        Space in the chart area is restricted for days other than the
                        currently selected day. There is an unmitigated risk that the
                        information required to be displayed for events such as As
                        Requireds will not fully display when they appear in days other
                        than the currently selected day. Implementers of this guidance
                        must consider how to display all required information when the
                        event is not in the currently selected day as the clinician is still
                        able to administer from such an event

MEDa-0135       Where relevant to the criteria, provide a control to enter, calculate or     Mandatory              Medium
                check the criteria for an As Required administration event that is displayed
                in the currently-selected day in the Drug Administration View

MEDa-0136       For As Required drugs, strongly indicate in the Chart Area where there         Mandatory            Medium
                are time restrictions (such as maximum frequency or minimum interval) in
                operation even if other criteria are met

MEDa-0137       For As Required drugs, clearly indicate in the Chart Area of the Drug          Mandatory            Medium
                Administration View when any time restrictions come to an end

Usage Examples
Figure 104 shows two examples of As Required criteria displayed in the currently focused day (MEDa-0134):

Figure 104: As Required Criteria

Figure 105 shows an example of how a related control could be displayed for an As Required administration. This control might
support entry, calculation or checking of the administration criteria to be met.

Figure 105: As Required Drugs in the Currently-Selected Day
                                                                                                                                Page 77
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

 Rationale
 MEDa-0134, MEDa-0135
 Example criteria for administration of As Required medication might be:
  Specific and measurable (such as ‘If beats per minute goes below 60’)
  More subjective (such as ‘for pain’)
  Indicative of the issue which they attempt to help with (such as ‘constipation’)
 Some trusts require that these criteria are recorded for any As Required medication and it is likely that electronic prescribing will allow
 rules like this to be enforced. Displaying these criteria at the point of administration encourages the clinician to consider whether the
 medication is required or not.
 MEDa-0136, MEDa-0137
 Given that there may be extenuating clinical circumstances, the ability to administer (or at least record the administration of) As
 Required medication should not be completely blocked because of time lockouts. For example, if a patient is in significant pain it might
 be inappropriate to delay analgesic administration if it is three hours and fifty-five minutes since its last administration if the analgesic
 has a minimum interval of four hours. However, observation of these restrictions is still important and therefore should be strongly
 indicated for As Required medications. In addition, the medication might be administered in error and the clinician must have the
 opportunity to accurately document this.
 User feedback from a small number of clinicians found that As Required drugs and administration events need to be clearly indicated
 on the Drug Administration View and distinguished from other drugs {R12}.

3.12 Displaying Once Only Administration Events
 The guidance points in this section relate to the display of Once Only administration events in the
 Chart Area of the Drug Administration View. Figure 106 highlights an example where this could be
 located:

 Figure 106: Example Once Only Display Area

                                                                                                                                  Evidence
 ID              Description                                                                                Conformance
                                                                                                                                  Rating
 MEDa-0132       Use a different shape icon for Once Only administration events in the Chart Area of        Mandatory             Medium
                 the Drug Administration View than for Regular events

 MEDa-0241       Identify Once Only drugs by a distinct style in the Left-Hand Panel                        Recommended           Medium

 Usage Examples
 Figure 107 shows an example of how shape can be used to differentiate administration events of different types:

                                                                                                Once Only icon is the
                                                                                                only round icon (all
                                                                                                others are square)

 Figure 107: Using Shape to Differentiate Regular and Once Only Drugs
                                                                                                                                      Page 78
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

 Figure 108 shows an example of using colour in the LHP in order to identify Once Only medication lines:

 Figure 108: Example of a LHP Styled for Once Only Drug Identification

 Rationale
 MEDa-0132
 Once Only medications are given distinct icons in order to further distinguish them from repeated administration medications (Regular).
 This reduces the chance of a Once Only mistakenly being given more than once.

3.13 Administrations of Significant Duration
3.13.1        Displaying Significant Duration Drugs
 The guidance points in this section relate to the display of Significant Duration drugs in the Chart
 Area of the Drug Administration View. Figure 109 highlights an example of where the display would
 appear in the Chart Area:

 Figure 109: Example Significant Duration Drugs Display Area

 The design for ‘Significant Duration’ drugs is intended to be used for those drugs where it is useful
 to record and subsequently view duration and other attributes such as rate. Gases and Infusions
 are examples of Significant Duration drugs. The guidance does not imply that all drugs that have an
 ‘important’ administration duration (such as aminophylline injections over 5 minutes) must be
 displayed according to the Significant Duration design. The decision about which medications to
 display using the Significant Duration guidelines will vary according to clinical context.
 The guidance relates to inpatient environments other than HDU, ITU and similar areas. The display
 of Significant Duration drugs in these more intensive areas is out of scope. Consideration of
 displays that are linked to machines such as Infusion pumps is also out of scope.
 There are acknowledged risks associated with infusion bag changes that are not addressed by this
 guidance.

                                                                                                                                Page 79
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                                                                      Evidence
ID           Description                                                                           Conformance
                                                                                                                      Rating
MEDa-0142    In the Chart Area of the Drug Administration View, show administrations of            Mandatory          High
             Significant Duration in a different format to drugs with discrete administration
             events

MEDa-0143    In the Chart Area of the Drug Administration View, display administrations of         Mandatory          Medium
             Significant Duration by a simple graphic with start and stop or estimated stop
             times for the drug

MEDa-0144    When displaying administrations of Significant Duration in the Chart Area of the      Mandatory          Medium
             Drug Administration View, use the layout and height of a graphic to visually imply
             scheduled start time and expected duration

MEDa-0285    Update the estimated stop times based on the recorded start time and any time         Mandatory          Medium
             taken by recorded interruptions

MEDa-0146    For administrations of Significant Duration in the Chart Area of the Drug             Mandatory          High
             Administration View, very clearly indicate that estimated stop times are estimates

MEDa-0286    In the Significant Duration graphic, use similar formatting to the discrete           Recommended        Medium
             administration events to indicate scheduled administration

MEDa-0287    Update the Significant Duration graphic to indicate that the medication has been      Recommended        Medium
             recorded to have started

MEDa-0145    For administrations of Significant Duration in the Chart Area of the Drug             Mandatory          High
             Administration View, do not update the display of the simple graphic dynamically
             to reflect the time that the drug has been running. (Consideration of displays that
             are linked to machines such as Infusion pumps is out of scope)

MEDa-0147    When displaying administrations of Significant Duration in the Chart Area of the Mandatory               Medium
             Drug Administration View, where an interruption to the administration has been
             recorded, mark this on the graphic. Interruptions might include temporary
             suspensions when a patient goes for a Magnetic Resonance Imaging (MRI) scan,
             long gaps between bag changes and so on

Usage Examples

      RISK
      The usage examples for this guidance (Figure 110, Figure 111 and Figure 112) show only one way that this guidance might
      be complied with and contain elements that are not guidance and have not been risk assessed. In particular, there is an
      unmitigated risk that this guidance and its usage examples do not address how the state or success of the administration is
      clearly conveyed when the Significant Duration administration is not shown in the currently selected day. Other design
      solutions might explore showing Significant Durations as linked start and end events.

                                                                                                                             Page 80
                          Design Guidance – Medications Management – Drug Administration
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

Figure 110 shows examples of two Infusions, one completed during the previous day and one begun and running today. Figure 110
illustrates that administrations of Significant Duration (Infusions in this case) are displayed in a different manner to those with discrete
administration events (MEDa-0142):

Figure 110: Illustration of Two Infusions

Figure 111 shows an Infusion status changing over time:

Figure 111: An Infusion Status Changing Over Time
                                                                                                                                     Page 81
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

Figure 111 illustrates a number of guidance points:
Step 1:
 A simple graphic conveying start and estimated stop times (MEDa-0143, MEDa-0144)
 Clear marking if stop times are estimates (MEDa-0146)
 Formatting the graphic in a way similar to the discrete events in order to communicate that the event is scheduled (in this case
  using a dashed border) (MEDa-0286)
Step 3 and 4:
 Update the graphic to indicate the medication has been recorded to have started (in this case changing from a dashed to a solid
  border) (MEDa-0287)
 Updating the estimated stop time based on the recorded start time (MEDa-0285)
 Not updating the graphic dynamically to show the passage of time. In this series of examples the graphic only changes when the
  start and stop are recorded (MEDa-0145)
The administration success icon used in step 5 is similar to the examples for Regular drugs that are displayed in Figure 95.

Figure 112 illustrates how an Infusion might look if it completed with an interruption (MEDa-0147). Note that the stop time has been
updated based on the time recorded for the interruption (MEDa-0285).

Figure 112: Example of an Infusion Completed with an Interruption

Rationale
MEDa-0142
The display of administrations of Significant Duration needs to communicate:
 Whether they have begun and not been stopped or discontinued
 Their start and stop times
 Their ultimate administration success status
 Any interruptions (if these are recorded)
These needs cannot be accommodated with the design for discrete administration events.
It is an important principle of the Drug Administration View that all a patient's medications are presented in the same view. The
medications are not presented in separate views for different kinds of medication. User feedback with a small number of clinicians
showed support for displaying Significant Duration medications in the same view as other drugs {R12}.
MEDa-0143, MEDa-0144, MEDa-0285, MEDa-0146
See section 3.13 for the rationale for presenting Significant Duration items as both simple summaries and as more detailed
representations.
Two rounds of user feedback supported the clear distinction of actual from estimated or intended dates and Infusion progress {R12,
R13}.
MEDa-0145
The display of Significant Duration drugs is as simple as possible to reduce the likelihood that the graphic is perceived to be an
accurate and real-time representation of the administration status of that drug. Instead, the simplicity reinforces that it is an
approximate representation based on the schedule and estimated duration. Marking the graphic to show the passing of time may
misleadingly imply that that drug is being successfully administered as planned over this time, when it may not be.
User feedback determined that summary indications of ‘idealised’ Infusion (as opposed to actual progress) were potentially dangerous
{R13}. Further feedback indicated similar danger with running totals, unless the system was connected to an administration machine
such as an Infusion pump {R14}. Even then, the machine may not be able to accurately determine that the Infusion is being
successfully administered into the patient's body.
MEDa-0147
User feedback indicated that significant time gaps in Significant Duration drug administration (such as interruptions or suspensions)
should be indicated at the summary level {R15}.
                                                                                                                                 Page 82
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

3.13.2       Status Box
 The guidance points in this section relate to the display of the status box for Significant Duration
 drugs in the Chart Area of the Drug Administration View. Figure 113 highlights an example of
 where this could be located:

 Figure 113: Example Status Box Display Area

                                                                                                                  Evidence
 ID             Description                                                                         Conformance
                                                                                                                  Rating
 MEDa-0148 For Significant Duration drugs in the Chart Area of the Drug Administration View,        Mandatory     Medium
           display a status box which is placed consistently within the currently-selected day
                         RISK
                         There is an unmitigated risk that this guidance does not specify how the
                         information contained in the status box is conveyed when a Significant
                         Duration administration is not in the currently selected day.

 MEDa-0149 Within the status box displayed in the currently-selected day for a Significant          Recommended   High
           Duration drug in the Drug Administration View, provide a clear indication of how a
           more detailed view of the drug can be accessed. If this detail can be accessed by
           the system, provide control for accessing this view

 MEDa-0150 Within the status box displayed in the currently-selected day for a Significant          Mandatory     Medium
           Duration drug in the Drug Administration View, display the status of the
           administration event. For example; ‘Start at 10:00’, ‘Due at 10:00’, ‘Begun’,
           ‘Completed’ or ‘Discontinued’

 MEDa-0151 Where a Significant Duration administration has had an event status recorded             Recommended   High
           (such as ‘Completed’, ‘Discontinued’ and so on), indicate this status with an icon.
           Where possible, use the same icons as for discrete administration event status
           (section 3.9.9)

 Usage Examples
 Figure 114 shows an example of how the status box for a Significant Duration drug could be displayed:
  Placing the box consistently in the currently selected day (MEDa-0148)
  Providing access to a more detailed view (MEDa-0149)
  Providing a clear status (in this case ‘Begun’) (MEDa-0150)

 Figure 114: Status Box for a Significant Duration Drug

                                                                                                                         Page 83
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Figure 115 indicates successful administration with the same icon as for discrete events (MEDa-0151):

 Figure 115: Successful Administration Icon for Status Box

 Rationale
 MEDa-0148
 The status box allows important information to be displayed about the item that the graphic is unlikely to be able to convey. The status
 box also provides a consistent placement for access to a more detailed view.
 MEDa-0149
 User feedback from a small number of clinicians showed strong support for having separate summary and detailed representations of
 Significant Duration drugs. Other rounds of user feedback also found that clinicians were interested in displaying Significant Duration
 drugs at different levels of detail {R13, R14, R15}. It was felt that it was difficult and unnecessary to display more detailed information
 (for example, bag changes, rate and volume) on a Drug Administration View. Clinicians were familiar with having specialised, more
 detailed charts for Significant Duration drugs such as Infusions {R13, R14}.
 MEDa-0150
 The display needs to clearly differentiate administrations that have started from those that are yet to start. Given that the display
 summarising the Significant Duration administrations does not dynamically update as time passes, a status box provides a clear way
 of indicating status change without updating the display. Updating the display could be misleading.
 MEDa-0151
 The design encourages consistency between discrete and Significant Duration administration representations.

3.13.3        Detailed View
 The guidance points in this section relate to the display of further details for Significant Duration
 drugs. Figure 116 highlights an example of where this could be accessed from:

 Figure 116: Example Further Details Display Area

                                                                                                                               Evidence
 ID             Description                                                                             Conformance
                                                                                                                               Rating
 MEDa-0152 In the detailed view for a Significant Duration drug, display information such as bag Recommended                   Medium
           changes, rates, pump settings, changes, administration issues and notes

 MEDa-0153 In the detailed view of a Significant Duration drug, display a graphic on which  Recommended                        Medium
           timings of notes, observations and issues are marked and made distinct from each
           other

 MEDa-0157 In the detailed view of a Significant Duration drug, where applicable display where          Recommended            Medium
           checks have been made and show the recorded volumes or rates

 MEDa-0159 In the detailed view of a Significant Duration drug, where applicable indicate               Recommended            Medium
           outstanding issues and provide appropriate instructions and action buttons

                                                                                                                                     Page 84
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Usage Examples
 No usage examples for this guidance

 Rationale
 MEDa-0152, MEDa-0153, MEDa-0157, MEDa-0159
 Multiple rounds of user feedback indicated further suggestions for extra details that should be present in a detailed view of Significant
 Duration drugs {R12, R13, R14, R15}.
 Two rounds of user feedback supported the guidance that actual and estimated/intended dates and Infusion progress should be clearly
 distinguished {R12, R13}. It was also indicated that summary indications of ‘idealised’ Infusion progress (as opposed to actual
 progress) were potentially dangerous {R12}.

3.13.4       Recording Significant Duration Drug Administrations
 The guidance points in this section relate to the recording of administration events for Significant
 Duration drugs in the Chart Area of the Drug Administration View. Figure 117 highlights an example
 of where this could be located:

 Figure 117: Example Significant Duration Drugs Recording Area

 This guidance does not cover cases where an administration is incomplete (for example, where a
 drip has ‘tissued’ part of the way through the administration of an Infusion so that fluid has leaked
 into the tissue surrounding the cannula). Cases where an administration is incomplete are out of
 scope for this document.

                                                                                                                              Evidence
 ID             Description                                                                             Conformance
                                                                                                                              Rating
 MEDa-0160 For Significant Duration drugs in the Drug Administration View, provide access to            Recommended           Medium
           controls for recording the administration within the detailed view. Do not allow
           recording of administration in the main view

 MEDa-0161 When volumes are recorded, indicate whether they are approximate                             Recommended           Medium

 MEDa-0162 Require the recording of administration issues, notes and changes for Significant            Recommended           Medium
           Duration drugs to be classified by selecting an option from a limited list

 Usage Examples
 No usage examples for this guidance

 Rationale
 MEDa-0160
 Recording Significant Duration administration events in the main view is not recommended as it is likely to require visibility of
 information only present in the detailed view.
 MEDa-0162
 Compared to using unstructured free text, using structured options will speed up input of these exceptions and provide more consistent
 data for display and subsequent audit.

                                                                                                                                     Page 85
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

3.14 When a Patient is Nil by Mouth
3.14.1       Displaying Nil by Mouth Status
 The guidance points in this section relate to the display of the Nil by Mouth status in the Drug
 Administration View. Figure 118 highlights an example of where this could be located:

 Figure 118: Example Nil by Mouth Display Area

                                                                                                                   Evidence
 ID             Description                                                                    Conformance
                                                                                                                   Rating
 MEDa-0163 When a patient is Nil by Mouth, display a notification across the top of the Drug   Mandatory           Medium
           Administration View positioned below the column headings and above the
           medication lines and scroll bar

 MEDa-0164 Do not disable controls for recording administration events for oral drugs          Mandatory           High
           automatically as a result of a patient’s Nil by Mouth status

 Usage Examples
 The shaded area in Figure 119 shows where the Nil by Mouth status should be displayed:

                                                                                                    Nil by mouth
                                                                                                    notification area

 Figure 119: Drug Administration View Areas – Nil by Mouth Notification

                                                                                                                          Page 86
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Figure 120 shows an example of how a Nil by Mouth notification could be displayed in a patient’s Drug Administration View:

 Figure 120: Drug Administration View – Nil by Mouth Notification Display

 Figure 121 shows the same drugs as Figure 120 for a patient who is not Nil by Mouth. This shows that the space that was reserved for
 the Nil by Mouth notification is now available for the display of medication lines.

 Figure 121: Drug Administration View – No Nil By Mouth Notification

 Rationale
 MEDa-0163
 Reducing misadministration of oral substances to Nil by Mouth patients is an important feature of an administration system.
 MEDa-0164
 Clinicians should not be completely prevented from administering (or recording the administration of) oral medications to Nil by Mouth
 patients as there may be extenuating clinical circumstances. Additionally, if the medication is administered in error the record will need
 to accurately reflect this.

3.14.2       Supporting Administrations While a Patient is Nil by Mouth
 The guidance points in this section relate to recording administration events when the patient is Nil
 by Mouth. Figure 122 highlights an example of where this could be located:

 Figure 122: Example Nil by Mouth Administration Recording Area

                                                                                                                                    Page 87
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

                                                                                                                               Evidence
ID               Description                                                                              Conformance
                                                                                                                               Rating
MEDa-0165        When an administration recording form is opened for an oral drug while the patient       Mandatory            Medium
                 is Nil by Mouth, remind the user of that status and present the options to record the
                 oral medication as having been Given (overriding the Nil by Mouth) or as ‘not given
                 due to Nil by Mouth’

MEDa-0166        When recording the administration of an oral drug whilst a patient is Nil by Mouth      Mandatory             Low
                 and the user chooses the option to not give the medication, open the administration
                 recording form and present the fields relevant for recording a ‘not given due to Nil by
                 Mouth’ administration status

MEDa-0167        When recording the administration of an oral drug whilst a patient is Nil by Mouth,      Mandatory            Low
                 and the user chooses the option to give the medication, open the administration
                 recording form and present the default view for recording a successful
                 administration

Usage Examples
Figure 123 shows an example where a patient’s Nil by Mouth status must be explicitly acknowledged before a drug can be
administered. The labels for the two options are not part of guidance, but indicate that the administration can be recorded as Given
(‘Record an administration’) or as ‘not given due to Nil by Mouth’ (‘Skip this administration’) (MEDa-0165):

                 This patient is currently Nil by Mouth

          Skip this administration                        Record an administration

Figure 123: Requiring Explicit Acknowledgment of Nil by Mouth Before Administration

Rationale
MEDa-0165
It is still possible to administer (and record the administration of) oral medications to Nil by Mouth patients. Therefore, the clinician
needs to be provided with the options to do so. Also, the clinician will need to be able to record an administration ‘Not Given due to the
patient being Nil by Mouth’. The clinician cannot leave the administration unrecorded as it would then be wrongly flagged as Overdue.
If the event automatically recorded itself as ‘Not given due to Nil by Mouth’ this might also end up being incorrect as the clinician might
decide that he or she did want to give the medication.

                                                                                                                                     Page 88
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 MEDa-0166
 Taken with guidance point MEDa-0165, this means that when a patient is Nil by Mouth the clinician has to take three steps for every
 administration event for oral medication:
 1. Open the administration recording form for that event
 2. Select the option to not give the medication due to Nil by Mouth
 3. Confirm the administration (for example, through a ‘Record Administration’ button)
 This may seem like a lot of steps to ‘accept’ a Nil by Mouth; however it is the same number of steps that would be made for recording
 any administration as Not Given. The system cannot accept the administration after the second selection as the clinician may want to
 add other information in options present on the administration form.

3.15 Complex Drugs
3.15.1       Variable Dose Drugs
 The guidance points in this section relate to the display of administration events for drugs where
 the prescriber has specified that the dose will vary. Figure 124 highlights an example of where this
 could be located:

 Figure 124: Example Variable Dose Drugs Display Area

 There are a number of ways that a dose may vary. Table 7 describes the ways a dose may vary
 and indicates whether each type is addressed in this guidance:

                                                                                                                          Addressed in
 Type of Dose                 Description                                                         Examples
                                                                                                                          Guidance?
 Conditional Dose             Dosage likely to vary per administration or per day based on        warfarin, insulin,          Yes
                              criteria such as drug levels                                        gentamicin

 Dose Range                   Dosage range specified by the prescriber within which those         As Required                 Yes
                              administering it can choose a dose depending on patient need        analgesia

 Constant Dose–Pattern        Dosage variations repeating either within or between days           furosemide morning          Yes
                              based on a schedule defined by the prescriber                       and evening

 Varying Dose–Pattern         Dosage schedule defined by the prescriber that does not fall        prednisolone tapering       Yes
                              into a repeating pattern                                            dose

 Loading Dose                 An initial higher dosage at the start of a course that reduces to   amiodarone                   No
                              a regular, consistent dose

 Adjusted Dose                Dosage changed by a prescriber after the initial prescription       enalapril 2.5 mg             No
                              where this change was not specified by the original prescriber.     changed to enalapril
                              (This is not counted as a variable dose by this guidance).          5 mg
 Table 7: Ways a Dose May Vary

 The guidance in this section covers drugs whose dose has been prescribed to vary. The guidance
 does not apply to adjusted doses as these are cases where the dose varies after the initial
 prescription.
 In current practice, some of the variable drug types in Table 7 are commonly prescribed on ‘one
 line’. For example, it is common to find special lines on paper charts that allow for differing oral
 anticoagulant doses every day. On some paper charts, variable drug types such as constant dose
                                                                                                                                    Page 89
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

patterns (for example morning and evening furosemide doses) may be written as two separate
prescriptions (on two lines). Other paper charts allow for varying doses within a day so can be
written up as one prescription on one line.
The guidance does not require that variable dose drugs are displayed as a single prescription on a
single line but does offer direction on how this display should work if the application does display
medication in this way. For example, the two representations of furosemide in Figure 125 and
Figure 126 both have guidance compliant Chart Areas: Figure 125 displays the furosemide as one
prescription on one line, whereas Figure 126 displays the two doses as separate prescriptions on
separate lines:

Figure 125: Two Dose Prescription Displayed as a Single Medication Line

Figure 126: Two Dose Prescription Displayed as Two Medication Lines

If the application does display variable doses over multiple lines (as in Figure 126) then it is likely
there will need to be some indication of linkage between these lines. This guidance document does
not address the design of this linkage.
This guidance does not address loading doses as it has not been determined whether they should
ever be displayed on single lines (that aggregate the loading and subsequent doses) or whether
the guidance for variable doses would be appropriate for loading doses also.

                                                                                                                Evidence
ID             Description                                                                        Conformance
                                                                                                                Rating
MEDa-0288 For Conditional Dose drugs. display the criteria for determining the dose next to the   Mandatory     Medium
          administration event icon (and label) for the Next upcoming event in the currently-
          selected day (which may be Scheduled, Next, Due or Overdue)

MEDa-0289 For Conditional Dose drugs, display the actual dose administered next to the            Mandatory     Medium
          administration event icon for all events that have a status of Given or those that have
          been partially administered. Display the dose for all applicable days, not just those
          currently selected

MEDa-0290 For Dose Range drugs, display the dose range and, if present, the criteria for          Mandatory     Medium
          determining the dose next to the administration event icon (and label) for the Next
          upcoming event in the currently-selected day (which may be Scheduled, Next, Due
          or Overdue)

MEDa-0291 For Dose Range drugs, display the actual dose administered next to the                  Mandatory     Medium
          administration event icon for all events that have a status of Given or those that have
          been partially administered. Display the dose for all applicable days, not just the
          currently selected day

                                                                                                                    Page 90
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

MEDa-0292 For drugs with a constant or varying dose-pattern, display the actual dose              Mandatory                Medium
          administered next to the administration event icon for all events that have a status of
          Given or those that have been partially administered. In that the dose should be
          displayed for all applicable days, not just the currently selected day

MEDa-0293 For drugs with a constant or varying dose pattern, display the intended dose against         Mandatory           Medium
          all scheduled administration events, whether in the currently selected day or not

Usage Examples
Figure 127 shows an example of a Conditional Dose drug. It shows the dose criteria for the Next administration (MEDa-0288) and the
doses administered for the previous successful administrations (MEDa-0289):

Figure 127: Conditional Dose Drug

Figure 128 shows an example of a drug with a Dose Range. It shows the dose range and criteria for the dose in the Next
administration event in the selected day (MEDa-0290)and the doses administered for previous successful administrations
(MEDa-0291):

Figure 128: Drug With Dose Range

Figure 129 shows an example of a varying dose-pattern and Figure 130 shows an example of a drug with a constant dose-pattern.
Both figures show the dose administered for all events with a successful administration recorded (MEDa-0292) and intended dose for
all scheduled events (MEDa-0293):

Figure 129: Drug With Varying Dose Pattern

Figure 130: Constant Dose Pattern

Rationale
MEDa-0288—MEDa-0293
Across the guidance in this section, the principle has been applied that for some variable dose types it is useful to see a dosage trend
and for some it is less useful. For example, it is useful to know at what stage a patient is in a tapering dose regimen by being able to
reference the Next dose with those around it.
MEDa-0288
Displaying more detail per event is one advantage of having more space for the currently selected day. Display of the criteria for
variable dose reminds the clinician that the dose may have to be recalculated for the Next administration and provides quick access to
this information.

                                                                                                                                 Page 91
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 MEDa-0289
 Conditional Dose drugs are an instance where it is useful for the clinician to immediately see the trend of past doses. It is
 acknowledged that it would also be very useful to see the other measurements upon which the dose is varying mapped to the dosage
 (for example, International Normalized Ratio (INR) against warfarin dose). This guidance does not cover how this would be achieved,
 though the guidance in this section might be combined with that in Timeline View {R4} to produce a view that allows medication
 dosage to be plotted against a graph of other values over time.
 MEDa-0290
 Display of the dose range and criteria for dose reminds the clinician that the dose may have to be recalculated for the Next
 administration and provides quick access to this information.
 MEDa-0291
 Dose range drugs are an instance where it is useful for the clinician to immediately see the trend of past doses.
 MEDa-0292, MEDa-0293
 Dose-patterns are an instance where it is useful for the clinician to immediately see the trend of past doses and planned future doses.
 This informs the clinician as to where the patient is in the schedule, the doses they have had recently and those that are coming.

3.15.2       Preconditions
 The guidance points in this section relate to the display of preconditions in the Chart Area of the
 Drug Administration View. Figure 131 highlights an example of where this could be located:

 Figure 131: Example Preconditions Display Area

 The display and interaction with administration preconditions is a complex area, which this
 guidance addresses only at a high level. Preconditions such as level checking are out of scope.

                                                                                                                                Evidence
 ID             Description                                                                             Conformance
                                                                                                                                Rating
 MEDa-0173 In the Drug Administration View, use an icon within the Chart Area to mark                   Mandatory               Medium
           administration events that have preconditions (past and future)

 MEDa-0174 When displaying administration events with preconditions in the currently-selected           Mandatory               Medium
           day within the chart display, use text to describe the pre-condition

 MEDa-0175 When displaying administration events with preconditions in the currently-selected           Recommended             High
           day within the chart display, provide access to resources to assist with interpretation
           or recording of the condition

 MEDa-0176 When displaying administration events with preconditions in the Drug Administration          Mandatory               Medium
           View, provide access to more information about the preconditions on hover

 MEDa-0177 For past administration events with preconditions, display the details that were             Recommended             Medium
           recorded to satisfy the precondition on hover over or selection of the administration
           event in the Drug Administration View and display these when the event appears
           within the currently-selected day

 MEDa-0178 For administrations with preconditions, provide the ability for authorised users to          Mandatory               High
           override the condition

                                                                                                                                   Page 92
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Usage Examples
 Figure 132 shows a medication line with notional precondition icons over the scheduled administration events (MEDa-0173) and
 displaying the detail of the precondition next to the event in the currently focused day (MEDa-0174):

 Figure 132: Medication With a Precondition

 Rationale
 MEDa-0173, MEDa-0174, MEDa-0175, MEDa-0176
 Analysis of user feedback from a small number of clinicians found general support for the principle of marking preconditions on the
 view {R14}.
 Displaying more detail per event is one advantage of having more space for the currently selected day. Display of the event
 precondition reminds the clinician that actions may be required before the Next administration (for example, taking observations). This
 also provides quick access to this information and a means of recording, if necessary.
 MEDa-0178
 User feedback confirmed that due to varying clinical circumstances it will be necessary to allow preconditions to be overridden {R14}.

3.15.3        Time-Critical Administration Events
 The guidance points in this section relate to the display of time-critical events in the Drug
 Administration View. Figure 133 highlights an example of where this could be located:

 Figure 133: Example Time-Critical Event Display Area

                                                                                                                           Evidence
 ID                Description                                                                         Conformance
                                                                                                                           Rating
 MEDa-0179         In the Chart Area of the Drug Administration View, use an icon to mark              Mandatory           Medium
                   administration events that have special time tolerances
                            RISK
                            There is an unmitigated risk that the clinician may need to be able to
                            access the time tolerances associated with this event. This guidance
                            does not specify how this would be achieved.

 MEDa-0180         When a past time-critical administration event is shown in the currently-selected   Mandatory           Medium
                   day in the Drug Administration View, display the time of administration

                                                                                                                                 Page 93
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 Usage Examples
 Figure 134 shows notional green icons to indicate events that have special time tolerances and displays times of recorded
 administration events for the same drug (MEDa-0179 and MEDa-0180):

 Figure 134: Medication With a Special Time Tolerance

 Rationale
 MEDa-0179
 Given that many administrations may be scheduled for the same time, and resources are limited, clinicians have to make judgements
 about which ones to administer and record closest to the scheduled time. Anecdotal reports suggest that a variety of methods (such as
 alarms clocks) have been tried to remind and encourage prioritisation of Parkinson’s medication administration (see APPENDIX B).
 Icons to mark time critical events should help to remind clinicians that these events may need special consideration.
 MEDa-0180
 Time critical medications may require the maintenance of consistent intervals between administrations. Therefore, display of the
 previous times of administration will help the clinician to judge exactly when the Next administration is Due, as this time may be slightly
 different from the scheduled Due time.

3.15.4       Witnessed, Role-Specific and Self-Administrations
 The guidance points in this section relate to the display of witnessed, role-specific and
 self-administered drugs in the Drug Administration View. Figure 135 highlights an example of
 where this could be located:

 Figure 135: Example Witnessed, Role-Specific and Self-Administered Display Area

                                                                                                                               Evidence
 ID              Description                                                                              Conformance
                                                                                                                               Rating
 MEDa-0181       Where self-administrations appear in the view, and where those administrations           Recommended          Medium
                 require recording, display the name of the person who recorded the administration
                 in the Chart Area of the Drug Administration View

 MEDa-0182       For an administration event that must be administered by a user with a specific role, Mandatory               Medium
                 supplement administration status icons with an icon that indicates that a specific role
                 must administer the medication. The icon does not have to indicate the actual role
                 required

 MEDa-0183       When an administration event that must be recorded by a user with a specific role is Mandatory                Medium
                 shown in the currently-selected day of the Drug Administration View, display the
                 user’s required role (for future events) or name (for past events)

 MEDa-0184       When an administration event requires a witness, use a special icon for that             Mandatory            Medium
                 administration event in the Chart Area of the Drug Administration View

                                                                                                                                    Page 94
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

 MEDa-0185       When an administration event requires a witness, support the mandatory recording            Mandatory             Medium
                 of witness credentials in the administration recording form

 MEDa-0186       For displaying an administration event that was recorded as a self-administration,          Recommended           Low
                 display a special icon in the chart display of the Drug Administration View

 Usage Examples
 Figure 136 shows the name of the clinician who recorded an administration that required a specific role, notional red icons to indicate
 that a specific role is required and the role required to administer (MEDa-0182, MEDa-0183):

 Figure 136: Administration That Requires a Specific Role to Administer

 Rationale
 MEDa-0182
 An administration that requires a specific role may require additional planning if it is to occur on time. Therefore, it is useful to surface
 this requirement so that the normal medication administration team can alert the other necessary staff in good time.
 MEDa-0184
 As with specific roles, a witnessed administration may require greater team co-ordination to occur on time. The ‘witness required’ icon
 reminds the team to plan for this.
 MEDa-0185
 Though witness recording is mandatory, an implementer of this guidance will have to consider how the witness can be reliably and
 quickly recorded while retaining the original administrator’s place in the application (the drug administration chart).
 MEDa-0186
 With some levels of self administration there may be a reduced degree of certainty about the success of the administration (for
 instance, where the patient reports to the staff that they have taken their medication on time). Indicating that a medication was
 self-administered reminds readers of the chart that the administration has this lesser degree of certainty.

3.15.5       Displaying Partially-Logged Administrations
 There may be a requirement for a clinician to be able to record an administration, but not complete
 the minimum data required for a complete administration (for example, when under emergency
 conditions). This is referred to as a partially-logged administration.
 This guidance does not cover partially-logged administrations.

      Important
      Implementers of systems that support such a function must carefully consider what constitutes a safe user
      interface for both the recording and subsequent display of partially-logged administrations.

                                                                                                                                         Page 95
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

3.16 Recording Administration Events
3.16.1       Recording Administration Events
 The guidance points in this section relate to the way administration events are recorded using a
 form in the Drug Administration View. Figure 137 highlights an example of this area:

 Figure 137: Example Recording Administration Events Area

                                                                                                                           Evidence
 ID             Description                                                                           Conformance
                                                                                                                           Rating
 MEDa-0190 Launch the administration recording form with a pointing device (for example, a    Mandatory                    High
           mouse left-click) or keyboard selection of a Due, Overdue or Future administration
           event icon in the Drug Administration View

 MEDa-0191 Display the administration recording form such that it does not obscure the                Mandatory            High
           Left-Hand Panel or the administration event to which it relates

 MEDa-0192 Use visual design to clearly associate the administration recording form with the          Mandatory            Medium
           administration event to which it relates

 MEDa-0193 When presenting an administration recording form in the Drug Administration         Mandatory                   Medium
           View, place it adjacent to the administration event icon from which it was launched

 MEDa-0194 When an administration recording form is launched, de-emphasise all other                  Mandatory            Medium
           information in the Drug Administration View except for two areas of the drug being
           administered: the Left-Hand Panel and the currently-selected day in the Chart
           Area. For example, de-emphasise the other information by dimming those other
           areas

 MEDa-0245 Always position the recording form so that it displays in full (that is, without parts     Mandatory            High
           falling off the screen)

 Usage Examples
 Figure 138 shows an example of an administration recording form that is explicitly linked to the icon from which it was launched:
                                    25-May-2007    26-May-2007         Today: 27-May-2007           28-May-2007

   Medication 1

                                                                                Administration
                                                                               Recording Form

   Medication 2

 Figure 138: Displaying an Administration Recording Form

                                                                                                                                  Page 96
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Figure 139 shows highlighting of important areas of the Drug Administration View when the administration recording form is opened by
dimming all other areas of the display:

                                                                            Currently selected day for the
                  Left-Hand Panel for the current                           currently selected medication
                  medication (not dimmed)                                   (not dimmed, but past still has
                                                                            a grey background)

                                   25-May-2007   26-May-2007          Today: 27-May-2007         28-May-2007

                                                                               Administration
                                                                              Recording Form

Figure 139: Dimmed and Undimmed Areas During Display of an Administration Recording Form

Rationale
MEDa-0190
Administration can be recorded on Due or Overdue events for obvious reasons. Being able to record against Future events not yet
Due is because clinical circumstances may mean that an administration has to occur earlier than planned (for example, if the patient is
going for surgery). Additionally, early administration of the medication in error needs accurate recording. This is rather than the
clinician waiting until the administration becomes Due and then retrospectively recording it as Given Early. Though records can be
made against Future events, administration cannot be recorded to have happened in the future (MEDa-0239): the administration has
to be logged as having occurred in the past.
MEDa-0191—MEDa-0194
To mitigate against selection error, clinicians have to be made as aware as possible of the medication and administration events that
they are about to record against. For example, this also includes mitigating a scenario where:
 The clinician selects the right medication and event but is then distracted
 The clinician then reads the wrong medication line and administers this other medication
 The clinician records this administration against the original medication
In addition, the dimming of other parts of the screen during administration recording allows clinicians to quickly focus on the most
relevant information and not have to re-scan the page to find what they are looking for.
Two rounds of user feedback with small numbers of clinicians strongly supported the guidance on displaying the administration
recording form {R14, R15}.
MEDa-0245
Not being able to see part of the administration form would mean that the clinician may not be able to read important information on it
or may not be able to use it properly.

                                                                                                                                  Page 97
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

3.16.2       Structure of the Form
 The guidance points in this section relate to how the recording form should be structured. Figure
 140 highlights an example of where this could be located:

 Figure 140: Example Recording Form Location

                                                                                                                       Evidence
 ID             Description                                                                              Conformance
                                                                                                                       Rating
 MEDa-0195 Support the display of different sets of input fields depending on the type of                Mandatory     High
           administration status selected

 MEDa-0196 For data attributes other than the basic information, clearly separate mandatory data Mandatory             Medium
           from optional data, placing mandatory data first in the form

 MEDa-0197 Provide a structured set of input fields that are determined from the drug item details Mandatory           High
           on the system

 MEDa-0199 Group optional details appropriately and provide a name for the group                         Mandatory     Medium

 MEDa-0200 Display appropriate optional entry fields by default depending on the type and                Mandatory     Medium
           specifics of the drug

 MEDa-0201 Provide access to any additional optional entry fields through a simple control               Recommended   Medium

 MEDa-0203 Provide an optional free-text area for notes                                                  Recommended   Medium

 MEDa-0260 Provide a mechanism for the user to return the administration event icon and details          Mandatory     High
           to the state they were in prior to the user input (for example, the Clear the event
           details tab in Figure 141). However, the administration event must retain the
           previous details on an icon as indicated by guideline MEDa-0096
                         RISK
                         There is an unmitigated risk that a mechanism to clear event details may be
                         misused in order to hide errors, even though edits would always be retained
                         in an audit trail. Implementers of this guidance should consider aspects both
                         of UI and of policy that may be required to mitigate this risk

                                                                                                                          Page 98
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010

Usage Examples
Figure 141 illustrates how an administration recording form could be structured:

                                                                                                        Area for mandatory
                                                                                                        information for the
                                                                                                        administration (for
                                                                                                        example, time of
                                                                                                        administration)

                                                                                                        Area for optional
                                                                                                        information (for
                                                                                                        example, extra
                                                                                                        notes)

Figure 141: Structure of Administration Recording Form with Example Administration Statuses

Rationale
MEDa-0195—MEDa-0197, MEDa-0199—MEDa-0200
Two rounds of user feedback with small numbers of clinicians supported the guidance on the presence of contextually-varying
mandatory data input fields (for example, having to record a reason for late administration), and having a clear distinction between
mandatory and optional input fields {R14, R15}.
MEDa-0260
A clinician must be able to clear the event details for a recorded event as details may have been recorded against it in error, either by
themselves or others

                                                                                                                                   Page 99
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

3.16.3       Recording Administrations
 The guidance points in this section relate to the display of the recording of drug administrations in
 the Drug Administration View. Figure 142 highlights an example of where this could be located:

 Figure 142: Example Recording Administrations Location

 This guidance does not cover cases where an administration is incomplete (for example, where a
 patient has vomited up part of the medication or a drip has tissued part of the way through the
 administration of an Infusion). Cases where an administration is incomplete are out of scope for this
 document.

                                                                                                                  Evidence
 ID             Description                                                                         Conformance
                                                                                                                  Rating
 MEDa-0204 When launching the form for recording an administration, present the set of fields       Mandatory     Medium
           that are most appropriate for the status of that event

 MEDa-0205 Within the administration recording form, provide a clearly-labelled control for         Mandatory     Medium
           recording the administration event (thus submitting the form) and ensure that this
           control is the default action associated with the Return (Enter) key

 MEDa-0206 Provide an explicit control for cancelling the action and closing the recording          Mandatory     Medium
           administration form

 MEDa-0207 Include pre-filled values for fields by default where relevant (for example, the time    Recommended   Medium
           of recording could be pre-filled to be the current time). It would not be appropriate
           to pre-fill the dose of a drug with a dose range.
                         RISK
                         There is an acknowledged risk that by pre-filling values by default, the
                         user is encouraged to select those choices even though they may not
                         reflect the reality of the administration.

 MEDa-0208 Where necessary, provide controls to access additional forms to permit recording         Recommended   Medium
           of complex administrations

 MEDa-0209 When providing controls to access additional forms for recording complex             Recommended       Low
           administrations, ensure that the result of the action is clearly communicated by the
           control from which the additional form was accessed

 MEDa-0210 Support the recording of specific dose amounts in the administration recording           Recommended   Medium
           form. For example, if only part of the prescribed dosage has been administered

 MEDa-0211 Support discretionary recording of incremental doses in the administration               Recommended   Medium
           recording form

 MEDa-0212 Support site rotation and limited-list selection of sites in the administration          Recommended   Medium
           recording form where appropriate

 MEDa-0239 Do not allow the time of an administration, when recorded, to be in the future           Mandatory     Medium

                                                                                                                        Page 100
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Usage Examples
Figure 143 has a clear control for submitting the administration form (‘Record Administration’) (MEDa-0205) and for cancellation
(‘Cancel’) (MEDa-0206):

Figure 143: Primary Actions on the Administration Form

Rationale
MEDa-0204, MEDa-0205
Administration can be completed quickly and easily by presenting the most appropriate fields by default and providing clear controls
with default actions. In current paper practice, administration recording can be very quick and clinicians reported that longer processes
for this highly repeated action would add time and frustration to daily work. However, guidance does require that the administration
form is opened before administration is recorded. Therefore, it takes a minimum of two user actions to complete recording. The option
for a one-click recording straight from the chart was rejected on the basis that it would be too likely that an administration event was
selected in error and an administration recorded. Clinician feedback in patient safety assessments supported the two action minimum
for administration recording.
MEDa-0206
Clinicians should have a clear mechanism for closing the recording form:
 If they have opened it in error
 To look at the recording form without needing to record anything
 To access other information before finishing the recording of that administration

                                                                                                                                Page 101
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 MEDa-0207
 Administration recording is speeded up by pre-filling values where it is safe to do so. Example values would include ones that are
 implicit on the paper drug charts, such as the time of administration.
 MEDa-0239
 As per MEDa-0190, administration can be logged against Future events but the administration must have occurred in the past and be
 recorded as such. For example, at 10:00 a clinician can record the 12:00 dose as Given as long as he or she records it as having been
 given before 10:00. That is, prospective administration recording is not supported.

3.17 Medication Updates
 In the event that a patient’s prescriptions are updated while the Drug Administration View is open,
 these updates must be immediately reflected in the view. Updates would include new prescriptions,
 discontinued prescriptions and edited prescriptions.

                                                                                                                           Evidence
 ID            Description                                                                           Conformance
                                                                                                                           Rating
 MEDa-0294 If a new medication is prescribed, or existing medication edited or discontinued,         Mandatory             Medium
           while the Drug Administration View is open, the view should clearly indicate that a
           change has taken place (or will take place) and allow the clinician to easily see
           what this change is (or will be)

 MEDa-0295 The view should not dynamically update if a new medication is prescribed, or              Recommended           Low
           existing medication edited or discontinued, while the Drug Administration View is
           open.

 MEDa-0296 If a new medication is prescribed, or existing medication edited or discontinued,         Recommended           Low
           while the Drug Administration View is open, freeze the view and present a
           message. The message should draw attention to the update, provide its details
           and indicate any potential changes to the view (for example, re-sorting). After the
           user acknowledges the message, unfreeze the view

 MEDa-0297 If an existing medication is edited or discontinued while the Drug Administration         Recommended           Low
           View is open, the clinician should be allowed to record an event as administered
           according to the values prior to the update. The message displayed on update (as
           per MEDa-0296) should clarify that the clinician should complete the recording
           according to the prior values if he or she has already administered the medication

 Usage Examples
 No usage examples for this guidance

 Rationale
 MEDa-0294
 In current practice, anecdotal reports suggest that prescribers often add, discontinue or edit medications on a patient’s drug chart
 without informing the appropriate medication administration staff. This may lead to delayed administration of that medication. Even in
 an electronic system that orders by ‘dueness’, there is a need to make administration staff aware of changes at any time. Therefore,
 irrespective of how the view handles updates, changes should be clearly communicated as they happen to a clinician with the view
 open. If the clinician is not made aware of an update there is a chance he or she may mis-administer.

                                                                                                                                 Page 102
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

MEDa-0295, MEDa-0296
However, if the view dynamically updates without a clear indication of the change, clinicians may not appreciate its exact nature
resulting in confusion or mis-administration. For example, if a clinician is preparing to administer a medication displayed at the top of
the screen, he or she may read the name of the medication, look away to get the medication out of the relevant drawer and then look
back at the view to check the dosage. If the top item has meanwhile been replaced by another medication (without a clear indication
that this has changed), there is a danger that the clinician may not notice the name change and reads the dosage of the new item as
the dosage to give of the medication in their hands.
Freezing the view and providing a message to draw attention to the nature of the update helps mitigate the risk that the update is not
noticed or understood. This guidance is rated as recommended as the method described and risks of doing this have not been fully
explored. For example, it is possible that the view could dynamically update but very clearly mark what change has occurred.
However, this behaviour would have to be very carefully specified in order to be safe and the required exploration was not in scope for
this guidance.
MEDa-0297
The documentation should always reflect reality. Therefore, if a medication is changed between a clinician reading the instruction to
administer and the documentation of this administration, the administration must still be recorded as it happened. It is reasonable to
clarify to clinicians how they should proceed as this kind of change will be unfamiliar to users of paper drug charts, especially since the
administration may be seen as an error.

                                                                                                                                  Page 103
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

4            DOCUMENT INFORMATION

4.1          Terms and Abbreviations
    Abbreviation               Definition
    CUI                        Common User Interface

    INR                        International Normalized Ratio

    IUD                        Intrauterine Device

    LASB                       Look-Ahead Scroll Bar

    LHP                        Left-Hand Panel

    HDU                        High-Dependency Unit

    MRI                        Magnetic Resonance Imaging

    NHS                        National Health Service

    NHS CFH                    NHS Connecting for Health

    NMC                        Nursing and Midwifery Council

    NPfIT                      National Programme for Information Technology

    OTC                        Over the Counter

    PGD                        Patient Group Direction

    POD                        Patient’s Own Drugs

    PRN                        Pro Re Nata (‘As Required’)

    PSD                        Patient Specific Direction

    TGP                        Typical Generic Paper

    TPN                        Total Parenteral Nutrition

    TTO                        To Take Out
    Table 8: Terms and Abbreviations

4.2          Definitions
    Term                       Definition
    As Required                A drug that has not been given a regular schedule and therefore is only given on an as needed basis based
                               on clinical judgement and preset criteria.

    Begun                      A Significant Duration drug, for which a start date and time have been recorded, is scheduled to still be
                               running and has nothing recorded to indicate that it has stopped.

    Conformance                In the guidance tables, indicates the extent to which you should follow the guideline when defining your UI
                               implementation. There are two levels:
                                Mandatory – An implementation should follow the guideline
                                Recommended – An implementation is advised to follow the guideline

    Current best practice      Current best practice is used rather than best practice, as over time best practice guidance may change or
                               be revised due to changes to products, changes in technology, or simply the additional field deployment
                               experience that comes over time.

                                                                                                                                     Page 104
                                  Design Guidance – Medications Management – Drug Administration
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 20 January 2010

 Term                     Definition
 Current medication       Current medications refer to those that have been prescribed to a patient and have not yet been discontinued
                          or completed. A medication can also be termed current with reference to a time in the past when the
                          medication was current for the patient

 Due                      Within the time constraints that allow the administration to be recorded as given successfully (‘Given’).

 Evidence Rating          In the guidance tables, summarises the strength of the research defining the guideline and the extent to
                          which it mitigates patient safety hazards. There are three ratings (with example factors used to determine the
                          appropriate rating):
                           Low:
                              Does not mitigate specific patient safety hazards
                              User research findings unclear and with few participants
                              Unreferenced usability principles indicate the design is not significantly better than alternatives
                           Medium:
                              Mitigates specific patient safety hazards
                              User research findings clear but with few participants
                              References old authoritative guidance (for example, from National Patient Safety Agency (NPSA),
                               Institute for Safe Medication Practices (ISMP) or World Health Organization (WHO)) that is potentially
                               soon to be superseded
                              Referenced usability principles indicate the design is significantly better than alternatives
                           High:
                              Mitigates specific patient safety hazards
                              User research findings clear and with a significant number of participants
                              References recent authoritative guidance (for example, from NPSA, ISMP or WHO)
                              Referenced usability principles indicate the design is significantly better than alternatives

 Overdue                  Outside the time constraints for recording an administration as ‘Given’ but still within time constraints for
                          recording a late administration (‘Given Late’).

 Past drugs               Drugs that have been prescribed and subsequently have either been discontinued or completed at the time
                          the list is being viewed

 White Space              Area of user interface left clear and unused
 Table 9: Definitions

4.3        Nomenclature
 This section shows how to interpret the different styles used in this document to denote various
 types of information.

4.3.1          Body Text
 Text                                                                 Style
 Code                                                                 Monospace

 Script

 Other markup languages

                                                                                                                                   Page 105
                             Design Guidance – Medications Management – Drug Administration
                             Prepared by Microsoft, Version 3.0.0.0
                             Last modified on 20 January 2010

 Text                                                               Style
 Interface dialog names                                             Bold

 Field names

 Controls

 Folder names                                                       Title Case

 File names
 Table 10: Body Text Styles

4.3.2         Cross References
 Reference                                                          Style
 Current document – sections                                        Section number only

 Current document – figures/tables                                  Caption number only

 Other project documents                                            Italics and possibly a footnote

 Publicly available documents                                       Italics with a footnote

 External Web-based content                                         Italics and a hyperlinked footnote
 Table 11: Cross Reference Styles

4.4         References
 Reference         Document                                                                                          Version
 R1.               UK Department of Health – Building a safer NHS for patients: Improving Medication Safety           22-Jan-2004
                   http://www.dh.gov.uk/en/Publicationsandstatistics/Publications/PublicationsPolicyAndGuidance/DH_40
                   71443

 R2.               Design Guidance – Medications List                                                                1.0.0.0

 R3.               Design Guidance – Medication Line                                                                 2.0.0.0

 R4.               Design Guidance – Timeline View                                                                   1.0.0.0

 R5.               Design Guidance – Time Display                                                                    3.0.0.0

 R6.               Design Guidance – Date Display                                                                    3.0.0.0

 R7.               Design Guidance – Date and Time Input                                                             3.0.0.0

 R8.               NHS NPfIT – dm+d Implementation Guide (Secondary Care)                                            May 2009
                   http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/refdocs/index_html

 R9.               NHS CFH – ePrescribing Functional Specification for NHS Trusts                                    1.0
                   http://www.connectingforhealth.nhs.uk/systemsandservices/eprescribing/baselinefunctspec.pdf

 R10.              NHS – The Dictionary of Medicines and Devices                                                     2.3
                   http://www.dmd.nhs.uk/

 R11.              UK Nursing and Midwifery Council – Standards for medicines management                             2008
                   http://www.nmc-uk.org/aDisplayDocument.aspx?DocumentID=6228

 R12.              Design Guide Medications Overview and Administration User Feedback 2007-08-20                     Unpublished

 R13.              Design Guide R4 Medications Overview and Admin User Feedback 2007-02-12                           Unpublished

 R14.              Design Guide R4 Medications Admin and Overview User Feedback 2007-01-18                           Unpublished

                                                                                                                            Page 106
                               Design Guidance – Medications Management – Drug Administration
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 20 January 2010

Reference        Document                                                                   Version
R15.             Design Guide Medications Admin and Overview User Feedback 2006-11-13       Unpublished

R16.             Sanders, M. and McCormick, E., Human Factors In Engineering and Design     Seventh
                                                                                            Edition
Table 12: References

                                                                                                Page 107
                           Design Guidance – Medications Management – Drug Administration
                           Prepared by Microsoft, Version 3.0.0.0
                           Last modified on 20 January 2010

APPENDIX A                     STUDY ID 8: EXECUTIVE SUMMARY

A.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
                  ®
 between Microsoft and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in June 2008 by the CUI
 CAPS team on Drug Administration. These findings are a subset of those in a larger internal report
 prepared for the CUI CAPS Drug Administration team.
 Purpose:
 To gain clinical feedback on design concepts for Drug Administration in electronic systems.
 Method:
 Interviews: structured interviews with 15 Health Care Professionals (HCPs) eliciting HCP
 preferences and qualitative feedback on design alternatives.
 Survey: six respondents answered open and closed questions on a subset of the same designs
 shown in the interviews.
 Key Results:
 Based on clinician preference and rationale:
       Sorting by ‘dueness’ seems appropriate for the task of drug administration. However,
        concerns were raised that this was not the most appropriate sort order for
        non-administration tasks
       There was mixed feedback on whether to group drugs by default or not
       The current model for pharmacist verification was supported
       The notional 'dueness' state transition model was supported (though alternatives were not
        considered)

A.2     Research Objectives
 To gather HCP preferences and qualitative feedback on, and to identify possible patient safety
 hazards with, CUI Drug Administration designs.

A.3     Research Design
A.3.1      Interviews
 Interviews were structured, lasted one hour and were carried out in person. Participants were taken
 through design alternatives for each area and asked for preferences based on patient safety
 rationale. Qualitative feedback was also elicited.
 Detailed notes from the interviews were qualitatively analysed using thematic coding.

                                                                                               Page 108
                      Design Guidance – Medications Management – Drug Administration
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 20 January 2010

A.3.2         Survey
 Respondents completed a 30 minute online survey containing a subset of the images used in the
 interviews. As with the interviews, respondents were asked for preferences among the design
 alternatives, based on patient safety rationale, and asked for qualitative feedback.

A.4       Results
A.4.1         Interview Participant Description
 15 participants were interviewed in 13 sessions. Each had either volunteered through the NHS
 CFH Event Management System (EMS) signup or had been recruited by an HCP who had
 volunteered. Table 3 shows a summary of the participants’ profiles:

 Session         Job Role                   Specialty                                Used eMAR?      Computer Experience
 240             Pharmacy Technician -                                               Yes             ?

 241             Pharmacist                 ?                                        Yes             ?

 242             Pharmacist                 Specialist Medicine                      No              ?

 243             Pharmacist                 Clinical Systems                         Yes             High

 244             Pharmacist                 Intensive care and Surgery               Yes             ?

 246             Pharmacist                 Clinical Systems                         Yes             High
                 Senior sister              Care of the Elderly                      Yes             Medium

 247             Pharmacist                 Department and Clinical System           Yes             High
                                            Management

 248             Ward Manager               Care of the Elderly                      No              Medium

 249             Ward Manager               Cardiology                               No              Medium/High

 250             Pharmacist                 Discharge                                No              ?
                 Chief Pharmacist           Oncology and Management                  No              ?

 251             Senior nurse               Critical Care and Practice Development   Yes             Medium/High

 252             Pharmacist                 ‘Interface’ with PCT                     No              High

 253             Senior Nurse               Care of the Elderly and Practice         No              Medium
                                            Development
 Table 13: Interview Participants

 All participants were from acute secondary care and were from two teaching hospital trusts and one
 district general hospital.
 8 out of 15 participants had used an electronic medication administration record (eMAR) before and
 10 had used ePrescribing. The majority had ‘medium’ or ‘high’ computer experience as they had to
 use computers as part of their clinical work.

                                                                                                                   Page 109
                                    Design Guidance – Medications Management – Drug Administration
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

A.4.2          Survey Respondent Description
 Six respondents completed the survey. All had either taken part in previous CUI feedback or were
 forwarded the survey by a colleague. Table 2 shows a summary of the respondents:

 Respondent           Job Role                     Specialty             Used eMAR?          Computer Experience
 1                    Nurse                        EPR                   Yes                 Medium
                      Nurse                        eMAR                                      Medium

 2                    Pharmacist                   ?                     No                  Medium

 3                    Pharmacist                   ?                     Yes                 High

 4                    UI Designer (NHS CFH)        Clinical Software     No                  High

 5                    Pharmacist                   ?                     Yes                 Medium
 Table 14: Survey Respondents

A.4.3          Design Areas
 Bullet text in italics represents researcher recommendations or comments in order to distinguish
 them from user feedback.

 Example Pharmacist Tasks with Drug Charts
       Is there anything that I need to verify?
       Is there anything that I need to supply?
               And how soon do I need to supply it: is an administration imminent?
       Are there any patterns of non-administration that might need to be addressed?
       How is the XXXX medication doing?
       Why is the patient’s blood pressure still high? Have they had their blood pressure
        medication yet?
       Should any of the As Requireds be changed to Regulars (or vice versa)?
       Is the patient’s discharge medication correct?
       Does the patient need a compliance aid at home?

 As Required
       Four participants raised concerns about showing timescale with times for As Required
        medications. The presence of times on the timescale implies it was Regular medication with
        scheduled events
       The ‘As Required for ...’ text was seen as useful
       Three participants suggested that it would be helpful to see the administration times for the
        As Requireds of previous days by default so that they could determine if the medication
        needed to be converted to a Regular
       Questions were raised over whether both the minimum interval and maximum frequency
        should be displayed and how they should be phrased:
               Deferred to NHS CFH ePrescribing team

                                                                                                             Page 110
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

Sorting by Dueness
   All participants were positive about sorting by dueness (“quite a good idea”) or very positive
    (“a really good idea”) for the task of drug administration
   One nurse had used an eMAR with sorting by dueness before and found it “fine”
   Considering non-administration tasks, the pharmacists interviewed felt that ordering by
    dueness would not be the most appropriate sort order for them or for doctors:
        And therefore they would like access to an alternative sort order or a different view to
         see the administration schedule and history
   Several pointed out that, as many medications were likely to be Due at the same time,
    secondary sort orders would be useful:
        Such as by ‘priority’ (for example, those with a narrow time tolerance)

Grouping by Default
   Preferences were very mixed on whether medications should be grouped by default or not
   Differences centred around the pros and cons of ‘mixing’ of As Required with the rest of the
    medications
   Roughly, more nurses would prefer not grouped by default and more pharmacists would
    prefer grouped by default:
        Presumably because sorting by ‘dueness’ is of less use to the pharmacist than a nurse
         carrying out administrations (and not grouping allows the most Due to rise to the top of
         the list not just the top of the group)
   Why not grouping by default?
        Users wanted to prioritise sorting by dueness
        Having As Required and stat drugs in a separate section would perpetuate the problem
         of these being accidentally ‘missed’
        One nurse had used a system with no grouping by default, describing that it “was fine”
        The issue of seeing a familiar view (for example, grouped like the paper drug charts)
         can be satisfied by applying the grouping afterwards (if the user wants to)
   Why grouping by default?
        Having no groups would be “TOO big a change” (253) in that familiarity and acceptance
         was more important overall
        “Nurses have a learnt routine of groups which they go through” (253)
        As Required ‘mixed in’ would lead to over administration (250)
        An As Required ‘query’ (‘can we give them anything for pain?’) would be easier to
         answer if it was in a separate section

Never-Administered As Required
   Of eight participants asked, six felt it would be important to see discontinued As Requireds
    on the chart even if they had never been administered

                                                                                             Page 111
                   Design Guidance – Medications Management – Drug Administration
                   Prepared by Microsoft, Version 3.0.0.0
                   Last modified on 20 January 2010

Status Bar
   Preferences for the Status Bar design were inconclusive, however several respondents felt
    that the whole Status Bar was unnecessary if the information was clear in the list:
        However, one participant realised that if you could apply grouping or alternative sort
         orders (which is likely), then the Status Bar would alert you to Due and Overdue
         medication that you might be able to currently see and therefore was a useful feature

Pharmacist Verification
   Both nurses and pharmacists confirmed it was useful to see verification
   The two pharmacists asked felt that each medication was verified on its own and a global
    verification was not necessary
   All six participants asked felt it was not necessary to permanently display the verifier’s
    name, as long as it could be easily accessed
   Feedback was inconclusive on the use of a flag for verified or unverified

Due – The State Transition Model
   The potential time-based model was discussed with participants. The model includes:
        Flagging an event as Next when it is the next non-Due or Overdue event for that
         medication
        Flagging an event as Due when it passes its scheduled time and becomes Overdue
         around an hour after that
        Flagging whether administration was recorded early or late
   All seven participants with whom it was discussed felt the model was acceptable for the
    general inpatient context:
        They also supported the idea of variable time tolerance within this model

Discontinued
   One participant was concerned that discontinued medications were currently not sufficiently
    distinguished

                                                                                             Page 112
                   Design Guidance – Medications Management – Drug Administration
                   Prepared by Microsoft, Version 3.0.0.0
                   Last modified on 20 January 2010

APPENDIX B                      STUDIES ID 14 AND 40: EXECUTIVE
                                SUMMARY

B.1     Abstract
 The UK National Health Service (NHS) Common User Interface (CUI) programme is a partnership
                  ®
 between Microsoft and NHS Connecting for Health (NHS CFH), which is part the NHS National
 Programme for Information Technology (NPfIT).
 As part of CUI, the Clinical Applications and Patient Safety (CAPS) project has the goal of ensuring
 that software applications used by the NHS enhance patient safety. To achieve this, CAPS
 provides software developers with user interface design guidelines derived through a user-centric
 development process that includes explicit patient-safety evaluations.
 This summary describes key findings from user research carried out in August 2008 by the CUI
 CAPS team on designs for Drug Administration. These findings are a subset of those in a larger
 internal report prepared for the CUI CAPS Drug Administration team.
 Purpose:
 To gain clinical feedback on design concepts for Drug Administrations in electronic systems.
 Method:
 Interviews: structured interviews with 14 Health Care Professionals (HCPs) eliciting HCP
 preferences and qualitative feedback on design alternatives.
 Survey: 45 respondents answered open and closed questions on a subset of the same design
 images used in the interviews.
 Key Results:
 Based on clinician preference and rationale:
       ‘Long’ Overdue administration events should not re-sort in the list until after clinician action
       ‘Long’ Overdue administration events probably should not change to another state (for
        example, Not Recorded) without clinician action
       A less mis-interpretable description for a Not Recorded state might be ‘Unknown’
       The Status Bar refresh control does not need to display multiple times and can simply
        indicate that the list order needs updating

B.2     Research Objectives
 To gather HCP preferences and qualitative feedback on, and to identify possible patient safety
 hazards with, CUI Medication Administration designs focusing on unfinished scope areas such as
 dealing with Not Recorded.

B.3     Research Design
B.3.1      Interviews (Study ID 40)
 Interviews were structured, lasted one hour and carried out in person. Participants were taken
 through design alternatives for each area and asked for preferences based on patient safety
 rationale. Qualitative feedback was also elicited.
 Detailed notes from the interviews were qualitatively analysed using thematic coding.

                                                                                                  Page 113
                       Design Guidance – Medications Management – Drug Administration
                       Prepared by Microsoft, Version 3.0.0.0
                       Last modified on 20 January 2010

B.3.2         Survey (Study ID 14)
 Respondents completed a 30 minute online survey containing a subset of the images used in the
 interviews. As with the interviews, respondents were asked for preferences among the design
 alternative, based on patient safety rationale, and asked for qualitative feedback.

B.4       Results
B.4.1         Interview Participant Description
 14 participants were interviewed in 12 sessions. Each had either volunteered through the NHS
 CFH Event Management System (EMS) signup or had been recruited by an HCP who had
 volunteered. Table 3 shows a summary of the participants’ profiles:

                                                                                      Computer        CUI Feedback
 Session Job Role                      Specialty        Level           Used eMAR?
                                                                                      Experience      Before?
 292           Doctor                  Anaesthetist     SpR             No            Medium          No

 293           Nurse                   Acute pain       Sister          No            Medium          No

 294           Pharmacist              ?                ?               HIS           Medium          No

 295           Resus Officer           Resuscitation    Senior          No            High            No

 296           Doctor                  Obstetrics and   FY2             No            Medium          No
                                       Gynaecology

 297           Doctor                  Obstetrics and   FY2             No            Medium          No
                                       Gynaecology

 298           Nurse                   Gynaecology      Staff Nurse     No            Medium / Low    No

 299           Nurse                   Gynaecology      Staff Nurse     No            Medium / Low    No

 300           Nurse                   Gynaecology      Junior Sister   No            Medium          No

 301           Pharmacist              ?                Senior          ServeRx™      High            Yes

 302           Nurse                   Surgery          Sister          ServeRx       Medium / Low    No
               Pharmacist              Safety           ?               ServeRx       Medium / High   No
 Table 15: Interview Participants

 All participants were from acute secondary care and were from three different teaching hospital
 trusts with diverse geographical locations.
 Only 4 out of 12 participants had used an electronic medication administration record (eMAR)
 before. The majority had ‘medium’ computer experience as they had to use computers as part of
 their clinical work.

B.4.2         Survey Respondent Description
 45 respondents completed the survey. All had either taken part in previous CUI feedback or were
 forwarded the survey by a colleague. Table 16 shows a summary of the respondent’s job roles:

 Job Role                     Respondents
 Hospital Staff Nurse         2

 Ward Manager                 1

 Other Nurse                  5

 Junior Doctor                2

                                                                                                                 Page 114
                                    Design Guidance – Medications Management – Drug Administration
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 20 January 2010

 Job Role                  Respondents
 Medical Consultant        6

 Anaesthetist              2

 Pharmacist                23

 Healthcare Manager        1

 Software Analyst          1

 Change Agent              1

 Healthcare IT Clinician   1

 TOTAL                     45
 Table 16: Survey Respondents

 53% of respondents had used some kind of ePrescribing and 27% had used some kind of
 electronic drug administration. Most respondents had medium to high computer experience.

B.4.3          Design Areas
 Bullet text in italics represents researcher recommendations or comments in order to distinguish
 them from user feedback.
 Results from the interviews and survey have been combined where they covered the same design
 areas.

 Not Recorded: Indication
       Only 45% of interview participants and 64% of survey respondents correctly interpreted
        what the Not Recorded indicator would mean (the label was supplemented with a cross):
               Implying that the label and cross symbol are not safe for use to represent this concept
               ‘Unknown’ was suggested as a more appropriate term

 Not Recorded: Current Practice
       Pharmacists described unrecorded administration as a very common problem, expecting to
        see several a day on their rounds:
               “Very serious, very prevalent and universal.....not catastrophic but it is the insidious
                nature of the problem”
       Participants felt that it was very unusual not to be able to discover what actually happened
        to the administration
       Participants speculated that blanks are often caused by interruptions in drugs rounds

 Not Recorded: Time Change
       When shown an example of what might happen to an event that had been Overdue for two
        hours, the majority of participants and respondents:
               Anticipated it would stay Overdue
               Reasoned that it should stay Overdue
               Or saw problems with it changing to a Not Recorded state after two hours

                                                                                                      Page 115
                                Design Guidance – Medications Management – Drug Administration
                                Prepared by Microsoft, Version 3.0.0.0
                                Last modified on 20 January 2010

Not Recorded: Sorting and Changing
   As well as changing state, participants were asked about whether the ‘long’ Overdue event
    should re-sort so that other Due events came to the top of the list (as the list is ordered by
    dueness)
   Table 17 shows participant’s and respondent’s preferences for the behaviour of an Overdue
    event after two hours:

         Which Option is Safest?                                  Interviews (n=11)             Survey (n=45)
         Option 1 – Change to Not Recorded and re-sort            0                             8%

         Option 2 – Change to Not Recorded and not re-sort        36%                           22%
                                                                  *If longer time till change

         Option 3 – No change and not re-sort                     64%                           67%

         Don’t know                                               0                             2%
     Table 17: Preferences for Behaviour of an Event Over Two Hours Overdue

   Preference was to not change and not re-sort, with clear rationale such as that if you
    change and re-sort the unrecorded events will get forgotten:
          However, an important risk raised was that if ‘unrecorded’ events did remain as
           Overdue an administerer might administer BOTH doses in quick succession

Not Recorded: Recommendations
   Until after clinician action, administration events that have gone beyond Overdue should:
          Not re-sort automatically
          Remain prominent in the display (perhaps through the Status Bar, label or visual
           design)
          Indicate the original Due time
          Not use a mis-interpretable label or icon (for example, do not use Not Recorded or a
           cross)
          Be very clear that there has NOT been any user-initiated change (perhaps by remaining
           Overdue)
          Strongly encourage a user to deal with that administration event before any others for
           that medication
   A clinician should be able to record that the administration status of an event is unknown
    (as an exceptional circumstance)
   Consider whether an automatic change of state (that does not violate the above
    recommendation) after either a ‘longer’ period of time or ‘when the Next event becomes
    Due’ is feasible, compared to just remaining Overdue
   Illustrate all administration states on days not in focus on the administration view, ensuring
    that they are still interpretable
   Address the risk that multiple Overdue events are mistakenly administered in quick
    succession

                                                                                                                Page 116
                        Design Guidance – Medications Management – Drug Administration
                        Prepared by Microsoft, Version 3.0.0.0
                        Last modified on 20 January 2010

Self-Administration
   Participants described a variety of practice around self-administration, including one trust
    which did not support it
   Table 18 shows survey respondent’s preferences for assessing compliance with Level 3
    self-administration:

         What Should Level 3 Practice Be?                           Survey (n=49)
         Nurse makes no documentation                               0%

         Nurse documents stated compliance daily                    29%

         Nurse documents stated compliance per drug round           55%

         Other practice                                             10%

         Don’t know                                                 6%
     Table 18: Preferences for Self-Administration Level 3 Compliance Documentation

   Self-administration was placed out of scope shortly after this research as current clinical
    policy is unclear and it is not the CUI’s responsibility to determine such policy

As Required in the Status Bar
   Both interview participants and survey respondents preferred the design option which
    showed a count of ‘givable’ and all As Required medications in the Status Bar:
          Reasons given were that it provided more information and made you think about the As
           Required status
   However, as several participants were confused by the count of ‘givable’ it should be
    considered how this can be made more explicable to clinicians without increasing clutter

Status Bar Refresh Control
   Of the three design options shown, participants felt the option indicating time of last update
    and time of last input was overly wordy and confusing:
          In addition, a small time since last list order update does not mean that there are no
           important order updates
   The option that just indicated that an list order update was available was seen as simplest
   The option in the style of a Internet browser alert bar was seen as a little confusing, though
    most noticeable

Preconditions
   Feedback implied that there are at least two types of non-time-based preconditions:
     a. The clinician has to record or view a measure (for example, pain score) before
        administering
     b. The clinician has to record or view a measure AND it has to be over a certain value (for
        example, for digoxin) before administering
           (Type b preconditions are out of scope for the CUI Drug Administration work)
   A number of complicating factors were raised:
          Indication that a score is not the only factor in a decision to give a PRN
          Dealing with a choice between multiple As Requireds (for example, with analgesics)

                                                                                               Page 117
                          Design Guidance – Medications Management – Drug Administration
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 20 January 2010

        A value may already be recorded recently as part of observation rounds so MIGHT
         need to be imported or checked rather than input again
        The clinician may need to record a score AFTER administration to document the effect
         of treatment
        There may need to be an indication of WHICH score to use (for example there may be
         multiple pain scores in use)
   Along with other issues, such as indicating trough-level requirements, this implies that the
    CUI preconditions guidance will have to include a caveat that it does not cover the full
    complexity of preconditions

Indicating ‘Out-of-Round’
   As seen in other feedback, concern was raised at circling administration times to indicate
    administrations ‘out of normal’ times as this clashed with the current paper convention to
    circle the times of administration

                                                                                            Page 118
                   Design Guidance – Medications Management – Drug Administration
                   Prepared by Microsoft, Version 3.0.0.0
                   Last modified on 20 January 2010

APPENDIX C                             CHANGES SINCE PREVIOUS VERSION
 Table 19 describes the changes made since the previous version of this guidance (Baseline
 version 2.0.0.0 dated 19-Dec-2007).
 There are significant updates to the Usage Examples and Rationale descriptions throughout this
 document. There are also instances of changed terminology, some of which affects section titles.
 This table does not detail those but only lists guideline-related modifications, deletions and
 additions.
         Notes
          ‘Modified’ indicates a change to one or more of a guideline’s description, conformance or evidence
             rating
          IDs are listed in the order in which they appear, not numerically

 Section Change            IDs
 3.3.1         Modified    MEDa-0001, MEDa-0003

               Added       MEDa-0246

 3.3.2         Deleted     MEDa-0005, MEDa-0006

               Added       MEDa-0262, MEDa-0263

 3.4           Deleted     MEDa-0024

               Modified    MEDa-00023, MEDa-0025, MEDa-0026, MEDa-0027, MEDa-0028, MEDa-0029

               Added       MEDa-0252, MEDa-0264

 3.5.1         Added       MEDa-0248

 3.5.2         Added       MEDa-0218, MEDa-0219, MEDa-0249

 3.5.3         Modified    MEDa-0016, MEDa-0021,

               Added       MEDa-0257

 3.6           Modified    MEDa-0036

 3.7           Modified    MEDa-0039

 3.8.1         Modified    MEDa-0043, MEDa-0044

               Added       MEDa-0224, MEDa-0225, MEDa-0251, MEDa-0265

 3.8.2         Deleted     MEDa-0055

               Modified    MEDa-0051, MEDa-0050, MEDa-0053, MEDa-0054, MEDa-0059, MEDa-0058

               Added       MEDa-0228, MEDa-0229, MEDa-0230, MEDa-0266, MEDa-0267, MEDa-0268, MEDa-0298

 3.8.3         Modified    MEDa-0060, MEDa-0061, MEDa-0062

 3.9.1         Modified    MEDa-0064, MEDa-0065, MEDa-0066, MEDa-0067,

               Added       MEDa-0232, MEDa-0269, MEDa-0270, MEDa-0271, MEDa-0272, MEDa-0273, MEDa-0274, MEDa-0275

 3.9.2         Modified    MEDa-0069, MEDa-0073

               Added       MEDa-0234, MEDa-0235, MEDa-0236, MEDa-0237, MEDa-0276

                                                                                                           Page 119
                            Design Guidance – Medications Management – Drug Administration
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 20 January 2010

Section Change      IDs
3.9.3    Deleted    MEDa-0077

         Modified   MEDa-0078

         Added      MEDa-0277

3.9.6    Deleted    MEDa-0088, MEDa-0092

         Modified   MEDa-0085, MEDa-0086, MEDa-0087, MEDa-0089, MEDa-0095, MEDa-0096

         Added      MEDa-0258, MEDa-0278

3.9.7    Modified   MEDa-0099

         Added      MEDa-0256, MEDa-0299

3.9.8    Modified   MEDa-0108, MEDa-0109, MEDa-0111, MEDa-0112

         Deleted    MEDa-0110

3.9.9    Modified   MEDa-0117, MEDa-0119

3.10.1   Added      MEDa-0279

3.10.2   Deleted    MEDa-0124, MEDa-0125, MEDa-0126, MEDa-0127

         Added      MEDa-0280, MEDa-0281, MEDa-0282, MEDa-0283, MEDa-0284

3.10.3   Deleted    Section deleted (MEDa-0128, MEDa-0129, MEDa-0130, MEDa-0131)

3.11     Modified   MEDa-0134

3.13.1   Modified   MEDa-0142, MEDa-0143, MEDa-0145, MEDa-0146, MEDa-0147

         Added      MEDa-0285, MEDa-0286, MEDa-0287

3.13.2   Modified   MEDa-0148, MEDa-0149, MEDa-0150, MEDa-0151

3.13.3   Deleted    MEDa-0154, MEDa-0155, MEDa-0156

         Modified   MEDa-0152, MEDa-0153, MEDa-0157, MEDa-0159

3.13.4   Modified   MEDa-0160, MEDa-0161, MEDa-0162

3.14.1   Modified   MEDa-0163, MEDa-0164

3.14.2   Modified   MEDa-0165, MEDa-0166, MEDa-0167

3.15.1   Deleted    MEDa-0165, MEDa-0166, MEDa-0167, MEDa-0169

         Added      MEDa-0288, MEDa-0289, MEDa-0290, MEDa-0291, MEDa-0292, MEDa-0293

3.15.2   Modified   MEDa-0177

3.15.3   Modified   MEDa-0179

3.15.4   Modified   MEDa-0181, MEDa-0182, MEDa-0186

3.15.5   Deleted    Section deleted except for informational note (MEDa-0187, MEDa-0188, MEDa-0189)

3.16.1   Modified   MEDa-0194

3.16.2   Deleted    MEDa-0198, MEDa-0202

         Modified   MEDa-0196, MEDa-0201, MEDa-0203

3.16.3   Modified   MEDa-0204, MEDa-0207, MEDa-0208, MEDa-0209, MEDa-0210, MEDa-0211, MEDa-0212

         Added      MEDa-0239

                                                                                                      Page 120
                    Design Guidance – Medications Management – Drug Administration
                    Prepared by Microsoft, Version 3.0.0.0
                    Last modified on 20 January 2010

Section Change                IDs
3.16.4       Deleted          Section deleted (MEDa-0213, MEDa-0214, MEDa-0215, MEDa-0217)

3.17         Added            New section (MEDa-0294, MEDa-0295, MEDa-0296, MEDa-0297)
Table 19: Updates since the Last Baseline Version

                                                                                               Page 121
                              Design Guidance – Medications Management – Drug Administration
                              Prepared by Microsoft, Version 3.0.0.0
                              Last modified on 20 January 2010
