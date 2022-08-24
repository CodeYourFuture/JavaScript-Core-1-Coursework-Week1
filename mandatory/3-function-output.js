// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() { 
  return Math.random() * 10; // This function multiply tow number and the first number change it to whole number to get the result whole number.
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);  // This function work to marge to word together.
}

function concatenate(firstWord, secondWord, thirdWord) {
  firstWord = "I";
  secondWord = "like";
  thirdWord = "pizza";
  return  firstWord + " " + secondWord + " " + thirdWord;
    

  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}
console.log(concatenate());

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
