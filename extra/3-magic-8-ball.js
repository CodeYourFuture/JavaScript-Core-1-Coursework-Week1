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
var userQuestion = '';
console.log("The ball has shaken!");
/*var randomNumber = Math.floor(Math.random()*20);

function eightBall() {
  //Write your code in here
  switch(randomNumber){
    case 0:
    console.log('It is certain.');
    break;
    case 1:
    console.log('It is decidedly so.');
    break; 
    case 2:
    console.log('Without a doubt.');
    break; 
    case 3:
    console.log('Yes -  definitely.');
    break; 
    case 4:
    console.log('You may rely on it.');
    break; 
    case 5:
    console.log('As I see it, yes.');
    break; 
    case 6:
    console.log('Most likely.');
    break;
    case 7:
    console.log('Outlook good.');
    break; 
    case 8:
    console.log('Yes.');
    break; 
    case 9:
    console.log('Signs point to yes.');
    break; 
    case 10:
    console.log('Reply hazy, try again.');
    break; 
    case 11:
    console.log('Ask again later.');
    break;
    case 12:
    console.log('Better not tell you now.');
    break;
    case 13:
    console.log('Cannot predict now.');
    break;  
    case 14:
    console.log('Concentrate and ask again.');
    break;  
    case 15:
    console.log('Don\'t count on it.');
    break;  
    case 16:
    console.log('My reply is no.');
    break;  
    case 17:
    console.log('My sources say no.');
    break;  
    case 18:
    console.log('Outlook not so good.');
    break; 
    case 19:
    console.log('Very doubtful.');
    break; 
  }
};
*/

let eightBallMessage = ["Very positive", "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", 
  "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", 
  "Don\'t count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

function shakeBall(eightBall) {
  if ((eightBall = "It is certain.") || (eightBall = "It is decidedly so.") || (eightBall = "Without a doubt.") || (eightBall = "Yes - definitely." )|| (eightBall = "You may rely on it.")) {
    console.log("very positive");
  } else if ((eightBall = "As I see it, yes.") || (eightBall = "Most likely.") || (eightBall = "Outlook good.") || (eightBall = "Yes.") || (eightBall = "Signs point to yes.")) {
    console.log("positive"); 
  } else if ((eightBall = "Reply hazy, try again.") || (eightBall = "Ask again later.") || (eightBall = "Better not tell you now.") || (eightBall = "Cannot predict now.") || (eightBall = "Concentrate and ask again.")) {
    console.log("negative");
  } else if ((eightBall = "Don't count on it.") || (eightBall = "My reply is no.") || (eightBall = "My sources say no.") || (eightBall = "Outlook not so good") || (eightBall = "Very doubtful.")) {
    console.log("very negative");
  }
};
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
}

/* 
==================================
======= TESTS - DO NOT MODIFY =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `npm run extraTo run the tests for just this one file, type `npm run extra-tests -- --testPathPattern 3-magic-8-ball` into your terminal
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
