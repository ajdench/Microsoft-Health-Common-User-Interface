# Design Guidance -- Displaying Graphs and Tables

## Provenance
- Source file: `raw/sources/design-guidance/toolkit-bundled-pdfs/Design Guidance -- Displaying Graphs and Tables.pdf`
- Extracted text: `derived/extracted-text/design-guidance/design-guidance-displaying-graphs-and-tables.txt`
- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.

## Extracted Text

Design Guidance
Displaying Graphs and Tables

          Wednesday, 12 November 2008
                        Version 2.0.0.0

                           Prepared by

PREFACE
   Documents replaced by this document

   Document Title                                                                                                                  Version
   Design Guidance – Displaying Graphs and Tables                                                                                  1.0.0.0

   Documents to be read in conjunction with this document

   Document Title                                                                                                                  Version
   Design Guidance – Date Display                                                                                                  2.0.0.0

   Design Guidance – Time Display                                                                                                  2.0.0.0

This document and/or software (“this Content”) has been created in partnership with the National Health Service (NHS) in England. Intellectual Property
Rights to this Content are jointly owned by Microsoft and the NHS in England, although both Microsoft and the NHS are entitled to independently exercise
their rights of ownership. Microsoft acknowledges the contribution of the NHS in England through their Common User Interface programme to this Content.
Readers are referred to www.cui.nhs.uk for further information on the NHS CUI Programme.

All trademarks are the property of their respective companies. Microsoft and Windows are either registered trademarks or trademarks of Microsoft
Corporation in the United States and/or other countries.

© Microsoft Corporation 2008. All rights reserved.

                                    Design Guidance – Displaying Graphs and Tables
                                    Prepared by Microsoft, Version 2.0.0.0
                                    Last modified on 12 November 2008

TABLE OF CONTENTS
1    Introduction .................................................................................................................................... 1
    1.1    Customer Need......................................................................................................................... 1
    1.2    Potential Patient Safety Risks to be Mitigated .......................................................................... 1
    1.3    Scope ........................................................................................................................................ 3
     1.3.1      Data Values and Labels ...................................................................................................... 4
     1.3.2      Scaling ................................................................................................................................. 5
     1.3.3      Axes .................................................................................................................................... 6
     1.3.4      Layout Density and Formatting ........................................................................................... 6
     1.3.5      Simultaneous Views of Multiple Data Series ...................................................................... 6
     1.3.6      Interpolation......................................................................................................................... 7
     1.3.7      Indicative Ranges ................................................................................................................ 7
     1.3.8      Tables .................................................................................................................................. 7
     1.3.9      Additional Contextual Information ....................................................................................... 7
     1.3.10         Additional Visualisation Mechanisms .............................................................................. 8
    1.4    Assumptions ............................................................................................................................. 8
    1.5    Dependencies ........................................................................................................................... 8
    1.6    Summary of Guidance .............................................................................................................. 8

2    Data Values and Units Guidance Details ................................................................................... 17
    2.1    Guidelines – Creating Symbols for Data Points in Graphs..................................................... 17
    2.2    Guidelines – Identifying and Labelling Data ........................................................................... 21
    2.3    Guidelines – Displaying Data Units ........................................................................................ 25
    2.4    Guidelines – Displaying Blood Pressure Composites ............................................................ 28
    2.5    Guidelines – Displaying Textual-Numerical Values in Graphs ............................................... 30
    2.6    Guidelines – Focus of Data Points ......................................................................................... 33

3    Scaling Guidance Details ............................................................................................................ 36
    3.1    Guidelines – Scaling ............................................................................................................... 36

4    Axes Guidance Details ................................................................................................................ 43
    4.1    Guidelines – X-Axis and Y-Axis Arrangements ...................................................................... 43
    4.2    Guidelines – Time Axis Intervals ............................................................................................ 44
    4.3    Guidelines – Clinical Measure Axis Intervals ......................................................................... 46
    4.4    Guidelines – Axis Ranges ...................................................................................................... 48
    4.5    Guidelines – Gridlines............................................................................................................. 51
    4.6    Guidelines – Axis Labels ........................................................................................................ 54

5    Layout, Density and Formatting Guidance Details .................................................................. 57
    5.1    Guidelines – Colours and Contrasts ....................................................................................... 57

                                 Design Guidance – Displaying Graphs and Tables
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 12 November 2008

     5.2      Guidelines – Typeface Formatting.......................................................................................... 60
     5.3      Guidelines – Line Formatting .................................................................................................. 62
     5.4      Guidelines – Other Formatting Considerations ...................................................................... 63

6     Multiple Data Series Guidance Details ...................................................................................... 64
     6.1      Guidelines – Viewing Multiple Non-Overlaid Graphs ............................................................. 64
     6.2      Guidelines – Overlaying Multiple Graphs ............................................................................... 67
     6.3      Guidelines – Special Considerations for Viewing Multiple Overlaid Graphs .......................... 68

7     Interpolation Guidance Details ................................................................................................... 70
     7.1      Guidelines – Use of Interpolation ........................................................................................... 70
     7.2      Guidelines – Formatting of Interpolation ................................................................................ 72

8     Indicative Ranges Guidance Details .......................................................................................... 74
     8.1      Guidelines – Displaying Indicative Ranges ............................................................................ 74

9     Tables Guidance Details ............................................................................................................. 77
     9.1      Guidelines – Table Orientation ............................................................................................... 77
     9.2      Guidelines – Table Formatting ............................................................................................... 79
     9.3      Guidelines – Table Labelling .................................................................................................. 81

10         Contextual Information Guidance Details.............................................................................. 84
     10.1         Guidelines – Accessing Contextual Data .......................................................................... 84

11         Document Information ............................................................................................................. 85
     11.1         Terms and Abbreviations .................................................................................................. 85
     11.2         Definitions .......................................................................................................................... 85
     11.3         Nomenclature .................................................................................................................... 86
      11.3.1          Body Text ...................................................................................................................... 86
      11.3.2          Cross References.......................................................................................................... 87
     11.4         References ........................................................................................................................ 87

APPENDIX A              High-Level Task Scenarios ...................................................................................... 89
     PART I       Emergency Department Assessment................................................................................ 89
     PART II          Intensive Care Unit Monitoring ...................................................................................... 90
     PART III         Renal Outpatients Unit .................................................................................................. 91
     PART IV          Inpatient Monitoring ....................................................................................................... 92
     PART V           Hypertension Clinic ....................................................................................................... 93

                                   Design Guidance – Displaying Graphs and Tables
                                   Prepared by Microsoft, Version 2.0.0.0
                                   Last modified on 12 November 2008

1             INTRODUCTION
    Table 1 below describes the changes made since the previous version of this document:

    Previous          Previous
                                        Changes Since Previous Version
    Version           Date
    1.0.0.0           26-Aug-2008       Modified:
                                         GTAB-188 and GTAB-189 have been reworded to further mitigate safety issues
    Table 1: Changes Since the Last Baseline Version

1.1           Customer Need
    Clinical data represented numerically, such as physiological observations or ‘vital signs’ readings,
    play a crucial role in clinical decision-making and in communicating with patients, which in turn can
    influence patient involvement with their treatment regimen. In addition to accurately reading such
    numerical data, clinicians must also interpret patterns in the data to assess the patient’s status and
    to determine the best course of action. This often requires them to rapidly assimilate multiple series
    of data. Often, these patterns are difficult to spot initially, but become more distinct as a pathology
    develops and it is imperative that clinicians can detect them as early as possible. Pattern detection
    is a universal human capacity which people tend to do very efficiently and often subconsciously.
    However, the detection and meaning of a data pattern can be heavily influenced by the way in
    which the data is presented, and misinterpretation may occur if the data is not presented in a way
    that clinicians can easily understand.
    In a clinical context, this may mean that important patterns could be missed or are detected too
    late. Although, in acute care, early warning scores are effective for detecting problems, in other
    clinical contexts, and for subtle data patterns, measurements may need to be displayed graphically
    for changes to be perceived.
    Also, in order that patients can comply with the care intervention, such as changing their lifestyle or
    taking medication, it is crucial that they can understand their condition, their likely prognosis and
    the physiological targets they must achieve in order to get better. Health psychology research has
    shown that patients’ understanding of their condition and likely outcomes are often subject to bias.
    Whereas people often find it hard to see trends and deficits in numerical data, graphical
    representations effectively communicate the pattern and direction of physiological signs, along with
    the changes that patients’ must effect to reach their targets. With this understanding, patients’
    receive feedback on their behaviour in order to better regulate it.
    This guidance aims to define the key factors that influence the interpretation of patterns in clinical
    data, focusing upon scatter and line graphs, and tables.
    This guidance draws upon User Interface (UI) current best practice and upon research into the use
    of graphs and tables in clinical settings.
    This guidance is for use by Independent Software Vendors to ensure that good design principles
    support clinicians’ interpretation of numerical data, reveal critical patterns and assist users in
    accessing specific data values.

1.2           Potential Patient Safety Risks to be Mitigated
    The development of this guidance relied on identifying a set of high-level tasks associated with the
    use of clinical charts (that is, graphs and tables).
    We identified risks associated with those tasks by running risk assessment activities, interviewing
    clinicians in early design analysis and requirements capture exercises, and consulting a number of
    sources, including existing studies and papers ({R1, R9, R13}).

                                                                                                                        Page 1
                                  Design Guidance – Displaying Graphs and Tables
                                  Prepared by Microsoft, Version 2.0.0.0
                                  Last modified on 12 November 2008

These tasks were described in a set of typical user scenarios and a set of potential patient safety
risks, and consequences were noted with these scenarios. A full outline of these tasks, scenarios,
and potential safety risks can be found in APPENDIX A.
The high-level tasks comprise:
     Read the current data values
     Compare the current data values with past readings
     Check if the current data values exceed, fail to exceed, or fall below a threshold
     Check for significant patterns over time in a series of data values
     Check for significant interactions between data series
     Check the provenance of the data values
     Check if there is a significant change in values from their normal levels

The main potential patient safety risks identified in the context of clinicians interpreting chart
information include:
     Overestimation of a trend, either a rise or fall
     Not viewing a relevant previous set of data or not recognising when it was taken
     Not identifying a drop in blood pressure as being significant:
           Not seeing how much it has dropped
           Not seeing how quickly it has dropped
     Not seeing a drop in blood pressure in the context of the oxygen, pulse and temperature
      remaining constant
     Not seeing that the respiratory rate has increased slightly
     Not correctly reading the absolute values of a measure
     Not factoring in that the differences in readings may be partially, or wholly, accounted for by
      the change in settings in which the readings were taken
     Not seeing the current configuration of the vital signs (for example, high, low, rising)
     Not recognising that the data is now showing a new trend
     Not recognising a previous trend
     Not recognising the differences between the two trends
     Not recognising that the change in trend is significant
     Not recognising where the patient’s current blood pressure readings are in relation to the
      target range
     Not accurately reading the patient’s current blood pressure reading
     Not being able to view the current configuration of the observations data in relation to the
      patient’s usual levels
     Not identifying the rise in blood pressure and pulse as significant:
           Not seeing by how much they had risen
           Not seeing how quickly they had risen

                                                                                                      Page 2
                      Design Guidance – Displaying Graphs and Tables
                      Prepared by Microsoft, Version 2.0.0.0
                      Last modified on 12 November 2008

         Not identifying the drop in a measure as significant:
                 Not seeing by how much they had dropped
                 Not seeing how quickly they had dropped
         Not being able to view the changes in blood pressure and oxygen saturations in relation to
          each other
         Not recognising that the blood pressure has stabilised
         Not recognising that the patient’s blood pressure readings are in the target range

 The consequences for such risks could be:
         A delayed diagnosis
         A delayed treatment
         An incorrect diagnosis
         A missed diagnosis
         An incorrect treatment
         Failure to comply with treatment regimen
 The design guidance points outlined in later sections aim to mitigate these patient risks.

1.3         Scope
 The main purpose of this guidance is to allow electronic clinical systems to clearly and effectively
 communicate levels and patterns of data to the clinician and patient.
 In order to provide further focus to this guidance, it is primarily restricted to the key physiological
 observations that serve as fundamental indicators of patient health, otherwise known as ‘vital signs’
 data. Specifically, the guidance addresses these forms of data:
         Blood pressure, comprising systolic and diastolic pressures, measured in millimetres of
          mercury (mmHg)
         Body temperature, measured in degrees centigrade (˚C)
         Pulse rate, measured in beats per minute
         Respiratory rate, measured in breaths per minute
         Oxygen saturation, expressed as a percentage (%)
 These are commonly used, individually or in combination with themselves or other measurements,
 throughout the healthcare industry. In England, the regular recording of these measurements is
 also mandated by the National Institute for Health and Clinical Excellence (NICE) guidelines for
            1
 acute care . Those guidelines serve as exemplars for this guidance. It is expected that guidance
 applying to these measurements can also be generalised to other data types, although care must
 be taken by suppliers when doing so. In some cases, additional design considerations may apply
 that are out of scope for the current guidance. Parts of this guidance expand this set of exemplars
 to include some blood test results, such as serum creatinine and serum urea levels, but generally
 the focus is upon the five ‘vital signs’ data listed above.

 1
     Acutely ill patients in hospital: Recognition of and response to acute illness in adults in hospital {R1}:
     http://www.nice.org.uk/CG50
                                                                                                                   Page 3
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008

 Patterns of change through time are formed primarily by combinations of four characteristics (taken
 from Stephen Few {R6}):
       Magnitude of change
       Shape of change
       Velocity of change
       Direction of change
 Positioning graphical representations of data in a two dimensional plot area is an effective, efficient
 and well-recognised way of communicating these factors. Time-based scatter plots with
 interpolated data points are currently used throughout the healthcare industry, often in paper form.
 Although more innovative, but unconventional, data visualisations are available, this guidance
 focuses upon the design of interpolated scatter plots because their understanding is immediate and
 relatively little learning is required by the clinician to interpret them.
 The purpose of the guidance is therefore to ensure that this conventional graphing method is as
 clear, efficient and safe as possible when presented electronically, rather than trying to push the
 boundaries of data visualisation techniques. Additionally, there will be occasions where the clinician
 will also want to view the data solely as numerical data; if, for example, they are more concerned
 with the absolute values rather than the patterns they form.
 To achieve these goals, this guidance will identify the basic components of both conventional
 graphs and tables and will address these in turn. The primary focus is upon the static views of
 graphs and tables whilst acknowledging that the interaction between the clinician and the data also
 has an impact on the interpretation of data and needs careful handling. The emphasis is upon
 format rather than specific content, although with indication where certain types of content will be
 required.
      Note
      Definitions for terms which have a specific meaning in the context of this document are listed in section
      11.2.

