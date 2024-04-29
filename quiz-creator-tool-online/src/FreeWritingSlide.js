/*
 * File: FreeWritingSlide.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 26th April 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Monday, 29th April 2024
 * Modified By: Steward OUADI
 */

class FreeWritingSlide extends GlobalSlide {
  constructor(questionText) {
    super();
    this.type = "freeWriting";
    this.questionText = questionText;
    this.inputId = this.generateInputId(); // Unique identifier for the input element
    this.userInput = ""; // To store the user's input
  }

  generateInputId() {
    return `${this.getComputedIdentifier()}_freewrite`;
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
    questionText.textContent = currentQuestion.questionText;

    const textarea = document.createElement("textarea");
    textarea.id = this.inputId;
    textarea.className = "free-writing";
    textarea.placeholder = "Your response";
    textarea.rows = 4; // Define the visual size of the textarea
    textarea.cols = 50;

    // Event listener to capture user input
    textarea.addEventListener("input", (event) => {
      this.userInput = event.target.value;
      console.log(
        `Input for ${this.inputId} updated to: ${event.target.value}`
      ); // Debugging line
    });

    firstDiv.appendChild(questionText);
    firstDiv.appendChild(textarea);

    if (answersDivContent) {
      firstDiv.appendChild(answersDivContent);
    }

    return firstDiv;
  }

  getAnswers() {
    // Return the complete question text with user's input included
    return this.userInput;
  }
}
