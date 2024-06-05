/*
 * File: lectures.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 6th September 2022
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Wednesday, 5th June 2024
 * Modified By: Steward OUADI
 */

let englobingNavList = document.createElement("ul");
englobingNavList.className = "nav__list";

// Map to store LecturePath objects
const lecturesPaths = new Map();

// Map of URLs to redirect, key is old URL, value is new URL
const urlsToRedirect = new Map();

const refreshLecturesPrefetch = false;
let lecturesPrefetchContent =
  "let dropDownMenuContent; let lecturesDetails = new Map();";
launchRefreshLecturesPrefetch();

async function launchRefreshLecturesPrefetch() {
  if (refreshLecturesPrefetch === true) {
    await extractMetaDataOri();
    console.log("lecturesPrefetchContent beg");
    console.log(lecturesPrefetchContent);
    console.log("lecturesPrefetchContent end");
  }
}

/**
 * Content to display when children array is empty
 * @tocElement {*} tocElement table of content object (manifest file)
 * @returns list of Li element
 */
function contentToDisplayChildrenArrayEmpty(tocElement) {
  // Children array is empty, so we will just display Unit title
  let groupListLiElement = document.createElement("li");
  let groupListAElement = document.createElement("a");
  groupListAElement.href = tocElement.userProvidedURLForLecture; // Get course URL
  groupListAElement.text = tocElement.title;
  groupListAElement.target = "_blank";
  groupListLiElement.appendChild(groupListAElement);

  return groupListLiElement;
}

const mainDropDownContainer = document.getElementById("dropdown-container-id");
const mainContent = document.getElementById("main-content");
// Map in which we have a dropdown menu id and its corresponding lecture
const lecturesContainer = new Map();

function getDropdownButtonAndContainer(dropdownButtonName, id) {
  const dropdownButton = document.createElement("button");
  dropdownButton.setAttribute("class", "dropdown-btn");
  dropdownButton.id = "dropdown-btn-" + id;
  dropdownButton.innerHTML = dropdownButtonName;

  const iElement = document.createElement("i");
  iElement.setAttribute("class", "fa fa-caret-down");

  dropdownButton.appendChild(iElement);

  const dropdownContainerDiv = document.createElement("div");
  dropdownContainerDiv.setAttribute("class", "dropdown-container");
  dropdownContainerDiv.id = "dropdown-container-" + id;

  return { dropdownButton, dropdownContainerDiv };
}

function createDropDownMenuElements() {
  const div = document.createElement("div");

  div.innerHTML = dropDownMenuContent;
  mainDropDownContainer.appendChild(div);
  console.log(mainDropDownContainer.innerHTML);
}

function createDropDownMenuElementsToPrint() {
  console.log("createDropDownMenuElementsToPrint beg");
  // Create a document fragment to hold the dropdown menu
  const dropdownFragment = document.createDocumentFragment();

  for (let [keyI, valueI] of lecturesPaths) {
    const dropdownButtonAndContainerI = getDropdownButtonAndContainer(
      valueI.name,
      keyI
    );
    const dropdownButtonI = dropdownButtonAndContainerI.dropdownButton;
    const dropdownContainerDivI =
      dropdownButtonAndContainerI.dropdownContainerDiv;

    if (valueI.children.size > 0) {
      for (let [keyJ, valueJ] of valueI.children) {
        const dropdownButtonAndContainerJ = getDropdownButtonAndContainer(
          valueJ.name,
          keyJ
        );
        const dropdownButtonJ = dropdownButtonAndContainerJ.dropdownButton;
        const dropdownContainerDivJ =
          dropdownButtonAndContainerJ.dropdownContainerDiv;

        if (valueJ.children.size > 0) {
          for (let [keyK, valueK] of valueJ.children) {
            // It is a third level lecture
            const aElementK = createAElementForDropDownMenuToPrint(
              valueK.manifestPath
            );
            dropdownContainerDivJ.appendChild(aElementK);
          }
        } else {
          if (valueJ.manifestPath !== null) {
            // It is a second level lecture
            const aElementJ = createAElementForDropDownMenuToPrint(
              valueJ.manifestPath
            );
            dropdownContainerDivJ.appendChild(aElementJ);
          }
        }

        dropdownContainerDivI.appendChild(dropdownButtonJ);
        dropdownContainerDivI.appendChild(dropdownContainerDivJ);
      }
    } else {
      if (valueI.manifestPath !== null) {
        // It is a first level lecture
        const aElementI = createAElementForDropDownMenuToPrint(
          valueI.manifestPath
        );
        dropdownContainerDivI.appendChild(aElementI);
      }
    }

    dropdownFragment.appendChild(dropdownButtonI);
    dropdownFragment.appendChild(dropdownContainerDivI);
  }

  mainDropDownContainer.innerHTML = "";

  // Append the entire dropdown menu at once
  mainDropDownContainer.appendChild(dropdownFragment);

  console.log(mainDropDownContainer.innerHTML);
  lecturesPrefetchContent +=
    "dropDownMenuContent = `" + mainDropDownContainer.innerHTML + "`;";
  console.log("createDropDownMenuElementsToPrint end");
}

