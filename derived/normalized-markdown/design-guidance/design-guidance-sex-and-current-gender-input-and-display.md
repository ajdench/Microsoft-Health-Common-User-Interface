# Design Guidance -- Sex and Current Gender Input and Display

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Sex and Current Gender Input and Display.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-sex-and-current-gender-input-and-display.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
Sex and Current Gender Input and Display

                        Thursday, 28 January 2010
                                   Version 2.0.0.0

                                      Prepared by

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   Design Guidance – Gender and Sex Display                                                                                        1.0.0.0

   Documents to be read in conjunction with this document

   Document Title                                                                                                                  Version
   Design Guidance – Accessibility Principles                                                                                      1.0.0.0

   Design Guidance – Accessibility Checklist                                                                                       1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.
All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2010. All rights reserved.

                                    Design Guidance – Sex and Current Gender Input and Display
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 28 January 2010

TABLE OF CONTENTS
1    Introduction ....................................................................................................................................1
    1.1    Customer Need .........................................................................................................................2
    1.2    Scope ........................................................................................................................................3
     1.2.1      In Scope...............................................................................................................................3
     1.2.2      Out of Scope ........................................................................................................................4
    1.3    Key Principles ...........................................................................................................................4

2    Recommendations and Guidance ................................................................................................5
    2.1    Current Gender Values .............................................................................................................5
     2.1.1      Guidance .............................................................................................................................5
     2.1.2      Examples of Correct Usage.................................................................................................6
     2.1.3      Examples of Incorrect Usage ..............................................................................................6
     2.1.4      Rationale..............................................................................................................................6
    2.2    Sex Values ................................................................................................................................7
     2.2.1      Guidance .............................................................................................................................7
     2.2.2      Examples of Correct Usage.................................................................................................7
     2.2.3      Examples of Incorrect Usage ..............................................................................................8
     2.2.4      Rationale..............................................................................................................................8
    2.3    Instructional Text .......................................................................................................................8
     2.3.1      Current Gender Instructional Text .......................................................................................8
     2.3.2      Sex Instructional Text ..........................................................................................................9
     2.3.3      Data Values Instructional Text.............................................................................................9
     2.3.4      Guidance ...........................................................................................................................10
     2.3.5      Examples of Correct Usage...............................................................................................10
     2.3.6      Rationale............................................................................................................................10
    2.4    Control Layout and Structure ..................................................................................................11
     2.4.1      Current Gender Option Button Group ...............................................................................11
     2.4.2      Sex Option Button Group ..................................................................................................13
     2.4.3      Current Gender Drop-Down List Box ................................................................................15
     2.4.4      Sex Drop-Down List Box ...................................................................................................17

3    Document Information .................................................................................................................20
    3.1    Terms and Abbreviations ........................................................................................................20
    3.2    Nomenclature ..........................................................................................................................20
     3.2.1      Body Text...........................................................................................................................20
     3.2.2      Cross References ..............................................................................................................20
    3.3    References ..............................................................................................................................21

                                 Design Guidance – Sex and Current Gender Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 28 January 2010

1            INTRODUCTION
    This document describes the design guidance for the display and input of information about patient
    ‘Sex’ or ‘Current Gender’ status. It describes the area of focus, provides guidance and
    recommendations, and explains the rationale behind the guidance and recommendations.
    The term ‘Gender’ is now considered too ambiguous to be desirable or safe because different
    locations and systems use it to mean different things. It is therefore desirable to use the two distinct
    terms ‘Sex’ and ‘Current Gender’.
         Note
         Elements used within a software application are commonly referred to as a ‘control’. These can take many
         forms but the types referred to in this document will either be ‘input controls’ that can receive input from a
         user, such as a button, text box, option button (radio button) or check box, or ‘display controls’ such as a
         label, which can only display information.

    The Current Gender input controls are used to record the gender, according to how a patient
    currently describes themselves, whereas the Sex input controls records their phenotypic sex (see
    section 2.4 for more information).
    This document outlines the design guidance for the display of these statuses. Figure 1 shows an
    example format of these statuses:

    Figure 1: Example of the Format for Displaying Gender and Sex in Clinical Applications

         Important
         The visual representations used within this document to display guidance are illustrative only. Stylistic
         choices are not part of guidance and are therefore not mandatory requirements for compliance with the
         guidance in this document.

    This document also outlines the design guidance for the input of these statuses; Figure 2 shows
    some examples of input design:

    Figure 2: Example Input Designs for Current Gender and Sex Statuses

                                                                                                                 Page 1
                                   Design Guidance – Sex and Current Gender Input and Display
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 28 January 2010

 This document is intended for use by anyone whose role includes screen design, implementation,
 or assessment of a clinical application. This document can be used as guidance for the:
       Specification of an input and display control for the Sex and/or Current Gender statuses in a
        user interface
       Implementation of an input and display control for Sex and/or Current Gender within an
        application
       Assessment of an input and display control for Sex and/or Current Gender in the user
        interface for a clinical application
 Table 1 describes the changes made since the previous version of this guidance (Baseline version
 1.0.0.0 dated 05-Jul-2007):

 Change            IDs             Change Description
 Rewritten         All             Document completely rewritten since previous version
 Table 1: Changes Since the Last Baseline Version

