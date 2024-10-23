/*
 * File: lectures-prefetch.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 31st October 2023
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Wednesday, 16th October 2024
 * Modified By: Steward OUADI
 */

let dropDownMenuContent;
let lecturesDetails = new Map();
lecturesDetails.set(
  "Panorama of food packaging/panorama-of-food-packaging-part-1",
  `<h1>History and overview</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>history,overview,plastics,polymer,challenges,waste,environment,function</p><h4>Abstract</h4><p style="white-space: pre-wrap;">This course is an introduction to the entire content of the FITNess project. The history of packaging is quickly summarized through the past centuries as well as the current challenges for the environment and society. Food packaging has developed at the interface of food needs (safety, preservation), technological possibilities, requirements of retail and consumer expectations. The science of packaging is a multi-disciplinary combination of food process engineering, materials science, toxicology, microbiology, regulatory issues and many other subjects. This course introduces basic packaging terminology, the five main functional sectors of packaging: protection of the packed food against influences from the outside and the packaging itself, containment of its contents and avoidance of defects, e.g. due to corrosion; communication of necessary information (“mandatory particulars” according to Regulation 1169/2011 of the EU and the filled contents according to Council Directive 76/211/EEC), convenience, i.e. easy storage, opening and preparation by the consumer, but also helping to avoid food waste; and, finally, conservation, the functions that help to reduce the overall environmental impact of the packaged goods, right up to their disposal, recycling or re-use.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Panorama-of-food-packaging-2024.html#/1" id="lecture-button-panorama-of-food-packaging-part-1" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html#panorama-of-food-packaging-2024-single" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/glass-packaging",
  `<h1>Glass</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,glass,bottles</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Packaging systems can be made from various materials: glass materials</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Glass.html#/2" id="lecture-button-glass-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialGlass&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/metal-packaging",
  `<h1>Metal</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,metal,cans,corrosion,interactions,migration</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Packaging systems can be made from various materials: Metal Packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part3.html#/2" id="lecture-button-metal-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialMetal&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/plastic-packaging",
  `<h1>Plastic</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,plastics,polymers,migration</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Packaging systems can be made from various materials: plastics</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Plastics.html#/2" id="lecture-button-plastic-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialPlastics&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/paper-and-paperboard",
  `<h1>Paper and paperboard</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,paper,board,paperboard,migration</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Packaging systems can be made from various materials: paper and paperboard</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Paper-and-paperboard.html#/2" id="lecture-button-paper-and-paperboard" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialPaperAndBoard&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/bio-based-materials",
  `<h1>Bio-based materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,biosourced,renewable,proteins,polysaccharides,starch,cellulose</p><h4>Abstract</h4><p style="white-space: pre-wrap;">This lecture introduces bio-based materials for food packaging. Their consituents are fully or partly extracted from biomass:  polysaccharides and proteins. Materials made from biomass (renewable resources) are coined boisourced, but it does not mean that they are biodegradable. The standards applicable to these materials are briefly presented. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part8.html#/2" id="lecture-button-bio-based-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialBioBased&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/cork-as-food-packaging",
  `<h1>Cork</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,bottles,cork</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Cork: origin, process, application in wine and champagne</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part9.html#/2" id="lecture-button-cork-as-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/wood-packaging",
  `<h1>Wood</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,wood,timber</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Wood is used as food packaging and for shipment: barrels, pallets</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part10.html#/2" id="lecture-button-wood-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/Thermal, mechanical and barrier properties/thermal-properties",
  `<h1>Thermal properties</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,thermal</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/thermal-properties.html#/1" id="lecture-button-thermal-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=thermalProperties&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/Thermal, mechanical and barrier properties/mechanical-properties",
  `<h1>Mechanical properties</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,mechanical</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/mechanical-properties.html#/1" id="lecture-button-mechanical-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=mechanicalProperties&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/Thermal, mechanical and barrier properties/optical-properties",
  `<h1>Optical properties</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,optic,radiation,microwaves,refractivity</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. 
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/optical-properties.html#/1" id="lecture-button-optical-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/Thermal, mechanical and barrier properties/surface-properties",
  `<h1>Surface properties</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,surface,wetting,adhesion,coating</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/surface-properties.html#/1" id="lecture-button-surface-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/Thermal, mechanical and barrier properties/mass-transfer-properties",
  `<h1>Mass transfer properties</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,permeability,solubility,diffusion,gases</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. 
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/mass-transfer-properties.html#/1" id="lecture-button-mass-transfer-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=massTransferProperties&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/advanced-principles-of-mass-transfer-in-food-packaging",
  `<h1>Advanced principles of mass transfer</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>permeation,migration,diffusion,sorption,desorption,partition,modeling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Understanding mass transfer (diffusion, sorption/desorption, permeation, migration) is essential to the packaging designer, food and process engineer, risk assessor: Which material to choose (alone or in association)? Which thickness to reach a prescribed thickness? Are my specific migration levels acceptable? The considered solute/migrant/permeant can be a gas or an organic chemical. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/advanced-principles-of-mass-transfer-in-food-packaging.html#/1" id="lecture-button-advanced-principles-of-mass-transfer-in-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=advancedPrinciplesMassTransfer&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Kata Galić</li><li>Mia Kurek</li><li>Mario Ščetar</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/from-ideal-laminates-to-materials",
  `<h1>Calculation of permeability in composite systems</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>permeation,diffusion,defects,holes,modeling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The lecture considers the mass transfer through different types of composite materials. Contrary to what the title suggests, the permeabilities, which apply to the steady state of permeation at a constant mass transfer rate, are not the central point. Rather, the focus is on the time dependency of the mass transfer rate and its dependence on the properties of the material systems. The so-called breakthrough time is further described as the characteristic time for the transient process.

The conditions for single-phase systems and for the interface between two phases are discussed first. For the composite systems, the structure of an ideal laminate is used as a starting point. This consists of several layers of polymeric materials that are assumed to be homogeneous, firmly bonded to one another, and arranged perpendicular to the permeation direction.

The next section deals with combinations of impermeable layers (e.g. made of metals or other inorganic materials) in combination with polymer layers, where the impermeable layers have defects at which the permeation processes are concentrated.

Furthermore, porous materials are treated whose material outside the pores is approximated as impermeable. Their characteristic quantities are porosity as the volume fraction of the pores and tortuosity as the ratio of the distance traveled by the diffusing molecules (here equal to the pore length) to the material thickness. Finally, the lesson deals with particle-filled materials in which the particles, assumed to be impermeable, are present in a polymeric matrix. Here, again, tortuosity is important, as well as orientation relative to the macroscopic diffusion direction and the aspect ratio of the particles.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.4/part1.html#/2" id="lecture-button-from-ideal-laminates-to-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=calculationOfPermeabilitiesInCompositeSystems&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Oliver Miesbauer</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/diffusion-and-solubility-at-molecular-scale",
  `<h1>Multicomponent diffusion &amp; predictive models</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>diffusion,migration,interactions,mechanical,activation</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Multicomponent diffusion: diffusion and solubility at molecular scale (overview) and in non-ideal systems. Diffusion and solubility at molecular scale and in non-ideal systems: how to integrate them in mass transfer models? How to relate the chemical structure of diffusants with their diffusivity and chemical affinity in polymers? How do temperature and plasticizing activate diffusion? How to get robust estimates?   -   level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.5/part1.html#/2" id="lecture-button-diffusion-and-solubility-at-molecular-scale" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/assessments/multicomponent-diffusion-predictive-models/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/measurement-and-modeling",
  `<h1>Micro holes and leaks</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>transfers of gas and vapours,packaging properties,shelf-life</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Micro holes and leaks in packaging: Calculations (modeling), Measurement and Case studies.
Micro holes and leaks modify significantly the barrier properties of food packaging: how to characterize them and how it could affect the shelf-life ? The same question concerns the microperforated packaging which the holes have to be designed and dimensionned according the tgas transfer requirements for the packed food. This lecture present two case study : how to estimated the impact of a defect on the cheese shelf-life, the orther on the number of holes required for the preservation of mushrooms.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UB/microholes-and-leaks.html#/1" id="lecture-button-measurement-and-modeling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Frédéric Debeaufort</li></ul>`
);
lecturesDetails.set(
  "Packaging material properties/the-basics-of-mechanical-engineering-for-packaging-designer",
  `<h1>Mechanical design</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>properties,mechanical</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Mechanical engineering of food packaging.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.4/part1.html#/2" id="lecture-button-the-basics-of-mechanical-engineering-for-packaging-designer" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Murielle Hayert</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/introduction-to-mechanical-processes",
  `<h1>Introduction into mechanical processes</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>forming,filling,sealing,process,design,optimization</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-1 Introduction into mechanical processes: The most important factors for a company are i) the product quality from the customers point of view, ii) the compliance with legal requirements, iii) the profitability (costs vs. revenue). These factors are essentially determined by the packaging material and the packaging process, which are the subject of this lecture. The terminology for packaging and packaging machines is also covered to allow for a basic understanding. Finally, the economic aspects that determine the process specific cost are addressed.
