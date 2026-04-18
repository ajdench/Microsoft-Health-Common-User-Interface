# Date and Time Input - QIG

## Provenance
- Source file: `raw/sources/design-guidance/nhs-archived-guidance-2016/datetimeqig.pdf`
- Extracted text: `derived/extracted-text/design-guidance/nhs-archived-guidance-2016-datetimeqig.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Date and Time Input
Quick Implementation Guide

Edition 1
22nd April 2010

                             Copyright ©2013 Health and Social Care Information Centre

Contents

Introduction                                                                                                            2

Date Input                                                                                                              3
    Free Text                                                                                                           4
    Calendar                                                                                                            8
    Disambiguation                                                                                                   11

Time Input                                                                                                           12

Duration Input                                                                                                       17

This document was prepared for NHS Connecting for Health which ceased to exist on 31 March 2013. It may
contain references to organisations, projects and other initiatives which also no longer exist. If you have
any questions relating to any such references, or to any other aspect of the content, please contact
cuistakeholder.mailbox@hscic.gov.uk

Copyright:
You may re-use this information (excluding logos) free of charge in any format or medium, under the terms of
the Open Government Licence. To view this licence, visit nationalarchives.gov.uk/doc/open-government-
licence or email psi@nationalarchives.gsi.gov.uk.

1                                                                            Copyright ©2013 Health and Social Care Information Centre

                                                                                                    Guidance

Introduction
     The entry of date and time information is a fundamental function within
     clinical and administrative processes. Therefore, healthcare professionals
     should have a clear mechanism for entry of an accurate date or time
     value, and be assisted to disambiguate entries when necessary.

     Important
     Although it contains all of the guidance points, this document omits supporting
     information and is therefore not intended as a substitute for the full NHS CUI document
     Date and Time Input1. Refer to that document for the definitive statement of the design
     guidance in this area.
     The visual representations used to display the guidance are illustrative only. Stylistic
     choices (for example, display font used), unless otherwise specified, are not part of the
     guidance and are therefore not mandatory requirements.

1
    Design Guide Entry – Date and Time Input (v3.0.0.0)

                                                           Copyright ©2013 Health and Social Care Information Centre   2

Guidance

Date Input

 The basic date input control should comprise:

             ·   A free text input area
             ·   A calendar control
             ·   A default input, dependent on the context
                 in which the control is used
             ·   A facility to disambiguate the date entered

                 A free text input area                              A calendar control
                               05-Sep-2007

           A default input

                              Above Elements of a basic date input control

    Though labels are not covered in this guidance, the control should have a
    short and descriptive label wherever it is used, for example ‘Date of Birth’.

    Users should be able to input free text dates as fully specified dates, partially
    specified dates and arithmetic shortcuts.
    The entry of partially specified dates will not be appropriate for every
    situation. Therefore, application designers should decide what types of dates
    are allowed for a given situation, based on the specific clinical context.

3                                                                            Copyright ©2013 Health and Social Care Information Centre

                                                                                                              Guidance

Date Input

                                                                   D+Tc-0001

                       05-Sep-2007
                                                                   Adopt the NHS Common User
                                                                   Interface standard for Date
                                                                   Display1 for the format of any
                                                                   dates displayed within the
                                                                   date input control
                                                                   Mandatory

                                                                   D+Tc-0002
                       05-Sep-2007                                 Allow for both free text input of
                       < September >                  < 2007 >     dates and the input of dates
                        Mon   Tue   Wed   Thu   Fri    Sat   Sun

                        27    28    29    30    31      1    2
                                                                   using a calendar control
                        3     4     5     6     7       8    9     Mandatory
                        10    11    12    13    14     15    16
                        17    18    19    20    21     22    23    D+Tc-0004
                        24    25    26    27    28     29    30
                        31    1     2     3     4       5    6
                                                                   Include the calendar icon
                         Today                          Close
                                                                   within the boundary of the
                                                                   date input field
                      Calendar Control                             Mandatory

              1

              2        05-Se

              3        05-Sep-2007
                      Free Text Input

1
    Design Guide Entry – Date Display (v5.0.0.0)

                                                                     Copyright ©2013 Health and Social Care Information Centre   4

Guidance

Date Input

Free Text

                                          D+Tc-0003
         1     05-May-2006
                                          Allow the date elements to be
                                          individually edited (day, month
                                          and year)
         2     05-May-2006
                  May                     Mandatory

         3     05-Se-2006

         4     05-Sep-2006

                                          D+Tc-0006

                                          Provide instructions on how to
     Enter a date e.g. August 2005, or    use the control, for example,
     a shortcut e.g. +3m, or click on     via the use of tooltips. The
     the calendar icon to select a date
                                          instructions must contain
                                          details of the different date
                                          types that can be entered
                                          Mandatory

                                          D+Tc-0008

               Unknown
                                          Allow the input of ‘Unknown’
                                          (or similar) to specify dates
                                          not known to the user
                                          Mandatory

5                                                     Copyright ©2013 Health and Social Care Information Centre

                                                                                  Guidance

Date Input

Free Text

                                      D+Tc-0046
       1       05-May-2006
                                      Within the date input control,
                                      allow users to select the entire
                                      value to facilitate rapid editing
       2       17-J                   or entry of arithmetic shortcuts
                                      relating to date (only)
                                      Mandatory

                                      D+Tc-0007
            + For later dates         Allow users to enter arithmetic
                                      shortcuts, such as ‘+3m’ for
            - For earlier dates
                                      three months later or ‘-2d’ for
                                      two days earlier. The relevant
            d days         m months   operators are as illustrated
                                      Mandatory
            w weeks        y years

                                      Note Whole numbers are treated
                                      as positive by default

                                      D+Tc-0041

                                      Within the date input control,
                                      do not allow users to input
                                      arithmetic shortcuts relating to
                                      time
                                      Mandatory

                                         Copyright ©2013 Health and Social Care Information Centre   6

Guidance

Date Input

Free Text

                           D+Tc-0009
             01-Jan-2010
                           Display a default input within
                           the free text date input control
                           Mandatory

                           D+Tc-0042

             DD-Mmm-YYYY   When displaying a default
                           input within the free text input
                           box, provide the user with an
                           example of date with either a
                           non-specific value (such as
                           the input mask) or a date
                           appropriate to the clinical
                           context (for example, 'today's
                           date')
                           Recommended

7                                      Copyright ©2013 Health and Social Care Information Centre

                                                                                                   Guidance

Date Input

Calendar

      1      05-Sep-2007                                D+Tc-0010

                                                        Provide access to the
                                                        calendar control via a
      2      05-Sep-2007                                calendar icon
             < September >                 < 2007 >     Mandatory
             Mon   Tue   Wed   Thu   Fri    Sat   Sun

             27    28    29    30    31      1    2     D+Tc-0017
              3    4     5     6     7       8    9
                                                        Allow the calendar to be
             10    11    12    13    14     15    16
             17    18    19    20    21     22    23    closed either when the user
             24    25    26    27    28     29    30    clicks away from the calendar
             31    1     2     3     4       5    6
                                                        or clicks on the calendar icon
              Today                          Close
                                                        Mandatory

                                                        D+Tc-0011
             05-Sep-2007
                                                        Provide the ability to select a
             < September >                 < 2007 >
             Mon   Tue   Wed   Thu   Fri    Sat   Sun
                                                        month independently, and a
             27    28    29    30    31      1    2     year independently. Signify
              3    4      5    6     7       8    9     the interactivity of these
             10    11    12    13    14     15    16
             17    18    19    20    21     22    23
                                                        elements by suitable styling,
             24    25    26    27    28     29    30    for example as buttons or
             31    1      2    3     4       5    6     links, and ensure that they
              Today                          Close      have descriptive tooltips
                                                        Mandatory

                                                        Note A partially specified date can
                                                        be entered using the calendar
                                                        control by clicking either the month
                                                        or the year

                                                           Copyright ©2013 Health and Social Care Information Centre   8

Guidance

Date Input

Calendar

                                                      D+Tc-0016
           05-Sep-2007
                                                      Provide access to relevant
           < September >                 < 2007 >     instructional text (for example,
           Mon   Tue   Wed   Thu   Fri    Sat   Sun

           27    28    29    30    31      1    2
                                                      via tooltips) on the clickable
            3    4     5     6     7       8    9     elements in the calendar
           10    11    12    13    14     15    16    header
           17    18    19    20    21     22    23
           24    25    26    27    28     29    30    Mandatory
           31    1     2     3     4       5    6
                     Select a month or year by
            Today clicking in the  header or
                                Close
                     select a day by clicking on
                     a date from the calendar
                     below.

                                                      D+Tc-0015
           30-Sep-2007
                                                      Include the days of the week
           < September >                 < 2007 >     within the calendar view
           Mon   Tue   Wed   Thu   Fri    Sat   Sun

           27    28    29    30    31      1    2     Mandatory
            3    4      5    6     7       8    9
           10    11    12    13    14     15    16    D+Tc-0014
           17    18    19    20    21     22    23
           24    25    26    27    28     29    30
                                                      Provide a visual indication of
           31    1      2    3     4       5    6     the current date
            Today                          Close      Mandatory

                                                      D+Tc-0013

                                                      Provide a link or button to
                                                      close the control
                                                      Mandatory

                                                      D+Tc-0012

                                                      Provide a button to allow the
                                                      user to enter today's date
                                                      Mandatory

9                                                                 Copyright ©2013 Health and Social Care Information Centre

                                                                                                    Guidance

Date Input

Calendar

                                                        D+Tc-0019
      1      05-Sep-2007
                                                        Ensure that the control can be
             < September >                 < 2007 >
             Mon   Tue   Wed   Thu   Fri    Sat   Sun
                                                        operated effectively via the
             27    28    29    30    31      1    2     keyboard (for example, using
              3    4     5     6     7       8    9     arrow keys)
             10    11    12    13    14     15    16
             17    18    19    20    21     22    23    Mandatory
             24    25    26    27    28     29    30
             31    1     2     3     4       5    6

              Today                          Close

      2

                                                        D+Tc-0018

      3      06-Sep-2007                                Display the appropriate value
             < September >                 < 2007 >     in the free text field following
             Mon   Tue   Wed   Thu   Fri    Sat   Sun
                                                        selection of the date
             27    28    29    30    31      1    2
              3    4     5     6     7       8    9     Mandatory
             10    11    12    13    14     15    16
             17    18    19    20    21     22    23
             24    25    26    27    28     29    30
             31    1     2     3     4       5    6

              Today                          Close

                                                         Copyright ©2013 Health and Social Care Information Centre   10

Guidance

Date Input

Disambiguation

                                              D+Tc-0005
     1   05/04/2
                                              Provide disambiguation of any
                                              free text date input
                                              Mandatory
     2   05/04/2009
         Did you mean:
         05-Apr-2009 or 04-May-2009 or different date?

                                              D+Tc-0038

                                              Provide the facility for a user
                                              to disambiguate a date
                                              entered via the date control
                                              Mandatory

                                              D+Tc-0039

                                              Display a message dialog box
                                              with appropriate instructional
                                              text if the data is ambiguous
                                              or incomplete
                                              Mandatory

                                               D+Tc-0040

                                               Display a maximum of two
                                               suggestions based on the
                                               data entered, plus an option to
                                               re-enter the value in the input
                                               field. Selection of a suggested
                                               value enters that value into
                                               the control
                                               Recommended

11                                                         Copyright ©2013 Health and Social Care Information Centre

                                                                                                         Guidance

Time Input

The time input control should comprise:

      ·   An input area
      ·   A default input, dependent on the context
          in which the control is used
      ·   A spin control
      ·   A tick box to indicate if the time is
          approximate (where appropriate)

       A default input                                An input area

                                12:00                   Approx
                                                                    A tick box to indicate if
                  A spin control                                    the time is approximate

                         Above Elements of a basic time input control

 The option to mark a time as approximate may not be appropriate for all
 situations, so the feature should be enabled in the control as required by the
 clinical context.

 Though labels are not covered in this guidance, the control should have a
 short and descriptive label wherever it is used, for example ‘Time of Birth’.
 Users can enter time in the input control as fully specified times, approximate
 times and arithmetic shortcuts, In addition, the ‘seconds’ element of time can
 be entered if required. The inclusion of seconds is at the discretion of the
 host ISV application.

                                                              Copyright ©2013 Health and Social Care Information Centre   12

Guidance

Time Input

                                                            D+Tc-0022
                        23:35                      Approx
                                                            Use an 'Approx' check box to
                                                            allow the user to indicate an
                                                            approximate time
                                                            Mandatory

                                                            D+Tc-0020

                                                            Adopt the NHS Common User
                        13:54
                                                            Interface standard for Time
                                                            Display1 for the format of any
                                                            times displayed within the time
                                                            input control
                                                            Mandatory

                                                            D+Tc-0021

                1       13:54                               Use the 24-hour clock only
                                                            (rather than the 12-hour clock)
                                                            Mandatory

                2       13:54
                                                            D+Tc-0023

                                                            Allow the time elements to be
                                                            individually edited (hours,
                                                            minutes and seconds)
                3       13:54
                        2                                   Mandatory

1
    Design Guide Entry – Time Display (v4.0.0.0)

13                                                                      Copyright ©2013 Health and Social Care Information Centre

                                                                        Guidance

Time Input

                             D+Tc-0047
             1      13:54
                             Within the time input control,
                             allow users to select the entire
             2      +3h      value to facilitate rapid editing
                             or entry of arithmetic shortcuts
                             relating to time (only)
             3      16:54
                             Mandatory

                             D+Tc-0044

                             Within the time input control do
                             not allow users to input
                             arithmetic shortcuts relating to
                             date
                             Mandatory

                             D+Tc-0025
       + For later times     Allow users to enter arithmetic
                             shortcuts such as '+3h' for three
       - For earlier times
                             hours later and '-2m' for two
       h hours               minutes earlier. The relevant
                             operators are as illustrated
       m minutes             Mandatory
       s seconds
                             Note Whole numbers are treated
                             as positive by default

                                Copyright ©2013 Health and Social Care Information Centre   14

Guidance

Time Input

           hh:mm:ss                       D+Tc-0024

                                          Provide access to instructions on
             Enter a time using the 24-
             hour clock, e.g. 13:05 or
                                          how to use the control, for
             a shortcut, e.g. +3h.        example, via the use of tooltips.
                                          The instructions must contain
                                          details of the different time types
                                          that can be entered
                                          Mandatory

                                          D+Tc-0043

                                          Provide indication to the user
                                          that the 24-hour clock is in use
                                          Mandatory

                                          D+Tc-0026

      1    Un                             Allow the entry of 'Unknown' (or
                                          similar) to specify times not
                                          known to the user
      2    Unknown                        Mandatory

                                          D+Tc-0027

           16:00                          Display a default input within
                                          the time input control
                                          Mandatory

                                          D+Tc-0045
           12:00
                                          When displaying a default input
           Above A default time           within the free text input box,
                                          provide the user with an example
           hh:mm:ss
                                          of time with either a non-specific
           Above A default time           value (such as the input mask) or
           with a non-specific value      a time appropriate to the clinical
                                          context
                                          Recommended

15                                                    Copyright ©2013 Health and Social Care Information Centre

                                                                    Guidance

Time Input

                        D+Tc-0028
         1   23:35:01
                        Increase/decrease the whole
                        time by the least significant
                        time unit if the entire value is
         2   23:35:02
                        selected or if no unit is
                        selected
                        Mandatory

                        D+Tc-0029

         1   23:35:01   Provide the ability to spin
                        individual time units when
                        selected
         2   22:35:01
                        Mandatory

                         Copyright ©2013 Health and Social Care Information Centre   16

Guidance

Duration Input

                                                        D+Tc-0030
             Duration      15min 30sec
                                                        Adopt the NHS Common User
                                                        Interface standard for Time
                                                        Display1 for the format of any
                                                        times displayed within the
                                                        duration input control
                                                        Mandatory

                                                        D+Tc-0031
             Duration      5y 6m 7d 4hr
                                                        Provide access to instructions on
                                                        how to use the control, for
                               Enter a duration using   example, via the use of tooltips.
                               the following units:
                                                        The instructions must contain
                                  y = year              details of the different units that
                                  m = month             can be entered
                                  d = day
                                  hr = hour             Mandatory
                                  min = minutes
                                  sec = seconds

                                                        D+Tc-0032
             Duration      30 sec
                                                        Allow the entry of time duration
                                                        units either singly or in
             Duration      15min 30sec
                                                        combination
                                                        Mandatory

1
    Design Guide Entry – Time Display (v4.0.0.0)

17                                                                  Copyright ©2013 Health and Social Care Information Centre

                                                                               Guidance

Duration Input

   1     Duration   15min 30sec     D+Tc-0033

                                    Allow editing of the individual
                                    elements of a duration
   2     Duration   15min 30sec
                                    Mandatory

   3     Duration   15min 30sec

                                    D+Tc-0034

       y years         hr hours     Ensure that the illustrated set
                                    of duration unit abbreviations
       m months       min minutes
                                    is supported
       w weeks        sec seconds   Mandatory

       d days

                                    D+Tc-0035
         Duration   5y 6m 7d 4hrs   Allow the set of duration unit
                                    abbreviations to be extended
                                    appropriately, for example,
                                    'hrs' as well as 'hr'. Ensure
                                    that any additions are unique
                                    within the entire set
                                    Recommended

                                    D+Tc-0036
         Duration   15min 30sec     Allow the user to optionally
                                    enter white space within the
         Duration   15 min 30 sec   duration input, for example ‘3
                                    hr 5 min’ as well as ‘3hr 5min’
                                    Recommended

                                       Copyright ©2013 Health and Social Care Information Centre   18

Guidance

Duration Input

     Duration      6m                                    D+Tc-0037

                   Did you mean:                         Provide the facility for a user to
                   6 months or 6 minutes?                disambiguate input which could
                                                         be interpreted in more than one
                                                         way, for example, ‘m’ (which
                                                         could represent months or
                                                         minutes)’
                                                         Recommended

Start Date         27-Mar-2010

Start Time         23:30

     Duration      2 hrs
                   This duration spans the change from GMT to BST. BST
                   runs from 28-Mar-2010 01:00 to 31-Oct-2010 02:00.
                   During BST, times will be automatically adjusted forward
                   one hour such that 01:00 becomes 02:00.

       D+Tc-0048                                         D+Tc-0049

       Where a time duration spans                       Where a user adjusts time
       the change between GMT and                        manually resulting in a time
       BST, show a pop-up to inform                      duration spanning a change
       the user that the system will                     between GMT and BST, show a
       automatically handle the data                     pop-up to inform that user that
       within the appropriate time                       the system will automatically
       zone                                              adjust the data according to the
       Recommended                                       appropriate time zone.
                                                         Recommended

19                                                                    Copyright ©2013 Health and Social Care Information Centre
