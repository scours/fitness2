/*
 * File: GlobalSlide.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 13th April 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Thursday, 16th May 2024
 * Modified By: Steward OUADI
 */
class GlobalSlide {
  constructor() {
    this.uid = this.getComputedIdentifier(); // Unique identifier

    // Type of the slide.
    // Type can be one of:
    // Radio button slide
    // Multiple correct answers slide
    // Image only slide (the image is taking the whole place on the screen)
    this.type = "";

    this.previousElement = undefined;
    this.nextElement = undefined;

    this.passed;
    this.notPassed;

    // Initial object as read from config file
    this.initialObject;

    // Html object representing this slide
    this.htmlObject;
    this.htmlObjectId;

    // Html object id representing the text of the current question number
    this.currentQuestionNumberHtmlObjectId;

    // Html object id representing the div which contains answers content
    this.currentQuestionAnswersDivId;

    // Text to be displayed for the previous button
    this.previousButtonText = "Previous question";

    // Text to be displayed for the next button
    this.nextButtonText = "Next question";

    // Text to be displayed for the "quiz score" button. Button to get results to the test
    this.quizScoreButtonText = "Get Quiz Score";

    // The minimum score for the answer to be considered as "passed"
    this.minimumPassedScore;

    // The maximum score the learner can get if the question he answered is considered as "passed"
    this.pointsIfCorrectAnswer;

    // Variable to know is current slide is a quiz or not
    // If it is a quiz, we can compute score for this slide
    // If it is not a quiz, we won't compute score, maybe it's a menu, where the learner has to choose where to go next
    this.isAQuiz;
  }

  setIsAQuiz(newValue) {
    this.isAQuiz = newValue;
  }

  getIsAQuiz() {
    return this.isAQuiz;
  }

  setMaximumScoreIfCorrectAnswer(newMaximumScoreIfCorrectAnswer) {
    this.pointsIfCorrectAnswer = newMaximumScoreIfCorrectAnswer;
  }

  getMaximumScoreIfCorrectAnswer() {
    return this.pointsIfCorrectAnswer;
  }

  setMinimumPassedScore(newMinimumPassedScore) {
    this.minimumPassedScore = newMinimumPassedScore;
  }

  getMinimumPassedScore() {
    return this.minimumPassedScore;
  }

  setQuizScoreButtonText(newText) {
    this.quizScoreButtonText = newText;
  }

  getQuizScoreButtonText() {
    return this.quizScoreButtonText;
  }

  setPreviousButtonText(newText) {
    this.previousButtonText = newText;
  }

  setNextButtonText(newText) {
    this.nextButtonText = newText;
  }

  getPreviousButtonText() {
    return this.previousButtonText;
  }

  getNextButtonText() {
    return this.nextButtonText;
  }

  setPassed(value) {
    this.passed = value;
  }

  setNotPassed(value) {
    this.notPassed = value;
  }

  setPreviousElement(element) {
    this.previousElement = element;
  }

  setNextElement(element) {
    this.nextElement = element;
  }

  getPreviousElement() {
    return this.previousElement;
  }

  getNextElement() {
    return this.nextElement;
  }

  getAnswersDivId() {
    return this.currentQuestionAnswersDivId;
  }

  /**
   * Compute unique identifier
   * Use performance.now for higher precision date
   * Use Window.crypto for higher precision random numbers
   * So we can get less collisions (the same identifier multiple times)
   * https://gist.github.com/gordonbrander/2230317#gistcomment-3443509
   */
  getComputedIdentifier() {
    let a = new Uint32Array(3);
    window.crypto.getRandomValues(a);
    return (
      performance.now().toString(36) +
      Array.from(a)
        .map((A) => A.toString(36))
        .join("")
    ).replace(/\./g, "");
  }

  getId() {
    return this.uid;
  }

  setId(id) {
    this.uid = id;
  }

  getType() {
    return this.type;
  }

  getAnswerDiv() {
    return;
  }

