/*
 * File: beginnerJsonData.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Friday, 18th December 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Friday, 18th December 2020
 * Modified By: Steward OUADI
 * -----
 */

// Online mode: we are in this mode, when the fitness platform is running on a web server
// Offline mode: we are in this mode, when the fitness platform is not running on a web server

// Variable used for Offline mode. As we can't fetch the data because there is no running web server we get data from this variable
const jsonData = [
  {
    question: 'One of these plastics is not recyclable',
    answers: {
      a: 'PS',
      b: 'LDPE',
      c: 'HDPE',
      d: 'PP',
      e: 'PET',
    },
    correctAnswer: 'a',
  },
  {
    question: 'PP commonly in food packaging is',
    answers: {
      a: 'isotactic',
      b: 'atactic',
      c: 'syndiotactic',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'What phenomena control the migration of packaging constituents into food?',
    answers: {
      a: 'desorption',
      b: 'permeation',
      c: 'sorption',
      d: 'thermodiffusion',
      e: 'radiation',
      f: 'volatilization',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'Which law is in force and is authorizing migration modeling for compliance testing?',
    answers: {
      a: '10/2011/EC',
      b: '1935/2004/EC',
      c: '2002/72/EC',
      d: '2023/2006/EC',
      e: '282/2008/EC',
      f: '2019/904/EC',
      g: '89/109/EEC',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Which polymer is glassy at ambient temperature',
    answers: {
      a: 'PLA',
      b: 'LDPE',
      c: 'HDPE',
      d: 'PP',
      e: 'plasticized PVC',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Which statement is always correct?',
    answers: {
      a: 'A biosourced material is made from renewable resources.',
      b: 'A biosourced material is biodegradable.',
      c: 'A biosourced material is compostable.',
      d: 'A biosourced material is recyclable.',
      e: 'A biosourced material is safe for the consumer.',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'Which statement is always correct within the EU? - we assume three member states: A,B,C',
    answers: {
      a: 'A food packaging produced in A, can be filled in B and sold in C.',
      b: 'Member states A,B and C must apply the same rules.',
      c: 'Applicable laws do not depend on the packaging material.',
      d: 'Applicable laws depend on the food product.',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'What is the name of the equation used to overestimate diffusivities in plastics?',
    answers: {
      a: 'Equation of Piringer',
      b: 'Equation of Fick',
      c: 'Equation of Gordon-Taylor',
      d: 'Equation of de Gennes',
      e: 'Equation of Stokes-Einstein',
      f: 'Equation of Rouse',
      g: 'Equation of Fourier',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'What is the effective permeability of a laminate AB? - Layer A (thickness lA, permeability PA) - Layer A (thickness PA, permeability PB)',
    answers: {
      a: '(lA + lB) / (lA/PA + lB/PB)',
      b: '(lA + lB) / (PA/lA + PB/lB)',
      c: '(PA/lA + PB/lB) / (lA+lB)',
      d: '(PA + PB) / (lA + lB)',
      e: '(lA + lB) / (PA + PB)',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'The relative chemical affinity of a substance for the food is dramatically increased only in one situation:',
    answers: {
      a:
        'When the substance is polar, the food is apolar and the polymer in contact is polar.',
      b:
        'When the substance is apolar, the food is apolar and the polymer in contact is polar.',
      c:
        'When the substance is polar, the food is polar and the polymer in contact is apolar.',
      d:
        'When the substance is polar, the food is apolar and the polymer in contact is polar.',
      e:
        'When the substance is polar, the food and the polymer in contact are polar.',
      f:
        'When the substance is apolar, the food and the polymer in contact are apolar.',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'Only one of this information is not mandatory on food packaging labels:',
    answers: {
      a: 'The list of materials',
      b: 'Food weight',
      c: 'Storage conditions',
      d: 'Shelf-life, best before date',
      e: 'Food composition',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'The EU legislation do not mention food packaging, but food contact materials instead.',
    answers: {
      a: 'Yes, it is correct.',
      b: 'No, it is not correct',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'It is unlikely that one of these outcomes will occur in a foreseeable future.',
    answers: {
      a: 'All packaging materials will be biodegradable.',
      b: 'All packaging materials will be recyclable.',
      c: 'All packaging materials will be collected',
      d: 'All containers will be reused',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Packaging materials are made sustainable by using:',
    answers: {
      a: 'the 7 R concept',
      b: 'the 5 S concept',
      c: 'the 3 M concept',
      d: 'the 3 Q model',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'One of these materials is not suitable for hot-filling (above 80°C)',
    answers: {
      a: 'PET',
      b: 'PP',
      c: 'glass',
      d: 'metal',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'Is the weight of a glass container almost always heavier than the food in it?',
    answers: {
      a: 'yes',
      b: 'no',
    },
    correctAnswer: 'a',
  },
  {
    question:
      'Which official institution is managing food safety at the European level?',
    answers: {
      a: 'EFSA',
      b: 'ECHA',
      c: 'EEA',
      d: 'OSHA',
      e: 'EMA',
      f: 'FDA',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Which food simulant is used for fatty food products',
    answers: {
      a: 'D2',
      b: 'D1',
      c: 'C',
      d: 'B',
      e: 'A',
      f: 'F',
    },
    correctAnswer: 'a',
  },
  {
    question: 'One of these materials cannot be yet recycled for food contact',
    answers: {
      a: 'LDPE',
      b: 'paper and board',
      c: 'PET',
      d: 'glass',
      e: 'aluminum',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Can nanomaterials be used for food contact?',
    answers: {
      a: 'yes',
      b: 'no',
    },
    correctAnswer: 'a',
  },
];
