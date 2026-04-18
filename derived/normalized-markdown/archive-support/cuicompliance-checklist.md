# CUI Design Guidance Compliance Checklist

## Provenance
- Source file: `raw/sources/references/nhs-archives/cuicompliance-checklist.xlsx`
- Extracted text: `derived/extracted-text/archive-support/cuicompliance-checklist.txt`
- Normalization note: OpenXML workbook extraction using workbook and worksheet XML; formulas/macros and rich formatting are not preserved.

## Extracted Text

CUI Design Guidance Compliance Checklist

## Sheet: Document management
	Document Management		
	Purpose The purpose of this document is to provide suppliers of healthcare software and end users of health IT systems with a checklist of design guidance points for the each of the Common User Interface Design Guidance documents. It is intended that the checklists will be used to record the extent of compliance with the design guidance.   The checklist can also be used by other agencies, such as the HSCIC National Integration Centre to measure the extent of compliance with the CUI design guidance and related DSCNs.			
	Instructions for use			
	This checklist is to be used only in conjunction with the current versions of the Common User Interface Design Guide documents available from the CUI website www.cui.nhs.uk     Users of this document are expected to apply a 'yes/no' in response to whether or not the system complies with the design guidance.   For supporting rationale please refer to relevant design guidance document.		
	Comments / questions		
	For all comments or questions in relation to this document please e-mail the CUI Helpdesk via information.standards@nhs.net		
	Version control	Date	Changes made
	v0.1	40491	Document created
Compliance		
> Please enter
Yes
No
Not applicable

## Sheet: Address
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	Address display	ADR-0001	When displaying an address horizontally, only use a single comma and a single space, in that order, to delimit the different fields	Mandatory	> Please enter	
2	Address display	ADR-0002	When displaying an address vertically, do not use a comma at the end of a line	Recommended	> Please enter	
3	Address display	ADR-0003	When displaying an address vertically, left-align the text for ease of reading	Recommended	> Please enter	
4	Address display	ADR-0004	When truncating an address, add an ellipsis to indicate that the address is not displayed in full and, where appropriate, provide a means for the user to access the full address	Recommended	> Please enter	
5	Address display	ADR-0005	Do not split an address element when wrapping an address across multiple lines	Recommended	> Please enter	
6	Address display	ADR-0006	Where part of an address is not available, do not display an empty string in its place	Recommended	> Please enter	
7	Address display	ADR-0007	Display the postcode in all caps with a space between the first part (the outcode) and the second part (the incode)	Mandatory	> Please enter	
8	Address display	ADR-0008	Do not display labels for individual address elements	Recommended	> Please enter	
9	UK address input	ADR-0011	Provide the following text input boxes, in the stated order, for UK address input: - Three boxes for input of all details up to and including the street name - One box for input of the town or city - One box for input of the county - One box for input of the postcode	Recommended	> Please enter	
10	UK address input	ADR-0012	Where text input boxes are used, they must be labelled as follows: - The three boxes for input of all details up to and including the street name, must be labelled ‘Line 1’, ‘Line 2’ and ‘Line 3’ respectively - The box for input of the town or city should be labelled ‘Town/City’ - The box for input of the county should be labelled ‘County’ - The box for input of the postcode should be labelled ‘Postcode’	mandatory	> Please enter	
11	UK address input	ADR-0013	Provide a means to find a postcode, to enhance data quality	Recommended	> Please enter	
12	UK address input	ADR-0014	Display a means to find a postcode only if such a service is supported, positioning it after the postcode input box, and labelling it ‘Find Postcode’	Recommended	> Please enter	
13	UK address input	ADR-0015	Set the length of the postcode input box to 8 characters	Mandatory	> Please enter	
14	UK address input	ADR-0016	Set the length of the county input box to 18 characters	Recommended	> Please enter	
15	UK address input	ADR-0017	Set the height of each text input box to the largest character height in the currently active display font, taking the user’s settings into account	Recommended	> Please enter	
16	UK address input	ADR-0018	Display the text input boxes vertically with left alignment	Recommended	> Please enter	
17	UK address input	ADR-0019	Display the labels immediately to the left of their corresponding text input box, mutually right aligning the labels	Recommended	> Please enter	
18	UK address input	ADR-0020	Permit address input via all the mechanisms supported on a platform such as, but not limited to, typing on a keyboard, copy and paste, and handwriting with a stylus	Recommended	> Please enter	
19	UK address input	ADR-0021	Permit the following characters in the address: uppercase and lowercase letters, numbers 0 to 9, the full stop, forward slash, comma, colon, apostrophe space and the hyphen	Recommended	> Please enter	
20	UK address finder	ADR-0031	Provide the following text input boxes, in the stated order, for input of a UK address: - One box for input of house or building number - One box for input of house or building name - One box for input of the postcode	Recommended	> Please enter	
21	UK address finder	ADR-0032	Where text input boxes are used, they must be labelled as follows: - The box for input of house or building number should be labelled ‘House/Building Number’ - The box for input of house or building name should be labelled ‘House/Building Name’ - The box for input of the postcode should be labelled ‘Postcode’	Mandatory	> Please enter	
22	UK address finder	ADR-0033	Display a means to find an address only if such a service is supported, positioning it after the postcode input box and labelling it ‘Find Address’	Recommended	> Please enter	
23	UK address finder	ADR-0034	Set the length of the postcode input box to 8 characters	Mandatory	> Please enter	
24	UK address finder	ADR-0035	Set the height of each text input box to the largest character height in the currently active display font, taking the user’s settings into account	Recommended	> Please enter	
25	UK address finder	ADR-0036	Display the text input boxes vertically with left alignment	Recommended	> Please enter	
26	UK address finder	ADR-0037	Display the labels immediately to the left of their corresponding text input box, mutually right aligning the labels	Recommended	> Please enter	
27	UK address finder	ADR-0038	Permit address input via all the mechanisms supported on a platform such as, but not limited to, typing on a keyboard, copy and paste, and handwriting with a stylus	Recommended	> Please enter	
28	Non-UK address input	ADR-0050	Provide the following boxes, in the stated order, for input of a non-UK address: - One editable combo box for country selection - Four boxes for input of all details up to and including the street name - One box for input of the town or city - One box for input of the postal code	Recommended	> Please enter	
29	Non-UK address input	ADR-0051	Where used, the boxes must be labelled as follows: - The editable combo box for country selection should be labelled ‘Country’ - The four boxes for input of all details up to and including the street name, should be labelled ‘Line 1’, ‘Line 2’, ‘Line 3’ and ‘Line 4’ respectively - The box for input of the town or city should be labelled ‘Town/City’ - The box for input of the postal code should be labelled ‘Postal Code’	Mandatory	> Please enter	
30	Non-UK address input	ADR-0052	Set the height of each text input box to the largest character height in the currently active display font, taking the user’s settings into account	Recommended	> Please enter	
31	Non-UK address input	ADR-0053	Display the text input boxes vertically with left alignment	Recommended	> Please enter	
32	Non-UK address input	ADR-0054	Display the labels immediately to the left of their corresponding text input box, mutually right aligning the labels	Recommended	> Please enter	
33	Non-UK address input	ADR-0055	Permit address input via all the mechanisms supported on a platform such as, but not limited to, typing on a keyboard, copy and paste, and handwriting with a stylus	Recommended	> Please enter	
34	Non-UK address input	ADR-0056	Use an editable drop-down combo box for country names	Recommended	> Please enter	
35	Non-UK address input	ADR-0057	Use the list of country names in ISO 3166-1 {R8} for the country selector drop-down combo box	Mandatory	> Please enter	
36	Non-UK address input	ADR-0058	Display the country names in alphabetic order	Recommended	> Please enter	
37	Non-UK address input	ADR-0059	Display the country names with left alignment	Recommended	> Please enter	
End of check list					

