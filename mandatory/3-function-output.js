// Add comments to explain what this function does. You're meant to use Google!

// This function return a number which is the return a natural number of the given number multiplied by 10;
function getNumber(num) {
  return Math.random(num) * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

// This function return a string which it is a concatenation of two given strings.
function s(w1, w2) {

  // The concat() method is used to join two or more strings. It does not change the existing strings, but returns a new string containing the text of the joined strings.

  return w1.concat(w2);
}


// This function return a string which it is a concatenation of three given strings.
function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  //return firstWord + " " + secondWord + " " + thirdWord;

  return s(s(s(firstWord," "), s(secondWord, " ")), thirdWord);
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
