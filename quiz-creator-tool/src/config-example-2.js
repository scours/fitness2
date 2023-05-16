/*
 * File: config-example-2.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Tuesday, 21st June 2022
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
  },
  {
    id: "intro-slide",
    img: "src/configContent/images/mermaid-representation-for-a-quiz.svg",
    next: {
      specific: "quest-1",
    },
    nextButtonText: "Start",
  },
  {
    id: "quest-1",
    question: {
      text: "Quest 1",
    },
    answers: {
      a: { text: "Right answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Wrong answer" },
    },
    correctAnswer: "a",
    next: {
      type: "score",
      passed: "quest-2",
      notPassed: "quest-3",
    },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-2",
    question: {
      text: "Question 2",
    },
    answers: {
      a: { text: "Wrong answer" },
      b: { text: "Wrong answer" },
      c: { text: "Right answer" },
      d: { text: "Wrong answer" },
    },
    correctAnswer: "c",
    next: {
      type: "score",
      passed: "quest-4",
      notPassed: "quest-5",
    },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-3",
    question: {
      text: "Question 3",
    },
    answers: {
      a: { text: "Wrong answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Right answer" },
    },
    correctAnswer: "d",
    next: {
      type: "score",
      passed: "quest-6",
      notPassed: "quest-7",
    },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-4",
    question: {
      text: "Question 4",
    },
    answers: {
      a: { text: "Right answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Wrong answer" },
      e: { text: "Right answer" },
    },
    correctAnswer: ["a", "e"],
    next: {
      specific: "quest-8",
    },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-5",
    question: {
      text: "Question 5",
    },
    answers: {
      a: { text: "Right answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Wrong answer" },
      e: { text: "Right answer" },
    },
    correctAnswer: ["a", "e"],
    next: { specific: "quest-8" },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-6",
    question: {
      text: "Question 6",
    },
    answers: {
      a: { text: "Right answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Wrong answer" },
      e: { text: "Right answer" },
    },
    correctAnswer: ["a", "e"],
    next: { specific: "quest-8" },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
  {
    id: "quest-7",
    question: {
      text: "Question 7",
    },
    answers: {
      a: { text: "Right answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Wrong answer" },
      e: { text: "Right answer" },
    },
    correctAnswer: ["a", "e"],
    next: { specific: "quest-8" },

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },

  {
    id: "quest-8",
    question: {
      text: "Question 8",
    },
    answers: {
      a: { text: "Right answer" },
      b: { text: "Wrong answer" },
      c: { text: "Wrong answer" },
      d: { text: "Wrong answer" },
      e: { text: "Right answer" },
    },
    correctAnswer: ["a", "e"],

    minimumPassedScore: [1, 0, 0],
    pointsIfCorrectAnswer: [2, 2, 2],
    pointsIfWrongAnswer: [0, 0, 0],
  },
];
