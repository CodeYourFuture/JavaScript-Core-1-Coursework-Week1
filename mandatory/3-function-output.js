// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  // This function generates a random number
  return Math.random() * 10; // Returns a number between 0 and 1 (not including 1) You then multiply it by 10 to get a number.
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  // This function concatenates 2 strings together.
  return word1.concat(word2); // This returns a value of the 2 arguments concatenated.
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ", secondWord, " ", thirdWord);
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