1.1       Customer Need
 This section explains why the guidance has been created.
                                                                              1
 The UK Government Data Standards Catalogue (GDSC) categorises a person's gender in two
 ways:
       Person Gender Current. Or ‘Current Gender’, which refers to a patient's current gender
        classification
       Person Gender at Registration. Or ‘Sex’, which refers to the record of a patient's gender
        classification at the point of birth registration
      Note
      For brevity and clarity, this document uses the term ‘Sex’ in place of Person Gender at Registration and
      ‘Current Gender’ in place of Person Gender Current.

 Clinical applications input and display a patient's current gender or sex in various contexts. Users
 may confuse the terms current gender and sex, or assume that they are synonymous. Therefore, it
 is essential that all clinical applications display and explain current gender and sex terminology and
 values in a clear and consistent manner.
 This document details the recommendations for entering and displaying current gender and sex in
 clinical applications. Clinical applications should use the Current Gender and Sex format to
 enhance readability, ensure consistency and to cover all possible variants of Current Gender and
 Sex. This recommendation provides the best display format because it decreases ambiguity
 through the clear presentation of data values, and intuitive, concise labelling of patient Current
 Gender and Sex. Additionally, this recommendation enables clinical applications to display a
 predefined, restricted set of unknown or unspecified Current Gender and Sex values. Figure 1
 shows examples of how a clinical application might display Current Gender and Sex values.

 1
  UK Government Data Standards Catalogue – Person Sex {R1}:
 http://www.govtalk.gov.uk/gdsc/html/noframes/PersonSex-1-0-Release.htm
                                                                                                           Page 2
                               Design Guidance – Sex and Current Gender Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 28 January 2010

 The aims of this guidance are to:
       Ensure patients are correctly identified and matched with their patient record by displaying
        data items consistently
       Allow the status of the patient to be entered and displayed in a legally compliant and
        patient-sensitive manner
 Potential consequences of not adhering to these standards include:

      1. The patient is given the wrong treatment as a result of a failure to identify the patient
         correctly

      2. The patient is given the wrong treatment as a result of a failure to match the patient
         correctly with their artefacts (samples, letters, specimens, X-rays, and so on)

      3. The patient is given the wrong treatment as a result of a failure in communication between
         staff, or staff not performing or checking procedures correctly

      4. The patient is categorised with a value that cannot be utilised by any other systems

      5. The patient is categorised incorrectly from a legal perspective

      6. The patient is categorised incorrectly from their perspective
 This guidance is concerned with each of the errors identified above, but particularly points 1 and 2.

1.2     Scope
 This section defines the scope of this guidance document.

1.2.1         In Scope
 This guidance is applicable primarily to electronic user interfaces such as those displayed on
 desktop, laptop, and Personal Digital Assistant (PDA) computers. However, many of the principles
 can also be applied to paper form design. It is assumed that these computers are capable of
 displaying Graphical User Interface (GUI) elements (such as buttons) and have a keyboard and
 pointing device. The following items are in scope:
       Defining the valid values for current gender and sex
       Labelling of information, including:
              Definition of the terms Current Gender and Sex
              Definition of the values
              How items of information are to be labelled; this will cover the label text, positioning and
               any elements of styling required to differentiate labels visually from data
       Control layout and structure, in order to achieve:
              Optimal visibility of the values
              Easy recognition of the values in the context of the wider clinical application
              Easy recognition of the data type requested for input
              Reduction of invalid entries

                                                                                                      Page 3
                         Design Guidance – Sex and Current Gender Input and Display
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 28 January 2010

1.2.2        Out of Scope
 This section defines areas that are not covered in this guidance. Although there may be specific
 risks associated with these areas that are not addressed in this guidance, it is likely that the
 principles in this guidance will extend to the input and display of sex and current gender in many of
 the areas listed below.
 The following items are out of scope:
       Data storage – This guidance does not prescribe the format for storing data that is input or
        displayed
       Terms of use – This guidance does not define when an input field or display should be
        presented within a system or when Current Gender should be used instead of Sex, and vice
        versa
       Form design – This guidance does not prescribe the correct layout for a form or the
        navigation around a form
      Note
      Listing an item as out of scope does not classify it as unimportant. Project time and resource constraints
      inevitably restrict what can be in scope for a particular release. It is possible that items out of scope for
      this release may be considered for a future release.

