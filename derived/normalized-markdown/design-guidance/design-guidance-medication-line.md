# Design Guidance -- Medication Line

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Medication Line.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-medication-line.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
     Medication Line

 Wednesday, 19 November 2008
               Version 2.0.0.0

                  Prepared by

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   Design Guidance – Medication Line                                                                                               1.0.0.0

   Documents to be read in conjunction with this document

   Document Title                                                                                                                  Version
   Design Guidance – Medications List                                                                                              3.0.0.0

   Design Guidance – Drug Administration                                                                                           2.0.0.0

   Design Guidance – Patient Banner                                                                                                3.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2008. All rights reserved.

                                    Design Guidance – Medication Line
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 19 November 2008

TABLE OF CONTENTS
1    Introduction .................................................................................................................................... 1
    1.1    Customer Need......................................................................................................................... 1
    1.2    Scope ........................................................................................................................................ 2
     1.2.1      In Scope .............................................................................................................................. 2
     1.2.2      Out of Scope ....................................................................................................................... 3
    1.3    Dependencies ........................................................................................................................... 5

2    Guidance Overview ....................................................................................................................... 6
    2.1    Summary of Guidance .............................................................................................................. 7

3    Guidance Details ............................................................................................................................ 9
    3.1    Introduction ............................................................................................................................... 9
    3.2    Principles .................................................................................................................................. 9
    3.3    Guidelines ............................................................................................................................... 10
     3.3.1      Formatting Drug Names .................................................................................................... 10
     3.3.2      Displaying Numbers .......................................................................................................... 13
     3.3.3      Separators ......................................................................................................................... 15
     3.3.4      Wrapping ........................................................................................................................... 17
     3.3.5      Abbreviation ...................................................................................................................... 18
     3.3.6      Truncation ......................................................................................................................... 19
     3.3.7      Symbols ............................................................................................................................. 20
     3.3.8      Text Labels ........................................................................................................................ 22
     3.3.9      Line Breaks ....................................................................................................................... 24
     3.3.10         Line Spacing.................................................................................................................. 26
     3.3.11         Displaying Dose ............................................................................................................ 27
     3.3.12         Displaying Strength ....................................................................................................... 29
     3.3.13         Attribute Order ............................................................................................................... 31
    3.4    Rationale Summary ................................................................................................................ 33

4    Document Information ................................................................................................................ 34
    4.1    Terms and Abbreviations ........................................................................................................ 34
    4.2    Definitions ............................................................................................................................... 35
    4.3    Nomenclature ......................................................................................................................... 35
     4.3.1      Body Text .......................................................................................................................... 35
     4.3.2      Cross References.............................................................................................................. 36
    4.4    References ............................................................................................................................. 36

APPENDIX A            Reference Summary of Guidance ........................................................................... 38

                                 Design Guidance – Medication Line
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 19 November 2008

1             INTRODUCTION
    This document provides guidance for the representation of a medication in a user interface (UI). It
    describes the area of focus, lists mandatory and recommended guidance points with usage
    examples and explains the rationale behind the guidance.
    This document replaces the previously published guidance Design Guidance – Medication Line. It
    has been extended to provide formatting and layout rules that add structure and consistency to the
    way that medications are displayed in a user interface.
    Table 1 describes the changes made since the previous version of this document:

    Previous          Previous
    Baseline          Baseline          Changes Since Previous Baseline
    Version           Date
    1.0.0.0           04-Apr-2008       The document has been restructured and generic sections rewritten. The following table
                                        summarises guidance updates that have been made to this document:
                                        Deleted:
                                         MEDi-006 deleted
                                        Modified:
                                         MEDi-002 includes additional information that cites exceptions in which capital letters can be
                                          used in a generic drug name
                                         MEDi-004 has been split into MEDi-023 and MEDi-026. These two guidance points are listed in
                                          separate sections to provide more detailed guidance for truncation and abbreviation respectively
                                         MEDi-005 has been split into MEDi-018 and MEDi-027. These two guidance points are listed in
                                          separate sections to provide more detailed guidance for separators and symbols respectively
                                         MEDi-007 has been updated to mandate the use of the word ‘DOSE’ in a text label for a dose
                                          value
                                         MEDI-010, MEDi-011 and MEDi-012 have been reworded to clarify the guidance
                                        Added:
                                         A further 42 guidance points, MEDi-013 to MEDi-054, have been added. Refer to section 2.1 for
                                          more details
    Table 1: Changes Since the Last Baseline Version

         Note
         In this document, the words ‘generic’ and ‘brand’, when associated with drug names, are used with very
         specific meanings that may differ from their accepted meanings in other contexts. Refer to section 4.2 for
         definitions of the specific terminology used in this document.

1.1           Customer Need
    An electronic system for managing a patient’s medications must be able to support the complex
    needs of a wide range of healthcare professions and healthcare settings. A successful display
    solution must therefore balance those complex information needs with safety concerns, and ensure
    consistency across views and between systems.
    Medications Incidents – The National Patient Safety Agency (NPSA) reports that the majority of
    medication incidents reported within the UK between January 2005 and June 2006 related to the
    administration of medicines (59.3 percent), followed by incidents related to the preparation and
    dispensing of medications (17.8 percent) and the prescribing of medications (15.7 percent). Their

                                                                                                                                      Page 1
                                  Design Guidance – Medication Line
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 19 November 2008

                                                                                     1
 findings, documented in Safety in doses: medication safety incidents in the NHS , also state that
 the most common types of medication incidents reported to the NSPA included incorrect dose,
 incorrect strength or frequency, omitted medicine and wrong medicine.
 Existing Systems – In-patient hospital care settings currently use multiple kinds of medications
 documents, both paper-based and electronic. As care professionals move between hospitals and
 are faced with new information groupings while working in stressful environments, the differences
 in the designs of the documents they use may well already impact patient safety. Differences in
 display formats for medicines impact both the review and management of those medications and
 will become a safety concern as electronic systems become more widely available in the next few
 years. The challenge for designers developing electronic systems in this area is particularly great
 as there are no universally-accepted paper-based standards to reference.
 Research in which extensive studies of medication-related errors were reviewed, suggests that the
 most powerful means of preventing medication-related errors are computerised order entry and
 administration management along with standards for processes and for the writing of prescriptions
 (see Medication Errors {R2}, To Err Is Human {R3} and Understanding Patient Safety {R4}).
 Anecdotal references to medication errors most frequently describe problems with legibility of
 handwritten scripts, the use of abbreviations, translation errors in verbal communications and
 mistakes exacerbated by similar looking bottles or product labels and similar looking or similar
 sounding drug names. These well-documented errors focus on specific elements of a medication
 order, as do the means by which we mitigate them. In addition to these specific errors, there is a
 need to ensure that medications orders are more thorough in terms of the information they contain,
 and that they are created, structured, displayed and communicated in a consistent way. Mitigations
 of this kind may also address the specific errors described above, by providing additional
 information in a medication order in a way that leaves less room for misinterpretation.

1.2     Scope
 This guidance has been designed for the display of medications for a single patient in a hospital
 ward environment. The guidance applies to the display of the details of a medication including drug
 name, strength, form, dose, route and frequency. The additional information about medication
 required for safe medication management, review and modification is out of scope.

1.2.1         In Scope
 The guidance in this document covers the following features:
       Line item display rules:
              Generic rules for the display of medication including wrapping, truncation, abbreviation,
               spacing, fonts formatting and labelling

 The following users are covered in this guidance:
       Doctors and other independent prescribers
       Nurses with responsibility for medicines administration
       Pharmacists

 The following care settings are covered in this guidance:
       Inpatient

 1
  NPSA – Safety in doses: medication safety incidents in the NHS {R1}:
 http://www.npsa.nhs.uk/EasySiteWeb/GatewayLink.aspx?alId=5535
                                                                                                    Page 2
                          Design Guidance – Medication Line
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 19 November 2008

 The following medications are covered in this guidance:
     Oral solids and liquids
     Inhalers and sprays
     Eye, ear and nose drops
     Topical liquids
     Creams, ointments and gels
     Enemas and rectal solutions
     Granules and powders
     Suppositories and pessaries
     Topical patches
     Nebuliser solutions
     Simple infusions (by example only)
     Injections (insulin example only)
     Unlicensed medications

1.2.2       Out of Scope
 Although there may be specific risks associated with the out of scope areas that are not addressed
 in this guidance, it is likely that the principles in this guidance will extend to the display of
 medication information in many of the areas listed below.
 The following features are not covered in this guidance:
     The display of all information about a single medication:
             Guidance for the layout and structure for the presentation of ‘all’ information for one
              medication from the selection of a medication anywhere in a clinical application
     Identity of a medication:
             Definition of which attributes can be changed without the need for a new medication line
              to be created (in the UI)

 The following users are not covered in this guidance:
     Other healthcare professionals
     Senior nurse (for ward management and multi-patient tasks)
     Non-clinical staff
     Patient
            Note
            The patient is out of scope because the guidance is designed to support user interfaces used by
            clinicians. As such, it will therefore present information in formats that are designed to support
            healthcare professionals. The display of medication information in views that are designed for
            patients is not addressed in this guidance.

 The following care settings are not covered in this guidance:
     Outpatients
     Clinics

                                                                                                            Page 3
                        Design Guidance – Medication Line
                        Prepared by Microsoft, Version 2.0.0.0
                        Last modified on 19 November 2008

    Pharmacies
    Emergency services and departments
    Intensive Care, High Dependency Unit (HDU)
    Primary care, including General Practice
    Community and home visits

