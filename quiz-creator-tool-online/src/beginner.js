/*
 * File: beginner.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS 2 ERASMUS+
 * File Created: Thursday, 17th December 2020
 * Authors: Olivier VITRAC, Steward OUADI
 * -----
 * Last Modified: Monday, 16th October 2023
 * Modified By: Steward OUADI
 * -----
 */

// Test for beginners - designed by Olivier Vitrac - rev. $ 2020-12-04 $

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function defineQuestionsOrder() {
  let currentSlideElement = globalCurrentSlideElement;
  let currentQuestionNumber = 1;

  while (currentSlideElement !== undefined) {
    // Update question number if first element is a question
    // If the current slide element is an object, make sure we update the question number
    // so the correct question number will be shown on the web page
    if (
      currentSlideElement instanceof CheckBoxButtonQuizSlide ||
      currentSlideElement instanceof RadioButtonQuizSlide
    ) {
      currentSlideElement.setCurrentQuestionNumber(currentQuestionNumber);
      currentQuestionNumber++;
    }
    currentSlideElement = currentSlideElement.getNextElement();

    if (currentQuestionNumber > slideElementContainer.size + 1) {
      currentSlideElement = undefined;
      const h2ErrorText = document.createElement("H2");
      h2ErrorText.innerHTML = `You might have an infinite loop, please check the "next" property in your config file.`;
      quizContainer.innerHTML = h2ErrorText.innerHTML;
    }
  }
}

function computeNextSlideElementBasedOnChoice() {
  const currentSlideElement = globalCurrentSlideElement;
  const currentSlide = globalCurrentSlideElement.getInitialObject();
  if (currentSlide.next !== undefined && currentSlide.next.type === "choice") {
    // Compute next slide only if there are next slides.

    // find selected answer
    const answerContainer = document.getElementById(
      currentSlideElement.getAnswersDivId()
    );

    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    const nextSlideElementId =
      currentSlideElement.getChoiceNextSlide(userAnswer);
    // As there is a map "id" --> slide element.
    // Get slide element from that map using id
    const nextElementObject = slideElementContainer.get(nextSlideElementId);
    // Set next element previous as the current slide
    nextElementObject.setPreviousElement(currentSlideElement);

    // Set next element as current next
    currentSlideElement.setNextElement(nextElementObject);
  }
}

