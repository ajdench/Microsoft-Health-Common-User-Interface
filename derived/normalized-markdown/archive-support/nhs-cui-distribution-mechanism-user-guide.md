# NHS CUI Distribution Mechanism User Guide

## Provenance
- Source file: `raw/sources/references/nhs-archives/cui-programme/nhs-cui-distribution-mechanism-user-guide.pdf`
- Extracted text: `derived/extracted-text/archive-support/nhs-cui-distribution-mechanism-user-guide.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.

## Extracted Text

NHS CUI Distribution Mechanism Workstream
                                                                      User Guide


                                                                              Prepared for
                                                               NHS Connecting for Health
                                                              Thursday, 16 November 2006
                                                                  Version 1.0.0.0 Baseline



                                                                              Prepared by
                                                                           NHS CUI Team
                                                                       cuiadmin@nhs.net



                                                                              Contributors
                                                                  Rajagopalan Ganapathy




                                                                                Page i
      NHS CUI Distribution Mechanism Workstream, User Guide
      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
      Last modified on 16 November 2006
Table of Contents
Table of Contents ............................................................................................................................ 2

1     Introduction .............................................................................................................................. 1
    1.1     Distribution Mechanism Site................................................................................................. 1
    1.2     Document Audience ............................................................................................................ 1
    1.3     Document Organisation ....................................................................................................... 1

2     User Registration...................................................................................................................... 2
    2.1     New Registration Request ................................................................................................... 2
      2.1.1      Pre-Conditions ............................................................................................................... 2
      2.1.2      Access Restrictions ........................................................................................................ 2
      2.1.3      Step by Step Instructions ................................................................................................ 2
    2.2     Registration Confirmation (Self) ........................................................................................... 4
      2.2.1      Pre-Conditions ............................................................................................................... 4
      2.2.2      Access Restrictions ........................................................................................................ 4
      2.2.3      Step by Step Instructions ................................................................................................ 4
    2.3     Registration Approval/Rejection (Administrator) ................................................................... 4
      2.3.1      Pre-Conditions ............................................................................................................... 4
      2.3.2      Access Restrictions ........................................................................................................ 4
      2.3.3      Step by Step Instructions ................................................................................................ 5
    2.4     Sign In ................................................................................................................................. 5
      2.4.1      Pre-Conditions ............................................................................................................... 5
      2.4.2      Access Restrictions ........................................................................................................ 5
      2.4.3      Step by Step Instructions ................................................................................................ 5
    2.5     Logout ................................................................................................................................. 7
      2.5.1      Pre-Conditions ............................................................................................................... 7
      2.5.2      Access Restrictions ........................................................................................................ 7
      2.5.3      Step by Step Instructions ................................................................................................ 7
    2.6     Edit Information ................................................................................................................... 8
      2.6.1      Pre-Conditions ............................................................................................................... 8
      2.6.2      Access Restrictions ........................................................................................................ 8
      2.6.3      Step by Step Instructions ................................................................................................ 8
    2.7     Forgotten Password ............................................................................................................. 9
      2.7.1      Pre-Conditions ............................................................................................................... 9
      2.7.2      Access Restrictions ........................................................................................................ 9
      2.7.3      Step by Step Instructions ................................................................................................ 9
    2.8     Change Password ............................................................................................................. 10
      2.8.1      Pre-Conditions ............................................................................................................. 10
      2.8.2      Access Restrictions ...................................................................................................... 10

                                                                                                                                                Page ii
                                 NHS CUI Distribution Mechanism Workstream, User Guide
                                 Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                                 Last modified on 16 November 2006
     2.8.3     Step by Step Instructions .............................................................................................. 10

3    Content Access ...................................................................................................................... 11
    3.1    Secure Home Page ........................................................................................................... 11
     3.1.1     Pre-Conditions ............................................................................................................. 11
     3.1.2     Access Restrictions ...................................................................................................... 11
     3.1.3     Illustration..................................................................................................................... 11
    3.2    Workstream Home Page...................................................................................................... 1
     3.2.1     Pre-Conditions ............................................................................................................... 1
     3.2.2     Access Restrictions ........................................................................................................ 1
     3.2.3     Illustration....................................................................................................................... 1
    3.3    Document Library ................................................................................................................ 1
     3.3.1     Pre-Conditions ............................................................................................................... 1
     3.3.2     Access Restrictions ........................................................................................................ 1
     3.3.3     Illustration....................................................................................................................... 1
    3.4    EULA Acceptance................................................................................................................ 1
     3.4.1     Pre-Conditions ............................................................................................................... 1
     3.4.2     Access Restrictions ........................................................................................................ 1
     3.4.3     Step by Step Instructions ................................................................................................ 1
    3.5    Download of Regular Content (< 50 MB) .............................................................................. 2
     3.5.1     Pre-Conditions ............................................................................................................... 2
     3.5.2     Access Restrictions ........................................................................................................ 2
     3.5.3     Step by Step Instructions ................................................................................................ 2
    3.6    Download of Large Files ...................................................................................................... 4
     3.6.1     Pre-Conditions ............................................................................................................... 4
     3.6.2     Access Restrictions ........................................................................................................ 4
     3.6.3     Step by Step Instructions ................................................................................................ 4
    3.7    Request Physical Media for Large Files ............................................................................... 7
     3.7.1     Pre-Conditions ............................................................................................................... 7
     3.7.2     Access Restrictions ........................................................................................................ 7
     3.7.3     Step by Step Instructions ................................................................................................ 7

4    Miscellaneous features ............................................................................................................ 9
    4.1    Contact Administrator .......................................................................................................... 9
    4.2    Privacy Statement................................................................................................................ 9
    4.3    Basic Search ..................................................................................................................... 10
     4.3.1     Pre-Conditions ............................................................................................................. 10
     4.3.2     Access Restrictions ...................................................................................................... 10
     4.3.3     Step by Step Instructions .............................................................................................. 10
    4.4    Advanced Search .............................................................................................................. 11
     4.4.1     Pre-Conditions ............................................................................................................. 11
     4.4.2     Access Restrictions ...................................................................................................... 11
     4.4.3     Step by Step Instructions .............................................................................................. 11
                                                                                                                                            Page iii
                               NHS CUI Distribution Mechanism Workstream, User Guide
                               Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                               Last modified on 16 November 2006
                                                        Page iv
NHS CUI Distribution Mechanism Workstream, User Guide
Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
Last modified on 16 November 2006
1         INTRODUCTION
1.1       Distribution Mechanism Site
    Distribution Mechanism solution is built by customising Microsoft Office SharePoint 2007 (MOSS
    2007) Platform. The solution consists of the following individual sites
        Anonymous Site Is –   the landing point of the Distribution Mechanism solution. Various
         features available on this site include User Registration, Login, Confirm Registration and
         Forgot Password.
        Secure Site Is–  the landing point once a registered Distribution Mechanism user logs into
         the Distribution Mechanism solution. This site holds all the Distribution Mechanism
         Workstream with content
        Large File Website –  This website exposes the large content of the Distribution Mechanism
         (typically > 50 MB in a single file) for upload and download purposes

1.2       Document Audience
    This document will assist the registered and to be registered users of the Distribution Mechanism
    site

1.3       Document Organisation
    This document describes the functionality that is available on the Distribution Mechanism site
    through the following major sections.
        User registration
        Content access
        Miscellaneous features
    The following sections will describe each of the above mentioned features in detail.




                                                                                                     Page 1
                         NHS CUI Distribution Mechanism Workstream, User Guide
                         Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                         Last modified on 16 November 2006
2         USER REGISTRATION
    User registration describes the following features.
        New registration request
        Registration Approval (Self)
        Registration Approval (Administrator)
        Registration Rejection
        Sign In
        Logout
        Edit Information
        Forgotten password
        Change password

2.1       New Registration Request
2.1.1        Pre-Conditions
        None

2.1.2        Access Restrictions
        None

2.1.3        Step by Step Instructions
       1. Access the NHS CUI Distribution Mechanism anonymous site through the URL
          https://www.cui.nhs.uk




       2. Click Register with Portal link on the left navigation menu

                                                                                     Page 2
                         NHS CUI Distribution Mechanism Workstream, User Guide
                         Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                         Last modified on 16 November 2006
3. Enter appropriate details in all fields, Select I accept Terms and Conditions check box
   and click Submit




4. Depending on the registration process set by the administrator you may receive one of the
   following confirmation messages.
   a. Email confirmation: If you have received a confirmation message as shown in the
      picture below, then you are eligible for self registration confirmation. Please follow steps
      in section 2.2 to complete the registration confirmation.




                                                                                             Page 3
                NHS CUI Distribution Mechanism Workstream, User Guide
                Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                Last modified on 16 November 2006
          b. Administrator manual approval: If you have received a confirmation message as shown
             in the picture below, then an administrator has to manually approve the registration.
             Please find more information about registration approval in section 2.3




2.2     Registration Confirmation (Self)
2.2.1      Pre-Conditions
       Theu se r’
                 s or g
                      a
                      ni
                       s
                       at
                        i
                        o
                        ni
                         ss
                          e
                          t
                          upf
                            o
                            rs
                             e
                             lc
                              f
                              on
                               f
                               ir
                                m
                                at
                                 i
                                 on
                                  by
                                   t
                                   hD
                                    ei
                                     s
                                     t
                                     ri
                                      b
                                      ut
                                       i
                                       o
                                       nMe
                                         c
                                         ha
                                          nism
        administrator
       An email with registration confirmation link is received by the user

2.2.2      Access Restrictions
       The user who has registered can only confirm the registration

2.2.3      Step by Step Instructions
      1. Open the email containing registration confirmation link
      2. View the email in HTML format
      3. Click the Activate Account link
      4. A confirmation notification is displayed to the user stating that the registration is successful

2.3     Registration Approval/Rejection (Administrator)
2.3.1      Pre-Conditions
       The  use r’
                  s org
                      an i
                         sati
                            on i
                               s s
                                 etu p for manual administrator approval/rejection by the
        Distribution Mechanism administrator
       There is a pending registration requests awaiting the administrator approval

2.3.2      Access Restrictions
       Administrators can only approve/reject registrations




                                                                                                     Page 4
                        NHS CUI Distribution Mechanism Workstream, User Guide
                        Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                        Last modified on 16 November 2006
2.3.3      Step by Step Instructions
      1. Distribution Mechanism administrator approves/rejects the registration request

      2. User receives appropriate approval/rejection notification via email

2.4     Sign In
2.4.1      Pre-Conditions
       A registered Distribution Mechanism user account exists in the system

2.4.2      Access Restrictions
       None

2.4.3      Step by Step Instructions
      1. Access the NHS CUI Distribution Mechanism anonymous site through the URL
         https://www.cui.nhs.uk
      2. Click the Sign In link present in the left navigation menu




      3. In the displayed help page, click the Sign In URL present under Sign In Instructions




                                                                                                Page 5
                       NHS CUI Distribution Mechanism Workstream, User Guide
                       Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                       Last modified on 16 November 2006
4. Enter the user name prefixed by the domain name (nhscui) in the User name field and the
   corresponding password in the Password field. Click OK




5. The Distribution Mechanism Secure Home Page is displayed




                                                                                      Page 6
                NHS CUI Distribution Mechanism Workstream, User Guide
                Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                Last modified on 16 November 2006
2.5     Logout
2.5.1      Pre-Conditions
       A Distribution Mechanism user session is in progress

2.5.2      Access Restrictions
       None

2.5.3      Step by Step Instructions
      1. Cli
           ck “
              W e l
                  c
                  o
                  me<
                    u
                    se
                     r
                     na
                      me
                       >
                       ”o
                        r
                        dp
                         do
                          w
                          np
                           re
                            s
                            en
                             ti
                              n
                              th
                               et
                                o
                                pr
                                 i
                                 gh
                                  t
                                  -hand corner and selection
         Sign Out




      2. Click OK in the displayed alert box




                                                                               Page 7
                       NHS CUI Distribution Mechanism Workstream, User Guide
                       Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                       Last modified on 16 November 2006
      3. User session is terminated and the browser window is closed

2.6     Edit Information
2.6.1      Pre-Conditions
       A registered Distribution Mechanism user account exists in the system

2.6.2      Access Restrictions
       None

2.6.3      Step by Step Instructions
      1. Sign in to Distribution Mechanism
      2. Click Edit Information link in the left navigation menu




      3. Update fields as appropriate and click Submit




      4. Details successfully saved message is displayed




                                                                                Page 8
                       NHS CUI Distribution Mechanism Workstream, User Guide
                       Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                       Last modified on 16 November 2006
2.7     Forgotten Password
2.7.1      Pre-Conditions
       A registered Distribution Mechanism user account exists in the system

2.7.2      Access Restrictions
       None

2.7.3      Step by Step Instructions
      1. Access the NHS CUI Distribution Mechanism anonymous site through the URL
         https://www.cui.nhs.uk
      2. Click the Forgotten Password link present in the left navigation menu




      3. Enter the email address corresponding to the user name registered in the system, in the
         Email Address field and click Submit




      4. The system will check that the email address is a valid email address registered in the
         system. After validation, the system will reset the existing password to a new password.
         The new password is sent to the email address specified and a confirmation message is
         displayed




                                                                                                Page 9
                       NHS CUI Distribution Mechanism Workstream, User Guide
                       Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                       Last modified on 16 November 2006
2.8     Change Password
2.8.1      Pre-Conditions
       A registered Distribution Mechanism user account exists in the system

2.8.2      Access Restrictions
       None

2.8.3      Step by Step Instructions
      1. Sign in to Distribution Mechanism
      2. Click the Change Password link present in the left navigation menu




      3. Enter the current password in the Old Password field; New password in the New Password
         and Confirm Password fields; Click Submit




      4. Password is reset to the one specified and a confirmation message is displayed




                                                                                          Page 10
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
3         CONTENT ACCESS
    Content access section describes the following features
        Secure Home Page
        Workstream Homepage
        Public Workstream
        Private Workstream
        Document Library
        EULA Acceptance
        Download of regular content
        Download of large files
        Request physical media for large files

3.1       Secure Home Page
3.1.1       Pre-Conditions
        User is logged on into the Distribution Mechanism site

3.1.2       Access Restrictions
        Active Distribution Mechanism users only

3.1.3       Illustration
    The following screen illustrates the Distribution Mechanism homepage explained.




                                                                                      Page 11
                        NHS CUI Distribution Mechanism Workstream, User Guide
                        Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                        Last modified on 16 November 2006
                                                        Page 1
NHS CUI Distribution Mechanism Workstream, User Guide
Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
Last modified on 16 November 2006
3.2     Workstream Home Page
3.2.1     Pre-Conditions
       User is logged on into the Distribution Mechanism site

3.2.2     Access Restrictions
       User shall have access to the Workstream. All public Workstreams are accessible to all
        users. Administrator grants access to individual private Workstreams

3.2.3     Illustration




                                                                                                 Page 1
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
                                                        Page 1
NHS CUI Distribution Mechanism Workstream, User Guide
Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
Last modified on 16 November 2006
3.3     Document Library
3.3.1      Pre-Conditions
       User is logged into the Distribution Mechanism site

3.3.2      Access Restrictions
       User shall have access to the Workstream. All public Workstreams are accessible to all
        users. Administrator grants access to individual private Workstreams

3.3.3      Illustration




3.4     EULA Acceptance
3.4.1      Pre-Conditions
       User is logged into the Distribution Mechanism site
       U
        s
        er
         ’
         so
          r
          ga
           n
           is
            a
            t
            io
             nr
              e
              qu
               i
               r
               es
                aE
                 UL
                  At
                   o
                   be
                    ac
                     c
                     ep
                      t
                      ed

3.4.2      Access Restrictions
       User shall have access to the Workstream. All public Workstreams are accessible to all
        users. Administrator grants access to individual private Workstreams

3.4.3      Step by Step Instructions
      1. Navigate to the HomepageWorkstreamDocument library from where the document
         has to be downloaded
      2. Click on the document link for downloading the document




                                                                                                 Page 1
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
      3. EULA page is displayed with I Accept and I Decline buttons




3.5     Download of Regular Content (< 50 MB)
3.5.1      Pre-Conditions
       User is logged into the Distribution Mechanism site

3.5.2      Access Restrictions
       User shall have access to the Workstream. All public Workstreams are accessible to all
        users. Administrator grants access to individual private Workstreams

3.5.3      Step by Step Instructions
      1. Sign in to Distribution Mechanism

      2. Click on one of the Workstream Home Page
      3. Click on one of the Document Libraries containing a regular content (< 50 MB)




                                                                                                 Page 2
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
4. Click the link corresponding to one of the deliverables




5. EULA page is displayed with I Accept and I Decline buttons
6. Click I Accept button




7. File download dialog box appears with Open, Save and Cancel buttons

                                                                         Page 3
                 NHS CUI Distribution Mechanism Workstream, User Guide
                 Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                 Last modified on 16 November 2006
3.6     Download of Large Files
3.6.1      Pre-Conditions
       User is logged into the Distribution Mechanism site

3.6.2      Access Restrictions
       User shall have access to the Workstream. All public Workstreams are accessible to all
        users. Administrator grants access to individual private Workstreams

3.6.3      Step by Step Instructions
      1. Sign in to Distribution Mechanism

      2. Click on one of the Workstream Home Page

      3. Click on one of the Document Libraries containing a large content




                                                                                                 Page 4
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
4. Click the link corresponding to one of the deliverables




5. EULA page is displayed with I Accept and I Decline buttons
6. Click I Accept button




7. Choose download radio button and and click the link to start download


                                                                           Page 5
                 NHS CUI Distribution Mechanism Workstream, User Guide
                 Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                 Last modified on 16 November 2006
8. Enter the credentials of the Distribution Mechanism (username and password) to
   authenticate download and click OK button




9. Click Save and follow the steps to save the document to a location on your desktop




                                                                                        Page 6
                NHS CUI Distribution Mechanism Workstream, User Guide
                Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                Last modified on 16 November 2006
3.7     Request Physical Media for Large Files
3.7.1      Pre-Conditions
       User is logged into the Distribution Mechanism site

3.7.2      Access Restrictions
       User shall have access to the Workstream. All public Workstreams are accessible to all
        users. Administrator grants access to individual private Workstreams

3.7.3      Step by Step Instructions
      1. Sign in to Distribution Mechanism
      2. Click on one of the Workstream Home Page
      3. Click on one of the Document Libraries containing a large content




      4. Click the link corresponding to one of the deliverables




      5. EULA page is displayed with I Accept and I Decline buttons
      6. Click I Accept button




                                                                                                 Page 7
                       NHS CUI Distribution Mechanism Workstream, User Guide
                       Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                       Last modified on 16 November 2006
7. Choose Request physical media shipment radio button and enter the shipping details
   and contact details and click Submit to submit the request




8. The Distribution Mechanism administration team will ship a physical media to the user
   based on the shipping details




                                                                                           Page 8
                NHS CUI Distribution Mechanism Workstream, User Guide
                Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                Last modified on 16 November 2006
4         MISCELLANEOUS FEATURES
    Miscellaneous features section describes the following features:
        Contact Administrator
        Privacy Statement
        Search

4.1       Contact Administrator
    Contact administrator link is available at the bottom of the screen on all Distribution Mechanism
    pages. Please use this link for any communication with the Distribution Mechanism administrator.




4.2       Privacy Statement
       1. Distribution Mechanism privacy statement can be accessed by clicking on the Privacy
          Statement link at the bottom menu of all Distribution Mechanism pages.




       2. A sample privacy statement is shown in the following screen




                                                                                                  Page 9
                         NHS CUI Distribution Mechanism Workstream, User Guide
                         Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                         Last modified on 16 November 2006
4.3     Basic Search
4.3.1      Pre-Conditions
       User is logged into the system

4.3.2      Access Restrictions
       None

4.3.3      Step by Step Instructions
      1. Enter the keyword on the search textbox on left menu and click the green arrow




      2. Search results are displayed based on the keyword entered




                                                                                          Page 10
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
4.4     Advanced Search
4.4.1     Pre-Conditions
       User is logged into the system

4.4.2     Access Restrictions
       None

4.4.3     Step by Step Instructions
      1. Click on Advanced Search on left menu




      2. Enter the search phrases, select any options and click Search




                                                                              Page 11
                      NHS CUI Distribution Mechanism Workstream, User Guide
                      Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                      Last modified on 16 November 2006
3. Search results are displayed based on the search criteria




                                                                        Page 12
                NHS CUI Distribution Mechanism Workstream, User Guide
                Prepared by NHS CUI Team, Version 1.0.0.0 Baseline
                Last modified on 16 November 2006
