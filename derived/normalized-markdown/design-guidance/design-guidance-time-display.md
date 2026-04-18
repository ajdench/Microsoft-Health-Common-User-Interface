# Design Guidance -- Time Display

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Time Display.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-time-display.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
       Time Display

   Thursday, 28 January 2010
              Version 3.0.0.0

                 Prepared by

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   Design Guidance – Time Display                                                                                                  2.0.0.0

   Design Guidance – Time Display                                                                                                  1.0.0.0

   Documents to be read in conjunction with this document

   Document Title                                                                                                                  Version
   Design Guidance – Date and Time Input                                                                                           3.0.0.0

   Design Guidance – Date Display                                                                                                  3.0.0.0

   Design Guidance – Accessibility Principals                                                                                      1.0.0.0

   Design Guidance – Accessibility Checklist                                                                                       1.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.
All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2010. All rights reserved.

                                    Design Guidance – Time Display
                                    Prepared by Microsoft, Version 3.0.0.0
                                    Last modified on 28 January 2010

TABLE OF CONTENTS
1    Introduction ....................................................................................................................................1
    1.1    Customer Need .........................................................................................................................1
    1.2    Scope ........................................................................................................................................2
     1.2.1      In Scope...............................................................................................................................2
     1.2.2      Out of Scope ........................................................................................................................2
    1.3    Key Principles ...........................................................................................................................2

2    Recommendations and Guidance ................................................................................................4
    2.1    Exact Time ................................................................................................................................4
     2.1.1      Guidance .............................................................................................................................5
     2.1.2      Examples of Correct Usage.................................................................................................5
     2.1.3      Examples of Incorrect Usage ..............................................................................................6
     2.1.4      Rationale..............................................................................................................................6
    2.2    Approximate (or “Fuzzy”) Time .................................................................................................7
     2.2.1      Guidance .............................................................................................................................7
     2.2.2      Examples of Correct Usage.................................................................................................7
     2.2.3      Examples of Incorrect Usage ..............................................................................................7
     2.2.4      Rationale..............................................................................................................................7
    2.3    Time Duration............................................................................................................................8
     2.3.1      Guidance .............................................................................................................................8
     2.3.2      Examples of Correct Usage.................................................................................................9
     2.3.3      Examples of Incorrect Usage ..............................................................................................9
     2.3.4      Rationale..............................................................................................................................9

3    Document Information .................................................................................................................11
    3.1    Terms and Abbreviations ........................................................................................................11
    3.2    Nomenclature ..........................................................................................................................11
     3.2.1      Body Text...........................................................................................................................11
     3.2.2      Cross References ..............................................................................................................11
    3.3    References ..............................................................................................................................12

                                 Design Guidance – Time Display
                                 Prepared by Microsoft, Version 3.0.0.0
                                 Last modified on 28 January 2010

1             INTRODUCTION
    This document provides the design guidance for time display. It describes the area of focus,
    provides guidance and recommendations, and explains the rationale behind the guidance and
    recommendations.
    This document is intended for use by anyone whose role includes screen design, or the
    implementation or assessment of clinical applications. This document can therefore be used as
    guidance for the specification of time display within the user interface of a clinical application.
    Table 1 describes the changes made since the previous version of this guidance (Baseline version
    2.0.0.0 dated 05-Aug-2008):

    Change            IDs               Change Description
    Deleted           D+Tb-0019 to      Replaced by D+Tb-0033 and D+Tb-0034
                      D+Tb-0025

    Modified                            Clarification of definitions for in scope (section 1.2.1)

                                        Context clarification and ‘Durations shorter than a second’ in out of scope (section 1.2.2)

                                        Context clarification for illustrations (section 2)

                      D+Tb-0001         Added ‘only’

                      D+Tb-0018         Modified to show 60 as a whole number rather than 90

    Added             D+Tb-0032         Indicating use of 24-hour clock

                      D+Tb-0033         Definition of labels for periods of time
                      D+Tb-0034

                                        Extra usage example for durations over 24-hours (section 2.3.2)
    Table 1: Changes Since the Last Baseline Version

