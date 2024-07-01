/*
 * File: Jump.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 16th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 1st July 2024
 * Modified By: Steward OUADI
 */

class Jump {
  constructor(hash, lineContent, labelName) {
    this.hash = hash; // An object identifier
    this.lineContent = lineContent; // The content of the line
    this.labelName = labelName;
  }

  // Method to jump to a slide by labelName
  static goto(labelName, slides) {
    for (const slide of slides) {
      if (slide.labelName === labelName) {
        Jump.displaySlide(slide);
        break;
      }
    }
  }

  // Static method to display the slide
  static displaySlide(slide) {
    console.log(`Jumping to slide: ${slide.url} at ${slide.time}`);
    // Logic to display the slide can be added here
  }
}
