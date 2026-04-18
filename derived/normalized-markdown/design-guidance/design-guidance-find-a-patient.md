# Design Guidance -- Find a Patient

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Find a Patient.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-find-a-patient.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
     Find a Patient

     Thursday, 5 July 2007
           Version 1.0.0.0

               Prepared by

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual
Property Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently
exercise their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this
Content. Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2007. All rights reserved.

                                    Design Guidance – Find a Patient
                                    Prepared by Microsoft, Version 1.0.0.0
                                    Last modified on 5 July 2007

TABLE OF CONTENTS
1    Introduction .................................................................................................................................... 1
    1.1    Overview ................................................................................................................................... 1
    1.2    Area of Focus Description ........................................................................................................ 1
     1.2.1      Out of Scope Areas ............................................................................................................. 2

2    Recommendation and Guidance .................................................................................................. 3
    2.1    The Application Context of Patient Search ............................................................................... 3
     2.1.1      Overall Search Workflow ..................................................................................................... 4
     2.1.2      Information Governance Considerations ............................................................................ 6
    2.2    How to Elicit Search Criteria ..................................................................................................... 6
     2.2.1      Search Input Forms ............................................................................................................. 6
     2.2.2      Using a Single Search Input Box ...................................................................................... 11
     2.2.3      Managing Common Search Terms ................................................................................... 13
     2.2.4      Confidence Level............................................................................................................... 14
     2.2.5      Benefits and Rationale ...................................................................................................... 15
    2.3    How to Incorporate Information Governance Rules ............................................................... 15
     2.3.1      Viewing an Auditable List .................................................................................................. 15
     2.3.2      Too Many Matching Records ............................................................................................ 17
     2.3.3      Confidence Level............................................................................................................... 17
     2.3.4      Benefits and Rationale ...................................................................................................... 18
    2.4    How to Present Search Results .............................................................................................. 18
     2.4.1      One or More Results Found .............................................................................................. 18
     2.4.2      Zero Results Found ........................................................................................................... 20
     2.4.3      Confidence Level............................................................................................................... 20
     2.4.4      Benefits and Rationale ...................................................................................................... 21

3    Document Information ................................................................................................................ 22
    3.1    Terms and Abbreviations ........................................................................................................ 22
    3.2    Nomenclature ......................................................................................................................... 22
     3.2.1      Body Text .......................................................................................................................... 22
     3.2.2      Cross References.............................................................................................................. 22
    3.3    References ............................................................................................................................. 23

                                 Design Guidance – Find a Patient
                                 Prepared by Microsoft, Version 1.0.0.0
                                 Last modified on 5 July 2007

1         INTRODUCTION
    This document describes the entry in the Design Guidance for Find a Patient. It describes the area
    of focus, provides guidance and recommendations, and explains the rationale behind these.
    Prior to reading this guidance, please ensure you have read the following documents:
        Design Guidance – Patient Banner {R1}
        Design Guidance – Date and Time Input {R2}
        Design Guidance – Date Display {R3}
        Design Guidance – Gender and Sex Display {R4}
        Design Guidance – Patient Identification Number Display {R5}
        Design Guidance – Address Information Display {R6}

1.1       Overview
    This document is intended for the use of anyone whose role includes screen design,
    implementation, or assessment of a clinical application. This document can therefore be used as
    guidance for the specification of a patient search user interface, the implementation of patient
    search within an application, and the assessment of a clinical application’s user interface within the
    constraints noted.

