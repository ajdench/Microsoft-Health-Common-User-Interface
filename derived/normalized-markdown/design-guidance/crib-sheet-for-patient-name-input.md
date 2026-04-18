# Crib Sheet for Patient Name Input

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-crib-sheets/Crib Sheet for Patient Name Input.pdf`
- Extracted text: `derived/extracted-text/design-guidance/crib-sheet-for-patient-name-input.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Patient Name Input Crib Sheet
  In-Form Patient Name                                                                            In-Line Patient Name
                                                                                                  Use only when an in-form design is undesirable
  Display the input controls in the order shown, with the labels shown
  and link the labels programmatically to the associated input field
                                                                                                 Title           FAMILY name
                                                     Title combo box                             e.g. Mr         e.g. SMITH
              Title e.g. Mr
                                                     Accept a maximum of 35 characters
                                                     Display a minimum of 4 characters           Given name               Middle name(s)

  FAMILY name e.g. SMITH                             Family Name free-text box                   e.g. John                 e.g. David James
                                                     Accept a maximum of 35 characters
                                                     Display a minimum of 8 characters           Suffix               Known as

                                                     Given Name free-text box                    e.g. Junior          e.g. Johnny-Boy
     Given name e.g. John
                                                     Accept a maximum of 35 characters
                                                     Display a minimum of 8 characters
                                                     Optimally, display 14 characters

 Middle name(s) e.g. David James                     Middle Name(s) free-text box
                                                     Accept a maximum of 100 characters          Suggested values for Title
                                                     Display a minimum of 8 characters                                             One value
                         Left-align input fields                                                 Mr       Mrs Ms Dr Rev Sir        should allow the
                                                     Suffix free-text box                                                          user to invoke
            Suffix e.g. Junior                       Accept a maximum of 35 characters           Lady Lord Dame Other...           free-text input
                                                     Display a minimum of 8 characters
                                                     Optimally, display 14 characters
                                                                                                 Prompts
                                                     Preferred Name free-text box                Display prompts as shown (including font
       Known as e.g. Johnny-Boy                      Accept a maximum of 35 characters           formatting and capitalisation) by default
                                                     Display a minimum of 8 characters
                                                     Optimally, display 14 characters            Remove the prompt when a user starts
                                                                                                 to input data

 Middle name(s) e.g. David James                   Each field in a name input should have
                                                   instructional text (for example, a tooltip)   Labels
                                                                                                 Use the labels shown and link them
                             Enter the person’s middle name(s)                                   programmatically to the associated input field

 Edition 1 – 20th May 2010         © Microsoft Corporation 2010. All rights reserved.
