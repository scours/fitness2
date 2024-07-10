/*
 * File: index.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 20th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 10th July 2024
 * Modified By: Steward OUADI
 */

const finalLecture = new Map();
let referenceURL = null;

// Define slides and assignation for later use
const slides = [];
const assignation = new Assignation();

function storeUserData() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;

  // Create a data object
  const userData = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
  };

  // Convert the data object to JSON string
  const jsonString = JSON.stringify(userData);

  // Compress and encode the JSON string
  const compressedData = LZString.compressToEncodedURIComponent(jsonString);

  // Store in local storage
  localStorage.setItem("learnerData", compressedData);
  console.log("Data stored in local storage as URL-safe string.");
}

function displayUserData() {
  const encodedData = localStorage.getItem("learnerData");
  if (encodedData) {
    // Decode and decompress the data
    const decompressedData =
      LZString.decompressFromEncodedURIComponent(encodedData);

    if (decompressedData) {
      // Parse the JSON string back to an object
      const userData = JSON.parse(decompressedData);

      // Set values to input fields if they exist and the elements are available in the DOM
      const firstNameElement = document.getElementById("firstName");
      const lastNameElement = document.getElementById("lastName");
      const emailElement = document.getElementById("email");

      if (firstNameElement && userData.FirstName)
        firstNameElement.value = userData.FirstName;
      if (lastNameElement && userData.LastName)
        lastNameElement.value = userData.LastName;
      if (emailElement && userData.Email) emailElement.value = userData.Email;

      console.log("Data retrieved and displayed from local storage:", userData);
    } else {
      console.error("Failed to decode or decompress user data.");
    }
  } else {
    console.log("No data found in local storage.");
  }
}

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

  // console.log("slide we want to append beg");
  // console.log(element.markdownContent);
  // console.log(element.markdownContent.innerHTML);

  var newSection = document.createElement("SECTION");
  // The data-markdown will allow to create Markdown slide
  // https://revealjs.com/markdown/
  newSection.setAttribute("data-markdown", "");

  newSection.innerHTML = element.markdownContent.innerHTML.replace(
    regExpForSources,
    "(" + pathToHtmlFolder + "/src"
  );
  // console.log(newSection);
  // console.log("slide we want to append end");

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

function isHtml(content) {
  // Simple regex to detect HTML tags
  return /<\/?[a-z][\s\S]*>/i.test(content);
}

async function processDefSlideContent(
  index,
  currentDefSlideContent,
  currentLabelName,
  contentArray
) {
  const defSlideContent = currentDefSlideContent.join("\n");
  let htmlContent;

  if (isHtml(defSlideContent)) {
    // If it's HTML, use as is
    htmlContent = defSlideContent;
  } else {
    // Otherwise, assume it's Markdown and convert to HTML
    try {
      marked.use("marked-highlight");
      htmlContent = marked.parse(defSlideContent);
    } catch (error) {
      console.error(`Error converting Markdown to HTML: ${error.message}`);
      htmlContent = "<p>Error processing Markdown content.</p>"; // Fallback error message
    }
  }

  try {
    const hash = await generateHash(index, defSlideContent);
    contentArray.push(
      new VirtualSlide(hash, currentLabelName, "", htmlContent, index)
    );
    console.log(
      `Added defSlide with label '${currentLabelName}', processed as ${
        isHtml(defSlideContent) ? "HTML" : "Markdown"
      }.`
    );
  } catch (error) {
    console.error(`Error processing defSlide content: ${error.message}`);
  }
}

