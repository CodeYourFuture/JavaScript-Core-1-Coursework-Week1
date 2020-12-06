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

let answers = [
  { 
    posisibility: "It is certain.",
    type: "very positive"
  }, 
  { 
    posisibility: "It is decidedly so.",
    type: "very positive"
  }, 
  { 
    posisibility: "Without a doubt.",
    type: "very positive"
  }, 
  { 
    posisibility: "Yes - definitely.",
    type: "very positive"
  }, 
  { 
    posisibility: "You may rely on it.",
    type: "very positive"
  },
  { 
    posisibility: "As I see it, yes.",
    type: "positive"
  },
  { 
    posisibility: "Most likely.",
    type: "positive"
  },
  {
    posisibility: "Outlook good.",
    type: "positive"
  },
  {
    posisibility: "Yes.",
    type: "positive"
  },
  {
    posisibility: "Signs point to yes.",
    type: "positive"
  },
  {
    posisibility: "Reply hazy, try again.",
    type: "negative"
  },
  {
    posisibility: "Ask again later.",
    type: "negative"
  },
  {
    posisibility: "Better not tell you now.",
    type: "negative"
  },
  {
    posisibility: "Cannot predict now.",
    type: "negative"
  },
  {
    posisibility: "Concentrate and ask again.",
    type: "negative"
  },
  {
    posisibility: "Don't count on it.",
    type: "very negative"
  },
  {
    posisibility: "My reply is no.",
    type: "very negative"
  },
  {
    posisibility: "My sources say no.",
    type: "very negative"
  },
  {
    posisibility: "Outlook not so good.",
    type: "very negative"
  },
  { 
    posisibility: "Very doubtful.",
    type: "very negative"
  }
]

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  let randomAnswer = Math.floor(Math.random() * 20);
  console.log("The ball has shaken!")
  return answers[randomAnswer].posisibility;
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
  let result = answers.filter(object => {
  return object.posisibility === answer
  });
  return result[0].type;
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
