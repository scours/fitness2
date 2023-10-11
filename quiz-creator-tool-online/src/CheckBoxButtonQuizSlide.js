/*
 * File: CheckBoxButtonQuizSlide.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS 2 ERASMUS+
 * File Created: Wednesday, 14th April 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Tuesday, 10th October 2023
 * Modified By: Steward OUADI
 */
class CheckBoxButtonQuizSlide extends GlobalSlide {
  constructor() {
    super(); // call parent constructor
    this.type = "checkbox";
    this.isAQuiz = true;
  }

  getAnswerDiv(questionNumber, letter, answersIterator, currentQuestion) {
    // ...add HTML checkbox cases
    let checkboxValue = 0;

    // Give wrong answers the value "0"
    // Give correct answers the value "1"
    // This will help us in the calculation, to know if the user answers are correct or not
    if (currentQuestion.correctAnswer.indexOf(letter) !== -1) {
      checkboxValue = 1;
    }

    const label = document.createElement("LABEL");
    const input = document.createElement("INPUT");
    input.type = this.type;
    input.name = `question${questionNumber}`;
    input.value = checkboxValue;
    input.id = letter;

    label.appendChild(input);

    if (currentQuestion.answers[letter].text !== undefined) {
      const textNode = document.createTextNode(
        `${answersIterator.toString()}.${currentQuestion.answers[letter].text}`
      );

      label.appendChild(textNode);
    }

    // If there is an image to show, create it and append it as a child
    if (currentQuestion.answers[letter].img !== undefined) {
      const br = document.createElement("BR");
      label.appendChild(br);
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
