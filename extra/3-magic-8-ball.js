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

  ## Positive
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

// This should log "The ball has shaken!"
// and return the answer.

// Object "possibleAnswers" declared for the 4 categories to set up key:value pairs
let possibleAnswers = {
  veryPositive: ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it."],
  positive: ["As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."],
  negative: ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."],
  veryNegative: ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
}

// Random number function
function getRandomNumber(min, max) {
  // Produces a random decimal number between 0-1 then multiplies it by the range then adds the min value. Rounds to nearest number.
  return Math.round(Math.random() * (max - min) + min);
}

// Variable used in shakeBall() function and checkAnswer function to select an answer from the array of the chosen category (passes in a random number between 0 and 4)
let answerSelection = getRandomNumber(0 , 4);

function shakeBall() {
  console.log("The ball has shaken!");
  let randomNumber = getRandomNumber(1, 4);
  let answer = "";

  if (randomNumber == 1) {
    // if the random number selected is 1, then variable "answer" is assigned the value of a random selection (0-4) from the "veryPositive" values array in the possibleAnswers object
    answer = possibleAnswers.veryPositive[answerSelection];
    return(answer);
  }
  else if (randomNumber == 2) {
    // if the random number selected is 2, then variable "answer" is assigned the value of a random selection (0-4) from the "positive" values array in the possibleAnswers object
    answer = possibleAnswers.positive[answerSelection];
    return(answer);
  }
  else if (randomNumber == 3) {
    // if the random number selected is 3, then variable "answer" is assigned the value of a random selection (0-4) from the "negative" values array in the possibleAnswers object
    answer = possibleAnswers.negative[answerSelection];
    return(answer);
  }
  else if (randomNumber == 4) {
    // if the random number selected is 4, then variable "answer" is assigned the value of a random selection (0-4) from the "veryNegative" values array in the possibleAnswers object
    answer = possibleAnswers.veryNegative[answerSelection];
    return(answer);
  }
}

console.log(shakeBall()); 

/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/

function checkAnswer(answer, answerSelection) {
  //Write your code in here
   // if the "veryPositive" values in the possibleAnswers object include the string assigned to "answer" at the index specified by "answerSelection", then return "very positive"
  if (possibleAnswers.veryPositive.includes(answer, [answerSelection])) {
    return "very positive";
  }
  // if the "positive" values in the possibleAnswers object include the string assigned to "answer" at the index specified by "answerSelection", then return "positive"
  else if (possibleAnswers.positive.includes(answer, [answerSelection])) {
    return "positive";
  }
  // if the "negative" values in the possibleAnswers object include the string assigned to "answer" at the index specified by "answerSelection", then return "negative"
  else if (possibleAnswers.negative.includes(answer, [answerSelection])) {
    return "negative";
  }
  // if the "veryNegative" values in the possibleAnswers object include the string assigned to "answer" at the index specified by "answerSelection", then return "very negative"
  else if (possibleAnswers.veryNegative.includes(answer, [answerSelection])) {
    return "very negative";
  }
}

checkAnswer();
console.log();
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
