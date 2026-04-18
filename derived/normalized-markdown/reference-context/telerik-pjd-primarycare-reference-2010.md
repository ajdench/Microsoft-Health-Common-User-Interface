# Telerik forum reference to pjd.mscui.net PrimaryCare demonstrator

## Provenance
- Source file: `raw/sources/references/secondary/telerik-pjd-primarycare-reference-2010.html`
- Extracted text: `derived/extracted-text/reference-context/telerik-pjd-primarycare-reference-2010.txt`
- Normalization note: HTML text extraction using a conservative parser; boilerplate and navigation chrome may remain.

## Extracted Text

Unable to connect to Silverlight application. (on http://www.silverlight.net/showcase/ page) in Test Studio | Telerik Forums

skip navigation
Telerik Test Studio

Product Bundles

DevCraft

All Telerik .NET and Kendo UI JavaScript components and AI Tools in one package.

MCP Servers (AI Tools)

Embedded Reporting

Document Processing Libraries

SSO Account Sign-in

Kendo UI

Bundle of AI Tools plus four JavaScript UI libraries built natively for jQuery, Angular, React and Vue.

See All Products

Kendo UI

Build JavaScript UI

Javascript

UI for Angular UI for Vue UI for jQuery KendoReact

Telerik

Build modern .NET business apps

.Net Web

UI for Blazor UI for ASP.NET Core UI for ASP.NET MVC UI for ASP.NET AJAX

Cross-Platform

UI for MAUI

Desktop

UI for WinForms UI for WPF UI for Win UI

Reporting and Documents

Reporting Report Server Document Processing Library

AI for Developers & IT

Ensure AI program success

AI Coding

MCP Servers AI-Ready Components

AI Engineering

AI Observability

Additional Tools

Enhance the developer and designer experience

Testing & Mocking

Test Studio JustMock

Debugging

Fiddler Fiddler Everywhere Fiddler Classic Fiddler Everywhere Reporter FiddlerCore

UI/UX Tools

ThemeBuilder Page Templates and Building Blocks Design System Kit

CMS

Sitefinity

Free Tools

KendoReact Free VB.NET to C# Converter Testing Framework

See All Products

Overview

Solutions
Functional UI Testing

RESTful API Testing

Load Testing

Remote Test Execution

Agile Teams

Web Test Automation

Desktop Test Automation

Responsive UI Testing

Continuous Testing

Training

Resources
Docs and Support

Documentation

Virtual Classroom

Blogs

Webinars

Whitepapers

Case Studies

Feedback Portal

Technical Support

What’s New

Roadmap

Release Notes

Trust Center

FAQs

Pricing

 Shopping cart

 Login

 Contact Us

Request a demo Try now

close mobile menu

 Telerik Forums

 /

 Test Studio

 This is a migrated thread and some comments may be shown as answers.

[Solved] Unable to connect to Silverlight application. (on http://www.silverlight.net/showcase/ page)

7 Answers

221 Views

 General Discussions

 This is a migrated thread and some comments may be shown as answers.

 Rafal Stasiak

 Top achievements

 Rank 1

 Rafal Stasiak
 asked on 14 Jun 2010, 10:06 AM

Hello,

Today i install new Silverlight Runtime 4.0.50524.0

After that Telerik WebUI Test Studio (QA) stopped recognize Silverlight application.

Even on http://www.silverlight.net/showcase/ i got Telerik Web UI message: Unable to connect to Silverlight application.

I checked that on 2 separate machine (Vista + IE8 and XP + IE7).

Can you say something about way to resolve that problem?

Best regards.

 Add a comment

 Submit comment

 Cancel

7 Answers, 1 is accepted

 Sort by

 Score
 Date

0

 Cody

 Telerik team

 answered on 14 Jun 2010, 05:50 PM

Hi Rafał Stasiak,

Yes there does seem to be a problem connecting to http://www.silverlight.net/showcase/. We'll look into this.

However I am running Vista with SL4 and I'm having no problems connecting to http://pjd.mscui.net/PrimaryCare.htm or http://demos.telerik.com/silverlight/#Buttons/FirstLook. Could you give those a try and let me know your results?

Do you have a public website of your application I can try connecting to and see if it works here?

All the best,

Cody

the Telerik team

Do you want to have your say when we set our development plans? Do you want to know when a feature you care about is added or when a bug fixed? Explore the Telerik Public Issue Tracking system and vote to affect the priority of the items.

 Add a comment

 Submit comment

 Cancel

0

 Rafal Stasiak

 Top achievements

 Rank 1

 answered on 15 Jun 2010, 08:53 AM

Hello Cody,

Thank you. Both address you gave work perfect.

Unfortunately we do not have a public website of our application.

Bets regards,

Rafał Stasiak

 Add a comment

 Submit comment

 Cancel

0

 Cody

 Telerik team

 answered on 15 Jun 2010, 06:02 PM

Hello Rafał Stasiak,

I have found that by upgrading to the latest internal build (2010.1.6.11) the problem appears to be resolved. Can try out this new version?

Regards,

Cody

the Telerik team

Do you want to have your say when we set our development plans? Do you want to know when a feature you care about is added or when a bug fixed? Explore the Telerik Public Issue Tracking system and vote to affect the priority of the items.

 Add a comment

 Submit comment

 Cancel

0

 lookin

 Top achievements

 Rank 1

 answered on 26 Jul 2010, 06:28 PM

Today I installed the  WebUI Test Studio Developer Edition 2010.1 518 Trial version and I am also getting the "Unable to connect to Silverlight application."

Cody's response was "I have found that by upgrading to the latest internal build (2010.1.6.11) the problem appears to be resolved. Can try out this new version?"

Is the trial version newer or older than the build suggested by Cody?

 Add a comment

 Submit comment

 Cancel

0

 Cody

 Telerik team

 answered on 26 Jul 2010, 09:13 PM

 silverlight-connection-draft.zip

Hi lookin,

The trial version you just installed is older than the internal build I spoke about. You can tell by looking at the version numbers because they represent build numbers which always incremement. So "WebUI Test Studio Developer Edition 2010.1 518 Trial" is build 2010.1.5.18, older than 20101.6.11 (note that version is no longer available).

We just released our Q2 version, which is build 2010.2.7.13. I highly recommend you download and install that version (uninstall what you have first). it is our best most feature rich version to date.

I'm also attaching a document you can use to help troubleshoot Silverlight connection problems. The most common problem is the media type setting for .XAP files on your webserver as per this post.

Regards,

Cody

the Telerik team

Do you want to have your say when we set our development plans? Do you want to know when a feature you care about is added or when a bug fixed? Explore the Telerik Public Issue Tracking system and vote to affect the priority of the items

 Add a comment

 Submit comment

 Cancel

0

 lookin

 Top achievements

 Rank 1

 answered on 27 Jul 2010, 05:52 PM

Cody,

Thanks for your help ~ I am no longer getting the "Unable to connect to Silverlight application" error AND I am now successfully recording steps using the WebUI Test Developer Studio interface.  Also, the Silverlight Connection document was very helpful...

 Add a comment

 Submit comment

 Cancel

0

 Cody

 Telerik team

 answered on 27 Jul 2010, 05:59 PM

Hi lookin,

I am very glad to hear it. Thank you for the update!

Best wishes,

Cody

the Telerik team

Do you want to have your say when we set our development plans? Do you want to know when a feature you care about is added or when a bug fixed? Explore the Telerik Public Issue Tracking system and vote to affect the priority of the items

 Add a comment

 Submit comment

 Cancel

 Answer this question

Drag and drop files here or browse to attach...

Browse for files to attach...

Supported file types: PNG, JPG, JPEG, ZIP, RAR, TXT. Max total file size - 20MB.

 Submit answer

 Cancel

Tags

 General Discussions

Asked by

 Rafal Stasiak

 Top achievements

 Rank 1

Answers by

 Cody

 Telerik team

 Rafal Stasiak

 Top achievements

 Rank 1

 lookin

 Top achievements

 Rank 1

Share this question

 or

 Copy link

Complete .NET Toolbox
Telerik DevCraft

Complete JavaScript Toolbox
Kendo UI

Complete AI Toolbox
MCP Servers AI-Ready Components

Get Products

Free Trials

Pricing

Resources

Developer Experience Hub

Demos

Documentation

Release History

Forums

Blogs

Webinars

Professional Services

Partners

Virtual Classroom

Events

FAQs

Recognition

Success Stories

Testimonials

Get in touch

Contact Us

USA: +1 888 679 0442

UK: +44 13 4483 8186

India: +91 406 9019447

Bulgaria: +359 2 8099850

Australia: +61 3 7068 8610

 105k+

 50k+

 17k+

 4k+

 14k+

Contact Us

 105k+

 50k+

 17k+

 4k+

 14k+

Telerik and Kendo UI are part of Progress product portfolio. Progress is the leading provider of application development and digital experience technologies.

Company

Technology

Awards

Press Releases

Media Coverage

Careers

Offices

Company

Technology

Awards

Press Releases

Media Coverage

Careers

Offices

Copyright © 2026 Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.

Progress and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries. See Trademarks for appropriate markings. All rights in any other trademarks contained herein are reserved by their respective owners and their inclusion does not imply an endorsement, affiliation, or sponsorship as between Progress and the respective owners.

Terms of Use

Site Feedback

Privacy Center

Trust Center

Do Not Sell or Share My Personal Information

Powered by Progress Sitefinity
