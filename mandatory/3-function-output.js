// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  // returns a floating point number > 0 and < 1 we multiply by 10 to get a interger.
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  // merges two or more Arrays and returns a new Array so this would merge "word1" and "word2" to form a new Array.
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.

  return firstWord + " " + secondWord + " " + " " + thirdWord;
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