This lecture is an introduction to D-2 to D-9. - level basic, intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Introduction-into-mechanical-processes.html#/1" id="lecture-button-introduction-to-mechanical-processes" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=mechanicalProcesses&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/plastic-forming",
  `<h1>Forming of pre-products</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Packaging line processes,Pre-products in packaging,Thermoforming,Blow molding,Stretch blow molding,Cold forming,Erecting,Packaging materials</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-2 Forming of pre-products: In many cases, pre-products are used to obtain the final form to the package in a packaging line. The pre-products may either be films or sheets which are transformed from the 2-dimensional into a 3-dimensional state. Another type of the pre-products are 3-dimensional pre forms that are made by injection molding. They are supplied to a packaging line, where they are transformed further via stretch blow molding into the final container.  Metal foils in laminates with polymers or covered by lacquers may be formed into small containers via cold forming. Flat cardboard blanks (cut-outs) are transformed into cardboard folding boxes via a process called erecting. These forming processes (thermoforming via deep drawing, blow molding and stretch blow molding, cold forming, erecting) can be directly integrated into a packaging line and therefore become part of the packaging process.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Forming-of-pre-products.html#/1" id="lecture-button-plastic-forming" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=formingOfPreProducts&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/aseptic-packaging",
  `<h1>Aseptic packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Aseptic,packaging</p><h4>Abstract</h4><p style="white-space: pre-wrap;">In contrast to sterilization of already packed food in its closed package, aseptic packaging combines separately sterilized food with a sterilized packaging in a sterile compartment of the machine with the help of sterile equipment. To help understand the context, the thermal processes of pasteurization and sterilization are defined and their properties are explained. 