1.3.1        Data Values and Labels
 In Scope                                                Out of Scope
 Creating symbols for data glyphs in graphs              This guidance does not specify symbols for specific data types, with the
                                                         exception of blood pressure. Instead, it outlines the rules that a designer
                                                         must follow when creating a set of data symbols

 Identifying data series                                 This guidance does not specify the exact wording of the data series (for
                                                         example, it does not mandate ‘Heart rate’ over ‘Pulse rate’). However, it
                                                         recommends that suppliers use standard terms where possible (for example,
                                                         from the Systematised Nomenclature of Medicine-Clinical Terms
                                                         (SNOMED-CT)

 Displaying data units                                   This guidance does not specify a comprehensive list of units
                                                         This guidance does not cover translating values from one unit to another

 Displaying two data values that are linked together     This guidance does not cover any value linkages that are not blood pressure

 Displaying paired values, such as systolic and diastolic This guidance does not cover paired values that are not blood pressures
 pressure. Also, displaying pairs of paired values, such
 as lying and standing blood pressures (which are
 themselves pairs)

 Displaying numerical value labels in graphs             This guidance does not specify exact positions of labels. Also, the precision
                                                         of data values will not apply to any data variable other than the vital signs
                                                         data series

                                                                                                                                   Page 4
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

 In Scope                                                 Out of Scope
 Displaying numerical values in tables

 Allowing access to numerical (digital) value labels in   This guidance does not specify in precise detail the mechanism used to
 graphs                                                   access views to numerical values. For example, although it may recommend
                                                          a hover-over or a toggle switch, it is not going to detail the precise UI
                                                          interaction required for a hover-over, nor the exact formatting or position of
                                                          the toggle switch

 Distinguishing manually input data values from values    This guidance does not provide any special guidance for continuous data
 feeding in directly from a machine                       input. The focus is on readings that have been made (and entered) by a
    Note                                                  clinician. Where readings come directly from a medical device, it
                                                          recommends that these are distinct from manually input readings
    Manually input readings include those that have
    been read from a machine, but manually entered

 Allowing the user to focus on specific data values       This guidance does not specify exact mechanisms for focusing upon data
    Note                                                  values, nor hot-spot dimensions or rules, nor the precise user interaction
                                                          required for selecting a value (for example, the precise look of a fish-eye or a
    This will include separate guidance for graphs and    crosshair)
    for tables

 Special guidance when overlaying graphs

 Displaying data overviews or summaries                   This guidance does not specify the exact form, formatting or interaction of
                                                          look-head scrolling nor thumbnails
                                                          This guidance does not specify an exhaustive list of summary data that could
                                                          be displayed

 Allowing the user to switch between graphs and tables This guidance does not specify the exact mechanisms for switching between
                                                       graphs and tables
                                                          This guidance does not cover the display of mean, peak and low values:
                                                           When to display peaks and lows
                                                           Labelling of peaks and lows
                                                           For what range to display peaks and lows
                                                           Where to display peaks and lows data
 Table 2: Data Values and Labels Scope

1.3.2        Scaling
 In Scope                                                 Out of Scope
 Optimum scaling                                          This guidance does not cover any data that is not featured in the list of
                                                          observations data (that is, the vital signs)
                                                          The guidance may not be able to define precisely an optimum scaling;
                                                          instead it outlines what factors to consider when setting the scaling and ways
                                                          to ensure that scaling is kept consistent within any given system

 Minimum scales                                           This guidance does not specify absolute minimum scales (that is, the
                                                          shallowest that the y-axis can be in relation to the x-axis)

 Dynamic scaling                                          This guidance does not cover any data that is not in the list of vital signs
                                                          This guidance does not define any mechanism for changing the scaling (for
                                                          example, a zoom control or a scale slider).

 Dealing with extreme values
 Table 3: Scaling Scope

                                                                                                                                      Page 5
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008

1.3.3          Axes
 In Scope                                                    Out of Scope
 X-axis and y-axis arrangements                              This guidance does not recommend default views, but will not go as far as
                                                             recommending that no other data except for time should appear on the x-axis

 Time axis intervals                                         This guidance does not define a mechanism for setting or changing time
                                                             intervals or scales

 Data variable (non-time) axis intervals                     This guidance does not cover logarithmic data representations

 Data variable (non-time) ranges

 Gridlines                                                   This guidance does not define a mechanism for revealing/hiding gridlines

 Axes labels

 Special axis considerations in the event of overlaying      This guidance does not define the workings of any interactive mechanisms
 graphs                                                      for viewing overlaid graphs
 Table 4: Axes Scope

1.3.4          Layout Density and Formatting
 In Scope                                                    Out of Scope
 Typefaces

 Background colours

 Foreground colours

 Labelling of graphs and tables                              This guidance will only be defining label design, not content

                                                             This guidance does not define the optimum or minimum width and height of
                                                             the graphing area
                                                                Note
                                                                This may need to be defined in the context of an assumed screen
                                                                resolution or as a function of screen resolution

 Table 5: Layout Density and Formatting Scope

1.3.5          Simultaneous Views of Multiple Data Series
 In Scope                                                    Out of Scope
 Considerations for viewing multiple, non-overlaid           This guidance does not cover mechanisms for adding or removing data
 graphs                                                      series from view. It will not define mechanisms for changing the order of
                                                             multiple graphs

 Considerations for viewing multiple, overlaid graphs        This guidance does not define mechanisms for overlaying or semi-overlaying
                                                             data series
 Table 6: Simultaneous Views of Multiple Data Series Scope

                                                                                                                                     Page 6
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008

1.3.6         Interpolation
 In Scope                                               Out of Scope
 When to show interpolation                             This guidance does not specify what to do when interpolation has to cease
                                                        for a data series (for example, when data is unknown for a given period)

 Formatting of interpolation                            This guidance does not define any algorithms for smoothing interpolation
                                                        lines

 Special formatting in the event of overlaying or
 semi-overlaying data series
 Table 7: Interpolation Scope

1.3.7         Indicative Ranges
 In Scope                                               Out of Scope
 Normal ranges                                          This guidance does not define mechanisms for adjusting normal ranges nor
                                                        for switching normal ranges on or off
                                                        This guidance does not specify the label text for normal ranges.

                                                        This guidance does not specify target ranges and critical thresholds:
                                                         When to show target ranges, critical ranges or thresholds
                                                         Formatting of target ranges, critical ranges or thresholds
                                                         Formatting of target ranges, critical ranges or thresholds
                                                         Labelling target ranges, critical ranges or thresholds
                                                         Changing target ranges, critical ranges or thresholds
                                                        It does not define mechanisms for changing target ranges, critical ranges or
                                                        thresholds, nor does it specify the label text for target ranges, critical ranges
                                                        or thresholds.
 Table 8: Indicative Ranges Scope

1.3.8         Tables
 In Scope                                               Out of Scope
 Table orientation and scaling                          This guidance does not define mechanisms for switching the orientation of
                                                        tables nor the direction of data
                                                        It does not address viewing table data and graph data simultaneously

 Table formatting                                       This guidance does not define mechanisms for scrolling, sorting and filtering
 Table 9: Tables Scope

1.3.9         Additional Contextual Information
 In Scope                                               Out of Scope
 Displaying contextual data                             This guidance does not list all contextual information to be displayed

 Accessing contextual data                              This guidance does not define the precise mechanisms for accessing
                                                        contextual data that is not immediately visible
 Table 10: Additional Contextual Information Scope

                                                                                                                                    Page 7
                                Design Guidance – Displaying Graphs and Tables
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 12 November 2008

1.3.10       Additional Visualisation Mechanisms
 There are many potential data visualisation mechanisms that could be employed to assist the
 interpretation of clinical observations data, such as zoom views, event timeline overlays and further
 statistical analysis and calculation methods, such as mean and peak values and trend lines.
 However, these are out of scope for the current work. Consideration was given to a mechanism for
 calculating deviations between a baseline value set by the clinician and more recent values, but
 this was not deemed essential by the clinical audience who reviewed the scope of this guidance.

1.4      Assumptions
 ID       Assumption
 A1       Absolute space (that is, the dimensions of the screen available for displaying a graph or table) will vary between suppliers

 A2       Although this guidance focuses upon vital signs data, where they deem it appropriate, suppliers should apply this guidance
          to other data series

 A3       The interpretation of graphs and tables should be done in the context of early warning scoring systems where applicable (for
          example, Modified Early Warning Score (MEWS) or Patient At-Risk Scores (PARS))

 A4       Where necessary, indicative or ‘normal’ ranges for a given population should be agreed by the supplier with the appropriate
          professional bodies or appropriate clinical authority

 A5       Measurement labels should be expressed in SNOMED-CT terms

 A6       Clinicians may view graphs and tables on a variety of hardware platforms. However, special provision for non-PC platforms
          is not covered by the current guidance
 Table 11: Assumptions

1.5      Dependencies
 ID       Dependency
 D1       There exists an accompanying mechanism for entering the observations data (not in scope in the current document)

 D2       The display of dates must conform to the guidance for Date Display {R3}

 D3       The display of times must conform to the guidance for Time Display {R4}
 Table 12: Dependencies

1.6      Summary of Guidance
 Table 13 references and provides a brief description of each guideline in this document.
      Important
      The information in Table 13 is provided only as a high-level orientation aid and indicative summary. To
      obtain the definitive statement of each guideline, you must refer to the sections and examples indicated.

 Reference Section Description
 GTAB-001       2.1         Display the time-based observation data as points rather than bar charts or area graphs (Example 1)

 GTAB-002       2.1         Each data series should be represented by a different symbol and colour combination (Example 1)

 GTAB-003       2.1         There should not be a fixed assignment of symbol-colour combination and data series beyond a viewing
                            session, with the exception of the blood pressure composite

 GTAB-004       2.1         Symbols should be assigned to data points when the data series is added into a view

                                                                                                                                   Page 8
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Reference Section Description
GTAB-005   2.1    After a data series has been brought into view for a given session, it must retain its symbol-colour
                  combination until the end of the viewing session

GTAB-006   2.1    Each symbol should be distinct according to one or more factors (Example 2)

GTAB-007   2.1    Certain cues should not be used to distinguish a series of data points (Example 4)

GTAB-008   2.1    Where possible, avoid asymmetrical shapes or shapes that cannot be easily centred upon an x-y
                  intersection (Example 8)

GTAB-009   2.1    Feature a set of colours that are sufficiently distinct to distinguish series of data points, such as red, green,
                  yellow, blue, black, white, pink, cyan, gray, orange, brown, purple

GTAB-010   2.1    The height and width (or diameter) of a data point symbol icon must be larger than the width of the line of
                  interpolation

GTAB-011   2.1    The height and width (or diameter) of a data point symbol icon must be kept to a minimum size, whilst not
                  violating guideline GTAB-010

GTAB-012   2.1    The centre of the data point must be aligned with its corresponding x and y values

GTAB-013   2.1    Do not overlap symbols for data points (Example 11)

GTAB-014   2.1    When data points are arranged tightly on the x-axis, reduce the symbols to short, thick vertical lines in
                  order to accommodate more within the space available (Example 9)

GTAB-015   2.1    When data points become so tightly arranged on the x-axis, provide a (for example, hover-over) message
                  that indicates the number of data points and a recommendation to view the data in greater detail

GTAB-016   2.1    Symbol sizes should remain unchanged, except when the data points are so close as to potentially
                  overlap. Symbols should not increase in size upon zooming in or changing timescales

GTAB-017   2.1    Where a data value corresponds to a time that is less specific than the intervals shown in the selected time
                  range, feature a different symbology (in addition to not interpolating the points)

GTAB-018   2.2    Every individual data series must be labelled (Example 13)

GTAB-019   2.2    Data series labels must be visible all the time that the values are displayed on-screen

GTAB-020   2.2    Where there is only a single data series in a graph space (that is, where there are no data overlays), the
                  labelling should be positioned above the graph

GTAB-021   2.2    Position the label either to the left of each graph or immediately above, and to the top left of, each graph
                  (depending upon the space available) (Example 15, Example 16)

GTAB-022   2.2    Minimise the height of the labels positioned above the graphs in order to minimise the distance between
                  graphs

GTAB-023   2.2    Visually associate the label with its corresponding graph by positioning it immediately adjacent to it
                  (Example 17)

GTAB-024   2.2    Where there are multiple data series in a graph space (such as where one data series is overlaid or semi-
                  overlaid upon another), the labelling should be positioned immediately next to or very close to the relevant
                  data series (Example 19)

GTAB-025   2.2    Do not orient labels vertically (Example 18)

GTAB-026   2.2    Do not feature labels as watermarked text on the graph area (Example 20, Example 21)

GTAB-027   2.3    Data unit labels must be visible at all times that a data series is graphed ( Example 22)

GTAB-028   2.3    Do not display values taken with different units of measurement in the same series of data values. In these
                  cases, separate data value series are required (with separate axes) (Example 26)

GTAB-029   2.3    Do not display values taken with different units in the same sequence of data values in a table (either
                  displayed in a column or in a row)

                                                                                                                             Page 9
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-030   2.3    If data values have been converted from one unit to another, the system must clearly communicate that
                  this has happened at the level of the data value points

GTAB-031   2.3    Data unit labels may be expressed as abbreviations (such as ‘mmHg’)

GTAB-032   2.3    Where they are available, use standard abbreviations (such as ‘°C’)

GTAB-033   2.3    Abbreviations for data units should not be used where the abbreviations for two separate data units are the
                  same

GTAB-034   2.3    The system should provide definitions of any abbreviated data units upon request (Example 27)

GTAB-035   2.3    The system could provide full data unit definitions as hover-overs (Example 27)

GTAB-036   2.3    Data units should be displayed alongside the data series labels (Example 23)

GTAB-037   2.3    Data unit labels can be displayed in a less prominent font size or weight than the data type labels
                  (Example 23, Example 25)

GTAB-038   2.3    Data units do not need to be displayed next to each data value (Example 24)

GTAB-039   2.4    Systolic and diastolic blood pressures should be displayed on the same graph area (Example 28)

GTAB-040   2.4    Systolic and diastolic blood pressures should be displayed as opposite ends of a vertical line (Example 28)

GTAB-041   2.4    The intersection points (that is, the intersection between the x and y axes) for both systolic and diastolic
                  pressures should be represented by a short horizontal bar, thus creating a double-ended ‘T’

GTAB-042   2.4    The short horizontal bar which aligns with the y-axis values of the systolic and diastolic pressures should
                  be a little thicker than any gridlines overlaid on the graph area

GTAB-043   2.4    Do not interpolate the blood pressure data points without the vertical lines connecting the systolic and
                  diastolic pressure values

GTAB-044   2.4    When data points are positioned tightly together, the symbol becomes a straight vertical line between the
                  systolic and diastolic values

GTAB-045   2.5    Display the most recent numerical value for each data series by default

GTAB-046   2.5    Display the penultimate numerical value for each data series by default (Example 33)

GTAB-047   2.5    Feature the most recent numerical value for each data series in a larger and/or heavier font (Example 33)

GTAB-048   2.5    Do not display all numerical values for a data series by default

GTAB-049   2.5    Allow the display of all the numerical values for a data series, upon request by the user (Example 34)

GTAB-050   2.5    Allow the display of any single numerical value, upon request by the user

GTAB-051   2.5    Display the numerical values adjacent to the graphical data points (Example 34)

GTAB-052   2.5    Display the numerical values in a consistent position in relation to the graphical data points (Example 34)

GTAB-053   2.5    Display the numerical values above or below the data points

GTAB-054   2.5    Display the numerical values to the precision in which they were recorded

GTAB-055   2.5    Feature the numerical values in a reasonably-sized font, namely based upon the prevailing good
                  accessibility practice

GTAB-056   2.5    Feature the numerical values in a clear, undecorated typeface (Example 35)

GTAB-057   2.6    Provide a visual focus line that spans all data series and that is aligned to a chosen time. When the focus
                  line crosses a value point, display the appropriate value label (Example 41)

GTAB-058   2.6    Allow some tolerance in the focus line, so that a data point will be picked up even if does not precisely
                  align with the vertical line

                                                                                                                         Page 10
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-059   2.6    When the focus line crosses the value point, provide a background to the value label so that it is not
                  obscured by the line

GTAB-060   2.6    For each data series, allow the user to reveal the value immediately preceding and the value immediately
                  following the specific point in time, within a set tolerance

GTAB-061   2.6    Distinguish the values that are aligned with the focus line from the preceding and following values
                  (Example 41)

GTAB-062   2.6    The visual focus can be moved between times or time ranges by the user (Example 42)

GTAB-063   2.6    The visual focus can be moved by moving the mouse over the top of the graph areas (Example 42)

GTAB-064   2.6    The visual focus can be moved by button presses and/or key presses: one for tabbing forward and one for
                  tabbing back

GTAB-065   2.6    The visual focus line should be labelled with the time with which it is aligned (Example 41)

GTAB-066   3.1    There should be a linear relationship between data values and their spatial location (Example 43)

GTAB-067   3.1    In the default view of a graph, the time-axis should be scaled to one of a set of pre-defined time ranges

GTAB-068   3.1    Ensure that for each default timescale, there is a ratio of x-axis to y-axis ratio that is consistently applied

GTAB-069   3.1    The y-axis scale should be pre-determined by considering a number of factors

GTAB-070   3.1    Where a normal range is to be shown on the graph area, the default graph view must be sufficiently high to
                  show the normal range plus a margin

GTAB-071   3.1    Ensure that, in the default view, the clinically significant changes (rises or falls) are always detectable by
                  the clinician

GTAB-072   3.1    In the default view, do not optimise the view by maximising the size of the data to fill the graph area

GTAB-073   3.1    Allow the user to choose to optimise the view (that is, maximising the data to fill the graph area)

GTAB-074   3.1    If re-scaling is required, minimise the number of scale gradations and/or the number of re-scaling steps

GTAB-075   3.1    Upon re-scaling from a default view scale, the system should display that the view is re-scaled

GTAB-076   3.1    In the event that, on a given scaling, the data requires more space than is available, re-display according
                  to certain priorities

GTAB-077   3.1    If the scaling solution is based upon a shift up or down along an axis, provide a scroll feature when data
                  falls outside of the visible axis range

GTAB-078   3.1    If the scaling solution is based upon a shift in axis, where data may fall outside of the visible range, provide
                  a mechanism that communicates all the data within the given timeframe

GTAB-079   3.1    A thumbnail can be used to communicate all the data within a given timeframe if the main graph area does
                  not show all the data simultaneously (Example 46)

GTAB-080   3.1    Where possible, show the data points on the thumbnail, although for large timescales containing much
                  data this will not be possible and, in those cases, just show interpolation. (Example 46)

GTAB-081   3.1    Display the upper and lower axis ‘tick’ marks on the thumbnail (Example 46)

GTAB-082   3.1    Do not position the thumbnail in a position that obstructs the main graph (Example 46)

GTAB-083   3.1    Where appropriate, overlay an indicative range or line. Display this both on the main graph area and the
                  thumbnail

GTAB-084   4.1    If time is displayed as one of the axes, it should be displayed along the (horizontal) x-axis
                  (Example 48, Example 49)

GTAB-085   4.2    As a default, time must be displayed proportionally in observation graphs (Example 51)

GTAB-086   4.2    As a default, do not display data values non-proportionally along the time axis (Example 50)

                                                                                                                            Page 11
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-087   4.2    Mark the time intervals (that is, use hour marks, day marks, week marks and so on) (Example 52)

GTAB-088   4.2    Group the time intervals into higher units and distinguish these with more prominent markings
                  (Example 52)

GTAB-089   4.2    Do not display tick marks for every possible time interval. Do not mark unconventional time intervals, such
                  as every six minutes (Example 53)

GTAB-090   4.2    Ensure that the time interval markings are always visible when graph data is being displayed

GTAB-091   4.3    Feature markings for non-time variables along the (vertical) y-axis. (Example 54)

GTAB-092   4.3    Where possible, feature y-axis markings according to decimal intervals or intervals that are simple to add
                  up (Example 55)

GTAB-093   4.3    When marking the y-axis, mark numbers for which it is easy to compute the mid-points (Example 57)

GTAB-094   4.3    Do not mark arbitrary intervals in an attempt to feature a fixed number of gradations (Example 56)

GTAB-095   4.3    Where appropriate, group the data intervals into higher units and distinguish these with more prominent
                  markings

GTAB-096   4.4    By default, the x-axis should be constrained to one of a set of defined time ranges

GTAB-097   4.4    As new data points are added to a graph, do not change the time scaling. If adding the new data point
                  means that the current data exceeds the time range, shift the time window to include the new data rather
                  than increasing the time range in size (Example 58)

GTAB-098   4.4    Do not show all data by default, unless there is a specific clinical reason for doing so

GTAB-099   4.4    If all data must be shown by default, the data should be shown within the nearest set timescale within
                  which all the data to be displayed can be shown

GTAB-100   4.4    Y-axis ranges do not need to start from zero (Example 59)

GTAB-101   4.5    Feature horizontal gridlines for major gradations on the y-axis

GTAB-102   4.5    Ensure that, in the default view of data, horizontal gridlines are featured consistently for each data series

GTAB-103   4.5    Use gridlines sparingly. Do not feature gridlines for every possible gradation (Example 62)

GTAB-104   4.5    Feature vertical gridlines for major gradations on the x-axis (Example 60)

GTAB-105   4.5    Ensure that vertical gridlines are featured consistently for each time range window (Example 60)

GTAB-106   4.5    Use the same vertical gridlines for all graphs in view at the same time (Example 60)

GTAB-107   4.5    Offer users the option of (temporarily) switching off the gridlines

GTAB-108   4.6    Label the y-axis markings, not the spaces between them ( Example 64, Example 65)

GTAB-109   4.6    Label the x-axis markings, not the spaces between them (Example 66)

GTAB-110   4.6    Avoid diagonally oriented label text unless additional grids are added to mitigate the risk of users
                  associating a label with the wrong marking

GTAB-111   4.6    Avoid vertically oriented label text (for both the x-axis and the y-axis)

GTAB-112   4.6    On the x-axis, ensure that the full dates are always communicated

GTAB-113   4.6    If possible, communicate days of the week in the x-axis labelling (Example 68)

GTAB-114   4.6    Provide labelling of the time-range (Example 69)

GTAB-115   5.1    Display data points in high saturation colours except in those situations where the system needs to
                  distinguish one data series over others (Example 70, Example 72)

GTAB-116   5.1    The colours of the data series should be approximately equal in terms of saturation except where one data
                  series is being emphasised over the others

                                                                                                                         Page 12
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-117   5.1    Where one data series is required to stand out against the other data series, the others can be displayed in
                  lower saturated versions of the same hues

GTAB-118   5.1    Where special low-light formatting is not required (that is, where the environment in which the data is to be
                  viewed is well-lit, background colour for the graph area should be white or off-white

GTAB-119   5.1    The surrounding background for the graphs should be a neutral low-saturation colour (Example 72)

GTAB-120   5.1    Ensure a good contrast between the background colour and the foreground colours (Example 72)

GTAB-121   5.1    Provide a black border for data points. Reverse to a white border in the event of the colour of the data point
                  being reversed (Example 73)

GTAB-122   5.1    Where special reverse formatting is required, ensure a good reverse contrast

GTAB-123   5.1    Use only a few colours if they are to be distinct. Using up to twelve colours is acceptable, but do not use
                  more. Only use one of each colour category (Example 70)

GTAB-124   5.1    The first colours to be selected should be blue, red, and yellow, unless there is a background colour that
                  conflicts with any of these colours

GTAB-125   5.2    Copy must be displayed in a sufficiently dark colour to contrast against the background

GTAB-126   5.2    Feature a font size of between 2 mm and 6 mm for the x-height of the letter (Example 76)

GTAB-127   5.2    Avoid visually elaborate typefaces (Example 74)

GTAB-128   5.2    Use a typeface or font family where the number 1 is clearly discernable from the lowercase letter ‘l’ or a
                  capital letter ‘J’

GTAB-129   5.2    Ensure that each kind of screen copy is displayed in a consistent typeface, size, colour and weight.

GTAB-130   5.2    Avoid underlines

GTAB-131   5.2    Avoid coloured text highlights

GTAB-132   5.2    Avoid animated or flashing text

GTAB-133   5.2    Do not feature text written vertically (Example 75)

GTAB-134   5.2    Avoid the use of brackets (either round or square) in the numerical value labels

GTAB-135   5.3    Format gridlines in a light grey colour (Example 77)

GTAB-136   5.3    Format gridlines in a light weight (Example 77)

GTAB-137   5.3    Make gridlines lighter in weight and colour saturation than the data points and the interpolation lines
                  (Example 77)

GTAB-138   5.3    Format axis lines in a light grey colour (Example 77)

GTAB-139   5.3    Format axis lines in a light or medium weight (Example 77)

GTAB-140   5.3    Distinguish major axis marks from minor axis marks by weight and/or length

GTAB-141   5.4    Do not feature watermarks or background images on the graph area

GTAB-142   5.4    Feature solid colours and avoid patterned colours for both background and foreground objects
                  (Example 79)

GTAB-143   5.4    Avoid any non-functional graphical elaboration that is not actual data or a feature that directly supports the
                  interpretation of the data (Example 80)

GTAB-144   5.4    Do not force users to choose format styles each time they view the data

GTAB-145   6.1    Display multiple data series vertically stacked unless there is clinical reason to do otherwise (Example 81)

GTAB-146   6.1    Vertically align the left-hand axes of all the graphs (Example 81)

                                                                                                                         Page 13
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-147   6.1    Vertically align time intervals between data series that are being viewed simultaneously (Example 81,
                  Example 82)

GTAB-148   6.1    Minimise the space between graphs, though allowing for the inclusion of header labels (Example 81)

GTAB-149   6.1    Where a convention exists, position sets of graphs in the appropriate order (Example 81)

GTAB-150   6.1    Where no convention exists, the position of graphs in the vertical stacking can be determined by the order
                  in which they are added to the view

GTAB-151   6.1    The user should be able to change the order in which the graphs are stacked

GTAB-152   6.1    Where the number of graphs exceeds the vertical space available on screen, provide a suitable
                  mechanism to move the viewing window up and down

GTAB-153   6.1    Where there are graphs that have been chosen for viewing, but are not in view, feature a suitable
                  mechanism to communicate that there are further graphs not in view

GTAB-154   6.2    Graphs may be overlaid under certain circumstances (Example 83)

GTAB-155   6.3    If two data series displayed in the same graph area are measured in different units, show both axes
                  (Example 85)

GTAB-156   6.3    If two axes are shown, label each axis (Example 85)

GTAB-157   6.3    If two data series displayed in the same graph area are measured in different units and the axes gradation
                  spacing is different, do not show horizontal gridlines

GTAB-158   6.3    When multiple data series are displayed in the same graph area, label each data series in an appropriate
                  place (Example 84)

GTAB-159   6.3    Avoid distinguishing multiple data series displayed in the same graph area with varying line styles

GTAB-160   6.3    When multiple data series are displayed in the same graph area, display the interpolation lines as
                  semi-transparent (Example 84)

GTAB-161   6.3    Avoid relying on the distinction between green and red when displaying multiple data series

GTAB-162   6.3    Where multiple data series are displayed in the same graph area, feature hollowed symbols, rather than
                  the usual solid symbols bound by a black border (Example 84)

GTAB-163   6.3    Where data points become tightly packed, reduce their size. However, do not reduce them to a height that
                  is the same as or less than the width of the interpolation line (Example 86)

GTAB-164   7.1    By default, with certain exceptions, provide interpolation between data points (Example 87)

GTAB-165   7.1    Allows users to switch interpolation lines off

GTAB-166   7.1    Interpolation should comprise straight lines between data points. By default, do not ‘smooth’ interpolation
                  lines (Example 88)

GTAB-167   7.2    Interpolation lines should be solid (Example 89)

GTAB-168   7.2    Interpolation lines should not obscure the data points (Example 90)

GTAB-169   7.2    Data value points should define the upper and lower points of the data sequence, not the interpolation lines

GTAB-170   7.2    Interpolation lines should be thinner than the data points they connect (Example 92, Example 93)

GTAB-171   7.2    Interpolation lines should be approximately half the height or diameter of the data points they connect

GTAB-172   7.2    Interpolation lines should be the same colour as the data points they connect (Example 91)

GTAB-173   7.2    Interpolation lines should feature some anti-aliasing

GTAB-174   8.1    Display normal ranges, but only where appropriate ranges exist (Example 94)

GTAB-175   8.1    Be consistent with how to display normal ranges: either shade the out-of-range areas or shade the
                  in-range areas. Do not feature both styles in the same system (Example 95)
                                                                                                                        Page 14
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-176   8.1    Where appropriate, graphically display early warning scoring ranges, but only in conjunction with a
                  mechanism that displays the numerical scoring as well

GTAB-177   8.1    Allow target ranges and critical thresholds to be displayed in addition to normal ranges

GTAB-178   8.1    Label indicative ranges with the population to which they refer (Example 94)

GTAB-179   8.1    Ensure that the indicative labels do not obstruct any data

GTAB-180   8.1    Where appropriate, normal ranges should be adjusted to suit the specific population

GTAB-181   8.1    Do not overlay multiple normal ranges on top of each other

GTAB-182   8.1    Feature normal ranges as areas rather than threshold lines

GTAB-183   8.1    Feature normal range overlays in low-saturation colours (Example 95)

GTAB-184   8.1    Normal range displays should not obscure any graph data

GTAB-185   8.1    Feature the systolic and diastolic normal ranges in different shades of colour (Example 95)

GTAB-186   9.1    Orient tables in a consistent manner, for a given data type and/or clinical setting or procedure

GTAB-187   9.1    Tables should follow a conventional orientation if one exists

GTAB-188   9.1    If a table is oriented with time ordered horizontally, by default the most recent data value must appear at
                  the far right-hand side (that is, sorted from left-to-right) while ensuring that the most recent values are
                  visible by default (Example 96)

GTAB-189   9.1    If a table is oriented with time ordered vertically, by default the most recent data value must appear at the
                  top of the table (that is, sorted from bottom-to-top) while ensuring that the most recent values are visible by
                  default (Example 97)

GTAB-190   9.1    Users must be able to re-sort data within the columns or rows

GTAB-191   9.1    Users must be able to re-orient the table (that is, transpose the rows to columns and vice versa)

GTAB-192   9.2    Feature light banding along the rows (Example 99)

GTAB-193   9.2    Do not feature heavy gridlines (Example 102)

GTAB-194   9.2    Round data displayed in table cells entries where it is not misleading to do so

GTAB-195   9.2    If numeric cell entries are rounded, the table must communicate that the data is rounded and the extent to
                  which it is rounded

GTAB-196   9.2    If appropriate, allow users to read the full version of any rounded data

GTAB-197   9.2    Ensure that where there are multiple instance of the same date, or time within a date, the first instance is
                  more visually prominent than the following instances (Example 103)

GTAB-198   9.2    Do not stretch tables to fill available space (this impedes horizontal scanning)

GTAB-199   9.2    Feature extra spacing every fifth row (this assists vertical scanning)

GTAB-200   9.2    Use a constant horizontal spacing for numerals (this ensures vertical alignment)

GTAB-201   9.2    Align the decimal marker for all numerals in a column

GTAB-202   9.2    If some numbers in a column do not feature a decimal place, but others do, do not add an unnecessary
                  decimal place but instead provide padding within cells to allow for decimals (Example 100)

GTAB-203   9.3    Align column headings with their associated data (Example 104)

GTAB-204   9.3    If column headings are centred, they should be visually aligned over the column of data

GTAB-205   9.3    As far as possible, word row titles so they are of similar length

                                                                                                                         Page 15
                   Design Guidance – Displaying Graphs and Tables
                   Prepared by Microsoft, Version 2.0.0.0
                   Last modified on 12 November 2008

Reference Section Description
GTAB-206       9.3         Long row headings may be split into two or more lines, with the data aligning with the bottom line
                           (Example 105)

GTAB-207       9.3         Avoid a heading that is significantly wider than the data it is indicating

GTAB-208       9.3         Keep column headings brief

GTAB-209       9.3         Clearly link column headings to their columns

GTAB-210       9.3         Top align column headings

GTAB-211       9.3         In wide tables, row headings may be provided at both ends of the row

GTAB-212       9.3         Allow sufficient space between columns to clearly separate them but no more (excessive space impedes
                           horizontal scanning) (Example 104, Example 106)

GTAB-213       9.3         Do not display column headings vertically

GTAB-214       9.3         Column headings may be displayed at 45º to the column, if the heading is too long to display horizontally
                           and cannot be wrapped adequately

GTAB-215       9.3         Provide special formatting if column headings are displayed at 45º so that it is clear which heading applies
                           to which column (Example 107)

GTAB-216       9.3         Do not alternate between the directions of the 45º oriented text in the same table

GTAB-217       9.3         Always display both column and row headings

GTAB-218       9.3         Ensure that the column and row headings are always visible

GTAB-219       10.1        Provide contextual information about the way in which the reading was taken

GTAB-220       10.1        Make visible the contextual information about how the reading was taken by default

GTAB-221       10.1        Allow the user to interrogate the system to access further contextual information
Table 13: Summary of Guidance

                                                                                                                                Page 16
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

2         DATA VALUES AND UNITS GUIDANCE DETAILS
    Graphs and tables comprise a number of key components, the foremost of which are the data
    values and units. An example of a data value and unit is ‘140 mmHg systolic pressure, taken at
    10:30 17-Jun-2006’.

2.1       Guidelines – Creating Symbols for Data Points in Graphs
                                                                                                                      Evidence
    ID         Description                                                                              Conformance
                                                                                                                       Rating
    GTAB-001   Display the time-based observation data as points rather than bar charts or area           Mandatory     High
               graphs (Example 1)

    GTAB-002   Each data series should be represented by a different symbol and colour                    Mandatory     High
               combination (Example 1)

    GTAB-003   There should not be a fixed assignment of symbol-colour combination and data               Mandatory     High
               series beyond a viewing session, with the exception of the blood pressure
               composite.
               That is, when the clinician finishes the current patient consultation, the assignment
               of symbols and colours to a data series ends.

    GTAB-004   Symbols should be assigned to data points when the data series is added into a           Recommended     Low
               view

    GTAB-005   After a data series has been brought into view for a given session, it must retain its     Mandatory     High
               symbol-colour combination until the end of the viewing session

    GTAB-006   Each symbol should be distinct according to one or more factors (Example 2):               Mandatory     High
                Shape
                Orientation
                Added marks
                Curved versus straight

    GTAB-007   Certain cues should not be used to distinguish a series of data points (Example 4):        Mandatory    Medium
                Size
                Line width
                Line length

    GTAB-008   Where possible, avoid asymmetrical shapes or shapes that cannot be easily centred          Mandatory     Low
               upon an x-y intersection (Example 8)

    GTAB-009   Feature a set of colours that are sufficiently distinct to distinguish series of data      Mandatory    Medium
               points, such as, red, green, yellow, blue, black, white, pink, cyan, gray, orange,
               brown, purple

    GTAB-010   The height and width (or diameter) of a data point symbol icon must be larger than         Mandatory    Medium
               the width of the line of interpolation

    GTAB-011   The height and width (or diameter) of a data point symbol icon must be kept to a         Recommended    Medium
               minimum size, whilst not violating guideline GTAB-010

    GTAB-012   The centre of the data point must be aligned with its corresponding x and y values         Mandatory     High

    GTAB-013   Do not overlap symbols for data points (Example 11)                                      Recommended    Medium

    GTAB-014   When data points are arranged tightly on the x-axis, reduce the symbols to short,        Recommended    Medium
               thick vertical lines in order to accommodate more within the space available
               (Example 9)

                                                                                                                         Page 17
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

GTAB-015      When data points become so tightly arranged on the x-axis, provide a (for example,       Recommended           Medium
              hover-over) message that indicates the number of data points and a
              recommendation to view the data in greater detail

GTAB-016      Symbol sizes should remain unchanged, except when the data points are so close           Recommended             Low
              as to potentially overlap. Symbols should not increase in size upon zooming in or
              changing timescales

GTAB-017      Where a data value corresponds to a time that is less specific than the intervals        Recommended             Low
              shown in the selected time range, feature a different symbology (in addition to not
              interpolating the points)
              For example, if the data values correspond to whole days, and the time range spans
              two days with an axis marked in hours, use a different symbology

Usage Examples
Example 1: Display data points with distinct symbols (shown here without interpolation)

The above example shows data values being displayed as small symbols in a two dimension space. The top data series, shown in
blue, is distinct in both colour and shape from the round red symbols below.

                                                                   Example 2: Feature distinct symbols that vary according to shape
                                                                   and orientation

                                                                   Example 3: Do not feature elaborate designs nor icons that have
                                                                   other meanings

                                                                   Example 4: Do not distinguish symbols with size

                                                                   Example 5: Do not distinguish symbols by width or height alone

                                                                   Example 6: Avoid distinction by orientation unless the re-orientation
                                                                   renders the symbols quite distinct
                                                                   In this example, the re-orientation does little to make the symbols
                                                                   distinct from each other

                                                                   Example 7: Do not distinguish by multiplicity

                                                                   Example 8: Do not feature very asymmetrical symbols which have
                                                                   no easily discernable mid-point

                                                                                                                                 Page 18
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 9: Avoid symbol overlap by shrinking the icons to vertical bars when they become close

Example 10: Another example of avoiding symbol overlap by shrinking the icons to vertical bars when they become close

In the example above, the data symbols have had to shrink so that the readings taken every fifteen minutes can be seen on a 48-hour
timescale that shows a range of four-hourly observations leading up the more intensive readings. This is close to the narrowest the
symbols can be before they cannot be distinguished. If they reach a size where they cannot be distinguished, display a message to tell
users that they must zoom in or change the timescale to view the individual points and their values.

Example 11: Where possible, avoid overlap

If overlap is unavoidable (that is, it still occurs after shrinking the icons), then feature a message on top to advise the user how many
data points are contained in the bunching and a recommendation to zoom in or change the timescale to view the points distinctly.
Example 12: Force viewers to zoom or change timescale if the data is too tightly packed

                                                                                                                                    Page 19
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Rationale
Displaying time-based observational data as points, rather than bars or areas, helps the user to see trends in the data. This notion is
based upon best practice {R6} and existing clinical graphs. It is also much harder to overlay bar graphs or area graphs on top of each
other so as to still distinguish between data series. Also, the relevant British Standards Institution (BSI) guidance BS 7581:1992 {R2}
states that the “use of area graphs is not recommended”.
Data points that relate to the same data series should be:
 Perceived by the viewer as a single set
 Distinguished from other data series
This becomes more important when multiple data series are overlaid, as using the same symbology and colours could make it very
difficult to distinguish one data set from another.
In the case of multiple, non-overlaid data series, the use of distinct symbol-colour combinations is important as it orientates the viewer
as they:
 Move their attention between various on-screen elements
 Add new data series to a view
 Hide or reveal data series from immediate view
Distinct symbol-colour combinations also accentuate the grouping of individual data points within a series, thus helping the viewer to
see them as a continuous series of measurements.
Symbols should be constructed with ‘pre-attentive’ cues, namely characteristics that require the minimum cognitive processing on the
part of the viewer. Studies {R17} have revealed a set of visual cues that are pre-attentive. However, although considered pre-attentive,
the following cues should not be used: size, length, width, multiplicity. This is because they also imply quantity.
Given the limited number of symbol-colour combinations in relation to a larger potential numbers of readings (when data is not
restricted to vital signs), it would not be practical to feature a fixed assignment of symbol-colour combinations to data series.
User research was carried out with healthcare staff during the development of this guidance. All of the recommended designs above
were tested and it was found that they assisted users to understand the data.
People have a very strong tendency to perceive similarly coloured objects as belonging together {R16} as long as no more than three
or four colours are used together.
BS 7581:1992 {R2} states that:
 “Any coloured area should give sufficient contrast with the background”
 “Any coloured area should be large enough for the eye to distinguish the colour”
 “Not more than seven colours should be used in any scheme, and not more than four if the reader is required to memorise their
  significance”

                                                                                                                                    Page 20
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

2.2      Guidelines – Identifying and Labelling Data
                                                                                                                    Evidence
 ID           Description                                                                             Conformance
                                                                                                                     Rating
 GTAB-018     Every individual data series must be labelled (Example 13)                                Mandatory     High

 GTAB-019     Data series labels must be visible all the time that the values are displayed on-         Mandatory     High
              screen

 GTAB-020     Where there is only a single data series in a graph space (that is, where there are     Recommended    Medium
              no data overlays), the labelling should be positioned above the graph
              Position the label where the data points (or the interpolation line) cannot touch or
              obscure it

 GTAB-021     Position the label either to the left of each graph or immediately above, and to the    Recommended    Medium
              top left of, each graph (depending upon the space available) (Example 15,
              Example 16)

 GTAB-022     Minimise the height of the labels positioned above the graphs in order to minimise      Recommended     High
              the distance between graphs

 GTAB-023     Visually associate the label with its corresponding graph by positioning it             Recommended    Medium
              immediately adjacent to it (Example 17)

 GTAB-024     Where there are multiple data series in a graph space (such as where one data           Recommended    Medium
              series is overlaid or semi-overlaid upon another), the labelling should be positioned
              immediately next to or very close to the relevant data series (Example 19)

 GTAB-025     Do not orient labels vertically (Example 18)                                              Mandatory    Medium

 GTAB-026     Do not feature labels as watermarked text on the graph area (Example 20,                Recommended     Low
              Example 21)

 Usage Examples
 Example 13: Label each data series

                                                                                                                       Page 21
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 14: Feature the label in the top left-hand corner for single data series graphs

Example 15: Label at the top of the graph

Example 16: Label at the side if there is sufficient space

                                                                                          Page 22
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 17: Associate the label with its graph area through proximity, shading and borders

Example 18: Do not display labels vertically

Example 19: Label next to the data series

Example 20: Do not feature a watermark

                                                                                             Page 23
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 21: Do not feature text behind the data

Rationale
Clear textual labelling is essential as there is nothing inherent within the graphic that identifies the underlying data (with the exception
in some cases of blood pressure).
BS EN ISO 9421-12:1998 states that “Screen elements (e.g. fields, items, icons and graphs) should be labelled unless their meaning
is obvious and can be understood clearly by the intended users” {R15}.
Confusing data series could have severe consequences on patient health and safety. Therefore, each data display needs to be clearly
labelled.
As a general principle, it is better to locate the label close to the data series. This heuristic of ‘proximity’ is articulated in Gestalt theory
of perception as a key way in which humans perceptually group objects {R5, R6}. There is also less room for erroneously associating
the wrong label to a data series. This risk is increased as the label is moved away from the data or requires an additional level of
cognitive processing (as in the case of matching up a data series format with a separate legend). However, placing a label
immediately next to the data points can obscure the data if placed in the graph area. Also, it is easier to scan down a list of aligned
textual labels in a uniform position (for example, on the left hand side). For this reason, we recommend that labels are positioned at
the top left-hand corner of each graph area.
Studies have shown that people find it more difficult to read text that is oriented vertically. Indeed, the relevant BSI standard {R2)
indicates that vertical text should be avoided. Therefore, avoid the vertical labelling of axes.
Displaying the label as a watermark behind the data within the graph area is problematic. The Royal National Institute of Blind People
(RNIB) recommend that text written on images (and, by extension, text written underneath images) should be avoided as people with
dyslexia find it harder to read such text2. The watermarks can be a problem also for people without such reading difficulties as the text
could interfere with the accurate reading of the data points.
In the event of multiple overlay of data, we would recommend that the labels are located at the end of each data series. However,
writing labels vertically is problematic as it harder for people to read text oriented in this way.
Solutions featuring labelling at the top and next to the data series have been shown to clinicians during the development of this
guidance; no clinician misidentifying the data with either of these types of labelling.

2
    Royal National Institute for Blind People: See it Right guidelines {R14}:
    http://www.rnib.org.uk/xpedio/groups/public/documents/publicwebsite/public_seeitright.hcsp
                                                                                                                                          Page 24
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008

2.3    Guidelines – Displaying Data Units
                                                                                                                 Evidence
 ID         Description                                                                            Conformance
                                                                                                                  Rating
 GTAB-027   Data unit labels must be visible at all times that a data series is graphed              Mandatory     High
            (Example 22)

 GTAB-028   Do not display values taken with different units of measurement in the same series       Mandatory     Low
            of data values. In these cases, separate data value series are required (with
            separate axes) (Example 26)

 GTAB-029   Do not display values taken with different units in the same sequence of data values     Mandatory     Low
            in a table (either displayed in a column or in a row)

 GTAB-030   If data values have been converted from one unit to another, the system must             Mandatory     Low
            clearly communicate that this has happened at the level of the data value points

 GTAB-031   Data unit labels may be expressed as abbreviations (such as ‘mmHg’)                    Recommended     High

 GTAB-032   Where they are available, use standard abbreviations (such as ‘°C’)                      Mandatory     Low

 GTAB-033   Abbreviations for data units should not be used where the abbreviations for two          Mandatory     Low
            separate data units are the same
            For example, ‘BPM’ should not be used for ‘Beats Per Minute’ and ‘Breaths Per
            Minute’

 GTAB-034   The system should provide definitions of any abbreviated data units upon request         Mandatory     High
            (Example 27)

 GTAB-035   The system could provide full data unit definitions as hover-overs                     Recommended     Low
            (Example 27)

 GTAB-036   Data units should be displayed alongside the data series labels                        Recommended    Medium
            For example, the data axis label and the main data series label (Example 23)

 GTAB-037   Data unit labels can be displayed in a less prominent font size or weight than the     Recommended    Medium
            data type labels (Example 23, Example 25)

 GTAB-038   Data units do not need to be displayed next to each data value (Example 24)            Recommended     Low

                                                                                                                    Page 25
                          Design Guidance – Displaying Graphs and Tables
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 12 November 2008

Usage Examples
Example 22: Display units for each data series (emphasised here by the red box)

Example 23: Feature the data unit label next to the data type label in a less prominent format

Example 24: Do not display all data unit labels next to each data point as they obscure the data

                                                                                                   Page 26
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 25: The unit presented in the header applies to all the values displayed in the graph area

Example 26: Do not display different data units – Celsius then Fahrenheit

Example 27: Provide hover-over display to fully display the unit

Rationale
The display of units is very important if the data is to be interpreted correctly. A number of data series could be measured in multiple
units (for example, temperature can be measured in Celsius or in Fahrenheit). Also, as measuring technology is refined and developed
over time, periodically units of measurement are replaced. Without units explicitly labelled, there may be scope for misinterpretation,
which in turn could compromise patient safety.
Also, the unit of measurement can help to define the data series itself. For example, knowing that oxygen saturation data is expressed
as a percentage means it is less likely to be confused with other measures of oxygen, such as litres of oxygen being administered to
the patient.
During our design exploration, we looked at a number of ways of displaying the units and the clearest way was to display them as part
of the main data label.
User research was carried out during the development of this guidance; clinicians were presented with the units displayed next to the
data type labels in a less prominent format and they neither misinterpreted the data nor felt that the labelling was confusing or
obstructive in this position.

                                                                                                                                Page 27
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

2.4      Guidelines – Displaying Blood Pressure Composites
                                                                                                                       Evidence
 ID            Description                                                                               Conformance
                                                                                                                        Rating
 GTAB-039      Systolic and diastolic blood pressures should be displayed on the same graph area           Mandatory     High
               (Example 28)

 GTAB-040      Systolic and diastolic blood pressures should be displayed as opposite ends of a            Mandatory     High
               vertical line (Example 28)

 GTAB-041      The intersection points (that is, the intersection between the x and y axes) for both     Recommended    Medium
               systolic and diastolic pressures should be represented by a short horizontal bar,
               thus creating a double-ended ‘T’
                  Note
                  Arrow-heads are also acceptable, as outlined in the rationale below.

 GTAB-042      The short horizontal bar which aligns with the y-axis values of the systolic and            Mandatory    Medium
               diastolic pressures should be a little thicker than any gridlines overlaid on the graph
               area

 GTAB-043      Do not interpolate the blood pressure data points without the vertical lines              Recommended    Medium
               connecting the systolic and diastolic pressure values

 GTAB-044      When data points are positioned tightly together, the symbol becomes a straight           Recommended     Low
               vertical line between the systolic and diastolic values

 Usage Examples

 Example 28: Feature T-bars to represent blood pressure

 Example 29: Do not feature arrowheads alongside T-bars

 Example 30: Display blood pressure with T-bars

                                                                                                                          Page 28
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 31: Use a straight line symbol for tightly-packed pressure bars

Example 32: Do not display blood pressure as interpolated data points without links between systolic and diastolic pressures

Rationale
User research and desk research, that was carried out during the development of this guidance, has found that clinicians expect that
the systolic and diastolic elements of blood pressure should be displayed in the same graph area and should be visually linked
together. Although we found some instances where the data points for both data were interpolated, the universal manner of displaying
them was to show them as either arrow-heads or T-bars connected by a straight line.
We do not recommend that the data is never interpolated, as there are some situations where interpolation can improve the
interpretation of highly variable data. However, as a default, we recommend that the vertical line approach is adopted.
We also recommend the use of T-bars over arrow-heads, given the slight potential for misinterpreting the data with arrow-heads,
especially if the arrow-heads are shown at a low resolution or in a zoomed-out view. In these cases it may be unclear as to the precise
point at which the data lies. Also, arrow-heads that point outwards have the effect of making the line seem smaller than it is. This effect
is exaggerated if there are also lines with arrow-heads pointing inwards (the ‘Muller-Lyer’ effect {R5}) and a combination of the two
should definitely be avoided.
It is clear from the T-bars where the data point lies (if the horizontal of the bar is thicker than any horizontal gridlines) and it is easier
for the viewer to align the y-value with the y-axis as they can follow the plane along from the horizontal line of the ‘T’.
Arrow-heads are familiar to clinicians, but are better suited for paper charting where, given the use of fairly heavy gridlines, the arrow
is required for the data points to stand out against the horizontal gridlines.
Patient safety analyses showed that there were no significant patient safety risks associated with using either symbol. It is also
recognised that arrows are widely used in current practice and are familiar to clinicians. Therefore, we recommend the use of T-bars,
for the reasons stated above, but recognise arrow-heads as an acceptable alternative.

                                                                                                                                         Page 29
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

2.5      Guidelines – Displaying Textual-Numerical Values in Graphs
                                                                                                                        Evidence
 ID             Description                                                                               Conformance
                                                                                                                         Rating
 GTAB-045       Display the most recent numerical value for each data series by default                     Mandatory     High

 GTAB-046       Display the penultimate numerical value for each data series by default                     Mandatory     High
                (Example 33)

 GTAB-047       Feature the most recent numerical value for each data series in a larger and/or             Mandatory    Medium
                heavier font (Example 33)

 GTAB-048       Do not display all numerical values for a data series by default                            Mandatory    Medium

 GTAB-049       Allow the display of all the numerical values for a data series, upon request by the        Mandatory     High
                user (Example 34)

 GTAB-050       Allow the display of any single numerical value, upon request by the user                   Mandatory    Medium

 GTAB-051       Display the numerical values adjacent to the graphical data points (Example 34)             Mandatory    Medium

 GTAB-052       Display the numerical values in a consistent position in relation to the graphical data     Mandatory     Low
                points (Example 34)

 GTAB-053       Display the numerical values above or below the data points                               Recommended     Low

 GTAB-054       Display the numerical values to the precision in which they were recorded                   Mandatory     Low
                For example, to the nearest integer, to one decimal place

 GTAB-055       Feature the numerical values in a reasonably-sized font, namely based upon the            Recommended     High
                prevailing good accessibility practice

 GTAB-056       Feature the numerical values in a clear, undecorated typeface (Example 35)                Recommended    Medium

 Usage Examples
 Example 33: Display the most recent values

 Example 34: Display all of the values at the same time, if the user has requested it

                                                                                                                           Page 30
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

Example 35: Feature clear, undecorated typefaces

Example 36: Do not display values in inconsistent positions

Example 37: Do not display values in too small a font size

Example 38: Do not display value in too big a font size

Example 39: Do not display too tightly packed data

This is a problem because the user may misinterpret the data displayed in the small font.

                                                                                            Page 31
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 40: Display the label for the peak value in the tightly packed data

Rationale
Displaying the current (or at least the most recent) value is important as this is often the information that the user needs to see first
along with how much it has changed since the penultimate value. Such a mechanism is often found on medical telemetry systems that
record and display vital signs information in hospitals.
Research interviews indicated that healthcare staff made use of this function. In user tests, the majority of clinicians indicated that this
would be a useful feature.
Text size must not be displayed below a minimum size {R9}, so that it is to be clearly viewable. However, text that is too large can
hinder its reading as overlapping can occur and the text can detract from the graphical elements of the graph.

                                                                                                                                     Page 32
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

2.6    Guidelines – Focus of Data Points
                                                                                                                   Evidence
 ID         Description                                                                              Conformance
                                                                                                                    Rating
 GTAB-057   Provide a visual focus line that spans all data series and that is aligned to a chosen     Mandatory     High
            time. When the focus line crosses a value point, display the appropriate value label
            (Example 41)

 GTAB-058   Allow some tolerance in the focus line, so that a data point will be picked up even if   Recommended     Low
            it does not precisely align with the vertical line
            The level of tolerance will depend upon the clinical context, and upon the granularity
            of the time intervals

 GTAB-059   When the focus line crosses the value point, provide a background to the value label     Recommended     Low
            so that it is not obscured by the line

 GTAB-060   For each data series, allow the user to reveal the value immediately preceding and       Recommended     Low
            the value immediately following the specific point in time, within a set tolerance

 GTAB-061   Distinguish the values that are aligned with the focus line from the preceding and       Recommended     Low
            following values (Example 41)
            Make the aligned value more prominent through font weight and font size

 GTAB-062   The visual focus can be moved between times or time ranges by the user                     Mandatory     High
            (Example 42)

 GTAB-063   The visual focus can be moved by moving the mouse over the top of the graph              Recommended     Low
            areas (Example 42)

 GTAB-064   The visual focus can be moved by button presses and/or key presses: one for                Mandatory     Low
            tabbing forward and one for tabbing back

 GTAB-065   The visual focus line should be labelled with the time with which it is aligned            Mandatory    Medium
            (Example 41)

                                                                                                                      Page 33
                          Design Guidance – Displaying Graphs and Tables
                          Prepared by Microsoft, Version 2.0.0.0
                          Last modified on 12 November 2008

Usage Examples
Example 41: Provide a vertical focus line that reveals the values of all of the data points that intersect with it

Example 42: Outline of how the focus will work
                                                                               Step 1: Initially the clinician has the mouse away from the
                                                                               graph areas. None of the values are in focus.

                                                                                                                                     Page 34
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

                                                                             Step 2: The clinician drags the mouse over the graph and
                                                                             the vertical line appears on the same vertical plane as the
                                                                             mouse cursor. The corresponding numerical values are
                                                                             shown for all datapoints which intersect or that fall within a
                                                                             given tolerance of the vertical line.

                                                                             Also, for each
                                                                             data series,
                                                                             values are
                                                                             shown for the
                                                                             data points
                                                                             preceding and
                                                                             following the
                                                                             vertical line, but
                                                                             less prominently
                                                                             (as shown on the
                                                                             right).
                                                                             Step 3: As the clinician moves the mouse horizontally over
                                                                             the graph area, the vertical line moves, revealing further
                                                                             data values.

Rationale
From interviews with clinicians, we ascertained that they often need to be able to identify the values for a number of data series
simultaneously in order to give a ‘snapshot’ of the patient’s observations at a given point in time. In some cases, a clinician may draw
a line down the observations chart in order to align the values at a given time.
Therefore a ‘focus’ function is required that spans multiple values. During user research, this concept was presented to clinicians and
positive feedback it was received.
The main issue in designing such a focus is that values which a clinician considers simultaneous, may not have been recorded at
exactly the same time. For example, a set of observations taken as part of a four-hourly observations cycle at approximately 18:00
may comprise readings taken and recorded at 17:58, 18:00, 18:02, 18:03 and 18:04. If the focus is aligned to a specific time, such as
to the minute, the clinician would not be able to view a set of observations simultaneously. Therefore, there should be some tolerance
in the focus, while it clearly communicates the exact time to which it is aligned and any readings that align exactly to it.
Displaying the preceding and following data values also serve the additional function of allowing the clinician to see the direction of the
data that a given point represents (that is, whether the focal value represents a rise or a fall in the data).
User research indicated that the current focus design was preferred to alternative designs.

                                                                                                                                     Page 35
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

3         SCALING GUIDANCE DETAILS
    Scaling refers to the mapping of numeric intervals in the underlying data onto physical distances in
    the graph area. In other words, a scale provides a means of assigning specific values to the data
    points on the graph, based upon their location along the scale lines.
    For example, an hour may be represented by a distance of 10 mm running from left-to-right along
    the (horizontal) x-axis while a rise of 0.5ºC of body temperature may be represented by 5 mm
    running from bottom-to-top along the (vertical) y-axis.
    The current guidance addresses both the x-axis and y-axis scales in combination as this has
    importance in dictating the ‘shape’ of the pattern formed by the location of the data points, which
    can influence clinicians’ interpretation of the underlying data.
    The guidance assumes a ‘common’, linear scaling rather than a non-linear scaling for the
    observations data, as the quantitative interval from one axis marking to the next is always the
    same. Non-linear scaling, such as ‘logarithmic’ scaling, may have uses in clinical graphing, but
    analysis has not identified reasons for their inclusion when measuring the physiological ‘vital signs’
    that are in scope for the current guidance.

3.1       Guidelines – Scaling
                                                                                                                      Evidence
    ID         Description                                                                              Conformance
                                                                                                                       Rating
    GTAB-066   There should be a linear relationship between data values and their spatial location       Mandatory     High
               That is, within a view, a unit of time is consistently represented by a set distance
               and a unit of clinical measurement is consistently measured by another set distance
               (Example 43, Example 44)

    GTAB-067   In the default view of a graph, the time-axis should be scaled to one of a set of pre-     Mandatory    Medium
               defined time ranges

    GTAB-068   Ensure that for each default timescale, there is a ratio of x-axis to y-axis that is       Mandatory     High
               consistently applied

    GTAB-069   The y-axis scale should be pre-determined by considering a number of factors               Mandatory     High
               The factors are:
                Vertical space available in the area allocated for graphing in the application
                Total possible range of measurements
                Likely range in the specific population for that context
                Whether an early warning scoring system applies to the graph and the
                 parameters of this scoring
                ‘Normal range’, which defines the parameters outside of which the reading is
                 ‘abnormal’ and a cause for concern:
                   Whether various patient attributes will determine the parameters of the
                    normal range
                   Whether the normal range may change over time (for example, with the
                    patient’s age)
                What is a significant degree of change that the clinician must detect from the
                 graph (for example, does a rise of 0.1, 1 or 10 matter)?
                The likely range of variation in a given patient
                How likely is the occurrence of genuine outlier values?
                The extent to which any of these factors vary depending upon the context

                                                                                                                         Page 36
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

GTAB-070   Where a normal range is to be shown on the graph area, the default graph view               Recommended    High
           must be sufficiently high to show the normal range plus a margin
           The margin may be such as a minimum of 10% above and below the normal range
           An exception to this guideline is where the normal range extends to the highest or
           lowest possible value, such as in the case of oxygen saturations, where the normal
           range extends up to 100%
           See section 8 for a more detailed discussion on the display of ranges.

GTAB-071   Ensure that, in the default view, the clinically significant changes (rises or falls) are    Mandatory     High
           always detectable by the clinician

GTAB-072   In the default view, do not optimise the view by maximising the size of the data to fill     Mandatory     High
           the graph area

GTAB-073   Allow the user to choose to optimise the view (that is, maximising the data to fill the     Recommended   Medium
           graph area)

GTAB-074   If re-scaling is required, minimise the number of scale gradations and/or the number        Recommended    Low
           of re-scaling steps

GTAB-075   Upon re-scaling from a default view scale, the system should display that the view is        Mandatory     Low
           re-scaled

GTAB-076   In the event that, on a given scaling, the data requires more space than is available,      Recommended   Medium
           re-display according to certain priorities
           Follow one of these options (in order of priority):
            Expand the graph space up or down to accommodate the full range of data
            Shift the graph space axis to accommodate the most recent data. In determining
             the parameters of the axis, give priority to recent over older data
            Snap the graph space to another pre-defined scale. This solution would need to
             discount outliers, the criteria being determined by clinical need

GTAB-077   If the scaling solution is based upon a shift up or down along an axis, provide a           Recommended   Medium
           scroll feature when data falls outside of the visible axis range

GTAB-078   If the scaling solution is based upon a shift in axis, where data may fall outside of        Mandatory     High
           the visible range, provide a mechanism that communicates all the data within the
           given timeframe

GTAB-079   A thumbnail can be used to communicate all the data within a given timeframe if the         Recommended   Medium
           main graph area does not show all the data simultaneously (Example 46)

GTAB-080   Where possible, show the data points on the thumbnail. However, for large                   Recommended   Medium
           timescales containing much data where this is not possible, just show interpolation
           (Example 46)

GTAB-081   Display the upper and lower axis ‘tick’ marks on the thumbnail (Example 46)                 Recommended    High
           The tick marks are the scale’s incremental markers (for example, where each tick
           represents a period of time)

GTAB-082   Do not position the thumbnail in a position that obstructs the main graph                    Mandatory    Medium
           (Example 46)

GTAB-083   Where appropriate, overlay an indicative range or line. Display this both on the main       Recommended    High
           graph area and the thumbnail
           For example, an indicative range may be a normal range, the normal value or early
           warning parameters

                                                                                                                       Page 37
                         Design Guidance – Displaying Graphs and Tables
                         Prepared by Microsoft, Version 2.0.0.0
                         Last modified on 12 November 2008

Usage Examples
Example 43: Maintain consistent scaling (different time views)

Step 1: One year view

Step 2: Two year view

                                                                             Page 38
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 44: Maintain consistent scaling (as time passes)
Step 1: Patient’s chart at 16:00

Step 2: Patient’s chart at 20:00

As more data is added, the scaling remains the same. This means that part of the blood pressure (second graph from top) is out of
view and requires scrolling to view one of the data points. This problem is mitigated by providing an overview in the right-hand
thumbnail, in which the clinician can see all the data for all the measurements in the timeframe.

                                                                                                                             Page 39
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Step 3: Patient’s chart at 01:30

In the final diagram, the blood pressure has dropped over time and therefore some of the data has scrolled out of the top of the chart
as the graph window has effectively moved down. This problem may be mitigated better by providing a larger graph space or by
starting off with a reduced scale in which more data can fit. This type of decision should be made in the context of expected ranges
and fluctuations of data for a given clinical setting. However, if multiple graphs are shown simultaneously there will always be the risk
that some data that cannot fit in the default scale and the above solution shows how to mitigate against this risk.

Example 45: Do not automatically change the scale so that the data points expand to fit the graph area by default

Although many graphing software packages automatically expand the data to fit the graph area, in a clinical context where quick
recognition of patterns and the ongoing monitoring of a single patient’s data is important, it is more important to display data according
to a consistent scale. If the scale keeps changing, it is hard to keep track of the data patterns over time. Also, maximising the
differences with the data could lead to clinicians thinking there are problems when no problems exist and, eventually, becoming
sensitised to potentially significant changes.

                                                                                                                                   Page 40
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 46: Feature thumbnails (right-hand side) and normal ranges to orient the viewer

Example 47: Allow the user to choose to maximise the view (not by default)
Step 1: Normal, consistently-scaled view (default)

Step 2: Maximised view, so that the data expands to fit the graph area (user chosen)

The example above shows how a ‘maximise’ data view could work. Step 1 shows the normal default view, which would be consistently
scaled according to the timescale. As new data is added, the scale does not change. However, the user would be offered a
mechanism to expand the data to fit the graph area in order to see as much change as possible. Step 2 shows this maximised view.

                                                                                                                         Page 41
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Rationale
A number of studies have underlined the importance of scaling and the, potentially negative, impact it can have on clinical decision-
making. For example, Cartmill and Thornton’s 1992 study {R12} of the effect of the proportions or aspect ratios of graphs upon
obstetricians revealed that changing the ratios of x-axis to y-axis of partograms for the same cervical dilation data over time led to
clinicians suggesting different clinical decisions. When the graph was flatter, the clinicians thought that cervical dilation was occurring
very slowly and decided to intervene in twice as many patients as when the same data was displayed on the taller graphs that the
doctors had been trained with. Tay and Yong report that this effect was repeated in further studies, even when the doctor’s training
had been with the flatter graph {R18}. This effect was also mirrored by the user research findings, which found that clinicians
overestimated physiological effects where the scaling of the ratio of x-axis to y-axis was taller {R9}.
As clinicians’ decision-making can be influenced by the scaling of graphs, in particular with the difference between flatter and taller
ratios, then graphs should strive for consistent scaling. Consistency should minimise the risk of misinterpreting the shape of a graph.
Clinicians get used to seeing and interpreting shapes and patterns and therefore inconsistency could lead them to wrongly consider
the current situation to be similar or different to past situations. The main challenge of maintaining consistency of scaling is that data
values can fluctuate a lot within a given data series. For example, in one instance pulse rate may be varying between 60-90 beats per
minute but in another situation the pulse rate may be reading between 120-150 beats per minute. It could be important to be able to
detect slight changes within either of these two ranges. Within a short timeframe the patient’s pulse rate could also rise between these
two ranges.
User research with healthcare staff concluded that consistent scaling was necessary to avoid misinterpretation of clinical data.
Researchers compared clinicians’ responses to consistently scaled graphs versus their responses to ‘maximised’ scale graphs (that is,
a scale which presents the data range as large as possible within the graph area). They found that:
 The majority of clinicians tended to overestimate changes when they viewed a maximised scale
 In the maximised version, large differences within a data series can mask more subtle (but significant) changes
 Clinicians did not like the fact that some data may not be visible in the consistently-scaled version
 The provision of additional thumbnails to show all the data for a given timeframe meant that clinicians were aware of all the data,
  even though extreme values were not immediately visible in the main graph area. However, clinicians felt that it would be useful to
  see how many values were out of view.
The study recommended that:
 Consistent scaling should be ensured as far as possible
 Default scaling should feature an axis that allows for typical rises and falls in the data while ensuring that the data remains in view
 Shifts in the axis (either up, down or re-scaling) should be accompanied by a feature which mitigates against the clinician becoming
  disoriented (such as thumbnails showing the full range of data and consistent markings on the graph area providing a consistent
  point of reference)
Reference ranges are an important point of orientation in a graph. They can and should be displayed but, where appropriate, adjusted
to the specific patient population (for example, do not display an adult normal pulse range when the patient is a child)

                                                                                                                                     Page 42
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

4            AXES GUIDANCE DETAILS

4.1          Guidelines – X-Axis and Y-Axis Arrangements
                                                                                                                            Evidence
    ID               Description                                                                    Conformance
                                                                                                                             Rating
    GTAB-084         If time is displayed as one of the axes, it should be displayed along              Mandatory               High
                     the (horizontal) x-axis. (Example 48, Example 49)

    Usage Examples
    Example 48: Use the x-axis to display time

    Example 49: Correct graph display with time running along the x-axis from left to right

    Rationale
    Artefact evidence, such as existing forms, along with user research, has shown that clinicians expect to see time along the x-axis
    rather than on the y-axis. Breaking the convention would be dangerous as there is a risk of clinician misinterpretation.
    The display of time in this way is best practice generally, and not just in the clinical domain {R6, R7}.

                                                                                                                                    Page 43
                                 Design Guidance – Displaying Graphs and Tables
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 12 November 2008

4.2      Guidelines – Time Axis Intervals
                                                                                                                            Evidence
 ID            Description                                                                             Conformance
                                                                                                                             Rating
 GTAB-085      As a default, time must be displayed proportionally in observation graphs                   Mandatory            High
               (Example 51)
               That is, each time interval (such as one hour) must be represented as a distance
               (such as 10 mm). In each view of the graph data, the relationship between time
               interval and distance must remain consistent (for example, the distance between
               14:00 to 15:00 will be the same as that between 15:00 to 16:00)

 GTAB-086      As a default, do not display data values non-proportionally along the time axis             Mandatory            High
               (Example 50)
               That is, do not represent a time interval (such as a day) as the same distance as
               another time interval (such as an hour)

 GTAB-087      Mark the time intervals (that is, use hour marks, day marks, week marks and so on)          Mandatory            High
               (Example 52)

 GTAB-088      Group the time intervals into higher units and distinguish these with more prominent        Mandatory          Medium
               markings (Example 52)

 GTAB-089      Do not display tick marks for every possible time interval. Do not mark                     Mandatory          Medium
               unconventional time intervals, such as every six minutes (Example 53)
               Tick marks should be used to allow the viewer to estimate the time of the
               observation by seeing where the point lies in relation to regularly spaced time
               intervals. The tick marks should be based upon meaningful time intervals, such as
               every hour or every day, depending upon the timescale

 GTAB-090      Ensure that the time interval markings are always visible when graph data is being          Mandatory            High
               displayed

 Usage Examples
 Example 50: Do not display time non-proportionally

 The example above shows data displayed according to a non-proportional timescale. This pattern may be misleading, given the large
 differences in time between readings.

 Example 51: Display time with a proportional axis

 Data should be displayed according to a proportional timescale. That is, the distance along the x-axis increases proportionally with the
 time it is representing. For example, in one scale, one hour may be represented by 10mm (running from left to right).

                                                                                                                                  Page 44
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 52: Feature markings that group time intervals

Example 53: Do not use too many ticks

Units of time should be marked on the axis so that the clinician can calculate where in time a given data point lies. These tick marks
are useful to give the clinician a general idea of the time and are not necessarily intended to give a precise time. As such, they do not
need to comprise all the time gradations. There is a limit to how many tick marks can be labelled and providing too many ticks can
unnecessarily distract from the important information on the graph. Accurate time values can be better accessed using other
mechanisms (such as a focus line) whereas tick marks should be used simply to reflect major time gradations. These should be
dependent upon the timescale that is being shown: the smaller the timeframe, the more granular the major time gradations.

Rationale
The user research with healthcare staff compared graphs with proportionally-spaced time intervals with those having non-
proportionally-spaced time intervals. The findings were that clinicians were concerned that non-proportional time intervals could be
misinterpreted and therefore dangerous. This finding is in spite of the fact that many paper charts feature non-proportional time
intervals. We believe that there is an expectation that electronic graphing is proportional because, unlike paper, the plasticity of
electronic interfaces allows easy construction of proportional time intervals.
There is a risk that clinicians will see a non-proportional graph and will interpret the data patterns as if they were displayed according
to a proportional timescale. In these situations, there could be the risk of missing important critical findings or of over-estimating rises
or falls in data, both of which carry the possibility of harm to the patient.

                                                                                                                                      Page 45
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

4.3      Guidelines – Clinical Measure Axis Intervals
                                                                                                                     Evidence
 ID            Description                                                                             Conformance
                                                                                                                      Rating
 GTAB-091      Feature markings for non-time variables along the (vertical) y-axis (Example 54)          Mandatory     High

 GTAB-092      Where possible, feature y-axis markings according to decimal intervals or intervals     Recommended     High
               that are simple to add up (Example 55)
               Decimal intervals are such as 10s or 20s. Intervals that are simple to add up are
               such as 1s, 2s, 5s, 0.1s, 0.2s or 0.5s

 GTAB-093      When marking the y-axis, mark numbers for which it is easy to compute the               Recommended    Medium
               mid-points (Example 57)
               For example, with intervals marked at 20 units, it is easier to mentally compute the
               midpoint between 110 and 130 than it is to compute the midpoint between 115 and
               135

 GTAB-094      Do not mark arbitrary intervals in an attempt to feature a fixed number of gradations   Recommended     High
               (Example 56)

 GTAB-095      Where appropriate, group the data intervals into higher units and distinguish these     Recommended    Medium
               with more prominent markings

 Usage Examples
 Example 54: Feature markings along the vertical y-axis

                                                                                                                        Page 46
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 55: Feature decimal intervals on the y-axis

Example 56: Avoid poorly chosen intervals on the y-axis which create artificial and incorrect precision

Example 57: Do not use intervals in multiples of 15 as it makes it difficult for people to mentally compute the mid-point

Rationale
As it is often impossible to clearly mark and label all data gradations on an axis, the design will need to rely on the user being able to
mentally compute the difference between the marked axes.
Studies have shown that users find it easier to read from axes that are marked in 10s and 2s than other multiples. This was reported
by Wyatt and Wright {R9}, citing work by Chapanis {R19} This can be extended to 5s (half of 10) and 1s. People find it easier to
calculate the midpoints between intervals based on these multiples and therefore they are much more helpful than intervals based on
other intervals (for example, 15 or 7). Experts {R9, R19} in data visualisation also suggest that people generally find it easier to
calculate the difference between interval markings when these are for even rather than odd numbers.
The grouping of axis intervals into higher level ‘chunks’ is also recognised best practice for displaying graph axes {R6}.

                                                                                                                                    Page 47
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

4.4      Guidelines – Axis Ranges
                                                                                                                         Evidence
 ID             Description                                                                                Conformance
                                                                                                                          Rating
 GTAB-096       By default, the x-axis should be constrained to one of a set of defined time ranges        Recommended    Medium
                For example, 24 hour, 2 week, 2 year and so on

 GTAB-097       As new data points are added to a graph, do not change the time scaling. If adding         Recommended     Low
                the new data point means that the current data exceeds the time range, shift the
                time window to include the new data rather than increasing the time range in size
                (Example 58)

 GTAB-098       Do not show all data by default, unless there is a specific clinical reason for doing so     Mandatory     Low
                For example, if the patient’s record holds data going back five years, do not force
                the user to view all this data before choosing the specific range they require

 GTAB-099       If all data must be shown by default, the data should be shown within the nearest          Recommended     Low
                set timescale within which all the data to be displayed can be shown

 GTAB-100       Y-axis ranges do not need to start from zero (Example 59)                                    Mandatory     High

 Usage Examples
 Example 58: Shift the time range forward when data is added
 Step 1: This is the view at 06:00 (the last data entry was at 04:45)

                                                                                                                            Page 48
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

Step 2: This is the view at 13:00 (the last data entry was at 12:30). The window has shifted to show the new data but kept the same
timeframe

Example 59: The axis may start from numbers other than zero

                                                                                                                               Page 49
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Rationale
In order to achieve consistent scaling, we recommend the use of a default set of fixed timescales to display data. In addition to
providing sufficient time-range labelling, this should provide the user with sufficient orientation to be able to correctly interpret the data
pattern.
In many situations, a clinician will regularly view data at one or two given timescales, depending upon their discipline. For example, in
acute care, clinicians may view data according to a 24-hour timeframe with intervals set hourly or they may view four hourly readings
at a longer timeframe (perhaps 48-hours or three-days). It makes sense to ensure that these timeframes are set as the default
standard views in these instances. Presenting the data in a 21-hour timeframe would require more thinking on the part of the clinician
and could result in errors if 24-hours is expected.
This would not preclude the clinician being able to adjust the time window to better fit their current clinical situation, but they would
have to view one of the standard timeframes first.
We have discussed this notion with clinicians and leading clinical data visualisation experts who agree that ensuring the use of default
timeframes and scales would be necessary to ensure that the data is displayed sufficiently consistently.
User research showed that, overall, clinicians indicated that they did not need the axes to always begin at zero. They also recognised
that forcing graphs to show the zero values means that the necessary scaling can hide important changes in the data.

                                                                                                                                       Page 50
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

4.5      Guidelines – Gridlines
                                                                                                                        Evidence
 ID            Description                                                                                Conformance
                                                                                                                         Rating
 GTAB-101      Feature horizontal gridlines for major gradations on the y-axis                            Recommended     High
               For example, every 20 mmHg, or every 0.5 °C

 GTAB-102      Ensure that, in the default view of data, horizontal gridlines are featured consistently     Mandatory     High
               for each data series

 GTAB-103      Use gridlines sparingly. Do not feature gridlines for every possible gradation               Mandatory     High
               (Example 62)

 GTAB-104      Feature vertical gridlines for major gradations on the x-axis (Example 60)                 Recommended     Low
               For example, every 6 hours for a 24-hour view, or per day for a three-day timeframe

 GTAB-105      Ensure that vertical gridlines are featured consistently for each time range window          Mandatory     Low
               (Example 60)

 GTAB-106      Use the same vertical gridlines for all graphs in view at the same time (Example 60)       Recommended     Low

 GTAB-107      Offer users the option of (temporarily) switching off the gridlines                        Recommended    Medium

 Usage Examples
 Example 60: Feature regular gridlines for major gradations

                                                                                                                           Page 51
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 61: Feature shading at regular intervals along the time axis

Example 62: Do not display too many vertical lines

                                                                             Page 52
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 63: Do not switch off gridlines in the default view

Rationale
During user research, clinicians were shown differing levels of gridlines and it was found that clinicians prefer regular horizontal lines.
It is accepted best practice to feature some horizontal lines {R6}, although these should be kept to a minimum {R7}. Some experts
suggest that horizontal lines are superfluous to clinicians’ perception of graphical patterns. However, to help clinicians estimate data
values fairly accurately, horizontal gridlines are useful. Given the ‘letterbox’ shape of the graphs, horizontal lines tend to be more
important than vertical lines. However, clinicians have suggested that some vertical lines could be useful (for example, indicating the
divide between days).
Too many vertical lines can be a problem. In usability testing, some clinicians mistakenly thought that the intersection between vertical
lines and the data interpolation line indicated data points, as this is essentially what happens in paper charts (namely, that there is a
vertical line for each reading).

                                                                                                                                     Page 53
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

4.6      Guidelines – Axis Labels
                                                                                                                              Evidence
 ID             Description                                                                              Conformance
                                                                                                                               Rating
 GTAB-108       Label the y-axis markings, not the spaces between them ( Example 64, Example 65)             Mandatory          Medium
                An exception is where readings are expressed as ranges (though this does not
                apply to the vital signs observation data)

 GTAB-109       Label the x-axis markings, not the spaces between them (Example 66)                       Recommended           Medium
                An exception is when times are expressed as ranges, rather than specific points in
                time. For example, a day or a month may be shown in the gap, with the assumption
                that the axis marks represent 00:00 (that is, the technical dividing point between
                days)

 GTAB-110       Avoid diagonally oriented label text unless additional grids are added to mitigate the       Mandatory            Low
                risk of users associating a label with the wrong marking

 GTAB-111       Avoid vertically oriented label text (for both the x-axis and the y-axis)                    Mandatory          Medium

 GTAB-112       On the x-axis, ensure that the full dates are always communicated                            Mandatory          Medium
                This could be done by hierarchically labelling year, then month, then date

 GTAB-113       If possible, communicate days of the week in the x-axis labelling (Example 68)            Recommended             Low

 GTAB-114       Provide labelling of the time-range (Example 69)                                          Recommended             Low
                For example, ‘Last 24 hours’, ‘15-Jun-2006 to 17-Jun-2006’, ’12 hours from
                Admission’

 Usage Examples
 Example 64: Avoid positioning the Y-axis labels in the gaps rather than aligned with the ticks

 In this example, the Y-axis labels are displayed against the gaps between ticks, not aligned with the ticks (on the left-hand side). This
 leaves a lot of ambiguity in the interpretation of the data. For example, is the first diastolic reading 100, 80 or 110 mmHg?

                                                                                                                                    Page 54
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

Example 65: Align the Y-axis labels with the ticks

In this correct example, the values to which the labels correspond is clear: the first diastolic reading is 90 mmHg.

Example 66: Do not show the x-axis with times in the gaps not on the marks

Example 67: Show the x-axis with times shown on the marks, not in the gaps

Example 68: Show the days of the week along with the date, where it is clinically relevant

                                                                                                                       Page 55
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 69: Display a summary of the information shown ( such as, ‘Last 48 hours observations’)

Rationale
Labelling of both x and y axes must be clear and easy to read. Misreading of labels can cause misinterpretation of data and therefore
lead to poor decisions over a patient’s health.
In current paper charts, the axis labels are often aligned against the gaps rather than the ticks in the axis. This means that there could
be room for misinterpretation. However, the clinician will often write in the actual number in text next to the data point symbol in order
that the data points cannot be misinterpreted. It is clearly better to avoid the potential for such ambiguity.

                                                                                                                                   Page 56
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

5           LAYOUT, DENSITY AND FORMATTING GUIDANCE
            DETAILS

5.1         Guidelines – Colours and Contrasts
                                                                                                                                Evidence
    ID             Description                                                                              Conformance
                                                                                                                                 Rating
    GTAB-115       Display data points in high saturation colours except in those situations where the       Recommended               High
                   system needs to distinguish one data series over others (Example 70, Example 72)

    GTAB-116       The colours of the data series should be approximately equal in terms of saturation         Mandatory               High
                   except where one data series is being emphasised over the others

    GTAB-117       Where one data series is required to stand out against the other data series, the         Recommended               Low
                   others can be displayed in lower saturated versions of the same hues

    GTAB-118       Where special low-light formatting is not required (that is, where the environment in       Mandatory               High
                   which the data is to be viewed is well-lit), background colour for the graph area
                   should be white or off-white

    GTAB-119       The surrounding background for the graphs should be a neutral low-saturation              Recommended               High
                   colour (Example 72)

    GTAB-120       Ensure a good contrast between the background colour and the foreground colours             Mandatory               High
                   (Example 72)
                   The foreground colours are for the data points, interpolation lines and copy including
                   labels and headers

    GTAB-121       Provide a black border for data points. Reverse to a white border in the event of the     Recommended               High
                   colour of the data point being reversed (Example 73)

    GTAB-122       Where special reverse formatting is required, ensure a good reverse contrast                Mandatory              Medium

    GTAB-123       Use only a few colours to ensure they are distinct. Using up to twelve colours is         Recommended              Medium
                   acceptable, but do not use more. Only use one of each colour category
                   (Example 70)
                   Base the colours upon the Berlin and Kay colour categorisation of red, green,
                   yellow, blue, black, white, pink, gray, orange, brown and purple. Plus cyan may be
                   added to complete the twelve

    GTAB-124       The first colours to be selected should be blue, red, and yellow, unless there is a       Recommended               Low
                   background colour that conflicts with any of these

    Usage Examples
    Example 70: Twelve distinct saturated colours for data points: blue, red, green, yellow, black, white, cyan, pink, grey, brown,
    orange, purple

                                                                                                                                        Page 57
                                 Design Guidance – Displaying Graphs and Tables
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 12 November 2008

Example 71: Twelve good unsaturated colours for when one data series (or single data point) needs to stand out against
the rest

Example 72: Feature saturated primary colours as the foreground colour, except where there could be a conflict

   Note
   In the example of the oxygen saturations above, the colour yellow has been rejected in favour of a dark orange because of the
   potential conflict with the background colour.

Example 73: Feature black borders for the data points

                                                                                                                             Page 58
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Rationale
Well saturated colours are easier to detect and are suited for small colour-coded objects {R5} and contrast well against an unsaturated
background. This means that the data will be easier to see at a glance and leaves less scope for misinterpretation.
Regarding the choice of colour, a seminal study in the late 1960s by Berlin and Kay {R20} revealed a colour categorisation that
transcends cultural boundaries. This indicated eleven colour labels: red, green, yellow, blue, black, white, pink, gray, orange, brown
and purple. To these has been added the colour ‘cyan’ by leading perceptual psychologist, Colin Ware {R5}. It is recommended
therefore that the graphs should not feature more than one of any of these colour types (for example, do not distinguish data with two
shades of red or multiple shades of grey).
The relevant BSI standard {R2} indicates that: “If colour coding is used to distinguish related pieces of information, no one colour
should be too prominent or too retiring”.
Providing a thin black border for data symbols is important as colours appear differently according to their contrast against the
background colour. Contrast errors have been shown to be reduced with borders around the coloured areas or by using a low
saturation, relatively uniform background.
According to psychological literature, red, green, blue and yellow are ‘hard-wired’ into the brain as primary colours. These codings are
easier to remember and should be considered first in any colour coding. However, given the problems that colour-blind people have
with green and red, the colour should not be the only coding mechanism: also use shape, location and labelling to distinguish data
series.
If displaying a dark background with a light foreground, as for light solutions, avoid locating red text and dark blue text adjacent to one
another on a black background. This can create the illusion of one colour appearing closer than the other (most people see the red as
appearing closer than the blue). The illusion is called ‘chromostereopsis’ and should be avoided {R5}.

                                                                                                                                    Page 59
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

5.2       Guidelines – Typeface Formatting
                                                                                                                   Evidence
 ID             Description                                                                          Conformance
                                                                                                                    Rating
 GTAB-125       Copy must be displayed in a sufficiently dark colour to contrast against the           Mandatory     High
                background
                For example, make the copy dark grey or black. The minimum contrast between text
                and its background must be 3:1, with a preferred ratio of 10:1

 GTAB-126       Feature a font size of between 2 mm and 6 mm for the x-height of the letter            Mandatory     High
                (Example 76)
                That is, the height of a letter ‘x is between 2 mm and 6 mm‘

 GTAB-127       Avoid visually elaborate typefaces (Example 74)                                        Mandatory     Low

 GTAB-128       Use a typeface or font family where the number 1 is clearly discernable from the       Mandatory     Low
                lowercase letter ‘l’ or a capital letter ‘J’

 GTAB-129       Ensure that each kind of screen copy is displayed in a consistent typeface, size,    Recommended    Medium
                colour and weight
                For example, all y-axis labels should be displayed in the same format
                Exceptions include instances where a label needs to stand out against other labels
                of the same kind (such as when a data value is in focus). For example, the most
                recent data value must be more prominent than the preceding values and this can
                be achieved with its formatting

 GTAB-130       Avoid underlines                                                                     Recommended    Medium

 GTAB-131       Avoid coloured text highlights                                                       Recommended    Medium

 GTAB-132       Avoid animated or flashing text                                                        Mandatory     High

 GTAB-133       Do not feature text written vertically (Example 75)                                    Mandatory    Medium

 GTAB-134       Avoid the use of brackets (either round or square) in the numerical value labels       Mandatory     High

 Usage Examples
 Example 74: Avoid elaborate decorative font

 Example 75: Do not display text written vertically (left hand side)

                                                                                                                      Page 60
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

Example 76: Feature reasonably sized text

Rationale
Text is a key component in the communication of the data. It should clearly identify the different data sets and provide reference labels
for the axes. But it must also allow the user to view the data to a level of precision that is not possible with a purely graphical display.
To this end, the text must be kept simple and without elaboration, large enough to view and consistently sized. By these means, it
avoids unintentionally communicating an effect in the data where one does not actually exist.
Text should follow recognised standards for its display (such as the International Standards Organization (ISO) standard 9241 {R15}
and the World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) guidelines)3.
However, it is also important to ensure that the text is not so prominent that it detracts from or obscures the graphic data that is the
most important element of communication. Text should not add too much superfluous and distracting ‘non-data ink’ {R22}. Underlines
constitute an instance of unnecessary ‘non-data ink’ and, given that the main data comprises points connected by lines, an additional
line distracts from the main communication. Also avoid brackets as they can be confused with the number ‘1’.

3
    World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) guidelines {R21}: http://www.w3.org/WAI/
                                                                                                                                    Page 61
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

