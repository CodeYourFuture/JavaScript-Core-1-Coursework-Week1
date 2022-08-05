//The getRandomNumber function will return a random integer from 0 to 9.

function getRandomNumber() {
  return Math.random() * 10;
}

// The combine2Words function will combine the two words and create a new string.
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

// The function will return the following "firstWord, secondWord, thirdWord" 
function concatenate(firstWord, secondWord, thirdWord) {
}


/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
