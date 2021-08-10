/* This function uses the Math.random() method which returns a floating point number between 0 and 1
this number is then multiplied by 10, the result of this calculation is then returned by the function */
function getRandomNumber() {
  return Math.random() * 10;
}

/* This function has two parameters, word1 and word2 that each take a string as an argument, the function then uses the concat string method on the first string to concatenate it to the second string, the result of this is then returned */
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ", secondWord.concat(" ", thirdWord));
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