1.1           Customer Need
    The display of exact times, approximate times and durations within software applications has
    inherent risks of misinterpretation based on how these values are displayed. Currently, due to the
    lack of specific time display standards for clinical applications, there is considerable variation in the
    way in which time display is implemented across systems. Due to this inconsistency, risks to
    effective clinical care and to patient safety arise.

    Inconsistency across systems
    Currently, clinical systems used across care settings, differ in the way time is displayed. For
    example, during a review of clinical systems, a mix of both 24-hour and 12-hour time display
    formats were found to be used. Inherent within this is the risk that healthcare professionals moving
    between clinical systems made by different suppliers can misinterpret time, leading to patient safety
    incidents.

    A balanced approach to patient safety
    There is a clear argument that unambiguous time display would reduce the potential for human
    error leading to patient safety incidents. The guidance provides evidence of clinical safety either
    through primary or secondary sources.

                                                                                                                                       Page 1
                                  Design Guidance – Time Display
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 28 January 2010

1.2      Scope
1.2.1        In Scope
 This document provides guidance and recommendations for the following types of time display:
       Exact time – the precise time of an event
       Approximate time (or “fuzzy time”) – the estimated time of an event if the exact time is
        unknown
       Time duration – a period of time
 The guidance also includes the display of date and time combinations.

1.2.2        Out of Scope
 This section defines areas that are not covered in this guidance. Although there may be specific
 risks associated with these areas that are not addressed in this guidance, it is likely that the
 principles in this guidance will extend to the display of time in many of the areas listed below.
 The following subject areas have not been considered in the development of this guidance:
       Time entry – Guidance on entering times is described in Design Guidance – Date and
        Time Input {R1}
       Durations shorter than a second – The shortest period of time described in this document
        is a second. Fractions of a second are not considered
       Date display – This document only applies to the display of time. Guidance on displaying
        dates is described in Design Guidance – Date Display {R2}
       Labels – In addition to the time format, an important factor for clarity is the display of
        unambiguous and consistent labels for times
       Synchronisation – Synchronising current time across clinical systems, applications,
        desktops and hospital clocks is not considered to be an issue in this guidance
       Display styles – Choice of display font size, background and foreground text colour will
        affect the readability of time as it will with all other displayed text. This document does not
        address general rules for text display
       Data storage – The guidance relates only to the display layer of a software application, and
        does not prescribe the way in which time values should be stored. We assume that any
        clinical Information Technology (IT) system is capable of transforming the stored time
        format into the displayed time format without error
      Note
      Listing an item as out of scope does not classify it as unimportant. Project time and resource constraints
      inevitably restrict what can be in scope for a particular release. It is possible that items out of scope for
      this release may be considered for a future release.

1.3      Key Principles
 The following key principles reflect the critical areas of guidance discussed within this document:
       Enable all time information to be represented explicitly and completely, eliminating the
        occurrence of ambiguous times
       Reduce the possibility of misinterpreting the time as a date or other information display
       Maximise the readability of the time by the use of clear separators between time elements

                                                                                                                Page 2
                          Design Guidance – Time Display
                          Prepared by Microsoft, Version 3.0.0.0
                          Last modified on 28 January 2010

 Support application scenarios where the user needs to enter and view an approximate time
  or duration
 Promote consistency across clinical applications by providing a small set of valid formats

                                                                                          Page 3
                 Design Guidance – Time Display
                 Prepared by Microsoft, Version 3.0.0.0
                 Last modified on 28 January 2010

2            RECOMMENDATIONS AND GUIDANCE
         Important
         The visual representations used within this document to display the guidance are illustrative only. They
         are simplified in order to support understanding of the guidance points. Stylistic choices, such as colours,
         fonts or icons are not part of the guidance and unless otherwise specified are not mandatory requirements
         for compliance with the guidance in this document.

