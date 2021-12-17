// Add comments to explain what this function does. You're meant to use Google!

// This function has a variable  getRandomNumber, within it is a return command, random number between 0 to .01 multiply by 10

function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
// This function join 2 or more strings and return to new string include all strings.
function combine2Words(word1, word2) {
  return word1.concat(word2);
}


function concatenate(firstWord, secondWord, thirdWord) {
  let combinedString = firstWord+ " "+secondWord+" "+ thirdWord;
  return combinedString
}
console.log(concatenate("I", "am", 37));

// Write the body of this function to concatenate three words together.
// Look at the test case below to understand what this function is expected to return.
/* 

===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests
for just this one file, type `npm test -- --testPathPattern 2-logic-error`
into your terminal
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
