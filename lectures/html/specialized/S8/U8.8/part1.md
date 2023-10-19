---
title: 'specialized>S8>U8.8>part1'
separator: <!--s-->
verticalSeparator: <!--v-->
theme: moon
revealOptions:
    transition: 'convex'
    backgroundTransition: 'fade'
    viewDistance: 5
    center: false
    overview: true
    touch: true
    progress: true
    controls: true
    controlsTutorial: true
    controlsLayout: 'bottom-right'
    help: true
    mouseWheel: true
    slideNumber: 'c/t'
    autoSlide: 15000
    width: '102%'
    height: '102%'
    margin: 0
    minScale: 1.000000e-01
    maxScale: 3
    display: 'block'
    transitionSpeed: 'default'
---
___
## Packaging Line and - Process Optimisation - A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? What is efficiency? • Efficiency is the quality of being efficient, meaning that it produces the expected results without waste?
### undefined author
___
    version: production (0.331)
    date: January 03, 2021
    content: 90 slides
    class: specialized>S8>U8.8>part1
    title: Packaging Line and - Process Optimisation - A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? What is efficiency? • Efficiency is the quality of being efficient, meaning that it produces the expected results without waste?
    source: Specialized_Unit_8_8_Process_Optimization_Hayert.pptx
    hash: b2c49c3295f4ec31394effd742a84441
    contact: olivier.vitrac@agroparistech.fr
note: ##### [16:14:35 - 03/01/2021]olivi@LX-Olivier2020> pptx2reveal_v2 with the following parameters: 
 |   **parameter**  | **value**  |
 | --------------: | -------- |
|   `wwwroot`:   |   ` /home/olivi/Bulk/fitness2020/sandbox/www20201221`   |
|   `wwwrel`:   |   ` lectures/html/specialized/S8/U8.8`   |
|   `wwwlib`:   |   ` lectures/src`   |
|   `pptxfolder`:   |   ` /home/olivi/Bulk/fitness2020/download20201123/fItNeSs _ sPeCiAlIzEd tRaInInG MoDuLeS/SeSsIoN 8 _ FoRmInG, fIlLiNg aNd sEaLiNg pRoCeSsEs/uNiT 8.8 PrOcEsS OpTiMiZaTiOn`   |
|   `pptx`:   |   ` Specialized_Unit_8_8_Process_Optimization_Hayert.pptx`   |
|   `imfolder`:   |   ` src_part1`   |
|   `imsourcefolder`:   |   ` `   |
|   `impat`:   |   ` Slide*.jpg`   |
|   `svgpat`:   |   ` Slide*.svg`   |
|   `author`:   |   ` undefined author`   |
|   `contact`:   |   ` olivier.vitrac@agroparistech.fr`   |
|   `YAMLtitle`:   |   ` specialized>S8>U8.8>part1`   |
|   `title`:   |   ` Packaging Line and - Process Optimisation - A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? What is efficiency? • Efficiency is the quality of being efficient, meaning that it produces the expected results without waste?`   |
 | `vrsn`: |   ` 0.331`   |
|   `mdfile`:   |   ` part1.md`   |
|   `projectname`:   |   ` part1`   |
|   `theme`:   |   ` moon`   |
|   `resize`:   |   ` 1200x900`   |
 | `initialscale`: |   ` 0.8`   |
 | `maximumscale`: |   ` 2`   |
|   `userscalable`:   |   ` yes`   |
|   `headingshift`:   |   ` `   |
|   `headingshiftnotes`:   |   ` ##`   |
 | `fontsize`: |   ` 0.7`   |
|   `hash`:   |   ` b2c49c3295f4ec31394effd742a84441`   |
 | `maxtitle`: |   ` 120`   |
 | `maxcontentslide`: |   ` 12`   |
|   `favicon`:   |   ` ~/Bulk/fitness2019/template/favicon/favicon.ico`   |
|   `mainindex`:   |   ` lectures/html/index.html`   |
|   `dependencymain`:   |   ` index.html`   |
|   `imformatpreferred`:   |   ` svg`   |
|   `svgmaxsize`:   |   ` 1200 KB`   |
|   `pdf`:   |   ` Specialized_Unit_8_8_Process_Optimization_Hayert.pdf`   |
<!--v-->___
> this lecture
___
# Fitness lecture - $2020/12/21$ (v0.33)
## Specialized modules
###  8. Forming, filling and sealing processes
####  8.8 Process optimization
* part 1/1
___
> previous lecture
___
####  8.7 Surface treatments and coatings

> *  [part 1/1](./../../../../../lectures/html/specialized/S8/U8.7/part1.html)
___


