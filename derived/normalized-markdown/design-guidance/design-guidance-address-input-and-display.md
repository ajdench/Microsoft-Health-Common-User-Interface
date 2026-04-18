# Design Guidance -- Address Input and Display

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Address Input and Display.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-address-input-and-display.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
Address Input and Display

           Friday, 22 January 2010
                   Version 2.0.0.0

                      Prepared by

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   Design Guidance – Address Input and Display                                                                                     1.0.0.0

   Design Guidance – Address Information Display                                                                                   1.0.0.0

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

                                    Design Guidance – Address Input and Display
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 22 January 2010

TABLE OF CONTENTS
1    Introduction ....................................................................................................................................1
    1.1    Customer Need .........................................................................................................................2
    1.2    Scope ........................................................................................................................................2
     1.2.1      In Scope...............................................................................................................................2
     1.2.2      Out of Scope ........................................................................................................................3
    1.3    Key Principles ...........................................................................................................................3

2    Recommendations and Guidance ................................................................................................4
    2.1    Address Display ........................................................................................................................4
     2.1.1      Guidance .............................................................................................................................4
     2.1.2      Examples of Correct Usage.................................................................................................5
     2.1.3      Examples of Incorrect Usage ..............................................................................................5
     2.1.4      Rationale..............................................................................................................................6
    2.2    Address Input Data Elements ...................................................................................................7
     2.2.1      First Three Address Lines ...................................................................................................7
     2.2.2      Town/City .............................................................................................................................8
     2.2.3      County .................................................................................................................................8
     2.2.4      Postcode ..............................................................................................................................9
    2.3    UK Address Input ......................................................................................................................9
     2.3.1      Hints, Prompts and Tooltips ..............................................................................................10
     2.3.2      Guidance ...........................................................................................................................11
     2.3.3      Examples of Correct Usage...............................................................................................11
     2.3.4      Examples of Incorrect Usage ............................................................................................12
     2.3.5      Rationale............................................................................................................................12
    2.4    UK Address Finder ..................................................................................................................15
     2.4.1      Hints, Prompts and Tooltips ..............................................................................................15
     2.4.2      Guidance ...........................................................................................................................16
     2.4.3      Examples of Correct Usage...............................................................................................17
     2.4.4      Examples of Incorrect Usage ............................................................................................17
     2.4.5      Rationale............................................................................................................................17
    2.5    Non-UK Address Input ............................................................................................................19
     2.5.1      Guidance ...........................................................................................................................19
     2.5.2      Examples of Correct Usage...............................................................................................20
     2.5.3      Examples of Incorrect Usage ............................................................................................20
     2.5.4      Rationale............................................................................................................................21

3    Document Information .................................................................................................................23
    3.1    Terms and Abbreviations ........................................................................................................23
    3.2    Definitions ...............................................................................................................................23
    3.3    Nomenclature ..........................................................................................................................23

                                 Design Guidance – Address Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 22 January 2010

 3.3.1     Body Text...........................................................................................................................23
 3.3.2     Cross References ..............................................................................................................24
3.4   References ..............................................................................................................................24

                           Design Guidance – Address Input and Display
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 22 January 2010

1             INTRODUCTION
    This document describes the design guidance for input and display of a postal address. It describes
    the area of focus, provides guidance and recommendations, and explains the rationale behind the
    guidance and recommendations.
    This document is intended for the use of anyone whose role includes screen design,
    implementation, or assessment of a clinical application. This document can be used as guidance
    for the:
          Specification of an input control and a display control for an address in a user interface (UI)
          Implementation of an input control and a display control for an address within an application
          Assessment of an input control and a display control for an address in a clinical application
           user interface

         Note
         Elements used within a software application are commonly referred to as a ‘control’. These can take many
         forms but the types referred to in this document will either be ‘input controls’ that can receive input from a
         user, such as a button, text box, option button (radio button) or check box, or ‘display controls’ such as a
         label, which can only display information.

         Important
         The visual representations used within this document to display the guidance are illustrative only. Stylistic
         choices, unless otherwise specified, are not part of the guidance and are therefore not mandatory
         requirements for compliance with the guidance in this document.

    To distinguish their relative importance, each guideline in this document is ranked by Status. This
    indicates the extent to which you should follow the guideline when defining your UI implementation.
    There are two levels:
          Mandatory – An implementation should follow the guideline
          Recommended – An implementation is advised to follow the guideline

         Note
         Refer to section 3.2 for definitions of the specific terminology used in this document.

    Table 1 describes the changes made since the previous version of this guidance (Baseline
    version1.0.0.0 dated 25-Mar-2008):

    Change            IDs             Change Description
    Deleted                           None

    Modified                          Enhanced context setting for out of scope text (section 1.2.2)

                                      Some old section 2.2.5.4 text integrated into new section 2.2

                                      Old section 2.2.5.5 text integrated into new section 2.2

                                      Old section 2.2.5.6 text integrated into new section 2.2

    Added                             Definition of guideline ‘Status’ (section 1)

                                      Address Input Data Elements section (section 2.2)
    Table 1: Changes Since the Last Baseline Version

                                                                                                                 Page 1
                                  Design Guidance – Address Input and Display
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 22 January 2010