1.3      Key Principles
 The following key principles have shaped the guidance in this document:
       Display information according to existing standards
       Minimise opportunities for human error
       Display sufficient instructional information to support data quality
       Promote consistency across the mix of users, clinical applications and care settings
       Ensure reliable and accurate identification of an individual patient record
       Minimise opportunities where patient-clinician relationships may be compromised

                                                                                                                Page 4
                          Design Guidance – Sex and Current Gender Input and Display
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 28 January 2010

2             RECOMMENDATIONS AND GUIDANCE
    The guidance provided in this document is based on a programme of user research, including:
            The evaluation of the following key standards:
                                                                    2
                   UK NHS Data Model and Dictionary
                   UK Government Data Standards Catalogue{R1}
            A desk-based research project looking at a range of information entry Web pages and
             clinical applications
            A Web-based survey of 41 respondents from the following groups:
                   Clinicians
                   Healthcare administrative staff
                   Independent Software Vendors (ISVs)
                   Community pharmacists
            A patient safety assessment

2.1           Current Gender Values
    Any Current Gender input or display control is restricted to the predefined set of valid values shown
    in Table 1.
           Important
           The values defined in this document are based upon the current proposed changes to the NHS Data
           Model and Dictionary. Should future changes be made to this document, amendments to this guidance
           will be required.

2.1.1              Guidance
    ID                   Guideline                                                                          Status
    CGS-0001             Label the Current Gender input controls 'Current Gender'.                          Mandatory

    CGS-0002             The Current Gender values are:                                                     Mandatory
                          Male
                          Female
                          Other Specific
                          Not Known
                          Not Specified

    CGS-0003             The Current Gender status is one the following values:                             Mandatory
                          Male
                          Female
                          Other Specific
                          Not Known
                          Not Specified

    CGS-0004             Make the definitions of the Current Gender status values accessible to the user.   Mandatory

    2
        NHS Data Model and Dictionary {R4}: http://www.datadictionary.nhs.uk/index.asp
                                                                                                                        Page 5
                                Design Guidance – Sex and Current Gender Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 28 January 2010

 ID                    Guideline                                                                                     Status
 CGS-0005              Do not abbreviate Current Gender data values.                                                 Mandatory

 CGS-0006              Do not display the underlying coded representation of the Current Gender data values. For     Mandatory
                       example, the standard code for 'Male' may be the integer 1, but this number should not
                       appear.

 CGS-0007              Label the Current Gender status display 'Current Gender'.                                     Recommended

 CGS-0008              Use ‘Not Known’ as the Current Gender default value.                                          Recommended
 Table 2: Guidance for Current Gender Data Values

2.1.2         Examples of Correct Usage
      Usage       Format                         Examples              Comments

                 Alphabetic string              Male                  Use this format to display patient Current Gender within a
                                                 Female                clinical application.
                                                 Other Specific
                                                 Not Known
                                                 Not Specified
 Table 3: Correct Gender Formatting Examples

2.1.3         Examples of Incorrect Usage
      Usage       Format                         Examples              Comments

                 Numeric code                   0                     Patient-Safety-Critical
                                                 1                     This example requires the user to understand and interpret
                                                 2                     the numeric codes or abbreviations. This representation is
                                                                       likely to cause recognition errors.
                                                 9
                                                 NK
                                                 M
                                                 F
                                                 NS

                 Numeric code and text          0 Not Known           Lack of Readability
                                                 1 Male                This example lacks clarity and readability by displaying both
                                                 2 Female              number and textual values for Current Gender. The relative
                                                                       number values could also cause offence.
                                                 9 Not Specified
 Table 4: Incorrect Gender Formatting Examples

2.1.4         Rationale
 The values defined here represent the current best conclusions from the healthcare industry on
 valid values for these statuses.
 The use of an unambiguous alphabetical string is considered the most predictable and
 recognisable format for clinicians using the systems.

                                                                                                                                    Page 6
                               Design Guidance – Sex and Current Gender Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 28 January 2010

2.2       Sex Values
 Any Sex input or display control is restricted to the predefined set of valid values shown in Table 5.
       Important
       The values defined in this document are based upon the current proposed changes to the NHS Data
       Model and Dictionary. Should future changes be made to this document, amendments to this guidance
       will be required.

