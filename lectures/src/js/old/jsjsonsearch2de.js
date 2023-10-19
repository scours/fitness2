/*
 * File: jsjsonsearch2de.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Thursday, 8th October 2020
 * Authors: Dipesh CHAUDHARI, Steward OUADI
 * -----
 * Last Modified: Monday, 14th December 2020
 * Modified By: Steward OUADI
 * -----
 */

// TODO: Merge this file with searchCore.js
//Extract json data using javascript

const search = document.getElementById('search'); //ID 'search' will take all input like, level, section, title, author, institution
const matchList = document.getElementById('match-list'); //ID 'match-list' will print above input results

let searchableContent;

// Variable used to store keywords related information, so when a "keyword" search is triggered, we can navigate through this variable to find (or not) the searched text
const searchableGlossary = new Map();

// Minimum text length for a search to start. If the search text size should at least be this minimum value for a search to be triggered
const minimumSearchTextLength = 3;

// Number of items (lectures) to display per page
const itemsPerPage = 10;

// Map containing pagination info like number of pages, number of items per pages, etc. One item is a lecture
let globalPaginator = new Map();

const constToGetRelativePath = '../../'; // Prepend this string to an image path to get relative path

function getTopWords(topWords, topWordsFrequencies) {
  const newTopWords = [];

  for (let i = 0; i < topWordsFrequencies.length; i++) {
    if (topWordsFrequencies[i] >= 10) {
      newTopWords[i] = topWords[i];
    }
  }

  return newTopWords.join(' '); // Transform array of words into a string
}

function addItem(idx, slideNumber, currentSearchableGlossaryItem) {
  if (!currentSearchableGlossaryItem.has(idx)) {
    // There is no entry for this searchable lexical item yet. Let's initialize it.
    currentSearchableGlossaryItem.set(idx, []);
  }

  const lastElem = currentSearchableGlossaryItem.get(idx);

  lastElem.push(slideNumber);
}

function paginator(items, currentPage, itemsPerPage, slidesArray) {
  let page = currentPage || 1,
    perPage = itemsPerPage || 10,
    offset = (page - 1) * perPage,
    paginatedItems = items.slice(offset).slice(0, itemsPerPage),
    totalPages = Math.ceil(items.length / perPage);
  let newSlidesArray = slidesArray;

  // If we are paginating slides search, also paginates slides
  if (slidesArray !== null) {
    newSlidesArray = slidesArray.slice(offset).slice(0, itemsPerPage);
  }

  return {
    page: page,
    perPage: perPage,
    prePage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages: totalPages,
    lectures: paginatedItems,
    slides: newSlidesArray,
  };
}

