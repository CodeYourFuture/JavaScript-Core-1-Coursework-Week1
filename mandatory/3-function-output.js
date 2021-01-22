// Add comments to explain what this function does. You're meant to use Google!
/*The Math.random() function returns a floating-point, pseudo-random number 
in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform
 distribution over that range — which you can then scale to your desired range. 
*/
function getNumber() {
  return Math.random() * 10;
} 


// Add comments to explain what this function does. You're meant to use Google!

//The concat() method concatenates the string arguments to the calling string and returns a new string.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord + ' ' + secondWord + ' ' + thirdWord
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