2.2.1         Guidance
 ID                    Guideline                                                                                         Status
 CGS-0009              Label the Sex input controls 'Sex'.                                                               Mandatory

 CGS-0010              The Sex values are:                                                                               Mandatory
                        Male
                        Female
                        Not Known
                        Indeterminate

 CGS-0011              The Sex status must only contain one the following values:                                        Mandatory
                        Male
                        Female
                        Not Known
                        Indeterminate

 CGS-0012              Sex data values must never be abbreviated.                                                        Mandatory

 CGS-0013              The Sex default state is null.                                                                    Mandatory

 CGS-0014              The application must not display the underlying coded representation of the Sex data values.      Mandatory
                       For example, the standard code for 'Male' may be the integer 1, but this number must not
                       appear.

 CGS-0015              Make the definitions of the Sex status values accessible to the user.                             Mandatory

 CGS-0016              Label the Sex status display 'Sex'.                                                               Recommended
 Table 5: Guidance for Sex Data Values

2.2.2         Examples of Correct Usage
      Usage       Format                        Examples                 Comments

                 Alphabetic string             Male                     Use this format to display patient Sex within a clinical
                                                Female                   application.
                                                Not Known
                                                Indeterminate
 Table 6: Correct Sex Formatting Examples

                                                                                                                                     Page 7
                               Design Guidance – Sex and Current Gender Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 28 January 2010

2.2.3         Examples of Incorrect Usage
      Usage         Format                          Examples               Comments

                   Numeric code                    1                      Patient-Safety-Critical
                                                    2                      This example requires the user to understand and interpret
                                                    9                      the numeric codes or abbreviations. This representation is
                                                                           likely to cause recognition errors.
                                                    M
                                                    F
                                                    NS

                   Numeric code and text           1 Male                 Lack of Readability
                                                    2 Female               This example lacks clarity and readability by displaying both
                                                    9 Not Specified        number and textual values for Sex.

 Table 7: Incorrect Sex Formatting Examples

2.2.4         Rationale
 The values defined here represent the current best practice regarding the use of this data area.
 The use of a discrete alphabetical string is considered the most predictable and recognisable
 format for clinicians using the systems.

2.3       Instructional Text
 The Current Gender and Sex controls are potentially confusing to the user due to the terms Sex
 and Gender being used inconsistently between systems and locations. It is therefore very important
 to facilitate a user's understanding of a data item through the use of instructional text.
       Important
       This section is illustrated with examples using tooltips, however, instructional text can be provided in a
       variety of methods; which method is to be employed is not considered in this document as this is a
       system-wide issue rather than a specific one.

2.3.1         Current Gender Instructional Text
 At this time, the term ‘Current Gender’ is not in widespread use and, as a result, could be confusing
 to the user. Therefore, the control label must provide the following definition:
 Current Gender, as assigned by the individual to themselves

 One method of achieving this is using a tooltip, as displayed in Figure 3:

 Figure 3: Brief Tooltip Definition of Current Gender from Control Label

                                                                                                                                     Page 8
                                 Design Guidance – Sex and Current Gender Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 28 January 2010

 ISVs need to take responsibility for informing the user about this control by providing the following
 instructional text in the format required by their application:
 Current Gender is a statement by the individual about the gender they currently identify themselves to be (that is,
 self-assigned). The valid values are:
  Male
  Female
  Other Specific – when the person has a clear idea of what their gender is, but it is neither discretely male nor female,
     for example, 'Intersex', 'transgender', 'third gender'
  Not Known – used when no information on this subject is known
  Not Specified – when the person is unable to specify their current gender or does not have a clear idea of their
     current gender

2.3.2          Sex Instructional Text
 The control must provide the following definition:
 Sex, as recorded at birth or on issue of a full gender recognition certificate

 A tooltip display method for instructional text is shown in Figure 4:

 Figure 4: Brief Tooltip Definition of Sex from Control Label

 ISVs need to take responsibility for informing the user about this control by using the following
 instructional text in the format appropriate to their application:
 Sex is the phenotypic sex of the person as recorded by the Registrar on the Register of Births, or other initial registration,
 or on issue of a full gender recognition certificate under the Gender Recognition Act. Valid values are:
  Male
  Female
  Not Known – used when no information on this subject is known
  Indeterminate – used when the person is unable to be classified as either male or female

2.3.3          Data Values Instructional Text
 In addition to having instructional text for the control label, instructional text for the data values
 should be provided. These could be added in a variety of methods, such as a tooltip, as
 demonstrated in Figure 5:

 Figure 5: Tooltip Definition of Data Value from Value Label

                                                                                                                         Page 9
                                  Design Guidance – Sex and Current Gender Input and Display
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 28 January 2010