function getScoreForCheckboxesQuiz(
  modifyUserAnswersColor,
  answerContainer,
  currentSlide,
  answerContainers = undefined,
  questionNumber = undefined
) {
  const allPossibleAnswers = answerContainer.querySelectorAll(
    allPossibleAnswersSelector
  );

  // By default, we will assume the user has given the right answer and have all points for the current question
  let rep = true;
  // Maximum points user can have for the question
  const nbTotalPoints = 1;
  let scoreForCurrentQuestion = 0;

  // Set score for current question matrix to zero
  let scoreForCurrentQuestionMatrix = math.zeros(
    math.size(currentSlide.pointsIfCorrectAnswer)
  );

  let nbCheckedAnswers = 0;
  let nbExpectedCorrectAnswers = 0;
  // let userAnswersAndExpectedAnswers = [];
  let userAnswers = [];
  for (let i = 0; i < allPossibleAnswers.length; i++) {
    if (
      allPossibleAnswers[i].value == 1 &&
      allPossibleAnswers[i].checked == false
    ) {
      rep = false;
      nbExpectedCorrectAnswers++;
    }

    if (
      allPossibleAnswers[i].value == 0 &&
      allPossibleAnswers[i].checked == true
    ) {
      rep = false;
      // Wrong answer, this value should not have been checked
      // Remove some points to the current score
      scoreForCurrentQuestion -=
        nbTotalPoints / currentSlide.correctAnswer.length;

      const valueToRemoveFromMatrix = math.divide(
        currentSlide.pointsIfCorrectAnswer,
        currentSlide.correctAnswer.length
      );

      const newScoreForCurrentQuestionMatrix = math.subtract(
        scoreForCurrentQuestionMatrix,
        valueToRemoveFromMatrix
      );

      scoreForCurrentQuestionMatrix = newScoreForCurrentQuestionMatrix;

      nbCheckedAnswers++;

      // User has selected this answer, so push his answer in answer list.
      userAnswers.push(allPossibleAnswers[i].id);
    }

    if (
      allPossibleAnswers[i].value == 1 &&
      allPossibleAnswers[i].checked == true
    ) {
      // Good answer, add some points to the current score
      scoreForCurrentQuestion +=
        nbTotalPoints / currentSlide.correctAnswer.length;

      const valueToAddToMatrix = math.divide(
        currentSlide.pointsIfCorrectAnswer,
        currentSlide.correctAnswer.length
      );

      const newScoreForCurrentQuestionMatrix = math.add(
        scoreForCurrentQuestionMatrix,
        valueToAddToMatrix
      );

      scoreForCurrentQuestionMatrix = newScoreForCurrentQuestionMatrix;

      nbCheckedAnswers++;
      nbExpectedCorrectAnswers++;
      // User has selected this answer, so push his answer in answer list.
      userAnswers.push(allPossibleAnswers[i].id);
    }
  }
  // userAnswersAndExpectedAnswers.push({ userAnswers });
  // console.log(userAnswersAndExpectedAnswers);

  const questionAndUserAnswer = {
    currentSlide,
    userAnswer: userAnswers === undefined ? "undefined" : userAnswers,
  };

  questionsAndUserAnswers.push(questionAndUserAnswer);

  // If score negative or if selected all answers while all answers are not expected to be selected
  if (
    scoreForCurrentQuestion < 0 ||
    (nbCheckedAnswers === allPossibleAnswers.length &&
      nbCheckedAnswers !== nbExpectedCorrectAnswers)
  ) {
    scoreForCurrentQuestion = 0;
  }

  // If a value of the current question matrix is negative,
  // Just set that value to 0. If we really want to add a negative value
  // to the score, that will be done using the "pointsIfWrongAnswer" property
  const matrixIsNegative = math.smaller(scoreForCurrentQuestionMatrix, 0);
  for (let i = 0; i < matrixIsNegative.length; i++) {
    if (matrixIsNegative[i] === true) {
      scoreForCurrentQuestionMatrix[i] = 0;
    }
  }

  let newCurrentScore;

  if (modifyUserAnswersColor) {
    if (rep === true) {
      // if answer is correct
      // Correct answer, compute points to add
      newCurrentScore = math.add(
        scoreForCurrentQuestionMatrix,
        globalSlidesInfo.currentScore
      );
      // color the answers green
      answerContainers[questionNumber].style.color = "forestgreen";
    } else {
      // if answer is wrong or blank
      // Wrong answer, compute points to remove
      newCurrentScore = math.add(
        globalSlidesInfo.currentScore,
        currentSlide.pointsIfWrongAnswer
      );
      // color the answers red
      answerContainers[questionNumber].style.color = "Crimson";
    }
  }

  globalSlidesInfo.currentScore = newCurrentScore;
  scoreForCurrentQuestion;

  return scoreForCurrentQuestion;
}