1.1     Customer Need
 Clinical applications store and display addresses in various contexts. For example, the address
 may be a patient’s residential address, or the address of a doctor's surgery.
 Addresses play an important, though secondary, part in patient identification. Where only a
 patient’s name and gender are known, the address can help identify the correct patient from a list
 of matching results. The address must therefore be easily accessed, such as from the Patient
 Banner, as described in Design Guidance – Patient Banner {R1}.
 Addresses need to be stored by clinical applications, displayed on monitors and printed on referral
 letters and envelopes. There is therefore a need to identify best practice regarding address input
 and display and to promote its correct usage across all clinical applications. This ensures that users
 have a consistent experience and maintains a high standard of data quality across the healthcare
 industry.
 Addresses must be accurate to enable delivery to, collection from or visits at the correct location.
 Therefore, it is essential that all clinical applications provide an easily-readable and consistent
 display format for address information. Promoting patient safety is of primary importance, so it is
 critical that addresses are presented in a clear form that minimises ambiguity and reading and
 transcribing errors.
 An address that is not displayed in a clear form can be misread, or not understood at all. This could
 have patient safety issues if, for example:
       A patient needs to be sent a letter about an appointment
       Test results need to be sent to a hospital or General Practitioner (GP) surgery
       A next of kin needs to be contacted about the patient
       A consultant needs to be contacted about a patient
 If clinical systems made by different developers vary in the way they display addresses, there is a
 risk of misinterpretation by healthcare professionals moving between those systems. This has the
 potential of leading to patient safety incidents.
 Having a standard method of displaying addresses makes the design and development of clinical
 systems easier and quicker, therefore providing the benefits of having new systems available
 earlier and at lower cost.
 The purpose of this guidance is twofold:
       To make address display consistent across all clinical systems, and all parts of any care
        process that includes the need to display addresses
       To increase patient safety by maximising clinical utility and minimising reading and
        transcribing errors

1.2     Scope
 This section defines the scope of this guidance document.

1.2.1      In Scope
 This guidance is applicable to UIs such as those displayed on desktop or laptop computers. It is
 assumed that, as a minimum, these computers are capable of operating at a display resolution of
 1024 x 768, and have a keyboard and pointing device.
 The following items are in scope:
       Input of addresses
       Display of addresses

                                                                                                   Page 2
                       Design Guidance – Address Input and Display
                       Prepared by Microsoft, Version 2.0.0.0
                       Last modified on 22 January 2010

1.2.2        Out of Scope
 This section defines areas that are not covered in this guidance. Although there may be specific
 risks associated with these areas that are not addressed in this guidance, it is likely that the
 principles in this guidance will extend to the input and display of addresses in many of the areas
 listed below.
 The following items are out of scope:
       Validation of an entered address as a real address – Techniques to determine whether
        an entered address is an actual address
       Validation that a given address is that of the stated person – Techniques to validate
        whether or not a valid address is that of the stated person
       Multi-language applications – Languages that use right-to-left writing, such as Arabic, the
        Cyrillic alphabet, such as Russian, or ideograms, such as Japanese
       Display styles – Choice of display font size, background and foreground text colour will
        affect the readability of addresses, as it will with all other displayed text
       Reduced-size form factors – Handheld devices, such as personal digital assistants
        (PDAs) and other such small mobile devices
       Data storage and transmission – This guidance relates only to the display layer of a
        clinical application, and does not prescribe how addresses should be stored. It is assumed
        that all applications will be capable of transforming an address stored in an arbitrary format
        into that prescribed by this guidance, without error
       Data history and provenance – The recording of validity dates is left to the designer of the
        NHS clinical application
       Address types – Entering multiple addresses, such as for office and home, is left to the
        designer of the NHS clinical application
       Method of providing help text and user messages – There are many ways of providing
        the user with assistance, such as tooltips, watermarks, frequently asked questions (FAQ)
        files and online help
       Address picker – Third-party postcode-based address finders offer a set of candidate
        addresses
       Form design – Typically, an address will be entered in a form along with other information
        such as name and email address; the positioning of these and other fields is left to the form
        designer

      Note
      Listing an item as out of scope does not classify it as unimportant. Project time and resource constraints
      inevitably restrict what can be in scope for a particular release. It is possible that items out of scope for
      this release may be considered for a future release.

1.3      Key Principles
 The following key principles have shaped the guidance in this document:
       Conforming to convention and existing best practice with which clinicians are already
        familiar, so as to reduce the training requirements of clinical applications
       Promoting data quality so as to reduce occurrences of errors
       Balancing the need for consistency and commonality across clinical applications with the
        need to support Independent Software Vendor (ISV) requirements for flexibility
                                                                                                                Page 3
                          Design Guidance – Address Input and Display
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 22 January 2010

2            RECOMMENDATIONS AND GUIDANCE
    The guidance provided in this document is based upon a programme of user research, including:
          A desk-based research project looking at a range of information entry Web pages and
           clinical applications
          A Web-based survey of 41 respondents drawn from ISVs, healthcare administrative staff
           and healthcare professionals, including clinicians and community pharmacists
          A patient safety assessment
    Three different address controls are described in this document, to support:
          Input of a full address with additional optional functionality to find the postcode
          Finding an address based on a known postcode
          Input of a non-UK address

2.1          Address Display
    There are two forms of address display:
          In-form or vertically aligned (see Figure 1)
          In-line or horizontally aligned (see Figure 2)
    These apply whether the address is a UK or non-UK address.

    Figure 1: Example of Vertical Address Display

    Figure 2: Example of Horizontal Address Display

