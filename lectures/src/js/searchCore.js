/*
 * File: searchCore.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Wednesday, 9th December 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Tuesday, 22nd December 2020
 * Modified By: Steward OUADI
 * -----
 */

// TODO: Merge this file with jsjsonsearch2de.js

// Variable used to store keywords related information, so when a "keyword" search is triggered, we can navigate through this variable to find (or not) the searched text
const searchableGlossary = new Map();

function getCourseTitle(course) {
  const title = document.createElement('H2');
  title.className = 'text-primary';
  title.style.cssText = 'color: #d0701c';
  const titleTextNode = document.createTextNode(course.title);
  title.appendChild(titleTextNode);

  return title;
}

function getCourseAuthor(course) {
  // If there are multiple authors, this will split them.
  // Otherwise, we will only get one author
  const allAuthors = course.author.split(',');

  let authorText = 'Author: ';

  if (allAuthors.length > 1) {
    authorText = 'Authors: ';
  }
  const authorTextNode = document.createTextNode(authorText);

  const authorList = document.createElement('UL');

  for (var i = 0; i < allAuthors.length; i++) {
    const authorListElement = document.createElement('LI');
    const authorHyperLink = document.createElement('A');
    authorHyperLink.href = '#';
    authorHyperLink.innerHTML = allAuthors[i] + ' ';

    authorHyperLink.style.cssText = 'text-decoration: underline;';

    authorHyperLink.className = 'author-paragraph';
    authorListElement.appendChild(authorHyperLink);
    authorList.appendChild(authorListElement);
  }

  const authorParagraph = document.createElement('H4');
  authorParagraph.appendChild(authorTextNode);
  authorParagraph.appendChild(authorList);
  return authorParagraph;
}

function getCourseTopic(course) {
  // If there are multiple topics, this will split them.
  // Otherwise, we will only get one topic
  const allTopics = course.topic.split(',');

  let topicText = 'Topic: ';

  if (allTopics.length > 1) {
    topicText = 'Topics: ';
  }

  const topicEm = document.createElement('EM');
  const topicTextNode = document.createTextNode('Topics: ');

  for (var i = 0; i < allTopics.length; i++) {
    const topicHyperLink = document.createElement('A');
    const kbd = document.createElement('KBD');
    topicHyperLink.href = '#';
    topicHyperLink.innerHTML = allTopics[i] + ' ';

    topicEm.className = 'topic-paragraph';
    topicEm.style.cssText = 'text-decoration: underline;';

    kbd.appendChild(topicHyperLink);
    topicEm.appendChild(kbd);
  }

  const topicParagraph = document.createElement('DIV');
  topicParagraph.appendChild(topicTextNode);
  topicParagraph.appendChild(topicEm);

  return topicParagraph;
}

function getCourseAbstract(course) {
  const abstractDiv = document.createElement('DIV');
  abstractDiv.className = 'abstract-div-text';
  abstractDiv.innerHTML = course.abstract;

  return abstractDiv;
}

function getWordCloudImage(wordCloudPath, wordCloudDirectoryRelativePath) {
  const wordCloudImageDiv = document.createElement('DIV');
  wordCloudImageDiv.className = 'image-container';

  const wordCloudImage = document.createElement('IMG');

  wordCloudImage.src = wordCloudDirectoryRelativePath + wordCloudPath;

  wordCloudImage.className = 'responsive';
  wordCloudImage.style.maxWidth = '70%';
  wordCloudImage.style.display = 'block';
  wordCloudImage.style.marginLeft = 'auto';
  wordCloudImage.style.marginRight = 'auto';

  wordCloudImage.style.height = 'auto';

  wordCloudImageDiv.appendChild(wordCloudImage);

  return wordCloudImageDiv;
}

function getClickableCoursePath(course, relativePath) {
  const firstPathSeparator = document.createTextNode(' > ');
  const secondPathSeparator = document.createTextNode(' > ');
  const thirdPathSeparator = document.createTextNode(' > ');

  const levelPathAnchor = document.createElement('A');
  levelPathAnchor.href = relativePath + course.level;
  levelPathAnchor.target = '_blank';
  levelPathAnchor.text = course.level;
  levelPathAnchor.style.cssText = 'text-decoration: underline;';

  const sectionPathAnchor = document.createElement('A');
  sectionPathAnchor.href = levelPathAnchor.href + '/' + course.section;
  sectionPathAnchor.target = '_blank';
  sectionPathAnchor.text = course.section;
  sectionPathAnchor.style.cssText = 'text-decoration: underline;';

  const unitPathAnchor = document.createElement('A');
  unitPathAnchor.href = sectionPathAnchor.href + '/' + course.unit;
  unitPathAnchor.target = '_blank';
  unitPathAnchor.text = course.unit;
  unitPathAnchor.style.cssText = 'text-decoration: underline;';

  const partPathAnchor = document.createElement('A');
  partPathAnchor.href = unitPathAnchor.href + '/src_' + course.part;
  partPathAnchor.target = '_blank';
  partPathAnchor.text = course.part;
  partPathAnchor.style.cssText = 'text-decoration: underline;';

  const coursePathParagraph = document.createElement('P');
  // coursePathParagraph.style.cssText = 'font-size: small;';
  coursePathParagraph.appendChild(levelPathAnchor);
  coursePathParagraph.appendChild(firstPathSeparator);
  coursePathParagraph.appendChild(sectionPathAnchor);
  coursePathParagraph.appendChild(secondPathSeparator);
  coursePathParagraph.appendChild(unitPathAnchor);
  coursePathParagraph.appendChild(thirdPathSeparator);
  coursePathParagraph.appendChild(partPathAnchor);

  return coursePathParagraph;
}

