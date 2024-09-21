/*
 * File: lectures-prefetch.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 31st October 2023
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Saturday, 21st September 2024
 * Modified By: Steward OUADI
 */

let dropDownMenuContent;
let lecturesDetails = new Map();
lecturesDetails.set(
  "Panorama of food packaging/panorama-of-food-packaging-part-1",
  `<h1>History and overview</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>history,overview,plastics,polymer,challenges,waste,environment,function</p><h4>Abstract</h4><p>This course is an introduction to the entire content of the FITNess project. The history of plastics is quickly summarized through the past centuries as well as the current challenges for the environment and society. Food packaging has developed at the interface of food needs (safety, preservation), technological possibilities and consumer expectations. The science of packaging combines food process engineering, materials science, toxicology, microbiology, regulations...). This course introduces the seven functions of packaging: preserving food quality; preventing microbiological risk; preserving the integrity of the packaging and its contents; preventing chemical risk; preserving the environment; meeting the technical and economic requirements of the manufacturer and the user of the packaging; interacting and communicating with the consumer.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Panorama-of-food-packaging-2024.html" id="lecture-button-panorama-of-food-packaging-part-1" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html#panorama-of-food-packaging-2024-single" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/glass-packaging",
  `<h1>Glass</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,glass,bottles</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: glass materials</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Glass.html#/2" id="lecture-button-glass-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialGlass&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/metal-packaging",
  `<h1>Metal</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,metal,cans,corrosion,interactions,migration</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: Metal Packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part3.html#/2" id="lecture-button-metal-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialMetal&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/plastic-packaging",
  `<h1>Plastic</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,plastics,polymers,migration</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: plastics</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Plastics.html#/2" id="lecture-button-plastic-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialPlastics&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/paper-and-paperboard",
  `<h1>Paper and paperboard</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,paper,board,paperboard,migration</p><h4>Abstract</h4><p>Packaging systems can be made from various materials: paper and paperboard</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UCP/Paper-and-paperboard.html#/2" id="lecture-button-paper-and-paperboard" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialPaperAndBoard&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/bio-based-materials",
  `<h1>Bio-based materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,biosourced,renewable,proteins,polysaccharides,starch,cellulose</p><h4>Abstract</h4><p>This lecture introduces bio-based materials for food packaging. Their consituents are fully or partly extracted from biomass:  polysaccharides and proteins. Materials made from biomass (renewable resources) are coined boisourced, but it does not mean that they are biodegradable. The standards applicable to these materials are briefly presented. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part8.html#/2" id="lecture-button-bio-based-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialBioBased&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/cork-as-food-packaging",
  `<h1>Cork</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,bottles,cork</p><h4>Abstract</h4><p>Cork: origin, process, application in wine and champagne</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part9.html#/2" id="lecture-button-cork-as-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging materials/wood-packaging",
  `<h1>Wood</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,wood,timber</p><h4>Abstract</h4><p>Wood is used as food packaging and for shipment: barrels, pallets</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part10.html#/2" id="lecture-button-wood-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/thermal-properties",
  `<h1>Thermal properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,thermal</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part1.html#/2" id="lecture-button-thermal-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=thermalProperties&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties",
  `<h1>Mechanical properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,mechanical</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part2.html#/2" id="lecture-button-mechanical-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=mechanicalProperties&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
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
  "Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties",
  `<h1>Mass transfer properties: methods and standards</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>materials,properties,permeability,solubility,diffusion,gases</p><h4>Abstract</h4><p>The objective of this unit is to gain basic knowledge about the properties of food packaging materials that play a key in their processing and use. This gives the basics to read and understand a technical datasheet, as well as to better select a packaging material according to the shelf-life of the food.

The unit is divided into five sections. Each one is related to a specific property in which are discussed influencing factors, physical parameters of importance and analysis tools. 

The first section describes the thermal properties of packaging materials related to their structure. The second section is dedicated to mechanical properties, the third one to mass transfer properties, the fourth one to electromagnetic properties and the last one to surface properties. 
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part3.html#/2" id="lecture-button-mass-transfer-properties" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=massTransferProperties&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/advanced-principles-of-mass-transfer-in-food-packaging",
  `<h1>Advanced principles of mass transfer</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>permeation,migration,diffusion,sorption,desorption,partition,modeling</p><h4>Abstract</h4><p>Understanding mass transfer (diffusion, sorption/desorption, permeation, migration) is essential to the packaging designer, food and process engineer, risk assessor: Which material to choose (alone or in association)? Which thickness to reach a prescribed thickness? Are my specific migration levels acceptable? The considered solute/migrant/permeant can be a gas or an organic chemical. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/advanced-principles-of-mass-transfer-in-food-packaging.html#/2" id="lecture-button-advanced-principles-of-mass-transfer-in-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mia Kurek</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/from-ideal-laminates-to-materials",
  `<h1>Calculation of permeability in composite systems</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>permeation,diffusion,defects,holes,modeling</p><h4>Abstract</h4><p>Permeability in composites: from ideal laminates to materials with defects and dispersed particles. The results of diffusion/migration in multimaterial/multilayer are exemplified at steady state to derive effective permeabilities from composite systems.  -  level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.4/part1.html#/2" id="lecture-button-from-ideal-laminates-to-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Oliver Miesbauer</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/diffusion-and-solubility-at-molecular-scale",
  `<h1>Multicomponent diffusion &amp; predictive models</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>diffusion,migration,interactions,mechanical,activation</p><h4>Abstract</h4><p>Multicomponent diffusion: diffusion and solubility at molecular scale (overview) and in non-ideal systems. Diffusion and solubility at molecular scale and in non-ideal systems: how to integrate them in mass transfer models? How to relate the chemical structure of diffusants with their diffusivity and chemical affinity in polymers? How do temperature and plasticizing activate diffusion? How to get robust estimates?   -   level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.5/part1.html#/2" id="lecture-button-diffusion-and-solubility-at-molecular-scale" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/measurement-and-modeling",
  `<h1>Micro holes and leaks</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>defects,holes,permeation,shelf-life,modeling,oxygen</p><h4>Abstract</h4><p>Micro holes and leaks modify significantly the barrier properties of food packaging: how to characterize them? measure and simulate their effects – measurement and modeling -  level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.6/part1.html#/2" id="lecture-button-measurement-and-modeling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Frederic Debeaufort</li></ul>`
);
lecturesDetails.set(
  "Packaging properties/the-basics-of-mechanical-engineering-for-packaging-designer",
  `<h1>Mechanical design</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>properties,mechanical</p><h4>Abstract</h4><p>Mechanical engineering of food packaging  (please read §2.1 and §2.2 before) - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.4/part1.html#/2" id="lecture-button-the-basics-of-mechanical-engineering-for-packaging-designer" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Murielle Hayert</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/introduction-to-mechanical-processes",
  `<h1>Introduction into mechanical processes</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>forming,filling,sealing,process,design,optimization</p><h4>Abstract</h4><p>D-1 Introduction into mechanical processes: The most important factors for a company are i) the product quality from the customers point of view, ii) the compliance with legal requirements, iii) the profitability (costs vs. revenue). These factors are essentially determined by the packaging material and the packaging process, which are the subject of this lecture. The terminology for packaging and packaging machines is also covered to allow for a basic understanding. Finally, the economic aspects that determine the process specific cost are addressed.
