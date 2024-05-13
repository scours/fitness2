/*
 * File: VirtualSlide.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 16th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 13th May 2024
 * Modified By: Steward OUADI
 */
class VirtualSlide {
  constructor(hash, labelName, slideDefinition, slideContent, lineNumber) {
    this.hash = hash; // An object identifier
    this.labelName = labelName;
    this.slideDefinition = slideDefinition;
    this.slideContent = slideContent; // content to display
    this.lineNumber = lineNumber; // line number of the beginning of the virtual slide definition in manifest file
  }
}