function addKeywordToSlideGlossary(currentKeyword, element, slideNumber) {
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

function topicParagraphOnclickHandler(event) {
  // Uncheck "include slide results" before launching new search
  document.getElementById('include-slide-results').checked = false;

  search.value = event.target.innerHTML; // Set search bar value with topic name
  search.dispatchEvent(new Event('input'));
}

function getColumnCenteredContentDiv(course, includeLectureImage) {
  const columnCenteredContentDiv = document.createElement('DIV');

  columnCenteredContentDiv.className = 'row row-centered pos';
  columnCenteredContentDiv.style.cssText = `display: inline-block;
              float: none;
              text-align: left;
              margin-right: -4px;
              border: rgb(65, 131, 196) 2px solid;
              margin-bottom: 50px;
              width: 100%;
              padding: 5px;`;

  const title = document.createElement('H3');
  title.className = 'text-primary';
  title.style.cssText = 'color: #d0701c';
  const titleTextNode = document.createTextNode(course.RunningTitle);
  title.appendChild(titleTextNode);

  const abstractDiv = document.createElement('DIV');
  abstractDiv.className = 'abstract-div-text';
  abstractDiv.innerHTML = course.abstract;

  // If there are multiple topics, this will split them.
  // Otherwise, we will only get one topic
  const allTopics = course.topic.split(',');

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

  const firstH5 = document.createElement('H5');
  firstH5.className = 'text-primary';
  firstH5.style.cssText = 'color: #c73a2e';
  const levelAndSectionTextNode = document.createTextNode(
    'Level: ' + course.level + ' | Section: ' + course.section
  );
  firstH5.appendChild(levelAndSectionTextNode);

  const firstPathSeparator = document.createTextNode(' > ');
  const secondPathSeparator = document.createTextNode(' > ');
  const thirdPathSeparator = document.createTextNode(' > ');

  const levelPathAnchor = document.createElement('A');
  levelPathAnchor.href = course.level;
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
  coursePathParagraph.style.cssText = 'font-size: small;text-align: right;';
  coursePathParagraph.appendChild(levelPathAnchor);
  coursePathParagraph.appendChild(firstPathSeparator);
  coursePathParagraph.appendChild(sectionPathAnchor);
  coursePathParagraph.appendChild(secondPathSeparator);
  coursePathParagraph.appendChild(unitPathAnchor);
  coursePathParagraph.appendChild(thirdPathSeparator);
  coursePathParagraph.appendChild(partPathAnchor);

  const secondH5 = document.createElement('H5');
  secondH5.className = 'text-primary';
  const otherInfoTextNode = document.createTextNode(
    'Author: ' + course.author + ' | Institution: ' + course.institution
  );
  secondH5.appendChild(otherInfoTextNode);

  const readLectureButtonAnchor = document.createElement('A');
  readLectureButtonAnchor.href = constToGetRelativePath + course.url;
  readLectureButtonAnchor.target = '_blank';
  readLectureButtonAnchor.text = 'Read Lecture';

  const readLectureButton = document.createElement('BUTTON');
  readLectureButton.type = 'button';
  readLectureButton.className = 'btn btn-primary';
  readLectureButton.appendChild(readLectureButtonAnchor);

  columnCenteredContentDiv.appendChild(coursePathParagraph);
  columnCenteredContentDiv.appendChild(title);
  columnCenteredContentDiv.appendChild(abstractDiv);
  columnCenteredContentDiv.appendChild(topicTextNode);
  columnCenteredContentDiv.appendChild(topicEm);

  columnCenteredContentDiv.appendChild(secondH5);

  // Check if we will also display lecture image or not
  if (includeLectureImage) {
    const imageDiv = document.createElement('DIV');
    imageDiv.className = 'image-container-row';
    const lectureImageDiv = document.createElement('DIV');
    const wordCloudImageDiv = document.createElement('DIV');
    lectureImageDiv.className = 'image-container';
    wordCloudImageDiv.className = 'image-container';

    const lectureImage = document.createElement('IMG');

    lectureImage.src = constToGetRelativePath + course.imglink;

    lectureImage.className = 'responsive';
    lectureImage.style.width = '100%';
    lectureImage.style.height = 'auto';

    const wordCloudImage = document.createElement('IMG');

    const wordCloudDirectoryRelativePath = '../src/wordcloud/';

    wordCloudImage.src = wordCloudDirectoryRelativePath + course.WordCloud;

    wordCloudImage.className = 'responsive';
    wordCloudImage.style.width = '100%';
    wordCloudImage.style.height = 'auto';

    const imageAnchor = document.createElement('A');
    imageAnchor.href = constToGetRelativePath + course.url;
    imageAnchor.target = '_blank';
    imageAnchor.appendChild(lectureImage);

    lectureImageDiv.appendChild(imageAnchor);
    wordCloudImageDiv.appendChild(wordCloudImage);

    imageDiv.appendChild(lectureImageDiv);
    imageDiv.appendChild(wordCloudImageDiv);

    columnCenteredContentDiv.appendChild(imageDiv);
  }

  columnCenteredContentDiv.appendChild(readLectureButton);

  return columnCenteredContentDiv;
}

function getFoundResultsParagraph(
  nbLecturesLength,
  currentPageNumber,
  totalPages
) {
  const foundResultsParagraph = document.createElement('P');
  const strong = document.createElement('STRONG');
  const em = document.createElement('EM');

  let nbLecturesText = 'lecture found';
  if (nbLecturesLength > 1) {
    nbLecturesText = 'lectures found';
  }

  const currentPageNumberEm = document.createElement('EM');
  currentPageNumberEm.id = 'currentPageNumberEm';
  currentPageNumberEm.innerHTML = currentPageNumber;

  var textPart1 = document.createTextNode('| page ');
  var textPart2 = document.createTextNode('of ' + totalPages);

  const currentDisplayedPage = document.createElement('EM');

  currentDisplayedPage.appendChild(textPart1);
  currentDisplayedPage.appendChild(currentPageNumberEm);
  currentDisplayedPage.appendChild(textPart2);

  const currentDisplayedPageParagraph = document.createElement('P');
  currentDisplayedPageParagraph.appendChild(currentDisplayedPage);

  em.innerHTML = nbLecturesLength + ' ' + nbLecturesText;
  strong.appendChild(em);
  foundResultsParagraph.appendChild(strong);
  foundResultsParagraph.appendChild(currentDisplayedPage);
  foundResultsParagraph.appendChild(currentDisplayedPageParagraph);

  return foundResultsParagraph;
}

function addTopicsListeners() {
  const topicParagraphs = document.getElementsByClassName('topic-paragraph');
  for (var i = 0; i < topicParagraphs.length; i++) {
    topicParagraphs[i].addEventListener('click', function (event) {
      topicParagraphOnclickHandler(event);
    });
  }
}

function addPaginationButtonsListeners(showSlides) {
  var header = document.getElementById('pagination-div');
  var btns = header.getElementsByClassName('hrefbtn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
      paginationButtonOnClickHandler(event, showSlides);
    });
  }
}

