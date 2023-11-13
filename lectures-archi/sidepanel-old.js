/*
 * File: sidepanel.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 6th September 2022
 * Author: Steward OUADI
 * -----
 * Last Modified: Tuesday, 31st October 2023
 * Modified By: Steward OUADI
 */

let englobingNavList = document.createElement("ul");
englobingNavList.className = "nav__list";

// Map to store LecturePath objects
const lecturesPaths = new Map();

/**
 * Content to display when children array is empty
 * @tocElement {*} tocElement table of content object (manifest file)
 * @returns list of Li element
 */
function contentToDisplayChildrenArrayEmpty(tocElement) {
  // Children array is empty, so we will just display Unit title
  let groupListLiElement = document.createElement("li");
  let groupListAElement = document.createElement("a");
  groupListAElement.href = tocElement.userProvidedURLForLecture; // Get course URL
  groupListAElement.text = tocElement.title;
  groupListAElement.target = "_blank";
  groupListLiElement.appendChild(groupListAElement);

  return groupListLiElement;
}

const mainDropDownContainer = document.getElementById("dropdown-container-id");
const mainContent = document.getElementById("main-content");
// Map in which we have a dropdown menu id and its corresponding lecture
const lecturesContainer = new Map();

function getDropdownButtonAndContainer(dropdownButtonName, id) {
  const dropdownButton = document.createElement("button");
  dropdownButton.setAttribute("class", "dropdown-btn");
  dropdownButton.id = "dropdown-btn-" + id;
  dropdownButton.innerHTML = dropdownButtonName;

  const iElement = document.createElement("i");
  iElement.setAttribute("class", "fa fa-caret-down");

  dropdownButton.appendChild(iElement);

  const dropdownContainerDiv = document.createElement("div");
  dropdownContainerDiv.setAttribute("class", "dropdown-container");
  dropdownContainerDiv.id = "dropdown-container-" + id;

  return { dropdownButton, dropdownContainerDiv };
}