1.2       Area of Focus Description
    Patient search is a crucial but often neglected part of the user experience of clinical applications.
    As the number of health records that are stored centrally in national databases increases, the need
    for reliable, robust and usable national patient search functionality grows more apparent. However,
    whilst much attention is devoted to the contentious issues of confidentiality and security, relatively
    little is devoted to the issue of designing an effective search user experience.
    Moreover, current approaches to the search user experience of national patient databases are
    based largely around the need to accommodate strict rules of information governance (IG), which
    place considerable constraints on the design to the point that user interaction becomes more
    ‘system-led’ than user-centred. Taken to an extreme, this could lead to a system that is
    demonstrably secure and robust, but characterised by a search user experience that is time-
    consuming, ineffective, and prone to error and frustration.
    This document is concerned with the issues involved in designing an effective user experience for
    generic patient search applications but focuses most of its practical examples and illustrations on
    the dynamics of searching national patient databases. It provides guidance and recommendations
    that aim to:
        Facilitate rapid and effective searching of patient records
        Reduce the likelihood of failed or erroneous searches
        Support relevant information governance rules and policies within a usable and clear
         workflow
        Facilitate consistency with the design of other interface components (such as Patient
         Banner)
    The scope of this document is focused on the requirements of national patient search applications
    which use national patient databases. The approach taken is to identify higher level principles that
    should apply across a broader range of scenarios and use cases. In addition, this document also
    aims to explore specific design issues such as:

                                                                                                      Page 1
                         Design Guidance – Find a Patient
                         Prepared by Microsoft, Version 1.0.0.0
                         Last modified on 5 July 2007

     The use of a single input box for eliciting search criteria
     The visual design of query refinement forms and search results pages
     Repair strategies for failed searches

1.2.1       Out of Scope Areas
 It should be noted that searching nationally-held patient records is just one of a number of possible
 use cases for patient search. Other important use cases could include:
     Searching patient records that are local to a particular organisation, facility or individual, for
      example:
            “patients awaiting care/treatment”
            “patients who we admitted recently”
            “patients under the care of Dr Smith”
            “patients who had a procedure/treatment between the dates of X and Y”
     Query-building functionality, such as that used by some General Practitioners (GPs), for
      example “find me all the patients who we treated in the last year who are diabetic and who
      did not have a medication review in the last 6 months”
     Integration of a local patient record with its national counterpart. This could occur, for
      example, when a patient has had a treatment or medication which was not given by their
      local GP practice – the GP then needs to search the national record for the relevant detail,
      and then update the local record accordingly (or vice versa)
 However, these use cases go beyond the scope of this Deliverable and the user research
 conducted to inform it. There will be different IG and design criteria in each of these cases which
 cannot be included explicitly in this document, although some of the design principles may be
 applied to these situations. Since the requirements for such use cases are yet to be defined, any
 designs attempting to cover these scenarios would be speculative.

                                                                                                    Page 2
                      Design Guidance – Find a Patient
                      Prepared by Microsoft, Version 1.0.0.0
                      Last modified on 5 July 2007

2         RECOMMENDATION AND GUIDANCE
    The guidance provided throughout this document is derived from a combination of best practice
    guidelines, heuristics and user research aimed primarily at the area of patient identification,
    including the following patient search issues:
        Users’ preferred criteria for patient search
        The context in which patient search is typically performed
    The images used in this document are illustrative examples of the guidance.

