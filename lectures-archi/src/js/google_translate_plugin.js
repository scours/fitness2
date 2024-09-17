/*
 * File: google_translate_plugin.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 17th September 2024
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Tuesday, 17th September 2024
 * Modified By: Steward OUADI
 */

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en", // Default language of the page
      includedLanguages: "fr,en,es,de,it,pt,zh,ja,ru", // Languages available in the dropdown
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Simple dropdown layout
      autoDisplay: true, // Automatic translation on page load
    },
    "google_translate_element"
  );
}

// Load Google Translate script
(function () {
  var gtScript = document.createElement("script");
  gtScript.type = "text/javascript";
  gtScript.async = true;
  gtScript.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(gtScript, s);
})();