function computeNextSlideElementBasedOnScore() {
  const currentSlideElement = globalCurrentSlideElement;
  const currentSlide = globalCurrentSlideElement.getInitialObject();
  if (currentSlide.next !== undefined && currentSlide.next.type === "score") {
    // if the field next is of type passed/not passed
    if (
      currentSlide.next.passed !== undefined &&
      currentSlide.next.notPassed !== undefined
    ) {
      // keep track of user's answers
      let numCorrect = 0;

      if (currentSlide.correctAnswer !== undefined) {
        // It's a "quiz" slide. With one correct or multiple correct answers

        // find selected answer
        // const answerContainer = answerContainers[questionNumber];
        const answerContainer = document.getElementById(
          currentSlideElement.getAnswersDivId()
        );

        // If current question is of type unique correct answer
        if (!Array.isArray(currentSlide.correctAnswer)) {
          const userAnswer = (answerContainer.querySelector(selector) || {})
            .value;

          // if answer is correct

          if (userAnswer === currentSlide.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            const newCurrentScore = math.add(
              globalSlidesInfo.currentScore,
              currentSlide.pointsIfCorrectAnswer
            );

            globalSlidesInfo.currentScore = newCurrentScore;
          }
        }

        // If current question is of type multiple correct answers, get list of answers
        if (Array.isArray(currentSlide.correctAnswer)) {
          numCorrect += getScoreForCheckboxesQuiz(
            false,
            answerContainer,
            currentSlide
          );
        }
      }

      let nextElementId;
      if (numCorrect >= 0.5) {
        // Passed: learner has checked at least 50% of correct answer/answers
        nextElementId = currentSlide.next.passed;
      } else {
        // Not passed: learner has not checked at least 50% of correct answer/answers
        nextElementId = currentSlide.next.notPassed;
      }

      // As there is a map "id" --> slide element.
      // Get slide element from that map using id
      const nextElementObject = slideElementContainer.get(nextElementId);
      // Set next element previous as the current slide
      nextElementObject.setPreviousElement(currentSlideElement);

      // Set next element as current next
      currentSlideElement.setNextElement(nextElementObject);
    }
  }

  const nextSlide = currentSlideElement.getNextElement().getInitialObject();
  if (nextSlide !== undefined && isASuggestionMenu(nextSlide) === true) {
    // Compute score before creating suggestion slide

    computeScore();
    const nextSlideContent = computeSuggestionMenu(nextSlide);
    const newNextSlideHtmlObject = nextSlideContent.questionAndAnswersDiv;
    const newNextSlideElement = nextSlideContent.currentSlideElement;

    const currentSlideNextElement = currentSlideElement.getNextElement();
    newNextSlideElement.setNextElement(currentSlideNextElement);

    currentSlideNextElement.setPreviousElement(newNextSlideElement);

    currentSlideElement.setNextElement(newNextSlideElement);
    newNextSlideElement.setPreviousElement(currentSlideElement);

    const currentSlideNextElementId = currentSlideNextElement.getId();
    slideElementContainer.delete(
      currentSlideNextElementId,
      currentSlideNextElement
    );

    const newNextSlideElementInitialObject =
      newNextSlideElement.getInitialObject();
    if (newNextSlideElementInitialObject.nextButtonText !== undefined) {
      newNextSlideElement.setNextButtonText(
        newNextSlideElementInitialObject.nextButtonText
      );
    }

    // If there is a previous button text defined in config file, set it
    if (newNextSlideElementInitialObject.previousButtonText !== undefined) {
      newNextSlideElement.setPreviousButtonText(
        newNextSlideElementInitialObject.previousButtonText
      );
    }

    // If there is a "quiz score" button text defined in config file, set it
    if (newNextSlideElementInitialObject.quizScoreButtonText !== undefined) {
      newNextSlideElement.setQuizScoreButtonText(
        newNextSlideElementInitialObject.quizScoreButtonText
      );
    }

    const newNextSlideId = newNextSlideElement.getId();
    // As existing slide element has been removed from slideElementContainer,
    // add new next slide element
    slideElementContainer.set(newNextSlideId, newNextSlideElement);

    // add this question and its answers to the output
    quizContainer.appendChild(newNextSlideHtmlObject);

    showNumberOfAnswersOutOfTotal();
  }
}

function definePreviousAndNext() {
  slideElementContainer.forEach(function (currentSlideElement, id) {
    const currentSlideObject = currentSlideElement.getInitialObject();

    // If the field next is defined
    if (
      currentSlideObject.next !== undefined &&
      currentSlideObject.next.type === undefined
    ) {
      // If the field next is of type "specific"
      if (currentSlideObject.next.specific !== undefined) {
        const nextElementId = currentSlideObject.next.specific;

        // If next specific is "end". It means that this is a leaf.
        // This is a last slide, so, nextElementObject will be "undefined"
        let nextElementObject;

        // If next specific is set and is not "end". It means that this is not a leaf.
        // This is not a last slide, so, set its next element by getting its id
        if (nextElementId.toLowerCase() !== "end") {
          // As there is a map "id" --> slide element.
          // Get slide element from that map using id
          nextElementObject = slideElementContainer.get(nextElementId);
          // Set next element previous as the current slide
          nextElementObject.setPreviousElement(currentSlideElement);
        }

        // Set next element as current next
        currentSlideElement.setNextElement(nextElementObject);
      }
    }
  });
}

function isUndefined(variableToTest) {
  return undefined === variableToTest;
}