## Sheet: Time display
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	Exact time	D+Tb-0001	Display time using the 24-hour clock only	Mandatory	> Please enter	
2	Exact time	D+Tb-0032	Provide indication to the user that the 24-hour clock is in use	Mandatory	> Please enter	
3	Exact time	D+Tb-0002	Display an exact time as HH:mm	Mandatory	> Please enter	
4	Exact time	D+Tb-0003	Display hours using two digits (values less than 10 should appear with a zero in the first position)	Mandatory	> Please enter	
5	Exact time	D+Tb-0004	Display minutes using two digits (values less than 10 should appear with a zero in the first position)	Mandatory	> Please enter	
6	Exact time	D+Tb-0005	Display seconds as two digits (values less than 10 should appear with a zero in the first position)	Mandatory	> Please enter	
7	Exact time	D+Tb-0006	Separate the hours and minutes with a colon	Mandatory	> Please enter	
8	Exact time	D+Tb-0007	Separate the minutes and seconds with a colon	Mandatory	> Please enter	
9	Exact time	D+Tb-0008	Separate date and time values with a white space	Mandatory	> Please enter	
10	Exact time	D+Tb-0009	Display midnight as 00:00	Mandatory	> Please enter	
11	Exact time	D+Tb-0010	Display the last minute in the day as 23:59	Mandatory	> Please enter	
12	Exact time	D+Tb-0011	Display null times using an appropriate value, for example, ‘Unknown’ and ‘Not recorded’	Mandatory	> Please enter	
13	Exact time	D+Tb-0012	Display seconds only if required	Recommended	> Please enter	
14	Exact time	D+Tb-0013	Display time ranges as two adjacent time displays, each identified by a contextually appropriate label, such as ‘From’ and ‘To’	Recommended	> Please enter	
15	Approximate time	D+Tb-0014	Precede the display of an approximate time value with the word ‘Approx’	Mandatory	> Please enter	
16	Approximate time	D+Tb-0015	Display the time value using the guidance for exact time (section 0)	Mandatory	> Please enter	
17	Approximate time	D+Tb-0016	Leave a white space between the ‘Approx’ and the HH element of the time display	Mandatory	> Please enter	
18	Time duration	D+Tb-0017	Display durations using years, months, weeks, days, hours, minutes and seconds, as appropriate	Mandatory	> Please enter	
19	Time duration	D+Tb-0018	Use whole numbers for time duration, for example, 1, 5, and 60. Do not use decimals or fractions, for example, 0.5, 1.5, 3/4	Mandatory	> Please enter	
20	Time duration	D+Tb-0033	Ensure that the following minimal set of duration unit abbreviations is supported: y for years, m for months, w for weeks, d for days, hr for hours, min for minutes and sec for seconds	Mandatory	> Please enter	
21	Time duration	D+Tb-0034	Allow the set of duration unit abbreviations to be extended appropriately, for example, ‘hrs’ as well as ‘hr’. Ensure that any additions are unique within the entire set	Recommended	> Please enter	
22	Time duration	D+Tb-0026	Omit zero-valued units from the display	Mandatory	> Please enter	
23	Time duration	D+Tb-0027	Display duration values and their respective units as pairs, with no intervening whitespace between the value and unit	Mandatory	> Please enter	
24	Time duration	D+Tb-0028	Use a white space as the separator when displaying a duration composed of more than one unit	Mandatory	> Please enter	
25	Time duration	D+Tb-0029	Display time duration units in decreasing order of significance	Mandatory	> Please enter	
26	Time duration	D+Tb-0030	Precede the display of an approximate duration value with the word ‘Approx’	Mandatory	> Please enter	
27	Time duration	D+Tb-0031	Leave a white space between the ‘Approx’ and the first element of an approximate duration value	Mandatory	> Please enter	
End of check list					

## Sheet: Date display
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	general date display	D+Ta-0002	Display the month textually, not numerically	> Please enter		
2	general date display	D+Ta-0003	Display the month with only the first letter in capitals	Please enter		
3	general date display	D+Ta-0004	Display the year value numerically using four digits	Please enter		
4	general date display	D+Ta-0005	Align dates when displaying dates in a vertical column, such as in a table	Please enter		
5	general date display	D+Ta-0016	When displaying the day of the week, use one of the following abbreviations: Mon, Tue, Wed, Thu, Fri, Sat and Sun	Please enter		
6	general date display	D+Ta-0017	Displaying the day of the week is optional, but when displayed, it must be placed immediately before the day value, with a single space separating the permitted abbreviated form of the day, from the day value	Please enter		
7	general date display	D+Ta-0022	Display null date using an appropriate value (for example, ‘Unknown’ or ‘Not recorded’)	Please enter		
8	short date format	D+Ta-0006	Display dates using the short date format in all instances of clinical usage affecting patient treatment, including patient identification	Please enter		
9	short date format	D+Ta-0018	Display the day value using two digits (values less than 10 should appear with a zero in the first position)	Please enter		
10	short date format	D+Ta-0007	Display the month as a three letter abbreviation: Jan, Feb, Mar, Apr, Jun, Jul, Aug, Sep, Oct, Nov, and Dec, with May being displayed in full	Please enter		
11	short date format	D+Ta-0008	When displaying the month, do not include any punctuation, such as a full stop	Please enter		
12	short date format	D+Ta-0009	Use a single hyphen to separate the day and month, and the month and year	Please enter		
13	short date format	D+Ta-0010	When using the short date format, ignore the user's regional settings	Please enter		
14	long date format	D+Ta-0011	Use the long date format when communicating with the patient	Please enter		
15	long date format	D+Ta-0019	Display the day value using two digits (values less than 10 should appear with a zero in the first position, unless the day value is displayed in ordinal form)	Please enter		
16	long date format	D+Ta-0012	Display the month name in full	Please enter		
17	long date format	D+Ta-0013	Use a single whitespace to separate the day and month, and the month and year	Please enter		
18	long date format	D+Ta-0014	When using the long date format, follow the user's default regional settings ignoring any changes made by the user to these default settings	Please enter		
19	long date format	D+Ta-0015	Use the long date format when interacting with screen readers	Please enter		
20	long date format	D+Ta-0020	When displaying the day value as an ordinal number, the suffix used must be one of the following: st, nd, rd, th	Please enter		
21	long date format	D+Ta-0021	When displaying the day value as an ordinal number, the two-letter suffix must be displayed in lower case and as a superscript immediately after the number	Please enter		
End of check list					

