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
function shakeBall() {
  //Write your code in here
  const results = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
  let randomResults = Math.floor(Math.random() * results.length);
  console.log('The ball has shaken!');
  //console.log(results[randomResults]);
  return results[randomResults];
}
//console.log(shakeBall());
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
  const veryPositive = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.'];
  const positive = ['As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.'];
  const negative = ['Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.'];
  const veryNegative = ['Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

  if (veryPositive.includes(answer)) {
    //console.log('very positive');
    return 'very positive';
  } else if (positive.includes(answer)) {
    //console.log('positive');
    return 'positive';
  } else if (negative.includes(answer)) {
    //console.log('negative');
    return 'negative';
  } else if (veryNegative.includes(answer)) {
    //console.log('very negative');
    return 'very negative';
  }
}
//console.log(checkAnswer(shakeBall()))
// if ((answer === 'It is certain.') || (answer === 'It is decidedly so.') || (answer === 'Without a doubt.') || (answer === 'Yes - definitely.') || (answer === 'You may rely on it.') || (answer === 'As I see it, yes.')) {
//   return 'very positive';
// } else if ((answer === 'Most likely.') || (answer === 'Outlook good.') || (answer === 'Yes.') || (answer === 'Signs point to yes.') || (answer === 'Reply hazy, try again.')) {
//   return 'positive';
// } else if ((answer === 'Reply hazy, try again.') || (answer === 'Ask again later.') || (answer === 'Better not tell you now.') || (answer === 'Cannot predict now.') || (answer === 'Concentrate and ask again.')) {
//   return 'negative';
// } else if ((answer === 'Don\'t count on it.') || (answer === 'My reply is no.') || (answer === 'My sources say no.') || (answer === 'Outlook not so good.') || (answer === 'Very doubtful.')) {
//   return 'very negative';
// }
// switch (answer) {
//   case 'It is certain.':
//   case 'It is decidedly so.':
//   case 'Without a doubt.':
//   case 'Yes - definitely.':
//   case 'You may rely on it.':
//     answer = 'very positive';
//     break;
//   case 'As I see it, yes.':
//   case 'Most likely.':
//   case 'Outlook good.':
//   case 'Yes.':
//   case 'Signs point to yes.':
//     answer = 'positive';
//     break;
//   case 'Reply hazy, try again.':
//   case 'Ask again later.':
//   case 'Better not tell you now.':
//   case 'Cannot predict now.':
//   case 'Concentrate and ask again.':
//     answer = 'negative';
//     break;
//   case 'Don\'t count on it.':
//   case 'My reply is no.':
//   case 'My sources say no.':
//   case 'Outlook not so good.':
//   case 'Very doubtful.':
//     answer = 'very negative';
//     break;
// }
//return answer

//console.log(checkAnswer('My reply is no.'));
//console.log(checkAnswer('positive'));
//console.log(checkAnswer('negative'));
//console.log(checkAnswer('My reply is no.'));

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

  // expect(checkAnswer(answer)).toBeOneOf([
  //   "very positive",
  //   "positive",
  //   "negative",
  //   "very negative",
  // ]);
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

  let seenPositivities = new Set(Array.from(seenAnswers.values()).map(checkAnswer));
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