2.1          Exact Time
    This section provides guidance for the display of exact times. Exact times display both hours and
    minutes, but may optionally also display seconds.
    Figure 1 illustrates the required display format of an exact time without seconds. The required
    format is HH:mm (this notation follows the .NET Framework Standard DateTime Format Strings
    specification).

    Figure 1: Examples of the Recommended Time Display Format for NHS Clinical Applications

    Figure 2 illustrates the guidance for displaying exact times with seconds. The required format is
    HH:mm:ss.

    Figure 2: Examples of the Recommended Time Display Format for NHS Clinical Applications, Including Seconds

    Time may be displayed alongside a date to indicate a combined date and time. For more details on
    the date display format, please refer to the document Design Guidance – Date Display {R2}. The
    following scenario is an example where date and time may be displayed together.
            “The midwife or attending clinician updates the maternity record with the final labour details.
            They use a structured entry form to record the newborn date and time of birth as Wednesday
            14 June 2006 at 10:20 in the morning.”
    In this scenario, after the user has entered the information, the date and time would be displayed in
    combination.
    Figure 3 illustrates the guidance for displaying combined dates and times.

    Figure 3: Examples of the Recommended Date and Time Display Format for Clinical Applications

    A pair of time displays may be used to express a time range, for example, the start and end times
    of an event. The elapsed time between them may be expressed as a time duration (see section
    2.3).

                                                                                                                  Page 4
                                  Design Guidance – Time Display
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 28 January 2010

2.1.1        Guidance
 ID                Guideline                                                                                               Status
 D+Tb-0001         Display time using the 24-hour clock only                                                               Mandatory

 D+Tb-0032         Provide indication to the user that the 24-hour clock is in use                                         Mandatory

 D+Tb-0002         Display an exact time as HH:mm                                                                          Mandatory

 D+Tb-0003         Display hours using two digits (values less than 10 should appear with a zero in the first position)    Mandatory

 D+Tb-0004         Display minutes using two digits (values less than 10 should appear with a zero in the first position) Mandatory

 D+Tb-0005         Display seconds as two digits (values less than 10 should appear with a zero in the first position)     Mandatory

 D+Tb-0006         Separate the hours and minutes with a colon                                                             Mandatory

 D+Tb-0007         Separate the minutes and seconds with a colon                                                           Mandatory

 D+Tb-0008         Separate date and time values with a white space                                                        Mandatory

 D+Tb-0009         Display midnight as 00:00                                                                               Mandatory

 D+Tb-0010         Display the last minute in the day as 23:59                                                             Mandatory

 D+Tb-0011         Display null times using an appropriate value, for example, ‘Unknown’ and ‘Not recorded’                Mandatory

 D+Tb-0012         Display seconds only if required                                                                        Recommended

 D+Tb-0013         Display time ranges as two adjacent time displays, each identified by a contextually appropriate        Recommended
                   label, such as ‘From’ and ‘To’
 Table 2: Guidance – Exact Time Display

2.1.2        Examples of Correct Usage
   Usage        Format                                 Example                                     Comments

               HH:mm                                  12:35                                       Display format for hours and minutes
                                                       04:59                                       only. Use this format for exact times that
                                                                                                   are accurate to the minute
                                                       00:25

               HH:mm:ss                               12:35:01                                    Display format for hours, minutes and
                                                       04:59:58                                    seconds. Use this format for exact times
                                                                                                   that are accurate to the second
                                                       00:25:12

               Day dd-MMM-yyyy HH:mm                  Mon 12-Jun-2006 02:30                       Time display combined with long date
                                                       Fri 24-Apr-1998 10:45                       display
                                                       Sun 05-Sep-2000 17:13
                                                       Sat 01-Dec-1970 00:05

               dd-MMM-yyyy HH:mm                      12-Jun-2006 02:30                           Time display combined with short date
                                                       24-Apr-1998 10:45                           display
                                                       05-Sep-2000 17:13
                                                       01-Dec-1970 00:05
 Table 3: Correct Exact Time Formatting Examples

                                                                                                                                      Page 5
                               Design Guidance – Time Display
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 28 January 2010

2.1.3        Examples of Incorrect Usage
   Usage        Format                               Example             Comments
               hh:mm AM                             12:35 AM            Use of the 12-hour clock
                                                     12:35 PM

               HH mm                                12 35               Use of incorrect separator
                HH.mm                                12.35

               HH:mm                                24:00               Since 00:00 is identical to 24:00, the
                                                                         display must never show 24:00

               HH:m                                 10:5                Lack of a leading zero for values less
                h:m                                  1:7                 than 10
                h:m:s                                3:5:8

               dd-MMM-yyyy-HH:mm                    12-Jun-2006-02:30   Incorrect field separation makes these
                dd-MMM-yyyyHH:mm                     24-Apr-199810:45    examples difficult to read
                dd-Mmm-yyyy:HH:mm                    05-Sep-2000:17:13
                                                     01-Dec-1970T00:05
 Table 4: Incorrect Exact Time Formatting Examples

