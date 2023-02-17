//
//  https://codepen.io/codifiedconcepts/pen/vXgvQL
//  https://github.com/mmaynar1/games/blob/master/magic-eight-ball/magic-eight-ball.js
//  https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
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
//  have to include the below two iline for one test below to work
const matchers = require("jest-extended");
expect.extend(matchers);

// main list of moods and sentences
const mood = {
  "very positive": [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
  ],
  positive: [
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
  ],
  negative: [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  ],
  "very negative": [
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ],
};

// sentencs selector for the 8 ball
function mood_selector() {
  var mood_keys = Object.keys(mood); // stores all the mood types
  var ran_mood = Math.floor(Math.random() * mood_keys.length); // generates random math for mood types
  var one_mood = mood_keys[ran_mood]; // stores one random mood
  var one_mood_values = mood[mood_keys[ran_mood]]; // stores the all the values from inside one selected mood
  var random_one_mood_values = Math.floor(
    Math.random() * one_mood_values.length
  ); // generates random math for values of one selected mood
  var selected_ran_value = one_mood_values[random_one_mood_values]; // stores one selected random value
  return selected_ran_value;
}
// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  //Write your code in hereconst
  console.log("The ball has shaken!");

  return mood_selector();
}

/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/
// mood checker for the check answer function
const state_of_mood = (mood_object, sentence) => {
  let key = Object.keys(mood_object).find((k) =>
    mood[k].find((mood_value) => mood_value === sentence) ? true : false
  );
  return key;
};
function checkAnswer(answer) {
  //Write your code in here

  return state_of_mood(mood, answer);
}

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
