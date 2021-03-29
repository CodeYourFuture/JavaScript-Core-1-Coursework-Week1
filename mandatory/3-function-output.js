// Add comments to explain what this function does. You're meant to use Google!
// This function returns a random number >= 0 and < 10
function getNumber() {
  return Math.random() * 10; // returns the number entered multiplied by a random integer from 0 to 9
}

// Add comments to explain what this function does. You're meant to use Google!
// This function returns the two input parameters concatenated (i.e. the second one following the first)
function combine2Words(w1, w2) {
  return word1.concat(w2); // concatenates w1 and w2 without white space
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
   return `${firstWord} ${secondWord} ${thirdWord}`;
}

console.log(concatenate("Code","Your","Future"));

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
