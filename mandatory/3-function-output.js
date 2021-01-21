// returns random number from 0 to 1 and multiplies it by 10;
function getNumber() {
  return Math.random() * 10;
}
getNumber();

// concatenates 2 arrays and returns a new array
function s(w1, w2) {
  console.log(w1.concat(w2));
}

s(["hello", "world"], ["this", "is", "me"]);

function concatenate(firstWord, secondWord, thirdWord) {
  const myArr = [firstWord, secondWord, thirdWord].join(" ");
  console.log(myArr);
  return myArr;
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
