/*
 * File: SuggestionMenuSlide.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Friday, 21st May 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 23rd June 2021
 * Modified By: Steward OUADI
 */

class SuggestionMenuSlide extends GlobalSlide {
  constructor() {
    super(); // call parent constructor
    this.type = "radio";

    this.isAQuiz = false;

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
    let label;
    // We will create a label only if the text defined and the trimmed content is not empty
    if (
      currentQuestion.answers[letter].text !== undefined &&
      currentQuestion.answers[letter].text.trim().length >= 1
    ) {
      if (
        currentQuestion.answers[letter].link !== undefined &&
        currentQuestion.answers[letter].link.startsWith("http") === true
      ) {
        // Link starts with "http", let's create an anchor label
        label = document.createElement("LABEL");
        const input = document.createElement("INPUT");
        input.type = this.type;
        input.name = `question${questionNumber}`;
        input.value = letter;

        label.appendChild(input);

        const textNode = document.createTextNode(
          `${currentQuestion.answers[letter].text}`
        );

        const anchorElement = document.createElement("A");
        anchorElement.href = currentQuestion.answers[letter].link;
        anchorElement.target = "_blank";
        anchorElement.appendChild(textNode);

        label.appendChild(anchorElement);
      } else {
        // Link is not defined or does not start with "http", let's create an unanchored label

        // Create a temporary radio button
        const radioButton = new RadioButtonQuizSlide();

        // Create label using temporary radio button and assign it to current label
        label = radioButton.getAnswerDiv(
          questionNumber,
          letter,
          answersIterator,
          currentQuestion
        );
      }
    }

    return label;
  }
}
