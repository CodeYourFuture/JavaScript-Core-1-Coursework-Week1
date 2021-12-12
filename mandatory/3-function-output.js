// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}
// Function getRandomNumber between 0 and 1 and multiplies it by 10. //

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}
//This function is used to connect strings together into one new string. //

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(thirdWord);
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