## Sheet: Date and time input
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	free text date input	D+Tc-0001	Adopt the NHS Common User Interface standard for Date Display {R1} for the format of any dates displayed within the date input control	Mandatory	Please enter	
2	free text date input	D+Tc-0002	Allow for both free text input of dates and the input of dates using a calendar control	Mandatory	Please enter	
3	free text date input	D+Tc-0003	Allow the date elements to be individually edited (day, month and year)	Mandatory	Please enter	
4	free text date input	D+Tc-0004	Include the calendar icon within the boundary of the date input field	Mandatory	Please enter	
5	free text date input	D+Tc-0005	Provide disambiguation of any free text date input	Mandatory	Please enter	
6	free text date input	D+Tc-0006	Provide instructions on how to use the control, for example, via the use of tooltips. The instructions must contain details of the different date types that can be entered	Mandatory	Please enter	
7	free text date input	D+Tc-0046	Within the date input control, allow users to select the entire value to facilitate rapid editing or entry of arithmetic shortcuts relating to date (only)	Mandatory	Please enter	
8	free text date input	D+Tc-0007	Allow users to enter arithmetic shortcuts, such as, ‘+3m’ for three months later or ‘-2d’ for two days earlier. The relevant operators are: - ‘+’ for later dates (this is optional, as whole numbers should be treated as positive by default) - ‘-’ for earlier dates - ‘d’ for days - ‘w’ for weeks - ‘m’ for months - ‘y’ for years	Mandatory	Please enter	
9	free text date input	D+Tc-0041	Within the date input control, do not allow users to input arithmetic shortcuts relating to time	Mandatory	Please enter	
10	free text date input	D+Tc-0008	Allow the input of ‘Unknown’ (or similar) to specify dates not known to the user	Mandatory	Please enter	
11	free text date input	D+Tc-0009	Display a default input within the free text date input control	Mandatory	Please enter	
12	free text date input	D+Tc-0042	When displaying a default input within the free text input box, provide the user with an example of date with either a non-specific value (such as the input mask) or a date appropriate to the clinical context (for example, ‘today’s date’)	Recommended	Please enter	
13	calendar date input	D+Tc-0010	Provide access to the calendar control via a calendar icon	Mandatory	Please enter	
14	calendar date input	D+Tc-0011	Provide the ability to select a month independently, and a year independently. Signify the interactivity of these elements by suitable styling, for example as buttons or links, and ensure that they have descriptive tooltips	Mandatory	Please enter	
15	calendar date input	D+Tc-0012	Provide a button to allow the user to enter today’s date	Mandatory	Please enter	
16	calendar date input	D+Tc-0013	Provide a link or button to close the control	Mandatory	Please enter	
17	calendar date input	D+Tc-0014	Provide a visual indication of the current date	Mandatory	Please enter	
18	calendar date input	D+Tc-0015	Include the days of the week within the calendar view	Mandatory	Please enter	
19	calendar date input	D+Tc-0016	Provide access to relevant instructional text (for example, via tooltips) on the clickable elements in the calendar header	Mandatory	Please enter	
20	calendar date input	D+Tc-0017	Allow the calendar to be closed either when the user clicks away from the calendar or clicks on the calendar icon	Mandatory	Please enter	
21	calendar date input	D+Tc-0018	Display the appropriate value in the free text field following selection of the date	Mandatory	Please enter	
22	calendar date input	D+Tc-0019	Ensure that the control can be operated effectively via the keyboard (for example, using arrow keys)	Mandatory	Please enter	
23	time input	D+Tc-0020	Adopt the NHS Common User Interface standard for Time Display {R2} for the format of any times displayed within the time input control	Mandatory	Please enter	
24	time input	D+Tc-0021	Use the 24-hour clock only (rather than the 12-hour clock)	Mandatory	Please enter	
25	time input	D+Tc-0043	Provide indication to the user that the 24-hour clock is in use	Mandatory	Please enter	
26	time input	D+Tc-0022	Use an ‘Approx’ check box to allow the user to indicate an approximate time	Mandatory	Please enter	
27	time input	D+Tc-0023	Allow the time elements to be individually edited (hours, minutes and seconds)	Mandatory	Please enter	
28	time input	D+Tc-0024	Provide access to instructions on how to use the control, for example, via the use of tooltips. The instructions must contain details of the different time types that can be entered	Mandatory	Please enter	
29	time input	D+Tc-0047	Within the time input control, allow users to select the entire value to facilitate rapid editing or entry of arithmetic shortcuts relating to time (only)	Mandatory	Please enter	
30	time input	D+Tc-0025	Allow users to enter arithmetic shortcuts such as ‘+3h’ for three hours later and ‘-2m’ for two minutes earlier. The relevant operators are: - ‘+’ for later times (this is optional, as whole numbers should be treated as positive by default) - ‘-’ for earlier times - ‘h’ for hours - ‘m’ for minutes - ‘s’ for seconds	Mandatory	Please enter	
31	time input	D+Tc-0044	Within the time input control do not allow users to input arithmetic shortcuts relating to date	Mandatory	Please enter	
32	time input	D+Tc-0026	Allow the entry of ‘Unknown’ (or similar) to specify times not known to the user	Mandatory	Please enter	
33	time input	D+Tc-0027	Display a default input within the time input control	Mandatory	Please enter	
34	time input	D+Tc-0045	When displaying a default input within the free text input box, provide the user with an example of time with either a non-specific value (such as the input mask) or a time appropriate to the clinical context	Recommended	Please enter	
35	spin control time input	D+Tc-0028	Increase/decrease the whole time by the least significant time unit if the entire value is selected or if no unit is selected	Mandatory	Please enter	
36	spin control time input	D+Tc-0029	Provide the ability to spin individual time units when selected	Mandatory	Please enter	
37	Time duration input	D+Tc-0030	Adopt the NHS Common User Interface standard for Time Display {R2} for the format of any times displayed within the duration input control	Mandatory	Please enter	
38	Time duration input	D+Tc-0031	Provide access to instructions on how to use the control, for example, via the use of tooltips. The instructions must contain details of the different units that can be entered	Mandatory	Please enter	
39	Time duration input	D+Tc-0032	Allow entry of time duration units either singly or in combination	Mandatory	Please enter	
40	Time duration input	D+Tc-0033	Allow editing of the individual elements of a duration	Mandatory	Please enter	
41	Time duration input	D+Tc-0034	Ensure that the following minimal set of duration unit abbreviations is supported: y for years, m for months, w for weeks, d for days, hr for hours, min for minutes and sec for seconds	Mandatory	Please enter	
42	Time duration input	D+Tc-0035	Allow the set of duration unit abbreviations to be extended appropriately, for example, ‘hrs’ as well as ‘hr’. Ensure that any additions are unique within the entire set	Recommended	Please enter	
43	Time duration input	D+Tc-0036	Allow the user to optionally enter white space within the duration input, for example, ‘3 hr 5 min’ as well as ‘3hr 5min’	Recommended	Please enter	
44	Time duration input	D+Tc-0037	Provide the facility for a user to disambiguate input which could be interpreted in more than one way (see section 2.6), for example, ‘m’ (which could represent months or minutes)	Recommended	Please enter	
45	Time duration input	D+Tc-0048	Where a time duration spans the change between GMT and BST, show a pop-up to inform the user that the system will automatically handle the data within the appropriate time zone	Recommended	Please enter	
46	Time duration input	D+Tc-0049	Where a user adjusts time manually resulting in a time duration spanning a change between GMT and BST, show a pop-up to inform that user that the system will automatically adjust the data according to the appropriate time zone	Recommended	Please enter	
47	disambiguation of input	D+Tc-0038	Provide the facility for a user to disambiguate a date entered via the date control	Mandatory	Please enter	
48	disambiguation of input	D+Tc-0039	Display a message dialog box with appropriate instructional text if the data is ambiguous or incomplete	Mandatory	Please enter	
49	disambiguation of input	D+Tc-0040	Display a maximum of two suggestions based on the data entered, plus an option to re-enter the value in the input field. Selection of a suggested value enters that value into the control	Recommended	Please enter	
End of check list					

