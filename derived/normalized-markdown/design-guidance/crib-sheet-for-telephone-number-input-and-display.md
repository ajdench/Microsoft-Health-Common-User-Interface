# Crib Sheet for Telephone Number Input and Display

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-crib-sheets/Crib Sheet for Telephone Number Input and Display.pdf`
- Extracted text: `derived/extracted-text/design-guidance/crib-sheet-for-telephone-number-input-and-display.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Telephone Number Input and Display Crib Sheet
                               Country Code
 Display                       Display without leading zeros and with a ‘+’           Assisted Country Selector
                               Do not display UK codes (+44, 0044)
                                                                                      Default State        1         Country Code
                                  Area Code
                                  Display UK codes without brackets                                                   +44 (UK)

                                     Local Number
                                                Extension Number                      Expanded             2         Country Code
                                                                                                                                           Allow selection of an
                                                For UK numbers, can                                                   Af                   entry by typing in text
                                                be displayed with an ‘x’                     Add a duplicate
                                                preceding and adjacent                       UK entry at the
                                                                                                                     United Kingdom                    +44 (UK)
 +1 212 555 2368 x1234                          to the number                                top of the list
                                                                                                                     Afghanistan                       +93 (AF)
                                                                                                         Order       Albania                          +355 (AL)
   space                     space                                                                                   Algeria                          +213 (DZ)
                                                                                               alphabetically        Andorra                          +376 (AD)
           space
                                                   Reference                                                         Angola                           +244 (AO)
                   space
                                                   Follow the rules
                                                                                                                     Argentina                         +54 (AR)
                   When a UK telephone
                   number has more than            defined in                             Country Name
                   six digits, insert a space      CFH NPFIT CSA –                        Left-aligned                     Dialling Code
                                                   Telecommunication                                                       Right-aligned
                   before the final four
                                                   Address Display                                             Abbreviation
                                                   Requirements for CSA                                        Right-aligned, two characters
                                                                                                               enclosed in brackets

 Free-Text Input                                                                             1       +44 118 123 4567                  Data Validation
                                         Free-text input box
                                            Accepts formatted and unformatted text                                                     If a number has been entered that
                                                                                                     0118 123 4567                     is valid, replace with correct
                                                                                             2                                         formatting upon losing focus
  Telephone Number             Extension                 Free-text input box
                                                         Use where extension number                Remove the UK country code          If the number cannot be validated,
   987 6543                     1234                     is input into a separate box              after the number is committed       display as it was entered
                                                                                                   Retain all other (non-UK)
                                                                                                   country codes

 Edition 1 – 20th May 2010           © Microsoft Corporation 2010. All rights reserved.
