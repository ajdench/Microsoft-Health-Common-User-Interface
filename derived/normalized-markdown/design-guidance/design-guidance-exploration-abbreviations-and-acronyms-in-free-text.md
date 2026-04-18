# Design Guidance Exploration -- Abbreviations and Acronyms in Free Text

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance Exploration -- Abbreviations and Acronyms in Free Text.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-exploration-abbreviations-and-acronyms-in-free-text.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance Exploration
Abbreviations and Acronyms in Free Text Input

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
   Design Guidance Exploration – Abbreviations and Acronyms                                                                        1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2008. All rights reserved.

                                    Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 21 May 2008

                         The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

TABLE OF CONTENTS
1    Introduction .................................................................................................................................... 1
    1.1    Design Suggestion.................................................................................................................... 1
    1.2    Design Details ........................................................................................................................... 1
    1.3    Patient Safety ........................................................................................................................... 1

2    Sample Views ................................................................................................................................. 2

3    Accessibility ................................................................................................................................... 3

4    Research ......................................................................................................................................... 4

5    Document Information .................................................................................................................. 5
    5.1    Nomenclature ........................................................................................................................... 5
     5.1.1      Body Text ............................................................................................................................ 5
     5.1.2      Cross References................................................................................................................ 5
    5.2    References ............................................................................................................................... 5

                                 Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

1         INTRODUCTION
    This document acts as APPENDIX C to the document Design Guidance Exploration –
    Abbreviations and Acronyms {R1}, and explores a possible design approach for handling free text
    input in clinical applications. This approach conforms to current practices within safety critical
    systems.

1.1       Design Suggestion
    The suggested design is that, when a user enters free text into a clinical application, the application
    should:
        Alert the user to any unexpanded abbreviations and acronyms
        Avoid restrictions that could cause the user to circumvent the clinical application
        Warn other application users of any remaining unexpanded abbreviations and acronyms
    This design would notify all users about any abbreviation and acronym ambiguities in free text
    input, and prompt them to take appropriate action.

1.2       Design Details
    To conform to this design approach, clinical applications which provide free text input should:
        Alert a user to the presence of unexpanded abbreviations and acronyms in the text input
         after he finishes entering the information but before storing the text
        Offer potential expansions for unexpanded abbreviations and acronyms in a simple fashion
        Insert expansions for abbreviations and acronyms into the text once the user selects the
         correct term
        Avoid errors by not offering default expansions for abbreviations and acronyms, which the
         user could select by accident
        Preserve the flow of user input when offering expansions and alerts. For example, a
         background task could check text on entry but only alert the user to ambiguities when he
         stores the text or moves to the next input field
        Prevent the storage of known dangerous acronyms or abbreviations
        Alert users to the presence of unexpanded abbreviations and acronyms. These alerts make
         users aware of the risk, and prompt them to make an informed decision about the
         interpretation of the unexpanded acronym

1.3       Patient Safety
    Unambiguous presentation of abbreviations and acronyms promotes patient safety by minimising
    the probability of confusion between similar terms. The approach that this document suggests
    significantly enhances patient safety by enabling clinical applications to:
        Display a warning when users enter text containing ambiguous or misleading abbreviations
         or acronyms
        Avoid display of ambiguous or misleading abbreviations and acronyms
        Display a warning when reading text that ambiguous items are present. This warning helps
         the user to avoid acting on an incorrect interpretation of the original author's intent, with
         possible undesirable consequences for the patient

                                                                                                                            Page 1
                            Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                         The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

2           SAMPLE VIEWS
    Figure 1 shows an illustration of the design identified in this document.

    Figure 1: How Unexpanded Abbreviations and Acronyms May Be Handled

        Note
        Figure 1 is only a simple illustration of the design principles; it is not intended to prescribe any particular
        interaction. This design suggestion does not mandate the use of a text box or this highlighting style, nor
        does it specify the interaction for selecting the correct expansion for an abbreviation or acronym.

                                                                                                                               Page 2
                               Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

3         ACCESSIBILITY
    The detailed accessibility considerations for this design guidance depend on the precise design
    adopted to adhere to the advice given. However this design must address several issues:
        The interface that alerts the user to the presence of unexpanded terms and allows users to
         select the next unexpanded term must allow use by screen reader users, and those who
         prefer or require keyboard or other input devices rather than mouse input
        The difference between non-dangerous and dangerous unexpanded terms must be
         apparent to users that cannot distinguish colours

                                                                                                                            Page 3
                            Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