The following types of medications are not covered in this guidance:
    Enteral feeds
    Dressings and devices
    Implants and sticks
    Intrauterine devices (IUDs)
    Cements
    Homeopathic products (including complementary and alternative therapies)
    Dialysis solutions
    Injections (except by specific example)
    Insulin (except by specific example)
    Infusions and fluids (except by specific examples)
    Combination infusions
    Total Parental Nutrition (TPN)
    Gases
    Blood and platelet products
    Radio-pharmacy
    Variable dose medications (by example only)
    Foams
    Radioactive agents
    Regimens and order sets
    Advisory Committee on Borderline Substances (ACBS) products
    Over the counter (OTC) medications
    Recreational drugs
    Medications with titrating doses
    Discharge medications – to take out (TTO)
    Patient’s own drugs (PODs)
    Epidurals and analgesia (and similar patient controlled medications)
    Extemporaneous prescriptions
    Medication prescribed by Patient Group Direction (PGD)
    Medication prescribed by supplementary prescribers

                                                                                 Page 4
                     Design Guidance – Medication Line
                     Prepared by Microsoft, Version 2.0.0.0
                     Last modified on 19 November 2008

 The following are also not covered in this guidance:
       Sealed envelopes
       Decision support
       Knowledge support
       Alerts and warnings
       When a patient is ‘Nil by Mouth’
       Allergies
       Patient preference (for example, for a particular drug form)

1.3      Dependencies
 ID              Dependency
 D1              This guidance is informed by ongoing and unpublished work by the NHS within the UK, which is still evolving and is
                 based on extensive research and consultation. Changes to this work may trigger changes to this guidance, which
                 defines a minimum set of information needed to safely describe a prescribed medication.

 D2              The guidance points in section 3.3.1 are particularly dependent on research into the application of Tallman lettering,
                 as documented by the Institute for Safe Medication Practices (ISMP) in How should Tallman lettering be applied to
                 look-alike/sound-alike drug name pairs?2. In summary, Tallman lettering is a proposed solution for mitigating the risks
                 of ‘look-alike, sound-alike’ drug names. Tallman lettering is mandated in the US and recommended by the World
                 Health Organization (WHO) in Look-Alike Sound-Alike Medication Names3. The uptake of Tallman lettering in
                 electronic prescribing in the UK would require a review of the use of capital letters for differentiating brand names,
                 and is currently the subject of an ongoing research project.

 D3              This guidance uses the concepts ‘generic drug’ and ‘brand name’ and depends on access to, or creation of, a
                 database or dictionary, that can support these concepts.
 Table 2: Dependencies

 2
   The Institute for Safe Medication Practices – Frequently Asked Questions (FAQ) – How should Tallman lettering be applied
 to look-alike/sound-alike drug name pairs? {R5}: http://www.ismp.org/faq.asp#Question_5
 3
  World Health Organization – WHO Collaborating Centre for Patient Safety Releases – Patient Safety Solutions –
 Volume 1, Solution 1 – Look-Alike, Sound-Alike Medication Names {R6}:
 http://www.ccforpatientsafety.org/fpdf/Presskit/PS-Solution1.pdf
                                                                                                                                   Page 5
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

2            GUIDANCE OVERVIEW
    When a medication is prescribed, a series of choices are made about the type of medication and
    the way in which it is to be administered. Assuming that the prescribing and administration of a
    medication is recorded electronically, those choices are then represented in various degrees of
    detail and in different areas of a user interface. For example, a summary of the prescription might
    be displayed in a patient summary, a more detailed set of information might be displayed in a list of
    that patient’s current medications and a different set of detailed information might be displayed in
    an electronic drug administration schedule.
    The details that are displayed on the screen, as well as the formatting and layout applied to them,
    will vary depending on the purpose of the part of the clinical application in which they are being
    displayed. Some views will show medications information in text while others will show some of that
    information encoded visually. A text description of a medication in any of these views is referred to
    in guidance as a ‘medication line’.
    Guidance for two medication views, Design Guidance – Medications List {R9} and Design
    Guidance – Drug Administration {R10}, define specific layout and details for the display of
    medication information in those views. The guidance in this document includes layout and
    formatting details that apply to all views that are designed to support medications management for
    a single patient in a hospital ward.
    It is likely that many of the principles in this guidance will extend to the display of medication
    information in all areas of a clinical application.
    Figure 1 illustrates how the guidance can be applied to four different styles of medication line in
    four notional views:

    Figure 1: Examples of Medication Line Guidance Applied to a Medication Line in Four Notional Views

                                                                                                          Page 6
                                   Design Guidance – Medication Line
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 19 November 2008

2.1     Summary of Guidance
 Detailed guidance and rationale for all guidance points is in sections 3.3.1 to 3.3.13. Refer to
 APPENDIX A for a reference list of all the guidance descriptions. Table 3 provides a summary of
 the guidance.
      Note
      In the Visual Summary column, items highlighted in blue indicate correct usage and those in red indicate
      incorrect usage.

 Reference       Section                             Visual Summary
 MEDi-001        3.3.1 Formatting Drug Names
 MEDi-002        How to use bold, uppercase and
 MEDi-003        lowercase to support recognition
 MEDi-013        of generic versus brand names.

 MEDi-014        3.3.2 Displaying Numbers
 to              How to display numbers
 MEDi-017        including large numbers with
                 many zeros and numbers that
                 use decimal points.

 MEDi-018        3.3.3 Separators
 to              How to use separators to
 MEDi-020        support recognition of chunks of
                 information combined into a text
                 string like a sentence.

 MEDi-010        3.3.4 Wrapping
 MEDi-011        How to determine where to wrap
 MEDi-021        the text in a medication line
 MEDi-008        when horizontal space is limited.

 MEDi-022        3.3.5 Abbreviation
 to              How to handle specific examples
 MEDi-024        of abbreviation and
                 abbreviations that should be
                 avoided.

 MEDi-025        3.3.6 Truncation
 MEDi-012        Specific examples of when it is
 MEDi-054        important to avoid truncation.

 MEDi-026        3.3.7 Symbols
 to              When to use specific symbols
 MEDi-028        and symbols that should be
                 avoided.

                                                                                                         Page 7
                          Design Guidance – Medication Line
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 19 November 2008

Reference          Section                             Visual Summary
MEDi-009           3.3.8 Text Labels
MEDi-029           How and when to use text
to                 labels.
MED-034

MEDi-035           3.3.9 Line Breaks                                                line break
                   Where to place separators when
                                                        paracetamol – tablet
                   hard line breaks are used.
                                                        DOSE 500 mg – oral –
                                                        every 6 hours
                                                                        text wrap

MEDi-036           3.3.10 Line Spacing
MEDi-037           How much space to leave
                   between lines of text.

MEDi-007           3.3.11 Displaying Dose
MEDi-038           How to use labels and text
to                 formatting to support recognition
MEDi-044           of a dose within a medication
                   line.
                   How to display numbers in a
                   dose value.

MEDi-045           3.3.12 Displaying Strength
to                 How to use layout and
MEDi-050           appropriate words to display the
                   strength.
                   How to display numbers in a
                   strength value.

MEDi-051           3.3.13 Attribute Order
to                 The order in which to display the
MEDi-053           chunks of information that make
                   up a medication line.
Table 3: Summary of Guidance

                                                                                                  Page 8
                               Design Guidance – Medication Line
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 19 November 2008

3         GUIDANCE DETAILS

3.1       Introduction
    This section contains detailed guidance for the display of a medication that has been prescribed for
    a single patient.

3.2       Principles
    The following key principles inform the guidance in this section:
        Minimise visual clutter so that formatting and icons are effective for providing emphasis and
         implying priorities: draw attention to important information without introducing too much
         distraction
        Support legibility through the use of font, line spacing, and letter spacing and other proven
         mechanisms
        Define rules to support standard display of medications information wherever possible
         whilst allowing flexibility for information to be displayed appropriately for different tasks

                                                                                                         Page 9
                         Design Guidance – Medication Line
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 19 November 2008

