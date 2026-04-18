# Design Guidance Exploration -- Alert Symbol Design

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance Exploration -- Alert Symbol Design.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-exploration-alert-symbol-design.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance Exploration
           Alert Symbol Design

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
   Design Guidance Exploration – Icons and Symbology                                                                               1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2008. All rights reserved.

                                    Design Guidance Exploration – Alert Symbol Design
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 21 May 2008

                          The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

TABLE OF CONTENTS
1    Executive Summary ....................................................................................................................... 1
    1.1    Scope ........................................................................................................................................ 1
    1.2    Classification ............................................................................................................................. 1
    1.3    Visual Syntax ............................................................................................................................ 1
    1.4    Warning Signs in Use ............................................................................................................... 1
    1.5    Principles and Recommendations ............................................................................................ 1

2    Introduction .................................................................................................................................... 3
    2.1    Overview ................................................................................................................................... 3
    2.2    Scope of Alert Symbols ............................................................................................................ 3
    2.3    Current Focus of this Document ............................................................................................... 3
    2.4    Considerations and Assumptions ............................................................................................. 4
     2.4.1      Considerations .................................................................................................................... 4
     2.4.2      Assumptions ........................................................................................................................ 4
    2.5    Methodology ............................................................................................................................. 4

3    Classification.................................................................................................................................. 6
    3.1    Alert Signs ................................................................................................................................ 6
     3.1.1      Examples of Messages within the Scope of the Framework .............................................. 7
     3.1.2      Messages Outside of the Scope of the Framework ............................................................ 7
    3.2    Requirements for Systems of Alert Signs ................................................................................. 7

4    Visual Syntax.................................................................................................................................. 8

5    Warning Signs in use .................................................................................................................... 9
    5.1    Observations ............................................................................................................................. 9
     5.1.1      Syntax ................................................................................................................................. 9

6    Recommendations and Principles ............................................................................................. 10
    6.1    Rules for Symbol Design ........................................................................................................ 10
     6.1.1      When to use Symbols ....................................................................................................... 10

7    Current Alert Symbol Recommendations ................................................................................. 11
    7.1    Symbol Construction Recommendations ............................................................................... 11
    7.2    Mandatory Action Symbol ....................................................................................................... 11
     7.2.1      Format ............................................................................................................................... 11
     7.2.2      Recommendation Rationale .............................................................................................. 12
     7.2.3      Key References ................................................................................................................. 12
    7.3    Prohibited Action Symbol ....................................................................................................... 13
     7.3.1      Format ............................................................................................................................... 13
     7.3.2      Recommendation Rationale .............................................................................................. 13
                                 Design Guidance Exploration – Alert Symbol Design
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 21 May 2008

                             The guidance presented in this document is for community preview and consultation only.
                    Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

      7.3.3        Key References ................................................................................................................. 14
     7.4      Warning Symbol ..................................................................................................................... 14
      7.4.1        Format ............................................................................................................................... 14
      7.4.2        Recommendation Rationale .............................................................................................. 15
      7.4.3        Key References ................................................................................................................. 15
      7.4.4        Other Candidates Considered........................................................................................... 16
     7.5      Summary ................................................................................................................................ 16

8     Accessibility Considerations...................................................................................................... 17

9     Next Steps .................................................................................................................................... 18
     9.1      Key Activities .......................................................................................................................... 18
     9.2      User Research ........................................................................................................................ 18
      9.2.1        Primary Research.............................................................................................................. 18
      9.2.2        Cultural Research.............................................................................................................. 18
      9.2.3        Confirmation Research ..................................................................................................... 19

10         Document Information ............................................................................................................. 20
     10.1          Terms and Abbreviations .................................................................................................. 20
     10.2          Definitions .......................................................................................................................... 20
     10.3          Nomenclature .................................................................................................................... 20
      10.3.1          Body Text ...................................................................................................................... 20
      10.3.2          Cross References.......................................................................................................... 21
     10.4          References ........................................................................................................................ 21

APPENDIX A              Definitions.................................................................................................................. 22

APPENDIX B              Alerts and Interactions ............................................................................................. 26

APPENDIX C              Rules for Symbol Design ......................................................................................... 27

                                    Design Guidance Exploration – Alert Symbol Design
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

1         EXECUTIVE SUMMARY

1.1       Scope
    This document explores a framework for describing alert symbols, reviewing existing symbols, and
    making initial recommendations on the design of alert symbols.
    It has been developed prior to a review of the specific needs of clinical applications and their
    developers, and may change following such an investigation. The contents of this document should
    therefore be viewed as early exploration of a complex user interface area of concern and is for
    community preview and consultation.

1.2       Classification
    Alert symbols are classified by:
         Intensity (whether they must be obeyed, or merely offer advice / alerts)
         Polarity (whether they recommend, or deprecate, a course of action)
    This classification allows four classes of alert symbol to be identified:
         Prohibitions
         Mandatory actions
         Warnings
         Suggested actions

1.3       Visual Syntax
    A study of the structure of signs shows that the graphical element associated with an alert is a
    ‘container’ surrounding a symbol or icon.

1.4       Warning Signs in Use
    A review of alert symbols shows a very wide range in use. Some alert symbols are used in
    contradictory cases. Symbols adhering to International Organization for Standardization (ISO)
    standards are, however, among the most commonly used.
    Analysis of these symbols shows that combinations of their shape and tone determine their
    meaning. Colour is used to enhance their meaning.

1.5       Principles and Recommendations
    From a study of the literature surrounding this field, a number of principles of good symbol systems
    have been developed:
         Prohibitions and mandatory actions are at the top of the intensity scale. They have equal
          intensity – the reader is obliged to obey the message. Therefore, intensity should be
          represented separately to polarity (positive / negative)
         The system should have clear rules for setting the number of levels of intensity below this
          maximum
         The system should be able to incorporate alert signs into a more complex message
          structure

                                                                                                                             Page 1
                             Design Guidance Exploration – Alert Symbol Design
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 21 May 2008

                     The guidance presented in this document is for community preview and consultation only.
             Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

