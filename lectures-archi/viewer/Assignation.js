/*
 * File: Assignation.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Friday, 16th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Thursday, 18th July 2024
 * Modified By: Steward OUADI
 */

class Assignation {
  constructor(hash, lineContent, variableToSet) {
    this.hash = hash; // An object identifier
    this.lineContent = lineContent; // The content of the line
    this.variableToSet = variableToSet; // Variable that will be set

    // Initialize variable spaces
    this.user = new VariableSpace();
    this.session = new VariableSpace();
    this.global = new VariableSpace();
    this.allSpaces = new VariableSpace();
  }

  set(property, expression) {
    const parts = property.split(".");
    let space, name;

    if (parts.length === 2) {
      [space, name] = parts;
    } else {
      space = "allSpaces"; // Default to allSpaces if no space is defined
      name = parts[0];
    }

    const value = this.evaluateExpression(expression, space);
    this[space].set(name, value);
  }

  evaluateExpression(expression, space) {
    try {
      // Replace variable references with their values
      expression = expression.replace(
        /\b(user|session|global)\.([a-zA-Z0-9_]+)\b/g,
        (match, p1, p2) => {
          return this[p1].get(p2);
        }
      );

      // Handle entire word variable references without a space
      expression = expression.replace(/\b([a-zA-Z0-9_]+)\b/g, (match) => {
        // Skip if it looks like a number or contains a "."
        if (!isNaN(match) || match.includes(".")) {
          return match;
        }
        // Return the value from allSpaces if it exists
        const value = this.allSpaces.get(match);
        return value !== undefined ? value : match;
      });

      // Handle special cases for non-numeric expressions
      if (/^[0-9]+x[0-9]+$/.test(expression)) {
        return expression; // Return resolution strings directly
      }

      return math.evaluate(expression); // Use mathjs to evaluate the expression
    } catch (error) {
      console.error(`Error evaluating expression: ${expression}`, error);
      return 0; // Return 0 if evaluation fails
    }
  }
}
