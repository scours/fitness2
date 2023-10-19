/*
 * File: utils.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Wednesday, 16th December 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Friday, 18th December 2020
 * Modified By: Steward OUADI
 * -----
 */

// File containing useful global functions

// Return database data based on json file path.
// Online mode: we are in this mode, when the fitness platform is running on a web server
// Offline mode: we are in this mode, when the fitness platform is not running on a web server
async function getDatabaseData(jsonPath) {
  let databaseData;
  await fetch(jsonPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      return response.json();
    })
    .then((json) => {
      // Online mode database data is filled using a .json file
      databaseData = json;
    })
    .catch(async (error) => {
      // Offline mode: database data is filled using a variable in a .js fil
      databaseData = jsonData;
      console.error(
        'Data will be taken from .js file. There has been a problem with your fetch operation:',
        error
      );
    });

  return databaseData;
}
