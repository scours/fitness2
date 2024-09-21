/*
 * File: sideBarMenu.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Wednesday, 9th December 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 14th December 2020
 * Modified By: Steward OUADI
 * -----
 */

let searchableContent;
const allOnlineLecturesPath = '../../../index.html';

function topicParagraphOnclickHandler(textToSearch) {
  // Uncheck "include slide results" before launching new search

  var win = window.open(allOnlineLecturesPath, '_blank');

  win.onload = function () {
    const matchList = win.document.getElementById('match-list');

    // While waiting for all async functions to be ready, set and display a loader
    const loaderContainer = win.document.createElement('DIV');
    loaderContainer.className = 'loader-container';
    const loader = win.document.createElement('DIV');
    loader.className = 'loader';
    loaderContainer.appendChild(loader);

    // matchList content will be replaced by search result content
    matchList.appendChild(loaderContainer);

    // Set timeout, so all async functions can be loaded.
    // Especially the function which extracts data from database in the new opened tab
    setTimeout(function () {
      const search = win.document.getElementById('search');
      win.document.getElementById('include-slide-results').checked = false;

      search.value = textToSearch; // Set search bar value with topic name
      search.dispatchEvent(new Event('input'));
    }, 1000);
  };
}

function ElementParagraphOnclickHandler(textToSearch) {
  // Uncheck "include slide results" before launching new search

  var win = window.open(allOnlineLecturesPath, '_blank');

  win.onload = function () {
    const matchList = win.document.getElementById('match-list');

    // While waiting for all async functions to be ready, set and display a loader
    const loaderContainer = win.document.createElement('DIV');
    loaderContainer.className = 'loader-container';
    const loader = win.document.createElement('DIV');
    loader.className = 'loader';
    loaderContainer.appendChild(loader);

    // matchList content will be replaced by search result content
    matchList.appendChild(loaderContainer);

    // Set timeout, so all async functions can be loaded.
    // Especially the function which extracts data from database in the new opened tab
    setTimeout(function () {
      const search = win.document.getElementById('search');
      win.document.getElementById('include-slide-results').checked = false;

      search.value = textToSearch; // Set search bar value with topic name
      search.dispatchEvent(new Event('input'));
    }, 1000);
  };
}

// function addTopicsListeners() {
//   const topicParagraphs = document.getElementsByClassName('topic-paragraph');
//   for (var i = 0; i < topicParagraphs.length; i++) {
//     topicParagraphs[i].addEventListener('click', function (event) {
//       topicParagraphOnclickHandler(event.target.innerHTML);
//     });
//   }
// }