2.1.1            Guidance
    ID                     Guideline                                                                                    Status
    ADR-0001               When displaying an address horizontally, only use a single comma and a single space, in that Mandatory
                           order, to delimit the different fields

    ADR-0002               When displaying an address vertically, do not use a comma at the end of a line               Recommended

    ADR-0003               When displaying an address vertically, left-align the text for ease of reading               Recommended

    ADR-0004               When truncating an address, add an ellipsis to indicate that the address is not displayed in full Recommended
                           and, where appropriate, provide a means for the user to access the full address

    ADR-0005               Do not split an address element when wrapping an address across multiple lines               Recommended

    ADR-0006               Where part of an address is not available, do not display an empty string in its place       Recommended

    ADR-0007               Display the postcode in all caps with a space between the first part (the outcode) and the   Mandatory
                           second part (the incode)

    ADR-0008               Do not display labels for individual address elements                                        Recommended
    Table 1: Guidance for Address Display

                                                                                                                                    Page 4
                                   Design Guidance – Address Input and Display
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 22 January 2010

2.1.2         Examples of Correct Usage
  Usage Format                                          Example               Comments
           All elements vertically in correct                                The address is displayed correctly in full
            sequence

           All elements horizontally in correct        See Figure 2          The address is displayed correctly in full
            sequence

           Partial address display vertically in the                         The user can see that the address is
            correct sequence                                                  incomplete

           Partial address display horizontally in     See Figure 5          The user can see that the address is
            the correct sequence                                              incomplete
 Table 2: Correct Address Display Examples

2.1.3         Examples of Incorrect Usage
  Usage Format                                          Example               Comments
           Splitting address elements                                        It is difficult to read the address and
                                                                              distinguish the fields correctly

           Displaying labels                                                 The labels consume space but are not
                                                                              helpful: the address can be intuitively
                                                                              understood and address elements
                                                                              easily distinguished, without the labels

           Showing empty address elements              See Figure 7          The address looks incomplete yet may
                                                                              not be: the user cannot tell
 Table 3: Incorrect Address Display Examples

                                                                                                                  Page 5
                                Design Guidance – Address Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 22 January 2010

2.1.4           Rationale
  This section discusses the reasons underlying the guidance for address display.

2.1.4.1             Splitting Addresses
  The address is a secondary but important item of information for correct patient identification, as it
  can distinguish the correct individual when multiple matches are found based only on name and
  gender. The address must therefore be displayed in a form that is easy to read and understand.
  The vertical display shown in Figure 1 supports this easy-to-read form, even for very long
  addresses. The horizontal display shown in Figure 2 is less effective. In, Figure 1 and Figure 2, the
  individual elements of the address are kept intact. In cases where display space is restricted,
  column widths may require that address elements are split, for example, displaying a street or a
  county name over multiple lines. This makes the address harder to read correctly, as can be seen
  in Figure 3:

  Figure 3: Address Element Wrongly Split in a Vertical Display

  The guidance therefore recommends that text is not split within an address element.

2.1.4.2             Truncating Addresses
  The importance of the address in patient identification has been discussed in section 1.1 and
  section 2.1.4.1. Truncating an address can make patient identification harder. It is therefore
  important to ensure the user is aware that an address is truncated and that they are able to access
  the full address. The guidance recommends the use of an ellipsis to achieve this, as shown in
  Figure 4 and Figure 5:

  Figure 4: Partial Address in a Vertical Display

  Figure 5: Partial Address in a Horizontal Display

2.1.4.3             Readability
  In written communication a mix of left-aligned and right-aligned addresses may be appropriate.
  Such addresses should be displayed in the same form on a monitor as they would appear when
  printed. However, when addresses that are not part of printed communication are to be viewed on
  a monitor, the guidance recommends left-aligning them, as that is normal and expected practice.

                                                                                                    Page 6
                                   Design Guidance – Address Input and Display
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 22 January 2010

2.1.4.4            Labels
  Labels for each address element, such as ‘Town/City’ and ‘County’ are useful when entering
  addresses, and are discussed later in this document. However, when reading an address, these
  labels are rarely helpful as users can understand an address themselves, identifying the different
  elements correctly. Users of screen reader software will be inconvenienced when an easily
  understood address is broken up into its constituent elements, and each label spoken before the
  element. Hence this guidance recommends that labels for individual address elements, as shown in
  Figure 6, should not be displayed:

  Figure 6: Labels Wrongly Applied in a Vertical Display

2.1.4.5            Missing Address Elements
  When displaying an address it is not helpful to display empty address elements, as shown in
  Figure 7:

  Figure 7: Empty Address Elements Wrongly Used in a Horizontal Display

  This design is confusing and implies the address is incorrect. It may arise because not all elements
  in the address input control are required, for example, when inputting a London address, the
  ‘County’ element may be left blank. Additionally, screen reader software would read the
  punctuation and further confuse the user.
  For both these reasons, the guidance recommends empty address elements are not displayed.