2.3.4         Guidance
 ID                      Guideline                                                                                           Status
 CGS-0017                Provide definitions for input controls.                                                             Mandatory

 CGS-0018                Provide access to definitions of the valid values.                                                  Mandatory

 CGS-0019                Provide a shortened version of the definitions.                                                     Recommended
 Table 8: Guidance for Instructional Text

2.3.5         Examples of Correct Usage
  Usage Format                     Examples                                                         Comments

              Alphabetic          Current Gender is a statement by the individual about the        Use this format to define Current
               string              gender they currently identify themselves to be (that is,        Gender within a clinical application.
                                   self-assigned). The valid values are:
                                    Male
                                    Female
                                    Other Specific – when the person has a clear idea of
                                     what their gender is, but it is neither discretely male nor
                                     female, for example, 'Intersex', 'transgender', 'third
                                     gender'
                                    Not Known – used when no information on this subject is
                                     known
                                    Not Specified – when the person is unable to specify their
                                     current gender or does not have a clear idea of their
                                     current gender

              Alphabetic          Sex is the phenotypic sex of the person as recorded by the         Use this format to define Sex within a
               string              Registrar on the Register of Births, or other initial              clinical application.
                                   registration, or on issue of a full gender recognition certificate
                                   under the Gender Recognition Act. Valid values are:
                                    Male
                                    Female
                                    Not Known – used when no information on this subject is
                                     known
                                    Indeterminate – used when the person is unable to be
                                     classified as either male or female

              Alphabetic          Current Gender, as assigned by the individual to themselves Use this text as a shortened definition of
               string                                                                          Current Gender within a clinical
                                                                                               application, especially in cases where
                                                                                               brevity is paramount.

              Alphabetic          Sex, as recorded at birth or on issue of a full gender           Use this text as a shortened definition of
               string              recognition certificate                                          Sex within a clinical application,
                                                                                                    especially in cases where brevity is
                                                                                                    paramount, such as in a tooltip design.
 Table 9: Correct Examples of Instructional Text for Status Type and Data Value Definitions

2.3.6         Rationale
 Shortened definitions are to be used where the full instructional text is not required or desirable, for
 example, when a tooltip is placed on a control label. Whilst tooltips can contain as many as 150
 characters, they should ideally contain only a brief description in order to allow the user to read it.
 Additionally, certain technologies only allow a restricted amount of data to be contained in them (for
                        ®      ®
 example, the Mozilla Firefox Web browser truncates after about 90 characters).
                                                                                                                                        Page 10
                                 Design Guidance – Sex and Current Gender Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 28 January 2010

2.4        Control Layout and Structure
  The input controls should be constructed in a manner that supports only the input of a predefined
  set of values. Therefore, both an 'Option Button Group’ (also known as a ‘Radio Button Group’) and
  a ‘Drop-down List Box’ design have been considered.
  The option button group design is considered to occupy more screen space but provides better
  instruction to the user.

2.4.1          Current Gender Option Button Group
  This control will be used when a user needs to enter the Current Gender that the patient has
  assigned to themselves. It consists of a group of five standard option buttons within a control group,
  as displayed in Figure 6. It should be used whenever the developer has room in their form design.

  Figure 6: Current Gender Option Button Design (Focus on Male)

  An alternative layout is displayed in Figure 7, which may be desirable when the layout is more
  suited to the available screen space:

  Figure 7: Inline Option Button Design

2.4.1.1            Guidance
  ID                     Guideline                                                                                    Status
  CGS-0020               Current Gender option button group input controls must consist of five option buttons.       Mandatory

  CGS-0021               Current Gender option button group labels are in the following order (top to bottom first,   Mandatory
                         followed by left to right):
                         1. Male
                         2. Female
                         3. Other Specific
                         4. Not Known
                         5. Not Specified

  CGS-0022               The Current Gender tab order is:                                                             Recommended
                         1. Male
                         2. Female
                         3. Other Specific
                         4. Not Known
                         5. Not Specified
  Table 10: Guidance for Current Gender Option Button Design

                                                                                                                               Page 11
                                 Design Guidance – Sex and Current Gender Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 28 January 2010

2.4.1.2           Examples of Correct Usage
     Usage         Format                Examples                                   Comments

                  Five option                                                      Use these five discrete controls with only
                   button group                                                     one selection possible at one time.

                  ‘Not Known’ is                                                   Use ‘Not Known’ as the default for Current
                   the default status                                               Gender.

  Table 11: Correct Current Gender Option Button Design Formatting Examples

