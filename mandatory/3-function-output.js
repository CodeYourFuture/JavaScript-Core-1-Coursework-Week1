// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}

//This fuction gets one random integer number by using Math library. And then multiply this number by 10

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

// This funtion combines the text word1 and word2

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(secondWord.concat(thirdWord));
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}

// These function combines the firstWord, secondWord and thirdWord
// Combining integers are also possible
let x = concatenate("s", "a", "e");
console.log(x);
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