function createDropDownMenuElements() {
  // Create a document fragment to hold the dropdown menu
  const dropdownFragment = document.createDocumentFragment();

  /*for (let [keyI, valueI] of lecturesPaths) {
    const dropdownButtonAndContainerI = getDropdownButtonAndContainer(
      valueI.name,
      keyI
    );
    const dropdownButtonI = dropdownButtonAndContainerI.dropdownButton;
    const dropdownContainerDivI =
      dropdownButtonAndContainerI.dropdownContainerDiv;

    for (let [keyJ, valueJ] of valueI.children) {
      const dropdownButtonAndContainerJ = getDropdownButtonAndContainer(
        valueJ.name,
        keyJ
      );
      const dropdownButtonJ = dropdownButtonAndContainerJ.dropdownButton;
      const dropdownContainerDivJ =
        dropdownButtonAndContainerJ.dropdownContainerDiv;

      for (let [keyK, valueK] of valueJ.children) {
        const aElementK = createAElementForDropDownMenu(valueK.manifestPath);
        dropdownContainerDivJ.appendChild(aElementK);
      }

      dropdownContainerDivI.appendChild(dropdownButtonJ);
      dropdownContainerDivI.appendChild(dropdownContainerDivJ);
    }

    const aElementI = createAElementForDropDownMenu(valueI.manifestPath);
    dropdownContainerDivI.appendChild(aElementI);
    dropdownFragment.appendChild(dropdownButtonI);
    dropdownFragment.appendChild(dropdownContainerDivI);
  }*/

  // Append the entire dropdown menu at once
  // mainDropDownContainer.appendChild(dropdownFragment);
  const div = document.createElement("div");
  //   div.innerHTML = `<div>
  //     <button class="dropdown-btn" id="dropdown-btn-Packaging materials">Packaging materials<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Packaging materials"><button class="dropdown-btn"
  //             id="dropdown-btn-Introduction">Introduction<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Introduction"><a
  //                 href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
  //                 id="Packaging materials/Introduction/panorama-of-food-packaging-part-1"
  //                 class="dropdown-container-class">
  //                 Panorama of food packaging<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Packaging materials and shaping process">Packaging materials and shaping process<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Packaging materials and shaping process"><a
  //                 href="#Packaging materials/Packaging materials and shaping process/glass-packaging-part-1"
  //                 id="Packaging materials/Packaging materials and shaping process/glass-packaging-part-1"
  //                 class="dropdown-container-class">Glass - Part 1<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/glass-packaging-part-2"
  //                 id="Packaging materials/Packaging materials and shaping process/glass-packaging-part-2"
  //                 class="dropdown-container-class">Glass - Part 2<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/metal-packaging"
  //                 id="Packaging materials/Packaging materials and shaping process/metal-packaging"
  //                 class="dropdown-container-class">Metal<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1"
  //                 id="Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1"
  //                 class="dropdown-container-class">Plastic - Part 1<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2"
  //                 id="Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2"
  //                 class="dropdown-container-class">Plastic - Part 2<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1"
  //                 id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1"
  //                 class="dropdown-container-class">Paper and paperboard - Part 1<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2"
  //                 id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2"
  //                 class="dropdown-container-class">Paper and paperboard - Part 2<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/bio-based-materials"
  //                 id="Packaging materials/Packaging materials and shaping process/bio-based-materials"
  //                 class="dropdown-container-class">Bio-based materials<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
  //                 id="Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
  //                 class="dropdown-container-class">Cork<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging materials/Packaging materials and shaping process/wood-packaging"
  //                 id="Packaging materials/Packaging materials and shaping process/wood-packaging"
  //                 class="dropdown-container-class">Wood<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Basic legal framework">Basic legal framework<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Basic legal framework"><a
  //                 href="#Packaging materials/Basic legal framework/legal-framework-overview"
  //                 id="Packaging materials/Basic legal framework/legal-framework-overview"
  //                 class="dropdown-container-class">Basic legal framework (chemicals, contact material, environment,
  //                 consumer
  //                 safety)<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><a
  //             href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
  //             id="Packaging materials/Introduction/panorama-of-food-packaging-part-1" class="dropdown-container-class">
  //             Panorama of food packaging<i class="fa fa-star star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Packaging design">Packaging design<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Packaging design"><button class="dropdown-btn"
  //             id="dropdown-btn-the-basics-of-mechanical-engineering-for-packaging-designer">the-basics-of-mechanical-engineering-for-packaging-designer<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container"
  //             id="dropdown-container-the-basics-of-mechanical-engineering-for-packaging-designer">
  //         </div><a href="#Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
  //             id="Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
  //             class="dropdown-container-class">Mechanical design of packaging: an introduction<i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star-o star-color-yellow little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Packaging properties">Packaging properties<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Packaging properties"><button class="dropdown-btn"
  //             id="dropdown-btn-Thermal, mechanical and barrier properties">Thermal, mechanical and barrier properties<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Thermal, mechanical and barrier properties"><a
  //                 href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
  //                 id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
  //                 class="dropdown-container-class">Thermal properties: methods and standards<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
  //                 id="Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
  //                 class="dropdown-container-class">Mechanical properties: methods and standards<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
  //                 id="Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
  //                 class="dropdown-container-class">Mass transfer properties: methods and standards<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
  //                 id="Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
  //                 class="dropdown-container-class">Optical properties: methods and standards<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a><a
  //                 href="#Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
  //                 id="Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
  //                 class="dropdown-container-class">Surface properties: methods and standards<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Chemical and physical">Chemical and physical<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Chemical and physical"><a
  //                 href="#Packaging properties/Chemical and physical/food-packaging-interactions"
  //                 id="Packaging properties/Chemical and physical/food-packaging-interactions"
  //                 class="dropdown-container-class">Part 1<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions"
  //                 id="Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions"
  //                 class="dropdown-container-class">Part 2<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Principles of mass transfer">Principles of mass transfer<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Principles of mass transfer"><a
  //                 href="#Packaging properties/Principles of mass transfer/principles-part-1"
  //                 id="Packaging properties/Principles of mass transfer/principles-part-1"
  //                 class="dropdown-container-class">Principles of mass transfer - Mass transfer in food packaging 1/2<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Packaging properties/Principles of mass transfer/principles-part-2"
  //                 id="Packaging properties/Principles of mass transfer/principles-part-2"
  //                 class="dropdown-container-class">Principles of mass transfer - Mass transfer in food packaging 2/2<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Calculation of permeability in composite systems">Calculation of permeability in composite
  //             systems<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Calculation of permeability in composite systems"><a
  //                 href="#Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
  //                 id="Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
  //                 class="dropdown-container-class">Permeability in composites: from ideal laminates to materials with
  //                 defects
  //                 and dispersed particles.<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Multicomponent diffusion, predictive models">Multicomponent diffusion, predictive models<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Multicomponent diffusion, predictive models"><a
  //                 href="#Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
  //                 id="Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
  //                 class="dropdown-container-class">Multicomponent diffusion: diffusion and solubility at molecular scale
  //                 (overview) and in non-ideal systems<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Micro holes and leaks in packaging">Micro holes and leaks in packaging<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Micro holes and leaks in packaging"><a
  //                 href="#Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
  //                 id="Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
  //                 class="dropdown-container-class">Micro holes and leaks in packaging – measurement and modeling<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
  //             href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
  //             id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
  //             class="dropdown-container-class">Thermal properties: methods and standards<i
  //                 class="fa fa-star star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Packaging processes">Packaging processes<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Packaging processes"><button class="dropdown-btn"
  //             id="dropdown-btn-introduction-to-mechanical-processes">introduction-to-mechanical-processes<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-introduction-to-mechanical-processes"></div><button
  //             class="dropdown-btn" id="dropdown-btn-Forming">Forming<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Forming"><a
  //                 href="#Packaging processes/Forming/plastic-forming" id="Packaging processes/Forming/plastic-forming"
  //                 class="dropdown-container-class">Plastics forming<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Packaging processes/Forming/films-and-sheets" id="Packaging processes/Forming/films-and-sheets"
  //                 class="dropdown-container-class">Films and sheets<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Filling and dosing">Filling and dosing<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Filling and dosing"><a
  //                 href="#Packaging processes/Filling and dosing/principles"
  //                 id="Packaging processes/Filling and dosing/principles" class="dropdown-container-class">Principles<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Packaging processes/Filling and dosing/forming-filling-sealing"
  //                 id="Packaging processes/Filling and dosing/forming-filling-sealing"
  //                 class="dropdown-container-class">Forming, filling, sealing<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Packaging processes/Filling and dosing/beverage-filling"
  //                 id="Packaging processes/Filling and dosing/beverage-filling" class="dropdown-container-class">Beverage
  //                 filling<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Sealing">Sealing<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Sealing"><a href="#Packaging processes/Sealing/overview"
  //                 id="Packaging processes/Sealing/overview" class="dropdown-container-class">Closing, hot/cold sealing,
  //                 welding, sealed seams and packages<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-surface-treatments-and-coatings">surface-treatments-and-coatings<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-surface-treatments-and-coatings"></div><button
  //             class="dropdown-btn" id="dropdown-btn-Printing and labelling processes">Printing and labelling processes<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Printing and labelling processes"><a
  //                 href="#Packaging processes/Printing and labelling processes/overview"
  //                 id="Packaging processes/Printing and labelling processes/overview"
  //                 class="dropdown-container-class">Printing
  //                 and labelling processes<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Digitization of packaging processes">Digitization of packaging processes<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Digitization of packaging processes"><a
  //                 href="#Packaging processes/Digitization of packaging processes/overview"
  //                 id="Packaging processes/Digitization of packaging processes/overview"
  //                 class="dropdown-container-class">Digitization of packaging processes<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Packaging line">Packaging line<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Packaging line"><a
  //                 href="#Packaging processes/Packaging line/optimization"
  //                 id="Packaging processes/Packaging line/optimization" class="dropdown-container-class">Optimization<i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a><a
  //                 href="#Packaging processes/Packaging line/hygienic-design"
  //                 id="Packaging processes/Packaging line/hygienic-design" class="dropdown-container-class">Hygienic
  //                 design<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><a
  //             href="#Packaging processes/introduction-to-mechanical-processes"
  //             id="Packaging processes/introduction-to-mechanical-processes" class="dropdown-container-class">Introduction
  //             into
  //             mechanical processes in packaging<i class="fa fa-star star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Shelf-life">Shelf-life<i class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Shelf-life"><button class="dropdown-btn"
  //             id="dropdown-btn-Food preservation technology and packaging">Food preservation technology and packaging<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Food preservation technology and packaging"><a
  //                 href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
  //                 id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
  //                 class="dropdown-container-class">Introduction to preservation and packaging technologies<i
  //                     class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Common physical chemical factors affecting food stability">Common physical chemical factors
  //             affecting food stability<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container"
  //             id="dropdown-container-Common physical chemical factors affecting food stability"><a
  //                 href="#Shelf-life/Common physical chemical factors affecting food stability/overview"
  //                 id="Shelf-life/Common physical chemical factors affecting food stability/overview"
  //                 class="dropdown-container-class">Overview physical and chemical processes impacting the shelf-life of
  //                 food-products (processed or not)<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Food packaging and shelf life">Food packaging and shelf life<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Food packaging and shelf life"><a
  //                 href="#Shelf-life/Food packaging and shelf life/shelf-life-definitions"
  //                 id="Shelf-life/Food packaging and shelf life/shelf-life-definitions"
  //                 class="dropdown-container-class">Definitions<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life"
  //                 id="Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life"
  //                 class="dropdown-container-class">Factors affection shelf-life<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Shelf-life/Food packaging and shelf life/study-shelf-life"
  //                 id="Shelf-life/Food packaging and shelf life/study-shelf-life" class="dropdown-container-class">How to
  //                 study
  //                 shelf life<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Shelf-life/Food packaging and shelf life/predict-shelf-life"
  //                 id="Shelf-life/Food packaging and shelf life/predict-shelf-life" class="dropdown-container-class">How to
  //                 calculate/predict shelf-life<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
  //             href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
  //             id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
  //             class="dropdown-container-class">Introduction to preservation and packaging technologies<i
  //                 class="fa fa-star star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Environmental pollution">Environmental pollution<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Environmental pollution"><button class="dropdown-btn"
  //             id="dropdown-btn-Methodologies used in life cycle assessment">Methodologies used in life cycle assessment<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Methodologies used in life cycle assessment"><a
  //                 href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
  //                 id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
  //                 class="dropdown-container-class">Sustainability and Packaging - What is suistainability? (part 1/2)<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
  //                 id="Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
  //                 class="dropdown-container-class">Sustainability and Packaging - Life Cycle Assessment (part 2/2)<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Tools for life cycle impact assessment">Tools for life cycle impact assessment<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Tools for life cycle impact assessment"><a
  //                 href="#Environmental pollution/Tools for life cycle impact assessment/overview"
  //                 id="Environmental pollution/Tools for life cycle impact assessment/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Biodegradation and microplastics">Biodegradation and microplastics<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Biodegradation and microplastics"><a
  //                 href="#Environmental pollution/Biodegradation and microplastics/overview"
  //                 id="Environmental pollution/Biodegradation and microplastics/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><a
  //             href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
  //             id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
  //             class="dropdown-container-class">Sustainability and Packaging - What is suistainability? (part 1/2)<i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star-o star-color-yellow little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Marketing and design">Marketing and design<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Marketing and design"><button class="dropdown-btn"
  //             id="dropdown-btn-Sensory science">Sensory science<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Sensory science"><a
  //                 href="#Marketing and design/Sensory science/sensory-science"
  //                 id="Marketing and design/Sensory science/sensory-science" class="dropdown-container-class">Sensory
  //                 science<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><a
  //             href="#Marketing and design/Sensory science/sensory-science"
  //             id="Marketing and design/Sensory science/sensory-science" class="dropdown-container-class">Sensory science<i
  //                 class="fa fa-star star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i><i
  //                 class="fa fa-star-o star-color-green little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Innovations">Innovations<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Innovations"><button class="dropdown-btn"
  //             id="dropdown-btn-Biobased and biodegradable materials">Biobased and biodegradable materials<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Biobased and biodegradable materials"><a
  //                 href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
  //                 id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
  //                 class="dropdown-container-class">Part 1<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Innovations/Biobased and biodegradable materials/cellulose-derivates"
  //                 id="Innovations/Biobased and biodegradable materials/cellulose-derivates"
  //                 class="dropdown-container-class">Part 2<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Active packaging">Active packaging<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Active packaging"><a
  //                 href="#Innovations/Active packaging/overview" id="Innovations/Active packaging/overview"
  //                 class="dropdown-container-class">Overview and principles<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Innovations/Active packaging/humidity-control" id="Innovations/Active packaging/humidity-control"
  //                 class="dropdown-container-class">Examples<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Smart packaging">Smart packaging<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Smart packaging"><a
  //                 href="#Innovations/Smart packaging/overview" id="Innovations/Smart packaging/overview"
  //                 class="dropdown-container-class">From principles to commercially available intelligent packaging
  //                 systems<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Nanotechnology strategies">Nanotechnology strategies<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Nanotechnology strategies"><a
  //                 href="#Innovations/Nanotechnology strategies/definitions"
  //                 id="Innovations/Nanotechnology strategies/definitions" class="dropdown-container-class">Definitions,
  //                 nano-scale additives, examples of gains and applications.<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Bacterial polyesters">Bacterial polyesters<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Bacterial polyesters"><a
  //                 href="#Innovations/Bacterial polyesters/bacterial-polyesters"
  //                 id="Innovations/Bacterial polyesters/bacterial-polyesters" class="dropdown-container-class">Bacterial
  //                 polyesters<i class="fa fa-star star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i><i
  //                     class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Advanced cellulosic materials">Advanced cellulosic materials<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Advanced cellulosic materials"><a
  //                 href="#Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
  //                 id="Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
  //                 class="dropdown-container-class">Advanced cellulosic materials for food packaging<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Modified atmosphere packaging">Modified atmosphere packaging<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Modified atmosphere packaging"><a
  //                 href="#Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
  //                 id="Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
  //                 class="dropdown-container-class">Modified atmosphere packaging <i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><a
  //             href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
  //             id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
  //             class="dropdown-container-class">Part 1<i class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star-o star-color-yellow little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Recoverability">Recoverability<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Recoverability"><button class="dropdown-btn"
  //             id="dropdown-btn-Environmental impact of plastics and recycling">Environmental impact of plastics and
  //             recycling<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Environmental impact of plastics and recycling"><a
  //                 href="#Recoverability/Environmental impact of plastics and recycling/overview"
  //                 id="Recoverability/Environmental impact of plastics and recycling/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Safety assessment of recycling processes">Safety assessment of recycling processes<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Safety assessment of recycling processes"><a
  //                 href="#Recoverability/Safety assessment of recycling processes/overview"
  //                 id="Recoverability/Safety assessment of recycling processes/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
  //             href="#Recoverability/Environmental impact of plastics and recycling/overview"
  //             id="Recoverability/Environmental impact of plastics and recycling/overview"
  //             class="dropdown-container-class">Overview<i class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star-o star-color-yellow little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Legislation">Legislation<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Legislation"><button class="dropdown-btn"
  //             id="dropdown-btn-EU, US others regulations">EU, US others regulations<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-EU, US others regulations"><a
  //                 href="#Legislation/EU, US others regulations/regulatory-framework"
  //                 id="Legislation/EU, US others regulations/regulatory-framework"
  //                 class="dropdown-container-class">Regulatory
  //                 framework in the EU and the US<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-GMP and quality assurance standards">GMP and quality assurance standards<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-GMP and quality assurance standards"><a
  //                 href="#Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
  //                 id="Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
  //                 class="dropdown-container-class">GMP, Safety, Quality management system, Responsibilities and
  //                 Certification<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Hazard identification and characterization">Hazard identification and characterization<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Hazard identification and characterization"><a
  //                 href="#Legislation/Hazard identification and characterization/introduction"
  //                 id="Legislation/Hazard identification and characterization/introduction"
  //                 class="dropdown-container-class">Introduction<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Legislation/Hazard identification and characterization/identification"
  //                 id="Legislation/Hazard identification and characterization/identification"
  //                 class="dropdown-container-class">Identification<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a><a
  //                 href="#Legislation/Hazard identification and characterization/characterization"
  //                 id="Legislation/Hazard identification and characterization/characterization"
  //                 class="dropdown-container-class">Characterization<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Exposure and risk assessment">Exposure and risk assessment<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Exposure and risk assessment">
  //             <a href="#Legislation/Exposure and risk assessment/exposure-and-risk-assessment"
  //                 id="Legislation/Exposure and risk assessment/exposure-and-risk-assessment"
  //                 class="dropdown-container-class"
  //                 onclick="createAElementForDropDownMenu(this.id); return false;">Exposure and risk assessment
  //                 <i class="fa fa-star star-color-yellow little-space"></i>
  //                 <i class="fa fa-star star-color-yellow little-space"></i>
  //                 <i class="fa fa-star-o star-color-yellow little-space"></i>
  //             </a>
  //         </div>
  //         <button class="dropdown-btn" id="dropdown-btn-Risk assessment tools">Risk assessment tools<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Risk assessment tools"><a
  //                 href="#Legislation/Risk assessment tools/risk-assessment-tools"
  //                 id="Legislation/Risk assessment tools/risk-assessment-tools" class="dropdown-container-class">Risk
  //                 assessment tools<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
  //             href="#Legislation/EU, US others regulations/regulatory-framework"
  //             id="Legislation/EU, US others regulations/regulatory-framework" class="dropdown-container-class">Regulatory
  //             framework in the EU and the US<i class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star-o star-color-yellow little-space"></i></a>
  //     </div><button class="dropdown-btn" id="dropdown-btn-Modeling tools">Modeling tools<i
  //             class="fa fa-caret-down"></i></button>
  //     <div class="dropdown-container" id="dropdown-container-Modeling tools"><button class="dropdown-btn"
  //             id="dropdown-btn-Migration modeling for monomaterials">Migration modeling for monomaterials<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Migration modeling for monomaterials"><a
  //                 href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
  //                 id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
  //                 class="dropdown-container-class">Theory and case studies<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Modeling for multi-materials, multi-steps process">Modeling for multi-materials,
  //             multi-steps
  //             process<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Modeling for multi-materials, multi-steps process"><a
  //                 href="#Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
  //                 id="Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
  //                 class="dropdown-container-class">Theory and case studies<i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Introduction to decision theory and risk management">Introduction to decision theory and
  //             risk
  //             management<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Introduction to decision theory and risk management"><a
  //                 href="#Modeling tools/Introduction to decision theory and risk management/introduction"
  //                 id="Modeling tools/Introduction to decision theory and risk management/introduction"
  //                 class="dropdown-container-class">Introduction<i class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Managing uncertainty by intervals and worst-case scenarios">Managing uncertainty by
  //             intervals
  //             and worst-case scenarios<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container"
  //             id="dropdown-container-Managing uncertainty by intervals and worst-case scenarios">
  //             <a href="#Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
  //                 id="Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
  //                 class="dropdown-container-class">Principles of monotonic (conservative) calculations of migration in
  //                 presence of uncertainty.<i class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Probabilistic approaches and Bayesian approaches">Probabilistic approaches and Bayesian
  //             approaches<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Probabilistic approaches and Bayesian approaches"><a
  //                 href="#Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
  //                 id="Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
  //                 class="dropdown-container-class">Descriptions of migration<i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-History and principles of FMEA-FMECA">History and principles of FMEA-FMECA<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-History and principles of FMEA-FMECA"><a
  //                 href="#Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches"
  //                 id="Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches"
  //                 class="dropdown-container-class">Approaches, link with regulation 2023/2006/EC<i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star star-color-yellow little-space"></i><i
  //                     class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Diagram-based approaches">Diagram-based approaches<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Diagram-based approaches"><a
  //                 href="#Modeling tools/Diagram-based approaches/overview"
  //                 id="Modeling tools/Diagram-based approaches/overview" class="dropdown-container-class">FMECA modeling<i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Computer-aided approaches">Computer-aided approaches<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Computer-aided approaches"><a
  //                 href="#Modeling tools/Computer-aided approaches/overview"
  //                 id="Modeling tools/Computer-aided approaches/overview" class="dropdown-container-class">FMECA approaches
  //                 (application to mass transfer problems)<i class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Principles (forcefields, statistical-ensembles), overview of online databases">Principles
  //             (forcefields, statistical-ensembles), overview of online databases<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container"
  //             id="dropdown-container-Principles (forcefields, statistical-ensembles), overview of online databases"><a
  //                 href="#Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
  //                 id="Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Microscopic theories of transport coefficients and free-energies">Microscopic theories of
  //             transport coefficients and free-energies<i class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container"
  //             id="dropdown-container-Microscopic theories of transport coefficients and free-energies"><a
  //                 href="#Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
  //                 id="Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
  //             id="dropdown-btn-Calculations using fluctuation theorems">Calculations using fluctuation theorems<i
  //                 class="fa fa-caret-down"></i></button>
  //         <div class="dropdown-container" id="dropdown-container-Calculations using fluctuation theorems"><a
  //                 href="#Modeling tools/Calculations using fluctuation theorems/overview"
  //                 id="Modeling tools/Calculations using fluctuation theorems/overview"
  //                 class="dropdown-container-class">Overview<i class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i><i
  //                     class="fa fa-star star-color-red little-space"></i></a></div><a
  //             href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
  //             id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
  //             class="dropdown-container-class">Theory and case studies<i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star star-color-yellow little-space"></i><i
  //                 class="fa fa-star-o star-color-yellow little-space"></i></a>
  //     </div>
  // </div>`;

  div.innerHTML = `<button class="dropdown-btn" id="dropdown-btn-Packaging materials">Packaging materials<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging materials"><button class="dropdown-btn"
        id="dropdown-btn-Introduction">Introduction<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Introduction"><a
            href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
            id="Packaging materials/Introduction/panorama-of-food-packaging-part-1" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;"> Panorama of food packaging<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Packaging materials and shaping process">Packaging materials and shaping process<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging materials and shaping process"><a
            href="#Packaging materials/Packaging materials and shaping process/glass-packaging-part-1"
            id="Packaging materials/Packaging materials and shaping process/glass-packaging-part-1"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Glass - Part 1<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/glass-packaging-part-2"
            id="Packaging materials/Packaging materials and shaping process/glass-packaging-part-2"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Glass - Part 2<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/metal-packaging"
            id="Packaging materials/Packaging materials and shaping process/metal-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Metal<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1"
            id="Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Plastic - Part 1<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2"
            id="Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Plastic - Part 2<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1"
            id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Paper and paperboard -
            Part 1<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2"
            id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Paper and paperboard -
            Part 2<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/bio-based-materials"
            id="Packaging materials/Packaging materials and shaping process/bio-based-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Bio-based materials<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
            id="Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Cork<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging materials/Packaging materials and shaping process/wood-packaging"
            id="Packaging materials/Packaging materials and shaping process/wood-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Wood<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Basic legal framework">Basic legal framework<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Basic legal framework"><a
            href="#Packaging materials/Basic legal framework/legal-framework-overview"
            id="Packaging materials/Basic legal framework/legal-framework-overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Basic legal framework (chemicals, contact material,
            environment, consumer safety)<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><a
        href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
        id="Packaging materials/Introduction/panorama-of-food-packaging-part-1" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id); return false;"> Panorama of food packaging<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Packaging design">Packaging design<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging design"><button class="dropdown-btn"
        id="dropdown-btn-the-basics-of-mechanical-engineering-for-packaging-designer">the-basics-of-mechanical-engineering-for-packaging-designer<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-the-basics-of-mechanical-engineering-for-packaging-designer">
    </div><a href="#Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
        id="Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Mechanical design of
        packaging: an introduction<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Packaging properties">Packaging properties<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging properties"><button class="dropdown-btn"
        id="dropdown-btn-Thermal, mechanical and barrier properties">Thermal, mechanical and barrier properties<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Thermal, mechanical and barrier properties"><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Thermal properties:
            methods and standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Mechanical properties:
            methods and standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Mass transfer
            properties: methods and standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Optical properties:
            methods and standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a><a
            href="#Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
            id="Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Surface properties:
            methods and standards<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Chemical and physical">Chemical and physical<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Chemical and physical"><a
            href="#Packaging properties/Chemical and physical/food-packaging-interactions"
            id="Packaging properties/Chemical and physical/food-packaging-interactions" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Part 1<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions"
            id="Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Part 2<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Principles of mass transfer">Principles of mass transfer<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Principles of mass transfer"><a
            href="#Packaging properties/Principles of mass transfer/principles-part-1"
            id="Packaging properties/Principles of mass transfer/principles-part-1" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Principles of mass transfer - Mass transfer in food
            packaging 1/2<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging properties/Principles of mass transfer/principles-part-2"
            id="Packaging properties/Principles of mass transfer/principles-part-2" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Principles of mass transfer - Mass transfer in food
            packaging 2/2<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Calculation of permeability in composite systems">Calculation of permeability in composite
        systems<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Calculation of permeability in composite systems"><a
            href="#Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
            id="Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Permeability in
            composites: from ideal laminates to materials with defects and dispersed particles.<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Multicomponent diffusion, predictive models">Multicomponent diffusion, predictive models<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Multicomponent diffusion, predictive models"><a
            href="#Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
            id="Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Multicomponent
            diffusion: diffusion and solubility at molecular scale (overview) and in non-ideal systems<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Micro holes and leaks in packaging">Micro holes and leaks in packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Micro holes and leaks in packaging"><a
            href="#Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
            id="Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Micro holes and leaks in
            packaging – measurement and modeling<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
        href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
        id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Thermal properties: methods
        and standards<i class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Packaging processes">Packaging processes<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Packaging processes"><button class="dropdown-btn"
        id="dropdown-btn-introduction-to-mechanical-processes">introduction-to-mechanical-processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-introduction-to-mechanical-processes"></div><button
        class="dropdown-btn" id="dropdown-btn-Forming">Forming<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Forming"><a
            href="#Packaging processes/Forming/plastic-forming" id="Packaging processes/Forming/plastic-forming"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Plastics forming<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/Forming/films-and-sheets" id="Packaging processes/Forming/films-and-sheets"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Films and sheets<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Filling and dosing">Filling and dosing<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Filling and dosing"><a
            href="#Packaging processes/Filling and dosing/principles"
            id="Packaging processes/Filling and dosing/principles" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Principles<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/Filling and dosing/forming-filling-sealing"
            id="Packaging processes/Filling and dosing/forming-filling-sealing" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Forming, filling, sealing<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Packaging processes/Filling and dosing/beverage-filling"
            id="Packaging processes/Filling and dosing/beverage-filling" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Beverage filling<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Sealing">Sealing<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Sealing"><a href="#Packaging processes/Sealing/overview"
            id="Packaging processes/Sealing/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Closing, hot/cold sealing, welding, sealed seams and
            packages<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-surface-treatments-and-coatings">surface-treatments-and-coatings<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-surface-treatments-and-coatings"></div><button
        class="dropdown-btn" id="dropdown-btn-Printing and labelling processes">Printing and labelling processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Printing and labelling processes"><a
            href="#Packaging processes/Printing and labelling processes/overview"
            id="Packaging processes/Printing and labelling processes/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Printing and labelling processes<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Digitization of packaging processes">Digitization of packaging processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Digitization of packaging processes"><a
            href="#Packaging processes/Digitization of packaging processes/overview"
            id="Packaging processes/Digitization of packaging processes/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Digitization of packaging processes<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Packaging line">Packaging line<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Packaging line"><a
            href="#Packaging processes/Packaging line/optimization" id="Packaging processes/Packaging line/optimization"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Optimization<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a><a
            href="#Packaging processes/Packaging line/hygienic-design"
            id="Packaging processes/Packaging line/hygienic-design" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Hygienic design<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><a
        href="#Packaging processes/introduction-to-mechanical-processes"
        id="Packaging processes/introduction-to-mechanical-processes" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id); return false;">Introduction into mechanical processes in packaging<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Shelf-life">Shelf-life<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Shelf-life"><button class="dropdown-btn"
        id="dropdown-btn-Food preservation technology and packaging">Food preservation technology and packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Food preservation technology and packaging"><a
            href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
            id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Introduction to
            preservation and packaging technologies<i class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Common physical chemical factors affecting food stability">Common physical chemical factors
        affecting food stability<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Common physical chemical factors affecting food stability"><a
            href="#Shelf-life/Common physical chemical factors affecting food stability/overview"
            id="Shelf-life/Common physical chemical factors affecting food stability/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Overview physical and
            chemical processes impacting the shelf-life of food-products (processed or not)<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Food packaging and shelf life">Food packaging and shelf life<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Food packaging and shelf life"><a
            href="#Shelf-life/Food packaging and shelf life/shelf-life-definitions"
            id="Shelf-life/Food packaging and shelf life/shelf-life-definitions" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Definitions<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life"
            id="Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Factors affection shelf-life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Shelf-life/Food packaging and shelf life/study-shelf-life"
            id="Shelf-life/Food packaging and shelf life/study-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">How to study shelf life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Shelf-life/Food packaging and shelf life/predict-shelf-life"
            id="Shelf-life/Food packaging and shelf life/predict-shelf-life" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">How to calculate/predict shelf-life<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
        href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
        id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Introduction to preservation
        and packaging technologies<i class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Environmental pollution">Environmental pollution<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Environmental pollution"><button class="dropdown-btn"
        id="dropdown-btn-Methodologies used in life cycle assessment">Methodologies used in life cycle assessment<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Methodologies used in life cycle assessment"><a
            href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
            id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Sustainability and
            Packaging - What is suistainability? (part 1/2)<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
            id="Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Sustainability and
            Packaging - Life Cycle Assessment (part 2/2)<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Tools for life cycle impact assessment">Tools for life cycle impact assessment<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Tools for life cycle impact assessment"><a
            href="#Environmental pollution/Tools for life cycle impact assessment/overview"
            id="Environmental pollution/Tools for life cycle impact assessment/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Biodegradation and microplastics">Biodegradation and microplastics<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Biodegradation and microplastics"><a
            href="#Environmental pollution/Biodegradation and microplastics/overview"
            id="Environmental pollution/Biodegradation and microplastics/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><a
        href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
        id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Sustainability and Packaging
        - What is suistainability? (part 1/2)<i class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Marketing and design">Marketing and design<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Marketing and design"><button class="dropdown-btn"
        id="dropdown-btn-Sensory science">Sensory science<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Sensory science"><a
            href="#Marketing and design/Sensory science/sensory-science"
            id="Marketing and design/Sensory science/sensory-science" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Sensory science<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><a
        href="#Marketing and design/Sensory science/sensory-science"
        id="Marketing and design/Sensory science/sensory-science" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id); return false;">Sensory science<i
            class="fa fa-star star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i><i
            class="fa fa-star-o star-color-green little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Innovations">Innovations<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Innovations"><button class="dropdown-btn"
        id="dropdown-btn-Biobased and biodegradable materials">Biobased and biodegradable materials<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Biobased and biodegradable materials"><a
            href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
            id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Part 1<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovations/Biobased and biodegradable materials/cellulose-derivates"
            id="Innovations/Biobased and biodegradable materials/cellulose-derivates" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Part 2<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Active packaging">Active packaging<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Active packaging"><a
            href="#Innovations/Active packaging/overview" id="Innovations/Active packaging/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Overview and
            principles<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Innovations/Active packaging/humidity-control" id="Innovations/Active packaging/humidity-control"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Examples<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Smart packaging">Smart packaging<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Smart packaging"><a
            href="#Innovations/Smart packaging/overview" id="Innovations/Smart packaging/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">From principles to
            commercially available intelligent packaging systems<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Nanotechnology strategies">Nanotechnology strategies<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Nanotechnology strategies"><a
            href="#Innovations/Nanotechnology strategies/definitions"
            id="Innovations/Nanotechnology strategies/definitions" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Definitions, nano-scale additives, examples of gains and
            applications.<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Bacterial polyesters">Bacterial polyesters<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Bacterial polyesters"><a
            href="#Innovations/Bacterial polyesters/bacterial-polyesters"
            id="Innovations/Bacterial polyesters/bacterial-polyesters" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Bacterial polyesters<i
                class="fa fa-star star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i><i
                class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Advanced cellulosic materials">Advanced cellulosic materials<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Advanced cellulosic materials"><a
            href="#Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
            id="Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Advanced cellulosic
            materials for food packaging<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Modified atmosphere packaging">Modified atmosphere packaging<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Modified atmosphere packaging"><a
            href="#Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
            id="Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Modified atmosphere
            packaging <i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><a
        href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
        id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
        class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Part 1<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Recoverability">Recoverability<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Recoverability"><button class="dropdown-btn"
        id="dropdown-btn-Environmental impact of plastics and recycling">Environmental impact of plastics and
        recycling<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Environmental impact of plastics and recycling"><a
            href="#Recoverability/Environmental impact of plastics and recycling/overview"
            id="Recoverability/Environmental impact of plastics and recycling/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Safety assessment of recycling processes">Safety assessment of recycling processes<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Safety assessment of recycling processes"><a
            href="#Recoverability/Safety assessment of recycling processes/overview"
            id="Recoverability/Safety assessment of recycling processes/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
        href="#Recoverability/Environmental impact of plastics and recycling/overview"
        id="Recoverability/Environmental impact of plastics and recycling/overview" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id); return false;">Overview<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Legislation">Legislation<i class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Legislation"><button class="dropdown-btn"
        id="dropdown-btn-EU, US others regulations">EU, US others regulations<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-EU, US others regulations"><a
            href="#Legislation/EU, US others regulations/regulatory-framework"
            id="Legislation/EU, US others regulations/regulatory-framework" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Regulatory framework in the EU and the US<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-GMP and quality assurance standards">GMP and quality assurance standards<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-GMP and quality assurance standards"><a
            href="#Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
            id="Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">GMP, Safety, Quality
            management system, Responsibilities and Certification<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Hazard identification and characterization">Hazard identification and characterization<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Hazard identification and characterization"><a
            href="#Legislation/Hazard identification and characterization/introduction"
            id="Legislation/Hazard identification and characterization/introduction" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Introduction<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation/Hazard identification and characterization/identification"
            id="Legislation/Hazard identification and characterization/identification" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Identification<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a><a
            href="#Legislation/Hazard identification and characterization/characterization"
            id="Legislation/Hazard identification and characterization/characterization"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Characterization<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Exposure and risk assessment">Exposure and risk assessment<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Exposure and risk assessment"><a
            href="#Legislation/Exposure and risk assessment/exposure-and-risk-assessment"
            id="Legislation/Exposure and risk assessment/exposure-and-risk-assessment" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Exposure and risk assessment<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Risk assessment tools">Risk assessment tools<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Risk assessment tools"><a
            href="#Legislation/Risk assessment tools/risk-assessment-tools"
            id="Legislation/Risk assessment tools/risk-assessment-tools" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Risk assessment tools<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><a
        href="#Legislation/EU, US others regulations/regulatory-framework"
        id="Legislation/EU, US others regulations/regulatory-framework" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id); return false;">Regulatory framework in the EU and the US<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a>
</div><button class="dropdown-btn" id="dropdown-btn-Modeling tools">Modeling tools<i
        class="fa fa-caret-down"></i></button>
<div class="dropdown-container" id="dropdown-container-Modeling tools"><button class="dropdown-btn"
        id="dropdown-btn-Migration modeling for monomaterials">Migration modeling for monomaterials<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Migration modeling for monomaterials"><a
            href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
            id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Theory and case
            studies<i class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Modeling for multi-materials, multi-steps process">Modeling for multi-materials, multi-steps
        process<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Modeling for multi-materials, multi-steps process"><a
            href="#Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
            id="Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Theory and case
            studies<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Introduction to decision theory and risk management">Introduction to decision theory and risk
        management<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Introduction to decision theory and risk management"><a
            href="#Modeling tools/Introduction to decision theory and risk management/introduction"
            id="Modeling tools/Introduction to decision theory and risk management/introduction"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Introduction<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Managing uncertainty by intervals and worst-case scenarios">Managing uncertainty by intervals
        and worst-case scenarios<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Managing uncertainty by intervals and worst-case scenarios">
        <a href="#Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
            id="Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Principles of monotonic
            (conservative) calculations of migration in presence of uncertainty.<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Probabilistic approaches and Bayesian approaches">Probabilistic approaches and Bayesian
        approaches<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Probabilistic approaches and Bayesian approaches"><a
            href="#Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
            id="Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Descriptions of
            migration<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-History and principles of FMEA-FMECA">History and principles of FMEA-FMECA<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-History and principles of FMEA-FMECA"><a
            href="#Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches"
            id="Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Approaches, link with regulation 2023/2006/EC<i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star star-color-yellow little-space"></i><i
                class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Diagram-based approaches">Diagram-based approaches<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Diagram-based approaches"><a
            href="#Modeling tools/Diagram-based approaches/overview"
            id="Modeling tools/Diagram-based approaches/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">FMECA modeling<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Computer-aided approaches">Computer-aided approaches<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Computer-aided approaches"><a
            href="#Modeling tools/Computer-aided approaches/overview"
            id="Modeling tools/Computer-aided approaches/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">FMECA approaches (application to mass transfer
            problems)<i class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Principles (forcefields, statistical-ensembles), overview of online databases">Principles
        (forcefields, statistical-ensembles), overview of online databases<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container"
        id="dropdown-container-Principles (forcefields, statistical-ensembles), overview of online databases"><a
            href="#Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
            id="Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Microscopic theories of transport coefficients and free-energies">Microscopic theories of
        transport coefficients and free-energies<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container"
        id="dropdown-container-Microscopic theories of transport coefficients and free-energies"><a
            href="#Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
            id="Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
            class="dropdown-container-class" onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><button class="dropdown-btn"
        id="dropdown-btn-Calculations using fluctuation theorems">Calculations using fluctuation theorems<i
            class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Calculations using fluctuation theorems"><a
            href="#Modeling tools/Calculations using fluctuation theorems/overview"
            id="Modeling tools/Calculations using fluctuation theorems/overview" class="dropdown-container-class"
            onclick="lectureToDisplay(this.id); return false;">Overview<i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i><i
                class="fa fa-star star-color-red little-space"></i></a></div><a
        href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
        id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling" class="dropdown-container-class"
        onclick="lectureToDisplay(this.id); return false;">Theory and case studies<i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star star-color-yellow little-space"></i><i
            class="fa fa-star-o star-color-yellow little-space"></i></a>
</div>`;
  mainDropDownContainer.appendChild(div);
  console.log(mainDropDownContainer.innerHTML);
}

