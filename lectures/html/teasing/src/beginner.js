/*
 * File: beginner.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Thursday, 17th December 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Friday, 18th December 2020
 * Modified By: Steward OUADI
 * -----
 */
(function () {
  // Test for bginners - designed by Olivier Vitrac - rev. $ 2020-12-04 $

  // Functions

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

  function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    // for each question...
    var iQ = 0;
    nQ = myQuestions.length;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      iQ += 1;
      // variable to store the list of possible answers
      const answers = [];
      // shuffle answers
      const pickedAnswers = shuffle(Object.keys(currentQuestion.answers));
      // and for each available answer...
      var iA = 0;
      for (letter of pickedAnswers) {
        iA += 1;
        // ...add an HTML radio button
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${iA.toString()}.  
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }
      // add this question and its answers to the output
      output.push(
        `<div class="slide">
              <div class="question"><kbd><b>Question ${iQ.toString()}/${nQ.toString()}</b></kbd><br /> ${
          currentQuestion.question
        } </div>
              <div class="answers"> ${answers.join('')} </div>
            </div>`
      );
    });
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    let numCorrect = 0;
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        // color the answers green
        answerContainers[questionNumber].style.color = 'forestgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'Crimson';
      }
    });
    // show number of correct answers out of total
    var dt = new Date();
    resultsContainer.innerHTML = `Your score is <b>${numCorrect}</b>
         correct answers out of <b>${
           myQuestions.length
         }</b> questions | <font size="0.4rem">${dt.toLocaleString()}</font>
         <hr class="fitness" /><br />Use the button <kbd>Previous Question</kbd> to review your answers.<br /><a href="/fitness/lectures/html/">I want to learn, please let me in</a>
         `;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // main
  function DoQuiz() {
    // Shuffle questions (not the answers)
    myQuestions = shuffle(myQuestions);
    // Kick things off
    buildQuiz();
    // Pagination
    previousButton = document.getElementById('previous');
    nextButton = document.getElementById('next');
    slides = document.querySelectorAll('.slide');
    // Show the first slide
    showSlide(currentSlide);
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
  }

  // main ----------------------------
  const quizURL = 'src/beginner.json';

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  var previousButton, nextButton, slides, myQuestions;
  let currentSlide = 0;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      myQuestions = JSON.parse(this.responseText);
    } else {
      myQuestions = await getDatabaseData(quizURL);
    }
    DoQuiz();
  };
  xmlhttp.open('GET', quizURL, true);
  xmlhttp.send();
})();