  // Create and return an image element based on image source string
  getImageElement(imgSource, imgLink, imgClass) {
    // Create anchor element.
    // And add image to anchor element, so when we click on the image, the image is open in full size into an another tab.
    const anchorElement = document.createElement("A");
    // Set the href property.
    if (imgLink !== undefined) {
      anchorElement.href = imgLink;
    } else {
      anchorElement.href = imgSource;
    }
    anchorElement.target = "_blank";

    const img = document.createElement("IMG");

    img.src = imgSource;
    img.classList.add(imgClass);

    anchorElement.appendChild(img);

    return anchorElement;
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

    // if (currentQuestion.type === "fillInTheBlanks") {
    //   // Render the content and convert the HTML string back to a DOM element
    //   const renderedHtml = currentQuestion.render();
    //   const tempContainer = document.createElement("div");
    //   tempContainer.innerHTML = renderedHtml; // Convert string to DOM

    //   firstDiv.appendChild(tempContainer.firstChild); // Append the actual content, not the temporary container
    // } else {
    const secondDiv = document.createElement("DIV");
    secondDiv.classList.add("question");

    const kbdForQuestion = document.createElement("KBD");
    const bold1 = document.createElement("B");
    const bold2 = document.createElement("B");
    const bold3 = document.createElement("B");

    bold2.style.display = "none";
    bold3.style.display = "none";

    const answersDiv = document.createElement("DIV");
    let questionTextNotifierP1 = document.createTextNode("");

    if (currentQuestion.correctAnswer !== undefined) {
      // Only if the "correct answer" field is define, we add this class
      answersDiv.classList.add("answers");

      questionTextNotifierP1 = document.createTextNode(`Quiz`);
    }

    if (
      currentQuestion.answers != undefined &&
      isAClickableMenu(currentQuestion.answers)
    ) {
      // If the slide is of type clickable menu
      answersDiv.classList.add("menuFromConfigFile");
    } else {
      answersDiv.classList.add("menuFromConfigFile");
      answersDiv.classList.add("borderIt");
    }

    const questionTextNotifierP2 = document.createTextNode(
      `${questionsIterator.toString()}`
    );

    const questionTextNotifierP3 = document.createTextNode(
      `/${totalNumberOfQuestions.toString()}`
    );

    this.currentQuestionNumberHtmlObjectId = this.getComputedIdentifier();
    bold1.id = this.getComputedIdentifier();
    bold2.id = this.currentQuestionNumberHtmlObjectId;
    bold3.id = this.getComputedIdentifier();

    let currentQuestionText = document.createTextNode("");
    if (currentQuestion.question != undefined) {
      currentQuestionText = document.createTextNode(
        currentQuestion.question.text
      );
    }

    // bold1.appendChild(questionTextNotifierP1);
    bold2.appendChild(questionTextNotifierP2);
    bold3.appendChild(questionTextNotifierP3);
    // kbdForQuestion.appendChild(bold1);
    kbdForQuestion.appendChild(bold2);
    kbdForQuestion.appendChild(bold3);

    const br = document.createElement("BR");

    secondDiv.appendChild(kbdForQuestion);
    secondDiv.appendChild(br);
    secondDiv.appendChild(currentQuestionText);

    if (currentQuestion.question != undefined) {
      // If there is an image to show, create it and append it as a child
      if (currentQuestion.question.img !== undefined) {
        const br = document.createElement("BR");
        secondDiv.appendChild(br);
        secondDiv.appendChild(
          this.getImageElement(
            currentQuestion.question.img,
            currentQuestion.question.imgLink,
            "responsive"
          )
        );
      }
    }

    this.currentQuestionAnswersDivId = this.getComputedIdentifier();
    answersDiv.id = this.currentQuestionAnswersDivId;

    answersDiv.appendChild(answersDivContent);

    firstDiv.appendChild(secondDiv);

    firstDiv.appendChild(answersDiv);
    // }

    return firstDiv;
  }

  /**
   * Set the initial object as read from config file
   * @param {*} element: slide from config file
   */
  setInitialObject(element) {
    this.initialObject = element;
  }

  getInitialObject() {
    return this.initialObject;
  }

  getHtmlObjectId() {
    return this.htmlObjectId;
  }

  setCurrentQuestionNumber(newQuestionNumber) {
    const currentQuestionNumberHtmlObject = document.getElementById(
      this.currentQuestionNumberHtmlObjectId
    );
    currentQuestionNumberHtmlObject.innerHTML = newQuestionNumber;
  }

  // New method to display images
  showImages(imageUrls) {
    const container = document.createElement("div");
    container.className = "image-container";

    imageUrls.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      img.style.width = "100px"; // Thumbnail size
      img.style.cursor = "pointer";
      img.onclick = () => {
        const modal = this.createImageModal(url);
        document.body.appendChild(modal);
      };
      container.appendChild(img);
    });

    return container;
  }

  // Helper method to create a modal for the enlarged image
  createImageModal(imageSrc) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

    const img = document.createElement("img");
    img.src = imageSrc;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";

    modal.appendChild(img);
    modal.onclick = () => modal.remove();

    return modal;
  }
}