function buildSlides() {
  // for each question...
  let slidesIterator = 0; // iterator for questions

  for (let i = 0; i < allSlides.length; i++) {
    const currentSlide = allSlides[i];

    // Determine if it's the global info slide
    if (currentSlide.id === "global") {
      shufflingIsActivated = currentSlide.shuffleAnswers;
      globalSlidesInfo.initialCurrentScore = isUndefined(
        currentSlide.currentScore
      )
        ? 0
        : currentSlide.currentScore;
      globalSlidesInfo.currentScore = isUndefined(currentSlide.currentScore)
        ? 0
        : currentSlide.currentScore;
      globalSlidesInfo.scoreIntermediate = isUndefined(
        currentSlide.scoreIntermediate
      )
        ? 0
        : currentSlide.scoreIntermediate;
      globalSlidesInfo.scoreAdvanced = isUndefined(currentSlide.scoreAdvanced)
        ? 0
        : currentSlide.scoreAdvanced;
      globalSlidesInfo.coursesBeginner = currentSlide.coursesBeginner;
      globalSlidesInfo.coursesIntermediate = currentSlide.coursesIntermediate;
      globalSlidesInfo.coursesAdvanced = currentSlide.coursesAdvanced;
    } else {
      // It's not the global info slide

      const questionNumber = i;

      // By default it's a radio button
      let currentSlideElement = new RadioButtonQuizSlide();
      const questionAndAnswersDiv = document.createElement("DIV");
      let firstDiv;

      let pickedAnswers;
      const answersDivContent = document.createElement("DIV");

      // and for each available answer...
      let answersIterator = 0; // iterator for answers

      // If it is a suggestion menu, set suggestions based on score
      if (isASuggestionMenu(currentSlide)) {
        const answersContent = answersSlideContent(currentSlide);
        currentSlide.answers = answersContent.answers;
        currentSlide.next = answersContent.next;
      }

      if (currentSlide.answers !== undefined) {
        if (shufflingIsActivated) {
          // shuffle answers
          pickedAnswers = shuffle(Object.keys(currentSlide.answers));
        } else {
          pickedAnswers = Object.keys(currentSlide.answers);
        }
      }

      // Determine if it's a question or not
      if (
        currentSlide.next !== undefined &&
        currentSlide.next.type === "choice"
      ) {
        slidesIterator += 1;

        if (
          isAClickableMenu(currentSlide.answers) ||
          isASuggestionMenu(currentSlide)
        ) {
          // As it is a clickable menu, change its type
          currentSlideElement = new SuggestionMenuSlide();

          for (letter of pickedAnswers) {
            answersIterator += 1;

            const answerContent = currentSlideElement.getAnswerDiv(
              questionNumber,
              letter,
              answersIterator,
              currentSlide
            );

            if (answerContent !== undefined) {
              if (currentSlideElement.getIsAQuiz() === false) {
                // Set choices info
                currentSlideElement.addChoiceNextSlide(
                  letter,
                  currentSlide.next[letter]
                );
              }

              answersDivContent.appendChild(answerContent);

              firstDiv = currentSlideElement.getQuestionAndAnswersContent(
                slidesIterator,
                totalNumberOfQuestions,
                currentSlide,
                answersDivContent
              );
            }
          }
        } else {
          slidesIterator += 1;
          // It is not a question(quiz)
          currentSlideElement.setIsAQuiz(false);

          for (letter of pickedAnswers) {
            answersIterator += 1;

            const answerContent = currentSlideElement.getAnswerDiv(
              questionNumber,
              letter,
              answersIterator,
              currentSlide
            );

            answersDivContent.appendChild(answerContent);

            if (currentSlideElement.getIsAQuiz() === false) {
              // Set choices info
              currentSlideElement.addChoiceNextSlide(
                letter,
                currentSlide.next[letter]
              );
            }

            firstDiv = currentSlideElement.getQuestionAndAnswersContent(
              slidesIterator,
              totalNumberOfQuestions,
              currentSlide,
              answersDivContent
            );
          }
        }
      }

      if (currentSlide.correctAnswer !== undefined) {
        // It's a slide of type "quiz". With one correct or multiple correct answers

        slidesIterator += 1;

        // If correct answers is an array, it means that we have more than one correct answer
        // So we will create a checkbox
        if (Array.isArray(currentSlide.correctAnswer)) {
          // Current slide element is of type checkbox button, so we make a modification to reflect that
          currentSlideElement = new CheckBoxButtonQuizSlide();
        }
        for (letter of pickedAnswers) {
          answersIterator += 1;

          const answerContent = currentSlideElement.getAnswerDiv(
            questionNumber,
            letter,
            answersIterator,
            currentSlide
          );

          answersDivContent.appendChild(answerContent);
        }

        firstDiv = currentSlideElement.getQuestionAndAnswersContent(
          slidesIterator,
          totalNumberOfQuestions,
          currentSlide,
          answersDivContent
        );
      }

      if (currentSlide.img !== undefined) {
        // It's a slide of type "image only"
        currentSlideElement = new ImageOnlySlide();

        firstDiv = currentSlideElement.getContentDiv(
          currentSlide.img,
          currentSlide.imgLink
        );
      }

      // If there is an id in the config file, get and set it
      if (currentSlide.id !== undefined) {
        currentSlideElement.setId(currentSlide.id);
      }

      // If there is a next button text defined in config file, set it
      if (currentSlide.nextButtonText !== undefined) {
        currentSlideElement.setNextButtonText(currentSlide.nextButtonText);
      }

      // If there is a previous button text defined in config file, set it
      if (currentSlide.previousButtonText !== undefined) {
        currentSlideElement.setPreviousButtonText(
          currentSlide.previousButtonText
        );
      }

      // If there is a "quiz score" button text defined in config file, set it
      if (currentSlide.quizScoreButtonText !== undefined) {
        currentSlideElement.setQuizScoreButtonText(
          currentSlide.quizScoreButtonText
        );
      }

      // Retrieve the minimum score for the answer to be considered as "passed"
      if (currentSlide.minimumPassedScore !== undefined) {
        currentSlideElement.setMinimumPassedScore(
          currentSlide.minimumPassedScore
        );
      }

      // Retrieve the maximum score the learner can get if the question he answered is considered as "passed"
      if (currentSlide.pointsIfCorrectAnswer !== undefined) {
        currentSlideElement.setMaximumScoreIfCorrectAnswer(
          currentSlide.pointsIfCorrectAnswer
        );
      }

      currentSlideElement.setInitialObject(currentSlide);
      // Add current element into slide element container
      slideElementContainer.set(
        currentSlideElement.getId(),
        currentSlideElement
      );

      questionAndAnswersDiv.appendChild(firstDiv);

      // add this question and its answers to the output
      quizContainer.appendChild(questionAndAnswersDiv);
    }
  }

  const it = slideElementContainer.values();

  let result = it.next();
  while (!result.done) {
    const currentSlideElement = result.value;
    result = it.next();
    const nextSlideElement = result.value;

    currentSlideElement.setNextElement(nextSlideElement);

    if (nextSlideElement !== undefined) {
      nextSlideElement.setPreviousElement(currentSlideElement);
    }
  }

  // Set current slide element as the first element of the map
  globalCurrentSlideElement = Array.from(slideElementContainer)[0][1];

  definePreviousAndNext();
  defineQuestionsOrder();
}

