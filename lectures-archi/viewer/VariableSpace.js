/*
 * File: VariableSpace.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 25th June 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Monday, 1st July 2024
 * Modified By: Steward OUADI
 */

class VariableSpace {
  constructor() {
    this.variables = {};
  }

  get(name) {
    return this.variables[name] !== undefined ? this.variables[name] : 0;
  }

  set(name, value) {
    this.variables[name] = value;
  }
}
