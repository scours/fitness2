/*
 * File: RadioButtonQuizSlide.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Tuesday, 13th April 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 23rd June 2021
 * Modified By: Steward OUADI
 */

class RadioButtonQuizSlide extends GlobalSlide {
  constructor() {
    super(); // call parent constructor
    this.type = "radio";

    this.isAQuiz = true;

    // A map which associate a next slide id to each choice
    // letter of the proposed answers -> id of the next slide element
    this.choiceNextSlide = new Map();
  }

  addChoiceNextSlide(choice, nextSlideElementId) {
    this.choiceNextSlide.set(choice, nextSlideElementId);
  }

  getChoiceNextSlide(choice) {
    return this.choiceNextSlide.get(choice);
  }

  getAnswerDiv(questionNumber, letter, answersIterator, currentQuestion) {
    const label = document.createElement("LABEL");
    const input = document.createElement("INPUT");
    input.type = this.type;
    input.name = `question${questionNumber}`;
    input.value = letter;

    label.appendChild(input);
    if (currentQuestion.answers[letter].text !== undefined) {
      const textNode = document.createTextNode(
        `${answersIterator.toString()}.${currentQuestion.answers[letter].text}`
      );

      label.appendChild(textNode);
    }

    // If there is an image to show, create it and append it as a child
    if (currentQuestion.answers[letter].img !== undefined) {
      label.appendChild(
        this.getImageElement(
          currentQuestion.answers[letter].img,
          currentQuestion.answers[letter].imgLink,
          "responsive"
        )
      );
    }

    return label;
  }
}