2.1       The Application Context of Patient Search
    The primary requirement addressed by this guidance is to provide an effective and usable patient
    search user experience. Part of this challenge is to design an appropriate workflow for the search
    process, that is, to define the content of each dialog box (or screen) and determine how the various
    screens interrelate within the context of the user’s overall task. In the case of national patient
    databases, the context of such tasks could be:
        Commencement of patient encounter – for example, a GP or clinician uses the national
         patient database to retrieve a patient’s details ahead of a pre-booked GP or out-patient
         appointment
        Communication with a patient – for example, a GP uses the national patient database to
         confirm a patient’s correct contact details before contacting the patient
        Start and end of an in-patient treatment – for example, when a patient is admitted to an
         Accident and Emergency (A&E) department, a doctor uses the national patient database to
         identify the patient and access their core medical information
        Scheduling an event – for example, a GP uses the national patient database to verify a
         patient’s address to confirm a booked radiology appointment for that patient
    In addition, the task context will need to include both regular usage by administrative staff and
    occasional usage by non-specialist staff, and as such the guidance needs to support both the
    novice and experienced user.
    An equally important aspect is to determine exactly how the search user experience will operate
    within the context of an overall clinical application. For example, some search functions could be
    discrete applications designed to operate within their own dedicated window. However, others may
    need to be incorporated within a broader clinical application, and in such cases some thought
    needs to be given to exactly how the search function will integrate with the overall application
    framework.
    Figure 1 (below) illustrates an example, taken from the UK National Health Service (NHS), showing
    a prototypical ‘home’ screen for the user of a clinical application which provides access to a range
    of tools and information. The first question to address is: where, within this framework, is the
    appropriate place from which to invoke patient search? The options could include:
        A dedicated patient search box (for example, located in the top right hand corner of the
         application)
        A context sensitive right click menu (associated with an appropriate screen component)
        A toolbar or other application utility

                                                                                                        Page 3
                         Design Guidance – Find a Patient
                         Prepared by Microsoft, Version 1.0.0.0
                         Last modified on 5 July 2007

 In addition, patient search could also be triggered via a dedicated application, for instance, via the
 desktop. Each of these has its own merits and demerits depending of the context of the user and
 the task they are trying to achieve. This document treats them all as potential entry points into the
 search user experience, but entry points are outside the scope of the guidance and
 recommendations of this document.

 Figure 1: Example of a Clinical Application with Patient Search Functionality

2.1.1         Overall Search Workflow
 As indicated above, a key issue in the design of an effective search user experience is the
 dynamics of the search process itself. The principle should be to create a workflow that is logical,
 coherent, and intuitive. However, in practice, that workflow is inevitably closely tied to a particular
 user’s task context and the characteristics of the database being searched. For example, Figure 2
 shows the workflow involved in searching patient records held at a national level in the NHS
 Clinical Spine Application (CSA). As can be seen, there are a number of steps in the workflow that
 are essentially generic (such as ‘Simple search’ and ‘Search results’), but many steps are specific
 to CSA itself (such as the ‘Audit message’ and the various steps required to ensure that the certain
 CSA-specific search criteria have been entered).
 This process flow is derived from analyses of documentation and discussion with clinical staff. Note
 that in principle the dialog boxes could be implemented in a variety of ways (such as Web pages or
 forms) – what matters are the design principles governing their content and behaviour, rather than
 their precise implementation. For simplicity, the designs shown in this document represent a typical
 Web application implementation.

                                                                                                    Page 4
                                 Design Guidance – Find a Patient
                                 Prepared by Microsoft, Version 1.0.0.0
                                 Last modified on 5 July 2007

Figure 2: Example of an Overall Search Workflow

                                                                        Page 5
                              Design Guidance – Find a Patient
                              Prepared by Microsoft, Version 1.0.0.0
                              Last modified on 5 July 2007

2.1.2        Information Governance Considerations
 The process of finding a particular patient record will sometimes involve the need to browse among
 a set of candidate entries in a search results list. In this respect, granting access to patient search
 functionality can lead to the disclosure of patients’ personal details, along with other data which
 may be confidential or even safety critical. Consequently, it is vital that the search process takes
 into account relevant governance rules and technical constraints. In the example shown in Figure
 2, these rules are quite fundamental in shaping the workflow:
       If more than N matching records are found, an error message is displayed and the user
        must refine their search
       If 2–N matching records are found, the user is asked to refine their search or view the
        search results list, which would be audited
       If a single matching record is found, the search results page is displayed without further
        delay
 N is currently assigned a value of 50 in the national patient database.
 Separating these factors to identify precisely those areas in which to provide generic guidance is a
 complex issue. Consequently, the approach taken by this document is to focus where possible on
 the higher level principles that should apply to a range of clinical contexts and use cases. It is
 expected that IG rules such as those above will evolve over time.

