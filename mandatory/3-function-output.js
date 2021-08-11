// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10; // Math.random() makes a random number between 0 and 1. But then you multiply that result by 10, which means the number can be between 0 and 10. With a lot more steps in between.
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2); // cancat is a method you can use to concatenate strings (or other types) into a new string. So you can use this method on a variable, that variable is the calling variable which is placed at the start of the string, every argument then will be used when the previous string ends
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ", secondWord, " ", thirdWord);
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
