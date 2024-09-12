/*
 * File: FillInTheBlanksSlide.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 23rd April 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Tuesday, 10th September 2024
 * Modified By: Steward OUADI
 */

class FillInTheBlanksSlide extends GlobalSlide {
  constructor(questionText) {
    super();
    this.type = "fillInTheBlanks";
    this.questionText = questionText;
    this.inputsData = {}; // This will store user input against each input ID
    this.inputCount = 0; // Track the number of inputs for unique ID generation
  }

  generateInputId() {
    return `${this.getComputedIdentifier()}_input${this.inputCount++}`;
  }

  addInputListeners(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.addEventListener("input", (event) => {
        this.inputsData[inputId] = event.target.value;
        console.log(
          `Input ${inputId} updated to: ${event.target.value}. uid: ${this.uid}. questionText: ${this.questionText}`
        ); // Debugging line
      });
    }
  }

  getQuestionAndAnswersContent(
    questionsIterator,
    totalNumberOfQuestions,
    currentQuestion,
    answersDivContent
  ) {
    const firstDiv = document.createElement("DIV");
    firstDiv.classList.add("slide");
    this.htmlObjectId = this.getComputedIdentifier();
    firstDiv.id = this.htmlObjectId;

    const questionText = document.createElement("P");
    // Directly set HTML with inputs
    questionText.innerHTML = currentQuestion.questionText.replace(
      /BLANK/g,
      () => {
        const inputId = this.generateInputId();
        setTimeout(() => this.addInputListeners(inputId), 0);
        return `<input type="text" id="${inputId}" class="blank" placeholder="Fill in the blank">`;
      }
    );

    firstDiv.appendChild(questionText);
    if (answersDivContent) {
      firstDiv.appendChild(answersDivContent);
    }

    return firstDiv;
  }

  getAnswers() {
    let resultText = this.questionText;
    // Create an array from the inputsData values, ensuring they are ordered correctly
    const inputValues = Object.values(this.inputsData);

    // Use a counter to keep track of which input value to insert
    let counter = 0;

    // Replace each 'BLANK' with the corresponding value in order
    resultText = resultText.replace(/BLANK/g, () => {
      counter += 1; // Increment the counter
      return `BLANK(${inputValues[counter - 1]})`; // Insert the current input value
    });

    return resultText;
  }
}