function createDropDownMenuElementsToPrint() {
  console.log("createDropDownMenuElementsToPrint beg");
  // Create a document fragment to hold the dropdown menu
  const dropdownFragment = document.createDocumentFragment();

  for (let [keyI, valueI] of lecturesPaths) {
    const dropdownButtonAndContainerI = getDropdownButtonAndContainer(
      valueI.name,
      keyI
    );
    const dropdownButtonI = dropdownButtonAndContainerI.dropdownButton;
    const dropdownContainerDivI =
      dropdownButtonAndContainerI.dropdownContainerDiv;

    for (let [keyJ, valueJ] of valueI.children) {
      const dropdownButtonAndContainerJ = getDropdownButtonAndContainer(
        valueJ.name,
        keyJ
      );
      const dropdownButtonJ = dropdownButtonAndContainerJ.dropdownButton;
      const dropdownContainerDivJ =
        dropdownButtonAndContainerJ.dropdownContainerDiv;

      for (let [keyK, valueK] of valueJ.children) {
        const aElementK = createAElementForDropDownMenuToPrint(
          valueK.manifestPath
        );
        dropdownContainerDivJ.appendChild(aElementK);
      }

      dropdownContainerDivI.appendChild(dropdownButtonJ);
      dropdownContainerDivI.appendChild(dropdownContainerDivJ);
    }

    const aElementI = createAElementForDropDownMenuToPrint(valueI.manifestPath);
    dropdownContainerDivI.appendChild(aElementI);
    dropdownFragment.appendChild(dropdownButtonI);
    dropdownFragment.appendChild(dropdownContainerDivI);
  }

  mainDropDownContainer.innerHTML = "";

  // Append the entire dropdown menu at once
  mainDropDownContainer.appendChild(dropdownFragment);

  console.log(mainDropDownContainer.innerHTML);
  console.log("createDropDownMenuElementsToPrint end");
}