2.1.4        Rationale
 The main justification for use of the 24-hour clock is patient safety. The 24-hour clock is the
 standard notation used by most safety-critical industries, and there are clear benefits in sharing
 best practice between these industries. Moreover, evidence from the Patient Safety Assessment for
 date and time revealed a number of high risk issues associated with the use of the 12-hour clock,
 predominantly concerning the potential for confusion between noon and midnight and, more
 generally, the confusion that would arise were both notations to be supported. In addition, user
 research with clinicians and administrators found unanimous support for the 24-hour clock format
 over the 12-hour clock format.
 Additionally, the guidance in this document aims to display times in a manner that:
       Is easily readable and unambiguous
       Clearly differentiates between hours, minutes and seconds
       Is consistent and concise (requiring fewer characters than the 12-hour clock)

 During the creation of this guidance, the following standards were reviewed:
       International Organization for Standardization (ISO) 8601: 2004: Data elements and
        interchange formats – Information interchange – Representation of dates and times {R3}
       World Wide Web Consortium (W3C) Date and Time Format {R4}
       UK Government Data Standards (GovTalk) {R5}
 The proposed guidance is compliant with the Extended Format of ISO 8601, which displays time as
 hh:mm:ss. The ‘hh’ refers to a zero padded hour between 00 and 59, ‘mm’ refers to a zero padded
 minute between 00 and 59, and ‘ss’ refers to a zero-padded second between 00 and 59. In this
 format, a time may appear as ’13:47:30’. The proposed guidance is also compliant with the UK
 Government Data Standards specification for Time {R5}, and the W3C format {R4}, which in turn is
 derived from ISO 8601.

                                                                                                            Page 6
                               Design Guidance – Time Display
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 28 January 2010

2.2       Approximate (or “Fuzzy”) Time
 This section presents guidance for the display of approximate times. Approximate (or “fuzzy”) time
 may be used to indicate an approximation of an exact time. The following is a clinical example
 where this may occur:
        “A paramedic arrives at a patient’s home at four o’clock in the morning. As part of an acute
        episode, the patient describes to the paramedic that he woke around two in the morning with
        pain over his left kidney that lasted five minutes.”
 In this scenario, the user will enter the time ’02:00’ into the system and should have the opportunity
 to identify this time as an approximation. The time would be displayed as an approximate time.
 Figure 4 illustrates the guidance for the display of approximate times.

 Figure 4: Examples of the Recommended Approximate Time Display Format for NHS Clinical Applications

2.2.1        Guidance
 ID                Guideline                                                                                                  Status
 D+Tb-0014         Precede the display of an approximate time value with the word ‘Approx’                                    Mandatory

 D+Tb-0015         Display the time value using the guidance for exact time (section 2.1)                                     Mandatory

 D+Tb-0016         Leave a white space between the ‘Approx’ and the HH element of the time display                            Mandatory
 Table 5: Guidance – Approximate Time Display

2.2.2        Examples of Correct Usage
   Usage        Format                                     Example                                     Comments
               Approx HH:mm                               Approx 00:00                                Display format for approximate (or
                                                           Approx 12:00                                “fuzzy”) time
                                                           Approx 03:56
                                                           Approx 23:47
 Table 6: Correct Approximate Time Formatting Examples

2.2.3        Examples of Incorrect Usage
   Usage        Format                                     Example                                     Comments
               near HH:mm                                 near 00:00                                  Failure to use ‘Approx’ as the preceding
                                                                                                       text

               HH:mm Approx                               14:47 Approx                                ‘Approx’ should precede the time value
 Table 7: Incorrect Approximate Time Formatting Examples

2.2.4        Rationale
 The primary objective of this guidance is to differentiate between exact and approximate times in a
 clear and simple manner.

                                                                                                                                        Page 7
                               Design Guidance – Time Display
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 28 January 2010