## Sheet: NHS number
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	NHS Number display	NUM-0001	Display the NHS Number in full, on a single line, without truncation or splitting it over multiple lines	Mandatory	Please enter	
2	NHS Number display	NUM-0002	Display the NHS Number as three groups, with a single space included as a separator between groups, as follows: - The first group must consist of the first, second and third digits in order - The second group must consist of the fourth, fifth and sixth digits in order - The third group must consist of the seventh, eighth, ninth and tenth digits in order	Mandatory	Please enter	
3	NHS Number display	NUM-0003	Support the copying of NHS Numbers by the user as part of the ‘Copy and Paste’ task	Recommended	Please enter	
4	NHS Number input	NUM-0010	Provide a single text input box for NHS Number entry	Recommended	Please enter	
5	NHS Number input	NUM-0011	Permit only one NHS Number to be entered in an NHS Number input box	Mandatory	Please enter	
6	NHS Number input	NUM-0012	Set the length of the NHS Number input box such that the NHS Number is visible in full	Recommended	Please enter	
7	NHS Number input	NUM-0013	Set the height of the NHS Number input box to the largest character height in the currently active display font, taking the user’s settings into account	Recommended	Please enter	
8	NHS Number input	NUM-0014	Permit NHS Number input via all the mechanisms supported on a platform such as, but not limited to, typing on a keyboard, copy and paste, and handwriting with a stylus	Recommended	Please enter	
9	NHS Number input	NUM-0015	During input, reformat the numbers entered as per the NHS Number display format, namely three numbers, space, the next three numbers, space, the last four numbers	Recommended	Please enter	
10	NHS Number input	NUM-0016	Ensure the NHS Number only consists of 10 digits and two spaces as described in	Mandatory	Please enter	
11	NHS Number input	NUM-0017	During input, permit only the single space character to act as a separator within the NHS Number, discarding all other non-numeric user input, including but not limited to:  Hypens, dashes, forward slashes, back slashes, full stop, comma, colon	Mandatory	Please enter	
12	NHS Number input	NUM-0018	Do not permit input of old format and temporary NHS Numbers	Mandatory	Please enter	
End of check list					

