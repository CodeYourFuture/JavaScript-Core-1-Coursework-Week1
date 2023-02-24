// Add comments to explain what this function does. You're meant to use Google!
// In JavaScript, random() is a built-in method that is used to return a random number in the range 0 to 1 (with 0 being inclusive and 1 exclusive). The distribution of the generated random numbers is approximately uniform. It does not actually return a whole number. Instead, it returns a floating point (decimal) value.
function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  let sentence= firstWord.concat(" ", secondWord, " ", thirdWord);
  return sentence;
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