3.3     Guidelines
3.3.1       Formatting Drug Names
                                                                                                                       Evidence
 ID          Description                                                                          Conformance
                                                                                                                        Rating
 MEDi-001    Display generic drug names in bold                                                       Mandatory          Medium

 MEDi-002    Display generic drug names in lowercase (capital letters may still be used for           Mandatory          Medium
             acronyms and abbreviations in some drug names such as amphotericin B, factor VIII,
             carbomer 974P)

 MEDi-003    Display drug brand names in uppercase                                                    Mandatory          Medium

 MEDi-013    Where both the generic name and the brand name appear in a medication line, list         Mandatory          Medium
             the generic name first

 Usage Examples

                                                                        In this correct example, the generic drug name is bold and
                                                                        lowercase and the brand name is uppercase.

                                                                        This example is incorrect because the drug name is in title
                                                                        case but should be in lowercase, the drug name is in a
                                                                        regular font but should be bold and the brand name is in
                                                                        lowercase but should be in uppercase.

                                                                        This example is incorrect because the drug name is in title
                                                                        case but should be in lowercase and the brand name is in
                                                                        title case but should be in uppercase.

                                                                                                    In these five correct examples,
                                                                                                    the generic drug names are in
                                                                                                    bold and lowercase and the
                                                                                                    brand names are uppercase.

                                                                                                                            Page 10
                          Design Guidance – Medication Line
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 19 November 2008

     isosorbide mononitrate – IMDUR – modified-release tablet
     DOSE 60 mg – oral – once a day

     diltiazem – CALCICARD CR – modified-release tablet
     DOSE 120 mg – oral – three times a day
                                                                                                            These three examples are
     INFANRIX-IPV Vaccine – suspension for injection                                                        incorrect because the brand
     DOSE 0.5 mL – intramuscular injection – once only                                                      names Infanrix-IPV, Dioralyte
                                                                                                            and Gaviscon are in bold.
     DIORALYTE blackcurrant – powder for oral solution
     DOSE 1 sachet – oral – once only

     GAVISCON aniseed – suspension
     DOSE 10 to 20 mL – oral – four times a day – after food

Rationale

The differentiation between generic name and brand name supports recognition over recall. By providing a consistent treatment of
generic and brand names respectively, the user will learn to recognise the difference rather than relying on consciously interpreting the
drug names to determine which are which. This design solution is just as effective for a view or list that contains only generic or only
brand name medications. Initially, before the formatting has been learned, it is possible to recognise that the list contains items that
are similar. Once the formatting has been learned, the pattern is familiar and is quickly interpreted as a list of generic or a list of brand
name medications. Therefore a set of search results, for example, can immediately be recognised as containing only brand name or
generic name drugs.
Formatting is applied to the text to retain clarity and simplicity of display. The use of an icon to mark generic names would introduce
visual clutter so formatting of the text is recommended in preference. This also minimises the need to introduce additional elements to
a display.
This guidance is especially important for recognition of generic and brand names when both are listed for a single medication, as
illustrated in the usage examples above.
Formatting conventions for generic and brand names in computer and paper-based systems vary widely. Generic drug names are
generally displayed in lowercase (see Lothian Joint Formulary4) or in sentence case (see the Complete Guide to Prescription and
Nonprescription Drugs {R14}). On the other hand, brand names tend to appear in title case (see The AARP Guide to Pills {R13}),
often with parentheses, and with a trademark symbol (see the Northumberland and North Tyneside Drugs and Therapeutics
Committee Formulary5).
The drug name formatting convention used can vary depending on the context and intended readership. For example, the British
National Formulary (BNF) uses a number of different formatting conventions in its documents including:
      Main British National Formulary6: generic names are in sentence case and brand names in title case
      Product Label List7: generic names are in title case and brand names in title case italics
      Name changes8: generic names are in lowercase
The WHO’s list of International Nonproprietary Names for Pharmaceutical Substances (INN)9 displays generic drug names in
lowercase. A small sample of US formulary lists available online, suggests that they may also follow a convention of generic drug
names in lowercase (see Medica10, Vista Healthplans11 and BlueCross BlueShield of Illinois12).

4
    Lothian Joint Formulary {R11}:http://www.ljf.scot.nhs.uk/downloads/index.html
5
 Northumberland and North Tyneside Drugs and Therapeutics Committee Formulary – Version 1.1 September 2004 {R12}:
http://www.gp-training.net/protocol/therapeutics/formulary_northumberland.pdf
6
    British National Formulary – BNF No. 56 {R15}: http://bnf.org/bnf/bnf/current/104945.htm
7
    British National Formulary – BNF No. 56 – Product Label List {R16}: http://bnf.org/bnf/bnf/current/100159.htm
8
 British National Formulary – BNF No. 56 – BNF Extra – Resources – Name changes {R17}:
http://bnf.org/bnf/extra/56/450049.htm
9
 WHO Drug Information, Vol. 22, No. 1, 2008 – International Nonproprietary Names for Pharmaceutical
Substances (INN) {R18}: http://whqlibdoc.who.int/druginfo/INN_2008_list59.pdf
                                                                                                                                     Page 11
                              Design Guidance – Medication Line
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 19 November 2008

The Draft Guidelines for Safe Electronic Communication of Medication Orders13, ePrescribing Functional Specification14 and
Guidelines for the Design and Presentation of Medication Elements Required in Electronic Prescribing or Medication Ordering
Systems15, have recommendations and guidelines that advise the use of lowercase letters for generic names and uppercase letters for
brand names.
The WHO’s publication Look-Alike, Sound-Alike Medication Names {R6} provides advice on mitigating the risks of look-alike, sound-
alike medication names. Their description of the problem and associated issues includes reference to the potential for confusion
between generic and brand names. Their related suggested action is to:
     “…include both the non-proprietary name and the brand name of the medication on medication orders and labels, with the non-
     proprietary name in proximity to, and in larger font size than the brand name.”
In this document, generic names are shown in bold lowercase and brand names in title case italics.
Guidance is supported by the prevalence of an emerging convention in which generic drug names are displayed in lowercase.
Guidance also follows one of a few commonly used conventions for displaying brand names. It thus aims to introduce consistency and
achieve the benefits described above whilst minimising the impact of potential conflict with existing conventions.

10
  Medica – Over-the-Counter Drug List {R19}:
http://member.medica.com/router/default.pdf?doc=/C15/DrugFormulary/Document%20Library/OTC_Druglist_2007.pdf
11
  Vista Healthplans – Formulary Drug List 2006 {R20}:
http://www.vistahealthplan.com/Static/shared/PDF/Formulary/vista_member_formulary.pdf
12
  BlueCross BlueShield of Illinois – 2008 Blue Cross and Blue Shield of Illinois Drug Formulary {R21}:
http://www.bcbsil.com/rx/pdf/2008_prescription_drug_formulary.pdf
13
  ISMP – ISMP MedicationSafetyAlert! – It’s Time for Standards to Improve Safety with Electronic Communication of
Medication Orders – Draft Guidelines for Safe Electronic Communication of Medication Orders {R22}:
http://www.ismp.org/Newsletters/acutecare/articles/20030220.asp
14
  NHS CFH – ePrescribing Functional Specification {R7}:
http://www.connectingforhealth.nhs.uk/newsroom/news-stories/eprescfunctspec
15
  NHS NPfIT – Guidelines for the Design and Presentation of Medication Elements Required in Electronic Prescribing or
Medication Ordering Systems – NPfIT-EP-DB-0003.01 {R23}:
http://www.dmd.nhs.uk/documentation/item_8_guidelines_for_the_design_and_presentation_of_medication_elements_in_e
p_0.1__2.pdf
                                                                                                                             Page 12
                              Design Guidance – Medication Line
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 19 November 2008

3.3.2       Displaying Numbers
                                                                                                                               Evidence
 ID           Description                                                                                Conformance
                                                                                                                                Rating
 MEDi-014     Where possible, avoid the need for decimal points by changing the units without             Recommended             High
              breaking convention

 MEDi-015     Do not put a trailing zero after a sub-decimal value (that is, ‘0.5’ is correct but           Mandatory             High
              ‘0.50’ is incorrect)

 MEDi-016     Put a leading zero before a decimal point for values of less than one                         Mandatory             High

 MEDi-017     Use a comma to break up numeric values of one thousand and above                              Mandatory             High

 Usage Examples

                                                                                             In this correct example, the dose has been
                                                                                             expressed using familiar units without the
                                                                                             need for a decimal point.

                                                                                             This example is incorrect because the dose
                                                                                             can be reasonably and more correctly
                                                                                             expressed as ‘100 micrograms’, thus avoiding
                                                                                             the need for a decimal point.

                                                                                             In this correct example, the dose is expressed
                                                                                             as an integer.

                                                                                             This example is incorrect because the dose is
                                                                                             expressed as a value that has a trailing zero
                                                                                             after the decimal point.

                                                                                             In this correct example, a leading zero is used
                                                                                             before the decimal point.

                                                                                             This example is incorrect because the dose is
                                                                                             expressed without a leading zero before the
                                                                                             decimal point.

      heparin – 5,000 units per mL –
                                                                                             In this correct example, a comma is used to
      solution for injection – DOSE 5,000 units –
                                                                                             separate the thousands in the dose value.
      subcutaneous injection – once only

      heparin – 5000 units per mL –                                                          This example is incorrect because the dose
      solution for injection – DOSE 5000 units –                                             value is expressed in thousands without a
      subcutaneous injection – once only                                                     comma.

                                                                                                                                    Page 13
                            Design Guidance – Medication Line
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 19 November 2008

Rationale
Numbers containing decimals are a major source of errors and the misinterpretation of a decimal point can lead to errors that may
contribute to the administration of an overdose. When a dose must be described using a decimal point, the presence of trailing zeros
and the absence of leading zeros are associated with errors in the interpretation of the dose (see Medication Errors – Causes,
Prevention, and Risk Management {R2}).
The guidance points above are supported by the Draft Guidelines for Safe Electronic Communication of Medication Orders {R22},
ePrescribing Functional Specification {R7} and Guidelines for the Design and Presentation of Medication Elements Required in
Electronic Prescribing or Medication Ordering Systems {R23}. They are also supported by the findings in Medication Errors – Causes,
Prevention, and Risk Management {R2}.

                                                                                                                              Page 14
                            Design Guidance – Medication Line
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 19 November 2008