## Sheet: Patient banner
order	Section	ID	Guideline	Status	Compliant  yes / no	Comments - if not clear on compliance level or feedback on guidance
1	structure and composition	PAB-0001	The Patient Banner should consist of two zones, Zone 1 and Zone 2	Recommended	Please enter	
2	structure and composition	PAB-0073	The Patient Banner must include Zone 1	Mandatory	Please enter	
3	structure and composition	PAB-0002	Display information that facilitates patient identification in Zone 1	Mandatory	Please enter	
4	structure and composition	PAB-0074	The Patient Banner should include Zone 2	Recommended	Please enter	
5	structure and composition	PAB-0003	Display supplementary information that either supports patient identification or assists patient care in Zone 2	Mandatory	Please enter	
6	structure and composition	PAB-0004	Where Zone 2 is used, in the default display of the Patient Banner, show Zone 1 and Zone 2, with Zone 2 in the collapsed state	Mandatory	Please enter	
7	structure and composition	PAB-0005	Zone 2 consists of five sections	Mandatory	Please enter	
8	structure and composition	PAB-0075	Zone 2 must have expand and collapse capability	Mandatory	Please enter	
9	structure and composition	PAB-0006	All five sections in Zone 2 expand and collapse together	Mandatory	Please enter	
10	structure and composition	PAB-0007	Display a tooltip when the mouse is positioned over Zone 2 while Zone 2 is collapsed, stating that Zone 2 can be expanded	Mandatory	Please enter	
11	structure and composition	PAB-0008	The Patient Banner adheres to role-based access control, for example, do not display clinical information, such as allergy propensities, to non-clinical users	Mandatory	Please enter	
12	application context and banner positioning	PAB-0009	Display the Patient Banner at the top of the application window	Mandatory	Please enter	
13	application context and banner positioning	PAB-0010	Display the Patient Banner across the width of the screen rather than vertically	Mandatory	Please enter	
14	application context and banner positioning	PAB-0011	Display the Patient Banner in a fixed position, unmovable by the user	Mandatory	Please enter	
15	application context and banner positioning	PAB-0012	Display the Patient Banner so that it occupies the full width of the application window	Mandatory	Please enter	
16	application context and banner positioning	PAB-0013	Do not obscure the Patient Banner with other elements of the screen	Recommended	Please enter	
17	application context and banner positioning	PAB-0014	Apply visual styling such as a thick border or distinguishing background colour, to the Patient Banner in contrast to other elements of the application’s user interface	Mandatory	Please enter	
18	application context and banner positioning	PAB-0015	Do not display the Patient Banner on screens that contain information relating to more than one patient	Recommended	Please enter	
19	The minimum data set	PAB-0016	Always display the patient’s name (Last Name, First Name and title), date of birth, gender and NHS number in this order within the Patient Banner	Mandatory	Please enter	
20	The minimum data set	PAB-0076	Enable a user to tab between the patient identification data in the same order as the displayed information as follows: the patient’s name (Last Name, First Name and title), date of birth, gender and NHS number	Mandatory	Please enter	
21	The minimum data set	PAB-0017	For a patient who is alive, the Patient Banner additionally displays contact details (comprising the address and phone numbers) and the patient’s age	Mandatory	Please enter	
22	The minimum data set	PAB-0018	For a deceased patient, the Patient Banner additionally displays the last known contact details (comprising the address and phone numbers), date of death and age at death	Mandatory	Please enter	
23	The minimum data set	PAB-0019	If an individual data item is not known, or is otherwise unavailable, a blank string or appropriate self explanatory text (such as “Not Known”, but not a “?”) is to be displayed immediately after the corresponding data label	Mandatory	Please enter	
24	The minimum data set	PAB-0020	Display the preferred name if available	Recommended	Please enter	
25	The minimum data set	PAB-0021	Do not display the patient’s photograph in the Patient Banner	Recommended	Please enter	
26	information groupings	PAB-0022	Display the elements of the patient name, date of birth, gender and NHS number in Zone 1	Mandatory	Please enter	
27	information groupings	PAB-0023	Display the age of a living patient in Zone 1	Mandatory	Please enter	
28	information groupings	PAB-0024	For a deceased patient, display the date of death and the age at death in Zone 1	Mandatory	Please enter	
29	information groupings	PAB-0025	Display as much of the address as possible in a single line, in the title of the first section in Zone 2, displaying an ellipsis to show incomplete display of the address	Mandatory	Please enter	
30	information groupings	PAB-0026	Display the full address including the postcode, in the first section of the expanded Zone 2	Mandatory	Please enter	
31	information groupings	PAB-0027	Precede the full address with the label “Usual address”, “Temporary address”, or one of the types of temporary address, as appropriate, and as defined in the PDS	Mandatory	Please enter	
32	information groupings	PAB-0028	Display as much of a single phone number as possible in a single line, in the title of the second section on Zone 2, displaying an ellipsis to show incomplete display of the phone number	Mandatory	Please enter	
33	information groupings	PAB-0029	Display contact numbers and email addresses in the second section of the expanded Zone 2, in the following order: Home, Work, Mobile, Email	Mandatory	Please enter	
34	information groupings	PAB-0030	Precede each contact number and email address with the label “Home”, “Work”, “Mobile”, or “Email”, as appropriate	Mandatory	Please enter	
35	information groupings	PAB-0031	Optionally, display allergy propensity information in Zone 2 of the Patient Banner	Recommended	Please enter	
36	information groupings	PAB-0032	Reserve the fifth section of Zone 2 for the display of optional allergy propensity information	Mandatory	Please enter	
37	data values and labels	PAB-0033	Precede the date of birth with the label “Born”	Mandatory	Please enter	
38	data values and labels	PAB-0034	When displaying the age of a living patient, place it in parentheses immediately following the date of birth, and without a label	Mandatory	Please enter	
39	data values and labels	PAB-0035	Precede the gender with the label “Gender”	Mandatory	Please enter	
40	data values and labels	PAB-0036	Precede the NHS number with the label “NHS No.”	Mandatory	Please enter	
41	data values and labels	PAB-0037	Precede the preferred name with the label “Preferred name”	Recommended	Please enter	
42	data values and labels	PAB-0038	Precede the date of death with the label “Died”	Mandatory	Please enter	
43	data values and labels	PAB-0039	Precede the age at death with the label “Age at Death”	Mandatory	Please enter	
44	data values and labels	PAB-0040	Precede the address displayed in the title of the first section in Zone 2, with the label “Address”	Recommended	Please enter	
45	data values and labels	PAB-0041	Precede the single phone number displayed in the title of the second section in Zone 2, with the label “Phone and email”	Recommended	Please enter	
46	data values and labels	PAB-0042	Do not add a colon after the label text	Mandatory	Please enter	
47	data values and labels	PAB-0043	Do not include unnecessary punctuation in a label	Recommended	Please enter	
48	data values and labels	PAB-0044	Display labels in the style given to label text	Mandatory	Please enter	
49	data values and labels	PAB-0045	Display values in the style given to data text	Mandatory	Please enter	
50	data values and labels	PAB-0046	Give more emphasis to the value text style relative to the label text style	Mandatory	Please enter	
51	data values and labels	PAB-0047	For each label in Zone 1, provide a definition and a means to access the definition for example, by a tooltip	Recommended	Please enter	
52	data values and labels	PAB-0048	Provide a means to access the record for all data items in Zone 1	Recommended	Please enter	
53	displaying the patient name	PAB-0049	Display the patient name elements and the title in the following order: Last Name, First Name, title	Mandatory	Please enter	
54	displaying the patient name	PAB-0050	Do not include labels for the patient name elements and the title	Mandatory	Please enter	
55	displaying the patient name	PAB-0051	Display a comma after the Last Name	Mandatory	Please enter	
56	displaying the patient name	PAB-0052	Display the title in parentheses	Mandatory	Please enter	
57	displaying the patient name	PAB-0053	Display the patient’s Last Name in upper case and the patient’s First Name and title in title case	Mandatory	Please enter	
58	displaying the patient name	PAB-0054	Display the patient’s preferred name, if available, immediately below the Last Name	Mandatory	Please enter	
59	banner for a deceased patient	PAB-0055	For a deceased patient, use a background area for Zone 1 in which both the colour and the pattern are substantially different from those used for a living patient	Mandatory	Please enter	
60	banner for a deceased patient	PAB-0056	The choice of both background colour and pattern must be such as to differentiate the Patient Banner of a deceased patient from that of a living patient, on all display devices, including, but not limited to, desktop monitors and projected images	Mandatory	Please enter	
61	banner for a deceased patient	PAB-0057	Display the date of death along with its label	Mandatory	Please enter	
62	banner for a deceased patient	PAB-0058	Display the date of death below the date of birth	Mandatory	Please enter	
63	banner for a deceased patient	PAB-0059	Display the age at death, preceded by its label, immediately after the date of death	Mandatory	Please enter	
64	banner for a deceased patient	PAB-0060	Display the age at death without parentheses	Mandatory	Please enter	
65	alignment of information	PAB-0061	Display the patient’s preferred name, if available, immediately below the First Name, with both items left-aligned	Mandatory	Please enter	
66	alignment of information	PAB-0062	When a patient’s preferred name is not available, the patient’s name must be centred vertically and left-aligned in Zone 1	Mandatory	Please enter	
67	alignment of information	PAB-0063	For a deceased patient, display the data labels and values corresponding to the date of death and age at death in that order, immediately below the label corresponding to the date of birth, with both the date labels being left-aligned	Mandatory	Please enter	
68	displaying allergy propensities	PAB-0064	Use one of the following labels in the title for the Allergies section: “Known allergies”, “No known allergies”, “Allergies not recorded”, and “Allergies unavailable”	Mandatory	Please enter	
69	displaying allergy propensities	PAB-0065	Display each allergy propensity in the expanded section in Zone 2, along with the date when the record of that propensity was last updated	Mandatory	Please enter	
70	displaying allergy propensities	PAB-0066	Provide a means to enable the user to view the section of the record containing Allergy propensity information, for all instances when the section title is one of: “Known allergies”, “No known allergies”, or “Allergies not recorded”	Mandatory	Please enter	
71	displaying allergy propensities	PAB-0067	Emphasise the label “Known allergies” in relation to the other permitted labels	Mandatory	Please enter	
72	displaying allergy propensities	PAB-0068	Display the labels “Known allergies” and “No known allergies” in data text style	Mandatory	Please enter	
73	displaying allergy propensities	PAB-0069	Precede the label “Known allergies” with a unique icon that gives the label greater emphasis	Mandatory	Please enter	
74	displaying allergy propensities	PAB-0070	Precede the labels “No known allergies” and “Allergies not recorded” with a unique icon that gives the label reduced emphasis	Mandatory	Please enter	
75	displaying allergy propensities	PAB-0071	Display the labels “Allergies not recorded” and “Allergies unavailable” in label text style	Mandatory	Please enter	
76	displaying allergy propensities	PAB-0072	Precede the label “Allergies unavailable” with a unique icon that gives the label reduced emphasis and that indicates allergies are not available	Mandatory	Please enter	
End of check list					