function getLabelIndex(labelName) {
  for (let i = 0; i < globalContentContainer.length; i++) {
    if (globalContentContainer[i].labelName === labelName) {
      return i;
    }
  }
  return -1; // Return -1 if the labelName is not found
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
  const contentArray = [];
  const lines = manifestContent.split("\n");

  let currentDefSlideContent = [];
  let readingDefSlide = false;
  let currentLabelName = "";

  for (let index = 0; index < lines.length; index++) {
    let line = lines[index].trim();

    // Detect and handle label names in the format ":labelName"
    if (
      line.startsWith(":") &&
      !line.includes("slide") &&
      !line.includes("test")
    ) {
      const labelMatch = line.match(/^:(\S+)/);
      if (labelMatch) {
        currentLabelName = labelMatch[1];
        continue;
      }
    }

    // Detect and handle the start of a defSlide block
    if (line.startsWith("defSlide")) {
      const labelMatch = line.match(/^defSlide\s+(\S+)\s+\{/);
      var slideName;
      if (labelMatch) {
        slideName = labelMatch[1];
        readingDefSlide = true;
        console.log(
          `Starting defSlide with label name '${currentLabelName}' and slide name '${slideName}'`
        );
        continue; // Skip the start line of defSlide to prevent '{' from being added
      }
    }

    if (readingDefSlide) {
      if (line.endsWith("}")) {
        currentDefSlideContent.push(line.slice(0, -1).trim());
        readingDefSlide = false;
        const hash = await generateHash(
          index + currentDefSlideContent.join("")
        );
        contentArray.push(
          new VirtualSlide(
            hash,
            line,
            slideName,
            currentDefSlideContent.join("\n"),
            currentDefSlideContent.join("\n"),
            index,
            currentLabelName
          )
        );
        currentDefSlideContent = [];
      } else {
        currentDefSlideContent.push(line);
      }
    }

    if (line.startsWith("if")) {
      // Adjusted regex to match the given format, with 'goto' included in the instructions
      const ifRegex = /^if\s+(.+?)\s+goto\s+:(\w+)\s+else\s+goto\s+:(\w+)$/;
      const match = line.match(ifRegex);
      if (match) {
        // Extracting the condition, true instruction, and false instruction from the matched result
        const [, condition, trueInstruction, falseInstruction] = match;

        // Prepend 'goto :' to the instructions to retain original format
        const trueInstructionFormatted = `goto :${trueInstruction}`;
        const falseInstructionFormatted = `goto :${falseInstruction}`;

        // Generating a unique hash for the line (this function should be defined elsewhere in your code)
        const hash = await generateHash(index + line);

        // Creating a new DecisionMaking object with the extracted values and pushing it to the contentArray
        contentArray.push(
          new DecisionMaking(
            hash,
            line,
            condition,
            trueInstructionFormatted,
            falseInstructionFormatted,
            index
          )
        );
      }
    }

    if (line.startsWith("goto")) {
      const gotoRegex = /^goto\s+:(\S+)$/;
      const match = line.match(gotoRegex);
      if (match) {
        const [, targetLabel] = match;
        const hash = await generateHash(index + line);
        contentArray.push(new GotoInstruction(hash, line, targetLabel, index));
      }
    }
    if (line.startsWith("slide") || line.startsWith("test")) {
      line = removeInlineComment(line); // Clean the line from inline comments first
      if (!readingDefSlide) {
        if (line.startsWith("slide")) {
          const regex = /^(slide)\s+"([^"]+)"\s*(\[(\d+:\d+)\])?$/;
          const match = line.match(regex);
          if (match) {
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
                  let result = evaluateWithMathJs(slideNumberIfAny);

                  if (!Array.isArray(result)) {
                    result = [result];
                  }

                  // Flatten the result to handle any nested arrays
                  result = result.flat();

                  for (let num of result) {
                    const hash = await generateHash(index, line, num);
                    const slideNumber = num - numberOfSyllabusSlide;
                    const currentMarkDownSlide =
                      markDownSlides.get(link)[slideNumber];
                    contentArray.push(
                      new Slide(
                        hash,
                        line,
                        link,
                        num,
                        currentMarkDownSlide,
                        index,
                        currentLabelName
                      )
                    );
                    finalLecture.set(hash, currentMarkDownSlide);
                  }
                } catch (error) {
                  console.error(
                    `Error evaluating slideNumberIfAny '${slideNumberIfAny}': ${error}`
                  );
                  const errorText =
                    "At line " + (index + 1) + ":" + error.message;
                  displayErrorText(errorText);
                }
              } else {
                // Handle lines without a specific slide number or range.
                const hash = await generateHash(index, line, "");
                contentArray.push(
                  new Slide(hash, line, link, "", "", index, currentLabelName)
                );
              }
            }
          }
        } else if (line.startsWith("test")) {
          const regex = /^(test)\s+"([^"]+)"$/;
          const match = line.match(regex);
          if (match) {
            const [, , link] = match;
            const cleanLink = cleanUrl(link);
            const hash = await generateHash(index + cleanLink);
            contentArray.push(
              new TestSlide(
                hash,
                line,
                cleanLink,
                undefined,
                index,
                currentLabelName
              )
            );
          }
        }
      }
    }
  }

  console.log("Parsed contentArray:", JSON.stringify(contentArray, null, 2));
  return groupByLinkAndType(contentArray);
}