2.2     How to Elicit Search Criteria
2.2.1        Search Input Forms
 This section shows examples of how to elicit the data required in searching a patient database.
 Figure 3, Figure 4, Figure 5, Figure 6 and Figure 7 show examples, taken from the UK National
 Health Service, of how a basic search form should behave in various stages of completion. Figure
 8 shows an advanced search which supports a wider range of input, such as date ranges for date
 of birth and date of death, and GP details. Figure 9 shows how to indicate that lookup of the
 database is currently in progress.
 Evidently, the data required by any given search form will be dependent on the particular search
 application and the database being searched. The example search form consists of three
 mandatory fields (gender, family name and date of birth) and two optional fields (given name and
 postcode). There are a number of reasons why postcode is favoured over more general address
 details:
       Address data in the database may not be fully normalised (that is, regularised into pre-set
        fields, such as ‘street’, ‘town’ and ‘county’), thus compromising the effectiveness of any
        matching algorithm based on such data
       The postcode can be entered into a single text entry box, requiring less screen space
       If the postcode is not known to the user, they can invoke a ‘postcode finder’ which performs
        a postcode lookup based on (partial) address data
      Note
      A patient identification number should ideally be corroborated by one or two other data items as a cross-
      check, unless obtained directly from a validated source such as a letter to the patient. This is to mitigate
      the risk of making a mistake when entering the number and to therefore unknowingly view the wrong
      patient details.

                                                                                                              Page 6
                         Design Guidance – Find a Patient
                         Prepared by Microsoft, Version 1.0.0.0
                         Last modified on 5 July 2007

Despite these constraints, there are other principles behind the design of the form, such as the use
of watermarks (see ‘Family name’ field in Figure 3), and the separation of mandatory and optional
fields that are more generic. These and a number of other guidelines are outlined after Figure 3
through to Figure 9.

Figure 3: Example of a Basic Search Form

Figure 4: Example of a Basic Search Form Showing Date Input Control

                                                                                                Page 7
                              Design Guidance – Find a Patient
                              Prepared by Microsoft, Version 1.0.0.0
                              Last modified on 5 July 2007

Figure 5: Example of a Basic Search Form Showing Postcode Finder

Figure 6: Example of a Basic Search Form Showing Postcode Finder Results

                                                                            Page 8
                             Design Guidance – Find a Patient
                             Prepared by Microsoft, Version 1.0.0.0
                             Last modified on 5 July 2007

Figure 7: Example of a Populated Basic Search Form

Figure 8: Example of an Advanced Search Form

                                                                       Page 9
                             Design Guidance – Find a Patient
                             Prepared by Microsoft, Version 1.0.0.0
                             Last modified on 5 July 2007

  Figure 9: Example of an Interstitial Page

2.2.1.1            Guidance
        Users should be offered a choice of basic or advanced search
                  The basic search form should usually be presented by default
        The Date Input control should be used for input of dates, to allow either entry of date by free
         text or selection using the calendar control
        A title for the task that the user is performing should be displayed (such as ‘Find a Patient’),
         along with prompts on what to enter (such as ‘You must enter all of this patient information’)
        The search button should not be enabled until mandatory data values have been entered
                  The search button should have an appropriate textual label, for example ‘Search’ or
                   ‘Find’
        If the database lookup is expected to exceed a certain length of time, an interstitial page
         showing progress should be displayed (see Figure 9)
                  The interstitial page should display the values entered by the user. Any mandatory data
                   values should be differentiated visually (for example, by use of a bold font)
                  The user should be able to cancel the search at anytime and be returned to the original
                   search page, with values pre-populated
        The form should allow the user to search using patient identification number
                  The patient identification number area should be visually distinct from the rest of the
                   form, and the Find button should become enabled only upon completion of the patient
                   identification number field
                  A patient identification number should ideally be corroborated by one or two other data
                   items as a cross-check, unless obtained directly from a validated source, such as a
                   letter to the patient

                                                                                                      Page 10
                                  Design Guidance – Find a Patient
                                  Prepared by Microsoft, Version 1.0.0.0
                                  Last modified on 5 July 2007

     The form should be divided both visually and logically into related groups of data (for
      example, mandatory versus non-mandatory data). These areas should be delimited by
      suitable separators and each group of data should have an associated caption
     Form controls should use watermarks to provide guidance on data entry (see ‘Family name’
      field in Figure 3)
     Advanced search forms (see Figure 8) should support options such as:
            ‘Sounds like’ name matching
            Inclusion of deceased patients
            Inclusion of previous names or aliases
            Inclusion of common misspellings of names
            Inclusion of superseded patient details
            Filtering of results by patients with whom the user has a legitimate relationship