## Sheet: Patient name
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	Patient name display	NID-0001	The display must present the Family Name in all uppercase letters to clearly distinguish it from the Given Name.	Mandatory	Please enter	
2	Patient name display	NID-0002	The display must separate the Family Name and Given Name using a comma to further establish that the Family Name is being placed first.	Mandatory	Please enter	
3	Patient name display	NID-0003	The display must include parentheses around the Title to separate and distinguish it from the other name elements.	Mandatory	Please enter	
4	Patient name display	NID-0004	The display must present the name elements strictly in the order shown.	Mandatory	Please enter	
5	Patient name display	NID-0005	The display must present all data for each specified element (Family Name, Given Name and Title) of the Patient Name in full. Avoid truncation of information where possible.	Mandatory	Please enter	
6	Patient name display	NID-0006	The display must separate the presentation of Given Name and Title by a single space.	Mandatory	Please enter	
7	Patient name display	NID-0007	The display must present the Title element in title case, for example, Sir not SIR, Mr not MR.	Mandatory	Please enter	
8	Patient name display	NID-0008	The display must present a single pair of parentheses around the Title element, for example, (Mr).	Mandatory	Please enter	
9	Patient name display	NID-0009	The display must allow any free-text (up to 35 characters) to be presented in the Title element.	Mandatory	Please enter	
10	Patient name display	NID-0010	The display must, in accordance with the UK Government Data Standards Catalogue guidelines, omit a trailing full stop from the Title element (for example, ‘Mr’ not ‘Mr.’).	Mandatory	Please enter	
11	Patient name display	NID-0011	The display must allow the Family Name, Given Name and Title elements to present at least the maximum field sizes given in the NHS Connecting for Health Personal Demographics Service  (PDS) FS 10.00, Issue 1A, 18th January 2005 (CDT D 0222).	Mandatory	Please enter	
12	Patient name display	NID-0012	The display must allow for the Family Name and Given Name elements to consist of multiple components. Components are constituent parts of the name element that combine with other parts to form the element as a whole. For example, the components of the name LIDMAN SUN are LIDMAN and SUN and the components of Mary Jane are Mary and Jane. Components have the following features: - Family Name components must consist of UPPERCASE alphabetic characters only, for example, SMITH. - Multiple Family Name components must be separated by a hyphen or a single space, for example, LIDMAN-SUN-DEWAR or EVANS WEST.  - Given Name components must display in title case, for example, Nadejda. - Multiple Given Name components must be separated by a hyphen or a single space, for example, Anne-Jorun, Nis Bank.	Mandatory	Please enter	
13	Patient name display	NID-0013	The display should allow word wrapping to occur in instances where the field length exceeds the width allocated to it on the form. If word wrapping occurs, it should be applied only at the end of a whole field element or at the end of a field element component, if it comprises multiple parts (for example, Middle name(s) field).	Recommended	Please enter	
14	Patient name display	NID-0062	By default, include a prompt in the input boxes to indicate to a user the information required	Recommended	Please enter	
15	Patient name display	NID-0063	Present the default prompt in an occluded form to prevent confusion with actual data input by a user	Recommended	Please enter	
16	Patient name display	NID-0064	Remove the default prompt when a user begins to input data	Mandatory	Please enter	
17	Patient name input -Title	NID-0014	Input control must allow a maximum of 35 characters.	Mandatory	Please enter	
18	Patient name input  -Title	NID-0015	Minimum visual width of the input box must display four characters.	Mandatory	Please enter	
19	Patient name input  -Title	NID-0016	Suggested values are: 'Mr', 'Mrs', 'Ms', 'Dr', 'Rev', 'Sir', 'Lady', 'Lord', 'Dame', 'Other...'	Recommended	Please enter	
20	Patient name input  -Title	NID-0017	One value should allow the user to invoke free-text input mode (for example ‘Other...’ in the illustrations).	Recommended	Please enter	
21	Patient name input  -Title	NID-0018	Input box should contain a relevant prompt, for example, Mr.	Recommended	Please enter	
22	Patient name input  -Title	NID-0019	Input control should be in the form of a drop-down combo-box.	Recommended	Please enter	
23	Family name	NID-0020	Family Name input must be via a free-text entry box.	Mandatory	Please enter	
24	Family name	NID-0021	Family Name input box must accept a maximum of 35 characters.	Mandatory	Please enter	
25	Family name	NID-0022	Family Name input box should be capable of displaying a minimum of eight characters without occlusion.	Recommended	Please enter	
26	Family name	NID-0023	Family Name input box should optimally display 14 characters without occlusion.	Recommended	Please enter	
27	Family name	NID-0024	Family Name input box should contain a relevant prompt in its default state (for example, ‘e.g. SMITH’) in occluded form.	Recommended	Please enter	
28	Family name	NID-0025	When displaying a Family Name value, the characters should all be in uppercase.	Recommended	Please enter	
29	Given name	NID-0026	Given Name input must be via a free-text entry box.	Mandatory	Please enter	
30	Given name	NID-0027	Given Name input box must accept a maximum of 35 characters.	Mandatory	Please enter	
31	Given name	NID-0028	Given Name input box should be capable of displaying a minimum of eight characters without occlusion.	Recommended	Please enter	
32	Given name	NID-0029	Given Name input box should optimally display 14 characters without occlusion.	Recommended	Please enter	
33	Given name	NID-0030	Given Name input box should contain a relevant prompt in its default state  (for example, ‘e.g. John’) in occluded form.	Recommended	Please enter	
34	Given name	NID-0031	When displaying a Given Name value the first character should be in uppercase.	Recommended	Please enter	
35	Middle name	NID-0032	Middle name input must be via a free-text entry box.	Mandatory	Please enter	
36	Middle name	NID-0033	Middle name input box must accept a maximum of 100 characters.	Mandatory	Please enter	
37	Middle name	NID-0034	Middle name input box should be capable of displaying a minimum of eight characters without occlusion.	Recommended	Please enter	
38	Middle name	NID-0035	Middle name input box should optimally display 7 characters without occlusion.	Recommended	Please enter	
39	Middle name	NID-0036	Middle name input box should contain a relevant prompt in its default state (for example, ‘e.g. David James’) in occluded form.	Recommended	Please enter	
40	Suffix	NID-0037	Suffix input must be via a free-text entry box.	Mandatory	Please enter	
41	Suffix	NID-0038	Suffix input box must accept a maximum of 35 characters.	Mandatory	Please enter	
42	Suffix	NID-0039	Suffix input box should be capable of displaying a minimum of eight characters without occlusion.	Recommended	Please enter	
43	Suffix	NID-0040	Suffix input box should optimally display 14 characters without occlusion.	Recommended	Please enter	
44	Suffix	NID-0041	Suffix input box should contain a relevant prompt when in its default state  (for example, ‘e.g. Junior’) in occluded form.	Recommended	Please enter	
45	Preferred name	NID-0042	Preferred name input must be via a free-text entry box.	Mandatory	Please enter	
46	Preferred name	NID-0043	Preferred name input box must accept a maximum of 35 characters.	Mandatory	Please enter	
47	Preferred name	NID-0044	Preferred name input box should be capable of displaying a minimum of eight characters without occlusion.	Recommended	Please enter	
48	Preferred name	NID-0045	Preferred name input box should optimally display 14 characters without occlusion.	Recommended	Please enter	
49	Preferred name	NID-0046	Preferred name input box should contain a relevant prompt in its default state (for example, ‘e.g. Johnny-Boy’) in occluded form.	Recommended	Please enter	
50	InForm input design	NID-0047	InForm field controls must be aligned on the left edge of the input boxes.	Mandatory	Please enter	
51	InForm input design	NID-0048	InForm field controls (where they exist) must be placed underneath each other in the following order: Title, Family Name, Given Name, Middle name(s), Suffix, Known as	Mandatory	Please enter	
52	InLine Input design	NID-0049	Ensure wrapping only occurs on whole fields.	Mandatory	Please enter	
53	InLine Input design	NID-0050	Correct presentation order is: Title, Family name, Given name, Middle name(s), Suffix, Known as	Mandatory	Please enter	
54	InLine Input design	NID-0051	InLine design choice should only be used when InForm has been considered undesirable.	Recommended	Please enter	
55	Field labels	NID-0052	Each field in a name input control must have an associated label.	Mandatory	Please enter	
56	Field labels	NID-0053	Labels must be programmatically linked to their associated input field.	Mandatory	Please enter	
57	Field labels	NID-0054	Label values should be: - Title: "Title" - Family Name: "Family Name" - Given Name: "Given Name" - Middle name: "Middle name(s)" - Suffix: "Suffix" - Preferred name: "Known as"	Recommended	Please enter	
58	prompts	NID-0055	Each field in a name input control should have an associated prompt.	Recommended	Please enter	
59	prompts	NID-0056	Prompts for Family Name should be capitalised.	Recommended	Please enter	
60	prompts	NID-0057	All prompts except Family Name should have sentence style capitalisation.	Recommended	Please enter	
61	prompts	NID-0058	Prompt values should be: - Title: "e.g. Mr" - Family Name: "e.g. SMITH" - Given Name: "e.g. John" - Middle name(s): "e.g. David James" - Suffix: "e.g. Junior" - Known as: "e.g. Johnny-Boy"	Recommended	Please enter	
62	prompts	NID-0059	Prompts should be lighter in weight and colour than the input text, and italicised.	Recommended	Please enter	
63	Tooltips	NID-0060	Each field in a name input control should have instructional text (for example, a tooltip).	Recommended	Please enter	
64	Tooltips	NID-0061	Tooltip values should be: - Title: "Select a Title from the list or simply type in a different Title" - Family Name: "Enter the person’s Family Name (surname)" - Given Name: "Enter the person’s Given Name (forename or Christian name)" - Middle name(s): "Enter the person’s middle name(s)" - Suffix: "Enter the person’s suffix name (e.g. ‘Junior’ or ‘The Third’)" - Known as: "Enter the name a person likes to referred to as"	Recommended	Please enter	
End of check list					

