| <img src="images/Fitness%20logo%20RVB.png" style="zoom:33%;" /> | version 2020 |
| :----------------------------------------------------------- | -----------: |
|                                                              |              |

# Overview of FITNess platform and its evolutions (current and future)

INRAE\\<a href="mailto:olivier.vitrac@agroparistech.fr">Olivier Vitrac</a> - December 2020

[TOC]

## Context and expectations

Because the lifetime of food packaging materials is short (less than 6 months), they represent the majority of plastic wastes. Their production, collection and recycling is also impacting the environment. They are, however, essential to the preservation of food, food safety and food convenience. We are engaged in a transitional period imposed by coercive laws: Single Use Plastics Directive (EU) 2019/904/EC, French anti-waste law... None of the proposed lecture contains the solution, but the platform **FITNess** provides the only sensible answer to this complex problem: 

> It is necessary to educate oneself, to complete one's education on these complex issues and to mobilize scattered and interdisciplinary knowledge. 

<img src="images/FITNess2020.png" alt="overview" style="zoom: 20%;" />

## General goal

> FITNess stands for "*Food packaging open courseware for higher education and staff of companies*". It is a part of an ERASMUS+ Programme funded by the EU Commission (contract 2017-1-FR01-KA202-037441). The starting point of the project is that the challenges posed by food packaging (waste, food and packaging safety, food waste, food prices) need to be addressed through better education of future and current professionals.