function getStarElements(difficultyLevel) {
  const firstStar = document.createElement("i");
  const secondStar = document.createElement("i");
  const thirdStar = document.createElement("i");

  const stars = [firstStar, secondStar, thirdStar];

  if (difficultyLevel.toLowerCase() === "novice") {
    firstStar.setAttribute("class", "fa fa-star star-color-green little-space");
    secondStar.setAttribute(
      "class",
      "fa fa-star-o star-color-green little-space"
    );
    thirdStar.setAttribute(
      "class",
      "fa fa-star-o star-color-green little-space"
    );
  }

  if (difficultyLevel.toLowerCase() === "intermediate") {
    firstStar.setAttribute(
      "class",
      "fa fa-star star-color-yellow little-space"
    );
    secondStar.setAttribute(
      "class",
      "fa fa-star star-color-yellow little-space"
    );
    thirdStar.setAttribute(
      "class",
      "fa fa-star-o star-color-yellow little-space"
    );
  }

  if (difficultyLevel.toLowerCase() === "advanced") {
    for (let i = 0; i < stars.length; i++) {
      stars[i].setAttribute("class", "fa fa-star star-color-red little-space");
    }
  }

  return stars;
}

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function createAElementForDropDownMenu(identifier) {
  // console.log("yesay");
  // console.log(identifier);
  // const lecture = lecturesContainer.get(identifier);
  // // We have a child, so we will insert it in the dropdown menu
  // let aElement = document.createElement("a");

  // let backgroundColor = "#ec6807";

  // // Course URL
  // let courseButtonElement = document.createElement("button");
  // courseButtonElement.classList.add("btn", "btn-primary");
  // courseButtonElement.textContent = "Read the lecture";
  // // Apply the background color using the style attribute
  // courseButtonElement.style.backgroundColor = backgroundColor;
  // courseButtonElement.style.borderColor = backgroundColor;
  // // Apply the margin in percentage to create space below the button
  // courseButtonElement.style.marginBottom = "2%";

  // courseButtonElement.addEventListener("click", function () {
  //   window.open(lecture.userProvidedURLForLecture, "_blank");
  // });

  // const qAndABaseURL =
  //   "https://fitness.agroparistech.fr/fitness2/wip/quiz-creator-tool-online/index.html#";

  // // We will modify main view to display the content of the selected lecture

  // // Let's get the lecture by using its id in the map
  // const mainDiv = document.createElement("div");

  // // const lecture = lecturesContainer.get(identifier);

  // // Title
  // const titleElement = document.createElement("h1");
  // titleElement.innerHTML = lecture.title;

  // // Difficulty level
  // const difficultyLevelHeader = document.createElement("h4");
  // difficultyLevelHeader.innerHTML = "Difficulty level";
  // const difficultyLevelElement = document.createElement("p");
  // const difficultyLevelNode = document.createTextNode(lecture.difficultyLevel);
  // difficultyLevelElement.appendChild(difficultyLevelNode);

  // addStarsToElement(lecture, difficultyLevelElement);

  // // Topics
  // const topicsHeader = document.createElement("h4");
  // topicsHeader.innerHTML = "Topics";
  // const topicsElement = document.createElement("p");
  // const topicsNode = document.createTextNode(lecture.topic);
  // topicsElement.appendChild(topicsNode);

  // // Abstract
  // const abstractHeader = document.createElement("h4");
  // abstractHeader.innerHTML = "Abstract";
  // const abstractElement = document.createElement("p");
  // const abstractNode = document.createTextNode(lecture.abstract);
  // abstractElement.appendChild(abstractNode);

  // // Authors
  // const authorsHeader = document.createElement("h4");
  // authorsHeader.innerHTML = "Authors";
  // const authorsElement = document.createElement("ul"); // Use a <ul> for the list

  // // Check if lecture.author is a string or an array
  // if (Array.isArray(lecture.author)) {
  //   // If it's an array, iterate through authors
  //   lecture.author.forEach((author) => {
  //     const listItem = document.createElement("li");
  //     listItem.textContent = author.trim();
  //     authorsElement.appendChild(listItem);
  //   });
  // } else if (typeof lecture.author === "string") {
  //   // If it's a string, split it by commas
  //   const authors = lecture.author.split(",");
  //   authors.forEach((author) => {
  //     const listItem = document.createElement("li");
  //     listItem.textContent = author.trim();
  //     authorsElement.appendChild(listItem);
  //   });
  // }

  // mainDiv.appendChild(titleElement);
  // mainDiv.appendChild(difficultyLevelHeader);
  // mainDiv.appendChild(difficultyLevelElement);
  // mainDiv.appendChild(topicsHeader);
  // mainDiv.appendChild(topicsElement);
  // mainDiv.appendChild(abstractHeader);
  // mainDiv.appendChild(abstractElement);
  // mainDiv.appendChild(courseButtonElement);

  // console.log(lecture.qAndAVariables !== undefined);
  // if (lecture.qAndAVariables !== undefined) {
  //   const qAndAHeader = document.createElement("h4");
  //   qAndAHeader.innerHTML = "Assessments";

  //   const qAndAPar = document.createElement("p");
  //   // Question and answers URL
  //   let qAndAURL = document.createElement("a");
  //   qAndAURL.href = qAndABaseURL + lecture.qAndAVariables;
  //   qAndAURL.text = "Access Q/A number 1";
  //   qAndAURL.target = "_blank";
  //   qAndAPar.appendChild(qAndAURL);
  //   // qAndAHeader.appendChild(qAndAPar);
  //   mainDiv.appendChild(qAndAHeader);
  //   mainDiv.appendChild(qAndAPar);
  // }
  // mainDiv.appendChild(authorsHeader);
  // mainDiv.appendChild(authorsElement);

  const mainDiv = document.createElement("div");
  mainDiv.innerHTML = `<h1>Exposure and risk assessment</h1>
<h4>Difficulty level</h4>
<p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i
        class="fa fa-star star-color-yellow little-space"></i><i
        class="fa fa-star-o star-color-yellow little-space"></i></p>
<h4>Topics</h4>
<p>hazard assessment,hazard characterization,food toxicology,predictive tools,risk assessment
    agencies,migration,exposure assessment,risk characterization,in silico,in vitro,in vivo studies,TTC</p>
<h4>Abstract</h4>
<p>Then, in the third step named “Exposure assessment” the human exposure is determined. It consists to study foodstuff
    chemical contamination and foodstuff consumption. Regarding to FCM, the level of migration will determine the
    consumer exposure. To going further see the units on migration modelling in monomaterials (Unit 4.2 Specialized) and
    migration modelling for multimaterials, multistep process, reusable materials (Unit4.3 Specialized).'Risk
    characterization' is the final step of the risk assessment which will define if there is a safety concern or not for
    the consumer exposed to the substance of interest. Conclusions and scientific opinions made by RA agencies, such as
    EFSA, are useful for risk managers to reduce the consumer exposition if necessary and to write/amend new
    regulations. </p><a target="_blank" class="btn btn-primary"
    href="https://fitness.agroparistech.fr/fitness2/online/Institut-Agro-Dijon/exposure-ass-risk-char.html#/"
    id="lecture-button-exposure-and-risk-assessment"
    style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a>
<h4>Authors</h4>
<ul>
    <li>Marie-Christine Chagnon</li>
</ul>`;

  // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
  mainContent.innerHTML = ""; // Clear the existing content
  mainContent.appendChild(mainDiv);
  console.log(mainDiv.innerHTML);

  // // Split the identifier string by '/'
  // let parts = identifier.split("/");

  // // Get the last part of the string
  // let lastPart = parts[parts.length - 1];

  // // Create the button-id variable
  // let lectureButtonId = "lecture-button-" + lastPart;

  // let courseButtonElement = document.getElementById(lectureButtonId);

  // courseButtonElement.addEventListener("click", function () {
  //   window.open(lecture.userProvidedURLForLecture, "_blank");
  // });
}

