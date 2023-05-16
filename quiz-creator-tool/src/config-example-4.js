/*
 * File: config.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 18th December 2020
 * Authors: Olivier VITRAC, Steward OUADI, Chat GPT
 * -----
 * Last Modified: Thursday, 4th May 2023
 * Modified By: Steward OUADI
 * -----
 */

// Variable used for Online and Offline mode. We get data from this variable.
const configurationData = [
  {
    id: "global",
    shuffleAnswers: false,
    currentScore: 0,
  },
  {
    id: "quest-1",
    question: {
      text: "What do you get when you cross a snowman and a vampire?",
    },
    answers: {
      a: {
        text: "Frostbite",
      },
      b: {
        text: "A chilly nightmare",
      },
      c: {
        text: "An ice-cold monster",
      },
    },
    correctAnswer: "a",
    next: {
      specific: "quest-2",
    },
    pointsIfCorrectAnswer: 1,
    pointsIfWrongAnswer: 0,
  },
  {
    id: "quest-2",
    question: {
      text: "Why don't scientists trust atoms?",
    },
    answers: {
      a: {
        text: "They're too small",
      },
      b: {
        text: "They make up everything",
      },
      c: {
        text: "They're unpredictable",
      },
    },
    correctAnswer: "b",
    next: {
      specific: "quest-3",
    },
    pointsIfCorrectAnswer: 1,
    pointsIfWrongAnswer: 0,
  },
  {
    id: "quest-3",
    question: {
      text: "Why was the math book sad? modified",
    },
    answers: {
      a: {
        text: "It had too many problems",
      },
      b: {
        text: "It felt empty inside",
      },
      c: {
        text: "It couldn't find its purpose",
      },
    },
    correctAnswer: "a",
    pointsIfCorrectAnswer: 1,
    pointsIfWrongAnswer: 0,
  },
];