The concept of **FITNess version 1** (this version, https://fitness.agroparistech.fr/) is based on three pillars:

- [ ] **A validated content** (quality, rigor, and openness) covering all essential aspects of food packaging for two levels (novice and advanced);
- [ ] An **open-source distribution format**, which can be read on any terminal and even as a PowerPoint replacement product for teaching classrooms. All interactive and non-interactive WEB documents are supported and can be run with or without a server.
- [ ] A **search engine** adapted to blended-learning education.

The organization in two levels <kbd>common</kbd> | <kbd>specialized</kbd> is arbitrary and do not represent necessarily an indication on the level of difficulty. They notify whether recent scientific results are used or not. <kbd>Common</kbd> contents do not require any specific technical or scientific background. <kbd>Specialized</kbd> content are specific and therefore more <kbd>advanced</kbd>. The different sections and units are less connected together. They can be read in arbitrary order based on your interests and needs. Our intent was not to be <u>exhaustive</u>, but to propose sufficient materials to resolve real problems associated to food packaging: design, compliance, risk and impact assessment... Though the content was prepared by experts in the field, the content cannot be considered authoritative and cannot replace the scientific literature or reference text books.

> The content is provided "AS IS". We are diligent to improve the quality of the content and of the experience.  

<img src="images/responsibleFITNess.png" alt="overview" style="zoom: 20%;" />

## How it works

### Principles

Most of the content has been prepared using PowerPoint and converted into HTML5, CSS and JavaScript codes. One practical consequences is that the content can be hosted on a Web Server (accessible from everywhere without authentication and installation), read on any smart phone/tablet/PC and combined with all existing Web Technologies (interactive content, indexing, cloning). Currently, ~3,000 slides are searchable, printable, and accessible as a single document for both the learner/student and the teacher. This static content is combined with case-studies and many supplementary materials. A dual interface enables the teacher/professor to use also a browser for class teaching. 

 <img src="images/image1.png" alt="PPT" style="zoom:67%;" />

> The vectorial content is preserved to offer the same quality (or even superior) within a browser. The text is extracted and combined to several metadata to improve the experience by the end-user.

The following features have been explicitly considered:

- One **single tool** for teacher (presenter view) and learner (web)

- **No installation** required (pure Web, responsive *HTML5*)

- Each slide, page, document has its **own URL**

- The platform works **online** and **offline** (2 GB) and without registration

- **Open-source** code, content with permissive licenses

- Slides and text can be **edited** in *Markdown*

- **Blended learning**: mixed content, interactive content

- *Google*-like Search Engine

- All documents can be **printed** (as *Wikipedia*)

- Online supports are **indexed** by *Google*

- Everything is **cloneable**

  

### Why Markdown?

Markdown is becoming rapidly a standard on the web. It enables rich-text by using a lightweight markup syntax. Plan-text and Markdown editors can be used to update or to edit the content (to add links, videos, JavaScript code...).

<img src="images/image2.png" alt="PPT" style="zoom:67%;" />

### Metadata

Metadata are essential to offer an experience of blended learning: you start where, when and how you wish. Their nature is diverse. Firstly, they provide an automatic and human description of each material. They contain also structural and administrative information, such as the type of license, the name, the revision history and the list of authors of the original document.

<img src="images/image3.png" alt="metadata" style="zoom:67%;" />

Metadata are organized in a very large database (JSON format), which can be read by a browser and added to the content of a web page. This information is used to offer new capabilities: such as extracting all documents related together or containing a specific keyword. The depicted example (below) is showing how the equation of Piringer can be retrieved and visualized from the multiple content of FITNess.

<img src="images/image4.png" alt="metadata" style="zoom:67%;" />

Ninety percent of metadata are extracted automatically from documents (PPTx, PDF...).  Specific contents such as abstracts, topics, recommended readings require the contribution of the teacher/professor. A specific interface is proposed to revise the default values of metadata. A robot merge the different versions to smooth conflicts and reach a consistent database.

<img src="images/image5.png" alt="metadata" style="zoom:67%;" />

## How to use it

### Browsing

The main content of FITNess is proposed as a single index corresponding to a suggestion of a full curriculum. Alternatively, a lecture can be found by entering keywords and/or following suggested topics. The content of FITNess is vast and interdisciplinary. The contributors think that the structured and specific approaches of learning are both valuable. As a rule of thumb, starts by the table of content when you need to learn progressively and type in the search area as soon as you are looking for something more specific. Clicking on search by keywords activates a full search on all slides.

<img src="images/image6.png" alt="metadata" style="zoom:67%;" />

### Learning

Most of the lectures are provided as a slideshow very similar to PowerPoint. The main difference is that the progression (backward and forward) can be done horizontally (as in PowerPoint: main slides) and vertically. Vertical slides are slides generated automatically to offer a table of content and connections with previous and next lectures. Press <kbd>?</kbd> to list all available options. For example, <kbd>O</kbd> is used to activate the overview (slide sorter in PowerPoint).

<img src="images/image7.png" alt="metadata" style="zoom:67%;" />

### Teaching and learning

Each presentation includes a presenter mode (<kbd>P</kbd>) enabling a display on dual screens or screen+beamer. The presenter mode is showing the notes, the elapsed time, the next slide... The layout can be changed. Pressing <kbd>Ctrl</kbd>+<kbd>P</kbd> prints the entire document or a specific slide.

<img src="images/image8.png" alt="metadata" style="zoom:67%;" />

## Pending

Tracking revised and new contents is still a complex task (not fully automated). The entire website is generated statically in a couple of minutes on a big computer (Linux). Partial or incomplete metadata slow down the production of revised contents. These issues should be fixed within a Project FITNess 2.

## Contributors

### Academic contributors

Nine institutions originating from five countries contributed to create contents for FITNess.

- [ ] CROATIA (UZAB-PBF)
- [ ] FRANCE (ACTIA, LNE, AGROPARISTECH/INRAE, AGROSUPDIJON)
- [ ] GERMANY (TUM)
- [ ] PORTUGAL (UCP)
- [ ] SPAIN (CSIC)

### Technical contributors

- [ ] Olivier VITRAC
- [ ] Steward OUADI
- [ ] Dipesh CHAUDHARI



`$ Revision date: 2020-12-03 | FITNess 2020 $ ` |  Please report to <a href="mailto:olivier.vitrac@groparistech.fr">Olivier Vitrac</a>