The role of the food in its required degree of sterility and especially the dependence on its pH value are elucidated. Another part of the lecture is the separate sterilization of food containers and of packaging components. In most cases, heat and chemical disinfectants like H2O2 are used for this purpose. Another part of an aseptic processing line are clean rooms as the sterile compartment in which filling and closing take place. Their classification and their layout are explained. Testing and validation of aseptic packaging lines are also covered. Finally, different types of aseptic packaging lines are presented.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/aseptic-packaging.html#/1" id="lecture-button-aseptic-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=asepticPackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/filling-and-dosing",
  `<h1>Filling and dosing</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Filling packaging with solid dry food,Precise weight filling,Dosing and filling equipment,Compliance with regulatory limits,Gravimetric dosing,Volumetric dosing,Statistical verification of compliance,European regulations in packaging</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-4 Filling and dosing: How to fill small 25 g chip bags at a high rate and with a precise weight without breaking the sensitive products? This is a specific challenge of filling packaging with solid dry food. But also liquid or pasty food has to obey one important principle: Even though the filled quantity cannot and does not have to correspond to the last decimal place to the value printed on the pack, it must be within the specified tolerance limits established by European regulations. This lecture describes the dosing and filling equipment for different products, the accuracy of their operation and the verification of compliance with the regulatory limits. Different types of dosing devices, working with gravimetric or volumetric principles are shown for different types of food outside the beverage area. The statistical basis for verifying the compliance with the limit values is also presented.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Filling-and-dosing.html#/1" id="lecture-button-filling-and-dosing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=fillingAndDosing&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/beverage-filling",
  `<h1>Beverage filling</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>High-speed beverage filling,Bottle filling lines,Non-returnable containers,Returnable containers,Bottle filling process,Dosing of beverages,Low-oxygen filling,Bottle cleaning,Bottle closing,Bottle labeling,Secondary packaging,Unit load production</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-5 Beverage filling: Beverage containers are usually filled at speeds of several tens of thousands of bottles per hour. A bottle filling line, be it for non-returnable or returnable containers, comprises operations from de-stacking, bottle cleaning, filling, closing, labelling, followed by the steps for producing the secondary package and the unit load. From these steps, the most critical step, namely filling, is addressed in this lecture. Dosing of beverages and especially filling of rigid bottles under very low levels of oxygen are focused. Different ways for the subsequent steps of closing and labelling are also shown.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Beverage-Filling-lecture.pdf" id="lecture-button-beverage-filling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=beverageFilling&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/sealing",
  `<h1>Sealing</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sealing,bag,blister,glue,adhesion,leaks,holes,adhesive</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-6 Sealing: The safety and wholesomeness of industrially processed food cannot be considered without a well-closed package. The more general term of closing includes sealing for closing as a subset, which is dealt with in detail here. Similarity and differences between welding and sealing are elaborated.  In principle, the bonding of the joining partners is achieved by applying heat. Different options are used to generate the heat for the bonding process: Contact with a hot tool, radiation-induced heating, convection with hot gases and internal or external friction processes. Here, the temperature distribution in the sealing zone plays a special role. With cold sealing, it is also possible to carry out a joining process using only pressure without the effect of a higher temperature. However, this requires packaging surfaces that have been coated with special cold seal lacquers. The final requirements for these processes are the integrity and tightness of the seal, but also its strength against delamination. This lecture also deals with the special features of different types of sealed seams with regard to their tightness and the measurement of sealed seam tightness and sealed seam strength. Please refer to  xxx for the defect analysis.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Sealing.html#/1" id="lecture-button-sealing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=sealingAndWelding&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/forming-filling-sealing",
  `<h1>Forming, filling and sealing machinery</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Integrated packaging lines,Forming,filling,and sealing in one line,Flexible packaging,Machine efficiency in packaging,Transportation of flexible films,Force transmission in packaging machines,Deformation processes in packaging,Thermoforming,Mandrel folding,Wrapping in packaging</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-7 Forming, filling and sealing machines: In many cases, the forming, filling and sealing steps are combined in one single line. The negative impact on overall efficiency that can result from linking machines is more than compensated for by less effort for transportation and much better hygienic conditions. The lecture will focus on flexible packaging, the difficulties of transporting flexible films in the machine, in particular the aspects of force transmission and deformation processes. The lecture will also show the use of other processes for forming of packaging: thermoforming, folding on a mandrel or wrapping.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Forming-filling-and-sealing-machinery.html#/1" id="lecture-button-forming-filling-sealing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=formingFillingAndSealingMachines&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/surface-treatments-and-coatings",
  `<h1>Surface treatment and coatings</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>coating,surface,process,materials,permeation,migration,recycling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Surface treatments increase the surface energy of the packaging surface in order to maximize the contact surface area and the adhesion of adhesives, inks and coatings. Principles and available technologies are reviewed in this lecture.  -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/surface-treatments-and-coatings.html#/1" id="lecture-button-surface-treatments-and-coatings" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=surfaceTreatmentsAndCoatings&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Kata Galić</li><li>Mia Kurek</li><li>Mario Ščetar</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/vacuum-and-modified-atmosphere-packaging",
  `<h1>Vacuum and modified atmosphere packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Stability of packed food,Modified atmosphere packaging (MAP),Vacuum packaging,Headspace modification,Active modification,Passive modification,Packaging machines and technology,Gas exchange in packaging,Evacuation of filled packaging,Gas mixtures in packaging,Gas permeation,Product stability in packaging,Gas composition for different products,Retail packaging studies</p><h4>Abstract</h4><p style="white-space: pre-wrap;">D-9 Vacuum and modified atmosphere packaging: To increase the stability of packed food, the atmosphere of the headspace may either be modified (modified atmosphere packaging, MAP) or it can be minimized (in vacuum packaging). The modification of the headspace may either be achieved via a dedicated gas exchange (the so-called active modification) or by the respiratory activity of the packed product (the passive modification, predominantly for fresh produce). Machines and technology for evacuating the filled packaging, optionally with subsequent exposure to a special gas mixture, or alternatively purging the still open packaging with a gas mixture, are presented and the basic facts are discussed. The processes happening in the package after closing and the interaction with the environment via gas permeation are also addressed. The gas composition for the best product stability differ from product to product. Studies are also shown on a selection of different products purchased in retail stores that have been packaged in this way.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Vacuum-and-Modified-Atmosphere-Packaging.html#/1" id="lecture-button-vacuum-and-modified-atmosphere-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=vacuumAndModifiedAtmospherePackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Packaging line/optimization",
  `<h1>Optimization</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>process,filling,closing,bottles,optimization,machine,design</p><h4>Abstract</h4><p style="white-space: pre-wrap;">A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? Efficiency is the quality of being efficient, meaning that it produces the expected results without waste. Follow the lecture to learn mor    -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.8/part1.html#/1" id="lecture-button-optimization" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Murielle Hayert</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/shelf-life-definition",
  `<h1>Defining shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,consumer,acceptability,law</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Shelf-life is a concept covering many facets in food</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/defining-shelf-life.html#/1" id="lecture-button-shelf-life-definition" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=shelfLifeStudy&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/introduction-to-preservation-and-packaging-technologies",
  `<h1>Food preservation technologies and packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>process,aseptic,modified atmosphere,thermal</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Introduction to preservation and packaging technologies: thermal processing, modified atmosphere, aseptic packaging.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.2/part1.html#/2" id="lecture-button-introduction-to-preservation-and-packaging-technologies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/modified-atmosphere-packaging",
  `<h1>Modified atmosphere packaging and shelf-life</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>fresh product,shelf life,packaging methods</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Modified atmosphere packaging is a preservation method where the surrounding atmosphere of the product is replaced typically with an inert gas, such as nitrogen combined with an antimicrobially active carbon dioxide, and oxygen in exact amounts, to extend its shelf life. Control of water loss, protection from skin abrasion and softening, reduced contamination of the produce during handling, and delayed ripening and slow various compositional changes associated with ripening are only some benefits of using MAP. Gases used, product and storage factors to be taken into account, packaging materials, and mathematical principles are well described in this presentation. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/modified-atmosphere-packaging.html#/1" id="lecture-button-modified-atmosphere-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=modifiedAtmospherePackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Mario Ščetar</li><li>Mia Kurek</li><li>Kata Galić</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/food-packaging-interactions",
  `<h1>Food packaging interactions</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>interactions,permeation,migration,corrosion,soprtion,metal,cans</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Molecular interactions between food or/in package covers sorption, migration and permeation and begin from the moment the package contact the food. It all begins in production line and extends throughout the package shelf life and can produce adverse effects on the food and/or package.
Flavour scalping is known as loss of food constituents to packaging. The sorption of food constituents by polymeric packaging materials has received considerable attention during the past few years, and is generally recognized as a problem in the food packaging industry.
Exposure of packaged foods to ultraviolet radiation and visible light can cause (depending on food composition) oxidative deterioration of lipids, vitamins, proteins and colorants in foods so result can be formation of off-flavours, nutrient losses and discoloration of food. The sensitivity of a particular food to light will determine the selection of packaging material and its composition to protect/not react on packaged food.
Corrosion as electrochemical process that is, an exchange of electrons in the interior of cans containing food products. Internal reaction corrosion can affect the organoleptic properties of foods and as a consequence, toxicological effects on human health can occur. Factors that affecting corrosion rate are oxygen, food composition, temperature and tinplate properties. In order to prevent corrosion, protection for specific foodstuffs, an appropriate tin coating thickness and/or specific inner lacquer is applied. So lacquered can corrosion can be prevented by: heavier lacquer coating (x2), lacquer after can formation, side stripe lacquer, good lacquer adhesion, reduced handling damage, correct lacquer selection for product.
Migration is defined as «the mass transfer from an external source into food by sub-microscopic processes». Commission Regulation (EU) No 10/2011 define „Overall migration limit” (OML) means the maximum permitted amount of non-volatile substances released from a material or article into food simulants and „Specific migration limit” (SML) means the maximum permitted amount of a given substance released from a material or article into food or food simulants. 82/711/EEC, 85/572/EEC, 2007/19/EEC; Regulation (EU) No. 10/2011 Annex III:  define Food simulants with times (t) and temperatures (T) conditions.
Packaging materials may contain a variety of chemical substances that could migrate to the packaged food. Special concerns for materials and what can migrate are: monomers/oligomers: basic unit or small polymer chains, additives used in the production of plastic food contact materials (FCMs), adhesives and printing inks. Migration limits of FCMs have been set for many substances based on the toxicological risk assessment of these substances. All of these limits for known substances are included in Food Contact regulations (national and EU) with the aim to control the exposure to these substances in order to protect our health. Risk assessment of chemicals in food and their potential impact on the safety assessment of substances used in food contact materials is performed by European Food Safety Authority (EFSA) in Europe union.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/food-packaging-interaction.html#/1" id="lecture-button-food-packaging-interactions" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=foodPackagingInteractions&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Kata Galić</li><li>Mia Kurek</li><li>Mario Ščetar</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/factors-affecting-shelf-life",
  `<h1>Factors affecting shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,light,oxygen,humidity</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/factors-affecting-shelf-life.html#/1" id="lecture-button-factors-affecting-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/physico-chemical-factors-affecting-food-stability",
  `<h1>Physico chemical factors affecting food stability</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,humidity,oxygen,permeation</p><h4>Abstract</h4><p style="white-space: pre-wrap;">To understand the shelf-life properties of each food, it is necessary to know how the food can spoil and how packaging delays this process. In addition to microbiological processes, which are dealt with in detail in a separate chapter, the deterioration of food quality occurs via physical and chemical or biochemical mechanisms, as well as via the metabolism of products with active cells. In addition to the sensory quality of the food, other factors may also be important that are difficult for the consumer to perceive, but which deviate from the declared quantity, such as the filling quantity or the vitamin content. Almost all of these mechanisms are influenced by the transport of substances through the packaging. This applies to both processed and fresh products.

The most important influences are caused by the presence or absence of water vapor and oxygen, the latter often in combination with light. Another factor is the loss of flavoring substances or the entry of off-flavors.

The lesson covers the most important mechanisms of product degradation in combination with water / water vapor, with oxygen and with light, as well as the transport of flavor and off-flavors. Where possible, quantitative values are given to establish the connection with the properties of the packaging.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.1/part1.html#/2" id="lecture-button-physico-chemical-factors-affecting-food-stability" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=physicoChemicalFactorsFoodStability&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/study-shelf-life",
  `<h1>Shelf life study</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,temperature,time,activation</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/shelf-life-study.html#/1" id="lecture-button-study-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/microbiological-assessment-of-food-and-packaging",
  `<h1>Microbiological assessment of food and packaging</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>Microbiological assessment,food packaging</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The microbiological shelf life of food is determined by both the status of the food and of the associated packaging at the time of packaging.
The so-called spoilage microorganisms, which are only relevant to health in extreme quantities, and the pathogenic microorganisms, which are harmful to health or even life-threatening, even in small numbers, in the form of their metabolic products or just by themselves, must be considered separately.
The lecture gives an overview of the types of microorganisms and their living conditions, such as temperature and humidity conditions, the resulting consequences for shelf life and their determination.
The models for the time course of microbial growth are briefly presented.
Limit values for different foods are addressed.
A larger section is devoted to the principles and processes for inactivating microorganisms in food and on packaging as well as the guideline values for the maximum occurrence on different types of packaging.
This requires techniques for specifying the type and quantity of microorganisms, which are also addressed.
The lecture concludes with a concrete case study and a summary as well as the bibliography.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/microbiological-assessment-of-food-and-packaging.html#/1" id="lecture-button-microbiological-assessment-of-food-and-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=microbiologicalAssessmentOfFoodAndPackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Peter Muranyi</li><li>Bernd Kramer</li><li>Kata Galić</li><li>Mia Kurek</li><li>Mario Ščetar</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/sensory-science",
  `<h1>Sensory science applied to food packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Sensory perception,Food shelf life,Sensory analytics,Instrumental analytics,Quality evaluation,Degradation mechanisms,Packaging materials</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The essential acceptance criteria for foods by consumers are based on sensory perception. These determine whether a food is rated as more or less valuable. In connection with the packaging, the shelf life and thus the shelf life is determined by it.

In the first section (Sensory analytics of food products), this unit presents the methods used to make a reproducible and comprehensible assessment of the sensory acceptance of food. Here, the human senses serve as a measuring instrument that is not easy to calibrate.

The second section (Instrumental analytics coupled to sensory evaluation) presents selected analytical methods with which the physico-chemical product properties and product constituents behind the sensory impressions can be identified and quantified. They can be used to elucidate the physical or chemical mechanisms of the sensory perceptible quality losses and to identify the central, i.e. the most rapidly proceeding degradation mechanisms.

The third section (Sensory evaluation in shelf life testing of packed food) describes in more detail the methods to evaluate the quality evolution of food during storage and to quantify the mechanisms of deterioration.  While the simple determination of shelf life via hedonic tests can be carried out without instrumental analysis, the determination of the influences of the packaging requires deeper knowledge of the mechanisms of the sensory perceptible quality losses. Accelerated shelf-life tests also require this knowledge. For this purpose, one needs to know how the rate of the central degradation mechanisms depends on the reaction partners and reaction conditions, and this in a quantitative way. 

The fourth section (Sensory and analytical investigations of packaging materials) deals with the sensory influences that constituents of the packaging material (such as residual solvents from printing inks) exert directly on the packaged food. These influences are mainly of an olfactory nature. In rare cases, such packaging constituents can also react with ingredients of the food and form unexpected sensory active compounds.

Test your knowledge section: 