3.3.3       Separators
                                                                                                                      Evidence
 ID          Description                                                                         Conformance
                                                                                                                       Rating
 MEDi-018    When combining attributes in a text string, use a long dash (em dash) surrounded       Mandatory           Medium
             by spaces between the attributes

 MEDi-019    Use a double space instead of a long dash or separator between a drug name and       Recommended             Low
             strength when there are multiple drug names in one medication line

 MEDi-020    Use a double space instead of a long dash or separator between a drug name and       Recommended             Low
             strength when the strength is expressed as a percentage

 Usage Examples

                                                                                   In this correct example, there are clear
      paracetamol – 120 mg in 5 mL – suspension –
                                                                                   separators between the attributes and spaces
      DOSE 80 mg – oral – every 6 hours                                            either side of each separator.

                                                                                   This example is incorrect because a ‘/’ has been
                                                                                   used to separate attributes.

                                                                                   This example is incorrect because the long
                                                                                   dashes are not surrounded by spaces.

                                                                                   In this correct example, with multiple drug
                                                                                   names a double space is used between the
                                                                                   drug names and the strengths.

                                                                                   This example is incorrect because there are two
                                                                                   drug names and a long dash has been used
                                                                                   between the drug names and strengths.

   sodium chloride 0.9% – infusion –                                               In this correct example with a strength
                                                                                   expressed as a percentage, the strength is
   VOLUME 1,000 mL – 40 mL per hour –
                                                                                   separated from the drug name by a double
   over 12 hours – intravenous – once only
                                                                                   space.

                                                                                   This example is incorrect because the strength
   sodium chloride – 0.9% – infusion –                                             is expressed as a percentage. It is also
   VOLUME 1,000 mL – 40 mL per hour –                                              incorrect because a long dash has been used to
   over 12 hours – intravenous – once only                                         separate it from the drug name instead of a
                                                                                   double space.

                                                                                                                           Page 15
                          Design Guidance – Medication Line
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 19 November 2008

Rationale
A medication line is a combination of different sets of information that merge into a description that is a hybrid between a list and a
sentence. To maintain the relative visual importance of the information, and minimise the distraction that might be caused by the
introduction of additional words, they are combined by means of a separator. The aim of the separator is to break the description into
meaningful chunks that are easily recognisable as distinct units of information. This use of ‘visual structure’ for presenting information
in a clinical record makes information easier to find (see How to limit clinical errors in interpretation of data {R24} and Helping
Clinicians to find data and avoid delays {R25}).
The long dash is used as a separator because it is does not have a specific grammatical implication that would contradict the way that
it is used here. The long dash is also unlikely to be mistaken for a letter or digit and could be mistaken only as a (slightly shorter)
hyphen.
A space is used either side of the long dash to separate the information into visual chunks and to further mitigate the risk that it is
interpreted as part of the information.

                                                                                                                                     Page 16
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

3.3.4        Wrapping
                                                                                                                                    Evidence
 ID             Description                                                                                  Conformance
                                                                                                                                     Rating
 MEDi-010       When wrapping the text of a medication line, do so without breaking up the                       Mandatory               Low
                contents of a single attribute unless that single attribute will not fit on one line

 MEDi-011       When wrapping the text of a medication line, keep trailing delimiters with the                   Mandatory               Low
                preceding attribute

 MEDi-021       If a long drug name exceeds the available screen space and has to be wrapped,                    Mandatory             Medium
                ensure that the drug name is wrapped between words

 MEDi-008       Do not allow wrapping to separate a label from a value                                           Mandatory               Low

 Usage Examples

                                                                         In this correct example, the details are wrapped correctly. None of
                                                                         the attributes are broken up and the delimiters are at the end of
                                                                         each of the lines and not at the beginning of each of the wrapped
                                                                         lines.

   insulin soluble human – ACTRAPID
   – 100 units per mL – solution for
   injection – DOSE 12 units –                                           This example is incorrect because the attribute ‘solution for
                                                                         injection’ is split between two lines.
   subcutaneous –
   twice a day

   insulin soluble human – ACTRAPID
   – 100 units per mL – solution for                                     This example is incorrect because the word ‘subcutaneous’ has
   injection – DOSE 12 units sub-                                        been hyphenated and split across lines. This example is
                                                                         additionally incorrect because the attribute ‘solution for injection’ is
   cutaneous – twice a day
                                                                         split between two lines.

                                                                         In this correct example, the drug name has been wrapped in a way
                                                                         that preserves phrases within the drug name.

                                                                         This example is incorrect because one letter of the drug name has
                                                                         been wrapped, thus breaking up the phrase ‘type B’.

 Rationale
 If an attribute is too long to fit into the horizontal space allocated, it may be necessary to wrap it. Wrapping information within an
 attribute could lead to misinterpretation if the continuation line is ignored or if the information that has been wrapped onto a new line is
 interpreted as a separate piece of information.

                                                                                                                                          Page 17
                               Design Guidance – Medication Line
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 19 November 2008

3.3.5         Abbreviation
                                                                                                                             Evidence
 ID             Description                                                                            Conformance
                                                                                                                              Rating
 MEDi-022       Do not abbreviate drug names                                                               Mandatory           Medium

 MEDi-023       Use long form names rather than abbreviations or symbols where possible                 Recommended            Medium

 MEDi-024       Do not put a full stop after abbreviations for units (for example mg and mL)               Mandatory           Medium

 Usage Examples

                                                                                  In this correct example, there is no abbreviation of the
                                                                                  drug name.

                                                                                  This example is incorrect because the two drug names
                                                                                  have been abbreviated and because a full stop has
                                                                                  been used after the abbreviation ‘mg’.

                                                                                  This example is incorrect because the drug name has
                                                                                  been abbreviated.

                                                                                  This is a corrected version of the infusion example
                                                                                  above.

 Rationale
 The following organisations have published recommendations and examples of drug name abbreviations that should be avoided
 because they are open to misinterpretation and are potentially a risk to patient safety:
       ISMP – ISMP List of Error-Prone Abbreviations, Symbols and Dose Designations16
       The Joint Commission – National Patient Safety Goals – Goal 2B17
       NHS CFH – ePrescribing Functional Specification {R7}
       NHS NPfIT – Guidelines for the Design and Presentation of Medication Elements Required in Electronic Prescribing or
        Medication Ordering Systems {R23}

 16
   ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations – November 2003, Volume 8, Issue 24 {R26}:
 http://www.usp.org/pdf/EN/patientSafety/ismpAbbreviations.pdf
 17
   The Joint Commission – National Patient Safety Goals – Goal 2B {R27}:
 http://www.jointcommission.org/PatientSafety/NationalPatientSafetyGoals/08_npsg_facts.htm
                                                                                                                                   Page 18
                              Design Guidance – Medication Line
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 19 November 2008

3.3.6        Truncation
                                                                                                                               Evidence
 ID             Description                                                                              Conformance
                                                                                                                                Rating
 MEDi-025       Do not truncate drug names                                                                   Mandatory             High

 MEDi-012       If necessary, wrap but do not truncate medication line information                           Mandatory             Low

 MEDi-054       Do not display a part of the medication line alone if its meaning relies on other            Mandatory             High
                parts that are not displayed

 Usage Examples

                                                                                 In this correct example, the drug details are displayed
                                                                                 without truncation.

                                                                                 This example is incorrect because the information in the
                                                                                 medication line has been truncated instead of wrapped.

 Rationale
 This guidance mitigates risks similar to those for abbreviation. In an electronic system there is often a conflict between the quantity of
 information to be displayed and the space available in which to display it. When space is limited, information is often truncated both
 actively (for example, by restricting the width of space in which information is displayed), and passively (for example, by obscuring
 information through the presentation of a dialog box). The resultant truncation can lead to misinterpretation because the missing
 information is assumed, and also because there is additional information hidden from view (such as a second drug name in a
 multiple-ingredient drug), that might not be anticipated.
 In addition to the drug name, other information taken from a medication line should also never be truncated. Although the exact set of
 information available in a particular context within an electronic system will vary, the chosen information and order in which it is
 presented should be consistent within that context. Truncating that information would re-introduce the risks of misinterpretation and
 mis-selection.

                                                                                                                                     Page 19
                              Design Guidance – Medication Line
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 19 November 2008

