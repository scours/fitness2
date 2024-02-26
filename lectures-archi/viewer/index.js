/*
 * File: index.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 20th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 26th February 2024
 * Modified By: Steward OUADI
 */

/**
 * Removes inline comments from a given line of text.
 * Inline comments are assumed to start with "//" outside of URLs.
 *
 * @param {string} line - The line of text from which to remove the comment.
 * @return {string} - The line of text without the inline comment.
 */
function removeInlineComment(line) {
  // Find the index of "//" that appears outside of URLs. Assuming URLs start with "http".
  // This simplistic approach looks for "//" that is not immediately preceded by ":".
  const commentIndex = line.search(/(?<!:)\s*\/\//);

  // If "//" is found and it's not part of a URL, trim from the comment start to the line's end.
  if (commentIndex !== -1) {
    return line.substring(0, commentIndex).trim();
  }

  // If no inline comment is found, or it's part of a URL, return the line unchanged.
  return line;
}

function evaluateWithMathJs(expression) {
  let resultToReturn;

  resultToReturn = math.evaluate(expression);
  if (resultToReturn["_data"] !== undefined) {
    resultToReturn = resultToReturn["_data"];
  }
  // evaluateResult = math.evaluate(slideNumberIfAny)["_data"];

  return resultToReturn;
}

/**
 * Asynchronously parses the manifest content, creating Slide objects for each valid line.
 * This function ensures lines not starting with "slide" are ignored and processes each valid line to create Slide objects,
 * handling both single slide numbers and ranges.
 *
 * @param {string} manifestContent The full text content of the manifest file.
 * @returns {Promise<Slide[]>} A promise that resolves to an array of Slide objects.
 */
async function parseManifest(manifestContent) {
  const slides = []; // Initialize an array to store Slide objects.
  const lines = manifestContent.split("\n"); // Split the manifest content into individual lines.

  for (let index = 0; index < lines.length; index++) {
    let line = lines[index];

    // Skip processing if the line does not start with "slide".
    if (!line.trim().startsWith("slide")) continue;

    // Remove any inline comment from the line
    line = removeInlineComment(line);
    // Regular expression to match valid slide entries, excluding inline comments.
    const regex = /^(slide)\s+([^\s]+)\s*(.*)$/;
    const match = line.match(regex);

    if (match) {
      const [, , link, slideNumberIfAny] = match; // Destructure the URL and slide number or range from the match.

      // Check if there's a specified slide number or range.
      if (slideNumberIfAny) {
        try {
          // let result = math.evaluate(slideNumberIfAny)["_data"];
          let result = evaluateWithMathJs(slideNumberIfAny);

          if (!Array.isArray(result)) {
            result = [result];
          }

          // Flatten the result to handle any nested arrays
          result = result.flat();

          for (let num of result) {
            const hash = await generateHash(index, line, num);
            slides.push(new Slide(hash, line, link, num));
          }
        } catch (error) {
          console.error(
            `Error evaluating slideNumberIfAny '${slideNumberIfAny}': ${error}`
          );
        }
      } else {
        // Handle lines without a specific slide number or range.
        const hash = await generateHash(index, line, "");
        slides.push(new Slide(hash, line, link, ""));
      }
    }
  }

  return slides; // Return the array of Slide objects.
}

/**
 * Generates a unique hash for each slide using SHA-256 encryption.
 * This function ensures each Slide object has a unique identifier.
 *
 * @param {number} lineNumber The current line number being processed.
 * @param {string} lineContent The content of the line being processed.
 * @param {number|string} slideNumber The slide number or range being processed.
 * @returns {Promise<string>} A promise that resolves to a hexadecimal hash string.
 */
async function generateHash(lineNumber, lineContent, slideNumber) {
  const encoder = new TextEncoder(); // Create a new TextEncoder instance to encode the string into bytes.
  const data = encoder.encode(`${lineNumber}-${lineContent}-${slideNumber}`); // Encode the line details into bytes.
  const hashBuffer = await crypto.subtle.digest("SHA-256", data); // Use the SubtleCrypto interface to generate a SHA-256 hash.
  return Array.from(new Uint8Array(hashBuffer)) // Convert the hash ArrayBuffer to a hexadecimal string.
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Creates and triggers a download for the output of processed slides.
 * This function generates a text file containing the details of each Slide object.
 *
 * @param {Slide[]} slides An array of Slide objects to be included in the output file.
 */
function saveOutput(slides) {
  const outputLines = slides.map(
    (slide) =>
      `slide ${slide.hash} - ${slide.lineContent} - ${slide.link} - ${slide.slideToShow}`
  ); // Map each Slide object to a string representation.
  const blob = new Blob([outputLines.join("\n")], { type: "text/plain" }); // Create a new Blob object from the string representations.
  const url = URL.createObjectURL(blob); // Generate a URL for the Blob object.

  const downloadLink = document.createElement("a"); // Create a new <a> element for the download link.
  downloadLink.href = url; // Set the href of the link to the Blob URL.
  downloadLink.download = "manifest2-output.txt"; // Set the download attribute to specify the filename.
  document.body.appendChild(downloadLink); // Temporarily add the link to the document.
  downloadLink.click(); // Trigger the download.
  document.body.removeChild(downloadLink); // Remove the link from the document.
}

/**
 * Sets up an event listener to process the manifest file when the user selects a file and clicks the "Process" button.
 */
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("processButton")
    .addEventListener("click", async function () {
      const fileInput = document.getElementById("fileInput"); // Get the file input element.
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0]; // Get the selected file.
        const reader = new FileReader(); // Create a new FileReader object.
        reader.onload = async function (e) {
          const content = e.target.result; // Read the content of the file.
          const slides = await parseManifest(content); // Parse the manifest content to create Slide objects.
          saveOutput(slides); // Save the output to a file.
        };
        reader.readAsText(file); // Read the file as text.
      }
    });
});