function groupByLinkAndType(entries) {
  const grouped = {};

  entries.forEach((entry) => {
    let { lineNumber, link, labelName, type } = entry;
    // Skip grouping for DecisionMaking and GotoInstruction types
    if (type === "decisionMaking" || type === "gotoInstruction") {
      return;
    }
    if (entry instanceof VirtualSlide) {
      type = "virtualSlide";
    } else if (entry instanceof Slide) {
      type = "slide";
    } else if (entry instanceof TestSlide) {
      type = "test";
    } else if (entry instanceof DecisionMaking) {
      type = "decisionMaking";
    } else if (entry instanceof GotoInstruction) {
      type = "gotoInstruction";
    } else {
      type = "unknown"; // This handles any unclassified types
    }

    if (!grouped[lineNumber]) {
      grouped[lineNumber] = {
        lineNumber: lineNumber,
        link: link, // Store the first encountered link for this line number
        types: {}, // Use a types object to categorize by type within the line
        labelName: labelName || null, // Add the labelName here if it exists
      };
    }

    if (!grouped[lineNumber].types[type]) {
      grouped[lineNumber].types[type] = [];
    }

    grouped[lineNumber].types[type].push(entry);
  });

  const groupedArray = [];
  Object.values(grouped).forEach((group) => {
    Object.entries(group.types).forEach(([type, slides]) => {
      groupedArray.push({
        lineNumber: group.lineNumber,
        link: group.link,
        type: type,
        slides: slides,
        labelName: group.labelName, // Use the labelName from the group
      });
    });
  });

  console.log("Grouped array:", JSON.stringify(groupedArray, null, 2));
  return groupedArray;
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
          // Show navigation container as we will display content.
          showElementBySelector("#navigationContainer");
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

async function fetchAndDisplayContent(contentURL) {
  let outerHtml = "";
  try {
    const testURL = contentURL;

    const lectureTestResponse = await httpGet(testURL);

    const parser = new DOMParser();
    const doc = parser.parseFromString(lectureTestResponse, "text/html");

    // Set the base URL for the document
    const base = doc.createElement("base");
    base.href =
      new URL(testURL).origin +
      new URL(testURL).pathname.substring(
        0,
        new URL(testURL).pathname.lastIndexOf("/") + 1
      );
    doc.head.prepend(base);

    // Replace specific script content
    const scripts = doc.querySelectorAll("script");
    scripts.forEach((script) => {
      if (
        !script.src &&
        script.textContent.includes("window.location.search")
      ) {
        script.textContent = script.textContent.replace(
          "window.location.search",
          `new URL('${testURL}').search`
        );
      }
    });

    // Modify links to absolute paths
    doc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
      link.href = new URL(link.getAttribute("href"), base.href).href;
    });

    // Modify scripts to absolute paths
    scripts.forEach((script) => {
      if (script.src) {
        script.src = new URL(script.getAttribute("src"), base.href).href;
      }
    });

    // Get the modified outer HTML
    outerHtml = doc.documentElement.outerHTML;
  } catch (error) {
    console.error("Failed to fetch content:", error);
  }
  return outerHtml;
}

let contentToDisplay = [];
const mainContent = document.getElementById("main-content");

let currentIndex = 0; // Initialize a variable to keep track of the current index

