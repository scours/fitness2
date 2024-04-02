/*
 * File: lectures-prefetch.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 31st October 2023
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Tuesday, 2nd April 2024
 * Modified By: Steward OUADI
 */

let dropDownMenuContent;
let lecturesDetails = new Map();
lecturesDetails.set(
  "Packaging materials/Introduction/panorama-of-food-packaging-part-1",
  `<h1>Panorama of food packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>history,overview,plastics,polymer,challenges,waste,environment,function</p><h4>Abstract</h4><p>This course is an introduction to the entire content of the FITNess project. The history of plastics is quickly summarized through the past centuries as well as the current challenges for the environment and society. Food packaging has developed at the interface of food needs (safety, preservation), technological possibilities and consumer expectations. The science of packaging combines food process engineering, materials science, toxicology, microbiology, regulations...). This course introduces the seven functions of packaging: preserving food quality; preventing microbiological risk; preserving the integrity of the packaging and its contents; preventing chemical risk; preserving the environment; meeting the technical and economic requirements of the manufacturer and the user of the packaging; interacting and communicating with the consumer.</p><a target="_blank" class="btn btn-primary" href="http://fitness.pbf.hr/fitness/lectures/html/common/S1/U1.1/part1.html#/1" id="lecture-button-panorama-of-food-packaging-part-1" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/glass-packaging",
  `<h1>Glass</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,glass,bottles</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: glass materials</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Glass.html#/2" id="lecture-button-glass-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#materialGlass" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/metal-packaging",
  `<h1>Metal</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,metal,cans,corrosion,interactions,migration</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: Metal Packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part3.html#/2" id="lecture-button-metal-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#materialMetal" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/plastic-packaging",
  `<h1>Plastic</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,plastics,polymers,migration</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: plastics</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Plastics.html#/2" id="lecture-button-plastic-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#materialPlastics" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/paper-and-paperboard",
  `<h1>Paper and paperboard</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,paper,board,paperboard,migration</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: paper and paperboard</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Paper-and-paperboard.html#/2" id="lecture-button-paper-and-paperboard" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#materialPaperAndBoard" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/bio-based-materials",
  `<h1>Bio-based materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,biosourced,renewable,proteins,polysaccharides,starch,cellulose</p><h4>Abstract</h4><p>This lecture introduces bio-based materials for food packaging. Their consituents are fully or partly extracted from biomass:  polysaccharides and proteins. Materials made from biomass (renewable resources) are coined boisourced, but it does not mean that they are biodegradable. The standards applicable to these materials are briefly presented. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part8.html#/2" id="lecture-button-bio-based-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#materialBioBased" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/cork-as-food-packaging",
  `<h1>Cork</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,bottles,cork</p><h4>Abstract</h4><p>Cork: origin, process, application in wine and champagne</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part9.html#/2" id="lecture-button-cork-as-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Packaging materials and shaping process/wood-packaging",
  `<h1>Wood</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,wood,timber</p><h4>Abstract</h4><p>Wood is used as food packaging and for shipment: barrels, pallets</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part10.html#/2" id="lecture-button-wood-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/Basic legal framework/legal-framework-overview",
  `<h1>Basic legal framework (chemicals, contact material, environment, consumer safety)</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>regulation,plastics,europe</p><h4>Abstract</h4><p>Food packaging must comply with several obligations and legislations on chemicals, contact material, environment, consumer safety. - level basic</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.3/part1.html#/2" id="lecture-button-legal-framework-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer",
  `<h1>Mechanical design of packaging: an introduction</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>properties,mechanical</p><h4>Abstract</h4><p>Mechanical engineering of food packaging  (please read §2.1 and §2.2 before) - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.4/part1.html#/2" id="lecture-button-the-basics-of-mechanical-engineering-for-packaging-designer" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Murielle Hayert</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/thermal-properties",
  `<h1>Thermal properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,thermal</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part1.html#/2" id="lecture-button-thermal-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties",
  `<h1>Mechanical properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,mechanical</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part2.html#/2" id="lecture-button-mechanical-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties",
  `<h1>Mass transfer properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,permeability,solubility,diffusion,gases</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. 
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part3.html#/2" id="lecture-button-mass-transfer-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/optical-properties",
  `<h1>Optical properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,optic,radiation,microwaves,refractivity</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. 
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part4.html#/2" id="lecture-button-optical-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/surface-properties",
  `<h1>Surface properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,surface,wetting,adhesion,coating</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part5.html#/2" id="lecture-button-surface-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Chemical and physical/food-packaging-interaction",
  `<h1>Food packaging interaction</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>interactions,permeation,migration,corrosion,metal,cans</p><h4>Abstract</h4><p>Chemical and physical stability of packaging materials</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/food-packaging-interaction.html#/2" id="lecture-button-food-packaging-interaction" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mario Scetar</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Principles of mass transfer/advanced-principles-of-mass-transfer-in-food-packaging",
  `<h1>Principles of mass transfer - Mass transfer in food packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>permeation,migration,diffusion,sorption,desorption,partition,modeling</p><h4>Abstract</h4><p>Understanding mass transfer (diffusion, sorption/desorption, permeation, migration) is essential to the packaging designer, food and process engineer, risk assessor: Which material to choose (alone or in association)? Which thickness to reach a prescribed thickness? Are my specific migration levels acceptable? The considered solute/migrant/permeant can be a gas or an organic chemical. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/advanced-principles-of-mass-transfer-in-food-packaging.html#/2" id="lecture-button-advanced-principles-of-mass-transfer-in-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mia Kurek</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials",
  `<h1>Permeability in composites: from ideal laminates to materials with defects and dispersed particles.</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>permeation,diffusion,defects,holes,modeling</p><h4>Abstract</h4><p>The results of diffusion/migration in multimaterial/multilayer are exemplified at steady state to derive effective permeabilities from composite systems.  -  level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.4/part1.html#/2" id="lecture-button-from-ideal-laminates-to-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Oliver Miesbauer</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale",
  `<h1>Multicomponent diffusion: diffusion and solubility at molecular scale (overview) and in non-ideal systems</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>diffusion,migration,interactions,mechanical,activation</p><h4>Abstract</h4><p>Diffusion and solubility at molecular scale and in non-ideal systems: how to integrate them in mass transfer models? How to relate the chemical structure of diffusants with their diffusivity and chemical affinity in polymers? How do temperature and plasticizing activate diffusion? How to get robust estimates?   -   level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.5/part1.html#/2" id="lecture-button-diffusion-and-solubility-at-molecular-scale" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling",
  `<h1>Micro holes and leaks in packaging – measurement and modeling</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>defects,holes,permeation,shelf-life,modeling,oxygen</p><h4>Abstract</h4><p>Micro holes and leaks modify significantly the barrier properties of food packaging: how to characterize them? measure and simulate their effects. -  level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.6/part1.html#/2" id="lecture-button-measurement-and-modeling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Frederic Debeaufort</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/introduction-to-mechanical-processes",
  `<h1>Introduction into mechanical processes in packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>forming,filling,sealing,process,design,optimization</p><h4>Abstract</h4><p>The most important factors for a company: i) Product quality from the customer's point of view, ii) Compliance with legal requirements, iii) Profitability: costs vs. revenue. These factors are essentially determined by the packaging material and the packaging process. This lecture is an introduction to U8.2-U8.6.    - level basic, intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.1/part1.html#/2" id="lecture-button-introduction-to-mechanical-processes" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Forming/plastic-forming",
  `<h1>Plastics forming</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>forming,thermoforming,erecting,line,process</p><h4>Abstract</h4><p>This lecture describes plastics forming processes that can be directly integrated into a packaging line: thermoforming, cold forming, erecting.     - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.2/part1.html#/2" id="lecture-button-plastic-forming" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Forming/films-and-sheets",
  `<h1>Films and sheets</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-films-and-sheets" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Author</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Filling and dosing/principles",
  `<h1>Principles</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>dosing,food,weight,statistical,calibration,legal,optimization</p><h4>Abstract</h4><p>How to fill small 25 g chip bags at a high rate and with a precise weight without breaking them. This is the challenge of filling packaging with solid food. The weight cannot be exact in relation to the printed value on the package, but it must absolutely be within precise tolerance values by legislation in place (European rules). This lecture presents the principles and their implementation for powdered dry food but also for ready meals that do not flow.    - level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.3/part1.html#/2" id="lecture-button-principles" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Filling and dosing/forming-filling-sealing",
  `<h1>Forming, filling, sealing</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>forming,filling,sealing,food,thermoforming,modified atmosphere,aseptic</p><h4>Abstract</h4><p>Ready-to-eat foods are packaged in a variety of different shapes and sizes to suit the use and minimize food waste: bowls, cups, blister packs, bags... or simply wrapped in film. The aseptic packaging allows the conservation over several days or even weeks without heat treatment. Like modified atmosphere filling, it has its own constraints. In particular, the volume of air/atmosphere that must be maintained under strong aseptic constraints without affecting production rates or the safety of the final product must be minimized.        -  level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.6/part1.html#/2" id="lecture-button-forming-filling-sealing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Filling and dosing/beverage-filling",
  `<h1>Beverage filling</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>filling,bottles,labels,aseptic,thermal,pressure,design,optimization</p><h4>Abstract</h4><p>The bottles are filled at speeds of several thousand or even tens of thousands of bottles per hour. The bottles are eventually cleaned, filled, heat treated (if necessary), labeled, cartoned and palletized in parallel. Not only does the bottle have to be filled with the right volume, but also the overpressure and usually negative pressure requirements have to be met. The constraints of asepticity/sanitization, leak tightness and air/oxygen removal are discussed in this course.    -  level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.5/part1.html#/2" id="lecture-button-beverage-filling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Sealing/overview",
  `<h1>Closing, hot/cold sealing, welding, sealed seams and packages</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sealing,bag,blister,glue,adhesion,leaks,holes,adhesive</p><h4>Abstract</h4><p>The safety and wholesomeness of industrially processed food cannot be considered without a good seal. There is no point in paying for a barrier package if the closure is porous and allows gases (oxygen, water vapour) to pass through. This lecture details the systems of closing, sealing, sealing, gluing. Please refer to §4.6 for the defect analysis.      - level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.4/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/surface-treatments-and-coatings",
  `<h1>Surface treatment and coating principles and technologies.</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>coating,surface,process,materials,permeation,migration,recycling</p><h4>Abstract</h4><p>Surface treatments increase the surface energy of the packaging surface in order to maximize the contact surface area and the adhesion of adhesives, inks and coatings. Principles and available technologies are reviewed in this lecture.  -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.7/part1.html#/2" id="lecture-button-surface-treatments-and-coatings" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mia Kurek</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Printing and labelling processes/overview",
  `<h1>Printing and labelling processes</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Author</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Digitization of packaging processes/overview",
  `<h1>Digitization of packaging processes</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Author</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Packaging line/optimization",
  `<h1>Optimization</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>process,filling,closing,bottles,optimization,machine,design</p><h4>Abstract</h4><p>A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? Efficiency is the quality of being efficient, meaning that it produces the expected results without waste. Follow the lecture to learn mor    -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.8/part1.html#/1" id="lecture-button-optimization" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Murielle Hayert</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Packaging line/hygienic-design",
  `<h1>Hygienic design</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-hygienic-design" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Author</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies",
  `<h1>Introduction to preservation and packaging technologies</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>process,aseptic,modified atmosphere,thermal</p><h4>Abstract</h4><p>Introduction to preservation and packaging technologies: thermal processing, modified atmosphere, aseptic packaging.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.2/part1.html#/2" id="lecture-button-introduction-to-preservation-and-packaging-technologies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/Common physical chemical factors affecting food stability/overview",
  `<h1>Overview physical and chemical processes impacting the shelf-life of food-products (processed or not)</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,humidity,oxygen,permeation</p><h4>Abstract</h4><p>Effects of water, oxygen, light, flavor losses, fresh food products, functionality requirements (please read §2.4 before) - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.1/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/Food packaging and shelf life/shelf-life-definitions",
  `<h1>Definitions</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,consumer,acceptability,law</p><h4>Abstract</h4><p>Shelf-life is a concept covering many facets in food (please read §3.1 before)  - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part1.html#/2" id="lecture-button-shelf-life-definitions" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life",
  `<h1>Factors affection shelf-life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,light,oxygen,humidity</p><h4>Abstract</h4><p>The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part2.html#/2" id="lecture-button-factors-affecting-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/Food packaging and shelf life/study-shelf-life",
  `<h1>How to study shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,temperature,time,activation</p><h4>Abstract</h4><p>The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part3.html#/2" id="lecture-button-study-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/Food packaging and shelf life/predict-shelf-life",
  `<h1>How to calculate/predict shelf-life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,prediction,degradation,microbiological,chemical</p><h4>Abstract</h4><p>The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part4.html#/2" id="lecture-button-predict-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/interaction",
  `<h1>Interaction</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p></p><h4>Abstract</h4><p>Food packaging interaction</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/food-packaging-interaction.html#/2" id="lecture-button-interaction" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mario Scetar</li></ul>`
);
lecturesDetails.set(
  "Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging",
  `<h1>Sustainability and Packaging - What is suistainability? (part 1/2)</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sustainability,environment,ecodesign,LCA,bottles</p><h4>Abstract</h4><p>Food Packaging needs to be sustainable. What does it mean? How to use Life Cycle Analysis (LCA) to evaluate the impact of food packaging and to $eco-design$ new food packaging.       -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part1.html#/2" id="lecture-button-sustainability-and-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment",
  `<h1>Sustainability and Packaging - Life Cycle Assessment (part 2/2)</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sustainability,environment,ecodesign,LCA,bottles</p><h4>Abstract</h4><p>Food Packaging needs to be sustainable. What does it mean? How to use Life Cycle Analysis (LCA) to evaluate the impact of food packaging and to $eco-design$ new food packaging.       -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part2.html#/2" id="lecture-button-life-cycle-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Environmental pollution/Tools for life cycle impact assessment/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>environment,ecodesign,LCA,design</p><h4>Abstract</h4><p>Eco-design of Packaging - Overview - Why eco-design? – Introduction and definitions General design process Tools of eco-design Case studies Advances and limits of LCA analysis - Evaluation of food/packaging systems through the supply chain</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.2/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Environmental pollution/Glass food contact material recycling/glass-food-contact-material-recycling",
  `<h1>Glass food contact material recycling</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>glass,recycling</p><h4>Abstract</h4><p>This lecture provides an overview of the recycling process for food contact glass. The composition and production of glass for food contact applications are explored, with a particular focus on glass cullet and its pivotal role in glass recycling. Key stages in the glass recycling process are introduced including collection, separation and cleaning, sorting, melting, as well as molding and annealing. Environmental implications are analyzed, highlighting the efficiency gains and emission reductions stemming from recycled glass compared to primary production. Links to explanatory videos and further reading are provided that offer more information on individual processing steps and concepts.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/glass-food-contact-material-recycling.html" id="lecture-button-glass-food-contact-material-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#glassFoodContactMaterialRecycling" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Joel Scheuchzer</li><li>Justin Boucher</li><li>Lindsey Parkinson</li></ul>`
);
lecturesDetails.set(
  "Environmental pollution/Metal food contact material recycling/metal-food-contact-material-recycling",
  `<h1>Metal food contact material recycling</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>metal,recycling</p><h4>Abstract</h4><p>This lecture provides an overview of the recycling process for food contact metals with a focus on aluminum and steel. It introduces existing collection methods including curbside collection, bring banks, and container deposit systems. The basic processing steps for recycling each metal type are summarized along with photos, explanatory videos, and links to publications that provide more detail. Key environmental benefits from recycling, as well as impacts stemming from the recycling processes are also reviewed along with European regulations pertinent to metal recycling.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/metal-food-contact-material-recycling.html" id="lecture-button-metal-food-contact-material-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#metalFoodContactMaterialRecycling" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Lindsey Parkinson</li><li>Justin Boucher</li><li>Joel Scheuchzer</li></ul>`
);
lecturesDetails.set(
  "Environmental pollution/Biodegradation and microplastics/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>biodegradable,pollution,regulation,renewable,environment,bottles</p><h4>Abstract</h4><p>Food packaging accounts for approximately 40% of the uses of plastics, but accounts for more than half of plastic waste. Non-food uses are more durable, while the lifespan of plastic packaging usually does not exceed half a year. The fragmentation of uncollected plastics and their reuse as recycled textile fibers is the main source of microplastics and marine litter. The understanding of biodegradation phenomena is essential to appreciate the impact of plastics on the environment, whether they are biodegradable or not.     - Level basic, intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.3/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Marketing and design/Sensory science/sensory-science",
  `<h1>Sensory science</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/sensory-science-applied-to-food-and-food-packaging.html#/1" id="lecture-button-sensory-science" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#factorsShelfLifeGeneral" target="_blank">General questions for introductory assessment</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#sensoryAnalyticsOfFoodProducts" target="_blank">Sensory analytics of food products</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#instrumentalAnalyticsCoupledToSensoryEvaluation" target="_blank">Instrumental analytics coupled to sensory evaluation</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#sensoryEvaluationInShelfLifeTestingOfPackedFood" target="_blank">Sensory evaluation in shelf life testing of packed food</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#instrumentalAnalyticsCoupledToSensoryEvaluation" target="_blank">Sensory investigations of packaging materials</a></p><h4>Authors</h4><ul><li>Author</li></ul>`
);
lecturesDetails.set(
  "Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>biodegradable,renewable,environment,starch,polysaccharides,proteins</p><h4>Abstract</h4><p>Biobased and biodegradable materials: from polymers to bioplastics</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/biobased-and-biodegradable-materials.html#/2" id="lecture-button-from-polymers-to-bioplastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#materialBioBased" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/Active packaging/overview",
  `<h1>Overview and principles</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>active,absorber,scavanger,emitter,oxygen,CO2</p><h4>Abstract</h4><p>With the concept of active packaging, the packaging system is not inert anymore and the active system is interacting with the food and/or its atmosphere. Active systems require to be beneficial for the food. Note that the use of active systems may have legal implications. (please read §1 before). Content: overview, oxygen scavengers, CO2 absorbing/releasing systems, ethylene scavengers, flavor/odor absorber/releaser, antioxidants. - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/active-packaging.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#activePackaging" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/Smart packaging/overview",
  `<h1>From principles to commercially available intelligent packaging systems</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>RFID,smart,indicator</p><h4>Abstract</h4><p>Smart packaging concepts bring intelligent functions to the packaging  (detecting, sensing, recording, tracing, communicating, applying some mathematical logic) (please read §1 before). Content: overview, indicators, RFID, sensors, commercially available intelligent packaging systems - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.3/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#smartPackaging" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/Nanotechnology strategies/definitions",
  `<h1>Definitions, nano-scale additives, examples of gains and applications.</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>properties,nanotechnology,active,smart</p><h4>Abstract</h4><p>Nanotechnology is an umbrella name covering different technologies, capabilities and impacts. They are essential to advanced, active, smart food packaging systems.   - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.4/part1.html#/2" id="lecture-button-definitions" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#nanomaterials" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/Bacterial polyesters/bacterial-polyesters",
  `<h1>Bacterial Polyesters</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>PHB,bioplastic,PHBV,properties,packaging</p><h4>Abstract</h4><p>Among the biobased materials, the ones synthesized by microorganisms are of great interest in the sense that thanks to the metabolic engineering of those microorganisms, it is possible to adjust the physicochemical properties of such biobased polymers together with the possibilities to introduce repeating units of a different nature in the macromolecular backbone by feeding the microorgansisms with various carbon sources.
This unit provides an overview of: i) the classification and structures of PHAs, ii) the established methods for the synthesis of PHAs and their copolymers by microorganisms, iii) the main properties of such biobased polymers and iv) their major applications.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/bacterial-polyesters.html#/2" id="lecture-button-bacterial-polyesters" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#bacterialPolyester" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>María José Fabra</li><li>Eugenia Núñez-Calzado</li><li>Cristina Campano</li><li>Amparo López-Rubio</li></ul>`
);
lecturesDetails.set(
  "Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging",
  `<h1>Advanced cellulosic materials for food packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Cellulose,nanocellulose,advanced coatings,cellulose nanocrystals,barrier properties,packaging</p><h4>Abstract</h4><p>Global food packaging is a billion-dollar market that is projected to reach USD 464 billion by 2027. In general, there are many types of packaging materials available in the market, such as plastics, glass, aluminium and paper. However, cellulose and its derivates has received great attention recently as food pacakjging materials due to environmental pressure by local authorities or driven by national and international policy. This is also because of sustainabililty, renewability and disposal issues. This unit compiles recent advances of cellulose-based packaging materials and the use of nanocellulose (especially nanofibrillated cellulose (NFC), cellulose nmanocrystals (CNC) and bacterial cellulose (BC)) to enhace barrier properties and other performance attributes of new generations of packaging materials. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/Advanced-cellulosic-materials.html#/2" id="lecture-button-advanced-cellulosic-materials-for-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#cellulose" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>María José Fabra</li><li>Eugenia Núñez-Calzado</li><li>Amparo López-Rubio</li></ul>`
);
lecturesDetails.set(
  "Innovations/Modified atmosphere packaging/modified-atmosphere-packaging",
  `<h1>Modified atmosphere packaging</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>fresh product,shelf life,packaging methods</p><h4>Abstract</h4><p>Modified atmosphere packaging is a preservation method where the surrounding atmosphere of the product is replaced typically with an inert gas, such as nitrogen combined with an antimicrobially active carbon dioxide, and oxygen in exact amounts, to extend its shelf life. Control of water loss, protection from skin abrasion and softening, reduced contamination of the produce during handling, and delayed ripening and slow various compositional changes associated with ripening are only some benefits of using MAP. Gases used, product and storage factors to be taken into account, packaging materials, and mathematical principles are well described in this presentation. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/modified-atmosphere-packaging.html#/1" id="lecture-button-modified-atmosphere-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mario Ščetar</li><li>Mia Kurek</li><li>Kata Galić</li></ul>`
);
lecturesDetails.set(
  "Recoverability/Environmental impact of plastics and recycling/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>environment,recycling,wastes,microplastics,LCA,ecodesign</p><h4>Abstract</h4><p>There is no doubt plastics have changed our society and its habits since their use in the 1950s. Thanks to their versatility and workability, plastics have been used to meet all the needs of human beings, from physiological needs, safety, social belonging, esteem, and self-actualization. Today, pollution by plastics, due to mismanagement of the collection system, is one of the most important global issue facing our society.
The first part of this unit is devoted to the environmental impact of plastics. Global data on plastics for food packaging are presented as well as the health risk associated with microplastics in soils and oceans.
The second part of this unit is dedicated to the recycling of plastics. In this section, the actors in the recycling chain and the regulations related to the recycling process, materials and labels are discussed. Next, the concept of recyclability and the differences in recycling terminology (recyclable, renewable, biodegradable, compostable…) are explained. Finally, the main differences between mechanical and chemical recycling are explained.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.4/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Recoverability/Safety assessment of recycling processes/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>recycling,process,pet,bottles,risk</p><h4>Abstract</h4><p>The directive (EU) 2019/904 requires the phase out of single-use plastics, the generalization of recycling and the reuse of materials in contact with food. The recycling of materials for food contact is authorized in Europe and the USA but under certain conditions. These include the control of deposits, cleaning of polymers, mechanical or chemical recycling, and the implementation of good industrial practices within the framework of regulation (EU) 2023/2006. For health safety reasons, only mechanical recycling of PET is now widespread and complies with clearly defended standards (regulation (EU) 282/2008). This course explains the conditions for the evaluation of recycled PET (rPET): validation of a recycling process and of the utilization of the recycled material.    Level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.5/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Legislation/EU, US others regulations/regulatory-framework",
  `<h1>Regulatory framework in the EU and the US</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>materials,regulation,plastics,EU,US,FCM,compliance,testing</p><h4>Abstract</h4><p>Since 1976, the regulation of food contact materials, including food packaging, is managed at the European level. However, not all of 17 groups of materials benefit from harmonized regulations. This lecture provides an overview of applicable regulations and of their principles. They obey to the same aim protecting consumers.    - level intermediate*</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S3/U3.1/part1.html#/2" id="lecture-button-regulatory-framework" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/regulatory-context-EU-and-US/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation/GMP and quality assurance standards/safety-and-quality-management-system",
  `<h1>GMP, Safety, Quality management system, Responsibilities and Certification</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>regulation,GMP,safety,compliance,FCM</p><h4>Abstract</h4><p>Food contact materials need to be produced and recycled according to Good Manufacturing Practices (GMP), Safety &amp;amp; Quality management systems. The responsibilities and and the possible certification systems are presented in this lecture.   - level intermediate </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/LNE/gmp-and-quality-assurance-standards.html" id="lecture-button-safety-and-quality-management-system" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/gmp-and-quality-assurance-standards/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation/Universe of food contact chemicals/universe-of-food-contact-chemicals",
  `<h1>Universe of food contact chemicals</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>chemicals,recycling,reuse,food contact chemicals</p><h4>Abstract</h4><p>Foodware and food packaging products can contain thousands of different chemicals, many of which can migrate from the materials into food and have hazardous properties that harm health. This lecture introduces the currently known universe of the thousands of different chemicals that can be present in food contact materials. It explains fundamental concepts such as the waste hierarchy including reuse and recycling, specifically in the context of food contact chemicals. The chemical diversity and migration potential of different food contact materials is explored including the fundamental distinction between permanent and non-permanent materials. Learners gain insights into both the knowns and known unknowns about the chemicals present in food contact materials with references to additional resources that dive deeper into the topic. Furthermore, the chemical complexities and limitations associated with "bio-based" or "biodegradable" materials are addressed. Upon completion, learners will be better equipped to navigate scientific and policy discussions surrounding the chemical safety of food contact materials, especially concerning reuse and recycling.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/universe-of-food-contact-chemicals.html" id="lecture-button-universe-of-food-contact-chemicals" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#universeOfFoodContactChemicals" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Justin Boucher</li><li>Lisa Zimmermann</li><li>Birgit Geueke</li><li>Joel Scheuchzer</li><li>Lindsey Parkinson</li><li>Jane Muncke</li></ul>`
);
lecturesDetails.set(
  "Legislation/Hazard identification and characterization/introduction",
  `<h1>Introduction</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard,risk,toxicology,endocrine</p><h4>Abstract</h4><p>Food safety is essential and a prerequisite step in any innovation strategy. In Europe, Risk Assessment (RA) is an independent scientific process and it is the foundation upon which the risk analysis is built for food safety.The objectives of these lectures: hazard identification and characterization (Unit 1.1 Specialized), the exposure assessment and the risk characterization (Unit 1.2 Specialized) are to get specialized training in food safety and risk assessment. As foodstuffs are wrapped with packaging, the risk linked to Intentionally Added Substances (IAS), used for Food Contact Materials (FCM), must be assessed as they can be released into the food. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/Hazard-id-char-part-1.html#/" id="lecture-button-introduction" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation/Hazard identification and characterization/identification",
  `<h1>Identification</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard,risk,toxicology,endocrine,prediction</p><h4>Abstract</h4><p>Firstly, the hazard identification and characterization lecture introduce the context of the food safety regarding food chemicals. The specific Mode of Action of carcinogenic substances (genotoxic or not) is particularly addressed with special tools to assess the risk due to DNA reactive substances. New emerging risk such as endocrine disrupters is introduced as FCM substances may be concerned (e.g. BPA). The four pillars of chemical RA are described in detail. Each step of RA is specific and permit to generate precious information.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/Hazard-id-char-part-2.html#/" id="lecture-button-identification" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation/Hazard identification and characterization/characterization",
  `<h1>Characterization</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p>Once the hazard is identified, during the first step “Hazard assessment”, it needs to be characterized. The objective of this second step named “Hazard characterization” is to determine Toxicological Reference Values to protect the human health.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/Hazard-id-char-part-3.html#/" id="lecture-button-characterization" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation/Exposure and risk assessment/exposure-and-risk-assessment",
  `<h1>Exposure and risk assessment</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p>Then, in the third step named “Exposure assessment” the human exposure is determined. It consists to study foodstuff chemical contamination and foodstuff consumption. Regarding to FCM, the level of migration will determine the consumer exposure. To going further see the units on migration modelling in monomaterials (Unit 4.2 Specialized) and migration modelling for multimaterials, multistep process, reusable materials (Unit4.3 Specialized).'Risk characterization' is the final step of the risk assessment which will define if there is a safety concern or not for the consumer exposed to the substance of interest. Conclusions and scientific opinions made by RA agencies, such as EFSA, are useful for risk managers to reduce the consumer exposition if necessary and to write/amend new regulations. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/exposure-ass-risk-char.html#/" id="lecture-button-exposure-and-risk-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation/Risk assessment tools/risk-assessment-tools",
  `<h1>Risk assessment tools</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p>The Unit called “Risk assessment pragmatic tools, FCM specificities and NIAS issues” introduces the Threshold of Toxicological Concern (TTC) approach as a useful tool to predict the risk assessment of a substance at low level in food when toxicological data are missing. Then, the risk assessment of Food Contact Materials (FCM) is also discussed. Finally, since NIAS are the major source of alerts regards to food contact materials, the last section is dedicated to the risk assessment of Non-Intentionally Added Substance (NIAS) and strategies to help industries to manage the risk linked to NIAS. Regards to FCM, to going further see units : basic legal framework and unit : EU, US and others regulations.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/risk-assessment-tools.html#/" id="lecture-button-risk-assessment-tools" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling",
  `<h1>Theory and case studies</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>diffusion,migration,modeling,partition,plastics,regulation,compliance,risk</p><h4>Abstract</h4><p>Desorption of substances from materials in direct contact with food (of finite volume $V_F$) is coined migration. This mass transfer is full described in a simple case by the a dimensionless time Fo=D_Pxt/l_p^2 , the packaging-to-food volume ratio L_PF=V_P/V_F and the partition coefficient K_FP=C_P^eq/C_Peq. This lecture will explain why the migration is so different between fatty and aqueous food products, between a rubber and a glassy material, between a small and large migrant...  - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.2/part1.html#/2" id="lecture-button-mass-transfer-modeling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/migration-modeling-for-monomaterials/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials",
  `<h1>Theory and case studies</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>diffusion,migration,modeling,plastics,regulation,compliance,design,risk</p><h4>Abstract</h4><p>The results of monomaterials are generalized to multimaterials and multilayers enabling the simulation of the migration of adhesive, printing ink.. constituents.   -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.3/part1.html#/2" id="lecture-button-mass-transfer-for-multi-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Introduction to decision theory and risk management/introduction",
  `<h1>Introduction</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>risk,modeling,decision,probabilistic,uncertainty</p><h4>Abstract</h4><p>Taking decisions under uncertainty may look usually more an art than a science. It is not correct and many results obtained in decision theory can be used in risk management. Very conservative scenarios minimize the risk to claim that a food packaging is safe, when it is not (risk of *first kind* = risk for the consumer). Conversely, they maximize the risk to discard a design, a formulation when it is safe (risk of *second kind* = risk for the supplier). A compromise exists by listing alternative scenarios and by clarifying the sources of uncertainty. A model with too much safety factors will provide unrealistic scenarios and will be unable to rank alternatives (i.e. to order scenarios according to the real risk of migration into foods ).   - level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.1/part1.html#/2" id="lecture-button-introduction" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations",
  `<h1>Principles of monotonic (conservative) calculations of migration in presence of uncertainty.</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>risk,modeling,migration,uncertainty,overestimation</p><h4>Abstract</h4><p>For any quantity involved in migration/decision models, it is easy to define a lower and an upper bounds. From these simple considerations, a full monotonic algebra can be derived. As an example: min+min=min, max+max=max.  This lecture presents *physically-inspired* rules to derive similar monotonic scenarios for migration modeling. Two principles i) the mass action law (all transfer are proportional to initial amounts, transferred amounts cannot exceed total migration) and ii) entropy production (maximizing the dispersion of substances with time) are used to build robust scenarios subjected to strong uncertainties on chemical affinities and diffusivities. A methodology for a judicious choice of transport and thermodynamic parameters is exemplified. It is shown that they can orient irreversibly mass transfer in space and in time. &lt;u&gt;The method is accepted for compliance testing&lt;/u&gt;.- level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.2/part1.html#/2" id="lecture-button-monotonic-calculations" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions",
  `<h1>Descriptions of migration</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>risk,modeling,migration,uncertainty,probabilistic,overestimation</p><h4>Abstract</h4><p>Mass transfer equations (transport and boundary conditions) are not linear in time and space. Monotonic properties, shown in 2.2, are used to derive a general methodology to calculate migration and food contamination, when all properties are governed by arbitrary statistics representing either variabilities (initial amounts, thicknesses, contact times, temperature) or uncertainty (diffusivities, chemical affinity). This lecture will enable you to evaluate the probability the contamination of food exceeds a prescribed value. As a result, the calculated distributions can be used for calculating exposure by taking into account (or not) the practices of the consumer and of the supply chain. - level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.3/part1.html#/2" id="lecture-button-descriptions" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches",
  `<h1>Approaches, link with regulation 2023/2006/EC</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,risk,safety,modeling</p><h4>Abstract</h4><p>When something dramatic occurs, there is not one single cause. Failure modes, effects, and criticality analysis is a methodology (FMECA) originating from the aeronautic industry to identify and analyze: all potential failure models of the various components of a system, the effects these failures may have on the system, how to avoid the failures and/or to mitigate their effects. The microbiological risks and some physical risks are managed already by the food industry by closely related methods (e.g., HACCP). The FMECA method has been proposed to manage chemical risks associated to migration and cross mass-transfer between materials. The method is compliant with the obligations set in regulations (EC) 2023/2006, 282/2008. They open the way to safe-by-design/preventive approaches of the contamination.  -   level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.1/part1.html#/2" id="lecture-button-fmeca-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Diagram-based approaches/overview",
  `<h1>FMECA modeling</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,migration,risk,safety,modeling</p><h4>Abstract</h4><p>The FMECA approach requires to build large inventories and functional relations between entities and events. Diagrams help to organize the initial brain-storming and to orient future priorities.  -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.2/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Computer-aided approaches/overview",
  `<h1>FMECA approaches (application to mass transfer problems)</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,migration,risk,safety,modeling</p><h4>Abstract</h4><p>Computer-aided approaches facilitate the deployment of FMECA approaches. The lecture illustrates various situations calculated with the open-source software FMECAengine identification of critical steps, components, substances   -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.3/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,modeling,thermodynamics</p><h4>Abstract</h4><p>Molecular and thermodynamical modeling can fill the gap of missing data for some polymers, specific molecules (non-intentionally added substances), conditions (migration at rubber state) etc. With time, calculations tend to be cheaper and faster than experiments, while offering similar reliability.   -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.1/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Microscopic theories of transport coefficients and free-energies/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,modeling,thermodynamics</p><h4>Abstract</h4><p>Diffusion in solids are less described than in liquids and gases. Theories are scarce and the last results of research are presented.  -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/Calculations using fluctuation theorems/overview",
  `<h1>Overview</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,partition,affinity,solubility,modeling,thermodynamics</p><h4>Abstract</h4><p>Properties related to free-energies (solubilities, activity coefficients, miscibility...) can be calculated by brute force calculations at atomistic scale assuming a disordered mixture at molecule scale.    -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.3/part1.html#/2" id="lecture-button-overview" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
dropDownMenuContent = `<button class="dropdown-btn" id="dropdown-btn-Packaging materials">Packaging materials<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging materials"><button class="dropdown-btn"
        id="dropdown-btn-Introduction">Introduction<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Introduction"><a
            href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
            id="Packaging materials/Introduction/panorama-of-food-packaging-part-1" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)"> Panorama of food packaging<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Packaging materials and shaping process">Packaging materials and shaping process<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging materials and shaping process"><a
            href="#Packaging materials/Packaging materials and shaping process/glass-packaging"
            id="Packaging materials/Packaging materials and shaping process/glass-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Glass<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/metal-packaging"
            id="Packaging materials/Packaging materials and shaping process/metal-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Metal<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/plastic-packaging"
            id="Packaging materials/Packaging materials and shaping process/plastic-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Plastic<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard"
            id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Paper and paperboard<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/bio-based-materials"
            id="Packaging materials/Packaging materials and shaping process/bio-based-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Bio-based materials<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
            id="Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Cork<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/wood-packaging"
            id="Packaging materials/Packaging materials and shaping process/wood-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Wood<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Basic legal framework">Basic legal framework<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Basic legal framework"><a
            href="#Packaging materials/Basic legal framework/legal-framework-overview"
            id="Packaging materials/Basic legal framework/legal-framework-overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Basic legal framework (chemicals, contact material, environment,
            consumer safety)<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Packaging design">Packaging design<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging design"><button class="dropdown-btn"
        id="dropdown-btn-the-basics-of-mechanical-engineering-for-packaging-designer">the-basics-of-mechanical-engineering-for-packaging-designer<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-the-basics-of-mechanical-engineering-for-packaging-designer">
        <a href="#Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
            id="Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mechanical design of packaging: an
            introduction<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Packaging properties">Packaging properties<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging properties"><button class="dropdown-btn"
        id="dropdown-btn-Thermal, mechanical and barrier properties">Thermal, mechanical and barrier properties<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Thermal, mechanical and barrier properties"><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Thermal properties: methods and
            standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mechanical properties: methods and
            standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mass transfer properties: methods and
            standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Optical properties: methods and
            standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Surface properties: methods and
            standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Chemical and physical">Chemical and physical<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Chemical and physical"><a
            href="#Packaging properties/Chemical and physical/food-packaging-interaction"
            id="Packaging properties/Chemical and physical/food-packaging-interaction" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Food packaging interaction<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Principles of mass transfer">Principles of mass transfer<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Principles of mass transfer"><a
            href="#Packaging properties/Principles of mass transfer/advanced-principles-of-mass-transfer-in-food-packaging"
            id="Packaging properties/Principles of mass transfer/advanced-principles-of-mass-transfer-in-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Principles of mass transfer - Mass
            transfer in food packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Calculation of permeability in composite systems">Calculation of permeability in composite
        systems<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Calculation of permeability in composite systems"><a
            href="#Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
            id="Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Permeability in composites: from ideal
            laminates to materials with defects and dispersed particles.<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Multicomponent diffusion, predictive models">Multicomponent diffusion, predictive models<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Multicomponent diffusion, predictive models"><a
            href="#Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
            id="Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Multicomponent diffusion: diffusion and
            solubility at molecular scale (overview) and in non-ideal systems<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Micro holes and leaks in packaging">Micro holes and leaks in packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Micro holes and leaks in packaging"><a
            href="#Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
            id="Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Micro holes and leaks in packaging –
            measurement and modeling<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Packaging processes">Packaging processes<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging processes"><button class="dropdown-btn"
        id="dropdown-btn-introduction-to-mechanical-processes">introduction-to-mechanical-processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-introduction-to-mechanical-processes"><a
            href="#Packaging processes/introduction-to-mechanical-processes"
            id="Packaging processes/introduction-to-mechanical-processes" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Introduction into mechanical processes in packaging<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Forming">Forming<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Forming"><a
            href="#Packaging processes/Forming/plastic-forming" id="Packaging processes/Forming/plastic-forming"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Plastics forming<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/Forming/films-and-sheets" id="Packaging processes/Forming/films-and-sheets"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Films and sheets<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Filling and dosing">Filling and dosing<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Filling and dosing"><a
            href="#Packaging processes/Filling and dosing/principles"
            id="Packaging processes/Filling and dosing/principles" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Principles<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/Filling and dosing/forming-filling-sealing"
            id="Packaging processes/Filling and dosing/forming-filling-sealing" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Forming, filling, sealing<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/Filling and dosing/beverage-filling"
            id="Packaging processes/Filling and dosing/beverage-filling" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Beverage filling<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Sealing">Sealing<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Sealing"><a href="#Packaging processes/Sealing/overview"
            id="Packaging processes/Sealing/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Closing, hot/cold sealing, welding, sealed seams and packages<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-surface-treatments-and-coatings">surface-treatments-and-coatings<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-surface-treatments-and-coatings"><a
            href="#Packaging processes/surface-treatments-and-coatings"
            id="Packaging processes/surface-treatments-and-coatings" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Surface treatment and coating principles and technologies.<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Printing and labelling processes">Printing and labelling processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Printing and labelling processes"><a
            href="#Packaging processes/Printing and labelling processes/overview"
            id="Packaging processes/Printing and labelling processes/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Printing and labelling processes<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Digitization of packaging processes">Digitization of packaging processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Digitization of packaging processes"><a
            href="#Packaging processes/Digitization of packaging processes/overview"
            id="Packaging processes/Digitization of packaging processes/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Digitization of packaging processes<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Packaging line">Packaging line<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging line"><a
            href="#Packaging processes/Packaging line/optimization" id="Packaging processes/Packaging line/optimization"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Optimization<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Packaging processes/Packaging line/hygienic-design"
            id="Packaging processes/Packaging line/hygienic-design" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Hygienic design<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Shelf-life">Shelf-life<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Shelf-life"><button class="dropdown-btn"
        id="dropdown-btn-Food preservation technology and packaging">Food preservation technology and packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Food preservation technology and packaging"><a
            href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
            id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Introduction to preservation and
            packaging technologies<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Common physical chemical factors affecting food stability">Common physical chemical factors
        affecting food stability<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Common physical chemical factors affecting food stability"><a
            href="#Shelf-life/Common physical chemical factors affecting food stability/overview"
            id="Shelf-life/Common physical chemical factors affecting food stability/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview physical and chemical
            processes impacting the shelf-life of food-products (processed or not)<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Food packaging and shelf life">Food packaging and shelf life<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Food packaging and shelf life"><a
            href="#Shelf-life/Food packaging and shelf life/shelf-life-definitions"
            id="Shelf-life/Food packaging and shelf life/shelf-life-definitions" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Definitions<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life"
            id="Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Factors affection shelf-life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Shelf-life/Food packaging and shelf life/study-shelf-life"
            id="Shelf-life/Food packaging and shelf life/study-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">How to study shelf life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Shelf-life/Food packaging and shelf life/predict-shelf-life"
            id="Shelf-life/Food packaging and shelf life/predict-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">How to calculate/predict shelf-life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-interaction">interaction<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-interaction"><a href="#Shelf-life/interaction"
            id="Shelf-life/interaction" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Interaction<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Environmental pollution">Environmental pollution<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Environmental pollution"><button class="dropdown-btn"
        id="dropdown-btn-Methodologies used in life cycle assessment">Methodologies used in life cycle assessment<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Methodologies used in life cycle assessment"><a
            href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
            id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Sustainability and Packaging - What is
            suistainability? (part 1/2)<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
            id="Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Sustainability and Packaging - Life
            Cycle Assessment (part 2/2)<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Tools for life cycle impact assessment">Tools for life cycle impact assessment<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Tools for life cycle impact assessment"><a
            href="#Environmental pollution/Tools for life cycle impact assessment/overview"
            id="Environmental pollution/Tools for life cycle impact assessment/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Glass food contact material recycling">Glass food contact material recycling<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Glass food contact material recycling"><a
            href="#Environmental pollution/Glass food contact material recycling/glass-food-contact-material-recycling"
            id="Environmental pollution/Glass food contact material recycling/glass-food-contact-material-recycling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Glass food contact material recycling<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Metal food contact material recycling">Metal food contact material recycling<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Metal food contact material recycling"><a
            href="#Environmental pollution/Metal food contact material recycling/metal-food-contact-material-recycling"
            id="Environmental pollution/Metal food contact material recycling/metal-food-contact-material-recycling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Metal food contact material recycling<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Biodegradation and microplastics">Biodegradation and microplastics<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Biodegradation and microplastics"><a
            href="#Environmental pollution/Biodegradation and microplastics/overview"
            id="Environmental pollution/Biodegradation and microplastics/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Overview<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Marketing and design">Marketing and design<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Marketing and design"><button class="dropdown-btn"
        id="dropdown-btn-Sensory science">Sensory science<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Sensory science"><a
            href="#Marketing and design/Sensory science/sensory-science"
            id="Marketing and design/Sensory science/sensory-science" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Sensory science<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Innovations">Innovations<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Innovations"><button class="dropdown-btn"
        id="dropdown-btn-Biobased and biodegradable materials">Biobased and biodegradable materials<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Biobased and biodegradable materials"><a
            href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
            id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Active packaging">Active packaging<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Active packaging"><a
            href="#Innovations/Active packaging/overview" id="Innovations/Active packaging/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview and principles<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Smart packaging">Smart packaging<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Smart packaging"><a
            href="#Innovations/Smart packaging/overview" id="Innovations/Smart packaging/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">From principles to commercially
            available intelligent packaging systems<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Nanotechnology strategies">Nanotechnology strategies<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Nanotechnology strategies"><a
            href="#Innovations/Nanotechnology strategies/definitions"
            id="Innovations/Nanotechnology strategies/definitions" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Definitions, nano-scale additives, examples of gains and applications.<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Bacterial polyesters">Bacterial polyesters<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Bacterial polyesters"><a
            href="#Innovations/Bacterial polyesters/bacterial-polyesters"
            id="Innovations/Bacterial polyesters/bacterial-polyesters" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Bacterial Polyesters<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Advanced cellulosic materials">Advanced cellulosic materials<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Advanced cellulosic materials"><a
            href="#Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
            id="Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Advanced cellulosic materials for food
            packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Modified atmosphere packaging">Modified atmosphere packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Modified atmosphere packaging"><a
            href="#Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
            id="Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Modified atmosphere packaging <i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Recoverability">Recoverability<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Recoverability"><button class="dropdown-btn"
        id="dropdown-btn-Environmental impact of plastics and recycling">Environmental impact of plastics and
        recycling<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Environmental impact of plastics and recycling"><a
            href="#Recoverability/Environmental impact of plastics and recycling/overview"
            id="Recoverability/Environmental impact of plastics and recycling/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Overview<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Safety assessment of recycling processes">Safety assessment of recycling processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Safety assessment of recycling processes"><a
            href="#Recoverability/Safety assessment of recycling processes/overview"
            id="Recoverability/Safety assessment of recycling processes/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Overview<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Legislation">Legislation<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Legislation"><button class="dropdown-btn"
        id="dropdown-btn-EU, US others regulations">EU, US others regulations<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-EU, US others regulations"><a
            href="#Legislation/EU, US others regulations/regulatory-framework"
            id="Legislation/EU, US others regulations/regulatory-framework" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Regulatory framework in the EU and the US<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-GMP and quality assurance standards">GMP and quality assurance standards<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-GMP and quality assurance standards"><a
            href="#Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
            id="Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">GMP, Safety, Quality management system,
            Responsibilities and Certification<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Universe of food contact chemicals">Universe of food contact chemicals<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Universe of food contact chemicals"><a
            href="#Legislation/Universe of food contact chemicals/universe-of-food-contact-chemicals"
            id="Legislation/Universe of food contact chemicals/universe-of-food-contact-chemicals"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Universe of food contact chemicals<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Hazard identification and characterization">Hazard identification and characterization<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Hazard identification and characterization"><a
            href="#Legislation/Hazard identification and characterization/introduction"
            id="Legislation/Hazard identification and characterization/introduction" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Introduction<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation/Hazard identification and characterization/identification"
            id="Legislation/Hazard identification and characterization/identification" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Identification<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation/Hazard identification and characterization/characterization"
            id="Legislation/Hazard identification and characterization/characterization"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Characterization<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Exposure and risk assessment">Exposure and risk assessment<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Exposure and risk assessment"><a
            href="#Legislation/Exposure and risk assessment/exposure-and-risk-assessment"
            id="Legislation/Exposure and risk assessment/exposure-and-risk-assessment" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Exposure and risk assessment<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Risk assessment tools">Risk assessment tools<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Risk assessment tools"><a
            href="#Legislation/Risk assessment tools/risk-assessment-tools"
            id="Legislation/Risk assessment tools/risk-assessment-tools" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Risk assessment tools<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Modeling tools">Modeling tools<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Modeling tools"><button class="dropdown-btn"
        id="dropdown-btn-Migration modeling for monomaterials">Migration modeling for monomaterials<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Migration modeling for monomaterials"><a
            href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
            id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Theory and case studies<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Modeling for multi-materials, multi-steps process">Modeling for multi-materials, multi-steps
        process<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Modeling for multi-materials, multi-steps process"><a
            href="#Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
            id="Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Theory and case studies<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Introduction to decision theory and risk management">Introduction to decision theory and risk
        management<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Introduction to decision theory and risk management"><a
            href="#Modeling tools/Introduction to decision theory and risk management/introduction"
            id="Modeling tools/Introduction to decision theory and risk management/introduction"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Introduction<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Managing uncertainty by intervals and worst-case scenarios">Managing uncertainty by intervals
        and worst-case scenarios<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Managing uncertainty by intervals and worst-case scenarios">
        <a href="#Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
            id="Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Principles of monotonic (conservative)
            calculations of migration in presence of uncertainty.<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Probabilistic approaches and Bayesian approaches">Probabilistic approaches and Bayesian
        approaches<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Probabilistic approaches and Bayesian approaches"><a
            href="#Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
            id="Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Descriptions of migration<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-History and principles of FMEA-FMECA">History and principles of FMEA-FMECA<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-History and principles of FMEA-FMECA"><a
            href="#Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches"
            id="Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Approaches, link with regulation 2023/2006/EC<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Diagram-based approaches">Diagram-based approaches<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Diagram-based approaches"><a
            href="#Modeling tools/Diagram-based approaches/overview"
            id="Modeling tools/Diagram-based approaches/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">FMECA modeling<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Computer-aided approaches">Computer-aided approaches<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Computer-aided approaches"><a
            href="#Modeling tools/Computer-aided approaches/overview"
            id="Modeling tools/Computer-aided approaches/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">FMECA approaches (application to mass transfer problems)<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Principles (forcefields, statistical-ensembles), overview of online databases">Principles
        (forcefields, statistical-ensembles), overview of online databases<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container"
        id="dropdown-container-Principles (forcefields, statistical-ensembles), overview of online databases"><a
            href="#Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
            id="Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Microscopic theories of transport coefficients and free-energies">Microscopic theories of
        transport coefficients and free-energies<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container"
        id="dropdown-container-Microscopic theories of transport coefficients and free-energies"><a
            href="#Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
            id="Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Overview<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Calculations using fluctuation theorems">Calculations using fluctuation theorems<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Calculations using fluctuation theorems"><a
            href="#Modeling tools/Calculations using fluctuation theorems/overview"
            id="Modeling tools/Calculations using fluctuation theorems/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id)">Overview<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div>
</div>`;
