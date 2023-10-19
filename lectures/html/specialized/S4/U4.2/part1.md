---
title: 'specialized>S4>U4.2>part1'
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
## Session 4. Mass transfer in food packaging - Unit 4.2. Migration modeling in m onomaterial s
### undefined author
___
    version: production (0.331)
    date: January 03, 2021
    content: 37 slides
    class: specialized>S4>U4.2>part1
    title: Session 4. Mass transfer in food packaging - Unit 4.2. Migration modeling in m onomaterial s
    source: Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX
    hash: e289e7df9574e80043e4954c246c307b
    contact: olivier.vitrac@agroparistech.fr
note: ##### [16:13:18 - 03/01/2021]olivi@LX-Olivier2020> pptx2reveal_v2 with the following parameters: 
 |   **parameter**  | **value**  |
 | --------------: | -------- |
|   `wwwroot`:   |   ` /home/olivi/Bulk/fitness2020/sandbox/www20201221`   |
|   `wwwrel`:   |   ` lectures/html/specialized/S4/U4.2`   |
|   `wwwlib`:   |   ` lectures/src`   |
|   `pptxfolder`:   |   ` /home/olivi/Bulk/fitness2020/download20201123/fItNeSs _ sPeCiAlIzEd tRaInInG MoDuLeS/SeSsIoN 4 _ MaSs tRaNsFeR In fOoD PaCkAgInG/UnIt 4.2 mIgRaTiOn mOdElLiNg fOr mOnOmAtErIaLs`   |
|   `pptx`:   |   ` Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX`   |
|   `imfolder`:   |   ` src_part1`   |
|   `imsourcefolder`:   |   ` `   |
|   `impat`:   |   ` Slide*.jpg`   |
|   `svgpat`:   |   ` Slide*.svg`   |
|   `author`:   |   ` undefined author`   |
|   `contact`:   |   ` olivier.vitrac@agroparistech.fr`   |
|   `YAMLtitle`:   |   ` specialized>S4>U4.2>part1`   |
|   `title`:   |   ` Session 4. Mass transfer in food packaging - Unit 4.2. Migration modeling in m onomaterial s`   |
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
|   `hash`:   |   ` e289e7df9574e80043e4954c246c307b`   |
 | `maxtitle`: |   ` 120`   |
 | `maxcontentslide`: |   ` 12`   |
|   `favicon`:   |   ` ~/Bulk/fitness2019/template/favicon/favicon.ico`   |
|   `mainindex`:   |   ` lectures/html/index.html`   |
|   `dependencymain`:   |   ` index.html`   |
|   `imformatpreferred`:   |   ` svg`   |
|   `svgmaxsize`:   |   ` 1200 KB`   |
|   `pdf`:   |   ` Specialized_Unit_4_2_modeling_monolayer_LNE.pdf`   |
<!--v-->___
> <table><tr><td align="center"><small>resources<br/>for this lecture</small></td><td><a href="./references/index.html" title="link to resource references">references</a></td><td><a href="./videos/index.html" title="link to resource videos">videos</a></td><td><a href="./extra/" title="link to resource extra">extra</a></td><td><a href="./casestudies/index.html" title="link to resource casestudies">casestudies</a></td><td><a href="./howto/index.html" title="link to resource howto">howto</a></td><td><a href="./solutions/" title="link to resource solutions">solutions</a></td></tr></table>
___
# Fitness lecture - $2020/12/21$ (v0.33)
## Specialized modules
###  4. Mass transfer in food packaging
####  4.2 Migration modelling for monomaterials
* part 1/1
___
> previous lecture
___
####  4.1 Principles of mass transfer

> *  [part 2/2](./../../../../../lectures/html/specialized/S4/U4.1/part2.html)
___
> next lecture
___
####  4.3 Modelling for multi-materials, multi-steps process

> *  [part 1/1](./../../../../../lectures/html/specialized/S4/U4.3/part1.html)
___