function createAElementForDropDownMenuMod(identifier) {
  // console.log("yesay");
  // console.log(identifier);
  const lecture = lecturesContainer.get(identifier);
  // We have a child, so we will insert it in the dropdown menu
  let aElement = document.createElement("a");

  let backgroundColor = "#ec6807";

  // Course URL
  let courseButtonElement = document.createElement("a"); // Use an anchor tag instead of a button
  courseButtonElement.target = "_blank";
  courseButtonElement.classList.add("btn", "btn-primary");
  courseButtonElement.textContent = "Read the lecture";
  // Apply the background color using the style attribute
  courseButtonElement.style.backgroundColor = backgroundColor;
  courseButtonElement.style.borderColor = backgroundColor;
  // Apply the margin in percentage to create space below the button
  courseButtonElement.style.marginBottom = "2%";

  // Split the identifier string by '/'
  let parts = identifier.split("/");

  // Get the last part of the string
  let lastPart = parts[parts.length - 1];

  // Create the href attribute
  courseButtonElement.href = lecture.userProvidedURLForLecture;

  // You can keep the "id" for further styling or scripting, if needed
  courseButtonElement.id = "lecture-button-" + lastPart;

  // console.log("lecture from new drop down menu");
  // console.log(event);
  // console.log(identifier);
  const targetId = identifier;
  // console.log(targetId);
  const y = 0;
  // console.log("showing y");
  // console.log(y);

  const qAndABaseURL =
    "https://fitness.agroparistech.fr/fitness2/wip/quiz-creator-tool-online/index.html#";

  // We will modify main view to display the content of the selected lecture

  // Let's get the lecture by using its id in the map
  const mainDiv = document.createElement("div");

  // const lecture = lecturesContainer.get(identifier);

  // Title
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = lecture.title;

  // Difficulty level
  const difficultyLevelHeader = document.createElement("h4");
  difficultyLevelHeader.innerHTML = "Difficulty level";
  const difficultyLevelElement = document.createElement("p");
  const difficultyLevelNode = document.createTextNode(lecture.difficultyLevel);
  difficultyLevelElement.appendChild(difficultyLevelNode);

  addStarsToElement(lecture, difficultyLevelElement);

  // Topics
  const topicsHeader = document.createElement("h4");
  topicsHeader.innerHTML = "Topics";
  const topicsElement = document.createElement("p");
  const topicsNode = document.createTextNode(lecture.topic);
  topicsElement.appendChild(topicsNode);

  // Abstract
  const abstractHeader = document.createElement("h4");
  abstractHeader.innerHTML = "Abstract";
  const abstractElement = document.createElement("p");
  const abstractNode = document.createTextNode(lecture.abstract);
  abstractElement.appendChild(abstractNode);

  // Authors
  const authorsHeader = document.createElement("h4");
  authorsHeader.innerHTML = "Authors";
  const authorsElement = document.createElement("ul"); // Use a <ul> for the list

  // Check if lecture.author is a string or an array
  if (Array.isArray(lecture.author)) {
    // If it's an array, iterate through authors
    lecture.author.forEach((author) => {
      const listItem = document.createElement("li");
      listItem.textContent = author.trim();
      authorsElement.appendChild(listItem);
    });
  } else if (typeof lecture.author === "string") {
    // If it's a string, split it by commas
    const authors = lecture.author.split(",");
    authors.forEach((author) => {
      const listItem = document.createElement("li");
      listItem.textContent = author.trim();
      authorsElement.appendChild(listItem);
    });
  }

  mainDiv.appendChild(titleElement);
  mainDiv.appendChild(difficultyLevelHeader);
  mainDiv.appendChild(difficultyLevelElement);
  mainDiv.appendChild(topicsHeader);
  mainDiv.appendChild(topicsElement);
  mainDiv.appendChild(abstractHeader);
  mainDiv.appendChild(abstractElement);
  mainDiv.appendChild(courseButtonElement);

  // console.log(lecture.qAndAVariables !== undefined);
  if (lecture.qAndAVariables !== undefined) {
    const qAndAHeader = document.createElement("h4");
    qAndAHeader.innerHTML = "Assessments";

    const qAndAPar = document.createElement("p");
    // Question and answers URL
    let qAndAURL = document.createElement("a");
    qAndAURL.href = qAndABaseURL + lecture.qAndAVariables;
    qAndAURL.text = "Access Q/A number 1";
    qAndAURL.target = "_blank";
    qAndAPar.appendChild(qAndAURL);
    // qAndAHeader.appendChild(qAndAPar);
    mainDiv.appendChild(qAndAHeader);
    mainDiv.appendChild(qAndAPar);
  }
  mainDiv.appendChild(authorsHeader);
  mainDiv.appendChild(authorsElement);

  // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
  mainContent.innerHTML = ""; // Clear the existing content
  mainContent.appendChild(mainDiv);
  console.log(mainDiv.innerHTML);

  addStarsToElement(lecture, aElement);
  return aElement;
}

