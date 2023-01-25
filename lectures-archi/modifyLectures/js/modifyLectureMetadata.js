/*
 * File: modifyLectureMetadata.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS 2 ERASMUS+
 * File Created: Thursday, 5th November 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 25th January 2023
 * Modified By: Steward OUADI
 * -----
 */
// Get all lectures from local storage.
// const lectures = JSON.parse(localStorage.getItem('lectures'));

let currentLectureId = "";
let currentLecture = "";
const levels = new Set(); // Set containing all the levels for all lectures
const difficultyLevel = new Set(); // Set containing all the difficulty levels for all lectures
const sections = new Set(); // Set containing all the sections for all lectures
const units = new Set(); // Set containing all the units for all lectures
const institutions = new Set(); // Set containing all the institutions for all lectures

// Set element ids so we can get them from "document" object
const headerElementId = "header";
const titleElementId = "title";
const levelElementId = "select-level";
const sectionElementId = "select-section";
const unitElementId = "select-unit";
const difficultyLevelElementId = "select-difficulty-level";
const partElementId = "part";
const authorElementId = "author";
const institutionElementId = "institution";
const abstractElementId = "abstract";
const topicsElementId = "topics";
const licenseElementId = "license";
const keywordsElementId = "keywords";

const titleMinLengthElementId = "title-min-length";
const titleMaxLengthElementId = "title-max-length";
const abstractMinLengthElementId = "abstract-min-length";
const abstractMaxLengthElementId = "abstract-max-length";

const topicsMinLengthElementId = "topics-min-length";
const topicsMaxLengthElementId = "topics-max-length";
const topicsContainerElementId = "nb-topics-container";
const topicsNbCurrentElementId = "topics-current-nb";
const topicsMaximumNbElementId = "topics-maximum-nb";
const topicsPassedOrFailedElementId = "topics-passed-or-failed";
const topicsVerifyMinLengthElementId = "topics-verify-min-length";

const titleNbCharsContainerElementId = "title-nb-chars-container";
const titleNbCurrentCharsElementId = "title-nb-current-chars";
const titleMaximumNbCharsElementId = "title-maximum-nb-chars";
const titlePassedOrFailedElementId = "title-passed-or-failed";
const titleVerifyMinLengthElementId = "title-verify-min-length";

const abstractNbWordsContainerElementId = "abstract-nb-words-container";
const abstractNbCurrentWordsElementId = "abstract-nb-current-words";
const abstractMaximumNbWordsElementId = "abstract-maximum-nb-words";
const abstractPassedOrFailedElementId = "abstract-passed-or-failed";
const abstractVerifyMinLengthElementId = "abstract-verify-min-length";

const keywordsNbCharsContainerElementId = "nb-keywords-container";
const keywordsNbCurrentNbWordsElementId = "current-nb-words-keywords";
const keywordsMaximumNbWordsElementId = "maximum-nb-words-keywords";
const keywordsPassedOrFailedElementId = "keywords-passed-or-failed";
const keywordsVerifyMinLengthElementId = "keywords-verify-min-length";

const keywordsMinLengthElementId = "keywords-min-length";
const keywordsMaxLengthElementId = "keywords-max-length";

const lectureUrlElementId = "lecture-url";

// Set boolean values for minimum requirements for some fields
let titleMeetsMinimumRequirements = false;
let abstractMeetsMinimumRequirements = false;
let keywordsMeetsMinimumRequirements = false;
let topicsMeetsMinimumRequirements = false;

// Get elements by id
const header = document.getElementById(headerElementId);
const title = document.getElementById(titleElementId);
const titleTextareaMinLength = document.getElementById(titleMinLengthElementId);
const titleTextareaMaxLength = document.getElementById(titleMaxLengthElementId);
const titleTextareaVerifyMinLength = document.getElementById(
  titleVerifyMinLengthElementId
);

