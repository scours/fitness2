/*
 * File: utils.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Friday, 28th May 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Thursday, 10th June 2021
 * Modified By: Steward OUADI
 */

/**
 * Checks if a string starts with "http".
 * Also verify that string is not "undefined" and trimmed string is not empty
 * @param {*} string : string to be verified
 * @returns true if the string starts with "http". False otherwise.
 */
function stringStartsWithHttp(string) {
  let startsWithHttp = false;
  if (
    string !== undefined &&
    string.trim().length >= 1 &&
    string.startsWith("http") === true
  ) {
    startsWithHttp = true;
  }
  return startsWithHttp;
}
/**
 * A clickable menu is menu on which when we click, a new tab is open and we are redirected to that tab
 * To get that information, we will be looking at the "answers" object of the slide
 * @param {*} answers: a config file slide's answers property
 * @returns true if the slide is a clickable menu. false otherwise.
 */
function isAClickableMenu(answers) {
  // return str.startsWith("http");
  let isAClickableMenuResult = false;

  const pickedAnswers = Object.keys(answers);
  for (letter of pickedAnswers) {
    // Set the result to true if one of the answer link starts with http
    if (
      answers[letter].link !== undefined &&
      answers[letter].link.startsWith("http") === true
    ) {
      isAClickableMenuResult = true;
    }
  }
  return isAClickableMenuResult;
}

/**
 * A suggestion menu is menu on which we have different paths based on levels: beginner, intermediate, advanced.
 * The final suggestion shown to the user is based on his score.
 * To get that information, we will be looking at the "slide" object
 * @param {*} slide: a slide from the config file
 * @returns true if the slide is a suggestion menu. false otherwise.
 */
function isASuggestionMenu(slide) {
  return slide.hasOwnProperty("scoreIntermediate");
}

/**
 * Get random integer
 * @param {*} max : maximum int that can be returned (excluded)
 * @returns random int between 0 and max excluded
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
