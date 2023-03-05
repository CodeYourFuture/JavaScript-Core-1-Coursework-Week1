// Rahma _ Berhan 


//declare 2D array to contain all messages each type in separated row 

const arrayOfMessages = [
    ["It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it."] ,
  
    ["As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes."] ,

    ["Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again."] ,

    ["Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."] ];

// declare random1 and random2 variables- and their values will be generated rondomly 
// will use these two numbers to choose message from the array

let random1;
let random2;

// this function will print message first, then will generate two numbers , then return message
function shakeBall() {
  console.log("The ball has shaken!");

  random1 = Math.floor(Math.random() * arrayOfMessages.length);
  random2 = Math.floor(Math.random() * arrayOfMessages.length);

  return arrayOfMessages[random1][random2];
  
}


/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/

// this function will check the array one by one to search for the message stored in answer
// when the message is found ,it will save the row number in variable rowNum 
// then it will move to switch to store the message type in type variable and then return it 

function checkAnswer(answer) {
  let type = "";
  let rowNum = 0;
  
 //search for answer 
  for (let i = 0 ; i <= 3 ; i++)
  {
    for (let j= 0 ;j<=4 ; j++)
      {
        if (answer == arrayOfMessages[i][j])
          {
            rowNum = i;
          }
      }
  }

//return message type depending on the rowNum 
  switch (rowNum)
  {
    case 0:
      type = "very positive";
      break;

    case 1:
      type = "positive";
      break;

    case 2:
      type = "negative";
      break;

    case 3:
      type = "very negative";
      break;
  }
  return type;

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
