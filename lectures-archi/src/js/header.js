/*
 * File: header.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 21st February 2023
 * Author: Steward OUADI
 * -----
 * Last Modified: Monday, 4th December 2023
 * Modified By: Steward OUADI
 */
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="topnav" id="topNavId1">
        <a href="https://fitness.agroparistech.fr" >Home</a>
        <a href="javascript:void(0);" class="icon" onclick="topNavOnClick()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    `;
  }
}

customElements.define("main-header", Header);