function createAElementForDropDownMenuOri(identifier) {
  const lecture = lecturesContainer.get(identifier);
  // We have a child, so we will insert it in the dropdown menu
  let aElement = document.createElement("a");

  let backgroundColor = "#ec6807";

  // Course URL
  let courseButtonElement = document.createElement("button");
  courseButtonElement.classList.add("btn", "btn-primary");
  courseButtonElement.textContent = "Read the lecture";
  // Apply the background color using the style attribute
  courseButtonElement.style.backgroundColor = backgroundColor;
  courseButtonElement.style.borderColor = backgroundColor;
  // Apply the margin in percentage to create space below the button
  courseButtonElement.style.marginBottom = "2%";

  courseButtonElement.addEventListener("click", function () {
    window.open(lecture.userProvidedURLForLecture, "_blank");
  });

  aElement.href = "#" + identifier;
  aElement.text = lecture.title;
  aElement.id = identifier;
  aElement.setAttribute("class", "dropdown-container-class");
  aElement.addEventListener("click", (event) => {
    // console.log("lecture from new drop down menu");
    // console.log(event);
    // console.log(identifier);
    const targetId = identifier;
    // console.log(targetId);
    const y = 0;
    // console.log("showing y");
    // console.log(y);

    const qAndABaseURL =
      "https://fitness.agroparistech.fr/fitness2/wip/quiz-creator-tool-online/index.html#";

    // We will modify main view to display the content of the selected lecture

    // Let's get the lecture by using its id in the map
    const mainDiv = document.createElement("div");

    const lecture = lecturesContainer.get(identifier);

    // Title
    const titleElement = document.createElement("h1");
    titleElement.innerHTML = lecture.title;

    // Difficulty level
    const difficultyLevelHeader = document.createElement("h4");
    difficultyLevelHeader.innerHTML = "Difficulty level";
    const difficultyLevelElement = document.createElement("p");
    const difficultyLevelNode = document.createTextNode(
      lecture.difficultyLevel
    );
    difficultyLevelElement.appendChild(difficultyLevelNode);

    addStarsToElement(lecture, difficultyLevelElement);

    // Topics
    const topicsHeader = document.createElement("h4");
    topicsHeader.innerHTML = "Topics";
    const topicsElement = document.createElement("p");
    const topicsNode = document.createTextNode(lecture.topic);
    topicsElement.appendChild(topicsNode);

    // Abstract
    const abstractHeader = document.createElement("h4");
    abstractHeader.innerHTML = "Abstract";
    const abstractElement = document.createElement("p");
    const abstractNode = document.createTextNode(lecture.abstract);
    abstractElement.appendChild(abstractNode);

    // Authors
    const authorsHeader = document.createElement("h4");
    authorsHeader.innerHTML = "Authors";
    const authorsElement = document.createElement("ul"); // Use a <ul> for the list

    // Check if lecture.author is a string or an array
    if (Array.isArray(lecture.author)) {
      // If it's an array, iterate through authors
      lecture.author.forEach((author) => {
        const listItem = document.createElement("li");
        listItem.textContent = author.trim();
        authorsElement.appendChild(listItem);
      });
    } else if (typeof lecture.author === "string") {
      // If it's a string, split it by commas
      const authors = lecture.author.split(",");
      authors.forEach((author) => {
        const listItem = document.createElement("li");
        listItem.textContent = author.trim();
        authorsElement.appendChild(listItem);
      });
    }

    mainDiv.appendChild(titleElement);
    mainDiv.appendChild(difficultyLevelHeader);
    mainDiv.appendChild(difficultyLevelElement);
    mainDiv.appendChild(topicsHeader);
    mainDiv.appendChild(topicsElement);
    mainDiv.appendChild(abstractHeader);
    mainDiv.appendChild(abstractElement);
    mainDiv.appendChild(courseButtonElement);

    // console.log(lecture.qAndAVariables !== undefined);
    if (lecture.qAndAVariables !== undefined) {
      const qAndAHeader = document.createElement("h4");
      qAndAHeader.innerHTML = "Assessments";

      const qAndAPar = document.createElement("p");
      // Question and answers URL
      let qAndAURL = document.createElement("a");
      qAndAURL.href = qAndABaseURL + lecture.qAndAVariables;
      qAndAURL.text = "Access Q/A number 1";
      qAndAURL.target = "_blank";
      qAndAPar.appendChild(qAndAURL);
      // qAndAHeader.appendChild(qAndAPar);
      mainDiv.appendChild(qAndAHeader);
      mainDiv.appendChild(qAndAPar);
    }
    mainDiv.appendChild(authorsHeader);
    mainDiv.appendChild(authorsElement);

    // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
    mainContent.innerHTML = ""; // Clear the existing content
    mainContent.appendChild(mainDiv);
  });

  addStarsToElement(lecture, aElement);
  return aElement;
}