function addElementListeners(className) {
  const ElementParagraphs = document.getElementsByClassName(className);
  for (var i = 0; i < ElementParagraphs.length; i++) {
    ElementParagraphs[i].addEventListener('click', function (event) {
      ElementParagraphOnclickHandler(event.target.innerHTML);
    });
  }
}
async function extractDbInfo(databasePath, currentPath) {
  searchableContent = await extractOnlyNeededInfo(databasePath);
  const coursePath = currentPath.split('html')[1];
  const coursePathSplit = coursePath.split('/');

  const courseLevel = coursePathSplit[1]; // Start at 1, because 0 is empty
  const courseSection = coursePathSplit[2];
  const courseUnit = coursePathSplit[3];
  const coursePart = coursePathSplit[4].split('.')[0];

  const retrievedCourse = searchableContent.filter((state) => {
    const courseInfo =
      state.level.toLowerCase() +
      ' ' +
      state.section.toLowerCase() +
      ' ' +
      state.unit.toLowerCase() +
      ' ' +
      state.part.toLowerCase();

    if (
      courseInfo.includes(courseLevel.toLowerCase()) &&
      courseInfo.includes(courseSection.toLowerCase()) &&
      courseInfo.includes(courseUnit.toLowerCase()) &&
      courseInfo.includes(coursePart.toLowerCase())
    ) {
      return state;
    } else {
      return undefined;
    }
  });

  const currentCourse = retrievedCourse[0];

  const sideBarMenu = document.getElementById('sidebar-menu');

  const courseInfoDiv = document.createElement('DIV');
  courseInfoDiv.style.cssText = 'padding: 5px;margin-bottom: 100px;';

  const accessAllOnlineLectures = document.createElement('H2');
  const allOnlineLecturesLink = document.createElement('A');
  allOnlineLecturesLink.innerHTML = 'Access all online lectures';
  allOnlineLecturesLink.href = allOnlineLecturesPath;
  allOnlineLecturesLink.target = '_blank';
  accessAllOnlineLectures.appendChild(allOnlineLecturesLink);
  courseInfoDiv.appendChild(accessAllOnlineLectures);
  var horizontalLine1 = document.createElement('HR');
  horizontalLine1.style.cssText = 'border: 1px solid #d0701c;';
  courseInfoDiv.appendChild(horizontalLine1);

  const currentCourseInfoText = document.createElement('H2');
  currentCourseInfoText.innerHTML = 'About this lecture';
  courseInfoDiv.appendChild(currentCourseInfoText);

  const wordCloudDirectoryRelativePath = '../../../../src/wordcloud/';

  const coursesRelativePath = '../../../';
  const coursePathParagraph = getClickableCoursePath(
    currentCourse,
    coursesRelativePath
  );

  courseInfoDiv.appendChild(coursePathParagraph);
  courseInfoDiv.appendChild(
    getWordCloudImage(currentCourse.WordCloud, wordCloudDirectoryRelativePath)
  );

  const abstractElement = getCourseAbstract(currentCourse);
  abstractElement.style.cssText = 'margin-bottom: 30px;';
  courseInfoDiv.appendChild(getCourseTitle(currentCourse));
  courseInfoDiv.appendChild(abstractElement);

  // const authorEm = document.createElement('EM');
  // const authorText = document.createTextNode('Author: ');

  // authorEm.className = 'author-paragraph';
  // authorEm.style.cssText = 'text-decoration: underline;';
  // authorEm.innerHTML = currentCourse.author;

  // // authorEm.appendChild(kbd);

  // const authorParagraph = document.createElement('H4');
  // authorParagraph.appendChild(authorText);
  // authorParagraph.appendChild(authorEm);

  // const authorElement = document.createElement('H4');
  // const authorElementTextNode = document.createTextNode(currentCourse.author);
  // authorElementTextNode.style.cssText = 'text-decoration: underline;';
  // authorElement.innerHTML = 'Author: ' + currentCourse.author;
  // authorElement.innerHTML = 'Author: ' + authorElementTextNode;

  const institutionElement = document.createElement('H4');
  institutionElement.innerHTML = 'Institution: ' + currentCourse.institution;

  const licenseElement = document.createElement('H4');
  licenseElement.innerHTML = ' License: ' + currentCourse.license;

  courseInfoDiv.appendChild(getCourseTopic(currentCourse));

  var horizontalLine2 = document.createElement('HR');
  horizontalLine2.style.cssText = 'border: 1px dashed #32228a;width:80%';
  courseInfoDiv.appendChild(horizontalLine2);

  // courseInfoDiv.appendChild(authorElement);
  courseInfoDiv.appendChild(getCourseAuthor(currentCourse));
  courseInfoDiv.appendChild(institutionElement);
  courseInfoDiv.appendChild(licenseElement);

  sideBarMenu.appendChild(courseInfoDiv);
  // addTopicsListeners();

  addElementListeners('topic-paragraph');
  addElementListeners('author-paragraph');
  // addTopicsListeners();
}

function openNav() {
  document.getElementById('sidebar-menu').style.width = '60%';
  document.getElementById('reveal-global-div').style.marginLeft = '60%';
}

function closeNav() {
  document.getElementById('sidebar-menu').style.width = '0';
  document.getElementById('reveal-global-div').style.marginLeft = '0';
}
