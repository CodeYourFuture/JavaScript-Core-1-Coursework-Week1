// Add comments to explain what this function does. You're meant to use Google!

// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// For example: 0.40020936983011146
// Math.random() always returns a number lower than 1.
function getNumber() {
  return Math.random() * 10;
} // The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)with approximately uniform distribution over that range — which you can then scale to your desired range. so the getnumber function multiplies the psuedo random number between 0 and 10 however not 10.

// Add comments to explain what this function does. You're meant to use Google!
// The concat() method is used to join two or more arrays.
// This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
function s(w1, w2) {
  return w1.concat(w2);
}
//I think this function allows 2 strings to be added together and create or in this case return a new string

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return `${firstWord} ${secondWord} ${thirdWord}`;
}

//Here, I called the last function.
let threeWords = concatenate("I", "don't know", "what to do here!");

// Here, I'm checking my output.
console.log(threeWords);

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