3.3.7       Symbols
                                                                                                                              Evidence
 ID          Description                                                                                Conformance
                                                                                                                               Rating
 MEDi-026    Do not use symbols that may be confused with numbers or otherwise                             Mandatory              High
             misinterpreted, including: @ | < > / \ & ° (at sign, vertical bar, greater than bracket,
             less than bracket, forward slash, backslash, ampersand, degree)

 MEDi-027    Use the ‘+’ (plus symbol) only for multiple drug name medications and surround it             Mandatory              High
             with spaces. When a ‘+’ is displayed adjacent to a ‘4’, separate the two with a
             double space

 MEDi-028    Use alternatives such as a dash or a black dot ( ● ) instead of brackets and                  Mandatory              High
             separators such as ( ) [ ] { } that look like the number one

 Usage Examples

   paracetamol 500 mg + metoclopramide 5 mg –
                                                                                            In this correct example, the symbol ‘+’ has
   sachet – oral – DOSE 2 sachets –
                                                                                            been used to combine the two active
   every 4 hours as required –
                                                                                            ingredients (and strengths) of a drug.
   maximum 6 doses in 24 hours

                                                                                            This example is incorrect because the symbol
                                                                                            ‘@’ has been used instead of the word ‘at’.

   co-amoxiclav – 400 mg and 57 mg in 5 mL –
   suspension – oral – DOSE 1.2 mL –                                                        In this correct example, the long dash is the
                                                                                            only symbol that is used.
   every 12 hours

   co-amoxiclav – 400 mg + 57 mg in 5 mL –                                                  This example is incorrect because the ‘+’
   suspension – oral – DOSE 1.2 mL –                                                        symbol has been used to describe the
   every 12 hours                                                                           strength.

                                                                                            This example is incorrect because a forward
                                                                                            slash has been used.

   co-amoxiclav – 400 mg & 57 mg in 5 mL –
   suspension – oral – DOSE 1.2 mL –                                                        This example is incorrect because an
                                                                                            ampersand has been used.
   every 12 hours

                                                                                            This example is incorrect because brackets
                                                                                            have been used.

                                                                                                                                   Page 20
                           Design Guidance – Medication Line
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 19 November 2008

Rationale
The guidance points above include recommendations made by the Draft Guidelines for Safe Electronic Communication of Medication
Orders {R22}, List of Error-Prone Abbreviations, Symbols and Dose Designations {R26} and Guidelines for the Design and
Presentation of Medication Elements Required in Electronic Prescribing or Medication Ordering Systems {R23}.
In addition to the recommendations in these references, symbols such as brackets and the backslash should be avoided because they
can be confused with the digit ‘1’ (number one).

                                                                                                                          Page 21
                           Design Guidance – Medication Line
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 19 November 2008

3.3.8       Text Labels
                                                                                                                               Evidence
 ID          Description                                                                                Conformance
                                                                                                                                Rating
 MEDi-009    Use a different font and colour to differentiate labels from values                            Mandatory              Low

 MEDi-029    When a medication is represented as a single-text sentence, use a label for dose               Mandatory              Low
             only

 MEDi-030    When a medication is represented as a series of lines with hard line breaks, labels            Mandatory              Low
             should appear at the beginning of a new line after a hard line break

 MEDi-031    Use a space to separate a label from a value                                                   Mandatory            Medium

 MEDi-032    Do not use a colon after a label                                                               Mandatory            Medium

 MEDi-033    Display labels in uppercase                                                                  Recommended              Low

 MEDi-034    Keep the number of text labels in a medication represented as a single-text                  Recommended            Medium
             sentence to a minimum

 Usage Examples

   co-amoxiclav – 400 mg and 57 mg in 5 mL –                                       In this correct example, a text label appears before the
   suspension – oral – DOSE 1.2 mL –                                               dose and is formatted differently to distinguish it from
                                                                                   the dose (and other) values. Correct wrapping is also
   every 12 hours
                                                                                   shown in this example.

                                                                                   This example is incorrect because the dose label is
                                                                                   not formatted differently to distinguish it from the dose
                                                                                   (and other) values.

   co-amoxiclav – 400 mg and 57 mg in 5 mL –                                       This example is incorrect because the dose label is
   suspension – oral – DOSE 1.2 mL –                                               not formatted differently to distinguish it from the dose
   every 12 hours                                                                  (and other) values.

                                                                                   This example is incorrect because a colon is used
                                                                                   after the label and there is no space between the label
                                                                                   and the dose value.

                                                                                   In this correct example, the medication is represented
                                                                                   as a single-text sentence without hard line breaks, and
                                                                                   the dose is labelled.

                                                                                   This example is incorrect because more than one label
                                                                                   has been used for a medication that is represented as
                                                                                   a single-text sentence.

                                                                                   In this correct example, the medication is represented
                                                                                   as a series of lines with hard line breaks, and labels
                                                                                   have been used at the beginnings of the lines.

                                                                                                                                     Page 22
                           Design Guidance – Medication Line
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 19 November 2008

                                                                                   This example is incorrect because more than one label
                                                                                   has been used, and the lines following a hard line
                                                                                   break (the last two lines) do not start with text labels.

Rationale
Formatting of medication line text must strike a balance between providing emphasis for important information and maintaining
legibility by keeping ‘visual noise’ to a minimum. ‘Visual noise’ can include icons, fonts, colours and embellishments such as italics,
uppercase and underlining. In their paper, How to limit clinical errors in interpretation of data, {R24}, Wright et al cite the Simmonds
and Reynolds textbook Data presentation and visual literacy in medicine and science {R28} when noting that the advantage in legibility
of type over handwriting can be lost if the writer uses too many different sources of visual noise.
Whilst the use of capital letters is not recommended for blocks of text {R29}, it can be used to further differentiate labels from values. It
is mandated here in order to promote consistency between clinical applications thus discouraging the display of labels using capital
letters in some and lowercase in others.

                                                                                                                                     Page 23
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

3.3.9       Line Breaks
                                                                                                                         Evidence
 ID          Description                                                                          Conformance
                                                                                                                          Rating
 MEDi-035    When using hard line breaks at set points (such as before a dose), do not use a       Recommended               Low
             long dash at the end of the previous line

 Usage Examples

                                                                                 In these three correct examples, dose begins on a
                                                                                 new line so the long dash is omitted from the end
                                                                                 of the previous line.

                                                                                 These three examples are incorrect because the
                                                                                 dose begins on a new line and the previous line
                                                                                 still shows a long dash.

                                                                                 In this correct example, the dose, route and
                                                                                 frequency start on a new line so there are no long
                                                                                 dashes at the ends of the previous lines.

                                                                                 This example is incorrect because the dose, route
                                                                                 and frequency start on a new line and the dashes
                                                                                 are still displayed at the ends of the previous lines.

                                                                                 In this correct example, the strength, dose, route
                                                                                 and frequency start on a new line and the
                                                                                 frequency has wrapped. The long dash is only
                                                                                 used:
                                                                                  Between the drug name and its form
                                                                                  Between the two parts of the frequency
                                                                                   description when the text has to wrap

                                                                                                                              Page 24
                          Design Guidance – Medication Line
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 19 November 2008

                                                                                      This example is incorrect because long dashes
                                                                                      appear at the ends of lines before each of
                                                                                      strength, dose and route, which are configured to
                                                                                      start on a new line.

Rationale
When a medication line is presented as a series of chunks of information joined together into a sentence by separators, it is important
to indicate at the point of wrapping, that there is more information on the next line. This is especially true given that some medications
can be expressed in a single line providing there is enough horizontal space. In some contexts or ‘views’, a medication line may be
presented as a series of chunks that are listed on new lines. This is especially true when that information is presented in a very narrow
horizontal space. When this is the case, the information is not wrapped; it is consistently displayed across a number of lines and there
is no need for the separator (dash) at the end of the line to indicate that information has been wrapped.

                                                                                                                                  Page 25
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

3.3.10       Line Spacing
                                                                                                                             Evidence
 ID             Description                                                                            Conformance
                                                                                                                              Rating
 MEDi-036       When displaying a medication as one or many lines of text, preserve white space          Recommended            Medium
                between the lines by ensuring that the line height is no less than 120% (120%
                leading) and no greater than 140% (140% leading)

 MEDi-037       When displaying a list of medications, ensure that there is a space equivalent to at     Recommended            Medium
                least one line height of 100% between the last line of one medication line and the
                first line of the medication line below

 Usage Examples

                                                                                         In this correct example, the medication line text
                                                                                         has a line height of 120%.

   co-amoxiclav –
   400 mg and 57 mg in 5 mL –                                                            In this correct example, the medication line text
   suspension – oral –                                                                   has a line height of 140%.
   DOSE 1.2 mL – every 12 hours

                                                                                         This example is incorrect because the
                                                                                         medication line text has a line height of 100%.

                                                                                         In this correct example, the medication line text
                                                                                         has a line height of 130% and the space
                                                                                         between the text of one medication line and the
                                                                                         text of the medication line below, is one line
                                                                                         height.

                                                                                         This example is incorrect because the
                                                                                         medication line text has a line height of 100%
                                                                                         (that is, there is too little space between the
                                                                                         lines)

                                                                                         This example is incorrect because the space
                                                                                         between the text of one medication line and the
                                                                                         text of the medication line below is less than
                                                                                         one line height.

 Rationale
 Space between lines has been found to support legibility {R24}. As well as contributing to legibility, guidance mandates a minimum
 space between the lines to mitigate the risk of mis-associating information in one line with the medication in the lines above or below.

                                                                                                                                   Page 26
                              Design Guidance – Medication Line
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 19 November 2008