2.2        Address Input Data Elements
  The minimum number of boxes required for inputting a UK address can vary. Many addresses will
  only require three input boxes:
        House number and street
        Town or city
        Postcode
  In addition, non-London addresses will require a ‘County’ box, and all addresses might need the
  name of a locality or suburb. Some addresses are not in a town but may refer to one, for example,
  for a farm near a town. Finally, as this control is specifically for UK addresses, no ‘Country’ input
  box need be provided. In this guidance we therefore recommend provision of six input boxes.
  This guidance only recommends the number of input boxes so that ISVs have the flexibility to
  design the address control as suited to their application.

2.2.1          First Three Address Lines
  Any address input control must not require that a property have a number, as some will only have a
  name, for example, ‘The Old Mill House’. The input control must also support the input of multiple
  numbers, such as for a flat and its building. Therefore, in this guidance we mandate that the first
  three input boxes for all details up to and including street have labels that do not constrain what can
  be entered. These labels are ‘Line 1’, ‘Line 2’, and ‘Line 3’ respectively.

                                                                                                    Page 7
                                  Design Guidance – Address Input and Display
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 22 January 2010

 Figure 8 illustrates an example address input control in a default state:

 Figure 8: Example Address Input Control

2.2.2         Town/City
 The Town/City input box is displayed immediately below the ‘Line 3’ input box and is in the form of
 a free-text entry box.
 Figure 9 illustrates an example address input control with the Town/City data input:

 Figure 9: Example Address Input Control with Town/City Input

2.2.3         County
 The County input box is displayed immediately below the Town/City input box and is in the form of
 a free-text entry box.
 Figure 10 illustrates an example address input control with the County input:

 Figure 10: Example Address Input Control with County Input
                                                                                                Page 8
                                Design Guidance – Address Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 22 January 2010

2.2.4         Postcode
 The postcode is a combination of between five and seven letters and numbers. Each postcode
 consists of two parts separated by a single space:
       The outward postcode, or outcode
       The inward postcode, or incode
 Permitting the input of partial postcodes is recommended because often this is all that users will
 know or have access to. However, data quality can be improved by enabling a user to search for a
 postcode given the input of as much address information as they can provide. This facility would
 require that clinical applications offer a postcode-lookup service. Where this facility is not
 supported, do not misleadingly display a means to invoke it, such as a button. In such cases, where
 a postcode is entered, it cannot be validated against the address, but only against a format
 description, as described in Cabinet Office: UK Government Data Standards Catalogue {R2}.
 The label for the postcode input box is ‘Postcode’ (and not ‘Post code’), as this is the spelling used
 in Cabinet Office: UK Government Data Standards Catalogue {R2}, and by Royal Mail {R3}. Where
 input boxes are used, the guidance on their labels is mandatory.
 Figure 11 illustrates an example address input control with a Postcode input:

 Figure 11: Example Address Input Control with Postcode Input

2.3       UK Address Input
 The purpose of the UK address input control is to enable the user to input a UK address. The
 control is shown in Figure 12:

 Figure 12: The UK Address Input Control

                                                                                                  Page 9
                               Design Guidance – Address Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 22 January 2010

2.3.1        Hints, Prompts and Tooltips
 The input control may provide a hint, prompt, or tooltip. Hints are instructional text placed outside
 but adjacent to the ‘Text Input Box’. Prompts are commonly known as watermarks and comprise
 instructional text placed within a text input box. Tooltips are instructional text that appear when the
 mouse pointer is placed over the text input box. The wording of hints, prompts, and tooltips is left to
 the designers of clinical applications. Examples of hints, prompts, and tooltips are shown in Figure
 13, Figure 14 and Figure 15 respectively:

 Figure 13: Example UK Address Control with Hints

 Figure 14: Example UK Address Control with Prompts

 Figure 15: Example UK Address Controls with Tooltips

                                                                                                  Page 10
                               Design Guidance – Address Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 22 January 2010

2.3.2        Guidance
 ID                    Guideline                                                                                          Status
 ADR-0011              Provide the following text input boxes, in the stated order, for UK address input:                 Recommended
                        Three boxes for input of all details up to and including the street name
                        One box for input of the town or city
                        One box for input of the county
                        One box for input of the postcode

 ADR-0012              Where text input boxes are used, they must be labelled as follows:                                 Mandatory
                        The three boxes for input of all details up to and including the street name, must be
                         labelled ‘Line 1’, ‘Line 2’ and ‘Line 3’ respectively
                        The box for input of the town or city should be labelled ‘Town/City’
                        The box for input of the county should be labelled ‘County’
                        The box for input of the postcode should be labelled ‘Postcode’

 ADR-0013              Provide a means to find a postcode, to enhance data quality                                        Recommended

 ADR-0014              Display a means to find a postcode only if such a service is supported, positioning it after the   Recommended
                       postcode input box, and labelling it ‘Find Postcode’

 ADR-0015              Set the length of the postcode input box to 8 characters                                           Mandatory

 ADR-0016              Set the length of the county input box to 18 characters                                            Recommended

 ADR-0017              Set the height of each text input box to the largest character height in the currently active      Recommended
                       display font, taking the user’s settings into account

 ADR-0018              Display the text input boxes vertically with left alignment                                        Recommended

 ADR-0019              Display the labels immediately to the left of their corresponding text input box, mutually         Recommended
                       right-aligning the labels

 ADR-0020              Permit address input via all the mechanisms supported on a platform such as, but not limited       Recommended
                       to, typing on a keyboard, copy and paste, and handwriting with a stylus

 ADR-0021              Permit the following characters in the address: uppercase and lowercase letters, numbers 0         Recommended
                       to 9, the full stop, forward slash, comma, colon, apostrophe space and the hyphen
 Table 4: Guidance for UK Address Input