2.3       Time Duration
 This section presents guidance for the display of time durations, that is, periods of time. The
 following is a clinical example where the display of time duration may occur:
         “During a consultation, a clinician uses a structured entry form to record the fact that his
         patient is experiencing absence attacks that last for 30 seconds.”
 In this scenario, after the user has entered the information, the time displayed would be ‘30sec’.
 Figure 5 illustrates how time durations will be displayed.

 Figure 5: Examples of the Recommended Time Duration Display Format for Clinical Applications

 Figure 6 shows additional examples of time duration display, which combine hours, minutes and
 seconds.

 Figure 6: Further Examples of the Recommended Time Duration Display Format for Clinical Applications

 A duration display may also represent years, months, weeks and days. To prevent ambiguity
 between months and minutes, and to improve readability, time units will be displayed in order of
 decreasing significance with zero-valued units omitted.
 Durations may also be approximate, in which case the display of an approximate duration value
 should be preceded with the word ‘Approx’.
 There are a number of contexts where specific display rules may apply (such as displaying a
 patient’s age), but the precise definition of these rules is beyond the scope of this document.
 Figure 7 shows another example of time duration, which is 5 days and 50 minutes.

 Figure 7: Further Example of the Recommended Time Duration Display Format for Clinical Applications

2.3.1         Guidance
 ID                Guideline                                                                                               Status
 D+Tb-0017         Display durations using years, months, weeks, days, hours, minutes and seconds, as appropriate          Mandatory

 D+Tb-0018         Use whole numbers for time duration, for example, 1, 5, and 60. Do not use decimals or fractions,       Mandatory
                   for example, 0.5, 1.5, 3/4

 D+Tb-0033         Ensure that the following minimal set of duration unit abbreviations is supported: y for years, m for   Mandatory
                   months, w for weeks, d for days, hr for hours, min for minutes and sec for seconds

 D+Tb-0034         Allow the set of duration unit abbreviations to be extended appropriately, for example, ‘hrs’ as well   Recommended
                   as ‘hr’. Ensure that any additions are unique within the entire set

 D+Tb-0026         Omit zero-valued units from the display                                                                 Mandatory

 D+Tb-0027         Display duration values and their respective units as pairs, with no intervening whitespace between Mandatory
                   the value and unit

 D+Tb-0028         Use a white space as the separator when displaying a duration composed of more than one unit            Mandatory

 D+Tb-0029         Display time duration units in decreasing order of significance                                         Mandatory

                                                                                                                                    Page 8
                               Design Guidance – Time Display
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 28 January 2010

 ID                Guideline                                                                                          Status
 D+Tb-0030         Precede the display of an approximate duration value with the word ‘Approx’                        Mandatory

 D+Tb-0031         Leave a white space between the ‘Approx’ and the first element of an approximate duration value    Mandatory
 Table 8: Guidance – Time Duration Display

2.3.2        Examples of Correct Usage
   Usage        Format                                Example                              Comments
               Nnuuu                                 20sec                                Time units should be displayed using three
                                                      10min                                characters to avoid confusion, for example,
                                                                                           between minutes and months
                                                      15min 55sec
                                                      23hr
                                                      2hr 40min
                                                      4hr 32min 16sec
                                                      1m 2d 3hr 17min

               Nnu Nnuuu                             3d 40min                             Display of durations greater than 24 hours
                                                      26w 5d
                                                      1m 5d 12hr
                                                      26d 5hr 34min
                                                      1y 10m 2w 12d 20hr 12min
 Table 9: Correct Time Duration Formatting Examples

2.3.3        Examples of Incorrect Usage
   Usage        Format                                Example                              Comments
               N.Nuuu                                0.5min                               These examples lack clarity; 0.5min could
                                                      1.5hr                                be interpreted as 5 minutes
                                                      3/4hr

               Nnuuu                                 15min55sec                           The lack of white space separators makes
                                                      2hr90min                             these examples difficult to read
                                                      4hr32min16sec

               NnuNNuuu                              3d40min                              The lack of white space separators makes
                                                      26d5hr                               these examples difficult to read
                                                      1m05d12hr
                                                      26d5hr34min

               Nnu Nnu                               3d 90m                               The use of the same character to indicate
                                                      1m 30m                               months and minutes gives rise to ambiguity

 Table 10: Incorrect Time Duration Formatting Examples