2.2.2       Using a Single Search Input Box
 Most approaches to search user interface (UI) design involve the use of a conventional form in
 which individual input fields are provided for each of the various parameters. This has the benefit of
 familiarity, and the use of regularised form fields can aid the accuracy of the retrieval process.
 However, this is not the only approach to search UI design.
 An alternative is to use a single search input box which is configured to accept any of the required
 parameters in any order. In this approach, instead of forcing the user to decide which data should
 go in which field, it is the responsibility of the system to classify each parameter and deal with it
 accordingly. This might sound ambitious, but it is not without precedent: EMIS, InPractice and
 FrontDesk all use a single field search.
 One key advantage of this approach is of course that the search input box occupies very little
 screen space, and may thus be part of the global navigation, located (for example) in the top right
 hand corner of the parent application (as shown in Figure 1). The user could then enter their query
 as a combination of any of the accepted parameters, such as family name, given name, gender,
 date of birth, patient identification number, postcode, and so on. In this respect, it allows expert
 users to use fewer keystrokes and more flexible search strategies – an advantage that is
 particularly significant for administration and back-office staff who may have to use such systems
 on a regular basis. Once the user has entered such a query, the search results could then appear
 as a table overlaying the parent application, as shown in Figure 10.
 One disadvantage with this approach is that the process by which the parameters are classified
 can never be totally accurate. Consequently, it would be beneficial to present to the user some
 progressive indication of the activity of the system as the query is being entered. This would serve
 the additional purpose of helping the user repair any wrongly recognised input. An example of this
 is illustrated (somewhat magnified) in Figure 11, in which the current interpretation of the input
 entered thus far is displayed in a drop-down panel.

                                                                                                  Page 11
                      Design Guidance – Find a Patient
                      Prepared by Microsoft, Version 1.0.0.0
                      Last modified on 5 July 2007

Figure 10: Example of a Single Search Input Box with Results List

Figure 11: Example of a Single Search Input Box with Progressive Display

                                                                           Page 12
                               Design Guidance – Find a Patient
                               Prepared by Microsoft, Version 1.0.0.0
                               Last modified on 5 July 2007

2.2.2.1           Guidance
  A single search input box should be used when:
        The task is performed by expert users who have keyboards
        Users require more flexible search strategies that allow them to minimise keystrokes
        Screen space is limited
        The search parameters may need to be varied (without requiring redesign of the form UI)

2.2.3         Managing Common Search Terms
  As indicated in section 2.1.1, Search Input Forms, there are a number of rules governing the ability
  of users to browse the results of a patient search. In particular, there is a limit on the total number
  of results that may be returned, and there is also a limit on the number of results that a user may
  view without being audited, due to IG restrictions. In both cases, it would be advantageous if there
  was some way to reduce the likelihood of this outcome, and instead to help the user in formulating
  a more precise query from the outset.
  One such approach involves the use of some simple statistics applied to the distribution of family
  names. In the UK, as in most countries, family names tend to be distributed on a logarithmic scale,
  that is, there are a small number of names that are very common and a large number of names that
  are relatively rare. In particular, the nature of this distribution is such that a search based on just
  family name, gender, and date of birth is likely to produce more than one result (and hence trigger
  the audit rules described above) in around 23% of cases. This corresponds roughly to the 125 most
  common names in England and Wales.
  Consequently, if the entry of such common names into a search form could be detected before the
  query was actually submitted, the user could be alerted to this possibility and given guidance on
  how to refine their search appropriately (for example by entering a postcode or given name). The
  consequence would be that a more refined query would be submitted and the probability of finding
  an exact match improved. Figure 12 shows an illustrative example of how such an alert could
  appear to the user.

  Figure 12: Example of Alerting the User when a Common Family Name is Entered

                                                                                                    Page 13
                               Design Guidance – Find a Patient
                               Prepared by Microsoft, Version 1.0.0.0
                               Last modified on 5 July 2007