function computeScore() {
  // Reset number of correct answers
  numberOfCorrectAnswers = 0;
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // Initialize the participant's current score
  globalSlidesInfo.currentScore = globalSlidesInfo.initialCurrentScore;

  for (
    let questionNumber = 0;
    questionNumber < questionsToBeAnswered.length;
    questionNumber++
  ) {
    let currentSlide = questionsToBeAnswered[questionNumber];
    if (
      currentSlide.correctAnswer !== undefined &&
      visitedQuestions.has(currentSlide.id)
    ) {
      // It's a "quiz" slide. With one correct or multiple correct answers
      // And it is a slide that has been shown to the learner

      // find selected answer
      const answerContainer = answerContainers[questionNumber];

      // If current question is of type unique correct answer
      if (!Array.isArray(currentSlide.correctAnswer)) {
        const userAnswer = (answerContainer.querySelector(selector) || {})
          .value;

        let newCurrentScore;

        // if answer is correct
        if (userAnswer === currentSlide.correctAnswer) {
          // add to the number of correct answers
          numberOfCorrectAnswers++;

          // color the answers green
          answerContainers[questionNumber].style.color = "forestgreen";

          // Correct answer, compute points to add
          newCurrentScore = math.add(
            globalSlidesInfo.currentScore,
            currentSlide.pointsIfCorrectAnswer
          );
        }

        // if answer is wrong or blank
        else {
          // color the answers red
          answerContainers[questionNumber].style.color = "Crimson";

          // Wrong answer, compute points to remove
          newCurrentScore = math.add(
            globalSlidesInfo.currentScore,
            currentSlide.pointsIfWrongAnswer
          );
        }

        // If a value of the current question matrix is negative,
        // Just set that value to 0. If we really want to add a negative value
        // to the score, that will be done using the "pointsIfWrongAnswer" property
        const matrixIsNegative = math.smaller(newCurrentScore, 0);
        for (let i = 0; i < matrixIsNegative.length; i++) {
          if (matrixIsNegative[i] === true) {
            newCurrentScore[i] = 0;
          }
        }

        globalSlidesInfo.currentScore = newCurrentScore;

        const questionAndUserAnswer = {
          currentSlide,
          userAnswer: userAnswer === undefined ? "undefined" : userAnswer,
        };

        questionsAndUserAnswers.push(questionAndUserAnswer);
      }

      // If current question is of type multiple correct answers, get list of answers
      if (Array.isArray(currentSlide.correctAnswer)) {
        let scoreForCheckbox = getScoreForCheckboxesQuiz(
          true,
          answerContainer,
          currentSlide,
          answerContainers,
          questionNumber
        );
        numberOfCorrectAnswers += scoreForCheckbox;
      }
    }
  }
}

