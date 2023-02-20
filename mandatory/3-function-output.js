// Add comments to explain what this function does. You're meant to use Google!

function getRandomNumber() {
  return Math.random() * 10;
}
/* Generates a random number. As the values generated are between 0 and 1 we need to multiply by 10 to get a whole number between 1 and 10. */


// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}
/* The concat() method concatenates (joins) two or more strings. It returns a new array, containing the joined strings. */


let firstWord = "I";
let secondWord = "am";
let thirdWord = 13;
function concatenate(firstWord, secondWord, thirdWord) {
return firstWord.concat(" ", secondWord, " ", thirdWord);
}
console.log(concatenate);



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