5.3      Guidelines – Line Formatting
                                                                                                                              Evidence
 ID             Description                                                                              Conformance
                                                                                                                               Rating
 GTAB-135       Format gridlines in a light grey colour (Example 77)                                      Recommended           Medium

 GTAB-136       Format gridlines in a light weight (Example 77)                                             Mandatory           Medium

 GTAB-137       Make gridlines lighter in weight and colour saturation than the data points and the         Mandatory           Medium
                interpolation lines (Example 77)

 GTAB-138       Format axis lines in a light grey colour (Example 77)                                     Recommended           Medium

 GTAB-139       Format axis lines in a light or medium weight (Example 77)                                Recommended           Medium

 GTAB-140       Distinguish major axis marks from minor axis marks by weight and/or length                Recommended           Medium

 Usage Examples
 Example 77: Format light grey gridlines

 Example 78: Do not format heavy gridlines

 Rationale
 Featuring some gridlines is recognised best practice for graphs {R6}. However, some leading experts argue against overuse of
 gridlines and caution against the use of heavy weight lines, as these can interfere with the viewer’s perception and interpretation of the
 actual data {R7}.

                                                                                                                                   Page 62
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

5.4       Guidelines – Other Formatting Considerations
                                                                                                                                Evidence
 ID             Description                                                                               Conformance
                                                                                                                                 Rating
 GTAB-141       Do not feature watermarks or background images on the graph area                              Mandatory           Medium

 GTAB-142       Feature solid colours and avoid patterned colours for both background and
                                                                                                           Recommended            Medium
                foreground objects (Example 79)

 GTAB-143       Avoid any non-functional graphical elaboration that is not actual data or a feature        Recommended            Medium
                that directly supports the interpretation of the data (Example 80)
                Features that directly support the interpretation of the data include interpolation
                lines, axes, grids and focus

 GTAB-144       Do not force users to choose format styles each time they view the data                    Recommended              Low

 Usage Examples
 Example 79: Do not feature a colour gradient background or other pattern

 Example 80: Avoid unnecessary elaboration

 Rationale
 Text written on top of an image or watermark can be difficult to read, especially for users with reading difficulties (such as dyslexia)
 {R14}.
 Patterns can be problematic as well. Some hatching, that is stripy or ‘criss-crossed’ patterns, can create an unintended perception of
 movement that makes the graph difficult to read, as can colour gradients in the graph area {R5, R6}.

                                                                                                                                     Page 63
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

