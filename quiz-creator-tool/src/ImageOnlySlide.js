/*
 * File: CheckBoxButtonQuizSlide.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Wednesday, 14th April 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 23rd June 2021
 * Modified By: Steward OUADI
 */
class ImageOnlySlide extends GlobalSlide {
  constructor() {
    super(); // call parent constructor
    this.type = "imageOnly";
    this.isAQuiz = false;
  }

  getContentDiv(imgSource, imgLink) {
    const firstDiv = document.createElement("DIV");
    firstDiv.classList.add("slide");
    this.htmlObjectId = this.getComputedIdentifier();
    firstDiv.id = this.htmlObjectId;

    firstDiv.appendChild(
      this.getImageElement(imgSource, imgLink, "allWidthResponsive")
    );

    return firstDiv;
  }
}