const abstract = document.getElementById(abstractElementId);
const abstractTextareaMinLength = document.getElementById(
  abstractMinLengthElementId
);
const abstractTextareaMaxLength = document.getElementById(
  abstractMaxLengthElementId
);
const abstractTextareaVerifyMinLength = document.getElementById(
  abstractVerifyMinLengthElementId
);

const keywords = document.getElementById(keywordsElementId);
const keywordsTextareaVerifyMinLength = document.getElementById(
  keywordsVerifyMinLengthElementId
);
const keywordsTextareaMinLength = document.getElementById(
  keywordsMinLengthElementId
);
const keywordsTextareaMaxLength = document.getElementById(
  keywordsMaxLengthElementId
);

const topics = document.getElementById(topicsElementId);
const topicsTextareaVerifyMinLength = document.getElementById(
  topicsVerifyMinLengthElementId
);
const topicsTextareaMinLength = document.getElementById(
  topicsMinLengthElementId
);
const topicsTextareaMaxLength = document.getElementById(
  topicsMaxLengthElementId
);

const lectureUrlInput = document.getElementById(lectureUrlElementId);

// Set min and max values
const titleMaxLength = 300;
const titleRawMinLength = titleMaxLength / 11;
// Round min length to the previous multiple of 10
const titleMinLength = Math.floor((titleRawMinLength + 1) / 10) * 10;

const abstractMaxLength = 1500;
// Round min length to the previous multiple of 10
const abstractMinLength = 60;
let abstractNbWords = 0; // Count the number of words in abstract textarea. Used to prevent from writing when limit has been reached

const maxKeywords = 15;
const minKeywords = 3;

const topicsMinLength = 1;
const topicsMaxLength = 8;

const minId = 100; // Minimum lecture ID
const maxId = 900000; // Maximum lecture ID

