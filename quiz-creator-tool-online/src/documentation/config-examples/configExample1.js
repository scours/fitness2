/*
 * File: configExample1.js
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
  {
    id: "global",
    shuffleAnswers: false,
    currentScore: [0, 0, 0],
    scoreIntermediate: [4, 4, 4],
    scoreAdvanced: [8, 8, 8],
    coursesBeginner: {
      texts: [
        "Panorama of food packaging",
        "Packaging materials and production processes",
        "What is food packaging?",
      ],
      links: [
        "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html#/2",
        "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.2/part1.html#/2",
        "https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.3/part1.html#/2",
      ],
    },
    coursesIntermediate: {
      texts: [
        "Innovations in food packaging - Biobased and biodegradable materials",
        "Innovations in food packaging - Active packaging",
        "Innovations in food packaging - Smart packaging",
      ],
      links: [
        "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.1/part1.html#/2",
        "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.2/part1.html#/2",
        "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.3/part1.html#/2",
      ],
    },
    coursesAdvanced: {
      texts: [
        "Hazard identification and characterization",
        "Introduction to decision theory and risk management",
        "Packaging and food preservation",
      ],
      links: [
        "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S1/U1.1/part1.html#/2",
        "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S2/U2.1/part1.html#/2",
        "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S3/U3.1/part1.html#/2",
      ],
    },
  },
  {
    id: "quest-menu",
    question: {
      text: "MENU",
    },
    answers: {
      a: { text: "Quest 1" },
      b: { text: "Quest 2" },
      c: { text: "Quest 3" },
    },
    next: {
      type: "choice",
      a: "quest-1",
      b: "quest-2",
      c: "quest-3",
    },
  },
  {
    id: "quest-1",
    question: {
      text: "Quest 1: Question: based on this image, what is the name of the equation?",
      img: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/src_part1/Slide11.svg",
      imgLink:
        "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/part1.html#/11",
    },
    answers: {
      a: { text: "Einstein equation" },
      b: { text: "Isaac Newton equation" },
      c: { text: "Stephen Hawking Equation" },
      d: { text: "Nikola Tesla Equation" },
    },
    correctAnswer: "a",
    next: {
      type: "score",
      passed: "quest-2",
      notPassed: "quest-3",
    },
    nextButtonText: "Next",
    previousButtonText: "Previous",
    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [3, 0, 0],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "course-slide-1",
    img: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/src_part5/Slide12.svg",
    imgLink:
      "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/part5.html#/12",
    next: {
      specific: "quest-3",
    },
  },
  {
    id: "quest-2",
    question: {
      text: "Quest 2: Select all figures showing packaging materials",
    },
    answers: {
      a: {
        text: "it is",
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.3/src_part1/Slide35.svg",
      },
      b: { text: "There is no packaging materials among these answers" },
      c: {
        text: "it is",
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.1/src_part1/Slide24.svg",
        imgLink:
          "https://fitness.agroparistech.fr/fitness/lectures/html/common/S4/U4.1/part1.html#/24",
      },
      d: {
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.1/src_part1/Slide22.svg",
      },
      e: {
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.1/src_part1/Slide36.svg",
      },
    },
    correctAnswer: ["b"],
    next: {
      specific: "course-slide-1",
    },
    minimumPassedScore: [0, 2, 0],
    pointsIfCorrectAnswer: [2, 3, 4],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-3",
    question: {
      text: "Quest 3: Select the figures which represent Einstein equation and Migration calculation properties",
    },
    answers: {
      a: {
        text: "it is",
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/src_part1/Slide11.svg",
        imgLink:
          "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S6/U6.2/part1.html#/11",
      },
      b: {
        text: "it is",
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/common/S2/U2.1/src_part1/Slide26.svg",
      },
      e: {
        text: "it is",
        img: "https://fitness.agroparistech.fr/fitness/lectures/html/specialized/S4/U4.2/src_part1/Slide14.svg",
      },
    },
    correctAnswer: ["a", "e"],
    minimumPassedScore: [1, 1, 1],
    pointsIfCorrectAnswer: [4, 4, 4],
    pointsIfWrongAnswer: [0, 0, 0],
  },
];
