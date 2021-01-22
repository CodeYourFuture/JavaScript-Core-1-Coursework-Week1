/**

  Let's peer into the future using a Magic 8 Ball!
  https://en.wikipedia.org/wiki/Magic_8-Ball 

  There are a few steps to being able view the future though:
  * Ask a question
  * Shake the ball
  * Get an answer
  * Decide if it's positive or negative

  The question can be anything, but the answers are fixed,
  and have different levels of positivity or negativity.

  Below are the possible answers:

  ## Very positive
    It is certain.
    It is decidedly so.
    Without a doubt.
    Yes - definitely.
    You may rely on it.

  ## positive
    As I see it, yes.
    Most likely.
    Outlook good.
    Yes.
    Signs point to yes.

  ## Negative
    Reply hazy, try again.
    Ask again later.
    Better not tell you now.
    Cannot predict now.
    Concentrate and ask again.

  ## Very negative
    Don't count on it.
    My reply is no.
    My sources say no.
    Outlook not so good.
    Very doubtful.
*/

const answersAndCategories = {
  "It is certain.": "very positive",
  "It is decidedly so.": "very positive",
  "Without a doubt.": "very positive",
  "Yes - definitely.": "very positive",
  "You may rely on it.": "very positive",
  "As I see it, yes.": "positive",
  "Most likely.": "positive",
  "Outlook good.": "positive",
  "Yes.": "positive",
  "You may rely on it.": "positive",
  "Reply hazy, try again.": "negative",
  "Ask again later.": "negative",
  "Better not tell you now.": "negative",
  "Cannot predict now.": "negative",
  "Concentrate and ask again.": "negative",
  "Don't count on it.": "very negative",
  "My reply is no.": "very negative",
  "My sources say no.": "very negative",
  "Outlook not so good.": "very negative",
  "Very doubtful.": "very negative",
};

// This should log "The ball has shaken!"
// and return the answer.

function shakeBall() {
  // gets an array of answers (keys from "answersAndCategories" object)
  const answersArray = Object.keys(answersAndCategories);

  //gets random number
  const randomIndex = Math.floor(Math.random() * answersArray.length);

  //gets random answer (string(key from answersAndCategories)) from "answersArray"
  const randomAnswer = answersArray[randomIndex];

  console.log("The ball has shaken!");
  return randomAnswer;
}

/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/
function checkAnswer(answer) {
  let category = answersAndCategories[answer];
  return category;
}

/* 
==================================
======= TESTS - DO NOT MODIFY =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-magic-8-ball.js` into your terminal
==================================
*/

const log = console.log;
let logged;
console.log = function () {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer`, typeof answer === "string");

  test(
    `checkAnswer("It is decidedly so.") returns "very positive`,
    checkAnswer("It is decidedly so.") === "very positive"
  );

  test(
    `checkAnswer("My reply is no.") returns "very negative`,
    checkAnswer("My reply is no.") === "very negative"
  );

  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
  const answers = new Set();
  for (let i = 0; i < 10; ++i) {
    answers.add(shakeBall());
  }
  test(`shakeBall returns different answers`, answers.size > 1);
  test(
    `checkAnswer returns different answers`,
    new Set(Array.from(answers.values()).map(checkAnswer)).size > 1
  );
}

testAll();