3.3.11      Displaying Dose
                                                                                                                        Evidence
 ID          Description                                                                          Conformance
                                                                                                                         Rating
 MEDi-007    Provide a text label that reads ‘DOSE’ before a dose                                     Mandatory             Low

 MEDi-038    Display the dose amount and units in bold                                                Mandatory           Medium

 MEDi-039    When a dose is expressed as a volume, display the volume amount in bold                  Mandatory           Medium

 MEDi-040    When there is no dose or volume, display a dose equivalent in place of the dose          Mandatory           Medium
             and subject to the same guidance points as a dose. Precede with an appropriate
             text label

 MEDi-041    Separate the dose amount from the dose units with a space                                Mandatory             High

 MEDi-042    Do not put a trailing zero after a sub-decimal value when displaying a dose amount       Mandatory             High
             (that is, ‘0.5’ is correct but ‘0.50’ is incorrect)

 MEDi-043    Put a leading zero before a decimal point for values of less than one when               Mandatory             High
             displaying a dose value

 MEDi-044    Use a comma to break up numeric values of one thousand and above when                    Mandatory             High
             displaying a dose value

 Usage Examples

                                                                         In this correct example, the dose is preceded with a label
                                                                         and the dose amount (2) and units (mg) are in bold.

                                                                         In this correct example, the dose is preceded with a label
                                                                         and the dose amount (2) and units (sachets) are in bold.

                                                                         This example is incorrect because the dose amount (2)
                                                                         and dose units (mg) are not in bold and because the dose
                                                                         amount (2) has not been separated from the dose units
                                                                         (mg) with a space.

                                                                         This example is incorrect because the dose amount (2) is
                                                                         in bold but the dose units (sachets), is not in bold.

                                                                         In this correct example, the volume amount (1,000) and
                                                                         units (mL) are in bold.

                                                                                                                             Page 27
                          Design Guidance – Medication Line
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 19 November 2008

Rationale
For simple oral solid medications, a medication line is only likely to include numbers where the dose is expressed. The introduction of
the strength into the description of a medication also introduces the risk that the numbers for the dose are mistaken as the numbers for
the strength, and vice versa. The similarity between the way that a strength and dose are expressed (digits and unit measurements) is
also a contributing factor, especially true when the strength value appears before the dose value in a sentence.
Consistently labelling the dose helps to mitigate this risk whilst also providing a strong visual cue for quickly locating the dose within a
medication line. The efficacy of that visual cue is reinforced by using formatting to differentiate the label from the data.
Dose is labelled rather than strength for two reasons. Firstly, it provides a consistent, always-present cue to support quick location of
the dose, and secondly, because the strength is not always displayed. Thus there cannot be consistent placement and visual cue for a
strength label.
The risk that labelling of dose values is considered patronising by users of a clinical system is considered to be mitigated by the patient
safety benefits that can be attributed to clearly marked dose values.
The separation of the dose amount from the dose units with a space is supported by findings in Medication Errors – Causes,
Prevention and Risk Management {R2}.
   Important Note
   The guidance for the display of dose neither includes nor precludes the addition of qualifiers such as ‘0.1 mg per kg’ that may be
   necessary for absolute clarity and as an extra mitigation against incorrectly administered doses in paediatrics.

                                                                                                                                     Page 28
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

3.3.12      Displaying Strength
                                                                                                                             Evidence
 ID          Description                                                                                Conformance
                                                                                                                              Rating
 MEDi-045    When describing strengths with an active ingredient in a fluid, use ‘in’ rather than a        Mandatory           Medium
             forward slash ( ‘/’ ) before the fluid quantity

 MEDi-046    When describing strengths of an ingredient in a single unit of fluid, use the word ‘per’      Mandatory           Medium
             to describe the unit of fluid

 MEDi-047    When describing a strength for a combination drug whose two strength values use               Mandatory             Low
             the same unit (such as mg), use the word ‘and’ in a smaller font to join the two
             strength values and display the units after the second strength value

 MEDi-048    Do not put a trailing zero after a decimal point when displaying numbers in a strength     Recommended              High
             value

 MEDi-049    Put a leading zero before a decimal point for values of less than one when displaying      Recommended              High
             numbers in a strength value

 MEDi-050    Use a comma to break up numeric values of one thousand and above when                      Recommended              High
             displaying numbers in a strength value

 Usage Examples

                                                                                In this correct example, the strength and quantity of
                                                                                fluid are separated by the word ‘in’.

                                                                                This example is incorrect because the strength and
                                                                                quantity are separated by a forward slash ( ‘/’ ).

                                                                                In this correct example, the word ‘per’ is used to
                                                                                separate the strength and unit of fluid.

   insulin soluble human – ACTRAPID –
   100 units / mL – solution for injection –                                    This example is incorrect because the strength is
   DOSE 12 units –                                                              separated from the unit of fluid by a forward slash ( ‘/’.)
   subcutaneous injection – twice a day

   insulin soluble human – ACTRAPID –                                           This example is incorrect because the strength is
   100 units in 1 mL –                                                          described as a quantity in a single unit of fluid and the
   solution for injection – DOSE 12 units –                                     word ‘per’ has not been used to describe the unit of
   subcutaneous injection – twice a day                                         fluid.

                                                                                In this correct example, the strength and quantity of
                                                                                fluid are separated by the word ‘in’ and the two
                                                                                strength values are separated by the word ‘and’.

                                                                                                                                   Page 29
                           Design Guidance – Medication Line
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 19 November 2008

                                                                                   This example is incorrect because the strengths are
                                                                                   separated from the quantity of fluid by a forward slash
                                                                                   ( ‘/’).

                                                                                   This example is incorrect because the word ‘and’ is
                                                                                   the same font size as the rest of the medication line.

                                                                                   In this correct example, the two strength values are
                                                                                   separated by the word ‘and’ which is displayed in a
                                                                                   smaller font.

                                                                                   This example is incorrect because the two ingredients
                                                                                   of the combination drug are listed with the strength
                                                                                   values.

Rationale
In Drug selection errors in relation to medication labels: a simulation study {R30}, Garnerin et al’s findings imply that the very act of
introducing a standard format for strength (in this case for volumes, concentrations and quantities for fluids) improved performance in
relation to selection tasks. The guidance introduces a consistent way of describing strengths that in the short term, can mitigate the
risk of misinterpretation through consistency and in the longer term, supports faster recognition of a strength based on familiarity with
the use of the words ‘per’ and ‘in’, in relation to the place within the order of the medication line attributes.
There are particular risks associated with combination drugs partly because their concatenated name forms (for example co-
amoxiclav) do not clearly indicate the generic names of the active ingredients. The risks are also partly because their strength must be
expressed as a quantity of each of the active ingredients, sometimes within a fluid (for example 400 milligrams of amoxicillin and 57
milligrams of claviculanic acid in 5 millilitres for co-amoxiclav). The guidance introduces a standard way of expressing these strengths
that uses a smaller font. Since the smaller font is not used elsewhere in the medication line, the use of the smaller font ‘and’ signifies a
combination drug.

                                                                                                                                    Page 30
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

3.3.13      Attribute Order
                                                                                                                             Evidence
 ID          Description                                                                              Conformance
                                                                                                                              Rating
 MEDi-051    When describing a medication as a line of text, adhere to the following order for          Recommended               Low
             the display of the medication attributes: drug name, brand name, strength, form,
             dose or volume, rate, dose duration, route, frequency (as applicable)

 MEDi-052    When designing for specific contexts, especially those that need additional text           Recommended               Low
             labels and line breaks, display drug name first and display other attributes (in a
             different order if necessary) from the one defined above

 MEDi-053    When a medication is not displayed as a single line of text and the attributes of a        Recommended               Low
             medication are listed in a different order, use text labels for as many of these
             attributes as possible: strength, form, route and frequency

 Usage Examples

                                                                                   In this correct abstracted example, the names of the
                                                                                   attributes are listed in the correct order.

                                                                                   In this correct example, there is no brand name, and
                                                                                   the remaining attributes appear in the right order.

                                                                                   This example is incorrect because the attributes are
                                                                                   displayed in the wrong order.

                                                                                   This example is incorrect because the attributes are
                                                                                   displayed in the wrong order. This example
                                                                                   illustrates the risks associated with displaying
                                                                                   strength next to dose.

                                                                                   In this correct example, there is no strength, and the
                                                                                   remaining attributes appear in the right order.

                                                                                   In this correct example for a specific context, the
                                                                                   medication line is displayed as multiple rows with
                                                                                   line breaks, and the attributes are displayed in a
                                                                                   different order. This example also shows additional
                                                                                   attributes (maximum 8 puffs in 24 hours).

                                                                                   In this correct abstracted example, the names of the
                                                                                   attributes for the previous usage example
                                                                                   (salbutamol) are listed. Although the list of attributes
                                                                                   is different from that in the first usage example, this
                                                                                   example is still correct because the list adheres to
                                                                                   the correct ordering.

                                                                                                                                   Page 31
                           Design Guidance – Medication Line
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 19 November 2008

Rationale
The primary safety benefit from this guidance is the use of a standard order for attributes when a medication is displayed as a line of
text. The order of attributes adheres to a number of principles that are designed to support current practice, as well as to mitigate
patient safety risks:
    Display generic drug name first
    Display strength next to drug name
    Separate numbers for a strength from numbers for a dose
    Display form next to strength
