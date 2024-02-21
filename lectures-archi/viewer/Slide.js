/*
 * File: Slide.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 16th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 21st February 2024
 * Modified By: Steward OUADI
 */
class Slide {
  constructor(hash, lineContent, link, slideToShow) {
    this.hash = hash; // An object identifier
    this.lineContent = lineContent; // The content of the line
    this.link = link; // Can be URL or internalLink, if slide defined in manifest file and created dynamically on the fly
    this.slideToShow = slideToShow; // slides to be shown, 3rd argument. If there is no third argument, show every slide.
  }
}
