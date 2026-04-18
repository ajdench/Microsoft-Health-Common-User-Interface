# Design Groundwork Exploration -- Noting Using Templates

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Groundwork Exploration -- Noting Using Templates.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-groundwork-exploration-noting-using-templates.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Noting Using Templates
Design Groundwork Exploration

Thursday, 28 January 2010
Version 1.0.0.0

Prepared by

                          The ideas presented in this document are for community preview and consultation only.
                 Further design and patient safety assessments are required to finalize the content as CUI Design Guidance.

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property Rights to this Content
are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise their rights of ownership. Microsoft
acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content. Readers are referred to www.cui.nhs.uk for further
information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft Corporation in the United
States and/or other countries. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation.

© Microsoft Corporation 2010. All rights reserved.

Executive Summary
 Problem
 •     Clinicians need only some of the clinical data entry structures (‘templates’) available to them in any
       given situation
 •     Clinicians risk missing the correct template, opening the wrong template or eschewing data structures
       and entering free text

 Scope
 •     Assist the clinician accessing and then entering data into the relevant template in a safe, efficient and
       timely manner
 •     Focus upon the entry of an acute medical admissions form implied by the relevant headings defined by
       the UK Royal College of Physicians (RCP)

 Headline Findings
 •     To afford the clinician sufficient flexibility during admissions clerking, searching as well as browsing
       must be considered in noting using templates
 •     The UI may proactively offer templates (either by following the concept encoding or by matching terms
       within free text)
 •     The UI must be able to accommodate repeated use of certain data fields within the same template

     28 January 2010                                 Microsoft                                           Slide 2

Table of Contents
 •    Executive Summary
 •    Table of Contents
 •    Problem Statement
 •    Scope Statement
 •    Items Out of Scope
 •    Background to design consultation
 •    About this design consultation
 •    Assumptions
 •    Brief outline of the themes
 •    Design exploration themes
 •    Glossary and acronyms
 •    Themes
 •    Areas/questions for further work and study

  28 January 2010                  Microsoft       Slide 3

Problem Statement
 Background
 Traditionally, hospital and acute care clinicians have recorded notes directly on paper or dictated
 to an assistant. With the advent of electronic noting, clinicians increasingly need to record
 structured data using electronic systems, in order that the data can be safely accessed, displayed
 and queried.

 The Problems
 •    In free text, a lot of meaning can be conveyed (and implied) by a small number of characters.
      Conversely, a lot of data fields may be required in order to capture the same meaning in
      structured data entry. This is particularly true of acute medical admission clerking, where,
      despite following standard high level topic areas, there could be much variation in the details
      captured. The UI must provide access to all these data fields
 •    In natural language, the structures are stored and accessed in the user’s mind, whereas in
      structured data entry, the UI needs to offer access to many data permutations. In effect, the
      onus for navigating and selecting entry components is shifted from the clinician’s mind,
      where most of the considerations are subconscious, to the UI, where the UI needs to offer
      options and the clinician needs to choose from them. This potentially introduces a big time
      penalty for capturing structured data

 28 January 2010                                Microsoft                                       Slide 4

Problem Statement

 The Problems (continued)
 •    Previous usability tests have shown that clinicians perceive electronic forms which have been
      literally translated from paper to be unwieldy to use in the context of admissions clerking
 •    Previous usability tests have shown that clinicians’ natural inclination is to type in a string of
      words when noting
 •    A form in which the data fields are arranged in a fixed order is not conducive to noting in
      which different topics may be addressed in a number of different orders, depending upon
      factors such as the patient’s specific health problems and needs, the way in which the patient
      relays their history, and the noting style of the individual clinician. A traditional form design
      does not afford such flexibility

 28 January 2010                                 Microsoft                                          Slide 5

Scope Statement

 • Basic searching
 • Section search
 • Additional template search
 • Search on abbreviations
 • SNOMED CT® search trigger
 • Free text trigger
 • Browsing
 • Revisiting and adding templates
 • Reordering

 28 January 2010                Microsoft   Slide 6

Items Out of Scope

  •    Patient-specific decision support
  •    Special data previewing functions
  •    Any display of data beyond its initial entry
  •    Printing of forms
  •    Workflow management
  •    Saving data
  •    Actual form design (such as field layout)

  28 January 2010                  Microsoft          Slide 7

Background to design consultation
This design exploration is based upon the notion that data structure has been defined in the form of
data ‘templates’, that is, fixed configurations of data fields, some of which are constrained by the
values that can be entered. Templates have a number of different meanings, not least in the health
informatics field, but the term is used in a general way in this consultation.
In graphical user interface terms, the most conventional manifestation of templates would be as
‘forms’, where the data fields are presented to the user, typically as a set of boxes into which the user
can type or select data. They could be manifested in other ways, such as constraining matches in a
text parsing context, but typically they are presented as forms.
Forms may comprise sections and subsections, all of which contain fields. In this consultation
document, we assume that any section or subsection is a template in its own right. That is to say,
templates can be nested.
Although ‘template’ refers to a standalone unit of data structure, in the wider noting context we are
not assuming that any template can be used in isolation. A form may comprise a number of sections,
each of which constitutes a template, and these templates may be accessed as individual units within
the context of the form. However, it does not follow that clinicians can access sections outside of the
context of the form in which they belong.

  28 January 2010                                Microsoft                                        Slide 8

About this design consultation

  The purpose of the document is to summarize the current learning that
  has been achieved in the design and research process to date. This is
  articulated primarily in terms of the features that comprise the preferred
  current design. These design features aggregate into nine themes.

  For each theme we summarise the key design points, plus the rationale
  for choosing these points. We then illustrate these with images of the
  current design, plus an indication of some of the alternatives we have
  been considering. We end each theme by outlining the proposed next
  steps and future exploration.

  28 January 2010                   Microsoft                           Slide 9

Assumptions
•   Aspects of care can be documented within standalone data templates which can
    be assembled to form a coherent patient record
•   The UI should encourage the user to complete a template rather than entering
    free text, where appropriate templates exist
•   The UI will offer multiple routes for opening structured data templates:
     •     Providing a means to browse the template
     •     Providing a means to search for sections within the template
     •     Allowing the clinician to open the whole template in a single action
     •     Suggesting possible templates based upon terms that the clinician has entered

•   Appropriate search engine technology is available to support the searching
    outlined in this consultation
•   Appropriate authorities will manage the creation of and access to appropriate
    clinical templates
•   SNOMED CT is the chosen terminology
•   The Royal College of Physicians (RCP) guidelines on acute medical admissions
    clerking provide the standard high level structure for an admission template

    28 January 2010                                  Microsoft                             Slide 10

Brief outline of the themes
 This design consultation is addressing several solutions which address the problem of accessing the
 appropriate template from within a large set of templates. These solutions are intended to be
 mutually compatible.

 The Basic searching design topic addresses how clinicians can search for templates. It provides the
 foundation for the rest of the searching designs, which in turn address specific searching needs.

 The Section search, which also includes the Additional template search and Search on
 abbreviations topics, is a particular type of search where the clinician can search for section
 headings within a form, in addition to finding additional templates.

 Another way in which the clinician can access sections within the form is by Browsing, for example
 via a tree structure.

 In addition to allowing the clinician to search for templates, the designs also address how the UI can
 proactively suggest templates based upon terms that the clinician has entered, either via a
 SNOMED CT search trigger or via a Free text trigger.

 Finally, the design addresses some auxiliary features. It covers what happens if the clinician decides
 to revisit a template via the search or browse functions, and how the clinician can add more of the
 same fields (Revisiting and Adding templates) . It also deals with how the clinician may reorder the
 sections according to a standard sequence (Reordering).
  28 January 2010                                Microsoft                                         Slide 11