This lecture is an introduction to D-2 to D-9. - level basic, intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Introduction-into-mechanical-processes.html#/1" id="lecture-button-introduction-to-mechanical-processes" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/plastic-forming",
  `<h1>Forming of pre-products</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Packaging line processes,Pre-products in packaging,Thermoforming,Blow molding,Stretch blow molding,Cold forming,Erecting,Packaging materials</p><h4>Abstract</h4><p>D-2 Forming of pre-products: In many cases, pre-products are used to obtain the final form to the package in a packaging line. The pre-products may either be films or sheets which are transformed from the 2-dimensional into a 3-dimensional state. Another type of the pre-products are 3-dimensional pre forms that are made by injection molding. They are supplied to a packaging line, where they are transformed further via stretch blow molding into the final container.  Metal foils in laminates with polymers or covered by lacquers may be formed into small containers via cold forming. Flat cardboard blanks (cut-outs) are transformed into cardboard folding boxes via a process called erecting. These forming processes (thermoforming via deep drawing, blow molding and stretch blow molding, cold forming, erecting) can be directly integrated into a packaging line and therefore become part of the packaging process.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Forming-of-pre-products.html#/1" id="lecture-button-plastic-forming" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=formingOfPreProducts&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/aseptic-packaging",
  `<h1>Aseptic packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>Aseptic,packaging</p><h4>Abstract</h4><p>Aseptic packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/aseptic-packaging.html#/1" id="lecture-button-aseptic-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/filling-and-dosing",
  `<h1>Filling and dosing</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Filling packaging with solid dry food,Precise weight filling,Dosing and filling equipment,Compliance with regulatory limits,Gravimetric dosing,Volumetric dosing,Statistical verification of compliance,European regulations in packaging</p><h4>Abstract</h4><p>D-4 Filling and dosing: How to fill small 25 g chip bags at a high rate and with a precise weight without breaking the sensitive products? This is a specific challenge of filling packaging with solid dry food. But also liquid or pasty food has to obey one important principle: Even though the filled quantity cannot and does not have to correspond to the last decimal place to the value printed on the pack, it must be within the specified tolerance limits established by European regulations. This lecture describes the dosing and filling equipment for different products, the accuracy of their operation and the verification of compliance with the regulatory limits. Different types of dosing devices, working with gravimetric or volumetric principles are shown for different types of food outside the beverage area. The statistical basis for verifying the compliance with the limit values is also presented.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Filling-and-dosing.html#/1" id="lecture-button-filling-and-dosing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=fillingAndDosing&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/beverage-filling",
  `<h1>Beverage filling</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>High-speed beverage filling,Bottle filling lines,Non-returnable containers,Returnable containers,Bottle filling process,Dosing of beverages,Low-oxygen filling,Bottle cleaning,Bottle closing,Bottle labeling,Secondary packaging,Unit load production</p><h4>Abstract</h4><p>D-5 Beverage filling: Beverage containers are usually filled at speeds of several tens of thousands of bottles per hour. A bottle filling line, be it for non-returnable or returnable containers, comprises operations from de-stacking, bottle cleaning, filling, closing, labelling, followed by the steps for producing the secondary package and the unit load. From these steps, the most critical step, namely filling, is addressed in this lecture. Dosing of beverages and especially filling of rigid bottles under very low levels of oxygen are focused. Different ways for the subsequent steps of closing and labelling are also shown.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Beverage-Filling-lecture.pdf" id="lecture-button-beverage-filling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=beverageFilling&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/sealing",
  `<h1>Sealing</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sealing,bag,blister,glue,adhesion,leaks,holes,adhesive</p><h4>Abstract</h4><p>D-6 Sealing: The safety and wholesomeness of industrially processed food cannot be considered without a well-closed package. The more general term of closing includes sealing for closing as a subset, which is dealt with in detail here. Similarity and differences between welding and sealing are elaborated.  In principle, the bonding of the joining partners is achieved by applying heat. Different options are used to generate the heat for the bonding process: Contact with a hot tool, radiation-induced heating, convection with hot gases and internal or external friction processes. Here, the temperature distribution in the sealing zone plays a special role. With cold sealing, it is also possible to carry out a joining process using only pressure without the effect of a higher temperature. However, this requires packaging surfaces that have been coated with special cold seal lacquers. The final requirements for these processes are the integrity and tightness of the seal, but also its strength against delamination. This lecture also deals with the special features of different types of sealed seams with regard to their tightness and the measurement of sealed seam tightness and sealed seam strength. Please refer to  xxx for the defect analysis.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Sealing.html#/1" id="lecture-button-sealing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/forming-filling-sealing",
  `<h1>Forming, filling and sealing machines</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Integrated packaging lines,Forming,filling,and sealing in one line,Flexible packaging,Machine efficiency in packaging,Transportation of flexible films,Force transmission in packaging machines,Deformation processes in packaging,Thermoforming,Mandrel folding,Wrapping in packaging</p><h4>Abstract</h4><p>D-7 Forming, filling and sealing machines: In many cases, the forming, filling and sealing steps are combined in one single line. The negative impact on overall efficiency that can result from linking machines is more than compensated for by less effort for transportation and much better hygienic conditions. The lecture will focus on flexible packaging, the difficulties of transporting flexible films in the machine, in particular the aspects of force transmission and deformation processes. The lecture will also show the use of other processes for forming of packaging: thermoforming, folding on a mandrel or wrapping.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Forming-filling-and-sealing-machinery.html#/1" id="lecture-button-forming-filling-sealing" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=formingFillingAndSealingMachines&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Uta Weiß</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/surface-treatments-and-coatings",
  `<h1>Surface treatment and coating principles and technologies.</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>coating,surface,process,materials,permeation,migration,recycling</p><h4>Abstract</h4><p>Surface treatments increase the surface energy of the packaging surface in order to maximize the contact surface area and the adhesion of adhesives, inks and coatings. Principles and available technologies are reviewed in this lecture.  -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.7/part1.html#/2" id="lecture-button-surface-treatments-and-coatings" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mia Kurek</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/vacuum-and-modified-atmosphere-packaging",
  `<h1>Vacuum and modified atmosphere packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>Stability of packed food,Modified atmosphere packaging (MAP),Vacuum packaging,Headspace modification,Active modification,Passive modification,Packaging machines and technology,Gas exchange in packaging,Evacuation of filled packaging,Gas mixtures in packaging,Gas permeation,Product stability in packaging,Gas composition for different products,Retail packaging studies</p><h4>Abstract</h4><p>D-9 Vacuum and modified atmosphere packaging: To increase the stability of packed food, the atmosphere of the headspace may either be modified (modified atmosphere packaging, MAP) or it can be minimized (in vacuum packaging). The modification of the headspace may either be achieved via a dedicated gas exchange (the so-called active modification) or by the respiratory activity of the packed product (the passive modification, predominantly for fresh produce). Machines and technology for evacuating the filled packaging, optionally with subsequent exposure to a special gas mixture, or alternatively purging the still open packaging with a gas mixture, are presented and the basic facts are discussed. The processes happening in the package after closing and the interaction with the environment via gas permeation are also addressed. The gas composition for the best product stability differ from product to product. Studies are also shown on a selection of different products purchased in retail stores that have been packaged in this way.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/Vacuum-and-Modified-Atmosphere-Packaging.html#/1" id="lecture-button-vacuum-and-modified-atmosphere-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=vacuumAndModifiedAtmospherePackaging&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Packaging processes/Packaging line/optimization",
  `<h1>Optimization</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>process,filling,closing,bottles,optimization,machine,design</p><h4>Abstract</h4><p>A packaging line is a series system of the stages of the packaging process. For each stage, one or more (parallel) machines are used. These machines frequently have to deal with failures. The machines are put in a sequence and connected by conveyors, which can also serve as buffers. Which tools to optimize the packaging line and assure efficiency? Efficiency is the quality of being efficient, meaning that it produces the expected results without waste. Follow the lecture to learn mor    -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.8/part1.html#/1" id="lecture-button-optimization" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Murielle Hayert</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/shelf-life-definition",
  `<h1>Defining shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,consumer,acceptability,law</p><h4>Abstract</h4><p>Shelf-life is a concept covering many facets in food (please read §3.1 before)  - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part1.html#/2" id="lecture-button-shelf-life-definition" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=shelfLifeStudy&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/introduction-to-preservation-and-packaging-technologies",
  `<h1>Food preservation technologies and packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>process,aseptic,modified atmosphere,thermal</p><h4>Abstract</h4><p>Introduction to preservation and packaging technologies: thermal processing, modified atmosphere, aseptic packaging.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.2/part1.html#/2" id="lecture-button-introduction-to-preservation-and-packaging-technologies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/modified-atmosphere-packaging",
  `<h1>Modified atmosphere packaging and shelf-life</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>fresh product,shelf life,packaging methods</p><h4>Abstract</h4><p>Modified atmosphere packaging is a preservation method where the surrounding atmosphere of the product is replaced typically with an inert gas, such as nitrogen combined with an antimicrobially active carbon dioxide, and oxygen in exact amounts, to extend its shelf life. Control of water loss, protection from skin abrasion and softening, reduced contamination of the produce during handling, and delayed ripening and slow various compositional changes associated with ripening are only some benefits of using MAP. Gases used, product and storage factors to be taken into account, packaging materials, and mathematical principles are well described in this presentation. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/modified-atmosphere-packaging.html#/1" id="lecture-button-modified-atmosphere-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=modifiedAtmospherePackaging&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Mario Ščetar</li><li>Mia Kurek</li><li>Kata Galić</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/food-packaging-interactions",
  `<h1>Food packaging interactions</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>interactions,permeation,migration,corrosion,metal,cans</p><h4>Abstract</h4><p>Chemical and physical stability of packaging materials</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/UNIZG/food-packaging-interaction.html#/2" id="lecture-button-food-packaging-interactions" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Mario Scetar</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/factors-affecting-shelf-life",
  `<h1>Factors affecting shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,light,oxygen,humidity</p><h4>Abstract</h4><p>The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part2.html#/2" id="lecture-button-factors-affecting-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/physico-chemical-factors-affecting-food-stability",
  `<h1>Physico chemical factors affecting food stability</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,humidity,oxygen,permeation</p><h4>Abstract</h4><p>Overview physical and chemical processes impacting the shelf-life of food-products (processed or not). Effects of water, oxygen, light, flavor losses, fresh food products, functionality requirements (please read §2.4 before) - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.1/part1.html#/2" id="lecture-button-physico-chemical-factors-affecting-food-stability" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/study-shelf-life",
  `<h1>Shelf life study</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,temperature,time,activation</p><h4>Abstract</h4><p>The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part3.html#/2" id="lecture-button-study-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/microbiological-assessment-of-food-and-packaging",
  `<h1>Microbiological food assessment</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>Microbiological assessment,food packaging</p><h4>Abstract</h4><p>Microbiological assessment of food and packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/microbiological-assessment-of-food-and-packaging.html#/1" id="lecture-button-microbiological-assessment-of-food-and-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=microbiologicalAssessmentOfFoodAndPackaging&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li><li>Peter Muranyi</li><li>Bernd Kramer Kata Galić</li><li>Mia Kurek</li><li>Mario Ščetar</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/sensory-science",
  `<h1>Sensory science applied to food packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/sensory-science-applied-to-food-and-food-packaging.html#/1" id="lecture-button-sensory-science" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=factorsShelfLifeGeneral&amp;sessionId=1" target="_blank">General questions for introductory assessment</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=sensoryAnalyticsOfFoodProducts&amp;sessionId=1" target="_blank">Sensory analytics of food products</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=instrumentalAnalyticsCoupledToSensoryEvaluation&amp;sessionId=1" target="_blank">Instrumental analytics coupled to sensory evaluation</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=sensoryEvaluationInShelfLifeTestingOfPackedFood&amp;sessionId=1" target="_blank">Sensory evaluation in shelf life testing of packed food</a><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=instrumentalAnalyticsCoupledToSensoryEvaluation&amp;sessionId=1" target="_blank">Sensory investigations of packaging materials</a></p><h4>Authors</h4><ul><li>Author</li></ul>`
);
lecturesDetails.set(
  "Shelf-life/predict-shelf-life",
  `<h1>Predicting shelf life</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>shelf-life,quality,prediction,degradation,microbiological,chemical</p><h4>Abstract</h4><p>How to calculate/predict shelf-life. The quality of most foods and beverages decreases with time. The length of time between processing and consumption, during which the product maintains an “acceptable” quality, is named shelf life.
The unit is divided into four sections. In the first section shelf life definitions and related regulation aspects are discussed. The second section is focused on factors influencing the shelf life, such as product characteristics, food packaging and environment. The third section introduces accelerated shelf life testing. The last section gives the tools for the prediction of shelf life of packaged foods.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part4.html#/2" id="lecture-button-predict-shelf-life" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Innovations/biobased-and-biodegradable-materials",
  `<h1>Biobased and biodegradable materials</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>biodegradable,renewable,environment,starch,polysaccharides,proteins</p><h4>Abstract</h4><p>Biobased and biodegradable materials: from polymers to bioplastics</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/biobased-and-biodegradable-materials.html#/2" id="lecture-button-biobased-and-biodegradable-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=materialBioBased&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/bacterial-polyesters",
  `<h1>Bacterial Polyesters</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>PHB,bioplastic,PHBV,properties,packaging</p><h4>Abstract</h4><p>Among the biobased materials, the ones synthesized by microorganisms are of great interest in the sense that thanks to the metabolic engineering of those microorganisms, it is possible to adjust the physicochemical properties of such biobased polymers together with the possibilities to introduce repeating units of a different nature in the macromolecular backbone by feeding the microorgansisms with various carbon sources.
This unit provides an overview of: i) the classification and structures of PHAs, ii) the established methods for the synthesis of PHAs and their copolymers by microorganisms, iii) the main properties of such biobased polymers and iv) their major applications.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/bacterial-polyesters.html#/2" id="lecture-button-bacterial-polyesters" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=bacterialPolyester&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>María José Fabra</li><li>Eugenia Núñez-Calzado</li><li>Cristina Campano</li><li>Amparo López-Rubio</li></ul>`
);
lecturesDetails.set(
  "Innovations/advanced-cellulosic-materials-for-food-packaging",
  `<h1>Advanced cellulosic materials</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>Cellulose,nanocellulose,advanced coatings,cellulose nanocrystals,barrier properties,packaging</p><h4>Abstract</h4><p>Global food packaging is a billion-dollar market that is projected to reach USD 464 billion by 2027. In general, there are many types of packaging materials available in the market, such as plastics, glass, aluminium and paper. However, cellulose and its derivates has received great attention recently as food pacakjging materials due to environmental pressure by local authorities or driven by national and international policy. This is also because of sustainabililty, renewability and disposal issues. This unit compiles recent advances of cellulose-based packaging materials and the use of nanocellulose (especially nanofibrillated cellulose (NFC), cellulose nmanocrystals (CNC) and bacterial cellulose (BC)) to enhace barrier properties and other performance attributes of new generations of packaging materials. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/Advanced-cellulosic-materials.html#/2" id="lecture-button-advanced-cellulosic-materials-for-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=cellulose&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>María José Fabra</li><li>Eugenia Núñez-Calzado</li><li>Amparo López-Rubio</li></ul>`
);
lecturesDetails.set(
  "Innovations/active-packaging",
  `<h1>Active packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>active,absorber,scavanger,emitter,oxygen,CO2</p><h4>Abstract</h4><p>With the concept of active packaging, the packaging system is not inert anymore and the active system is interacting with the food and/or its atmosphere. Active systems require to be beneficial for the food. Note that the use of active systems may have legal implications. (please read §1 before). Content: overview, oxygen scavengers, CO2 absorbing/releasing systems, ethylene scavengers, flavor/odor absorber/releaser, antioxidants. - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/CSIC/active-packaging.html#/2" id="lecture-button-active-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=activePackaging&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/smart-packaging",
  `<h1>Smart packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>RFID,smart,indicator</p><h4>Abstract</h4><p>Smart packaging concepts bring intelligent functions to the packaging  (detecting, sensing, recording, tracing, communicating, applying some mathematical logic) (please read §1 before). Content: overview, indicators, RFID, sensors, commercially available intelligent packaging systems - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.3/part1.html#/2" id="lecture-button-smart-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=smartPackaging&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Innovations/nanotechnology-strategies",
  `<h1>Nanotechnology strategies</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>properties,nanotechnology,active,smart</p><h4>Abstract</h4><p>Nanotechnology is an umbrella name covering different technologies, capabilities and impacts. They are essential to advanced, active, smart food packaging systems.   - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.4/part1.html#/2" id="lecture-button-nanotechnology-strategies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=nanomaterials&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Maria José Fabra</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Sustainability and packaging/sustainability-and-packaging",
  `<h1>What is suistainability? (part 1/2)</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sustainability,environment,ecodesign,LCA,bottles</p><h4>Abstract</h4><p>Food Packaging needs to be sustainable. What does it mean? How to use Life Cycle Analysis (LCA) to evaluate the impact of food packaging and to $eco-design$ new food packaging.       -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part1.html#/2" id="lecture-button-sustainability-and-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/Sustainability and packaging/life-cycle-assessment",
  `<h1>Life Cycle Assessment (part 2/2)</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>sustainability,environment,ecodesign,LCA,bottles</p><h4>Abstract</h4><p>Food Packaging needs to be sustainable. What does it mean? How to use Life Cycle Analysis (LCA) to evaluate the impact of food packaging and to $eco-design$ new food packaging.       -  level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part2.html#/2" id="lecture-button-life-cycle-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/tools-for-life-cycle-impact-assessment",
  `<h1>Tools for life cycle impact assessment</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>environment,ecodesign,LCA,design</p><h4>Abstract</h4><p>Eco-design of Packaging - Overview - Why eco-design? – Introduction and definitions General design process Tools of eco-design Case studies Advances and limits of LCA analysis - Evaluation of food/packaging systems through the supply chain</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.2/part1.html#/2" id="lecture-button-tools-for-life-cycle-impact-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/environmental-impact-of-plastics-and-recycling",
  `<h1>Environmental and human health impacts of packaging</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>environment,recycling,wastes,microplastics,LCA,ecodesign</p><h4>Abstract</h4><p>There is no doubt plastics have changed our society and its habits since their use in the 1950s. Thanks to their versatility and workability, plastics have been used to meet all the needs of human beings, from physiological needs, safety, social belonging, esteem, and self-actualization. Today, pollution by plastics, due to mismanagement of the collection system, is one of the most important global issue facing our society.
The first part of this unit is devoted to the environmental impact of plastics. Global data on plastics for food packaging are presented as well as the health risk associated with microplastics in soils and oceans.
The second part of this unit is dedicated to the recycling of plastics. In this section, the actors in the recycling chain and the regulations related to the recycling process, materials and labels are discussed. Next, the concept of recyclability and the differences in recycling terminology (recyclable, renewable, biodegradable, compostable…) are explained. Finally, the main differences between mechanical and chemical recycling are explained.
</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.4/part1.html#/2" id="lecture-button-environmental-impact-of-plastics-and-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Thomas Karbowiak</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/safety-assessment-of-recycling-processes",
  `<h1>Safety assessment of plastic recycling processes</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>recycling,process,pet,bottles,risk</p><h4>Abstract</h4><p>The directive (EU) 2019/904 requires the phase out of single-use plastics, the generalization of recycling and the reuse of materials in contact with food. The recycling of materials for food contact is authorized in Europe and the USA but under certain conditions. These include the control of deposits, cleaning of polymers, mechanical or chemical recycling, and the implementation of good industrial practices within the framework of regulation (EU) 2023/2006. For health safety reasons, only mechanical recycling of PET is now widespread and complies with clearly defended standards (regulation (EU) 282/2008). This course explains the conditions for the evaluation of recycled PET (rPET): validation of a recycling process and of the utilization of the recycled material.    Level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.5/part1.html#/2" id="lecture-button-safety-assessment-of-recycling-processes" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fátima Poças</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/glass-food-contact-material-recycling",
  `<h1>Glass food contact material recycling</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>glass,recycling</p><h4>Abstract</h4><p>This lecture provides an overview of the recycling process for food contact glass. The composition and production of glass for food contact applications are explored, with a particular focus on glass cullet and its pivotal role in glass recycling. Key stages in the glass recycling process are introduced including collection, separation and cleaning, sorting, melting, as well as molding and annealing. Environmental implications are analyzed, highlighting the efficiency gains and emission reductions stemming from recycled glass compared to primary production. Links to explanatory videos and further reading are provided that offer more information on individual processing steps and concepts.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/glass-food-contact-material-recycling.html" id="lecture-button-glass-food-contact-material-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=glassFoodContactMaterialRecycling&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Joel Scheuchzer</li><li>Justin Boucher</li><li>Lindsey Parkinson</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/metal-food-contact-material-recycling",
  `<h1>Metal food contact material recycling</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>metal,recycling</p><h4>Abstract</h4><p>This lecture provides an overview of the recycling process for food contact metals with a focus on aluminum and steel. It introduces existing collection methods including curbside collection, bring banks, and container deposit systems. The basic processing steps for recycling each metal type are summarized along with photos, explanatory videos, and links to publications that provide more detail. Key environmental benefits from recycling, as well as impacts stemming from the recycling processes are also reviewed along with European regulations pertinent to metal recycling.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/metal-food-contact-material-recycling.html" id="lecture-button-metal-food-contact-material-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=metalFoodContactMaterialRecycling&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Lindsey Parkinson</li><li>Justin Boucher</li><li>Joel Scheuchzer</li></ul>`
);
lecturesDetails.set(
  "Ecodesign tools and technologies/biodegradation-and-microplastics",
  `<h1>Biodegradation and microplastics</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>biodegradable,pollution,regulation,renewable,environment,bottles</p><h4>Abstract</h4><p>Food packaging accounts for approximately 40% of the uses of plastics, but accounts for more than half of plastic waste. Non-food uses are more durable, while the lifespan of plastic packaging usually does not exceed half a year. The fragmentation of uncollected plastics and their reuse as recycled textile fibers is the main source of microplastics and marine litter. The understanding of biodegradation phenomena is essential to appreciate the impact of plastics on the environment, whether they are biodegradable or not.     - Level basic, intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.3/part1.html#/2" id="lecture-button-biodegradation-and-microplastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Sandra Domenek</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/basic-legal-framework",
  `<h1>Basic legal framework on food packaging materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>regulation,plastics,europe</p><h4>Abstract</h4><p>Basic legal framework (chemicals, contact material, environment, consumer safety). Food packaging must comply with several obligations and legislations on chemicals, contact material, environment, consumer safety. - level basic</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.3/part1.html#/2" id="lecture-button-basic-legal-framework" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/eu-us-regulatory-framework",
  `<h1>Regulatory framework in the EU and the US</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>materials,regulation,plastics,EU,US,FCM,compliance,testing</p><h4>Abstract</h4><p>Since 1976, the regulation of food contact materials, including food packaging, is managed at the European level. However, not all of 17 groups of materials benefit from harmonized regulations. This lecture provides an overview of applicable regulations and of their principles. They obey to the same aim protecting consumers.    - level intermediate*</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S3/U3.1/part1.html#/2" id="lecture-button-eu-us-regulatory-framework" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/regulatory-context-EU-and-US/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/gmp-and-quality-assurance-standards",
  `<h1>GMP and quality assurance standards</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>regulation,GMP,safety,compliance,FCM</p><h4>Abstract</h4><p>GMP, Safety, Quality management system, Responsibilities and Certification: Food contact materials need to be produced and recycled according to Good Manufacturing Practices (GMP), Safety &amp;amp; Quality management systems. The responsibilities and and the possible certification systems are presented in this lecture.   - level intermediate </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/LNE/gmp-and-quality-assurance-standards.html" id="lecture-button-gmp-and-quality-assurance-standards" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/gmp-and-quality-assurance-standards/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Catherine Loriot</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/universe-of-food-contact-chemicals",
  `<h1>Universe of food contact chemicals</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>chemicals,recycling,reuse,food contact chemicals</p><h4>Abstract</h4><p>Foodware and food packaging products can contain thousands of different chemicals, many of which can migrate from the materials into food and have hazardous properties that harm health. This lecture introduces the currently known universe of the thousands of different chemicals that can be present in food contact materials. It explains fundamental concepts such as the waste hierarchy including reuse and recycling, specifically in the context of food contact chemicals. The chemical diversity and migration potential of different food contact materials is explored including the fundamental distinction between permanent and non-permanent materials. Learners gain insights into both the knowns and known unknowns about the chemicals present in food contact materials with references to additional resources that dive deeper into the topic. Furthermore, the chemical complexities and limitations associated with "bio-based" or "biodegradable" materials are addressed. Upon completion, learners will be better equipped to navigate scientific and policy discussions surrounding the chemical safety of food contact materials, especially concerning reuse and recycling.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FPF/universe-of-food-contact-chemicals.html" id="lecture-button-universe-of-food-contact-chemicals" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html?quizId=universeOfFoodContactChemicals&amp;sessionId=1" target="_blank">Take a quiz</a></p><h4>Authors</h4><ul><li>Justin Boucher</li><li>Lisa Zimmermann</li><li>Birgit Geueke</li><li>Joel Scheuchzer</li><li>Lindsey Parkinson</li><li>Jane Muncke</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/exposure-and-risk-assessment",
  `<h1>Exposure and risk assessment</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p>Then, in the third step named “Exposure assessment” the human exposure is determined. It consists to study foodstuff chemical contamination and foodstuff consumption. Regarding to FCM, the level of migration will determine the consumer exposure. To going further see the units on migration modelling in monomaterials (Unit 4.2 Specialized) and migration modelling for multimaterials, multistep process, reusable materials (Unit4.3 Specialized).'Risk characterization' is the final step of the risk assessment which will define if there is a safety concern or not for the consumer exposed to the substance of interest. Conclusions and scientific opinions made by RA agencies, such as EFSA, are useful for risk managers to reduce the consumer exposition if necessary and to write/amend new regulations. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/exposure-ass-risk-char.html#/" id="lecture-button-exposure-and-risk-assessment" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/risk-assessment-tools",
  `<h1>Risk assessment tools</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p>The Unit called “Risk assessment pragmatic tools, FCM specificities and NIAS issues” introduces the Threshold of Toxicological Concern (TTC) approach as a useful tool to predict the risk assessment of a substance at low level in food when toxicological data are missing. Then, the risk assessment of Food Contact Materials (FCM) is also discussed. Finally, since NIAS are the major source of alerts regards to food contact materials, the last section is dedicated to the risk assessment of Non-Intentionally Added Substance (NIAS) and strategies to help industries to manage the risk linked to NIAS. Regards to FCM, to going further see units : basic legal framework and unit : EU, US and others regulations.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/risk-assessment-tools.html#/" id="lecture-button-risk-assessment-tools" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Controversies concerning hazardous chemicals/introduction",
  `<h1>Introduction</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard,risk,toxicology,endocrine</p><h4>Abstract</h4><p>Food safety is essential and a prerequisite step in any innovation strategy. In Europe, Risk Assessment (RA) is an independent scientific process and it is the foundation upon which the risk analysis is built for food safety.The objectives of these lectures: hazard identification and characterization (Unit 1.1 Specialized), the exposure assessment and the risk characterization (Unit 1.2 Specialized) are to get specialized training in food safety and risk assessment. As foodstuffs are wrapped with packaging, the risk linked to Intentionally Added Substances (IAS), used for Food Contact Materials (FCM), must be assessed as they can be released into the food. </p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/Hazard-id-char-part-1.html#/" id="lecture-button-introduction" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Controversies concerning hazardous chemicals/identification",
  `<h1>Identification</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard,risk,toxicology,endocrine,prediction</p><h4>Abstract</h4><p>Firstly, the hazard identification and characterization lecture introduce the context of the food safety regarding food chemicals. The specific Mode of Action of carcinogenic substances (genotoxic or not) is particularly addressed with special tools to assess the risk due to DNA reactive substances. New emerging risk such as endocrine disrupters is introduced as FCM substances may be concerned (e.g. BPA). The four pillars of chemical RA are described in detail. Each step of RA is specific and permit to generate precious information.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/Hazard-id-char-part-2.html#/" id="lecture-button-identification" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Legislation and safety/Controversies concerning hazardous chemicals/characterization",
  `<h1>Characterization</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p><h4>Abstract</h4><p>Once the hazard is identified, during the first step “Hazard assessment”, it needs to be characterized. The objective of this second step named “Hazard characterization” is to determine Toxicological Reference Values to protect the human health.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/Hazard-id-char-part-3.html#/" id="lecture-button-characterization" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Marie-Christine Chagnon</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/migration-modeling-in-monomaterials",
  `<h1>Migration modeling in monomaterials</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>diffusion,migration,modeling,partition,plastics,regulation,compliance,risk</p><h4>Abstract</h4><p>Desorption of substances from materials in direct contact with food (of finite volume $V_F$) is coined migration. This mass transfer is full described in a simple case by the a dimensionless time Fo=D_Pxt/l_p^2 , the packaging-to-food volume ratio L_PF=V_P/V_F and the partition coefficient K_FP=C_P^eq/C_Peq. This lecture will explain why the migration is so different between fatty and aqueous food products, between a rubber and a glassy material, between a small and large migrant...  - level intermediate</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.2/part1.html#/2" id="lecture-button-migration-modeling-in-monomaterials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/migration-modeling-for-monomaterials/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/migration-modeling-in-multimaterials",
  `<h1>Migration modeling in multimaterials</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>diffusion,migration,modeling,plastics,regulation,compliance,design,risk</p><h4>Abstract</h4><p>The results of monomaterials are generalized to multimaterials and multilayers enabling the simulation of the migration of adhesive, printing ink.. constituents.   -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.3/part1.html#/2" id="lecture-button-migration-modeling-in-multimaterials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/introduction-to-decision-theory-and-risk-management",
  `<h1>Introduction to decision theory and risk management</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>risk,modeling,decision,probabilistic,uncertainty</p><h4>Abstract</h4><p>Taking decisions under uncertainty may look usually more an art than a science. It is not correct and many results obtained in decision theory can be used in risk management. Very conservative scenarios minimize the risk to claim that a food packaging is safe, when it is not (risk of *first kind* = risk for the consumer). Conversely, they maximize the risk to discard a design, a formulation when it is safe (risk of *second kind* = risk for the supplier). A compromise exists by listing alternative scenarios and by clarifying the sources of uncertainty. A model with too much safety factors will provide unrealistic scenarios and will be unable to rank alternatives (i.e. to order scenarios according to the real risk of migration into foods ).   - level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.1/part1.html#/2" id="lecture-button-introduction-to-decision-theory-and-risk-management" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/managing-uncertainty-by-intervals-and-worst-case-scenarios",
  `<h1>Managing uncertainty by intervals and worst-case scenarios</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>risk,modeling,migration,uncertainty,overestimation</p><h4>Abstract</h4><p>For any quantity involved in migration/decision models, it is easy to define a lower and an upper bounds. From these simple considerations, a full monotonic algebra can be derived. As an example: min+min=min, max+max=max.  This lecture presents *physically-inspired* rules to derive similar monotonic scenarios for migration modeling. Two principles i) the mass action law (all transfer are proportional to initial amounts, transferred amounts cannot exceed total migration) and ii) entropy production (maximizing the dispersion of substances with time) are used to build robust scenarios subjected to strong uncertainties on chemical affinities and diffusivities. A methodology for a judicious choice of transport and thermodynamic parameters is exemplified. It is shown that they can orient irreversibly mass transfer in space and in time. &lt;u&gt;The method is accepted for compliance testing&lt;/u&gt;.- level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.2/part1.html#/2" id="lecture-button-managing-uncertainty-by-intervals-and-worst-case-scenarios" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/probabilistic-approaches-and-bayesian-approaches",
  `<h1>Probabilistic approaches and Bayesian approaches</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>risk,modeling,migration,uncertainty,probabilistic,overestimation</p><h4>Abstract</h4><p>Mass transfer equations (transport and boundary conditions) are not linear in time and space. Monotonic properties, shown in 2.2, are used to derive a general methodology to calculate migration and food contamination, when all properties are governed by arbitrary statistics representing either variabilities (initial amounts, thicknesses, contact times, temperature) or uncertainty (diffusivities, chemical affinity). This lecture will enable you to evaluate the probability the contamination of food exceeds a prescribed value. As a result, the calculated distributions can be used for calculating exposure by taking into account (or not) the practices of the consumer and of the supply chain. - level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.3/part1.html#/2" id="lecture-button-probabilistic-approaches-and-bayesian-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/history-and-principles-of-FMEA-FMECA",
  `<h1>History and principles of FMEA-FMECA</h1><h4>Difficulty level</h4><span>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,risk,safety,modeling</p><h4>Abstract</h4><p>When something dramatic occurs, there is not one single cause. Failure modes, effects, and criticality analysis is a methodology (FMECA) originating from the aeronautic industry to identify and analyze: all potential failure models of the various components of a system, the effects these failures may have on the system, how to avoid the failures and/or to mitigate their effects. The microbiological risks and some physical risks are managed already by the food industry by closely related methods (e.g., HACCP). The FMECA method has been proposed to manage chemical risks associated to migration and cross mass-transfer between materials. The method is compliant with the obligations set in regulations (EC) 2023/2006, 282/2008. They open the way to safe-by-design/preventive approaches of the contamination.  -   level intermediate, advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.1/part1.html#/2" id="lecture-button-history-and-principles-of-FMEA-FMECA" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/diagram-based-approaches",
  `<h1>Diagram-based approaches</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,migration,risk,safety,modeling</p><h4>Abstract</h4><p>The FMECA approach requires to build large inventories and functional relations between entities and events. Diagrams help to organize the initial brain-storming and to orient future priorities.  -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.2/part1.html#/2" id="lecture-button-diagram-based-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/computer-aided-approaches",
  `<h1>Computer-aided approaches</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>design,prevention,safe-by-design,migration,risk,safety,modeling</p><h4>Abstract</h4><p>FMECA approaches (application to mass transfer problems): Computer-aided approaches facilitate the deployment of FMECA approaches. The lecture illustrates various situations calculated with the open-source software FMECAengine identification of critical steps, components, substances   -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.3/part1.html#/2" id="lecture-button-computer-aided-approaches" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/principles-of-online-databases",
  `<h1>Principles of online databases</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,modeling,thermodynamics</p><h4>Abstract</h4><p>Molecular and thermodynamical modeling can fill the gap of missing data for some polymers, specific molecules (non-intentionally added substances), conditions (migration at rubber state) etc. With time, calculations tend to be cheaper and faster than experiments, while offering similar reliability.   -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.1/part1.html#/2" id="lecture-button-principles-of-online-databases" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/microscopic-theories-of-transport-coefficients-and-free-energies",
  `<h1>Microscopic theories of transport coefficients and free-energies</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,modeling,thermodynamics</p><h4>Abstract</h4><p>Diffusion in solids are less described than in liquids and gases. Theories are scarce and the last results of research are presented.  -  level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/part1.html#/2" id="lecture-button-microscopic-theories-of-transport-coefficients-and-free-energies" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Modeling tools/calculation-using-fluctuation-theorems",
  `<h1>Calculation using fluctuation theorems</h1><h4>Difficulty level</h4><span>Advanced<i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i></span><h4>Topics</h4><p>molecular,diffusion,partition,affinity,solubility,modeling,thermodynamics</p><h4>Abstract</h4><p>Properties related to free-energies (solubilities, activity coefficients, miscibility...) can be calculated by brute force calculations at atomistic scale assuming a disordered mixture at molecule scale.    -   level advanced</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.3/part1.html#/2" id="lecture-button-calculation-using-fluctuation-theorems" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Test your knowledge</h4><p>There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Olivier Vitrac</li></ul>`
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
            class="fa fa-star-o star-color-green little-space"></i></a><a href="#Packaging materials/metal-packaging"
        id="Packaging materials/metal-packaging" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Metal<i class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><a href="#Packaging materials/plastic-packaging"
        id="Packaging materials/plastic-packaging" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Plastic<i class="fa fa-star star-color-green little-space"></i><i
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
    id="dropdown-btn-Packaging properties">Packaging properties<i class="fa fa-caret-down"></i></button>
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
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Mass transfer properties: methods and
            standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><a
        href="#Packaging properties/advanced-principles-of-mass-transfer-in-food-packaging"
        id="Packaging properties/advanced-principles-of-mass-transfer-in-food-packaging"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Advanced principles of mass transfer<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging properties/from-ideal-laminates-to-materials"
        id="Packaging properties/from-ideal-laminates-to-materials" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Calculation of permeability in composite systems<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging properties/diffusion-and-solubility-at-molecular-scale"
        id="Packaging properties/diffusion-and-solubility-at-molecular-scale" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Multicomponent diffusion &amp; predictive models<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging properties/measurement-and-modeling" id="Packaging properties/measurement-and-modeling"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Micro holes and leaks<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging properties/the-basics-of-mechanical-engineering-for-packaging-designer"
        id="Packaging properties/the-basics-of-mechanical-engineering-for-packaging-designer"
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
            class="fa fa-star-o star-color-green little-space"></i></a><a href="#Packaging processes/plastic-forming"
        id="Packaging processes/plastic-forming" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Forming of pre-products<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Packaging processes/aseptic-packaging"
        id="Packaging processes/aseptic-packaging" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Aseptic packaging<i class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><a href="#Packaging processes/filling-and-dosing"
        id="Packaging processes/filling-and-dosing" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Filling and dosing<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Packaging processes/beverage-filling"
        id="Packaging processes/beverage-filling" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Beverage filling<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Packaging processes/sealing"
        id="Packaging processes/sealing" class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Sealing<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging processes/forming-filling-sealing" id="Packaging processes/forming-filling-sealing"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Forming, filling and sealing machines<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging processes/surface-treatments-and-coatings"
        id="Packaging processes/surface-treatments-and-coatings" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Surface treatment and coating principles and technologies.<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Packaging processes/vacuum-and-modified-atmosphere-packaging"
        id="Packaging processes/vacuum-and-modified-atmosphere-packaging" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Vacuum and modified atmosphere packaging<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><button class="dropdown-btn"
        id="dropdown-btn-Packaging line">Packaging line<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging line"><a
            href="#Packaging processes/Packaging line/optimization" id="Packaging processes/Packaging line/optimization"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Optimization<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div>
</div><button class="dropdown-btn" id="dropdown-btn-Shelf-life">Shelf-life<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Shelf-life"><a href="#Shelf-life/shelf-life-definition"
        id="Shelf-life/shelf-life-definition" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Defining shelf life<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Shelf-life/introduction-to-preservation-and-packaging-technologies"
        id="Shelf-life/introduction-to-preservation-and-packaging-technologies" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Food preservation technologies and packaging<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><a
        href="#Shelf-life/modified-atmosphere-packaging" id="Shelf-life/modified-atmosphere-packaging"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Modified atmosphere packaging and
        shelf-life<i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a><a href="#Shelf-life/food-packaging-interactions"
        id="Shelf-life/food-packaging-interactions" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Food packaging interactions<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Shelf-life/factors-affecting-shelf-life" id="Shelf-life/factors-affecting-shelf-life"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Factors affecting shelf life<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Shelf-life/physico-chemical-factors-affecting-food-stability"
        id="Shelf-life/physico-chemical-factors-affecting-food-stability" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Physico chemical factors affecting food stability<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Shelf-life/study-shelf-life"
        id="Shelf-life/study-shelf-life" class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Shelf life
        study<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Shelf-life/microbiological-assessment-of-food-and-packaging"
        id="Shelf-life/microbiological-assessment-of-food-and-packaging" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Microbiological food assessment<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><a href="#Shelf-life/sensory-science"
        id="Shelf-life/sensory-science" class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Sensory
        science applied to food packaging<i class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><a href="#Shelf-life/predict-shelf-life"
        id="Shelf-life/predict-shelf-life" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Predicting shelf life<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
    id="dropdown-btn-Innovations">Innovations<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Innovations"><a
        href="#Innovations/biobased-and-biodegradable-materials" id="Innovations/biobased-and-biodegradable-materials"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Biobased and biodegradable materials <i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Innovations/bacterial-polyesters"
        id="Innovations/bacterial-polyesters" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Bacterial Polyesters<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Innovations/advanced-cellulosic-materials-for-food-packaging"
        id="Innovations/advanced-cellulosic-materials-for-food-packaging" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Advanced cellulosic materials<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Innovations/active-packaging"
        id="Innovations/active-packaging" class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Active
        packaging<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Innovations/smart-packaging"
        id="Innovations/smart-packaging" class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Smart
        packaging<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a href="#Innovations/nanotechnology-strategies"
        id="Innovations/nanotechnology-strategies" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Nanotechnology strategies<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
    id="dropdown-btn-Ecodesign tools and technologies">Ecodesign tools and technologies<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Ecodesign tools and technologies"><button class="dropdown-btn"
        id="dropdown-btn-Sustainability and packaging">Sustainability and packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Sustainability and packaging"><a
            href="#Ecodesign tools and technologies/Sustainability and packaging/sustainability-and-packaging"
            id="Ecodesign tools and technologies/Sustainability and packaging/sustainability-and-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">What is suistainability? (part 1/2)<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Ecodesign tools and technologies/Sustainability and packaging/life-cycle-assessment"
            id="Ecodesign tools and technologies/Sustainability and packaging/life-cycle-assessment"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Life Cycle Assessment (part 2/2)<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
        href="#Ecodesign tools and technologies/tools-for-life-cycle-impact-assessment"
        id="Ecodesign tools and technologies/tools-for-life-cycle-impact-assessment" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Tools for life cycle impact assessment<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Ecodesign tools and technologies/environmental-impact-of-plastics-and-recycling"
        id="Ecodesign tools and technologies/environmental-impact-of-plastics-and-recycling"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Environmental and human health impacts of
        packaging<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Ecodesign tools and technologies/safety-assessment-of-recycling-processes"
        id="Ecodesign tools and technologies/safety-assessment-of-recycling-processes" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Safety assessment of plastic recycling processes<i
            class="fa fa-star star-color-yellow little-space"></i><i
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
        href="#Ecodesign tools and technologies/biodegradation-and-microplastics"
        id="Ecodesign tools and technologies/biodegradation-and-microplastics" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Biodegradation and microplastics<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Legislation and safety">Legislation and safety<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Legislation and safety"><a
        href="#Legislation and safety/basic-legal-framework" id="Legislation and safety/basic-legal-framework"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Basic legal framework on food packaging
        materials<i class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a><a
        href="#Legislation and safety/eu-us-regulatory-framework" id="Legislation and safety/eu-us-regulatory-framework"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Regulatory framework in the EU and the US<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
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
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Legislation and safety/exposure-and-risk-assessment"
        id="Legislation and safety/exposure-and-risk-assessment" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Exposure and risk assessment<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Legislation and safety/risk-assessment-tools" id="Legislation and safety/risk-assessment-tools"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Risk assessment tools<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><button class="dropdown-btn"
        id="dropdown-btn-Controversies concerning hazardous chemicals">Controversies concerning hazardous chemicals<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Controversies concerning hazardous chemicals"><a
            href="#Legislation and safety/Controversies concerning hazardous chemicals/introduction"
            id="Legislation and safety/Controversies concerning hazardous chemicals/introduction"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Introduction<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation and safety/Controversies concerning hazardous chemicals/identification"
            id="Legislation and safety/Controversies concerning hazardous chemicals/identification"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Identification<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation and safety/Controversies concerning hazardous chemicals/characterization"
            id="Legislation and safety/Controversies concerning hazardous chemicals/characterization"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Characterization<i
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
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a><a
        href="#Modeling tools/introduction-to-decision-theory-and-risk-management"
        id="Modeling tools/introduction-to-decision-theory-and-risk-management" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Introduction to decision theory and risk management<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Modeling tools/managing-uncertainty-by-intervals-and-worst-case-scenarios"
        id="Modeling tools/managing-uncertainty-by-intervals-and-worst-case-scenarios" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Managing uncertainty by intervals and worst-case scenarios<i
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a><a
        href="#Modeling tools/probabilistic-approaches-and-bayesian-approaches"
        id="Modeling tools/probabilistic-approaches-and-bayesian-approaches" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Probabilistic approaches and Bayesian approaches<i
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a><a
        href="#Modeling tools/history-and-principles-of-FMEA-FMECA"
        id="Modeling tools/history-and-principles-of-FMEA-FMECA" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">History and principles of FMEA-FMECA<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a><a
        href="#Modeling tools/diagram-based-approaches" id="Modeling tools/diagram-based-approaches"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Diagram-based approaches<i
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a><a href="#Modeling tools/computer-aided-approaches"
        id="Modeling tools/computer-aided-approaches" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)">Computer-aided approaches<i
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a><a
        href="#Modeling tools/principles-of-online-databases" id="Modeling tools/principles-of-online-databases"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Principles of online databases<i
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
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
            class="fa fa-star star-color-red little-space"></i><i class="fa fa-star star-color-red little-space"></i><i
            class="fa fa-star star-color-red little-space"></i></a></div>
</div>`;
