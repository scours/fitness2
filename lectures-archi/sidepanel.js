/*
 * File: sidepanel.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 6th September 2022
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 6th February 2023
 * Modified By: Steward OUADI
 */

let englobingNavList = document.createElement("ul");
englobingNavList.className = "nav__list";

// Map to store LecturePath objects
const lecturesPaths = new Map();

/**
 * Content to display when children array is empty
 * @tocElement {*} tocElement table of content object (manifest file)
 * @returns list of Li element
 */
function contentToDisplayChildrenArrayEmpty(tocElement) {
  // Children array is empty, so we will just display Unit title
  console.log("children is empty");
  console.log(tocElement.title);
  console.log(tocElement.userProvidedURLForLecture);
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

  //   <button class="dropdown-btn">Dropdown
  //   <i class="fa fa-caret-down"></i>
  // </button>
  // <div class="dropdown-container">
  //   <a href="#">Link 1</a>
  //   <a href="#">Link 2</a>
  //   <a href="#">Link 3</a>
  // </div>
}

function createDropDownMenuElements() {
  for (let [keyI, valueI] of lecturesPaths) {
    if (valueI.children.size > 0) {
      // First level
      // If there are children
      const dropDownButtonAndContainerI = getDropdownButtonAndContainer(
        valueI.name,
        keyI
      );
      const dropdownButtonI = dropDownButtonAndContainerI.dropdownButton;

      const dropdownContainerDivI =
        dropDownButtonAndContainerI.dropdownContainerDiv;
      mainDropDownContainer.appendChild(dropdownButtonI);
      mainDropDownContainer.appendChild(dropdownContainerDivI);
      console.log("we will loop through valueI.children");
      for (let [keyJ, valueJ] of valueI.children) {
        if (valueJ.children.size > 0) {
          console.log("we will loop through valueJ.children");
          // Second level
          // If there are children
          const dropDownButtonAndContainerJ = getDropdownButtonAndContainer(
            valueJ.name,
            keyJ
          );
          const dropdownButtonJ = dropDownButtonAndContainerJ.dropdownButton;

          const dropdownContainerDivJ =
            dropDownButtonAndContainerJ.dropdownContainerDiv;
          dropdownContainerDivI.appendChild(dropdownButtonJ);
          dropdownContainerDivI.appendChild(dropdownContainerDivJ);

          for (let [keyK, valueK] of valueJ.children) {
            // Third level
            const aElementK = createAElementForDropDownMenu(keyK);
            console.log("displaying eElementK beg");
            console.log(aElementK);
            console.log("displaying eElementK end");
            dropdownContainerDivJ.appendChild(aElementK);
          }
        } else {
          const aElementJ = createAElementForDropDownMenu(keyJ);
          dropdownContainerDivI.appendChild(aElementJ);
        }
      }
    } else {
      const aElementI = createAElementForDropDownMenu(keyI);
      mainDropDownContainer.appendChild(aElementI);
    }
  }
  console.log("showing main dropdown container beg");
  console.log(mainDropDownContainer.outerHTML);
  console.log("showing main dropdown container end");
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

function createAElementForDropDownMenu(identifier) {
  const lecture = lecturesContainer.get(identifier);
  // We have a child, so we will insert it in the dropdown menu
  let aElement = document.createElement("a");

  aElement.href = "#" + identifier;
  aElement.text = lecture.title;
  aElement.id = identifier;
  aElement.setAttribute("class", "dropdown-container-class");
  aElement.addEventListener("click", (event) => {
    console.log("lecture from new drop down menu");
    console.log(event);
    console.log(identifier);
    const targetId = identifier;
    console.log(targetId);
    const y = 0;
    console.log("showing y");
    console.log(y);
    // We will modify main view to display the content of the selected lecture

    // Let's get the lecture by using its id in the map
    const mainDiv = document.createElement("div");

    const lecture = lecturesContainer.get(identifier);

    // Title
    const titleElement = document.createElement("h1");
    titleElement.innerHTML = lecture.title;

    // Difficulty level
    const difficultyLevelElement = document.createElement("p");
    const difficultyLevelNode = document.createTextNode(
      "Difficulty level: " + lecture.difficultyLevel
    );
    difficultyLevelElement.appendChild(difficultyLevelNode);

    addStarsToElement(lecture, difficultyLevelElement);

    // Topics
    const topicsElement = document.createElement("p");
    const topicsNode = document.createTextNode("Topics: " + lecture.topic);
    topicsElement.appendChild(topicsNode);

    // Abstract
    const abstractElement = document.createElement("p");
    const abstractNode = document.createTextNode(
      "Abstract: " + lecture.abstract
    );
    abstractElement.appendChild(abstractNode);

    // Course URL
    let courseUrlElement = document.createElement("a");
    courseUrlElement.href = lecture.userProvidedURLForLecture; // Get course URL
    courseUrlElement.text = "Read the lecture";
    courseUrlElement.target = "_blank";

    // Authors
    const authorsElement = document.createElement("p");
    const authorsNode = document.createTextNode("Authors: " + lecture.author);
    authorsElement.appendChild(authorsNode);

    mainDiv.appendChild(titleElement);
    mainDiv.appendChild(difficultyLevelElement);
    mainDiv.appendChild(topicsElement);
    mainDiv.appendChild(abstractElement);
    mainDiv.appendChild(courseUrlElement);
    mainDiv.appendChild(authorsElement);

    mainContent.innerHTML = mainDiv.outerHTML;
  });

  addStarsToElement(lecture, aElement);
  return aElement;
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
      console.log("clicked on a dropdown subfolder");
      console.log(this);
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
async function extractMetaData() {
  const pathSeparator = "/";
  let basePath =
    "https://raw.githubusercontent.com/scours/fitness2/wip/manifests" +
    pathSeparator;
  // let basePath = "http://127.0.0.1:5501/manifests2" + pathSeparator;

  // let basePath = "manifests" + pathSeparator;
  let fileExtension = ".manifest";

  // We will use a text which includes a timestamp (random number) to force refresh
  // When we want to get the https file. Otherwise, the change is not immediate.
  // It can take minutes to see the changes event if you force refresh the browser.

  const textToForceRefresh = "?t=" + Date.now();
  let rootFileName = basePath + "root" + fileExtension + textToForceRefresh;

  const res = await fetch(rootFileName); // fetch method will fetch JSON file
  console.log(res);
  if (res.ok) {
    // tocElement, is table of content element, its an object that contains lectures information
    let tocElement = await res.json();
    console.log(tocElement);

    if (tocElement !== "undefined") {
      if (tocElement.children.length > 0) {
        let filePath = "";

        // If children array is not empty, check children content
        for (let i = 0; i < tocElement.children.length; i++) {
          filePath = tocElement.children[i];
          const level1ChildRes = await fetch(
            basePath + filePath + fileExtension
          );

          console.log(level1ChildRes);
          if (level1ChildRes.ok) {
            // tocElementLevel1, is table of content element, its an object that contains lectures information
            let tocElementLevel1 = await level1ChildRes.json();
            console.log(tocElementLevel1);

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
                      undefined
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
                        fileLecturePath
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
                      undefined
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
                        undefined
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
                        fileLecturePath
                      );

                      // Add folder 2 as a child of folder 1
                      folder1LecturePath.addChild(folder2LecturePath);
                      // And add it inside the lecturesPaths
                      // lecturesPaths.set(splitPath[1], folder2LecturePath);
                    }

                    // // Search in lecturesPaths if the folder 1 already exists
                    // if (lecturesPaths.has(splitPath[0])) {
                    //   // If it exists, we will get it
                    //   const folder1LecturePath = lecturesPaths.get(
                    //     splitPath[0]
                    //   );

                    //   // Search in folder1LecturePath if the folder 2 already exists
                    //   if (folder1LecturePath.children.has(splitPath[1])) {
                    //     // If it exists, we will add a new entry: this file as a children of folder 2
                    //     const folder2LecturePath = lecturesPaths.get(
                    //       splitPath[1]
                    //     );
                    //     folder2LecturePath.addChild(fileLecturePath);
                    //   } else {
                    //     // We will create a LecturePath for the folder 2
                    //     const folder2LecturePath = new LecturePath(
                    //       splitPath[0],
                    //       splitPath[1],
                    //       false,
                    //       fileLecturePath
                    //     );
                    //     // And add it inside the lecturesPaths
                    //     lecturesPaths.set(splitPath[1], folder2LecturePath);
                    //   }
                    // } else {
                    //   // We will create a LecturePath for the folder 1
                    //   const folder1LecturePath = new LecturePath(
                    //     undefined,
                    //     splitPath[0],
                    //     false,
                    //     fileLecturePath
                    //   );
                    //   // And add it inside the lecturesPaths
                    //   lecturesPaths.set(splitPath[0], folder1LecturePath);
                    // }
                  }

                  // We will insert the lecture into a map
                  lecturesContainer.set(lectureKey, tocElementLevel1);
                }
              } else {
                // There is no separator, so this is just a level 1 file.
                const currentLecturePath = new LecturePath(
                  undefined,
                  filePath,
                  true,
                  undefined
                );

                // Add this lecture inside the lecturesPaths
                lecturesPaths.set(filePath, currentLecturePath);
                // We will insert the lecture into a map
                lecturesContainer.set(filePath, tocElementLevel1);
              }
            }
          } else {
            console.log("Can't read level 1 file");
          }
        }
        console.log("lecturesPaths beg");
        console.log(lecturesPaths);
        console.log("lecturesPaths end");
        createDropDownMenuElements();
      } else {
        // Children array is empty, so we will just display title
        console.log("root level, children is empty");
        console.log(tocElement.title);
        console.log(tocElement.userProvidedURLForLecture);
        englobingNavList.appendChild(
          contentToDisplayChildrenArrayEmpty(tocElement)
        );
      }
    }
  } else {
    console.log("Can't read root file");
  }
  addListenersToDropdownButtons();
}
extractMetaData();
/*let myLectPath = new LecturePath("parentName", "Name", false, "children");
console.log(myLectPath);
console.log(myLectPath.parentName);*/

