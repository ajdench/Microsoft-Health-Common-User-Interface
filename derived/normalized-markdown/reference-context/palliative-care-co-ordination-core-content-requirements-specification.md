# Palliative care co-ordination: core content. Requirements Specification

## Provenance
- Source file: `raw/sources/references/secondary/nhs-follow-on/palliative-care-co-ordination-core-content-requirements-specification.pdf`
- Extracted text: `derived/extracted-text/reference-context/palliative-care-co-ordination-core-content-requirements-specification.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

National End of Life Care Intelligence
Network

Palliative care co-ordination: core content

Requirements specification
National Information Standard (SCCI1580)
Palliative care co-ordination: core content. Requirements Specification




About Public Health England
Public Health England exists to protect and improve the nation's health and wellbeing,
and reduce health inequalities. It does this through world-class science, knowledge and
intelligence, advocacy, partnerships and the delivery of specialist public health services.
PHE is an operationally autonomous executive agency of the Department of Health.

Public Health England
Wellington House
133-155 Waterloo Road
London SE1 8UG
Tel: 020 7654 8000
www.gov.uk/phe
Twitter: @PHE_uk
Facebook: www.facebook.com/PublicHealthEngland

About NHS Improving Quality (NHS IQ)
NHS Improving Quality works to improve health outcomes across England by providing
improvement and change expertise to help the acceleration of learning to enable whole
system change across England. It brings together knowledge, expertise and experience
from across the NHS, to help re-shape the healthcare improvement landscape.
enquiries@nhsiq.nhs.uk
www.nhsiq.nhs.uk

Prepared by: National End of Life Care Intelligence Network (NEoLCIN)
For queries relating to this document, please contact neolcin@phe.gov.uk

            © Crown copyright 2015
This publication is licensed under the terms of the Open Government Licence v3.0
except where otherwise stated. To view this licence, visit:
nationalarchives.gov.uk/doc/open-government-licence/version/3 or write to the
Information Policy Team, The National Archives, Kew, London TW9 4DU, or email:
psi@nationalarchives.gsi.gov.uk. Where we have identified any third party copyright
information you will need to obtain permission from the copyright holders concerned.
Any enquiries regarding this publication should be sent to us at
publications@phe.gov.uk

Published September 2015
PHE publications gateway number: 2015299




                                                         2
Palliative care co-ordination: core content. Requirements Specification




This information standard (SCCI1580) has been approved for publication by the Department of
Health under section 250 of the Health and Social Care Act 2012.

Assurance that this information standard meets the requirements of the Act and is appropriate
for the use specified in the specification document has been provided by the Standardisation
Committee for Care Information (SCCI), a sub-group of the National Information Board.

This information standard comprises the following documents:
    Requirements Specification
    Change Specification (this document)
    Implementation Guidance
    Guidance to Implementing Changes.

An Information Standards Notice (SCCI1580 Amd 11/2015) has been issued as a notification of
use and implementation timescales. Please read this alongside the documents for the
standard.

The controlled versions of these documents can be found on the HSCIC website.

Date of publication 18 September 2015.




                                                         3
Palliative care co-ordination: core content. Requirements Specification




The intelligence networks
Public Health England operates a number of intelligence networks, which work with
partners to develop world-class population health intelligence to help improve local,
national and international public health systems.

National End of Life Care Intelligence Network

The National End of Life Care Intelligence Network (NEoLCIN) aims to improve the
collection and analysis of information related to the quality, volume and costs of care
provided by the NHS, social services and the third sector to adults approaching the end of
life. This intelligence will help drive improvements in the quality and productivity of
services.

National Cancer Intelligence Network

The National Cancer Intelligence Network (NCIN) is a UK-wide initiative, working to drive
improvements in standards of cancer care and clinical outcomes by improving and using
the information collected about cancer patients for analysis, publication and research.

National Cardiovascular Intelligence Network

The National Cardiovascular Intelligence Network (NCVIN) analyses information and data
and turns it into meaningful timely health intelligence for commissioners, policy makers,
clinicians and health professionals to improve services and outcomes.

National Child and Maternal Health Intelligence Network

The National Child and Maternal Health Intelligence Network provides information and
intelligence to improve decision-making for high-quality, cost-effective services. Its work
supports policy makers, commissioners, managers, regulators, and other health
stakeholders working on children’s, young people’s and maternal health.

National Mental Health, Dementia and Neurology Intelligence Network

The National Mental Health Intelligence Networks (NMHDNIN) brings together the distinct
National Mental Health Intelligence Network, the Dementia Intelligence Network and the
Neurology Intelligence Network under a single programme. The Networks work in
partnership with key stakeholder organisations. The Networks seeks to put information and
intelligence into the hands of decision makers to improve mental health and wellbeing,
support the reduction of risk and improve the lives of people living with dementia and
improve neurology services.

                                                         4
Palliative care co-ordination: core content. Requirements Specification




Document information:

Title                   Previously: End of life care co-ordination: core content
                        Now: Palliative care co-ordination: core content
SCCI reference          SCCI 1580 Amd 11/2015
Sponsor                 Jane Allberry
SROs                    Dr Martin McShane NHS England
                        Professor John Newton, Public Health England
Author                  Katie Lindsey
                        Public Health England

Amendment History:

Version          Date              Amendment History
1.0              16.03.2012        Final approvals prior to publication
2.0              22.10.2012        Amendments following consultation with ISMS, NHS Data Model
                                   and Dictionary and developer for Community Information Data Set
3.0              05.12.2013        Final approval for publication
4.0              16.06.2015        Final approval for publication

Reviewer:
This document must be reviewed by the following:

Name                  Organisation                                        Version   Date
Jane Whittome         NHS Improving Quality                               V4.0      16.06.2015
Julia Verne           Public Health England                               V4.0      16.06.2015

Approvals:
This document must be approved by the following:

Name                  Organisation                                        Version   Date
Julia Verne           Public Health England                               V4.0      16.06.2015
Jane Whittome         NHS Improving Quality                               V4.0      16.06.2015




                                                         5
Palliative care co-ordination: core content. Requirements Specification




Glossary of terms

Term                           Definition
Acute hospital                 Acute hospitals provide a wide range of specialist care and treatment
                               for patients. Services offered in acute hospitals include:
                                 consultation with specialist clinicians (consultants, nurses,
                                   dieticians, physiotherapists and a wide range of other
                                   professionals)
                                 emergency treatment following accidents
                                 routine, complex and life-saving surgery
                                 specialist diagnostic, therapeutic and palliative procedures

                               www.nrls.npsa.nhs.uk/resources/healthcare-setting/acute-hospital

Advance care planning          A voluntary process of discussion and review to help an individual
(ACP)                          who has capacity to anticipate how their condition may affect them in
                               the future and, if they wish, set on record choices or decisions
                               relating to their care and treatment so that these can then be referred
                               to by their carers (whether professional or family carers) in the event
                               that they lose capacity to decide once their illness progresses.
                               Under the terms of the Mental Capacity Act 2005 formalised
                               outcomes of advance care planning might include one or more of the
                               following:
                                 advance statements to inform subsequent best interests decisions
                                 advance decisions to refuse treatment which are legally binding if
                                  valid and applicable to the circumstances at hand
                                 appointment of Lasting Powers of Attorney (‘health and welfare’
                                  and/or ‘property and affairs’)

                               Sources
                               Capacity, care planning and advance care planning in life limiting
                               illness. A Guide for Health and Social Care Staff NHS Improving
                               Quality (2014)
                               Mental Capacity Act 2005
                               Mental Capacity Act 2005 Code of Practice. Ministry of Justice 2007




                                                         6
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Advance decision to            An advance decision to refuse treatment (ADRT) is a decision to
refuse treatment               refuse a specific treatment made in advance by a person who has
(ADRT)                         capacity to do so. This decision only applies at a future time when
                               that person lacks capacity to consent to, or refuse, the specified
                               treatment. This is set out in section 24 of the Mental Capacity Act.
                               Specific rules apply to advance decisions to refuse life-sustaining
                               treatment.
                               An advance decision to refuse treatment:
                                 can be made only by someone over the age of 18 who has mental
                                  capacity
                                 is a decision relating to refusal of specific treatment and may also
                                  include specific circumstances
                                 can be verbal, but if an advance decision includes refusal of life
                                  sustaining treatment, it must be in writing, signed and witnessed
                                  and include the statement ‘even if life is at risk’
                                 will only come into effect if the individual loses capacity
                                 only comes into effect if the treatment and any circumstances are
                                  those specifically identified in the advance decision
                                 is legally binding if valid and applicable to the circumstances
                                 can be overridden by the Mental Health Act, but only for
                                  psychiatric treatment
                               Sources
                               Capacity, care planning and advance care planning in life limiting
                               illness. A Guide for Health and Social Care Staff (NHS Improving
                               Quality 2014)
                               Mental Capacity Act 2005
                               Mental Capacity Act 2005 Code of Practice. Ministry of Justice 2007.
                               Advance decisions to refuse treatment NEoLCP (2013)




                                                         7
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Advance statement              This is a written statement (either written down by the person
                               themselves or written down for them with their agreement) the
                               person might make before losing capacity (Mental Capacity Act Code
                               of Practice 2007, P291) about their wishes and feelings regarding
                               issues they wish to be considered in the case of future loss of
                               capacity due to illness, such as the type of medical treatment they
                               would want or not want, where they would prefer to live or how they
                               wish to be cared for.
                               Advance statements should be used to help find out what
                               somebody’s wishes and feelings might be, as part of working out
                               their best interests when they have lost capacity to decide. They are
                               not the same as advance decisions to refuse treatment and are not
                               binding.
                               Sources
                               Capacity, care planning and advance care planning in life limiting
                               illness. A Guide for Health and Social Care Staff NHS Improving
                               Quality (2014)
                               Mental Capacity Act 2005
Best interests                 Under the Mental Capacity Act 2005, any decision made or any
                               action done for or on behalf of a person who lacks capacity must be
                               done or made in their best interests. Decision makers must take into
                               account all relevant factors that would be reasonable to consider.
                               Section 5.13 of the Mental Capacity Act Code of Practice sets out a
                               non-exhaustive check list of common factors that must always be
                               considered when trying to work out someone’s best interests.
                               Reference
                               Mental Capacity Act (2005) Code of Practice. Ministry of Justice
                               2007




                                                         8
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Cardiopulmonary                Cardiopulmonary resuscitation
resuscitation decisions
                               Emergency treatment that supports the circulation of blood and/or air
                               in the event of a respiratory and/or cardiac arrest.
                               Cardiopulmonary resuscitation decision
                               A clinical opinion, for or against an attempt at cardiopulmonary
                               resuscitation. Such decisions only apply to attempts to restore
                               circulation or breathing. They do not decide the suitability of any
                               other type of treatment, and never prevent the administration of basic
                               comfort and healthcare needs.
                               Do not attempt cardiopulmonary resuscitation (DNACPR)
                               decision
                               Only covers views about withholding attempts at cardiopulmonary
                               resuscitation in the event of a future arrest. It is made by the clinician
                               responsible for care. This decision can also be made by the person
                               themselves as part of ADRT.
                               Sources
                               Decisions relating to cardiopulmonary resuscitation. Guidance from
                               the British Medical Association, the Resuscitation Council (UK) and
                               the Royal College of Nursing (2014)
                               Quality standards for cardiopulmonary resuscitation practice and
                               training. Resuscitation Council (2013)
                               Deciding right - a north east initiative for making care decisions in
                               advance. Northern England Strategic Clinical Networks. (2014)

Carer                          A carer is a person who is either providing or intending to provide a
                               substantial amount of unpaid care on a regular basis for someone
                               who is disabled, ill or frail. A carer is usually a family member, friend
                               or neighbour and does not include care workers. (Carers
                               (Recognition and Services) Act 1995.)
                               Note: the main carer will be identified by the individual or the
                               person’s GP or key worker if the person lacks capacity to identify one
                               themselves.

Care workers                   A care worker is employed to support and supervise vulnerable,
                               infirm or disadvantaged people, or those under the care of the state.
                               They can be volunteers who provide care as part of their work for the
                               voluntary organisation or paid workers who are providing care by
                               virtue of a contract of employment or any other contract.



                                                         9
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Community hospital             The community hospital is a service that offers integrated health and
                               social care and is supported by community-based professionals
                               (Meads, G. Participate. University of Warwick, 2004).

Core content                   The data and information that is recommended to be collected and
                               held in electronic palliative care co-ordination systems for all people
                               receiving palliative and end of life care.

Disability                     Functional or cognitive impairments that affect a person’s ability in
                               communication, understanding, decision making or self-care.

End of life                    The General Medical Council defines people as ‘approaching the end
                               of life’ as those likely to die within the next 12 months. This includes
                               individuals whose death is imminent (expected within a few hours or
                               days), those with advanced, progressive, incurable conditions,
                               general frailty and co-existing conditions that mean people are
                               expected, to die within 12 months, existing conditions if people are at
                               risk of dying from a sudden acute crisis in their condition and life-
                               threatening acute conditions caused by sudden catastrophic events.
                               Source
                               Treatment and care towards the end of life: good practice in decision
                               making. General Medical Council. (2010)
End of life care (EoLC)        Care that helps all those with advanced, progressive and terminal
                               conditions to live as well as possible until they die. It enables the
                               supportive and palliative care needs of both the individual and family
                               to be identified and met through the last phase of life and into
                               bereavement. It includes the physical care, management of pain and
                               other symptoms and provision of psychological, social care, spiritual
                               and practical support.
                               Source
                               End of life care strategy: promoting high quality care for adults at the
                               end of their life. Department of Health (2008)
End of life care               Primary diagnosis: The diagnosis that is main contributing factor to
diagnosis                      the need for end of life care
                               Other relevant diagnoses and clinical problems: relevant diagnoses
                               and medical problems that need to be taken into account when
                               making end of life decisions.

End of life care tools         Tools that health and social care professionals use to support
                               provision of the best possible care for people who are nearing the
                               end of their life.

                                                        10
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Electronic Palliative          Electronic systems linking care providers across a locality. By
Care Co-ordination             holding key information, centred on a core data set, for individuals
Systems (EPaCCS)               who have been identified as approaching the end of life, the
                               EPaCCS enables co-ordination of care for these people, and their
                               families and carers.


Frailty                        Frailty is a distinct health state related to the ageing process in
                               which multiple body systems gradually lose their in-built reserves.
                               Around 10% of people aged over 65 years have frailty, rising to
                               between a quarter and a half of those aged over 85 years. Older
                               people living with frailty are at risk of adverse outcomes such as
                               dramatic changes in their physical and mental wellbeing after an
                               apparently minor event which challenges their health, such as an
                               infection or new medication.

                               Source
                               Fit for Frailty - consensus best practice guidance for the care of older
                               people living in community and outpatient settings – a report from the
                               British Geriatrics Society 2014.

Gold Standards                 A recommended EoLC tool developed originally for use in primary
Framework (GSF)                care; it can also be used in care homes. It helps to identify people
                               who are approaching the end of life, assess their needs and
                               preferences, plan care and communicate across agencies.
                               www.goldstandardsframework.org.uk

Hospice                        Hospice includes NHS and voluntary specialist palliative care
                               inpatient beds, including those located in NHS hospitals and on NHS
                               hospital grounds.

Just-in-case                   Anticipatory prescribing of medicines commonly prescribed in
box/anticipatory               palliative care with a ‘just in case box’ placed in the person’s home,
medicines                      providing rapid access to these medications if required during the
                               terminal phase of a person’s illness.

Key worker                     A key worker is a care professional who takes a key role in
                               co-ordinating the care of the patient and promoting continuity,
                               ensuring the patient knows who to access for information and advice.




                                                        11
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Lasting Powers of              There are two different types of LPA:
Attorney (LPA)
                               A property and financial affairs LPA: this replaces the previous
                               Enduring Power of Attorney and does not have power to make health
                               decisions. Please note Enduring Powers of Attorney were replaced
                               by Lasting Powers of Attorney but may still be used if made and
                               signed before October 2007.
                               A personal welfare LPA: must be made while the individual has
                               capacity, but only becomes active when the individual lacks capacity
                               to make the required decision.
                               The LPA must act according to the principles of best interests. Can
                               be extended to life-sustaining treatment decisions (personal welfare
                               LPA including health), but this must be expressly contained in the
                               original application. A personal welfare LPA (PW-LPA) only
                               supersedes an ADRT if the PW-LPA was appointed after the ADRT
                               was made, and if the conditions of the PW-LPA cover the same
                               issues as in the ADRT.
                               Sources
                               Mental Capacity Act 2005
                               Mental Capacity Act 2005 Code of Practice. Ministry of Justice 2007
                               Deciding right - a north east initiative for making care decisions in
                               advance. Northern England Strategic Clinical Network (2012)

Lead clinician                 The most senior clinical decision maker responsible for the person.
                               This could be a consultant, GP or nurse consultant. In some
                               situations, there may be more than one lead clinician, each for a
                               different discipline, eg a lead specialist palliative care physician, lead
                               medical oncologist, lead geriatrician.




                                                        12
Palliative care co-ordination: core content. Requirements Specification




Term                           Definition
Mental capacity                Mental capacity is the ability to make a decision. An assessment of a
                               person’s capacity must be based on their ability to make a specific
                               decision at the time it needs to be made, and not their ability to make
                               decisions in general. Under the Mental Capacity Act 2005 (England
                               and Wales), anyone assessing someone’s capacity to make a
                               decision for themselves should use the two-stage test of capacity:
                                 does the person have an impairment of the mind or brain, or is
                                  there some sort of disturbance affecting the way their mind or
                                  brain works? (It doesn’t matter whether the impairment or
                                  disturbance is temporary or permanent.)
                                 if so, does that impairment or disturbance mean that the person is
                                  unable to make the decision in question at the time it needs to be
                                  made?
                               Reference: Mental Capacity Act 2005 Code of Practice. Ministry of
                               Justice 2007.

Palliative care                A means of sharing information, using electronic or paper based
co-ordination                  systems, about an individual’s preferences and choices for care at
Previously called end of       the end of life between those caring for the person in order to
life care co-ordination        improve communication, co-ordination and quality of their care.

Preferred priorities for       The PPC is an EoLC tool which essentially serves three purposes:
care (PPC)                      it facilitates discussion(s) around end of life care wishes and
                                 preferences
                                 the PPC can enable communication for care planning and
                                  decisions across care providers
                               Should the person lose capacity to make a decision about issues
                               discussed, a previously completed PPC acts as an advance
                               statement. This means that the information included within the PPC
                               can be used as part of an assessment of a person’s best interests
                               when making decisions about their care.

                               Source
                               Preferred Priorities for Care NEoLCP (2011).

Prognosis (end of life)        Judgement about the likely outcome of a health condition or
                               situation. Note: regarding end of life care, awareness of the
                               prognosis is taken to mean awareness that the life span is limited.




                                                        13
Palliative care co-ordination: core content. Requirements Specification




Contents
1     Overview                                                            15
2.    Health and care organisations                                       22
   2.1    Requirements                                                    22
   2.2    Conformance criteria                                            24
3.    IT systems suppliers                                                25
   3.1   Requirements                                                     25
   3.2   Conformance criteria                                             29
   3.3   Important considerations                                         29
   3.4   Scope                                                            30
   3.5   Out of scope                                                     30
   3.6   Details of the standard                                          31
   3.7   Interoperability                                                 33
4.    Implementation                                                      34
   4.1   Concept of operation                                             34
   4.2   Working practices                                                34
   4.3   Guidance                                                         35
   4.4   Mandatory fields                                                 36
   4.5   Terminology and coding                                           36
   4.6   Interface design                                                 37
   4.7   Clinical safety                                                  38
   4.8   Information governance                                           38
   4.9   Clinical governance                                              39
   4.10 Implementation timeframe                                          39
5.    Reporting implementation issues or requests for change              41
6.    Content elements, description and details                           42




                                                        14
Palliative care co-ordination: core content. Requirements Specification




1                                                                         Overview
People approaching the end of their lives often require care supported by a combination
of health and social care services which are often provided by a wide range of
professional and staff groups as well as by family and other carers. There is a need for
service availability 24 hours a day, seven days a week. The information standard
implemented through EPaCCS provides a means to provide accurate, consistent and
timely information about people’s preferences and wishes for their care at the end of life
to those caring for them, so improving communication and co-ordination of care
between professional teams. The aim is to improve the quality of care and to enable
more people to die in the place of their choosing and with their preferred care package.

This document details the requirements, structures and definitions for the national
information standard Palliative care co-ordination: core content (SCCI1580). The
standard identifies and specifies the core content to be held in Electronic Palliative Care
Co-ordination Systems (EPaCCS) or any systems which store information relating to
palliative and end of life care plans or preferences.

When implemented in systems the standard must support the following requirements:

  I.    Identification of people’s wishes and preferences. The core content supports
        staff in having structured conversations with people approaching the end of their
        life, to identify their preferences and wishes for care and place of death.
  II.   Inform staff caring for people approaching the end of life and their families
        and carers, of the decisions that have been made about end of life care
        preferences, choices and the plans that are in place. This includes
        cardiopulmonary resuscitation decisions, and appointment of a Lasting Power of
        Attorney.
 III.   Co-ordinate individual care using patient data that includes end of life care
        decisions and preferences. The core content is used by the person, family and
        other carers and a wide range of professional staff to guide them in delivery of
        appropriate care, ensuring that end of life care decisions and preferences are
        taken into account.




                                                        15
Palliative care co-ordination: core content. Requirements Specification




1.1     Summary

Standard
Standard number              SCCI1580
Standard title               Previously: End of life care co-ordination: core content
                             Now: Palliative care co-ordination: core content
Description                  Improving the co-ordination and quality of care provided for people at
                             the end of life is a priority for NHS England. The information standard
                             specifies the core content to be held in EPaCCS and supports NHS
                             England’s objective to increase the use of technology to help people
                             manage their health and care.

                             Palliative and end of life care is often delivered by a range of
                             professional groups across care settings and sectors including out-of-
                             hours doctors and ambulance services.
                             Approaches to communication between providers of end of life care
                             vary and depend on local service and system configuration. EPaCCS
                             offers an approach to manage the sharing of palliative care information
                             (with the person’s consent) with the professionals caring for the
                             individual and so help providers better manage communication and
                             co-ordination of patient care. The core content includes palliative and
                             end of life care decisions and preferences and the standard supports
                             accurate and consistent recording of this information. Timely access to
                             reliable and up to date information through EPaCCS will support people
                             to die in the place of their choosing and with their preferred care
                             package.
Applies to                   1. Commissioners, planners and implementers of EPaCCS as a
                                means of improving end of life care provision and supporting
                                choice.
                             2. Service providers providing care for adults (those aged 18 years
                                and older) at the end of their life:
                                  service providers include: primary, secondary and
                                   community care teams, social care providers, ambulance
                                   services and out of hours services
                                 may also include pharmacies, voluntary sector, and
                                   private sector
                             3. Suppliers of care co-ordination systems (including EPaCCS and
                                other systems that contribute to, or hold information that relates to,
                                care co-ordination for adults at the end of their life) to those
                                providers and commissioners.




                                                        16
Palliative care co-ordination: core content. Requirements Specification




Release
Release number               Amd 11/2015
Release title                Version 4.0
Description                  This amendment comprises:

                             1. Change of title of the information standard
                             The title of the information standard has been changed to Palliative
                             care co-ordination: core content to improve clarity that EPaCCS
                             records are to be used for people who receive palliative care and not
                             just for those in the last weeks/days of life. The name change also
                             aligns with EPaCCS and the proposed palliative care clinical data set.

                             2. Coding updates
                             Updating this document with the new codes which were not available at
                             time of publication of Amd16/2013 but have subsequently been
                             published April 2014:
                              disability
                              functional status
                              is main carer aware of person’s prognosis?

                             3. Correction
                             Correction of minor printing error for data item recording functional
                             status.

                             4.    New data items
                              new data item to record NHS number status indicator code
                              new data item to record the likely prognosis
                              new data item to record awareness of cardiopulmonary
                               resuscitation decision

                             5.    Amendment to current data items
                                 change of terminology for main informal and formal carers to
                                  main carer and care worker
                                 the term do not attempt cardiopulmonary resuscitation
                                  (DNACPR) decision has been replaced with cardiopulmonary
                                  resuscitation decision. This applies to the data items:
                                  DNACPR decision made, date of DNACPR decision, date for
                                  review of DNACPR decision and location of DNACPR
                                  documentation
                                 the terminology ‘not aware of do not attempt
                                  cardiopulmonary resuscitation clinical decision’ has been
                                  moved from ‘DNACPR decision made’ to the new data item

                                                        17
Palliative care co-ordination: core content. Requirements Specification




                               ‘awareness of cardiopulmonary resuscitation decision’
                               together with a new note to improve clarity of the term
                             amended categories for preferred place of death and actual
                               place of death
                             the summary table of data items has been aligned with the
                               headings recommended in the standards for the clinical
                               structure and content of patient records published by
                               Academy of Medical Royal Colleges (AoMRC). July 2013
                             data entry status for data item: NHS number has been
                               changed from required to mandatory, Section 10.3 of
                               implementation guidance provides guidance
                             removal of ‘on integrated care pathway’ from data item:
                               EoLC tool in use
                              NHS data model and dictionary terminology has been
                               updated for gender. ‘person gender code current’ has been
                               replaced with ‘person stated gender’
                             a note has been added to inform of the timescales for
                               withdrawal of maintenance for Read terminology
                             the definitions for key worker and carer have been changed
                               to align with new NHS data model and dictionary definitions
                             6. Updating of guidance documents and other changes
                              the supporting guidance documents, Palliative care
                               co-ordination record keeping guidance and implementation
                               guidance have been updated
                             minor changes have been made to the guidance on consent
                               that is provided in the Palliative care co-ordination
                               implementation and record keeping guidance
                             a new recommendation has been made that EPaCCS
                               systems should include reporting functionality
                             risks and issues have been added to the Palliative care co-
                               ordination implementation guidance
                             the ordering and numbering of the data items has been
                               changed
                             the glossary has been updated
Conformance date             1 March 2016




                                                        18
Palliative care co-ordination: core content. Requirements Specification




1.2      Related and supporting documents

Ref no    Doc Reference Title                                                 Dated
          Number

[1]       Gateway           Department of Health End of Life Care Strategy: July 2008
          reference         Promoting high quality care for all adults at the
          9840              end of life
                            www.gov.uk/government/publications/end-of-life-
                            care-strategy-promoting-high-quality-care-for-
                            adults-at-the-end-of-their-life
[2]                         Ipsos MORI. End of Life Locality Registers        June 2011
                            evaluation Final Report.
                            www.nhsiq.nhs.uk/resource-
                            search/publications/eolc-locality-registers-
                            evaluation.aspx
[3]                         SCCI1580 Palliative care co-ordination: core      Sept 2015
                            content Implementation guidance
                            www.hscic.gov.uk/isce/publication/scci1580
[4]                         Clinical Safety Report                            Sept 2015
                            www.hscic.gov.uk/isce/publication/scci1580
[5]                         SCCI1580 Palliative care co-ordination: core      Sept 2015
                            content Record keeping guidance
                            www.endoflifecare-
                            intelligence.org.uk/resources/publications/record
                            _keeping_guidance
[6]                         Common User Interface design guides
                            www.systems.hscic.gov.uk/data/cui/uig
[7]                         ISB Information Governance baselines
                            www.isb.nhs.uk/use/baselines/ig
[8]                         SCG Guidance on the Representation of             April 2008
                            Allergies and Adverse Reaction Information
                            Using NHS Message Templates
                            http://systems.hscic.gov.uk/data/scg/scg0001.pdf
[9]                         Electronic Palliative Care Co-ordination Systems February
                            (EPaCCS) Mid 2012 survey report                   2013
                            www.nhsiq.nhs.uk/resource-
                            search/publications/eolc-epaccs-mid-2012-
                            report.aspx
[10]                        EPaCCS information governance guidance            March 2013
                            www.systems.hscic.gov.uk/qipp/library/epaccsig.
                            pdf




                                                        19
Palliative care co-ordination: core content. Requirements Specification




Ref no    Doc Reference Title                                                   Dated
          Number

[11]                        Economic Evaluation of the Electronic Palliative April 2013
                            Care Co-ordination System (EPaCCS) early
                            implementer sites
                            www.nhsiq.nhs.uk/news-events/news/economic-
                            evaluation-of-the-epaccs-early-implementer-
                            sites.aspx
[12]                        EPaCCS recommended it system requirements August 2015
                            http://systems.hscic.gov.uk/qipp/library/epaccsre
                            q.pdf
[13]                        EPaCCS making the case for change. national         November
                            end of life care programme                          2012
                            www.nhsiq.nhs.uk/resource-
                            search/publications/eolc-epaccs-case-for-
                            change.aspx
[14]                        Care co-ordination interoperability                  Accessed
                            http://developer.nhs.uk/library/interoperability/car June 2015
                            e-co-ordination-interoperability/

[15]                        Information sharing patterns summary                Accessed
                            http://developer.nhs.uk/library/architecture/integr June 2015
                            ation-patterns/information-sharing-patterns-
                            summary/


1.3      Related Standards

Reference                   Title
ISB 1500 to 1507            Common User Interface standards for entry and/or display of: patient
                            name, address, telephone number, sex and gender, NHS number; date;
                            time; patient banner

ISB 0129                    Clinical Risk Management: its Application in the Manufacture of Health
                            IT Systems
ISB 0160                    Clinical Risk Management: its Application in the Deployment and Use of
                            Health IT Systems

ISB 0149-02                 NHS number for secondary care
ISB 0149-01                 NHS number for general practice
ISB 1552 & 1553             Read Codes
ISB 0034                    SNOMED CT




                                                        20
Palliative care co-ordination: core content. Requirements Specification




Reference                   Title
ISO/IEC 27001:2005          Information technology – security techniques – information security
                            management systems – requirements
                            www.iso.org/iso/catalogue_detail?csnumber=42103
ISB 0090                    Organisation Data Service (ODS)

1.4     Related Professional Standards

Title                                                  Link
End of life care for adults quality standard           http://guidance.nice.org.uk/QS13
(NICE). November 2011
NMC Code: Professional standards of                    www.nmc.org.uk/globalassets/sitedocuments/nm
practice and behaviour for nurses and                  c-publications/revised-new-nmc-code.pdf
midwives. NMC (2015)
Academy of Medical Royal Colleges record www.rcplondon.ac.uk/resources/standards-
keeping standards for patient handover and admission-handover-discharge-outpatient-and-
hospital discharge                         referral-technical-annex
Standards for the clinical structure and               www.rcplondon.ac.uk/sites/default/files/standards
content of patient records. Academy of                 -for-the-clinical-structure-and-content-of-patient-
Medical Royal Colleges and HSCIC. July                 records.pdf
2013
NHS improving quality guidance and                     www.nhsiq.nhs.uk/improvement-
training materials                                     programmes/long-term-conditions-and-
                                                       integrated-care/end-of-life-care/coordination-of-
                                                       care.aspx

                                                       www.nhsiq.nhs.uk/improvement-
                                                       programmes/long-term-conditions-and-
                                                       integrated-care/end-of-life-care/acute-hospital-
                                                       care.aspx

Cancer outcomes and services dataset                   www.hscic.gov.uk/isce/publication/SCCI1521
(SCCI1521)
Community information data set                         www.hscic.gov.uk/isce/publication/SCCI1510
(SCCI1510)
Palliative care clinical data set (SCCI2036)           In development




                                                        21
Palliative care co-ordination: core content. Requirements Specification




2. Health and care organisations
2.1      Requirements

#             Requirement 1
1             From March 2012, organisations contracting for new electronic palliative care
              co-ordination systems (previously known as ‘locality registers’) MUST specify
              compliance to this information standard in IT systems and software supplier
              contracts.
2             Providers of services for adults at the end of their life MUST review their current
              record systems/platforms and ensure that they conform to the standard now and to
              Amd 11/2015 by 1 March 2016.
3             Organisations developing and/or implementing systems to support palliative care
              co-ordination MUST conform to safety risk management standards ISB 0129 and
              ISB 0160 and SHOULD consider the clinical safety risks identified in the Clinical
              Safety Report [4] as part of the risk management process.
4             Organisations contracting for new electronic palliative care co-ordination systems
              SHOULD specify that suppliers use SNOMED CT wherever specified in the
              standard within systems that are developed, but there may also be a need to
              support other coding systems where required for interoperability.
5             All implementations MUST comply with information governance requirements for
              data security and confidentiality [7] including ISO/IEC 27001:2005 (see table 1.2).
              Note the specific IG risks identified in Section 4.1. Information that is captured and
              held in Palliative care co-ordination: core content systems MUST be fully auditable
              and all viewing/updating of data MUST be traceable back to the specific user who
              viewed/updated the record. It MUST be possible for privacy officers or Caldicott
              Guardians to access this audit information to support investigations into misuse, and
              also to support subject access and information requests.
6             The person receiving end of life care SHOULD be offered a copy of their record.
              Consideration MAY be given for people to access their own record and to have
              editing rights for specific fields.
7             Clinical governance and IT safety leads in each organisation where the standard is
              implemented MUST ensure that the editing rights for specified clinical content
              elements are limited to the appropriate clinicians – see Clinical governance, Section
              4 of the Palliative care co-ordination Implementation guidance document [3]. They
              MUST also check that discrepancies cannot occur between the Palliative care
              co-ordination: core content record and other data bases holding this information.
              These risks SHOULD be managed as part of the implementation of ISB 0129 and
              ISB 0160.




1
    The key words MUST, SHOULD and MAY are defined in RFC-2119.


                                                        22
Palliative care co-ordination: core content. Requirements Specification




#            Requirement 1
8            Information governance leads in each organisation implementing the standard
             MUST ensure that relevant staff are trained to address consent and confidentiality
             issues related to the person receiving end of life care and those identified as a carer
             or nominated as part of advance care planning (see Section 6.4 of the Palliative
             care co-ordination Implementation guidance [3]). Information governance leads
             MUST ensure that relevant staff are informed of changes to the consent model in
             Amd 11/2015 and identify any training requirements.
9            Clinical leads in organisations providing end of life care for adults MUST review the
             Palliative care co-ordination Record keeping guidance accompanying this standard
             and consider whether changes are required to current professional practice, training
             and local policies/pathways. Clinical leads MUST ensure that all relevant staff are
             informed when new versions of the guidance are published and identify any training
             requirements.
10           Professionals MUST seek separate, explicit consent:
              I. To place a person on EPaCCS or other palliative care co-ordination system.
              II. To share their information with relevant health and social care staff.
11           Professionals MUST record the consent status ie explicit consent by the individual,
             best interest decision (Mental Capacity Act 2005) or Lasting Power of Attorney for
             Personal Welfare (Mental Capacity Act 2005) and MUST record whether consent
             has been withdrawn.
12           Professionals responsible for seeking consent for the record being created on the
             system and shared MUST be competent in EoLC communication skills and advance
             care planning and understand the legal status and implications of the Mental
             Capacity Act 2005.
13           Professionals and clinical governance leads MUST ensure that systems and
             process support timely updating of palliative care co-ordination records Palliative
             care co-ordination: core content and safe decision making. See Implementation
             guidance [3] and Palliative care co-ordination: Record keeping guidance [5].
             Systems and process MUST be reviewed and updated when changes to the
             information standard are published.




                                                        23
Palliative care co-ordination: core content. Requirements Specification




2.2     Conformance criteria

This section describes the tests that can be measured to indicate that the information
standard is being used correctly by an organisation (conformance criteria). These may
be different depending upon the type of organisation, eg supplier, trust, GP practice.

Organisation Type                  Criteria
Commissioners                      All contracts for EPaCCS MUST include the requirement for the
                                   system to contain the core content defined in SCCI1580.
Service providers                  Audit of IT systems MUST indicate full compliance with SCCI1580
                                   and Amd11/2015 by 1 March 2016.
Service providers                  Clinical assurance and risk management systems MUST be in
                                   place with a named safety lead. ISB 0129 and ISB 0160 MUST be
                                   adhered to in deployment of new systems and MUST be
                                   continued throughout the system lifecycle.
Service providers                  Quality assurance systems MUST be in place to assess the
                                   completeness and consistency of the data recorded, the
                                   timeliness of data collection and access to the information for
                                   relevant professionals.
Service providers                  Staff competence/training records MUST show that professionals
                                   responsible for seeking consent for the record being created on
                                   the system and shared are competent in EoLC communication
                                   skills, advance care planning and understand the legal status and
                                   implications of the Mental Capacity Act 2005. Staff MUST be
                                   informed of changes to the information standard and any required
                                   training put in place to update their knowledge and competences
                                   so that they continue to record and access information safely and
                                   effectively.




                                                        24
Palliative care co-ordination: core content. Requirements Specification




3. IT systems suppliers
3.1      Requirements

#             Requirement 2
1             Suppliers of existing systems to providers of end of life care services MUST
              demonstrate conformance with the information standard and with Amd 11/2015 by 1
              March 2016.
              All data items captured, held or displayed in the system MUST do so in compliance
              with SCCI1580.
2             Suppliers MUST comply with user interface standards for input and display of patient
              demographic data (ISB 1500 to 1507). Other design guidance developed by the
              HSCIC common user interface programme [6] SHOULD be considered.
3             Entry, display and printing of data MUST be assessed as clinically safe.

4             Information shared MUST be kept up-to-date. The solution MUST include controls to
              ensure that (as far as reasonably possible) discrepancies cannot occur between the
              Palliative care co-ordination: core content record and other systems or databases
              holding this information.
5             The system MUST include functionality to notify staff caring for people approaching
              the end of their life that an EPaCCS record has been created or updated. This
              MUST be communicated securely in line with information governance requirements.
              Note: This SHOULD use the national interoperability toolkit (ITK) notifications
              specification where possible.
6             It SHOULD be possible to send notifications of record creation/update to staff or
              individuals (including the patient's family and carers) not registered as users of the
              system.

7             The system MAY use the national Personal Demographics Service (PDS) service to
              trace patients, retrieve and manage updates to their demographic information.


8             The system MAY use the national Summary Care Record (SCR) service to retrieve
              medication, allergy and adverse reaction information for a patient where this is
              available.
9             All integration with other systems (other than Spine services such as PDS or SCR)
              MUST be built using national ITK specifications unless agreed otherwise with the
              local NHS organisation.




2
    The key words MUST, SHOULD and MAY are defined in RFC-2119.


                                                        25
Palliative care co-ordination: core content. Requirements Specification




#            Requirement 2
10           Local systems may hold more information than is shared with other systems using
             ITK messaging. The sending system MUST make it clear to the sender exactly what
             information will be sent to other systems and what will be held locally and not
             shared.
11           Users who ‘click-through’ into a record from another system MUST be able to view
             and update the record, subject to role-based access controls, and having a
             legitimate relationship with the patient.
12           Any additional data capture requirements beyond the data items specified in
             SCCI1580 SHOULD be agreed with the local organisations and care providers using
             the system.
13           The system MUST allow users to update and logically delete records (in-line with
             retention policies for clinical data and role-based access controls). This (as with all
             changes to a record) must be fully auditable.
14           It MUST be possible to create a record for a person with a minimum set of data
             fields: Demographic fields, GP details (as per the definitions in SCCI1580). All
             mandatory items MUST be included, along with any relevant items marked as
             ‘required’ in the standard.
15           The system MUST ensure that any changes to the person’s preferences are
             updated and made available in a timely fashion. The specific timescale required
             should be agreed with the local lead organisation.
16           The system MAY include controls or a user prompt to ensure that any advanced
             decision to refuse treatment is only recorded for a person who is over 18 and who
             has mental capacity. There is no requirement to capture anything in the record
             relating to this.

17           When recording advanced decisions to refuse life sustaining treatment, the system
             MAY prompt the user that such statements must be made in writing, signed and
             witnessed as well as being recorded in the system.
18           General record keeping principles stipulated by GMC (2006), NMC (2010), HPC
             (2008), AoMRC (2008) and AoMRC and the NHS (2008) MUST be adhered to,
             including all entries and amendments being dated and timed, confidentiality,
             accuracy and timeliness of content.
19           The system SHOULD prompt for a review date to be set when a record is created,
             and also at each review. The review date should not be more than three months
             from the date of creation or review.
20           The system SHOULD allow for reminders to users when a planned review date is
             approaching or has been reached.

21           The system SHOULD allow any of the carers involved in the care of the person to
             contribute to the record (subject to relevant IG controls).




                                                        26
Palliative care co-ordination: core content. Requirements Specification




#            Requirement 2
22           The system SHOULD prompt users that DNACPR decisions should only be
             recorded by the senior responsible clinician.
             Note: The choice of who the senior responsible clinician is will be made by the user
             and there is no requirement for the system to verify this.
23           The solution MUST allow a copy of a person’s record to be printed.

24           Local organisations will make decisions about any data fields not to be reproduced
             on the person’s copy and any fields to be filtered out depending on how they have
             been answered. The system MUST support this.
             This should be in line with the principles established under Section 7 of the Data
             Protection Act which gives individuals a right of access to personal data about them.
25           The system MAY allow the person to access their own record electronically, and to
             have editing rights for specific fields. The requirements for this must be agreed with
             the local lead organisation.
26           The system MUST include reporting capabilities as agreed with the local NHS
             organisation.
27           The system MUST allow for the creation of data quality and validation reports as
             agreed with the local NHS organisation.
28           The solution SHOULD provide capabilities allow reporting of equality information to
             support organisations in ensuring equitable provision of services, where such
             information has been recorded in the record.
29           It MUST be possible to extract effectively anonymised or pseudonymised data from
             the system to support secondary analysis.
30           Data extracted for secondary uses MUST be effectively anonymised or
             pseudonymised unless explicit consent has been gained from the person for this
             use of their data.
31           It MUST be possible to extract all user-entered and necessary reference data from
             the system in patient-identifiable form in a standard format (eg CSV or XML) to allow
             for local analysis.
32           PI data extracts should be limited to records ‘owned’ by the organisation of the user
             running the extract (ie for whom they are the data controller) unless data sharing
             agreements are in place that allow for other organisations data to be included.
33           The solution MUST conform to safety risk management standards ISB 0129 and ISB
             0160.
34           The solution MUST be built with consideration for the clinical safety risks identified in
             the Clinical safety report included with SCCI1580.
35           All coded information held within the system SHOULD be held using SNOMED CT.
             Note: This aligns with ISB 0034.
36           Where necessary, other clinical coding systems COULD be supported alongside
             SNOMED CT to support interoperability with other clinical systems.



                                                        27
Palliative care co-ordination: core content. Requirements Specification




#            Requirement 2
37           Where SNOMED CT codes are supported, the system MUST be updated with the
             latest releases of SNOMED CT codes in a timely fashion (SLA to be agreed with
             local NHS organisation).
38           The system MUST use the NHS number as the primary unique identifier for a
             person.
39           The system MUST allow electronic copies of documents to be attached to a
             person’s record. It should be possible to enable or disable this functionality for any
             given organisation.
40           The system MUST allow for changes to the data set over time, including any
             changes to the locally defined additional information that is captured.
41           The system MUST be highly available – in line with service levels agreed with the
             local organisation.
42           The system MUST be accessible to authorised users on the N3 network (or its
             successor).
43           The system SHOULD be accessible to authorised users who are not on the N3
             network. Appropriate security and information governance controls must be in place
             and agreed by the Health and Social Care Information Centre (or its successor).
44           Users SHOULD be able to access records without a network connection (eg on a
             mobile device).
45           It SHOULD be possible to capture information using an offline digital capture
             mechanism such as a digital pen or scanning solution.
46           Common user interface standards: ISB standards (1500 to 1507) MUST be followed
             for input and display of demographic data. This applies to devices capable of
             operating at 1024x768 which have a keyboard and pointing device, but can also be
             applied to smaller devices.
47           The solution SHOULD comply with guidance developed by the Common User
             Interface programme within the Health and Social Care Information Centre.
48           Common user interface guidance relating to navigation and clinical noting SHOULD
             be followed.
49           Information about a person’s end of life care and preferences should appear as a
             single record which is updated whenever/if ever the person wishes to change it.
50           The system SHOULD be accessible for those with disabilities, and SHOULD comply
             with guidance set out in the Government service design manual for accessibility.
             Specific accessibility needs of the users within a local organisation using the system
             should be taken into account.
51           All web interfaces for general users or patients MUST meet level AA success criteria
             of WCAG 2.0 (Web content accessibility guidelines 2.0).
52           The system MAY provide online help and/or training facilities to help users
             understand how to use the system.
53           Systems MUST adhere to user interface standards and to National Patient Safety
             Agency (NPSA) guidelines for safe on-screen display of medication information.

                                                        28
Palliative care co-ordination: core content. Requirements Specification




#            Requirement 2
54           Systems MUST alert users when data item: preferred place of death 1st choice has
             not been completed.

Refer to EPaCCS Recommended IT System Requirements [12].

3.2     Conformance criteria

This section describes the tests that can be measured to indicate that the information
standard is being used correctly by an IT system supplier.

#       Conformance Criteria

1       All contracts for EPaCCS issued after March 2012 include the requirement for the
        system to contain the core content defined in SCCI1580 and MUST specify the
        requirements listed in 3.1.
2       IT systems suppliers MUST specify the requirements in a test schedule and audit of IT
        systems to providers of palliative and end of life care services indicate full compliance
        with the core content standard.
3       Evaluation confirms adherence to user interface standards and to NPSA guidelines for
        safe on-screen display of medication information.
4       Safety risk management has been carried out according to ISB 0129 and ISB 0160 prior
        to deployment of any system incorporating the Palliative care co-ordination: core content
        standard and is being continued throughout the system lifecycle.
5       Staff using the standard in systems report no concerns related to its use.


3.3     Important considerations

Standardised, unambiguous record content also supports extraction and analysis of
data for secondary uses such as planning, delivery and monitoring of care. This helps
inform priorities and direction for quality improvements. Note that this potential use is
not addressed by the present standard which is focused on communication and
co-ordination between those involved in providing palliative and end of life care,
however, consideration should be given to requirements for reporting when
implementing or changing systems. Local organisations which implement these systems
may utilise reporting functions, with local secondary use of the data, to ensure all
eligible people, regardless of condition, population group etc, are properly considered
for inclusion on the system, and enabling inequities in care provision to be addressed.
Reporting functionality will also enable assessment of the impact of EPaCCS in
achieving people’s wishes and preferences for end of life care.

It is recommended that EPaCCS include reporting functionality and localities
implementing new EPaCCS should include reporting functionality in their procurement


                                                        29
Palliative care co-ordination: core content. Requirements Specification




specification. Localities who have implemented systems that do not have reporting
functionality are advised to work towards this.

3.4     Scope

The standard applies to adults (18 years and older) with deteriorating, progressive or life
limiting illness who are approaching the end of life i.e. the scope of the NICE Quality
Standard for end of life care for adults, published November 2011.
http://guidance.nice.org.uk/QS13

Core content to support the requirements listed in i) to iii) of section 3.5 below is defined
in this standard. Additional content that may be required to support recording of full
palliative and end of life care decisions was identified during the piloting of the locality
registers [2] and during consultation on the core content. Although not part of this core
content information standard, this additional content is available to guide system design
and clinical recording practice. See Appendix 4 of the Palliative care co-ordination
Implementation guidance for details.

Any systems which store information relating to palliative and end of life care plans or
preferences must support this information standard, so that information is being held in
a consistent way to allow for co-ordination of care and sharing of this information across
multi-disciplinary teams.

3.5     Out of scope

  I.    Full electronic clinical record or care plan for people receiving palliative and end
        of life care.
  II.   Children and young people receiving palliative and end of life care – defined
        locally depending on service delivery models, but generally those below 18
        years.
 III.   Mandatory data collection for national reporting. If a requirement for one or more
        national reporting data sets is decided, a submission for one or more related, but
        separate information standards will be developed, however, localities may wish
        to share data with national bodies such as the National End of Life Care
        Intelligence Network, part of Public Health England, to develop a national picture
        and thereby support benchmarking and service improvement work. In this way
        the national aspect is directly tied to the benefits they might obtain. Appropriate
        information governance permissions would be sought.
IV.     Care and support of the bereaved.




                                                        30
Palliative care co-ordination: core content. Requirements Specification




3.6     Details of the standard

In order to support the requirements in section 2.1, the core content comprises
information about:

     the person
     those delivering care
     end of life care preferences and choices
     end of life care decisions

A summary table of core content elements is provided below.

Whenever possible, where data items are already captured in other record systems
these should feed into the shared record electronically (See Palliative care co-ordination
Implementation guidance [3]). This will include demographic data items which exist in
the patient demographic record or GP record.

         Summary core data items
1        Consent
         Consent status*
2        Record creation* date AND record amendment* dates
3        Plan and requested actions
         Planned review date
         Cardiopulmonary resuscitation decision – whether a decision has been made, the
         decision, date of decision, location of the documentation and date for review


4        Person demographics
         Person name* including preferred name
         Date of birth*
         Person address*
         NHS number* and NHS number status indicator code*
         Person telephone number
         Gender
         Relevant contacts
         Main carer name and contact details
         Availability of carer support*

5        Special requirements
         Need for interpreter
         Preferred spoken language
         Functional status
         Disability
         End of life care tools in use eg Gold Standards Framework



                                                        31
Palliative care co-ordination: core content. Requirements Specification




        Summary core data items
6       Information and advice given
        Is main carer aware of person’s prognosis?
        Is person aware of the cardiopulmonary resuscitation clinical decision?
        Family member/carer informed of cardiopulmonary resuscitation clinical decision?


7       GP Practice
        GP name*
        GP practice details*
8       Key worker
        Name
        Telephone number
9       Services and care
        Names of health and social care staff and professionals involved in care
        Professional group
        Telephone number
10      Diagnoses
        Primary end of life care diagnosis*
        Other relevant end of life care diagnoses and clinical issues
        Likely prognosis
11      Allergies or adverse reactions

12      Medications and medical devices
        Whether a ‘just in case box’ or anticipatory medicines have been prescribed
        Where these medicines are kept
13      Legal information
        Advance statement
        Requests or preferences that have been stated
        Advance decision to refuse treatment (ADRT)
        Whether a decision has been made, the decision, date of decision and the location of
        the documentation
        Lasting Power of Attorney or similar
        Name and contact details of person appointed with Lasting Power of Attorney (LPA) for
        personal welfare
         without authority to make life-sustaining decisions
         with authority to make life-sustaining decisions
14      Person and carers’ concerns, expectations and wishes
        Preferred place of death 1st and 2nd choices if made
        Names and contact details of others (one and two) that the person wants to be involved
        in decisions about their care
        Other relevant issues or preferences around provision of care?
15      Actual place of death
16      Date of death
* Completion of these items is mandatory.
                                                        32
Palliative care co-ordination: core content. Requirements Specification




3.7     Interoperability

Where there is an intention to use electronic messaging, it is important that this
messaging is standardised wherever possible. The Health and Social Care Information
Centre is working with NHS organisations and suppliers to develop and maintain a set
of interoperability standards through the interoperability toolkit (ITK) programme. ITK
specifications to support care co-ordination and EPaCCS were developed in late 2012,
and the HSCIC can provide support to local organisations looking to make use of these
specifications. Support can also be provided to sites interested in developing new
standards for messaging where existing standards do not exist.

Where applicable national ITK resources already exist for the transfer of information,
these should be used wherever possible to avoid a proliferation of incompatible
interfaces being developed. Where applicable national interoperability tools do not exist,
local organisations should consider working with the ITK team to propose and develop
new tools/resources.

More information is available here: http://systems.hscic.gov.uk/interop




                                                        33
Palliative care co-ordination: core content. Requirements Specification




4. Implementation
4.1     Concept of operation

This standard supports the national End of life care strategy (2008) [1] and the work of
NHS England to improve health outcomes and support the continuing implementation of
digital record sharing systems to improve care co-ordination. At a suitable time after a
person has been identified as approaching the end of life, an experienced care
professional initiates open and honest conversations about end of life care and choices.
With the person’s permission, EPaCCS can then be used to record the person’s details
and expressed preferences for care and to communicate this information, with their
agreement, to other professionals.

Information about the person’s palliative and end of life care preferences (and changes
to that information) should be recorded once and then made available to those who
have a legitimate relationship with the individual, including named carers and the person
themselves. A range of professional groups will need to access the data; local decisions
must be made about the groups that can have access and permissions to create, edit,
and view the data items. The core information needs to be available at any time day or
night. It is recommended that, with due regard for information governance and data
protection, a hard copy is available in the person’s home, at the bedside or where it can
be easily accessed by the relevant carers.

Information about people’s palliative and end of life care is often stored on multiple IT
platforms with separate networks used by primary care, community care, acute care,
hospices, social care, ambulance and out of hours services. How the core content
standard is operationalised by local organisations, such as through the development of
EPaCCS, will be determined by local service providers, depending on the local service
and system context. For example, the core content may be held on existing IT
infrastructures and be accessed via separate networks or there may be a bespoke
system that integrates data from multiple providers’ platforms.

Local requirements for compatibility with other systems will need to be determined.
Integration of systems to allow automatic population of data from existing databases
would be preferable.

4.2     Working practices

Implementation of systems to support recording and communication of end of life care
plans is resulting in changes to working practices. Training materials and other
resources are available from the NHS Improving Quality website to support these


                                                        34
Palliative care co-ordination: core content. Requirements Specification




changes. www.nhsiq.nhs.uk/improvement-programmes/long-term-conditions-and-
integrated-care.aspx

The Ipsos MORI evaluation report of the locality registers pilots [2] recognised the
importance of staff training to ensure that patients’ palliative and end of life care is
safely managed. The report highlighted the requirement for staff delivering care to have
the competences that underpin effective palliative and end of life care, particularly
around communication skills and care planning, including advance care planning.
EPaCCS supports conversations about end of life care wishes and implementers have
found that EPaCCS acts as a driver for training to ensure that staff have the required
competences for their role in delivery of end of life care.

Implementation of EPaCCS will require staff training on taking patient consent and
access and use of the electronic record including the recording and updating of
information, however, it is expected that this particular training requirement will, in
general, be small if the data set sits on existing IT platforms. It is important that
appropriate and adequate training is provided to ensure that all staff groups are
competent to access and input data as required, meeting information governance
requirements.

Implementation Guidance (4.3. below), the lessons from the Ipsos MORI evaluation
report of the locality registers pilots [2], and good practice examples on the NHS
Improving Quality website can be used to develop local training and guidance materials.

There is emerging evidence that EPaCCS is supporting people to achieve their
preferred place of death (See EPaCCS Making the Case for Change [13]) and that
EPaCCS increases the proportion of deaths in people’s usual place of residence with
potential cost savings from reduced hospital admissions. (See Economic Evaluation of
the Electronic Palliative Care Co-ordination system (EPaCCS) Early Implementer Sites
[11]).

4.3     Guidance

See Palliative care co-ordination Implementation guidance [3] and EPaCCS
Recommended IT System Requirements [12].

The functionality required to operationalise the core content, will be determined locally.
Full interoperability and real-time data are desirable. Functionality will include:

     collection, importing and storage of individual level data specified in the standard
     requirement for some free text fields
     user access to records across multiple IT platforms, some without N3 connection
     facility to update and remove records

                                                        35
Palliative care co-ordination: core content. Requirements Specification




     audit trail for access and data edits
     reporting functions (specified locally)
     validation and data quality reports

If full interoperability and real-time data cannot be supported by the IT systems,
alternative operational procedures need to be implemented to supplement the IT system
to ensure that staff have access to up-to-date information at any time, day or night. This
may require the faxing/emailing of records between services.

Locally, decisions can be made as to whether the original documents for
cardiopulmonary resuscitation decisions and advance decision to refuse treatment
(ADRT) are uploaded into the record but a clinical risk assessment needs to be carried
out, for example around how to ensure those records are kept up to date, and policy
and training put in place.

As a minimum, the person should be offered a copy of their record. In alignment with
the information strategy, The power of information (2012), consideration must be given
for people to access their own record and to have editing rights for specific fields eg to
record relevant issues and preferences for care or names of people to be involved in
decision making. This supports people to take greater control of their care and supports
ambitions for a paperless NHS. Adequate data security measures would be required to
ensure controlled access.

4.4     Mandatory fields

It is mandatory for IT systems to support the core data set but localities implementing
EPaCCS will decide on the content of the record. Where the core data items are
selected for inclusion, these data items must comply with the information standard. The
demographic fields, GP details, NHS number and status indicator code and details of
main carer are mandatory fields in the information standard and these fields will be
completed at creation of the record. Other fields in the record will be populated over
time, in response to on-going dialogue with people and their families and the
identification of choices and preferences for care. The structure of these fields will be
determined locally to support this approach.

4.5     Terminology and coding

SNOMED CT has been selected and approved as the terminology to be adopted by the
NHS in England. Suppliers implementing the Palliative care co-ordination: core content
standard MUST refer to ISB 0034. Organisations contracting for new EPaCCS must
specify that suppliers use SNOMED CT for all coded information within systems that are
developed, but there may also be a need to support other coding systems where
required for interoperability.

                                                        36
Palliative care co-ordination: core content. Requirements Specification




Current SNOMED CT, Read CTV3 and Read V2 codes, relevant to the data items, are
provided in Section 6. These codes are to be used where the system design requires
use of codes for observable entries. It is the responsibility of the IT systems supplier or
lead organisation, to ensure that the coding used in EPaCCS records is current and up-
to-date.

SNOMED CT is specified as the single terminology to be used across the health system
and it should be noted that Read codes will be deprecated as detailed below:

   Read Codes V2 will cease to be maintained by the Health and Social Care
    Information Centre from April 2016 and will be withdrawn in April 2020. Further
    information: www.hscic.gov.uk/media/15868/1553disn/pdf/1553disn.pdf

   Read Codes CTV3 will cease to be maintained by the Health and Social Care
    Information Centre from April 2018 and will be withdrawn in April 2020. Further
    information: www.hscic.gov.uk/media/15869/1552disn/pdf/1552disn.pdf

Information Standard Notices 1552 and 1553 confirm the schedule for the phasing out and
withdrawal of the Read V2 and Read V3 clinical terminologies:

The final updated release of Read V2 is 1/4/2016.
The date of withdrawal of Read V2 is 1/4/2020.
The final updated release of Read V3 is 1/4/2018.
The date of withdrawal of Read V3 is 1/4/2020.

Service users will need to plan to migrate from the use of READ codes to SNOMED CT coding
within the timescales above.

4.6     Interface design

The standard specifies formats for the storage of structured data where this is
standardised, for example, format of dates is as stated in the NHS data model and
dictionary. Safe entry, display and print out of the data are essential to prevent harm to
patients.

A number of information standards have been approved for use in clinical systems in
England that specify design for input and display of patient demographic data – see
section 1.3. These standards must be applied to computers that are capable of
operating at a display resolution of 1024 x 768, and have a keyboard and pointing
device. Design principles in the standards should also be considered for reduced-size
form factors, such as personal digital assistants and small mobile devices.


                                                        37
Palliative care co-ordination: core content. Requirements Specification




Design guidance developed by the Health and Social Care Information Centre common
user interface (CUI) [6] programme on consistent navigation and clinical noting and
terminology is also recommended. Particular attention should be paid when specifying
the maximum number of characters allowed for free text entries to avoid potential loss
of important content.

Safe entry, display and print out of the data are essential to prevent harm to people.
Consideration should be given to layout and ordering of content items to facilitate
completion and support accuracy and interpretation; for example, ‘advance decisions to
refuse treatment’ are potentially more binding than ‘advance statements’ and should
appear first for entry and display.

4.7     Clinical safety

Organisations manufacturing, deploying and using new or updated software must follow
the processes set down in two information standards approved for the NHS and social
care in 2009 – see section 1.3. These standards require organisations to determine if
the software gives rise to an impact on patient safety, and then mitigate the risk
appropriately prior to implementing the software. Local organisations will need to
comply with the code of practice for conducting privacy impact assessments
(Information Commissioners Office 2014) and should refer to the screening questions to
determine whether a privacy impact assessment is required.

Risk management must then be continued throughout the lifecycle of the system
including when it is decommissioned or replaced. See the Clinical safety report [4] for
implementation risks identified for the Palliative care co-ordination: core content.

It is essential that any potential clinical risk regarding the accuracy of the record content
is addressed. Please refer to Palliative care co-ordination Record keeping guidance [5]
and Clinical safety report [4] for consideration of clinical risk. A copy of the record
should be printed to share with the person or portals developed to enable people to
access their record over the internet. See section 9.3 of Palliative care co-ordination
Implementation guidance [3].

4.8     Information governance

All IT systems must comply with NHS and legal information governance requirements
for data security and confidentiality to ensure security and protection of the data when
viewed, transferred and stored. See Section 6 of the Palliative care co-ordination
Implementation guidance document [3].

Information that is captured and held in local systems must be fully auditable and all
viewing/updating of data should be traceable back to the specific user who

                                                        38
Palliative care co-ordination: core content. Requirements Specification




viewed/updated the record. Where possible this should be linked back to a smart-card
authenticated user. It should be possible for privacy officers or Caldicott guardians to
access this audit information to support investigations into misuse, and also to support
subject access and information requests. Please refer to Palliative care co-ordination
Record keeping guidance [5] Section 6.9 and to Palliative care co-ordination
Implementation guidance [3] Section 6.4 for guidance on consent for creating a record
and for information sharing.

4.9     Clinical governance

Clinical governance leads in the organisations implementing recording of Palliative care
co-ordination information MUST note the risks identified in the Clinical safety report [4]
and work with IT and clinical staff to ensure those risks are managed as is required by
the NHS IT safety risk management standards (see Section 1.3).

Issues and concerns related to the core content or its use should be referred initially to
local clinical governance leads and if necessary referred to the Implementation and data
set management group (see Section 5 below).

On-going clinical assurance for the standard is being led by the Association of Palliative
Medicine in collaboration with the relevant professional bodies including the Royal
College of General Practitioners and the Royal College of Nursing.

Staff using the record need to be aware of the medico-legal and accountability
considerations related to the use of EPaCCS which are provided in Appendix 2 of the
Palliative care co-ordination Record keeping guidance [5].

Refer to Section 4 of Palliative care co-ordination Implementation guidance for further
guidance regarding clinical governance.

4.10 Implementation timeframe

By March 2012            New contracts for IT systems and software for EPaCCS
                         MUST specify compliance with the standard
April 2012               Release of additional Read and SNOMED CT codes to
                         support the standard
October 2013             Release of SMOMED/Read codes to support the standard
By 1 December            End of life care service providers migrated to compliant
2013                     systems
By 1 December            IT systems suppliers MUST comply with standard
2013
December 2013            ISN notice advising of amendments to the standard


                                                        39
Palliative care co-ordination: core content. Requirements Specification




By 1 June 2014           IT systems suppliers MUST comply with amendments to the
                         standard
By 1 June 2014           End of life care service providers’ systems are compliant
                         with amendments to the standard
September 2015           ISN notice advising of amendments to the standard
By 1 March 2016          Systems are compliant with the amendments to the standard
                         (Amd 11/2015)

The Implementation and Data Set Management Group leads on implementation and
maintenance of the standard.

NEoLCIN provides access to the standard’s requirements specification and supporting
documents from its website. Additional guidance and resources are provided from this
website and from the NHS Improving Quality website. Changes to the standard will be
communicated via these websites and a communications plan put in place to notify
current and potential EPaCCS users.

NHS Improving Quality have a range of resources to support implementation of
EPaCCS which are available from their website. These include a benefits case, Making
the case for change published October 2012 [13], an economic evaluation of EPaCCS
early implementer sites, published February 2013 [11], information governance
guidance, published March 2013, lessons learned published in August 2014, good
practice examples and case studies. The national team invites feedback from systems
users and service providers on the acceptability, usefulness, limitations and technical
issues via neolcin@phe.gov.uk.




                                                        40
Palliative care co-ordination: core content. Requirements Specification




5. Reporting implementation issues or
requests for change
Issues and requests for change can be made via neolcin@phe.gov.uk.
Acknowledgement of receipt will be made within two working days. A register is
maintained of issues raised and requests for change which is available on request.

Issues are logged and reviewed first by the standard’s implementation manager and
then, if necessary, by the Clinical and Professional Assurance Group or Technical
Advisory and Support Group and recommendations made to the Implementation and
Data Set Management Group. If required, addition guidance is sought from external
experts or professional associations. The issue raiser will be kept appraised of progress
through the process. Requests for change are reviewed by the Clinical and Professional
Advisory Group and/or the Technical Advisory and Support Group and
recommendations made to the Implementation and Dataset Management Group for
decision. When required, requests for changes to the information standard will be made
to SCCI, as required but generally not more frequently than two yearly.

If organisations decide to extend the core data set, local systems will be required
to support maintenance of these additional items. Please refer to Palliative care
co-ordination Implementation Guidance for further detail.

A full review of the standard is undertaken on a three-year cycle, unless required
sooner, by the group, Public Health England, NHS England or SCCI. A post
implementation review was carried out and reported to the Information Standards Board
in March 2014. The next review is expected to take place 12 months after acceptance of
the Amd 11/2015 and thereafter on a 3-yearly basis unless required earlier.




                                                        41
Palliative care co-ordination: core content. Requirements Specification




6. Content elements, description and
details
Notes

1. Cardinality
   The number of entries for each content element will depend on local requirements
   and system capabilities, but it is expected that multiple entries will be supported for
   the following data items:

    Disability
    Care workers involved in care: name
    Care workers involved in care: professional group
    Other relevant end of life diagnoses and clinical problems
    Allergies/adverse drug reactions
    Advance statements requirements and preferences
    All telephone numbers

2. Status
   Status is defined as mandatory, required or optional for completion. The definitions
   are:

      Mandatory                   This signifies that the collection of the data item is deemed
                                  MANDATORY and its presence is necessary

      Required                    This signified that the data item must be supported and
                                  populated if the data is available

      Optional                    This signifies that the collection of the data item is
                                  OPTIONAL. Its inclusion is therefore determined by ‘local
                                  agreement’ between the ORGANISATIONS exchanging the
                                  data




                                                        42
Palliative care co-ordination: core content. Requirements Specification



Data Items
1.       Consent status
2.       Record creation date
3.       Planned review date
4.       Date and time of last amendment
5.       Person family name
6.       Person forename
7.       Person preferred name
8.       Person birth date
9.       NHS number
10.      NHS number status indicator code
11.      Person gender
12.      Person address
13.      Person telephone numbers
14.      Need for an Interpreter
15.      Preferred spoken language
16.      Main carer name
17.      Main carer telephone numbers
18.      Is main carer aware of person’s prognosis?
19.      Usual GP name
20.      Practice details including phone and fax numbers
21.      Key worker name if not usual GP
22.      Key worker telephone number
23.      Care workers involved in care: name
24.      Care workers involved in care: professional group
25.      Telephone numbers for care workers involved in care
26.      Primary end of life care diagnosis
27.      Other relevant end of life care diagnoses and clinical issues
28.      Disability
29.      Functional status
30.      Allergies/adverse drug reactions
31.      Anticipatory medicines/just in case box issued
32.      Location of anticipatory medicines/just in case box
33.      EoLC tool in use? (eg GSF, PPC, other)
34.      Likely prognosis
35.      Advance statement requests and preferences
36.      Preferred place of death 1st choice
37.      Preferred place of death organisation name (1st choice)
38.      Preferred place of death address (1st choice)
39.      Preferred place of death (1st choice) is usual place of residence
40.      Preferred place of death 2nd choice
41.      Preferred place of death organisation name (2nd choice)
42.      Preferred place of death address (2nd choice)
43.      Preferred place of death (2nd choice) is usual place of residence
44.      Cardiopulmonary resuscitation decision
45.      Date of cardiopulmonary resuscitation decision
46.      Date for review of cardiopulmonary resuscitation decision
47.      Location of cardiopulmonary resuscitation documentation
48.      Awareness of cardiopulmonary resuscitation decision
49.      Person has made an advance decision to refuse treatment

                                                        43
Palliative care co-ordination: core content. Requirements Specification




50.      Location of advance decision to refuse treatment documentation
51.      Name of Lasting Power of Attorney for personal welfare
52.      Authority of LPA
53.      Telephone number(s) concerning Lasting Power of Attorney
54.      Name of additional person to be involved in decisions (1)
55.      Telephone number of person (1) to be involved in decisions
56.      Name of additional person to be involved in decisions (2)
57.      Telephone number of person (2) to be involved in decisions
58.      Other relevant issues or preferences about provision of care
59.      Date of death
60.      Actual place of death




                                                        44
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

1.    Consent status

NHS Data Model and Dictionary Element name

No Entry

NHS Data Model and Dictionary Note

N/A

Format

SNOMED read codes as stated.

Description

Separate explicit consent is required for creation and sharing of the end of life care
co-ordination record. This data item records how this consent has been granted in order to
differentiate between individual’s explicit consent, best interest decision, Lasting Power of
Attorney decision and withdrawal of consent.

Requirement

To provide clarity of the type of consent that has been granted (ie whether explicit, best interest
decision, lasting Power of Attorney consent) and where consent has been withdrawn. By
recording where a best interest decision or Lasting Power of Attorney has been made for the
record, professionals are alerted of potential mental capacity issues.

Source

Manual

SNOMED CT

882921000000109 | Consent given for sharing end of life care coordination record (finding) |
882941000000102 | Withdrawal of consent for sharing end of life care coordination record
(finding) |
882961000000101 | Best interests decision taken (Mental Capacity Act 2005) for sharing end
of life care coordination record (finding) |
883001000000106| Consent given by appointed person with lasting power of attorney for
personal welfare (Mental Capacity Act 2005) for sharing end of life care co-ordination record
(finding) |




                                                        45
Palliative care co-ordination: core content. Requirements Specification




Read CTV3

XaaYI | Consent given for sharing end of life care coordination record (finding) |
XaaYJ | Withdrawal of consent for sharing end of life care coordination record (finding) |
XaaYK | Best interests decision taken (Mental Capacity Act 2005) for sharing end of life care
coordination record (finding) |
XaaYM | Consent given by appointed person with lasting power of attorney for personal welfare
(Mental Capacity Act 2005) for sharing end of life care coordination record (finding) |

Read V2

9Nu6. | Consent given for sharing end of life care coordination record (finding) |
9Nu7. | Withdrawal of consent for sharing end of life care coordination record (finding) |
9Nu8. | Best interests decision taken (Mental Capacity Act 2005) for sharing end of life care
coordination record (finding) |
9Nu90 | Consent given by appointed person with lasting power of attorney for personal welfare
(Mental Capacity Act 2005) for sharing end of life care coordination record (finding) |

Data Entry Status

Mandated




                                                        46
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

2.       Record creation date

NHS Data Model and Dictionary Element name

No Entry

NHS Data Model and Dictionary Note

N/A

Format

Date     an10 CCYY-MM-DD

See ISB 1503 Date Display.

Description

Date the record was created.

Requirement

Provides all users of the register with information about when the person was placed on the
register and the length of time that the person has been on the register.

Source

Autogenerated

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Mandatory




                                                        47
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

3.     Planned review date
NHS Data Model and Dictionary Element name

Review Date

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/r/rep/review_date_de.asp?showna
v=1

Format

Date     an10 CCYY-MM-DD

See also ISB 1502 Date and Time Input and ISB 1503 Date Display.

Description

Date the record is due for review. Date to be set at creation of the record and at review date by
professional, in consultation with the person.

Requirement

It is crucial that records are kept up to date and to ensure that any changes in details of
people’s preferences are recorded. Setting a review date will help to facilitate this.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Required




                                                        48
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

4.     Date and time of last amendment
NHS Data Model and Dictionary Element name

No Entry
NHS Data Model and Dictionary Note

N/A

Format

Date     an10 CCYY-MM-DD

Time     eight characters HH:MM:SS

See also ISB 1502 Date and Time Input; ISB 1503 Date Display and ISB 1501 Time Display.

Description

Date and time that any data item in the record was last amended.

Requirement

To inform of when changes were last made to the record.

Source

Autogenerated

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Mandatory

Note

Audit trail of all amendments is required.




                                                        49
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

5.    Person family name
NHS Data Model and Dictionary Element name

Person Family Name

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pers/person_family_name_de.as
p?shownav=1

Format

NHS Data Model and Dictionary

See also ISB 1506 Patient Name Input and Display.

Description

That part of a PERSON's name which is used to describe family, clan, tribal group, or marital
association.

Requirement

To identify the person and to provide information for services providers on how to address the
person.

Source

Auto generated from PDS or GP record OR Manual.

SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Mandatory




                                                        50
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

6.    Person forename
NHS Data Model and Dictionary Element name

Person Given Name (First)
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pers/person_given_name_de.as
p?shownav=1

Format

NHS Data Model and Dictionary
See also ISB 1506 Patient Name Input and Display.

Description

The forename or given name of a PERSON.

Requirement

To identify the person and to provide information for services providers on how to address the
person.

Source

Autogenerated from PDS or GP record OR Manual.

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data Entry Status

Mandatory




                                                        51
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

7.    Person preferred name
NHS Data Model and Dictionary Element name

No Entry

NHS Data Model and Dictionary Note

N/A

Format

Free text

See also ISB 1506 Patient Name Input and Display.

Description

The name that a person wishes staff to address them by.

Requirement

To provide information for services providers on how to address the person.

Source

Autogenerated from PDS or GP record OR Manual.

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                        52
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

8.    Person birth date
NHS Data Model and Dictionary Element name

Person birth date
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pers/person_birth_date_de.asp?
shownav=1

Format

NHS Data Model and Dictionary            an10 CCYY-MM-DD

See also ISB 1502 Date and Time Input and ISB 1503 Date Display.

Description

The date on which a PERSON was born or is officially deemed to have been born
Requirement

Additional identifier.
Source

Autogenerated from PDS or GP record OR Manual.
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Mandatory




                                                        53
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

9.    NHS number
NHS Data Model and Dictionary Element name

NHS number

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/n/nhs/nhs_number_de.asp?shown
av=1

Format

NHS Data Model and Dictionary

See also ISB 1504 NHS Number Input and Display.

Description

The primary identifier of a PERSON, a unique identifier for a PATIENT within the NHS in
England and Wales.

Requirement

Main identifier for linkage against other records.

Source

Autogenerated from PDS or GP record OR manual.

[To be autogenerated whenever possible]

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Mandatory




                                                        54
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

10. NHS number status indicator code
NHS Data Model and Dictionary Element name

NHS number status indicator code

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/n/nhs/nhs_number_status_indicat
or_code_de.asp?query=nha number status&rank=100&shownav=1

Format

NHS Data Model and Dictionary

See also ISB 1504 NHS Number Input and Display.

01 Number present and verified

02 Number present but not traced

03 Trace required

04 Trace attempted – no match or multiple match found

05 Trace needs to be resolved – (NHS number or PATIENT detail conflict)

06 Trace in progress

Description

Status of the NHS number recorded in the record.

Requirement

To support completion and verification of NHS number.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A




                                                        55
Palliative care co-ordination: core content. Requirements Specification




Read V2

N/A

Data entry status

Mandatory




                                                        56
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

11. Person gender
NHS Data Model and Dictionary Element name

Person stated gender code

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/attributes/p/person/person_stated_gender_code_de
.asp?shownav=1
Format

NHS Data Model and Dictionary or SNOMED/READ terminology
NHS Data Model and Dictionary:
National codes:
1    Male
2    Female
9    Indeterminate (unable to be classified as either male or female)


Description

The gender of a PERSON.

PERSON STATED GENDER CODE is self declared or inferred by observation for those unable
to declare their PERSON STATED GENDER.
Requirement

This information may be required when arranging appropriate care for the person or if a person
is being admitted to hospital for example.

Source

Autogenerated from PDS or GP record OR Manual.

SNOMED CT

248152002 | Female (finding) |
248153007 | Male (finding) |

Read CTV3

X768C | Female |
X768D | Male |




                                                        57
Palliative care co-ordination: core content. Requirements Specification




Read V2

1K1.. | Female |
1K0.. | Male |

Data entry status

Optional




                                                        58
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

12. Person address
NHS Data Model and Dictionary Element name

Patient usual address
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pat/patient_usual_address_de.a
sp?shownav=1

Format

NHS Data Model and Dictionary

See also: ISB 1500 Address Input and Display.
Description

The current usual place of residence.
Requirement

Care may be provided in person’s home and therefore the address details are required.
Source

Autogenerated from PDS or GP record OR Manual.
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Mandatory




                                                        59
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

13. Person telephone numbers
NHS Data Model and Dictionary Element name

Contact Telephone number (home)
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/c/cons/contact_telephone_number
_(home)_de.asp?shownav=1

Format

NHS Data Model and Dictionary

See also: ISB 1508 Telephone Number Input and Display.

Description

Telephone contact details of the person. To include mobile and home number if available.

Requirement

Care may be provided in person’s home and therefore the telephone number will enable
professional staff to make prompt contact with person to arrange visits and to co-ordinate any
support required.

Source

Autogenerated from PDS or GP record OR Manual.

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                        60
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

13. Person telephone numbers (continued)
NHS Data Model and Dictionary Element name

Contact telephone number (mobile)
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/c/cons/contact_telephone_number
_(mobile)_de.asp?shownav=1
Format

NHS Data Model and Dictionary

See also: ISB 1508 Telephone Number Input and Display.

Description

N/A
Requirement

N/A
Source

N/A
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                        61
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

14. Need for an interpreter
NHS Data Model and Dictionary Element name

No Entry

NHS Data Model and Dictionary Note

N/A

Format

Use terminology codes provided.

Description

Requirement for an interpreter to support communication with health and social care staff as
identified by the person.

Requirement

This information will provide warning that an interpreter will be required to support
communication.

Source

Manual

SNOMED CT

<315594003 | Interpreter needed (finding) |
315595002 | Interpreter not needed (finding) |

Read CTV3

<XaI8X | Interpreter needed |
XaI8Y | Interpreter not needed |

Read V2

<9NU0.. | Interpreter needed |
9NU1..| Interpreter not needed |

Data entry status

Optional




                                                        62
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

15. Preferred spoken language
NHS Data Model and Dictionary Element name

Preferred communication language

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pot/preferred_communication_la
nguage_de.asp

Format

Pick list of codes drawn from the specified sections of terminology coding as stated.
Description

The language that the person identifies as their preferred language for spoken communication.

Requirement

To enable provision of appropriate language support for communication with the person if
required.

Source

Manual.

SNOMED CT

<370157003 | Main spoken language (finding) |

Read CTV3

<XaPGi | Main spoken language N - Z |
<XaPGh | Main spoken language A - M |
Read V2

<13l.. | Main spoken language |
<13u.. | Additional main spoken language |
<13w.. | Supplemental main language spoken |

Data entry status

Optional




                                                        63
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

16. Main carer name
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Suggest use and reference formats used in the NHS Data Model and Dictionary as shown in
Person Full Name
See also ISB 1506 Patient Name Input and Display AND SNOMED/Read codes or Freetext as
stated below.

Description

A carer is a person who is either providing or intending to provide a substantial amount of
unpaid care on a regular basis for someone who is disabled, ill or frail. A carer is usually a
family member, friend or neighbour and does not include care workers. (Carers (Recognition
and Services) Act 1995.)

Note: The main carer will be identified by the individual or the person’s GP or key worker if the
person lacks capacity to identify one themselves.
Requirement

People at the end of life may not be well enough to communicate with care professionals to
arrange visits or care details and communication may be made with a family member or carer.
In addition to the name of the identified main carer, this data item identifies whether an
individual has access to support from a carer which is valuable information for care planning. It
also alerts professionals that a carer’s assessment should be offered.

Source

Manual

SNOMED CT

184156005 | Has a carer (finding)
414041006 | Does not have a carer (finding)

Unknown specified as free text




                                                        64
Palliative care co-ordination: core content. Requirements Specification




Read CTV3

918F. | Has a carer |
XaJvD | Does not have a carer |

Unknown specified as free text
Read V2

918F. | Has a carer |
918V. | Does not have a carer|

Unknown specified as free text

Data entry status

Coded content is mandatory




                                                        65
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

17. Main carer telephone numbers
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Suggest use and reference formats used in the NHS Data Model and Dictionary given as
shown in Contact telephone number
See also: ISB 1508 Telephone Number Input and Display.

Description

The contact telephone numbers for the main family member or carer identified by the person to
hold major responsibility for providing their care and support.

Requirement

To enable care staff to make contact with the main family member or carer to arrange visits or
to co-ordinate care when it is more appropriate than contacting the person at the end of life.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                        66
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

18. Is main carer aware of person’s prognosis?
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

SNOMED/Read codes provided.

Description

Awareness of the prognosis is taken to mean an awareness that the life span is limited.

Requirement

To enable staff to have open conversations with people and their families about future plans.

Source

Manual

SNOMED CT

751961000000104 | Relative aware of prognosis (situation) |
760101000000101 | Relative unaware of prognosis (situation) |
473301001 | Care giver aware of prognosis (situation) |
Preferred synonym | Carer aware of prognosis | (description ID 2956650010)*
711951000000105 | Carer unaware of prognosis (situation) |

*Note: this will be updated as UK specified preferred term for the October 2015 release
Read CTV3

XaX1e | Relative aware of prognosis |
XaXBG | Relative unaware of prognosis |
XaX1d | Carer aware of prognosis |
XaVzE | Carer unaware of prognosis |




                                                        67
Palliative care co-ordination: core content. Requirements Specification




Read V2

66W31 | Relative aware of prognosis |
66W41 | Relative unaware of prognosis |
66W30 | Carer aware of prognosis |
66W40 | Carer unaware of prognosis |

Data entry status

Optional




                                                        68
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

19. Usual GP name
NHS Data Model and Dictionary Element name

Person name (specified general medical practitioner)

NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/p/pers/person_name_(specified_g
eneral_medical_practitioner)_de.asp?shownav=1

Format

Locally provided list of GP names and ODS codes.

Description

The name of the GP currently providing care for the person or the GP that the person is
registered with.

Requirement

The GP is a key member of the team who holds information and records for the person which
may be required by health and social care staff caring for the person. (GPs need to be informed
if people are close to death to avoid unnecessary referral to the coroner following death).

Source

Autogenerated from PDS or GP record OR Manual.

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Mandatory




                                                        69
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

20. Practice details including phone and fax numbers
NHS Data Model and Dictionary Element name

General medical practice code (patient registration)

See ISB 0090 Organisation Data Service
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/g/general_medical_practice_code
_(patient_registration)_de.asp?shownav=1

Format

NHS Data Model and Dictionary
Description

The practice name, address, telephone and fax details of the GP that the person is registered
with.
Requirement

Contact details are required to enable care providers to contact the GP if required.
Source

Autogenerated from PDS or GP record OR Manual.
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Mandatory




                                                        70
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

21. Key worker name if not usual GP
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary and e-gif as
shown in Person Full Name.
See also ISB 1506 Patient Name Input and Display.

Description

A key worker is a care professional who takes a key role in co-ordinating the care of the patient
and promoting continuity, ensuring the patient knows who to access for information and advice.

Requirement

To identify the lead person for co-ordinating care and who will have an overview of the care
being provided for the person and their current situation.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                        71
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

22. Key worker telephone number
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary given as
shown in Contact telephone number.

See also: ISB 1508 Telephone Number Input and Display.

Description

The contact telephone number of the key worker.
Requirement

To identify the lead person for co-ordinating care and who will have an overview of the care
being provided for the person and their current situation.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                        72
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

23. Care workers involved in care: name
NHS Data Model and Dictionary Element ame

No entry
NHS ata Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary and e-gif as
shown in Person Full Name.

See also ISB 1506 Patient Name Input and Display.

Description

A care worker is employed to support and supervise vulnerable, infirm or disadvantaged
people, or those under the care of the state. They can be volunteers, who provide care as part
of their work for the voluntary organisation, or paid workers, who are providing care by virtue of
a contract of employment or any other contract.

Note: for medical teams this should be the name of the lead consultant. For teams providing
care where an individual carer has not been assigned. This should be the team leader.
Requirement

To provide information to those providing care of the others involved in care delivery in order to
support co-ordination of care.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional


                                                        73
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

24. Care workers involved in care: professional group
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Free text or a locally determined pick list of professional groups.
Description

Identification of the health and social care professionals and staff, including care workers from
voluntary agencies, who provide care and support for the person.

Requirement

To provide information to those providing care of the others involved in care delivery in order to
support co-ordination of care.
Source

Manual
SNOMED CT

305602008 | Under care of dietician (finding) |
305578001 | Under care of district nurse (finding) |
305574004 | Under care of community based nurse (finding) |
305554006 | Under care of nurse (finding) |
305556008 | Under care of clinical nurse specialist (finding) |
850951000000107 | Under care of palliative care specialist nurse (finding) |
853741000000104 | Has healthcare support worker (finding) |
305496007 | Under care of palliative care physician (finding) |
851011000000103 | Under care of oncologist (finding) |
305469009 | Under care of pain management specialist (finding) |
305490001 | Under care of care of the elderly physician (finding) |
305476004 | Under care of respiratory physician (finding) |
305472002 | Under care of cardiologist (finding) |
305494005 | Under care of neurologist (finding) |
305493004 | Under care of nephrologist (finding) |
852031000000100 | Under care of physician (finding) |
305616003 | Under care of speech and language therapist (finding) |
305525000 | Under care of surgeon (finding) |
851821000000100 | Has spiritual and cultural support (finding) |
305605005 | Under care of occupational therapist (finding) |
305613006 | Under care of physiotherapist (finding) |

                                                        74
Palliative care co-ordination: core content. Requirements Specification




850931000000100 | Has social services care manager (finding) |
405775000 | Under care of social worker (finding) |
851851000000105 | Has social care assessor (finding) |
853721000000106 | Has direct care worker (finding) |
Read CTV3

XaARG | Under care of dietician |
XaAQq | Under care of district nurse |
XaAQm | Under care of community based nurse |
XaAQS | Under care of nurse |
XaAQU | Under care of clinical nurse specialist |
XaZhw | Under care of palliative care specialist nurse |
XaZm1 | Has healthcare support worker |
XaAPW | Under care of palliative care physician |
XaZi1 | Under care of oncologist |
XaAP6 | Under care of pain management specialist |
XaAPQ | Under care of care of the elderly physician |
XaAPC | Under care of respiratory physician |
XaAP9 | Under care of cardiologist |
XaAPU | Under care of neurologist |
XaAPT | Under care of nephrologist |
XaAP7 | Under care of physician |
XaAPz | Under care of surgeon |
XaZj7 | Has spiritual and cultural support |
XaARJ | Under care of occupational therapist |
XaARR | Under care of physiotherapist |
XaZhv | Has social services care manager |
XaZj9 | Has social care assessor |
XaZm0 | Has direct care worker |
XaARU | Under care of speech and language therapist |
XaZri | Under care of social worker |
Read V2

9NNd. | Under care of palliative care specialist nurse |
9Ngc. | Has healthcare support worker |
9NNe. | Under care of oncologist |
9NNf. | Under care of physician |
9NgZ. | Has spiritual and cultural support |
9NgW. | Has social services care manager |
9Nga. | Has social care assessor |
9Ngb. | Has direct care worker |
9NNF. | Under care of dietician |
9NNg2 |Under care of district nurse |
9NNg1 | Under care of community based nurse |
9NNg. | Under care of nurse |
9NNg0 | Under care of clinical nurse specialist |
9NNf0 | Under care of palliative care physician |
9NNh. | Under care of pain management specialist |
9NNf1 | Under care of care of the elderly physician |

                                                        75
Palliative care co-ordination: core content. Requirements Specification




9NNf2 | Under care of respiratory physician |
9NNf3 | Under care of cardiologist |
9NNf4 | Under care of neurologist |
9NNf5 | Under care of nephrologist |
9NNi. | Under care of surgeon |
9NNj0 | Under care of occupational therapist |
9NNj1 | Under care of physiotherapist |
9NNj2 | Under care of speech and language therapist |
9NNk. | Under care of social worker |
Data entry status

Optional




                                                        76
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

25. Telephone numbers for care workers involved in care
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary given as
shown in Contact telephone number.

See also: ISB 1508 Telephone Number Input and Display.

Description

The telephone contact details for each professional and staff group identified in 23.
Requirement

To enable staff providing care to make contact with other members of the multidisciplinary team
in order to co-ordinate care.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                        77
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

26. Primary end of life care diagnosis
NHS Data Model and Dictionary Element Name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Code or text
[Coding to be used whenever possible]
Description

The diagnosis that is the main contributing factor to the need for end of life care.
Requirement

Those providing care need to be aware of the diagnosis to ensure that the care provided is safe
and appropriate.
Source

Manual


SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Mandatory




                                                        78
Palliative care co-ordination: core content. Requirements Specification




Content element number and name


27. Other relevant end of life care diagnoses and clinical issues
NHS Data Model and Dictionary Element name

No entry
NHS dData Model and Dictionary Note

N/A
Format

Code or text
Description

Relevant diagnoses and clinical issues that need to be taken account when making end of life
decisions. This includes mental health issues such as depression, anxiety and dementia.
Requirement

Those providing care need to be aware of the diagnosis to ensure that the care provided is safe
and appropriate.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                        79
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

28. Disability
NHS Data Model and Dictionary Element name

Disability code
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/d/disa/disability_code_de.asp?sho
wnav=1

Format

SNOMED read codes as stated below OR short list of disability codes in NHS Data Model and
Dictionary OR freetext.
Description

Functional or cognitive impairments that affect a person’s ability in communication,
understanding, decision making or self-care.
Requirement

It is important that service providers are aware of disabilities as these may affect arrangements
for transportation/admission to hospital/hospice/care home and to ensure that the required
facilities are provided.

Source

Manual

SNOMED CT

Disability                                                     Definition

15188001 | Hearing loss (disorder) |                           Hearing loss that impacts on verbal
                                                               communication

397540003 | Visual impairment (disorder) |                     Visual impairment that impacts on
                                                               communication

288579009 | Difficulty communicating (finding) |

386806002 | Impaired cognition (finding) |                     Cognitive impairment that affects
Preferred synonym: cognitive impairment                        communication, understanding and
                                                               decision making- includes learning
                                                               disability and dementia

325541000000106 | Unable to summon help in
emergency (finding) |


                                                        80
Palliative care co-ordination: core content. Requirements Specification




914271000000103 | Impaired ability to recognise
safety risks (finding) |

750691000000106 | No known disability
(situation) |
703154009 Patient reports no current disability
(situation) |
Other disability (free text)



Read CTV3

Disability                                                     Definition

XE0s9 | Hearing loss |                                         Hearing loss that impacts on verbal
                                                               communication

XE16L | Impaired vision |                                      Visual impairment that impacts on
                                                               communication

Xa4Cq | Difficulty communicating |

Ua189 | Impaired cognition |                                   Cognitive impairment that affects
Preferred synonym: cognitive impairment                        communication, understanding and
                                                               decision making- includes learning
                                                               disability and dementia

Xaato | Unable to summon help in emergency |

XabGs | Impaired ability to recognise safety risks
|

XaX0D | No known disability |

XaaYD | Patient reports no current disability |

Other disability (free text)


Read V2

Disability                                                     Definition

F5A.. | Hearing impairment |                                   Hearing loss that impacts on verbal
                                                               communication

F49D. | Visual impairment |                                    Visual impairment that impacts on
                                                               communication

13oB. | Difficulty communicating |


                                                        81
Palliative care co-ordination: core content. Requirements Specification




28E3. | Cognitive impairment | Preferred                       Cognitive impairment that affects
synonym: cognitive impairment                                  communication, understanding and
                                                               decision making- includes learning
                                                               disability and dementia

1PA0. | Unable to summon help in emergency |

13i2. | Impaired ability to recognise safety risks |

115M. | No known disability |

11520 | Patient reports no current disability |

Other disability (free text)



Data entry status

Required




                                                        82
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

29. Functional status
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

SNOMED read codes as stated below

Description

Assessment of an individual's ability to perform normal daily activities required to meet basic
needs, fulfil usual roles, and maintain health and well‐being.

Requirement

An understanding of the functional status of the individual supports those caring for the person
to plan appropriate care and to ensure that the required facilities are provided.

Source

Manual

SNOMED CT

Modified Karnofsky performance status scale

100%          Normal, no complaints or evidence of disease
90%           Able to carry on normal activity, minor signs or activity
80%           Normal activity with some effort, some signs of symptoms of disease
70%           Care for self, unable to carry on normal activity or to do active work
60%           Occasional assistance but is able to care for most of own needs
50%           Requires considerable assistance and frequent medical care
40%           In bed more than 50% of the time
30%           Almost completely bedfast
20%           Totally bedfast and requiring nursing care by professionals and/or family
10%           Comatose or barely arousable
0%            Dead

901361000000101 | Australia-modified Karnofsky performance status scale (assessment scale)
|

901541000000107 | Assessment using Australia-modified Karnofsky performance status scale
(procedure) |


                                                        83
Palliative care co-ordination: core content. Requirements Specification




901671000000100 | Australia-modified Karnofsky performance status scale score (observable
entity) |

Read CTV3

As above

Xab0M | Australia-modified Karnofsky performance status scale |

Read V2

As above

38QF. | Australia-modified Karnofsky performance status scale |

Data entry status

Required




                                                        84
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

30. Allergies/adverse drug reactions
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Free text or coded in SNOMED CT/Read CTV3/Read V2. (Suggest that codes conform to
SNOMED Classifications).
Description

Details of any allergies or adverse drug reactions that are known for the person.
Requirement

People at the end of their life are often on multiple medicines and these may be prescribed by a
range of staff including out of hours services, ambulances, emergency departments. Details on
allergies and adverse drug reactions will support medical management of a person when the
full medical record is not available.
Source

Autogenerated from Summary Care Record/GP record OR Manual.
SNOMED CT

Where allergies and adverse reactions are represented using SNOMED CT, this MUST be
done in a post coordinated expression (See SCG guidance on the representation of allergies
and adverse reaction information using NHS message templates
http://systems.hscic.gov.uk/data/scg/scg0001.pdf and NPFIT-EP-DB-0007.04 ‘Representation
in electronic patient records of allergic reactions, adverse reactions, and intolerance of
pharmaceutical products’).
Read CTV3

Capture the allergy/adverse reaction propensity or reaction by local system specification which
should include the related specific drug from the Read codes drug and appliance dictionary (or
dm+d for non-Read systems) for a given propensity/reaction.
Read V2

Capture the allergy/adverse reaction propensity or reaction by local system specification which
should include the related specific drug from the Read codes drug and appliance dictionary (or
dm+d for non-Read systems) for a given propensity/reaction.



                                                        85
Palliative care co-ordination: core content. Requirements Specification




Data entry status

Required




                                                        86
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

31. Anticipatory medicines/just in case box issued
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

SNOMED/Read codes as stated (suggest that codes conform to SNOMED classifications).

Description

Prospective prescribing of medications to alleviate pain and other symptoms which are
anticipated may be experienced at the end of life.

Requirement

To inform those providing care that anticipatory medicines or a just in case box have been
issued. These medicines could be administered promptly by appropriate staff if indicated.

Source

Manual

SNOMED CT

376201000000102 | Issue of palliative care anticipatory medication box (procedure)
871021000000106 | Prescription of palliative care anticipatory medication (procedure)

Read CTV3

XaPmq | Issue of palliative care anticipatory medication box |
XaaD3 | Prescription of palliative care anticipatory medication|

Read V2

8BMM. | Issue of palliative care anticipatory medication box |
8B2a. | Prescription of palliative care anticipatory medication |

Data entry status

Optional




                                                        87
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

32. Location of anticipatory medicines/just in case box
NHS Data Model and Dictionary Element Name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Free text

Description

Details of where anticipatory medicines/just-in-case box is kept.

Requirement

To enable those providing care to access anticipatory medicines if required.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                        88
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

33. EoLC tool in use? (eg GSF, PPC, other)
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

SNOMED/Read codes as stated
Description

Tools to support delivery of end of life care.
Requirement

To alert those caring for a person that information relating to care and preferences has been
recorded.
Source

Manual
SNOMED CT

414937009 | On gold standards palliative care framework (finding) |
785091000000102 | Preferred priorities for care document completed (situation) |
Read CTV3

XaJv2 | On gold standards palliative care framework |
XaXrX | Preferred priorities for care document completed |
Read V2

8CM1. | On gold standards palliative care framework |
9NgJ. | Preferred priorities for care document completed |
Data entry status

Optional




                                                        89
Palliative care co-ordination: core content. Requirements Specification




34.     Likely prognosis


NHS Data Model and Dictionary Element name

No Entry
NHS Data Model and Dictionary Note

N/A
Format

SNOMED/Read codes as stated

Description

A clinical judgement indicating the anticipated period of time until death.

Last days of life (definition: death is likely in <1 week)
Last weeks of life (definition: death is likely in <1 month)
Last months of life (definition: death is likely in <1 year)

Requirement

Used to denote those who are nearing their last months/weeks/days of life but with recognition
of the uncertainty related to such a judgement.

Source

Manual

SNOMED

511401000000102 | Last days of life (finding)
955231000000109 | Last weeks of life | (finding)
| Last months of life (finding) | (Code to be released October 2015)
Read CTV3

XaQg1 | Last days of life
XacFk | Last weeks of life |
| Last months of life | (Code to be released October 2015)
Read V2

2JE.. | Last days of life
2Jf.. | Last weeks of life |
| Last months of life | (Code to be released October 2015)




                                                        90
Palliative care co-ordination: core content. Requirements Specification




Data entry status

Optional
Note

This data item can only be completed by key worker, GP or responsible clinician.




                                                        91
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

35. Advance statement requests and preferences
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Free text
Description

Written requests and preferences made by a person with capacity for their future care should
they lose capacity.
Requirement

Advance statements should be used to help find out what somebody’s wishes and feelings
might be, as part of working out their best interests when they have lost capacity to decide.
They are not the same as advance decisions to refuse treatment and are not binding.
Source

Manual
SNOMED CT

816281000000101 | Has advance statement (Mental Capacity Act 2005) (finding) |
Read CTV3

XaYlc | Has advance statement (Mental Capacity Act 2005) |
Read V2

9NgH. | Has advance statement (Mental Capacity Act 2005) |
Data entry status

Optional




                                                        92
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

36. Preferred place of death 1st choice
NHS Data Model and Dictionary Element name

Death location type code
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/d/dea/death_location_type_(prefer
red)_de.asp?shownav=1

Format

NHS Data Model and Dictionary codes plus SNOMED/Read codes stated plus free text.

Description

The preferences that an individual has identified as their preferred place to die.

Requirement

To facilitate the planning for place of care as a person approaches the end of life. Avoids the
need for multiple agencies to ask a person the same question routinely.

Source

Manual

NHS Data Model and Dictionary

10    Hospital
      Acute*
      Community**
      Other

20    Private residence
21    PATIENT's own home
22    Other private residence (eg relatives home, carers home)

30    Hospice (inpatient specialist palliative care)***

40    Care Home

50    Other (free text eg secure and detained settings)

*Acute hospitals provide a wide range of specialist care and treatment for patients. Services
offered in acute hospitals include:



                                                        93
Palliative care co-ordination: core content. Requirements Specification




    consultation with specialist clinicians (consultants, nurses, dieticians,
     physiotherapists and a wide range of other professionals)
   emergency treatment following accidents
   routine, complex and life-saving surgery
   specialist diagnostic, therapeutic and palliative procedures
www.nrls.npsa.nhs.uk/resources/healthcare-setting/acute-hospital

**The community hospital is a service that offers integrated health and social care and is
supported by community-based professionals (Meads, G. Participate. University of Warwick,
2004).

***Hospice includes NHS and voluntary specialist palliative care inpatient beds, including those
located in NHS hospitals and on NHS hospital grounds.
SNOMED CT

517111000000103 | Preferred place of death: patient unable to express preference (finding) |
517131000000106 | Preferred place of death: discussion not appropriate (finding) |
766391000000108 | Preferred place of death: patient declined discussion (finding) |
517161000000101 | Preferred place of death: patient undecided (finding) |

Read CTV3

XaQzq | Preferred place of death: patient unable to express preference |
XaQzr | Preferred place of death: discussion not appropriate |
XaXOt | Preferred place of death: patient declined discussion |
XaQzt | Preferred place of death: patient undecided |
Read V2

94Z6. | Preferred place of death: patient unable to express preference |
94Z7. | Preferred place of death: discussion not appropriate |
94ZD. | Preferred place of death: patient declined discussion |
94Z8. | Preferred place of death: patient undecided |
Data entry status

Optional

Notes:

The listed categories for preferred place of death align with the Community Information Data
set SCCI1510.
Death in usual place of residence is a key performance indicator for end of life care.
IT systems need to provide a prompt to alert professionals when this data item has not been
completed.




                                                        94
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

37. Preferred place of death organisation name (1st choice)
NHS Data Model and Dictionary Element name

Organisation name
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/o/org/organisation_name_de.asp?
shownav=1

Format

NHS Data Model and Dictionary
Description

The organisation name of the place that individual has identified as their preferred place to die.
Requirement

To provide clarity on the specific location eg the name of a care home or hospice.
Source

Manual
Data entry status

Optional




                                                        95
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

38. Preferred place of death address (1st choice)
NHS Data Model and Dictionary Element Name

Address (generic)
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/classes/a/address_de.asp?shownav=1
Format

NHS Data Model and Dictionary
See also: ISB 1500 Address Input and Display.
Description

The address of the place that individual has identified as their preferred place to die.

Requirement

To provide clarity on the specific location eg the address of a care home or relative’s address.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A

Data entry status

Optional




                                                        96
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

39. Preferred place of death (1st choice) is usual place of residence
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Manual
Description

Information on whether the place that individual has identified as their preferred place to die is
their usual place of residence.

Requirement

To support care planning and to allow monitoring of this quality marker.
Source

Manual
SNOMED CT

819211000000102 | Preferred place of death: usual place of residence (finding) |

Read CTV3

XaYsj | Preferred place of death: usual place of residence |


Read V2

94ZF. | Preferred place of death: usual place of residence |
Data entry status

Optional




                                                        97
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

40. Preferred place of death 2nd choice
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

NHS Data Model and Dictionary codes plus SNOMED/Read codes plus free text as stated in
data item 36 Preferred place of death 1st choice.

Description

The second choice for preferred place of death as specified by the person.
Requirement

As above

Source

Manual

SNOMED CT

As in data item 36 Preferred place of death 1st choice

Read CTV3

As in data item 36 Preferred place of death 1st choice

Read V2

As in data item 36 Preferred place of death 1st choice

Data entry status

Optional




                                                        98
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

41. Preferred place of death organisation name (2nd choice)
NHS Data Model and Dictionary Element name

Organisation name
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/data_field_notes/o/org/organisation_name_de.asp?
shownav=1

Format

NHS Data Model and Dictionary
Description

The organisation name of the place that individual has identified as their 2 nd preferred place to
die.
Requirement

To provide clarity on the specific location eg the name of a care home or hospice.
Source

Manual
Data entry status

Optional




                                                        99
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

42. Preferred place of death address (2nd choice)
NHS Data Model and Dictionary Element name

Address (generic)
NHS Data Model and Dictionary Note

www.datadictionary.nhs.uk/data_dictionary/classes/a/address_de.asp?shownav=1

Format

NHS Data Model and Dictionary

See also: ISB 1500 Address Input and Display.
Description

The address of the place that individual has identified as their 2 nd preferred place to die.

Requirement

To provide clarity on the specific location eg the address of a care home or relative’s address.
Source

Manual
SNOMED CT

N/A

Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       100
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

43. Preferred place of death (2nd choice) is usual place of residence
NHS data model and dictionary element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Manual
Description

Information on whether the place that individual has identified as their 2 nd preferred place to die
is their usual place of residence.

Requirement

To support care planning and to allow monitoring of this quality marker.
Source

Manual
SNOMED CT

819211000000102 | Preferred place of death: usual place of residence (finding) |

Read CTV3

XaYsj | Preferred place of death: usual place of residence |
Read V2

94ZF. | Preferred place of death: usual place of residence |
Data entry status

Optional




                                                       101
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

44. Cardiopulmonary resuscitation decision
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

SNOMED/Read codes as stated.
In addition a free text field for ‘Resuscitation status unknown’ with accompanying guidance to
type ‘unknown’.
Description

The senior responsible clinician for a person may record their opinion and recommendation for
future management should a cardiopulmonary arrest occur as ‘Do not attempt
cardiopulmonary resuscitation’ (DNACPR) orders in the following circumstances:
1.    Where cardiac or respiratory arrest is an expected part of the dying process and it is the
      opinion of the senior responsible clinician that attempted cardiopulmonary resuscitation
      would be unsuccessful or the outcome would be unacceptably burdensome for the
      person.
2.    Where a person has given instructions that, in the event of cardiopulmonary arrest, they
      do not want attempted cardiopulmonary resuscitation.
Some patients with capacity to make their own decision may refuse attempted cardiopulmonary
resuscitation in advance. These decisions have to be registered as part of an advance decision
to refuse treatment (ADRT).
Requirement

To ensure that all healthcare professionals involved in an individual’s care are aware of the
decision that an attempt at cardiopulmonary resuscitation would not be successful or would not
be in the person’s best interests. Recording of DNACPR decisions will support professional
decision making should a cardiopulmonary arrest occur and will avoid the carrying out of
invasive procedures on a person when a clinical decision has already been made that to
attempt resuscitation would not be in the person’s interest.
Source

Manual
SNOMED CT

450475007 | For attempted cardiopulmonary resuscitation (finding) |
450476008 | Not for attempted cardiopulmonary resuscitation (finding) |



                                                       102
Palliative care co-ordination: core content. Requirements Specification




Read CTV3

XaZVX | For attempted cardiopulmonary resuscitation |
XaZ9c | Not for attempted CPR (cardiopulmonary resuscitation) |
Read V2

1R00. | For attempted cardiopulmonary resuscitation |
1R10. | Not for attempted CPR (cardiopulmonary resuscitation) |
Data entry status

Optional




                                                       103
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

45. Date of cardiopulmonary resuscitation decision
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Date     an10 CCYY-MM-DD

See also ISB 1502 Date and Time Input and ISB 1503 Date Display

Description

Date that the cardiopulmonary resuscitation decision was made.

Requirement

In the case of multiple DNACPR documents, to provide clarity for those caring for the person at
the time of a cardio-pulmonary arrest, on the current decision.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                       104
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

46. Date for review of cardiopulmonary resuscitation decision
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Date     an10 CCYY-MM-DD

See also ISB 1502 Date and Time Input and ISB 1503 Date Display.
Description

Date set by the responsible clinician for the cardiopulmonary resuscitation decision to be
reviewed.
Requirement

To support timely review of cardiopulmonary resuscitation decisions and so provide carers with
an accurate record of the current cardio pulmonary resuscitation status.
Source

Autogenerated
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       105
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

47. Location of cardiopulmonary resuscitation documentation
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Free text

Description

Details of where the original copy of the DNACPR documentation is kept. Optional – an upload
of the document.

Requirement

To provide those caring for the person at the time of a cardiopulmonary arrest with access to
robust information to guide their actions.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                       106
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

48. Awareness of cardiopulmonary resuscitation decision
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Coded in SNOMED CT/Read CTV3/Read V2. (Suggest that codes conform to SNOMED
Classifications).

Description

Whether the person and their family member/carer have been informed of the clinical decision
made regarding cardiopulmonary resuscitation.

Requirement

To provide clarity for staff on the information that has been given to the person and their family
and carers to support their conversations with people and their families.

Source

Manual

SNOMED CT

845151000000104 | Not aware of do not attempt cardiopulmonary resuscitation clinical
decision (finding) |
| Family member informed of cardiopulmonary resuscitation clinical decision (situation) |
Code to be published in October 2015
| Carer informed of cardiopulmonary resuscitation clinical decision (situation) | Code to be
published in October 2015

Read CTV3

XaZZn | Not aware of do not attempt cardiopulmonary resuscitation clinical decision |
| Family member informed of cardiopulmonary resuscitation clinical decision | Code to be
published in October 2015
| Carer informed of cardiopulmonary resuscitation clinical decision | Code to be published in
October 2015




                                                       107
Palliative care co-ordination: core content. Requirements Specification




Read V2

9NgV. | Not aware of do not attempt cardiopulmonary resuscitation clinical decision |
| Family member informed of cardiopulmonary resuscitation clinical decision | Code to be
published in October 2015
Carer informed of cardiopulmonary resuscitation clinical decision | Code to be published in
October 2015

Data entry status

Optional

Notes

Not aware of do not attempt cardiopulmonary resuscitation clinical decision relates to the
individual ie the patient is not aware of the decision.
More than one option can be selected for this data item.




                                                       108
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

49. Person has made an advance decision to refuse treatment
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

SNOMED/Read codes as stated
Description

An advance decision to refuse treatment (ADRT) is a decision to refuse a specific treatment
made in advance by a person who has capacity to do so. This decision only applies at a future
time when that person lacks capacity to consent to, or refuse, the specified treatment.
Requirement

To alert those caring for a person are aware that the person has made decisions regarding their
future care in the event that they lose capacity.
Source

Manual
SNOMED CT

816301000000100 | Has advance decision to refuse treatment (Mental Capacity Act 2005)
(finding) |
816321000000109 | Has advance decision to refuse life sustaining treatment (Mental Capacity
Act 2005) (finding) |
820621000000107 | Has involved healthcare professional in discussion about advance
decision to refuse treatment (Mental Capacity Act 2005) (finding) |
Read CTV3

XaYld | Has ADRT (advance decision to refuse treatment) (Mental Capacity Act 2005) |
XaYle | Has advance decision to refuse life sustaining treatment (Mental Capacity Act 2005) |
XaYv4 | Has involved healthcare professional in discussion about ADRT (advance decision to
refuse treatment) (Mental Capacity Act 2005)|
Read V2

9NgG. | Has ADRT (advance decision to refuse treatment) (Mental Capacity Act 2005) |
9NgG0 | Has advance decision to refuse life sustaining treatment (Mental Capacity Act 2005) |
9NgK. | Has involved healthcare professional in discussion about ADRT (advance decision to
refuse treatment) (Mental Capacity Act 2005) |


                                                       109
Palliative care co-ordination: core content. Requirements Specification




Data entry status

Optional




                                                       110
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

50. Location of advance decision to refuse treatment documentation
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Free text
Description

Details of where the original ADRT documentation is kept or an upload of the document.
Requirement

To avoid carrying out an invasive procedure on a person when a clinical decision would not be
in the person’s best interests.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       111
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

51. Name of Lasting Power of Attorney for personal welfare
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary and e-gif as
shown in Person Full Name.

See also ISB 1506 Patient Name Input and Display.

Description

Name of person appointed as Lasting Power of Attorney for personal welfare
Requirement

It is important that all staff caring for a person can access any advanced care plans or identify
the person who holds lasting power of attorney in the event that a person loses mental
capacity. This will ensure that a person’s wishes can be taken into account.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       112
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

52. Authority of LPA
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

SNOMED/Read codes as stated.

Description

The type of LPA for personal welfare that has been given
1: without authority for life sustaining decisions
2: with authority for life sustaining decisions

Requirement

To provide staff caring for the person with an understanding of the authority that has been
granted to the LPA which will support communication with LPA and prompt delivery of
appropriate care.

Source

Manual

SNOMED CT

816361000000101 | Has appointed person with personal welfare lasting power of attorney
(Mental Capacity Act 2005) (finding) |
816381000000105 | Has appointed person with personal welfare lasting power of attorney with
authority for life sustaining decisions (Mental Capacity Act 2005) (finding) |
Read CTV3

XaYlg | Has appointed person with personal welfare lasting power of attorney (Mental Capacity
Act 2005) |
XaYlh | Has appointed person with personal welfare lasting power of attorney with authority for
life sustaining decisions (Mental Capacity Act 2005) |
Read V2

9W8.. | Has appointed person with personal welfare lasting power of attorney (Mental Capacity
Act 2005) |
9W80. | Has appointed person with personal welfare lasting power of attorney with authority for
life sustaining decisions (Mental Capacity Act 2005) |

                                                       113
Palliative care co-ordination: core content. Requirements Specification




Data entry status

Optional




                                                       114
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

53. Telephone number(s) concerning Lasting Power of Attorney
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary given as
shown in Contact telephone number.

See also: ISB 1508 Telephone Number Input and Display.

Description

Telephone numbers of person that has been appointed by the person as a LPA.
Requirement

It will enable the person who holds lasting power of attorney to be contacted easily, in the event
of a decision needing to be taken, to ensure the person at the end of life has their wishes taken
into account.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       115
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

54. Name of additional person to be involved in decisions (1)
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary and e-gif as
shown in Person Full Name.

See also ISB 1506 Patient Name Input and Display.

Description

The name of the first person that the individual, with capacity, has identified in an advance
statement, to be consulted on decisions about their care in the event that they lose mental
capacity.
Requirement

A person may also have indicated that others should be involved in their care should they lose
capacity. To provide all staff with the information to support the wishes of the person
approaching the end of their life.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       116
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

55. Telephone number of person (1) to be involved in decisions
NHS Data Model and Dictionary Element name

No entry

NHS Data Model and Dictionary Note

N/A

Format

Suggest use and reference formats used in the NHS Data Model and Dictionary given as
shown in Contact telephone number.

See also: ISB 1508 Telephone Number Input and Display.

Description

The contact telephone details of the first person (other than LPA) that the individual, with
capacity, has identified in an advance statement, to be consulted on decisions about their care
in the event that they lose mental capacity.

Requirement

To enable staff to make prompt contact with the person to provide guidance on decisions for
care and so support the wishes of the person approaching the end of their life.

Source

Manual

SNOMED CT

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Optional




                                                       117
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

56. Name of additional person to be involved in decisions (2)
NHS Data Model and Dictionary Element name

No entry
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary and e-gif as
shown in Person Full Name.

See also ISB 1506 Patient Name Input and Display.

Description

The name of the second person (other than LPA) that the individual, with capacity, has
identified in an advance statement, to be consulted on decisions about their care in the event
that they lose mental capacity.
Requirement

A person may also have indicated that others should be involved in their care should they lose
capacity. To provide all staff with the information to support the wishes of the person
approaching the end of their life.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       118
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

57. Telephone number of person (2) to be involved in decisions
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Suggest use and reference formats used in the NHS Data Model and Dictionary given as
shown in Contact telephone number.

See also: ISB 1508 Telephone Number Input and Display.

Description

The contact telephone details of the second person (other than LPA) that the individual, with
capacity, has identified in an advance statement, to be consulted on decisions about their care
in the event that they lose mental capacity.
Requirement

To enable staff to make prompt contact with the person to provide guidance on decisions for
care and so support the wishes of the person approaching the end of their life.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional




                                                       119
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

58. Other relevant issues or preferences about provision of care
NHS Data Model and Dictionary Element name

No entry
NHS Data Model and Dictionary Note

N/A
Format

Free text
Description

Non-medical issues, or instructions from the person about the provision of their care.

May include:
 any religious/spiritual/cultural needs
 other instructions from the person about their care
 organ donation decision
 lives alone
 other social issues
 preferences for renal dialysis

Requirement

To enable the recording of other instructions that the person has regarding their care at end of
life.
Source

Manual
SNOMED CT

N/A
Read CTV3

N/A
Read V2

N/A
Data entry status

Optional


                                                       120
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

59. Date of death
NHS Data Model and Dictionary Element name

Person death date

NHS Data Model and Dictionary Note

N/A

Format

Date     an10 CCYY-MM-DD

See ISB 1503 Date Display

Description

The date on which a PERSON died or is officially deemed to have died, as recorded on the
death certificate.
Requirement

To complete the record and inform formal carers that an individual has died. To enable
organisations to assessment whether individuals achieve their preferences for place of death.
Source

Manual
NHS Data Model and Dictionary

SNOMED

N/A

Read CTV3

N/A

Read V2

N/A

Data entry status

Required




                                                       121
Palliative care co-ordination: core content. Requirements Specification




Content element number and name

60. Actual place of death
NHS Data Model and Dictionary Element name

Death location type code (ACTUAL)

NHS Data Model and Dictionary Note

N/A

Format

NHS Data Model and Dictionary codes PLUS SNOMED/Read code.
Description

The LOCATION where the PATIENT actually died.
Requirement

To inform formal carers that an individual has died. To enable organisations to assess whether
individuals achieve their preference for place of death.
Source

Manual
NHS Data Model and Dictionary

10    Hospital
      acute*
      community**
      other

20    Private residence
21    PATIENT's own home
22    Other private residence (eg relatives home, carers home)

30    Hospice (inpatient specialist palliative care)***

40    Care Home

50    Other (free text eg secure and detained settings)

*Acute hospitals provide a wide range of specialist care and treatment for patients. Services
offered in acute hospitals include:
     consultation with specialist clinicians (consultants, nurses, dieticians,
       physiotherapists and a wide range of other professionals)
     emergency treatment following accidents
     routine, complex and life-saving surgery
                                                       122
Palliative care co-ordination: core content. Requirements Specification




   specialist diagnostic, therapeutic and palliative procedures
www.nrls.npsa.nhs.uk/resources/healthcare-setting/acute-hospital

**The community hospital is a service that offers integrated health and social care and is
supported by community-based professionals (Meads, G. Participate. University of Warwick,
2004).

*** Hospice includes NHS and voluntary specialist palliative care inpatient beds, including
those located in NHS hospitals and on NHS hospital grounds.


SNOMED

887801000000106 | Patient died in usual place of residence (finding) |
Read CTV3

Xaafy | Patient died in usual place of residence |
Read V2

949E. | Patient died in usual place of residence |
Data entry status

Optional




                                                       123