function getStarElements(difficultyLevel) {
  const firstStar = document.createElement("i");
  const secondStar = document.createElement("i");
  const thirdStar = document.createElement("i");

  const stars = [firstStar, secondStar, thirdStar];

  if (difficultyLevel.toLowerCase() === "novice") {
    firstStar.setAttribute("class", "fa fa-star star-color-green little-space");
    secondStar.setAttribute(
      "class",
      "fa fa-star-o star-color-green little-space"
    );
    thirdStar.setAttribute(
      "class",
      "fa fa-star-o star-color-green little-space"
    );
  }

  if (difficultyLevel.toLowerCase() === "intermediate") {
    firstStar.setAttribute(
      "class",
      "fa fa-star star-color-yellow little-space"
    );
    secondStar.setAttribute(
      "class",
      "fa fa-star star-color-yellow little-space"
    );
    thirdStar.setAttribute(
      "class",
      "fa fa-star-o star-color-yellow little-space"
    );
  }

  if (difficultyLevel.toLowerCase() === "advanced") {
    for (let i = 0; i < stars.length; i++) {
      stars[i].setAttribute("class", "fa fa-star star-color-red little-space");
    }
  }

  return stars;
}

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function createAElementForDropDownMenuToPrint(identifier) {
  // console.log("createAElementForDropDownMenuToPrint beg");
  const lecture = lecturesContainer.get(identifier);
  // We have a child, so we will insert it in the dropdown menu
  let aElement = document.createElement("a");

  let backgroundColor = "#ec6807";

  // Course URL
  let courseButtonElement = document.createElement("a"); // Use an anchor tag instead of a button
  courseButtonElement.target = "_blank";
  courseButtonElement.classList.add("btn", "btn-primary");
  courseButtonElement.textContent = "Read the lecture";
  // Apply the background color using the style attribute
  courseButtonElement.style.backgroundColor = backgroundColor;
  courseButtonElement.style.borderColor = backgroundColor;
  // Apply the margin in percentage to create space below the button
  courseButtonElement.style.marginBottom = "2%";

  // Split the identifier string by '/'
  let parts = identifier.split("/");

  // Get the last part of the string
  let lastPart = parts[parts.length - 1];

  // Create the href attribute
  courseButtonElement.href = lecture.userProvidedURLForLecture;

  // You can keep the "id" for further styling or scripting, if needed
  courseButtonElement.id = "lecture-button-" + lastPart;

  aElement.href = "#" + identifier;
  aElement.text = lecture.title;
  aElement.id = identifier;
  aElement.setAttribute("class", "dropdown-container-class");
  aElement.setAttribute("onclick", "lectureToDisplay(this.id)");

  // console.log("lecture from new drop down menu");
  // console.log(event);
  // console.log(identifier);
  const targetId = identifier;
  // console.log(targetId);
  const y = 0;
  // console.log("showing y");
  // console.log(y);

  const qAndABaseURL =
    "https://fitness.agroparistech.fr/fitness2/lectures/quiz-creator-tool-online/index.html#";

  // We will modify main view to display the content of the selected lecture

  // Let's get the lecture by using its id in the map
  const mainDiv = document.createElement("div");

  // const lecture = lecturesContainer.get(identifier);

  // Title
  const titleElement = document.createElement("h1");
  titleElement.innerHTML = lecture.title.trim();

  // Difficulty level
  const difficultyLevelHeader = document.createElement("h4");
  difficultyLevelHeader.innerHTML = "Difficulty level";
  const difficultyLevelElement = document.createElement("span");
  const difficultyLevelNode = document.createTextNode(lecture.difficultyLevel);
  difficultyLevelElement.appendChild(difficultyLevelNode);

  addStarsToElement(lecture, difficultyLevelElement);

  // Topics
  const topicsHeader = document.createElement("h4");
  topicsHeader.innerHTML = "Topics";
  const topicsElement = document.createElement("p");
  const topicsNode = document.createTextNode(lecture.topic);
  topicsElement.appendChild(topicsNode);

  // Abstract
  const abstractHeader = document.createElement("h4");
  abstractHeader.innerHTML = "Abstract";
  const abstractElement = document.createElement("p");
  const abstractNode = document.createTextNode(lecture.abstract);
  abstractElement.appendChild(abstractNode);

  // Authors
  const authorsHeader = document.createElement("h4");
  authorsHeader.innerHTML = "Authors";
  const authorsElement = document.createElement("ul"); // Use a <ul> for the list

  // Check if lecture.author is a string or an array
  if (Array.isArray(lecture.author)) {
    // If it's an array, iterate through authors
    lecture.author.forEach((author) => {
      const listItem = document.createElement("li");
      listItem.textContent = author.trim();
      authorsElement.appendChild(listItem);
    });
  } else if (typeof lecture.author === "string") {
    // If it's a string, split it by commas
    const authors = lecture.author.split(",");
    authors.forEach((author) => {
      const listItem = document.createElement("li");
      listItem.textContent = author.trim();
      authorsElement.appendChild(listItem);
    });
  }

  mainDiv.appendChild(titleElement);
  mainDiv.appendChild(difficultyLevelHeader);
  mainDiv.appendChild(difficultyLevelElement);
  mainDiv.appendChild(topicsHeader);
  mainDiv.appendChild(topicsElement);
  mainDiv.appendChild(abstractHeader);
  mainDiv.appendChild(abstractElement);
  mainDiv.appendChild(courseButtonElement);

  // Video
  if (lecture.video !== undefined) {
    const videoHeader = document.createElement("h4");
    videoHeader.innerHTML = "Video";

    // Create the video element
    var videoElement = document.createElement("video");
    videoElement.width = 640;
    videoElement.height = 360;
    videoElement.controls = true;

    // Create the source element and set its attributes
    var sourceElement = document.createElement("source");
    sourceElement.src = lecture.video;
    sourceElement.type = "video/mp4";

    // Create a text node for the content inside the video element
    var textNode = document.createTextNode(
      "Your browser does not support the video tag."
    );

    // Append the source element and text node to the video element
    videoElement.appendChild(sourceElement);
    videoElement.appendChild(textNode);

    mainDiv.appendChild(videoHeader);
    mainDiv.appendChild(videoElement);
  }
  const qAndAHeader = document.createElement("h4");
  qAndAHeader.innerHTML = "Test your knowledge";

  mainDiv.appendChild(qAndAHeader);

  const qAndAPar = document.createElement("p");
  qAndAPar.textContent = "There is no assessment for this lecture.";

  // console.log(lecture.qAndAVariables !== undefined);
  if (lecture.qAndAVariables !== undefined) {
    qAndAPar.textContent = ""; // As there are assessments, remove default assessment text
    for (let i = 0; i < lecture.qAndAVariables.length; i++) {
      var qAndAVariablesSplitted = lecture.qAndAVariables[i].split("=");
      const title = qAndAVariablesSplitted[0].trim(); // Get the title
      const qAndAVariableContent = qAndAVariablesSplitted[1].trim();
      const qAndAURL = document.createElement("a");

      if (title === "") {
        // If the title is empty, replace it with "Access Q/A number x"
        title = "Take quiz number " + (i + 1);
      }

      if (qAndAVariableContent.startsWith("https")) {
        // It is an URL, so we can point to it directly
        qAndAURL.href = qAndAVariableContent;
      } else {
        // It is a variable
        qAndAURL.href = qAndABaseURL + qAndAVariableContent;
      }
      qAndAURL.text = title;
      qAndAURL.target = "_blank";
      qAndAPar.appendChild(qAndAURL);
    }
  }
  mainDiv.appendChild(qAndAPar);

  mainDiv.appendChild(authorsHeader);
  mainDiv.appendChild(authorsElement);

  // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
  // mainContent.innerHTML = ""; // Clear the existing content
  // mainContent.appendChild(mainDiv);
  console.log(
    "lecturesDetails.set('" + identifier + "',`" + mainDiv.innerHTML + "`);"
  );
  lecturesPrefetchContent +=
    "lecturesDetails.set('" + identifier + "',`" + mainDiv.innerHTML + "`);";
  addStarsToElement(lecture, aElement);
  // console.log("createAElementForDropDownMenuToPrint end");
  return aElement;
}