2.3.3        Examples of Correct Usage
  Usage Format                                          Example                                    Comments
           The text input boxes are left-aligned,                                                 The boxes are sized to give some
            their labels are right-aligned                                                         indication of the input they are suited
                                                                                                   for. The labels are aligned to their
                                                                                                   respective boxes. All the boxes are
                                                                                                   present. These factors together
                                                                                                   contribute to complete and error-free
                                                                                                   address entry
 Table 5: Correct UK Address Input Example

                                                                                                                                     Page 11
                               Design Guidance – Address Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 22 January 2010

2.3.4          Examples of Incorrect Usage
  Usage Format                                       Example                   Comments
            The text input boxes are of the same                              These boxes do not bear any relation to
             size                                                              the size of data to be input into them,
                                                                               for example, the postcode box is much
                                                                               too large. This could mislead the user
                                                                               into entering incorrect data

            The labels are left-aligned                                       Left-alignment makes it difficult to relate
                                                                               the labels to their boxes and the wrong
                                                                               data may be entered, for example the
                                                                               county may be entered in the ‘Postcode’
                                                                               box

            The ‘Postcode’ input box precedes the                             The postcode must be the last item of a
             ‘County’ input box                                                UK address as that is the Royal Mail’s
                                                                               recommendation for efficient sorting

            There is no ‘Postcode' input box                                  The postcode must be entered for
                                                                               efficient sorting and to minimise the risk
                                                                               to patient confidentiality that will occur if
                                                                               information is sent to the wrong address

  Table 6: Incorrect UK Address Input Examples

2.3.5          Rationale
  This section discusses the reasons underlying the guidance for UK address input.

2.3.5.1            Alternative Designs
  Alternative designs, shown in Figure 16, Figure 17 and Figure 18, were considered for the UK
  address input control.

  Figure 16: A Rejected Design – Horizontal Input

  Horizontal layout saves on screen space but risks making address input more error prone. This is
  because it is harder for the user to read all the elements together when checking an address after
  input. The vertical layout is superior in this respect and thereby better supports data quality. For this
  reason, the horizontal layout shown in Figure 16 is rejected.

                                                                                                                   Page 12
                                 Design Guidance – Address Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 22 January 2010

  Figure 17: A Rejected Design – Unstructured Input

  Figure 18: A Rejected Design – Semi-Structured Input

  Unstructured address input is the easiest form of data entry for a user. It allows for unusually long
  addresses to be entered. Also, where data is entered using copy and paste it allows for very
  efficient input (there is no need to repeatedly tab to the next field). However, there is a great cost in
  terms of data quality. An address entered in a free-form box cannot be validated because a clinical
  application would not be able to parse the individual elements, for example, the street name. Thus,
  any errors in this address input will be propagated instead of being sifted out. In the online user
  survey 78% of respondents preferred the design in Figure 15 to those in Figure 17 and Figure 18.
  For these reasons, the unstructured and semi-structured address input designs were rejected.

2.3.5.2           Permissible Characters
  It is important to support input of the full range of potential addresses. Most frequently, these will be
  ordinary residential addresses but support is also required for other addresses such as, but not
  limited to, post office boxes, caravan sites, and mobile homes. For UK addresses, diacritical
  characters need not be supported. However, characters such as the full stop, forward slash,
  comma, hyphen, colon, apostrophe, space and all alpha-numeric characters could form part of a
  UK address and so their input should be supported.

2.3.5.3           Height and Length of the Address Input Boxes
  The dimensions of each text input box should correctly indicate the intended purpose of the box,
  namely to enter a single element of an address. The height of each box should therefore be
  adequate to accommodate a single line, not a paragraph. The length of each box should be
  sufficient to permit the user to read the address element in its entirety. The checking of an address
  after it has been entered is a common task that users will perform each time. When a user enters
  an address in a box that is too short, the initial characters will scroll to the left side of the box. The
  user will then be forced to scroll back to the start of the box to reveal the initial characters.
  Keyboard users will either have to locate the left arrow or the HOME key, thereby reducing task
  efficiency.

                                                                                                       Page 13
                                Design Guidance – Address Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 22 January 2010

  Guidance on precise lengths can only be given for the input boxes for postcode and county. The
  length of the postcode input box must be eight characters exactly, as this is the maximum
  permissible length stated in Cabinet Office: UK Government Data Standards Catalogue {R2}. The
  longest name for a county in the United Kingdom is Kirkcudbrightshire, in Scotland, which is 18
  characters long. The minimum length of the county input box must, therefore, be 18 characters as a
  box of this size will display a county name in its entirety. In the absence of ready access to
  comprehensive databases for town, city, and street names, no precise lengths can be mandated in
  this guidance. Designers of clinical applications will be constrained by the screen size available to
  their application and must decide on sizes for these input boxes accordingly.

