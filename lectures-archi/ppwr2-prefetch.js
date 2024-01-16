/*
 * File: ppwr2-prefetch.js
 * Contract: EU contract 2022-FR01-KA220-HED-000023509
 * Project: FitNESS 2 ERASMUS+
 * File Created: Tuesday, 16th January 2024
 * Author: Steward OUADI
 * -----
 * Last Modified: Tuesday, 16th January 2024
 * Modified By: Steward OUADI
 */

let dropDownMenuContent;
let lecturesDetails = new Map();
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Industrial-Point-of-View",
  `<h1>Industrial Point of View</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Consequences of the PPWR on the corrugated industry.
The packaging and packaging waste directive is a founding text for the packaging sector, particularly for
cardboard paper, which operates in a closed loop of reuse of its raw material, integrating on average 80% of
recycled material.
The draft European regulation which is to replace this directive proposes major changes for this sector,
despite its good results in terms of the circular economy: reuse objectives, high-quality recycling, European
harmonization of labeling, etc.
There are many challenges to overcome to continue improving the efficiency of our loop. But we also see in
this text some pitfalls which could produce results different from those expected.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Industrial-Point-of-View.html#/1" id="lecture-button-Industrial-Point-of-View" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/industrial-point-of-view.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Kareen DESBOUIS</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/EU-Packaging-Rules",
  `<h1>EU Packaging Rules</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>The revised EU rules on packaging and packaging waste - will they bring the much needed
focus on prevention?
There is a need to address the boundaries of resource use regarding all packaging materials - as
all these materials come with their respective impacts. Our current production and
unsustainable consumption patterns are clearly reflecting the linear economy model which
creates continuous demand for virgin raw materials and endless waste. Packaging is one of the
main users of virgin materials (40% of plastics and 50% of paper used in the EU is destined for
packaging) and accounts for 36 % of municipal solid waste.
The proposal of revised EU rules on packaging and packaging waste cover both packaging
design and packaging waste management. The waste prevention targets in the Commission's
proposal are however still too low considering that packaging volumes have increased by 20%
over the last decade. While EU rules on packaging cover all types of packaging and packaging
waste placed on the European market, some measures in the proposal address plastic only. On
the positive side, the PPWR as proposed by the European Commission, shows for the first time
a good overall ambition to encourage prevention through mandatory reuse targets for a wide
range of packaging types, in line with the waste hierarchy.
Finally, in order for packaging to be truly sustainable, it needs to be safe for both human and
environmental health, and the PPWR should therefore carefully consider consumer safety in
the context of the proposal.
To conclude, although the proposal is going in the right direction, it needs to be more ambitious
if the EU is willing to achieve the EU Green Deal goals.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/EU-Packaging-Rules.html#/1" id="lecture-button-EU-Packaging-Rules" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/EU-Packaging-Rules.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Dorota Napierska</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Food-Waste-Prevention",
  `<h1>Food Waste Prevention</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Packaging development to stop food waste.
Well-designed packaging, crucial for a welfare state, support for food preservation and transport
over time and long distances. However, its reputation has declined due to environmental
concerns, especially plastic pollution in oceans. While packaging is criticized for its
environmental impact, the real climate threat lies in food production, a major contributor to
climate change, freshwater depletion, species extinction, and eutrophication. The future of
packaging development should, to a much greater extent, ensure that food waste can be reduced.
In our research, we've explored the complex link between food packaging and waste reduction.
Prevailing business models prioritize economics and sales, sometimes hindering the
responsibility of ensuring food reaches consumers without waste. Balancing packaging's
environmental impact with its role in limiting food waste and climate effects is a challenging
task, complicated by differing food footprints, consumer behavior, and packaging recyclability
uncertainties. Different functions of packaging can influence food waste and we know that food
quantity in packaging greatly influences waste, driven by producers' sales focus and consumer
price comparisons. Misunderstanding of "best before" labels also contributes to waste. Food
producers should educate consumers to reduce this unnecessary waste.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Food-Waste-Prevention.html#/1" id="lecture-button-Food-Waste-Prevention" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Food-Waste-Prevention.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Helén Williams</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Recycling-Risk-Assessment-in-CN",
  `<h1>Recycling Risk Assessment in CN</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Risk assessment of recycling plastics for food contact purposes in China</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-Recycling-Risk-Assessment-in-CN" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Recycling-Risk-Assessment-in-CN.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Xining XIA</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Food-PKG-Regulation-in-CL",
  `<h1>Food PKG Regulation in CL</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Trends in regulation for food packaging in Chile</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Food-PKG-Regulation-in-CL.html#/1" id="lecture-button-Food-PKG-Regulation-in-CL" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Authors</h4><ul><li>María José Galotto</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Sustainable-PKG-in-US",
  `<h1>Sustainable PKG in US</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Top Down or Patchwork? Emerging Sustainable Packaging Regulations in North America.
