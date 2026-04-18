# cuifullsafetycase

## Provenance
- Source file: `raw/sources/references/nhs-archives/isb-standards/cuifullsafetycase.pdf`
- Extracted text: `derived/extracted-text/archive-support/cuifullsafetycase.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

         CUI CAPS – Demographics – Clinical Safety Case and Closure Report
         Programme          NPfIT                 Document Record ID Key
         Sub-Prog / Project Technology Office     <Insert Document Record ID
                            CUI Programme         Key>
                            CAPS Project
         Prog. Director     Ken Lunn              Status         Final
                            Tim Chearman
         Owner              Beverley Scott        Version        v4.0
         Author             Beverley Scott        Version Date   16-Dec-2009




DEPARTMENT OF HEALTH INFORMATICS DIRECTORATE
                      Common User Interface (CUI) Programme
       Clinical Applications and Patient Safety (CAPS) Project:

         Demographics / Information Input and Display:
                               Patient Banner (Patient Identification)
                                          Address Input and Display
                                     NHS Number Input and Display
                                     Patient Name Input and Display
                           Sex and Current Gender Input and Display
                                Telephone Number Input and Display
                                                        Date Display
                                                        Time Display
                                                Date and Time Input

                   Clinical Safety Case and Closure Report
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report


Amendment History:

 Version    Date             Amendment History
                                                                              th
 1.0        26-Aug-2009      Final version for submission to the CSG on 26 August 2009
                                                                                     th
 2.0        20-Oct-2009      Updated version for re-submission to the CSG on 30 October 2009.
                                                                                          rd
 3.0        22-Oct-2009      Further updates made for re-submission to the CSG on 23 October 2009.

 4.0        16-Dec-2009      Finalised for publication.

Reviewers:
This document must be reviewed by the following:<author to indicate reviewers>

Name                      Signature    Title / Responsibility                      Date              Version

Rob Shaw                               Director – NIC                              16-Dec-2009       4.0

Dr Maureen Baker                       Clinical Director for Patient Safety        16-Dec-2009       4.0

Ian Harrison                           Chief Safety Engineer – DHID                16-Dec-2009       4.0

Tim Chearman                           CUI CAPS Project Lead                       16-Dec-2009       4.0

Approvals:
This document must be approved by the following:

Name                      Signature    Title / Responsibility                      Date              Version

Rob Shaw                               Director – NIC                              16-Dec-2009       4.0

Dr Maureen Baker                       Clinical Director for Patient Safety        16-Dec-2009       4.0

Distribution:
<Author to say who the document will be distributed to>
Document Status:
This is a controlled document.
Whilst this document may be printed, the electronic version maintained internally by the owning
department is the controlled copy. Any printed copies of the document are not controlled.
Related Documents:
These documents will provide additional information.

Ref no     Doc Reference Number       Title                           Version




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                               Page 2 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                            CUI CAPS – Demographics, Patient Banner and Date & Time
                                    Clinical Safety Case and Closure Report


Table of Contents

Glossary of Terms.................................................................................................................... 4
1. Introduction ....................................................................................................................... 5
2. Background ....................................................................................................................... 5
3. CUI CAPS Clinical Safety Management System ............................................................. 6
3.1. Structure of the CUI CAPS Clinical Safety Team ............................................................ 6
3.2. Clinical Safety Products and Sign Off ............................................................................. 7
3.3. Clinical Safety Risk Management File ............................................................................. 8
3.4. CUI CAPS Clinical Safety Approach ................................................................................ 8
4. Customer Need and Scope..............................................................................................10
4.1. Patient Banner..................................................................................................................10
4.2. Input and Display of Demographic Information .............................................................12
4.3. Date and Time Input and Display ....................................................................................17
5. Safety Goals .....................................................................................................................18
5.1. Top Level Safety Goal ......................................................................................................18
5.2. Safety Requirements and Objectives .............................................................................18
6. Patient Safety Assessment .............................................................................................20
6.1. Hazard Identification and Risk Assessment ..................................................................21
6.2. Hazard Analysis and Risk Management .........................................................................22
7. Safety Argument ..............................................................................................................23
7.1. “Acceptably Safe” and Tolerance Levels .......................................................................23
7.2. Patient Banner..................................................................................................................26
7.3. Demographics Input and Display....................................................................................27
7.4. Date Display .....................................................................................................................28
7.5. Time Display .....................................................................................................................29
7.6. Date and Time Input .........................................................................................................30
8. Risk Tables .......................................................................................................................31
8.1. Patient Banner..................................................................................................................31
8.2. Demographic Display and Input......................................................................................36
8.3. Date and Time Display and Input ....................................................................................45
APPENDIX 1 – DEPARTMENT OF HEALTH INFORMATICS DIRECTORATE RISK MATRIX59




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                   Page 3 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report


Glossary of Terms


 Acronym / Term        Definition


 Accredited            Those clinicians that have attained accreditation status under the DHID /
 Clinician             NPSA Accreditation Training Scheme for clinical risk management.
 ALARP                 As low as reasonably practicable.
 CAPS                  Clinical Applications and Patient Safety Project.
 CATR                  Clinical Authority to Release means a certificate issued by the DHID
                       Clinical Safety Group (CSG) to indicate that it has completed the process
                       of reviewing the submitter‟s evidence intended to substantiate the
                       assertion that a system is clinically safe and thereby fit for purpose.
 Clinical Safety       Clinical Safety means the process of reviewing and dealing appropriately
                       with Clinical Hazards and Clinical Risks in order to ensure patient safety,
                       including anything which has the potential to cause harm to a patient, but
                       specifically excluding health and safety considerations in terms of
                       operating the Services or systems.
 CSA                   The CSA (Clinical Safety Advisor) is the nominated DHID individual, who is
                       also an Accredited Clinician, responsible for the management of clinical
                       safety in the CUI Programme.
 CSC                   Clinical Safety Case.
 CSG                   Clinical Safety Group (DHID) – responsible for awarding CATR.
 CSMS                  Clinical Safety Management System (DHID) – the DHID prescribed
                       process for management of clinical safety.
 CUI                   Common User Interface Programme.
 ISB                   Information Standards Board for Health and Social Care.
 DHID                  Department of Health Informatics Directorate.
 NPSA                  National Patient Safety Agency.
 PSA                   Patient Safety Assessment.
 SCR                   Safety Closure Report.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 4 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

1. Introduction
This document is the combined Clinical Safety Case (CSC) and Safety Closure Report (SCR) for
the following related set of Common User Interface (CUI) design guides:
       Patient Banner
       Address Input and Display
       NHS Number Input and Display
       Patient Name Input and Display
       Sex and Current Gender Input and Display
       Telephone Number Input and Display
       Date Display
       Time Display
       Date and Time Input.



This report is part of a set of clinical safety documentation, which has been produced in order to
meet requirements of the Department of Health Informatics Directorate (DHID) Clinical Safety
Management System (CSMS). It contains the Hazard Logs and supporting development
information for above 9 design guides. It is being submitted to the DHID Clinical Safety Group
(CSG) for review and sign off in order to achieve Clinical Authority to Release (CATR).


The audience for this document is the DHID CSG, DHID National Integration Centre (NIC),
Information Standards Board for Health and Social Care (ISB), the CUI Clinical Applications and
Patient Safety (CAPS) team, clinical / healthcare system suppliers and health organisations.



2. Background
Established in 2005, the Common User Interface (CUI) programme within the (recently re-
organised) Department of Health Informatics Directorate Technology Office is focused on
supporting the NHS, via delivery of a series of projects, to:
       Increase patient safety;
       Increase clinician effectiveness;
       Make IT systems easier to use;
       Maintain a well managed and more secure desktop and server infrastructure; and
       Enable improved personal and team productivity.


The Clinical Applications and Patient Safety (CAPS) project, part of the CUI programme, is
responsible for the development of platform agnostic, text based user interface design guidelines
for healthcare IT suppliers to the NHS. The scope of the CAPS project is focused on those
patient safety critical aspects of clinical systems (such as medications management and patient
identification) in order to increase consistency and thereby improve the safety integrity of the
many different clinical systems which will be used throughout the NHS.


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 5 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

Since December 2005, the CAPS project has and continues to:
       Deliver a growing portfolio of NHS driven clinical applications design guidance;
       Engage, involve and improve awareness in the NHS clinical community of their ability to
        drive change in clinical supplier UI;


Support other programmes of activity within DHID in their UI needs, where applicable to the
CAPS roadmap;
       Develop and maintain good working relationships with and encourage adoption by NHS
        clinical application suppliers;
       Develop and implement the CUI CAPS Clinical Safety Management Plan – in accordance
        with the DHID Clinical Safety Management System.
       Progress published guidance as potential information standards for the NHS in England
        through the Information Standards Board for Health and Social Care (ISB);
       Engage with the DHID National Integration Centre (NIC) technical assurance process;
       Foster and maintain an awareness of the project‟s objectives with both international
        clinical and supplier communities.


3. CUI CAPS Clinical Safety Management System
The following section outlines the high level CUI CAPS Clinical Safety Management System –
which is predominantly based on the DHID Clinical Safety Management System and the
emerging information standard, “Application of Clinical Risk Management to the Manufacture of
Health Software.” The individual, tailored clinical safety management plan for each deliverable,
ie. design guide, covered by this report can be found at Section 6 – Patient Safety Assessment.



    3.1.        Structure of the CUI CAPS Clinical Safety Team
    The list below identifies the key people responsible for clinical safety within the CUI CAPS
    project. Although, all members of the CUI CAPS team are expected to integrate clinical
    safety into every aspect of development work. Appropriate awareness raising and
    education has been provided „on site‟ by the current Clinical Safety Advisor. Relevant
    clinical team members of the CUI CAPS team (known as the Specific Audience) have
    attended the DHID training in human factors and risk assessment, in order to become
    “Accredited Clinicians” in Patient Safety Assessment (PSA) workshops and understand the
    required safety processes.


        Beverley Scott, Clinical Safety Advisor and Registered Mental Health Nurse (RMN)
         (Accredited Clinician) – February 2008 – December 2009.
        Lindsey Butler, Clinical Safety Advisor and Registered General Nurse (RGN) (Accredited
         Clinician) – from August 2009 onwards.
        Stephen Corbett, Head of User Interface Design, Technology Office.

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 6 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

       Tim Chearman, CUI CAPS Project Lead and User Experience Designer.
       Frank Cross, Consultant Surgeon and Senior Clinical Advisor (Accredited Clinician).
       Pete Johnson, Clinical Architect and General Practitioner (Accredited Clinician).


    Due to the size of the CUI CAPS team, a internal clinical safety committee is not required.
    Instead the CAPS safety team as defined above meets on a regular basis with the design
    team to review the CUI CAPS clinical safety approach, individual Hazard Logs and clinical
    safety products in production and planned for future releases.


    The CUI CAPS team utilise the safety assurance and sign off processes of the DHID
    Clinical Safety Group (CSG) and the Information Standards Board for Health and Social
    Care (ISB) for CUI design guidance.


    3.2.        Clinical Safety Products and Sign Off
    The following clinical safety specific products will be produced for each CUI CAPS design
    guide:


           Hazard Log.
           Clinical Safety Case (including the Patient Safety Assessment).
           Safety Closure Report.


    The DHID CSMS supports staged submission of the above documents to the Clinical Safety
    Group as a usual route to achieving Clinical Authority to Release (CATR). However, due to
    tight CUI CAPS project timescales, ie. typically 3 months per design guide, and limited
    Clinical Safety Advisor resource, the CUI CAPS Clinical Safety Cases and Safety Closure
    Reports will normally be compiled and submitted post design guide development.


    Depending on the size and complexity of the design guide under consideration, project
    timescales and agreement from the CSG, the Clinical Safety Case and Safety Closure
    Report may be combined into one document and one submission to the CSG (as in this
    instance).


    Whilst design guides may be published on the CUI website, www.cui.nhs.uk (registration
    required) before receiving CATR, both the safety and information standards status of each
    design guide is clearly identified on the website, and a caveat included in the document
    itself with respect to the patient safety process.


    The latest safety information can be requested by suppliers by emailing the mailbox
    cuistakeholder.mailbox@nhs.net


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                   Page 7 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    3.3.        Clinical Safety Risk Management File
All documents created as part of the CUI CAPS Clinical Safety Management System are
maintained, version controlled and managed by the CUI CAPS Clinical Safety Advisor (CSA).


Documents are stored on the CUI CAPS Clinical Safety SharePoint site, which has access
control measures in place. Members of the CSG or ISB can request access by contacting the
CUI CAPS CSA.


    3.4.        CUI CAPS Clinical Safety Approach
    The CUI CAPS project has developed their clinical safety management approach based on
    the Clinical Safety Management System (CSMS) prescribed to system suppliers by the
    DHID and the emerging information standard, “Application of Clinical Risk Management to
    the Manufacture of Health Software.”


    Although outputs from the CUI CAPS project, namely text based user interface design
    guidance, are not systems per se, they will inform the user interface work carried out by
    clinical system suppliers which will in turn end up being part of a live deployed system. It is
    crucial, therefore, that the outputs from CUI CAPS are also clinically safe.


    The DHID CSMS outlines four risk areas: End to end clinical process risk; Technical risk;
    Message risk; and Patient safety risk. As the CAPS project is focused on the user interface
    layer of an application, the scope of the CAPS safety process is limited to patient safety
    risks. The other risk types are classed out of CUI scope. However, where related risks are
    raised, CUI CAPS will record and transfer those risks to the appropriate parties.


    As the CUI CAPS Project is responsible for developing user interface design guidelines
    which will be utilised within clinical applications - not the development of applications
    themselves – the CUI CAPS Clinical Safety Cases are developed as Pre-Operational.
    Taking a typical software development lifecycle (see the table below), the scope of CUI
    design guidance covers the stages of Define Requirements, Design and Develop.


    As such, the CUI CAPS Clinical Safety Cases will cover these stages also (although it
    important to note that the Patient Safety Assessment‟s themselves are very much focused
    upon context of use). It is the intention that the CUI CAPS safety documentation will be the
    starting point for NHS clinical application developers upon which to build their own Clinical
    Safety Case and, ultimately, pass on to end users within the live estate.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                   Page 8 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report




                                                      Define Requirements
                                                      Design
                                                      Develop
                           Manufacturers              Build
                                                      Test
                                                      Release



                                                      Deploy
                           End Users                  Use
                                                      Decommission




    In order to build the Clinical Safety Case, each CUI CAPS design guide will undergo an end
    to end Patient Safety Assessment (PSA). It is important to note that a Patient Safety
    Assessment (PSA) is not a distinct activity, scheduled into the development lifecycle as a
    milestone. A PSA is the term used to describe the end to end, continuous, iterative
    assessment to establish the safety integrity of the deliverable. It is integrated into the
    development lifecycle for each CAPS deliverable right from the outset.


    A CUI CAPS PSA consists of two main „processes‟: Hazard identification and risk
    assessment; and Hazard analysis and risk management. Various safety specific activities
    (eg. risk assessment workshop), methods (eg. Structured What If Technique, Hierarchical
    Task Analysis) and tools (eg. hazard checklists, cause and effect (Fishbone) diagrams) can
    be used during a PSA. However, all usual activities undertaken as part of normal research
    and development processes for CUI CAPS, ie. non safety specific, will pro-actively elicit
    patient safety issues and hazards on an ongoing basis. These are then fed into the master
    Hazard Log via the Clinical Safety Advisor for management.


    As part of an end to end Patient Safety Assessment (PSA), the following safety specific
    activities should take place for each CUI CAPS deliverable (design guide):


     Each CAPS deliverable should have an assessment during the scoping phase to identify
      the minimum number and type of safety specific activities to take place and when.
     As a minimum, each CAPS deliverable should have:
       o    A web based survey, including safety specific questions.
       o    One to one interviews with representative end users, including safety specific
            questions.
       o    Patient Safety Risk Assessment (PSA) workshops, eg.


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                Page 9 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

                 1 x Opening Risk Assessment workshop with representative end users (pre
                 design: safety requirements and objectives and preliminary hazard identification
                 and risk assessment).
                 1 x Closing Risk Assessment workshop with representative end users (post
                 design: risk identification, grading and management).
                 Interim Risk Assessments can take place as required, such as when a design
                 guide spans multiple releases.
     The purpose of an Opening Risk Assessment is to inform the CUI CAPS requirements
      process (including safety requirements). Very often, the ORA can raise hazards and
      issues that are either out of scope or not patient safety specific – as it is conducted
      during the very early, conceptual stages of design.
     All hazards and issues, irrespective of where and when they are raised, go into the
      Hazard Log for central tracking by the CSA.
     The purpose of a Closing (or Interim) Risk Assessment is to formally risk assess final (or
      near final) designs, using a structured approach to identify hazards and grade and
      manage risks.
     Regular meetings take place with the CUI CAPS safety and design teams to review live
      hazards and manage to an acceptable level.
       The number and type of activities, methods and tools varies across CUI CAPS
        deliverables (see Section 6 – Patient Safety Assessment for the actual activities).
        Ultimately, the overall aim of the PSA is to build a progressive Clinical Safety
        Case.


4. Customer Need and Scope
Currently, clinical systems used within the NHS in England, across all care settings, differ in the
way demographic information and dates and times are displayed and input. Inherent within this
is the risk that healthcare professionals moving between clinical systems made by different
developers can misinterpret information, potentially leading to Patient Safety Incidents (as
defined by the National Patient Safety Agency (NPSA)). It is also vital that data is entered into
system accurately.


    4.1.        Patient Banner
    The term “patient banner” refers to the area of the user interface that contains header
    information for a patient record. The patient banner is the area within the user interface that
    is most often used to match records with patients and contains key information for
    identifying patients, such as name, address and date of birth. This information may be
    matched with that provided by the patient (or a third party, such as a parent), usually in their
    presence or over the telephone. Information in the patient banner may also be matched
    with that in any of the patient‟s associated artefacts, such as samples, letters, specimens,
    wristbands and x-rays.



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 10 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    The National Patient Safety Agency (NPSA) states that although there are no accurate
    figures on the frequency or cost of mismatching errors, they form a significant part of the
    whole range of errors in healthcare. However, there is considerable variation in the layout
    of a patient banner across clinical applications.


    The aims of the Patient Banner described in the CUI design guide are to:
     Ensure patients are correctly identified and matched with their patient record by
      displaying data items consistently.

     Allow quick access to and display of other summary information, such as contact details
      and allergies, for a patient.

     Reduce and, where possible, eliminate errors in the matching of patient with their care.


    When errors do occur, they are typically one of the three main types:
    1. The patient is given the wrong treatment as a result of a failure to identify the patient
       correctly.

    2. The patient is given the wrong treatment as a result of a failure to match the patient
       correctly with their artefacts (samples, letters, specimens, x-rays, and so on).

    3. The patient is given the wrong treatment as a result of a failure in communication
       between staff, or staff not performing checking procedures correctly.
    The design guidance is concerned with each of the errors above, but particularly 1) and 2).


    The following items are in scope:
     Defining the minimum items of information that must be contained in a Patient
      Banner in order to identify the patient, such as, but not limited to:
    o Patient name (family name, given name and title)
    o Patient address
    o Date of birth
    o Patient age
    o Date of death (displayed to aid the identification of the deceased patient)
    o Gender
    o NHS Number
     Grouping and layout of this information, including:
    o Which data items should be grouped together
    o Which data items should be given the most prominence
    o Whether and where controls (such as expandable / collapsible panels) should be used

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 11 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

     Labelling of information, including:
    o Which items of information in the Patient Banner are to be labelled
    o How items of information are to be labelled; this will cover the label text, positioning and
      any elements of styling required to differentiate labels visually from data
     Location and shape of the Patient Banner, in order to achieve:
    o Optimal visibility of the key information needed for patient identification
    o Easy recognition of the Patient Banner in the context of the wider clinical application
     Size of the Patient Banner. This must be a balance between the minimum required for
      suitable layout of the content, and the maximum that can be used at the expense of
      screen space left for the clinical application to use.


    The aspects that are out of scope for this standard are:
     Reduced-size form factors – This standard does not cover reduced-size form factors,
      such as personal digital assistants (PDA‟s) and other small mobile devices.
     Display of components with separate display standards – Some individual
      components in the banner already have separate display standards.
     Input of information – The standard only covers the display of the patient banner and its
      contents. It does not cover the input of any information.
     Data storage – The standard relates only to the human interface layer of a software
      application, and does not prescribe the format for storing patient banner data.
     Display styles – The standard does not cover the choice of display features such as
      font, size, background an foreground text colour.


    4.2.        Input and Display of Demographic Information
    These 5 design guides will specify common user interface aspects of:


     Address Input and Display
     NHS Number Input and Display
     Patient Name Input and Display
     Sex and Current Gender Input and Display
     Telephone Number Input and Display.


    The purpose of above design guidance is to make display of patient demographic
    information consistent across all clinical systems within the NHS in England. The objective
    is to increase patient safety by maximising clinical utility and minimising reading, input and
    transcribing errors.



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 12 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    Displaying and entering unambiguous information in a consistent format is a core element in
    ensuring effective patient care. It is vital that healthcare professionals correctly interpret
    names, telephone numbers, and other information relating to patient demographics, clinical
    episodes and planned treatments, among others. It is also vital that data is entered into
    systems accurately.


    Research quantifying the clinical safety of ambiguous or inconsistent display of
    demographic information is limited, but there is a clear argument that unambiguous and
    consistent user interfaces would reduce the potential for human error leading to patient
    safety incidents. This view is supported by the NPSA. For example:


        A misinterpreted address could result in a patient not being informed of an appointment.
        An ambiguous name such as “David Clare”, where the order of elements is not obvious,
         could result in identifying a wrong patient, or the wrong gender of the patient.
        An application that uses Sex and Current Gender labels the opposite way around to
         another application, which is possible with two such similar fields as these, can result in
         clinicians that move between the applications making mistakes.


    The following items are in scope:
     Address Input and Display:
    o Address display.
    o Address input data elements.
    o UK address input.
    o UK address finder.
    o Non UK address input.
     NHS Number Input and Display:
    o Input of a fully specified NHS Number.
    o Display of a fully specified NHS Number.
     Patient Name Input and Display:
    o Defining the valid values for Patient Name Input and Display
    o Labelling of information, including:
            Definition of the elements of a Patient Name.
            Definition of the values for each element.
            How items of information are to be labelled; this will cover the label text, positioning
            and any elements of styling required to differentiate labels visually from data.
    o Control layout and structure, in order to achieve:
            Optimal visibility of the values.

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 13 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

            Easy recognition of the values in the context of the wider clinical application.
            Easy recognition of data type requested for input.
            Reduction of invalid entries.
    o Size of input fields, in order to:
            Avoid wasting screen space.
            Ensure optimal display of entire data items.
     Sex and Current Gender Input and Display:
    o Defining the valid values for current Sex and Current Gender.
    o Labelling of information, including:
            Definition of the terms Current Sex and Current Gender.
            Definition of the values.
            How items of information are to be labelled; this will cover the label text, positioning
            and any elements of styling required to differentiate labels visually from data.
    o Control layout and structure, in order to achieve:
            Optimal visibility of the values.
            Easy recognition of the values in the context of the wider clinical application.
            Easy recognition of the data type requested for input.
            Reduction of invalid entries.
     Telephone Number Input and Display:
    o Defining the valid values for Telephone display and input.
    o Control layout and structure, in order to achieve:
            Optimal visibility of the values.
            Easy recognition of the values in the context of the wider clinical application.
            Easy recognition of data type requested for input.
            Reduction of invalid entries.
            Optimal size of input fields.


    The following aspects are out of scope:
     Address Input and Display:
    o Validation of an entered address as a real address – Techniques to determine
      whether an entered address is an actual address.
    o Validation that a given address is that of the stated person – Techniques to validate
      whether or not a valid address is that of the stated person.



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 14 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    o Multi-language applications – Languages that use right-to-left writing, such as Arabic,
      the Cyrillic alphabet, such as Russian, or ideograms, such as Japanese.
    o Display styles – Choice of display font size, background and foreground text colour will
      affect the readability of addresses, as it will with all other displayed text.
    o Reduced-size form factors – Handheld devices, such as personal digital assistants
      (PDAs) and other such small mobile devices.
    o Data storage and transmission – The guidance relates only to the display layer of a
      clinical application, and does not prescribe how addresses should be stored. It is
      assumed that all applications will be capable of transforming an address stored in an
      arbitrary format into that prescribed by this guidance, without error.
    o Data history and provenance – The recording of validity dates is left to the designer of
      the NHS clinical application.
    o Address types – Entering multiple addresses, such as for office and home, is left to the
      designer of the NHS clinical application.
    o Method of providing help text and user messages – There are many ways of
      providing the user with assistance, such as tooltips, watermarks, FAQ files, and online
      help.
    o Address picker – Third-party postcode-based address finders offer a set of candidate
      addresses.
    o Form design – Typically, an address will be entered in a form along with other
      information such as name and email address; the positioning of these and other fields is
      left to the form designer.


     NHS Number Input and Display:
    o Validation – Conformance to the required format and checksum calculation is defined in
      the UK Government Data Standards Catalogue {R5} and is outside the scope of the
      guidance, as is validation that a given NHS Number is that of the stated person.
    o Multi-language applications – Languages that use right-to-left writing, such as Arabic,
      the Cyrillic alphabet such as Russian, or ideograms such as Japanese.
    o Display styles – Choice of display font size, background and foreground text colour will
      affect the readability of NHS Numbers, as with all other displayed text.
    o Other patient identification numbers – Any locally allocated patient identification
      number used in a hospital‟s Patient Administration System (PAS) or other systems.
    o Bar code representation – The display on a wristband of an NHS Number in the form of
      a bar code.
    o Reduced-size form factors – The guidance does not cover reduced-size form factors,
      such as personal digital assistants (PDAs) and such other small mobile devices.
    o   Data storage and transmission – The guidance relates only to the display layer of a
        clinical application, and does not prescribe how NHS Numbers should be stored. It is
        assumed that all applications will be capable of transforming an NHS Number stored in
        an arbitrary format, into that prescribed by this guidance, without error.
DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                Page 15 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    o   Data history and provenance – The recording of dates for when an NHS Number is
        valid is left to the designer of the NHS clinical application.
    o   Form design – Typically an NHS Number will be entered in a form in which a user is
        asked to enter additional information such as name and contact address. The guidance
        does not address form-level aspects such as the positioning of labels, error messages, or
        how mandatory fields should be displayed.


     Patient Name Input and Display:
    o Data storage – The guidance does not prescribe the format for storing data that is input
      or displayed.
    o Terms of use – The guidance does not define when an input field or display should be
      presented within a system.
    o Form design – The guidance does not prescribe the correct layout for a form, the
      navigation around a form, or how these controls should be labelled.

     Sex and Current Gender Input and Display:
    o Data storage – The guidance does not prescribe the format for storing data that is input
      or displayed.
    o Terms of use – The guidance does not define when an input field or display should be
      presented within a system or when Current Gender should be used instead of Sex, and
      vice versa.
    o Form design – The guidance does not prescribe the correct layout for a form or the
      navigation around a form.


     Telephone Number Input and Display:
    o Data storage – The guidance does not prescribe the format for storing data that is input
      or displayed.
    o Terms of use – The guidance does not define when an input field or display should be
      presented within a system.
    o Form design – The guidance does not prescribe the correct layout for a form or the
      navigation around a form.
    o Fax numbers – The guidance does not prescribe the format for fax numbers.
    o Data input control types – The guidance does not specify how the input controls should
      be labelled, for example, „Home number‟ or „Preferred contact‟. The concept of types and
      context are not explicitly supported. However, the flexible behaviour of the input control
      and the exclusion of a control-level label enable the developer to reuse the same input
      control for multiple situations.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                Page 16 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    4.3.        Date and Time Input and Display
    The purpose of the guidance is to make display and input of date and time consistent across
    all clinical systems within the NHS in England. The objective is to increase patient safety by
    maximising clinical utility and minimising reading and transcribing errors.


    Displaying unambiguous information in a consistent format is a core element in ensuring
    effective patient care. It is vital that healthcare professionals correctly interpret dates and
    times relating to patient demographics, clinical episodes and planned treatments, among
    others.


    No existing standards (W3C and ISO) provide an entirely unambiguous date display. ISO
    stipulates that the day and month elements of a date are pairs of numerical values. This
    presents a risk of date misinterpretation by confusing month for day and vice-versa. W3C
    reduces this ambiguity by using letters for the month, but it does not specify a format for
    long dates to complement its short date format.


    These 3 design guides specify common user interface aspects of:


       Date Display including: General data display guidance; Single precise date display –
        short date format and long date format; Display of approximate dates comprising only a
        year or a combination of month and year.
       Time Display including: Single precise time display; Approximate (or fuzzy time);
        Relative times; Time duration; Display of date and time combinations.
       Date and Time Input including: Fully specified dates; Fully specified times; Partially
        specified dates; Approximate dates and times; Arithmetic shortcuts; Date and time
        durations; Input via free text fields; Input via input controls; Disambiguation of date
        entries.


    The following aspects are out of scope for Date and Time Display and Input:


       Data storage - The standard relates only to the human interface layer of a software
        application, and does not prescribe the format for storing data.
       Styling – Choice of display font size, background and foreground text colour will affect
        the readability of all displayed text. These standards will not address general rules for
        text display. These will be addressed in other guidelines.
       Reduced-size form factors – This standard does not cover reduced-size form factors,
        such as personal digital assistants (PDA‟s) and other mobile devices.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 17 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                        CUI CAPS – Demographics, Patient Banner and Date & Time
                                Clinical Safety Case and Closure Report

5. Safety Goals
The Clinical Safety Case rests on three factors:


1.   Identification of safety goals and requirements.
2.   Evidence which supports safety goals and requirements have been achieved.
3.   The safety argument which explains how the evidence can be reasonably interpreted as
     indicating “acceptable safety”.


The concept of „acceptably safe‟ is discussed later in the Safety Argument (Section 7).


     5.1.         Top Level Safety Goal
     The top level safety goal for the 9 CUI design guides covered by this pre-operational Clinical
     Safety Case and Closure Report, is that the design guidance is acceptably safe for system
     developers to begin implementing within clinical systems in the NHS in England. The
     assumption for this safety goal being that this pre-operational safety case is the starting
     point for the aforementioned system developers‟ operational safety cases.



     5.2.         Safety Requirements and Objectives
     The following safety goals apply to all CUI design guidance:
           CUI design guidance is developed using an assured, fit for purpose development
            lifecycle.
           The CUI CAPS design guide development lifecycle includes an integrated, fit for
            purpose safety assessment and management process.
           All identified hazards have been appropriately managed.


     Safety specific requirements and general objectives for each design guide have been
     identified as follows:


     Patient Banner:
           Reliable and accurate identification of an individual patient record.
           Matching a patient record with:
            o     The correct patient, whether present in person or by phone.
            o     Other artefacts associated with the patient, for example, samples, letters, or
                  wristbands.
           Displaying core information according to existing standards and guidance and using a
            minimum data set available to all NHS clinical applications.

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 18 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report


        Promoting consistency across the mix of users, NHS clinical applications and care
         settings.
        Displaying minimum supplementary information to support patient identification or
         enhance patient care.
        Minimising opportunities where patient-clinician confidentiality and patient privacy may
         be compromised.
        Minimising opportunities for human error.


    Address and NHS Number Input and Display:
        Display information conforming to convention and existing best practice with which
         clinicians are already familiar, so as to reduce the training requirements of clinical
         applications.
        Promoting data quality to reduce the occurrence of errors.
        Balancing the need for consistency and commonality across clinical applications with
         the need to support Independent Software Vendor (ISV) requirements for flexibility.


    Patient Name, Sex and Current Gender and Telephone Number Input and Display:
        Display information according to existing standards.
        Minimise opportunities for human error.
        Display sufficient instructional information to support data quality.
        Promote consistency across the mix of users, NHS clinical applications and care
         settings.
        Ensure reliable and accurate identification of an individual patient record.
        Minimise opportunities where patient-clinician relationships may be compromised.



    Date and Time Input:
        Enable dates and times to be entered in a range of formats and using a variety of input
         methods, including arithmetic shortcuts.
        Support application scenarios where the user needs to enter approximate dates or
         times.
        Provide the ability to enter either fully specified or partially specified dates.
        Simplify the entry of times by standardising on the 24-hour clock.
        Reduce the likelihood of errors by providing disambiguation of the input, where
         appropriate.
        A system will be built using a calendar database that recognises the change between
         Greenwich Mean Time (GMT) and British Summer Time (BST) where appropriate.


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                       Page 19 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    Date Display:
        Eliminate confusion between the month and day values.
        Minimise the space required to display dates on a screen.
        Maintain a reading pattern that is natural to users.
        Eliminate opportunities for misinterpreting the date as representing some other data.
        Promote consistency across NHS applications by defining a set of two permissible date
         formats.


    Time Display:
        Enable all time information to be represented explicitly and completely, eliminating the
         occurrence of ambiguous times.
        Reduce the possibility of misinterpreting the time as a date or other information display.
        Maximise the readability of the time by the use of clear separators between time
         elements.
        Support application scenarios where the user needs to enter and view an approximate
         time or duration.
        Promote consistency across NHS applications by providing a small set of valid formats.


6. Patient Safety Assessment
As part of the development of an evolving Clinical Safety Case for CUI design guidance, a
Patient Safety Assessment has been completed for each. Section 4.4 (Clinical Safety
Approach) described the high level general approach CUI takes for PSA‟s. The actual activities
which took place for this set of CUI design guidance is described below:
   Primary research – representative end user one to one interviews at their place of work and
    online (web based) surveys (which have both been geared to generate potential hazards),
    eg:
    o    Patient Banner: A Web based survey of 65 clinicians covering a range of patient
         identification issues; A further web based survey of 158 NHS clinicians and
         administrative staff; 12 one to one interviews with a range of healthcare professionals; A
         plenary discussion with 10 members of the Clinical Spine Applications Design Steering
         Group (Southern).
    o    Address, Patient Name, NHS Number, Sex and Current Gender and Telephone
         Number Input and Display: A web based survey of 41 respondents from NHS clinicians
         and administrative staff, Independent Software Vendors (ISVs), community pharmacists
         and NHS Connecting for Health.
   Secondary (desk) literature research, eg. desk based research project looking at a range of
    standards, frameworks, literature, information entry web pages and clinical applications.
   Interviews with appropriate Accredited Clinicians (risk).


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 20 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

   Internal review by the CUI CAPS Specific Audience (SA).
   Patient Safety Risk Assessment (PSA) Workshop(s) with end user representation, Subject
    Matter Experts (SMEs) and nominated Accredited (risk) Clinician(s) / Safety Engineer(s).
    The main purpose of the PSA workshops was to support hazard identification and risk
    assessment (see Section 6.1 – Hazard Identification and Risk Assessment).
   National Integration Centre technical review of the CUI design guides.
   ISB assurance and sign off at both Requirement and Draft Standard stage. Draft Standard
    submission including an end user testing exercise, using a notional clinical application with
    the CUI design guidance covered by this document adopted within it. (Documents available
    by request). The Full Standards for all 9 CUI design guides were subsequently approved by
    ISB either directly at the September 2009 Board meeting, or following the meeting pending
    satisfactory resolution of actions.
   Hazard Log for each completed and maintained using an appropriate template. All patient
    safety issues, regardless of where raised, have been added to the Hazard Log for tracking
    and mitigation. (See Section 6.2 – Hazard Analysis and Risk Management).


    6.1.         Hazard Identification and Risk Assessment
    For Patient Banner and Demographic Inputs and Displays, the initial hazards / risks were
    identified in a joint PSA workshop on 4 July 2007 at the Department of Health Informatics
    Directorate London office involving 8 clinicians, 3 CUI CAPS Team Members, 3 user
    interface designers, 1 Safety Engineer, and 1 Accredited Clinician.


    For Date and Time Input and Display, the initial hazards / risks were identified in a joint PSA
    workshop on 12 July 2007 involving 5 clinicians, 2 technical SME‟s, 3 user interface
    designers / CUI CAPS Team Members, 1 Safety Engineer and 1 Accredited Clinician.


    The PSA workshops consisted of the following:
    1.     Preliminary introductions and initial background information provided by CUI CAPS
           Project Team.
    2.     Introductory presentations – This elaborated on the objectives of the workshop, how the
           Patient Safety Assessment is to be created, controlled and finalised, and a concise
           history of events leading up to the PSA workshop.
    3.     Hazard identification – Using the Structured What If Technique (SWIFT) to identify /
           brainstorm hazards, by walking the participants through clinical scenarios of use and
           displaying click through presentations (PowerPoint slide deck) to mirror the particular UI
           function(s) being assessed.
    4.     Hazard assessment – Grading hazards in terms of risk by detailed discussion around
           consequences, their severity and likelihood, existing safeguards and potential
           recommendations for mitigation.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 21 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    To summarise, the patient safety risk assessment approach that was used was:
    1.   What could go wrong? (Hazard).
    2.   Why might the hazard occur? (Cause).
    3.   What are the most likely consequences? (Severity).
    4.   How likely is the consequence to occur, given the identified hazard? (Likelihood).
    5.   What are the existing safeguards in place to prevent, reduce or mitigate the patient
         safety risk?
    6.   What are the recommendations for mitigation?
    7.   Grading of risks, using a Risk Matrix. (See Appendix 1).


    6.2.        Hazard Analysis and Risk Management
    Further to the design phase of the CUI CAPS development lifecycle, an evaluation of user
    interface design work against the known clinical risks was carried out by the CUI Clinical
    Safety Advisor (CSA) and the CUI CAPS team. This was in preparation for the submission
    of the CUI design guides as Draft Operational Information Standards to the Information
    Standards Board for Health and Social Care (ISB) on 3 September 2008. A further
    evaluation of the Hazard Logs was carried out by the CSA following National Integration
    Centre (NIC) technical assurance on 5th November 2008 (where issues raised by the NIC
    were added to the Hazard Log).


    A Change Request was authorised in January 2009 to address all outstanding issues. On
    the proviso that the Change Request was delivered, ISB approved all the CUI design guides
    as Draft Standards. (Patient Name Input and Display received Conditional Approval). The
    Change Request work completed in July 2009, upon which a further evaluation of the
    Hazard Log was carried out by the CSA in order to prepare and submit this report and the
    Full Standards submissions to ISB.


    It is the aim of the CUI CAPS project to manage all risks identified by one of the following
    options:
    1. Mitigate through design, ie. design out so the risk is eliminated.
    2. Transfer the risk.
    3. For low grade, tolerable risks where designing out is not a viable option, to offer
       implementation guidance.


    All hazards and issues raised to date, as a result of the above processes, have been
    recorded in a Hazard Log. Section 8 – “Risk Tables” provides a summary of the key risks
    raised throughout the process which have been assessed as in scope for CUI CAPS.
    Please note, additional risks were raised throughout end to end development, which were
    either a) designed out during early stages; b) not assessed to be patient safety relevant; or
    c) not considered in scope for the CUI CAPS project.

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                 Page 22 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    Furthermore, as all issues raised by the various assurance processes (eg. ISB, NIC
    technical assurance) were recorded in the Hazard Log for appropriate tracking, not every
    hazard or issue has been taken down the cause / consequence / risk grading route. In
    many cases, where an issue has been raised, CUI CAPS has responded to it immediately
    without the need for further assessment of the potential risk.


7. Safety Argument
The purpose of this Clinical Safety Case and Closure Report to outline the „safety argument‟, ie.
the argument (with supporting evidence) that the CUI design guides covered by this document
are acceptably safe for system developers to begin implementing within clinical systems in the
NHS in England.


As CUI design guidance is pre-operational, the Clinical Safety Case is also pre-operational.
Clinical system developers must ensure implementation of CUI design guidance forms part of
the operational Clinical Safety Case for each clinical system / release in its specific context of
use.


    7.1.        “Acceptably Safe” and Tolerance Levels
    Providing evidence that residual risk has been mitigated to an acceptable level is the
    ALARP (As Low As Reasonably Practicable) concept – a principle embedded in UK law
    since 1949. Determining that a risk has been reduced to ALARP involves an assessment of
    the risk and the cost, time and effort involved establishing controls to mitigate the risk, and a
    comparison of the two. In the case of clinical safety risks, where deliverables such as CUI
    design guidance ha been developed in order address existing patient safety objectives,
    determining ALARP can also include an assessment of the clinical benefits against the
    residual clinical risk. However, there must be gross disproportion between the risk and
    benefit in order to claim ALARP.


    The CUI CAPS project has set acceptable levels and management of clinical risk as follows:


          Risks graded as “Low” or “Safety Integrity Level” (SIL) 1 – 3 are deemed acceptable for
           CUI design guidance (see the DHID / NPSA Risk Matrix at page Appendix 1).
           However, given the pre-operational nature of CUI design guidance, all risks identified,
           regardless of their grading, will have been managed in one or more of the following
           ways:

        o    Mitigation by „clinical risk avoidance‟, ie. „design out‟ of the CUI design guide, in
             order that the hazard no longer exists.
        o    Transfer the risk. Risks requiring transfer in the CUI CAPS project are usually one of
             three types:



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                   Page 23 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

                 Risks which are out of scope for CUI CAPS, however, are relevant for other
                 projects or programmes within the DHID. In the Hazard Log, these types of risks
                 have a „Stage‟ and „Status‟ as „Transferred‟ and „Closed‟.
                 Risks which are in scope for CUI CAPS, however, mitigation of the risk must
                 take place by those implementing CUI design guidance, eg. system developers
                 or, in some cases, end users of systems, eg. clinicians. In the Hazard Log,
                 these types of risks have a „Stage‟ and „Status‟ of „Live Risk‟ and „Transferred‟.
                 Risks which are not in scope for CUI CAPS to mitigate (as not in scope for the
                 particular design guide), however, may be a known or unknown risk with current
                 clinical (for example) practice, which is related to the design guide area. Risks
                 of this type have a „Stage‟ of „Invalid‟. „Status‟ could be „Closed‟, „Open‟ or
                 „Transferred‟ depending on the nature of the specific risk and recommendations
                 made by the CUI CAPS project.
        o   For low grade, tolerable (as defined above) risks, where avoidance or transfer of the
            risk is not an option, the „Stage‟ will be „Live Risk‟ or „Partially Mitigated‟ and the
            „Status‟ will be „Open‟.


    „Acceptable safety‟ in terms of the overall safety goal for the CUI CAPS project, is that there
    are no identified live and open risks above SIL 3 for all CUI design guidance.


    In order to demonstrate this, it is argued the safety case rests on two criteria:


    a. Demonstration of adherence to a fit for purpose clinical safety process:
    The clinical safety process undertaken by the CUI CAPS Project is consistent with the
    Department of Health Informatics Directorate (DHID) Clinical Safety Management System
    (CSMS) and is outlined both at a high level and specifically for each deliverable earlier
    within this document. See sections 3, 5 and 6.


    Please note, some time has elapsed since original development of these particular
    CUI design guides and the subsequent evaluation of the PSA’s by the (in post since
    February 2008) Clinical Safety Advisor in preparation for CSG and ISB submissions.
    As the CSA was not in post at the time of the PSA’s and original development, the
    safety documentation has been compiled in best efforts based on information
    available.



    b. Mitigation of live risks to as low as reasonably practicable (ALARP):
    All risks are argued to have been acceptably mitigated in line with CUI tolerance levels as
    set (see Section 7.1 - “Acceptably Safe and Tolerance Levels” and Section 8 - “Risk
    Tables”). To reiterate, the argument for clinical safety outlined within this document is for
    pre-operational use of CUI design guidance.



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 24 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    Any healthcare system developer adopting CUI design guidance must undertake a further
    Patient Safety Assessment (PSA) for the implementation (and subsequent deployment) of
    CUI design guidance within their own healthcare application based on its specific context
    of use. Examples of operational context includes (not exhaustive):


        Setting, eg. primary care, acute secondary care (inpatient and / or outpatient),
         community, etc.
        End users, eg. doctors, nurses, allied health professionals, administrative and clerical
         employees, patients, etc.
        Clinical environment, eg. high dependency unit, day surgery, GP consultation, acute
         psychiatric ward admission, etc.


    The development lifecycle for CUI design guidance has been adapted in order to ensure
    that safety risks are proactively and systematically identified and managed throughout the
    end to end lifecycle. This includes adapting usual project development activities, eg.
    research, end user consultation, etc. to incorporate patient safety requirements. As such,
    hazards and risks are often identified which fall outside of CUI CAPS‟ responsibility to
    manage. For example, the pre-operational PSA may highlight a risk which requires
    mitigation during implementation. Risks of this type will be flagged as having a stage of
    “Live” or “Partially Mitigated” and a status of “Transferred”.


    Furthermore, hazards and risks are often identified which fall outside of CUI CAPS‟ design
    scope. Such risks can be of relevance to healthcare system suppliers and / or other
    departments within DHID. Risks of this type will be flagged as having a stage of “Invalid”
    and status as “Transferred”.       Therefore, the pre-operational safety documentation
    referenced and embedded in this document should be the starting point for each operational
    PSA, taking note that there are identified risks where responsibility for mitigation has been
    „Transferred‟ to system developers.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                Page 25 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                         CUI CAPS – Demographics, Patient Banner and Date & Time
                                                 Clinical Safety Case and Closure Report

    7.2.                              Patient Banner




                                                                                                 Patient Banner CUI Design
                                                                                                 Guide is Acceptably Safe for
                                                                                               healthcare system developers
                                                                                                to begin implementing within
                                                                                                    systems - based on an
                                                                                               operational safety assessment.




                                                                                                                                                      The Patient Banner is able to
                                           The Patient Banner Design                                                                                  match a patient record with:      Displaying core information
      CUI design guidance is                                                                                        The Patient Banner supports
                                         Guide development lifecycle                                                                                  The correct patient, whether     according to existing standards
  developed using an assured, fit                                           All identified hazards have                reliable and accurate
                                         includes an integrated, fit for                                                                             present in person or by phone;    and guidance using a minimum
    for purpose development                                                been appropriately managed.             identification of an individual
                                          purpose safety assessment                                                                                  and other artefacts associated      dataset available to all NHS
            lifecycle.                                                                                                     patient record
                                           and management process.                                                                                     with a patient, for example,         clinical applications.
                                                                                                                                                     samples, letters or wristbands.




                                                                                 Refer to "CUI CAPS -
                                                                                                                                                                                         The Patient Banner design
                                              Refer to "CUI CAPS -         Demographics - Clinical Safety
  Defined in the document, "CUI                                                                                      Patient Banner guidance                                            guide is consistent with the
                                        Demographics - Clinical Safety     Case and Closure Report - v2.0
  CAPS Development Lifecycle -                                                                                     points: PAB-0016 - PAB-0021.         Patient Banner guidance        NPSA Wristband Safer Practice
                                           Case and Closure Report -        - 20 Oct 2009" - Section 7.1 -
       v5.0 - 26 Aug 2009."                                                                                         The Minimimum dataset".                      points:                    Notice for the safe
                                        v2.0 - 20 Oct 2009" - Section 4        "Acceptably Safe" and
                                                                                                                                                                                         identification of patients.
                                          - "CUI CAPS Clinical Safety             Tolerance Levels".                                                     PAB-0001 - "The Patient
                                         Management System" and                                                                                       Banner should consist of two
                                          Section 6 - "Patient Safety                                                                                  zones, Zone 1 and Zone 2";
                                                 Assessment".                                                                                            PAB-0073 - "The Patient
                                                                                                                                                     Banner must include Zone 1.";
                                                                                                                                                           PAB-0002 - "Display
                                                                                                                     Patient Banner guidance            information that faciliates
                                                                                Refer to "CUI CAPS -                                                  patient identification in Zone
                                                                                                                       points: "Information
                                                                           Demographics - Clinical Safety                                              1"; and PAB-0016 - "Always
    Refer also to the full suite of                                                                                Groupings" - PAB-0022 - PAB-
                                                                           Case and Closure Report - v2.0                                              display the patient's name
  documentation to support the                                                                                      0032; and "Data Labels and
                                                                            - 20 Oct 2009" - Section 9 -                                             (family name, given name and
   Information Standards Board                                                                                      Values" - PAB-0033 - PAB-
                                                                                   "Risk Tables".                                                      title), date of birth, gender
  for Health and Social Care (ISB                                                                                              0043.
                                                                                                                                                     and NHS Number in this order
   HaSC) process to achieve Full                                                                                                                       within the Patient Banner.
      Operational Information
      Standard for the Patient
  Banner for Clinical Systems in
  the NHS in England. ISB HaSC
     has assured the CUI CAPS'
       development lifecycle.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                                                                         Page 26 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                        CUI CAPS – Demographics, Patient Banner and Date & Time
                                                Clinical Safety Case and Closure Report

     7.3.                     Demographics Input and Display




                                                                              Demographics (Address, Patient Name, NHS
                                                                             Number, Sex & Current Gender and Telephone
                                                                            Number) Display and Input CUI Design Guides are
                                                                            Acceptably Safe for healthcare system developers
                                                                            to begin implementing within systems - based on
                                                                                    an operational safety assessment.




                                                                                                                                                                             Promote consistency
                                                                                                                        Promoting data quality     Enable reliable and      across the mix of users,
                                                          All identified hazards           Display information
                                  CUI Demographics                                                                          to reduce the        accurate identification    NHS clinical applications
                                                         have been appropriately              conforming to
    CUI Demographics               Input and Display                                                                     opportunity for and     of an individual patient      and care settings.
                                                                managed.                convention and existing
     Input and Display               Design Guide                                                                        occurence of errors.            record.
                                                                                            best practice and
     design guidance is         development lifecycle                                    standards with which
    developed using an         includes an integrated,                                    clinicians are already                                                            Balancing the need for
  assured, fit for purpose      fit for purpose safety                                                                     Display sufficient    Minimise opportunities        consistency and
                                                                                        familiar, so as to reduce            instructional       where patient-clinician
  development lifecycle.            assessment and                                             the training                                                                  commonality across
                                management process.                                                                     information to support    relationships maybe        clinical applications
                                                                                        requirements of clinical             data quality.           compromised.
                                                                                               applications.                                                                   with the need to
                                                                                                                                                                                  support ISV
                                                                                                                                                                              requirements for
                                                                                                                                                                                   flexibility.
                                                           Refer to "CUI CAPS -
                                                         Demographics - Clinical
                                                         Safety Case and Closure
                                                          Report - v2.0 - 20 Oct
                                                           2009" - Section 7.1 -        Collective Demographic          Collective Demographic   Collective Demographic
       Defined in the                                    "Acceptably Safe" and                                             Display and Input
                                                                                           Display and Input                                        Display and Input       Collective Demographic
   document, "CUI CAPS                                      Tolerance Levels".                                            guidance points for
                                                                                          guidance points for                                      guidance points for         Display and Input
  Development Lifecycle -                                                                                                 Address Display and
                                Refer to "CUI CAPS -                                      Address Display and                                      Address Display and        guidance points for
    v5.0 - 26 Aug 2009."                                                                                                 Input, Patient Name
                              Demographics - Clinical                                    Input, Patient Name                                      Input, Patient Name         Address Display and
                                                                                        Display and Input, NHS          Display and Input, NHS   Display and Input, NHS
                              Safety Case and Closure                                                                    Number Display and                                  Input, Patient Name
                               Report - v2.0 - 20 Oct                                    Number Display and                                       Number Display and        Display and Input, NHS
                                                                                         Input, Sex & Current            Input, Sex & Current     Input, Sex & Current
                              2009" - Section 4 - "CUI                                                                    Gender Display and                                 Number Display and
                                CAPS Clinical Safety                                      Gender Display and                                       Gender Display and        Input, Sex & Current
                                                                                         Input and Telephone             Input and Telephone      Input and Telephone
                               Management System"                                                                        Number Display and                                   Gender Display and
                              and Section 6 - "Patient                                   Number Display and                                       Number Display and         Input and Telephone
                                                                                                 Input.                          Input.                   Input.
                               Safety Assessment".                                                                                                                           Number Display and
                                                                                                                                                                                     Input.
     Refer also to the full                                Refer to "CUI CAPS -
  suite of documentation                                 Demographics - Clinical
        to support the                                   Safety Case and Closure
   Information Standards                                  Report - v2.0 - 20 Oct
    Board for Health and                                    2009" - Section 9 -
    Social Care (ISB HaSC)                                    "Risk Tables".
  process to achieve Full
         Operational
   Information Standards
     for Address, Patient
    Name, NHS Number,
       Sex and Current
  Gender and Telephone
      Number Input and
      Display for Clinical
   Systems in the NHS in
  England. ISB HaSC has
   assured the CUI CAPS'
  development lifecycle.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                                                                    Page 27 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                   CUI CAPS – Demographics, Patient Banner and Date & Time
                                           Clinical Safety Case and Closure Report

    7.4.                  Date Display




                                                                        Date Display CUI Design Guide is
                                                                     Acceptably Safe for healthcare system
                                                                    developers to begin implementing within
                                                                    systems - based on an operational safety
                                                                                  assessment.




                                                      All identified                                                           Maintain a reading
                           Date Display Design                                Eliminate confusion        Minimise the space      pattern that is          Promote
   CUI Date Display                                hazards have been                                                                                 consistency across
                           Guide development         appropriately            between the month          required to display    natural to users;
  design guidance is                                                                                                                                 NHS applications by
                           lifecycle includes an       managed.               and the day values.         dates on a screen
  developed using an                                                                                                                Eliminate         defining a set of
                             integrated, fit for
    assured, fit for                                                                                                            opportunities for     two permissable
                               purpose safety
       purpose                                                                                                                 misinterpreting the     date formats.
                              assessment and
    development                                                                                                                      date as
                                management
       lifecycle.                                                                                                              representing some
                                  process.
                                                                                                                                   other data
                                                                                 Date Display               Date Display
                                                    Refer to "CUI CAPS         guidance points:          guidance points for
                                                     - Demographics -             D+Ta-0002 -            Short Date format:                             Date Display
                                                   Clinical Safety Case       "Display the month                                                     guidance points for
                                                                                 textually, not           D+Ta-0006, D+Ta-                           Short Date format:
                                                   and Closure Report                                     0007, D+Ta-0008,
                                                       - v2.0 - 20 Oct         numerically" and                                   Date Display
     Defined in the                                                               D+Ta-0018 -             D+Ta-0009, D+Ta-
                           Refer to "CUI CAPS      2009" - Section 7.1                                                         guidance points for
    document, "CUI                                                             "Display the day            0010 and D+Ta-                            D+Ta-0006, D+Ta-
                             - Demographics -      - "Acceptably Safe"                                                            General Date
  CAPS Development                                                              value using two                 0018.                                0007, D+Ta-0008,
                           Clinical Safety Case        and Tolerance                                                                format:
  Lifecycle - v5.0 - 26                                                             digits".                                                         D+Ta-0009, D+Ta-
                           and Closure Report             Levels".
      Aug 2009."                                                                                                               D+Ta-0002, D+Ta-       0010 and D+Ta-
                               - v2.0 - 20 Oct
                            2009" - Section 4 -                                                                                0003, D+Ta-0004,            0018.
                            "CUI CAPS Clinical                                                                                 D+Ta-0005, D+Ta-
                                   Safety                                                                                      0016, D+Ta-0017
                                                                                                                                and D+Ta-0022.          Date Display
                               Management                                                                                                            guidance points for
                                System" and                                                                                                           Long Date format:
                           Section 6 - "Patient
    Refer also to the
                                   Safety          Refer to "CUI CAPS
        full suite of
                               Assessment".         - Demographics -                                                                                 D+Ta-0011, D+Ta-
   documentation to
       support the                                 Clinical Safety Case                                                                              0012, D+Ta-0013,
       Information                                 and Closure Report                                                                                D+Ta-0014, D+Ta-
  Standards Board for                                 - v2.0 - 20 Oct                                                                                0015, D+Ta-0019,
    Health and Social                              2009" - Section 9 -                                                                                D+Ta-0020 and
     Care (ISB HaSC)                                  "Risk Tables".                                                                                   D+Ta-0021.
   process to achieve
    Full Operational
       Information
   Standard for Date
   Display for Clinical
  Systems in the NHS
     in England. ISB
   HaSC has assured
      the CUI CAPS'
      development
         lifecycle.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                                              Page 28 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                   CUI CAPS – Demographics, Patient Banner and Date & Time
                                           Clinical Safety Case and Closure Report

    7.5.                  Time Display




                                                                        Time Display CUI Design Guide is
                                                                     Acceptably Safe for healthcare system
                                                                    developers to begin implementing within
                                                                    systems - based on an operational safety
                                                                                  assessment.




                                                      All identified             Enable all time                                Support application
                           Time Display Design     hazards have been           information to be             Maximise the         scenarios where           Promote
   CUI Time Display
                           Guide development         appropriately                 represented             readability of the    the user needs to     consistency across
  design guidance is
                           lifecycle includes an       managed.                   explicity and           time by the use of     enter and view an    NHS applications by
  developed using an
                             integrated, fit for                                   completely,              clear separators     approximate time       providing a small
    assured, fit for
                               purpose safety                                    eliminating the             between time           or duration.      set of valid formats.
       purpose
                              assessment and                                      occurrence of                elements.
     development
                                management                                     ambiguous times;
       lifecycle.
                                  process.
                                                                                  Reduce the
                                                                                 possibility of
                                                    Refer to "CUI CAPS        misinterpreting the
                                                     - Demographics -          time as a date or                                                         Time Display
                                                   Clinical Safety Case       other information                                    Time Display
                                                                                                                                guidance points for   guidance points for
                                                   and Closure Report               display.                Time Display                              Exact Time format:
                                                       - v2.0 - 20 Oct                                     guidance point:       Duration: D+Tb-
     Defined in the                                                                                                              0017, D+Tb-0018,     D+Ta-0006, D+Ta-
                           Refer to "CUI CAPS      2009" - Section 7.1                                   D+Tb-0028 - "Use a                            0007, D+Ta-0008,
    document, "CUI                                                                                                              D+Tb-0026 - D+Tb-
                             - Demographics -      - "Acceptably Safe"                                   white space as the                           D+Ta-0009, D+Ta-
  CAPS Development                                                                                                               0031, D+Tb-0033
                           Clinical Safety Case        and Tolerance                                       separator when                               0010 and D+Ta-
  Lifecycle - v5.0 - 26                                                                                                           and D+Tb-0034.
                           and Closure Report             Levels".                                           displaying a                                    0018.
      Aug 2009."
                               - v2.0 - 20 Oct                                                           duration composed
                            2009" - Section 4 -                                                           of more than one
                                                                                 Time Display                                      Time Display
                            "CUI CAPS Clinical                                                                  unit".                                   Time Display
                                                                              guidance points for                               guidance points for
                                   Safety                                                                                                             guidance points for
                                                                              Exact Time: D+Tb-                                  Approximate (or
                               Management                                                                                                             Approximate Time
                                                                               0001 - D+Tb-0013                                 Fuzzy) Time: D+Tb-
                                System" and                                                                                                             format: D+Tb-
                                                                                and D+Tb-0032.                                   0014, D+Tb-0015
                           Section 6 - "Patient                                                                                                        0014, D+Tb-0015
    Refer also to the                                                                                                             and D+Tb-0016.
                                   Safety          Refer to "CUI CAPS                                                                                  and D+Tb-0016.
        full suite of
                               Assessment".         - Demographics -
   documentation to
       support the                                 Clinical Safety Case
                                                   and Closure Report                                                                                    Time Display
       Information                                                                                                                                    guidance points for
  Standards Board for                                 - v2.0 - 20 Oct
                                                   2009" - Section 9 -                                                                                 Duration: D+Tb-
    Health and Social                                                                                                                                  0017, D+Tb-0018,
     Care (ISB HaSC)                                  "Risk Tables".
                                                                                                                                                      D+Tb-0026 - D+Tb-
   process to achieve                                                                                                                                  0031, D+Tb-0033
    Full Operational                                                                                                                                    and D+Tb-0034.
       Information
   Standard for Time
   Display for Clinical
  Systems in the NHS
     in England. ISB
   HaSC has assured
      the CUI CAPS'
      development
         lifecycle.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                                               Page 29 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                         CUI CAPS – Demographics, Patient Banner and Date & Time
                                                 Clinical Safety Case and Closure Report

     7.6.                   Date and Time Input




                                                                                Date and Time Input CUI Design Guide is
                                                                                 Acceptably Safe for healthcare system
                                                                                developers to begin implementing within
                                                                                systems - based on an operational safety
                                                                                              assessment.




                                                                               Enable dates and                                                                                  A system will be
                           Date and Time Input     All identified hazards    times to be entered                               Provide the ability to        Reduce the
  CUI Date and Time                                                                                     Support application                                                        built using a
                               Design Guide              have been                                                               enter either fully     likelihood of errors
     Input design                                                           in a range of formats       scenarios where the                                                     calendar database
                               development              appropriately                                                          specified or partially       by providing
      guidance is                                                             and using a variety       user needs to enter                                                    that recognises the
                           lifecycle includes an         managed.                                                                 specified dates.       disambiguation of
  developed using an                                                          of input methods,          approximate dates                                                       change between
                             integrated, fit for                                                                                                          the input, where
    assured, fit for                                                         including arithmetic            or times.                                                         GMT and BST where
                              purpose safety                                       shortcuts.                                                               appropriate.
        purpose                                                                                                                                                                    appropriate.
                              assessment and
    development
       lifecycle.              management
                                  process.

                                                   Refer to "CUI CAPS -     Date and Time Input
                                                      Demographics -                                                                                    Date and Time Input    Date and Time Input
                                                                            guidance points for                                Date and Time Input      guidance points for     guidance points:
                                                    Clinical Safety Case       Free Text Date           Date and Time Input    guidance points for       Disambiguation of
                                                   and Closure Report -     Input: D+Tc-0001 -            guidance point:         Free Text Date         Input: D+Tc-0038,
                                                   v2.0 - 20 Oct 2009" -     D+Tc-0009, D+Tc-
                                                                                                        D+Tc-0022 - "Use an    Input: D+Tc-0001 -          D+Tc-0039 and       D+Tc-0048 - "Where
     Defined in the                                     Section 7.1 -        0041, D+Tc-0042
                                                                                                        ‘Approx’ check box      D+Tc-0009, D+Tc-            D+Tc-0040.             a time duration
    document, "CUI                                  "Acceptably Safe"         and D+Tc-0046.
                           Refer to "CUI CAPS -                                                         to allow the user to    0041, D+Tc-0042                                  spans the change
  CAPS Development                                     and Tolerance
                              Demographics -                                                                 indicate an         and D+Tc-0046.                                  between GMT and
  Lifecycle - v5.0 - 26                                   Levels".
                            Clinical Safety Case                                                        approximate time".                                                      BST, show a pop-up
      Aug 2009."                                                            Date and Time Input
                           and Closure Report -                                                                                                                                  to inform the user
                                                                             guidance points for                               Date and Time Input                              that the system will
                           v2.0 - 20 Oct 2009" -
                                                                            Calendar Date Input:                                guidance points for                            automatically handle
                              Section 4 - "CUI                               D+Tc-0010 - D+Tc-
                           CAPS Clinical Safety                                                                                Calendar Date Input:                             the data within the
                                                                                   0019.                                        D+Tc-0010 - D+Tc-                                 appropriate time
                               Management
                           System" and Section                                                                                        0019.                                             zone ."
                            6 - "Patient Safety                             Date and Time Input
  Refer also to the full       Assessment".        Refer to "CUI CAPS -     guidance points for
                                                      Demographics -                                                                                                           D+Tc-0049 - "Where
          suite of                                                           Time Input: D+Tc-                                                                                  a user adjusts time
   documentation to                                 Clinical Safety Case     0020 - D+Tc-0027,
                                                   and Closure Report -                                                                                                        manually resulting in
       support the                                                           D+Tc-0043 - D+Tc-                                                                                    a time duration
       Information                                 v2.0 - 20 Oct 2009" -      0045 and D+Tc-
                                                     Section 9 - "Risk                                                                                                          spanning a change
  Standards Board for                                                              0047.                                                                                        between GMT and
    Health and Social                                     Tables".
                                                                                                                                                                               BST, show a pop-up
     Care (ISB HaSC)                                                                                                                                                            to inform that user
   process to achieve                                                                                                                                                          that the system will
    Full Operational                                                                                                                                                           automatically adjust
       Information                                                                                                                                                              the data according
   Standard for Date                                                                                                                                                            to the appropriate
   and Time Input for                                                                                                                                                               time zone."
   Clinical Systems in
  the NHS in England.
      ISB HaSC has
     assured the CUI
  CAPS' development
         lifecycle.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                                                                   Page 30 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

8. Risk Tables
Note: Risk Grading is not always completed where hazard has automatically been designed out
or the hazard is not strictly a patient safety hazard, but a general issue.

      8.1.      Patient Banner

No.             Hazard          Cause(s)      Consequence(s)           Risk          Mitigations
               Summary                                                Grading
                                                                     C   L   R
PAB001       What if clinical   Sex and      Inappropriate           2   1    2   Mitigated by the
             judgements         Current      clinical care for the                CUI Sex and
             are        made    Gender       patient‟s     gender                 Current Gender
             based        on    do    not    and / or sex.                        design guidance
             administrative     match                                             – to be included
             gender      and    and                                               in the Patient
             Sex         and    gender is                                         Banner.
             Current            shown
             Gender        is   and   not
             different?         sex.

PAB002       What if the        Because    Care provided to          3   1   3    Mitigated        by
             user confuses      there is   wrong patient.                         Mandatory
             given   name       no clear                                          Guidance Point
             and     family     indication                                        PAB-0053          –
             name?              which                                             “Display        the
                                way                                               patient‟s    family
                                round the                                         name in upper
                                names                                             case and the
                                appear.                                           patient‟s     given
                                (The parts                                        name and title in
                                are not                                           title case.”
                                labelled).

PAB004       What if the        The          Possible         non    2   1   2    Mitigated     by
             patient uses a     system       response        from                 recommended
             preferred          does not     patient as they are                  guidance    point
             name instead       display      used to hearing                      PAB-0020       –
             of their given     their        their given name.                    “Display     the
             name?              preferred    Patient frustration.                 Preferred Name
                                name.                                             where available”,
                                                                                  and PAB-0037 –
                                                                                  “Display     the
                                                                                  Preferred Name
                                                                                  with the label
                                                                                  Preferred Name.”




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 31 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report


PAB006      What if the        There is      User confusion.         2   1   2   Mitigated        by
            user               no label                                          Mandatory
            misinterprets      for age                                           guidance      point
            the age for        and there                                         PAB-0033           –
            some      other    is no                                             “Precede the data
            period in time,    visual                                            of birth with the
            eg. last time      grouping                                          label “Born”, and
            attended?          with Date                                         PAB-0034           –
                               of Birth.                                         “When displaying
                                                                                 the age of a living
                                                                                 patient, place it in
                                                                                 parentheses
                                                                                 immediately
                                                                                 following the date
                                                                                 of    birth    and
                                                                                 without a label.

PAB008      What if the        The           Wrong      address      3   1   3   Mitigated by PAB-
            user     doesn‟t   system        used.            Poor               0027 – “Precede
            realise that the   doesn‟t       discharge                           the full address
            patient     has    indicate      planning. Delay in                  with the label
            multiple           which         care.   Breach in                   “Usual Address”,
            addresses      /   address is    confidentiality.                    “Temporary
            contact details    displayed                                         Address”, or one
            to       contact   or that                                           of the types of
            them on?           there are                                         temporary
                               additional                                        addresses, and
                               addresses                                         as defined in
                               available                                         PDS.          Also
                               (the                                              recommended in
                               example                                           Patient    Banner
                               only                                              guidance is a link
                               shows one                                         to further contact
                               address                                           addresses.
                               (“Usual
                               Address”                                          Training      issue
                               rather                                            also.
                               than
                               “Postal
                               Address”).




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                   Page 32 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PAB009      What if the          The          Wrong      address      3   1   3   Mitigated        via
            user assumes         system       used.            Poor               Mandatory
            that      the        doesn‟t      discharge                           Guidance points:
            address is a         indicate     planning. Delay in                  PAB-0025           –
            contact              which        care.   Breach in                   “Display as much
            address and it       address is   confidentiality.                    of the address as
            is not?              displayed                                        possible     in    a
                                 and it may                                       single line, in the
                                 be a                                             title of the first
                                 temporary                                        section in Zone 2,
                                 address.                                         displaying        an
                                                                                  ellipsis to show
                                                                                  incomplete
                                                                                  display of the
                                                                                  address.”; PAB-
                                                                                  0026 – “Display
                                                                                  the full address
                                                                                  including        the
                                                                                  postcode, in the
                                                                                  first section of the
                                                                                  expanded Zone
                                                                                  2; and PAB-0027
                                                                                  – “Precede the
                                                                                  full address with
                                                                                  the label “Usual
                                                                                  Address”,
                                                                                  “Temporary
                                                                                  Address”, or one
                                                                                  of the types of
                                                                                  temporary
                                                                                  address,          as
                                                                                  appropriate, and
                                                                                  as defined in the
                                                                                  PDS.”

PAB014      What if the          Other       User  frustration.       2   1   2   Mitigated via text
            user            if   zones use Delays.                                label.
            confused      by     numeric‟s,
            the     ?     for    the display
            Location as it       is not
            looks like the       consistent
            system does          and is
            not        know      confusing.
            where        the     Looks like
            patient is?          there is a
                                 query.
                                 Question
                                 mark not
                                 self
                                 explanator
                                 y.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 33 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report


PAB015      What if the        The meaning of          User           2   1   2   Location   drop
            user         is    Location is             frustration.               down has been
            confused    by     ambiguous. No           Delays.                    designed    out.
            the purpose of     tooltip available.                                 Mitigated.
            the   Location
            drop down?

PAB021      What if the        Patient Banner          User           2   1   2   Mitigated      via
            user     doesn‟t   change in colour        frustration.               Mandatory
            realise that the   doesn‟t appear on                                  Guidance Points:
            record is that     different displays.                                PAB-0024 – “For
            of a deceased                                                         a        deceased
            patient     and                                                       patient,   display
            wrongly                                                               the date of death
            selects it for                                                        and the age at
            the      patient                                                      death in Zone 1”;
            presented?                                                            PAB-0038         –
                                                                                  “Precede the date
                                                                                  of death with the
                                                                                  label “Died”; and
                                                                                  PAB-0039         –
                                                                                  “Precede the age
                                                                                  at death with the
                                                                                  label “Age at
                                                                                  Death”.

PAB022      What if the        The Date of Death       User           2   1   2   Mitigated      via
            user confuses      appears as the first    frustration.               Mandatory
            the date of        field on the screen,    Delays.                    Guidance Points:
            birth and date     where as the user                                  PAB-0024 – “For
            of death?          is used to seeing                                  a        deceased
                               the Date of Birth.                                 patient,   display
                               Traditionally, DoD                                 the date of death
                               is recorded in red.                                and the age at
                               EMIS also shows                                    death in Zone 1”;
                               blue for                                           PAB-0038         –
                               unregistered                                       “Precede the date
                               patients.                                          of death with the
                                                                                  label “Died”; and
                                                                                  PAB-0039         –
                                                                                  “Precede the age
                                                                                  at death with the
                                                                                  label “Age at
                                                                                  Death”.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                   Page 34 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report


PAB023      What if, with the Date of             Inappropriate       2   1   2   Mitigated.
            large text, the user birth is         information                     Guidance
            assumes the date truncated.           about the age of                prohibits
            of birth is 14-Jul-                   a patient.                      truncation       of
            1919 (instead of                                                      information in the
            14-Jul-2019).                                                         Patient Banner.

PAB024      What if the user    Informatio        Mis-               3    1   3   Mitigated.
            has the large font  n is              identification.                 Guidance
            switched on and     truncated                                         prohibits
            confuses      two   when                                              truncation       of
            patients with the   appearing                                         information in the
            same name?          in large                                          Patient Banner.
                                font.
PAB027      Expansion      and Design.            Implementation      1   1   1   The        Patient
            collapse of Zone 2                    consequences.                   Banner     Design
            is     stated   as                    (Not        patient             Guide has been
            Mandatory, but not                    safety critical).               re-drafted to de-
            all systems may                                                       scope mandatory
            have           this                                                   zone to just Zone
            functionality                                                         1. Zone 2 is now
            available.                                                            recommended,
                                                                                  not mandatory.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 35 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

    8.2.        Demographic Display and Input

 No.        Hazard               Cause(s)           Consequenc          Risk         Mitigations
           Summary                                     e(s)            Grading
                                                                      C L     R
PID003     What if the    Erroneous address         Wrong             2 1     2   Mitigated      via
           user cannot    data     is    hidden     patient                       ADR-0004:
           see all the    OR                        selected                      When truncating
           address        Only the town is          Delay        or               an address, add
           information    displayed and the         incorrect care                an    ellipsis  to
           and selects    user assumes it is        to      patient               indicate that the
           the wrong      the same patient          Incorrect                     address is not
           patient?       OR                        medial                        displayed in full
                          The         postcode      history added                 and,         where
                          column is at the end      to       wrong                appropriate,
                          of the screen (not        patient                       provide a means
                          associated with the                                     for the user to
                          address       column)                                   access the full
                          and the user doesn't                                    address.
                          notice
                          OR
                          There are multiple
                          addresses with a
                          similar           start
                          OR
                          The address column
                          is truncated.

PID008     The     user   NHS is used as the Delay in care 2             2   2    Mitigated in part
           can      not   label, rather than Inefficiency                         by NUM-0002 -
           easily         NHS          Number                                     NHS Number to
           identify the   OR                                                      be displayed in
           NHS            The number appears                                      groups, not a
           Number         as     a      10-digit                                  single      strand.
                          character rather than                                   However,       label
                          grouped digits                                          issue      currently
                                                                                  not mitigated -
                                                                                  guidance       does
                                                                                  not mandate a
                                                                                  label for display
                                                                                  of NHS Number.
                                                                                  Low              risk
                                                                                  identified,
                                                                                  however,
                                                                                  recommendations
                                                                                  to be made for
                                                                                  training.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 36 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID009    The user can         The       number     The number 2        1   2   Mitigated      by
          not easily read      appears as a         could       be              NUM-0002 - NHS
          the        NHS       10-digit             transcribed                 Number to be
          Number.              character rather     incorrectly                 displayed      in
                               than     grouped     Potential                   groups, not a
                               digits.              patient                     single strand.
                                                    misidentificati
                                                    on
                                                    Delay in care
                                                    Lab
                                                    discarding
                                                    samples.

PID010    The user can         Spaces        are    The number 2        1   2   Fonts      not     in
          not easily read      used in the NHS      could       be              scope for CUI.
          the        NHS       number and a         transcribed                 Also       mitigated
          Number.              non-proportional     incorrectly                 through        NUM-
                               font is used.        Potential                   0002: Display the
                                                    patient                     NHS Number as
                                                    misidentificati             three groups, with
                                                    on                          a single space
                                                    Delay in care               included as a
                                                    Lab                         separator
                                                    discarding                  between groups,
                                                    samples.                    as follows: The
                                                                                first group must
                                                                                consist of the
                                                                                first, second and
                                                                                third digits in
                                                                                order;           The
                                                                                second         group
                                                                                must consist of
                                                                                the fourth, fifth
                                                                                and sixth digits in
                                                                                order; and The
                                                                                third group must
                                                                                consist of the
                                                                                seventh, eighth,
                                                                                ninth and tenth
                                                                                digits in order.

PID012    The        user      Brackets around      Delay        in 2   1   2   Mitigated via NHS
          mistakes    the      the first three      contacting                  Number        Input
          NHS Number for       digits of the        the                         Design Guidance
          the      phone       NHS Number           patient/relativ             as this control
          number                                    es                          now      removes
                                                    Contacting                  brackets       (and
                                                    wrong person                punctuation).
                                                    Wrong record
                                                    found (based
                                                    on      phone
                                                    number).



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 37 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID013    The user does        The definition in     User     could 2   1   2   Sex and Current
          not understand       the rollover is       potentially                Gender         CUI
          the    difference    ambiguous             change the                 design guidance
          between       Sex    OR                    patients                   is consistent with
          and Gender and       The user does         information                business rules for
          changes        the   not know that         Patient may                display of sex and
          patients record      there     is      a   receive                    gender including
                               rollover              incorrect care             definitions.
                               capability on the     or miss out
                               labels                on care (e.g.
                               OR                    Screening - if
                               When a roll-over      based       on
                               note             is   Gender
                               presented could       value)
                               the           user
                               misattribute the
                               definition to an
                               adjacent field, if
                               the        screen
                               (fields)         is
                               congested and
                               similar       data
                               items are being
                               presented
                               (which is likely)?

PID014    The         user     Numeric value Inappropriate 2            1   2   Sex and Current
          misinterprets the    used          or   delayed                       Gender         CUI
          patient's sex /      Abbreviations care                               design guidance
          gender               are unclear                                      is consistent with
                                                                                business rules for
                                                                                display of sex and
                                                                                gender including
                                                                                definitions.
PID015    The user is not      The 0 is missing Delay in care       2   1   2   New input control
          aware that part      as the country                                   only       accepts
          of the telephone     code            is                               country code for
          area code is         displayed at the                                 international
          missing              start   of    the                                numbers.
                               display e.g.                                     Mitigated       by
                               +44        (1234)                                design.
                               567890.

PID016    The user dials       The         user Delay in care      2    1   2   Mobile telephone
          the        wrong     misinterprets                                    numbers are out
          number      when     the brackets as                                  of    scope    for
          trying to call the   optional   digits                                design guidance
          patients mobile      and     excludes                                 AND       brackets
                               them.                                            have         been
                                                                                removed.
                                                                                Mitigated      by
                                                                                design.



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                 Page 38 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID017    The user mis- They read the Small delay                  2   1   2    Mitigated       by
          dials       the brackets as in        care,                           design - brackets
          patients number numbers     frustration.                              now       removed
                                                                                from        phone
                                                                                number in Patient
                                                                                Banner         and
                                                                                Telephone
                                                                                Number Display
                                                                                and          Input
                                                                                guidance.

PID020    Suffix is defined for input but definition for                        Guidance
          displaying suffix is unclear - "In most cases, the                    updated        with
          suffix is not needed". "Some suffixes however are                     additional
          important."                                                           wording to the
                                                                                paragraph        to
                                                                                make     definition
                                                                                clearer.     Issue
                                                                                closed.

PID021    The name input dialogues state that names WILL                        References      to
          be recorded in the case the user enters them, but                     'recorded'
          be displayed as per the display rules. What does                      removed.      Data
          'recorded' mean?      These are not mandatory                         storage is also
          requirements stated in the guidance sections.                         Out of Scope.
                                                                                Issue closed.

PID024    Why are brackets used for telephone numbers                           Brackets      have
          when this format is not generally used?                               now           been
                                                                                removed       from
                                                                                guidance.
                                                                                Mitigated.




PID026    Some display rules list specific area codes in                        Text added to
          spacing requirements - telephone numbers are                          guidance
          subject to change by regulators and this does not                     document      in
          appear to have been given consideration in the                        recognition that
          document.                                                             codes        will
                                                                                change.
                                                                                Mitigated.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 39 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID027    There are no references to the definition of address                  The            only
          in use in other NHS, CFH or SPINE systems. The                        definitions      to
          Patient Name Input and Display document                               elements of the
          references these in detail.                                           address input are
                                                                                contained        at
                                                                                2.2.5.4 to 2.2.5.6.
                                                                                The best way to
                                                                                respond to this
                                                                                point is to collate
                                                                                references into an
                                                                                intro       section
                                                                                which mirrors the
                                                                                presentation      in
                                                                                the Patient Name
                                                                                guidance.
                                                                                Guidance
                                                                                document
                                                                                updated as such.
                                                                                Issue closed.

PID029    Document provides no guidance, just states that                       Guidance       has
          precise lengths can only be given for postcode and                    been updated to
          county. Why? NHS Data Dictionary lengths for                          refer out to the
          unstructured address is 175 characters and for                        NHS           Data
          structured address is 35 chars per line.                              Dictionary, as per
                                                                                advise from the
                                                                                NHS CFH PDS
                                                                                team.        Issue
                                                                                closed.

PID031    Out of scope states that the following are out of                     Guidance
          scope: multi language applications; display styles;                   document
          other patient identification numbers; bar code                        updated. These
          representation; reduced size form factors. These                      items are still out
          items should all be in scope in a guidance                            of          scope,
          document.                                                             however,          a
                                                                                qualifying
                                                                                reference       has
                                                                                been included in
                                                                                this and all other
                                                                                design     guides.
                                                                                Issue closed.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 40 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID034    There are observations made for the use of screen                     As per bottom
          readers but no guidance is given.                                     paragraph 2.1.4.2
                                                                                screen      reader
                                                                                audibility patterns
                                                                                vary - therefore
                                                                                any guidance can
                                                                                only relate to the
                                                                                number
                                                                                groupings which
                                                                                as per para 2
                                                                                prevent       large
                                                                                numbers      being
                                                                                read           out?
                                                                                Wording slightly
                                                                                altered           in
                                                                                guidance listed at
                                                                                2.1.2 to include
                                                                                this       number
                                                                                grouping
                                                                                reference.
                                                                                Mitigated.

PID035    The input fields are recommended to contain                           NID018 suggests
          examples. How will this work when editing existing                    that a prompt will
          entries when not all fields have previously been                      be       contained
          completed? Example data may be confused with                          within a default
          actual values.                                                        field. But there
                                                                                were no guidance
                                                                                points relating to
                                                                                the strength of
                                                                                the example text.
                                                                                Two       guidance
                                                                                points have now
                                                                                been added at
                                                                                section 2.1.1 to
                                                                                mitigate        this.
                                                                                This has also
                                                                                been       included
                                                                                within guidance
                                                                                points in each
                                                                                section.
                                                                                Mitigated.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 41 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID036    The presentation of the 'other' option should be in                   See section 2.2.1
          line and consolidated with existing use of this                       in guidance. This
          option.                                                               relates to the
                                                                                parentheses
                                                                                around (Other).
                                                                                This has now
                                                                                been     removed.
                                                                                Guidance     point
                                                                                NID003      states
                                                                                that    the    title
                                                                                should       have
                                                                                parentheses
                                                                                around            to
                                                                                separate. Use of
                                                                                parentheses
                                                                                around just one
                                                                                option within title
                                                                                is      confusing.
                                                                                Mitigated.

PID037    Input box examples could extend to direction of the                   See section 2.2.2
          use of UPPER CASE where field input sections are                      which now deals
          more self explanatory.                                                with          this
                                                                                adequately.     At
                                                                                most perhaps one
                                                                                more        usage
                                                                                example re input
                                                                                eg Winstanley or
                                                                                refinement to the
                                                                                wording     below
                                                                                figure 11 "When
                                                                                the User moves
                                                                                to the next input
                                                                                cell the Control
                                                                                Displays Family
                                                                                Name text in
                                                                                Uppercase".
                                                                                Mitigated.

PID038    Examples of correct usage for extended character                      Agreed    -   the
a         lengths should be more live like to avoid                             examples given
          misinterpretation.                                                    should be actual
                                                                                examples.
                                                                                Guidance
                                                                                updated.    Issue
                                                                                closed.

PID039    Use of desired order of radio buttons is shown but                    Mitigated       via
          there is no reference to ensure that the tab order of                 existing Guidance
          the buttons is adhered to if a keyboard is being                      Point CGS-0022 -
          used instead of a mouse.                                              which is related to
                                                                                'tabbing'.



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 42 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID038    Example use of telephone types does not use                           Addressed with
          brackets around area code.                                            consistency
                                                                                check. Mitigated.

PID039    The recommended display rules use spaces as                           Addressed with
          separator values for area codes, not brackets as                      consistency
          stated as mandatory in other sections of the                          check. Mitigated.
          document.


PID040    Appendix A lists display rules that would                             Appendix A has
          immediately fail if used with PDS data retrieved                      been reworded to
          through TMS messaging.                                                reflect storage as
                                                                                being     out   of
                                                                                scope.

PID041    MIM telephone format includes telephone type, ie.                     Guidance
          tel or fax. This would fail provided validation steps.                updated          to
          See example below from MIM: <!-- To indicate a                        identify fax as out
          home           telephone           number           ->                of scope.
          <telecomuse="HP"value="tel:01392251289"/>


PID042    MIM address lengths are defined as NHS Data                           Guidance       has
          Dictionary lengths for unstructured address at 175                    been updated to
          characters and for structured address at 35 chars                     refer out to the
          per line.                                                             NHS          Data
                                                                                Dictionary, as per
                                                                                advise from the
                                                                                NHS CFH PDS
                                                                                team. Mitigated.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                  Page 43 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

PID043    What if the Patient Name Input and 3              1      3   Ensure the Patient Name Input
          Display CUI Design Guide uses the                            and Display CUI Design Guide
          labels terms "Given Name" and                                includes a review of existing
          "Family Name", whereas the NPSA                              data, system and practice
          uses the terms "First Name" and                              standards (including the NPSA
          "Last Name" in their Safer Patient                           SPN) and the name labels
          Identifiers SPN?                                             terms      used    for   each.
                                                                       However, outline that for the
          Caused by the different purpose,                             purposes of the design guide,
          scope and end user for the two                               the terms Given Name and
          standards (CUI and NPSA), different                          Family Name will be used
          research results. Some potential for                         throughout and they are
          confusion around the meaning of the                          directly synonymous with First
          terms - does Family Name equate to                           Name and Last Name or
          First or Last Name, for example?                             Forename and Surname. CUI
                                                                       Design Guide end users are
          Could cause healthcare professional                          healthcare system developers
          confusion when accessing records of                          who will need to map data
          those patients with non conventional                         standards to display standards
          names. There is current no standard                          (both of which use Given
          in the NHS for the terming of name                           Name and Family Name) and
          labels, either in systems, data                              therefore CUI believe this is
          standards, forms, etc. Despite the                           the safer and more appropriate
          absence of standard, there are no                            approach.         The    terms
          known patient safety incidents due to                        themselves however will not be
          the different terms (first name, given                       made mandatory in the CUI
          name, forename and last name,                                Design Guide. Tooltips which
          family name, surname).                                       offer synonyms are also
                                                                       recommended.

                                                                       Risk transferred to healthcare
                                                                       IT developers.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                     Page 44 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                       CUI CAPS – Demographics, Patient Banner and Date & Time
                               Clinical Safety Case and Closure Report

      8.3.        Date and Time Display and Input


No.               Hazard              Cause(s)          Consequence(s)        Risk        Recommended
                 Summary                                                     Grading       Mitigations
                                                                             C L R
DT003        User enters          User                  Incorrect data       2 1 2        Control does
             inappropriate        misunderstands        entry                             validation that
             format entry         the meaning of                                          checks for
                                  the input mask.                                         inappropriate
                                                                                          entry. Mitigated.

DT004        User doesn't         Not clear what        Frustration to       2 1     2    Instructional text
             understand           arrow keys            user                              modified.
             "arrow keys" in      mean - could be       Inefficiency                      Mitigated.
             the pop-up           keyboard arrow
                                  keys or the user
                                  may be
                                  expecting to see
                                  spinner arrows.
                                  Or should the
                                  use they up &
                                  down or left &
                                  right keyboard
                                  arrow keys.

DT005        User doesn't see     Date pop-up           Time is not          2 1     2    Instructional text
             that the time is     covers Time           entered or default                reduced in size.
             also required.       input box.            time is entered.                  Mitigated.

DT006        The user thinks      There is no           User doesn't         2 1     2    Instructional text
             that the pop-up is   indication to         understand what                   reduced in size.
             related to a         show that the         the pop-up                        Mitigated.
             different field      pop-up is             relates to.
                                  related to a field,
                                  except that the
                                  field has focus.

DT007        The user doesn't     Term is               User doesn't         2 1     2    Instructional text
             understand what      ambiguous /           understand the                    modified.
             is meant by a        User is               term                              Mitigated.
             "spinner" in the     unfamiliar with
             time pop-up.         IT terminology.

DT008        User assumes         Standard              User frustration     1   2   2    This is a risk
             spinner behaviour    Windows               Inefficiency.                     mitigated by
             follows drop-        component                                               training. This is
             down behaviour.      behaviour.                                              standard
             Drop-down                                                                    Windows
             increases with                                                               behaviour.
             down, where as
             spinner requires
             the up arrow.

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                         Page 45 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT009     User assumes           Default time is     User frustration -   2 2   4    This is a Live
          that the default       not displayed in    if aware                        Risk (Date and
          time is "now" and      the time in the     Wrong date                      Time controls are
          enters -10min,         time field -        entered (if user                separate),
          but default may        default is not      not checking).                  however, control
          be 00:00, which        "now" and the                                       and, therefore,
          can result in a        arithmetic works                                    mitigation
          date change.           from default                                        including training
                                 time.                                               lies with the
                                                                                     implementing
                                                                                     Suppliers and
                                                                                     ISVs. Risk to be
                                                                                     transferred.

DT010     User assumes           System does         Wrong date           2 2   4    This is a Live
          date has changed       not                 entered.                        Risk (Date and
          when they enter -      automatically                                       Time controls are
          20min (minus           recalculate the                                     separate),
          20min) at 00:10        date.                                               however, control
                                                                                     and, therefore,
                                                                                     mitigation
                                                                                     including training
                                                                                     lies with the
                                                                                     implementing
                                                                                     Suppliers and
                                                                                     ISVs. Risk to be
                                                                                     transferred.

DT011     User assumes           System              Wrong date           2 2   4    This is a Live
          date has not           automatically       entered.                        Risk (Date and
          changed when           recalculates the                                    Time controls are
          they enter -20min      date.                                               separate),
          (minus 20min) at                                                           however, control
          00:10.                                                                     and, therefore,
                                                                                     mitigation
                                                                                     including training
                                                                                     lies with the
                                                                                     implementing
                                                                                     Suppliers and
                                                                                     ISVs. Risk to be
                                                                                     transferred.

DT013     User doesn't           User enters         Wrong data           2 2   4    The control does
          notice that control    invalid             entered.                        not exhibit this
          reverts to original    characters into                                     behaviour, it
          content when           the control.                                        displays an error
          they enter invalid                                                         message and
          characters.                                                                sidesteps this.
                                                                                     Mitigated.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 46 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT014     Time control does      User enters         {Behaviour}.     2 2       4    This is a Live
          not behave as          more than 24h                                       Risk (Date and
          user expects           in the time                                         Time controls are
                                 control or a                                        separate),
                                 period that rolls                                   however, control
                                 over to the                                         and, therefore,
                                 next/previous                                       mitigation
                                 day                                                 including training
                                 OR                                                  lies with the
                                 Asymmetric                                          implementing
                                 linking of boxes                                    Suppliers and
                                 - Date should                                       ISVs. Risk to be
                                 not affect Time,                                    transferred.
                                 but Time should
                                 affect Date.

DT015     User enters the        User enters +2d     {Behaviour}      2 2       4    Mitigated: 'd'
          wrong unit into        in the time                                         invalid within
          the time field.        control rather                                      time control due
                                 than the date                                       to confusion with
                                 control.                                            date control. New
                                                                                     GP added D&T
                                                                                     Input at 2.3 +
                                                                                     corresponding
                                                                                     new GP at 2.1.

DT016     Date and time          User enters an      Wrong data       2 2       4    This is a Live
          input boxes are        arithmetic value    entered.                        Risk (Date and
          not linked and         in the time                                         Time controls are
          user assumes           control and                                         separate),
          that they are          expects the date                                    however, control
                                 control to be                                       and, therefore,
                                 updated if the                                      mitigation
                                 time falls onto                                     including training
                                 the next or                                         lies with the
                                 previous day                                        implementing
                                 The date and                                        Suppliers and
                                 time control are                                    ISVs. Risk to be
                                 independent                                         transferred.
                                 and user
                                 expects date to
                                 change when
                                 they increment
                                 time using the
                                 spin controls.
                                 Visa versa.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 47 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT017     Date and time          User enters an   Wrong data               2 2   4    This is a Live
          input boxes are        arithmetic value entered.                            Risk (Date and
          linked and user        in the time                                          Time controls are
          assumes that           control and does                                     separate),
          they are not           not expect the                                       however, control
                                 date control to                                      and, therefore,
                                 be updated if                                        mitigation
                                 the time falls                                       including training
                                 onto the next or                                     lies with the
                                 previous day.                                        implementing
                                                                                      Suppliers and
                                                                                      ISVs. Risk to be
                                                                                      transferred.

DT020     User thinks that       System allows       Duration may be       2 1   2    Mitigated. See
          the system has         for daylight        calculated in error              Date & Time
          added/removed          saving.             due to daylight                  Input - section
          an hour in error                           savings time –                   1.3 and D+TC-
          and manually                               worst case                       0048 and 0049.
          changes as they                            scenario.                        Two guidance
          are unaware of                                                              points have been
          daylight savings                                                            added - one to
          time (to an                                                                 handle manual
          incorrect time).                                                            time alteration,
                                                                                      the second to
                                                                                      handle time
                                                                                      duration input
                                                                                      spanning GMT
                                                                                      and BST time
                                                                                      change.

DT021     User                   System allows       Duration may be       2 1   1    Mitigated. See
          compensates for        for daylight        calculated in error              Date & Time
          daylight savings       saving.             due to daylight                  Input - section
          prior to the                               savings time                     1.3 and D+TC-
          system                                     May result in                    0048 and 0049.
          compensation                               incorrect                        Two guidance
          (resulting in                              medication.                      points have been
          compensation                                                                added - one to
          twice), i.e. They                                                           handle manual
          type in +4h                                                                 time alteration,
          (instead of +3h -                                                           the second to
          allowing for                                                                handle time
          addition of an                                                              duration input
          hour) at 23:00 .                                                            spanning GMT
          And converse for                                                            and BST time
          BST to GMT.                                                                 change.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                     Page 48 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT022     User does not          2 x 2 o'clock       May result in         2 1   1    Guidance
          know whether the       with going back     incorrect                        document
          time is BST or         an hour from        medication                       changed to
          GMT during that        BST to GMT. (1-                                      address this
          period                 2am is repeated                                      hazard. See
                                 for that                                             Date & Time
                                 particular day).                                     Input - section
                                                                                      1.3 and D+TC-
                                                                                      0048 and 0049.
                                                                                      Mitigated.

DT023     User enters "non-      User changes        May result in         3 1   3    Guidance
          existent" time,        time to be 02:30    incorrect                        document
          e.g. 2:30 on the       and then            medication                       changed to
          day that GMT           changes the                                          address this
          becomes BST            date to the day                                      hazard. See
                                 that daylight                                        Date & Time
                                 savings occurs.                                      Input - section
                                 (Moving from                                         1.3 and D+TC-
                                 GMT to BST).                                         0048 and 0049.
                                                                                      Mitigated.

DT024     The time periods       User does not       Confusion over        2 1   2    Time Periods
          mean different         know the time       appointment                      removed.
          things to different    periods of          organisation                     Mitigated.
          people and             Morning,
          different systems.     Afternoon,
                                 Evening and
                                 Night.

DT025     The user enters a      User does not       Inefficiency          2 1   2    Time Periods
          time period when       know that they                                       removed.
          an exact time is       can enter a                                          Mitigated.
          required               numeric time
                                 once they are
                                 on the
                                 morning/afterno
                                 on/etc cycle.

DT026     User enters an         The ability to      Inefficiency          2 1   2    Time Periods
          exact time when        enter time          Patient frustration              removed.
          a time period is       periods is                                           Mitigated.
          required (for          hidden
          multiple patients).

DT027     The user types         User does not       Inefficiency          2 1   2    Time Periods
          "e" for the start of   know that they                                       removed.
          "eight" and auto       can enter a                                          Mitigated.
          completes to           numeric time
          evening                once they are
                                 on the
                                 morning/afterno
                                 on/etc cycle.


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                     Page 49 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT028     Time periods are       Time periods        Wrong time            2 1   2    Time Periods
          inconsistently         are not defined     period used,                     removed.
          interpreted            on time entry       confusion                        Mitigated.
                                 box (pop-up box
                                 needed
                                 informing the
                                 user).

DT028     The user does          The user can        Potential, delay in   2 1   2    Mitigated -
          not realise the        not see the day     follow up                        Values for
          significance of a      of the week.        Delay in care                    display of days of
          date                                       Inefficiency.                    week now
          (For example,                                                               standardised.
          discharge date
          would be unlikely
          to occur on a
          weekend - if it
          has, it may be
          due to a self-
          discharge or the
          day may affect
          when the follow
          up appointment is
          scheduled).

DT029     Difference             Does 1m = 4                               2 1   2    Behaviour is
          between 4w and         weeks or                                             "+nm" simply
          1m.                    calendar month.                                      jumps to today's
                                 Outlook does                                         date in
                                 not allow                                            appropriate
                                 arithmetic in                                        month, i.e. +1m
                                 months.                                              from today would
                                                                                      land on
                                                                                      19/3/2009.
                                                                                      (There is an
                                                                                      exception, ie,
                                                                                      what happens
                                                                                      when the date is
                                                                                      Jan 30th and you
                                                                                      +1m). Week
                                                                                      arithmetic
                                                                                      behaves as you'd
                                                                                      expect, i.e. it
                                                                                      jumps whole
                                                                                      weeks. Mitigation
                                                                                      is familiarity and
                                                                                      training. ISV
                                                                                      could also add
                                                                                      supporting
                                                                                      text/tooltips etc
                                                                                      on screen if
                                                                                      necessary. Risk
                                                                                      transferred.


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                     Page 50 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT029     The user               Bold of 9 looks        Numbers are         2 1     2    Recognised,
          misinterprets the      like an 8              transposed                       tolerable risk.
          date.                  OR                     Missed                           Readability
                                 They misread           appointment                      should conform
                                 the leading 0 /        Delay in care.                   to accessibility
                                 find it difficult to                                    level.
                                 read.

DT030     The patient is         The day of the         Patient may not     2 1     2    Mitigated via
          confused about         week is not            turn up                          D+Ta-0016:
          the date of their      included on            Delay in care                    When displaying
          appointment on         patient                                                 the day of the
          the letter.            correspondence                                          week, use one of
                                 .                                                       the following
                                                                                         abbreviations:
                                                                                         Mon, Tue, Wed,
                                                                                         Thu, Fri, Sat and
                                                                                         Sun.

DT032     The user uses the      The control            Incorrect           2   1   2    To be mitigated
          scroll wheel to        allows operation       time/date input                  via training.
          scroll the page        through the            Incorrect patient                However, this is
          but actually           scroll wheel           record                           a live risk.
          scrolls the time       AND                    Inappropriate
          using the spinner      It isn't clear that    care.
          controls, entering     the focus is on
          an incorrect time.     the time control.

DT034     The user does          Coding 1d 3hrs         Inappropriate       2 1     2    Duration units
          not understand         4min is not            care.                            standardised and
          and misinterprets      intuitive to the                                        rationale
          what is written in     user.                                                   clarified.
          the Duration box.                                                              Mitigated.

DT035     The user               Scaling is       Inappropriate             2 1     2    Duration units
          misreads the           inconsistent on  care.                                  standardised and
          code in the            the screen, time                                        rationale
          Duration box           includes                                                clarified.
          (glances and           seconds                                                 Mitigated.
          doesn't read the       OR
          units)                 They do not
                                 read the units
                                 and expect to
                                 see hrs, min and
                                 seconds
                                 (May be better
                                 to supplement
                                 display with a
                                 graphical
                                 representation?)
                                 .




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                        Page 51 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT036     The user can not       The duration is     Inappropriate    2 1       2    Duration units
          see the full           so long that it     care.                           now use one
          duration by            exceeds the text                                    character fewer.
          glancing at the        box, for                                            Mitigated.
          box and                example, 5y 6m
          misinterprets it.      10d 12hrs
                                 36min 10sec.

DT037     The user wants to      The time                             1   1     1    Guidance states
          enter a short          duration is                                         you can enter
          duration of time.      under a minute.                                     seconds as
                                                                                     single digits.
                                                                                     Mitigated.

DT038     The user enters        The system        Inappropriate      2   1     2    The guidance
          or edits the           does not          care.                             covers this event
          duration, which        indicate whether                                    as this is
          does not match         the changing the                                    dependant on
          the start and          duration will                                       context of
          finish dates and       update the end                                      implementation.
          times, and             time or the start                                   Mitigated.
          expects the start      time and
          time to be             changes the
          updated, (or the       wrong one.
          finish date).

DT040     The user enters        The system          Inappropriate    2   1     2    Guidance does
          26h in the             does not update     care.                           not prohibit this
          duration box           the date                                            type of
          expecting the          OR                                                  implementation
          start date to          The system                                          as ISV discretion.
          update (and it         does not                                            They are
          doesn't).              indicate whether                                    separate controls
                                 the duration box                                    and the ISV can
                                 will update the                                     manage their
                                 end date or the                                     interaction.
                                 start date.                                         Risk transferred
                                                                                     to ISVs.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 52 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT041     The user enters a      The system does /      Inappropriate     2   2   4    Live risk – to
          duration that          does not update        care.                          transfer to ISV‟s.
          knocks the time        the date               Inaccurate                     Date and Time
          over midnight and      AND                    record.                        controls must be
          expects the date       does not clearly                                      linked where
          to be updated          indicate this.                                        appropriate.
          (and visa versa).

DT042     The user enters        The user enters a      Inaccurate        2 1     2    Time display
          an approximate         duration with one      record                         guidance has an
          duration which         of the approximate     Inappropriate                  add in that
          they intended to       boxes on the time      diagnosis (i.e.                approx can be
          be approximate,        control checked        Pregnancy).                    applied to
          which is recorded      OR                                                    duration if start
          with undue             The user                                              date or end date
          accuracy               approximates one                                      is approx.
                                 time and not the                                      Mitigated.
                                 other and
                                 calculates the
                                 duration
                                 OR
                                 The user enters 1-
                                 2d in the duration
                                 box (see below -
                                 fractions need
                                 investigation)
                                 AND
                                 The system does
                                 not indicate that
                                 the duration is
                                 calculated/ entered
                                 as an approximate
                                 period.

DT043     Fractions and          1/2 could be half, 1                                  Out of scope for
          clinician              to 2, 1 or 2,                                         the work we
          shorthand              1/7 could be 1 day                                    undertook. ISV's
                                 1/52 could be 1                                       can implement
                                 week                                                  this behaviour if
                                 1/12 = 1 month                                        required in an
                                 1/24 = 1 hour                                         implementation.
                                 24/7 = 24hrs 7                                        The control does
                                 days a week                                           not interpret this
                                 8/40 (pregnancy).                                     kind of shorthand
                                                                                       in the way that is
                                                                                       indicated in
                                                                                       column L. It was
                                                                                       out of scope for
                                                                                       the work. It's all
                                                                                       valid stuff but, at
                                                                                       the moment,1/52
                                                                                       means January
                                                                                       1952 etc. Issue
                                                                                       transferred.

DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                      Page 53 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT044     Decimal points         1.5 days (one and                                   Out of scope for
          and punctuation.       a half days) etc                                    the work we
                                 Colons.                                             undertook based
                                                                                     on requirements.
                                                                                     ISV's can
                                                                                     implement this
                                                                                     behaviour if
                                                                                     required in an
                                                                                     implementation.
                                                                                     Risk transferred.

DT045     The user selects       Pop-up fatigue         Entry of wrong    2 1   2    Disambiguation
          the default option     (PuF)                  date                         dialogue now
          when the                                      Incorrect                    only appears for
          disambiguation                                patient record               ambiguous
          pop-up is                                     Inappropriate                dates. Mitigated.
          displayed (either                             care.
          with mouse or
          keyboard) rather
          than the correct
          date.

DT048     Disambiguation of                             A user might      2 1   2    This is a known
          two-digit years?                              enter a DOB                  risk, but
                                                        using 2 digit                tolerable.
                                                        year format it               Likelihood of a
                                                        is considered                clinician using a
                                                        unlikely that a              2 digit format as
                                                        date range                   per the example
                                                        would be                     is unlikely.
                                                        entered in 2                 Although
                                                        digit format.                accepted a user
                                                                                     might enter a dob
                                                                                     using 2 digit year
                                                                                     format it is
                                                                                     considered
                                                                                     unlikely that a
                                                                                     date range would
                                                                                     be entered in 2
                                                                                     digit format.

DT049     "Enter 24 hour                                                             Mitigated by the
          clock format"                                                              presence of a 24
          label next to the                                                          hr clock tooltip
          time box.                                                                  (see D+Tc001)
                                                                                     and an additional
                                                                                     guidance point
                                                                                     regarding
                                                                                     indication of 24
                                                                                     hour clock use
                                                                                     (D+Tc001. ).




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 54 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT050     The user enters        The system              Entry of wrong   2 1   2    Control now uses
          the time using the     displays 05:00          time                        24hour clock
          12hr clock format,     instead of 17:00 as     Incorrect                   only. Mitigated.
          into what they         it is a 24hr clock.     patient record
          think is a 12hr                                Inappropriate
          clock (types 5:00                              care.
          meaning 5pm)
          but it is actually
          24hr clock.
          Meaning their
          time is mis-
          recorded.

DT051     The user               The system only         Inappropriate    2 1   2    Control now uses
          misreads or            displays 24hr clock     care                        24hour clock
          miscalculates a        - which can be                                      only. Mitigated.
          time displayed in      misinterpreted
          24hr format (i.e.      (Would like to see
          Reads 15:00            24hr followed by
          hours and thinks       12hr clock).
          its 5pm, or sees
          16:00 and
          deducts 12hrs
          and gets 6am
          instead of 4am).

DT052     The user               It is quicker for the   Inaccurate                  We provide the
          inappropriately        user not to tick it     patient record              ability to enter
          avoids checking        OR                      (times look to              approx. The use
          Approx.                They want to avoid      be exact)                   of this is down to
                                 the "stigma" of         Inappropriate               the culture of
                                 admitting to            drug                        local work
                                 approx/late times       administration              practice and
                                 (e.g. administration                                governance. This
                                 of drugs)                                           is stated in
                                 OR                                                  guidance.
                                 The system doesn't                                  Mitigated.
                                 make the definition
                                 of Approx clear OR
                                 The user does not
                                 understand the
                                 term
                                 OR
                                 The user does not
                                 know how and
                                 when to use it.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                    Page 55 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT053     The user               The system doesn't       Inaccurate        3   1   3    This will need to
          inappropriately        make the definition      patient record                 be dealt with by
          checks Approx.         of Approx clear          Inappropriate                  implementing
                                 OR                       drug                           ISVs and
                                 The user does not        administration.                training.
                                 understand the                                          Transferred risk.
                                 term
                                 OR
                                 The user does not
                                 know how and
                                 when to use it
                                 OR
                                 The user
                                 generalises on
                                 time. They use the
                                 Approx box all the
                                 time, so enter a
                                 very general time
                                 (i.e. 3:30 and then
                                 ticking approx).

DT054     What if the user       Because          Date    Misinterpretati 3 1       3    Known, tolerable
          misinterprets the      Display       Design     on of dates -                  live risk.
          month July for         Guidance                 could lead to
          June (and vice         mandates months          mis-
          versa)        and      are displayed Jan,       management,
          January for June       Jun and Jul, ie. the     missed
          (and vice versa)?      first three letters of   appointments,
                                 the month - and          small potential
                                 could              be    for
                                 misinterpreted as        mistreatment.
                                 they are similar
                                 looking to each
                                 other.

DT055     The      guidance                                                              Included in out of
          should        also                                                             scope. Also
          reference     any                                                              mitigated via
          areas where the                                                                section - 1.2.2.
          use of default                                                                 (Date Display) - "
          dates may be                                                                   Default dates -
          input or assumed                                                               This guidance
          within systems as                                                              only relates to
          being    out    of                                                             the input of data
          scope.                                                                         and not to any
                                                                                         default dates
                                                                                         assumed by
                                                                                         developers."




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                        Page 56 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT056     The      Design                                                        Mitigated -
          Guide entry -                                                          document
          Time Display -                                                         updated and
          document does                                                          restructured to
          not define its                                                         make scope
          scope.                                                                 clear. (Time
                                                                                 Display - section
                                                                                 1.2.1).

DT057     There      is    no     Display          of                            Out of scope.
          guidance for the       milliseconds     has                            The inclusion of
          display          of    not been dealt with                             additional
          milliseconds for       as there have been                              guidance around
          example from an        no user scenarios                               milliseconds will
          audit     log      -   identified where the                            require additional
          databases      and     clinician       user                            research into
          messaging              required time to                                audit
          systems       often    this      level   of                            presentation.
          hold time values       granularity.                                    Would consider
          down             to                                                    as part of future
          millisecond level.                                                     work (via
                                                                                 maintenance and
                                                                                 update).

DT058     The guidance of                                                        Mitigated via
          time duration for                                                      changes made to
          days,       weeks,                                                     guidance as
          months and years                                                       follows: Time
          seems                                                                  Display section
          incomplete     and                                                     2.3.2 and Date
          there    are    no                                                     and Time Input
          examples                                                               section 2.5.2.
          showing definition
          of the year value.




DT060     Recommendation                                                         Change made to
          s for the use of                                                       D+TB-0018.
          whole    numbers                                                       Mitigated.
          should be 60
          minutes not 90,
          as the document
          shows 90 minutes
          being
          represented as 1
          hour    and   30
          minutes.


DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                Page 57 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                      CUI CAPS – Demographics, Patient Banner and Date & Time
                              Clinical Safety Case and Closure Report

DT061     The        display                                                     Currently out of
          requirements of                                                        scope. To be
          the days of the                                                        addressed as
          week are not                                                           part of
          specified in the                                                       maintenance and
          guidance sections                                                      update of the
          of the document                                                        design guide
          or in examples for                                                     once approved
          long date format                                                       as a standard.
          and whether the
          full name of the
          day could be
          used in the long
          date format.




DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                Page 58 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                CUI CAPS – Demographics, Patient Banner and Date & Time
                                        Clinical Safety Case and Closure Report


APPENDIX 1 – DEPARTMENT OF HEALTH INFORMATICS DIRECTORATE RISK MATRIX


At the time of conducting the PSA‟s, the following Risk Matrix was used, as per the CSMS at that
time. Therefore, risks initially graded comply with this scoring system.




                           Greater than 1 error per          Medium        High         High          High         High         High
                                                       7
                           day per HP                         SIL2         SIL3         SIL4          SIL4          „u‟          „u‟


                           An error between once a
                                                             Medium       Medium        High          High         High         High
                           week or once a month        6
                                                              SIL1         SIL2         SIL3          SIL4         SIL4          „u‟
                           per HP




         Likelihood (L)
                           An error between once a
                                                               Low        Medium      Medium          High         High         High
                           month or once a year        5
                                                                „a‟        SIL1        SIL2           SIL3         SIL4         SIL4
                           per HP


                           An error once a year to             Low          Low       Medium        Medium         High         High
                                                       4
                           once in 10 years per HP              „a‟          „a‟       SIL1          SIL2          SIL3         SIL4


                           An error once in 10 to
                                                               Low          Low         Low         Medium        Medium        High
                           once in 100 years per       3
                                                                „a‟          „a‟         „a‟         SIL1          SIL2         SIL3
                           HP (once in HP lifetime)

                           An error once in 100 to
                           once in 100 years per               Low          Low         Low           Low         Medium      Medium
                                                       2
                           HP (once in HP practice              „a‟          „a‟         „a‟           „a‟         SIL1        SIL2
                           lifetime)
                           An error less than once
                           in a 1000 years per HP              Low          Low         Low           Low           Low       Medium
                                                       1
                           (once nationally per year            „a‟          „a‟         „a‟           „a‟           „a‟       SIL1
                           across all HPs)
                                                                A            B            C             D            E            F
                                                           Negligible /     Low       Moderate       Severe       Major /     Catastro-
                                                            Very Low                                               Fatal        Phic

                                                           Minimal extra    Extra       Further     Permane                      >3
                                                            observation observati     treatment,    nt or long-   A patient   fatalities.
                                                           or very minor    on or       possible       term        fatality
                                                             treatment,     minor       surgical    harm to a                   > 10
                                                            and causes treatment,      interventi    patient.                 “Severe”
                                                           minimal harm      and           on,
                                                            to a patient.  causes     cancelled                                 > 100
                                                                           minimal    treatment,                              “Moderate
                                                                          harm to a         or                                    ”
                      Patient Safety Risk Matrix                           patient.   transfer to
                                                                                        another                                > 1,000
                                                                                      area, and                                 “Low”
                                                                                         which
                                                                                        causes                                 > 10,000
                                                                                         short-                               “negligible
                                                                                          term                                   /very
                                                                                      harm to a                                 minor”
                                                                                        patient.                                harm.


                                                                          Consequence (C)

Adapted from „Risk Matrix Guidance for Patient Safety Risk Assessments‟ by the NPSA
DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                                         Page 59 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
                                CUI CAPS – Demographics, Patient Banner and Date & Time
                                        Clinical Safety Case and Closure Report


However, in the time elapsed since the original PSA‟s, the following Risk Matrix has been
introduced to the CSMS and, as such, re-graded risks in the Hazard Logs comply with this
scoring system instead.



                                            5             10                 15                20                25
                Certain            5    (Moderate)   (Significant)         (High)            (High)            (High)



                                            4             8                 12                 16                20
                Likely             4    (Moderate)   (Significant)     (Significant)         (High)            (High)




   LIKELIHOOD
                                            3            6                  9                12                  15
                Moderate           3      (Low)      (Moderate)        (Significant)    (Significant)          (High)



                                            2            4                  6                8                 10
                Unlikely           2      (Low)      (Moderate)         (Moderate)      (Significant)     (Significant)



                                            1             2                   3              4                5
                Rare               1      (Low)         (Low)               (Low)        (Moderate)       (Moderate)


                                            1             2                  3                   4               5
 Department of Health
Informatics Directorate                   Minor      Moderate            Serious             Major            Critical


          RISK                                                  CONSEQUENCE
         MATRIX
                   Status                                     Hazard Rating
                   Open                                       Likelihood
                   Closed                                     Definition               Score
                   Transferred                                Rare                                        1
                                                              Unlikely                                    2
                   Hazard Rating                              Moderate                                    3
                   Consequence                                Likely                                      4
                   Definition            Score                Certain                                     5
                   Minor                                 1    Rating                   SIL
                   Moderate                              2    Low                      1-3
                   Serious                               3    Moderate                 4-6
                   Major                                 4    Significant              8 - 12
                   Critical                              5    High                     15 - 25



DHID – CUI – CAPS – Demographics, Patient Banner and Date & Time                                      Page 60 of 60
Clinical Safety Case and Closure Report
v4.0 – 16 Dec 2009
