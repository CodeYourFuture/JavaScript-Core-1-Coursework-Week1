// Returns a random number between 0 (inclusive) and 10 (exclusive)
function getRandomNumber() {
  return Math.random() * 10;
}

// Combines two input words into a single word by concatenating them
function combine2Words(word1,word2) {
  
  return word1.concat(word2);
}

// Concatenates three input words into a single string
function concatenate(firstWord, secondWord, thirdWord) {
  // The function concatenates the firstWord, secondWord, and thirdWord using the + operator, which concatenates strings.
  return firstWord +''+ secondWord +''+ thirdWord;
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