function createLectureFileName(isoStringDate, title) {
  let lectureFileName;

  // Remove chars not allowed in path
  let removedCharsNotAllowed = title.replace(/[/\\?%*:|"<>]/g, "-");

  // Replace Multiple Spaces with a Single Space
  let singleSpaceTitle = removedCharsNotAllowed.replace(/  +/g, " ");
  console.log(singleSpaceTitle);

  // Replace all spaces with dash sign
  let dashSignTitle = singleSpaceTitle.replaceAll(" ", "-");
  console.log(dashSignTitle);

  lectureFileName = `manifest_${dashSignTitle}__iso-date_${isoStringDate}.json`;

  return lectureFileName;
}
function updateElementCountStyle(
  nbElementCount,
  currentNbElementCount,
  maximumNbElementCount,
  nbCountElementContainer,
  mean,
  minNbElements,
  passedOrFailed,
  passedOrFailedId
) {
  // Change element count style based on current element length
  if (nbElementCount < mean) {
    currentNbElementCount.style.cssText = "color: #666";
  }
  if (nbElementCount >= mean) {
    maximumNbElementCount.style.cssText = "color: #8f0001";
    currentNbElementCount.style.cssText = "color: #8f0001";
    nbCountElementContainer.style.cssText = "font-weight: bold";
  } else {
    maximumNbElementCount.style.cssText = "color: #666";
    nbCountElementContainer.style.cssText = "font-weight: normal";
    // if (abstractCheckMark.classList.contains('text-success')) {
    //   abstractCheckMark.classList.remove('text-success');
    // }
    // abstractCheckMark.classList.add('text-danger');
  }

  // Watch and update passed or failed check mark based on nbElementCount value
  if (nbElementCount >= minNbElements) {
    passedOrFailed.innerHTML = `<svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-check-circle-fill text-success"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>`;
    if (passedOrFailedId === titlePassedOrFailedElementId) {
      titleMeetsMinimumRequirements = true;
    }

    if (passedOrFailedId === abstractPassedOrFailedElementId) {
      abstractMeetsMinimumRequirements = true;
    }

    if (passedOrFailedId === keywordsPassedOrFailedElementId) {
      keywordsMeetsMinimumRequirements = true;
    }

    if (passedOrFailedId === topicsPassedOrFailedElementId) {
      topicsMeetsMinimumRequirements = true;
    }
  } else {
    passedOrFailed.innerHTML = `<svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-x-circle-fill text-danger"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>`;
    if (passedOrFailedId === titlePassedOrFailedElementId) {
      titleMeetsMinimumRequirements = false;
    }

    if (passedOrFailedId === abstractPassedOrFailedElementId) {
      abstractMeetsMinimumRequirements = false;
    }

    if (passedOrFailedId === keywordsPassedOrFailedElementId) {
      keywordsMeetsMinimumRequirements = false;
    }

    if (passedOrFailedId === topicsPassedOrFailedElementId) {
      topicsMeetsMinimumRequirements = false;
    }
  }
}

function charCount(
  nbCharsContainerId,
  currentNbCharsId,
  maximumNbCharsId,
  passedOrFailedId,
  value,
  maxNbChars,
  minNbChars
) {
  const nbChars = value.trim().length;
  const currentNbChars = document.getElementById(currentNbCharsId);
  const maximumNbChars = document.getElementById(maximumNbCharsId);
  const nbCharsContainer = document.getElementById(nbCharsContainerId);
  const passedOrFailed = document.getElementById(passedOrFailedId);

  currentNbChars.innerHTML = nbChars;
  maximumNbChars.innerHTML = maxNbChars;
  updateElementCountStyle(
    nbChars,
    currentNbChars,
    maximumNbChars,
    nbCharsContainer,
    maxNbChars / 2,
    minNbChars,
    passedOrFailed,
    passedOrFailedId
  );
}

function wordCount(
  nbWordsContainerId,
  currentNbWordsId,
  maximumNbWordsId,
  passedOrFailedId,
  wordTextareaId,
  maxNbWords,
  minNbWords
) {
  const wordTextarea = document.getElementById(wordTextareaId);
  const rawWords = wordTextarea.value;
  const nbWords = rawWords.trim().split(/\s+/).length;

  const currentNbChars = document.getElementById(currentNbWordsId);
  const maximumNbChars = document.getElementById(maximumNbWordsId);
  const nbCharsContainer = document.getElementById(nbWordsContainerId);
  const passedOrFailed = document.getElementById(passedOrFailedId);

  if (nbWords >= maxNbWords) {
    // Maximum number of words reached, set max length so the user can't add words
    wordTextarea.maxLength = rawWords.length;
  } else {
    // Long length, so the user can enter his words
    wordTextarea.maxLength = 100000;
  }

  abstractNbWords = nbWords;
  currentNbChars.innerHTML = nbWords;
  maximumNbChars.innerHTML = maxNbWords;
  updateElementCountStyle(
    nbWords,
    currentNbChars,
    maximumNbChars,
    nbCharsContainer,
    maxNbWords / 2,
    minNbWords,
    passedOrFailed,
    passedOrFailedId
  );
}

function commaSeparatedWordCount(
  nbWordsContainerId,
  currentNbWordsId,
  maximumNbWordsId,
  passedOrFailedId,
  keywordsId,
  maxKeywords,
  minKeywords
) {
  const keywords = document.getElementById(keywordsId);
  const rawKeywords = keywords.value;
  const currentNbWords = document.getElementById(currentNbWordsId);
  const maximumNbWords = document.getElementById(maximumNbWordsId);
  const nbWordsContainer = document.getElementById(nbWordsContainerId);
  const passedOrFailed = document.getElementById(passedOrFailedId);

  const splitKeywords = rawKeywords.split(",");

  const uniqueKeywords = new Set();
  // Trim keyword if necessary
  splitKeywords.forEach((keyword) => {
    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword.length > 0) {
      uniqueKeywords.add(trimmedKeyword);
    }
  });

  let nbCommas = 0;
  const found = rawKeywords.match(/,/g);
  if (found !== null) {
    nbCommas = found.length;
  }

  if (nbCommas === maxKeywords) {
    // Maximum number of keywords reached, set max length so the user can't add keywords
    keywords.maxLength = rawKeywords.length;
  } else {
    // Long length, so the user can enter his keywords
    keywords.maxLength = 1000;
  }

  currentNbWords.innerHTML = uniqueKeywords.size;
  maximumNbWords.innerHTML = maxKeywords;
  updateElementCountStyle(
    uniqueKeywords.size,
    currentNbWords,
    maximumNbWords,
    nbWordsContainer,
    maxKeywords / 2,
    minKeywords,
    passedOrFailed,
    passedOrFailedId
  );
}

function fillInputs(lecture) {
  header.innerHTML = lecture.title;

  fillInput(titleElementId, lecture.title);
  titleTextareaVerifyMinLength.innerHTML = titleMinLength;
  titleTextareaMinLength.innerHTML = titleMinLength;
  titleTextareaMaxLength.innerHTML = titleMaxLength;
  title.maxLength = titleMaxLength;
  charCount(
    titleNbCharsContainerElementId,
    titleNbCurrentCharsElementId,
    titleMaximumNbCharsElementId,
    titlePassedOrFailedElementId,
    title.value,
    titleMaxLength,
    titleMinLength
  );

  // Set listener so we can update count on type
  title.addEventListener("input", () =>
    charCount(
      titleNbCharsContainerElementId,
      titleNbCurrentCharsElementId,
      titleMaximumNbCharsElementId,
      titlePassedOrFailedElementId,
      title.value,
      titleMaxLength,
      titleMinLength
    )
  );

  fillInput(partElementId, lecture.part);
  fillInput(authorElementId, lecture.author);
  fillInput(institutionElementId, lecture.institution);

  fillInput(abstractElementId, lecture.abstract);
  abstractTextareaMinLength.innerHTML = abstractMinLength;
  abstractTextareaVerifyMinLength.innerHTML = abstractMinLength;
  abstractTextareaMaxLength.innerHTML = abstractMaxLength;
  abstract.maxLength = abstractMaxLength;
  wordCount(
    abstractNbWordsContainerElementId,
    abstractNbCurrentWordsElementId,
    abstractMaximumNbWordsElementId,
    abstractPassedOrFailedElementId,
    abstractElementId,
    abstractMaxLength,
    abstractMinLength
  );

  // Set listener so we can update count on type
  abstract.addEventListener("input", () =>
    wordCount(
      abstractNbWordsContainerElementId,
      abstractNbCurrentWordsElementId,
      abstractMaximumNbWordsElementId,
      abstractPassedOrFailedElementId,
      abstractElementId,
      abstractMaxLength,
      abstractMinLength
    )
  );

  fillInput(topicsElementId, lecture.topic);
  topicsTextareaMinLength.innerHTML = topicsMinLength;
  topicsTextareaMaxLength.innerHTML = topicsMaxLength;
  topicsTextareaVerifyMinLength.innerHTML = topicsMinLength;
  commaSeparatedWordCount(
    topicsContainerElementId,
    topicsNbCurrentElementId,
    topicsMaximumNbElementId,
    topicsPassedOrFailedElementId,
    topicsElementId,
    topicsMaxLength,
    topicsMinLength
  );
  topics.addEventListener("input", () =>
    commaSeparatedWordCount(
      topicsContainerElementId,
      topicsNbCurrentElementId,
      topicsMaximumNbElementId,
      topicsPassedOrFailedElementId,
      topicsElementId,
      topicsMaxLength,
      topicsMinLength
    )
  );

  fillInput(keywordsElementId, lecture.keywords);
  keywordsTextareaMinLength.innerHTML = minKeywords;
  keywordsTextareaMaxLength.innerHTML = maxKeywords;
  keywordsTextareaVerifyMinLength.innerHTML = minKeywords;
  commaSeparatedWordCount(
    keywordsNbCharsContainerElementId,
    keywordsNbCurrentNbWordsElementId,
    keywordsMaximumNbWordsElementId,
    keywordsPassedOrFailedElementId,
    keywordsElementId,
    maxKeywords,
    minKeywords
  );
  keywords.addEventListener("input", () =>
    commaSeparatedWordCount(
      keywordsNbCharsContainerElementId,
      keywordsNbCurrentNbWordsElementId,
      keywordsMaximumNbWordsElementId,
      keywordsPassedOrFailedElementId,
      keywordsElementId,
      maxKeywords,
      minKeywords
    )
  );

  fillInput(licenseElementId, lecture.license);
  fillInput(lectureUrlElementId, lecture.userProvidedURLForLecture);

  createDropDownOptions(levelElementId, levels, lecture.level);
  createDropDownOptions(sectionElementId, sections, lecture.section);
  createDropDownOptions(unitElementId, units, lecture.unit);
  createDropDownOptions(
    difficultyLevelElementId,
    difficultyLevel,
    lecture.difficultyLevel
  );
  createDropDownOptions(
    institutionElementId,
    institutions,
    lecture.institution
  );
}

function download(filename, stringifiedModifiedLecture) {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(stringifiedModifiedLecture)
  );
  element.download = filename;

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const filename = document.getElementById("upload-button");
// Start file upload.

filename.addEventListener("change", function () {
  // Creating a FileReader object using the constructor.
  const fileReader = new FileReader();
  // Reading a file as plain text
  fileReader.readAsText(filename.files[0]);
  // Call this function to print the contents of the file
  // once the file has been read.
  fileReader.onload = function () {
    const lecture = JSON.parse(fileReader.result);
    currentLecture = lecture;
    setDropDownData(lecture);
    fillInputs(lecture);
  };
  // Print the error incase there is one
  fileReader.onerror = function () {
    console.log("Error: ", fileReader.error);
  };
});

function getArrayOfString(elementId) {
  const rawString = document.getElementById(elementId).value;
  if (rawString.includes(",")) {
    // If string has a comma char, then split every string

    const splitString = rawString.split(",");
    const words = [];
    // Trim word if necessary
    splitString.forEach((word) => {
      const trimmedWord = word.trim();

      // Verify word length to deal with trailing comma (no word after the comma)
      if (trimmedWord.length > 0) {
        // If word is not empty string, push it into array
        words.push(trimmedWord);
      }
    });

    if (words.length > 1) {
      // There is more than one string in the array
      return words;
    }

    // There is only one string in the array, (because of trailing comma for example)
    return words[0];
  }

  // else, just return the string
  return rawString;
}

// Start file download.
document.getElementById("save-button").addEventListener("click", function () {
  const modifiedLecture = {};
  modifiedLecture.idx = currentLecture.idx;
  const isoStringDate = new Date().toISOString();

  // Set user modified values
  const title = document.getElementById(titleElementId).value;
  const level = document.getElementById(levelElementId).value;
  const section = document.getElementById(sectionElementId).value;
  const unit = document.getElementById(unitElementId).value;
  const difficultyLevel = document.getElementById(
    difficultyLevelElementId
  ).value;
  const part = document.getElementById(partElementId).value;
  // const author = document.getElementById(authorElementId).value;
  const institution = document.getElementById(institutionElementId).value;
  const abstract = document.getElementById(abstractElementId).value;
  const license = document.getElementById(licenseElementId).value;
  const userProvidedURLForLecture =
    document.getElementById(lectureUrlElementId).value;

  const keywords = getArrayOfString(keywordsElementId);
  const topic = getArrayOfString(topicsElementId);
  const author = getArrayOfString(authorElementId);

  modifiedLecture.title = title;
  modifiedLecture.level = level;
  modifiedLecture.section = section;
  modifiedLecture.unit = unit;
  modifiedLecture.difficultyLevel = difficultyLevel;
  modifiedLecture.part = part;
  modifiedLecture.author = author;
  modifiedLecture.institution = institution;
  modifiedLecture.abstract = abstract;
  modifiedLecture.topic = topic;
  modifiedLecture.license = license;
  modifiedLecture.keywords = keywords;
  modifiedLecture.userProvidedURLForLecture = userProvidedURLForLecture;

  const filename = createLectureFileName(isoStringDate, title);

  download(filename, JSON.stringify(modifiedLecture, null, 2));

  // Display alert message if some requirements are not met
  if (
    titleMeetsMinimumRequirements === false ||
    abstractMeetsMinimumRequirements === false ||
    keywordsMeetsMinimumRequirements === false ||
    topicsMeetsMinimumRequirements === false
  ) {
    let alertText =
      "Your modifications have been saved, but be aware that your content does not meet the minimum requirements (green check mark) for the following fields:";

    if (titleMeetsMinimumRequirements === false) {
      alertText += "\n  - Title ";
    }

    if (abstractMeetsMinimumRequirements === false) {
      alertText += "\n  - Abstract ";
    }

    if (topicsMeetsMinimumRequirements === false) {
      alertText += "\n  - Topics ";
    }

    if (keywordsMeetsMinimumRequirements === false) {
      alertText += "\n  - Keywords ";
    }
    alert(alertText);
  }
});

function setDifficultyLevelsDefaultValues() {
  difficultyLevel.add("Novice");
  difficultyLevel.add("Intermediate");
  difficultyLevel.add("Advanced");
}

function setInstitutionDefaultValues() {
  institutions.add("AgroParisTech");
  institutions.add("CSIC");
  institutions.add("FPF");
  institutions.add("Institut-Agro-Dijon");
  institutions.add("LNE");
  institutions.add("TUM");
  institutions.add("UB");
  institutions.add("UCP");
  institutions.add("UNIZG");
  institutions.add("U_Aarhus");
}

function setLevelDefaultValues() {
  levels.add("common");
  levels.add("specialized");
}

function setSectionDefaultValues() {
  for (let i = 1; i <= 8; i++) {
    sections.add("S" + i);
  }
}

function setUnitDefaultValues() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      units.add("U" + i + "." + j);
    }
  }
}

