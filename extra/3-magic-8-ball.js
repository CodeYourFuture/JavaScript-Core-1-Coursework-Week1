const matchers = require("jest-extended");
expect.extend(matchers);
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
const veryPositive = {
  0: "It is certain.",
  1: "It is decidedly so.",
  2: "Without a doubt.",
  3: "Yes - definitely.",
  4: "You may rely on it.",
};

const positive = {
  5: "As I see it, yes.",
  6: "Most likely.",
  7: "Outlook good.",
  8: "Yes.",
  9: "Signs point to yes.",
};

const negative = {
  10: "Reply hazy, try again.",
  11: "Ask again later.",
  12: "Better not tell you now.",
  13: "Cannot predict now.",
  14: "Concentrate and ask again.",
};

const veryNegative = {
  15: "Don't count on it.",
  16: "My reply is no.",
  17: "My sources say no.",
  18: "Outlook not so good.",
  19: "Very doubtful.",
};

const answerList = {
  ...veryPositive,
  ...positive,
  ...negative,
  ...veryNegative,
  call() {
    return this[Math.floor(Math.random() * 19)];
  },
};

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  //Write your code in here
  console.log("The ball has shaken!");
  return answerList.call();
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
  //Write your code in here
  if (Object.values(veryPositive).indexOf(answer) > -1) {
    return "very positive";
  } else if (Object.values(positive).indexOf(answer) > -1) {
    return "positive";
  } else if (Object.values(negative).indexOf(answer) > -1) {
    return "negative";
  } else {
    return "very negative";
  }
}

checkAnswer(shakeBall());

/* 
==================================
======= TESTS - DO NOT MODIFY =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-magic-8-ball` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("whole magic 8 ball sequence", () => {
  const consoleLogSpy = jest.spyOn(global.console, "log");
  const answer = shakeBall();

  expect(typeof answer).toEqual("string");

  expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  expect(consoleLogSpy).toHaveBeenLastCalledWith("The ball has shaken!");

  expect(checkAnswer(answer)).toBeOneOf([
    "very positive",
    "positive",
    "negative",
    "very negative",
  ]);
});

test("magic 8 ball returns different values each time", () => {
  const seenAnswers = new Set();
  for (let i = 0; i < 10; ++i) {
    seenAnswers.add(shakeBall());
  }
  if (seenAnswers.size < 2) {
    throw Error(
      "Expected to get different random answers each time shakeBall was called, but always got the same one"
    );
  }

  let seenPositivities = new Set(
    Array.from(seenAnswers.values()).map(checkAnswer)
  );
  if (seenPositivities.size < 2) {
    throw Error(
      "Expected to random answers with different positivities each time shakeBall was called, but always got the same one"
    );
  }
});

test("checkAnswer works for `It is decidedly so.`", () => {
  expect(checkAnswer("It is decidedly so.")).toEqual("very positive");
});

test("checkAnswer works for `My reply is no.`", () => {
  expect(checkAnswer("My reply is no.")).toEqual("very negative");
});
