// Add comments to explain what this function does. You're meant to use Google!

// the function generates a random number between 0 and <1,
//the number is never equal to 1. times the nubmeer by 10
//creates a random numbere between 0 and <10.
/*
google say : The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#:~:text=The%20Math.random()%20function,scale%20to%20your%20desired%20range.
 */
function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

/*
the below function joins two words together as is, so if thier is no white space the words will be read as one.

google= The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or ..

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
*/

function combine2Words(word1, word2) {
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord.concat(" ", secondWord, " ", thirdWord);
}

console.log(concatenate("I", "am", 13));
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