function setDropDownDefaultValues() {
  setDifficultyLevelsDefaultValues();
  setLevelDefaultValues();
  setSectionDefaultValues();
  setUnitDefaultValues();
  setInstitutionDefaultValues();
}

function setDropDownData(lecture) {
  // Get lecture data and add them into sets containing all the levels/sections/units/difficulty level from all lectures
  levels.add(lecture.level);
  sections.add(lecture.section);
  units.add(lecture.unit);
}

function createDropDownOptions(id, options, defaultValue) {
  //Create and append options to select list
  const selectList = document.getElementById(id);

  // Clear list options
  selectList.innerHTML = "";

  //Create and append the options
  options.forEach((key, value) => {
    const option = document.createElement("option");
    option.value = value;
    option.text = value;
    selectList.appendChild(option);
  });

  // Set current value as default value
  selectList.value = defaultValue;
}

function fillInput(elementId, value) {
  const input = document.getElementById(elementId);
  input.value = value;
}

// Dynamically create the HTML content based on the lecture and display it
function createAndDisplayLectureContent() {
  lectures.forEach((lecture) => {
    if (lecture.idx === currentLectureId) {
      currentLecture = lecture;

      // Fill elements with values from current lecture
      fillInputs(lecture);
    }
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

/**
 * Fill the fields once the metadata html page is opened
 */
function fillFieldsOnceOpened() {
  const id = getRandomInt(minId, maxId);
  const lecture = {
    idx: id,
    title: "Title",
    level: "Level",
    section: "Section",
    unit: "Unit",
    difficultyLevel: "Novice",
    part: "Part1",
    author: "Author",
    institution: "Institution",
    abstract: "Abstract",
    topic: ["topic1", "topic2", "topic3"],
    license: "BY-SA-ND",
    keywords: ["keyword1", "keyword2", "keyword3"],
    userProvidedURLForLecture: "",
  };

  currentLecture = lecture;
  fillInputs(lecture);
}

setDropDownDefaultValues();
fillFieldsOnceOpened();
