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
    "id": "Q1",
    "question": {
      "text": "The EU legislation do not mention food packaging, but food contact materials instead."
    },
    "answers": {
      "a": {
        "text": "Yes, it is correct."
      },
      "b": {
        "text": "] No, it is not correct."
      }
    },
    "pointsIfCorrectAnswer": 1,
    "pointsIfWrongAnswer": 0,
    "correctAnswer": "a"
  },
  {
    "id": "Q2",
    "question": {
      "text": "What is the name of the equation used to overestimate diffusivities in plastics?"
    },
    "answers": {
      "a": {
        "text": "] Equation of de Gennes"
      },
      "b": {
        "text": "Equation of Fourier"
      },
      "c": {
        "text": "] Equation of Fick"
      },
      "d": {
        "text": "] Equation of Stokes-Einstein"
      },
      "e": {
        "text": "] Equation of Gordon-Taylor"
      },
      "f": {
        "text": "] Equation of Piringer"
      },
      "g": {
        "text": "] Equation of Rouse"
      }
    },
    "pointsIfCorrectAnswer": 1,
    "pointsIfWrongAnswer": 0,
    "correctAnswer": "b"
  },
  {
    "id": "Q3",
    "question": {
      "text": "Which statement is always correct within the EU? - we assume three member states"
    },
    "answers": {
      "a": {
        "text": "Member states A,B and C must apply the same rules."
      },
      "b": {
        "text": "] Applicable laws depend on the food product"
      },
      "c": {
        "text": "] Applicable laws do not depend on the packaging material."
      },
      "d": {
        "text": "] A food packaging produced in A, can be filled in B and sold in C."
      }
    },
    "pointsIfCorrectAnswer": 1,
    "pointsIfWrongAnswer": 0,
    "correctAnswer": "a"
  }
];
