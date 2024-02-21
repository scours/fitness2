/*
 * File: index.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 20th February 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 21st February 2024
 * Modified By: Steward OUADI
 */

async function parseManifest(manifestContent) {
  const slides = [];
  const lines = manifestContent.split("\n");

  for (let index = 0; index < lines.length; index++) {
    let line = lines[index];

    // First, check if the line starts with "slide" and ignore lines that don't
    if (!line.trim().startsWith("slide")) continue;

    // Use a regex to match valid slide lines and ignore comments correctly
    // This regex assumes that comments are only valid if they follow a space after the URL or slide range
    const regex = /^slide\s+([^\s]+)\s*(\[\d+(:\d+)?\]|(\d+))?(?=\s+\/\/|$)/;
    const matches = line.match(regex);

    if (matches) {
      const [, link, slideNumberIfAny] = matches;
      if (slideNumberIfAny) {
        if (slideNumberIfAny.startsWith("[")) {
          const rangeMatch = slideNumberIfAny.match(/\[(\d+)(?::(\d+))?\]/);
          if (rangeMatch) {
            const start = parseInt(rangeMatch[1], 10);
            const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : start;
            for (let i = start; i <= end; i++) {
              const hash = await generateHash(index, line, i);
              slides.push(new Slide(hash, line, link, i));
            }
          }
        } else {
          const hash = await generateHash(
            index,
            line,
            parseInt(slideNumberIfAny, 10)
          );
          slides.push(
            new Slide(hash, line, link, parseInt(slideNumberIfAny, 10))
          );
        }
      } else {
        const hash = await generateHash(index, line, "");
        slides.push(new Slide(hash, line, link, ""));
      }
    }
  }

  return slides;
}

async function generateHash(lineNumber, lineContent, slideNumber) {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${lineNumber}-${lineContent}-${slideNumber}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function saveOutput(slides) {
  const outputLines = slides.map(
    (slide) =>
      `slide ${slide.hash} - ${slide.lineContent} - ${slide.link} - ${slide.slideToShow}`
  );
  const blob = new Blob([outputLines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "manifest2-output.txt";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("processButton")
    .addEventListener("click", async function () {
      const fileInput = document.getElementById("fileInput");
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = async function (e) {
          const content = e.target.result;
          const slides = await parseManifest(content);
          saveOutput(slides);
        };
        reader.readAsText(file);
      }
    });
});