2.3.5.4            Enabling the Postcode Finder
  The minimum information that a postcode finder requires to identify a location is a street name and
  a town or city name. Hence, only enable the postcode finder after the user has entered this
  information. Figure 19 to Figure 22 show this sequence.

  Figure 19: Input of House Number

  Figure 20: Input of House Name

  Figure 21: Input of Street Name

                                                                                                 Page 14
                                    Design Guidance – Address Input and Display
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 22 January 2010

 Figure 22: Input of Town/City Enables the Postcode Finder

      Important
      Where a postcode lookup service is provided, it need only support UK postcodes.

2.4       UK Address Finder
 The purpose of the UK Address Finder control is to enable the user to find a UK address. Such a
 control is shown in Figure 23:

 Figure 23: The UK Address Finder Control

 A clinical application should only provide this control if it supports a postcode-based address lookup
 service. Typically, all the matching addresses found in the database are displayed in an address
 picker. The user then selects one of these addresses and it is stored as if the user had input the
 whole address. There are two advantages in such an approach:
       There is an increase in data quality as only valid address can be selected
       The user is saved time by not having to input the full address
      Note
      The implementation of an address picker is not part of the scope of this guidance and is therefore not
      described in this document.

2.4.1         Hints, Prompts and Tooltips
 The finder control may provide hints, prompts, or tooltips. The wording of hints and prompts will
 depend on the context. Examples of the display of hints, prompts, and tooltips, including suggested
 text, are shown in Figure 24, Figure 25 and Figure 26 respectively.

 Figure 24: Example of an Address Finder Control with Hints

                                                                                                           Page 15
                                Design Guidance – Address Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 22 January 2010

 Figure 25: Example of an Address Finder Control with Prompts

 Figure 26: Examples of an Address Finder Control with Tooltips

2.4.2         Guidance
 ID                     Guideline                                                                                          Status
 ADR-0031               Provide the following text input boxes, in the stated order, for input of a UK address:            Recommended
                         One box for input of house or building number
                         One box for input of house or building name
                         One box for input of the postcode

 ADR-0032               Where text input boxes are used, they must be labelled as follows:                                 Mandatory
                         The box for input of house or building number should be labelled ‘House/Building Number’
                         The box for input of house or building name should be labelled ‘House/Building Name’
                         The box for input of the postcode should be labelled ‘Postcode’

 ADR-0033               Display a means to find an address only if such a service is supported, positioning it after the   Recommended
                        postcode input box and labelling it ‘Find Address’

 ADR-0034               Set the length of the postcode input box to 8 characters                                           Mandatory

 ADR-0035               Set the height of each text input box to the largest character height in the currently active      Recommended
                        display font, taking the user’s settings into account

 ADR-0036               Display the text input boxes vertically with left alignment                                        Recommended

 ADR-0037               Display the labels immediately to the left of their corresponding text input box, mutually         Recommended
                        right-aligning the labels

 ADR-0038               Permit address input via all the mechanisms supported on a platform such as, but not limited       Recommended
                        to, typing on a keyboard, copy and paste, and handwriting with a stylus
 Table 7: Guidance for UK Address Finder

                                                                                                                                    Page 16
                                Design Guidance – Address Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 22 January 2010

2.4.3         Examples of Correct Usage
  Usage Format                                         Example                Comments
            The boxes have the correct relative       See Figure 23          The boxes are sized to give some
             sizes, are in the right order, and are                           indication of the input they are suited
             correctly aligned with their labels                              for. The labels are aligned to their
                                                                              respective boxes. All the boxes are
                                                                              present. These factors together
                                                                              contribute to complete and error-free
                                                                              address entry
  Table 8: Correct UK Address Finder Example

2.4.4         Examples of Incorrect Usage
  Usage Format                                         Example                Comments
            The house/building name and number        See Figure 27          This design does not encourage the
             fields are merged                                                user to provide both number and name
                                                                              leading to a larger resulting set from
                                                                              which an address will need to be
                                                                              selected

            The ‘Find Address’ button is positioned                          Data input must precede the search for
             at the top                                                       an address, but this design implies the
                                                                              opposite and is therefore confusing

  Table 9: Incorrect UK Address Finder Examples

2.4.5         Rationale
  This section discusses the reasons underlying the guidance for the UK Address Finder control.

2.4.5.1           Alternative Designs
  Research into the design of an address finder control showed consensus had been reached on
  best practice. As there was little variation in competing designs, extensive further exploration was
  not required. However, two alternative designs, shown in Figure 27 and Figure 28, were considered
  for the UK address finder control.

  Figure 27: A Rejected Design – Merged Fields

  A postcode-based address finding service requires both a postcode and a building number to give
  a unique match. In some cases, buildings will have a name, rather than a number, and users
  require support to enter such addresses. Flat numbers within a building are not relevant as all
  apartments in a building will share the same postcode. When compared with Figure 23, the design
  in Figure 27 confuses the precise information required, and may cause users to leave out a building
  number or add an apartment number. In the online user survey 76% of respondents said they could
  not see any problems with the design in Figure 23. To support data quality, the design in Figure 27
  was therefore rejected.

                                                                                                                Page 17
                                Design Guidance – Address Input and Display
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 22 January 2010

  In another candidate design, two input boxes were provided for house name and for house number
  but with the common text in their labels separated out, as shown in Figure 28:

  Figure 28: A Rejected Design – Part Merged Labels

  The problem with this design is that it can require considerable effort from developers to create a
  control that would display as shown on all software platforms. The careful positioning of the ‘House
  or Building’ label is non-trivial and that of the vertical bar even more so. This design was therefore
  rejected in favour of Figure 23.

