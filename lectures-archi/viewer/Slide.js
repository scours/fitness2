/*
 * File: Slide.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 16th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 1st July 2024
 * Modified By: Steward OUADI
 */
class Slide {
  constructor(
    hash,
    lineContent,
    link,
    slideNumberToDisplay,
    markdownContent,
    lineNumber,
    labelName = null
  ) {
    this.hash = hash; // An object identifier
    this.lineContent = lineContent; // The content of the line
    this.link = link; // Can be URL or internalLink, if slide defined in manifest file and created dynamically on the fly
    this.slideNumberToDisplay = slideNumberToDisplay; // slide number to be shown
    this.markdownContent = markdownContent; // The markdown content of the slide
    this.lineNumber = lineNumber; // line number of the beginning of the slide definition in manifest file
    this.labelName = labelName;
  }
}
