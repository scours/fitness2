/*
 * File: configExample2.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Wednesday, 28th April 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Tuesday, 21st June 2022
 * Modified By: Steward OUADI
 */

// Variable used for Online and Offline mode. We get data from this variable.
const configurationData = [
  { id: "global", shuffleAnswers: false },
  {
    id: "intro-slide",
    img: "src/configContent/images/fitness-intro-image.jpg",
    next: {
      specific: "quest-menu",
    },
    nextButtonText: "Start",
  },
  {
    id: "quest-menu",
    question: {
      text: "Based on your knowledge on food packaging, you would describe yourself as:",
    },
    answers: { 0: { text: "Beginner" }, 1: { text: "Advanced" } },
    next: { 0: "id-level-common", 1: "id-level-specialized", type: "choice" },
  },
  {
    id: "id-level-common",
    question: { text: "Which module are you interested in?" },
    answers: {
      0: { text: "What is food packaging" },
      1: { text: "Properties of food packaging materials" },
      2: { text: "Packaging and food preservation" },
      3: { text: "Innovations in food packaging" },
    },
    next: {
      0: "id-section-what-is-food-packaging",
      1: "id-section-properties-of-food-packaging-materials",
      2: "id-section-packaging-and-food-preservation",
      3: "id-section-innovations-in-food-packaging",
      type: "choice",
    },
  },
  {
    id: "id-section-what-is-food-packaging",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Panorama of food packaging" },
      1: { text: "Packaging materials and shaping process" },
      2: { text: "Basic legal framework" },
    },
    next: {
      0: "id-unit-panorama-of-food-packaging",
      1: "id-unit-packaging-materials-and-shaping-process",
      2: "id-unit-basic-legal-framework",
      type: "choice",
    },
  },
  {
    id: "id-unit-panorama-of-food-packaging",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Overview",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-packaging-materials-and-shaping-process",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Glass Packaging 1/2",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part1.html#/2",
      },
      1: {
        text: "Glass Packaging 2/2",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part2.html#/2",
      },
      2: {
        text: "Metal Packaging",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part3.html#/2",
      },
      3: {
        text: "Plastic Packaging (1/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part4.html#/2",
      },
      4: {
        text: "Plastic Packaging (2/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part5.html#/2",
      },
      5: {
        text: "Paper and paperboard (1/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part6.html#/2",
      },
      6: {
        text: "Paper and paperboard (2/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part7.html#/2",
      },
      7: {
        text: "Bio-based Materials",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part8.html#/2",
      },
      8: {
        text: "Cork as food packaging material",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part9.html#/2",
      },
      9: {
        text: "Wood Packaging",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part10.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-basic-legal-framework",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Overview of the legal framework",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-properties-of-food-packaging-materials",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Thermal, mechanical and barrier properties" },
      1: { text: "Food preservation technology and packaging" },
      2: { text: "Chemical and physical stability of packaging materials" },
      3: { text: "Mechanical design of packaging" },
    },
    next: {
      0: "id-unit-thermal,-mechanical-and-barrier-properties",
      1: "id-unit-food-preservation-technology-and-packaging",
      2: "id-unit-chemical-and-physical-stability-of-packaging-materials",
      3: "id-unit-mechanical-design-of-packaging",
      type: "choice",
    },
  },
  {
    id: "id-unit-thermal,-mechanical-and-barrier-properties",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Thermal properties",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part1.html#/2",
      },
      1: {
        text: "Mechanical properties",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part2.html#/2",
      },
      2: {
        text: "Mass transfer properties",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part3.html#/2",
      },
      3: {
        text: "Optical properties",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part4.html#/2",
      },
      4: {
        text: "Surface properties",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part5.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-food-preservation-technology-and-packaging",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Food preservation & MAP",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-chemical-and-physical-stability-of-packaging-materials",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Chemical and physical stability (1/1)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.3/part1.html#/2",
      },
      1: {
        text: "Chemical and physical stability (2/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.3/part2.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-mechanical-design-of-packaging",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Mechanical design",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.4/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-packaging-and-food-preservation",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Common physical chemical factors affecting food stability" },
      1: { text: "Food packaging and shelf life" },
    },
    next: {
      0: "id-unit-common-physical-chemical-factors-affecting-food-stability",
      1: "id-unit-food-packaging-and-shelf-life",
      type: "choice",
    },
  },
  {
    id: "id-unit-common-physical-chemical-factors-affecting-food-stability",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Factors affecting shelf-life",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-food-packaging-and-shelf-life",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Shelf-life (1/4)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part1.html#/2",
      },
      1: {
        text: "Shelf-life (2/4)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part2.html#/2",
      },
      2: {
        text: "Shelf-life (3/4)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part3.html#/2",
      },
      3: {
        text: "Shelf-life (4/4)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S3/U3.2/part4.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-innovations-in-food-packaging",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Biobased and biodegradable materials" },
      1: { text: "Active packaging" },
      2: { text: "Smart packaging" },
      3: { text: "Nanotechnology strategies" },
    },
    next: {
      0: "id-unit-biobased-and-biodegradable-materials",
      1: "id-unit-active-packaging",
      2: "id-unit-smart-packaging",
      3: "id-unit-nanotechnology-strategies",
      type: "choice",
    },
  },
  {
    id: "id-unit-biobased-and-biodegradable-materials",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Biobased and biodegradable materials (1/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.1/part1.html#/2",
      },
      1: {
        text: "Biobased and biodegradable materials (2/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.1/part2.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-active-packaging",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Active Packaging (1/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.2/part1.html#/2",
      },
      1: {
        text: "Active Packaging (2/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.2/part2.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-smart-packaging",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Smart Packaging",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-nanotechnology-strategies",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Nanotechnology",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.4/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-level-specialized",
    question: { text: "Which module are you interested in?" },
    answers: {
      0: { text: "Risk assessment" },
      1: { text: "Decision making and advanced risk management techniques" },
      2: { text: "Legislation regulation of food contact materials" },
      3: { text: "Mass transfer in food packaging" },
      4: { text: "FMECA applied to food packaging design" },
      5: { text: "Molecular and thermodynamical modeling" },
      6: { text: "Eco-design" },
      7: { text: "Forming, filling and sealing processes" },
    },
    next: {
      0: "id-section-risk-assessment",
      1: "id-section-decision-making-and-advanced-risk-management-techniques",
      2: "id-section-legislation-regulation-of-food-contact-materials",
      3: "id-section-mass-transfer-in-food-packaging",
      4: "id-section-fmeca-applied-to-food-packaging-design",
      5: "id-section-molecular-and-thermodynamical-modeling",
      6: "id-section-eco-design",
      7: "id-section-forming,-filling-and-sealing-processes",
      type: "choice",
    },
  },
  {
    id: "id-section-risk-assessment",
    question: { text: "Select the unit below to continue" },
    answers: { 0: { text: "Hazard identification and characterization" } },
    next: {
      0: "id-unit-hazard-identification-and-characterization",
      type: "choice",
    },
  },
  {
    id: "id-unit-hazard-identification-and-characterization",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Hazard (1/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S1/U1.1/part1.html#/2",
      },
      1: {
        text: "Hazard (2/2)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S1/U1.1/part2.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-decision-making-and-advanced-risk-management-techniques",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Introduction to decision theory and risk management" },
      1: { text: "Managing uncertainty by intervals and worst-case scenarios" },
      2: { text: "Probabilistic approaches and bayesian approaches" },
    },
    next: {
      0: "id-unit-introduction-to-decision-theory-and-risk-management",
      1: "id-unit-managing-uncertainty-by-intervals-and-worst-case-scenarios",
      2: "id-unit-probabilistic-approaches-and-bayesian-approaches",
      type: "choice",
    },
  },
  {
    id: "id-unit-introduction-to-decision-theory-and-risk-management",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Decision theory and risk management",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-managing-uncertainty-by-intervals-and-worst-case-scenarios",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Monotonic calculations",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-probabilistic-approaches-and-bayesian-approaches",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Probabilistic description of migration",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-legislation-regulation-of-food-contact-materials",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: {
        text: "EU legislation, national regulations, US regulations, others",
      },
      1: { text: "Gmp and quality assurance standards" },
    },
    next: {
      0: "id-unit-eu-legislation,-national-regulations,-us-regulations,-others",
      1: "id-unit-gmp-and-quality-assurance-standards",
      type: "choice",
    },
  },
  {
    id: "id-unit-eu-legislation,-national-regulations,-us-regulations,-others",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Regulations in the EU and in the US",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S3/U3.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-gmp-and-quality-assurance-standards",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "GMP - quality assurance",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S3/U3.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-mass-transfer-in-food-packaging",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Principles of mass transfer" },
      1: { text: "Migration modeling for monomaterials" },
      2: { text: "Modeling for multi-materials and multi-steps processes" },
      3: { text: "Calculation of permeability in composite systems" },
      4: { text: "Multicomponent diffusion, predictive models" },
      5: { text: "Micro holes and leaks in packaging" },
    },
    next: {
      0: "id-unit-principles-of-mass-transfer",
      1: "id-unit-migration-modeling-for-monomaterials",
      2: "id-unit-modeling-for-multi-materials-and-multi-steps-processes",
      3: "id-unit-calculation-of-permeability-in-composite-systems",
      4: "id-unit-multicomponent-diffusion,-predictive-models",
      5: "id-unit-micro-holes-and-leaks-in-packaging",
      type: "choice",
    },
  },
  {
    id: "id-unit-principles-of-mass-transfer",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Mass transfer: principles 1/2",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.1/part1.html#/2",
      },
      1: {
        text: "Mass transfer: principles 2/2",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.1/part2.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-migration-modeling-for-monomaterials",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Migration modeling: monomaterials",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-modeling-for-multi-materials-and-multi-steps-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Migration modeling for multimaterials",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-calculation-of-permeability-in-composite-systems",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Permeability in composite materials and laminates",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.4/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-multicomponent-diffusion,-predictive-models",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Multicomponent diffusion",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.5/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-micro-holes-and-leaks-in-packaging",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Micro holes and leaks",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.6/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-fmeca-applied-to-food-packaging-design",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "History and principles of FMEA-FMECA" },
      1: { text: "Diagram-based approaches" },
      2: { text: "Computer-aided approaches" },
    },
    next: {
      0: "id-unit-history-and-principles-of-fmea-fmeca",
      1: "id-unit-diagram-based-approaches",
      2: "id-unit-computer-aided-approaches",
      type: "choice",
    },
  },
  {
    id: "id-unit-history-and-principles-of-fmea-fmeca",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Overview of FMECA approaches",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-diagram-based-approaches",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "FMECA diagrams",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-computer-aided-approaches",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Computer-aided FMECA applied to mass transfer",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S5/U5.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-molecular-and-thermodynamical-modeling",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: {
        text: "Principles (forcefields, statistical-ensembles), overview of online databases",
      },
      1: {
        text: "Microscopic theories of transport coefficients and free-energies",
      },
      2: { text: "Calculations using fluctuation theorems" },
    },
    next: {
      0: "id-unit-principles-(forcefields,-statistical-ensembles),-overview-of-online-databases",
      1: "id-unit-microscopic-theories-of-transport-coefficients-and-free-energies",
      2: "id-unit-calculations-using-fluctuation-theorems",
      type: "choice",
    },
  },
  {
    id: "id-unit-principles-(forcefields,-statistical-ensembles),-overview-of-online-databases",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Molecular and thermodynamical modeling",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-microscopic-theories-of-transport-coefficients-and-free-energies",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Calculating diffusivities",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-calculations-using-fluctuation-theorems",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Calculating activity and partition coefficients",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-eco-design",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Methodologies used in life cycle assessment" },
      1: { text: "Tools for life cycle imppact assessment" },
      2: { text: "Biodegradation and microplastics" },
      3: { text: "Recycling" },
      4: { text: "Safety assesment of recycling processes" },
    },
    next: {
      0: "id-unit-methodologies-used-in-life-cycle-assessment",
      1: "id-unit-tools-for-life-cycle-imppact-assessment",
      2: "id-unit-biodegradation-and-microplastics",
      3: "id-unit-recycling",
      4: "id-unit-safety-assesment-of-recycling-processes",
      type: "choice",
    },
  },
  {
    id: "id-unit-methodologies-used-in-life-cycle-assessment",
    question: {
      text: "Based on your choices, here are our suggestions. Click on a course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Sustainability and Packaging",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part1.html#/2",
      },
      1: {
        text: "Sustainability and LCA: part 2/2",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.1/part2.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-tools-for-life-cycle-imppact-assessment",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Eco-design of packaging",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-biodegradation-and-microplastics",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Biodegradation, microplastics and plastics pollution",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-recycling",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Environmental impact of packaging and",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.4/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-safety-assesment-of-recycling-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Safety assessment of PET recycling processes",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S7/U7.5/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-section-forming,-filling-and-sealing-processes",
    question: { text: "Which unit are you interested in?" },
    answers: {
      0: { text: "Introduction to mechanical processes" },
      1: { text: "Forming processes" },
      2: { text: "Filling processes" },
      3: { text: "Sealing processes" },
      4: { text: "Beverage filling processes" },
      5: { text: "Forming, filling and sealing machines" },
      6: { text: "Surface treatments and coatings" },
      7: { text: "Process optimization" },
    },
    next: {
      0: "id-unit-introduction-to-mechanical-processes",
      1: "id-unit-forming-processes",
      2: "id-unit-filling-processes",
      3: "id-unit-sealing-processes",
      4: "id-unit-beverage-filling-processes",
      5: "id-unit-forming,-filling-and-sealing-machines",
      6: "id-unit-surface-treatments-and-coatings",
      7: "id-unit-process-optimization",
      type: "choice",
    },
  },
  {
    id: "id-unit-introduction-to-mechanical-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Introduction to mechanical processes (U8.2-U8.6)",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.1/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-forming-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Forming processes",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.2/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-filling-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Filling Processes",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.3/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-sealing-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Sealing processes",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.4/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-beverage-filling-processes",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Beverage filling processes",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.5/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-forming,-filling-and-sealing-machines",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Forming, filling and sealing machines",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.6/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-surface-treatments-and-coatings",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Surface treatments: why and how?",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.7/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
  {
    id: "id-unit-process-optimization",
    question: {
      text: "Based on your choices, here is our suggestion. Click on the course to open it in another tab.",
    },
    answers: {
      0: {
        text: "Packaging line optimization",
        link: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S8/U8.8/part1.html#/2",
      },
    },
    next: { type: "choice" },
    nextButtonText: "End",
  },
];