function lectureToDisplay(identifier) {
  console.log("lectureToDisplay" + identifier);
  // use append instead of adding it directly with innerHTML because was preventing us to click on the button to read the lecture
  mainContent.innerHTML = ""; // Clear the existing content

  mainContent.innerHTML = lecturesDetails.get(identifier);
}

function addStarsToElement(lecture, element) {
  const stars = getStarElements(lecture.difficultyLevel);
  for (i = 0; i < stars.length; i++) {
    element.appendChild(stars[i]);
  }
}

function addListenersToDropdownButtons() {
  /* Loop through all dropdown buttons to toggle between hiding and 
  showing its dropdown content - This allows the user to have multiple
  dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");

  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      // console.log("clicked on a dropdown subfolder");
      // console.log(this);
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

/* Extract and store all lectures into a global array*/
function extractMetaData() {
  console.time("createDropDownMenuElements");
  createDropDownMenuElements();
  // createDropDownMenuElementsToPrint();
  console.log(mainContent.innerHTML);
  console.timeEnd("createDropDownMenuElements");
  addListenersToDropdownButtons();
  loader.style.display = "none"; // Hide the loader
}

/* Extract and store all lectures into a global array*/
async function extractMetaDataOri() {
  const pathSeparator = "/";
  // let basePath =
  //   "https://raw.githubusercontent.com/scours/fitness2/wip/manifests" +
  //   pathSeparator;
  let basePath = "http://127.0.0.1:5502/manifests" + pathSeparator;

  // let basePath = "manifests" + pathSeparator;
  let fileExtension = ".manifest";

  // We will use a text which includes a timestamp (random number) to force refresh
  // When we want to get the https file. Otherwise, the change is not immediate.
  // It can take minutes to see the changes event if you force refresh the browser.

  const textToForceRefresh = "?t=" + Date.now();
  let rootFileName = basePath + "root" + fileExtension + textToForceRefresh;

  const res = await fetch(rootFileName); // fetch method will fetch JSON file
  const lastModified = res.headers.get("Last-Modified");

  if (lastModified) {
    const lastModifiedDate = new Date(lastModified);
    console.log("Last Modified Date:", lastModifiedDate);
  } else {
    console.log("Last Modified Date not available.");
  }

  // console.log(res);
  if (res.ok) {
    // tocElement, is table of content element, its an object that contains lectures information
    let tocElement = await res.json();
    // console.log(tocElement);

    if (tocElement !== "undefined") {
      if (tocElement.children.length > 0) {
        let filePath = "";

        // If children array is not empty, check children content
        for (let i = 0; i < tocElement.children.length; i++) {
          filePath = tocElement.children[i];
          const level1ChildRes = await fetch(
            basePath + filePath + fileExtension
          );

          // console.log(level1ChildRes);
          if (level1ChildRes.ok) {
            // tocElementLevel1, is table of content element, its an object that contains lectures information
            let tocElementLevel1 = await level1ChildRes.json();
            // console.log(tocElementLevel1);

            if (tocElementLevel1 !== "undefined") {
              const splitPath = filePath.split(pathSeparator);

              // If file path contains path separator, it's at least level 2,
              // otherwise, it's level 1, there is no sub folder
              if (filePath.includes(pathSeparator)) {
                // We are going up to level 3 to display lectures
                // We will not show the lecture if the path is above level 3
                if (splitPath.length <= 3) {
                  if (splitPath.length == 2) {
                    // The level is 2, so we have a folder and a file
                    // folder 1-> file.manifest

                    lectureKey = splitPath[1];
                    // We will create a LecturePath for the file
                    const fileLecturePath = new LecturePath(
                      splitPath[0],
                      splitPath[1],
                      true,
                      undefined,
                      filePath
                    );

                    // Search in lecturesPaths if this folder already exists
                    if (lecturesPaths.has(splitPath[0])) {
                      // If it exists, we will add a new entry this file as a children of the folder
                      const folderLecturePath = lecturesPaths.get(splitPath[0]);
                      folderLecturePath.addChild(fileLecturePath);
                    } else {
                      // We will create a LecturePath for the folder
                      const folderLecturePath = new LecturePath(
                        undefined,
                        splitPath[0],
                        false,
                        fileLecturePath,
                        filePath
                      );
                      // And add it inside the lecturesPaths
                      lecturesPaths.set(splitPath[0], folderLecturePath);
                    }
                  } else {
                    // The level is 3, so we have two folders and a file
                    // folder 1-> folder 2-> file.manifest

                    lectureKey = splitPath[2];
                    // We will create a LecturePath for the file
                    const fileLecturePath = new LecturePath(
                      splitPath[1],
                      splitPath[2],
                      true,
                      undefined,
                      filePath
                    );

                    let folder1LecturePath;
                    // Search in lecturesPaths if the folder 1 already exists
                    if (lecturesPaths.has(splitPath[0])) {
                      // If it exists, we will get it
                      folder1LecturePath = lecturesPaths.get(splitPath[0]);
                    } else {
                      // It does not exist, so, we will create a LecturePath for the folder 1
                      folder1LecturePath = new LecturePath(
                        undefined,
                        splitPath[0],
                        false,
                        undefined,
                        filePath
                      );
                      // And add it inside the lecturesPaths
                      lecturesPaths.set(splitPath[0], folder1LecturePath);
                    }

                    // Search in folder 1 if the folder 2 already exists
                    if (folder1LecturePath.children.has(splitPath[1])) {
                      // If it exists, we will add a new entry: this file as a children of folder 2
                      const folder2LecturePath =
                        folder1LecturePath.children.get(splitPath[1]);
                      folder2LecturePath.addChild(fileLecturePath);
                    } else {
                      // folder 2 does not exist inside folder 1
                      // We will create a LecturePath for the folder 2
                      // And add fileLecturePath as folder 2 lecture

                      const folder2LecturePath = new LecturePath(
                        splitPath[0],
                        splitPath[1],
                        false,
                        fileLecturePath,
                        filePath
                      );

                      // Add folder 2 as a child of folder 1
                      folder1LecturePath.addChild(folder2LecturePath);
                      // And add it inside the lecturesPaths
                      // lecturesPaths.set(splitPath[1], folder2LecturePath);
                    }
                  }

                  // We will insert the lecture into a map
                  lecturesContainer.set(filePath, tocElementLevel1);
                }
              } else {
                // There is no separator, so this is just a level 1 file.
                const currentLecturePath = new LecturePath(
                  undefined,
                  filePath,
                  true,
                  undefined,
                  filePath
                );

                // Add this lecture inside the lecturesPaths
                lecturesPaths.set(filePath, currentLecturePath);
                // We will insert the lecture into a map
                lecturesContainer.set(filePath, tocElementLevel1);
              }
            }
          } else {
            // console.log("Can't read level 1 file");
          }
        }
        console.time("createDropDownMenuElements");
        createDropDownMenuElementsToPrint();
        // createDropDownMenuElementsToPrint();
        console.log(mainContent.innerHTML);
        console.timeEnd("createDropDownMenuElements");
      } else {
        // Children array is empty, so we will just display title
        console.time("contentToDisplayChildrenArrayEmpty");
        englobingNavList.appendChild(
          contentToDisplayChildrenArrayEmpty(tocElement)
        );
        console.timeEnd("contentToDisplayChildrenArrayEmpty");
      }
    }
  } else {
    // console.log("Can't read root file");
  }
  // addListenersToDropdownButtons();
  loader.style.display = "none"; // Hide the loader
}
function readLectureFromUrl() {
  // If there is an URL with lecture identifier,
  // get identifier and display lectures details.

  // Get the full URL
  const fullURL = window.location.href;

  // Split the URL by the hash (#) character
  const parts = fullURL.split("#");

  // Check if there's a hash part
  if (parts.length === 2) {
    // The part after the hash is what we want to display
    const identifier = decodeURIComponent(parts[1]);
    lectureToDisplay(identifier);
    // redirectURLs(identifier, parts[0]);
  }
}

function setUrlsToRedirect() {
  urlsToRedirect.set(
    "Packaging materials/Packaging materials and shaping process/plastic-packaging-part-1",
    "Packaging materials/Packaging materials and shaping process/plastic-packaging"
  );
  urlsToRedirect.set(
    "Packaging materials/Packaging materials and shaping process/plastic-packaging-part-2",
    "Packaging materials/Packaging materials and shaping process/plastic-packaging"
  );

  urlsToRedirect.set(
    "Packaging materials/Packaging materials and shaping process/glass-packaging-part-1",
    "Packaging materials/Packaging materials and shaping process/glass-packaging"
  );
  urlsToRedirect.set(
    "Packaging materials/Packaging materials and shaping process/glass-packaging-part-2",
    "Packaging materials/Packaging materials and shaping process/glass-packaging"
  );

  urlsToRedirect.set(
    "Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-1",
    "Packaging materials/Packaging materials and shaping process/paper-and-paperboard"
  );
  urlsToRedirect.set(
    "Packaging materials/Packaging materials and shaping process/paper-and-paperboard-part-2",
    "Packaging materials/Packaging materials and shaping process/paper-and-paperboard"
  );

  urlsToRedirect.set(
    "Packaging properties/Chemical and physical/food-packaging-interactions",
    "Packaging properties/Chemical and physical/food-packaging-interaction"
  );

  urlsToRedirect.set(
    "Packaging properties/Chemical and physical/strategies-to-reduce-food-packaging-interactions",
    "Packaging properties/Chemical and physical/food-packaging-interactions"
  );

  urlsToRedirect.set(
    "Packaging properties/Principles of mass transfer/principles-part-1",
    "Packaging properties/Principles of mass transfer/advanced-principles-of-mass-transfer-in-food-packaging"
  );

  urlsToRedirect.set(
    "Packaging properties/Principles of mass transfer/principles-part-2",
    "Packaging properties/Principles of mass transfer/advanced-principles-of-mass-transfer-in-food-packaging"
  );

  urlsToRedirect.set(
    "Innovations/Biobased and biodegradable materials/cellulose-derivates",
    "Innovations/Biobased and biodegradable materials/from-polymers-to-bioplastics"
  );

  urlsToRedirect.set(
    "Innovations/Active packaging/humidity-control",
    "Innovations/Active packaging/overview"
  );
}

function redirectURLs(identifier, baseURL) {
  // If the current url does not exist anymore, replace by new existing url

  if (urlsToRedirect.has(identifier)) {
    window.location.href = baseURL + "#" + urlsToRedirect.get(identifier);

    // Reload the page
    window.location.reload();
  }
}

// Display loader as soon as the page is loaded
loader.style.display = "block";
console.time("extractMetaData");
extractMetaData();
setUrlsToRedirect();
readLectureFromUrl();
console.timeEnd("extractMetaData");

function loadFile(filePath) {
  // Create a <script> tag, set its source
  let scriptTag = document.createElement("script");

  // And listen to it
  scriptTag.onload = function (loadEvent) {
    // This function is an event handler of the script tag
    handleEvent();
  };

  // Set the type of file and where it can be found
  scriptTag.type = "text/javascript";
  scriptTag.src = filePath;

  // Finally add it to the <head>
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
}

function openNav() {
  document.getElementById("sidebar-menu").style.width = "60%";
  document.getElementById("main-id").style.marginLeft = "60%";
  document.getElementById("open-menu-button").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sidebar-menu").style.width = "0";
  document.getElementById("main-id").style.marginLeft = "0";
  document.getElementById("open-menu-button").style.visibility = "visible";
}