function attemptToBlockClicks(newIframe, attemptsLeft) {
  if (attemptsLeft === 0) {
    console.log("Attempted 5 times and failed to find the slide number div.");
    return; // Stop attempting after 5 tries.
  }

  setTimeout(() => {
    const slideNumberDiv =
      newIframe.contentWindow.document.querySelector(".slide-number");
    if (slideNumberDiv) {
      slideNumberDiv.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Click on slide number prevented.");
      });
      console.log("Slide number div found and click event blocked.");
    } else {
      console.log("Slide number div not found, trying again...");
      attemptToBlockClicks(newIframe, attemptsLeft - 1); // Retry by calling the function again with decremented attemptsLeft
    }
  }, 2000); // Wait for 3 seconds before retrying
}

function displayContentInsideViewer(contentIndex) {
  const container = document.getElementById("viewerContentContainer");
  if (!container) {
    console.error("Container for content viewer not found.");
    return;
  }

  // Clear any existing content in the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Check the content type from the global container
  const contentType = globalContentContainer[contentIndex].type;
  console.log(
    `Displaying content at index: ${contentIndex}, type: ${contentType}`
  );

  // Locate the element by its ID
  const openLectureFullScreenElement = document.getElementById(
    "open-lecture-full-screen"
  );

  // Clear the content of the element
  openLectureFullScreenElement.innerHTML = "";

  // Handle based on content type
  if (contentType === "slide" || contentType === "test") {
    // Code to execute if contentType is either "slide" or "test"
    // Create and setup an iframe only if the type is 'slide'
    const newIframe = document.createElement("iframe");
    newIframe.id = "lectureIframe";

    container.appendChild(newIframe);
    newIframe.src = "about:blank";
    newIframe.onload = () => {
      newIframe.onload = null; // Ensure the onload isn't called again
      newIframe.srcdoc = globalContentContainer[contentIndex].htmlOutput;
    };

    // Update the current index and button states
    currentIndex = contentIndex;
    updateButtonStates();
    if (contentType === "slide") {
      attemptToBlockClicks(newIframe, 5); // Attempt to block clicks in the iframe
      const link = document.createElement("a");
      link.href = globalContentContainer[contentIndex].link;
      link.target = "_blank";
      link.textContent = "Open lecture in full screen";
      openLectureFullScreenElement.appendChild(link);
    }

    // Listen for messages from the iframe
    window.addEventListener("message", function (event) {
      // Check the origin of the message for security purposes
      // if (event.origin !== 'https://fitness.agroparistech.fr/'){
      //   console.error("We only accept messages from https://fitness.agroparistech.fr/");
      //    return;
      // }

      if (event.data.type === "contentData") {
        var content = event.data.content;
        console.log("Received content from iframe:", content);
        // Now you can use the content variable as needed
      }
    });
  } else if (contentType === "virtualSlide") {
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = globalContentContainer[contentIndex].htmlOutput; // Assume htmlOutput is suitable for direct insertion
    container.appendChild(contentDiv);

    // Update the current index and button states without setting up an iframe
    currentIndex = contentIndex;
    updateButtonStates();

    const form = document.getElementById("userForm");
    if (form) {
      const firstNameField = document.getElementById("firstName");
      const lastNameField = document.getElementById("lastName");
      const emailField = document.getElementById("email");

      if (firstNameField)
        firstNameField.addEventListener("input", storeUserData);
      if (lastNameField) lastNameField.addEventListener("input", storeUserData);
      if (emailField) emailField.addEventListener("input", storeUserData);
      displayUserData(); // Optionally display right after storing to confirm data integrity
    } else {
      console.log("The form element was not found!");
    }
  } else if (contentType === "decisionMaking") {
    const decision = globalContentContainer[contentIndex].slides[0];
    if (decision.evaluate(assignation)) {
      const trueInstruction = decision.trueInstruction;
      if (trueInstruction.startsWith("goto")) {
        const labelName = trueInstruction.split(":")[1].trim();
        console.log(
          `Condition '${decision.condition}' is true. Navigating to label: ${labelName}`
        );
        navigateToLabel(labelName);
      } else {
        // Handle other trueInstruction types if needed
        console.log(
          `True instruction '${trueInstruction}' is not a goto statement.`
        );
      }
    } else {
      const falseInstruction = decision.falseInstruction;
      if (falseInstruction.startsWith("goto")) {
        const labelName = falseInstruction.split(":")[1].trim();
        console.log(
          `Condition '${decision.condition}' is false. Navigating to label: ${labelName}`
        );
        navigateToLabel(labelName);
      } else {
        // Handle other falseInstruction types if needed
        console.log(
          `False instruction '${falseInstruction}' is not a goto statement.`
        );
      }
    }
  } else if (contentType === "gotoInstruction") {
    const gotoInstruction = globalContentContainer[contentIndex].slides[0];
    console.log(
      `Goto instruction found. Navigating to label: ${gotoInstruction.targetLabel}`
    );
    navigateToLabel(gotoInstruction.targetLabel);
  }
}

