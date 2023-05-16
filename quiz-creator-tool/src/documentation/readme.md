# File to explain how to use the configuration file.

==Terms used in this document:==
**learner**: a learner is someone who is answering the quiz. For example, a learner can be a student.

**Block:** a block is considered as a slide

The Json file to create quizzes (the configuration file) is composed of blocks.

## BLOCKS:

There are different types of blocks. Below you will find the attributes that can be used in those BLOCKS.

### Block of type: global.

Use this block to define some global attributes.

- **id: "global" mandatory:** to define a block as the global one, just set the "id" attribute to "global"
- **shuffleAnswers (optional):** possible values: true or false. False by default if the attribute is not set.
- **currentScore (optional by default, mandatory if you want to compute scores):** variable that will define the learner current score. That score will be computed each time a block contains "minimumPassedScore" and "maximumScoreIfCorrectAnswer". Example: [0,0,0]
- **scoreIntermediate (optional by default, mandatory if the "currentScore" variable is defined):** variable to define the intermediate level of a learner. Example [4,4,4]. In this example, if learner score is [1,3,7], he is considered "beginner" for the first two columns, but "intermediate" for the last column.
- **scoreAdvanced: (optional by default, mandatory if the "currentScore" variable is defined):** variable to define the intermediate level of a learner. Example [8,8,8]. In this example, if learner score is [1,4,8], he is considered "beginner" for the first column, "intermediate" for the second column and advanced for the last column.

To know:  if the learner is considered as "beginner", "intermediate" or "advanced", the learner current score is compared to scoreBeginner, scoreIntermediate and scoreAdvanced values. If the learner's score is below scoreIntermediate, he is considered as "beginner". If the learner's score is between the value of scoreIntermediate and scoreAdvanced, he is considered as "intermediate". If the learner's score is above the value of scoreAdvanced, he is considered as "advanced". By default, the learner has the "beginner" level. When comparing the learner score, the test that is made is "equal or greater than". That is to say, to be considered as "intermediate", the learner score should be "equal or greater than" the value of the scoreIntermediate attribute. To be considered as "advanced", the learner score should be "equal or greater than" the value of the scoreAdvanced attribute.

### Blocks of types: One correct answer and multiple correct answers.

Use these blocks to create quizzes or questions the learner can answer.
You can create quizzes where there is only one correct answer or where there are multiple correct answers.

For one correct answer blocks, the test or quiz is considered as passed if the learner has checked the correct answer.
Otherwise, it is considered as not passed.

For multiple correct answers blocks, the test or quiz is considered as passed if the learner has at least checked 50% of correct answers.
Otherwise, it is considered as not passed. If the learner has checked all the answers, it is also considered as not passed.

Blocks of these types contains:

- **question.text (mandatory):** quiz question text
- **question.img (optional):** image for the question
- **question.imgLink (optional):** a link for the image, so when the learner clicks on the image, he is redirected to the link . By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
- **answers.letter.text (mandatory):** answer from which the learner can choose from
- **answers.letter.img (optional):** an image from which the learner can choose from. By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
- **answers.letter.imgLink (optional):** a link for the answer.
- **correctAnswer (mandatory):** this variable can be a list: if there are multiple correct answers add those answers into the list, each answer is separated by a comma.
  This variable can also be a unique answer, for blocks of type one correct answer.
- **minimumPassedScore (mandatory):** minimum score that the learner must have in order to be considered to have answered the question correctly, that it is "passed".

- **pointsIfCorrectAnswer (mandatory):** points added to the score if the learner has given the right answer to the question
- **pointsIfWrongAnswer (mandatory):** points are subtracted from the score if the learner gave the wrong answer to the question

### Block of type: image only.

Use this block if you want to show an image and only an image for that block.

Here are the attributes that can be used for this block:

- **img (mandatory):** image that will be shown
- **imgLink (optional):** link to open when the learner clicks on the image

### Block of type: menu, without clickable link.

Use this block when you want to display a menu without a clickable link for each choice. The text is displayed and the learner can select a choice on clicking on it and then click on the "Next" button to jump to the slide the learner selected.

- **question.text (mandatory):** quiz question text
- **question.img (optional):** image for the question
- **question.imgLink (optional):** a link for the image, so when the learner clicks on the image, he is redirected to the link . By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
- **answers.letter.text (mandatory):** answer from which the learner can choose from
- **answers.letter.img (optional):** image for the question
- **answers.letter.imgLink (optional):** a link for the image, so when the learner clicks on the image, he is redirected to the link . By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
- **next.type: "choice" (mandatory):** the next.type value has to be "choice"

### Block of type: menu, with clickable link.

Use this block when you want to display a menu with a clickable link for each choice. The text is displayed and when the learner clicks on the text, another tab is open with the value of the link provided.

- **question.text (mandatory):** quiz question text
- **question.img (optional):** image for the question
- **question.imgLink (optional):** a link for the image, so when the learner clicks on the image, he is redirected to the link . By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
- **answers.letter.text (mandatory):** answer from which the learner can choose from
- **answers.letter.link (mandatory):** the link that will be open into another tab, when the learner clicks on answers.letter.text
- **next.type: "choice" (mandatory):** the next.type value has to be "choice"
- **next.letter.slide-id (optional) :** the id of the slide the learner will jump to if he has selected that specific choice

### Common variables to all blocks:

- **id (optional by default. mandatory if next slide is specified explicitly):** an id for the block, so it is possible to reach a specific block from another one
- **nextButtonText (optional):** variable to define the text that will be displayed inside the "next" button. If this variable is not set, by default, the text will be "Next"
- **previousButtonText (optional):** variable to define the text that will be displayed inside the "previous" button. If this variable is not set, by default, the text will be "Previous"

## PATHS:

By default, if nothing is specified explicitly, the next block will be the next shown slide.

The next shown slide behavior can be changed to target specific slides using these attributes:

- **next.specific (optional):** change the next shown slide behavior by targeting a specific block id
- **next.type: "score", next.passed and next.notPassed (optional):** change the next shown slide behavior based on the score of the learner to the current question. If the answer to the current question is correct, it means that the test has been passed, so the learner will be redirected to the block described in "next.passed". Otherwise, the learner will be redirected to the block described in "next.notPassed".
- **next.type:** "choice" (optional by default, mandatory for slides of "menu" type)

## TIPS AND SUGGESTIONS:

To get the url of a picture on the Internet: right click on the picture and then click "Copy image location", then paste the url in the configuration file.
If you start specifying the next block explicitly for one block, do so for every blocks, it will be easier for the reading and will help you achieve your goal.
If you start using the "id"property, do so for every blocks, it will facilitate the reading.