2.4.1.3           Examples of Incorrect Usage
    Usage        Format                 Examples                                    Comments

                Incorrect                                                          Data quality
                 functionality                                                      This example allows a user to select multiple
                 (non-discrete                                                      data values when only one should be
                 choices)                                                           assigned.

                Incorrect input                                                    User experience
                 convention                                                         This example uses checkboxes, suggesting
                                                                                    to users that multiple selections are
                                                                                    possible.

                Incorrect value                                                    Data quality
                 labelling                                                          This example allows a user to select a value
                                                                                    that does not adhere to standards.

                Too few options                                                    Data quality
                 (less than five                                                    This example does not allow a user to enter
                 option buttons)                                                    all the possible valid values for this status.

                Too many                                                           Data quality
                 options (more                                                      This example allows a user to select a data
                 than five option                                                   value that is not valid.
                 buttons)

                Incorrect control                                                  Data quality
                 labelling                                                          This example shows a control label that
                                                                                    could be misinterpreted as a phenotypic sex
                                                                                    status.
  Table 12: Incorrect Current Gender Option Button Design Formatting Examples

                                                                                                                            Page 12
                                 Design Guidance – Sex and Current Gender Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 28 January 2010

2.4.1.4            Rationale
  The option button group design is considered to be the safest and most accessible design. It
  instantly displays the valid options to the user for them to assess the correct value. The option
  buttons are a known medium for selecting a single value from a predefined list and so the user
  knows what is expected. Additionally, invalid values cannot be entered and, therefore, that type of
  entry error is precluded.
  This design minimises user effort by placing the most obvious choices first. The design also has a
  default of ‘Not Known’ to encourage users to select an option only when appropriate.
  This design uses controls that are recognised by assistive technologies (for example, screen
  readers) and allow for easy implementation of instructional text through tooltips.

2.4.2          Sex Option Button Group
  This control will be used when a user needs to enter information about the Sex value that the
  patient has assigned to themselves. It consists of a group of four standard option buttons within a
  control group, as displayed in Figure 8:

  Figure 8: Sex Option Button Design with a Value Selected

  This layout should be used whenever the developer has room in their form design. Figure 9
  displays the control in its default ‘null’ state (unlike the Current Gender control, which has a default
  value):

  Figure 9: Sex Option Button Design in Default 'Null' State

  An alternative layout is displayed in Figure 10, which may be desirable when the layout is more
  suited to the available screen space:

  Figure 10: Inline Option Button Design

2.4.2.1            Guidance
  ID              Guideline                                                                                                    Status
  CGS-0023        Sex option button group input controls must consist of four option buttons.                                  Mandatory

  CGS-0024        Sex option button group labels are in the following order (top to bottom first followed by left to right):   Recommended
                  1. Male
                  2. Female
                  3. Not Known
                  4. Indeterminate
  Table 13: Guidance for Sex Option Button Group Design

                                                                                                                                        Page 13
                                  Design Guidance – Sex and Current Gender Input and Display
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 28 January 2010

2.4.2.2           Examples of Correct Usage
     Usage         Format                 Examples                                 Comments

                  Four option                                                     Use these four discrete controls with only
                   button group                                                    one selection possible at one time.

                  ‘Null’ default state                                            This control must have nothing selected for
                                                                                   the null default state.

  Table 14: Correct Sex Option Button Grouping Examples

2.4.2.3           Examples of Incorrect Usage
     Usage         Format                 Examples                                 Comments

                  Incorrect                                                       Data quality
                   functionality                                                   This example allows a user to select multiple
                   (non-discrete                                                   data values when only one should be
                   choices)                                                        assigned.

                  Incorrect input                                                 User experience
                   convention                                                      This example uses checkboxes, suggesting
                                                                                   to users that multiple selections are
                                                                                   possible.

                  Incorrect value                                                 Data quality
                   labelling                                                       This example allows a user to select a value
                                                                                   that does not adhere to standards.

                  Too few options                                                 Data quality
                   (less than four                                                 This example does not allow a user to enter
                   option buttons)                                                 all the possible valid values for this status.

                  Too many                                                        Data quality
                   options (more                                                   This example allows a user to select a data
                   than five radio                                                 value that is not valid.
                   buttons)

                  Incorrect control                                               Data quality
                   labelling                                                       This example shows a control label that
                                                                                   could be misinterpreted as a Current Gender
                                                                                   status.
  Table 15: Incorrect Sex Option Button Grouping Examples

