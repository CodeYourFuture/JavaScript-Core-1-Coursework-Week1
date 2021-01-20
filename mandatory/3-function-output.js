// Add comments to explain what this function does. You're meant to use Google!

// This 'getNumber' function will return a random number between 0 (inclusive) and 10 (exclusive), which cannot be chosen or reset by the user.
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

// This 's' function with the .concat() method is used to merge two or more arrays, by returning a new array and not changing the existing arrays.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  let myFirstWord = firstWord + ' ';
  let mySecondWord = secondWord + ' ';
  let myThirdWord = thirdWord;
  return myFirstWord.concat(mySecondWord, myThirdWord);
}

console.log(concatenate('code', 'your', 'future'));
console.log(concatenate('I', 'like', 'pizza'));
console.log(concatenate('I', 'am', 13));

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-function-output` into your terminal
==================================
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate("code", "your", "future"),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate("I", "like", "pizza"),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate("I", "am", 13),
  "I am 13"
);