The Draft Guidelines for Safe Electronic Communication of Medication Orders {R22} recommends that when drug name, strength,
dosage form and dose units appear together, they are listed in the following order: generic name, brand name, strength, dose, dosage
form.
These guidelines recommend a different placement for the dosage form in order to keep the form next to the strength. Form is listed
before dose to reflect the order in which this information is specified during prescribing. Since the form affects dose and frequency, it is
defined earlier in the prescribing process and that priority is retained in the display of the medication when shown as a line of text.
The guidance does not preclude a change in this order for specific views, such as a Drug Administration view, since a change in the
order may be important for supporting the specific tasks associated with that view. It does, however, recommend that these attributes
are labelled whenever they are shown in a different order.

                                                                                                                                    Page 32
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

3.4     Rationale Summary
 This section summarises the principles behind the rationale for all guidance points in this
 document.
 General Principles:
       Provide support for legibility
       Mitigate risks of incorrect selection and mis-interpretation

 Usability Principles:
       Minimise the use of embellishments (for example, bold, colour, fonts, font sizes, italics,
        separators and symbols)
       Minimise instances of each type of embellishment within a reading unit
       Consistent use of specific embellishments within and preferably between user-interface
        contexts or ‘views’
       Use words instead of symbols where it is important for removing ambiguity
 Existing Standards:
       ePrescribing Functional Specification {R7}

       Guidelines for the Design and Presentation of Medication Elements Required in Electronic
        Prescribing or Medication Ordering Systems {R23}

       Draft Guidelines for Safe Electronic Communication of Medication Orders {R22}

 Evolving Standards:
       Types of medication item for display and prescribing within Secondary Care electronic
        systems {R31}

                                                                                                 Page 33
                         Design Guidance – Medication Line
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 19 November 2008

4            DOCUMENT INFORMATION

4.1          Terms and Abbreviations
    Abbreviation                       Definition
    ACBS                               Advisory Committee on Borderline Substances

    AMP                                Actual Medicinal Product

    BNF                                British National Formulary

    CATR                               Clinical Authority to Release

    CSG                                Clinical Safety Group

    CSMS                               Clinical Safety Management System

    CUI                                Common User Interface

    dm+d                               Dictionary of Medicines and Devices

    HDU                                High Dependency Unit

    ISMP                               The Institute for Safe Medication Practices

    IUD                                Intrauterine Device

    NHS                                National Health Service

    NHS CFH                            NHS Connecting for Health

    NPfIT                              National Programme for IT

    NPSA                               National Patient Safety Agency

    OTC                                Over the Counter

    PGD                                Patient Group Direction

    PODs                               Patient’s Own Drugs

    TFN                                Trade Family Name

    TPN                                Total Parental Nutrition

    TTO                                To Take Out

    UI                                 User Interface

    VTM                                Virtual Therapeutic Moiety

    WHO                                World Health Organization
    Table 4: Terms and Abbreviations

                                                                                     Page 34
                                  Design Guidance – Medication Line
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 19 November 2008

4.2         Definitions
 Term                             Definition
 Brand name                       A brand name for a product containing medication. A brand name may be associated with many
                                  products. In some cases, the same brand name may be associated with different generic drugs.
                                  Future versions of the dm+d {R9} are expected to include a separate entity for brand name, known
                                  as Trade Family Name (TFN). In the meantime, the brand name is part of the Actual Medicinal
                                  Product (AMP).
                                     Important Note
                                     This definition is for this document only and may not reflect the definitions that are used in
                                     clinical practice or healthcare organisations.

 Current best practice            Current best practice is used rather than best practice, as over time best practice guidance may
                                  change or be revised due to changes to products, changes in technology, or simply the additional
                                  field deployment experience that comes over time.

 Generic drug name                This can be a single drug name that refers to a single active ingredient or it can be multiple active
                                  ingredients that are prescribed as one drug. In the structure of the dm+d {R9}, this generally
                                  equates to a Virtual Therapeutic Moiety (VTM).
                                     Important Note
                                     This definition is for this document only and may not reflect the definitions that are used in
                                     clinical practice or healthcare organisations.

 Table 5: Definitions

4.3         Nomenclature
 This section shows how to interpret the different styles used in this document to denote various
 types of information.

4.3.1          Body Text
 Text                                                                Style
 Code                                                                Monospace

 Script

 Other markup languages

 Interface dialog names                                              Bold

 Field names

 Controls

 Folder names                                                        Title Case

 File names
 Table 6: Body Text Styles

                                                                                                                                  Page 35
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

4.3.2        Cross References
 Reference                                                           Style
 Current document – sections                                         Section number only

 Current document – figures/tables                                   Caption number only

 Other project documents                                             Italics and possibly a footnote

 Publicly available documents                                        Italics with a footnote

 External Web-based content                                          Italics and a hyperlinked footnote
 Table 7: Cross Reference Styles

4.4       References
 Reference         Document                                                                                        Version
 R1.               NPSA – Safety in doses: medication safety incidents in the NHS                                  2007
                   http://www.npsa.nhs.uk/EasySiteWeb/GatewayLink.aspx?alId=5535

 R2.               Medication Errors – Causes, Prevention, and Risk Management – Cohen M R (Ed) – Jones and        2004
                   Bartlett Publishers

 R3.               To Err is Human – Building a Safer Health System – Kohn L, Corrigan J, Donaldson M –            2000
                   Washington, DC: National Academy Press, 2000

 R4.               Understanding Patient Safety – Wachter R M – The McGraw-Hill Companies, Inc, 2008               2008

 R5.               ISMP – Frequently Asked Questions (FAQ) – How should Tallman lettering be applied to look-      2008
                   alike/sound-alike drug name pairs?
                   http://www.ismp.org/faq.asp#Question_5

 R6.               WHO Collaborating Centre for Patient Safety Releases – Patient Safety Solutions – volume 1,     May 2007
                   solution 1 – Look-Alike, Sound-Alike Medication Names
                   http://www.ccforpatientsafety.org/fpdf/Presskit/PS-Solution1.pdf

 R7.               NHS CFH – ePrescribing Functional Specification                                                 1.0
                   http://www.connectingforhealth.nhs.uk/newsroom/news-stories/eprescfunctspec

 R8.               NHS – dictionary of medicines + devices                                                         Release 2.3
                   http://www.dmd.nhs.uk/

 R9.               Design Guidance – Medications List                                                              3.0.0.0

 R10.              Design Guidance – Drug Administration                                                           2.0.0.0

 R11.              Lothian Joint Formulary                                                                         July 2008
                   http://www.ljf.scot.nhs.uk/downloads/index.html

 R12.              Northumberland and North Tyneside Drugs and Therapeutics Committee – Formulary – Version 1.1 September
                   September 2004                                                                               2004
                   http://www.gp-training.net/protocol/therapeutics/formulary_northumberland.pdf

 R13.              The AARP Guide to Pills – Essential Information on More than 1,200 Prescription & Nonprescription January 2006
                   Medications, Including Generics – AARP, Avord, J, Greider, K

 R14.              Complete Guide to Prescription and Nonprescription Drugs – Griffith H W, Moore S, Boesen, K     August 2007

 R15.              British National Formulary – BNF No. 56                                                         September
                   http://bnf.org/bnf/bnf/current/104945.htm                                                       2008

 R16.              British National Formulary – BNF No. 56 – Product Label List                                    September
                   http://bnf.org/bnf/bnf/current/100159.htm                                                       2008

                                                                                                                             Page 36
                               Design Guidance – Medication Line
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 19 November 2008

Reference        Document                                                                                              Version
R17.             British National Formulary – BNF No. 56 – BNF Extra – Resources – Name changes                        September
                 http://bnf.org/bnf/extra/56/450049.htm                                                                2008

R18.             WHO Drug Information, Vol. 22, No. 1, 2008 – International Nonproprietary Names for                   2008
                 Pharmaceutical Substances (INN)
                 http://whqlibdoc.who.int/druginfo/INN_2008_list59.pdf

R19.             Medica – Over-the-Counter Drug List                                                        01-Aug-2007
                 http://member.medica.com/router/default.pdf?doc=/C15/DrugFormulary/Document%20Library/OTC_
                 Druglist_2007.pdf

R20.             Vista Healthplans – Formulary Drug List 2006                                                          2006
                 http://www.vistahealthplan.com/Static/shared/PDF/Formulary/vista_member_formulary.pdf

R21.             BlueCross BlueShield of Illinois – 2008 Blue Cross and Blue Shield of Illinois Drug Formulary         01-Jul-2008
                 http://www.bcbsil.com/rx/pdf/2008_prescription_drug_formulary.pdf

R22.             ISMP – ISMP MedicationSafetyAlert! – It’s Time for Standards to Improve Safety with Electronic        20-Feb-2003
                 Communication of Medication Orders – Draft Guidelines for Safe Electronic Communication of
                 Medication Orders
                 http://www.ismp.org/Newsletters/acutecare/articles/20030220.asp

R23.             NHS NPfIT – Guidelines for the Design and Presentation of Medication Elements Required in   2005
                 Electronic Prescribing or Medication Ordering Systems – NPfIT-EP-DB-0003.01
                 http://www.dmd.nhs.uk/documentation/item_8_guidelines_for_the_design_and_presentation_of_me
                 dication_elements_in_ep_0.1__2.pdf

R24.             How to limit clinical errors in interpretation of data – Wright P, Jansen C, Wyatt J – Lancet 1998;   1998
                 352: 1539-43