6         MULTIPLE DATA SERIES GUIDANCE DETAILS

6.1       Guidelines – Viewing Multiple Non-Overlaid Graphs
                                                                                                                     Evidence
    ID         Description                                                                             Conformance
                                                                                                                      Rating
    GTAB-145   Display multiple data series vertically stacked unless there is clinical reason to do   Recommended     High
               otherwise (Example 81)

    GTAB-146   Vertically align the left-hand axes of all the graphs (Example 81)                        Mandatory    Medium

    GTAB-147   Vertically align time intervals between data series that are being viewed                 Mandatory     High
               simultaneously (Example 81, Example 82)
               There may be exceptions in the case of magnification, but further risk mitigation
               would be required that is out-of-scope for the current guidance

    GTAB-148   Minimise the space between graphs, though allowing for the inclusion of header          Recommended     High
               labels (Example 81)

    GTAB-149   Where a convention exists, position sets of graphs in the appropriate order             Recommended     High
               (Example 81)
               For example, position temperature at the top

    GTAB-150   Where no convention exists, the position of graphs in the vertical stacking can be      Recommended    Medium
               determined by the order in which they are added to the view

    GTAB-151   The user should be able to change the order in which the graphs are stacked             Recommended     Low

    GTAB-152   Where the number of graphs exceeds the vertical space available on screen,                Mandatory     Low
               provide a suitable mechanism to move the viewing window up and down
               For example, using a scroll

    GTAB-153   Where there are graphs that have been chosen for viewing, but are not in view,            Mandatory     Low
               feature a suitable mechanism to communicate that there are further graphs not in
               view

                                                                                                                        Page 64
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Usage Examples
Example 81: Vertically stack graphs

                                                                            Page 65
                           Design Guidance – Displaying Graphs and Tables
                           Prepared by Microsoft, Version 2.0.0.0
                           Last modified on 12 November 2008

