// The getRandonNumber function returns an evenly distributed random real number greater than or equal to 0 
//and less than 1. A new random number is returned every time the worksheet is calculated. (Math.random)
function getRandomNumber() {
  return Math.random() * 10;
};


// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
  //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
}


function concatenate(firstWord, secondWord, thirdWord) {
  let combinedWords = firstWord.concat(" ", secondWord, " ", thirdWord);
  return combinedWords;
};


  /* Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.*\
*\

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
