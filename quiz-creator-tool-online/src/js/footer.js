/*
 * File: footer.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 21st February 2023
 * Author: Steward OUADI
 * -----
 * Last Modified: Thursday, 19th September 2024
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
                        href="https://www.actia-asso.eu/en/projets/fitness/" title="administrative coordination ACTIA"
                        target="_blank">ACTIA</a> and <a
                        href="https://www.lne.fr/fr" title="administrative coordination LNE"
                        target="_blank">LNE</a> </p>
            </div>

            <div class="col mb-3">
                <h5 class="txt-orange-fitness">Contact</h5>

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
            </div>

            <div class="col mb-3">
                <h5 class="txt-orange-fitness">Links</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a
                            href="https://htmlpreview.github.io/?https://github.com/scours/fitness2/blob/wip/fitness/overview/FITNessOverview.html#6-how-to-clone-fitness-or-to-run-it-offline--%F0%9F%93%B4"
                            class="nav-link p-0 text-muted" target="_blank" title="download all lectures)"> &#129387;
                            Download all
                            lectures as a single ZIP file, including sources.</a></li>
                    <li class="nav-item mb-2">
                        <a href="modifyLectures/modifyLecture.html" class="nav-link p-0 text-muted" target="_blank"
                            title="The data are modified only after review.">Manifest
                            editor</a>
                    </li>
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


        </footer>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">

            <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-dark" href="https://www.linkedin.com/company/fitness-packaging/"><i
                            class="fa fa-linkedin" aria-hidden="true"></i>
                    </a></li>
                <li class="ms-3"><a class="link-dark" href="https://twitter.com/FitNESS_2_0"><i class="fa fa-twitter"
                            aria-hidden="true"></i>
                    </a></li>
                <li class="ms-3"><a class="link-dark" href="https://www.youtube.com/@fitness-responsiblefoodpac7807"><i
                            class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a></li>
            </ul>
        </div>
    </div>
    
    `;
  }
}

customElements.define("main-footer", Footer);
