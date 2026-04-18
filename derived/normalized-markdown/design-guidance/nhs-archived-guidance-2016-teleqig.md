# Telephone Number Input and display - QIG

## Provenance
- Source file: `raw/sources/design-guidance/nhs-archived-guidance-2016/teleqig.pdf`
- Extracted text: `derived/extracted-text/design-guidance/nhs-archived-guidance-2016-teleqig.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Telephone Number
Input and Display
Quick Implementation Guide

Edition 1
22nd April 2010

                             Copyright ©2013 Health and Social Care Information Centre

   Contents

   Introduction                                                                                                           2

   Telephone Number Display                                                                                               3

   Telephone Number Input                                                                                                 6
       Prompts                                                                                                            7
       Tooltips                                                                                                           7
       Assisted Country Selector                                                                                        11

   Appendix                                                                                                             14

This document was prepared for NHS Connecting for Health which ceased to exist on 31 March 2013. It may contain
references to organisations, projects and other initiatives which also no longer exist. If you have any questions
relating to any such references, or to any other aspect of the content, please contact
cuistakeholder.mailbox@hscic.gov.uk

Copyright:
You may re-use this information (excluding logos) free of charge in any format or medium, under the terms of the Open
Government Licence. To view this licence, visit nationalarchives.gov.uk/doc/open-government-licence or email
psi@nationalarchives.gsi.gov.uk.

   1                                                                           Copyright ©2013 Health and Social Care Information Centre

                                                                                                           Guidance

Introduction
     Telephone numbers are essential for communicating with patients and with other people
     inside and outside the NHS. Therefore, they must be read and entered accurately and not
     confused with other numbers, such as the patient's NHS Number.

     Important
     Although it contains all of the guidance points, this document omits supporting
     information and is therefore not intended as a substitute for the full NHS CUI document
     Telephone Number Input and Display1. Refer to that document for the definitive
     statement of the design guidance in this area.
     The visual representations used to display the guidance are illustrative only. Stylistic
     choices (for example, display font used), unless otherwise specified, are not part of the
     guidance and are therefore not mandatory requirements.

1
    Telephone Number Input and Display – User Interface Design Guidance (v4.0.0.0)

                                                                  Copyright ©2013 Health and Social Care Information Centre   2

Guidance

Telephone Number Display

    Telephone numbers in NHS clinical applications can comprise up to four elements:

                                            Country Code
                                                                 Local Number

                                +1 212 555 2368 x1234
                                             Area Code                 Extension Number

                                                      TID-0001
               Home    0118 496 0123                  If the country code is for the UK,
                                                      for example, ‘+44’ or ‘0044’, then
                                                      it must not be displayed
                                                      Mandatory

                                                      TID-0002
               Home    +1 212 555 2368                When displayed, the country
                                                      code must always be displayed
                                                      with a ‘+’ sign in front of it
                                                      Mandatory
                                                      TID-0003

                                                      When displayed, the country
                                                      code must not display any
                                                      leading zeros
                                                      Mandatory

                                                      TID-0004
               Home    +1 212 555 2368
                                                      When displayed, the country
                                                      code must be separated from the
                       space                          rest of the telephone number by
                                                      a single space
                                                      Mandatory

3                                                                     Copyright ©2013 Health and Social Care Information Centre

                                                                           Guidance

Telephone Number Display

                               TID-0005
       Work   0118 123 4567    For UK telephone numbers,
                               the area code must not be
                               displayed with brackets
                               around it
                               Mandatory
       Work   0118 123 4567    TID-0006

                               For UK telephone numbers,
                space          the area code must be
                               separated from subsequent
                               numbers by a space
                               Mandatory

                               TID-0007
         0118 987 6543 x1234
                               For UK telephone numbers,
                               extension numbers can be
                               displayed with an ‘x’ preceding
                               and adjacent to the number
                               Recommended

                               TID-0008
         0118 987 6543 x1234
                               For UK telephone numbers
                               where the telephone and
                    space      extension numbers are
                               displayed within a single input
                               box, the extension number
                               must be separated from the
                               rest of the telephone number
                               by a single space that
                               precedes the ‘x’
                               Mandatory

                                  Copyright ©2013 Health and Social Care Information Centre   4

Guidance

Telephone Number Display

    Telephone Number   Extension   TID-0026

    987 6543            1234       For UK telephone numbers
                                   where the extension number
                                   is displayed in a separate
                                   input box, a label must be
                                   shown above the input box to
                                   indicate the content
                                   Recommended

                                   TID-0009
           Work   0118 123 4567    For UK telephone numbers, if
                                   there are more than six digits
                       space       in the local number, (in other
                                   words, not the country code,
                                   area code or extension
                                   number), then a space must
                                   be inserted before the final
                                   four digits
                                   Mandatory

                                   TID-0010

                                   The telephone number should
                                   be formatted for display
                                   according to the rules detailed
                                   in the Appendix
                                   Recommended

5                                              Copyright ©2013 Health and Social Care Information Centre

                                                                                               Guidance

Telephone Number Input

Telephone number input can be supported by one of two designs. Both designs will
accept and correctly identify both UK and non-UK numbers.

 1. A single unassisted entry input box, optimised for UK telephone number entry.
    This design should be used when it is anticipated that the majority of
    telephone numbers input will be UK numbers:

                Telephone Number       e.g. 01234 567890

 2. A single entry input box with country selector assistance, optimised for non-UK
    telephone numbers:

                   Country Code       Telephone Number
                    +44 (UK)           e.g. 01234 567890

                                                      Copyright ©2013 Health and Social Care Information Centre   6

Guidance

Telephone Number Input

Prompts
    The choice of what string to use for the prompt for an unassisted text entry box will be
    context specific. Here are some suggested prompts:

                        Home     e.g. 01234 567890

                         Work    e.g. 020 1234 5678
                                 Telephone Number              Extension
                         Work    e.g. 050 1234 5678             e.g. 1234

Tooltips
    The choice of what string to use for the tooltip for an unassisted text entry box will be
    context specific. Here are some suggested tooltips:

                        Home     e.g. 01234 567890

                                          Enter the ‘home’ telephone number

                         Work    e.g. 01234 567890

                                          Enter the ‘work’ telephone number.
                                          To include an extension number, add an
                                          ‘x’ to the front of the extension number

                                 Telephone Number              Extension
                         Work    e.g. 050 1234 5678             e.g. 1234

                                          Enter the ‘work’ telephone number.
                                          To include an extension number, enter the
                                          number into the extension number box

7                                                                       Copyright ©2013 Health and Social Care Information Centre

                                                                                           Guidance

Telephone Number Input

                                               TID-0011
Telephone Number       e.g. 01234 567890
                                               Use a free-text input box for
                                               the entry of telephone number
                                               Mandatory

                                               TID-0027
  Telephone Number              Extension
   e.g. 050 1234 5678              e.g. 1234   Use a free-text input box
                                               where extension number is
                                               input into a separate input box
                                               Mandatory

                                               TID-0012

                 Unformatted text entry        Ensure the input box accepts
           1         01181234                  formatted and unformatted
                                               entries
           2         01181234567               Mandatory

           3         0118 123 4567

                 Formatted text entry

           1         01181-2

           2         01181-23-45

           3         0118 123 4567

                                                  Copyright ©2013 Health and Social Care Information Centre   8

Guidance

Telephone Number Input

                                  TID-0013
           1   01181-2            If the number can be identified
                                  as a valid type (as detailed in
           2   01181-23-45        Appendix), the input box should
                                  strip out formatting upon losing
           3   0118 123 4567      focus and replace it with a
                                  reformatted equivalent
                                  Mandatory

                                  TID-0014

                                  Display a reformatted entry to
                                  the user which places spaces in
                                  logical locations for readability
                                  Mandatory

                                  TID-0015
           1   +888 12.3          If the number cannot be
                                  identified as a valid type (as
           2   +888 12.34.5       detailed in Appendix), display the
                                  entry to the user as it was
           3   +888 12.34.56.78   entered
                                  Mandatory

                                  TID-0016
           1   +44 118 123 4567   Remove the UK country code
                                  from display after it is committed
           2   0118 123 4567
                                  Mandatory

                                  TID-0018

                                  Do not display UK numbers with
                                  the international prefix
                                  Mandatory

9                                             Copyright ©2013 Health and Social Care Information Centre

                                                                          Guidance

Telephone Number Input

                             TID-0017
       1   +1 212 555 23     Retain all other country codes
                             Mandatory
       2   +1 212 555 2368

                             TID-0019

                             Display non-UK numbers with
                             a + prefixed to the country
                             code
                             Mandatory

                             Copyright ©2013 Health and Social Care Information Centre   10

Guidance

Telephone Number Input

Assisted Country Selector
 The primary use case for this control is as a secondary level of input after the user has
 stated that they will be inputting a non-UK number.

  Default State       1    Country Code
                            +44 (UK)

     Expanded         2    Country Code
                            +44 (UK)
                           United Kingdom             +44 (UK)
                           Afghanistan                +93 (AF)
                           Albania                   +355 (AL)
                           Algeria                   +213 (DZ)
                           Andorra                   +376 (AD)
                           Angola                    +244 (AO)
                           Argentina                  +54 (AR)

                                                                        Column Three
                                             Column One
                                                                      Column Two

Column     Contents                                   TID-0021

      One ISO 3166 country names                      Use the content indicated in
                                                      the illustration in columns one,
      Two Ofcom list of dialling codes                two and three. Use the
     Three ISO 3166 abbreviated country
                                                      abbreviation ‘UK’ instead of
           codes                                      the ISO 3166 code of ‘GB’
                                                      Mandatory

11                                                                 Copyright ©2013 Health and Social Care Information Centre

                                                                                  Guidance

Telephone Number Input

Assisted Country Selector
                                     TID-0023
Country Code     Telephone Number
                                     Use an editable drop-down list
+44 (UK)         e.g. 01234 567890   for country codes
                                     Recommended

                                     TID-0020

                                     Use a default value of +44
                                     (UK) for the country code
                                     Mandatory

                                     TID-0022
Country Code
                                     Order the country names
+44 (UK)                             alphabetically. Include United
                                     Kingdom once at the top of
United Kingdom         +44 (UK)
Afghanistan            +93 (AF)      the list and once in its
Albania               +355 (AL)      appropriate alphabetical
Algeria               +213 (DZ)      location
Andorra               +376 (AD)      Mandatory
Angola                +244 (AO)
Argentina              +54 (AR)

                                     TID-0024
Country Code
                                     Allow the country codes to be
Af                                   navigated using free-text entry
United Kingdom         +44 (UK)      Recommended
Afghanistan            +93 (AF)
Albania               +355 (AL)
Algeria               +213 (DZ)
Andorra               +376 (AD)
Angola                +244 (AO)
Argentina              +54 (AR)

                                     Copyright ©2013 Health and Social Care Information Centre   12

Guidance

Telephone Number Input

Assisted Country Selector
                               TID-0025
Country Code
                               Populate the country selector
+44 (UK)                       list with the three elements
                               below and in this exact order:
United Kingdom      +44 (UK)
Afghanistan         +93 (AF)
Albania            +355 (AL)   1. Country Name
Algeria            +213 (DZ)   Left-aligned and vertically
Andorra            +376 (AD)   aligned to all rows
Angola             +244 (AO)
Argentina           +54 (AR)
                               2. Country Dialling Code
                               Right-aligned using the ‘+’
                               format, for example ‘+44’

                               3. Country Abbreviation
                               Right-aligned, two character
                               code, enclosed in single
                               brackets and vertically aligned
                               to all rows
                               Recommended

13                                        Copyright ©2013 Health and Social Care Information Centre

                                                                                                                 Appendix

Appendix
The following rules are from the NHS CFH – NPfIT SCG – SCG Guidance on Telecommunication
Standards1. Refer to the location indicated for the latest version of these rules.

CSA Rules for Telephone Number Element Identification

      1      If the value starts with a plus sign (+) or ‘00’, then apply International
             Number Prefix Rules – go to step 3

      2      Otherwise apply UK Telephone Number Representation Rules – go
             to step 11

             International Number Prefix Rules
      3      If the value starts with ‘+44’, and the following digit is not ‘0’, then
             replace ‘+44’ with ‘0’ and apply the UK Telephone Number
             Representation Rules – go to step 11

      4      If the value starts with ‘0044’, and the following digit is not ‘0’, then
             replace ‘0044’ with ‘0’; apply the UK Telephone Number
             Representation Rules – go to step 11

      5      If the value starts with ‘+’, then apply the following International
             Number Representation Rules – go to step 8

      6      If the value starts with ‘00’, then replace ‘00’ with ‘+’ and apply the
             following International Number Representation Rules – go to step 8

      7      If the value starts with ‘+44’ or ‘0044’ and the following digit is ‘0’,
             then (this is invalid) display the entire value as received – end

             International Number Representation Rules
      8      Add a space after the international dialling code element using the
             international standard available at http://www.itu.int/ITU-T/inr/codes.html

      9      Remove any immediately following separator character

      10     IF the remainder contains any non-numeric characters other than
             valid separator characters, then display the remainder of the value
             as received – end
             OTHERWISE

                i. If the remainder contains any valid separator characters, then
                replace each separator character with a space – end
                ii. Else, introduce spaces preceding every four characters, from
                the right, so that there are never more than 6 characters without
                a break, and never fewer than 3 characters in a group – end

1
 NHS Connecting for Health – NPfIT SCG – SCG Guidance on Telecommunications Standards
http://www.connectingforhealth.nhs.uk/systemsandservices/data/scg/publications/scg002305.pdf

                                                                    Copyright ©2013 Health and Social Care Information Centre   14

Appendix

CSA Rules for Telephone Number Element Identification

           UK Telephone Number Representation Rules
      11   IF the value contains any non-numeric characters other than valid
           separator characters, then display the value without further
           transformation – end
           OTHERWISE
              If the value contains valid separator characters, then remove the
             separator characters and apply the transformation rules as specified
             in the following sections

      12   IF the numeric value begins with ‘01’ or ‘02’, then test these geographic
           area number representation rules in the following order. Only apply one
           rule:
              a. If the code starts ‘02’, then insert a space after the 3rd digit
              b. If the code has a ‘1’ in the 3rd or 4th position, then insert a space
                 after the 4th digit
              c. If the first 6 digits match any of the following 11 codes, then insert a
                 space after the 6th digit:
                  013873 Langholm;
                  015242 Hornby;
                  015394 Hawkshead;
                  015395 Grange-Over-Sands;
                  015396 Sedbergh;
                  016973 Wigton;
                  016974 Raughton Head;
                  017683 Appleby;
                  017684 Pooley Bridge;
                  017687 Keswick;
                  019467 Gosforth.
              d. For all other codes, insert the space after the 5th digit

      13   Having applied the above rules, if the remainder of the number,
           following the space, contains more than 6 digits, then introduce a space
           preceding the final four digits

      14   If the numeric value begins with ‘07’ or ‘05’ or ‘03’ or ‘04’ or ‘06’, then
           follow these number representation rules:
              a. Add a space after the first 5 digits (including the initial 0)
              b. If the remainder contains more than 6 digits, then introduce a
                 space preceding the final four digits

      15   If the numeric value begins with ‘08’ or ‘09’, then follow these special
           services number representation rules:
              a. Add a space after the first 4 digits (including the initial 0)
              b. If the remainder contains more than 6 digits, then introduce a
                 space preceding the final four digits

      16   If the numeric value does not begin with ‘0’, then display the value
           without further transformation – end

15                                                                            Copyright ©2013 Health and Social Care Information Centre

                                                                                                            Appendix

Example Additional Rules for Handling Extension Numbers

      1      Identify if the number has any of the following characters or
             sequence of characters in it, followed by a sequence of digits:

              x ex ext       extn extension extension number

              Any of the above, followed by:

              . Full stop

              : Colon

              = Equals sign

              - Hyphen

      2      If so, then remove the identified characters and replace with an ‘x’

      3      Then remove the ‘x’ with any subsequent digits and only replace
             them at the end of the telephone number after all of the NHS CFH –
             NPfIT SCG – SCG Guidance on Telecommunication Standards1
             rules have been applied to the remaining telephone number.

1
 NHS Connecting for Health – NPfIT SCG – SCG Guidance on Telecommunications Standards
http://www.connectingforhealth.nhs.uk/systemsandservices/data/scg/publications/SCG002305.pdf

                                                                  Copyright ©2013 Health and Social Care Information Centre   16
