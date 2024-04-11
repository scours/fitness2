/*
 * File: index.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 20th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Thursday, 11th April 2024
 * Modified By: Steward OUADI
 */

const finalLecture = new Map();
let referenceURL = null;
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

function splitLastOccurrence(str, substring) {
  const arr = str.split(substring);

  const after = arr.pop();

  const before = arr.join(substring);

  return [before, after];
}

// Number of slides before the "FITNESS 2" project slide
const numberOfSyllabusSlide = 6;

function cleanUrl(url) {
  // Check if the character just before "http" is not a space
  const httpPos = url.indexOf("http");
  if (httpPos > 0 && url[httpPos - 1] !== " ") {
    // It's an enclosing char, remove the first and last char of the string
    return url.substring(1, url.length - 1);
  }
  // If the condition is not met, return the original URL
  return url;
}

const markDownSlides = new Map();

async function updateMarkdownSlides(URL) {
  // Assume httpGet now returns a Promise resolving to the response text
  const response = await httpGet(URL);

  // Assuming response is a string containing HTML
  const parser = new DOMParser(); // Use DOMParser to parse the string into HTML
  const doc = parser.parseFromString(response, "text/html");

  // Safely access the slides container
  const slidesContainer = doc.getElementsByClassName("slides")[0];
  if (slidesContainer) {
    let slidesFromResponse = slidesContainer.children;
    markDownSlides.set(URL, slidesFromResponse);
  } else {
    console.error("Slides container not found in the response");
  }
}

// Update httpGet to return a promise
async function httpGet(theUrl) {
  return new Promise((resolve, reject) => {
    let xmlhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          resolve(xmlhttp.responseText);
        } else {
          reject("Error: " + xmlhttp.statusText);
        }
      }
    };

    xmlhttp.open("GET", theUrl, true);
    xmlhttp.send();
  });
}

