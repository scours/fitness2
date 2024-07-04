/*
 * File: GotoInstruction.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Thursday, 4th July 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Thursday, 4th July 2024
 * Modified By: Steward OUADI
 */

class GotoInstruction {
  constructor(hash, lineContent, targetLabel, lineNumber) {
    this.hash = hash;
    this.lineContent = lineContent;
    this.targetLabel = targetLabel;
    this.lineNumber = lineNumber;
  }
}
