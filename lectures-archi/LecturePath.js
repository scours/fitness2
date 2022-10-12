/*
 * File: LecturePath.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Wednesday, 21st September 2022
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 21st September 2022
 * Modified By: Steward OUADI
 */

class LecturePath {
  parentName;
  name;
  isFile;
  children = new Map();
  /**
   * Create a LecturePath object with the following properties
   * @param {*} parentName: the name of the parent of this lecture
   * @param {*} name: the name of the current lecture
   * @param {*} isFile: boolean value to indicate whether it is a file or not.
   *            It's either a file or a folder
   * @param {*} children: the children (LecturePath) of the current LecturePath
   */
  constructor(parentName, name, isFile, children) {
    this.parentName = parentName;
    this.name = name;
    this.isFile = isFile;
    if (children !== undefined) {
      this.children.set(children.name, children);
    }
  }

  /**
   * Add a child to the current LecturePath children Map
   * @param {*} child: the child to add
   */
  addChild(child) {
    if (child !== undefined) {
      this.children.set(child.name, child);
    }
  }
}
