// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}
//.  Math.random generates a number between 0 and 1, that isn’t a whole number, and also isn’t 1. To get a number, for example between 0 and 10, multiply your answer by 10: Math.random() * 10 To get it to be a whole number


// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}
//.  This function takes two strings as input and combines them into a single string using the concat() method, which joins strings together. The combined string is then returned as the output of the function.
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord + " " + secondWord + " " + thirdWord;
  return `${firstWord} ${secondWord} ${thirdWord}`;
}
console.log(concatenate("code", "your", "future"));

function concatenate(firstWord, secondWord, thirdWord) {
  return `${firstWord} ${secondWord} ${thirdWord}`;
}
console.log(concatenate("I", "like", "pizza"));

function concatenate(firstWord, secondWord, thirdWord) {
  return `${firstWord} ${secondWord} ${thirdWord}`;
}
console.log(concatenate("I", "am", 13));

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