function addItem(idx, slideNumber, currentSearchableGlossaryItem) {
  if (!currentSearchableGlossaryItem.has(idx)) {
    // There is no entry for this searchable lexical item yet. Let's initialize it.
    currentSearchableGlossaryItem.set(idx, []);
  }

  const lastElem = currentSearchableGlossaryItem.get(idx);

  lastElem.push(slideNumber);
}

function addKeywordToSlideGlossary(currentKeyword, element, slideNumber) {
  // Minimum text length for a search to start. If the search text size should at least be this minimum value for a search to be triggered
  const minimumSearchTextLength = 3;
  if (currentKeyword.length >= minimumSearchTextLength) {
    if (!searchableGlossary.has(currentKeyword)) {
      // There is no entry for this searchable lexical item yet. Let's initialize it.
      searchableGlossary.set(currentKeyword, new Map());
    }

    // There is already an entry, we will add element into that entry
    // Get current keyword from searchableGlossary
    const currentSearchableGlossaryItem = searchableGlossary.get(
      currentKeyword
    );

    addItem(element.idx, slideNumber, currentSearchableGlossaryItem);
  }
}

async function createTopWordsSlidesGlossary(flatcontent) {
  flatcontent.forEach((element) => {
    for (let i = 0; i < element.TopWordsSlides.length; i++) {
      // We are inside the top words slide array
      const currentSlide = element.TopWordsSlides[i];
      const slideNumber = i + 1;
      if (Array.isArray(currentSlide) && currentSlide.length > 0) {
        // If the current slide is an array and it has keywords
        for (let j = 0; j < currentSlide.length; j++) {
          // Get current keyword from slides
          const currentKeyword = currentSlide[j];
          addKeywordToSlideGlossary(currentKeyword, element, slideNumber);
        }
      }

      if (typeof currentSlide === 'string') {
        // If the current slide is a string, there is only one unique keyword
        const currentKeyword = currentSlide;
        addKeywordToSlideGlossary(currentKeyword, element, slideNumber);
      }
    }
  });
}

function getTopWords(topWords, topWordsFrequencies) {
  const newTopWords = [];

  for (let i = 0; i < topWordsFrequencies.length; i++) {
    if (topWordsFrequencies[i] >= 10) {
      newTopWords[i] = topWords[i];
    }
  }

  return newTopWords.join(' '); // Transform array of words into a string
}

function getStringFromUniqueValueOrArray(data) {
  // Data can be string or array
  if (Array.isArray(data)) {
    // If it's an array, merge values into one string and return that string
    return data.join(','); // Transform array of words into a string
  } else {
    // If it's not an array, it's a string, so we can directly return that value
    return data;
  }
}

/* Extract and store into a global array only the elements that will be needed for searching */
async function extractOnlyNeededInfo(databasePath) {
  const flatcontent = await getDatabaseData(databasePath);

  console.log('inside searchcore beg');
  console.log(flatcontent);
  console.log('inside searchcore end');
  const searchableArray = [];
  flatcontent.forEach((element) => {
    const searchableElement = {};
    searchableElement.idx = element.idx;
    searchableElement.level = element.level;
    searchableElement.section = element.section;
    searchableElement.unit = element.unit;
    searchableElement.part = element.part;
    searchableElement.SectionName = element.SectionName;
    searchableElement.UnitName = element.UnitName;
    searchableElement.RunningTitle = element.RunningTitle;
    searchableElement.title = element.title;
    searchableElement.author = getStringFromUniqueValueOrArray(element.author);
    searchableElement.abstract = element.abstract;
    searchableElement.topic = getStringFromUniqueValueOrArray(element.topic);
    searchableElement.keyWords = element.keywords.join(' '); // Transform array of words into a string
    searchableElement.license = element.license;
    searchableElement.TopWords = getTopWords(
      element.TopWords,
      element.TopWordsFrequencies
    );
    searchableElement.institution = element.institution;
    searchableElement.url = element.url;
    searchableElement.imglink = element.imglink;
    searchableElement.WordCloud = element.WordCloud;

    // Elements to be used in the left menu of a lecture. BEGIN
    // To used for the last update on 12/21/2020
    searchableElement.Dependencies = element.Dependencies;
    searchableElement.DependenciesURL = element.DependenciesURL;
    searchableElement.embeddedVideos = element.embeddedVideos;
    searchableElement.embeddedVideosURL = element.embeddedVideosURL;
    searchableElement.ExternalURL = element.ExternalURL;
    searchableElement.MenuLeft = element.MenuLeft;
    searchableElement.MenuLeftXL = element.MenuLeftXL;
    // Elements to be used in the left menu of a lecture. END

    searchableArray.push(searchableElement);
  });

  searchableContent = searchableArray;
  createTopWordsSlidesGlossary(flatcontent);
  return searchableArray;
}