2.2.3.1        Guidance
  The search form should:
       Detect the entry of common names before a query is submitted, rather than afterwards
       Display an alert to the user, and request further information to refine the query
       Highlight the additional fields requested

2.2.4         Confidence Level
       High
              Users should be offered a choice of basic or advanced search
              The Date Input control should be used for input of dates
              If the database lookup is expected to exceed a certain length of time, an interstitial page
               showing progress should be displayed
              The form should allow the user to search using only patient identification number
                  A patient identification number should ideally be corroborated by one or two other
                   data items as a cross-check, unless obtained directly from a validated source such
                   as a letter to the patient
              The form should be divided both visually and logically into related groups of data
              The form should detect the entry of common names before a query is submitted,
               display an alert to the user, and request further information to refine the query
       Medium
              A title for the task that the user is performing should be displayed along with prompts on
               what to enter
              The search button should not be enabled until mandatory data values have been
               entered
              The search button should be labelled appropriately, for example ‘Search’ or ‘Find’
              The user should be able to cancel the search at any time and be returned to the original
               search page, with values pre-populated
              Form controls should use watermarks to provide guidance on data entry
       Low
              A single search input box should be used when users require more flexible search
               strategies, or when the task is performed by expert users, or when screen space is
               limited
  This guidance is currently classified as ‘Initial Guidance’. Further usability testing is expected and
  potential updates to the guidance may be completed following this usability testing.

                                                                                                    Page 14
                        Design Guidance – Find a Patient
                        Prepared by Microsoft, Version 1.0.0.0
                        Last modified on 5 July 2007

2.2.5      Benefits and Rationale
 Using an effective search input form will:
       Facilitate rapid and accurate data entry
       Improve the likelihood of successful searches
 A single search input box will:
       Allow the user to enter the search parameters in any order
       Allow expert users to use fewer keystrokes
       Often be quicker to complete than a regular form
       Occupy less screen space than a regular form
       Be usable within a variety of application contexts
       Allow the search parameters to be reconfigured without requiring redesign of the form UI
 Managing common search terms will:
       Reduce the number of failed searches
       Reduce the number of events that need to be audited
       Reduce the number of steps in the user’s workflow
       Reduce the load on the search engine
       Help the user learn more effective search strategies
       Improve the likelihood of successful searches

2.3     How to Incorporate Information Governance Rules
 One of the key principles guiding the development of national patient search applications is that
 patient records should be maintained in a confidential and secure manner. One consequence of
 this is that access to those records should be restricted to authenticated users (who must log on
 with an individual smartcard and password). Moreover, once logged on, there are further rules that
 govern the ability of such users to search patient records, such as:
       If a single matching record is found, the results page is displayed without further delay
       If 2–N matching records are found, the user is asked to refine their search or view the
        results page through an audited dialogue
       If more than N matching records are found, an error message is displayed and the user
        must refine their search
 N is currently assigned a value of 50 in the national patient database.

2.3.1      Viewing an Auditable List
 Figure 13 shows an example of how an alert may be displayed when the user must either submit
 further information or view the patient list (an action which would be audited).

                                                                                                    Page 15
                       Design Guidance – Find a Patient
                       Prepared by Microsoft, Version 1.0.0.0
                       Last modified on 5 July 2007

  Figure 13: Example of Viewing an Auditable List

2.3.1.1            Guidance
        Any action that results in an auditable or reportable event (such as viewing a patient list)
         should be visually distinguished (for example, by use of a warning icon)
                  The control that invokes the action should be visually distinguished in the same manner
                  A confirmation dialog box should be presented to the user before proceeding
        The alert message should display the original data values that the user entered
        The form should be pre-populated with the original data values that the user entered
        The additional data fields requested to refine the search should be highlighted
        The search button should not be enabled until at least one of the additional data fields has
         been populated
        The consequences of viewing the patient list should be clearly stated

                                                                                                     Page 16
                                 Design Guidance – Find a Patient
                                 Prepared by Microsoft, Version 1.0.0.0
                                 Last modified on 5 July 2007

