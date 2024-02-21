/*
 * File: index.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 20th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 21st February 2024
 * Modified By: Steward OUADI
 */

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

    // Regular expression to match valid slide entries, excluding inline comments.
    const regex = /^slide\s+([^\s]+)\s*(\[\d+(:\d+)?\]|(\d+))?(?=\s+\/\/|$)/;
    const matches = line.match(regex);

    if (matches) {
      const [, link, slideNumberIfAny] = matches; // Destructure the URL and slide number or range from the matches.

      // Check if there's a specified slide number or range.
      if (slideNumberIfAny) {
        if (slideNumberIfAny.startsWith("[")) {
          // Handle slide ranges, e.g., [1:4].
          const rangeMatch = slideNumberIfAny.match(/\[(\d+)(?::(\d+))?\]/);
          if (rangeMatch) {
            const start = parseInt(rangeMatch[1], 10); // Start of the range.
            const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : start; // End of the range, defaulting to start if not specified.
            for (let i = start; i <= end; i++) {
              // Generate a hash for each slide within the range.
              const hash = await generateHash(index, line, i);
              // Create and add a new Slide object for each slide number within the range.
              slides.push(new Slide(hash, line, link, i));
            }
          }
        } else {
          // Handle single slide numbers.
          const hash = await generateHash(
            index,
            line,
            parseInt(slideNumberIfAny, 10)
          );
          slides.push(
            new Slide(hash, line, link, parseInt(slideNumberIfAny, 10))
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
