// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10; 
}

/* ANSWER: This function gives a random number between 0-10. This is because Math.random() will return a floating point number
between 0-1 which will then be multiplied by 10, which in the end results in a random number between 0-10*/


// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

/* ANSWER: this function returns a single word which is the concatenation of word1 and word2. Word2 will be added
to the end of word1*/

function concatenate(firstWord, secondWord, thirdWord) {

  const concatWords = firstWord.concat(" ", secondWord, " ", thirdWord);
  return concatWords;
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
