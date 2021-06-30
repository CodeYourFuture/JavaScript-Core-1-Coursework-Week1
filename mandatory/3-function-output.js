// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  // This gets a random number between 0 and 1(excluded) and multiplies it by 10
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  //this function joins two words that have been entered as parameters
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  //we could either return them with spaces between them like this ;
  //return firstWord + " " + secondWord + " " + thirdWord;
  //OR we could use the concat method to join the three strings(Here we add the spaces manually as we the parameters)
  return firstWord.concat(secondWord).concat(thirdWord);

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
