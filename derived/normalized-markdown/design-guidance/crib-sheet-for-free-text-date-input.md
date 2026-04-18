# Crib Sheet for Free Text Date Input

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-crib-sheets/Crib Sheet for Free Text Date Input.pdf`
- Extracted text: `derived/extracted-text/design-guidance/crib-sheet-for-free-text-date-input.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Free-Text Date Input Crib Sheet
Free-Text Input
                                                                                  Follow guidance for Date Display
 Display a default                   05-May-2006

                                                                                   Default Dates
 Support selection of the
                                     05-May-2006                                   dd-mmm-yyyy                   05-May-2006
 entire value
                                                                                  Non-specific default         Specific date as a default
                                                                                                               (for example Today’s date)
 Allow Free-Text entry of    1
 a date
                             2       05-Se
                                                                                   Ambiguous and Incomplete Entries
                             3       05-Sep-2007
                                                                                  Display a message dialog box with appropriate
                                                                                  instructional text if the data is ambiguous or incomplete
                                       Enter a date e.g. August 2005, or
 Provide instructions on                                                           05/04/2009
                                       a shortcut e.g. +3m, or click on
 how to use the control
                                       the calendar icon to select a date         Did you mean:
                                                                                  05-Apr-2009 or 04-May-2009 or different date?
                             1       05-May-2006
                                        May
 Allow the date elements
                                                                                       Display a maximum           Provide an option
 to be individually edited   2       05-Se-2006                                        of 2 suggestions            to re-enter the date

 Allow input of ‘unknown’                                                         Arithmetic Abbreviations
                                     Unknown
 or similar
                                                                                  + For later dates         w weeks         y years
 Support arithmetic
 abbreviations for dates             +3d                                          - For earlier dates        d days         m months
 (but not for times)

 Edition 1 – 20th May 2010   © Microsoft Corporation 2010. All rights reserved.
