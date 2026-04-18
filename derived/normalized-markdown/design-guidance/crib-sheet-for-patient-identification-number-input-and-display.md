# Crib Sheet for Patient Identification Number Input and Display

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-crib-sheets/Crib Sheet for Patient Identification Number Input and Display.pdf`
- Extracted text: `derived/extracted-text/design-guidance/crib-sheet-for-patient-identification-number-input-and-display.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Patient Identification Number Input and Display Crib Sheet
 Display                           Display in these three
 Display in full without
                                                                        NHS Number                                       e.g. 123 456 7890
                                   groups with this number
 wrapping or truncation            of characters in each
                                                                                                                                                             Example Hint
                                     3      3       4
                                                                        NHS Number              e.g. 123 456 7890
           NHS Number              123 456 7890                                                                                     Example Prompt
                                                                        NHS Number
                                                                                                                                                            Example Tooltip
 Single Text Input Box                   spaces
 Only one patient identification                                                                      Enter the NHS Number e.g. 123 456 7890. This
 number can be entered                                                                                is a ten-digit number used to identify a person
                                                                                                      uniquely within the NHS in England and Wales

 Input                                                                                       Set the length so the
 Other than the space                                                                        number is visible in full
                                                                                                                             Copy and Paste
 separator, discard all non-                                  Set the height to the                                          Support copy and paste of the
 numeric input, such as:                                  largest character height            123 456 7890                   patient identification number
         . Full stop
         , Comma
                                             Do not permit entry of old format
         : Colon                             or temporary NHS Numbers                                                           Q           W           E

                                                                                          Reformat numbers
         - Hyphen                                                                                                                   A           S
                                                1            123                          as they are entered
    – — Dashes                                                                                                                          Z           X

         / Forward slash
                                                2            123 4
         \ Back slash
                                                                              Permit only the single                         Permit input via all mechanisms
                                                                              space as a separator                           supported by the platform

 Edition 1 – 20th May 2010           © Microsoft Corporation 2010. All rights reserved.