2.4.5.2            Height and Length of the Input Boxes
  The dimensions of each text input box should correctly indicate the intended purpose of the box,
  namely to enter a single element of an address. The height of each box should therefore be
  adequate to accommodate a single line, not a paragraph. Guidance on precise lengths can only be
  given for the house/building number and postcode input boxes. The length of the house number
  input box should be a minimum of five characters so as to accommodate most likely numbers. The
  length of the postcode input box must be eight characters exactly, as this is the maximum
  permissible length stated in Cabinet Office: UK Government Data Standards Catalogue {R2}. In the
  absence of ready access to comprehensive databases for street names, no precise lengths can be
  mandated in this guidance. Designers of clinical applications will be constrained by the screen size
  available to their application and must decide on sizes for these input boxes accordingly.

2.4.5.3            Labels
  As stated above, apartment numbers are not relevant for a postcode-based address search. Hence
  the labels are specific in asking for a house or building name and number.

2.4.5.4            Enabling the ‘Find Address’ Functionality
  To find an address, the minimum information required is the postcode. In most cases, this will
  match with a handful of properties. A unique match can be obtained with the addition of the building
  number. Therefore, the ‘Find Address’ functionality must only be enabled after the postcode has
  been entered, as shown in the following sequence in Figure 29:

  Figure 29: Input of Postcode Enables the ‘Find Address’ Functionality

                                                                                                   Page 18
                                 Design Guidance – Address Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 22 January 2010

2.5       Non-UK Address Input
 There may be reasons to input a foreign address for a patient, for example, for an expatriate living
 abroad, a patient living abroad temporarily, or a patient providing the address of their next of kin.
 The non-UK address input control is shown in Figure 30:

 Figure 30: The Non-UK Address Input Control

2.5.1        Guidance
 ID                    Guideline                                                                                       Status
 ADR-0050              Provide the following boxes, in the stated order, for input of a non-UK address:                Recommended
                        One editable combo box for country selection
                        Four boxes for input of all details up to and including the street name
                        One box for input of the town or city
                        One box for input of the postal code

 ADR-0051              Where used, the boxes must be labelled as follows:                                              Mandatory
                        The editable combo box for country selection should be labelled ‘Country’
                        The four boxes for input of all details up to and including the street name, should be
                         labelled ‘Line 1’, ‘Line 2’, ‘Line 3’ and ‘Line 4’ respectively
                        The box for input of the town or city should be labelled ‘Town/City’
                        The box for input of the postal code should be labelled ‘Postal Code’

 ADR-0052              Set the height of each text input box to the largest character height in the currently active   Recommended
                       display font, taking the user’s settings into account

 ADR-0053              Display the text input boxes vertically with left alignment                                     Recommended

 ADR-0054              Display the labels immediately to the left of their corresponding text input box, mutually      Recommended
                       right-aligning the labels

 ADR-0055              Permit address input via all the mechanisms supported on a platform such as, but not limited    Recommended
                       to, typing on a keyboard, copy and paste, and handwriting with a stylus

 ADR-0056              Use an editable drop-down combo box for country names                                           Recommended

 ADR-0057              Use the list of country names in International Organization for Standardization (ISO) 3166-1    Mandatory
                       {R4} for the country selector drop-down combo box

 ADR-0058              Display the country names in alphabetic order                                                   Recommended

 ADR-0059              Display the country names with left alignment                                                   Recommended
 Table 10: Guidance for non-UK Address Input

                                                                                                                                Page 19
                               Design Guidance – Address Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 22 January 2010

2.5.2        Examples of Correct Usage
  Usage Format                                       Example                Comments
          The boxes have the correct relative       See Figure 30          The boxes are sized to give some
           sizes, are in the right order, and are                           indication of the input they are suited
           correctly aligned with their labels                              for. The labels are aligned to their
                                                                            respective boxes. All the boxes are
                                                                            present. These factors together
                                                                            contribute to complete and error-free
                                                                            address entry

          Ordering of country names                                        The country names are taken from ISO
                                                                            3166-1 {R4}, are displayed in
                                                                            alphabetical order and are left-aligned.
                                                                            With the use of the ISO list, there will
                                                                            always be an entry for any country a
                                                                            user wishes to select, and it will be
                                                                            found in the same place in the list in all
                                                                            ISV applications. These factors promote
                                                                            data quality and a consistent user
                                                                            experience
 Table11: Correct Non-UK Address Input Examples

2.5.3        Examples of Incorrect Usage
  Usage Format                                       Example                Comments
          The country combo box is the last input                          Country selection must be the first item
           box                                                              so users are aware from the outset that
                                                                            they are entering a non-UK address

          The alignment of the labels and input                            The extra spacing between the labels
           boxes is wrong                                                   and the boxes may cause a user to
                                                                            enter the wrong data in a box,
                                                                            compromising data quality

          There is no input box for postal code                            The postal code makes for efficient and
                                                                            correct delivery and must always be
                                                                            sought from the user. The absence of a
                                                                            postal code input box compromises
                                                                            data quality and potentially patient
                                                                            confidentiality

 Table 12: Incorrect Non-UK Address Input Examples

                                                                                                              Page 20
                              Design Guidance – Address Input and Display
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 22 January 2010

2.5.4          Rationale
  This section discusses the reasons underlying the guidance for the non-UK Address Input control.