Example 82: Do not display vertically stacked graphs at different timescales

Rationale
User research showed that clinicians expected blood pressure data to be located next to pulse rate data. They felt that the two
measures were closely related and that this should be reflected in their on-screen positioning.

                                                                                                                                  Page 66
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

6.2      Guidelines – Overlaying Multiple Graphs
                                                                                                                            Evidence
 ID            Description                                                                             Conformance
                                                                                                                             Rating
 GTAB-154      Graphs may be overlaid under certain circumstances (Example 83)                          Recommended           Medium
               The circumstances are:
                If they share the same unit of measurement
                If there is a special convention (such as in acute care vital signs charts where
                 Blood Pressure and Pulse Rate share the same graph space)

 Usage Examples
 Example 83: Overlay pulse rate and blood pressure

 Rationale
 User research and reviews of existing use of paper charts shows that there is a convention to overlay some data series (especially
 within acute care). For example, in the majority of paper charts, blood pressure and pulse rate are overlaid. Clinicians have come to
 expect this and may feel that not overlaying some data series could hinder their interpretation of them.
 However, other research has shown that, without a good clinical reason to do so, overlaying data series on top of each other could be
 dangerous as the data points and interpolation can obstruct each other.

                                                                                                                                 Page 67
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

6.3      Guidelines – Special Considerations for Viewing Multiple
         Overlaid Graphs
                                                                                                                    Evidence
 ID            Description                                                                            Conformance
                                                                                                                     Rating
 GTAB-155      If two data series displayed in the same graph area are measured in different units,     Mandatory    Medium
               show both axes (Example 85)

 GTAB-156      If two axes are shown, label each axis (Example 85)                                      Mandatory     High

 GTAB-157      If two data series displayed in the same graph area are measured in different units      Mandatory    Medium
               and the axes gradation spacing is different, do not show horizontal gridlines

 GTAB-158      When multiple data series are displayed in the same graph area, label each data        Recommended     High
               series in an appropriate place (Example 84)
               Appropriate places are:
                At the end of the data series
                At the beginning of the data series
               If any labels overlap in either of these positions, display labels in a legend
               immediately adjacent to the graph area

 GTAB-159      Avoid distinguishing multiple data series displayed in the same graph area with        Recommended     Low
               varying line styles
               For example, lines styles using dashes or dots

 GTAB-160      When multiple data series are displayed in the same graph area, display the            Recommended     Low
               interpolation lines as semi-transparent (Example 84)

 GTAB-161      Avoid relying on the distinction between green and red when displaying multiple          Mandatory     High
               data series
               If employing these colours, use another characteristic to distinguish them (such as
               shape)

 GTAB-162      Where multiple data series are displayed in the same graph area, feature hollowed      Recommended     Low
               symbols, rather than the usual solid symbols (Example 84)
               An exception to this is blood pressure data where the systolic is linked to the
               diastolic pressure

 GTAB-163      Where data points become tightly packed, reduce their size. However, do not            Recommended     Low
               reduce them to a height that is the same as or less than the width of the
               interpolation line (Example 86)

 Usage Examples
 Example 84: Clearly overlay test results

                                                                                                                       Page 68
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 85: Show both axes when different data is overlaid