function navigateContent(direction) {
  const newIndex = currentIndex + direction;
  if (newIndex < 0 || newIndex >= globalContentContainer.length) {
    console.error("Content index out of bounds.");
    return;
  }

  const currentContent = globalContentContainer[newIndex];
  if (currentContent instanceof DecisionMaking) {
    const instruction = currentContent.execute(assignation);
    handleInstruction(instruction);
  } else if (currentContent instanceof GotoInstruction) {
    handleInstruction(currentContent.targetLabel);
  } else {
    displayContentInsideViewer(newIndex);
  }
}

function handleInstruction(instruction) {
  const gotoRegex = /^goto\s+:(\S+)$/;
  const match = instruction.match(gotoRegex);
  if (match) {
    const [, targetLabel] = match;
    navigateToLabel(targetLabel);
  } else {
    console.error(`Unknown instruction: ${instruction}`);
  }
}

function navigateToLabel(label) {
  const labelIndex = getLabelIndex(label);
  if (labelIndex !== -1) {
    console.log(`Navigating to label: ${label} at index: ${labelIndex}`);
    displayContentInsideViewer(labelIndex);
  } else {
    console.error(`Label ${label} not found.`);
  }
}
function updateButtonStates() {
  // Enable or disable buttons based on the current index
  document.getElementById("prevButton").disabled = currentIndex <= 0;
  document.getElementById("nextButton").disabled =
    currentIndex >= globalContentContainer.length - 1;

  // Update navigation steps and the step info
  updateNavigationSteps();
  updateStepInfo();
}

function updateStepInfo() {
  const stepInfo = document.getElementById("stepInfo");
  stepInfo.textContent = `${currentIndex + 1}/${globalContentContainer.length}`; // Display as "X/Y"
}

function updateNavigationSteps() {
  const stepsContainer = document.getElementById("navigationSteps");
  stepsContainer.innerHTML = ""; // Clear previous steps

  for (let i = 0; i < globalContentContainer.length; i++) {
    const step = document.createElement("div");
    step.className = "step" + (i === currentIndex ? " current" : "");
    stepsContainer.appendChild(step);
  }
}

