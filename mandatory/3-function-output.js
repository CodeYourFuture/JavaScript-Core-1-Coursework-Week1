// Add comments to explain what this function does. You're meant to use Google!
//The Math.random() function is used to return a floating-point pseudo-random number between range [0,1) , 0 (inclusive) 
//and 1 (exclusive). This random number can then be scaled according to the desired range.

////returns a random number between 0 (inclusive) and 1 (exclusive) and multiplies with 10
function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
//JavaScript strings have a built-in concat() method. The concat() function takes one or more parameters, and returns the modified string.
// Strings in JavaScript are immutable, so concat() doesn't modify the string in place.

//combines typed array with the new array.
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord.concat(" " + secondWord +" " + thirdWord);
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