Example 86: Shrink the icons to allow tightly packed overlay

Rationale
Some perceptual psychology literature suggests that a good way to represent layers of data is to feature transparent objects that differ
in pattern or texture {R5}. However, Stephen Few, a recognised expert in data visualisation, recommends avoiding varying lines styles
unless no other attributes (such as colour) are available {R6}.
Shrinking the data points when they are tightly positioned is supported by studies in perception which suggest that reducing the
density of information increases the useful field of view, a concept which describes a human’s attention to objects within a ‘single
fixation’ {R5}.
Avoiding reliance on a green-red colour distinction is important as the most common form of colour blindness causes sufferers to see
these as the same colour.

                                                                                                                                  Page 69
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

7           INTERPOLATION GUIDANCE DETAILS

7.1         Guidelines – Use of Interpolation
                                                                                                                           Evidence
    ID            Description                                                                                Conformance
                                                                                                                            Rating
    GTAB-164      By default, with exceptions, provide interpolation between data points (Example 87)          Mandatory     High
                  Exceptions to this are:
                   Where the timing of the data is insufficiently specific for the scale (such as when
                    the data point relates to a day and time but gradations of less than a day are
                    shown)
                   Where data is known to be missing. In these cases, do not use interpolation to
                    cross a point where data is missing. Further mitigation would be required, such
                    as a message that data is known to be missing, but this is out of scope for the
                    current guidance

    GTAB-165      Allows users to switch interpolation lines off                                             Recommended    Medium

    GTAB-166      Interpolation should comprise straight lines between data points. By default, do not       Recommended     High
                  ‘smooth’ interpolation lines (Example 88)
                  A ‘smooth’ interpolation line is one that is curved in order to better display the data
                  pattern
                  Although there may be circumstances where the ability to smooth out the
                  interpolation can help clinicians to view the data patterns (such as for highly variable
                  blood pressure data) this should not be the default view
                  Data smoothing would require a carefully constructed algorithm in order to best
                  represent the data pattern, but this is out of the scope for the current guidance

    Usage Examples
    Example 87: Provide interpolation between data points

                                                                                                                              Page 70
                                Design Guidance – Displaying Graphs and Tables
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 12 November 2008