Environment Climate Change Canada (ECCC) recently published a national Framework Paper
on recycled content and labeling rules for plastics as well as a draft pollution prevention (P2)
planning notice for primary food plastic packaging that would require the largest retailers to
require 10% minimum recycled content (MRC) for food and beverage packaging and eliminate
95% of plastic packaging for fresh fruits and vegetables. In the United States, four states, led by
California, have enacted laws requiring Extended Producer Responsibility (EPR), MRC goals,
and recyclability labeling. Several other states are considering similar legislation. The
differences in each of these enacted and proposed laws may create a complex patchwork of
sustainability regulation in the United States and between Canada and the U.S. What challenges
and opportunities will producers encounter as they navigate this patchwork of emerging
regulations?</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Sustainable-PKG-in-US.html#/1" id="lecture-button-Sustainable-PKG-in-US" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Sustainable-PKG-in-US.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Andrew STEPHENS</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/EU-PKG-Approval-History",
  `<h1>EU PKG Approval History</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>History and evolution of food contact packaging approval in EU.
The EU FCM legislation was born in the 70s with general safety principles, still valid. Harmonized measures
were laid down and amended along time on materials (plastic, regenerated cellulose, ceramic, active and
intelligent materials and articles) and substances (nitrosamines in rubber, BPA, BADGE and related
substances, VCM). Industrial innovations, scientific and safety issues, improvement in tools (digitalization,
analytical instrumentation,) and environmental safety challenges pushed toward a wider angle of view with
respect simple authorization of substances. Safety evaluation of processes and their management under
auditable GMP systems was established in more recent EU legislation.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/EU-PKG-Approval-History.html#/1" id="lecture-button-EU-PKG-Approval-History" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Authors</h4><ul><li>Maria Rosaria MILANA</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/FDA-on-Recycled-Plastics",
  `<h1>FDA on Recycled Plastics</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>topic1,topic2,topic3</p><h4>Abstract</h4><p>Recycled Plastics in Food Packaging.