## Sheet: Sex and Gender
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	Current Gender Values	CGS-0001	Label the Current Gender input controls 'Current Gender'.	Mandatory	Please enter	
2	Current Gender Values	CGS-0002	The Current Gender values are: Male, Female, Other Specific, Not Known, Not Specified	Mandatory	Please enter	
3	Current Gender Values	CGS-0003	The Current Gender status is one the following values: Male, Female, Other Specific, Not Known, Not Specified	Mandatory	Please enter	
4	Current Gender Values	CGS-0004	Make the definitions of the Current Gender status values accessible to the user.	Mandatory	Please enter	
5	Current Gender Values	CGS-0005	Do not abbreviate Current Gender data values.	Mandatory	Please enter	
6	Current Gender Values	CGS-0006	Do not display the underlying coded representation of the Current Gender data values. For example, the standard code for 'Male' may be the integer 1, but this number should not appear.	Mandatory	Please enter	
7	Current Gender Values	CGS-0007	Label the Current Gender status display 'Current Gender'.	Recommended	Please enter	
8	Current Gender Values	CGS-0008	Use ‘Not Known’ as the Current Gender default value.	Recommended	Please enter	
9	Sex values	CGS-0009	Label the Sex input controls 'Sex'.	Mandatory	Please enter	
10	Sex values	CGS-0010	The Sex values are: Male, Female, Not Known, Indeterminate	Mandatory	Please enter	
11	Sex values	CGS-0011	The Sex status must only contain one the following values: Male, Female, Not Known, Indeterminate	Mandatory	Please enter	
12	Sex values	CGS-0012	Sex data values must never be abbreviated.	Mandatory	Please enter	
13	Sex values	CGS-0013	The Sex default state is null.	Mandatory	Please enter	
14	Sex values	CGS-0014	The application must not display the underlying coded representation of the Sex data values. For example, the standard code for 'Male' may be the integer 1, but this number must not appear.	Mandatory	Please enter	
15	Sex values	CGS-0015	Make the definitions of the Sex status values accessible to the user.	Mandatory	Please enter	
16	Sex values	CGS-0016	Label the Sex status display 'Sex'.	Recommended	Please enter	
17	Instructional text	CGS-0017	Provide definitions for input controls.	Mandatory	Please enter	
18	Instructional text	CGS-0018	Provide access to definitions of the valid values.	Mandatory	Please enter	
19	Instructional text	CGS-0019	Provide a shortened version of the definitions.	Recommended	Please enter	
20	Current gender option button group	CGS-0020	Current Gender option button group input controls must consist of five option buttons.	Mandatory	Please enter	
21	Current gender option button group	CGS-0021	Current Gender option button group labels are in the following order (top to bottom first, followed by left to right): Male, Female, Other Specific, Not Known, Not Specified	Mandatory	Please enter	
22	Current gender option button group	CGS-0022	The Current Gender tab order is: Male, Female, Other Specific, Not Known, Not Specified	Recommended	Please enter	
23	Sex Option Button Group	CGS-0023	Sex option button group input controls must consist of four option buttons.	Mandatory	Please enter	
24	Sex Option Button Group	CGS-0024	Sex option button group labels are in the following order (top to bottom first followed by left to right): Male, Female, Not Known, Indeterminate	Recommended	Please enter	
25	Current gender drop-down list box	CGS-0025	Current Gender drop-down list box options are in the following order (top to bottom): 1. Male 2. Female 3. Other Specific 4. Not Known 5. Not Specified	Mandatory	Please enter	
26	Current gender drop-down list box	CGS-0026	Use a single drop-down list box for the Current Gender control.	Mandatory	Please enter	
27	Current gender drop-down list box	CGS-0027	Do not use a prompt for the Current Gender control, due to its default value of 'Not Known'.	Mandatory	Please enter	
28	Sex drop-down list box	CGS-0028	Ensure that Sex controls have no value selected by default and no method of returning to this ‘null’ state.	Mandatory	Please enter	
29	Sex drop-down list box	CGS-0029	Use a single control for the Sex drop-down list box.	Mandatory	Please enter	
30	Sex drop-down list box	CGS-0030	Ensure that the Sex drop-down list box is blank by default and does not contain a prompt.	Recommended	Please enter	
End of check list					

