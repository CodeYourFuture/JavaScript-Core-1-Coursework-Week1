// Add comments to explain what this function does. You're meant to use Google!

// random() returns a double value with a positive sign, greater than or equal to 0.0 and less than 1.0. and than multiple by 10 meaning that we will get numbers between 0 to 9 (0 and 9 included)
function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
// The concat() method is used to join two or more arrays.

// This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord + " " + secondWord + " " + thirdWord;
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}

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