function displayFinalContent(element) {
  // Path to the folder containing the current lecture
  // HTML filename of the current lecture
  let splittedUrl = element.link.split(".html");
  const [pathToHtmlFolder, htmlFileName] = splitLastOccurrence(
    splittedUrl[0],
    "/"
  );

  // Regular expression to get resources path for the lecture
  const regExpForSources = /\(\.\/src/;

  console.log("slide we want to append beg");
  console.log(element.markdownContent);
  console.log(element.markdownContent.innerHTML);

  var newSection = document.createElement("SECTION");
  // The data-markdown will allow to create Markdown slide
  // https://revealjs.com/markdown/
  newSection.setAttribute("data-markdown", "");

  newSection.innerHTML = element.markdownContent.innerHTML.replace(
    regExpForSources,
    "(" + pathToHtmlFolder + "/src"
  );
  console.log(newSection);
  console.log("slide we want to append end");

  return newSection;
}

function lineFormatChecker(line, regex, args, lineNumber) {
  // Base error message that includes the common phrase.
  const baseErrorMsg = `At line ${lineNumber}:the format is "${args.join(
    " "
  )}"`;

  // Trim the line and split it by one or more spaces to analyze its parts.
  const parts = line.trim().split(/\s+/);

  // Check if the actual parts length matches the expected args length.
  if (parts.length !== args.length) {
    // If they don't match, return an error indicating a mismatch in the number of parts.
    return `${baseErrorMsg}. The number of arguments (${parts.length}) does not match the expected number (${args.length}). Please check your format.`;
  }

  // Directly check if the line starts with the expected "slide" keyword
  if (parts[0].trim().toLowerCase() !== args[0].trim().toLowerCase()) {
    const errorMsg = `${baseErrorMsg}. We are not able to understand your "${args[0]}" format. Please check your format.`;
    return errorMsg;
  }

  // Proceed with regex matching to check the rest of the format
  const match = line.match(regex);
  if (!match) {
    // Since the line starts with "slide", the error is with other parts
    // Attempt to further diagnose the issue
    if (!line.includes("http")) {
      // Likely the "link" part is missing or incorrect
      const errorMsg = `${baseErrorMsg}. We are not able to understand your "${args[1]}" format. Please check your format.`;
      return errorMsg;
    } else {
      // Assume the issue is with "slideNumberIfAny" if the "slide" and "link" seem correct
      const errorMsg = `${baseErrorMsg}. We are not able to understand your "${args[2]}" format. Please check your format.`;
      return errorMsg;
    }
  }
  // If the regex matches, the format is correct; no error message is needed
  return null;
}

// function evaluateWithMathJs(expression) {
//   let resultToReturn;

//   resultToReturn = math.evaluate(expression);
//   if (resultToReturn["_data"] !== undefined) {
//     resultToReturn = resultToReturn["_data"];
//   }
//   // evaluateResult = math.evaluate(slideNumberIfAny)["_data"];

//   return resultToReturn;
// }

function evaluateWithMathJs(expression) {
  // Assuming the expression is in the form "[start:end]"
  // Manually parse this range and generate the array of numbers it represents
  if (expression.startsWith("[") && expression.endsWith("]")) {
    // Remove the brackets and split by colon
    const [start, end] = expression.slice(1, -1).split(":").map(Number);
    if (!isNaN(start) && !isNaN(end)) {
      // Generate an array containing all numbers from start to end
      const result = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    }
  }

  // Fallback or additional handling for other types of expressions
  // You might need to adjust this part based on what math.evaluate is and what it returns
  let resultToReturn = math.evaluate(expression);
  if (resultToReturn["_data"] !== undefined) {
    resultToReturn = resultToReturn["_data"];
  }

  return resultToReturn;
}

function displayErrorText(errorText) {
  // Find the error message container by its ID
  const errorMessageDiv = document.getElementById("errorMessage");

  // Check if the unordered list already exists inside the error message container
  let ul = errorMessageDiv.querySelector("ul");
  if (!ul) {
    // If the unordered list doesn't exist, create it and append it to the errorMessageDiv
    ul = document.createElement("ul");
    errorMessageDiv.appendChild(ul);
  }

  // Create a new list item for the error message
  const li = document.createElement("li");
  li.textContent = errorText; // Set the text of the list item to the error message

  // Append the list item to the unordered list
  ul.appendChild(li);

  // Make the error message container visible
  errorMessageDiv.style.display = "block";
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

    const args = ["slide", "link", "slideNumberIfAny"];
    const errorText = lineFormatChecker(line, regex, args, index + 1);
    if (errorText) {
      displayErrorText(errorText);
    } else {
      let [, , link, slideNumberIfAny] = match; // Destructure the URL and slide number or range from the match.

      link = cleanUrl(link);
      if (referenceURL === null) {
        // Set reference URL to be the first encountered URL
        referenceURL = link;
      }

      await updateMarkdownSlides(link);

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
            // Compute slide number: in the URLs from FITNESS 1, there are slides before the
            // "FITNESS 2" project slide, se we would not take those slides into account.
            // And the slide number the teacher is seeing on FITNESS 1 takes those "syllabus" slides into account.
            // So we make a computation so that we can get the exact slide the user is referring to on FITNESS 1 (using FITNESS 1 numbering patterns)
            const slideNumber = num - numberOfSyllabusSlide;
            const currentMarkDownSlide = markDownSlides.get(link)[slideNumber];
            slides.push(new Slide(hash, line, link, num, currentMarkDownSlide));
            finalLecture.set(hash, currentMarkDownSlide);
          }
        } catch (error) {
          console.error(
            `Error evaluating slideNumberIfAny '${slideNumberIfAny}': ${error}`
          );
          const errorText = "At line " + (index + 1) + ":" + error.message;
          displayErrorText(errorText);
        }
      } else {
        // Handle lines without a specific slide number or range.
        const hash = await generateHash(index, line, "");
        slides.push(new Slide(hash, line, link, "", ""));
        // TODO: add into finalLecture all the slides for this URL
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

  // Create a button element
  const downloadBtn = document.createElement("button");
  downloadBtn.textContent = "Download Output"; // Set button text
  downloadBtn.style.display = "block"; // Optional: adjust styling as needed
  downloadBtn.style.marginTop = "20px"; // Optional: adjust styling as needed
  downloadBtn.style.display = "none";

  // Add an event listener to the button for the 'click' event
  downloadBtn.addEventListener("click", function () {
    const downloadLink = document.createElement("a"); // Create a new <a> element for the download link.
    downloadLink.href = url; // Set the href of the link to the Blob URL.
    downloadLink.download = "manifest2-output.txt"; // Set the download attribute to specify the filename.
    document.body.appendChild(downloadLink); // Temporarily add the link to the document.
    downloadLink.click(); // Trigger the download.
    document.body.removeChild(downloadLink); // Remove the link from the document.
  });

  // Find the element with id 'fileInput'
  const fileInputElement = document.getElementById("fileInput");
  if (fileInputElement) {
    // Insert the button right after the 'fileInput' element
    fileInputElement.parentNode.insertBefore(
      downloadBtn,
      fileInputElement.nextSibling
    );
  } else {
    // Fallback to appending to the body if 'fileInput' is not found
    document.body.appendChild(downloadBtn);
  }
}

function clearErrorText() {
  const errorMessageDiv = document.getElementById("errorMessage");
  errorMessageDiv.innerHTML = ""; // Clear the error message
  errorMessageDiv.style.display = "none"; // Hide the container
}

