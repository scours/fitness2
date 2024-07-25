/*
 * File: DecisionMaking.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Wednesday, 3rd July 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Thursday, 25th July 2024
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
        let value = assignation.allSpaces.get(match);
        if (value == undefined || value == 0) {
          value = match;
        }
        return value;
      });

      // Check if the expression is a comparison and handle it appropriately
      let comparisonMatch = expression.match(/(.+)(==|===)(.+)/);
      if (comparisonMatch) {
        let left = comparisonMatch[1].trim();
        let operator = comparisonMatch[2];
        let right = comparisonMatch[3].trim();

        // Determine if left and right are numbers
        const isLeftNumeric = !isNaN(parseFloat(left)) && isFinite(left);
        const isRightNumeric = !isNaN(parseFloat(right)) && isFinite(right);

        // Function to handle cases where string begins with double quotes
        const normalizeString = (str) => {
          // Remove leading double quotes
          if (str.startsWith('""')) {
            return str.slice(2, -2); // Assuming the string ends with double quotes as well
          } else if (str.startsWith('"')) {
            return str.slice(1, -1);
          }
          return str;
        };

        left = normalizeString(left);
        right = normalizeString(right);

        // If both sides are numbers, use math.evaluate
        if (isLeftNumeric && isRightNumeric) {
          const result = math.evaluate(expression);
          console.log(
            `Condition: ${this.condition}, Evaluated Result: ${result}`
          );
          return result;
        } else {
          // For non-numeric comparisons, convert to strings and use JavaScript evaluation
          if (!isLeftNumeric) {
            left = `"${left.replace(/"/g, '\\"')}"`;
          }
          if (!isRightNumeric) {
            right = `"${right.replace(/"/g, '\\"')}"`;
          }
          if (operator === "==") {
            const result = eval(`${left} == ${right}`);
            console.log(
              `Condition: ${this.condition}, Evaluated Result: ${result}`
            );
            return result;
          } else if (operator === "===") {
            const result = eval(`${left} === ${right}`);
            console.log(
              `Condition: ${this.condition}, Evaluated Result: ${result}`
            );
            return result;
          }
        }
      }

      // If we reach here, it means the expression was not a comparison
      console.log(`Condition: ${this.condition}, Evaluated Result: false`);
      return false;
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
