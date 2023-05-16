/*
 * File: readme.txt
 * Contract: EU contract 2017-1-FR01-KA202-037441
 * Project: FitNESS ERASMUS+
 * File Created: Tuesday, 20th April 2021
 * Author: Steward OUADI
 * -----
 * Last Modified: Wednesday, 23rd June 2021
 * Modified By: Steward OUADI
 */

Terms used in this document: 
learner: a learner is someone who is answering the quiz. For example, a learner can be a student. 


The Json file to create quizzes (the config file) is composed of blocks.

BLOCKS: 

There are different types of blocks. 

Blocks of types: One correct answer and multiple correct answers.

Use these blocks to create quizzes or questions the learner can answer. 
You can create quizzes where there is only one correct answer or where there are multiple correct answers.

For one correct answer blocks, the test or quiz is considered as passed if the learner has checked the correct answer.
Otherwise, it is considered as not passed.

For multiple correct answers blocks, the test or quiz is considered as passed if the learner has at least checked 50% of correct answers.
Otherwise, it is considered as not passed. If the learner has checked all the answers, it is also considered as not passed.

Blocks of these types contains: 
    - question.text (mandatory): quiz question text 
    - question.img (optional): image for the question
    - question.imgLink (optional): a link for the image, so when the learner clicks on the image, he is redirected to the link . 
                                    By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
    - answers.letter.text (mandatory): answer from which the learner can choose from
    - answers.letter.img (optional): an image from which the learner can choose from. By default, if there is no link, when the learner clicks on an image, it will be open in another tab in original size.
    - answers.letter.imgLink (optional): a link for the answer.
    - correctAnswer (mandatory): this variable can be a list: if there are multiple correct answers add those answers into the list, each answer is separated by a comma. 
                                 This variable can also be a unique answer, for blocks of type one correct answer.
    - minimumPassedScore (mandatory):
    - pointsIfCorrectAnswer (mandatory):




Blocks of type: image only. 
Use this block if you want to show an image and only an image for that block.
    - img (mandatory): image that will be shown 
    - imgLink (optional): link to open when the learner clicks on the image




Common variables to all blocks: 
    - id (optional by default. mandatory if next slide specified explicitly): an id for the block, so it is possible to reach a specific block from another one
    - nextButtonText (optional): variable to define the text that will be displayed inside the "next" button. If this variable is not set, by default, the text will be "Next"
    - previousButtonText (optional): variable to define the text that will be displayed inside the "previous" button. If this variable is not set, by default, the text will be "Previous"
    - quizScoreButtonText (optional): variable to define the text that will be displayed inside the "get quiz score" button. If this variable is not set, by default, the text will be "Get quiz score"





PATHS:
By default, if nothing is specified explicitly, the next block will be the next shown slide.

The next shown slide behavior can be changed to target specific slides using these variables 
    - next.specific (optional): change the next shown slide behavior by targeting a specific block id

    - next.passed and next.notPassed (optional): change the next shown slide behavior based on the score of the learner to the current question. 
                                    If the answer to the current question is correct, it means that the test has been passed, 
                                    so the learner will be redirected to the block described in "next.passed". Otherwise, the learner
                                    will be redirected to the block described in "next.notPassed"


TIPS AND SUGGESTIONS: 
To get the url of a picture on the internet: right click on the picture and then click "Copy image location", then paste the url in the config file.
If you start specifying the next block explicitly for one block, do so for every blocks, it will be easier for the reading and will help you achieve your goal.
If you start using the id property, do so for every blocks, it will facilitate the reading.


RESERVED KEYWORDS
The config file has some reserved keywords. Reserved keywords are keywords that have a special meaning in the config file.
---------------


id: "global", // id name mandatory - case sensitive
    shuffleAnswers: false, // optional, by default, its false