// Adjusted httpGet function to accept a callback for processing content
function httpGetWithCallback(theUrl, callback) {
  console.log("the url to manage");
  console.log(theUrl);
  let xmlhttp;

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      const responseText = xmlhttp.responseText;
      if (callback) callback(responseText);
    }
  };

  xmlhttp.open("GET", theUrl, false);
  xmlhttp.send();
}

function processFileContent(content = null) {
  // If content is not directly provided (null), listen for file input change
  if (content === null) {
    document
      .getElementById("fileInput")
      .addEventListener("change", function (event) {
        var file = event.target.files[0]; // This is the file that was selected
        const reader = new FileReader(); // Create a new FileReader object.

        reader.onload = async function (e) {
          // Process the read content from the file
          processManifestAndDisplay(e.target.result);
        };

        reader.readAsText(file); // Read the file as text.
      });
  } else {
    // If content is provided directly, process it
    processManifestAndDisplay(content);
  }
}

async function processManifestAndDisplay(content) {
  const slides = await parseManifest(content); // Parse the manifest content to create Slide objects.
  saveOutput(slides); // Save the output to a file.

  try {
    // The rest of your existing logic to process and display the slides
    const response = await httpGet(referenceURL); // Assume httpGet is now an async function
    let htmlContentToDisplay = document.createElement("html");
    htmlContentToDisplay.innerHTML = response;

    let slidesToDisplay = document.createElement("div");
    slidesToDisplay.setAttribute("class", "slides");

    slides.forEach((element) => {
      slidesToDisplay.appendChild(displayFinalContent(element));
    });

    htmlContentToDisplay.getElementsByClassName("slides")[0].innerHTML =
      slidesToDisplay.innerHTML;

    console.log("displaying slides to display begin");
    console.log(slidesToDisplay);
    console.log(slidesToDisplay.children);
    console.log("displaying slides to display end");

    console.log("htmlContentToDisplay begin");
    console.log(htmlContentToDisplay);
    console.log("htmlContentToDisplay end");
    var lectureIframe = document.createElement("iframe");

    let modifiedA = document.createElement("html");
    modifiedA.innerHTML = htmlContentToDisplay.innerHTML.replaceAll(
      `"../../../../`,
      `"https://fitness.agroparistech.fr/fitness/lectures/`
    );

    let modifiedB = document.createElement("html");
    modifiedB.innerHTML = modifiedA.innerHTML.replaceAll(
      `"./../../../../../`,
      `"https://fitness.agroparistech.fr/fitness/`
    );

    let modifiedC = document.createElement("html");
    modifiedC.innerHTML = modifiedB.innerHTML.replaceAll(
      `'../../../../`,
      `'https://fitness.agroparistech.fr/fitness/lectures/`
    );

    let modifiedD = document.createElement("html");
    modifiedD.innerHTML = modifiedC.innerHTML.replaceAll(
      `'./../../../../../`,
      `'https://fitness.agroparistech.fr/fitness/`
    );

    lectureIframe.setAttribute("srcdoc", modifiedD.outerHTML);

    lectureIframe.setAttribute("class", "frame");
    lectureIframe.style.width = "100%";
    // lectureIframe.style.height = screen.height * 0.7 + "px";
    lectureIframe.style.height = "900px";
    lectureIframe.style.border = "none";

    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = lectureIframe.outerHTML;
  } catch (error) {
    console.error("Failed to get URL:", URL, error);
  }
}

// Adjusted httpGet function to be asynchronous
async function httpGet(theUrl) {
  return new Promise((resolve, reject) => {
    let xmlhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          resolve(xmlhttp.responseText);
        } else {
          reject("Error loading the URL");
        }
      }
    };

    xmlhttp.open("GET", theUrl, true);
    xmlhttp.send();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Clear message on page load
  clearErrorText();

  // Get the current URL and remove the filename to get the folder path
  const currentUrl = window.location.href;
  const pathToHtmlFolder = currentUrl.substring(
    0,
    currentUrl.lastIndexOf("/") + 1
  );

  // Check URL for #variableName
  const hash = window.location.hash;
  let fileName;

  if (hash.startsWith("#")) {
    const variableName = hash.substring(1); // Remove '#' from the start
    fileName = `${variableName}.txt`; // Append .txt extension

    // Hide the file import manifest button
    const importManifestContainer = document.getElementById(
      "import-manifest-container"
    ); // Assuming the button has this ID
    if (importManifestContainer) {
      importManifestContainer.style.display = "none";
    }

    // Use the path to dynamically construct the full URL to the file
    const fileURL = `${pathToHtmlFolder}${fileName}`;
    httpGetWithCallback(fileURL, processFileContent); // Assuming httpGet can accept a callback as second parameter
  } else {
    processFileContent();
  }

  document
    .getElementById("viewerDocumentation")
    .addEventListener("click", function () {
      window.location.href = "documentation.html";
    });
});