async function getSlideTypeHtmlOutput(slides) {
  let htmlOutput;
  try {
    // The rest of your existing logic to process and display the slides
    const response = await httpGet(referenceURL); // Assume httpGet is now an async function
    let htmlContentToDisplay = document.createElement("html");
    htmlContentToDisplay.innerHTML = response;

    let slidesToDisplay = document.createElement("div");
    slidesToDisplay.setAttribute("class", "slides");

    slides.forEach((element) => {
      if (element instanceof Slide) {
        slidesToDisplay.appendChild(displayFinalContent(element));
      }
    });

    htmlContentToDisplay.getElementsByClassName("slides")[0].innerHTML =
      slidesToDisplay.innerHTML;

    // console.log("displaying slides to display begin");
    // console.log(slidesToDisplay);
    // console.log(slidesToDisplay.children);
    // console.log("displaying slides to display end");

    // console.log("htmlContentToDisplay begin");
    // console.log(htmlContentToDisplay);
    // console.log("htmlContentToDisplay end");

    let modifiedHtml = document.createElement("html");

    // Set the initial HTML content
    modifiedHtml.innerHTML = htmlContentToDisplay.innerHTML;

    // Regex to remove the entire line containing 'id="open-menu-button"'
    modifiedHtml.innerHTML = modifiedHtml.innerHTML.replace(
      /<button[^>]*id="open-menu-button"[^>]*>.*?<\/button>\s*/g,
      ""
    );

    // Perform all replacements in one go
    modifiedHtml.innerHTML = modifiedHtml.innerHTML
      .replaceAll(
        `"../../../../`,
        `"https://fitness.agroparistech.fr/fitness/lectures/`
      )
      .replaceAll(
        `"./../../../../../`,
        `"https://fitness.agroparistech.fr/fitness/`
      )
      .replaceAll(
        `'../../../../`,
        `'https://fitness.agroparistech.fr/fitness/lectures/`
      )
      .replaceAll(
        `'./../../../../../`,
        `'https://fitness.agroparistech.fr/fitness/`
      );
    htmlOutput = modifiedHtml.outerHTML;
  } catch (error) {
    console.error("Failed to get URL:", URL, error);
  }
  return htmlOutput;
}

let globalContentContainer;

async function processManifestAndDisplay(content) {
  globalContentContainer = await parseManifest(content); // Parse the manifest content to create Slide objects.
  // saveOutput(contentContainer); // Save the output to a file.
  // initializeIframe();

  // Create an array of promises from the asynchronous operations
  const promises = globalContentContainer.map(async (content) => {
    if (content.type === "slide") {
      const slidesHtmlOutput = await getSlideTypeHtmlOutput(content.slides);
      content.htmlOutput = slidesHtmlOutput;
      return slidesHtmlOutput;
    } else if (content.type === "test") {
      const testHtmlOutput = await fetchAndDisplayContent(content.link);
      content.htmlOutput = testHtmlOutput;
      return testHtmlOutput;
    } else if (content.type === "virtualSlide") {
      // Return the slide html output
      let htmlContent = `<div class="fitness2Content">${content.slides[0].slideContent}</div>`;
      content.htmlOutput = htmlContent;
      return htmlContent;
    }
    //
  });

  // Wait for all promises to resolve
  await Promise.all(promises);

  // Process the configuration content
  const config = content.split("\n");

  config.forEach((line) => {
    if (line.startsWith(":label")) {
      // TODO: rework on this one
      const [labelName, slideDetails] = line.split(": ");
      const [url, time] = slideDetails
        .match(/"(.*?)"/g)
        .map((s) => s.replace(/"/g, ""));
      slides.push(new Slide(url, time, labelName));
    } else if (line.startsWith("goto")) {
      const [gotoCommand, condition] = line.split(" if ");
      const labelName = gotoCommand.split(" ")[1];
      if (eval(condition)) {
        // Simple condition evaluation
        Jump.goto(labelName, slides);
      }
    } else if (line.startsWith("set")) {
      const [property, expression] = line.split(" = ");
      assignation.set(property.split(" ")[1], expression);
    }
  });

  // Now that all async operations have completed, display the first content
  displayContentInsideViewer(currentIndex); // Start by displaying the first item
  updateButtonStates(); // Set the initial state of the navigation buttons
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

function hideElementBySelector(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = "none";
  } else {
    console.log("Element not found for selector:", selector);
  }
}

function showElementBySelector(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = ""; // Adjust this as necessary for different display types like 'flex', 'inline', etc.
  } else {
    console.log("Element not found for selector:", selector);
  }
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
    hideElementBySelector("#import-manifest-container");
    // Hide view documentation button
    hideElementBySelector("#viewerDocumentation");

    // Use the path to dynamically construct the full URL to the file
    const fileURL = `${pathToHtmlFolder}${fileName}`;
    httpGetWithCallback(fileURL, processFileContent); // Assuming httpGet can accept a callback as second parameter
  } else {
    hideElementBySelector("#navigationContainer");
    processFileContent();
  }

  document
    .getElementById("viewerDocumentation")
    .addEventListener("click", function () {
      window.location.href = "documentation.html";
    });
});
