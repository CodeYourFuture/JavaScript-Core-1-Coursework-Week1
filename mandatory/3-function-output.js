// Add comments to explain what this function does. You're meant to use Google!
/* The Math.random() function returns a floating-point. Numbers are selected between 0 inclusive and 1 exclusive.
However, Math.random()*10 select random floating point number between 0 and 10 */

function getNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!

// This function takes the value of w1 and add the value of w2
function s(w1, w2) {
  return w1.concat(w2);
}


function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  
  return firstWord.concat(" ").concat(secondWord).concat(" ").concat(thirdWord);
}
concatenate("code", "your", "future");
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
