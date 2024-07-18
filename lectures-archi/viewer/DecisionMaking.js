/*
 * File: DecisionMaking.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Wednesday, 3rd July 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Thursday, 18th July 2024
 * Modified By: Steward OUADI
 */

class DecisionMaking {
  constructor(
    hash,
    lineContent,
    condition,
    trueInstruction,
    falseInstruction,
    lineNumber
  ) {
    this.hash = hash;
    this.lineContent = lineContent;
    this.condition = condition;
    this.trueInstruction = trueInstruction;
    this.falseInstruction = falseInstruction;
    this.lineNumber = lineNumber;
  }

  evaluate(assignation) {
    try {
      let expression = this.condition.replace(
        /\b(user|session|global)\.([a-zA-Z0-9_]+)\b/g,
        (match, p1, p2) => {
          return assignation[p1].get(p2);
        }
      );

      // Handle entire word variable references without a space
      expression = expression.replace(/\b([a-zA-Z0-9_]+)\b/g, (match) => {
        // Skip if it looks like a number or contains a "."
        if (!isNaN(match) || match.includes(".")) {
          return match;
        }
        // Return the value from allSpaces if it exists
        const value = assignation.allSpaces.get(match);
        return value !== undefined ? value : match;
      });

      const result = math.evaluate(expression);
      console.log(`Condition: ${this.condition}, Evaluated Result: ${result}`);
      return result;
    } catch (error) {
      console.error(`Error evaluating condition: ${this.condition}`, error);
      return false;
    }
  }

  execute(assignation) {
    const conditionResult = this.evaluate(assignation);
    const instruction = conditionResult
      ? this.trueInstruction
      : this.falseInstruction;
    console.log(`Executing instruction: ${instruction}`);
    return instruction;
  }
}