---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT
---
*  [1/37] [Slide 01/37](#/1)
*  [2/37] [Session 4. mass transfer in food packaging - unit 4.2. migration modeling in m onomaterial s](#/2)
*  [3/37] [Modelling principles and data needed](#/3)
*  [4/37] [Substance concentration](#/4)
*  [5/37] [Food contact materials](#/5)
*  [6/37] [Migration controlled by partition coefficient k f/p](#/6)
*  [7/37] [Migration controlled by diffusion coefficient d (m²/s)](#/7)
*  [8/37] [Polymer](#/8)
*  [9/37] [Data availability for migration modelling](#/9)
*  [10/37] [Tier](#/10)
*  [11/37] [Tier](#/11)
*  [12/37] [Tier](#/12)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [13/37] [Approximation 1d](#/13)
*  [14/37] [Mass transfert equation resolution](#/14)
*  [15/37] [Data description for modelling](#/15)
*  [16/37] [Initial concentration of substances in material](#/16)
*  [17/37] [Initial concentration of substances in material](#/17)
*  [18/37] [Source: otto g. piringer - 2008](#/18)
*  [19/37] [Temperature dependence of the diffusion coefficients](#/19)
*  [20/37] [Overestimiation of the diffusion coefficients by - piringer model](#/20)
*  [21/37] [How to evaluate the partition coefficients (k)?](#/21)
*  [22/37] [Influence of d and k in migration modelling](#/22)
*  [23/37] [Initial concentration effect on migration](#/23)
*  [24/37] [Diffusion coefficient effect on migration (temperature modification)](#/24)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [25/37] [Partition coefficient effect on migration (food type modification)](#/25)
*  [26/37] [A method allowed by regulations](#/26)
*  [27/37] [Different methods for compliance assessment](#/27)
*  [28/37] [Predict product regulatory compliance prior to implementation](#/28)
*  [29/37] [Available migration modelling tools](#/29)
*  [30/37] [Example of a modelling software - safe f ood p ackaging p ortal](#/30)
*  [31/37] [Main modeling interface](#/31)
*  [32/37] [Contact conditions between - material / food](#/32)
*  [33/37] [Packaging geometry](#/33)
*  [34/37] [Search for substance data](#/34)
*  [35/37] [Modelling result](#/35)
*  [36/37] [Slide 36/37](#/36)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--v-->---
# CONTENT (Cont'ed)
---
*  [37/37] [Slide 37/37](#/37)
---
#### [go back to the main menu (all lectures)](./../../../../../lectures/html/index.html)
---
<!--s-->
# slide 01/37
![Slide1.svg](./src_part1/Slide1.svg  "slide 1 of 37") 
note: 

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 01/37        |     235123     |          0           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Session 4. Mass transfer in food packaging - Unit 4.2. Migration modeling in m onomaterial s
![Slide2.svg](./src_part1/Slide2.svg  "slide 2 of 37") 
note: ### Session 4. Mass transfer in food packaging - Unit 4.2. Migration modeling in m onomaterial s
Specialized training modules

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 02/37        |     235126     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Modelling principles and data needed
![Slide3.svg](./src_part1/Slide3.svg  "slide 3 of 37") 
note: ### Modelling principles and data needed
Mass transfer phenomenon Transport properties - Modeling assumptions

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 03/37        |     235130     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre de section     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Substance concentration
![Slide4.svg](./src_part1/Slide4.svg  "slide 4 of 37") 
note: ### Substance concentration - Migration phenomenon of substances coming from polymers

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 04/37        |     235135     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Food contact materials
![Slide5.svg](./src_part1/Slide5.svg  "slide 5 of 37") 
note: ### Food contact materials
Food products
contact conditions
Food mass / polymer mass ratio or food volume and area Type of food Density of food Contact time and temperature
Material formulation and properties
Shape Dimensions Thickness Density of the material
Initial migrants Initial concentration of migrants Partition coefficient - Diffusion coefficient
MODELLING
Concentration result of the migrant in the food (CF) AutoShape 39
Modelling input data

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 05/37        |     235181     |          10           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Migration controlled by partition coefficient K F/P
![Slide6.svg](./src_part1/Slide6.svg  "slide 6 of 37") 
note: ### Migration controlled by partition coefficient K F/P
Le phénomène de migration des polymères
Contact between 2 phases
Diffusion of the substance - Equilibrium between 2 phases
C P
C F
Rectangle 5
C (x,t)
C (y,t) C I Material Food
In the two - phase system, thermodynamic equilibrium is reached when their chemical potentials (mass fluxes) are the same . 0 0 0

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 06/37        |     235195     |          11           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre seul     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Migration controlled by diffusion coefficient D (m²/s)
![Slide7.svg](./src_part1/Slide7.svg  "slide 7 of 37") 
note: ### Migration controlled by diffusion coefficient D (m²/s)
Le phénomène de migration des polymères
Adding the colorant in water
Mixing
Homogenous mixture - The molar flux is observed as the function of diffusion coefficient due to the molecular diffusion and the gradient in the concentration
water
Colorant

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 07/37        |     235234     |          8           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre seul     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Polymer
![Slide8.svg](./src_part1/Slide8.svg  "slide 8 of 37") 
note: ### Polymer? known Concentration? Substance? known Substance identification unknown Polymer identification unknown unknown Quantity determination Ask the suppliers Analysis Ask the suppliers Analysis Ask the suppliers Analysis known calculation - Simplified approach flowchart

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 08/37        |     235283     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre et contenu     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Data availability for migration modelling
![Slide9.svg](./src_part1/Slide9.svg  "slide 9 of 37") 
note: ### Data availability for migration modelling
Tierced approach : overestimation level - Increasing difficulty

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 09/37        |     235317     |          3           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Tier
![Slide10.svg](./src_part1/Slide10.svg  "slide 10 of 37") 
note: ### Tier 1: Worst case scenario calculation - Mass of material (m P)
Mass of food (m F)
AutoShape 17 SML
Substance expressed in mass concentration AutoShape 17 Concentration of substances in food : Maximum concentration of substance in material so that the migration does not exceed the SML

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 10/37        |     235322     |          5           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Tier
![Slide11.svg](./src_part1/Slide11.svg  "slide 11 of 37") 
note: ### Tier 2: migration controlled only by partition coefficient - Concentration of substances in food: The ratio is always large (&gt; 20 for typical applications) N o significant effect on migration if K F/P &gt; 10 Maximum concentration of substance in material so that the migration does not exceed the SML

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 11/37        |     235338     |          1           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Tier
![Slide12.svg](./src_part1/Slide12.svg  "slide 12 of 37") 
note: ### Tier 3: Detailed modelling based on assumptions
Mass conservation Monodimensional modelling (1D) No reaction between the substances coming from the material Thermodynamical properties according to - Henry Law (infinite dilution) Transport properties are constant (D,K) No modific a tion on material intrinsic properties

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 12/37        |     235342     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Approximation 1D
![Slide13.svg](./src_part1/Slide13.svg  "slide 13 of 37") 
note: ### Approximation 1D
l F : caracteristic thickness of solution/ food in contact l P : thickness of material layers constitued packaging
Adapted from online formation rmt-propackfood.ACTIA-asso.EU/ cours.php?cat =1&amp;cours=12
3D system - Vertical sectional view
V
V
l F = V/S
l P
S
Dilution factor L FP = l F / l P

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 13/37        |     235346     |          10           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Mass transfert equation resolution
![Slide14.svg](./src_part1/Slide14.svg  "slide 14 of 37") 
note: ### Mass transfert equation resolution
Mass transfert and conservation equations
Migration calculation from realistic properties
Fick laws
Boundary conditions
Mass balance
Thermodynamic equilibrium - Henry Law
Crank equation
with

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 14/37        |     235369     |          10           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Data description for modelling
![Slide15.svg](./src_part1/Slide15.svg  "slide 15 of 37") 
note: ### Data description for modelling
Concentration effect Thermodynamic property effect - Diffusion property effect

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 15/37        |     235385     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre de section     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Initial concentration of substances in material
![Slide16.svg](./src_part1/Slide16.svg  "slide 16 of 37") 
note: ### Initial concentration of substances in material REF: Practical guidelines on the application of migration modelling for the estimation of specific migration in support of regulation (EU) N° 10/2011 on plastic food contact materials – JRC – EUR 27529 EN 2015 PM/REF Chemical name M r SML (mg/kg) C P,0 (%) 38560 2,5-bis(5-tert-butyl-2-benzoxazolyl) thiophene 431 0.6 38800 N,N’-bis(3-(3,5-di-tert-butyl-4-hydroxyphenyl)propionyl)-hydrazide 553 15 HDPE 0.2 38820 Bis(2,4-di-tert-butylphenyl)penta-erythritol diphosphite 605 0.6 PP 0.1; LDPE 0.06 38840 Bis(2,4-dicumylphenyl)pentaerythritol diphosphite 853 5 LDPE 0.06 39890 Bis(methylbenzylidene) sorbitol 386 60 46480 Dibenzylidene sorbitol 358 60 46640 2,6-Di-tert-butyl-p-cresol (BHT) 220 3 PP 0.2 48640 2,4-Dihydroxybenzophenone 214 6 48720 4,4’-Dihydroxybenzophenone 214 6 48880 2,2’-Dihydroxy-4-methoxy benzophenone 244 6 53670 Ethylenglycol-bis(3,3-bis(3-tert-butyl-4-hydroxyphenyl)butyrate) 795 6 PP 0.2; HDPE 0.1 54300 2,2’-Ethylidene-bis(4,6-di-tert-butyl-phenyl)-fluorophosphonite 487 6 PP 0.1; LDPE 0.06 60320 2-(2-Hydroxy-3,5-bis(1,1-dimethylbenz-yl)phenyl)benzo-triazole 448 1.5 60400 2-(2’-Hydroxy-3’-tert-butyl-5’-methyl-phenyl)-5-chlorobenzotriazole 316 30 PP 0.4; HDPE 0.3 60480 2-(2’-Hydroxy-3,5’-di-tert-butylphenyl)-5-chlorobenzotriazole 358 30 PP 0.5 61600 2-Hydroxy-4-n-octylbenzophenone 326 6 PP 0.5; HDPE 0.3; LDPE 0.5 68320 Octadecyl 3-(3,5-di-tert-butyl-4-hydroxy-phenyl)propionate 531 6 PP 0.2; HDPE 0.1; LDPE 0.3 71680 Pentaerythritol tetrakis[3-(3,5-di-tert-butyl-4-hydroxyphenyl)-propionate] 1178 60 PP 0.2; HDPE 0.25; LDPE 0.03 74010 Phosphorous acid, bis(2,4-di-tert-butyl-6-methylphenyl) ethyl ester 514 5 PP 0.1; HDPE 0.05; LDPE 0.06 74240 Phosphorous acid, tris(2,4-di-tert-butylphenyl)ester 647 60 PP 0.1; HDPE 0.5; LDPE 0.12 80480 Poly(6-morpholino-1,3,5-triazine-2,4-diyl)-[(2,2,6,6-tertamethyl-4-piperidyl)imino]-hexamethylene-[(2,2,6,6-tertamethyl-4-piperidyl)-imino] 2600 - 1.8 PP 0.5 81200 Poly[6-[(1,1,3,3-tetramethylbutyl)-amino]-1,3,5-triazine-2,4-diyl]-[(2,2,6,6-tertamethyl-4-piperidyl)imino]-hexamethylene-[(2,2,6,6-tertamethyl-4-piperidyl)imino] 2000-3100 3 PP 0.5; HDPE 0.2; LDPE 0.5 81220 Poly-[[6-[N-(2,2,6,6-tetramethyl-4-piperidinyl)-n- butylamino ]-1,3,5-triazine-2,4-diyl][(2,2,6,6-tetramethyl-4-piperidinyl) imino ]-1,6-hexanediyl[(2,2,6,6-tetramethyl-4-piperidinyl) imino ]]-alpha-[N,N,N',N'- tetrabutyl -N"-(2,2,6,6-tetramethyl-4-piperidinyl)-N"-[6-(2,2,6,6-tetramethyl-4-piperidinylamino)-hexyl]-[1,3,5-triazine-2,4,6-triamine]-omega-N,N,N',N'-tetrabutyl-1,3,5-triazine-2,4-diamine] 2600-3400 5 PP 0.2; HDPE 0.1; LDPE 0.1 83595 Reaction product of di-tert-butyl phosphonite with biphenyl, obtained by condensation of 2,4 di-tert-butylphenol with Friedel-Crafts reaction product of phosphorus trichloride and biphenyl 991 18 PP 0.1; HDPE 0.05; LDPE 0.06
Polyolefines

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 16/37        |     235390     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre et contenu     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Initial concentration of substances in material
![Slide17.svg](./src_part1/Slide17.svg  "slide 17 of 37") 
note: ### Initial concentration of substances in material REF: Practical guidelines on the application of migration modelling for the estimation of specific migration in support of regulation (EU) N° 10/2011 on plastic food contact materials – JRC – EUR 27529 EN 2015 PM/REF Chemical name M r SML (mg/kg) C P,0 (%) 92880 Thiodiethanol-bis (3-(3,5-di-tert-butyl-4-hydroxyphenyl)propionate) 643 2.4 93120 Thiodipropionic acid, didodecyl ester 515 5 PP 0.1 – 0.5 93280 Thiodipropionic acid, dioctadecyl ester 683 5 PP 0.5 93520 Alpha-Tocopherol 431 60 94960 1,1,1-Trimethylol-propane 134 6 95200 1,3,5-Trimethyl-2,4,6-tris(3,5-di-tert-butyl-4-hydroxybenzyl)benzene 775 60 PP 0.2; HDPE 0.1 95270 2,4,6-Tris(tert -butyl)phenyl 2-butyl-2-ethyl-1,3-propanediol phosphite 450 2 HDPE 0.05;LDPE 0.06 95360 1,3,5-Tris(3,5-di-tert-butyl-4-hydroxybenzyl)-1,3,5-triazine-2,4,6-(1H,3H,5H)- trione 784 5 PP 0.1; HDPE 0.1 95600 1,1,3-Tris(2-methyl-4-hydroxy-5-tert-butylphenyl) butane 545 5 PE 0.1
Polyolefines PM/REF Chemical name M r SML (mg/kg) C P,0 (%) 40020 2,4-Bis(octylthiomethyl)-6-methyl-phenol 425 6 0.2 61440 2-(2;-Hydroxy-5’-methylphenyl)benzotri-azole 225 30 0.25 61600 2-Hydroxy-4-n-octylbenzophenone 326 6 0.2 68320 Octadecyl 3-(3,5-di-tert-butyl-4-hydroxy-phenyl)propionate 531 6 0.15 74240 Phosphorous acid, tris(2,4-di-tert-butylphenyl)ester 646 60 0.2 83595 Reaction product of di-tert-butyl phosphonite with biphenyl, obtained by condensation of 2,4 di-tert-butylphenol with Friedel-Crafts reaction product of phosphorus trichloride and biphenyl 595 18 0.2 94400 Triethyleneglycol-bis[3-(3-tert-butyl-4-hydroxy-5-methylphenyl) propionate] 587 18 0.2 95600 1,1,3-Tris(2-methyl-4-hydroxy-5-tert-butylphenyl) butane 545 5 0.2
Poystyrene

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 17/37        |     235395     |          3           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre et contenu     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Source: Otto G. Piringer - 2008
![Slide18.svg](./src_part1/Slide18.svg  "slide 18 of 37") 
note: ### Source: Otto G. Piringer - 2008
Molecular weight (g/mol)
Log (D)
Experimental values at 23°C in LDPE for a series of n alkanes and other organic compounds
Calculated values for 23 ° C in LDPE for a series of n alkanes and other organic compounds
A, B and C are specific polymer parameters
D* &gt; D real (worst case)
How to evaluate diffusion coefficients (D)?
Use the Piringer approach for the calculation of diffusion coefficients because the available D values are insufficient in many cases - Ap : Constante spécifique du matériau M r : Masse moléculaire de la substance (Da) T: Température en °K R = 8.314 J / K.mol

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 18/37        |     235402     |          10           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Temperature dependence of the diffusion coefficients
![Slide19.svg](./src_part1/Slide19.svg  "slide 19 of 37") 
note: ### Temperature dependence of the diffusion coefficients

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 19/37        |     235416     |          1           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Overestimiation of the diffusion coefficients by - Piringer model
![Slide20.svg](./src_part1/Slide20.svg  "slide 20 of 37") 
note: ### Overestimiation of the diffusion coefficients by - Piringer model A’p : specific constant of material M : relative molecular mass of migrant (Da) : a polymer specific “activation temperature” increment (K) R : the gas constant (8.3145 J mol −1 K −1) and (10454 R) a reference activation energy (J mol −1). Polymer T (° C) M r (g mol −1) A P '*  (K) LDPE &lt; 80 30 - 2000 11.5 0 LLDPE &lt; 100 30 - 2000 11.5 0 HDPE &lt; 90 30 - 2000 14.5 1577 PP (homo + random) &lt; 120 30 - 2000 13.1 1577 PP (blockcopolymer) &lt; 100 30 - 2000 11.5 0

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 20/37        |     235420     |          1           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre et contenu     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# How to evaluate the partition coefficients (K)?
![Slide21.svg](./src_part1/Slide21.svg  "slide 21 of 37") 
note: ### How to evaluate the partition coefficients (K)?
Use the Octanol / Water partition coefficients [Log (P)] available in the literature to estimate the partition coefficient K
Example of a polarity scale of 4 substances based on the Log (P) on a PE matrix Assessment of the partition coefficient K
K i,F /P = C i,F,eq / C i,P,eq
Non-polar (Lipophilic)
Polar (Hydrophilic)
Aqueous foods - Fatty Food
Irganox 1076 Log P = 9.909
1 Hexene Log P = 3.137
Hexamethylendiamine Log P = - 0.527
anhydrous maleic acid 0.178
K = 1
K = 1
K = 0.1
K = 0.1
PE

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 21/37        |     235425     |          17           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre seul     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Influence of D and K in migration modelling
![Slide22.svg](./src_part1/Slide22.svg  "slide 22 of 37") 
note: ### Influence of D and K in migration modelling - Migration rate  Diffusion coefficient (D)
Thermodynamic equilibrium  Partition coefficient (K)

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 22/37        |     235446     |          3           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre. Texte et image de la bibliothèque     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Initial concentration effect on migration
![Slide23.svg](./src_part1/Slide23.svg  "slide 23 of 37") 
note: ### Initial concentration effect on migration - Migration rate is proportional to the substance initial concentration in the material

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 23/37        |     235454     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Diffusion coefficient effect on migration (Temperature modification)
![Slide24.svg](./src_part1/Slide24.svg  "slide 24 of 37") 
note: ### Diffusion coefficient effect on migration (Temperature modification)
Frozen product
Chilled storage
Ambient storage
Microwave heating - Linearization of kinetic with a square root of time

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 24/37        |     235459     |          6           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Partition coefficient effect on migration (food type modification)
![Slide25.svg](./src_part1/Slide25.svg  "slide 25 of 37") 
note: ### Partition coefficient effect on migration (food type modification)
Aqueous food
Dairy product - Fatty food

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 25/37        |     235468     |          4           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# A method allowed by regulations
![Slide26.svg](./src_part1/Slide26.svg  "slide 26 of 37") 
note: ### A method allowed by regulations: Commission regulation UE n°10/2011 of 14 January 2011 (Annex 5)
2.2.3. Migration modelling “To screen for specific migration the migration potential can be calculated based on the residual content of the substance in the material or article applying generally recognised diffusion models based on scientific evidence that are constructed such as to overestimate real migration”.

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 26/37        |     235475     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Different methods for compliance assessment
![Slide27.svg](./src_part1/Slide27.svg  "slide 27 of 37") 
note: ### Different methods for compliance assessment
Screening methods - Reference methods

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 27/37        |     235479     |          3           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre seul     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Predict product regulatory compliance prior to implementation
![Slide28.svg](./src_part1/Slide28.svg  "slide 28 of 37") 
note: ### Predict product regulatory compliance prior to implementation Reduce time and cost analyses Predict health crises Evaluate the consumers exposure to substances - Why modelling substances migration?

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 28/37        |     235486     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Available migration modelling tools
![Slide29.svg](./src_part1/Slide29.svg  "slide 29 of 37") 
note: ### Available migration modelling tools Type Tool name License Stand-alone compliance testing programs Migratest © EXP https ://www.fabes-online.de/en/software-en/migratest-exp/ AKTS-SML version 6 https ://www.akts.com/sml-diffusion-migration-multilayer-packaging/download-diffusion-prediction-software.html commercial (demo available) Compliance testing client/server Client-server SFPP3 † application (SafeFoodPackaging portal version 3) to be used by one to 25 simultaneous users. http ://sfpp3.agroparistech.fr:443/cgi-bin/login.cgi SFPP3 includes all public data of the European task force TF-MATHMOD. † Interactive training on SFPP3 tools with case studies (French): http ://rmt-propackfood.ACTIA-asso.EU/ freeware, partly opensource, online access or standalone installation. Expandable preventive and safe-by-design tools FMECAengine ‡ and key2key() language enabling to simulate from one to thousands food packaging systems, an entire supply chain, etc. https ://github.com/ovitrac/FMECAengine ‡ FMECAengine includes and expands all features implemented in SFPP3. open-source (written in - Matlab ®, Octave language) Guidance EU rules : http://publications.jrc.EC.europa.EU/repository/handle/JRC98028 US rules: https:// nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100BCMB.TXT freely accessible

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 29/37        |     235490     |          1           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Example of a modelling software - Safe F ood P ackaging P ortal
![Slide30.svg](./src_part1/Slide30.svg  "slide 30 of 37") 
note: ### Example of a modelling software - Safe F ood P ackaging P ortal
http://modmol.agroparistech.fr:443/cgi-bin/login.cgi

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 30/37        |     235494     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     Titre de section     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Main modeling interface
![Slide31.svg](./src_part1/Slide31.svg  "slide 31 of 37") 
note: ### Main modeling interface - Modifier copie d’écran nb de couches  1 couche

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 31/37        |     235500     |          2           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Contact conditions between - Material / Food
![Slide32.svg](./src_part1/Slide32.svg  "slide 32 of 37") 
note: ### Contact conditions between - Material / Food
Help
Example : 1 kg of food packed in 6 dm² of material during 10 days

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 32/37        |     235506     |          3           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Packaging geometry
![Slide33.svg](./src_part1/Slide33.svg  "slide 33 of 37") 
note: ### Packaging geometry
Help
K F,P = 0.1 ou 1 depending on the solubility of the substance - Forme libre 21
Example : Irganox 1076 coming from the LDPE film of 100 µm of thickness at 25°C

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 33/37        |     235526     |          5           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Search for substance data
![Slide34.svg](./src_part1/Slide34.svg  "slide 34 of 37") 
note: ### Search for substance data
Search substances by CAS number, synonyms, molar mass, SML, ...
CAS number, substance name - The database contains all substances on the positive list

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 34/37        |     235549     |          4           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# Modelling result
![Slide35.svg](./src_part1/Slide35.svg  "slide 35 of 37") 
note: ### Modelling result
Migration kinetic of - Irganox 1076 at 25°C coming from LDPE
Substance concentration in food after 10 days

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 35/37        |     235559     |          3           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 36/37
![Slide36.svg](./src_part1/Slide36.svg  "slide 36 of 37") 
note: 

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 36/37        |     235567     |          0           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


content provided AS IS - [report a problem](mailto:olivier.vitrac@agroparistech.fr)
<!--s-->
# slide 37/37
![Slide37.svg](./src_part1/Slide37.svg  "slide 37 of 37") 
note: 

---
|     **name**     |   **id**   | **number of objects** |      **date PPTx (name)**       |
| :--------------: | :--------: | :-------------------: | :-----------------------------: |
|        slide 37/37        |     235570     |          0           |            March 19, 2020 (Specialized_Unit_4_2_modeling_monolayer_LNE.PPTX)            |
| **slide master** | **layout** |       **style**       | **date of conversion (engine)** |
|        Nouvelle présentation        |     1_Vide     |                     |             Dec 19, 2020 (extractTXTfromPPT)             |


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
> next lecture
___
####  4.3 Modelling for multi-materials, multi-steps process

> *  [part 1/1](./../../../../../lectures/html/specialized/S4/U4.3/part1.html)
___