function displayResults(courses) {
  const globalDiv = document.createElement('DIV');
  const containerDiv = document.createElement('DIV');
  containerDiv.className = 'container';

  const rowCenteredContentDiv = document.createElement('DIV');
  rowCenteredContentDiv.className = 'row row-centered pos';
  rowCenteredContentDiv.id = 'rowCenteredContentDiv';

  // Set to null because we don't want slides results
  computePaginatorInfo(courses, itemsPerPage, null);
  const firstPage = globalPaginator.get(1);

  // Set the first page results
  for (let i = 0; i < firstPage.lectures.length; i++) {
    const columnCenteredContentDiv = getColumnCenteredContentDiv(
      firstPage.lectures[i],
      true
    );
    rowCenteredContentDiv.appendChild(columnCenteredContentDiv);
  }

  containerDiv.appendChild(rowCenteredContentDiv);

  globalDiv.appendChild(
    getFoundResultsParagraph(
      courses.length,
      firstPage.page,
      firstPage.totalPages
    )
  );
  globalDiv.appendChild(containerDiv);
  globalDiv.appendChild(getPaginatorNumbers(firstPage.totalPages));
  matchList.innerHTML = globalDiv.innerHTML;

  addTopicsListeners();
  addPaginationButtonsListeners(false);
}

function getSlides(lecture, slidesArray) {
  const columnCenteredContentDiv = getColumnCenteredContentDiv(lecture, false);

  const hr = document.createElement('HR');
  columnCenteredContentDiv.appendChild(hr);

  let nbSlidesFoundText = ' slides found';
  if (slidesArray.length <= 1) {
    nbSlidesFoundText = ' slide found';
  }
  const nbSlidesFound = document.createElement('P');
  nbSlidesFound.innerText = slidesArray.length + nbSlidesFoundText;
  columnCenteredContentDiv.appendChild(nbSlidesFound);

  const scrollSlidesDiv = document.createElement('DIV');
  scrollSlidesDiv.className = 'scrollmenu';

  for (let j = 0; j < slidesArray.length; j++) {
    if (j <= 4) {
      const slideImagePrefixName = 'Slide';
      const slideImageExtension = '.svg';
      const imgUrl =
        constToGetRelativePath + lecture.url + '#/' + slidesArray[j];
      const splittedImgLink = lecture.imglink.split(slideImagePrefixName);
      const slideImgLink =
        splittedImgLink[0] +
        slideImagePrefixName +
        slidesArray[j] +
        slideImageExtension;
      // Create anchor element.
      const a = document.createElement('A');
      // Set the href property.
      a.href = imgUrl;
      a.target = '_blank';

      const image = document.createElement('IMG');
      image.src = constToGetRelativePath + slideImgLink;
      image.className = 'responsive';
      image.style.width = '100%';
      image.style.height = 'auto';

      a.appendChild(image);

      scrollSlidesDiv.appendChild(a);
    }

    // Add a text to notify user that some results have been omitted
    if (j === 5) {
      const nbOmittedResults = slidesArray.length - j;
      // Create anchor element.
      const a = document.createElement('A');

      let nbOmittedResultsText = ' results have been omitted';
      if (nbOmittedResults === 1) {
        nbOmittedResultsText = ' result has been omitted';
      }
      // Set the href property.
      a.href = '#';
      a.innerHTML = nbOmittedResults + nbOmittedResultsText;
      scrollSlidesDiv.appendChild(a);
    }

    columnCenteredContentDiv.appendChild(scrollSlidesDiv);
  }
  return columnCenteredContentDiv;
}

