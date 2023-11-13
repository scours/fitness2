/*
 * File: lecturesDetails.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Thursday, 2nd November 2023
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 13th November 2023
 * Modified By: Steward OUADI
 */

<div>
  <button class="dropdown-btn" id="dropdown-btn-Packaging materials">
    Packaging materials<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Packaging materials">
    <button class="dropdown-btn" id="dropdown-btn-Introduction">
      Introduction<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Introduction">
      <a
        href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
        id="Packaging materials/Introduction/panorama-of-food-packaging-part-1"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        {" "}
        Panorama of food packaging
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Packaging materials and shaping process"
    >
      Packaging materials and shaping process<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Packaging materials and shaping process"
    >
      <a
        href="#Packaging materials/Packaging materials and shaping process/glass-packaging-part-1"
        id="Packaging materials/Packaging materials and shaping process/glass-packaging-part-1"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Glass - Part 1<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/glass-packaging-part-2"
        id="Packaging materials/Packaging materials and shaping process/glass-packaging-part-2"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Glass - Part 2<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/metal-packaging"
        id="Packaging materials/Packaging materials and shaping process/metal-packaging"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Metal<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1"
        id="Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Plastic - Part 1<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2"
        id="Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Plastic - Part 2<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1"
        id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Paper and paperboard - Part 1
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2"
        id="Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Paper and paperboard - Part 2
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/bio-based-materials"
        id="Packaging materials/Packaging materials and shaping process/bio-based-materials"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Bio-based materials
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
        id="Packaging materials/Packaging materials and shaping process/cork-as-food-packaging"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Cork<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging materials/Packaging materials and shaping process/wood-packaging"
        id="Packaging materials/Packaging materials and shaping process/wood-packaging"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Wood<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Basic legal framework">
      Basic legal framework<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Basic legal framework"
    >
      <a
        href="#Packaging materials/Basic legal framework/legal-framework-overview"
        id="Packaging materials/Basic legal framework/legal-framework-overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Basic legal framework (chemicals, contact material, environment,
        consumer safety)<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <a
      href="#Packaging materials/Introduction/panorama-of-food-packaging-part-1"
      id="Packaging materials/Introduction/panorama-of-food-packaging-part-1"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      {" "}
      Panorama of food packaging
      <i class="fa fa-star star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Packaging design">
    Packaging design<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Packaging design">
    <button
      class="dropdown-btn"
      id="dropdown-btn-the-basics-of-mechanical-engineering-for-packaging-designer"
    >
      the-basics-of-mechanical-engineering-for-packaging-designer
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-the-basics-of-mechanical-engineering-for-packaging-designer"
    ></div>
    <a
      href="#Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
      id="Packaging design/the-basics-of-mechanical-engineering-for-packaging-designer"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Mechanical design of packaging: an introduction
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star-o star-color-yellow little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Packaging properties">
    Packaging properties<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Packaging properties">
    <button
      class="dropdown-btn"
      id="dropdown-btn-Thermal, mechanical and barrier properties"
    >
      Thermal, mechanical and barrier properties<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Thermal, mechanical and barrier properties"
    >
      <a
        href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
        id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Thermal properties: methods and standards
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
        id="Packaging properties/Thermal, mechanical and barrier properties/mechanical-properties"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Mechanical properties: methods and standards
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
        id="Packaging properties/Thermal, mechanical and barrier properties/mass-transfer-properties"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Mass transfer properties: methods and standards
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
        id="Packaging properties/Thermal, mechanical and barrier properties/optical-properties"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Optical properties: methods and standards
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
      <a
        href="#Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
        id="Packaging properties/Thermal, mechanical and barrier properties/surface-properties"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Surface properties: methods and standards
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Chemical and physical">
      Chemical and physical<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Chemical and physical"
    >
      <a
        href="#Packaging properties/Chemical and physical/food-packaging-interactions"
        id="Packaging properties/Chemical and physical/food-packaging-interactions"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Part 1<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions"
        id="Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Part 2<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Principles of mass transfer">
      Principles of mass transfer<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Principles of mass transfer"
    >
      <a
        href="#Packaging properties/Principles of mass transfer/principles-part-1"
        id="Packaging properties/Principles of mass transfer/principles-part-1"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Principles of mass transfer - Mass transfer in food packaging 1/2
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Packaging properties/Principles of mass transfer/principles-part-2"
        id="Packaging properties/Principles of mass transfer/principles-part-2"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Principles of mass transfer - Mass transfer in food packaging 2/2
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Calculation of permeability in composite systems"
    >
      Calculation of permeability in composite systems
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Calculation of permeability in composite systems"
    >
      <a
        href="#Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
        id="Packaging properties/Calculation of permeability in composite systems/from-ideal-laminates-to-materials"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Permeability in composites: from ideal laminates to materials with
        defects and dispersed particles.
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Multicomponent diffusion, predictive models"
    >
      Multicomponent diffusion, predictive models
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Multicomponent diffusion, predictive models"
    >
      <a
        href="#Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
        id="Packaging properties/Multicomponent diffusion, predictive models/diffusion-and-solubility-at-molecular-scale"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Multicomponent diffusion: diffusion and solubility at molecular scale
        (overview) and in non-ideal systems
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Micro holes and leaks in packaging"
    >
      Micro holes and leaks in packaging<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Micro holes and leaks in packaging"
    >
      <a
        href="#Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
        id="Packaging properties/Micro holes and leaks in packaging/measurement-and-modeling"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Micro holes and leaks in packaging – measurement and modeling
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <a
      href="#Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
      id="Packaging properties/Thermal, mechanical and barrier properties/thermal-properties"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Thermal properties: methods and standards
      <i class="fa fa-star star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Packaging processes">
    Packaging processes<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Packaging processes">
    <button
      class="dropdown-btn"
      id="dropdown-btn-introduction-to-mechanical-processes"
    >
      introduction-to-mechanical-processes<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-introduction-to-mechanical-processes"
    ></div>
    <button class="dropdown-btn" id="dropdown-btn-Forming">
      Forming<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Forming">
      <a
        href="#Packaging processes/Forming/plastic-forming"
        id="Packaging processes/Forming/plastic-forming"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Plastics forming
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Packaging processes/Forming/films-and-sheets"
        id="Packaging processes/Forming/films-and-sheets"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Films and sheets<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Filling and dosing">
      Filling and dosing<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Filling and dosing">
      <a
        href="#Packaging processes/Filling and dosing/principles"
        id="Packaging processes/Filling and dosing/principles"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Principles<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Packaging processes/Filling and dosing/forming-filling-sealing"
        id="Packaging processes/Filling and dosing/forming-filling-sealing"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Forming, filling, sealing
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Packaging processes/Filling and dosing/beverage-filling"
        id="Packaging processes/Filling and dosing/beverage-filling"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Beverage filling
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Sealing">
      Sealing<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Sealing">
      <a
        href="#Packaging processes/Sealing/overview"
        id="Packaging processes/Sealing/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Closing, hot/cold sealing, welding, sealed seams and packages
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-surface-treatments-and-coatings"
    >
      surface-treatments-and-coatings<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-surface-treatments-and-coatings"
    ></div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Printing and labelling processes"
    >
      Printing and labelling processes<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Printing and labelling processes"
    >
      <a
        href="#Packaging processes/Printing and labelling processes/overview"
        id="Packaging processes/Printing and labelling processes/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Printing and labelling processes
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Digitization of packaging processes"
    >
      Digitization of packaging processes<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Digitization of packaging processes"
    >
      <a
        href="#Packaging processes/Digitization of packaging processes/overview"
        id="Packaging processes/Digitization of packaging processes/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Digitization of packaging processes
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Packaging line">
      Packaging line<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Packaging line">
      <a
        href="#Packaging processes/Packaging line/optimization"
        id="Packaging processes/Packaging line/optimization"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Optimization<i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
      <a
        href="#Packaging processes/Packaging line/hygienic-design"
        id="Packaging processes/Packaging line/hygienic-design"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Hygienic design<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <a
      href="#Packaging processes/introduction-to-mechanical-processes"
      id="Packaging processes/introduction-to-mechanical-processes"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Introduction into mechanical processes in packaging
      <i class="fa fa-star star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Shelf-life">
    Shelf-life<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Shelf-life">
    <button
      class="dropdown-btn"
      id="dropdown-btn-Food preservation technology and packaging"
    >
      Food preservation technology and packaging<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Food preservation technology and packaging"
    >
      <a
        href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
        id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Introduction to preservation and packaging technologies
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Common physical chemical factors affecting food stability"
    >
      Common physical chemical factors affecting food stability
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Common physical chemical factors affecting food stability"
    >
      <a
        href="#Shelf-life/Common physical chemical factors affecting food stability/overview"
        id="Shelf-life/Common physical chemical factors affecting food stability/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview physical and chemical processes impacting the shelf-life of
        food-products (processed or not)
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Food packaging and shelf life"
    >
      Food packaging and shelf life<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Food packaging and shelf life"
    >
      <a
        href="#Shelf-life/Food packaging and shelf life/shelf-life-definitions"
        id="Shelf-life/Food packaging and shelf life/shelf-life-definitions"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Definitions<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life"
        id="Shelf-life/Food packaging and shelf life/factors-affecting-shelf-life"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Factors affection shelf-life
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Shelf-life/Food packaging and shelf life/study-shelf-life"
        id="Shelf-life/Food packaging and shelf life/study-shelf-life"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        How to study shelf life
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Shelf-life/Food packaging and shelf life/predict-shelf-life"
        id="Shelf-life/Food packaging and shelf life/predict-shelf-life"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        How to calculate/predict shelf-life
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <a
      href="#Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
      id="Shelf-life/Food preservation technology and packaging/introduction-to-preservation-and-packaging-technologies"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Introduction to preservation and packaging technologies
      <i class="fa fa-star star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Environmental pollution">
    Environmental pollution<i class="fa fa-caret-down"></i>
  </button>
  <div
    class="dropdown-container"
    id="dropdown-container-Environmental pollution"
  >
    <button
      class="dropdown-btn"
      id="dropdown-btn-Methodologies used in life cycle assessment"
    >
      Methodologies used in life cycle assessment
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Methodologies used in life cycle assessment"
    >
      <a
        href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
        id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Sustainability and Packaging - What is suistainability? (part 1/2)
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
        id="Environmental pollution/Methodologies used in life cycle assessment/life-cycle-assessment"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Sustainability and Packaging - Life Cycle Assessment (part 2/2)
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Tools for life cycle impact assessment"
    >
      Tools for life cycle impact assessment<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Tools for life cycle impact assessment"
    >
      <a
        href="#Environmental pollution/Tools for life cycle impact assessment/overview"
        id="Environmental pollution/Tools for life cycle impact assessment/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Biodegradation and microplastics"
    >
      Biodegradation and microplastics<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Biodegradation and microplastics"
    >
      <a
        href="#Environmental pollution/Biodegradation and microplastics/overview"
        id="Environmental pollution/Biodegradation and microplastics/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <a
      href="#Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
      id="Environmental pollution/Methodologies used in life cycle assessment/sustainability-and-packaging"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Sustainability and Packaging - What is suistainability? (part 1/2)
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star-o star-color-yellow little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Marketing and design">
    Marketing and design<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Marketing and design">
    <button class="dropdown-btn" id="dropdown-btn-Sensory science">
      Sensory science<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Sensory science">
      <a
        href="#Marketing and design/Sensory science/sensory-science"
        id="Marketing and design/Sensory science/sensory-science"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Sensory science<i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <a
      href="#Marketing and design/Sensory science/sensory-science"
      id="Marketing and design/Sensory science/sensory-science"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Sensory science<i class="fa fa-star star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
      <i class="fa fa-star-o star-color-green little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Innovations">
    Innovations<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Innovations">
    <button
      class="dropdown-btn"
      id="dropdown-btn-Biobased and biodegradable materials"
    >
      Biobased and biodegradable materials<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Biobased and biodegradable materials"
    >
      <a
        href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
        id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Part 1<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Innovations/Biobased and biodegradable materials/cellulose-derivates"
        id="Innovations/Biobased and biodegradable materials/cellulose-derivates"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Part 2<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Active packaging">
      Active packaging<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Active packaging">
      <a
        href="#Innovations/Active packaging/overview"
        id="Innovations/Active packaging/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview and principles
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Innovations/Active packaging/humidity-control"
        id="Innovations/Active packaging/humidity-control"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Examples<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Smart packaging">
      Smart packaging<i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-container" id="dropdown-container-Smart packaging">
      <a
        href="#Innovations/Smart packaging/overview"
        id="Innovations/Smart packaging/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        From principles to commercially available intelligent packaging systems
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Nanotechnology strategies">
      Nanotechnology strategies<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Nanotechnology strategies"
    >
      <a
        href="#Innovations/Nanotechnology strategies/definitions"
        id="Innovations/Nanotechnology strategies/definitions"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Definitions, nano-scale additives, examples of gains and applications.
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Bacterial polyesters">
      Bacterial polyesters<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Bacterial polyesters"
    >
      <a
        href="#Innovations/Bacterial polyesters/bacterial-polyesters"
        id="Innovations/Bacterial polyesters/bacterial-polyesters"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Bacterial polyesters
        <i class="fa fa-star star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
        <i class="fa fa-star-o star-color-green little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Advanced cellulosic materials"
    >
      Advanced cellulosic materials<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Advanced cellulosic materials"
    >
      <a
        href="#Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
        id="Innovations/Advanced cellulosic materials/advanced-cellulosic-materials-for-food-packaging"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Advanced cellulosic materials for food packaging
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Modified atmosphere packaging"
    >
      Modified atmosphere packaging<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Modified atmosphere packaging"
    >
      <a
        href="#Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
        id="Innovations/Modified atmosphere packaging/modified-atmosphere-packaging"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Modified atmosphere packaging{" "}
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <a
      href="#Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
      id="Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Part 1<i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star-o star-color-yellow little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Recoverability">
    Recoverability<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Recoverability">
    <button
      class="dropdown-btn"
      id="dropdown-btn-Environmental impact of plastics and recycling"
    >
      Environmental impact of plastics and recycling
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Environmental impact of plastics and recycling"
    >
      <a
        href="#Recoverability/Environmental impact of plastics and recycling/overview"
        id="Recoverability/Environmental impact of plastics and recycling/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Safety assessment of recycling processes"
    >
      Safety assessment of recycling processes<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Safety assessment of recycling processes"
    >
      <a
        href="#Recoverability/Safety assessment of recycling processes/overview"
        id="Recoverability/Safety assessment of recycling processes/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <a
      href="#Recoverability/Environmental impact of plastics and recycling/overview"
      id="Recoverability/Environmental impact of plastics and recycling/overview"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Overview<i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star-o star-color-yellow little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Legislation">
    Legislation<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Legislation">
    <button class="dropdown-btn" id="dropdown-btn-EU, US others regulations">
      EU, US others regulations<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-EU, US others regulations"
    >
      <a
        href="#Legislation/EU, US others regulations/regulatory-framework"
        id="Legislation/EU, US others regulations/regulatory-framework"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Regulatory framework in the EU and the US
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-GMP and quality assurance standards"
    >
      GMP and quality assurance standards<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-GMP and quality assurance standards"
    >
      <a
        href="#Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
        id="Legislation/GMP and quality assurance standards/safety-and-quality-management-system"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        GMP, Safety, Quality management system, Responsibilities and
        Certification<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Hazard identification and characterization"
    >
      Hazard identification and characterization<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Hazard identification and characterization"
    >
      <a
        href="#Legislation/Hazard identification and characterization/introduction"
        id="Legislation/Hazard identification and characterization/introduction"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Introduction<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Legislation/Hazard identification and characterization/identification"
        id="Legislation/Hazard identification and characterization/identification"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Identification<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
      <a
        href="#Legislation/Hazard identification and characterization/characterization"
        id="Legislation/Hazard identification and characterization/characterization"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Characterization
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Exposure and risk assessment">
      Exposure and risk assessment<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Exposure and risk assessment"
    >
      <a
        href="#Legislation/Exposure and risk assessment/exposure-and-risk-assessment"
        id="Legislation/Exposure and risk assessment/exposure-and-risk-assessment"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Exposure and risk assessment
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Risk assessment tools">
      Risk assessment tools<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Risk assessment tools"
    >
      <a
        href="#Legislation/Risk assessment tools/risk-assessment-tools"
        id="Legislation/Risk assessment tools/risk-assessment-tools"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Risk assessment tools
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <a
      href="#Legislation/EU, US others regulations/regulatory-framework"
      id="Legislation/EU, US others regulations/regulatory-framework"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Regulatory framework in the EU and the US
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star-o star-color-yellow little-space"></i>
    </a>
  </div>
  <button class="dropdown-btn" id="dropdown-btn-Modeling tools">
    Modeling tools<i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container" id="dropdown-container-Modeling tools">
    <button
      class="dropdown-btn"
      id="dropdown-btn-Migration modeling for monomaterials"
    >
      Migration modeling for monomaterials<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Migration modeling for monomaterials"
    >
      <a
        href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
        id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Theory and case studies
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Modeling for multi-materials, multi-steps process"
    >
      Modeling for multi-materials, multi-steps process
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Modeling for multi-materials, multi-steps process"
    >
      <a
        href="#Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
        id="Modeling tools/Modeling for multi-materials, multi-steps process/mass-transfer-for-multi-materials"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Theory and case studies
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Introduction to decision theory and risk management"
    >
      Introduction to decision theory and risk management
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Introduction to decision theory and risk management"
    >
      <a
        href="#Modeling tools/Introduction to decision theory and risk management/introduction"
        id="Modeling tools/Introduction to decision theory and risk management/introduction"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Introduction<i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Managing uncertainty by intervals and worst-case scenarios"
    >
      Managing uncertainty by intervals and worst-case scenarios
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Managing uncertainty by intervals and worst-case scenarios"
    >
      <a
        href="#Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
        id="Modeling tools/Managing uncertainty by intervals and worst-case scenarios/monotonic-calculations"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Principles of monotonic (conservative) calculations of migration in
        presence of uncertainty.
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Probabilistic approaches and Bayesian approaches"
    >
      Probabilistic approaches and Bayesian approaches
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Probabilistic approaches and Bayesian approaches"
    >
      <a
        href="#Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
        id="Modeling tools/Probabilistic approaches and Bayesian approaches/descriptions"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Descriptions of migration
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-History and principles of FMEA-FMECA"
    >
      History and principles of FMEA-FMECA<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-History and principles of FMEA-FMECA"
    >
      <a
        href="#Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches"
        id="Modeling tools/History and principles of FMEA-FMECA/fmeca-approaches"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Approaches, link with regulation 2023/2006/EC
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star star-color-yellow little-space"></i>
        <i class="fa fa-star-o star-color-yellow little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Diagram-based approaches">
      Diagram-based approaches<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Diagram-based approaches"
    >
      <a
        href="#Modeling tools/Diagram-based approaches/overview"
        id="Modeling tools/Diagram-based approaches/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        FMECA modeling<i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button class="dropdown-btn" id="dropdown-btn-Computer-aided approaches">
      Computer-aided approaches<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Computer-aided approaches"
    >
      <a
        href="#Modeling tools/Computer-aided approaches/overview"
        id="Modeling tools/Computer-aided approaches/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        FMECA approaches (application to mass transfer problems)
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Principles (forcefields, statistical-ensembles), overview of online databases"
    >
      Principles (forcefields, statistical-ensembles), overview of online
      databases<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Principles (forcefields, statistical-ensembles), overview of online databases"
    >
      <a
        href="#Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
        id="Modeling tools/Principles (forcefields, statistical-ensembles), overview of online databases/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Microscopic theories of transport coefficients and free-energies"
    >
      Microscopic theories of transport coefficients and free-energies
      <i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Microscopic theories of transport coefficients and free-energies"
    >
      <a
        href="#Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
        id="Modeling tools/Microscopic theories of transport coefficients and free-energies/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <button
      class="dropdown-btn"
      id="dropdown-btn-Calculations using fluctuation theorems"
    >
      Calculations using fluctuation theorems<i class="fa fa-caret-down"></i>
    </button>
    <div
      class="dropdown-container"
      id="dropdown-container-Calculations using fluctuation theorems"
    >
      <a
        href="#Modeling tools/Calculations using fluctuation theorems/overview"
        id="Modeling tools/Calculations using fluctuation theorems/overview"
        class="dropdown-container-class"
        onclick="lectureToDisplay(this.id)"
      >
        Overview<i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
        <i class="fa fa-star star-color-red little-space"></i>
      </a>
    </div>
    <a
      href="#Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
      id="Modeling tools/Migration modeling for monomaterials/mass-transfer-modeling"
      class="dropdown-container-class"
      onclick="lectureToDisplay(this.id)"
    >
      Theory and case studies
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star star-color-yellow little-space"></i>
      <i class="fa fa-star-o star-color-yellow little-space"></i>
    </a>
  </div>
</div>;