Example 88: Do not smooth interpolation lines

Rationale
User research has shown that clinicians understand the meaning of the interpolation between data points and they find it useful when
interpreting graphical data. They realise that the interpolation does not represent actual data, but warn that steps need to be taken to
ensure that the lines are not interpreted as such (for example, by ensuring that the data points are clearly visible).
Research showed that clinicians thought that smoothing interpolation lines would be misleading and could lead to clinicians seeing
peaks as being slightly higher than they should be.

                                                                                                                                  Page 71
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

7.2      Guidelines – Formatting of Interpolation
                                                                                                                     Evidence
 ID            Description                                                                             Conformance
                                                                                                                      Rating
 GTAB-167      Interpolation lines should be solid (Example 89)                                        Recommended    Medium

 GTAB-168      Interpolation lines should not obscure the data points (Example 90)                       Mandatory     High

 GTAB-169      Data value points should define the upper and lower points of the data sequence,          Mandatory     High
               not the interpolation lines
               Where interpolation lines connect a data point that is preceded by a lower value and
               followed by a lower value, the interpolation lines should not lie any higher than the
               upper edge of the data point symbol
               Where interpolation lines connect a data point that is preceded by a higher value
               and followed by a higher value, the interpolation lines should not lie any lower than
               the lower edge of the data point symbol

 GTAB-170      Interpolation lines should be thinner than the data points they connect (Example 92,      Mandatory    Medium
               Example 93)

 GTAB-171      Interpolation lines should be approximately half the height or diameter of the data     Recommended    Medium
               points they connect

 GTAB-172      Interpolation lines should be the same colour as the data points they connect             Mandatory    Medium
               (Example 91)

 GTAB-173      Interpolation lines should feature some anti-aliasing                                   Recommended     High

 Usage Examples
 Example 89: Make interpolation solid, but not obscuring the data points

 Example 90: Do not make interpolation lines thicker than the data points

                                                                                                                        Page 72
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 91: Do not display interpolation lines in a different colour than the data points

Example 92: Do not create artificial peaks with a thick interpolation line

Example 93: Feature interpolation lines that are sufficiently thin so they do not obstruct the data points

Rationale
User research has revealed that clinicians are concerned that interpolation lines could be confused with actual data. There is a greater
chance that this could happen if the reader cannot actually see the data points because the points are obscured by the interpolation
line.
Not only can thicker lines hide the data points, they can also create visual peaks that do not exist in the data, which could have serious
patient safety implications.

                                                                                                                                  Page 73
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

8           INDICATIVE RANGES GUIDANCE DETAILS

8.1         Guidelines – Displaying Indicative Ranges
                                                                                                                             Evidence
    ID            Description                                                                            Conformance
                                                                                                                              Rating
    GTAB-174      Display normal ranges, but only where appropriate ranges exist (Example 94)             Recommended            High

    GTAB-175      Display normal ranges consistently: either shade the out-of-range areas or shade          Mandatory          Medium
                  the in-range areas. Do not feature both styles in the same system (Example 95)

    GTAB-176      Where appropriate, display early warning scoring ranges graphically, but only in        Recommended          Medium
                  conjunction with a mechanism that displays the numerical scoring as well

    GTAB-177      Allow target ranges and critical thresholds to be displayed in addition to normal         Mandatory            High
                  ranges

    GTAB-178      Label indicative ranges with the population to which they refer (Example 94)              Mandatory            High

    GTAB-179      Ensure that indicative range labels do not obstruct any data                              Mandatory          Medium

    GTAB-180      Where appropriate, adjust normal ranges to suit the specific population                   Mandatory            High
                  For example, the normal range is different for neonates

    GTAB-181      Do not overlay multiple normal ranges on top of each other                                Mandatory          Medium

    GTAB-182      Feature normal ranges as areas rather than threshold lines                              Recommended          Medium

    GTAB-183      Feature normal range overlays in low-saturation colours (Example 95)                    Recommended          Medium

    GTAB-184      Normal range displays should not obscure any graph data                                   Mandatory            High
                  Graph data includes such items as data points, data value labels, gridlines or
                  interpolation lines

    GTAB-185      Feature the systolic and diastolic normal ranges in different shades of colour          Recommended            Low
                  (Example 95)

    Usage Examples
    Example 94: Display adult normal ranges, where appropriate

    In this illustration, both sets of measures have ranges (based upon a normal adult population). The ranges are displayed as yellow
    shading, although this could be reversed (see Example 95). The ranges are labelled and, in this case, the range parameters are
    displayed.

                                                                                                                                   Page 74
                                Design Guidance – Displaying Graphs and Tables
                                Prepared by Microsoft, Version 2.0.0.0
                                Last modified on 12 November 2008

Example 95: Display ranges consistently

In this example, the normal ranges are shown as the white area and the shaded areas represent out-of-range.
Employ either shading method to represent normal ranges or to represent abnormal ranges. The method to use may depend on
whether the values are more or less likely to fall within the normal range in the particular clinical setting. If the data is more likely to fall
within the normal range, there is a case for shading the out-of-range as the usual data points will then better contrast with a white
background.
However, do not mix the two methods in the same clinical setting (or clinical software) as swapping the meaning of the shading could
carry significant patient safety risks.

                                                                                                                                          Page 75
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

Rationale
The display of normal ranges plays a crucial role in the interpretation of clinical data (such as vital signs). On the one hand, they
highlight where the current data is indicating a problem with the patient. On the other hand, they can provide a useful reference to help
the clinician quickly perceive the values of the data points (for example, if the data appears a certain distance above a normal range,
the clinician can quickly understand the approximate values of the data).
Normal ranges typically comprise the upper and lower parameters of ‘normality’ for a given population, typically a healthy adult
population (that is, a range in which a reading does not by itself indicate a problem with the patient).
User research revealed that, despite the display of normal ranges being considered important, if not necessary, by clinicians, most felt
that the notion of what is ‘normal’ varied so much between populations and medical situations that displaying a fixed normal range
could be dangerous. For example, showing an eight-month baby’s blood pressure in relation to an adult normal range could lead the
clinician to conclude that the patient is healthy when in fact their signs should raise warnings.
For this reason, the majority of clinicians indicated that, in order to work safely, normal range markings on graphs should be adjusted
to the given population (for example, determined by age).
Coupled with displaying adjusted normal ranges is the requirement to clearly communicate the range that is being displayed. This is
critical as the research revealed that some clinicians often assume the normal range shown is for an adult and mentally adjusts it in
order to interpret the data. It would be dangerous if the clinician assumed that the range for an eight month child was, in fact, for an
adult and incorrectly compensated for this when interpreting the data.
The importance of displaying normal ranges on graphs has been reflected in work in other areas of healthcare, as in the case of the
Central Middlesex Hospital research {R13} that has resulted in the creation of a standardised paper observations chart that features
early warning scoring parameters overlaid on the graph areas.
An advantage of displaying normal ranges as areas rather than simply threshold lines is that it is easier to see the range as a whole
object. Also, shaded ranges are less likely to interfere with the display of single threshold lines. Single threshold lines can be added to
the graph by a clinician so that readings above (or below) the threshold value would trigger a call to the clinician from the nurse.
During the user research, clinicians were presented with the normal ranges as shaded areas and they immediately understood what
they were.
Ranges can be used as part of early warning scoring systems. The NICE guidelines on the Recognition of and response to acute
illness in adults in hospital {R1}, recommends the use of early warning scoring systems. The NICE guidance also discusses the risks
of not featuring such scoring systems to assist clinicians interpret observations data and to recognise the early signs of deterioration.

                                                                                                                                    Page 76
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

9           TABLES GUIDANCE DETAILS
    Tables are an important medium for displaying clinical data. They are not as effective as graphs at
    revealing trends – and can be off-putting to the reader, especially if large – but tables possess
    some unique benefits over graphs:
          They can hold many data cells
          They can allow numeric data to be extracted easily and accurately
          They can easily accommodate wide ranges of data
    Graphs emphasise the patterns and trends in data, but do not make the extraction of the values as
    easy as a table and cannot always easily present data with wide discrepancies of scale.
    This section outlines the key factors to consider when creating tables that are safe and easy to use.

9.1         Guidelines – Table Orientation
                                                                                                                           Evidence
    ID             Description                                                                               Conformance
                                                                                                                            Rating
    GTAB-186       Orient tables in a consistent manner, for a given data type and/or clinical setting or      Mandatory     High
                   procedure

    GTAB-187       Tables should follow a conventional orientation if one exists                               Mandatory     High

    GTAB-188       If a table is oriented with time ordered horizontally, by default the most recent data    Recommended     High
                   value must appear at the far right-hand side (that is, sorted from left-to-right) while
                   ensuring that the most recent values are visible by default (Example 96)

    GTAB-189       If a table is oriented with time ordered vertically, by default the most recent data      Recommended     High
                   value must appear at the top of the table (that is, sorted from bottom-to-top) while
                   ensuring that the most recent values are visible by default (Example 97)

    GTAB-190       Users must be able to re-sort data within the columns or rows                             Recommended     High

    GTAB-191       Users must be able to re-orient the table (that is, transpose the rows to columns and
                                                                                                             Recommended     High
                   vice versa)

    Usage Examples
    Example 96: Display the most recent data to the right of a horizontally oriented table

                                                                                                                              Page 77
                                 Design Guidance – Displaying Graphs and Tables
                                 Prepared by Microsoft, Version 2.0.0.0
                                 Last modified on 12 November 2008

Example 97: Tables with time running vertically should be ordered with the most recent reading at the top by default

Example 98: Do not sort date from top-to-bottom in a vertically oriented table by default

Rationale
Following research, this guidance concludes that there is no one way that clinicians must orient their data. Some clinicians expressed
a preference for viewing tables that had time running vertically down them, whereas others felt more comfortable with a horizontal time
axis.
Other studies have shown that there are benefits to either orientation, although certain actions are easier to do with one of the
orientations. For example, scanning through information for particular values is easier with time vertically oriented {R2, R6}, as is
interpreting trends from the data.
On the other hand, some clinicians feel that the progression of time is easier to understand when it is oriented horizontally, akin to the
graph’s x-axis. As BS 7581:1992 states, “Rows are easier to read than columns, but columns are easier to scan…The reader’s need
to scan tables should influence which information should be in rows and which in columns.” {R2}.
Therefore the current guidance is not mandating the use of one or other orientation. However, the default orientation of the table
should remain consistent for a given clinical situation or data type. For example, if blood tests in a clinical software programme are
displayed by default with a vertical time axis on one day, a vertical time axis should be the default on a later day, unless there is a
clinical reason to do otherwise.
The basic designs shown in this section have been tested by user research. The research demonstrated that clinicians found the
tables to be clear.

                                                                                                                                    Page 78
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

9.2      Guidelines – Table Formatting
                                                                                                                      Evidence
 ID            Description                                                                           Conformance
                                                                                                                       Rating
 GTAB-192      Feature light banding along the rows (Example 99)                                      Recommended       High

 GTAB-193      Do not feature heavy gridlines (Example 102)                                           Recommended       High

 GTAB-194      Round data displayed in table cells entries where it is not misleading to do so            Mandatory    Medium

 GTAB-195      If numeric entries are rounded, the table must communicate that the data is rounded        Mandatory    Medium
               and the extent to which it is rounded

 GTAB-196      If appropriate, allow users to read the full version of any rounded data                   Mandatory    Medium

 GTAB-197      Ensure that where there are multiple instance of the same date, or times within a      Recommended      Medium
               date, the first instance is more visually prominent than those following
               (Example 103)

 GTAB-198      Do not stretch tables to fill available space (this impedes horizontal scanning)       Recommended      Medium

 GTAB-199      Feature extra spacing every fifth row (this assists vertical scanning)                 Recommended      Medium

 GTAB-200      Use a constant horizontal spacing for numerals (this ensures vertical alignment)           Mandatory    Medium

 GTAB-201      Align the decimal marker for all numerals in a column                                      Mandatory    Medium

 GTAB-202      If some numbers in a column do not feature a decimal place, but others do, do not      Recommended       Low
               add an unnecessary decimal place but instead provide padding within cells to allow
               for decimals (Example 100)
               For example, appending ‘.0’ to a value is adding an unnecessary decimal place

 Usage Examples
 Example 99: Feature a light banding on the rows

 Example 100: Provide padding to allow for alignment with the decimal point (as shown with the red box)

                                                                                                                         Page 79
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 101: Allow clinicians to view the full number for a rounded value

Example 102: Do not feature heavy gridlines

Example 103: Ensure that the first instance of each set of dates is more prominent than those following

Rationale
Most of the guidelines featured in this section are based upon BS 7581:1992 {R2}, plus best practice in table design {R6}. The basic
elements of the guidance have been presented to clinicians; no problems have been found with the designs.

                                                                                                                               Page 80
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

9.3      Guidelines – Table Labelling
                                                                                                                      Evidence
 ID            Description                                                                              Conformance
                                                                                                                       Rating
 GTAB-203      Align column headings with their associated data (Example 104)                           Recommended    Medium

 GTAB-204      If column headings are centred, they should be visually aligned over the column of       Recommended    Medium
               data

 GTAB-205      As far as possible, word row titles so they are of similar length                        Recommended    Medium

 GTAB-206      Long row headings may be split into two or more lines, with the data aligning with       Recommended    Medium
               the bottom line (Example 105)

 GTAB-207      Avoid a heading that is significantly wider than the data it is indicating               Recommended    Medium
               (Example 106)

 GTAB-208      Keep column headings brief                                                               Recommended    Medium

 GTAB-209      Clearly link column headings to their columns                                              Mandatory    Medium

 GTAB-210      Top align column headings                                                                Recommended    Medium

 GTAB-211      In wide tables, row headings may be provided at both ends of the row                     Recommended    Medium

 GTAB-212      Allow sufficient space between columns to clearly separate them but no more              Recommended    Medium
               (excessive space impedes horizontal scanning) (Example 104, Example 106)

 GTAB-213      Do not display column headings vertically                                                  Mandatory    Medium

 GTAB-214      Column headings may be displayed at 45º to the column, if the heading is too long        Recommended    Medium
               to display horizontally and cannot be wrapped adequately

 GTAB-215      Provide special formatting if column headings are displayed at 45º so that it is clear   Recommended    Medium
               which heading applies to which column (Example 108)

 GTAB-216      Do not alternate between the directions of the 45º oriented text in the same table       Recommended     Low
               That is, do not direct one column heading to the left and another to the right in the
               same table

 GTAB-217      Always display both column and row headings                                                Mandatory     High

 GTAB-218      Ensure that the column and row headings are always visible                                 Mandatory    Medium
               This may involve ‘freezing’ the column and/or row headings

 Usage Examples
 Example 104: Align column headings with their associated data

                                                                                                                         Page 81
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

Example 105: If a row heading is wrapped, align the data with the bottom line

Example 106: Avoid excessive spacing between columns

Example 107: Do not use diagonal formatting without linking the heading to the column

                                                                                        Page 82
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

Example 108: Feature diagonal labelling with light gridlines to associate the heading with the column

   Note
   In this example, the display order of the rows has been changed from the default order (to display most recent at the top of the
   table).

Rationale
Most of the guidelines featured in this section are based upon BS 7581:1992 {R2}, plus best practice in table design {R6}. The basic
elements of the preferred designs for the guidance have been presented to clinicians; no problems have been found with the designs.

                                                                                                                                Page 83
                            Design Guidance – Displaying Graphs and Tables
                            Prepared by Microsoft, Version 2.0.0.0
                            Last modified on 12 November 2008

10        CONTEXTUAL INFORMATION GUIDANCE DETAILS

