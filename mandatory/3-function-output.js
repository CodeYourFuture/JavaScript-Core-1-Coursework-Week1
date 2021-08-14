// Add comments to explain what this function does. You're meant to use Google!
//This function generates a random decimal value between 0 and 1
function getRandomNumber() {
  return Math.random() * 10; //The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
  return word1.concat(word2); //to join two or more text strings into one string
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord.concat(" ", secondWord, " ", thirdWord);
}

/* 

}

// Add comments to explain what this function does. You're meant to use Google!
//This function is used to join two strings
function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
   return firstWord.concat(" ", secondWord, " ", thirdWord);
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
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