function showNumberOfAnswersOutOfTotal() {
  // show number of correct answers out of total
  var dt = new Date();
  resultsContainer.innerHTML = `Your score is <b>${numberOfCorrectAnswers.toFixed(
    2
  )}</b>
         correct answers out of <b>${
           visitedQuestions.size
         }</b> questions | <font size="0.4rem">${dt.toLocaleString()}</font>
         <hr class="fitness" /><br /><a href="/fitness/lectures/html/">See all FitNESS lectures</a>`;
}

function showResults() {
  computeScore();
  showNumberOfAnswersOutOfTotal();
  displaySendResultsByEmailButtonIfNecessary();
  createMenuBasedOnLearnerAnswers();
  showNextSlide();
}

function displaySendResultsByEmailButtonIfNecessary() {
  var containerElement = document.getElementById("submit-results-proposal");

  if (canBeSentByEmail === "true") {
    containerElement.style.display = "block"; // Show the container element
  } else {
    containerElement.style.display = "none"; // Hide the container element
  }
}

function setNavigationButtonsText() {
  previousButton.innerHTML = globalCurrentSlideElement.getPreviousButtonText();
  nextButton.innerHTML = globalCurrentSlideElement.getNextButtonText();
  submitButton.innerHTML = globalCurrentSlideElement.getQuizScoreButtonText();
}

function showSlide(n, slideElementId) {
  currentSlide = n;
  globalCurrentSlideElement = slideElementContainer.get(slideElementId);

  setNavigationButtonsText();

  const htmlObjectId = globalCurrentSlideElement.getHtmlObjectId();
  const currentHtmlObject = document.getElementById(htmlObjectId);

  currentHtmlObject.classList.add("active-slide");

  if (globalCurrentSlideElement.getPreviousElement() === undefined) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }

  if (globalCurrentSlideElement.getNextElement() === undefined) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }

  if (globalCurrentSlideElement.getIsAQuiz() === true) {
    // Tag current slide as visited if it is a question slide
    visitedQuestions.add(slideElementId);
  }
}

function showNextSlide() {
  // compute next slide based on score
  computeNextSlideElementBasedOnScore();
  computeNextSlideElementBasedOnChoice();

  const currentHtmlObject = document.getElementById(
    globalCurrentSlideElement.getHtmlObjectId()
  );
  currentHtmlObject.classList.remove("active-slide");

  const nextSlideElementId = globalCurrentSlideElement.getNextElement().getId();

  // Set next element previous as the current slide
  globalCurrentSlideElement
    .getNextElement()
    .setPreviousElement(globalCurrentSlideElement);

  showSlide(currentSlide + 1, nextSlideElementId);
}

function showPreviousSlide() {
  const currentHtmlObject = document.getElementById(
    globalCurrentSlideElement.getHtmlObjectId()
  );
  currentHtmlObject.classList.remove("active-slide");

  const previousSlideElementId = globalCurrentSlideElement
    .getPreviousElement()
    .getId();

  // Set previous next element as current slide
  globalCurrentSlideElement
    .getPreviousElement()
    .setNextElement(globalCurrentSlideElement);

  if (globalCurrentSlideElement.getIsAQuiz() === true) {
    // Before showing previous slide (before changing current global slide element)
    // Untag current slide as unvisited if it is a question slide
    visitedQuestions.delete(globalCurrentSlideElement.getId());
  }
  showSlide(currentSlide - 1, previousSlideElementId);
}

function getLearnerLevels(suggestions) {
  const learnerLevels = [];

  // If true, it means that the learner is a beginner
  // Otherwise, he is not a beginner
  const isBeginner = math.smaller(
    globalSlidesInfo.currentScore,
    suggestions.scoreIntermediate
  );

  const isAdvanced = math.largerEq(
    globalSlidesInfo.currentScore,
    suggestions.scoreAdvanced
  );

  const currentScoreGreaterThanIntermediate = math.largerEq(
    globalSlidesInfo.currentScore,
    suggestions.scoreIntermediate
  );

  const currentScoreLessThanAdvanced = math.smaller(
    globalSlidesInfo.currentScore,
    suggestions.scoreAdvanced
  );

  const isIntermediate = math.and(
    currentScoreGreaterThanIntermediate,
    currentScoreLessThanAdvanced
  );

  learnerLevels.push(isBeginner);
  learnerLevels.push(isIntermediate);
  learnerLevels.push(isAdvanced);

  return learnerLevels;
}