The 'Full Lecture Assessment' covers all sections of the lecture and is the only mandatory assessment required for certification. Other assessments are optional and do not count toward certification.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/sensory-science-applied-to-food-and-food-packaging.html#/1" id="lecture-button-sensory-science" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=sensoryScienceOverall&amp;sessionId=1" target="_blank">Full Lecture Assessment</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=factorsShelfLifeGeneral&amp;sessionId=1" target="_blank">General questions for introductory assessment</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=sensoryAnalyticsOfFoodProducts&amp;sessionId=1" target="_blank">Sensory analytics of food products</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=instrumentalAnalyticsCoupledToSensoryEvaluation&amp;sessionId=1" target="_blank">Instrumental analytics coupled to sensory evaluation</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=sensoryEvaluationInShelfLifeTestingOfPackedFood&amp;sessionId=1" target="_blank">Sensory evaluation in shelf life testing of packed food</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=instrumentalAnalyticsCoupledToSensoryEvaluation&amp;sessionId=1" target="_blank">Sensory investigations of packaging materials</a></p><h4>Authors</h4><ul><li>Andrea Strube</li><li>Zinaida Catruc</li><li>Horst-Christian Langowski</li><li>Kata Galić</li><li>Mia Kurek</li><li>Mario Ščetar</li></ul>`
);
lecturesDetails.set(
  "Packaging and food shelf-life/predict-shelf-life",
  `<h1>Predicting shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,prediction,degradation,microbiological,chemical</p><h4>Abstract</h4><p style="white-space: pre-wrap;">How to calculate/predict shelf-life. The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/predicting-shelf-life.html#/1" id="lecture-button-predict-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Innovative food packaging/bioplastics",
  `<h1>Bioplastics</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>biodegradable,renewable,environment,starch,polysaccharides,proteins</p><h4>Abstract</h4><p style="white-space: pre-wrap;">From polymers to bioplastics</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/bioplastics.html#/2" id="lecture-button-bioplastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialBioBased&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovative food packaging/bacterial-polyesters",
  `<h1>Bacterial Polyesters</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>PHB,bioplastic,PHBV,properties,packaging</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Among the biobased materials, the ones synthesized by microorganisms are of great interest in the sense that thanks to the metabolic engineering of those microorganisms, it is possible to adjust the physicochemical properties of such biobased polymers together with the possibilities to introduce repeating units of a different nature in the macromolecular backbone by feeding the microorgansisms with various carbon sources.
This unit provides an overview of: i) the classification and structures of PHAs, ii) the established methods for the synthesis of PHAs and their copolymers by microorganisms, iii) the main properties of such biobased polymers and iv) their major applications.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/bacterial-polyesters.html#/2" id="lecture-button-bacterial-polyesters" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=bacterialPolyester&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>María José Fabra</li><li>Eugenia Núñez-Calzado</li><li>Cristina Campano</li><li>Amparo López-Rubio</li></ul>`
);
lecturesDetails.set(
  "Innovative food packaging/advanced-cellulosic-materials-for-food-packaging",
  `<h1>Advanced cellulosic materials</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Cellulose,nanocellulose,advanced coatings,cellulose nanocrystals,barrier properties,packaging</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Global food packaging is a billion-dollar market that is projected to reach USD 464 billion by 2027. In general, there are many types of packaging materials available in the market, such as plastics, glass, aluminium and paper. However, cellulose and its derivates has received great attention recently as food pacakjging materials due to environmental pressure by local authorities or driven by national and international policy. This is also because of sustainabililty, renewability and disposal issues. This unit compiles recent advances of cellulose-based packaging materials and the use of nanocellulose (especially nanofibrillated cellulose (NFC), cellulose nmanocrystals (CNC) and bacterial cellulose (BC)) to enhace barrier properties and other performance attributes of new generations of packaging materials. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/Advanced-cellulosic-materials.html#/2" id="lecture-button-advanced-cellulosic-materials-for-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=cellulose&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>María José Fabra</li><li>Eugenia Núñez-Calzado</li><li>Amparo López-Rubio</li></ul>`
);
lecturesDetails.set(
  "Innovative food packaging/active-packaging",
  `<h1>Active packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>active,absorber,scavanger,emitter,oxygen,CO2</p><h4>Abstract</h4><p style="white-space: pre-wrap;">With the concept of active packaging, the packaging system is not inert anymore and the active system is interacting with the food and/or its atmosphere. Active systems require to be beneficial for the food. Note that the use of active systems may have legal implications. Content: overview, oxygen scavengers, CO2 absorbing/releasing systems, ethylene scavengers, flavor/odor absorber/releaser, antioxidants. - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/active-packaging.html#/2" id="lecture-button-active-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=activePackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovative food packaging/smart-packaging",
  `<h1>Intelligent packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>RFID,smart,indicator</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Intelligent packaging concepts bring intelligent functions to the packaging  (detecting, sensing, recording, tracing, communicating, applying some mathematical logic). Content: overview, indicators, RFID, sensors, commercially available intelligent packaging systems.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.3/part1.html#/2" id="lecture-button-smart-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=smartPackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovative food packaging/nanotechnology-strategies",
  `<h1>Nanotechnology strategies</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>properties,nanotechnology,active,smart</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Nanotechnology is an umbrella name covering different technologies, capabilities and impacts. They are essential to advanced, active, smart food packaging systems.   - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.4/part1.html#/2" id="lecture-button-nanotechnology-strategies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=nanomaterials&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Sustainability and packaging/sustainability-and-packaging",
  `<h1>What is suistainability?</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sustainability,environment,ecodesign,LCA,bottles</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Food Packaging needs to be sustainable. What does it mean? How to use Life Cycle Analysis (LCA) to evaluate the impact of food packaging and to $eco-design$ new food packaging.       -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part1.html#/2" id="lecture-button-sustainability-and-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Sustainability and packaging/life-cycle-assessment",
  `<h1>Life Cycle Assessment</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sustainability,environment,ecodesign,LCA,bottles</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Food Packaging needs to be sustainable. What does it mean? How to use Life Cycle Analysis (LCA) to evaluate the impact of food packaging and to $eco-design$ new food packaging.       -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part2.html#/2" id="lecture-button-life-cycle-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Tools for life cycle impact assessment/introduction-to-Circular-Economy",
  `<h1>Introduction to Circular Economy</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Circular Economy,Sustainability Challenges,Circular Transition,Circular Principles,Circular Business Models</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Objectives of the Course: 
    • Understand the concept of the circular economy and its significance in addressing global sustainability challenges
    • Explore the transition from a linear to a circular economy and the implications for businesses, governments, and society
    • Identify the key principles and pillars of the circular economy model
    • Discover circular business models</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/introduction-circular-ecocomy.html#/1" id="lecture-button-introduction-to-Circular-Economy" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=circularEconomy&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Tools for life cycle impact assessment/environmental-legislation-for-packaging",
  `<h1>Environmental legislation for packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Environmental Regulations,Extended Responsibility</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Objectives of the Course: 
    • Know European environmental regulations linked to packaging
    • Understand the concept of Extended Producer Responsibility </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/environmental-legislation.html#/1" id="lecture-button-environmental-legislation-for-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=environmentalLegislation&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Ejsi Hasanbelliu</li><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Tools for life cycle impact assessment/ecodesign",
  `<h1>Ecodesign</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Ecodesign Concepts,Design Tools,Environmental Integration,Generative Design,Circularity Indicators</p><h4>Abstract</h4><p style="white-space: pre-wrap;">This course introduces the fundamental concepts, of ecodesign and tools for the desing process. Students will learn how to integrate environmental considerations into design processes to reduce the ecological impact of products from conception to end-of-life. Generative design tools adapted to early design phases and evaluative tools for later desing phases are presented, including circularity indicators.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/ecodesign.html#/1" id="lecture-button-ecodesign" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=ecodesign&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Tools for life cycle impact assessment/ecodesign-applied-to-packaging",
  `<h1>Ecodesign applied to packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Ecodesign Principles,Sustainable Packaging,Packaging Lifecycle,Design Strategies,Case Studies</p><h4>Abstract</h4><p style="white-space: pre-wrap;">This course focuses on the principles of Ecodesign in the packaging sector, emphasizing sustainable solutions throughout the packaging lifecycle. Students learn about the specificities of the packaging sector, adpted design strategies for ecocesing, and gain insights from case studies on successful sustainable packaging innovations.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/ecodesign-packaging.html#/1" id="lecture-button-ecodesign-applied-to-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=ecodesignPackaging&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Tools for life cycle impact assessment/environmental-impact-of-food-packaging",
  `<h1>Environmental impact of food packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Packaging Impact,Resource Use,Waste Generation,Carbon Footprint,Packaging Sustainability</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Environmental impact of food packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/environmental-impact.html#/1" id="lecture-button-environmental-impact-of-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html#environmental-impact-of-food-packaging" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/environmental-impact-of-plastics-and-recycling",
  `<h1>Environmental and human health impacts of packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>environment,recycling,wastes,microplastics,LCA,ecodesign</p><h4>Abstract</h4><p style="white-space: pre-wrap;">There is no doubt plastics have changed our society and its habits since their use in the 1950s. Thanks to their versatility and workability, plastics have been used to meet all the needs of human beings, from physiological needs, safety, social belonging, esteem, and self-actualization. Today, pollution by plastics, due to mismanagement of the collection system, is one of the most important global issue facing our society.
The first part of this unit is devoted to the environmental impact of plastics. Global data on plastics for food packaging are presented as well as the health risk associated with microplastics in soils and oceans.
The second part of this unit is dedicated to the recycling of plastics. In this section, the actors in the recycling chain and the regulations related to the recycling process, materials and labels are discussed. Next, the concept of recyclability and the differences in recycling terminology (recyclable, renewable, biodegradable, compostable…) are explained. Finally, the main differences between mechanical and chemical recycling are explained.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/environmental-impact-of-plastics-and-recycling.html#/1" id="lecture-button-environmental-impact-of-plastics-and-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Massimiliano Gerometta</li><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/safety-assessment-of-recycling-processes",
  `<h1>Safety assessment of plastic recycling processes</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>recycling,process,pet,bottles,risk</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The directive (EU) 2019/904 requires the phase out of single-use plastics, the generalization of recycling and the reuse of materials in contact with food. The recycling of materials for food contact is authorized in Europe and the USA but under certain conditions. These include the control of deposits, cleaning of polymers, mechanical or chemical recycling, and the implementation of good industrial practices within the framework of regulation (EU) 2023/2006. For health safety reasons, only mechanical recycling of PET is now widespread and complies with clearly defended standards (regulation (EU) 282/2008). This course explains the conditions for the evaluation of recycled PET (rPET): validation of a recycling process and of the utilization of the recycled material.    Level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.5/part1.html#/2" id="lecture-button-safety-assessment-of-recycling-processes" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/glass-food-contact-material-recycling",
  `<h1>Glass food contact material recycling</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>glass,recycling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">This lecture provides an overview of the recycling process for food contact glass. The composition and production of glass for food contact applications are explored, with a particular focus on glass cullet and its pivotal role in glass recycling. Key stages in the glass recycling process are introduced including collection, separation and cleaning, sorting, melting, as well as molding and annealing. Environmental implications are analyzed, highlighting the efficiency gains and emission reductions stemming from recycled glass compared to primary production. Links to explanatory videos and further reading are provided that offer more information on individual processing steps and concepts.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/glass-food-contact-material-recycling.html" id="lecture-button-glass-food-contact-material-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=glassFoodContactMaterialRecycling&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Joel Scheuchzer</li><li>Justin Boucher</li><li>Lindsey Parkinson</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/metal-food-contact-material-recycling",
  `<h1>Metal food contact material recycling</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>metal,recycling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">This lecture provides an overview of the recycling process for food contact metals with a focus on aluminum and steel. It introduces existing collection methods including curbside collection, bring banks, and container deposit systems. The basic processing steps for recycling each metal type are summarized along with photos, explanatory videos, and links to publications that provide more detail. Key environmental benefits from recycling, as well as impacts stemming from the recycling processes are also reviewed along with European regulations pertinent to metal recycling.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/metal-food-contact-material-recycling.html" id="lecture-button-metal-food-contact-material-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=metalFoodContactMaterialRecycling&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Lindsey Parkinson</li><li>Justin Boucher</li><li>Joel Scheuchzer</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/plastics-recycling",
  `<h1>Plastics recycling</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Plastics recycling,Recycling technology,Material recycling,Mechanical recycling,Solvent-based recycling,Chemical recycling,Food packaging safety</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Plastics Recycling – Rationale and Technology

The European Union and the United Nations are pursuing a strategy to reduce resource consumption and waste, as well as emissions to air, soil and water. At the same time, however, food losses are also to be significantly reduced. This requires that the functionality of packaging and thus the shelf life of the products it contains be maintained. As a result, recycling of used packaging is becoming an essential element of this strategy. Recycling is often a complex process for plastic packaging, which is why this lecture will focus on its technical implications.

As a rough classification, the following methods of technical recycling exist for used plastic items: - Material recycling as a physical process, with the subgroups of mechanical recycling and solvent-based recycling, in which the macromolecules of the polymers are retained and 
- chemical recycling, with the subgroups of depolymerization, in which monomers are produced, and conversion to other small molecules, up to and including energy recovery using the resulting CO2. However, the chemical processes require a higher overall energy input and are less mature on a large scale.

Therefore, this lecture only covers the material recycling processes of mechanical and solvent-based recycling. The principles and sub-steps are presented and - as a special point for its use in food packaging - the decontamination of the material along the recycling path. This point also defines the limits especially of polyolefin recycling, in contrast to recycling of PET. Thus, processes with high decontamination efficiency, such as solvent-based processes, may become more important in the future than they are today.

Finally, four case studies / project examples are shown which demonstrate the ongoing research and development in this area.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/plastics-recycling.html#/1" id="lecture-button-plastics-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=plasticsRecycling&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Maximilian Wende</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/microplastics",
  `<h1>Overview of the Microplastics Issue</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Microplastics Origins,Microplastics Effects,Pollution Sources,Marine Impact,Legal Restrictions</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The lecture covers general information on the origins, distribution, and effects of microplastics on ecosystems and human health. It provides an overview of the global production and pollution of plastics, classifying microplastics as primary or secondary, depending on their source. It addresses how microplastics enter natural habitats, primarily through land-based activities and marine sources. The impacts on marine life, terrestrial ecosystems, and human health are summarized, and legal measures to restrict microplastics are shown. The lecture concludes with open questions regarding the long-term health effects and environmental fate of microplastics, calling for further research on exposure pathways, breakdown kinetics, and size-related toxicity.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/microplastics.html#/1" id="lecture-button-microplastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=microplastics&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/biodegradability-and-biobased-carbon-content",
  `<h1>Biodegradability and biobased carbon content</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Biodegradability Standards,Biobased Content,Biodegradation Processes,Polymer Biodegradation,Biobased Plastics</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The lecture on Biodegradability and Biobased Carbon Content of Plastic Packaging Materials focuses on biobased materials and biodegradability standards. It covers general definitions from the IUPAC and international standards for biobased content and biodegradability criteria. It gives detailed information on biodegradation processes and biodegradation measurement. Some examples of biodegradation of polymers are discussed. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/AgroParisTech/biodegradation.html#/1" id="lecture-button-biodegradability-and-biobased-carbon-content" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=biodegradation&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/reusable-and-returnable-systems",
  `<h1>Reusable and returnable systems</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Reusable packaging,Packaging systems,Refillable packaging,Environmental impacts,System scale-up</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Reusable packaging&nbsp;is durable and designed to be used multiple times for the same purpose as initially intended. A growing interest in reusable packaging systems, such as returnable and refillable packaging is recognized as a viable approach to reduce packaging waste and overall environmental impacts compared to single use alternatives. 
However, transitioning from single-use to reusable packaging systems can be complex and require input from several actors including industry stakeholders, academia, consumers and policy makers to successfully implement and scale-up reuse and fully consider the influences on environmental, health, economic, social and technical aspects. This includes the possible migration of hazardous chemicals from packaging into food. This lecture introduces the fundamentals of reuse systems as well as aspects to consider within system scale up.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/U_Aarhus/reusable-and-returnable-systems.html#/1" id="lecture-button-reusable-and-returnable-systems" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Ilke Uysal Unalan</li><li>Justin Boucher</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/basic-legal-framework",
  `<h1>Basic legal framework on food packaging materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>regulation,plastics,europe</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Basic legal framework (chemicals, contact material, environment, consumer safety). Food packaging must comply with several obligations and legislations on chemicals, contact material, environment, consumer safety. - level basic</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.3/part1.html#/1" id="lecture-button-basic-legal-framework" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Patrick Sauvegrain</li><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/eu-us-regulatory-framework",
  `<h1>Regulatory framework in the EU and the US</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>materials,regulation,plastics,EU,US,FCM,compliance,testing</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Since 1976, the regulation of food contact materials, including food packaging, is managed at the European level. However, not all of 17 groups of materials benefit from harmonized regulations. This lecture provides an overview of applicable regulations and of their principles. They obey to the same aim protecting consumers.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/LNE/regulatory-framework-in-the-EU-and-the-US.html#/1" id="lecture-button-eu-us-regulatory-framework" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/regulatory-context-EU-and-US/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Patrick Sauvegrain</li><li>Catherine Loriot</li><li>Jean-Mario Julien</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/recycled-plastics",
  `<h1>Recycled plastics - Regulation (EU) 2022/1616</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>Recycled plastics regulation,EU regulation,Regulatory context,Plastic recycling measures,Member state compliance,Material safety,Legislative updates</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Specific measures for recycled plastics Regulation (EU) No 2022/1616 repealing Regulation (EC) No 282/2008.
Regulatory context EU and member states </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/LNE/recycled-plastics.html#/1" id="lecture-button-recycled-plastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/regulatory-context-EU-and-US/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Catherine Loriot</li><li>Jean-Mario Julien</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/gmp-and-quality-assurance-standards",
  `<h1>GMP and quality assurance standards</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>regulation,GMP,safety,compliance,FCM</p><h4>Abstract</h4><p style="white-space: pre-wrap;">GMP, Safety, Quality management system, Responsibilities and Certification: Food contact materials need to be produced and recycled according to Good Manufacturing Practices (GMP), Safety &amp;amp; Quality management systems. The responsibilities and and the possible certification systems are presented in this lecture.   - level intermediate </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/LNE/gmp-and-quality-assurance-standards.html" id="lecture-button-gmp-and-quality-assurance-standards" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/gmp-and-quality-assurance-standards/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/universe-of-food-contact-chemicals",
  `<h1>Universe of food contact chemicals</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>chemicals,recycling,reuse,food contact chemicals</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Foodware and food packaging products can contain thousands of different chemicals, many of which can migrate from the materials into food and have hazardous properties that harm health. This lecture introduces the currently known universe of the thousands of different chemicals that can be present in food contact materials. It explains fundamental concepts such as the waste hierarchy including reuse and recycling, specifically in the context of food contact chemicals. The chemical diversity and migration potential of different food contact materials is explored including the fundamental distinction between permanent and non-permanent materials. Learners gain insights into both the knowns and known unknowns about the chemicals present in food contact materials with references to additional resources that dive deeper into the topic. Furthermore, the chemical complexities and limitations associated with "bio-based" or "biodegradable" materials are addressed. Upon completion, learners will be better equipped to navigate scientific and policy discussions surrounding the chemical safety of food contact materials, especially concerning reuse and recycling.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/universe-of-food-contact-chemicals.html" id="lecture-button-universe-of-food-contact-chemicals" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=universeOfFoodContactChemicals&amp;sessionId=1" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Justin Boucher</li><li>Lisa Zimmermann</li><li>Birgit Geueke</li><li>Joel Scheuchzer</li><li>Lindsey Parkinson</li><li>Jane Muncke</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Overview on risk assessment/introduction",
  `<h1>Introduction</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard,risk,toxicology,endocrine</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Food safety is essential and a prerequisite step in any innovation strategy. In Europe, Risk Assessment (RA) is an independent scientific process and it is the foundation upon which the risk analysis is built for food safety.The objectives of these lectures: hazard identification and characterization (Unit 1.1 Specialized), the exposure assessment and the risk characterization (Unit 1.2 Specialized) are to get specialized training in food safety and risk assessment. As foodstuffs are wrapped with packaging, the risk linked to Intentionally Added Substances (IAS), used for Food Contact Materials (FCM), must be assessed as they can be released into the food. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/introduction.html#/1" id="lecture-button-introduction" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Overview on risk assessment/identification",
  `<h1>Identification</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard,risk,toxicology,endocrine,prediction</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Firstly, the hazard identification and characterization lecture introduce the context of the food safety regarding food chemicals. The specific Mode of Action of carcinogenic substances (genotoxic or not) is particularly addressed with special tools to assess the risk due to DNA reactive substances. New emerging risk such as endocrine disrupters is introduced as FCM substances may be concerned (e.g. BPA). The four pillars of chemical RA are described in detail. Each step of RA is specific and permit to generate precious information.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/identification.html#/1" id="lecture-button-identification" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Overview on risk assessment/characterization",
  `<h1>Characterization</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Once the hazard is identified, during the first step “Hazard assessment”, it needs to be characterized. The objective of this second step named “Hazard characterization” is to determine Toxicological Reference Values to protect the human health.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/characterization.html#/1" id="lecture-button-characterization" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Overview on risk assessment/exposure-and-risk-assessment",
  `<h1>Exposure and risk assessment</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Then, in the third step named “Exposure assessment” the human exposure is determined. It consists to study foodstuff chemical contamination and foodstuff consumption. Regarding to FCM, the level of migration will determine the consumer exposure. To going further see the units on migration modelling in monomaterials (Unit 4.2 Specialized) and migration modelling for multimaterials, multistep process, reusable materials (Unit4.3 Specialized).'Risk characterization' is the final step of the risk assessment which will define if there is a safety concern or not for the consumer exposed to the substance of interest. Conclusions and scientific opinions made by RA agencies, such as EFSA, are useful for risk managers to reduce the consumer exposition if necessary and to write/amend new regulations. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/exposure-assessment.html#/1" id="lecture-button-exposure-and-risk-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Overview on risk assessment/risk-assessment-tools",
  `<h1>Risk assessment tools</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The Unit called “Risk assessment pragmatic tools, FCM specificities and NIAS issues” introduces the Threshold of Toxicological Concern (TTC) approach as a useful tool to predict the risk assessment of a substance at low level in food when toxicological data are missing. Then, the risk assessment of Food Contact Materials (FCM) is also discussed. Finally, since NIAS are the major source of alerts regards to food contact materials, the last section is dedicated to the risk assessment of Non-Intentionally Added Substance (NIAS) and strategies to help industries to manage the risk linked to NIAS. Regards to FCM, to going further see units : basic legal framework and unit : EU, US and others regulations.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/risk-assessment-tools.html#/1" id="lecture-button-risk-assessment-tools" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/migration-modeling-in-monomaterials",
  `<h1>Migration modeling in monomaterials</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>diffusion,migration,modeling,partition,plastics,regulation,compliance,risk</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Desorption of substances from materials in direct contact with food (of finite volume $V_F$) is coined migration. This mass transfer is full described in a simple case by the a dimensionless time Fo=D_Pxt/l_p^2 , the packaging-to-food volume ratio L_PF=V_P/V_F and the partition coefficient K_FP=C_P^eq/C_Peq. This lecture will explain why the migration is so different between fatty and aqueous food products, between a rubber and a glassy material, between a small and large migrant...  - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.2/part1.html#/2" id="lecture-button-migration-modeling-in-monomaterials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/migration-modeling-for-monomaterials/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/migration-modeling-in-multimaterials",
  `<h1>Migration modeling in multimaterials</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>diffusion,migration,modeling,plastics,regulation,compliance,design,risk</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The results of monomaterials are generalized to multimaterials and multilayers enabling the simulation of the migration of adhesive, printing ink.. constituents.   -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.3/part1.html#/2" id="lecture-button-migration-modeling-in-multimaterials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/introduction-to-decision-theory-and-risk-management",
  `<h1>Introduction to decision theory and risk management</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>risk,modeling,decision,probabilistic,uncertainty</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Taking decisions under uncertainty may look usually more an art than a science. It is not correct and many results obtained in decision theory can be used in risk management. Very conservative scenarios minimize the risk to claim that a food packaging is safe, when it is not (risk of *first kind* = risk for the consumer). Conversely, they maximize the risk to discard a design, a formulation when it is safe (risk of *second kind* = risk for the supplier). A compromise exists by listing alternative scenarios and by clarifying the sources of uncertainty. A model with too much safety factors will provide unrealistic scenarios and will be unable to rank alternatives (i.e. to order scenarios according to the real risk of migration into foods ).   - level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.1/part1.html#/2" id="lecture-button-introduction-to-decision-theory-and-risk-management" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/managing-uncertainty-by-intervals-and-worst-case-scenarios",
  `<h1>Managing uncertainty by intervals and worst-case scenarios</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>risk,modeling,migration,uncertainty,overestimation</p><h4>Abstract</h4><p style="white-space: pre-wrap;">For any quantity involved in migration/decision models, it is easy to define a lower and an upper bounds. From these simple considerations, a full monotonic algebra can be derived. As an example: min+min=min, max+max=max.  This lecture presents *physically-inspired* rules to derive similar monotonic scenarios for migration modeling. Two principles i) the mass action law (all transfer are proportional to initial amounts, transferred amounts cannot exceed total migration) and ii) entropy production (maximizing the dispersion of substances with time) are used to build robust scenarios subjected to strong uncertainties on chemical affinities and diffusivities. A methodology for a judicious choice of transport and thermodynamic parameters is exemplified. It is shown that they can orient irreversibly mass transfer in space and in time. &lt;u&gt;The method is accepted for compliance testing&lt;/u&gt;.- level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.2/part1.html#/2" id="lecture-button-managing-uncertainty-by-intervals-and-worst-case-scenarios" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/probabilistic-approaches-and-bayesian-approaches",
  `<h1>Probabilistic approaches and Bayesian approaches</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>risk,modeling,migration,uncertainty,probabilistic,overestimation</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Mass transfer equations (transport and boundary conditions) are not linear in time and space. Monotonic properties, shown in 2.2, are used to derive a general methodology to calculate migration and food contamination, when all properties are governed by arbitrary statistics representing either variabilities (initial amounts, thicknesses, contact times, temperature) or uncertainty (diffusivities, chemical affinity). This lecture will enable you to evaluate the probability the contamination of food exceeds a prescribed value. As a result, the calculated distributions can be used for calculating exposure by taking into account (or not) the practices of the consumer and of the supply chain. - level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.3/part1.html#/2" id="lecture-button-probabilistic-approaches-and-bayesian-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/history-and-principles-of-FMEA-FMECA",
  `<h1>History and principles of FMEA-FMECA</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,risk,safety,modeling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">When something dramatic occurs, there is not one single cause. Failure modes, effects, and criticality analysis is a methodology (FMECA) originating from the aeronautic industry to identify and analyze: all potential failure models of the various components of a system, the effects these failures may have on the system, how to avoid the failures and/or to mitigate their effects. The microbiological risks and some physical risks are managed already by the food industry by closely related methods (e.g., HACCP). The FMECA method has been proposed to manage chemical risks associated to migration and cross mass-transfer between materials. The method is compliant with the obligations set in regulations (EC) 2023/2006, 282/2008. They open the way to safe-by-design/preventive approaches of the contamination.  -   level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.1/part1.html#/2" id="lecture-button-history-and-principles-of-FMEA-FMECA" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/diagram-based-approaches",
  `<h1>Diagram-based approaches</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,migration,risk,safety,modeling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">The FMECA approach requires to build large inventories and functional relations between entities and events. Diagrams help to organize the initial brain-storming and to orient future priorities.  -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.2/part1.html#/2" id="lecture-button-diagram-based-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/computer-aided-approaches",
  `<h1>Computer-aided approaches</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,migration,risk,safety,modeling</p><h4>Abstract</h4><p style="white-space: pre-wrap;">FMECA approaches (application to mass transfer problems): Computer-aided approaches facilitate the deployment of FMECA approaches. The lecture illustrates various situations calculated with the open-source software FMECAengine identification of critical steps, components, substances   -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.3/part1.html#/2" id="lecture-button-computer-aided-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/principles-of-online-databases",
  `<h1>Principles of online databases</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,modeling,thermodynamics</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Molecular and thermodynamical modeling can fill the gap of missing data for some polymers, specific molecules (non-intentionally added substances), conditions (migration at rubber state) etc. With time, calculations tend to be cheaper and faster than experiments, while offering similar reliability.   -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.1/part1.html#/2" id="lecture-button-principles-of-online-databases" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/microscopic-theories-of-transport-coefficients-and-free-energies",
  `<h1>Microscopic theories of transport coefficients and free-energies</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,modeling,thermodynamics</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Diffusion in solids are less described than in liquids and gases. Theories are scarce and the last results of research are presented.  -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/part1.html#/2" id="lecture-button-microscopic-theories-of-transport-coefficients-and-free-energies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/calculation-using-fluctuation-theorems",
  `<h1>Calculation using fluctuation theorems</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,partition,affinity,solubility,modeling,thermodynamics</p><h4>Abstract</h4><p style="white-space: pre-wrap;">Properties related to free-energies (solubilities, activity coefficients, miscibility...) can be calculated by brute force calculations at atomistic scale assuming a disordered mixture at molecule scale.    -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.3/part1.html#/2" id="lecture-button-calculation-using-fluctuation-theorems" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
dropDownMenuContent = `<div>
    <button class="dropdown-btn" id="dropdown-btn-Panorama of food packaging">Panorama of food packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Panorama of food packaging"><a
            href="#Panorama of food packaging/panorama-of-food-packaging-part-1"
            id="Panorama of food packaging/panorama-of-food-packaging-part-1" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">History and overview<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Packaging materials">Packaging materials<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging materials"><a
            href="#Packaging materials/glass-packaging" id="Packaging materials/glass-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Glass<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/metal-packaging" id="Packaging materials/metal-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Metal<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/plastic-packaging" id="Packaging materials/plastic-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Plastic<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/paper-and-paperboard" id="Packaging materials/paper-and-paperboard"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Paper and paperboard<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/bio-based-materials" id="Packaging materials/bio-based-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Bio-based materials<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/cork-as-food-packaging" id="Packaging materials/cork-as-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Cork<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a href="#Packaging materials/wood-packaging"
            id="Packaging materials/wood-packaging" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Wood<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Packaging material properties">Packaging material properties<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging material properties"><button class="dropdown-btn"
            id="dropdown-btn-Thermal, mechanical and barrier properties">Thermal, mechanical and barrier properties<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Thermal, mechanical and barrier properties"><a
                href="#Packaging material properties/Thermal, mechanical and barrier properties/thermal-properties"
                id="Packaging material properties/Thermal, mechanical and barrier properties/thermal-properties"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Thermal properties<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a><a
                href="#Packaging material properties/Thermal, mechanical and barrier properties/mechanical-properties"
                id="Packaging material properties/Thermal, mechanical and barrier properties/mechanical-properties"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mechanical properties<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a><a
                href="#Packaging material properties/Thermal, mechanical and barrier properties/optical-properties"
                id="Packaging material properties/Thermal, mechanical and barrier properties/optical-properties"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Optical properties<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a><a
                href="#Packaging material properties/Thermal, mechanical and barrier properties/surface-properties"
                id="Packaging material properties/Thermal, mechanical and barrier properties/surface-properties"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Surface properties<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a><a
                href="#Packaging material properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
                id="Packaging material properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mass transfer properties<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><a
            href="#Packaging material properties/advanced-principles-of-mass-transfer-in-food-packaging"
            id="Packaging material properties/advanced-principles-of-mass-transfer-in-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Advanced principles of mass transfer<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging material properties/from-ideal-laminates-to-materials"
            id="Packaging material properties/from-ideal-laminates-to-materials" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Calculation of permeability in composite systems<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging material properties/diffusion-and-solubility-at-molecular-scale"
            id="Packaging material properties/diffusion-and-solubility-at-molecular-scale"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Multicomponent diffusion &amp;
            predictive models<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging material properties/measurement-and-modeling"
            id="Packaging material properties/measurement-and-modeling" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Micro holes and leaks<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging material properties/the-basics-of-mechanical-engineering-for-packaging-designer"
            id="Packaging material properties/the-basics-of-mechanical-engineering-for-packaging-designer"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mechanical design<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a>
    </div><button class="dropdown-btn" id="dropdown-btn-Packaging processes">Packaging processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging processes"><a
            href="#Packaging processes/introduction-to-mechanical-processes"
            id="Packaging processes/introduction-to-mechanical-processes" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Introduction into mechanical processes<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging processes/plastic-forming" id="Packaging processes/plastic-forming"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Forming of pre-products<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/aseptic-packaging" id="Packaging processes/aseptic-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Aseptic packaging<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/filling-and-dosing" id="Packaging processes/filling-and-dosing"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Filling and dosing<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/beverage-filling" id="Packaging processes/beverage-filling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Beverage filling<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Packaging processes/sealing"
            id="Packaging processes/sealing" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Sealing<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/forming-filling-sealing" id="Packaging processes/forming-filling-sealing"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Forming, filling and sealing
            machinery<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/surface-treatments-and-coatings"
            id="Packaging processes/surface-treatments-and-coatings" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Surface treatment and coatings<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/vacuum-and-modified-atmosphere-packaging"
            id="Packaging processes/vacuum-and-modified-atmosphere-packaging" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Vacuum and modified atmosphere packaging<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><button class="dropdown-btn"
            id="dropdown-btn-Packaging line">Packaging line<i class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Packaging line"><a
                href="#Packaging processes/Packaging line/optimization"
                id="Packaging processes/Packaging line/optimization" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Optimization<i class="fa fa-star star-color-red little-space"></i><i
                    class="fa fa-star star-color-red little-space"></i><i
                    class="fa fa-star star-color-red little-space"></i></a></div>
    </div><button class="dropdown-btn" id="dropdown-btn-Packaging and food shelf-life">Packaging and food shelf-life<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging and food shelf-life"><a
            href="#Packaging and food shelf-life/shelf-life-definition"
            id="Packaging and food shelf-life/shelf-life-definition" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Defining shelf life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging and food shelf-life/introduction-to-preservation-and-packaging-technologies"
            id="Packaging and food shelf-life/introduction-to-preservation-and-packaging-technologies"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Food preservation technologies and
            packaging<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging and food shelf-life/modified-atmosphere-packaging"
            id="Packaging and food shelf-life/modified-atmosphere-packaging" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Modified atmosphere packaging and shelf-life<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Packaging and food shelf-life/food-packaging-interactions"
            id="Packaging and food shelf-life/food-packaging-interactions" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Food packaging interactions<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging and food shelf-life/factors-affecting-shelf-life"
            id="Packaging and food shelf-life/factors-affecting-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Factors affecting shelf life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging and food shelf-life/physico-chemical-factors-affecting-food-stability"
            id="Packaging and food shelf-life/physico-chemical-factors-affecting-food-stability"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Physico chemical factors affecting food
            stability<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging and food shelf-life/study-shelf-life" id="Packaging and food shelf-life/study-shelf-life"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Shelf life study<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging and food shelf-life/microbiological-assessment-of-food-and-packaging"
            id="Packaging and food shelf-life/microbiological-assessment-of-food-and-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Microbiological assessment of food and
            packaging<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Packaging and food shelf-life/sensory-science" id="Packaging and food shelf-life/sensory-science"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Sensory science applied to food
            packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging and food shelf-life/predict-shelf-life"
            id="Packaging and food shelf-life/predict-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Predicting shelf life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Innovative food packaging">Innovative food packaging<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Innovative food packaging"><a
            href="#Innovative food packaging/bioplastics" id="Innovative food packaging/bioplastics"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Bioplastics<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovative food packaging/bacterial-polyesters" id="Innovative food packaging/bacterial-polyesters"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Bacterial Polyesters<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovative food packaging/advanced-cellulosic-materials-for-food-packaging"
            id="Innovative food packaging/advanced-cellulosic-materials-for-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Advanced cellulosic materials<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovative food packaging/active-packaging" id="Innovative food packaging/active-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Active packaging<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovative food packaging/smart-packaging" id="Innovative food packaging/smart-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Intelligent packaging<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovative food packaging/nanotechnology-strategies"
            id="Innovative food packaging/nanotechnology-strategies" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Nanotechnology strategies<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Ecodesign tools and technologies">Ecodesign tools and technologies<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Ecodesign tools and technologies"><button
            class="dropdown-btn" id="dropdown-btn-Sustainability and packaging">Sustainability and packaging<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Sustainability and packaging"><a
                href="#Ecodesign tools and technologies/Sustainability and packaging/sustainability-and-packaging"
                id="Ecodesign tools and technologies/Sustainability and packaging/sustainability-and-packaging"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">What is suistainability?<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Ecodesign tools and technologies/Sustainability and packaging/life-cycle-assessment"
                id="Ecodesign tools and technologies/Sustainability and packaging/life-cycle-assessment"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Life Cycle Assessment<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Tools for life cycle impact assessment">Tools for life cycle impact assessment<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Tools for life cycle impact assessment"><a
                href="#Ecodesign tools and technologies/Tools for life cycle impact assessment/introduction-to-Circular-Economy"
                id="Ecodesign tools and technologies/Tools for life cycle impact assessment/introduction-to-Circular-Economy"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Introduction to Circular Economy<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Ecodesign tools and technologies/Tools for life cycle impact assessment/environmental-legislation-for-packaging"
                id="Ecodesign tools and technologies/Tools for life cycle impact assessment/environmental-legislation-for-packaging"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Environmental legislation for
                packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Ecodesign tools and technologies/Tools for life cycle impact assessment/ecodesign"
                id="Ecodesign tools and technologies/Tools for life cycle impact assessment/ecodesign"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Ecodesign<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Ecodesign tools and technologies/Tools for life cycle impact assessment/ecodesign-applied-to-packaging"
                id="Ecodesign tools and technologies/Tools for life cycle impact assessment/ecodesign-applied-to-packaging"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Ecodesign applied to packaging<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Ecodesign tools and technologies/Tools for life cycle impact assessment/environmental-impact-of-food-packaging"
                id="Ecodesign tools and technologies/Tools for life cycle impact assessment/environmental-impact-of-food-packaging"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Environmental impact of food
                packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
            href="#Ecodesign tools and technologies/environmental-impact-of-plastics-and-recycling"
            id="Ecodesign tools and technologies/environmental-impact-of-plastics-and-recycling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Environmental and human health impacts
            of packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Ecodesign tools and technologies/safety-assessment-of-recycling-processes"
            id="Ecodesign tools and technologies/safety-assessment-of-recycling-processes"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Safety assessment of plastic recycling
            processes<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Ecodesign tools and technologies/glass-food-contact-material-recycling"
            id="Ecodesign tools and technologies/glass-food-contact-material-recycling" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Glass food contact material recycling<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Ecodesign tools and technologies/metal-food-contact-material-recycling"
            id="Ecodesign tools and technologies/metal-food-contact-material-recycling" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Metal food contact material recycling<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Ecodesign tools and technologies/plastics-recycling"
            id="Ecodesign tools and technologies/plastics-recycling" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Plastics recycling<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Ecodesign tools and technologies/microplastics" id="Ecodesign tools and technologies/microplastics"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview of the Microplastics Issue<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Ecodesign tools and technologies/biodegradability-and-biobased-carbon-content"
            id="Ecodesign tools and technologies/biodegradability-and-biobased-carbon-content"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Biodegradability and biobased carbon
            content<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Ecodesign tools and technologies/reusable-and-returnable-systems"
            id="Ecodesign tools and technologies/reusable-and-returnable-systems" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Reusable and returnable systems<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a>
    </div><button class="dropdown-btn" id="dropdown-btn-Legislation and safety">Legislation and safety<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Legislation and safety"><a
            href="#Legislation and safety/basic-legal-framework" id="Legislation and safety/basic-legal-framework"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Basic legal framework on food packaging
            materials<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Legislation and safety/eu-us-regulatory-framework"
            id="Legislation and safety/eu-us-regulatory-framework" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Regulatory framework in the EU and the US<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation and safety/recycled-plastics" id="Legislation and safety/recycled-plastics"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Recycled plastics - Regulation (EU)
            2022/1616<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Legislation and safety/gmp-and-quality-assurance-standards"
            id="Legislation and safety/gmp-and-quality-assurance-standards" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">GMP and quality assurance standards<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation and safety/universe-of-food-contact-chemicals"
            id="Legislation and safety/universe-of-food-contact-chemicals" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Universe of food contact chemicals<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><button class="dropdown-btn"
            id="dropdown-btn-Overview on risk assessment">Overview on risk assessment<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Overview on risk assessment"><a
                href="#Legislation and safety/Overview on risk assessment/introduction"
                id="Legislation and safety/Overview on risk assessment/introduction" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Introduction<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Legislation and safety/Overview on risk assessment/identification"
                id="Legislation and safety/Overview on risk assessment/identification" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Identification<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Legislation and safety/Overview on risk assessment/characterization"
                id="Legislation and safety/Overview on risk assessment/characterization"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Characterization<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Legislation and safety/Overview on risk assessment/exposure-and-risk-assessment"
                id="Legislation and safety/Overview on risk assessment/exposure-and-risk-assessment"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Exposure and risk assessment<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#Legislation and safety/Overview on risk assessment/risk-assessment-tools"
                id="Legislation and safety/Overview on risk assessment/risk-assessment-tools"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Risk assessment tools<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a></div>
    </div><button class="dropdown-btn" id="dropdown-btn-Modeling tools">Modeling tools<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Modeling tools"><a
            href="#Modeling tools/migration-modeling-in-monomaterials"
            id="Modeling tools/migration-modeling-in-monomaterials" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Migration modeling in monomaterials<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Modeling tools/migration-modeling-in-multimaterials"
            id="Modeling tools/migration-modeling-in-multimaterials" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Migration modeling in multimaterials<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/introduction-to-decision-theory-and-risk-management"
            id="Modeling tools/introduction-to-decision-theory-and-risk-management" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Introduction to decision theory and risk management<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Modeling tools/managing-uncertainty-by-intervals-and-worst-case-scenarios"
            id="Modeling tools/managing-uncertainty-by-intervals-and-worst-case-scenarios"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Managing uncertainty by intervals and
            worst-case scenarios<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/probabilistic-approaches-and-bayesian-approaches"
            id="Modeling tools/probabilistic-approaches-and-bayesian-approaches" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Probabilistic approaches and Bayesian approaches<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/history-and-principles-of-FMEA-FMECA"
            id="Modeling tools/history-and-principles-of-FMEA-FMECA" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">History and principles of FMEA-FMECA<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Modeling tools/diagram-based-approaches" id="Modeling tools/diagram-based-approaches"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Diagram-based approaches<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/computer-aided-approaches" id="Modeling tools/computer-aided-approaches"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Computer-aided approaches<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/principles-of-online-databases" id="Modeling tools/principles-of-online-databases"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Principles of online databases<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/microscopic-theories-of-transport-coefficients-and-free-energies"
            id="Modeling tools/microscopic-theories-of-transport-coefficients-and-free-energies"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Microscopic theories of transport
            coefficients and free-energies<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Modeling tools/calculation-using-fluctuation-theorems"
            id="Modeling tools/calculation-using-fluctuation-theorems" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Calculation using fluctuation theorems<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div>
</div>`;
