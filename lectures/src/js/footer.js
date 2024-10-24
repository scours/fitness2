/*
 * File: footer.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 21st February 2023
 * Author: Steward OUADI
 * -----
 * Last Modified: Thursday, 24th October 2024
 * Modified By: Steward OUADI
 */

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
        <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
                <img src="src/Fitness2_logo.PNG" class="rounded mx-auto d-block" alt="" width="90%" height="auto">
                <img src="src/img/Erasmus-Logo-sans-fond-1-uai-1032x212.png" class="rounded mx-auto d-block" alt=""
                    width="90%" height="auto">
                <p class="nav-link p-0 text-muted"> FITNESS 2 is funded by the European Union's ERASMUS programme
                    (contract
                    2022-FR01-KA220-HED-000023509)
                </p>
            </div>

            <div class="col mb-3">
                <h5 class="txt-orange-fitness">Host and coordination</h5>
                <p class="nav-link p-0 text-muted">The FitNESS platform is hosted by <a
                        href="https://www.contactalimentaire.fr/fr/unite-recherche-developpement/projet-fitness-food-packaging-open-courseware-higher-education-and"
                        title="show context (in French)" target="_blank">UMT Actia SafeMat</a></p>
                <p class="nav-link p-0 text-muted">The FitNESS project is administratively coordinated by <a
                        href="https://www.actia-asso.eu/en/projets/fitness-2-0/" title="administrative coordination ACTIA"
                        target="_blank">ACTIA</a> and <a
                        href="https://www.lne.fr/fr" title="administrative coordination LNE"
                        target="_blank">LNE</a> </p>
            </div>

            <div class="col mb-3">
                <h5 class="txt-orange-fitness">Contacts</h5>

                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <p class="nav-link p-0 text-muted">
                            Developer/Administrator<br /><a href="mailto:olivier.vitrac@agroparistech.fr"
                                title="contact the Administrator">&#128232;
                                <small>olivier.vitrac@agroparistech.fr</small></a><br /><a
                                href="mailto:olivier.vitrac@agroparistech.fr"
                                title="contact the Administrator">&#128222;
                                <small>+33 (0)1 89 10 11 85</small></a>
                        </p>
                    </li>
                </ul>

                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <p class="nav-link p-0 text-muted">
                            Project coordinator (Actia)<br /><a href="mailto:g.cornuau@actia-asso.eu"
                                title="contact the Coordinator">&#128232;
                                <small>g.cornuau@actia-asso.eu</small></a><br /><a
                                href="mailto:g.cornuau@actia-asso.eu"
                                </a>
                        </p>
                    </li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5 class="txt-orange-fitness">Links</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a
                            href="https://htmlpreview.github.io/?https://github.com/scours/fitness2/blob/wip/fitness/overview/FITNessOverview.html#6-how-to-clone-fitness-or-to-run-it-offline--%F0%9F%93%B4"
                            class="nav-link p-0 text-muted" target="_blank" title="download all lectures)"> &#129387;
                            Download all
                            lectures as a single ZIP file, including sources.</a></li>
                    <li class="nav-item mb-2"><a
                    href="https://fitness.agroparistech.fr/fitness/lectures/html/"
                    class="nav-link p-0 text-muted" target="_blank" title="FITNESS1">
                    FITNESS1: first versions of the platform's content</a></li>
                    <li class="nav-item mb-2"><a
                    href="https://fitness.agroparistech.fr/fitness2/lectures/fitness2-presentations.html"
                    class="nav-link p-0 text-muted" target="_blank" title="FITNESS2 presentations">
                    FITNESS2 presentations</a></li>
                    <li class="nav-item mb-2">
                        <a href="modifyLectures/modifyLecture.html" class="nav-link p-0 text-muted" target="_blank"
                            title="The data are modified only after review.">Manifest
                            editor</a>
                    </li>
                    <li class="nav-item mb-2"><a
                    href="https://www.fitness-foodpackaging.com/legalnotice"
                    class="nav-link p-0 text-muted" target="_blank" title="Legal notice">
                    Legal notice</a></li>
                    
                </ul>
            </div>

            <div class="col mb-3">
                <h5 class="txt-orange-fitness">Teasing</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="html/teasing/TestBeginner.html" target="_blank"
                            title="Check your knowledge in 20 Q/A" class="nav-link p-0 text-muted">&#129349;
                            Test your knowledge</a></li>
                    <li class="nav-item mb-2"><a href="html/teasing/FITNessOverview.html" target="_blank"
                            title="Technical description of the platform" class="nav-link p-0 text-muted">&#128745;
                            FITNess overview</a>
                    </li>
                    <li class="nav-item mb-2"><a href="/fitness/external/SAFEMAT/hose/tutorial.html" target="_blank"
                            title="From basic to very advanced content" class="nav-link p-0 text-muted">&#128640;
                            Advanced content</a>
                    </li>
                    <li class="nav-item mb-2"><a href="https://youtu.be/amMn8yz8eLg" target="_blank"
                            title="Time-lapse of the site (YouTube)" class="nav-link p-0 text-muted">&#127902;
                            Video teaser</a></li>
                    <li class="nav-item mb-2"><a href="https://fitness.agroparistech.fr/fitness2/webinar/index.html"
                            target="_blank" title="Webinar presentation" class="nav-link p-0 text-muted">Webinar</a>
                    </li>
                    <li class="nav-item mb-2"><a
                            href="https://fitness.agroparistech.fr/fitness/external/AgroParisTech/Introduction/"
                            target="_blank" title="French archives INA (education only)"
                            class="nav-link p-0 text-muted">&#128252; Packaging 56 years
                            ago</a></li>
                </ul>
            </div>

        <div class="col mb-3">
            <h5 class="txt-orange-fitness">Social</h5>
            <ul class="nav flex-column social-links">
                <li class="nav-item mb-2">
                    <a href="https://twitter.com/FitNESS_2_0" target="_blank" class="nav-link p-0 text-muted">
                        <i class="fa fa-twitter social-icon" aria-hidden="true"></i> Twitter
                    </a>
                </li>
                <li class="nav-item mb-2">
                    <a href="https://www.linkedin.com/company/fitness-packaging/" target="_blank" class="nav-link p-0 text-muted">
                        <i class="fa fa-linkedin social-icon" aria-hidden="true"></i> LinkedIn
                    </a>
                </li>
                <li class="nav-item mb-2">
                    <a href="https://www.youtube.com/@fitness-responsiblefoodpac7807" target="_blank" class="nav-link p-0 text-muted">
                        <i class="fa fa-youtube-play social-icon" aria-hidden="true"></i> YouTube
                    </a>
                </li>
            </ul>
        </div>

        </div>

        </footer>

    
     <!-- Footer Section -->
 <div class="footer-blue">
   <div class="footer-content">
     <!-- Left: Logo -->
     <div class="footer-left">
       <img src="src/european-flag.png" alt="European flag" class="footer-logo">
     </div>

     <!-- Center: Text -->
     <div class="footer-center">
       <p>FITNESS 2.0 HAS RECEIVED FUNDING FROM THE EUROPEAN UNION'S ERASMUS+ PROGRAM UNDER CONTRACT N°
         2021-1-FR01-KA220-HED-000023509.</p>
       <p>THIS WEBSITE REFLECTS THE VIEWS ONLY OF THE AUTHOR, AND THE COMMISSION CANNOT BE HELD RESPONSIBLE FOR ANY USE
         WHICH MAY BE MADE OF THE INFORMATION CONTAINED THEREIN.</p>
     </div>

     <!-- Right: Buttons -->
     <div class="footer-right">
       <a href="https://www.fitness-foodpackaging.com/legalnotice" class="footer-button">LEGAL NOTICE</a>
       <a href="https://www.fitness-foodpackaging.com/actia-and-lne" class="footer-button">CONTACTS</a>
     </div>
   </div>
 </div>

    `;
  }
}

customElements.define("main-footer", Footer);