Design exploration themes

 Themes                               Key topics
 1. Basic searching                   Layout and ordering of search results

 2. Section search                    Accessing the feature; displaying results; inserting sections

 3. Additional template search        Labelling; displaying alongside internal results

 4. Search on abbreviations           Labelling; prioritisation in results

 5. SNOMED CT search trigger          Triggering; display; access

 6. Free text trigger                 Tagging; display; access

 7. Browsing                          Location of browse; default visibility

 8. Revisiting and Adding templates   Opening an existing section; opening new fields

 9. Reordering                        Standard reordering; reordering by entry

  28 January 2010                                Microsoft                                            Slide 12

Glossary and acronyms

 Term/
 Acronym            Details
 CF                 Clinical feedback: The designs were subjected to regular feedback from select members of a
                    medical organization, including clinicians, a clinical architect and a clinical safety advisor
 CUI                Previous or concurrent Microsoft Health Common User Interface (CUI) work: Where relevant,
                    the designs take account of other Microsoft Health CUI work, such as guidance or design
                    consultation
 EP                 Existing Practice: In creating the designs, we considered examples of existing practice, that is UI
                    elements with existing software which perform similar actions (both within or without the
                    health industry)
 PSA                Patient Safety Assessment findings: The designs were subjected to a series of safety hazard
                    assessments with healthcare professionals
 REQ                User requirements: The designs have been based upon user requirements identified during
                    early analyses of the design areas
 UR                 User research: The designs were tested with healthcare professionals

 UX                 User experience input: The designs have been shaped by knowledge and principles from the
                    user experience domain

  28 January 2010                                      Microsoft                                              Slide 13

     THEME 1 – BASIC SEARCHING

28 January 2010   Microsoft      Slide 14

1.1 Introduction to Basic Searching
This theme explores the necessary features required to provide the clinician with a means for searching for
and opening clinical templates, primarily manifested as forms, of varying sizes, but also as section headings
within forms.

Such a function would be intended to be used in a number of situations, including at the start of clerking a
patient and in those contexts where the clinician is already entering notes and needs an additional template.

The designs in this theme explore the basic UI features that will comprise such a search function, including:
• How to allow clinicians to type in the (criteria) search text
• How to display the results
• How to filter the results, including displaying the current filter
• How to display relevant metadata
• How to search on metadata, such as structure (for example, section headings) within the form
• How to browse between and within search results

         Example of a filtering control                                         Example of a metadata display

   28 January 2010                                 Microsoft                                         Slide 15

1.1 Introduction to Basic Searching

                                                             Note: Although this design consultation
                                                             focuses upon admissions clerking, the
                                                             designs in Theme 1 may also apply to
                                                             template searching in general.

                    Illustration of listing search results

  28 January 2010                             Microsoft                                       Slide 16

1.2 Design summary

  Design point                                                     Rationale key points
  The UI provides a search entry field which                       This type of search mechanism has many precedents on the
                                                                   Internet and will be familiar to clinicians (EP)
  supports progressive matching
                                                                   User research confirmed that clinicians understand how to use
                                                                   this mechanism (UR)

  The template options are matched according to                    This type of search mechanism has many precedents on the
                                                                   Internet and will be familiar to clinicians (EP)
  phrase similarity:
  •   That is, the search engine matches the text entered by the   Also, this type of searching has been shown to work in previous
      clinician against the text in the template labels            CUI research (for example, searching for SNOMED CT terms or
                                                                   for drugs) (UR)

  The search features ‘fuzzy’ matching                             Clinicians will not necessarily know the exact names of
                                                                   templates or sections, so some flexibility needs to be accorded
                                                                   their search (CF)

                                                                   Fuzzy matching, such as ‘stem’ matching, is a common feature
                                                                   on Internet search features and may be expected (EP)

 Key to abbreviations (slide 14)

  28 January 2010                                             Microsoft                                                    Slide 17

