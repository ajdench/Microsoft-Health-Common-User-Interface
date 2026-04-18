# Design Guidance Exploration -- Abbreviations and Acronyms

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance Exploration -- Abbreviations and Acronyms.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-exploration-abbreviations-and-acronyms.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance Exploration
     Abbreviations and Acronyms

                 Wednesday, 21 May 2008
                          Version 2.0.0.0

                             Prepared by

                             The guidance presented in this document is for community preview and consultation only.
                    Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   None

   Documents to be read in conjunction with this document

   Document Title                                                                                                                  Version
   Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input                                                     1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2008. All rights reserved.

                                    Design Guidance Exploration – Abbreviations and Acronyms
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 21 May 2008

                           The guidance presented in this document is for community preview and consultation only.
                  Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

TABLE OF CONTENTS
1    Introduction .................................................................................................................................... 1
    1.1    Summary of Recommendations ............................................................................................... 1
    1.2    Recommendations Requiring Future Research ....................................................................... 1

2    Scope .............................................................................................................................................. 2

3    Guidelines on Abbreviation and Acronym Usage ...................................................................... 3
    3.1    Require the User to Resolve all Known Dangerous Abbreviations and Acronyms .................. 3
     3.1.1       Recommendations .............................................................................................................. 3
     3.1.2       Accessibility ......................................................................................................................... 3
     3.1.3       Justification .......................................................................................................................... 4
     3.1.4       Patient Safety ...................................................................................................................... 4
    3.2    Avoid or Explain Abbreviations and Acronyms ......................................................................... 4
     3.2.1       Recommendations .............................................................................................................. 4
     3.2.2       Examples ............................................................................................................................. 5
     3.2.3       Accessibility ......................................................................................................................... 5
     3.2.4       Justification .......................................................................................................................... 6
     3.2.5       Patient Safety ...................................................................................................................... 6
    3.3    Present Abbreviations and Acronyms Consistently.................................................................. 6
     3.3.1       Recommendations .............................................................................................................. 6

4    Accessibility ................................................................................................................................... 7
     4.1.1       Justification .......................................................................................................................... 7
     4.1.2       Patient Safety ...................................................................................................................... 7

5    Taxonomy of Abbreviation and Acronym Usage ....................................................................... 8

6    Research and Prototyping ............................................................................................................ 9
    6.1    Proposed Primary Research .................................................................................................... 9
     6.1.1       Review of Current Practice in Ambiguity Resolution........................................................... 9
     6.1.2       Review of Proposed Forbidden or Dangerous Abbreviations and Acronyms ..................... 9
     6.1.3       Ensuring Consistency of Approach with Medical Terminology Handling ............................ 9

7    Document Information ................................................................................................................ 10
    7.1    Terms and Abbreviations ........................................................................................................ 10
    7.2    Nomenclature ......................................................................................................................... 10
     7.2.1       Body Text .......................................................................................................................... 10
     7.2.2       Cross References.............................................................................................................. 10
    7.3    References ............................................................................................................................. 11

APPENDIX A             Joint Commission on Accreditation                             of HealthCare Organisations (US) .......... 12

APPENDIX B             Institute of Safe Medical Practice (US) ................................................................... 13

                                  Design Guidance Exploration – Abbreviations and Acronyms
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

1         INTRODUCTION
    This document presents design exploration and early design guidelines for how clinical applications
    should handle abbreviations and acronyms in input and display fields. This design information uses
    principles from reviews of relevant literature, best practices and published glossaries, and draws on
    the current thinking within safety critical systems.
    This document also suggests areas for future research. This research and prototyping would allow
    further validation of some of the early design guidance given.

1.1       Summary of Recommendations
    The design exploration illustrates early recommendations for how clinical applications should
    manage abbreviations and acronyms. Clinical applications should:
        Require the user to resolve known dangerous abbreviations and acronyms, especially when
         a user enters information as free text
        Avoid abbreviations, or provide readily accessible explanations, when displaying labels
         (screen text)
        Present abbreviation punctuation and capitalisation consistently

