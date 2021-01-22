// Add comments to explain what this function does. You're meant to use Google!
// This function will return any number and times it by 10, even decimal numbers, to get a whole number you need to make use of the Math.floor() function and it will round any number down to a whole number. 
function getNumber() {
  return Math.random() * 10;
}



// Add comments to explain what this function does. You're meant to use Google!
// This function is used to join two or more values together within an array and return it back as a string and return it back as a single value.
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.

  let Message = `${firstWord} ${secondWord} ${thirdWord}`;
  return Message;
}

console.log(concatenate("Code", "Your", "Future"));
console.log(concatenate("I", "Like", "Pizza"));
console.log(concatenate("I", "am", 13));

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