2.4.2.4           Rationale
  The option button group design is considered to be the safest and most accessible design. It
  instantly displays the valid options to the user for them to assess the correct value. The option
  buttons are a known medium for selecting a single value from a predefined list and so the user
  knows what is expected. Additionally, invalid values cannot be entered and, therefore, that type of
  entry error is precluded.
  This design minimises user effort by placing the most obvious choices first and has a default of null
  or blank (for example, “”). Patient safety assessments have revealed that this data is too important
  to leave in a default value, which could be misinterpreted as actual input. It was felt that if there is a

                                                                                                                           Page 14
                                Design Guidance – Sex and Current Gender Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 28 January 2010

  default value, a user might be encouraged to tab through the input control, without attempting to
  select an option. Users will need to interact with a default state input control, in order to select a
  valid value. Once this control has a valid value, it will not be possible for a user to set it back to the
  default null state.
  This design uses controls that are recognised by assistive technologies (for example, screen
  readers) and allow for easy implementation of instructional text through tooltips.

2.4.3         Current Gender Drop-Down List Box
  The drop-down list box design is considered desirable for developers who want to save space on a
  form or where many drop-down list boxes are already implemented in their design. Figure 11
  displays an example of the control in a default state, which is to have ‘Not Known’ selected:

  Figure 11: Current Gender Drop-Down List Box Design Default State

  Figure 12 is an example of an interaction with the control:

  Figure 12: Current Gender Drop-Down List Box with Focus Shadow

2.4.3.1           Guidance
  ID                    Guideline                                                                                      Status
  CGS-0025              Current Gender drop-down list box options are in the following order (top to bottom):          Mandatory
                        1. Male
                        2. Female
                        3. Other Specific
                        4. Not Known
                        5. Not Specified

  CGS-0026              Use a single drop-down list box for the Current Gender control.                                Mandatory

  CGS-0027              Do not use a prompt for the Current Gender control, due to its default value of 'Not Known'.   Mandatory
  Table 16: Guidance for Current Gender Drop-Down List Box Design

                                                                                                                                Page 15
                                Design Guidance – Sex and Current Gender Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 28 January 2010

2.4.3.2           Examples of Correct Usage
     Usage         Format                Examples                                   Comments

                  Drop-down list                                                   A single drop-down list box that can be set
                   box with five                                                    to one option from the five available.
                   possible values

                  ‘Not Known’ is                                                   Use ‘Not Known’ as the default for Current
                   the default status                                               Gender.

  Table 17: Correct Current Gender Drop-Down List Box Examples

2.4.3.3           Examples of Incorrect Usage
    Usage        Format                 Examples                                    Comments

                Incorrect                                                          Data quality
                 functionality                                                      This example allows a user to select multiple
                 (non-discrete                                                      values when only one should be assigned.
                 choices)

                Incorrect value                                                    Data quality
                 labelling                                                          This example allows a user to select a value
                                                                                    that does not adhere to standards.

                Too few options                                                    Data quality
                 (less than five                                                    This example does not allow a user to enter
                 options)                                                           all the possible valid values for this status.

                Too many                                                           Data quality
                 options (more                                                      This example allows a user to select a data
                 than five options)                                                 value that is not valid.

                Incorrect control                                                  Data quality
                 labelling                                                          This example shows a control label that
                                                                                    could be misinterpreted as a phenotypic sex
                                                                                    status.

                Incorrect default                                                  Data quality
                 value                                                              This example shows a control with an
                                                                                    incorrect default value (Male).

  Table 18: Incorrect Current Gender Drop-Down List Box Examples

                                                                                                                            Page 16
                                 Design Guidance – Sex and Current Gender Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 28 January 2010

2.4.3.4             Rationale
  The drop-down list box design increases data quality by allowing users to only enter discrete values
  whilst conserving screen space.
  This design minimises user effort by placing the most obvious choices first in the list order. The
  design also has a default of ‘Not Known’ to encourage users to select an option only when
  appropriate.

2.4.4           Sex Drop-Down List Box
  The drop-down list box design is considered desirable for developers who want to save space on a
  form or where many drop-down list boxes are already implemented in their design. Figure 13
  displays an example of the control in a default state, which is to be in a null state with nothing
  selected:

  Figure 13: Default Sex Input Drop-Down List Box

  Figure 14 is an example of an interaction with the control:

  Figure 14: Sex Drop-Down List Box

  Figure 15 shows the resulting data value displayed:

  Figure 15: Static State of Control After Data Input