function createAElementForDropDownMenuToPrint(identifier) {
  // console.log("createAElementForDropDownMenuToPrint beg");
  const lecture = lecturesContainer.get(identifier);
  // We have a child, so we will insert it in the dropdown menu
  let aElement = document.createElement("a");

  let backgroundColor = "#ec6807";

  // Course URL
  let courseButtonElement = document.createElement("a"); // Use an anchor tag instead of a button
  courseButtonElement.target = "_blank";
  courseButtonElement.classList.add("btn", "btn-primary");
  courseButtonElement.textContent = "Read the lecture";
  // Apply the background color using the style attribute
  courseButtonElement.style.backgroundColor = backgroundColor;
  courseButtonElement.style.borderColor = backgroundColor;
  // Apply the margin in percentage to create space below the button
  courseButtonElement.style.marginBottom = "2%";

  // Split the identifier string by '/'
  let parts = identifier.split("/");

  // Get the last part of the string
  let lastPart = parts[parts.length - 1];

  // Create the href attribute
  courseButtonElement.href = lecture.userProvidedURLForLecture;

  // You can keep the "id" for further styling or scripting, if needed
  courseButtonElement.id = "lecture-button-" + lastPart;

  aElement.href = "#" + identifier;
  aElement.text = lecture.title;
  aElement.id = identifier;
  aElement.setAttribute("class", "dropdown-container-class");
  aElement.setAttribute("onclick", "lectureToDisplay(this.id); return false;");

  // console.log("lecture from new drop down menu");
  // console.log(event);
  // console.log(identifier);
  const targetId = identifier;
  // console.log(targetId);
  const y = 0;
  // console.log("showing y");
  // console.log(y);

  const qAndABaseURL =
    "https://fitness.agroparistech.fr/fitness2/wip/quiz-creator-tool-online/index.html#";

  // We will modify main view to display the content of the selected lecture

  // Let's get the lecture by using its id in the map
  const mainDiv = document.createElement("div");

  // const lecture = lecturesContainer.get(identifier);

  // Title
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = lecture.title;

  // Difficulty level
  const difficultyLevelHeader = document.createElement("h4");
  difficultyLevelHeader.innerHTML = "Difficulty level";
  const difficultyLevelElement = document.createElement("p");
  const difficultyLevelNode = document.createTextNode(lecture.difficultyLevel);
  difficultyLevelElement.appendChild(difficultyLevelNode);

  addStarsToElement(lecture, difficultyLevelElement);

  // Topics
  const topicsHeader = document.createElement("h4");
  topicsHeader.innerHTML = "Topics";
  const topicsElement = document.createElement("p");
  const topicsNode = document.createTextNode(lecture.topic);
  topicsElement.appendChild(topicsNode);

  // Abstract
  const abstractHeader = document.createElement("h4");
  abstractHeader.innerHTML = "Abstract";
  const abstractElement = document.createElement("p");
  const abstractNode = document.createTextNode(lecture.abstract);
  abstractElement.appendChild(abstractNode);

  // Authors
  const authorsHeader = document.createElement("h4");
  authorsHeader.innerHTML = "Authors";
  const authorsElement = document.createElement("ul"); // Use a <ul> for the list

  // Check if lecture.author is a string or an array
  if (Array.isArray(lecture.author)) {
    // If it's an array, iterate through authors
    lecture.author.forEach((author) => {
      const listItem = document.createElement("li");
      listItem.textContent = author.trim();
      authorsElement.appendChild(listItem);
    });
  } else if (typeof lecture.author === "string") {
    // If it's a string, split it by commas
    const authors = lecture.author.split(",");
    authors.forEach((author) => {
      const listItem = document.createElement("li");
      listItem.textContent = author.trim();
      authorsElement.appendChild(listItem);
    });
  }

  mainDiv.appendChild(titleElement);
  mainDiv.appendChild(difficultyLevelHeader);
  mainDiv.appendChild(difficultyLevelElement);
  mainDiv.appendChild(topicsHeader);
  mainDiv.appendChild(topicsElement);
  mainDiv.appendChild(abstractHeader);
  mainDiv.appendChild(abstractElement);
  mainDiv.appendChild(courseButtonElement);

  // console.log(lecture.qAndAVariables !== undefined);
  if (lecture.qAndAVariables !== undefined) {
    const qAndAHeader = document.createElement("h4");
    qAndAHeader.innerHTML = "Assessments";

    const qAndAPar = document.createElement("p");
    // Question and answers URL
    let qAndAURL = document.createElement("a");
    qAndAURL.href = qAndABaseURL + lecture.qAndAVariables;
    qAndAURL.text = "Access Q/A number 1";
    qAndAURL.target = "_blank";
    qAndAPar.appendChild(qAndAURL);
    // qAndAHeader.appendChild(qAndAPar);
    mainDiv.appendChild(qAndAHeader);
    mainDiv.appendChild(qAndAPar);
  }
  mainDiv.appendChild(authorsHeader);
  mainDiv.appendChild(authorsElement);

  // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
  mainContent.innerHTML = ""; // Clear the existing content
  mainContent.appendChild(mainDiv);
  console.log(
    "lecturesDetails.set('" + identifier + "',`" + mainDiv.innerHTML + "`);"
  );

  addStarsToElement(lecture, aElement);
  // console.log("createAElementForDropDownMenuToPrint end");
  return aElement;
}