## Sheet: Telephone number
order	Section	ID	Guideline	Status	Compliant  yes / no / NA	Comments - if not clear on compliance level or feedback on guidance
1	Telephone number display	TID-0001	If the country code is for the UK, for example, ‘+44’ or ‘0044’, then it must not be displayed.	Mandatory	Please enter	
2	Telephone number display	TID-0002	When displayed, the country code must always be displayed with a ‘+’ sign in front of it.	Mandatory	Please enter	
3	Telephone number display	TID-0003	When displayed, the country code must not display any leading zeros.	Mandatory	Please enter	
4	Telephone number display	TID-0004	When displayed, the country code must be separated from the rest of the telephone number by a single space.	Mandatory	Please enter	
5	Telephone number display	TID-0005	For UK telephone numbers, the area code must not be displayed with brackets around it.	Mandatory	Please enter	
6	Telephone number display	TID-0006	For UK telephone numbers, the area code must be separated from subsequent numbers by a space.	Mandatory	Please enter	
7	Telephone number display	TID-0007	For UK telephone numbers, extension numbers can be displayed with an ‘x’ preceding and adjacent to the number.	Recommended	Please enter	
8	Telephone number display	TID-0008	For UK telephone numbers where the telephone and extension numbers are displayed within a single input box, the extension number must be separated from the rest of telephone number by a single space that precedes the ‘x’.	Mandatory	Please enter	
9	Telephone number display	TID-0026	For UK telephone numbers where the extension number is displayed in a separate input box, a label must be shown above the input box to indicate the content	Recommended	Please enter	
10	Telephone number display	TID-0009	For UK telephone numbers, if there are more than six digits in the local number, (in other words, not the country code, area code or extension number), then a space must be inserted before the final four digits.	Mandatory	Please enter	
11	Telephone number display	TID-0010	The telephone number should be formatted for display according to the rules detailed in APPENDIX A.	Recommended	Please enter	
12	Input: Unassisted design	TID-0011	Use a free-text input box for the entry of telephone number.	Mandatory	Please enter	
13	Input: Unassisted design	TID-0027	Use a free-text input box where extension number is input into a separate input box	Mandatory	Please enter	
14	Input: Unassisted design	TID-0012	Ensure the input box accepts formatted and unformatted entries.	Mandatory	Please enter	
15	Input: Unassisted design	TID-0013	If the number can be identified as a valid type (as detailed in APPENDIX A), the input box should strip out formatting upon losing focus and replace it with a reformatted equivalent.	Mandatory	Please enter	
16	Input: Unassisted design	TID-0014	Display a reformatted entry to the user which: Places spaces in logical locations for readability	Mandatory	Please enter	
17	Input: Unassisted design	TID-0015	If the number cannot be identified as a valid type (as detailed in APPENDIX A), display the entry to the user as it was entered.	Mandatory	Please enter	
18	Input: Unassisted design	TID-0016	Remove the UK country code from display after it is committed.	Mandatory	Please enter	
19	Input: Unassisted design	TID-0017	Retain all other country codes.	Mandatory	Please enter	
20	Input: Unassisted design	TID-0018	Do not display UK numbers with the international prefix.	Mandatory	Please enter	
21	Input: Unassisted design	TID-0019	Display non-UK numbers with a + prefixed to the country code.	Mandatory	Please enter	
22	Input: Assisted design	TID-0020	Use a default value of +44 (UK) for the country code.	Mandatory	Please enter	
23	Input: Assisted design	TID-0021	Use the ISO 3166 names in the first column, the Ofcom list of dialling codes in the second column and the ISO 3166 abbreviated country codes in the third column. Use the abbreviation ‘UK’ instead of the ISO 3166 code of ‘GB’.	Mandatory	Please enter	
24	Input: Assisted design	TID-0022	Order the country names alphabetically. Include United Kingdom once at the top of the list and once in its appropriate alphabetical location.	Mandatory	Please enter	
25	Input: Assisted design	TID-0023	Use an editable drop-down list for country codes.	Recommended	Please enter	
26	Input: Assisted design	TID-0024	Allow the country codes to be navigated using free-text entry.	Recommended	Please enter	
27	Input: Assisted design	TID-0025	Populate the country selector list with the three elements below and in this exact order: 1. Country name (left-aligned and vertically aligned to all rows). 2. Country dialling code (right-aligned using the '+' format, for example, ‘+44'). 3. Country abbreviation (right-aligned, two-character code, enclosed in single brackets and vertically aligned to all rows).	Recommended	Please enter	
End of check list					

## Sheet: Sheet1
