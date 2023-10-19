/*
 * File: sideBarMenu.js
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Wednesday, 9th December 2020
 * Author: Steward OUADI
 * -----
 * Last Modified: Tuesday, 22nd December 2020
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

function addElementListeners(className) {
  const ElementParagraphs = document.getElementsByClassName(className);
  for (var i = 0; i < ElementParagraphs.length; i++) {
    ElementParagraphs[i].addEventListener('click', function (event) {
      ElementParagraphOnclickHandler(event.target.innerText);
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
  const menuContentDiv = document.createElement('DIV');

  // Check if the content is running on mobile or not
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // Display menu conceived for mobile screens
    menuContentDiv.innerHTML = currentCourse.MenuLeft;
  } else {
    // Display menu conceived for computer screens
    menuContentDiv.innerHTML = currentCourse.MenuLeftXL;
  }

  sideBarMenu.appendChild(menuContentDiv);
}

function openNav() {
  document.getElementById('sidebar-menu').style.width = '60%';
  document.getElementById('reveal-global-div').style.marginLeft = '60%';
  document.getElementById('open-menu-button').style.visibility = 'hidden';
}

function closeNav() {
  document.getElementById('sidebar-menu').style.width = '0';
  document.getElementById('reveal-global-div').style.marginLeft = '0';
  document.getElementById('open-menu-button').style.visibility = 'visible';
}
