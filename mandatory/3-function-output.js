// Add comments to explain what this function does. You're meant to use Google!
// this function can bring random number and the range is between 0 to less than 1.
function getRandomNumber() {
  return Math.random() * 10;
}
console.log(getRandomNumber());


// Add comments to explain what this function does. You're meant to use Google!
// this function can combine to parameters.Like using sum or +
function combine2Words(word1, word2) {
  return word1.concat(" ",word2);
}
console.log(combine2Words("I like", "pizza"))

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord.concat(" ", secondWord, " ", thirdWord);
}

console.log(concatenate("I","am", 13));

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