10.1 Guidelines – Accessing Contextual Data
                                                                                                                               Evidence
 ID             Description                                                                               Conformance
                                                                                                                                Rating
 GTAB-219       Provide contextual information about the way in which the reading was taken                   Mandatory            High
                For example, ‘manual’ or ‘machine’ reading

 GTAB-220       Make visible the contextual information about how the reading was taken by default            Mandatory            High

 GTAB-221       Allow the user to interrogate the system to access further contextual information             Mandatory            High

 Rationale
 From research, it is clear that contextual information affects the way in which the data can be interpreted. It is important that the graph
 interface provides sufficient labelling and/or access to further information (such as the method of measurement or the environment in
 which the reading was taken).

                                                                                                                                     Page 84
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

11        DOCUMENT INFORMATION

11.1 Terms and Abbreviations
 Abbreviation                        Definition
 A&E                                 Accident and Emergency

 BSI                                 British Standards Institution

 ISO                                 International Standards Organization

 O2                                  Oxygen

 PC                                  Personal Computer

 RNIB                                Royal National Institute of Blind People

 SNOMED-CT                           Systematised Nomenclature of Medicine-Clinical Terms

 UI                                  User Interface

 WAI                                 Web Availability Initiative

 W3C                                 World Wide Web Consortium
 Table 14: Terms and Abbreviations

11.2 Definitions
 Term                                 Definition
 Axes                                 The orthogonal (perpendicular) planes that represent data continuums, such as ‘pulse rate’. On a
                                      two dimensional graph area, there will be a minimum of two axes, the x- and y-axis, one of those
                                      being ‘time’. In special cases of overlaid data, there may be three axes in the same graph area.

 Axis marking                         Markings of data increments along the axes.

 Axis range                           The range of potential values shown in the graph along a single axis in a view.

 Critical range or threshold          A range, or a point above or below a threshold, associated with a negative health outcome that is
                                      formulated by the care giver when planning and delivering the patient’s care. Typically, if data
                                      values fall within such a range (or above or below such a threshold) warnings should be raised,
                                      such as a nurse contacting the doctor. This type of range or threshold is patient-specific rather than
                                      population-specific.

 Data point                           A visual representation of a data value.

 Data series                          A set of data of a single measurement type, such as ‘pulse rate’ or ‘body temperature’.

 Data unit                            The measurement units in which a data series is being expressed, such as ‘beats per minute’.

 Graph area                           The two-dimensional blank space in which data points may be displayed.

 Gridlines                            Horizontal and/or vertical lines shown on the graph area aligned with regular increments in the data.
                                      The purpose of these lines is to help the viewer identify the values of the data points.

 Indicative range                     Same as ‘Reference range’.

 Interpolation                        Lines added to the graph that sequentially join up the data points. Interpolation assists the
                                      perception of the data values and the patterns in which they fall.

 Logarithmic scaling                  Scaling where a series of numbers are produced by increasing the power of a base number by one
                                      for each sequential interval.

                                                                                                                                      Page 85
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008

 Term                              Definition
 Normal range                      A clinically relevant range for a data series, defined by an upper and a lower parameter, that
                                   expresses the normal values expected for a given healthy population, in isolation to other data
                                   series. Values that fall outside of a normal range may potentially indicate a health problem and a
                                   cause for concern. Which normal range applies to a given patient may depend upon certain aspects
                                   of their individual demography. For example, the age or gender of the patient may determine which
                                   normal range applies to them at a given point in time.

 Reference range                   A standard range that helps the viewer of a graph understand the absolute values (or at least the
                                   significance) of the data points by locating their position in relation to the range. A reference range
                                   may comprise a normal range.

 Scale                             The relationship between the physical distances displayed in the graph and the relationships
                                   between the underlying data values. For example, an hour may be represented by a distance of
                                   10 mm running from left-to-right along the (horizontal) x-axis plane, while a rise of 10 mmHg of
                                   systolic pressure may be represented by 5 mm running from bottom-to-top along the (vertical)
                                   y-axis plane.
                                   References to ‘scale’ include both the x-axis and y-axis scales, as it is often the ratio between these
                                   two that is important to the clinician’s interpretation of the data.

 Target range or threshold         A range, or a point above or below a threshold, associated with a positive health outcome that is
                                   formulated by the care giver when planning and delivering the patient’s care. Unlike normal ranges,
                                   target ranges and thresholds are patient-specific, rather than population-specific.

 X-axis                            The x-axis marks the horizontal scale and is orthogonal to the y-axis.

 Y-axis                            The y-axis marks the vertical scale and is orthogonal to the x-axis.
 Table 15: Definitions

11.3 Nomenclature
 This section shows how to interpret the different styles used in this document to denote various
 types of information.

11.3.1        Body Text
 Text                                                                 Style
 Code                                                                 Monospace

 Script

 Other markup languages

 Interface dialog names                                               Bold

 Field names

 Controls

 Folder names                                                         Title Case

 File names
 Table 16: Body Text Styles

                                                                                                                                    Page 86
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

11.3.2       Cross References
 Reference                                                               Style
 Current document – sections                                             Section number only

 Current document – figures/tables                                       Caption number only

 Other project documents                                                 Italics and possibly a footnote

 Publicly available documents                                            Italics with a footnote

 External Web-based content                                              Italics and a hyperlinked footnote
 Table 17: Cross Reference Styles

11.4 References
 Reference Document                                                                                                         Version
 R1.              National Institute for Health and Clinical Excellence: Acutely ill patients in hospital: Recognition of   July 2007
                  and response to acute illness in adults in hospital:
                  http://www.nice.org.uk/CG50

 R2.              British Standards Institute: Guide to presentation of tables and graphs: British Standard BS 7581:
                  1992:
                  http://www.bsigroup.com/en/Shop/Publication-Detail/?pid=000000000000285987

 R3.              Design Guidance – Date Display                                                                            2.0.0.0

 R4.              Design Guidance – Time Display                                                                            2.0.0.0

 R5.              Ware, Colin: Information Visualization. Perception for design (2004)                                      Second Edition

 R6.              Few, Stephen: Show Me the Numbers. Designing Tables and Graphs to Enlighten (2004)                        First Edition

 R7.              Tufte, Edward: The Visual display of quantitative information (2001)                                      Second Edition

 R8.              Douglas, G, Nicol, F and Robertson, C (editors): Macleod’s clinical examination(2005)                     Eleventh Edition

 R9.              Wright, P, Jansen, C and Wyatt, J C: How to limit clinical errors in interpretation of data: Lancet
                  1998; 352: 1539-43:
                  http://www.thelancet.com/journals/lancet/article/PIIS0140673698083081/abstract

 R10.             Wyatt, J and Wright, P: Design should help use of patients’ data: Lancet 1998; 352: 1375-78:
                  http://www.thelancet.com/journals/lancet/article/PIIS0140673697083062/abstract

 R11.             Nygren, E, Wyatt, J C and Wright, P: Helping clinicians to find data and avoid delays: Lancet 1998;
                  352: 1462-66:
                  http://www.thelancet.com/journals/lancet/article/PIIS0140673697083074/abstract

 R12.             Cartmill, R S V and Thornton, J G: Effect of presentation of partogram information on obstetric
                  decision-making: Lancet 1992; 339: 1520-22

 R13.             Chatterjee, M T, Moon, J C, Murphy, R and McCrea, D: The “OBS” chart: an evidence based
                  approach to redesign of the patient observation chart in a district general hospital setting:
                  Postgraduate Medical Journal 2005; 81: 662-666:
                  http://pmj.bmj.com/cgi/content/abstract/81/960/663

 R14.             Royal National Institute for Blind People: See it Right guidelines:
                  http://www.rnib.org.uk/xpedio/groups/public/documents/publicwebsite/public_seeitright.hcsp

 R15.             British Standards Institute: Ergonomic requirements for office work with visual display terminals
                  (VDTs) Part 12: Presentation of information: BS EN ISO 9241-12:1999:
                  http://www.bsigroup.com/en/Shop/Publication-Detail/?pid=000000000019974944

 R16.             Bridger, R S: Introduction to Ergonomics (2003)                                                           Second Edition

                                                                                                                                        Page 87
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008

Reference Document                                                                                                Version
R17.             Healy, C G, Booth, K S, Enns, J T: High-Speed Visual Estimation using Preattentive Processing:
                 ACM Transactions on Computer-Human Interaction (TOCHI), Vol 3, Issue 2 (1996)

R18.             Tay, S K, Yong, T T: Visual Effect of Partogram Designs on the Management and Outcome of
                 Labour: Australian and New Zealand Journal of Obstetrics and Gynaecology, Vol 36, Issue 4
                 (1996):
                 http://www3.interscience.wiley.com/journal/119831960/abstract

R19.             Chapanis, A: Man-Machine Engineering, London: Tavistock Publications, 1965

R20.             Berlin, B, Kay, P: Basic Color Terms, their Universality and Evolution, 1969

R21.             World Wide Web Consortium (W3C) Web Accessibility Initiative (WAI) guidelines:
                 http://www.w3.org/WAI/

R22.             Tufte, Edward: Beautiful Evidence, (2006)
Table 18: References

                                                                                                                            Page 88
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

APPENDIX A                                HIGH-LEVEL TASK SCENARIOS
 The following scenarios were developed in order to represent how graphs and tables could be used
 within a clinical setting. They were originally written in collaboration with the clinical specific
 audience and then validated with a wider set of clinicians. Designs were built around these
 scenarios and these led, in part, to the creation of the guidance.

PART I             Emergency Department Assessment
 Emergency Department Assessment
 A nurse is performing an initial assessment on a patient who has been brought in by ambulance into the Accident and Emergency
 (A&E) ward complaining of chest pains.
 The nurse reads the set of observations recorded by paramedics and then records the patient’s vital signs onto their chart.
 Comparing the two charts, the nurse notices that the patient’s blood pressure has dropped significantly, the respiratory rate has
 increased slightly and oxygen, pulse and temperature have remained constant.

 High Level Tasks                 Read the current data values
                                  Check the provenance of the data values
                                  Compare the current data values with past readings
                                  Check for significant interactions between data series

 Potential Risks                 High:
                                  Nurse fails to either view the previous (ambulance) data or fails to recognise when it was taken
                                  Nurse fails to identify the drop in blood pressure as being significant
                                      They fail to see how much it has dropped
                                      They fail to see how quickly it has dropped
                                 Medium:
                                  Nurse fails to see the drop in blood pressure in the context of the oxygen, pulse and temperature
                                   remaining constant
                                 Low:
                                  Nurse fails to see that the respiratory rate has increased slightly
                                  Nurse does not correctly read the absolute values of the blood pressure
                                  Nurse does not correctly read the absolute values of the respiratory rate, oxygen, pulse and
                                   temperature.
                                  Nurse does not factor in that the differences in readings may be fully or partially accounted for by
                                   the change in settings in which the readings were taken
                                 Possible consequence of risks: Delayed diagnosis or understanding of problem

 Key Feature Areas               Most Significant:
                                  Intuitive and appropriate scaling
                                  Viewing trends and interactions, including interpolation
                                 Quite Significant:
                                  Simultaneous views of multiple data series
                                  Clear and appropriate axes
                                 Reasonably Significant:
                                  Access to and display of supporting contextual data
                                  Support for baseline deviation calculations
                                 Basic Practice:
                                  Clear presentation of data values and units
                                  Appropriate layout, density and formatting of graph spaces, values and text

                                                                                                                                     Page 89
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

PART II            Intensive Care Unit Monitoring
 Intensive Care Unit Monitoring
 A paediatrics consultant is called to see a baby with meningitis who is not passing urine.
 On the way to the baby, the consultant reads a summary of the patient’s history. They then view the chart and see, among other
 observations, that the baby’s blood pressure is high while the oxygen saturations are low and the pulse has been rising. The baby’s
 high temperature also indicates pyrexia.
 The consultant suspects that the baby is fluid overloaded. They put the baby onto a ventilator and prescribes Forusemide, and then
 monitors the baby at regular intervals to check the baby’s progress.

 High Level Tasks                 Read the current data values
                                  Check if the current data values fail to exceed or fall below a threshold
                                  Check for significant patterns over time in a series of data values
                                  Check for significant interactions between data series

 Potential Risks                 High:
                                  Consultant fails to see the current configuration of the vital signs (for example, high, low, rising)
                                  Consultant fails to understand the current configuration of the vital signs in relation to the patient’s
                                   usual levels
                                 Medium:
                                  Consultant fails to identify the rise in blood pressure and pulse as significant:
                                      Fails to see how much they had risen
                                      Fails to see how quickly they had risen
                                  Consultant fails to identify the drop in oxygen saturations as significant:
                                      Fails to see how much they had dropped
                                      Fails to see how quickly they had dropped
                                 Possible consequence of risks: Incorrect treatment

 Key Feature Areas               Most Significant:
                                  Simultaneous views of multiple data series
                                  Intuitive and appropriate scaling
                                  Viewing data values in relation to normal ranges, targets and thresholds
                                 Quite Significant:
                                  Clear and appropriate axes
                                  Viewing trends and interactions, including interpolation
                                  Support for baseline deviation calculations
                                 Reasonably Significant:
                                  Clear presentation of data values and units
                                 Basic Practice:
                                  Appropriate layout, density and formatting of graph spaces, values and text

                                                                                                                                    Page 90
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

PART III           Renal Outpatients Unit
 Renal Outpatients Unit
 A doctor working in a renal outpatients unit is attending a patient with kidney disease who has been taking Irbesartan recently to
 reduce blood pressure.
 The doctor views the patient’s blood pressure graph for the last couple of years, which suggests the patient has not been taking the
 medicine.

 High Level Tasks                 Read the current data values
                                  Compare the current data values with past readings
                                  Check if the current data values fail to exceed or fall below a threshold
                                  Check for significant patterns over time in a series of data values

 Potential Risks                 High:
                                  Doctor fails to recognise that the data is now showing a new trend:
                                      Fails to see that trend
                                  Doctor fails to recognise the previous trend
                                  Doctor fails to recognise the differences between the two trends
                                  Doctor fails to understand that the change in trend is significant
                                 Medium:
                                  Doctor fails to recognise where the patient’s current blood pressure readings are in relation to the
                                   target range
                                 Low:
                                  Doctor fails to accurately read the patient’s current blood pressure reading
                                 Possible consequence of risks: Incorrect treatment

 Key Feature Areas               Most Significant:
                                  Viewing trends and interactions, including interpolation
                                  Clear and appropriate axes
                                 Quite Significant:
                                  Viewing data values in relation to normal ranges, targets and thresholds
                                  Intuitive and appropriate scaling
                                 Reasonably Significant:
                                  Support for baseline deviation calculations
                                 Basic Practice:
                                  Clear presentation of data values and units
                                  Appropriate layout, density and formatting of graph spaces, values and text

                                                                                                                                  Page 91
                              Design Guidance – Displaying Graphs and Tables
                              Prepared by Microsoft, Version 2.0.0.0
                              Last modified on 12 November 2008

PART IV            Inpatient Monitoring
 Inpatient Monitoring
 Variation 1:
 A nurse has been called to see an elderly inpatient who is very drowsy. The nurse views the patient’s chart and sees that the patient’s
 blood pressure has increased dramatically since the last set of readings, whereas their oxygen saturations have fallen.
 The nurse suspects a possible intracranial bleed.
 Variation 2:
 An inpatient on a ward is complaining of a severe headache and nausea and the nurse increases the observation schedule from 4
 hourly to every 15 minutes.
 On the second reading, the nurse finds that the blood pressure is increasing with an increased pulse rate and informs the doctor who
 then reviews the last day’s observations with the current ones.

 High Level Tasks                 Read the current data values
                                  Compare the current data values with past readings
                                  Check if the current data values fail to exceed or fall below a threshold
                                  Check for significant patterns over time in a series of data values
                                  Check for significant interactions between data series

 Potential Risks                 High:
                                  Nurse fails to see the increase in blood pressure
                                  Nurse fails to see the drop in oxygen saturations
                                  Nurse fails to see the rise in blood pressure and drop in oxygen saturations as significant:
                                      Fails to see how much the readings have risen/dropped
                                      Fails to see how quickly the readings have risen/dropped
                                  Patient fails to understand the new trend in their blood pressure readings
                                 Medium:
                                  Nurse fails to see the changes in blood pressure and oxygen saturations in relation to each other
                                 Possible consequence of risks: Delayed diagnosis/ understanding of problem

 Key Feature Areas               Most Significant:
                                  Viewing trends and interactions, including interpolation
                                  Simultaneous views of multiple data series
                                  Intuitive and appropriate scaling
                                 Quite Significant:
                                  Clear and appropriate axes
                                 Reasonably Significant:
                                  Support for baseline deviation calculations
                                 Basic Practice:
                                  Clear presentation of data values and units
                                  Appropriate layout, density and formatting of graph spaces, values and text

                                                                                                                                  Page 92
                             Design Guidance – Displaying Graphs and Tables
                             Prepared by Microsoft, Version 2.0.0.0
                             Last modified on 12 November 2008

PART V              Hypertension Clinic
 Hypertension Clinic
 A doctor is seeing a patient who is being treated for hypertension. The doctor checks the patient’s blood pressure and look at their
 readings, which have been taken approximately every three months over the past three years.
 For the last six months the patient has been taking a new regime of anti-hypertensive drugs.
 The doctor checks that the patient’s blood pressure is still within the target range, which it is, and that it is stable.

 High Level Tasks                   Read the current data values
                                    Check if the current data values fail to exceed or fall below a threshold
                                    Check for significant patterns over time in a series of data values

 Potential Risks                   High:
                                    Doctor fails to see that the blood pressure has stabilised
                                    Doctor fails to see that the patient’s blood pressure readings are in the target range
                                   Medium:
                                    Patient fails to understand the trend in their blood pressure readings
                                   Possible consequence of risks: Incorrect treatment

 Key Feature Areas                 Most Significant:
                                    Viewing trends and interactions, including interpolation
                                    Viewing data values in relation to normal ranges, targets and thresholds
                                   Quite Significant:
                                    Intuitive and appropriate scaling
                                    Clear and appropriate axes
                                   Reasonably Significant:
                                    Clear presentation of data values and units
                                   Basic Practice:
                                    Appropriate layout, density and formatting of graph spaces, values and text

                                                                                                                                  Page 93
                               Design Guidance – Displaying Graphs and Tables
                               Prepared by Microsoft, Version 2.0.0.0
                               Last modified on 12 November 2008
