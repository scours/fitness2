/*
 * File: DecisionMaking.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Wednesday, 3rd July 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Wednesday, 3rd July 2024
 * Modified By: Steward OUADI
 */

class DecisionMaking {
  constructor(hash, lineContent, condition, trueLabel, falseLabel, lineNumber) {
    this.hash = hash;
    this.lineContent = lineContent;
    this.condition = condition;
    this.trueLabel = trueLabel;
    this.falseLabel = falseLabel;
    this.lineNumber = lineNumber;
  }

  evaluate(assignation) {
    try {
      const expression = this.condition.replace(
        /\b(user|session|global)\.([a-zA-Z0-9_]+)\b/g,
        (match, p1, p2) => {
          return assignation[p1].get(p2);
        }
      );
      const result = math.evaluate(expression);
      console.log(`Condition: ${this.condition}, Evaluated Result: ${result}`);
      return result;
    } catch (error) {
      console.error(`Error evaluating condition: ${this.condition}`, error);
      return false;
    }
  }
}

class GotoInstruction {
  constructor(hash, lineContent, targetLabel, lineNumber) {
    this.hash = hash;
    this.lineContent = lineContent;
    this.targetLabel = targetLabel;
    this.lineNumber = lineNumber;
  }
}