A review of how signs are interpreted by readers (see APPENDIX A), has lead to a number of
additional rules for good symbol design:
     Signs should rely on codes which are shared by the recipients
     Signs should be based on codes which are already widely understood and repeated, rather
      than seeking to create new codes
     Sign systems should be as simple as possible to ensure ease of learning
     Signs should be easily distinguishable by target users in the media in which they are
      displayed
     Signs should be easily distinguishable without relying on colour alone to convey their
      meaning
Upon applying these principles to the observations made, it is recommended that the following
symbols are used:

  Prohibited action                 Mandatory action                       Warning

Figure 1: Recommended Symbols

Suggested Action
A symbol for suggested action or information, for example, the speech bubble, does not fit strongly
into the proposed framework and, therefore, has not been included in this guidance as a formal
recommendation. Further investigation needs to be undertaken to establish its suitability.

                                                                                                                           Page 2
                           Design Guidance Exploration – Alert Symbol Design
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

2         INTRODUCTION

2.1       Overview
    Within the user interface, alert symbols are used to influence users’ behaviour by indicating where
    problems (or opportunities) may lie, and what actions either should or should not be attempted.
    Alert symbols are important in providing cues to users for changes in their behaviour. Alert symbols
    that are misinterpreted by users (for instance, suggestions that are taken to be requirements) may
    cause users to suspend their better judgement and endanger patient safety.
    Alert symbols that are deployed inconsistently may cause users to lose confidence in the system
    and ignore potentially important information. Again, this could put patient safety at risk.
    It is important, therefore, that developers have at their disposal a set of symbols that are
    unambiguous and can be deployed in a consistent manner.

2.2       Scope of Alert Symbols
    Symbology is the study, interpretation and use of symbols. The scope of this design exploration
    and early design guidelines is to:
         Establish a detailed understanding of both online and offline symbols that may be
          encountered by clinical audiences
         Understand the fundamental language of symbols
         Determine the role that symbols should play in the overall application framework, and
          understand how other application elements, such as menus and buttons, are used in
          conjunction with symbols to provide a comprehensive set of actions, tools, and features that
          comprise a graphical user interface
         Develop a set of rules for the design, making use of symbols which enhance the speed and
          accuracy with which information is conveyed, in a manner which end users find acceptable

2.3       Current Focus of this Document
    The current focus of this work is to:
         Formulate a framework that provides guidance for symbol construction, use and
          interpretation
         Identify trends in alert symbols in various environments, using this framework
         Propose principles for the design and use of alert symbols
         Apply these principles to the trends to develop recommendations for alert symbol
          construction
         Identify future research requirements for symbols in general, and alert symbols in particular
    The current research focus does not include:
         Symbols that represent specific items within the clinical environment (such as people,
          places, equipment, actions or concepts)
         The application of icons and symbols (representing controls and concepts within software)
         An understanding of how the target audience interprets symbols
         An understanding of the individual needs of developers of specific clinical applications, who
          are designing or deploying alert symbols

                                                                                                                             Page 3
                             Design Guidance Exploration – Alert Symbol Design
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

       Understanding how the clinical environment affects the interpretation of symbols
       User research, or research into artefacts, within the clinical environment, such as physical
        alerts, notices and forms
       Text accompanying alerts and warnings, and informational text

2.4     Considerations and Assumptions
2.4.1         Considerations
 Patient Safety
 Patient safety is the primary concern of this work. Alerts must be clear, accurate, unambiguous,
 and timely. Clinicians need to be able to interpret and act upon alerts with minimal delay, in an
 adaptive unconscious manner. Non-verbal communication is at the heart of the principals stated
 here.

 Existing Clinical Applications
 More research needs to be done to understand how alerts are currently used in clinical
 applications. The contextual use needs to be determined, and an understanding of ‘if’ and ‘when’
 processes should be interrupted using alerts.

2.4.2         Assumptions
       Clinical alerts can be split into the four main classifications of alert (that is, Prohibitions,
        Mandatory actions, Warnings and Suggested actions)
       The four categories (listed above) broadly cover all clinical alert types
       Clinical software alert symbols must be internationally relevant
       Our recommendations do not conflict with current best practice within the healthcare
        industry

2.5     Methodology
 In developing the recommendations within this document, the following steps were followed:
       Review of research performed relating to the classification, interpretation and design of
        symbols in general, and symbols in user interfaces in particular. This involved:
               A review of texts on semiotics (the study of signs and symbols and their meanings)
               A review of books and papers on the use of signs and symbols within user interfaces
               A review of books and papers on warning signs and symbols
               A review of standards and guidelines on warning signs and symbols
       Development of a framework for describing alert symbols, and identifying their
        distinguishing features, using the research specified above. This involved:
               Determining the scope of alert symbols
               Identifying the key characteristics of alert symbols and using these to develop groups
                and shared dimensions
               Developing a system for describing the components of signs and symbols
               Identifying the components of signs and symbols that are unique to alerts, and the
                shared characteristics of those components

                                                                                                                             Page 4
                             Design Guidance Exploration – Alert Symbol Design
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 21 May 2008

               The guidance presented in this document is for community preview and consultation only.
       Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

       Identifying rules and guidelines for the design of good signs and symbols
 Review of existing symbols:
       Identifying alert symbols used in a variety of environments, and deconstructing these
        into their component parts
       Identifying patterns and inconsistencies within the available signs
       Showing how the rules specified in section 1.5 can be applied to existing symbols, in
        order to make recommendations on the design of alert signs

                                                                                                                     Page 5
                     Design Guidance Exploration – Alert Symbol Design
                     Prepared by Microsoft, Version 2.0.0.0
                     Last modified on 21 May 2008

                             The guidance presented in this document is for community preview and consultation only.
                    Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

3            CLASSIFICATION

3.1          Alert Signs
    Alert signs can be classified according to two criteria:
          What is the polarity of the alert sign? Is the alert sign a 'negative' (trying to prevent the
           reader from doing something) or a 'positive' (trying to encourage the reader to do
           something)?
          What is the intensity of the alert sign (from low intensity to high intensity)?
    The zones within this framework are:
          Prohibitions (negative, maximum intensity)
          Mandatory actions (positive, maximum intensity)
          Warnings (negative, mid intensity)
          Suggestions (positive, mid intensity)
          Safe conditions (positive, minimum intensity)

    Figure 2: Framework for Classification of Alert Signs

    In Figure 2 above, 'X' is any item, data or action. 'X' may equally refer to something from the clinical
    domain (for example, a drug) or the system domain (for example, a disk drive).
    The scale of increasing intensity, from zero to maximum, describes the importance of the alert sign
    within the context of the thing to which it is referring. As intensity increases, so does the likelihood
    that the interface will limit the users’ freedom of action.
    The power of this framework is its simplicity – it helps to avoid unnecessary categories of alert, and
    it helps to determine what is and is not an alert.

                                                                                                                                  Page 6
                                    Design Guidance Exploration – Alert Symbol Design
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 21 May 2008

                    The guidance presented in this document is for community preview and consultation only.
            Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

