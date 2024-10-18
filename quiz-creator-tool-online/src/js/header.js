/*
 * File: header.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 21st February 2023
 * Author: Steward OUADI
 * -----
 * Last Modified: Friday, 18th October 2024
 * Modified By: Steward OUADI
 */
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="google_translate_element"></div> <!-- Google Translate element -->
    <div class="topnav" id="topNavId1">
        <a href="https://fitness.agroparistech.fr" >Home</a>
        <a href="javascript:void(0);" class="icon" onclick="topNavOnClick()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="logo-header">
      <div class="logo-left">
        <!-- FITNESS 2 Logo with link to home -->
        <a href="/" title="Back to Home">
          <img src="src/Fitness2_logo-no-background.png" alt="FITNESS 2 Logo" class="logo">
        </a>
      </div>

      <div class="logo-right">
        <!-- Coordinator Logo -->
        <img src="src/coordinator-actia-logo-no-background.png" alt="Coordinator Logo" class="logo">

        <!-- Twitter Logo with link -->
        <a href="https://twitter.com/FitNESS_2_0" target="_blank" title="Twitter">
          <img src="src/twitter-icon.png" alt="Twitter Logo" class="social-logo">
        </a>

        <!-- LinkedIn Logo with link -->
        <a href="https://www.linkedin.com/company/fitness-packaging/" target="_blank" title="LinkedIn">
          <img src="src/LinkedIn_icon.png" alt="LinkedIn Logo" class="social-logo">
        </a>
      </div>
    </div>

    <!-- Horizontal line -->
    <div class="bottom-border"></div>

    `;
  }
}

customElements.define("main-header", Header);
