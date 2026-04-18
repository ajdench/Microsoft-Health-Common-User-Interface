# Crib Sheet for Time Input - Duration

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-crib-sheets/Crib Sheet for Time Input - Duration.pdf`
- Extracted text: `derived/extracted-text/design-guidance/crib-sheet-for-time-input-duration.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Time Input – Duration Crib Sheet
 Allow editing of the        1    Duration      15min 30sec                           Spanning Time Zones
 individual elements
                                                                                      Where a duration spans the change between GMT and
 of a duration
                             2    Duration      15min 30sec                           BST, show a pop-up to inform the user that the system will
                                                                                      automatically adjust the data according to the appropriate
                                                                                      time zone.
                             3    Duration      15min 30sec
                                                                                        Start Date    27-Mar-2010

 Allow the entry of time          Duration      30sec                                   Start Time    23:30
 duration units either
 singly or in combination                                                                 Duration    2 hrs
                                  Duration      15min 30sec
                                                                                                     This duration spans the change from GMT
                                                                                                     to BST. BST runs from 28-Mar-2010
 Support the optional                                                                                01:00 to 31-Oct-2010 02:00.
                                  Duration      15 min 30 sec
 entry of spaces within                                                                              During BST, times will be automatically
 the duration input                                                                                  adjusted forward one hour such that 01:00
                                                                                                     becomes 02:00.
 Provide the facility for         Duration      6m
 clarifying an
                                               Did you mean:
 ambiguous entry
                                               6 months or 6 minutes?                 Duration Abbreviations
 5y 6m 7d 4hr
                                                                                      + For later dates             w weeks         y years
    Enter a duration using the following              Provide access to                - For earlier dates           d days        m months
    units: y = year, m = month, d = day,              instructions on how
    hr = hour, min = minutes, sec = seconds           to use the control              Ensure that this minimal set of abbreviations is supported
                                                                                      Allow the set of duration abbreviations to be extended
                                                                                      appropriately, for example ‘hrs’ as well as ‘hr’.
Follow guidance for Date and Time Display                                             Ensure that any additions are unique within the entire set

 Edition 1 – 20th May 2010       © Microsoft Corporation 2010. All rights reserved.