---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT
---
*  [1/90] [Slide 01/90](#/1)
*  [2/90] [Packaging line and - process optimisation](#/2)
*  [3/90] [What is efficiency?](#/3)
*  [4/90] [Efficiency is calculated based on the critical machine on the line.](#/4)
*  [5/90] [Programme](#/5)
*  [6/90] [What is a line balance optimisation?](#/6)
*  [7/90] [Line balance optimisation is applicable on any automated, multi-machine, production line where equipment speeds can be [...]](#/7)
*  [8/90] [V-graph theory](#/8)
*  [9/90] [How to define core machine?](#/9)
*  [10/90] [V-graph characteristics](#/10)
*  [11/90] [Example: capacities / mer](#/11)
*  [12/90] [Example of v-graph: returnable line](#/12)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [13/90] [L](#/13)
*  [14/90] [L](#/14)
*  [15/90] [L](#/15)
*  [16/90] [L](#/16)
*  [17/90] [L](#/17)
*  [18/90] [L](#/18)
*  [19/90] [L](#/19)
*  [20/90] [L](#/20)
*  [21/90] [L](#/21)
*  [22/90] [L](#/22)
*  [23/90] [L](#/23)
*  [24/90] [L](#/24)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [25/90] [L](#/25)
*  [26/90] [L](#/26)
*  [27/90] [L](#/27)
*  [28/90] [L](#/28)
*  [29/90] [L](#/29)
*  [30/90] [L](#/30)
*  [31/90] [L](#/31)
*  [32/90] [L](#/32)
*  [33/90] [L](#/33)
*  [34/90] [Buffer time: tacc = l/v 100% - l/v chain](#/34)
*  [35/90] [Important](#/35)
*  [36/90] [Please consider](#/36)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [37/90] [Buffer](#/37)
*  [38/90] [* crate buffers](#/38)
*  [39/90] [L](#/39)
*  [40/90] [L](#/40)
*  [41/90] [L](#/41)
*  [42/90] [L](#/42)
*  [43/90] [L](#/43)
*  [44/90] [L](#/44)
*  [45/90] [L](#/45)
*  [46/90] [L](#/46)
*  [47/90] [L](#/47)
*  [48/90] [L](#/48)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [49/90] [L](#/49)
*  [50/90] [L](#/50)
*  [51/90] [L](#/51)
*  [52/90] [L](#/52)
*  [53/90] [L](#/53)
*  [54/90] [L](#/54)
*  [55/90] [L](#/55)
*  [56/90] [L](#/56)
*  [57/90] [L](#/57)
*  [58/90] [L](#/58)
*  [59/90] [L](#/59)
*  [60/90] [L](#/60)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [61/90] [Influences on - line balance](#/61)
*  [62/90] [How to determine and obtain - line balance?](#/62)
*  [63/90] [2) mean effective rate (mer)](#/63)
*  [64/90] [3) relate failure behavior and buffer characteristics](#/64)
*  [65/90] [What can you do?](#/65)
*  [66/90] [Future developments](#/66)
*  [67/90] [Line performance: opi definition](#/67)
*  [68/90] [Objective of production](#/68)
*  [69/90] [Start up losses - losses during production](#/69)
*  [70/90] [Is the line available to run?](#/70)
*  [71/90] [Elements of opi - 2](#/71)
*  [72/90] [Slide 72/90](#/72)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [73/90] [Maintenance](#/73)
*  [74/90] [How to - measure the opi?](#/74)
*  [75/90] [How to - measure the opi?](#/75)
*  [76/90] [Basic machine status](#/76)
*  [77/90] [How to - measure the opi?](#/77)
*  [78/90] [Pasteuriser](#/78)
*  [79/90] [How to - measure the opi?](#/79)
*  [80/90] [Basic machine status](#/80)
*  [81/90] [Manned time](#/81)
*  [82/90] [Opi = b/a  c/b  d/c = d/a](#/82)
*  [83/90] [Slide 83/90](#/83)
*  [84/90] [Opi registration at the machine](#/84)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [85/90] [Slide 85/90](#/85)
*  [86/90] [What if...](#/86)
*  [87/90] [3. preventive maintenance is executed on - saturday during a 3-shift operation (only technicians at site)?](#/87)
*  [88/90] [Summary](#/88)
*  [89/90] [Slide 89/90](#/89)
*  [90/90] [Slide 90/90](#/90)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--s-->
# slide 01/90
![Slide1.svg](./src_part1/Slide1.svg  "slide 1 of 90") 
note: 

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 01/90        |     124557     |          0           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Packaging Line and - Process Optimisation
![Slide2.svg](./src_part1/Slide2.svg  "slide 2 of 90") 
note: ### Packaging Line and - Process Optimisation
### A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? What is efficiency? • Efficiency is the quality of being efficient, meaning that it produces the expected results without waste?

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 02/90        |     124560     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# What is efficiency?
![Slide3.svg](./src_part1/Slide3.svg  "slide 3 of 90") 
note: ### What is efficiency?
### Efficiency is the quality of being efficient, meaning that it produces the expected results without waste? Efficiency, as applied to packaging lines: percentage of what should have been produced based on standard line production rate and the number of production hours allowed.

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 03/90        |     124564     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Efficiency is calculated based on the critical machine on the line.
![Slide4.svg](./src_part1/Slide4.svg  "slide 4 of 90") 
note: ### Efficiency is calculated based on the critical machine on the line. Large lines are designed based on a “V” graph, where the critical machine sits at the bottom of the “V”. Accumulation is a duration for which a machine can keep running even though a upstream or downstream machine is stopped. Accumulation is achieved through accumulators (such as mass conveying, Sidel AQ-max table, Hartness Dynac or others) Rectangle 2 Ensuring efficiency

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 04/90        |     124568     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Programme
![Slide5.svg](./src_part1/Slide5.svg  "slide 5 of 90") 

note: Operational Performance Indicator Explain programme: Definition of line balance Some theory around the V-graph Internal and external parameters which influence line balance Last: simple approach to check your line on balance and to improve.

### Programme
* What is Line Balance Optimisation (LBO)? V-graph theory How to determine and obtain - Line Balance? How to evaluate performance?

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 05/90        |     124572     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# What is a line balance optimisation?
![Slide6.svg](./src_part1/Slide6.svg  "slide 6 of 90") 

note: Operational Performance Indicator Start with first text block Discussion: what does line balance mean to you?

### What is a line balance optimisation?
* Packaging lines are designed around a core machine, with the objective to minimize stops on this machine and so optimize the line performance through the effective use of automation and control philosophies Line Balance means...
* High line efficiency Buffers deal with machine failures Fast recovery and return to “equilibrium” All machines keep on running - Hardly any machine interactions...

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 06/90        |     124576     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Line balance optimisation is applicable on any automated, multi-machine, production line where equipment speeds can be [...]
![Slide7.svg](./src_part1/Slide7.svg  "slide 7 of 90") 
note: ### Line balance optimisation is applicable on any automated, multi-machine, production line where equipment speeds can be varied and spare capacity exists within conveyor / transport system 3 basic rules to follow when considering Line Control:
Maintain the Critical Machine (Core Machine) in a running state, ideally at its optimum speed If upstream or downstream equipment fails, maintain the Critical machine in a running state for as long as possible If the - Critical Machine has stopped, restart it as quickly as possible

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 07/90        |     124581     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# V-graph theory
![Slide8.svg](./src_part1/Slide8.svg  "slide 8 of 90") 

note: Operational Performance Indicator Explain general concept of V-graph

### V-graph theory
* Production lines are regularly designed and setup by using the V-graph theory where: - Line = system of machines and buffers - Critical Machine = Core Machine - Buffer strategy = Buffers &amp; Overcapacities
* Capacity
* Machine

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 08/90        |     124585     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to define core machine?
![Slide9.svg](./src_part1/Slide9.svg  "slide 9 of 90") 

note: Operational Performance Indicator Core machine: in most industries this is the weakest link of the chain of machines. For Heineken different. Explain why pasteuriser is not oversized in relation filler

### How to define core machine?
* Example Production line: generic bottling line Filler is core machine for technological reasons ! Pasteuriser + filler = block system. No overcapacity of pasteuriser, most reliable machine.
* Depalletise
* Unpack
Wash
Fill
Inspect
Pasteurise
Inspect
Dating
Crate wash
Pack AutoShape 24 Palletise
Inspect
Returned bottles - Beer Pallets
Crowns
Labelling
Inspect
Inspect EBI
Crate Mag.
Crates
Pall Insp
Pall Mag
Crown
Labels

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 09/90        |     124599     |          26           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# V-graph characteristics
![Slide10.svg](./src_part1/Slide10.svg  "slide 10 of 90") 

note: Operational Performance Indicator What is more or less the ideal condition of the line?

### V-graph characteristics
* What you should see : conveyors before filler should be almost full conveyors after pasteurizer should be almost empty

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 10/90        |     124676     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Example: capacities / MER
![Slide11.svg](./src_part1/Slide11.svg  "slide 11 of 90") 

note: Operational Performance Indicator Example of overcapacities of packaging equipment Introduce the concept of MER= Mean Effective Rate

### Example: capacities / MER
* M.E.R. = Mean Effective Rate M.E.R. = Op. Capacity x Mach. Efficiency

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 11/90        |     124680     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Example of V-graph: returnable line
![Slide12.svg](./src_part1/Slide12.svg  "slide 12 of 90") 

note: Operational Performance Indicator V-graph now in graphic form. As explained look especiall at the MER graph. Important to understand also that there is no fixed V-graph. Depending on a lot of parameters the V-graph is empirically determined. For very reliable machines the V-graph would be flat.

### Example of V-graph: returnable line

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 12/90        |     124684     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide13.svg](./src_part1/Slide13.svg  "slide 13 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Buffer dynamics - Conveyor full = buffer 100% available

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 13/90        |     124689     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide14.svg](./src_part1/Slide14.svg  "slide 14 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Washer stop - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 14/90        |     124705     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide15.svg](./src_part1/Slide15.svg  "slide 15 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Buffer emptying - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 15/90        |     124724     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide16.svg](./src_part1/Slide16.svg  "slide 16 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Buffer emptying - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 16/90        |     124743     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide17.svg](./src_part1/Slide17.svg  "slide 17 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* Buffer emptying - Rectangle 14 Buffer dynamics
* FILLER

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 17/90        |     124762     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide18.svg](./src_part1/Slide18.svg  "slide 18 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* Buffer emptying - Rectangle 14 Buffer dynamics
* FILLER

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 18/90        |     124781     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide19.svg](./src_part1/Slide19.svg  "slide 19 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* Buffer emptying - Rectangle 14 Buffer dynamics
* FILLER

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 19/90        |     124800     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide20.svg](./src_part1/Slide20.svg  "slide 20 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restart of washer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 20/90        |     124819     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide21.svg](./src_part1/Slide21.svg  "slide 21 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Closing the gap - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 21/90        |     124836     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide22.svg](./src_part1/Slide22.svg  "slide 22 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Closing the gap - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 22/90        |     124853     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide23.svg](./src_part1/Slide23.svg  "slide 23 of 90") 

note: Operational Performance Indicator

### L
* WASHER FILLER
* Gap closed
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 23/90        |     124870     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide24.svg](./src_part1/Slide24.svg  "slide 24 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 24/90        |     124886     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide25.svg](./src_part1/Slide25.svg  "slide 25 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 25/90        |     124903     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide26.svg](./src_part1/Slide26.svg  "slide 26 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 26/90        |     124920     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide27.svg](./src_part1/Slide27.svg  "slide 27 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 27/90        |     124937     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide28.svg](./src_part1/Slide28.svg  "slide 28 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 28/90        |     124954     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide29.svg](./src_part1/Slide29.svg  "slide 29 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 29/90        |     124971     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide30.svg](./src_part1/Slide30.svg  "slide 30 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 30/90        |     124988     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide31.svg](./src_part1/Slide31.svg  "slide 31 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 31/90        |     125005     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide32.svg](./src_part1/Slide32.svg  "slide 32 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Restoring the buffer - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 32/90        |     125022     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide33.svg](./src_part1/Slide33.svg  "slide 33 of 90") 

note: Operational Performance Indicator

### L
* WASHER
* FILLER
* Buffer 100% restored - Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 33/90        |     125039     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Buffer time: Tacc = L/V 100% - L/V chain
![Slide34.svg](./src_part1/Slide34.svg  "slide 34 of 90") 

note: Operational Performance Indicator For a first estimate of buffer time and buffer recovery time we use some simple formulas. Explain by means of example: bottlewasher - filler

### Buffer time: Tacc = L/V 100% - L/V chain
* Buffer recovery time: TRA = Qnom x Tacc/(Qover-Qnom) L Mach.A Mach.B Mach.A Mach.B Text Box 21 Mach.A Text Box 23 Mach.B Text Box 26 V 100% Text Box 32 V 100% Text Box 35 V chain Mach.A Mach.B
* Buffer theory

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 34/90        |     125055     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Important
![Slide35.svg](./src_part1/Slide35.svg  "slide 35 of 90") 

note: Operational Performance Indicator

### Important: A buffer is only effective if the machine before and after have a significant speed difference ! In case of equal machine speeds there is no restoration possible of the buffer !
* Buffer theory

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 35/90        |     125100     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Please consider
![Slide36.svg](./src_part1/Slide36.svg  "slide 36 of 90") 

note: Operational Performance Indicator

### Please consider: Using (“eating”) a buffer goes very fast, because consumption speed = line speed (~ 100%). Restoring (re-building) the buffer is a slow process, because restoration speed = speed difference (~20%)
* Buffer theory

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 36/90        |     125104     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Buffer
![Slide37.svg](./src_part1/Slide37.svg  "slide 37 of 90") 

note: Operational Performance Indicator

* Buffer / recovery times
* Indication of values: Buffer time bottle conveyors: approx. 1 – 3 minutes Buffer time crate conveyors: approx. 8 – 16 minutes - Recovery times bottle buffers: approx. 10 – 30 minutes !

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 37/90        |     125108     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
* Crate buffers
![Slide38.svg](./src_part1/Slide38.svg  "slide 38 of 90") 

note: Operational Performance Indicator

* Crate buffers
* Rules for returnable lines: Balance between bottle and crate buffers ! During normal production: - avoid emptying pasteuriser ! - compensate for bottle losses (EBI, breakage, etc.) Guideline: crate buffer capacity &gt; sum (bottle buffers)

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 38/90        |     125113     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide39.svg](./src_part1/Slide39.svg  "slide 39 of 90") 

note: Operational Performance Indicator

### L LABELLER
* PACKER
* Buffer dynamics
* Maximum available buffer

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 39/90        |     125118     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide40.svg](./src_part1/Slide40.svg  "slide 40 of 90") 

note: Operational Performance Indicator

### L
* Packer stop
* LABELLER PACKER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 40/90        |     125133     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide41.svg](./src_part1/Slide41.svg  "slide 41 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 41/90        |     125151     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide42.svg](./src_part1/Slide42.svg  "slide 42 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 42/90        |     125171     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide43.svg](./src_part1/Slide43.svg  "slide 43 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 43/90        |     125191     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide44.svg](./src_part1/Slide44.svg  "slide 44 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 44/90        |     125211     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide45.svg](./src_part1/Slide45.svg  "slide 45 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 45/90        |     125231     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide46.svg](./src_part1/Slide46.svg  "slide 46 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 46/90        |     125251     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide47.svg](./src_part1/Slide47.svg  "slide 47 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 47/90        |     125271     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide48.svg](./src_part1/Slide48.svg  "slide 48 of 90") 

note: Operational Performance Indicator

### L
* PACKER LABELLER
* Buffer filling up
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 48/90        |     125291     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide49.svg](./src_part1/Slide49.svg  "slide 49 of 90") 

note: Operational Performance Indicator

### L
* Buffer area 100% used LABELLER
* PACKER Rectangle 13 Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 49/90        |     125311     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide50.svg](./src_part1/Slide50.svg  "slide 50 of 90") 

note: Operational Performance Indicator

### L
* Re-start of packer PACKER
* LABELLER Rectangle 13 Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 50/90        |     125330     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide51.svg](./src_part1/Slide51.svg  "slide 51 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 51/90        |     125346     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide52.svg](./src_part1/Slide52.svg  "slide 52 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 52/90        |     125363     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide53.svg](./src_part1/Slide53.svg  "slide 53 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 53/90        |     125380     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide54.svg](./src_part1/Slide54.svg  "slide 54 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 54/90        |     125397     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide55.svg](./src_part1/Slide55.svg  "slide 55 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 55/90        |     125414     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide56.svg](./src_part1/Slide56.svg  "slide 56 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 56/90        |     125431     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide57.svg](./src_part1/Slide57.svg  "slide 57 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 57/90        |     125448     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide58.svg](./src_part1/Slide58.svg  "slide 58 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 58/90        |     125465     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide59.svg](./src_part1/Slide59.svg  "slide 59 of 90") 

note: Operational Performance Indicator

### L
* PACKER
* Restoring the buffer LABELLER
* Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 59/90        |     125482     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# L
![Slide60.svg](./src_part1/Slide60.svg  "slide 60 of 90") 

note: Operational Performance Indicator

### L
* Maximum available buffer PACKER
* LABELLER Rectangle 13 Buffer dynamics

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 60/90        |     125499     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Influences on - Line Balance
![Slide61.svg](./src_part1/Slide61.svg  "slide 61 of 90") 

note: Operational Performance Indicator Summary of internal and external parameters. Give some explanation to items

### Influences on Line Balance
* Line influences: Machine speeds/capacity, failure behaviour (MTTR, MTBF) Buffer size, conveyor speed Line logic/control Other influences: Start-up, change-overs, cleaning: planned down Incidents/external downtime Losses/sorting /quality of packaging materials - Respons e time operator, …

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 61/90        |     125515     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to determine and obtain - Line Balance?
![Slide62.svg](./src_part1/Slide62.svg  "slide 62 of 90") 

note: Operational Performance Indicator Availability of data: think of a line monitoring system !

### How to determine and obtain Line Balance?
* Depends on availability of data 1) Efficiency drill down - Try to divide the loss of efficiency into internal and external causes. Then try to allocate the internal loss of line efficiency in three parts: caused by core machine: BREAKDOWN, caused before core machine: STARVATION caused after core machine: BACKUP Then try to identify which machines (or buffers) are the main causes
* core
* before
after

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 62/90        |     125519     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# 2) Mean effective rate (MER)
![Slide63.svg](./src_part1/Slide63.svg  "slide 63 of 90") 
note: ### 2) Mean effective rate (MER) The MER is calculated by multiplying the machine capacity and the machine efficiency Then draw another V-graph with the MER added. The core machine should still be the lowest point and the V-shape should remain - Capacity Machine
MER

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 63/90        |     125531     |          4           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# 3) Relate failure behavior and buffer characteristics
![Slide64.svg](./src_part1/Slide64.svg  "slide 64 of 90") 
note: ### 3) Relate failure behavior and buffer characteristics Simply look at buffer state at different times Machine failures should at least on average be shorter than the buffer times The mean time between failure should be larger than the recovery time - The buffer efficiency should be positive Otherwise: no return to equilibrium (if any) and nervous line behaviour, machine interaction

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 64/90        |     125551     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# What can you do?
![Slide65.svg](./src_part1/Slide65.svg  "slide 65 of 90") 
note: ### What can you do? parameter control change line logic adapt speeds/capacities add buffer/remove buffer? (Why do we need a crate buffer?) reduce downtime (technically or by training etc.) change run length and order

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 65/90        |     125554     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Future developments
![Slide66.svg](./src_part1/Slide66.svg  "slide 66 of 90") 

note: Operational Performance Indicator

### Future developments
* Future packaging - Lines simulation alternatives future developments flexibility reliability
* Capacity
* Machine Rectangle 10 Rectangle 11 Rectangle 12 Rectangle 13 Rectangle 14
“….Even if you have the best machines, best conveyors and best line controls, people are still the key and the greatest asset in achieving great line efficiencies. Rapid interventions, proper operating procedures, proper training and empowered operators and maintenance people who take pride in their results, that is the key to efficiency gold…”

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 66/90        |     125557     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Line performance: OPI Definition
![Slide67.svg](./src_part1/Slide67.svg  "slide 67 of 90") 
note: ### Line performance: OPI Definition
OPI stands for - Operational Performance Indicator OPI = (good product)/(manned time) OPI - on machine level - is an indicator for the operator to create focus on losses OPI - on line level - is an indicator for the management to show the performance of a packaging line for reporting, target setting and comparing purposes

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 67/90        |     125577     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     text     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Objective of Production
![Slide68.svg](./src_part1/Slide68.svg  "slide 68 of 90") 
note: ### Objective of Production
Objective: to eliminate losses Text Placeholder 2 Time Losses Set-up and adjustment Breakdowns Quantity Losses Speed losses Minor stoppages Quality Losses Rejects Rework
To run a line continuously At the designed speed - With the right quality

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 68/90        |     125581     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     text     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Start up losses - Losses during production
![Slide69.svg](./src_part1/Slide69.svg  "slide 69 of 90") 

note: Operational Performance Indicator 6

### Start up losses Losses during production
= Available time Rectangle 2 Performance Actual line speed whilst running X 100 % Nominal capacity Rectangle 8 Minor stoppages Speed losses Idling Rectangle 2 Quality
Availability Total Time - Down Time X 100% Total Time Rectangle 7 Total Time -
Total product produced - Rejects - Rework X 100 Total product produced - Elements of OPI - 1

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 69/90        |     125587     |          5           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Is the line available to run?
![Slide70.svg](./src_part1/Slide70.svg  "slide 70 of 90") 
note: ### Is the line available to run? What is the performance of the line whilst it is running? What is the quality of the product delivered from the line?

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 70/90        |     125619     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Elements of OPI - 2
![Slide71.svg](./src_part1/Slide71.svg  "slide 71 of 90") 

note: Operational Performance Indicator - A&amp;B zijn in tijd uitgedrukt.
- Alle tijden zijn werkelijk gemeten tijden dus GEEN norm-tijden
- C&amp;D&amp;E&amp;F zijn in produkt eenheden; dit kunnen zijn flessen, kratten, dozen,kegs, pallets etc.
- C is berekend door B te vermenigvuldigen met de
norm/ontwerpsnelheid van de lijn
- D is gemeten b.v. een tellerstand na de vuller. LET OP dit is de totale hoeveelheid dus inclusief eventuele uitstoot
- Performance losses worden BEREKEND en NIET GEMETEN
- Good product (F) is alleen dat produkt wat direct beschikbaar is voor de markt. Dus ook produkt dat on-hold wordt gezet en later weer wordt vrijgegeven is een Q- verlies. Denk hierbij aan “first time right”.

### Elements of OPI - 2
### OPI = B/A  C/B  D/C = D/A

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 71/90        |     125622     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 72/90
![Slide72.svg](./src_part1/Slide72.svg  "slide 72 of 90") 

note: Operational Performance Indicator - Sheet zoals officieel door PP&amp;C uitgevaardigd
- Grenswaarde voor breakdown of minor stoppage is 5 minuten
- Uiteindelijk maakt het niet heel veel uit waar een de grensgevallen
worden weggeschreven. Indien bij breakdowns dan beinvloed het de Availability; indien bij minor stopages dan beinvloed het de Performance. Omdat de OPI de vermenigvuldiging is van A*P*Q geeft het onder de streep geen verschil.
- Indien de verliezen dusdanig groot zijn dient er toch in meer detail
gemeten/geregistreerd te worden. De echte pijnpunten komen dan toch naar boven.



---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 72/90        |     125647     |          0           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Maintenance
![Slide73.svg](./src_part1/Slide73.svg  "slide 73 of 90") 

note: Operational Performance Indicator Deze sheet geeft aan hoe alle verschillend afdelingen / disciplines de OPI beinvloeden Voorbeelden kunnen zijn; - slechte planning geeft veel ombouwen dus een lagere OPI
- geen of slecht onderhoud geeft veel storingen dus een lagere OPI
- slecht getrainde mensen weten niet hoe ze de machines moeten bedienen of “kleine”storingen moeten verhelpen, dus een lage OPI

### Involved Departments Causes of OPI reduction Breakdowns Maintenance stop Change overs Lunch break Team meetings - Speed losses Reject/rework On-hold
### OPI

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 73/90        |     125684     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to - Measure the OPI?
![Slide74.svg](./src_part1/Slide74.svg  "slide 74 of 90") 

note: Operational Performance Indicator In één uur wil je 30.000 flessen invoeren in de verpakkings afdeling (= norm capaciteit van de lijn) Na één uur zijn er slechts 17.000 flessen uit de verpakkings afdeling gekomen Het verlies is dus 13.000 flessen. Hiermee is nog niet gezegd waar dit verlies door veroorzaakt wordt. Het kan zitten in availability, performance of quality. In de praktijk is het meestal een combinatie van deze drie.

### How to - Measure the OPI?
OPI = (17,000)/(30,000) = 0.57 Losses can be in: Availability Performance Quality Need to zoom in for more detailed information!

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 74/90        |     125701     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content over Text     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to - Measure the OPI?
![Slide75.svg](./src_part1/Slide75.svg  "slide 75 of 90") 

note: Operational Performance Indicator Door in te zoomen krijgen we meer gedetailleerde informatie

De verliezen per machine zijn allemaal teruggerekend naar flessen per uur. Het zijn dus NIET uitgestoten flessen.

Tellers in de lijn kunnen aangeven hoeveel flessen er op welke plek in de lijn geproduceerd zijn.

Van achter naar voren is het verhaal; - uit de palletiser komen 17.000 flessen
- op de palletiser hebben we verliezen ter waarde van 1.000 flessen
- er hadden dus 18.000 flessen ingevoerd kunnen worden
- uit de labeller hadden 18.000 flessen kunnen komen
- op de labeller hebben we een verlies ter waarde van 1.000 flessen
- er hadden dus 19.000 flessen ingevoerd kunnen worden
- uit de pasteur hadden 19.000 flessen kunnen komen
- enz.

### How to Measure the OPI? In Out Losses equal 13,000 bottles 17,000 good bottles 1 hour production time - Depal Washer Rectangle 23 Filler Rectangle 28 Pasteur Labeller Palletiser

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 75/90        |     125718     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content over Text     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Basic Machine Status
![Slide76.jpg](./src_part1/Slide76.jpg  "slide 76 of 90") 

note: Operational Performance Indicator 4 basis situaties

DRAAIEN
1. De machine draait, flessen worden ingevoerd, bewerkt en weer uitgevoerd

STIL STAAN
2. Er is geen invoer van product (b.v. flessen) aan de invoer. De machine valt stil (of draait “idle”)

3. Verderop in de lijn is een probleem waardoor de machine niet meer kan afvoeren en hierdoor stil zal vallen.

4. De machine valt stil omdat er een probleem is met de machine zelf waardoor er niet geproduceerd kan worden

### Basic Machine Status Running 1. No product at infeed 2. Rectangle 29 Internal breakdown 4. No discharge possible 3.

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 76/90        |     125757     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to - Measure the OPI?
![Slide77.svg](./src_part1/Slide77.svg  "slide 77 of 90") 

note: Operational Performance Indicator Het is verstandig om aan te vangen met drie meetpunten
1. Depalletiser, helemaal vooraan in de lijn
2. Vuller, bottleneck machine
3. Palletiser, helemaal achter aan in de lijn.

Indien na verloop van tijd blijkt dat de problemen zich niet voordoen bij deze machines dan moeten de meetpunten aangepast worden.

Voorbeeld:
- De depalletiser staat vaak stil omdat deze niet kan afvoeren
- De vuller staat vaak stil omdat deze geen aanvoer heeft
- Het probleem zit dus tussen deze twee meetpunten.
- Extra meetpunt dient te worden de wasser. Eventueel kan één van de andere meetpunten komen te vervallen.

### How to - Measure the OPI?

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 77/90        |     125791     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Pasteuriser
![Slide78.svg](./src_part1/Slide78.svg  "slide 78 of 90") 

note: Operational Performance Indicator Het is verstandig om aan te vangen met drie meetpunten
1. Depalletiser, helemaal vooraan in de lijn
2. Vuller, bottleneck machine
3. Palletiser, helemaal achter aan in de lijn.

Indien na verloop van tijd blijkt dat de problemen zich niet voordoen bij deze machines dan moeten de meetpunten aangepast worden.

Voorbeeld:
- De depalletiser staat vaak stil omdat deze niet kan afvoeren
- De vuller staat vaak stil omdat deze geen aanvoer heeft
- Het probleem zit dus tussen deze twee meetpunten.
- Extra meetpunt dient te worden de wasser. Eventueel kan één van de andere meetpunten komen te vervallen.

### Pasteuriser
### Labeller Pasteuriser: No problems - Pasteuriser Filler: No discharge

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 78/90        |     125802     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to - Measure the OPI?
![Slide79.svg](./src_part1/Slide79.svg  "slide 79 of 90") 

note: Operational Performance Indicator Uit de vuller hadden 19.500 flessen kunnen komen

Het verlies op de vuller van 9.500 flessen blijkt als volgt opgebouwd te zijn; - 10 minuten door niet af kunnen voeren (= 5000 flessen)
- twee korte stops waardoor 1.000 flessen “gemist” werden en
- 7 minuten storing aan de vuller zelf (3.500 flessen)

### How to Measure the OPI? 1 hour production time Labeller line capacity = 30,000 bph - In Out Losses equal 9,500 bottles 20,500 good bottles (counter)
9,500 bottles missing because of: a breakdown of 10 minutes at the infeed screw 5 minutes cleaning of brushes 2,000 bottles missing (calculated!) due to minor stoppages (e.g fallen bottles blocking the infeed screw)

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 79/90        |     125825     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Title and Content over Text     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Basic Machine Status
![Slide80.jpg](./src_part1/Slide80.jpg  "slide 80 of 90") 

note: Operational Performance Indicator 4 basis situaties

DRAAIEN
1. De machine draait, flessen worden ingevoerd, bewerkt en weer uitgevoerd

STIL STAAN
2. Er is geen invoer van product (b.v. flessen) aan de invoer. De machine valt stil (of draait “idle”)

3. Verderop in de lijn is een probleem waardoor de machine niet meer kan afvoeren en hierdoor stil zal vallen.

4. De machine valt stil omdat er een probleem is met de machine zelf waardoor er niet geproduceerd kan worden

### Basic Machine Status No product at infeed No discharge possible Internal breakdown - Running 1. 2. 3. 4.

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 80/90        |     125842     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Manned time
![Slide81.svg](./src_part1/Slide81.svg  "slide 81 of 90") 

note: Operational Performance Indicator

### Other practicle - Example 12 hours 10 hours 30 minutes 1 hour 30 minutes 63,000 bottles 252,000 bottles (counter) 10.5 hours  30,000 bottles per hour = 315,000 bottles 3,000 bottles 249,000 bottles 252,000 bottles

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 81/90        |     125874     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# OPI = B/A  C/B  D/C = D/A
![Slide82.svg](./src_part1/Slide82.svg  "slide 82 of 90") 

note: Operational Performance Indicator - A&amp;B zijn in tijd uitgedrukt.
- Alle tijden zijn werkelijk gemeten tijden dus GEEN norm-tijden
- C&amp;D&amp;E&amp;F zijn in produkt eenheden; dit kunnen zijn flessen, kratten, dozen,kegs, pallets etc.
- C is berekend door B te vermenigvuldigen met de
norm/ontwerpsnelheid van de lijn
- D is gemeten b.v. een tellerstand na de vuller. LET OP dit is de totale hoeveelheid dus inclusief eventuele uitstoot
- Performance losses worden BEREKEND en NIET GEMETEN
- Good product (F) is alleen dat produkt wat direct beschikbaar is voor de markt. Dus ook produkt dat on-hold wordt gezet en later weer wordt vrijgegeven is een Q- verlies. Denk hierbij aan “first time right”.

### OPI = B/A  C/B  D/C = D/A

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 82/90        |     125908     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 83/90
![Slide83.svg](./src_part1/Slide83.svg  "slide 83 of 90") 

note: Operational Performance Indicator



---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 83/90        |     125932     |          0           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# OPI Registration at the Machine
![Slide84.svg](./src_part1/Slide84.svg  "slide 84 of 90") 

note: Operational Performance Indicator Dit invulformulier geeft informatie over de AVAILABILITY van de machine. De tijd dat de machine draait of stil staat wordt geregistreerd in blokken van 5 minuten.

Groen; de machine is bezig met zijn activiteit b.v. “vullen” of “labellen”

Blauw; de machine staat stil omdat er geen toevoer is of omdat de machine niet kan afvoeren

Rood; de machine heeft een intern probleem waardoor deze stil valt

In de gele vakken kunnen de belangrijkste of meest voorkomende interne reden vermeld worden waarom de machine niet produceerd. Hierbij altijd de reden “overige” opnemen. Indien blijkt dat hier de meeste tijd op wordt geschreven dient deze reden verder uitgesplits te worden. Waarschijnlijk kunnen één of meerdere van de andere redenen komen te vervallen.

### OPI Registration at the Machine

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 84/90        |     125965     |          1           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 85/90
![Slide85.svg](./src_part1/Slide85.svg  "slide 85 of 90") 

note: Operational Performance Indicator Op deze sheet worden de berekeningen van Availability, Performance en Quality gemaakt

LET OP. AVAILABILITY voor bottle-neck machine (vuller) is draaitijd / totaaltijd (meestal 8 uur). Iedere minuut die de machine niet gedraaid heeft is een direct verlies voor de gehele lijn omdat deze tijd nooit meer ingehaald kan worden. Als we praten over een 40.000 lijn dan bedoelen we hiermee de capaciteit van de vuller en verwachten we dus na één uur 40.000 flessen te hebben geproduceerd.

AVAILABILITY voor overige machines is draaitijd / (totaaltijd - geen toevoer - geen afvoer)



---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 85/90        |     125969     |          0           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# What if...
![Slide86.svg](./src_part1/Slide86.svg  "slide 86 of 90") 
note: ### What if...
### 1. A few men come ahead of the shift to start-up the bottle washer and pasteuriser? OPI will increase, because: manned time is equal planned down is reduced (outside shift)
2. The line is not running smoothly with a specific label; at a reduced speed the line is under control? OPI will decrease, because: OPI has to be calculated against the nominal (designed) line capacity! Speed reduction is a performance loss and therefore reduces the OPI of the line

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 86/90        |     125972     |          3           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# 3. Preventive Maintenance is executed on - Saturday during a 3-shift operation (only technicians at site)?
![Slide87.svg](./src_part1/Slide87.svg  "slide 87 of 90") 
note: ### 3. Preventive Maintenance is executed on Saturday during a 3-shift operation (only technicians at site)? No direct influence on OPI 4. During a 5-shift operation (technicians and operators at site)? OPI will decrease, because of Executed in manned time Therefore an availability loss
### 5. Before starting up at Monday morning the operators have to clean the line taking 3 hours? OPI will decrease, because of Executed in manned time - Therefore an availability loss “Value is added to the business by running the line and not by cleaning”

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 87/90        |     125977     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Summary
![Slide88.svg](./src_part1/Slide88.svg  "slide 88 of 90") 
note: ### Summary
### The OPI …………. gives insight in where the losses are creates focus can be applied in a flexible way is easy to register AN EXCELLENT TOOL AS A START FOR CONTINUOUS IMPROVEMENT

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 88/90        |     125981     |          2           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     title only     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 89/90
![Slide89.svg](./src_part1/Slide89.svg  "slide 89 of 90") 
note: 

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 89/90        |     125985     |          0           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 90/90
![Slide90.svg](./src_part1/Slide90.svg  "slide 90 of 90") 
note: 

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 90/90        |     125988     |          0           |            March 19, 2020 (Specialized_Unit_8_8_Process_Optimization_Hayert.pptx)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 21, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--v-->---
# Thank you for your attention.
---
###  Use this link to go back to the first slides
*  >  [first slide](#/)
 
*  >  [logo slide](#/1)
 
*  >  [content slide](#/0/2)
 
*  >  [title slide](#/2)
 
---
####  report issues to [Olivier Vitrac](mailto:olivier.vitrac@agroparistech.fr)
<!--v-->___
# [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
___