1.2       Recommendations Requiring Future Research
    Research should be performed to validate these recommendations listed in section 1.1.
    In addition to these, see the document Design Guidance Exploration – Abbreviations and Design
    Guidance Exploration – Acronyms in Free Text Input {R1}.for information on recommendations for
    future research on abbreviations in free text input. In summary, these include:
        The use of an interface to alert the user entering the information, who can then resolve any
         unexpanded abbreviations and acronyms
        The provision of warnings for any remaining unexpanded abbreviations and acronyms
         when users view this information

                                                                                                                            Page 1
                            Design Guidance Exploration – Abbreviations and Acronyms
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                           The guidance presented in this document is for community preview and consultation only.
                  Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

2           SCOPE
    The following figure illustrates the scope of work included in this document, and how it fits into the
    overall field of abbreviations and acronyms:

    Figure 1: Taxonomy of Abbreviations and Acronyms, Showing Scope of Work

    As Figure 1 illustrates, there are some areas that still require the identification of fully-validated
    recommendations for input abbreviations. However, this document presents design guidance for
    display abbreviations, and a specific subset of input abbreviations relating to known dangerous
    abbreviations. Future releases of this document will cover other areas of input abbreviation
    handling. See also the document Design Guidance Exploration – Abbreviations and Acronyms in
    Free Text Input {R1} for further advice on input abbreviations.

                                                                                                                                Page 2
                                 Design Guidance Exploration – Abbreviations and Acronyms
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

3         GUIDELINES ON ABBREVIATION AND ACRONYM USAGE
    This section presents each of the key guidelines on abbreviation and acronym usage that result
    from current research. The key guidelines will:
        Require the user to resolve all known dangerous abbreviations and acronyms
        Avoid, or explain, abbreviations and acronyms
        Present abbreviations and acronyms consistently

3.1       Require the User to Resolve all Known Dangerous
          Abbreviations and Acronyms
    When accepting free text input which includes abbreviations, applications should require the user to
    resolve all known dangerous abbreviations and acronyms.

3.1.1        Recommendations
    Applications which provide free text input, for example for note taking, should:
        Alert the user authoring the text to the presence of known forbidden/dangerous
         abbreviations and acronyms (see below for a definition of these) whenever the author
         moves from one input field to another
        Present potential expansions for selection where possible, but not provide a default
         expansion
        Prevent the storage of known forbidden/dangerous abbreviations and acronyms in their
         unexpanded form under all circumstances
    The current guidance assumes the following definition of a forbidden/known dangerous
    abbreviation or acronym: ‘one which is categorised as such by an appropriate authority’. An
    abbreviation or acronym might be considered dangerous for several equally valid reasons:
        Confusion with another acronym or abbreviation, with potential patient safety consequences
        Relation to drugs, for example, drug names, dose amounts, dose frequencies and so on
        Misinterpretation in some other way which might affect patient safety, or be unsafe for some
         other reason
        It has caused a dangerous incident in the past
    The process of collating and validating the list of forbidden/dangerous acronyms will be an ongoing
    one, and this design guidance does not prescribe how it should be achieved, or by what authority,
    although initial sources for the list are suggested (see section 3.1.3) based on primary and
    secondary research.

3.1.2        Accessibility
    The detailed accessibility considerations for this design guidance will depend on the precise design
    adopted to adhere to the advice given. However, several issues will have to be addressed by any
    design:
        The interaction design for alerting the user to the presence of dangerous unexpanded
         items, and allowing users to select the next dangerous unexpanded item, will have to be
         usable by screen reader users and those who prefer or require keyboard or other input
         devices rather than mouse input
        The interaction design for distinguishing between non-dangerous and dangerous
         unexpanded items will need to use more than colour to do so
                                                                                                                            Page 3
                            Design Guidance Exploration – Abbreviations and Acronyms
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

