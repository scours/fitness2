/*
 * File: FillInTheBlanksSlide.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 23rd April 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Wednesday, 24th April 2024
 * Modified By: Steward OUADI
 */

class FillInTheBlanksSlide extends GlobalSlide {
  constructor(questionText) {
    super();
    this.type = "fillInTheBlanks";
    this.questionText = questionText;
  }

  render() {
    const container = document.createElement("div");
    container.className = "fill-in-the-blanks";

    // Parse and replace BLANK with input fields
    const questionHtml = this.questionText.replace(
      /BLANK/g,
      () => `<input type="text" class="blank" placeholder="Fill in the blank">`
    );

    container.innerHTML = `<p>${questionHtml}</p>`;

    return container.outerHTML;
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

    // Initially create the question text as a simple string, including placeholders for inputs
    let questionHtml = currentQuestion.questionText.replace(
      /BLANK/g,
      () => `<input type="text" class="blank" placeholder="Fill in the blank">`
    );

    // Set the innerHTML of the paragraph to include actual HTML input elements
    questionText.innerHTML = questionHtml;

    firstDiv.appendChild(questionText);
    if (answersDivContent) {
      firstDiv.appendChild(answersDivContent);
    }

    return firstDiv; // Make sure this is always returned
  }
}