3.1.1      Examples of Messages within the Scope of the Framework
 It is helpful, when considering this framework, to have some examples that illustrate how alerts can
 be classified.
       'Requests for information' are a form of positive alert. 'Omitted' information alerts are a form
        of negative alert. This framework could be used to identify fields in a form where a user is
        required to fill in information (mandatory action). If the user attempts to submit the form
        without completing these fields, their status would change to 'warning' (meaning 'these
        fields may be causing you a problem')
       The framework covers conditional alerts. These are instructions about what readers should
        do under specified circumstances (for example, ‘If patient develops headaches then
        administer aspirin.’). Conditional statements are multi-part: a condition and a response.
        There are two types of alert here: a warning and a mandatory/prohibited/suggested
        response. The trigger here is the warning ('if X…' or 'X may require your attention') – and it
        is the warning that should be displayed
       The framework includes 'limits'. These are a form of prohibition (for example ,'Do not
        exceed specified dose')
       The lowest level of alert (‘positive, zero intensity’) is simply a display of the state of a
        system. Examples of system state include ‘whether or not an action has been initiated’,
        ‘preferences’ and ‘to what level a thermostat has been set’.
 The lowest level of alert – display of the state of a system, is not included in this study. This is
 because it is not considered to be an alert, merely ‘direct information’. Achieving a specific system
 state, or attempting to change the system state may trigger a higher level of alert (for instance ‘are
 you sure you want to empty the wastebasket?’), but the system state (‘wastebasket contains some
 items [but you don’t need to do anything about them for the system to continue to operate
 properly]’) and the alert (‘you will lose data by emptying the wastebasket’) are not the same thing.

3.1.2      Messages Outside of the Scope of the Framework
       There is no alert sign for 'negative, minimum intensity' – this would imply a problem that did
        not require attention. It is possible to imagine such conditions (for example, a piece of
        unused equipment is broken). However, it is impossible to distinguish these examples from
        warnings in any practical circumstance (for example, if the reader is interested in the status
        of the unused equipment, he should be warned that it is broken – so a warning is required
        here).

3.2     Requirements for Systems of Alert Signs
 The framework identifies some important requirements that must be addressed by an alert sign
 system:
       Intensity should be represented separately to polarity (positive / negative)
       Prohibitions and mandatory actions are at the top of the intensity scale. They have equal
        intensity – the reader is obliged to obey the message
       The system should have clear rules for setting the number of levels of intensity below this
        maximum
       The system should be able to incorporate alert signs into a more complex message
        structure

                                                                                                                          Page 7
                          Design Guidance Exploration – Alert Symbol Design
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 21 May 2008

                             The guidance presented in this document is for community preview and consultation only.
                   Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

4            VISUAL SYNTAX
    Alert signs are composed of a number of elements. However, many of these elements are
    supplementary to the alert symbol – they provide context or add detail.
    The dialogue box in Figure 3 shows how the sign can be broken down into component parts.
    Detailed definitions are available in APPENDIX A.

    Figure 3: Elements of an Alert Sign

    This breakdown shows that the primary elements of an alert symbol are the container, which is a
    combination of shape, tones and colours. Different alert symbols use unique combinations of
    shapes, and colours to express their meaning.
    Therefore, there is a syntax of shapes and colours which can be used to express an alert.

                                                                                                                                 Page 8
                                   Design Guidance Exploration – Alert Symbol Design
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 21 May 2008

                             The guidance presented in this document is for community preview and consultation only.
                    Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

5            WARNING SIGNS IN USE

5.1          Observations
5.1.1              Syntax
          The circle is used in prohibitions and mandatory signs – it represents the 'most intense'
           level of signs
                    Intensely negative signs are light circles (with a thick dark border)
                    Intensely positive signs are dark circles (sometimes a thin light border is applied to
                     make the sign stand out from its background)
          Colour is used to emphasise the difference between positive and negative signs, often by
           using a red border for prohibition and a blue fill for mandatory
          The strike-through on the prohibition sign is additional emphasis. The cross usually falls
           from left to right – but can fall from right to left if this helps make the sign clearer. A double
           strike-through is not necessary
          Limits are a special case of prohibition. They are very rare in the signs that were studied –
           though they did occur in road signs (speed limits and rights of way). Here the prohibition
           sign, without a strikethrough was used
          Warnings are most frequently represented by triangles. Often different colours are used to
           distinguish these from prohibitions
          Suggestions do not occur very frequently, except in interactive environments. The speech
           bubble is sometimes used, although sometimes no container is used at all
          The safe condition is expressed primarily by an absence of containers
          Colours are chosen to be accessible – circumstance (red – prohibition, blue – mandatory,
           yellow – warning, white – suggested action/information)

    Figure 4: Alert Syntax

                                                                                                                                  Page 9
                                   Design Guidance Exploration – Alert Symbol Design
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

6         RECOMMENDATIONS AND PRINCIPLES

6.1       Rules for Symbol Design
    The framework outlined in this guidance has led to the identification of a number of rules for good
    symbol design:
        Intensity should be represented separately to polarity (positive / negative)
        Prohibitions and mandatory actions are at the top of the intensity scale. They have equal
         intensity – the reader is obliged to obey the message
        The system should have clear rules for setting the number of levels of intensity below this
         maximum
        The system should be able to incorporate alert signs into a more complex message
         structure
    A review of how signs are interpreted by readers (see APPENDIX C), has led to a number of the
    identification of additional rules for good symbol design:
        Signs should rely on codes which are shared by the recipients
        Signs should be based on codes which are already widely understood and repeated, rather
         than seek to create new codes
        Sign systems should be as simple as possible to ensure ease of learning
        Signs should be easily distinguishable by target users in the media in which they are
         displayed
        Signs should be easily distinguishable without relying on colour alone to convey their
         meaning

6.1.1        When to use Symbols
    APPENDIX C also discusses when symbols should be used:
    If the target audience is familiar with the symbols employed, then symbols can be used to:
        Represent items in the interface that would otherwise take many words to describe
        Draw attention to information (for instance in warnings)
        Communicate to people who may not be able to communicate in written language
        Speed the communication of frequently repeated or important information

                                                                                                                           Page 10
                            Design Guidance Exploration – Alert Symbol Design
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7         CURRENT ALERT SYMBOL RECOMMENDATIONS
    This section recommends the standard for displaying alert and warning symbols within clinical
    applications.
       Note
       In line with the previously mentioned finding (see section 2.4.2), that alert symbols in safety critical
       environments should be based on internationally understood standards, a unique set of alert symbols has
       not been identified.

    In the software world there is poor conformance to guidelines and, where these exist, they borrow
    heavily from real world standards. In the real world, there is a strong stream of conformance to
    robust, internationally accepted standards for alert symbols within safety critical environments
    (such as the European Union (EU) Directive 92/58/EEC {R1}, and American National Standards
    Institute (ANSI) Z535) {R2}.

7.1       Symbol Construction Recommendations
    When making recommendations for alert symbols, all valid shape, colour and modifier
    combinations were considered. For each of these valid symbols, the attributes were compared
    against meaning, usage, international recognition and supporting standards. The recommendations
    are based on the strongest combination of these factors present for any given symbol.
    Three symbol configuration recommendations, based on research undertaken and the prevalence
    of certain symbol compositions, are given:
        Mandatory actions
        Prohibitive actions
        Warnings
    The symbol for suggested action or information (speech bubble) does not fit strongly into the
    framework outlined in this guidance and, therefore, has not been included as a formal
    recommendation, since further investigation needs to be undertaken to establish its suitability.

7.2       Mandatory Action Symbol

7.2.1         Format
    Clinical applications should display mandatory actions as:
        Symbol Shape is a circle
        Symbol Colour is Blue (Red-Green-Blue (RGB) value to be specified)
        Symbol Size is (to be specified)
                                                                                                                           Page 11
                            Design Guidance Exploration – Alert Symbol Design
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                  The guidance presented in this document is for community preview and consultation only.
          Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

     Icon Colour is (to be specified)
     Icon Size is (to be specified)

7.2.2    Recommendation Rationale
     This mandatory symbol configuration is used in international safety signage to indicate a
      mandatory instruction. It has the strongest combination of meaning, usage, international
      recognition and supporting standards
     The shape, a circle, signifies the most intense level of alert sign. The colour, blue,
      determines the polarity of the sign, signifying the sign as positive, mandatory action
     As shown in the observations diagram this shape and colour combination is consistently
      used (by 10 out of the 17 references) to denote a mandatory action
     This shape and colour combination is sighted in the EU Directive 92/58/EEC {R1} as the
      mandatory action symbol which must be used by all twenty five member states
     The harmonisation of the ISO 38643 standard {R3} and the ANSI Z535 standard {R2}
      states mandatory action symbols be displayed as a blue circle
     The sign is visually distinct from the other signs due to colour (no conflicts for colour-
      blindness)
     The sign is visually distinct from the other signs due to tone (works on black and white
      monitors / printouts and mono-chromatic colour blindness)
     The sign does not rely on colour alone to convey its meaning

7.2.3    Key References
     EU Directive 92/58/EEC {R1}
     ANSI (American National Standards Institute) Z535.1-4: Safety Color Code, 1991;
      Environmental and Facility Safety Signs, 1991; Criteria for Safety Symbols, 1991; Product
      Safety Signs and Labels, 1991 {R2}
     Health and Safety Executive (HSE) Regulations 1996 {R4}
     British Standard Institute: BS 5378-2:1980: Safety signs and colours. Specification for
      colormetric and photometric properties of materials {R5}
     International Organization for Standardization: ISO 7010:2003: Graphical symbols – Safety
      colours and safety signs – Safety signs used in workplaces and public areas {R6}
     International Organization for Standardization: ISO 3864-1: 2002: Graphical symbols --
      Safety colours and safety signs -- Part 1: Design principles for safety signs in workplaces
      and public areas {R7}
     International Organization for Standardization: ISO 3864-3:2006: Graphical symbols –
      Safety colours and safety signs – Part 3: Design principles for graphical symbols for use in
      safety signs {R3}
     International Organization for Standardization: ISO 17631:2002: Ships and marine
      technology – Shipboard plans for fire protection, life-saving appliances and means of
      escape {R8}
     The Highway Code (Driving Skills), Driving Standards Agency {R9}
     Traffic Signs Regulations and General Directions 2002: Statutory Instrument 2002 No. 3113
      {R10}

                                                                                                                       Page 12
                        Design Guidance Exploration – Alert Symbol Design
                        Prepared by Microsoft, Version 2.0.0.0
                        Last modified on 21 May 2008

                    The guidance presented in this document is for community preview and consultation only.
            Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7.3     Prohibited Action Symbol

7.3.1      Format
 Clinical applications should display mandatory actions as:
       Symbol Shape is a circle
       Symbol Colour is white
       Symbol Border and Diagonal line is red (RGB value to be specified)
       Symbol Size is (to be specified)
       Icon Colour is (to be specified)
       Icon Size is (to be specified)

7.3.2      Recommendation Rationale
       This prohibition symbol configuration is used in international safety signage to indicate a
        prohibitive instruction. It has the strongest combination of meaning, usage, international
        recognition and supporting standards
       The shape, a circle, signifies the most intense level of alert sign. The colour, red,
        determines the polarity of the sign, signifying the sign as a negative, prohibited action
       As shown in the observations diagram, this shape and colour combination is consistently
        used (by 10 out of the 17 references) to denote a prohibited action
       This shape and colour combination is cited in the EU Directive 92/58/EEC {R1} as the
        prohibited action symbol which must be used by all twenty five member states
       The harmonisation of the ISO 3864-3:2006 standard {R3} and the ANSI Z535.1-4
        standards {R2} states that prohibited action symbols be displayed as a white circle with a
        red border, and diagonal line running from the top left to the bottom right of the circle
       The sign is visually distinct from the other signs due to the border and diagonal line colour
        (no conflicts for colour-blindness)
       The sign is visually distinct from the other signs due to tone (works on black and white
        monitors / print-outs and mono-chromatic colour blindness)
       The sign does not rely on colour alone to convey its meaning

                                                                                                                         Page 13
                          Design Guidance Exploration – Alert Symbol Design
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 21 May 2008

                     The guidance presented in this document is for community preview and consultation only.
             Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7.3.3      Key References
       European Union Directive 92/58/EEC {R1}
       ANSI (American National Standards Institute) Z535.1-4: Safety Color Code, 1991;
        Environmental and Facility Safety Signs, 1991; Criteria for Safety Symbols, 1991; Product
        Safety Signs and Labels, 1991 {R2}
       Health and Safety Executive (HSE) Regulations 1996 {R4}
       British Standard Institute: BS 5378-2:1980: Safety signs and colours. Specification for
        colormetric and photometric properties of materials {R5}
       International Organization for Standardization: ISO 7010:2003: Graphical symbols – Safety
        colours and safety signs – Safety signs used in workplaces and public areas {R6}
       International Organization for Standardization: ISO 3864-1: 2002: Graphical symbols --
        Safety colours and safety signs -- Part 1: Design principles for safety signs in workplaces
        and public areas {R7}
       International Organization for Standardization: ISO 3864-3:2006: Graphical symbols –
        Safety colours and safety signs – Part 3: Design principles for graphical symbols for use in
        safety signs {R3}
       International Organization for Standardization: ISO 17631:2002: Ships and marine
        technology – Shipboard plans for fire protection, life-saving appliances and means of
        escape {R8}
       The Highway Code (Driving Skills), Driving Standards Agency {R9}
          Traffic Signs Regulations and General Directions 2002: Statutory Instrument 2002 No.
          3113 {R10}

7.4       Warning Symbol

7.4.1      Format
        Clinical applications should display warnings as:
       Symbol Shape is a triangle
       Symbol Colour is Yellow (RGB value to be specified)
       Border Colour is black (RGB value 0,0,0)
       Symbol Size is (to be specified)
       Icon Colour is (to be specified)
       Icon Size is (to be specified)
                                                                                                                          Page 14
                           Design Guidance Exploration – Alert Symbol Design
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 21 May 2008

                   The guidance presented in this document is for community preview and consultation only.
           Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7.4.2    Recommendation Rationale
     This symbol configuration is used in international safety signage to indicate a warning. It
      has the strongest combination of meaning, usage, international recognition and supporting
      standards
     The shape, a triangle, signifies a medium intensity level of alert sign. The colour, yellow,
      determines the polarity of the sign, signifying the sign as negative warning
     As shown in the observations diagram this shape and colour combination is consistently
      used (by 10 out of the 17 references) to denote a mandatory action
     This shape and colour combination is sighted in the EU Directive 92/58/EEC {R1} as the
      warning symbol which must be used by all twenty five member states
     The harmonisation of the ISO 3864-3:2006 standard {R3} and the ANSI Z535.1-4 standard
      {R2} states warning symbols be displayed as a yellow triangle
     The sign is visually distinct from the other signs in this set due to colour (no conflicts for
      colour-blindness)
     Does not rely on colour alone to convey its meaning

7.4.3    Key References
     European Union Directive 92/58/EEC {R1}
     ANSI (American National Standards Institute) Z535.1-4: Safety Color Code, 1991;
      Environmental and Facility Safety Signs, 1991; Criteria for Safety Symbols, 1991; Product
      Safety Signs and Labels, 1991 {R2}
     Health and Safety Executive (HSE) Regulations 1996 {R4}
     British Standard Institute: BS 5378-2:1980: Safety signs and colours. Specification for
      colormetric and photometric properties of materials {R5}
     International Organization for Standardization: ISO 7010:2003: Graphical symbols – Safety
      colours and safety signs – Safety signs used in workplaces and public areas {R6}
     International Organization for Standardization: ISO 3864-1: 2002: Graphical symbols --
      Safety colours and safety signs -- Part 1: Design principles for safety signs in workplaces
      and public areas {R7}
     International Organization for Standardization: ISO 3864-3:2006: Graphical symbols –
      Safety colours and safety signs – Part 3: Design principles for graphical symbols for use in
      safety signs {R3}
     International Organization for Standardization: ISO 17631:2002: Ships and marine
      technology – Shipboard plans for fire protection, life-saving appliances and means of
      escape {R8}
     The Highway Code (Driving Skills), Driving Standards Agency {R9}
        Traffic Signs Regulations and General Directions 2002: Statutory Instrument 2002 No.
        3113 {R10}
     Microsoft Windows Vista User Experience Guidelines (last updated August 28, 2007) {R11}

                                                                                                                        Page 15
                         Design Guidance Exploration – Alert Symbol Design
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
                Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

7.4.4          Other Candidates Considered
 Alert Symbol Type                           Candidates                 Dismissal Rationale
 Warning                                                                This symbol is used in international road signs to denote a
                                                                        warning, however it has no other context of use. Although its
                                                                        shape is similar to Chemical Hazard Warning signs, it is not used
                                                                        to present the same complex meaning.

 Mandatory Action                                                       Although the octagonal STOP sign is unique, it represents only
                                                                        one specific meaning. If used at low resolution or small size, it
                                                                        might be mistaken for a circular shape. This sign could also be
                                                                        considered a prohibitive symbol in terms of classification. This
                                                                        symbol is only cited in Road Traffic regulations.

 Prohibitive Action                                                     Although this symbol configuration is very similar to the one
                                                                        recommended, without the crucial diagonal line modifier, its
                                                                        meaning is somewhat diluted and may even make it ambiguous
                                                                        in some cases. This symbol is only cited in Road Traffic
                                                                        regulations.

 Information                                                            Real world information is presented in a rectangular container.
                                                                        This shape is problematic in the real world as it is used to contain
                                                                        the information icon (as a logogram), directional information,
                                                                        explanatory text and modifier text, mandatory signs, and
                                                                        prohibitive signs. This shape is problematic in the software world
                                                                        as it is used to contain application icons in toolbars and it bounds
                                                                        alert messages.
 Table 1: Alert Symbol Candidates

7.5        Summary
       The three categories of alerts symbols were split by the intensity of their meaning and the
        polarity between their positive and negative message
       Alert symbols used in the non-clinical, off-line world have strong supporting international
        standards and are used extensively across industries
       Alert symbols in the software world borrow heavily from real world examples, however there
        is little adherence to the few guidelines that exist for software alerts
       Combinations of colour and shape have significant meaning for alert symbols in safety
        critical environments and are supported by international standards
       The recommendations given in this guidance for key alert symbol classifications are based
        on the framework that was developed from research and analysis
       The context of alert symbols is derived from additional elements in an alert, such as icons,
        text and other modifiers
       Research performed to date has not included a detailed review of symbols in use in clinical
        applications. Future rounds of research will cover this area

                                                                                                                                    Page 16
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

8         ACCESSIBILITY CONSIDERATIONS
    The following considerations for accessibility should be applied to any implementation of alerts and
    icons:
        Appropriate text equivalents for all images must be provided, for example by the use of ‘alt
         text’ in Web applications. The text should be functional and not a literal description of the
         design of the image. For icons, the text should provide the function of the icon (for example,
         ‘save’ not ‘disk’). For alerts, the text should describe the detail of the alert (for example,
         ‘warning: above recommended dosage’ not ‘red…’)
        Colour must not be the only way of differentiating between symbols
        Flashing in the 2-59 Hertz (Hz) range must be avoided
        Alerts and icons (and their equivalent text) should be used consistently across the whole
         application

                                                                                                                           Page 17
                            Design Guidance Exploration – Alert Symbol Design
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                      The guidance presented in this document is for community preview and consultation only.
              Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

9         NEXT STEPS

9.1       Key Activities
        Understand the effect of clinical environments on the interpretation of alert symbols
        Understand how end users interpret alert symbols
        Establish rules for when an item is a critical alert and when it is a warning
        Begin research on application icons
        Begin research on buttons
        Begin research on clinical icons within alert symbols
        Research standards and guidelines for application icons
        Review icons currently used in clinical applications
        Build detailed clinical scenarios for hypothesis testing
        Explore clinical environment (detailed in section 9.2 below)

9.2       User Research
    Some broad secondary research has been conducted into cultural observations, ISO standards
    and software platform guidelines. Of these areas, the greatest degree of confusion and non-
    conformity regarding the implementation of alerts and the use of icons is to be found in the software
    platform guidelines. For this reason it is necessary to conduct more extensive user research,
    especially within the clinical environment, to establish how users interpret icons and how alerts
    might best be constructed to support their working practices and ensure safety without being over
    intrusive or cumbersome.

9.2.1        Primary Research
        Observational research
        Research within clinical environments
        How clinicians currently use notes to attract attention or denote importance
        Research within other non-clinical environments where safety is an important factor, for
         example, the power industry, airlines, armed forces, car manufacturers (designing safety
         warning features in vehicles)
        Interview-based research
        Interview people who train for safety
        Interview clinicians in a safety critical environment or process
        Interview people who teach clinicians

9.2.2        Cultural Research
        Studying alerts and icons in different software environments, for example, in games where
         there is high emotional engagement (including the perception of danger) and a lot of
         instructions to follow
        Warnings, icons and information architecture on packaging and labels (for example, non-
         prescription drug packaging, online health sites for special groups, such as diabetics)

                                                                                                                           Page 18
                            Design Guidance Exploration – Alert Symbol Design
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 21 May 2008

                  The guidance presented in this document is for community preview and consultation only.
          Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

9.2.3    Confirmation Research
     Survey-based research directed at specific clinician groups (helps to support primary
      research findings)
     Survey questionnaire for symbols and icons
     Building journals of daily interaction with warnings in clinical environment
     Informal usability testing on early paper prototypes

                                                                                                                       Page 19
                        Design Guidance Exploration – Alert Symbol Design
                        Prepared by Microsoft, Version 2.0.0.0
                        Last modified on 21 May 2008

                         The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

10          DOCUMENT INFORMATION

10.1 Terms and Abbreviations
 Abbreviation                       Definition
 ANSI                               American National Standards Institute

 BS                                 British Standards

 BSI                                British Standards Institute

 EEC                                European Economic Centre

 EU                                 European Union

 HSE                                Health and Safety Executive

 Hz                                 Hertz

 ISO                                International Organization for Standardization

 NCEC                               National Chemical Emergency Centre

 RGB                                Red-Green-Blue

 SP2                                Service Pack 2
 Table 2: Terms and Abbreviations

10.2 Definitions
 Term                                Definition
 Current best practice               Current best practice is used rather than best practice, as over time best practice guidance may
                                     change or be revised due to changes to products, changes in technology, or simply the additional
                                     field deployment experience that comes over time.
 Table 3: Definitions

10.3 Nomenclature
 This section shows how to interpret the different styles used in this document to denote various
 types of information.

10.3.1         Body Text
 Text                                                                   Style
 Code                                                                   Monospace

 Script

 Other markup languages

 Interface dialog names                                                 Bold

 Field names

 Controls

 Folder names                                                           Title Case

 File names
 Table 4: Body Text Styles

                                                                                                                                Page 20
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
                Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

10.3.2       Cross References
 Reference                                                             Style
 Current document – sections                                           Section number only

 Current document – figures/tables                                     Caption number only

 Other project documents                                               Italics and possibly a footnote

 Publicly available documents                                          Italics with a footnote

 External Web-based content                                            Italics and a hyperlinked footnote
 Table 5: Cross Reference Styles

10.4 References
 Reference Document                                                                                                          Version
 R1.              European Union Directive 92/58/EEC

 R2.              ANSI (American National Standards Institute) Z535.1-4: Safety Color Code, 1991; Environmental and
                  Facility Safety Signs, 1991; Criteria for Safety Symbols, 1991; Product Safety Signs and Labels, 1991

 R3.              International Organization for Standardization: ISO 3864-3:2006: Graphical symbols – Safety colours
                  and safety signs – Part 3: Design principles for graphical symbols for use in safety signs

 R4.              Health and Safety Executive (HSE) Regulations 1996

 R5.              British Standard Institute: BS 5378-2:1980: Safety signs and colours. Specification for colormetric and
                  photometric properties of materials

 R6.              International Organization for Standardization: ISO 7010:2003: Graphical symbols – Safety colours
                  and safety signs – Safety signs used in workplaces and public areas

 R7.              International Organization for Standardization: ISO 3864-1: 2002: Graphical symbols – Safety colours
                  and safety signs – Part 1: Design principles for safety signs in workplaces and public areas

 R8.              International Organization for Standardization: ISO 17631:2002: Ships and marine technology –
                  Shipboard plans for fire protection, life-saving appliances and means of escape

 R9.              The Highway Code (Driving Skills), Driving Standards Agency

 R10.             Traffic Signs Regulations and General Directions 2002: Statutory Instrument 2002 No. 3113

 R11.             Microsoft Windows Vista User Experience Guidelines (last updated August 28, 2007)

 R12.             CCMS – Communication, Cultural and Media Studies
                  http://www.cultsock.ndirect.co.uk/MUHome/cshtml/index.html

 R13.             Emergency Action Codes (Hazchem Codes), National Chemical Emergency Centre (NCEC)
                  http://the-ncec.com/hazchem/

 R14.             Manual on Uniform Traffic Control Devices, US Department of Transportation – Federal Highway
                  Administration
                  http://mutcd.fhwa.dot.gov/ser-shs_millennium_eng.htm
 Table 6: References

                                                                                                                                 Page 21
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

APPENDIX A                               DEFINITIONS
 In common parlance, words such as 'sign', 'symbol' and 'icon' are used interchangeably. For clarity,
 and for correct application of the framework identified in this guidance, user interface designers
 must adhere to careful definitions of these terms.
 This document uses the following definitions from the field of semiotics (CCMS – Communication,
                            1
 Cultural and Media Studies) .

Sign
 A 'sign' is a meaningful unit which is interpreted as 'standing for' something other than itself.
 Examples of signs are written words, images, sounds, acts or objects.

Symbol
 A symbol is a sign whose meaning comes from an agreement between the people using it.
 For example:
         A red traffic light means 'stop'
         A circle with a vertical line at the top means 'on/off'
 Symbols are purely arbitrary – to be correctly interpreted by users, symbols must follow
 conventions and rules that are accepted and understood by the reader. This is an important point
 crucial to understanding how to develop signs (see 'How signs are read', below).

Code
 A code is a convention for communication. For instance, the Roman alphabet is a code.

Icon
 An icon is a sign whose form reflects the thing that it signifies.
 For example:
         An image of a CD on a computer screen (representing a real CD in the computer's CD-
          ROM drive)
         An image of a person in a wheelchair (representing disabled people in general)
         The word 'splash' (which sounds like the thing it describes)
 By definition, icons represent things that have a form.

 1
     CCMS – Communication, Cultural and Media Studies {R12}: http://www.cultsock.ndirect.co.uk/MUHome/cshtml/index.html
                                                                                                                            Page 22
                             Design Guidance Exploration – Alert Symbol Design
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Complex Signs
 Complex signs are signs which are comprised of other signs. Figure 5 displays an example of this.

       Complex Sign                                     Symbol                                         Icon

 Figure 5: Components of a Complex Sign

Complex Sign Elements
 Clinical application developers will need to describe specific types of signs, namely alert signs that
 are used within the applications. This guidance proposes new definitions of elements of complex
 signs.
 These are:
       The objective symbol
       The container
       The modifier
       Informational text
       Contextual elements
      Note
      These definitions are specific to this document and will be reviewed if future research identifies a
      classification scheme that is already in common use.

                                                                                                                            Page 23
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                         The guidance presented in this document is for community preview and consultation only.
                Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

 Figure 6: Illustration of the Components of a Complex Sign

Objective Symbol
 The objective symbol is the primary element of the sign. It is usually placed at the centre of the
 sign. It is the 'subject' of the sign. In Figure 6, the telephone icon is displayed as the objective
 symbol.

Container
 A container is a shape that bounds or overlays the objective symbol. The container should be used
 to change its meaning.
 For example:
       A circle with a line through it, overlaying an icon of a cigarette ('no smoking')
       An image of a 'button' surrounding a magnifying glass icon (a 'zoom' control in a software
        interface)
 In Figure 6, the yellow triangle is a container. The button outlines placed around the words 'Cancel'
 and 'Listen' are also containers.

                                                                                                                             Page 24
                                Design Guidance Exploration – Alert Symbol Design
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 21 May 2008

                    The guidance presented in this document is for community preview and consultation only.
            Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Modifiers
 A modifier is a minor element (icon, number or text) which should be combined with a major icon.
 The minor element should be used to modify or nuance the icon's meaning.
 For example:
      A list of times underneath a 'No Parking' sign which describe when it is illegal to park
      An icon of a folder with an icon of a picture frame within it, used to represent 'folder for
       pictures'
 In Figure 6, the '3' symbol is a modifier.

Informational Text
 Informational text is a message that should be placed next to the symbol and is used to describe
 the symbol's meaning, offer instructions, or explain the purpose of the symbol.
 Informational text is different from modifying text. For instance a 'No Parking' symbol may be
 accompanied by a list of times (which modify its meaning) and the words 'no parking' (which repeat
 the symbol's meaning). In this instance, the times are modifiers and the words 'no parking' are
 informational text.
 In Figure 6, the message 'While you were out you received 3 telephone messages,' is the
 informational text.

Contextual Elements
 Contextual elements are the surrounding and context in which a symbol will be displayed. These
 determine the actions the user may perform in response to interpreting the icon.
 For instance, a symbol may be displayed in the context of (next to) a checkbox. The context
 modifies the users' interpretation of the symbol (as an option).
 In Figure 6, the dialogue box and buttons are contextual elements in relation to the telephone icon.

                                                                                                                         Page 25
                          Design Guidance Exploration – Alert Symbol Design
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 21 May 2008

                          The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

APPENDIX B                                     ALERTS AND INTERACTIONS
 The classification of alert signs (Figure 2) can be used as a template for other interface elements –
 for instance, interactions.
 A short discussion of inactivity cues is included because, although it is out of the scope of this
 document, interactivity cues are also containers and are, in this sense, related to alert cues.

Interactivity Cues
 Interactive elements can be classified according to two criteria:
        Is the element 'information' ('click to find out more detail') or an action ('click to execute')?
        What is the state or intensity of the interactivity cue?

 Figure 7: Classification of Interactive Elements

 Again, this simple framework allows many items to be classified. For instance, checkboxes are
 interface elements that are always 'clickable'. Hyperlinks may be disabled or enabled. Buttons may
 be clickable or currently unavailable.
 What is interesting is that alert signs are a form of information. They may be clickable or not. So a
 'safe condition' symbol may also be a non-interactive piece of information (for example, an indicator
 of temperature) or an interactive piece of information (an 'all clear' summary icon leading to a page
 detailing a patient's vital signs).

                                                                                                                              Page 26
                                  Design Guidance Exploration – Alert Symbol Design
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 21 May 2008

                    The guidance presented in this document is for community preview and consultation only.
            Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

APPENDIX C                            RULES FOR SYMBOL DESIGN
 In the language of semiotics, signs are written by a 'sender' in order to convey information to a
 'receiver'.

Rule 1: Understanding a Sign
 To be easily and accurately understood, signs should rely on codes that are shared by the
 recipients.
 The first principle of semiotics is the 'arbitrariness of the sign' – the idea that there is no inherent
 reason for a sign to mean something.
 For instance, there is no particular reason why the word 'sister' should mean a female sibling, other
 than convention. A sender may choose another word (such as 'egg' or 'brother') to carry the
 meaning 'a female sibling'. The only reason that 'sister' is a good choice is because English
 speakers tend to agree that 'sister' means 'a female sibling'.
 This is the case for all signs – the arrows, shapes and diagrams people see around them only
 mean something because they have learned a 'code' that is shared with the people who wrote the
 signs.
      The value of a sign depends on the ease and accuracy with which the recipient decodes it
      The author of a sign has no control over how it is interpreted

Rule 2 and 3: Learning the Meaning of a Sign
 Signs should be based on codes which are already widely understood and repeated – rather than
 seek to create new codes.
 Sign systems should be as simple as possible to ensure the ease of learning.
 Learned behaviour has a tendency to break down during the early stages of learning and under
 stressful conditions. This needs to be taken into account when designing signs for a safety critical
 environment.
 It is clear that signs that are entirely new will have to be learned by all readers.
 Furthermore, it is axiomatic that simple subject matter (subject matter with few elements, few rules
 and few exceptions) is easier to learn than complex subject matter.

Rule 4 and 5: Legibility and Accessibility
 Signs should be easily distinguishable by target users in the media in which they are displayed.
 Further releases will attempt to determine specific values to accompany Rule 4.
 Signs may also be seen by readers with defective colour vision, or by readers using equipment with
 defective colour reproduction.
 Signs should be easily distinguishable without relying on colour alone to convey their meaning.
 Signs within the clinical application may be displayed on computer / television screens, as well as
 other media. This will constrain the legibility of the signs – for instance, due to low resolution of the
 computer screens.
 It is clear from Rule 4 and Rule 5, safety-critical signs will have to rely on a combination of colours,
 shapes and words to accurately convey their meaning.

                                                                                                                         Page 27
                          Design Guidance Exploration – Alert Symbol Design
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 21 May 2008

                   The guidance presented in this document is for community preview and consultation only.
           Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

When to Use Symbols
 If the target audience is familiar with the symbols employed, then symbols can be used to:
     Represent items in the interface that would otherwise take many words to describe
     Draw attention to information (for instance in warnings)
     Communicate to people who may not be able to communicate in written language
     Speed the communication of frequently repeated or important information

                                                                                                                        Page 28
                         Design Guidance Exploration – Alert Symbol Design
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 21 May 2008

                          The guidance presented in this document is for community preview and consultation only.
                 Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Features of Alert Symbols

 Figure 8: Basic Alert Symbols – Border and Fill Colour (Image 1 of 2)

                                                                                                                              Page 29
                                 Design Guidance Exploration – Alert Symbol Design
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 21 May 2008

                         The guidance presented in this document is for community preview and consultation only.
                Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 9: Basic Alert Symbols – Border and Fill Colour (Image 2 of 2)

                                                                                                                             Page 30
                                Design Guidance Exploration – Alert Symbol Design
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 10: Basic Alert Symbols – Containers (Image 1 of 2)

                                                                                                                            Page 31
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 11: Basic Alert Symbols – Containers (Image 2 of 2)

                                                                                                                            Page 32
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 12: Basic Alert Symbols – Colour Combinations (Image 1 of 3)

                                                                                                                            Page 33
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 13: Basic Alert Symbols – Colour Combinations (Image 2 of 3)

                                                                                                                            Page 34
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 14: Basic Alert Symbols – Colour Combinations (Image.3 of 3)

                                                                                                                            Page 35
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 15: Basic Alert Shapes – Reconstruction

                                                                                                                            Page 36
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                       The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 16: Basic Alert Symbols – Shape and Colour Reconstruction

                                                                                                                            Page 37
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 17: Basic Alert Shapes – Reconstruction (Image 1 of 3)

                                                                                                                            Page 38
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 18: Basic Alert Shapes – Reconstruction (Image 2 of 3)

                                                                                                                            Page 39
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 19: Basic Alert Shapes – Reconstruction (Image 3 of 3)

                                                                                                                            Page 40
                               Design Guidance Exploration – Alert Symbol Design
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 20: Basic Alert Symbols –Colour Combinations (Image 1 of 5)

                                                                                                                            Page 41
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 21: Basic Alert Symbols – Colour Combinations (Image 2 of 5)

                                                                                                                            Page 42
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 22: Basic Alert Symbols – Colour Combinations (Image 3 of 5)

                                                                                                                            Page 43
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 23: Basic Alert Symbols – Colour Combinations (Image 4 of 5)

                                                                                                                            Page 44
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008

                        The guidance presented in this document is for community preview and consultation only.
               Further design and patient safety assessments are required to finalise the content as CUI Design Guidance.

Figure 24: Basic Alert Symbols – Colour Combinations (Image 5 of 5)

                                                                                                                            Page 45
                              Design Guidance Exploration – Alert Symbol Design
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 21 May 2008