function getPaginatorNumbers(totalPages) {
  const paginatorNumbersContainer = document.createElement('DIV');
  paginatorNumbersContainer.className = 'center';

  const paginationDiv = document.createElement('DIV');
  paginationDiv.id = 'pagination-div';
  paginationDiv.className = 'pagination';
  // Creating paginator numbers
  for (let i = 1; i <= totalPages; i++) {
    const paginationButtonAnchor = document.createElement('A');
    // For paginator numbers, leave href="#", so on a number click, the page will be scrolled on the top
    paginationButtonAnchor.href = '#';
    paginationButtonAnchor.className = 'hrefbtn';
    paginationButtonAnchor.innerHTML = i;

    // Set first button as the active one
    if (i === 1) {
      paginationButtonAnchor.classList.add('active');
    }

    paginationDiv.appendChild(paginationButtonAnchor);
  }

  paginatorNumbersContainer.appendChild(paginationDiv);
  return paginatorNumbersContainer;
}

function computePaginatorInfo(lectures, itemsPerPage, slidesArrays) {
  // Compute first page to get total pages
  const firstPage = paginator(lectures, 1, itemsPerPage, slidesArrays);
  globalPaginator.set(firstPage.page, firstPage);
  // For other pages results, push them into global paginator
  // Start by two because we already have saved the first page
  for (let i = 2; i <= firstPage.totalPages; i++) {
    let currentPage = paginator(lectures, i, itemsPerPage, slidesArrays);
    globalPaginator.set(currentPage.page, currentPage);
  }
}

function paginationButtonOnClickHandler(event, showSlides) {
  // Cleaning row content div
  var rowCenteredContentDiv = document.getElementById('rowCenteredContentDiv');
  rowCenteredContentDiv.innerHTML = '';

  var current = document.getElementsByClassName('active');
  current[0].className = current[0].className.replace(' active', '');
  event.target.className += ' active';

  // Adding new content to row content div
  const newPage = globalPaginator.get(parseInt(event.target.innerHTML));
  //   getFoundResultsParagraph(nbLectures, currentPageNumber, totalPages)
  if (showSlides === true) {
    for (let i = 0; i < newPage.lectures.length; i++) {
      const getSlidesResult = getSlides(newPage.lectures[i], newPage.slides[i]);
      rowCenteredContentDiv.appendChild(getSlidesResult);
    }
  } else {
    for (let i = 0; i < newPage.lectures.length; i++) {
      const columnCenteredContentDiv = getColumnCenteredContentDiv(
        newPage.lectures[i],
        true
      );
      rowCenteredContentDiv.appendChild(columnCenteredContentDiv);
    }
  }

  // Updating current displayed page info
  const currentPageNumberEm = document.getElementById('currentPageNumberEm');
  currentPageNumberEm.innerHTML = newPage.page;
}