2.3.2           Too Many Matching Records
  Figure 14 shows an example of how an error message may be displayed when too many matching
  records are found.

  Figure 14: Example of Too Many Matching Records

2.3.2.1          Guidance
        The error message should display the original data values that the user entered
        The form should be pre-populated with the original data values that the user entered
        The additional data fields requested to refine the search should be highlighted
        The search button should not be enabled until at least one of the additional data fields has
         been populated
        The reason why results cannot be displayed should be clearly stated

2.3.3           Confidence Level
        Medium
                Any action that results in an auditable or reportable event should be visually
                 distinguished
                Alert and error messages should display the original data values that the user entered
                Forms should be pre-populated with the original data values that the user entered
                Any additional data fields required to refine the search should be highlighted
                The search button should not be enabled until at least one of the additional data fields
                 has been populated
                The rationale behind alert and error messages should be clearly stated
  This guidance is currently classified as ‘Initial Guidance’. Further usability testing is expected and
  potential updates to the guidance may be completed following this usability testing.

                                                                                                     Page 17
                               Design Guidance – Find a Patient
                               Prepared by Microsoft, Version 1.0.0.0
                               Last modified on 5 July 2007

2.3.4        Benefits and Rationale
 Using the above approaches to information governance will:
       Present clear options to the user regarding their choices within the workflow
       Ensure that the user understands their rights and responsibilities when accessing patient
        records, particularly with regard to auditable or reportable events
       Help the user to understand which search criteria are mandatory and which are optional
       Help the user formulate more effective search strategies

2.4     How to Present Search Results
 This section describes how to present the results of a patient search. There are two possible
 outcomes of a patient search:
       One or more results are found
       Zero results are found
 Although the information governance rules for viewing results in may specify that a single matching
 record is treated differently from two or more matching records, for example, in the case of the NHS
 CSA, it is arguable whether this rule alone should have any bearing on the visual design of search
 results page per se. Perhaps more important is the relationship between the number of results and
 the level of detail displayed. For example:
       A large results list may benefit from using a relatively concise display, to minimise scrolling
        and reduce clutter
       A small results list may benefit from a more detailed display, making full use of the available
        screen space, and providing:
             Further details to accurately identify the patient
             Some indication of the status of the patient record (such as consent status)
             Access to the tasks that can be performed on it immediately
 Evidently, there is a trade-off between varying the level of detail and presenting the results list
 consistently, and an appropriate balance between these two considerations will need further
 investigation.

2.4.1        One or More Results Found
 Figure 15 shows an example of a large results list, displayed in a concise manner using a core set
 of attributes. By contrast, Figure 16 and Figure 17 show examples of a small results list (just one
 entry), using a more extensive set of attributes which show the consent and legitimate relationship
 status, along with a context sensitive task menu for the selected record.

                                                                                                       Page 18
                        Design Guidance – Find a Patient
                        Prepared by Microsoft, Version 1.0.0.0
                        Last modified on 5 July 2007

  Figure 15: Example of Long Results List with Minimal Detail

  Figure 16: Example of Short Results List with Additional Detail

  Figure 17: Example of Alternative Short Results List with Additional Detail

2.4.1.1            Guidance
  The search results page should:
        Display the number of matching records found
        Display the user’s original query
        Display a level of detail appropriate to the number of results
                  Where appropriate, offer access to tasks and actions, available for each patient record
        Offer options to refine the user’s search (for example, by using the advanced search
         options) or to start a new search
        Allow column widths to be adjusted

                                                                                                      Page 19
                                  Design Guidance – Find a Patient
                                  Prepared by Microsoft, Version 1.0.0.0
                                  Last modified on 5 July 2007

        Allow the results to be sorted by column
                 The current sort order should be visually indicated