2.4.4.1             Guidance
  ID                      Guideline                                                                                   Status
  CGS-0028                Ensure that Sex controls have no value selected by default and no method of returning to this Mandatory
                          ‘null’ state.

  CGS-0029                Use a single control for the Sex drop-down list box.                                        Mandatory

  CGS-0030                Ensure that the Sex drop-down list box is blank by default and does not contain a prompt.   Recommended
  Table 19: Guidance for Sex Drop-Down List Box Design

                                                                                                                                Page 17
                                   Design Guidance – Sex and Current Gender Input and Display
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 28 January 2010

2.4.4.2           Examples of Correct Usage
     Usage         Format                 Examples                                 Comments

                  Four item                                                       Use four discrete controls with only one
                   drop-down list                                                  selection possible at one time.
                   box

                  ‘Null’ default state                                            Default state should be null, which will
                                                                                   display to users as a blank. Once a selection
                                                                                   has been made by a user, there is no means
                                                                                   of returning to this state for that data item.
  Table 20: Correct Sex Drop-Down List Box Examples

2.4.4.3           Examples of Incorrect Usage
     Usage         Format                 Examples                                 Comments

                  Incorrect                                                       Data quality
                   functionality                                                   This example allows a user to select multiple
                   (non-discrete                                                   data values when only one should be
                   choices)                                                        assigned.

                  Incorrect value                                                 Data quality
                   labelling                                                       This example allows a user to select a value
                                                                                   that does not adhere to standards.

                  Too few options                                                 Data quality
                   (less than four                                                 This example does not allow a user to enter
                   options)                                                        all the possible valid values for this status.

                  Too many                                                        Data quality
                   options (more                                                   This example allows a user to select a data
                   than four options)                                              value that is not valid.

                  Incorrect control                                               Data quality
                   labelling                                                       This example shows a control label that
                                                                                   could be misinterpreted as a Current Gender
                                                                                   status.

                  Incorrect default                                               Data quality
                   value                                                           This example shows a control with an
                                                                                   incorrect default value (Not Known).

  Table 21: Incorrect Sex Drop-Down List Box Examples

                                                                                                                           Page 18
                                Design Guidance – Sex and Current Gender Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 28 January 2010

2.4.4.4       Rationale
  The drop-down list box design increases data quality by allowing users to only enter discrete values
  whilst conserving screen space.
  This design minimises user effort by placing the most obvious choices first in the list order and has
  a default of null or blank (for example, “”). Patient safety assessments have revealed that this data
  is too important to leave in a default value, which could be misinterpreted as actual input. It was felt
  that if there is a default value, the user might be encouraged to tab through the control, without
  attempting to select an option. Users will need to interact with a default state control in order to give
  it a valid value. Once this control has a valid value, it will not be possible for a user to set it back to
  the default null state.

                                                                                                       Page 19
                        Design Guidance – Sex and Current Gender Input and Display
                        Prepared by Microsoft, Version 2.0.0.0
                        Last modified on 28 January 2010

3              DOCUMENT INFORMATION

3.1            Terms and Abbreviations
    Abbreviation                        Definition
    CUI                                 Common User Interface

    GDSC                                Government Data Standards Catalogue

    ISV                                 Independent Software Vendor

    NHS                                 National Health Service

    PDA                                 Personal Digital Assistants

    GUI                                 Graphical User Interface
    Table 22: Terms and Abbreviations

3.2            Nomenclature
    This section shows how to interpret the different styles used in this document to denote various
    types of information.

3.2.1            Body Text
    Text                                                              Style
    Code                                                              Monospace

    Script

    Other markup languages

    Interface dialog names                                            Bold

    Field names

    Controls

    Folder names                                                      Title Case

    File names
    Table 23: Body Text Styles

3.2.2            Cross References
    Reference                                                         Style
    Current document – sections                                       Section number only

    Current document – figures/tables                                 Caption number only

    Other project documents                                           Italics and possibly a footnote

    Publicly available documents                                      Italics with a footnote

    External Web-based content                                        Italics and a hyperlinked footnote
    Table 24: Cross Reference Styles

                                                                                                           Page 20
                                  Design Guidance – Sex and Current Gender Input and Display
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 28 January 2010

3.3       References
 Reference         Document                                                                 Version
 R1.               UK Government Data Standards Catalogue – Person Sex:
                   http://www.govtalk.gov.uk/gdsc/html/noframes/PersonSex-1-0-Release.htm

 R2.               Design Guidance – Accessibility Checklist                                1.0.0.0

 R3.               Design Guidance – Accessibility Principles                               1.0.0.0

 R4.               NHS Data Model and Dictionary:                                           Version 3
                   http://www.datadictionary.nhs.uk/index.asp
 Table 25: References

                                                                                                        Page 21
                             Design Guidance – Sex and Current Gender Input and Display
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 28 January 2010