There is an emphasis throughout the United States on increasing the use of post-consumer
recycled (PCR) materials, including plastic. FDA is involved when industry proposes to use
recycled polymeric materials (usually originating from used food packaging) to make new food
packaging. FDA's main safety concerns with the use of PCR plastic materials in food contact
articles are: 1) that incidental contaminants from the collection process of the PCR material and
the prior use or misuse of the original packaging may appear in the food contact article and 2)
that substances not authorized for food contact use may be incorporated into the new food
contact article. For more than 30 years, FDA has been evaluating voluntary submissions on the
ability of a recycling process to produce PCR plastic of a suitable purity for food contact
applications. This presentation will provide an overview of FDA’s current views on the use of
recycled plastics in food packaging, the source control and testing data needed to demonstrate
that a recycling process is likely to produce a recycled material of suitable purity for its intended
use, and some of the challenges we face.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/FDA-on-Recycled-Plastics.html#/1" id="lecture-button-FDA-on-Recycled-Plastics" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/FDA-on-Recycled-Plastics.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Sean Fischer</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/EFSA-on-PET-Recycling",
  `<h1>EFSA on PET Recycling</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>EFSA safety evaluation of mechanical recycling processes used to produce
polyethylene terephthalate (PET) intended for food contact applications.
The development of a scheme for the safety evaluation of mechanical recycling processes for
polyethylene terephthalate (PET) is described. The starting point is the adoption of a threshold of
toxicological concern such that migration from the recycled PET should not give rise to a dietary
exposure exceeding 0.0025 μg kg –1 bw day –1 , the exposure threshold value for chemicals with
structural alerts raising concern for potential genotoxicity, below which the risk to human health
would be negligible. It is practically impossible to test every batch of incoming recovered PET
and every production batch of recycled PET for all the different chemical contaminants that
could theoretically arise. Consequently, the principle of the safety evaluation is to measure the
cleaning efficiency of a recycling process by using a challenge test with surrogate contaminants.
This cleaning efficiency is then applied to reduce a reference contamination level for post-
consumer PET, conservatively set at 3 mg kg –1 PET for a contaminant resulting from possible
misuse by consumers. The resulting residual concentration of each contaminant in recycled PET
is used in conservative migration models to calculate migration levels, which are then used along
with food consumption data to give estimates of potential dietary exposure.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/EFSA-on-PET-Recycling.pdf" id="lecture-button-EFSA-on-PET-Recycling" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Authors</h4><ul><li>Eric BARTHÉLÉMY</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/APR-&-RecyClass",
  `<h1>APR-RecyClass</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>APR and RecyClass - Different Geographies, Common Purpose: The Association of Plastics Recyclers (APR) and RecyClass have forged a pioneering collaboration to advance plastic recycling efforts. This strategic partnership, which holds immense promise for the global sustainability landscape, aims to revolutionize the recycling industry across our two geographies. With our extensive expertise in design for recycling and testing protocols for the European and North American markets, RecyClass and APR have joined forces to advance harmonized recyclability design and assessment protocols, fostering innovation and promoting the plastic packaging circular economy.
The RecyClass – APR partnership exemplifies the power of collaboration in driving positive change and accelerates the transition towards a more sustainable and circular plastic economy, reducing waste, conserving resources, and mitigating environmental impact.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/APR-RecyClass.html#/1" id="lecture-button-APR-&amp;-RecyClass" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/APR-&amp;-RecyClass.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Curt Cozart</li><li>Fabrizio Di Gregorio</li><li>Scott Trenor</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Recycled-Polyolefins-Safety",
  `<h1>Recycled Polyolefins Safety</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Safety of Recycled Polyolefins.
Recycled plastic for packaging applications in consumers good industry is expected to increase
fivefold over the next five years to well over one million tons per year. The biggest obstacle to
meeting this demand and a rapid introduction of recycled plastics in packaging in this industry is the
lack of qualitatively acceptable recyclates.
CosPaTox, a consortium working on the interface of Cosmetics, Packaging, and Toxicology, is
committed to formulating so-far missing specific risk assessment guidance for high-quality Post-
Consumer Plastic Recyclates (PCRs) for the use in cosmetic product and detergent packaging. In such
finished products, important requirements exist for the safety of packaging applications.
The CosPaTox members represent the full value chain (recyclers, convertors, and brand owners)
supported by academic partners. CosPaTox was established to support industry by defining
guidelines and quality levels for the safe use of recycled plastics in cosmetics and detergents
packaging, based on thorough analytical studies and toxicological principles. This work aims to
support producers of cosmetics and detergent products in conducting risk assessments for their
packaging and to support the recycling industry by defining test methods to determine or confirm
the quality of recyclates.
CosPaTox focuses on polyolefin materials (r-HDPE, r-LDPE and r-PP), for which food contact approved
recyclates are extremely rare. In the absence of a food contact approval, a dedicated risk assessment
is required before recycled plastics can be used in packaging. The risk assessment approach
developed by CosPaTox can also be applied to r-PET, but no specific testing of such recyclates has
been conducted by CosPaTox as for this material, a much larger number of food contact approved
grades already exists.
The CosPaTox consortium’s approach is technology-neutral and does not take into account any
particular recycling technology, but only the quality of the recycled materials. The project aims to
finalize its work by end of 2023 and publish its findings in 2024.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Recycled-Polyolefins-Safety.html#/1" id="lecture-button-Recycled-Polyolefins-Safety" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Recycled-Polyolefins-Safety.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Celine ABAD</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Recycled-PET-Safety",
  `<h1>Recycled PET Safety</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Safety issues for recycled PET and beyond.