3.1.3       Justification
 Some forms of abbreviation and acronym are known to be dangerous from specific experiences.
                                                                  1
 The US National Patient Safety Guidelines (NPSG) Goal 2b mandates a list of
 forbidden/dangerous abbreviations which is enforced by the audit of patient notes for all accredited
 institutions. This list is deliberately constrained to those items which have caused incidents in the
 past, and it is therefore beneficial to avoid using the items on it. It is also clearly evidence-based.
 The list is reproduced in APPENDIX A
 It is well recognised that the abbreviation of drug names, dosage amounts, and dose frequency, is
 dangerous. The US Institute for Safe Medication Practices (ISMP) maintains a list of known
 dangerous drug-related abbreviations and acronyms which the NPSG references. This list is
 reproduced in APPENDIX B.
 In addition to these secondary sources, approximately 4500 abbreviations and acronyms, in use
 within the healthcare industry, have been collated and categorised. The data has been analysed for
 collisions between acronym and abbreviation definitions, in particular looking for collisions between
 clinical terms or other items which might cause dangerous misinterpretation. This has revealed
 around 30 potentially dangerous acronyms which are also candidates for inclusion on a list of
 forbidden/dangerous abbreviations and acronyms.

3.1.4       Patient Safety
 Observation of this guideline is critically important to patient safety. If applications do not resolve all
 known dangerous abbreviations and acronyms at input time, then clinicians may:
       Enter text into a clinical application which may be dangerously misleading or ambiguous to
        other application users
       View information in clinical applications containing potentially dangerous abbreviations and
        acronyms
       Receive no warning when reading medical text that potentially dangerous abbreviations and
        acronyms are present, and may act on a mistaken impression of the intent of the author of
        the text, with possible negative consequences for patients
 This confusion could have unintended or hazardous results, for example:
       Patients receiving the wrong drug or an incorrect dosage
       Incorrect patient administration or clinical interaction due to mistaken abbreviations
 APPENDIX A and APPENDIX B provide more details of other possible dangerous conflicts.

3.2     Avoid or Explain Abbreviations and Acronyms
 Applications should avoid abbreviations where possible. If it is not possible to avoid using an
 acronym, the user should have easy access to an explanation of the acronym's meaning.