4         RESEARCH
    Freeform patient notes are one of the most common areas of medical record-keeping, and are
    likely to become increasingly computerised over the coming years. This change requires free text
    input handlers in clinical applications that can deal with abbreviations and acronyms.
    The challenge of interpreting shorthand terms is particularly evident in handover scenarios in
    hospitals. In these scenarios, misinterpretation of abbreviations or acronyms can endanger patient
    safety.
    V. Hoban {R2} makes the following observation:
    "When handing over information between colleagues, the avoidance of jargon and explanation of
    abbreviations is essential".
    The British Medical Association’s Junior Doctor's Committee guidance on clinical handover for
    clinicians and managers {R3} echoes this advice. Clinical applications need to address this
    potential hazard and should reduce the possibility of misinterpretation.
    Clinical applications should allow busy clinicians to use abbreviations during note-taking, while
    preventing or mitigating the consequences that could result from the display of abbreviations and
    acronyms which users can misinterpret. Research in safety critical systems by Professor James
    Reason {R4} presents a useful approach to thinking about how such systems work with people in
    those organisations with the best safety records. Professor Reason calls these "High Reliability
    Organisations".
    “High reliability organisations are the prime examples of the system approach. They anticipate the
    worst and equip themselves to deal with it at all levels of the organisation. It is hard, even
    unnatural, for individuals to remain chronically uneasy, so their organisational culture takes on a
    profound significance. Individuals may forget to be afraid, but the culture of a high reliability
    organisation provides them with both the reminders and the tools to help them remember."
    "For these organisations, the pursuit of safety is not so much about preventing isolated failures,
    either human or technical, as about making the system as robust as is practicable in the face of its
    human and operational hazards. High reliability organisations are not immune to adverse events,
    but they have learnt the knack of converting these occasional setbacks into enhanced resilience of
    the system.”
    This observation implies that computerised systems achieve the best safety results when they put
    "reminders and tools" in place which aid the organisational culture in helping clinicians remember
    when to be "afraid" at the right time.
    Thomas Nolan extends this idea {R5} and states that:
    "Although errors cannot be reduced to zero, the aim of the system should be to reduce to zero the
    instances in which an error harms a patient. A safe system has procedures and attributes that
    make errors visible to those working in the system so that they can be corrected before causing
    harm."
    This statement leads to the conclusion that safe handling of abbreviations and acronyms should
    ensure that the application highlights potentially hazardous unexpanded items to the user. Even a
    time pressured user should then be aware of any ambiguity and be able to view possible alternative
    meanings.

                                                                                                                            Page 4
                            Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                           The guidance presented in this document is for community preview and consultation only.
                   Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

5              DOCUMENT INFORMATION

5.1            Nomenclature
    This section shows how to interpret the different styles used in this document to denote various
    types of information.

5.1.1            Body Text
    Text                                                                  Style
    Code                                                                  Monospace

    Script

    Other markup languages

    Interface dialog names                                                Bold

    Field names

    Controls

    Folder names                                                          Title Case

    File names
    Table 1: Body Text Styles

5.1.2            Cross References
    Reference                                                             Style
    Current document – sections                                           Section number only

    Current document – figures/tables                                     Caption number only

    Other project documents                                               Italics and possibly a footnote

    Publicly available documents                                          Italics with a footnote

    External Web-based content                                            Italics and a hyperlinked footnote
    Table 2: Cross Reference Styles

5.2            References
    Reference Document                                                                                                          Version
    R1.               Design Guidance Exploration – Abbreviations and Acronyms                                                  1.0.0.0

    R2.               "How to…handle a handover", Hoban V., The Nursing Times 99(9): 54-5

    R3.               "Safe handover: safe patients. Guidance on clinical handover for clinicians and managers", Junior         x.0.0.0
                      Doctors Committee of the BMA, with the National Patient Safety Agency:
                      http://www.bma.org.uk/ap.nsf/Content/Handover?OpenDocument&Highlight=2,handover

    R4.               "Human error: models and management", James Reason, BMJ 2000;320:768-770
                      http://bmj.bmjjournals.com/cgi/content/full/320/7237/768

    R5.               "System changes to improve patient safety", Thomas W Nolan, BMJ 2000;320:771-773
                      http://bmj.bmjjournals.com/cgi/content/full/320/7237/771
    Table 3: References

                                                                                                                                          Page 5
                                  Design Guidance Exploration – Abbreviations and Acronyms in Free Text Input
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 21 May 2008