1.2 Design summary

 Design point                                                    Rationale key points
 The UI allows searching by section heading as                   Clinicians may not know the exact title of the template they
                                                                 require, but may know what sections would be contained within
 well as by template title                                       it (CF)

                                                                 Must reduce the risk of the clinician being unable to find a
                                                                 template or choosing the wrong template (PSA)

                                                                 Clinicians understood the concept of searching by section,
                                                                 although the specific labelling of the feature was unclear. The
                                                                 primary focus should be on the template titles matching (UR)

 The UI does not allow the user to search by                     Searching for and opening a single field will rarely be required
                                                                 and could be risky due to the lack of resulting context
 fields:                                                         surrounding the field (CF)
 •   Unless there is an appropriate use case
 •   Field searches could be achieved by a separate 'Find'
     function

 The UI is able to search for any size of                        Templates can vary significantly by size, from small templates for
                                                                 capturing measurement values through to large templates, such
 template                                                        as the acute medical admission form (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                             Microsoft                                                      Slide 18

1.2 Design summary
  Design point                                                  Rationale key points
  The results are filtered according to context:                There is a risk of the clinician choosing a template out of context,
                                                                unless filtering is applied. Completing the wrong template could
  •   For example, by a local filter which could account for
                                                                adversely affect future interpretations of the patient’s health (PSA)
      the clinician’s specialty, division or department
                                                                (UX)
  •   For example, by the specific stage in the patient’s
      treatment
                                                                The concept of filtering was supported by the clinicians tested (UR)

  The filtering includes rather than excludes                   Generic templates , such as a general medical admission form, may
                                                                be missed if filtering means that only domain-specific templates are
  generic templates                                             selected (UR)

  The current filter label is displayed as part                 User research indicated the importance of clearly communicating
                                                                the current filter, plus a control for adjusting (for example, breaking
  of the filter adjustment control                              out of) the filter (UR)

  The results are ordered by phrase similarity                  Research within other areas of CUI have revealed that clinicians
                                                                understand ordering by phrase similarity (CUI)

  The list only displays a maximum number of                    Depending upon the search criteria, the search could return any
                                                                number of results. The space available will necessarily limit the
  results by default:                                           number of results that can be displayed simultaneously. Also,
  •   Meanwhile a widget is provided which reveals more         showing more than several at a time can reduce the user's ability to
      results                                                   find what they need. Therefore, although the search could return
                                                                any number of results, only a set number are shown in the initial
                                                                view (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                               Microsoft                                                       Slide 19

1.2 Design summary

 Design point                                                   Rationale key points
 The search field is located above the results                  Allows the clinician to easily recognize the association between
                                                                the search control and the template that has been returned (UX)
 list
                                                                This is standard practice in search features (EP)

 The results are displayed in a vertical list                   The template labels returned must be visually presented as to
                                                                allow scanning and comparison between them in order to reduce
                                                                the risk that they choose the wrong template (PSA)

                                                                Allows the clinician to easily recognize the association between
                                                                the search control and the template that has been returned (UX)

                                                                This is standard practice in search features (EP)

                                                                The stacked approach was endorsed by user research (UR)

 The template labels are not truncated in the                   Avoiding truncation of labels in searches is an early conclusion in
                                                                the emerging CUI design on truncation’(CUI)
 results list:
 •   Instead, the label wraps, with a slight indent on the
     second line and any subsequent lines

 Key to abbreviations (slide 14)

 28 January 2010                                             Microsoft                                                      Slide 20

1.2 Design summary
 Design point                                            Rationale key points
 The UI displays and allows searching on                 There is no universal convention for labelling templates and, even if
                                                         there were, it is unlikely that an authority would be able to create
 appropriate metadata for each template:                 one where every label can clearly and unequivocally communicate
 •   Where appropriate metadata exists                   exactly the configuration of fields it contains. Metadata provides a
 •   May include section headings, version details and   further means of identifying the suitability of a template (CF)
     other contextual details
                                                         Clinicians agreed that access to certain metadata will be useful in
                                                         identifying templates, although the template title is probably
                                                         sufficient in the default view (UR)

 Any metadata is displayed in a fly-out:                 Displaying additional (meta) data in a fly-out is consistent with
                                                         previous CUI designs, such as SNOMED CT matching (CUI)
 •   Appears upon hover and/or keyboard focus of a
     template option
                                                         User research suggested that clinicians preferred meta-data to be
 •   Will be able to deal with data of varying lengths
                                                         shown in a fly-out, partly owing to problems with alternative
                                                         designs (UR)

 Any matched metadata text is highlighted                Sometimes there could be much metadata (for example, if there are
                                                         many section headings). The clinician must quickly identify their
                                                         search terms within this data (UX)

                                                         There are precedents for highlighting search terms in existing online
                                                         search features (EP)

                                                         User research indicated a need for showing the connection between
                                                         the search criteria and the metadata (UR)

 Key to abbreviations (slide 14)

 28 January 2010                                         Microsoft                                                      Slide 21

1.2 Design summary

 Design point                                             Rationale key points
 The UI distinguishes 'suggested' matches                 Local policy may promote certain templates over others, and this
                                                          mechanism allows them to do this (CF)

 The search supports synonym matching:                    User testing revealed that often the term for which the clinician is
                                                          searching is not an exact match for the template label (for
 •   Synonyms would be created and managed by an
                                                          example, clinicians may search for the word ‘examination’ or ‘o/e’
     appropriate authority (for example, the medical
                                                          instead of the word ‘observations’) (UR)
     organization)

 The UI displays a message where no matches               The UI must be able to deal with no templates being returned. In
                                                          this case, it must communicate this to the user and must suggest
 are returned                                             ways in which the user may find what they seek (CF)

                                                          This need for such a message was supported by user research
                                                          (UR)

 The UI allows the clinician to browse within             A mechanism for browsing within search results was understood
                                                          by clinicians (UR)
 the search results, including viewing sections
 and subsections of each template

 Key to abbreviations (slide 14)

 28 January 2010                                       Microsoft                                                      Slide 22

1.3 Design exploration

                                                             Design feature:
                                                             Template search results
                                                             progressively match as the
                                                             clinician types in the criteria text

                                                             Design feature:
                                                             Suggested results are visually
                                                             prioritised
           Design feature:
           Vertically stacked list without
           truncation                                        Alternatives considered:
                                                             • Separate windows for each
           Alternatives considered:                            division
           • Thumbnails                                      • Up-front toggle between
           • Narrow labels which expand                        divisions
           • Icons                                           • Distinct iconography
           • More upfront detail                             • No divisions
           • Tabular design
                                                             Design feature:
                                                             Search also matches sections
           Design feature:
                                                             within templates, and displays
           If the structure of the template is
                                                             them in the final division of the
           available to the UI, the clinician
                                                             search results
           can click on the triangular icon
           to browse within the structure,
           although they can only select                     Alternatives considered:
           the whole template (rather than                   • In this division, list by section
           any individual section)                             name rather than by template
                                                               name
                                                             • Search by field rather than by
                                                               section

  28 January 2010                                Microsoft                                          Slide 23

1.3 Design exploration

      Design feature:                                 Design feature:
      The clinician may choose to                     The feature automatically filters
      switch off the filter to increase               the results, based upon the
      the search results                              clinician context

      Alternatives considered:
      • Allow the clinician to choose
        which filters are applied
      • A slider control to allow the
        clinician to set the level of
        filtering

      Design feature:
      The clinician may browse the                    Design feature:
      structure by clicking on these                  Labels are wrapped, instead of
      arrows                                          truncated

      Alternatives considered:
      • Cascading menu options
      • Web browser style navigation
       („forward‟ and „back‟)
      • „+‟ icons instead of arrows

  28 January 2010                         Microsoft                               Slide 24

1.3 Design exploration

         Design feature:
         Display available metadata in the fly-out,
         including main sections, if known.
         Arrange the metadata types in a consistent
         order.

                                                                                           Design feature:
                                                                                           Any words which match the search entry
                                                                                           text will be highlighted.

                                                                                           (none shown in this example)

         Alternatives considered:                            Design feature:                Alternatives considered:
         • Display the metadata in the main list             Indicate the last time that    • Access via an icon plus a pop-up
         • Slider control to reveal/hide meta-data details   data has been entered          • Display in a table
         • Fisheye within the main list                      into this template for this    • Display in a fly-out
         • Separate dialog boxes to display meta-data        specific patient

  28 January 2010                                            Microsoft                                                           Slide 25

1.4 Next steps
 •     Validate assumptions around the availability of templates, including understanding
       what templates could be available
 •     Explore and refine guidance around search logic. Further define the high level rules
 •     Test the usability of the filter function and confirm assumptions around what contextual
       information can be used automatically by the UI
 •     Evaluate the use of the template search function within the context of the acute
       medical admission clerking. In the current designs, this function is featured in the right-
       hand panel. Further testing is required to understand its potential use in relation to the
       other search and match features offered by the design
 •     Further explore the concept of browsing within search results. This was deemed to be
       worthy of further exploration by the user research

     28 January 2010                            Microsoft                                    Slide 26

1.4 Future exploration
 •     Explore the utility and feasibility of searching on fields and possible field values within
       templates (for example, search on „stridor‟, which is a possible selection value rather
       than a field or section)
 •     Validate the use of metadata. Given its potential utility, assess how feasible the
       creation and maintenance of such data would be in future
 •     Explore the management of suggested and/or prioritised templates
 •     Explore the interaction between this feature and wider knowledge and decision
       support mechanisms

     28 January 2010                             Microsoft                                    Slide 27

     THEME 2 – SECTION SEARCH

28 January 2010   Microsoft     Slide 28

2.1 Introduction to Section Search
This theme tackles a problem with offering someone a large template, namely the time taken to navigate
around it to find the section and fields that one needs, in the order in which one needs them.

One solution is to provide a visual browsing mechanism (such as a tree). However, another solution is to
provide a search function that allows the clinician to search for sections and subsections within the template.
In this way, it starts to replicate the clinician‟s current noting behaviour: namely entering a heading and then
entering notes below it.

                                                                         Illustration of a section search feature

The designs in this theme assume an initial situation where the clinician has opened the admissions noting
page and it is blank (or possibly there are one or two default sections already there, such as „Presenting
Complaint(s)‟).

It addresses how clinicians can add and complete sections of the acute medical admissions form to the
noting page incrementally, by typing in search text.

It builds on the designs explored in the Basic searching exploration.
   28 January 2010                                  Microsoft                                            Slide 29

2.2 Design summary

 Design point                                              Rationale key points
 Sections and subsections can be inserted in any           Clinicians may enter medical admission data in multiple ways,
                                                           depending upon the clinician encounter (UR) (CF)
 order
 The UI allows the user to choose which                    The Royal College of Physicians’ (RCP) standard acute
                                                           admissions headings will imply more content than is typically
 sections or subsections they open and which               needed within an individual clinical situation (CF)
 they do not
 Encoding is not a required precursor for                  Forcing an encoding first could be unintuitive and could result
                                                           in users not completing structured templates (PSA)
 offering templates
 There are multiple ways to access the section             Users intuitively clicked into the next available white space and
                                                           start typing headings (UR)
 search:
 •   Clicking into white space outside of a section        Users also felt it is necessary to have an explicit control for
 •   Clicking a button at the top of the page              inserting a heading, such as a button (UR)
 •   Pressing a key combination
                                                           A key combination is an appropriate method where the user is
                                                           not using a mouse (UX)

 We are considering offering a right-click                 When searching for templates within free text, some users
                                                           intuitively right-click to find a contextual menu which will offer
 mechanism for accessing templates, where                  a template (UR)
 possible
 Key to abbreviations (slide 14)

 28 January 2010                                      Microsoft                                                        Slide 30

2.2 Design summary

 Design point                                        Rationale key points
 The search results are ordered primarily by         The list will be ordered in a way that is meaningful to the user
                                                     (REQ)
 word similarity
 Synonyms are required to assist the search          Users searched on terms such as ‘o/e’ and ‘examination’, which
                                                     yielded no results as the RCP headings use the prefix
                                                     ‘Observations and Findings’ (UR)

 The search text disappears after template           Without this feature, users had problems closing the results
                                                     list. They tried to click away (UR)
 chosen (or upon click away or <ESC>)
 The section search feature closes after inserting   The assumption is that the user will find a template, then
                                                     complete it, rather than searching for another template (CF)
 a template
 Upon opening a section, the UI shows where in       To reduce the risk that the user enters data into the wrong
                                                     section (PSA)
 the template structure it is located

 Key to abbreviations (slide 14)

 28 January 2010                               Microsoft                                                      Slide 31

2.2 Design summary

 Design point                                                   Rationale key points
 The sections are appropriately labelled, so that               A field could exist under multiple headings, but the different
                                                                contexts could imply different meanings (CF)
 they are uniquely identifiable:
 •   Templates labels comprise a composite of the immediate
     section label and the super-section label (‘breadcrumb’
     style)

 The UI does not allow sections to be inserted                  The current design follows the Royal College of Physicians’
                                                                guidelines on record keeping in acute admissions.
 into other sections, except where the data                     Inserting a section into another section could affect its meaning
 structure allows it                                            in such a way that could lead to misinterpretation between
                                                                author and subsequent reader (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                           Microsoft                                                     Slide 32

2.3 Design exploration

                                                                           Design feature:
                                                                           This button also opens the
                                                                           search entry marquee

                                    Design feature:
                                    This feature will appear by default
                                    if the clinician has just opened the
                                    admission form and the noting
                                    area is completely blank
Design feature:
Search entry field (manifested
as a marquee in this instance)
and cursor appears when the
user clicks in the white space.
Key combination and a button
can also trigger it

Alternatives:
• Permanent entry field
• Feature in the right-hand panel
• Letter combination to open it
• Highlight or click on text that
  the user has already typed

    28 January 2010                                        Microsoft                             Slide 33

2.3 Design exploration

Design feature:
Results progressively appear
below the search entry feature.
The feature remains open until
the user clicks away, presses
<ESC> or selects a template

Alternatives:
• Clinician types in text and then
  clicks on a button to activate a
  search

     28 January 2010                 Microsoft   Slide 34

2.3 Design exploration

                    Design feature:
                    Once selected, the section
                    appears in place of the search
                    feature

                    Alternatives:
                    • Search feature remains open
                      until the clinician explicitly
                      closes it

  28 January 2010                                      Microsoft   Slide 35

2.4 Next steps
 Next steps:
 •      Confirm the usability of opening the section search by clicking in white space

 Future exploration:

 •     Further explore the interaction between the section search, the right-hand template
       search and the suggested templates (such as single concept matching and narrative
       triggers)
 •     Explore the use of a right-click driven contextual menu for use in situations that can
       accommodate such a control
 •     Better define the need for synonyms in the section search

     28 January 2010                           Microsoft                                   Slide 36

     THEME 3 – ADDITIONAL TEMPLATE
     SEARCH

28 January 2010   Microsoft      Slide 37

3.1 Introduction to Additional Template Search
There may be points within the admission clerking process where the clinician needs to access additional
templates, such as a score or a risk calculator. In this respect, templates built for medical admission clerking
tend to be wide-reaching, but not exhaustive. We predict that a proportion of the noting will require templates
which do not belong to the core template.
However, we assume that clinicians will not necessarily know which data structures belong within the core
template and which are additional templates. Therefore, the designs assume that additional templates can
be accessed in the same way as the core sections.
Nevertheless, the additional templates will open outside of the core admission template, and therefore, to
avoid confusion, the clinician should be aware that there is a distinction between core and additional
templates.
Therefore, the designs:
• Show how the clinician can access additional templates during admission clerking
• Show how to display additional templates results in the (section) search feature
• Distinguish core from additional templates

                                                                       Illustration of an additional template opened in a
  Illustration of additional templates in search results               new tab

   28 January 2010                                         Microsoft                                            Slide 38

3.2 Design summary

  Design point                                                        Rationale key points
  The UI allows access to additional templates                        Users may wish to complete templates, such as scores or
                                                                      detailed examination templates, which are not part of the core
  from within the admission form                                      acute medical admission form (REQ)

                                                                      Some headings could require significantly different data
                                                                      structures depending upon the patient’s circumstances, for
                                                                      example, in the Family History section (REQ)

  The additional template search is provided                          This has been done for the sake of convenience: to reduce the
                                                                      number of mechanisms. Also, the user may not be aware what
  through the same mechanism as the core                              is or is not included in the admission form (UX)
  section search
  The additional and core template search results                     Splitting the ‘core' from the ‘additional‘ templates as done in
                                                                      the test design (horizontal dividing lines and right-aligned
  are displayed in same list and are ordered                          headers) risks the user missing the lower, additional template
  without bias to either category                                     results. Users may assume that the matches in the lower half
                                                                      are not well matched (UR)

  The additional template search results are                          Clinicians felt that this would be the most appropriate
                                                                      mechanism, if these core and additional results are combined
  distinct from the core template results:                            in a single list (CF)
  •   For example, by featuring an icon next to the additional
      template search results                                         This use of iconography has its origins in web conventions (UX)

 Key to abbreviations (slide 14)
  28 January 2010                                                Microsoft                                                     Slide 39

3.2 Design summary

 Design point                                                    Rationale key points
 The additional templates are labelled upon                      It is good UI practice to clearly label forms and fields, especially
                                                                 as the additional templates are not part of the standard
 access                                                          structure of the admissions notes (UX)

 The additional templates are not inserted into                  The design aims to follow the standard RCP headings and
                                                                 medical organization data structures where appropriate (CF)
 sections with the admissions form:
 •   However, the system may link these templates to the terms   Inserting a template under a heading may assign it new
     which triggered them (where appropriate)                    meaning, either in the mind of the author or the reader (UX)

 Key to abbreviations (slide 14)

 28 January 2010                                          Microsoft                                                          Slide 40

3.3 Design exploration

                                                       Design feature:
                                                       Additional templates results are
                                                       distinguished by an icon

 Design feature:
 Additional templates are displayed in the
 same list as the (core) section results

 There is no bias in the ordering of core and
 additional results
                                                        Design feature:
                                                        The fly-out could communicate
 Alternatives:                                          that the template will open
 • Divides the results between core and                 separately from the current
   additional templates (under different                template
   headings)
 • Provides an up front toggle between core
   and external templates

  28 January 2010                               Microsoft                                 Slide 41

3.3 Design exploration

                          Design feature:
                          Additional templates, if chosen,
                          are not displayed in the acute
                          medical admissions form.
                          Instead, they are displayed in a
                          separate tab.

  28 January 2010        Microsoft                           Slide 42

3.4 Next steps
 Immediate next steps:
 •     Further investigate the usability of returning additional template results in the same list
       as internal template results
 •     Confirm the usability of distinguishing additional from core template results by way of
       an icon
 •     Investigate whether clinicians understand the difference between additional and core
       templates and what are the consequences of them not recognising the difference

 Future exploration:

 •     Explore the linkages between a given template (such as the acute medical admissions
       form) and additional templates. Should the templates feature visible linkages, and, if
       so, how?
 •     Explore if additional templates can safely be inserted into a given form
 •     Explore if there are circumstances where additional templates could replace sections
       within the acute admissions form (for example, if the patient has a need for a specialist
       examination). How would these be inserted into the form? Should they then be
       represented within the browsable tree structure?

     28 January 2010                            Microsoft                                     Slide 43

     THEME 4 – SEARCHING USING
     ABBREVIATIONS

28 January 2010   Microsoft      Slide 44

4.1 Introduction to Searching Using Abbreviations
One of the values that clinicians can immediately see from electronic noting is the use of „acceleration‟
facilities, such as „hot keys‟ and shorthand codes. The current search can benefit from the use of
„abbreviation‟ search.

The designs show how the clinician can type in certain abbreviations of section labels. The search engine
deals with the abbreviations in a similar way to other synonyms of the section labels.
For example, the clinician may type „PMH‟ and the system will offer „Past Medical History‟ in the results.

                                                               Illustration of a search by abbreviation

   28 January 2010                                 Microsoft                                              Slide 45

4.2 Design summary

  Design point                                              Rationale key points
  The user can search on predefined abbreviations
                                                            Being able to search using abbreviations will provide
  The results found by abbreviations are prioritised        immediately perceived value for the user (CF)
  over other search criteria

 Key to abbreviations (slide 14)

  28 January 2010                               Microsoft                                                    Slide 46

4.3 Design exploration

                    Design feature:
                    The user can search on
                    abbreviation. Abbreviation
                    matches are prioritised to the
                    top of the results list

                    Alternatives:
                    • Features a separate search
                      facility for abbreviations
                    • Provides an up front toggle
                      between full word and
                      abbreviation searching

  28 January 2010                                    Microsoft   Slide 47

4.4 Next steps
 Next steps:

 •     Explore the feasibility of a look-up list so that the user can browse the abbreviation
       labels for each section. Consider providing abbreviation labels in the existing browse
       section

 Future exploration:
 •     Explore whether abbreviations should be provided for additional templates as well as
       core templates (that is, sections within the admissions clerking form)
 •     Explore how the user can customise their own abbreviations and the safety implications
       of allowing them to do this
 •     Explore the implications of localised abbreviations
 •     What would the rules be regarding the vocabulary of abbreviations in these situations?

     28 January 2010                           Microsoft                                  Slide 48

     THEME 5 – SNOMED CT SEARCH
     TRIGGER

28 January 2010   Microsoft       Slide 49

5.1 Introduction to SNOMED CT Search Trigger
As part of electronic clinical noting, there may be many occasions where the clinician records a key clinical
term (such as an individual problem or procedure), and they may do this meaningfully and efficiently by
searching for and selecting an appropriate SNOMED CT term. Sometimes the clinician may enter several
such terms sequentially (such as when they are listing items, such as in a past medical history).

Associated with certain terms may be one or more templates which, for example, may allow the clinician to
enter further details and values relating to the term. For example, if the clinician indicates that the patient
may have deep vein thrombosis, the template may offer them a Wells‟ Score to further assess this diagnosis.

                                                                          Illustration of a suggested template list

By suggesting templates, the UI may also reduce the risk that the clinician enters those further details as free
text (for example, in an „additional details‟ free text field).

For example if the clinician has performed an arterial blood gas analysis, it is preferred that they enter the
results in a form rather than as free text. The UI can encourage this by suggesting the relevant templates
once the clinician has entered the term „arterial blood gas analysis‟.

   28 January 2010                                  Microsoft                                            Slide 50

5.2 Design summary

  Design point                                         Rationale key points
  The UI offers templates related to a recently        This is one way in which UI can encourage users to enter data
                                                       in a structured manner, which brings huge benefits of data
  encoded term                                         organisation and retrieval (CF)

                                                       Encoded terms (such as in SNOMED CT) carry sufficient
                                                       meaning that it is safer to link them to specific templates, with
                                                       less risk of ambiguity than simply running searches against free
                                                       text (UX)

                                                       Clinicians were positive about the concept of the UI
                                                       automatically offering template suggestions based upon their
                                                       input (UR)

  It automatically ‘pushes’ template options, in       If the system does not provide prompts of related templates,
                                                       there is the potential to miss essential assessments related to
  addition to allowing the user to request them        the original clinical problem (CF)
  ('pull')
                                                       There are precedents in the medical arena, such as popular
                                                       Primary Care systems (EP)

  It can offer more than one template for a single     We assume that, in some cases, an encoded term could have
                                                       several templates associated with it (CF)
  term

 Key to abbreviations (slide 14)

  28 January 2010                                 Microsoft                                                     Slide 51

5.2 Design summary
 Design point                                                     Rationale key points
 The UI ensures the suggestions are                               Users may not wish to open a related template immediately after
                                                                  encoding a term, so the ability to browse the related templates
 sufficiently prominent:                                          some time after encoding is important (CF)
 •   Right hand side panel
 •   Does not rely upon a hover over                              Users may not expect suggestions to appear on the left-hand side
 •   Drop-down to select terms                                    (PSA)
 •   Not at header or footer of the page
 •   Template options for a term persist in the panel until       The footer location is too hidden and displaying at the top would
     clinician chooses another term                               preclude a conventional list, unless initially hidden (UX)
 •   The feature is non-modal (that is, it does not force the
     clinician to interact with it)

 Templates are filtered according to context                      Lack of contextual constraints in offering templates could result in
                                                                  inefficient noting due to the time taken to search for templates
                                                                  (CF)

 Templates are displayed in a vertical text list                  This format is familiar to clinicians, is flexible and economical (UX)

 The UI visually links templates to trigger                       The clinician may be confused as to why or how to use the
                                                                  suggested template if they do not realize what term triggered it
 words                                                            (UX)

 The UI is able to deal with ‘no templates                        We assume that only a proportion of encoded terms will be
                                                                  appropriate triggers for a template and some encoded terms
 found’                                                           distinctly preclude a template (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                                Microsoft                                                       Slide 52

5.2 Design summary
  Design point                                         Rationale key points
  The suggestions do not obstruct the                  User must not be unduly distracted from the task of noting by the task of
                                                       opening templates (CF)
  noting task
  The interface does not become too                    There is a risk of information overload, confusion and frustration when
                                                       suggesting templates/forms (PSA)
  cluttered:
  •   Does not cumulatively build up a single list     Building up the results in a single list as terms are being encoded could
  •   Does not disrupt the ability to scan a list of   produce a very long list (CF)
      matched terms
                                                       Users did not like templates being offered in-line, where they obstructed
                                                       scanning the main notes (UR)

  The UI emphasises that suggestions are               There is a risk that clinicians rely on the template suggestions as
                                                       diagnostic support (PSA)
  optional
                                                       There is a risk that the user feels obliged to complete templates just
                                                       because they are offered to them, even though the specific circumstance
                                                       may not require them (PSA)

  The template matching accounts for                   In some cases, the UI will need to present templates for post coordinated
                                                       expressions. The majority of these are contextual wrappers. For example,
  post coordination (for example,                      if the user types 'Family history of Cystic Fibrosis', they would expect
  contextual wrappers)                                 templates that are matched to the resulting post coordinated SNOMED
                                                       CT expression (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                          Microsoft                                                          Slide 53

5.2 Design summary

 Design point                                                       Rationale key points
 Templates can be opened by default:                                In some cases, such as the entry of measurement values, it is
                                                                    vital that the clinician enters the values as structured data. If
 •   If there is only a single template available
                                                                    not, important values may be missed in later analysis (PSA)
 •   If it is assumed that the user will need to complete it
 •   And the user can then 'opt out' rather than 'opt in‘
                                                                    In these cases, the UI should be able to force the user to either
                                                                    complete or opt out of a template (CF)
 Observables, such as arterial blood gases, are a
 good example of terms which may have default
 templates
 Access to suggested templates is also provided                     Users did not immediately notice the templates being
                                                                    suggested on the right-hand side, although some felt that it
 in one of two ways in the main noting area:                        was good for them to be sufficiently unobtrusive (UR)
 •   By a hover-over which appears upon mousing-over or
     focusing on a matched concept                                  A button could be easier for the user to understand and
 •   By a button located adjacent to the matched term               operate (UX)

 Options are shown to the right of the matched                      There is a risk that displaying a floating menu adjacent to a
                                                                    term matched by the single concept matching control in a list
 term to minimise obstruction of other terms in                     could obscure other items in the list (CF)
 a list

 Key to abbreviations (slide 14)

 28 January 2010                                               Microsoft                                                       Slide 54

5.3 Design exploration

                                          Design feature:
                                          List only displays templates for
                                          one term at a time

                                         Alternatives:
                                         • Builds up a list of all the
                                           matched templates

                    Design feature:
                    An icon also indicates that there
                    are templates associated with
                    the term.                                                Design feature:
                                                                             Related template matches are
                    Alternatives:                                            displayed in the right-hand panel.
                    • The icon only appears upon                             They are displayed as soon as the
                      hovering over the term                                 term is matched until another term
                    • Does not feature an icon. Just                         is matched or brought into focus
                      display the options upon
                      hovering over the term
                                                                             Alternatives:
                                                                             • Features a panel on the left-hand
                                                                               side
                                                                             • Features options immediately
                                                                               adjacent to the term
                                                                             • Only displays options when the
                                                                               term is in focus

  28 January 2010                               Microsoft                                        Slide 55

5.3 Design exploration

                         Design feature:
                         The user can choose the term for
                         which the UI displays templates by
                         selecting it from this list.
                         The list builds up as the user
                         encodes terms (and as the UI
                         matches terms in the narrative –
                         see Theme 6)

                          Alternatives:
                          • Features a panel on the left-hand
                            side
                          • Features options immediately
                            adjacent to the term
                          • Only displays options when term
                            is in focus

  28 January 2010        Microsoft                              Slide 56

5.3 Design exploration

                    Design feature:                       Alternatives:
                    The user can also view related        • Options only displayed at the
                    template options by mousing-over        point of encoding, and as part of
                    the template icon and then clicking     the encoding section
                    on the floating drop-down that        • Feature options in a separate
                    appears                                 floating palette

  28 January 2010                       Microsoft                                               Slide 57

5.3 Design exploration
                                     Design feature:
                                     If there is a default template
                                     associated with a term, once the
                                     term has been selected, the
                                     template automatically appears

                                     Design feature:
                                     The user then has the option to
                                     „opt-out‟ of the template by
                                     ignoring it and moving to the
                                     next field

  28 January 2010        Microsoft                                      Slide 58

5.4 Next steps

 Immediate next steps:
 •      Explore if and how contextual filters should be displayed and manipulated
 •      Further define the circumstances under which default templates may be triggered
 •      Validate, through user testing, the designs where the options are accessed in the main
        noting area

 Future exploration:
 •      Explore whether decision support can be „pushed‟ here alongside the template
        options:
          •    For example, in the right-hand panel

          •    However, decision support should be considered in a wider focus; and not just in relation to
               admission clerking

 •      Explore work-flow triggers, namely template suggestions that are independent of any
        user action (for example, triggered by Quality Outcome Framework criteria)
 •      Generalise design findings and/or guidance to other templates (such as discharge
        forms)

     28 January 2010                                  Microsoft                                        Slide 59

     THEME 6 – FREE TEXT TRIGGER

28 January 2010    Microsoft       Slide 60

6.1 Introduction to Free Text Trigger
Although there will be occasions where the clinician actively searches for individual SNOMED CT terms,
often the quickest and most appropriate entry format will be free text. In these instances, there is a risk that
the clinician enters data which would be better recorded as structured data (for example, via a form) than as
free text.
Therefore, the designs in this theme show how the UI can:
• Offer templates based upon terms it matches in the free text
• Allow the clinician to choose between and open these templates

                                 Illustration of visually tagging a term for which related templates have been found

The designs assume that the terms which the UI matches are SNOMED CT terms (before identifying which
templates are associated with those terms). However, they stop short of showing how this feature may
integrate with full SNOMED CT text parsing and the emphasis is upon offering templates rather than
encoding terms within the text.

   28 January 2010                                  Microsoft                                             Slide 61

6.2 Design summary
 Design point                                        Rationale key points
 The UI allows the user to trigger templates         The clinician’s inclination is to write in free-text, as it is often
                                                     intuitive and quick. However, organisation and retrieval of the
 from free text                                      patient record benefits from the entry of structured data.
                                                     Triggering templates from free-text encourages structured
 The UI proactively offers certain template          entry while allowing an intuitive data entry style (CF)
 matches from within free text                       Risk that clinician enters all data in free text. Important
                                                     measurement values could be missed in later retrieval (PSA)

                                                     Clicking on or highlighting a word was not sufficiently
                                                     'discoverable' for some users (UR)

 Template options are displayed in the right-        In order to be noticed, the templates options need to be
                                                     displayed (semi) permanently. However, there is a risk of visual
 hand panel                                          overload if the template options were to be permanently
                                                     displayed in the noting area (UX)

                                                     Clinicians appreciated the template options being displayed in
                                                     the right-hand panel (UR)

 The UI also provides access by tags (icons          Clinicians agreed that a proactive free text template trigger
                                                     could work by marking up text the UI has matched against
 overlaid on top of text)                            SNOMED CT terms with associated templates as well as by
                                                     displaying template options in the right-hand panel in the same
                                                     way as the Single Concept Matching feature (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                Microsoft                                                         Slide 62

6.2 Design summary

 Design point                                          Rationale key points
 Free text triggering is markedly distinct from        Clinicians were confused by previous designs where the free
                                                       text trigger feature performed the same function as the section
 the section search                                    search (UR)

 The floating drop-down control appears on             This mechanism has several precedents in existing software
                                                       and so should be familiar to clinicians (EP)
 focus and reveals template options
 Text tags demarcate the whole of the relevant         There is a risk that the clinician thinks that the tag is associated
                                                       with a different term if the whole phrase is not clearly tagged
 matched phrase                                        (for example, ‘pressure’ rather than the full phrase ‘blood
                                                       pressure’) (CF)

 Text tags do not comprise an underline                Underlines are too prevalent (with other meanings) in existing
                                                       software. Also, previous Microsoft Health CUI research has
                                                       shown that they make the text too prominent (EP) (CUI)

 Visual tagging clinical terms in the text is
 sufficiently muted                                    Risk that the template options are too overwhelming and they
                                                       distract from the primary noting task or the clinician ends up
                                                       ignoring them (PSA)
 There is an option to switch off the free text
 template trigger mode

 Key to abbreviations (slide 14)

 28 January 2010                                  Microsoft                                                        Slide 63

6.2 Design summary

 Design point                                           Rationale key points
 The UI matches terms without requiring active          The approach cannot rely on the user encoding a term before
                                                        the UI offers a template (if it is important for the user to use
 encoding                                               the template) (CF)

 Matching is driven by a specific subset (for           An unlimited text search would match templates against most
                                                        words in the narrative. Only constrained matching against
 example, of SNOMED CT terms) which is                  specific terms, such as measurement concepts, will be useful
 determined by the context                              (CF)

 The following template access and data entry,          There are some clinical phrases which can be easily inserted
                                                        back into free text and some which cannot (for example,
 one of two conditions apply:                           measurement values can be easily inserted back into the free
 •   Original free text remains                         text) (CF)
 •   Text is replaced by the template values

 The search algorithm is sufficiently ‘fuzzy’ in        In usability tests, clinicians were unable to invoke a template
                                                        because they were using slightly different words (such as
 order to find words and phrases that almost            ‘smokes’ instead of ‘smoking’. This could be managed by
 match the search text                                  introducing some ‘fuzziness’ to the search algorithm (UR)

 Key to abbreviations (slide 14)

 28 January 2010                                   Microsoft                                                      Slide 64

6.3 Design exploration

                                                Design feature:
Design feature:
                                                Templates related to terms
The matched terms are visually
                                                matched in the free text appear
tagged in the narrative text
                                                in this panel in the same way as
                                                the „single concept matching‟
                                                trigger feature
Alternatives:
• Other visual tagging styles are
  being considered                              Alternatives:
                                                • Clinician must explicitly
                                                  encode terms in the text prior
                                                  to templates being offered
                                                • Offers templates in a left-hand
                                                  panel

      28 January 2010               Microsoft                      Slide 65

6.3 Design exploration

Design feature:                                                         Alternatives:
In addition to selecting from the right-hand panel, the clinician can   • Offers options in a floating „mini-menu‟
also mouse-over or move focus to the text and click on the              • Offers options in a menu activated by a right-hand click action
resulting drop-down to reveal template options                          • Offers options in a modal dialog box
                                                                        • Formats the options in the same way as the search feature
                                                                        • Provides an input field in which the clinician can change the text

       28 January 2010                                                  Microsoft                                                              Slide 66

6.4 Next steps

 Immediate next steps:
 •      Test and refine the design with an interactive prototype
 •      Comparatively test alternative visual tags
 •      Investigate the extent to which fuzzy matching should be implemented
 •      Investigate how to link the template data with the original matched term. Should there
        be a visual indication that remains with the original term?

 Future exploration:

 •      Investigate ways in which a value entered into the template can replace or
        complement the original term within the free text
 •      Explore the further knowledge and decision support implications of this feature. How
        could this integrate with other support systems?
 •      Explore how the templates may be applied, but without the use of a form. For
        example, how the UI may recognise values in free text, where the parsing is
        constrained by a template (and the subsets and relationships implied by it)
     28 January 2010                           Microsoft                                  Slide 67

     THEME 7 – BROWSING

28 January 2010   Microsoft   Slide 68

7.1 Introduction to Browsing
In addition to showing how the clinician can search for sections within the acute medical admission form, the
designs also illustrate another familiar way of navigating data structure, namely browsing.

The clinician may use a „tree‟ to find and open the section they require. The advantage given by browsing
rather than searching is that the clinician can see the structure available, which may be particularly useful for
clinicians who are unfamiliar with the precise structure of the template. The disadvantage is that it may
require more actions to browse rather than search, and browsing may be best done with a mouse whereas a
lot of the noting may be done via a keyboard. This may make the
search a more attractive option in places, especially for clinicians
who are more familiar with the structure and know exactly what
they want.

This design consultation assumes that a mixed economy of
browse and search is the most accommodating solution which
can deal with varying levels of experience and different types of
noting needs.

The clinician may browse up and down the tree, and open
sections by clicking on them.

                                                                              Illustration of a browse feature
   28 January 2010                                  Microsoft                                            Slide 69

7.2 Design summary

 Design point                                                     Rationale key points
 A browsing feature is provided in addition to                    Browse is a function which clinicians expect and, for first-time
                                                                  users at least, the browse is a more popular feature than
 search features:                                                 search (UR)
 •   This allows the user to browse the structure of the Acute
     Medical Admission form and open subsections from within it

 The browsing feature is opened by default                        The browsing feature can communicate the structure of the
                                                                  template in an economical way, while providing access to
                                                                  sections (UX)

                                                                  Allowing users to enter data in fragments, rather than as a
                                                                  coherent whole template, may mean the clinician loses sight
                                                                  of where they are in the process. The browsing feature can
                                                                  provide context to the noting (PSA)

                                                                  Clinicians like the idea of the browsing feature being open by
                                                                  default, as long as they can hide it (UR)

 The browsing feature can be hidden and then                      There is a risk that the clinician is distracted from their
                                                                  primary noting task by the template options (PSA)
 subsequently revealed
                                                                  Therefore, they need the ability to hide the browsing feature
                                                                  from view (UX)

 Key to abbreviations (slide 14)

 28 January 2010                                          Microsoft                                                             Slide 70

7.3 Design exploration

                                                          Design feature:
                                                          The clinician may choose to hide
                                                          the browse tree.

                                                          Design feature:
                                                          The browsing tree is displayed by
                                                          default

                    Alternatives:                         Design feature:
                    • Opens all the sections by default   The default view is just the top-
                    • Automatically opens up relevant     level sections
                      sections within the tree when the
                      clinician adds a section via the
                      search feature

                                                          Design feature:
                                                          The clinician may select sections
                                                          to open via the browse tree

                    Alternatives:                          Design feature:
                    • Displays in a left-hand panel        The browsing tree is displayed in
                    • Features the browsing feature as     the right-hand panel
                      part of a search feature
                    • Links the section search feature
                      with the browse feature so that
                      the user can navigate between        Design feature:
                      data within them                     Provide a feature to open the full
                                                           form in a single action

  28 January 2010                                    Microsoft                                  Slide 71

7.4 Next steps
 Next steps:
 •      Further understand the possible interaction between the search and browse features
 •      Test the browse feature alongside the search features in an interactive prototype.
        Refine the designs where appropriate
 •      Explore how some sections could be further nested in order to make the browsing
        experience clearer. For example, nest all the sections with the prefix „Observations
        and Findings‟ into a single item of the same name and remove the prefix from all the
        remaining labels

 Future exploration:
 •      Explore how the browse feature could be used to indicate which sections the clinician
        has addressed (that is, opened and possibly entered information into) and which
        remain closed. This gives the clinician a quick overview of what is left to do

     28 January 2010                           Microsoft                                     Slide 72

     THEME 8 – REVISITING AND
     ADDING TEMPLATES

28 January 2010   Microsoft     Slide 73

8.1 Introduction to Revisiting and Adding Templates
As the clinician progresses through the notes, there may be times where they need to revisit sections that
they have already opened. In those cases, they could scroll back up the form to revisit them. However, in this
theme, the designs show how the UI may assist the clinician to access previously opened sections by using
the search or browse functions.
The designs show how the UI will open a new instance of the section, while pre-populating it with the
previous data, so the clinician does not need to look for the previous instance.

                                                Illustration of mitigation for revisiting a section (‘Family History’)

   28 January 2010                                 Microsoft                                                Slide 74

8.1 Introduction to Revisiting and Adding Templates
In other instances, the clinician may wish not to revisit existing sections or subsections but to add a new
instance.

For example, the clinician may wish to add a new „Blood pressure‟ subsection in order to add a new reading
not to edit the blood pressure they entered earlier in the clerking.

Therefore, the design will show how the clinician can add further instances of a data type, where this is
permitted (such as for examination measurement values).

                                                                             Illustration of adding further fields

   28 January 2010                                  Microsoft                                             Slide 75

8.2 Design summary

  Design point                                         Rationale key points
  The search returns section options even when         Given the flexible approach to section entry, there is a risk that
                                                       the clinician will try to open a template that is already open. In
  there is already an instance open within the         such a case, the UI could do nothing and leave it up to the user
  form                                                 to go back and find the opened template. A more helpful
                                                       approach is to open the template at the current point in the
                                                       template, but mitigate the risks associated with a duplication
                                                       (UX)

  The UI does not open multiple instances of the       Allowing duplication raises the risk of contradiction between
                                                       different data. Having the data in separate places reduces
  same section                                         ability to compare (PSA)

  Upon opening a duplicate section, the UI will        Clinicians preferred the approach where data is pulled into a
                                                       newly duplicated template rather than being forced back up to
  pre-populate it with the existing data (from         the location of the original instance (PSA)
  within the form) and will simultaneously
  remove the original instance of the template

 Key to abbreviations (slide 14)

  28 January 2010                                 Microsoft                                                      Slide 76

8.2 Design summary
  Design point                                                   Rationale key points
  There is a feature for adding multiple instances               There will be occasions where the clinician will need to enter
                                                                 multiple instances of the same data type (CF)
  of the same template (for example, a set of
  data fields):
  •   For example, for ordinal/numerical measurement data

  Duplicate fields are displayed adjacent to each
  other
  The ‘add another’ control is located in a                      It is useful for the clinician to be able to see previous
                                                                 measurement values when entering the current value (PSA)
  prominent position, adjacent to the most
  recent instance
  Each set of duplicate fields are uniquely                      Clinicians indicated that they preferred designs where the fields
                                                                 are uniquely labelled (UR)
  labelled
  Each set of duplicate fields are labelled with                 Clinicians preferred labels which indicated the time of entry (or
                                                                 the time of measurement) (UR)
  the time of entry/measurement
  The UI may automatically open a set of new                     If a clinician chooses to open a previously opened section,
                                                                 which contains populated measurement fields, it is assumed
  fields upon revisiting a section with the                      that the clinician requires fresh fields to enter future values
  search/browse feature                                          (UX)

 Key to abbreviations (slide 14)
  28 January 2010                                           Microsoft                                                       Slide 77

8.2 Design summary

 Design point                                Rationale key points
 The UI warns if statements have been        This would help to prevent duplication of actual data (CF)
 duplicated

 Key to abbreviations (slide 14)

 28 January 2010                        Microsoft                                                    Slide 78

8.3 Design exploration

                              Design feature:
                              Through the search (or the
                              browse), the clinician may search
                              for and open sections that have
                              already been added

                              Alternatives:
                              • Does not display sections which
                                are already opened
                              • Warns the clinician in the search
                                results that the section is already
                                opened

  28 January 2010        Microsoft                                    Slide 79

8.3 Design exploration

                                                                                                                     Design feature:
                                                                                                                     Provide a warning message to
                                                                                                                     explain what has happened

Design feature:                                                                        Alternatives:
The UI opens the section and populates it with any data that the clinician has         • Provides a link to jump the user back up to the previous instance
entered in the previous instance. Meanwhile, the UI closes the previous instance         of the section.
of the section                                                                         • Automatically jumps the focus back up to the previous instance
This also applies even if the duplicate section is only a subsection of the previous     of the section.
instance or vice versa. If the clinician had previously opened a blood pressure        • Duplicates the sections
section, and then chose to open a vital signs section, the UI would move the           • Provides a hover which displays some or all of the previously
blood pressure data down to the vital signs section and close the previous blood         entered data
pressure section

      28 January 2010                                                      Microsoft                                                         Slide 80

8.3 Design exploration

                                     Design feature:
                                     If the section contains certain
                                     examination measurement data, the
                                     UI also automatically opens a fresh
                                     set of fields, where appropriate

                                     Alternatives:
                                     • Does not automatically open a fresh
                                       set of fields; the clinician must click
                                       on an „Add another‟ button to open
                                       fresh fields

  28 January 2010        Microsoft                                               Slide 81

8.3 Design exploration
                                                                Alternatives:
                                                                • Labels the duplicate fields by the
                                                                  order in which they have been
                                                                  added (for example “first”,          Design feature:
                                                                  “second”…etc)                        Ensures that the duplicated fields
                                                                • Doesn‟t distinguish by label; only   are distinguished by labelling (by
                                                                  by order                             time/date)

                    Design feature:
                    Provides an „Add another‟ button
                    to enable the clinician to duplicate
                    certain categories of field (such as   Alternatives:
                    for examination measurement            • Displays at the top of the section
                    data)                                  • Provides a drop-down at the top
                                                             of each section from which the
                                                             clinician can select further
                                                             instances of whichever fields they
                                                             want (if allowed)

  28 January 2010                                             Microsoft                                                          Slide 82

8.4 Next steps
 Next steps:
 •      Test the design in an interactive prototype. Refine the design where appropriate
 •      Further define where fields can be duplicated (that is, so the clinician can enter
        multiple instances of the same value type). Currently the designs assume that certain
        numerical examination measurement values can be duplicated (such as vital signs
        data). However, there may be other types of data that can be duplicated
 •      Explore in more detail how sections may be revisited via the browsing feature, and
        whether any further UI will be required

  Future exploration:
  •      Explore ways in which the UI may alert clinicians that they are entering duplicate
         statements (that is, statements they have entered into the form earlier)

     28 January 2010                           Microsoft                                      Slide 83

     THEME 9 – REORDERING

28 January 2010   Microsoft   Slide 84

9.1 Introduction to Reordering
It is assumed that sections are arranged according to the order in which they were added, but this may make
it difficult for clinicians to assess what they have done and what is missing. It would be simpler to scan
through the sections in a standard order as, this way, it becomes more apparent what is missing (as missing
sections would stand out against the familiar pattern).
Therefore, the designs in this theme show how the UI can:
• Show how clinicians can reorder the sections within the form according to a standard sequence, so that
  they can better review the completeness of their note
• Show how clinicians may rearrange the sections back to the order in which they were added

                     Illustration of reordering the data according to a standard sequence

   28 January 2010                                       Microsoft                                Slide 85

9.2 Design summary

 Design point                                          Rationale key points
 By default, sections are arranged in the order in     Users will expect the sections to build up sequentially as they
                                                       access them (UX)
 which the user has added them
 During input, a control is provided to reorder        The clinician needs to be able to view the data according to a
                                                       standard order, partly in order to check that they had
 the template sections according to the                completed all that they need to (CP)
 standard RCP headings order
                                                       Clinicians believed it would be useful for the UI to be able to
                                                       reorder the templates to a standard (RCP) order (UR)

 The ‘reordering’ control does not automatically       The order in which a clinician has entered items into a list may
                                                       be intentionally out of (chronological) order. For example, they
 reorder lists within sections (for example, by        may wish to give emphasis to certain items in the list (CF)
 chronology)
 During input, a control is provided to reorder        There is a risk that the user chooses to automatically reorder
                                                       the form (according to a standard) and then wants to change it
 the template sections back to the order in            back, but cannot (PSA).
 which they were added by the user
                                                       The record needs to retain a history of the order in which the
                                                       user added and completed the sections (CF)

 Key to abbreviations (slide 14)

 28 January 2010                                  Microsoft                                                      Slide 86

9.3 Design exploration

                                                       Design feature:
                                                       By default, the UI leaves the
                                                       sections arranged in the order in
                                                       which the clinician has added (or
                                                       arranged) them

                                                       Alternatives:
                                                       • Automatically arranges sections
                                                         according to a standard order as
                                                         the clinician adds them

                    Design feature:
                    A control is provided to changed
                    the order to a standard order

  28 January 2010                      Microsoft                                            Slide 87

9.3 Design exploration

                                Design feature:
                                Clicking the control changes the
                                order of the sections to the
                                standard order

                                 Design feature:
                                 The UI does not reorder items
                                 within lists contained within the
                                 sections (such as Past Medical
                                 History)

                                 Design feature:
                                 The UI also offers control to
                                 reorder back to the order in which
                                 the clinician added the sections to
                                 the noting area

  28 January 2010        Microsoft                                     Slide 88

9.4 Next steps

 Immediate next steps:
 •     Design, test and refine a control for reordering the form. Address the type of control,
       where it may be offered and how it should be labelled
 •     Consider the implications of allowing the clinician to manually reorder the sections
 •     Create a design feature to allow the clinician to manually reorder the sections

 Future exploration:
 •      Explore whether to present the clinician with a reordered view before saving and
        closing the form. Would this be a redundant step?

     28 January 2010                           Microsoft                                      Slide 89

Areas/questions for further work and study

 The previous sections have outlined next steps and further areas of exploration. To
 summarise the immediate next steps:

 •    Test and refine the existing designs
 •    Answer any relevant design questions that remain open
 •    Translate the design features into CUI guidance
 •    Refine and prioritise the future areas of design exploration

  28 January 2010                               Microsoft                          Slide 90

Areas/questions for further work and study
 Additionally, there are some general themes which have not been discussed, but which
 would be important to address:

 •      Providing a special preview feature in order to help the clinician scan through the salient points
        of their notes. The format may be more condensed than the entry view (which contains
        additional screen furniture, such as drop-down mechanisms and empty fields)
 •      Exploring the end-to-end passage of data from admission to discharge, including possible
        viewing and querying of the data
 •      Exploring how to ‘cite’ previous data in the current notes
 •      Further exploring whether and how clinicians can hide or close template sections that they have
        added to a form. Our research into this topic proved inconclusive, with clinicians failing to
        understand why they would want to perform this action. We would want to conclude whether
        such actions should be disallowed

     28 January 2010                               Microsoft                                       Slide 91
