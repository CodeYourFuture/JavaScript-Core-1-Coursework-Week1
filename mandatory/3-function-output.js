// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}
// getRandomNumber is a despription of what I want to happen. The Math.random() method - The Math object in JavaScript is a built-in object that has properties and methods for performing mathematical calculations. 
// A common use of the Math object is to create a random number using the random() method.
function getRandomNumber(this time 10) {
  return Math.random(10) * 10;
}

It prints: 100

function getRandomNumber(6) {
  return Math.random(6) * 10;
}

It prints: 60

function getRandomNumber(2) {
  return Math.random(2) * 10;
}

It prints: 20

function getRandomNumber(9) {
  return Math.random(9) * 10;
}

It prints: 90

function getRandomNumber(121) {
  return Math.random(121) * 10;
}

It prints: 1210

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

// I created a descriptive word to my function. The CONCAT function combines the text from multiple ranges and/or strings, but it doesn't provide delimiter or IgnoreEmpty arguments. 

function concatenate(firstWord, secondWord, thirdWord) {
 return firstWord.concat(" ", secondWord, " ", thirdWord);
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
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