The rapid adoption of recycled materials-from plastics to cellulosic substances-has out-
paced policymakers’ and industry leaders’ consideration of potential consequences. This
presentation tackles the critical issue of quantifying and managing the inherent risks of un-
known chemicals in recycled materials. We examine the challenges of ensuring the safety
of recycled materials, such as recycled polyethylene terephthalate (rPET), in applications
demanding the same level of safety as virgin materials, including food-contact packaging
without functional barriers and hot-fill processes.
Addressing the unknown necessitates innovative methodologies; we employ information the-
ory as a transformative lens. This approach extends thermodynamics principles, allowing us
to harness analytical chemistry and spectroscopic data into a ’chemical genetic code.’ This
encodes the observable chemical information-regardless of its immediate interpretability-and
enables the quantification of information entropy, an extensive property adhering to algebraic
operations. This facilitates the isolation, tracking, and comparison of unique contamination
fingerprints.
We will showcase several examples where over 150 streams from four continents have been
encoded and evaluated against virgin polymers, using Euclidean distance as a measure of
purity. This novel metric translates into a quantifiable number of chemicals, offering insights
into the mutual contamination across materials, packaging components, and the food supply
chain and the efficacy of contamination removal during recycling. These findings lay the
groundwork for a collaborative research project to fortify the recycling loop and safeguard
the journey from waste to future packaging.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Recycled-PET-Safety.html#/1" id="lecture-button-Recycled-PET-Safety" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Recycled-PET-Safety.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Olivier VITRAC</li></ul>`
);
lecturesDetails.set(
  "PPWR2/RECYCLING PKG DAY/Recycled-PKG-in-Food",
  `<h1>Recycled PKG in Food</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>The contamination of food by recycled paper and board packaging starts at the scale of fibers.
Food packaging contamination has become a significant concern due to implementing circular
economy practices, including the increased use of recycled materials. Although the
contamination of paper and board is widely studied, the current techniques show limitations in
accurately quantifying and characterizing certain types of contaminants (e.g., mineral oil
hydrocarbons). Moreover, very few studies have targeted the causes and effects of this
contamination. This study uses chemical imaging as a novel method to investigate the
contamination of food packaging materials made of recycled paper and board at the
microscopic scale. The contamination of commercial packaging is explored, while reference
materials and model solutes are used to develop the method that provides a heat map of
contaminants distribution at the fibers’ scale. The main findings highlight the heterogeneous
distribution of contaminants within the paper matrix, with variations influenced by the nature of
the contaminant and solvent used. This research emphasizes the need to develop analytical
methods to enhance their accuracy and reliability. By exploring the root causes of
contamination, this work contributes to improving the safety and quality of food packaging
materials in a circular economy.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Recycled-PKG-in-Food.html#/1" id="lecture-button-Recycled-PKG-in-Food" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Recycled-PKG-in-Food.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Lucas Biant</li><li>Julien Kermorvant</li><li>Murielle Hayert</li><li>Phuong-Mai Nguyen</li><li>Olivier Vitrac</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/Reusable-PKG-in-EU",
  `<h1>Reusable PKG in EU</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Reusable consumer packaging: status quo, challenges &amp; opportunities in Europe</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Reusable-PKG-in-EU.html#/1" id="lecture-button-Reusable-PKG-in-EU" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Reusable-PKG-in-EU.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Marcel KEUENHOF</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/PR3-Standards",
  `<h1>PR3 Standards</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p> How PR3 standards for reusable packaging can reduce costs, ensure performance, and lead to scale.
Single-use packaging is a primary cause of the plastic crisis and a major contributor to the climate crisis. Reuse is the most effective solution. PR3’s mission is to empower and accelerate reuse systems around the world. Over the past 4 years, PR3 began convening a balanced set of stakeholders from across the value chain, including packaging manufacturers, brand owners, retailers, service providers, waste workers, public health experts, and activists, to develop standards for reusable packaging systems. The standards set minimum requirements to ensure interoperability between businesses and communities, enabling shared return points, logistics, and wash hubs. The standards include safety, durability, and labeling requirements, and require a minimum number of use-cycles and return rates to ensure environmental performance. PR3’s standards are the only global standards for reuse and are in the process of being accredited by the American National Standards Institute and other international standards bodies.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/PR3-Standards.pdf" id="lecture-button-PR3-Standards" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/PR3-Standards.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Claudette JUSKA</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/Industrializing-PKG-Reuse",
  `<h1>Industrializing PKG Reuse</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>How to industrialize packaging reuse?
For 30 years, ETERNITY Systems has helped to reduce the single use of packaging through its expertise in
the industrial circularity of collecting, transporting, repairing, washing, and storing reusable packaging
for logistics (crates, bins, boxes, pallets) and mass consumption (cups, pots, jars, trays, gastronomy
containers) in Europe and North America. Packaging reuse has existed on a large scale, for more than 30
years, with the "washer-pooler" model,... Find out more at this presentation.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Industrializing-PKG-Reuse.pdf" id="lecture-button-Industrializing-PKG-Reuse" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Industrializing-PKG-Reuse.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Eléonore BLONDEAU</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/Secondary-PKG-Reuse",
  `<h1>Secondary PKG Reuse</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Ecological and economic assessment of reusable packaging in a refrigerated supply chain.
In alignment with the objectives of the French anti-waste law for the circular economy,
particularly the 3R decree, the Chaire CoPack launched a research project to assess the im-
plications of transitioning from a linear economy to a circular economy through the adoption
of reusable packaging. Data collection in the field enabled the research team to conduct an
initial study comparing the environmental impacts of various approaches to product distribu-
tion, with a specific focus on the bread supply chain, involving both reusable and single-use
packaging.
Life Cycle Assessment (LCA) was employed for analysis, revealing that employing reusable
packaging could present an environmental advantage when cleaned after approximately four
usage cycles. The technical and economic evaluation demonstrated a marginal advantage
over single-use packaging, albeit with increased operational complexity. However, as the
frequency of cleaning increases, the environmental benefits of reusing packaging diminish,
primarily due to heightened energy consumption associated with heating the cleaning water.
The preliminary findings from this study will be complemented with industry feedback to
gain insights into the challenges and opportunities surrounding the transition to reusable
packaging, considering the technical and economic challenges of this shift.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Secondary-PKG-Reuse.html#/1" id="lecture-button-Secondary-PKG-Reuse" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Secondary-PKG-Reuse.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Alice JOLY</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/Buddie-Pack-Project",
  `<h1>Buddie Pack Project</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Buddie-Pack project: european project on reuse plastic packaging: The European project BUDDIE-PACK, funded by the new Horizon Europe programme and coordinated by the
Industrial Technical Centre for Plastics and Composites (IPC), brings together 19 partners from 6 different
countries and will take place over a period of three and a half years with a budget of nearly 7 million euros.
Buddie-Pack is a circular economy project aimed at developing a systemic approach to the large-scale
deployment of reusable plastic packaging (RPP), based on a multidisciplinary approach combining social,
technological and economic innovations. The project will focus on innovative cleaning solutions to guarantee
the safety of consumers against the possible contamination and ageing of RPP during their repeated use, and
the durability of their functional properties to avoid food spoilage. Viable economic models will ensure the
sustainability of the proposed solutions thanks to the profitability of stakeholders throughout the value chain,
including solutions based on social &amp; solidarity economy models.
Safety of RPP is at the heart of the project, covered by the work-package 5 which aims to develop the
approach for risk assessment and management of reusable packaging after use. The functional properties
and safety (presence of contaminants, chemical migration, microorganisms...) of reusable packaging will be
assessed after multiple cycles of reuse/cleaning. Microplastic release will be quantified throughout the life
cycle. Cleaning technologies will be optimised and integrated in a cleaning pilot line.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Buddie-Pack-Project.html#/1" id="lecture-button-Buddie-Pack-Project" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/Buddie-Pack-Project.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Phuong-Mai NGUYEN</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/Education-in-Responsible-PKG",
  `<h1>Education in Responsible PKG</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Education in Responsible PKG</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-Education-in-Responsible-PKG" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Authors</h4><ul><li>Sandra DOMENEK</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/FitNESS-Platform",
  `<h1>FitNESS Platform</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>FitNESS: Open Courseware for Responsible Food Packaging and Supply Chain Education.
The ecological transition imposes a revision of the logic of transformation and distribution of
food including ingredients and packaging to avoid it travels thousands of kilometers before
reaching consumers' plates. The solutions will come through innovation within our industries
and the education of the coming generation; the Fitness projects contribute to this evolution.
The two consecutive projects, FitNESS for "Food packaging open courseware for higher
education and staff of companies" and funded by the Erasmus+ Program of the European
Union, have been designed to imagine future responsible food packaging and supply chains by
detailing the different technical and scientific aspects of food packaging without taking sides.
(www.fitness-foodpackaging.com)</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/FitNESS-Platform.pdf" id="lecture-button-FitNESS-Platform" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/FitNESS-Platform.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Christophe COTILLON</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/Virtual-Labs-in-Food-Science",
  `<h1>Virtual Labs in Food Science</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Development of Virtual and Remote Teaching Laboratories for Food Science and Engineering Students.
COVID-19 forced many universities to cancel in-person instructions and to substitute virtual
course presentations instead. This created problems for courses that required laboratory sessions
which served as tools for efficient understanding of certain concepts. To meet this unexpected
need, researchers from the universities above designed virtual laboratory exercises to meet the
academic needs of food science and engineering students. To accomplish this, protype kits of
selected assignments were developed and distributed, first to the collaborators’ universities, where
students enrolled in related courses provided constructive critiques of the kits. These critiques were
used to improve the kits before distributing them to other United States universities.</p><a target="_blank" class="btn btn-primary" href="https://fitness.agroparistech.fr/fitness2/online/PPWR2/Virtual-Labs-in-Food-Science.html#/1" id="lecture-button-Virtual-Labs-in-Food-Science" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Authors</h4><ul><li>Melvin Pascall</li><li>Shyam Sablani</li><li>Julie Goddard</li><li>Olive Li</li><li>Kit Yam</li></ul>`
);
lecturesDetails.set(
  "PPWR2/REUSE PKG DAY/PKG-Education-in-the-US",
  `<h1>PKG Education in the US</h1><h4>Difficulty level</h4><p>Intermediate<i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star star-color-yellow little-space"></i><i class="fa fa-star-o star-color-yellow little-space"></i></p><h4>Topics</h4><p>ppwr2,ppwr</p><h4>Abstract</h4><p>Packaging education in the U.S. and the SoP @ MSU</p><a target="_blank" class="btn btn-primary" href="" id="lecture-button-PKG-Education-in-the-US" style="background-color: rgb(236, 104, 7); border-color: rgb(236, 104, 7); margin-bottom: 2%;">Read the lecture</a><h4>Video</h4><video width="640" height="360" controls=""><source src="https://fitness.agroparistech.fr/fitness2/online/PPWR2/videos/PKG-Education-in-the-US.mp4" type="video/mp4">Your browser does not support the video tag.</video><h4>Authors</h4><ul><li>Rafael AURAS</li></ul>`
);
dropDownMenuContent = `
<div>
    <button class="dropdown-btn" id="dropdown-btn-PPWR2">PPWR2<i class="fa fa-caret-down"></i></button>
    <div class="dropdown-container" id="dropdown-container-PPWR2"><button class="dropdown-btn"
            id="dropdown-btn-RECYCLING PKG DAY">RECYCLING PKG DAY<i class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-RECYCLING PKG DAY"><a
                href="#PPWR2/RECYCLING PKG DAY/Industrial-Point-of-View"
                id="PPWR2/RECYCLING PKG DAY/Industrial-Point-of-View" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Industrial Point of View<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/EU-Packaging-Rules" id="PPWR2/RECYCLING PKG DAY/EU-Packaging-Rules"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">EU Packaging Rules<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Food-Waste-Prevention" id="PPWR2/RECYCLING PKG DAY/Food-Waste-Prevention"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Food Waste Prevention<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Recycling-Risk-Assessment-in-CN"
                id="PPWR2/RECYCLING PKG DAY/Recycling-Risk-Assessment-in-CN" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Recycling Risk Assessment in CN<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Food-PKG-Regulation-in-CL"
                id="PPWR2/RECYCLING PKG DAY/Food-PKG-Regulation-in-CL" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Food PKG Regulation in CL<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Sustainable-PKG-in-US" id="PPWR2/RECYCLING PKG DAY/Sustainable-PKG-in-US"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Sustainable PKG in US<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/EU-PKG-Approval-History"
                id="PPWR2/RECYCLING PKG DAY/EU-PKG-Approval-History" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">EU PKG Approval History<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/FDA-on-Recycled-Plastics"
                id="PPWR2/RECYCLING PKG DAY/FDA-on-Recycled-Plastics" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">FDA on Recycled Plastics<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/EFSA-on-PET-Recycling" id="PPWR2/RECYCLING PKG DAY/EFSA-on-PET-Recycling"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">EFSA on PET Recycling<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/APR-&amp;-RecyClass" id="PPWR2/RECYCLING PKG DAY/APR-&amp;-RecyClass"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">APR-RecyClass<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Recycled-Polyolefins-Safety"
                id="PPWR2/RECYCLING PKG DAY/Recycled-Polyolefins-Safety" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Recycled Polyolefins Safety<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Recycled-PET-Safety" id="PPWR2/RECYCLING PKG DAY/Recycled-PET-Safety"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Recycled PET Safety<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/RECYCLING PKG DAY/Recycled-PKG-in-Food" id="PPWR2/RECYCLING PKG DAY/Recycled-PKG-in-Food"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Recycled PKG in Food<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a></div><button class="dropdown-btn"
            id="dropdown-btn-REUSE PKG DAY">REUSE PKG DAY<i class="fa fa-caret-down"></i></button>
        <div class="dropdown-container" id="dropdown-container-REUSE PKG DAY"><a
                href="#PPWR2/REUSE PKG DAY/Reusable-PKG-in-EU" id="PPWR2/REUSE PKG DAY/Reusable-PKG-in-EU"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Reusable PKG in EU<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/PR3-Standards" id="PPWR2/REUSE PKG DAY/PR3-Standards"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">PR3 Standards<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/Industrializing-PKG-Reuse" id="PPWR2/REUSE PKG DAY/Industrializing-PKG-Reuse"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Industrializing PKG Reuse<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/Secondary-PKG-Reuse" id="PPWR2/REUSE PKG DAY/Secondary-PKG-Reuse"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Secondary PKG Reuse<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/Buddie-Pack-Project" id="PPWR2/REUSE PKG DAY/Buddie-Pack-Project"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">Buddie Pack Project<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/Education-in-Responsible-PKG"
                id="PPWR2/REUSE PKG DAY/Education-in-Responsible-PKG" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Education in Responsible PKG<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/FitNESS-Platform" id="PPWR2/REUSE PKG DAY/FitNESS-Platform"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">FitNESS Platform<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/Virtual-Labs-in-Food-Science"
                id="PPWR2/REUSE PKG DAY/Virtual-Labs-in-Food-Science" class="dropdown-container-class"
                onclick="lectureToDisplay(this.id)">Virtual Labs in Food Science<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a><a
                href="#PPWR2/REUSE PKG DAY/PKG-Education-in-the-US" id="PPWR2/REUSE PKG DAY/PKG-Education-in-the-US"
                class="dropdown-container-class" onclick="lectureToDisplay(this.id)">PKG Education in the US<i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star star-color-yellow little-space"></i><i
                    class="fa fa-star-o star-color-yellow little-space"></i></a></div>
    </div>
</div>
`;