function setSuggestionMenuProperties(text, link, i) {
  const answers = {};
  const next = {};
  if (stringStartsWithHttp(link)) {
    // Link starts with http, it will be a clickable link
    // By default, the learner has a beginner level, so we will suggest the beginner course

    answers[i] = {
      text: text,
      link: link,
    };
  } else {
    // Link does not start with http, it will be an internal link.
    // An internal link is a link that points to another slide from the config file

    answers[i] = {
      text: text,
    };

    next[i] = {
      i: link,
    };
  }

  const objectToReturn = {
    answers,
    link,
  };

  return objectToReturn;
}

function answersSlideContent(suggestions) {
  const answers = {};
  const next = {
    type: "choice",
  };

  const learnerLevels = getLearnerLevels(suggestions);
  const beginnerLevel = learnerLevels[0];
  const intermediateLevel = learnerLevels[1];
  const advancedLevel = learnerLevels[2];

  const currentScore = globalSlidesInfo.currentScore;

  for (let i = 0; i < beginnerLevel.length; i++) {
    if (currentScore[i] >= 0) {
      const suggestionMenuProperties = setSuggestionMenuProperties(
        suggestions.coursesBeginner.texts[i],
        suggestions.coursesBeginner.links[i],
        i
      );

      answers[i] = suggestionMenuProperties.answers[i];
      next[i] = suggestionMenuProperties.link;
    }
  }

  for (let i = 0; i < intermediateLevel.length; i++) {
    if (intermediateLevel[i] === true && currentScore[i] >= 0) {
      const suggestionMenuProperties = setSuggestionMenuProperties(
        suggestions.coursesIntermediate.texts[i],
        suggestions.coursesIntermediate.links[i],
        i
      );

      answers[i] = suggestionMenuProperties.answers[i];
      next[i] = suggestionMenuProperties.link;
    }
  }

  for (let i = 0; i < advancedLevel.length; i++) {
    if (advancedLevel[i] === true && currentScore[i] >= 0) {
      const suggestionMenuProperties = setSuggestionMenuProperties(
        suggestions.coursesAdvanced.texts[i],
        suggestions.coursesAdvanced.links[i],
        i
      );

      answers[i] = suggestionMenuProperties.answers[i];
      next[i] = suggestionMenuProperties.link;
    }
  }

  // Answers slide representing suggestions
  const answersContent = {
    answers,
    next,
  };

  return answersContent;
}

function computeSuggestionMenu(slide) {
  const currentSlide = slide;
  const answersContent = answersSlideContent(currentSlide);
  currentSlide.answers = answersContent.answers;
  currentSlide.next = answersContent.next;

  let currentSlideElement = new SuggestionMenuSlide();

  let pickedAnswers;
  if (shufflingIsActivated) {
    pickedAnswers = shuffle(Object.keys(currentSlide.answers));
  } else {
    pickedAnswers = Object.keys(currentSlide.answers);
  }

  const answersDivContent = document.createElement("DIV");
  let firstDiv;
  const questionAndAnswersDiv = document.createElement("DIV");

  const randomInt = getRandomInt(9999);
  let slidesIterator = randomInt;
  let answersIterator = randomInt;
  let questionNumber = randomInt;

  for (letter of pickedAnswers) {
    const answerContent = currentSlideElement.getAnswerDiv(
      questionNumber,
      letter,
      answersIterator,
      currentSlide
    );

    if (answerContent !== undefined) {
      firstDiv = currentSlideElement.getQuestionAndAnswersContent(
        slidesIterator,
        totalNumberOfQuestions,
        currentSlide,
        answersDivContent
      );
      answersDivContent.appendChild(answerContent);
    }
  }

  questionAndAnswersDiv.appendChild(firstDiv);
  currentSlideElement.setInitialObject(currentSlide);

  return { questionAndAnswersDiv, currentSlideElement };
}