function lectureToDisplay(identifier) {
  console.log("lectureToDisplay" + identifier);
  // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
  mainContent.innerHTML = ""; // Clear the existing content

  const currentLectureDiv = document.createElement("div");
  currentLectureDiv.innerHTML = lecturesDetails.get(identifier);
  mainContent.appendChild(currentLectureDiv);
}

function addStarsToElement(lecture, element) {
  const stars = getStarElements(lecture.difficultyLevel);
  for (i = 0; i < stars.length; i++) {
    element.appendChild(stars[i]);
  }
}

function addListenersToDropdownButtons() {
  /* Loop through all dropdown buttons to toggle between hiding and 
  showing its dropdown content - This allows the user to have multiple
  dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");

  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      // console.log("clicked on a dropdown subfolder");
      // console.log(this);
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

/* Extract and store all lectures into a global array*/
async function extractMetaData() {
  const pathSeparator = "/";
  let basePath =
    "https://raw.githubusercontent.com/scours/fitness2/wip/manifests" +
    pathSeparator;
  // let basePath = "http://127.0.0.1:5502/manifests" + pathSeparator;

  // let basePath = "manifests" + pathSeparator;
  let fileExtension = ".manifest";

  // We will use a text which includes a timestamp (random number) to force refresh
  // When we want to get the https file. Otherwise, the change is not immediate.
  // It can take minutes to see the changes event if you force refresh the browser.

  const textToForceRefresh = "?t=" + Date.now();
  let rootFileName = basePath + "root" + fileExtension + textToForceRefresh;

  const res = await fetch(rootFileName); // fetch method will fetch JSON file
  const lastModified = res.headers.get("Last-Modified");

  if (lastModified) {
    const lastModifiedDate = new Date(lastModified);
    console.log("Last Modified Date:", lastModifiedDate);
  } else {
    console.log("Last Modified Date not available.");
  }

  const owner = "scours";
  const repo = "fitness2";
  const filePath = "manifests/root.manifest"; // Replace with the actual file path
  const branchName = "wip"; // Replace with the desired branch name

  // Construct the API URL to get the commit history of the file
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branchName}`;

  const response = await fetch(apiUrl, {
    headers: {
      Accept: "application/vnd.github.json",
    },
  });

  if (response.status === 200) {
    const commitData = await response.json();
    if (commitData.length > 0) {
      // Get the last commit's timestamp
      const lastModified = new Date(commitData[0].commit.author.date);
      console.log("TT:Last Modified Date:", lastModified);
    } else {
      console.error("No commit history found for the file.");
    }
  } else {
    console.error("Error fetching commit history");
  }

  // console.log(res);
  if (res.ok) {
    // tocElement, is table of content element, its an object that contains lectures information
    let tocElement = await res.json();
    // console.log(tocElement);

    if (tocElement !== "undefined") {
      if (tocElement.children.length > 0) {
        let filePath = "";

        // If children array is not empty, check children content
        for (let i = 0; i < tocElement.children.length; i++) {
          filePath = tocElement.children[i];
          const level1ChildRes = await fetch(
            basePath + filePath + fileExtension
          );

          // console.log(level1ChildRes);
          if (level1ChildRes.ok) {
            // tocElementLevel1, is table of content element, its an object that contains lectures information
            let tocElementLevel1 = await level1ChildRes.json();
            // console.log(tocElementLevel1);

            if (tocElementLevel1 !== "undefined") {
              const splitPath = filePath.split(pathSeparator);

              // If file path contains path separator, it's at least level 2,
              // otherwise, it's level 1, there is no sub folder
              if (filePath.includes(pathSeparator)) {
                // We are going up to level 3 to display lectures
                // We will not show the lecture if the path is above level 3
                if (splitPath.length <= 3) {
                  if (splitPath.length == 2) {
                    // The level is 2, so we have a folder and a file
                    // folder 1-> file.manifest

                    lectureKey = splitPath[1];
                    // We will create a LecturePath for the file
                    const fileLecturePath = new LecturePath(
                      splitPath[0],
                      splitPath[1],
                      true,
                      undefined,
                      filePath
                    );

                    // Search in lecturesPaths if this folder already exists
                    if (lecturesPaths.has(splitPath[0])) {
                      // If it exists, we will add a new entry this file as a children of the folder
                      const folderLecturePath = lecturesPaths.get(splitPath[0]);
                      folderLecturePath.addChild(fileLecturePath);
                    } else {
                      // We will create a LecturePath for the folder
                      const folderLecturePath = new LecturePath(
                        undefined,
                        splitPath[0],
                        false,
                        fileLecturePath,
                        filePath
                      );
                      // And add it inside the lecturesPaths
                      lecturesPaths.set(splitPath[0], folderLecturePath);
                    }
                  } else {
                    // The level is 3, so we have two folders and a file
                    // folder 1-> folder 2-> file.manifest

                    lectureKey = splitPath[2];
                    // We will create a LecturePath for the file
                    const fileLecturePath = new LecturePath(
                      splitPath[1],
                      splitPath[2],
                      true,
                      undefined,
                      filePath
                    );

                    let folder1LecturePath;
                    // Search in lecturesPaths if the folder 1 already exists
                    if (lecturesPaths.has(splitPath[0])) {
                      // If it exists, we will get it
                      folder1LecturePath = lecturesPaths.get(splitPath[0]);
                    } else {
                      // It does not exist, so, we will create a LecturePath for the folder 1
                      folder1LecturePath = new LecturePath(
                        undefined,
                        splitPath[0],
                        false,
                        undefined,
                        filePath
                      );
                      // And add it inside the lecturesPaths
                      lecturesPaths.set(splitPath[0], folder1LecturePath);
                    }

                    // Search in folder 1 if the folder 2 already exists
                    if (folder1LecturePath.children.has(splitPath[1])) {
                      // If it exists, we will add a new entry: this file as a children of folder 2
                      const folder2LecturePath =
                        folder1LecturePath.children.get(splitPath[1]);
                      folder2LecturePath.addChild(fileLecturePath);
                    } else {
                      // folder 2 does not exist inside folder 1
                      // We will create a LecturePath for the folder 2
                      // And add fileLecturePath as folder 2 lecture

                      const folder2LecturePath = new LecturePath(
                        splitPath[0],
                        splitPath[1],
                        false,
                        fileLecturePath,
                        filePath
                      );

                      // Add folder 2 as a child of folder 1
                      folder1LecturePath.addChild(folder2LecturePath);
                      // And add it inside the lecturesPaths
                      // lecturesPaths.set(splitPath[1], folder2LecturePath);
                    }
                  }

                  // We will insert the lecture into a map
                  lecturesContainer.set(filePath, tocElementLevel1);
                }
              } else {
                // There is no separator, so this is just a level 1 file.
                const currentLecturePath = new LecturePath(
                  undefined,
                  filePath,
                  true,
                  undefined,
                  filePath
                );

                // Add this lecture inside the lecturesPaths
                lecturesPaths.set(filePath, currentLecturePath);
                // We will insert the lecture into a map
                lecturesContainer.set(filePath, tocElementLevel1);
              }
            }
          } else {
            // console.log("Can't read level 1 file");
          }
        }
        console.time("createDropDownMenuElements");
        createDropDownMenuElements();
        createDropDownMenuElementsToPrint();
        console.log(mainContent.innerHTML);
        console.timeEnd("createDropDownMenuElements");
      } else {
        // Children array is empty, so we will just display title
        console.time("contentToDisplayChildrenArrayEmpty");
        englobingNavList.appendChild(
          contentToDisplayChildrenArrayEmpty(tocElement)
        );
        console.timeEnd("contentToDisplayChildrenArrayEmpty");
      }
    }
  } else {
    // console.log("Can't read root file");
  }
  addListenersToDropdownButtons();
  loader.style.display = "none"; // Hide the loader
}

// Display loader as soon as the page is loaded
loader.style.display = "block";
console.time("extractMetaData");
extractMetaData();
console.timeEnd("extractMetaData");

function loadFile(filePath) {
  // Create a <script> tag, set its source
  let scriptTag = document.createElement("script");

  // And listen to it
  scriptTag.onload = function (loadEvent) {
    // This function is an event handler of the script tag
    handleEvent();
  };

  // Set the type of file and where it can be found
  scriptTag.type = "text/javascript";
  scriptTag.src = filePath;

  // Finally add it to the <head>
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
}

function openNav() {
  document.getElementById("sidebar-menu").style.width = "60%";
  document.getElementById("main-id").style.marginLeft = "60%";
  document.getElementById("open-menu-button").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sidebar-menu").style.width = "0";
  document.getElementById("main-id").style.marginLeft = "0";
  document.getElementById("open-menu-button").style.visibility = "visible";
}
