// Add comments to explain what this function does. You're meant to use Google!
// My answer: The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
// My answer: In JavaScript, concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string. Because the concat() method is a method of the String object, it must be invoked through a particular instance of the String class.

function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ", secondWord.concat(" ", thirdWord));
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}

console.log(concatenate("code", "your", "future"));
console.log(concatenate("I ", "like ", "pizza"));

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