R25.             Helping Clinicians to find data and avoid delays – Nygren E, Wyatt J C, Wright, P – Lancet 1998;      1998
                 352: 1462-66

R26.             ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations – November 2003,               27-Nov-2003
                 Volume 8, Issue 24
                 http://www.usp.org/pdf/EN/patientSafety/ismpAbbreviations.pdf

R27.             The Joint Commission – National Patient Safety Goals – Goal 2B                                        June 2007
                 http://www.jointcommission.org/PatientSafety/NationalPatientSafetyGoals/08_npsg_facts.htm

R28.             Data Presentation & Visual Literacy in Medicine and Science – Simmonds D, Reynolds L – Newton, 1994
                 MA, USA – Butterworth-Heinemann – 1994

R29.             Designing Instructional Text – Hartley J – London, Kogan Page                                         Third Edition,
                                                                                                                       1994

R30.             Drug selection errors in relation to medication labels: a simulation study – Garnerin et al –         2007
                 Anaesthesia 2007, 62, pages 1090-1094

R31.             NHS NPfIT – Types of medication item for display and prescribing within Secondary Care electronic 2008
                 systems – NPfIT-EP-DB-0022.01
Table 8: References

                                                                                                                               Page 37
                             Design Guidance – Medication Line
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 19 November 2008

APPENDIX A                           REFERENCE SUMMARY OF GUIDANCE
 Reference     Section      Description

 MEDi-001 to MEDi-003,
 MEDi-013 Visual Summary:

 MEDi-001      3.3.1        Display generic drug names in bold

 MEDi-002      3.3.1        Display generic drug names in lowercase (capital letters may still be used for acronyms and
                            abbreviations in some drug names such as amphotericin B, factor VIII, carbomer 974P)

 MEDi-003      3.3.1        Display drug brand names in uppercase

 MEDi-013      3.3.1        Where both the generic name and the brand name appear in a medication line, list the generic name
                            first

 MEDi-014 to MEDi-017
 Visual Summary:

 MEDi-014      3.3.2        Where possible, avoid the need for decimal points by changing the units without breaking convention

 MEDi-015      3.3.2        Do not put a trailing zero after a sub-decimal value (that is, ‘0.5’ is correct but ‘0.50’ is incorrect)

 MEDi-016      3.3.2        Put a leading zero before a decimal point for values of less than one

 MEDi-017      3.3.2        Use a comma to break up numeric values of one thousand and above

 MEDi-018 to MEDi-020
 Visual Summary:

 MEDi-018      3.3.3        When combining attributes in a text string, use a long dash (em dash) surrounded by spaces between
                            the attributes

 MEDi-019      3.3.3        Use a double space instead of a long dash or separator between a drug name and strength when
                            there are multiple drug names in one medication line

 MEDi-020      3.3.3        Use a double space instead of a long dash or separator between a drug name and strength when the
                            strength is expressed as a percentage

 MEDi-010, MEDi-011,
 MEDi-021, MEDi-008
 Visual Summary:

 MEDi-010      3.3.4        When wrapping the text of a medication line, do so without breaking up the contents of a single
                            attribute unless that single attribute will not fit on one line

 MEDi-011      3.3.4        When wrapping the text of a medication line, keep trailing delimiters with the preceding attribute

 MEDi-021      3.3.4        If a long drug name exceeds the available screen space and has to be wrapped, ensure that the drug
                            name is wrapped between words

 MEDi-008      3.3.4        Do not allow wrapping to separate a label from a value

                                                                                                                                   Page 38
                         Design Guidance – Medication Line
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 19 November 2008

Reference     Section      Description

MEDi-022 to MEDi-024
Visual Summary:

MEDi-022      3.3.5        Do not abbreviate drug names

MEDi-023      3.3.5        Use long form names rather than abbreviations or symbols where possible

MEDi-024      3.3.5        Do not put a full stop after abbreviations for units (for example, mg and mL)

MEDi-025, MEDi-012
Visual Summary:

MEDi-025      3.3.6        Do not truncate drug names

MEDi-012      3.3.6        If necessary, wrap but do not truncate medication line information

MEDi-054      3.3.6        Do not display a part of the medication line alone if its meaning relies on other parts that are not
                           displayed

MEDi-026 to MEDi-028
Visual Summary:

MEDi-026      3.3.7        Do not use symbols that may be confused with numbers or otherwise misinterpreted, including: @ | <
                           > / \ & ° (at sign, vertical bar, greater than bracket, less than bracket, forward slash, backslash,
                           ampersand, degree)

MEDi-027      3.3.7        Use the ‘+’ (plus symbol) only for multiple drug name medications and surround it with spaces. When a
                           ‘+’ is displayed adjacent to a ‘4’, separate the two with a double space

MEDi-028      3.3.7        Use alternatives such as a dash or a black dot ( ● ) instead of brackets and separators such as ( ) [ ]
                           { } that look like the number one

MEDi-009, MEDi-029 to
MED-034 Visual Summary:

MEDi-009      3.3.8        Use a different font and colour to differentiate labels from values

MEDi-029      3.3.8        When a medication is represented as a single-text sentence, use a label for dose only

MEDi-030      3.3.8        When a medication is represented as a series of lines with hard line breaks, labels should appear at
                           the beginning of a new line after a hard line break

MEDi-031      3.3.8        Use a space to separate a label from a value

MEDi-032      3.3.8        Do not use a colon after a label

MEDi-033      3.3.8        Display labels in uppercase

MEDi-034      3.3.8        Keep the number of text labels in a medication represented as a single-text sentence to a minimum

                                                                                                                              Page 39
                        Design Guidance – Medication Line
                        Prepared by Microsoft, Version 2.0.0.0
                        Last modified on 19 November 2008

Reference     Section      Description

                                                                                             line break
                                                      paracetamol – tablet
MEDi-035 Visual Summary:                              DOSE 500 mg – oral –
                                                      every 6 hours
                                                                      text wrap

MEDi-035      3.3.9        When using hard line breaks at set points (such as before a dose), do not use a long dash at the end
                           of the previous line

MEDi-036, MEDi-037
Visual Summary:

MEDi-036      3.3.10       When displaying a medication as one or many lines of text, preserve white space between the lines by
                           ensuring that the line height is no less than 120% (120% leading) and no greater than 140% (140%
                           leading)

MEDi-037      3.3.10       When displaying a list of medications, ensure that there is a space equivalent to at least one line
                           height of 100% between the last line of one medication line and the first line of the medication line
                           below

MEDi-007, MEDi-038 to
MEDi-044 Visual Summary:

MEDi-007      3.3.11       Provide a text label that reads ‘DOSE’ before a dose

MEDi-038      3.3.11       Display the dose amount and units in bold

MEDi-039      3.3.11       When a dose is expressed as a volume, display the volume amount in bold

MEDi-040      3.3.11       When there is no dose or volume, display a dose equivalent in place of the dose and subject to the
                           same guidance points as a dose. Precede with an appropriate text label

MEDi-041      3.3.11       Separate the dose amount from the dose units with a space

MEDi-042      3.3.11       Do not put a trailing zero after a sub-decimal value when displaying a dose amount (that is, ‘0.5’ is
                           correct but ‘0.50’ is incorrect)

MEDi-043      3.3.11       Put a leading zero before a decimal point for values of less than one when displaying a dose value

MEDi-044      3.3.11       Use a comma to break up numeric values of one thousand and above when displaying a dose value

                                                                                                                             Page 40
                        Design Guidance – Medication Line
                        Prepared by Microsoft, Version 2.0.0.0
                        Last modified on 19 November 2008

Reference        Section        Description

MEDi-045 to MEDi-050
Visual Summary:

MEDi-045         3.3.12         When describing strengths with an active ingredient in a fluid, use ‘in’ rather than a forward slash ( ‘/’ )
                                before the fluid quantity

MEDi-046         3.3.12         When describing strengths of an ingredient in a single unit of fluid, use the word ‘per’ to describe the
                                unit of fluid

MEDi-047         3.3.12         When describing a strength for a combination drug whose two strength values use the same unit (such
                                as mg), use the word ‘and’ in a smaller font to join the two strength values and display the units after
                                the second strength value

MEDi-048         3.3.12         Do not put a trailing zero after a decimal point when displaying numbers in a strength value

MEDi-049         3.3.12         Put a leading zero before a decimal point for values of less than one when displaying numbers in a
                                strength value

MEDi-050         3.3.12         Use a comma to break up numeric values of one thousand and above when displaying numbers in a
                                strength value

MEDi-051 to MEDi-053
Visual Summary:

MEDi-051         3.3.13         When describing a medication as a line of text, adhere to the following order for the display of the
                                medication attributes: drug name, brand name, strength, form, dose or volume, rate, dose duration,
                                route, frequency (as applicable)

MEDi-052         3.3.13         When designing for specific contexts, especially those that need additional text labels and line breaks,
                                display drug name first and display other attributes (in a different order if necessary) from the one
                                defined above

MEDi-053         3.3.13         When a medication is not displayed as a single line of text and the attributes of a medication are listed
                                in a different order, use text labels for as many of these attributes as possible: strength, form, route
                                and frequency
Table 9: Reference Summary of Guidance

                                                                                                                                     Page 41
                            Design Guidance – Medication Line
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 19 November 2008