function createMenuBasedOnLearnerAnswers() {
  const currentSlide = answersSlideContent(globalSlidesInfo);

  // Set current slide text and id
  currentSlide.question = {
    text: "Thank you for taking a few minutes to complete this survey. Here are the courses we recommend",
  };
  currentSlide.id = suggestionMenuId;

  let currentSlideElement = new SuggestionMenuSlide();

  let pickedAnswers;
  if (shufflingIsActivated) {
    pickedAnswers = shuffle(Object.keys(currentSlide.answers));
  } else {
    pickedAnswers = Object.keys(currentSlide.answers);
  }

  const answersDivContent = document.createElement("DIV");
  let firstDiv;
  const questionAndAnswersDiv = document.createElement("DIV");

  let slidesIterator = 9999;
  let answersIterator = 9999;
  let questionNumber = 9999;

  for (letter of pickedAnswers) {
    const answerContent = currentSlideElement.getAnswerDiv(
      questionNumber,
      letter,
      answersIterator,
      currentSlide
    );

    if (answerContent !== undefined) {
      firstDiv = currentSlideElement.getQuestionAndAnswersContent(
        slidesIterator,
        totalNumberOfQuestions,
        currentSlide,
        answersDivContent
      );
      answersDivContent.appendChild(answerContent);
    }
  }

  // If there is no id in the config file, create one
  if (currentSlide.id !== undefined) {
    currentSlideElement.setId(currentSlide.id);
  }

  questionAndAnswersDiv.appendChild(firstDiv);
  quizContainer.appendChild(questionAndAnswersDiv);

  // As we are on the last slide, set the next slide to be the menu based on learner answers slide
  globalCurrentSlideElement.setNextElement(currentSlideElement);
  globalCurrentSlideElement.setNextButtonText("Next");
  nextButton.innerHTML = globalCurrentSlideElement.getNextButtonText();

  currentSlideElement.setInitialObject(currentSlide);
  // Add current element into slide element container
  slideElementContainer.set(currentSlideElement.getId(), currentSlideElement);
}

// main
function DoQuiz() {
  for (let i = 0; i < allSlides.length; i++) {
    // If correct answer is of type array and there is only one correct answer,
    // then transform that array into a string
    if (
      Array.isArray(allSlides[i].correctAnswer) &&
      allSlides[i].correctAnswer.length === 1
    ) {
      allSlides[i].correctAnswer = allSlides[i].correctAnswer[0];
    }

    // If the field correct answer is defined for the slide, then we should compute a score
    // for this slide
    if (allSlides[i].correctAnswer !== undefined) {
      totalNumberOfQuestions = totalNumberOfQuestions + 1;
      questionsToBeAnswered.push(allSlides[i]);
    }
  }

  // Kick things off
  buildSlides();
  // Pagination
  previousButton = document.getElementById("previous");
  nextButton = document.getElementById("next");
  slides = document.querySelectorAll(".slide");
  // Show the first slide
  const currentSlideElementId = globalCurrentSlideElement.getId();
  showSlide(currentSlide, currentSlideElementId);
  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}

// main ----------------------------
const quizContainer = document.getElementById("quiz");

const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
let previousButton;
let nextButton;
let slides;
let allSlides;
let questionsToBeAnswered = [];
let currentSlide = 0;
let globalCurrentSlideElement;
let totalNumberOfQuestions = 0;

const selector = `input[type=radio]:checked`;
const allPossibleAnswersSelector = `input[type=checkbox]`;

// The number of correct answers given by the learner
// keep track of learner's answers
let numberOfCorrectAnswers = 0;

// Variable to count the number of questions showed to the learner
// We will use a set, so we can count the unique number of slide-id (with question)
// That have been shown to the learner
let visitedQuestions = new Set();

// Object which contains all slides elements
// slide element id --> slide element object
const slideElementContainer = new Map();

// Variable to store global information taken from the settings file
const globalSlidesInfo = {};

// Variable to store the shuffle state.
// If activated, for each slide, shuffle we be applied on answers
// If not activated, shuffle won't be applied for each slide
let shufflingIsActivated = false;

// Reserved keywords
// Reserved keyword: this menu id should not be used in the config file
const suggestionMenuId = "menu-based-on-learner-answers";

// Table containing questions and user answers
let questionsAndUserAnswers = [];

// indicates whether the result of the questionnaire is to be sent by e-mail or not. If so, a button allows you to
// do so, once you have clicked on the button that allows to view the results.
let canBeSentByEmail = false;

// Read data when state is ready
document.onreadystatechange = async function () {
  if (document.readyState === "complete") {
    // configurationData is a variable from configuration file.
    allSlides = configurationData;
    DoQuiz();
  }
};