function loadFile(filePath) {
  // Create a <script> tag, set its source
  let scriptTag = document.createElement("script");

  // And listen to it
  scriptTag.onload = function (loadEvent) {
    // This function is an event handler of the script tag
    handleEvent();
  };

  // Make sure this file actually loads instead of a cached version
  // Add a timestamp onto the URL (i.e. file.js?bust=12345678)
  let cacheBuster = "?bust=" + new Date().getTime();

  // Set the type of file and where it can be found
  scriptTag.type = "text/javascript";
  // scriptTag.src = filePath + cacheBuster;
  scriptTag.src = filePath;

  // Finally add it to the <head>
  document.getElementsByTagName("head")[0].appendChild(scriptTag);
}

// function openNav() {
//   document.getElementById("sidebar-menu").style.width = "60%";
//   document.getElementById("main-id").style.marginLeft = "60%";

//   document.getElementById("open-menu-button").style.visibility = "hidden";
// }

// function closeNav() {
//   document.getElementById("sidebar-menu").style.width = "0";
//   document.getElementById("main-id").style.marginLeft = "0";

//   document.getElementById("open-menu-button").style.visibility = "visible";
// }

function openNav() {
  document.getElementById("sidebar-menu").style.width = "60%";
  document.getElementById("main-id").style.marginLeft = "60%";
  // document.getElementById("open-menu-button").classList.toggle("hidden");
  document.getElementById("open-menu-button").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("sidebar-menu").style.width = "0";
  document.getElementById("main-id").style.marginLeft = "0";
  // document.getElementById("open-menu-button").classList.toggle("hidden");
  document.getElementById("open-menu-button").style.visibility = "visible";
}

// window.onload = function () {
//   document
//     .getElementById("open-menu-button")
//     .addEventListener("click", openNav);
//   document.getElementById("sidebar-menu").addEventListener("click", closeNav);
// };

// function openNav() {
//   document.getElementById("sidebar-menu").style.width = "60%";
//   document.getElementById("reveal-global-div").style.marginLeft = "60%";
//   document.getElementById("open-menu-button").style.visibility = "hidden";
// }

// function closeNav() {
//   document.getElementById("sidebar-menu").style.width = "0";
//   document.getElementById("reveal-global-div").style.marginLeft = "0";
//   document.getElementById("open-menu-button").style.visibility = "visible";
// }
