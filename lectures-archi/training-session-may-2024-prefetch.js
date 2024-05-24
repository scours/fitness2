/*
 * File: lectures-prefetch.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 31st October 2023
 * Authors: Steward OUADI (AgroParisTech),  Olivier VITRAC (INRAE)
 * -----
 * Last Modified: Friday, 24th May 2024
 * Modified By: Steward OUADI
 */

let dropDownMenuContent;
let lecturesDetails = new Map();
lecturesDetails.set(
  "Day 1/Bio-based-and-biodegradable-materials",
  `<h1>Bio-based and biodegradable materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Bio-based and biodegradable materials</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-Bio-based-and-biodegradable-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Aarhus university</li></ul>`
);
lecturesDetails.set(
  "Day 1/Do-we-need-and-how-to-substitute-plastics",
  `<h1>Do we need and how to substitute plastics?</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>Plastic packaging,food safety and quality requirements,plastic substitution,consequences</p><h4>Abstract</h4><p>In Europe and globally, there are a large number of environmentally relevant targets, some of which contradict each other in terms of their consequences. It is therefore difficult to solve the problem of environmental pollution caused by plastic waste. At the same time, food losses, the overall use of packaging and the emission of greenhouse gases are also to be reduced. Although substituting plastics with other materials solves the problem of plastic waste in the environment, it jeopardizes the achievement of other goals. The right measures for food packaging can therefore only be identified by taking into account the required packaging functions. Moreover, they are always a compromise. The circular economy of packaging therefore appears to be the relatively best strategy for solving the problems together.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/FHG/do-we-need-plastics.html" id="lecture-button-Do-we-need-and-how-to-substitute-plastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Day 1/Environmental-impact-of-packaging",
  `<h1>Environmental impact of packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p></p><h4>Abstract</h4><p>Environmental impact of packaging</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-Environmental-impact-of-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>AgroParisTech</li></ul>`
);
lecturesDetails.set(
  "Day 1/Panorama-of-food-packaging",
  `<h1>Panorama of food packaging</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>history,overview,product protection,terminology,functions,packaging materials, packaging waste,environment</p><h4>Abstract</h4><p>This course is an introduction to the entire content of the FITNess project. The history of packaging is quickly summarized through the past centuries as well as the current challenges for the environment and society. Food packaging has developed at the interface of food needs (safety, preservation), technological possibilities and consumer expectations. The science of packaging combines food process engineering, materials science, toxicology, microbiology, regulations...). This course introduces the main five functions of packaging: protection, i.e. preserving food quality and preventing health risks; containment, i.e. preserving the integrity of the packaging and its contents; communication, i.e. consumer information on filling quantity, ingredients and other required indications,  convenience, i.e. functions that facilitate the use of the packaging and the packaged product and, finally, conservation, i.e. functions that minimize the environmental impact of the packaged product, but also the best possible recovery of the used packaging. The contents show that packaging must always be seen in the context with the packaged product and its requirements.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html#panorama-of-food-packaging-2024" id="lecture-button-Panorama-of-food-packaging" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Horst-Christian Langowski</li></ul>`
);
lecturesDetails.set(
  "Day 1/Recycling-of-paper-and-board",
  `<h1>Recycling of paper and board</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Recycling of paper and board including safety aspects and legislation</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-Recycling-of-paper-and-board" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>UCP</li></ul>`
);
lecturesDetails.set(
  "Day 1/Reuse-and-returnable-systems",
  `<h1>Reuse and returnable systems</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-Reuse-and-returnable-systems" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Aarhus University</li></ul>`
);
lecturesDetails.set(
  "Day 1/Safety-assessments-of-biobased-materials",
  `<h1>Safety assessments of biobased materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html#safety-assessment-of-plastics-recycling-for-food-contact-materials" id="lecture-button-Safety-assessments-of-biobased-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>AgroParisTech</li></ul>`
);
lecturesDetails.set(
  "Day 1/The-incorporation-of-recycled-materials",
  `<h1>The incorporation of recycled materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-The-incorporation-of-recycled-materials" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>AgroParisTech</li></ul>`
);
lecturesDetails.set(
  "Day 2/Functional-barrier-concept",
  `<h1>Functional barrier concept and how to design (by modeling tool)  including substance transfer for flexible materials in a roll</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/LNE/training_functional_barrier_LNE.html" id="lecture-button-Functional-barrier-concept" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header">Test your knowledge</h4><p id="q-and-a-par"><a href="https://fitness.agroparistech.fr/fitness2/online/LNE/assessments/functional-barrier-modelling/index.html" target="_blank">Access the assessment</a></p><h4>Authors</h4><ul><li>Phuong-Mai Nguyen</li><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "Day 2/Introduction-on-recycling",
  `<h1>Introduction on recycling  + Plastics - safety assessment of plastics recycling processed for food contact materials</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>EU policy,basics of recycling,food contact regulations,health issues,recycling processes</p><h4>Abstract</h4><p>The EU is pursuing the transition to a circular economy in many areas. This applies in particular to packaging. Recycling of used packaging is a central element of this policy, which aims to minimise the environmental impact of our economic system. The introduction explains the different types of recycling specifically for plastic packaging and the priority given to mechanical recycling. For the consumer, it is particularly important that the possible health effects of packaging are minimised. For this purpose, there is a series of EU regulatory acts for both virgin materials and recycled plastic in packaging applications with direct contact between food and packaging. Finally, the assessment of the food safety of recycled plastics is discussed, taking into account the criteria of the European Food Safety Agency (EFSA).</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/lectures/viewer/index.html#safety-assessment-of-plastics-recycling-for-food-contact-materials" id="lecture-button-Introduction-on-recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Fraunhofer</li></ul>`
);
lecturesDetails.set(
  "Day 2/Recycling-packaging-material-processes-safety",
  `<h1>Recycling packaging material processes, safety and comparison of recycled materials with native ones</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-Recycling-packaging-material-processes-safety" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>AgroParisTech</li></ul>`
);
lecturesDetails.set(
  "Day 2/Use-of-information-theory-for-the-unsupervised-identification-of-contaminants",
  `<h1>Use of information theory for the unsupervised identification of contaminants in recycled materials (plastic and cellulose) intended to come into contact with food.</h1><h4>Difficulty level</h4><span>Novice<i class="fa fa-star star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i><i class="fa fa-star-o star-color-green little-space"></i></span><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Abstract</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness/lectures/html/common/S1/U1.1/part1.html" id="lecture-button-Use-of-information-theory-for-the-unsupervised-identification-of-contaminants" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4 id="q-and-a-header" style="display: none;">Test your knowledge</h4><p id="q-and-a-par" style="display: none;">There is no assessment for this lecture.</p><h4>Authors</h4><ul><li>Phuong-Mai Nguyen</li></ul>`
);
dropDownMenuContent = `    <button class="dropdown-btn" id="dropdown-btn-Day 1">Day 1<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Day 1"><button class="dropdown-btn"
            id="dropdown-btn-Bio-based-and-biodegradable-materials">Bio-based-and-biodegradable-materials<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Bio-based-and-biodegradable-materials"><a
                href="#Day 1/Bio-based-and-biodegradable-materials" id="Day 1/Bio-based-and-biodegradable-materials"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Bio-based and biodegradable
                materials<i class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Do-we-need-and-how-to-substitute-plastics">Do-we-need-and-how-to-substitute-plastics<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Do-we-need-and-how-to-substitute-plastics"><a
                href="#Day 1/Do-we-need-and-how-to-substitute-plastics"
                id="Day 1/Do-we-need-and-how-to-substitute-plastics" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Do we need and how to substitute plastics?<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Environmental-impact-of-packaging">Environmental-impact-of-packaging<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Environmental-impact-of-packaging"><a
                href="#Day 1/Environmental-impact-of-packaging" id="Day 1/Environmental-impact-of-packaging"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Environmental impact of packaging<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Panorama-of-food-packaging">Panorama-of-food-packaging<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Panorama-of-food-packaging"><a
                href="#Day 1/Panorama-of-food-packaging" id="Day 1/Panorama-of-food-packaging"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Panorama of food packaging<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Recycling-of-paper-and-board">Recycling-of-paper-and-board<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Recycling-of-paper-and-board"><a
                href="#Day 1/Recycling-of-paper-and-board" id="Day 1/Recycling-of-paper-and-board"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Recycling of paper and board<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Reuse-and-returnable-systems">Reuse-and-returnable-systems<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Reuse-and-returnable-systems"><a
                href="#Day 1/Reuse-and-returnable-systems" id="Day 1/Reuse-and-returnable-systems"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Reuse and returnable systems<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Safety-assessments-of-biobased-materials">Safety-assessments-of-biobased-materials<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Safety-assessments-of-biobased-materials"><a
                href="#Day 1/Safety-assessments-of-biobased-materials"
                id="Day 1/Safety-assessments-of-biobased-materials" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Safety assessments of biobased materials<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-The-incorporation-of-recycled-materials">The-incorporation-of-recycled-materials<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-The-incorporation-of-recycled-materials"><a
                href="#Day 1/The-incorporation-of-recycled-materials" id="Day 1/The-incorporation-of-recycled-materials"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">The incorporation of recycled
                materials<i class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div>
    </div><button class="dropdown-btn" id="dropdown-btn-Day 2">Day 2<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-Day 2"><button class="dropdown-btn"
            id="dropdown-btn-Functional-barrier-concept">Functional-barrier-concept<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Functional-barrier-concept"><a
                href="#Day 2/Functional-barrier-concept" id="Day 2/Functional-barrier-concept"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Functional barrier concept and how
                to design (by modeling tool) including substance transfer for flexible materials in a roll<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Introduction-on-recycling">Introduction-on-recycling<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Introduction-on-recycling"><a
                href="#Day 2/Introduction-on-recycling" id="Day 2/Introduction-on-recycling"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Introduction on recycling +
                Plastics - safety assessment of plastics recycling processed for food contact materials<i
                    class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Recycling-packaging-material-processes-safety">Recycling-packaging-material-processes-safety<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-Recycling-packaging-material-processes-safety"><a
                href="#Day 2/Recycling-packaging-material-processes-safety"
                id="Day 2/Recycling-packaging-material-processes-safety" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Recycling packaging material processes, safety and comparison of
                recycled materials with native ones<i class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-Use-of-information-theory-for-the-unsupervised-identification-of-contaminants">Use-of-information-theory-for-the-unsupervised-identification-of-contaminants<i
                class="fa fa-caret-down"></i></button>
        <div class="dropdown-container"
            id="dropdown-container-Use-of-information-theory-for-the-unsupervised-identification-of-contaminants"><a
                href="#Day 2/Use-of-information-theory-for-the-unsupervised-identification-of-contaminants"
                id="Day 2/Use-of-information-theory-for-the-unsupervised-identification-of-contaminants"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Use of information theory for the
                unsupervised identification of contaminants in recycled materials (plastic and cellulose) intended to
                come into contact with food.<i class="fa fa-star star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i><i
                    class="fa fa-star-o star-color-green little-space"></i></a></div>
    </div>`;