function displayResultsWithSlides(slideResults) {
  if (slideResults.length > 0) {
    let nbLectures = [];
    let lectures = [];
    let slidesArrays = [];
    // Creating the HTML that will be displayed
    const globalDiv = document.createElement('DIV');
    const containerDiv = document.createElement('DIV');
    containerDiv.className = 'container';

    let rowCenteredContentDiv = document.createElement('DIV');

    for (let i = 0; i < slideResults.length; i++) {
      const lecturesMap = slideResults[i];
      lecturesMap.forEach((slidesArray, lectureIdx) => {
        const lecture = searchableContent.find(
          (lecture) => lecture.idx === lectureIdx
        );
        nbLectures.push(lectureIdx); // List of lectures with slides ids so we can get the number of lectures with slides found
        lectures.push(lecture);
        slidesArrays.push(slidesArray);
      });
    }

    computePaginatorInfo(lectures, itemsPerPage, slidesArrays);
    const firstPage = globalPaginator.get(1);

    // Set the first page results
    for (let i = 0; i < firstPage.lectures.length; i++) {
      const getSlidesResult = getSlides(
        firstPage.lectures[i],
        firstPage.slides[i]
      );
      rowCenteredContentDiv.appendChild(getSlidesResult);
    }
    rowCenteredContentDiv.className = 'row row-centered pos';
    rowCenteredContentDiv.id = 'rowCenteredContentDiv';

    containerDiv.appendChild(rowCenteredContentDiv);

    globalDiv.appendChild(
      getFoundResultsParagraph(
        nbLectures.length,
        firstPage.page,
        firstPage.totalPages
      )
    );
    globalDiv.appendChild(containerDiv);

    globalDiv.appendChild(getPaginatorNumbers(firstPage.totalPages));
    matchList.innerHTML = globalDiv.innerHTML; // Insert the created HTML so it can be rendered

    addTopicsListeners();
    addPaginationButtonsListeners(true);

    // Add active class to the current button (highlight it)
    // var header = document.getElementById('pagination-div');
    // var btns = header.getElementsByClassName('hrefbtn');
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener('click', function (event) {
    //     paginationButtonOnClickHandler(event, true);
    //   });
    // }
  }
}

function getStringFromUniqueValueOrArray(data) {
  // Data can be string or array
  if (Array.isArray(data)) {
    // If it's an array, merge values into one string and return that string
    return data.join(', '); // Transform array of words into a string
  } else {
    // If it's not an array, it's a string, so we can directly return that value
    return data;
  }
}

/* Extract and store into a global array only the elements that will be needed for searching */
async function extractOnlyNeededInfo() {
  const res = await fetch(
    './../../lectures/src/json/content_transitional.json'
  ); // fetch method will fetch JSON file
  const flatcontent = await res.json();

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
    searchableElement.TopWords = getTopWords(
      element.TopWords,
      element.TopWordsFrequencies
    );
    searchableElement.institution = element.institution;
    searchableElement.url = element.url;
    searchableElement.imglink = element.imglink;
    searchableElement.WordCloud = element.WordCloud;
    searchableArray.push(searchableElement);
  });

  searchableContent = searchableArray;
  createTopWordsSlidesGlossary(flatcontent);
  return searchableArray;
}

extractOnlyNeededInfo();

function displayNoResultsFound(trimmedSearchText) {
  let html = '';
  if (trimmedSearchText.length >= 3) {
    html = `
		<p role="heading" aria-level="3">
		  No lectures matched the specified search terms :&nbsp;<strong
			><em>${trimmedSearchText}</em></strong
		  >
		</p>
		<p>Suggestions:</p>
		<ul>
		  <li>Check the spelling of the search terms.</li>
		  <li>Try other words.</li>
		  <li>Use more general keywords.</li>
		</ul>
		<hr />
		<p>&nbsp;</p>
		`;
  }

  matchList.innerHTML = html; // innerHTML will print searched text
}

//Search flatcontent.json and filter it
const searchflatcontent = async (searchText) => {
  // Get matches to current text input
  let trimmedSearchText = searchText.trim();
  let matches = [];
  matchList.innerHTML = ''; //When search box is empty it will print nothing

  const slideResults = [];
  let includeSlidesResults = document.getElementById('include-slide-results')
    .checked;
  if (trimmedSearchText.length >= minimumSearchTextLength) {
    const regex = new RegExp(trimmedSearchText, 'mi');
    includeSlidesResults = document.getElementById('include-slide-results')
      .checked;
    if (includeSlidesResults === true) {
      searchableGlossary.forEach((value, key) => {
        if (key.match(regex)) {
          slideResults.push(value);
        }
      });
    } else {
      matches = searchableContent.filter((state) => {
        return (
          state.level.match(regex) ||
          state.section.match(regex) ||
          state.unit.match(regex) ||
          state.part.match(regex) ||
          state.SectionName.match(regex) ||
          state.UnitName.match(regex) ||
          state.RunningTitle.match(regex) ||
          state.title.match(regex) ||
          state.author.match(regex) ||
          state.abstract.match(regex) ||
          state.topic.match(regex) ||
          state.keyWords.match(regex) ||
          state.TopWords.match(regex) ||
          state.institution.match(regex)
        );
      }); //match function will match regular expression in JSON file
    }
  }
  displayResults(matches);
  displayResultsWithSlides(slideResults);
  if ((slideResults.length || matches.length) === 0) {
    displayNoResultsFound(trimmedSearchText);
  }
};

search.addEventListener('input', () => searchflatcontent(search.value));

