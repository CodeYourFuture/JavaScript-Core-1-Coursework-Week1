// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10; //random() method generate a number between (0 - 1) then it multiply by 10 to get a number between (1 - 10)
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2); //concat() method is used to join two or more strings, but returns a new string
}

function concatenate(firstWord, secondWord, thirdWord) {
  var result = firstWord.concat(` ${secondWord}`).concat(` ${thirdWord}`);
  return result;
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

// test("concatenate example #1", () => {
//   expect(concatenate("code", "your", "future")).toEqual("code your future");
// });

// test("concatenate example #2", () => {
//   expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
// });

// test("concatenate doesn't only accept strings", () => {
//   expect(concatenate("I", "am", 13)).toEqual("I am 13");
// });

console.log(concatenate("code", "your", "future"));
console.log(concatenate("I", "like", "pizza"));
console.log(concatenate("I", "am", 13));