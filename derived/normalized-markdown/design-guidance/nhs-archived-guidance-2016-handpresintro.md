# Introduction to handover presentation

## Provenance
- Source file: `raw/sources/design-guidance/nhs-archived-guidance-2016/handpresintro.pdf`
- Extracted text: `derived/extracted-text/design-guidance/nhs-archived-guidance-2016-handpresintro.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

NHS CUI Design Guide Workstream
Release 4 Introduction to Handover Summary

                                             Prepared for
                             NHS Connecting For Health
                                 Thursday, 1 March 2007
                                 Version 1.0.0.0 Baseline

                                             Prepared by
                              NHS CUI Programme Team
                    cuistakeholder.mailbox@hscic.gov.uk
                                             Contributors
                                             Igor Laketic

    Preface
    Documents replaced by this document
        Document Title                                                                                         Version
        None

    Documents to be read in conjunction with this document
        Document Title                                                                                         Version
        Release 4 Handover Requirements Spreadsheet                                                            1.0.0.0
        Release 4 Introduction to Handover                                                                     2.0.0.0

      Disclaimer: This document was prepared for NHS Connecting for Health which ceased to exist on 31 March 2013. It may contain references
      to organisations, projects and other initiatives which also no longer exist. If you have any questions relating to any such references, or to
      any other aspect of the content, please contact cuistakeholder.mailbox@hscic.gov.uk

     Copyright:
     You may re-use this information (excluding logos) free of charge in any format or medium, under the terms of the Open Government
     Licence. To view this licence, visit nationalarchives.gov.uk/doc/open-government-licence or email psi@nationalarchives.gsi.gov.uk.

Last modified on Thursday, 1 March 2007                 Copyright ©2013 Health and Social Care Information Centre

    About This Presentation
    • Who is it for?
             • UI designers and software developers of clinical applications
             • Evaluators of clinical applications

    • Purpose
             • To make the user interface of clinical systems consistent and safe
             • To guide the integration of recognised usability principles

    • What you need to know
             • These guidelines have been developed in conjunction with the Connecting
               For Health team
             • These guidelines should be read in conjunction with the Introduction to
               Handover document
             • These guidelines should be read in conjunction with the Handover
               Requirements spreadsheet

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 3

    Contents
             1. Scope
             2. Handover Definitions
             3. Background
             4. Types of Handover
             5. Users Involved in Handover
             6. Stages of Handover
             7. How the Requirements Spreadsheet is Organised
             8. Category Sets
             9. Next Steps

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 4

    1. Scope 1 of 2
     In Scope
            •       Shift handover                                •      Geographic transfer
                        • Task management across                           • From A&E to a ward
                            handover                                       • From ward to a ward
                        • Ongoing care on the wards                        • To and from the operating theatre
                        • Ongoing care in the community                    • To and from investigations
                        • Paramedic to A&E handover

            •       GP urgent transfer to acute setting
                        • To A&E
                        • To out of hours
                        • To ambulance

                                                      Back to Contents

Last modified on Thursday, 1 March 2007     Copyright ©2013 Health and Social Care Information Centre     Slide 5

    1. Scope 2 of 2
     Out of Scope
            •       GP referral to specialist (‘blind’ referral)
            •       Request for consultations or other service
            •       Discharge from hospital to community for follow up
            •       Referral to hospital (except urgent community to hospital transfer)
            •       Referrals
            •       Definition of datasets for handover
     Assumptions
            •       Existence of multidisciplinary electronic patient records (EPR)
            •       Easy and universal access to EPR (including mobile access)
            •       Effective IT support for all kinds of handover

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 6

    2. Handover Definitions

     • “The transfer of professional responsibility and accountability for some
       or all aspects of care for a patient, or group of patients, to another
       person or professional group on a temporary or permanent basis”
            (BMA Junior Doctors’ Committee and NPSA in Safe Handover: Safe Patients, 2004)

     • “The goal of shift handover is the accurate, reliable communication of
       task-relevant information across shift changes, thereby ensuring
       continuity of safe and effective working”
            (Lardner in Health and Safety Executive report, 1996)

     • For the purposes of the NHS CUI programme, handover definition
       includes the patient group, and the list of relevant tasks to facilitate a
       transfer of professional responsibility

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 7

    3. Background 1 of 3
    • The high level requirements were gathered from a number
      of visits across different locations and care areas.
    • There were 35 visits spanning across:
              • Primary Care (6)
              • Secondary Care (21)
              • Community Care (8)
    • The following groups of people were interviewed:
              • Doctors (17)
              • Nurses (13)
              • AHPs (6)
              • IT (11)
              • Other (5) (for example, surgical service manager)
                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 8

    3. Background 2 of 3
    Safety Critical
    • Handover is a common part of workflow in many industries, including
      healthcare.
    • In industries other than healthcare, it has been found that adverse
      events are more likely to occur a short time after shift handover has
      occurred.
    • Poor handover has been implicated as a contributing factor in several
      large scale disasters.
    • Historically, the handover in a clinical context has often been thought of
      as a process that occurs in Secondary Care at nursing shift change.
    • With the advent of the European Working Time Directive (EWTD) in
      2003, junior doctors now have an explicit need for shift handover, and
      the desire to investigate and support handover has increased.
    • Support for handovers of any kind in a clinical context is rare, isolated,
      experimental, and not integrated with a full electronic clinical
      management system.
                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 9

    3. Background 3 of 3
    Wider Use
    • Handover has been identified as performing other functions aside from
      transfer of information (for example, it is educational for those taking
      part)
    • Wears et al (2003) have identified handover as a point at which errors in
      a system may be spotted and corrected, as staff ‘take stock’ of the
      situation.
    • By summarising current information in the presence of other staff,
      handover can also be a point at which key decisions are made, and
      where a patient’s plan is formulated. Handover has also been seen to
      have a social function, particularly where team members handover
      together.
    • The NHS CUI work has focused primarily on how the information transfer
      aspect of handover could be supported by IT.
                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 10

    4. Types of Handover 1 of 3

       Handover Type Example                Example Instance
       Shift handover                       Ward nurse to ward nurse
                                            Day medical team to night on-call doctor
       Geographic transfer                  From A&E to ward
                                            From ward to ward
                                            Ward to theatre and back
                                            Ward to investigation and back
                                            GP to acute setting (A&E, out of hours and so on)
       Care transfer                        Paramedic to A&E
                                            Ward to theatre and back
                                            GP to acute setting (A&E, out of hours and so on)

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 11

    4. Types of Handover 2 of 3
    • Handovers can be categorised on many levels, with
      considerable overlap
    • The following list of handover categories is not exhaustive,
      neither are the categories mutually exclusive:
              • Number of patients involved: single patient / multiple patients
              • Level of handover detail: summary only / full detail
              • Roles involved: ward nurse, doctor, paramedic, district nurse,
                physiotherapist and so on

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 12

    4. Types of Handover 3 of 3
              • Handover within or between roles: within a role / between two
                roles / multidisciplinary
              • Care change: type of care changes / type of care stays the same
              • Scheduling: ad-hoc / planned
              • Synchronous: staff handing over synchronously / asynchronously
              • Face-to-face: staff handing over face-to-face / not face-to-face
              • Patient present: yes / no

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 13

    5. Users Involved in Handover 1 of 2
    • Patient
    • Giver of Handover
    • Receiver of Handover

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 14

    5. Users Involved in Handover 2 of 2
    Interaction Between Users
    • There are at least two users or two sets of users.
    • An example of where the giver and receiver can both be sets of
      individuals is ward nursing handovers where one team will go through
      their individual patients communally, and the other team will listen to
      and question the givers.
    • There may be users in handover who are involved on both sides of the
      handover. For example, in shift handover, other staff that are on a
      different shift pattern may be present, and therefore they have worked
      on the shift now leaving, and will also be working with the new shift.

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 15

    6. Stages of Handover
                                                        Giver of Handover                   Receiver of Handover

    • Conceptual stages:
                                          Preparation                 Negotiation              Re-engagement

                                                        Initiation                    Acceptance

    • More detailed break down:
                                            Before
                                          Preparation                   During
                                                                      Negotiation                   After
                                                                                               Re-engagement

                                                        Initiation                    Acceptance

    • View of the responsibility during the handover:
                                                        Giver of Handover                   Receiver of Handover

                                          Preparation                 Negotiation              Re-engagement

                                                        Initiation                    Acceptance

                                                                       Back to Contents

Last modified on Thursday, 1 March 2007                      Copyright ©2013 Health and Social Care Information Centre   Slide 16

    7. How the Requirements Spreadsheet is Organised                                                  1 of 2

    • Two worksheets: ‘Requirements’ and ‘Reqs (Requirements)
      Grouped By Category’
    • The default listing of the requirements (‘Requirements
      ‘worksheet) is not in any particular order
    • The Reference ID (RID) numbers signify the requirement’s
      unique identifier only. (Where a requirement has been
      removed from the Requirements Spreadsheet, the RID
      number has also been removed)
    • Each requirement has been worded in the present tense,
      and from a user’s point of view

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre       Slide 17

    7. How the Requirements Spreadsheet is Organised                                                  2 of 2

    • The Plain English version of a requirement has been
      provided where it is considered that the wording of the
      requirement may need to be clarified. This might be for
      those readers who are not familiar with handover, system
      design, or with the requirements themselves.
    • The Examples provided are either sourced from existing
      handover solutions, or represent one possible way that a
      future handover solution might work.
    • Requirements have been grouped into ‘categories’, within
      the ‘category sets’
    • The Source of each requirement is provided by referencing
      the literature, artefact, site visit, or analysis document
                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre       Slide 18

    8. Category Sets 1 of 3
    • The creation of the categories and the matching of
      requirements to the categories is subjective (and
      does not represent the only way of categorising the
      requirements)
    • The requirements are grouped into three main category
      sets:
              • Generic or Specific
              • Handover Stage
              • Handover Aspect

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 19

    8. Category Sets 2 of 3
    • Generic or Specific (Colour = Blue)
              • Generic Clinical Management Requirement
              • Generic Tasks/Diary Requirement
              • Specific Handover Requirement

    • Handover Stage (Colour = Pink)
              • Before Handover
              • Handover Negotiation
              • Handover Acceptance
              • After Handover (Re-engagement)

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 20

    8. Category Sets 3 of 3
    • Handover Aspect (Colour = Orange)
              • Dataset per Item
              • Example Dataset Part
              • Handshake
              • Task Management
              • Time Component
              • Item Lists
              • Good Practice
              • Encouragement/Discouragement
              • Updating: requirements involving the update of information
              • Patient Identification

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 21

    9. Next Steps 1 of 2
    • Offer the existing requirements and supporting
      documentation out for consultation
    • Liaise with other groups who are investigating handover
    • Investigate:
              • Other existing clinical handover solutions
              • The requirements ‘notionally’
              • All types of handover
              • Handover in other industries
              • Other aims of handover

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 22

    9. Next Steps 2 of 2
    • Research secondary purposes
              • Consider how the data generated by the system could be used for
                secondary purposes
              • Form the basis for commissioning
              • Support resource management
              • Facilitate audit
              • Gain a greater understanding of the IT environment that may exist
                to handover support in the near future
              • Evaluate existing clinical management systems
              • Think about how handover could be measured

                                                    Back to Contents

Last modified on Thursday, 1 March 2007   Copyright ©2013 Health and Social Care Information Centre   Slide 23