/*


// Menu buttons 

document.getElementById('s1').addEventListener('click',loadText1);
document.getElementById('s2').addEventListener('click',loadText2);
document.getElementById('s3').addEventListener('click',loadText3);
document.getElementById('s4').addEventListener('click',loadText4);
document.getElementById('s5').addEventListener('click',loadText5);
document.getElementById('ss1').addEventListener('click',loadText6);
document.getElementById('ss2').addEventListener('click',loadText7);
document.getElementById('ss3').addEventListener('click',loadText8);
document.getElementById('ss4').addEventListener('click',loadText9);
document.getElementById('ss5').addEventListener('click',loadText10);
document.getElementById('ss6').addEventListener('click',loadText11);
document.getElementById('ss7').addEventListener('click',loadText12);
document.getElementById('ss8').addEventListener('click',loadText13);
document.getElementById('ss9').addEventListener('click',loadText14);
document.getElementById('hcl').addEventListener('click',loadText15);
document.getElementById('ov').addEventListener('click',loadText16);
document.getElementById('cl').addEventListener('click',loadText17);
document.getElementById('tk').addEventListener('click',loadText18);
document.getElementById('mfp').addEventListener('click',loadText19);
document.getElementById('mk').addEventListener('click',loadText20);
document.getElementById('mcc').addEventListener('click',loadText21);
document.getElementById('om').addEventListener('click',loadText22);
document.getElementById('mjf').addEventListener('click',loadText23);
document.getElementById('sd').addEventListener('click',loadText24);
document.getElementById('mh').addEventListener('click',loadText25);
document.getElementById('tum').addEventListener('click',loadText26);
document.getElementById('apt').addEventListener('click',loadText27);
document.getElementById('asd').addEventListener('click',loadText28);
document.getElementById('actia').addEventListener('click',loadText29);
document.getElementById('lne').addEventListener('click',loadText30);
document.getElementById('cisc').addEventListener('click',loadText31);
document.getElementById('uzag').addEventListener('click',loadText32);
document.getElementById('ucp').addEventListener('click',loadText33);


function loadText1(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'common' && text1[i].section == 'S1') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText2(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'common' && text1[i].section == 'S2') 
						{
				//	output += '<ul>' + 
				//	'<li>'+ text1[i].level+ '</li>' + 
				//	'<li>'+ text1[i].title+ '</li>'+
				//	'<li>'+ text1[i].idx+ '</li>'+
				//	'</ul>';

					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;



			}
	}
	xhr.send();
}

function loadText3(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'common' && text1[i].section == 'S3') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText4(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'common' && text1[i].section == 'S4') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText5(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'common') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText6(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S1') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText7(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S2') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
function loadText8(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S3') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText9(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S4') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText10(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S5') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText11(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S6') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText12(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S7') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText13(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized' && text1[i].section == 'S8') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText14(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].level == 'specialized') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText15(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Horst-Christian Langowski') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText16(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Olivier Vitrac') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText17(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Catherine Loriot') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText18(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Thomas Karbowiak') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText19(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Fatima Pocas') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText20(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Mia Kurek') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText21(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Marie-Christine Chagnon') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText22(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Oliver Miesbauer') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText23(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Maria Jose Fabra') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText24(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Sandra Domenek') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText25(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].author == 'Murielle Hayert') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
function loadText26(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'TUM') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText27(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'APT') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText28(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'ASD') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}

function loadText29(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'ACTIA') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
function loadText30(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'LNE') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
function loadText31(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'CISC') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
function loadText32(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'UZAG') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
function loadText33(){

	//create XHR object
	var xhr = new XMLHttpRequest();

	//OPEN type, url/file, async
	xhr.open('GET','content_transitional.json', true);

	xhr.onload = function(){
			if(this.status == 200){

					//console.log(this.responseText);
					var text1 = JSON.parse(this.responseText);

					var	output = '';

					for(var i in text1){
						if (text1[i].institution == 'UCP') 
						{


					output += 
								'<div class="card card-body mb-12">'+
								'<h6><span class="text-primary">' +text1[i].level+'</span></h6> <h6><span class="text-primary">'+text1[i].abstract+'</span></h6> <span class="text-primary"> <br>'+text1[i].section+'</span>' + 
								'<small class="text-primary"> Unit: '+text1[i].unit +'/Part: ' +text1[i].part +'/Author: '+ text1[i].author + '/Institution: '+text1[i].institution + '<br>URL: '+text1[i].url+'</small>' +
								'<img src=" '+ text1[i].imglink +' " width="180px" height="100px">' +
								'<p></p>' +
								'<button type="button" class="btn btn-primary">Read Lecture</button>' +
								'</div><br>' ;

				}
				}
					document.getElementById('match-list').innerHTML = output;
			}
	}
	xhr.send();
}
*/
