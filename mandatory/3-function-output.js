// // Add comments to explain what this function does. You're meant to use Google!
// function getRandomNumber() {
//   return Math.random() * 10;
// }

// // Add comments to explain what this function does. You're meant to use Google!
// function combine2Words(word1, word2) {
//   return word1.concat(word2);
// }

// function concatenate(firstWord, secondWord, thirdWord) {
//   // Write the body of this function to concatenate three words together.
//   // Look at the test case below to understand what this function is expected to return.
// }

function getRandomNumber() {
  return Math.random() * 10;
}
// Math.random() returns a random float between 0 and just below 1, then multiplying that by 10
// Everytime this function is called it will return a float between 0 and just below 9

function combine2Words(word1, word2) {
  return word1.concat(word2);
}
// concat is a string method (in this case) 
// which adds one string (or whatever is passed as an argument) to the end of the string it was called on
// (in this case) word1 has word2 added to the end of it, and it outputs a new string which is a combination of both

function concatenate(firstWord, secondWord, thirdWord) {
  // return firstWord.concat(" " + secondWord).concat(" " + thirdWord);
  // return firstWord + " " + secondWord + " " + thirdWord;
  return `${firstWord} ${secondWord} ${thirdWord}`;
}
// there are many ways to achieve this, 
// 1 used chained concatenation methods here to demonstrate the point
// 2 use old school + concatenation
// 3 use template literals (cleanest)

// const concatenate = (firstWord, secondWord, thirdWord) => `${firstWord} ${secondWord} ${thirdWord}`;

console.log(concatenate("code", "your", "future"))
// "code your future"
console.log(concatenate("I", "like", "pizza"))
// "I like pizza"
console.log(concatenate("I", "am", 13))
// "I am 13"


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