2.4.2           Zero Results Found
  A failed search should present the user with more than just a ‘dead-end’. Instead, the user should
  be offered practical options and guidance on how to refine their query and search more effectively.
  Figure 18 shows how to display the results of a failed search (with zero results).

  Figure 18: Example of Zero Results Found

2.4.2.1           Guidance
  The search results page should:
        Display the user’s original query
        Clearly indicate the results of the user’s search
        Present suitable options to the user, such as broadening the search or starting again
                 These options should link to an appropriate search form with the relevant fields pre-
                  populated
        Give the user practical tips on how to refine their search, such as using ‘sounds-like’ or a
         date of birth range
                 These tips should be linked so that the user can navigate to the appropriate form with
                  the relevant option pre-selected

2.4.3           Confidence Level
        High
                 Display the number of matching records found
                 Display the user’s original query
                 Offer options to refine the search or to start a new search
        Medium
                 Display a level of detail appropriate to the number of results
                       Where appropriate, offer access to tasks and actions, available for each patient
                        record
                 Clearly indicate the results of the user’s search
                 Give the user practical tips on how to refine the search, such as using ‘sounds-like’ or a
                  date of birth range
  This guidance is currently classified as ‘Initial Guidance’. Further usability testing is expected and
  potential updates to the guidance may be completed following this usability testing.

                                                                                                       Page 20
                                Design Guidance – Find a Patient
                                Prepared by Microsoft, Version 1.0.0.0
                                Last modified on 5 July 2007

2.4.4     Benefits and Rationale
 Using the above approach to the presentation of search results will:
     Facilitate rapid location of the correct patient record
     Reduce the likelihood of selecting an incorrect patient record
     Allow the search results to be more easily sorted and manipulated
     Improve the efficiency of patient searching and reduce the number of failed searches

                                                                                             Page 21
                      Design Guidance – Find a Patient
                      Prepared by Microsoft, Version 1.0.0.0
                      Last modified on 5 July 2007

3              DOCUMENT INFORMATION

3.1            Terms and Abbreviations
    Abbreviation                       Definition
    A&E                                Accident and Emergency

    CSA                                Clinical Spine Application

    GP                                 General Practitioner

    IG                                 Information Governance

    NHS                                National Health Service

    UI                                 User Interface
    Table 1: Terms and Abbreviations

3.2            Nomenclature
    This section shows how to interpret the different styles used in this document to denote various
    types of information.
    All content subject to completion, agreement or verification is denoted with highlighting.

3.2.1            Body Text
    Text                                                              Style
    Code                                                              Monospace

    Script

    Other markup languages

    Interface dialog names                                            Bold

    Field names

    Controls

    Folder names                                                      Title Case

    File names
    Table 2: Body Text Styles

3.2.2            Cross References
    Reference                                                         Style
    Current document – sections                                       Section number only

    Current document – figures/tables                                 Caption number only

    Other project documents                                           Italics and possibly a footnote

    Publicly available documents                                      Italics with a footnote

    External Web-based content                                        Italics and a hyperlinked footnote
    Table 3: Cross Reference Styles

                                                                                                           Page 22
                                  Design Guidance – Find a Patient
                                  Prepared by Microsoft, Version 1.0.0.0
                                  Last modified on 5 July 2007

3.3       References
 Reference Document                                                         Version
 R1.              Design Guidance – Patient Banner                          1.0.0.0

 R2.              Design Guidance – Date and Time Input                     1.0.0.0

 R3.              Design Guidance – Date Display                            1.0.0.0

 R4.              Design Guidance – Gender and Sex Display                  1.0.0.0

 R5.              Design Guidance – Patient Identification Number Display   1.0.0.0

 R6.              Design Guidance – Address Information Display             1.0.0.0
 Table 4: References

                                                                                      Page 23
                             Design Guidance – Find a Patient
                             Prepared by Microsoft, Version 1.0.0.0
                             Last modified on 5 July 2007