2.3.4        Rationale
 The motivation behind this guidance is to present a standard approach for displaying time durations
 that is clear, simple and unambiguous. In addition, the guidance allows time durations to be
 displayed using an appropriate combination of units, for example, 1y 3m 5d, or 5hr 6min 45sec.
 Duration values and their respective units are always displayed as pairs, with no intervening white
 space between the value and unit. This saves space by using fewer characters overall, and the
 visual grouping helps to reduce the likelihood of values being associated with an incorrect unit.

                                                                                                                                Page 9
                               Design Guidance – Time Display
                               Prepared by Microsoft, Version 3.0.0.0
                               Last modified on 28 January 2010

An alternative approach would be to separate the values and units with whitespace, which is the
principle adopted by the guidance for Medications Management {R6}. The rationale for this
approach is that some letters (such as ‘s’, ‘o’ and ‘i’) can be misread as numbers (such as ‘5’, ‘0’
and ‘1’), so white space separators are used to reduce the likelihood of misreading errors (such as
interpreting ‘12hr’ as ‘121 hours’). However, the likelihood of such errors for time durations is
significantly smaller than for medications, since:
     The vocabulary under consideration is much smaller since it consists of just seven duration
      symbols
     The units are always displayed in a fixed (and familiar) order
     The number of digits used to represent durations is much easier to predict, since hours,
      minutes and seconds will typically be in the range 0-59, days will be in the range 0-6,
      months will be in the range 0-11, and so on
For these reasons, the approach of removing whitespace between duration values and units is
preferred.
The duration symbols themselves are chosen to be memorable and intuitive, and to minimise the
likelihood of misinterpretation. This is particularly important for differentiating months and minutes,
as this is the most likely source of confusion (since these units share a common initial letter).
The duration symbol for hours is ‘hr’ rather than ‘hrs’ as this can be used to denote both the
singular (‘1hr’) as well as the plural (‘2hr’). Conversely, using ‘hrs’ as the symbol would allow all
duration units smaller than a day to be three characters in length (that is, ‘hrs’, ‘min’ and ‘sec’). This
would provide a clear contrast with the remaining symbols, which are all one character in length
(‘d’, ‘w’, ‘m’, ‘y’). However, the use of a plural (‘hrs’) would be inconsistent with the other symbols
and, for this reason, the adoption of ‘hr’ is the preferred approach.
Note that this guidance applies to English only; for other cultures different symbols would be
appropriate.

                                                                                                    Page 10
                      Design Guidance – Time Display
                      Prepared by Microsoft, Version 3.0.0.0
                      Last modified on 28 January 2010

3              DOCUMENT INFORMATION

3.1            Terms and Abbreviations
    Abbreviation                        Definition
    ISO                                 International Organization for Standardization

    IT                                  Information Technology

    W3C                                 World Wide Web Consortium
    Table 11: Terms and Abbreviations

3.2            Nomenclature
    This section shows how to interpret the different styles used in this document to denote various
    types of information.

3.2.1            Body Text
    Text                                                                   Style
    Code                                                                   Monospace

    Script

    Other markup languages

    Interface dialog names                                                 Bold

    Field names

    Controls

    Folder names                                                           Title Case

    File names
    Table 12: Body Text Styles

3.2.2            Cross References
    Reference                                                              Style
    Current document – sections                                            Section number only

    Current document – figures/tables                                      Caption number only

    Other project documents                                                Italics and possibly a footnote

    Publicly available documents                                           Italics with a footnote

    External Web-based content                                             Italics and a hyperlinked footnote
    Table 13: Cross Reference Styles

                                                                                                                Page 11
                                  Design Guidance – Time Display
                                  Prepared by Microsoft, Version 3.0.0.0
                                  Last modified on 28 January 2010

3.3       References
 Reference Document                                                                                               Version
 R1.            Design Guidance – Date and Time Input                                                              3.0.0.0

 R2.            Design Guidance – Date Display                                                                     3.0.0.0

 R3.            ISO 8601:2004: Data elements and interchange formats – Information interchange – Representation
                of dates and times
                http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=40874

 R4.            World Wide Web Consortium (W3C) Date and Time
                http://www.w3.org/International/O-time

 R5.            UK Government Data Standards (GovTalk)
                http://www.govtalk.gov.uk/gdsc/html/noframes/Time-2-0-Release.htm

 R6.            Design Guidance – Medications Management – Medications Views                                       2.0.0.0
 Table 14: References

                                                                                                                      Page 12
                            Design Guidance – Time Display
                            Prepared by Microsoft, Version 3.0.0.0
                            Last modified on 28 January 2010
