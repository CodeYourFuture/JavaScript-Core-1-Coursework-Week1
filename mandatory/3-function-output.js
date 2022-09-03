// Add comments to explain what this function does. You're meant to use Google!
//When you want to round numbers in javascript to its nearest integer, you need to use the Math.round () function. Here’s the syntax of the function: Math.round (value) Parameters: the number to be rounded to its nearest integer. Returns: Result after rounding the number passed as a parameter to the function passed as parameter.
function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
//Twice join of two strings in JavaScript Javascript Web Development Front End Technology Object Oriented Programming We are required to write a JavaScript function that takes in two strings; creates and returns a new string with first 2 words of first string, next two words of second string, then first, then second and so on.
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  return firstWord.concat( " ",secondWord," " ,thirdWord);
}
  // Look at the test case below to understand what this function is expected to return.
  
const firstWord ="I";
const secondWord ="like";
const thirdWord ="pizza";
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