3.2.1       Recommendations
 Applications which display labels (static text displayed by an application, for example, next to a
 form field to indicate what the field contains (also known as ‘Screen Text’) should:
       Avoid using abbreviations and acronyms wherever possible. This is the preferred approach
       Use abbreviations and acronyms when screen space constraints would lead to horizontal
        scrolling or clipping of the text if the fully expanded form were used instead

 1
   Joint Commission International Center for Patient Safety: NPSG 2B Patient Safety Practices related to Patient Safety Goal
 {R2}: http://www.jcipatientsafety.org/22842/
                                                                                                                            Page 4
                            Design Guidance Exploration – Abbreviations and Acronyms
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                          The guidance presented in this document is for community preview and consultation only.
                Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

       Use abbreviations and acronyms when clear evidence exists that they are universally used
        or accepted in the target context for the application, and are more usable in their contracted
        forms
       Avoid using known dangerous abbreviations and acronyms regardless of screen or other
        constraints
       Provide a method of discovering the local meaning of the abbreviation or acronym where it
        is not possible to avoid use, unless the user explicitly opts not to display this discovery
        method
 Methods for discovering the local meaning of an abbreviation or acronym must be:
       Simple to use
       Quick to use
       Accessible to all users (for example, through a glossary link or other form of user
        assistance)

3.2.2         Examples
 Figure 2 shows several views which conform to the recommendations in this document.
      Note
      These views do not dictate a particular interaction, but merely illustrate interactions which comply with the
      design guidance given.

 Figure 2: Example Views Illustrating Explanation of an Abbreviation

3.2.3         Accessibility
 When providing assistance for expanding abbreviations, applications must expose the explanation
 of the abbreviation in a manner which is accessible to all users, including users of assistive
 technologies such as screen readers, users with limited manual dexterity and users with low vision.

                                                                                                                              Page 5
                                Design Guidance Exploration – Abbreviations and Acronyms
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 21 May 2008

                    The guidance presented in this document is for community preview and consultation only.
            Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

 In particular it is not safe for an application to rely on tooltips alone as a means of providing
 expansions, because:
       They cannot be used by non-mouse users
       It may be difficult for those with low vision to read them since they do not resize with other
        text in a Web context
       Those with limited manual dexterity may find them difficult to access

3.2.4      Justification
 Complexity is a well known source of human error (see, for example, the reference to “Thomas
 Nolan” in System changes to improve patient safety {R4}. In this case, it is clear that more mental
 effort is required for a user to expand an abbreviation or acronym than would be required to read
 the fully expanded form directly. This added effort (increased cognitive load) increases the risk of
 the user making a mistake in using the data presented, and makes mistakes in other activities more
 likely. In addition, in common with other usages, the potential for ambiguity exists whenever
 abbreviations and acronyms are employed.
 However, it will not always be possible to display a fully expanded version of a long label, for
 example, where screen space is at a premium, or the alternative to abbreviation would be
 horizontal scrolling. In these cases, it is important to mitigate the ambiguity risk by providing the
 user with access to the correct expansion.
 Using the expanded form of an abbreviation will not be the best approach when it is clear (for
 example, from the user's context) that they do not benefit from the expansion. This can arise
 because they are very familiar with the abbreviated form and will read and recognise it more quickly
 than the expanded form. In these cases the user's cognitive load and reading time may be
 increased rather than decreased by the presence of the expanded form. When this argument is
 used for including an abbreviation, it must be substantiated by clear evidence of the common
 usage and understanding of the abbreviation in question however.

3.2.5      Patient Safety
 These guidelines are important because if they are not observed:
       Abbreviations and acronyms will be used unnecessarily, adding to the increased cognitive
        load of users and making user errors more likely
       When abbreviations and acronyms do need to be used, users will not be able to determine
        the correct meaning of acronyms they find and may make incorrect assumptions about the
        meaning, leading to error

3.3     Present Abbreviations and Acronyms Consistently
 When displaying abbreviations and acronyms, applications should always present them
 consistently with respect to capitalisation and punctuation.

3.3.1      Recommendations
 Applications which display acronyms or abbreviations should:
       Present all acronyms (phrases reduced to their initial letters only) in UPPERCASE with no
        punctuation marks and no interior spaces, for example, ENT for Ears, Nose and Throat
        rather than E N T, ent or E.N.T.
       Present all abbreviations (phrases truncated to two or more letters of their component
        words) with every word or abbreviated word capitalised, and all truncated words punctuated
        with a full stop and no interior spaces, for example, Tib.Ant. for Tibialis Anterior, rather than
        TibAnt, Tib. Ant. , tibant or tib ant)
                                                                                                                          Page 6
                          Design Guidance Exploration – Abbreviations and Acronyms
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

4         ACCESSIBILITY
    The punctuation convention proposed may cause some difficulty for screen reader users. Some
    screen readers read out the acronym as a phrase, rather than pronouncing its individual letters (for
    example, ENT may be pronounced as the word ‘ent’ rather than as the separate letters E N T). This
    suggests that a punctuated form with separators (E.N.T.) would be more accessible to screen
    reader users. However, any such suggestion needs to be weighed against the consequence of
    introducing an unfamiliar form to non-reader users, and the fact that screen reader users may
    already be very familiar with the ‘word forms’ of common acronyms because of current usage. User
    research should be performed to optimise the recommendation.
    In some circumstances it will be possible to mark the acronym as being an acronym in a machine-
    readable form, allowing assistive technologies, such as readers, to take appropriate action, such as
    reading out the letters individually. In HTML Web applications, this is achieved using the
    ACRONYM or ABBR tags. However, some current readers do not interpret these representations
    correctly, so it is important that any recommendation stands independent of them.

4.1.1        Justification
    Consistent presentation always enhances readability, and reduces the complexity of user
    interactions with the application interface. Reduced complexity enhances the safety of user
    interactions with the application.
    Consistent presentation is particularly important with abbreviations, since the user has to cope with
    the process of expanding the abbreviation. Inconsistent presentation adds another mental hurdle
    and contributes to usage errors, therefore slowing the processing of patient information.
    For these reasons, a set of guidelines for presentation, which is consistent with common usage in
    glossaries found in within sections of the healthcare industry, is being proposed. This common
    usage is derived from observations made during the survey of approximately 4500 abbreviations
    and acronyms in use within the UK healthcare industry. The rationale for following common usage
    is that the forms of presentation used should be familiar to clinicians, and therefore yield the best
    chance of minimising the complexity of the display to the user.

4.1.2        Patient Safety
    These guidelines are important because if they are not observed:
        Abbreviations and acronyms will be presented in many differing forms from application to
         application, adding to the cognitive load of users and making user errors more likely
        Users will be more likely to misinterpret the acronyms or abbreviations if they are not
         presented consistently

                                                                                                                            Page 7
                            Design Guidance Exploration – Abbreviations and Acronyms
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                           The guidance presented in this document is for community preview and consultation only.
                   Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

5             TAXONOMY OF ABBREVIATION AND ACRONYM USAGE
    It is helpful in thinking about abbreviation and acronym usage to organise their potential uses into
    categories for consideration, each of which has its own set of requirements and issues. Table 1
    presents a simple taxonomy for observations in relation to abbreviations and acronyms.

    Major           Sub-Category                   Observations
    Category
    Input           Free Text (for example,        Any text may be entered. Impeding the flow of text input to expand abbreviations will
                    Note Taking)                   dramatically reduce usability.

    Input           Constrained Text (for          Rules can be similar to display of label text. Capable of being much more inherently safe
                    example, drop down             than free text input of the same data with respect to abbreviation risks.
                    boxes and radio button
                    lists)

    Display         Label text                     Often possible to avoid abbreviation altogether, and always possible to provide assistance
                                                   to explain those abbreviations which are necessary.

    Display         User-input text                Reduction of ambiguity hinges on good input validation to remove ambiguity and highlight
                                                   the remaining ambiguous text.

    Special         Drug-related information       Scenarios where this data type is frequently exchanged (for example prescribing) should
                    (for example, units of         be considered for special user interface (UI) treatment to avoid some of the most common
                    measure and dosages)           hazardous abbreviations. However, this sort of data often finds its way into free text notes
                                                   where constraints are more difficult to enforce.
    Table 1: Simple Taxonomy for Observations in Relation to Abbreviations and Acronyms

                                                                                                                                           Page 8
                                  Design Guidance Exploration – Abbreviations and Acronyms
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

6         RESEARCH AND PROTOTYPING
    The design guidance provided in this document is based on current research. However, in some
    cases this research is not sufficient to justify the recommendations completely.
    The potential design approach that the document Design Guidance Exploration – Abbreviations
    and Acronyms in Free Text Input {R1} provides is based on general safety system design
    principles and requires further work to justify.
    The following items of research and prototyping are proposed in order to strengthen the research
                                                                                                   ®
    base for the design advice given. Some of the items can logically be undertaken by Microsoft , but
    others require specialist clinician involvement in their organisation, execution and analysis.

6.1       Proposed Primary Research
    This section details items of primary research. It is expected that they are likely to need specialist
    clinician involvement in their organisation, execution and analysis.

6.1.1        Review of Current Practice in Ambiguity Resolution
    A key tenet of the proposal for free text input is that systems will be made safer if readers of notes
    are provided with information which:
         As far as possible, contain fully expanded renderings of all abbreviations and acronyms
          used
         Contains NO known dangerous abbreviations
         Warns them about the presence of unexpanded abbreviations and acronyms where
          expansion has not been possible
    In order to prove the value of these proposals, particularly the last one, data should be collected on
    how clinicians in different scenarios currently resolve ambiguity which is present in paper medical
    records and notes, for example during handovers. This will show whether a system which can help
    quick recognition of ambiguity would be as helpful as anticipated.

6.1.2        Review of Proposed Forbidden or Dangerous Abbreviations and
             Acronyms
    The same research subject group used to prove the proposals identified in section 6.1.1 could also
    be used to gather data on candidate dangerous/forbidden abbreviations to validate them.
    An ongoing piece of work will be required to update the list, based on any adverse events involving
    abbreviation.

6.1.3        Ensuring Consistency of Approach with Medical Terminology
             Handling
    For many systems, it will be necessary to arrive at an approach for handling the input of notes and
    their transformation into systematic medical terminology (for example, coding for SNOMED-CT)
    which solves the same problem of resolving ambiguous input into unambiguous output. Whatever
    approach is adopted for free text handling regarding abbreviations and acronyms, the approach
    taken for terminology coding must be the same for consistency.

                                                                                                                             Page 9
                             Design Guidance Exploration – Abbreviations and Acronyms
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 21 May 2008

                            The guidance presented in this document is for community preview and consultation only.
                   Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7              DOCUMENT INFORMATION

7.1            Terms and Abbreviations
    Abbreviation                       Definition
    UI                                 User Interface
    Table 2: Terms and Abbreviations

7.2            Nomenclature
    This section shows how to interpret the different styles used in this document to denote various
    types of information.

7.2.1            Body Text
    Text                                                                  Style
    Code                                                                  Monospace

    Script

    Other markup languages

    Interface dialog names                                                Bold

    Field names

    Controls

    Folder names                                                          Title Case

    File names
    Table 3: Body Text Styles

7.2.2            Cross References
    Reference                                                             Style
    Current document – sections                                           Section number only

    Current document – figures/tables                                     Caption number only

    Other project documents                                               Italics and possibly a footnote

    Publicly available documents                                          Italics with a footnote

    External Web-based content                                            Italics and a hyperlinked footnote
    Table 4: Cross Reference Styles

                                                                                                                                Page 10
                                  Design Guidance Exploration – Abbreviations and Acronyms
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7.3       References
 Reference Document                                                                                                         Version
 R1.              Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input                               1.0.0.0

 R2.              Joint Commission International Center for Patient Safety: NPSG 2B Patient Safety Practices related to
                  Patient Safety Goal {R2}:
                  http://www.jcipatientsafety.org/22842//

 R3.              US Institute for Safe Medication Practices Special Issue: "Do Not Use These Dangerous Abbreviations
                  or Dose Designations"
                   http://www.ismp.org/Newsletters/acutecare/articles/20030220_2.asp?ptr=y

 R4.              System changes to improve patient safety, Thomas W Nolan, BMJ 2000;320:771-773 ( 18 March )
                  http://bmj.bmjjournals.com/cgi/content/full/320/7237/771

 R5.              Institute of Safe Medical Practice Website
                  http://www.ismp.org/Newsletters/acutecare/articles/20030220_2.asp
 Table 5: References

                                                                                                                                 Page 11
                             Design Guidance Exploration – Abbreviations and Acronyms
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 21 May 2008

                           The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

APPENDIX A                                      JOINT COMMISSION ON ACCREDITATION
                                                OF HEALTHCARE ORGANISATIONS (US)
 The information given in Table 6 is from the Official "Do Not Use" List from the Joint Commission
 International Center for Patient Safety: NPSG 2B Patient Safety Practices related to Patient Safety
 Goal {R2}.

 Do Not Use                                             Potential Problem                                                   Preferred Term
 U (unit)                                               Mistaken for “0” (zero), the                                        Write "unit"
                                                        number “4” (four) or “cc”

 IU (International Unit)                                Mistaken for IV (intravenous) or the number 10 (ten)                Write "International Unit"

 Q.D., QD, q.d., qd (daily) Q.O.D., QOD, q.o.d,         Mistaken for each other                                             Write "daily"
 qod                                                    Period after the Q mistaken for "I" and the "O" mistaken            Write "every other day"
 (every other day)                                      for "I"

 Trailing zero (X.0 mg)*                                Decimal point is missed                                             Write X mg
 Lack of leading zero (.X mg)                                                                                               Write 0.X mg

 MS                                                     Can mean morphine sulfate or magnesium sulfate                      Write "morphine sulfate"
 MSO4 and MgSO4                                         Confused for one another                                            Write "magnesium
                                                                                                                            sulfate"
 Table 6: Excerpt from the Official "Do Not Use" List

 Table 7 provides additional abbreviations, acronyms and symbols (for possible future inclusion in
 the Official “Do Not Use” List).

 Do Not Use                         Potential Problem                                                 Use Instead
 > (greater than)                   Misinterpreted as the number “7” (seven) or the letter “L” Write “greater than”
 < (less than)                      Confused for one another                                          Write “less than”

 Abbreviations for drug names Misinterpreted due to similar                                           Write drug names in full
                                    abbreviations for
                                    multiple drugs

 Apothecary units                   Unfamiliar to many practitioners                                  Use metric units
                                    Confused with metric units

 @                                  Mistaken for the number                                           Write “at”
                                    “2” (two)

 cc                                 Mistaken for U (units) when                                       Write "ml" or “millilitres”
                                    poorly written

 µg                                 Mistaken for mg (milligrams)                                      Write "mcg" or “micrograms”
                                    resulting in one thousand-fold
                                    overdose
 Table 7: Additional Abbreviations and Acronyms for Possible Future Inclusion in the Official "Do Not Use" List

                                                                                                                                               Page 12
                                 Design Guidance Exploration – Abbreviations and Acronyms
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
                Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

APPENDIX B                                 INSTITUTE OF SAFE MEDICAL PRACTICE
                                           (US)
 The following table of dangerous abbreviations or dose designations is from the Institute of Safe
 Medical Practice Website {Error! Reference source not found.} at:
 http://www.ismp.org/Newsletters/acutecare/articles/20030220_2.asp

 Abbreviation/   Intended Meaning                       Misinterpretation                                      Correction
 Dose Expression
 Apothecary symbols        dram                         Misunderstood or misread (symbol for dram              Use the metric system.
                           minim                        misread for “3” and minim misread as “mL”).

 AU                        aurio uterque (each ear)     Mistaken for OU (oculo uterque—each eye).              Don’t use this abbreviation.

 D/C                       discharge                    Premature discontinuation of medications when          Use “discharge” and
                           discontinue                  D/C (intended to mean “discharge”) has been            “discontinue.”
                                                        misinterpreted as “discontinued” when followed by
                                                        a list of drugs.

 Drug names                                                                                                    Use the complete spelling
                                                                                                               for drug names.

 ARAºA                     vidarabine                   cytarabineARAºC

 AZT                       zidovudine                   azathioprine
                           (RETROVIR)

 CPZ                       COMPAZINE                    chlorpromazine
                           (prochlorperazine)

 DPT                       DEMEROL-                     diphtheria-pertussis-tetanus (vaccine)
                           PHENERGAN-
                           THORAZINE

 HCl                       hydrochloric acid            potassium chloride (The “H” is misinterpreted as
                                                        “K.”)

 HCT                       hydrocortisone               hydrochlorothiazide

 HCTZ                      hydrochlorothiazide          hydrocortisone (seen as HCT250 mg)

 MgSO4                     magnesium sulfate            morphine sulfate

 MSO4                      morphine sulfate             magnesium sulfate

 MTX                       methotrexate                 mitoxantrone

 TAC                       triamcinolone                tetracaine, ADRENALIN,cocaine

 ZnSO4                     zinc sulfate                 morphine sulfate

 Stemmed names

 “Nitro” drip              nitroglycerin infusion       sodium nitroprusside infusion

 “Norflox”                 norfloxacin                  NORFLEX

 mg                        microgram                    Mistaken for “mg” when handwritten.                    Use “mcg.”

 o.d. or OD                once daily                   Misinterpreted as “right eye” (OD—oculus dexter)       Use “daily.”
                                                        and administration of oral medications in the eye.

 TIW or tiw                three times a week.          Mistaken as “three times a day.”                       Don’t use this abbreviation.

 per os                    orally                       The “os” can be mistaken for “left eye.”               Use “PO,” “by mouth,” or

                                                                                                                                   Page 13
                              Design Guidance Exploration – Abbreviations and Acronyms
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                         The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Abbreviation/   Intended Meaning                         Misinterpretation                                         Correction
Dose Expression
                                                                                                                   “orally.”

q.d. or QD                  every day                    Mistaken as q.i.d., especially if the period after the    Use “daily” or “every day.”
                                                         “q” or the tail of the “q” is misunderstood as an “i.”

qn                          nightly or at bedtime        Misinterpreted as “qh” (every hour).                      Use “nightly.”

qhs                         nightly at bedtime           Misread as every hour.                                    Use “nightly.”

q6PM, etc.                  every evening at 6 PM        Misread as every six hours.                               Use 6 PM “nightly.”

q.o.d. or QOD               every other day              Misinterpreted as “q.d.” (daily) or “q.i.d. (four times   Use “every other day.”
                                                         daily) if the “o” is poorly written.

sub q                       subcutaneous                 The “q” has been mistaken for “every” (for       Use “subcut.” or write
                                                         example, one heparin dose ordered “sub q 2 hours “subcutaneous.”
                                                         before surgery” misunderstood as every 2 hours
                                                         before surgery).

SC                          subcutaneous                 Mistaken for SL (sublingual).                             Use “subcut.” or write
                                                                                                                   “subcutaneous.”

U or u                      unit                         Read as a zero (0) or a four (4), causing a 10-fold “Unit” has no acceptable
                                                         overdose or greater (4U seen as “40” or 4u seen as abbreviation. Use “unit.”
                                                         44”).

IU                          international unit           Misread as IV (intravenous).                              Use “units.”

cc                          cubic centimetres            Misread as “U” (units).                                   Use “mL.”

x3d                         for three days               Mistaken for “three doses.”                               Use “for three days.”

BT                          bedtime                      Mistaken as “BID” (twice daily).                          Use “hs.”

ss                          sliding scale (insulin) or ½ Mistaken for “55.”                                        Spell out “sliding scale.”
                            (apothecary)                                                                           Use “one-half” or use “½.”

> and <                     greater than and less than Mistakenly used opposite of intended.                       Use “greater than” or “less
                                                                                                                   than.”

/ (slash mark)              separates two doses or       Misunderstood as the number 1 (“25 unit/10 units”         Do not use a slash mark to
                            indicates “per”              read as “110” units.                                      separate doses.
                                                                                                                   Use “per.”

Name letters and dose Inderal 40 mg                      Misread as Inderal 140 mg.                                Always use space between
numbers run together                                                                                               drug name, dose and unit
(for example, Inderal40                                                                                            of measure.
mg)

Zero after decimal point 1 mg                            Misread as 10 mg if the decimal point is not seen.        Do not use terminal zeros
(1.0)                                                                                                              for doses expressed in
                                                                                                                   whole numbers.

No zero before decimal 0.5 mg                            Misread as 5 mg.                                          Always use zero before a
dose                                                                                                               decimal when the dose is
(.5 mg)                                                                                                            less than a
                                                                                                                   whole unit.
Table 8: Dangerous Abbreviations or Dose Designations

                                                                                                                                         Page 14
                               Design Guidance Exploration – Abbreviations and Acronyms
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008