2.5.4.1            Alternative Designs
  A seemingly obvious design for a non-UK address input control is derived from the UK-address
  control shown in Figure 12 but with the ‘County’ input box replaced with a ‘Country’ input box, as
  shown in Figure 31:

  Figure 31: A Rejected Design – Derivative of the UK Address Control

  The similarity with the UK-address control can be a problem. Users may mistake this design for a
  UK-address control and wish to enter a UK address, perhaps not realising that the county cannot
  be entered, thus compromising data quality. Also, for all the permutations of foreign addresses,
  three lines may not be adequate to input all details up to and including street name. Additionally,
  instead of requiring users to type in a country, it would be helpful if they could select a country from
  a list (see section 2.5.4.2). Finally, ‘Postcode’ is the term used for postal codes in the UK whereas
  ‘Postal code’ is the more general term used internationally.
  An alternative design also considered (displayed in Figure 32) shows how some of those negative
  aspects might be addressed:

  Figure 32: A Rejected Design – Modified UK Address Design Using a Combo Box

  However, this design still does not differentiate itself from the UK address box. A better approach is
  to place the ‘Country’ box at the top, discouraging input of a UK address. This is the approach
  taken in the recommended design shown in Figure 30.

                                                                                                    Page 21
                                 Design Guidance – Address Input and Display
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 22 January 2010

2.5.4.2      The Country Selector
  A comprehensive list of countries must be displayed in the drop-down list in the Country input box.
  This guidance mandates the list of countries is taken from ISO 3166-1 English country names and
  code elements {R4}. This will ensure that users can reliably find the country for which they need to
  enter an address. Furthermore, consistency across other controls is enhanced as ISO 3166 is also
  mandated for telephone number input as described in Design Guidance – Telephone Number Input
  and Display {R5}. Additionally, the list should be ordered in a systematic and consistent form so
  that users can efficiently find the required country, whatever clinical application they are using. An
  alphabetic ordering meets this requirement. Finally, some users may find selecting a country from a
  drop-down list tedious, preferring to type in the country name. The Country box should therefore be
  editable to support a user typing text directly into the box, bypassing the drop-down list altogether.

2.5.4.3      Screen Readers
  Users of screen readers may find the reading out of a list of countries tedious. Others may prefer
  not to select from a list as this requires moving a hand from the keyboard to the mouse and then
  scrolling to select the correct item. This guidance therefore recommends the country list be
  provided in an editable combo box so that users can type the country directly, or select from a list,
  as they prefer.

                                                                                                   Page 22
                       Design Guidance – Address Input and Display
                       Prepared by Microsoft, Version 2.0.0.0
                       Last modified on 22 January 2010

3              DOCUMENT INFORMATION

3.1            Terms and Abbreviations
    Abbreviation                        Definition
    CUI                                 Common User Interface

    FAQ                                 Frequently Asked Question

    GP                                  General Practitioner

    ISO                                 International Organization for Standardization

    ISV                                 Independent Software Vendor

    PDA                                 Personal Digital Assistant

    UI                                  User Interface
    Table 13: Terms and Abbreviations

3.2            Definitions
    Term                                 Definition
    Current best practice                Current best practice is used rather than best practice, as over time best practice guidance may
                                         change or be revised due to changes to products, changes in technology, or simply the additional
                                         field deployment experience that comes over time.

    Status                               Indicates the extent to which you should follow the guideline when defining your UI implementation.
                                         There are two levels:
                                          Mandatory – An implementation should follow the guideline
                                          Recommended – An implementation is advised to follow the guideline
    Table 14: Definitions

3.3            Nomenclature
    This section shows how to interpret the different styles used in this document to denote various
    types of information.

3.3.1            Body Text
    Text                                                                   Style
    Code                                                                   Monospace

    Script

    Other markup languages

    Interface dialog names                                                 Bold

    Field names

    Controls

    Folder names                                                           Title Case

    File names
    Table 15: Body Text Styles

                                                                                                                                     Page 23
                                  Design Guidance – Address Input and Display
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 22 January 2010

3.3.2        Cross References
 Reference                                                       Style
 Current document – sections                                     Section number only

 Current document – figures/tables                               Caption number only

 Other project documents                                         Italics and possibly a footnote

 Publicly available documents                                    Italics with a footnote

 External Web-based content                                      Italics and a hyperlinked footnote
 Table 16: Cross Reference Styles

3.4       References
 Reference        Document                                                                                           Version
 R1.              Design Guidance – Patient Banner                                                                   4.0.0.0

 R2.              Cabinet Office: UK Government Data Standards Catalogue
                  http://www.govtalk.gov.uk/gdsc/html/noframes/PostCode-2-1-Release.htm

 R3.              Royal Mail: Find a Postcode
                  http://postcode.royalmail.com/portal/rm/postcodefinder?catId=400145&pageId=pcaf_pc_search&gear=p
                  ostcode

 R4.              ISO 3166-1: 2006 – English country names and code elements:
                  http://www.iso.org/iso/country_codes/iso_3166_code_lists/english_country_names_and_code_elements
                  .htm

 R5.              Design Guidance – Telephone Number Input and Display                                               2.0.0.0
 Table 17: References

                                                                                                                         Page 24
                               Design Guidance – Address Input and Display
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 22 January 2010
