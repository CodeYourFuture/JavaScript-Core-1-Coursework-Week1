// Add comments to explain what this function does. You're meant to use Google!
/*  
This functions purpose is to return a value, because
the method Math.random() gathers a number between 0 and less than 1.
The function is asking Math.Random to multiply by 10.
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getNumber() {
  return Math.random() * 10;
}


/*
In this function is adding two strings together.
The reason the 'concat' method is being used is 
because its purpose is to solely add strings together.

reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
*/

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) {
  return w1.concat(w2);
}

/*
The purpose of this function is to concatenate three strings together 
in the return section of the function
is concatenating 5 strings together.
reference:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
*/
function concatenate(firstWord, secondWord, thirdWord) {
  return (firstWord.concat ( " ",secondWord, " ",thirdWord));
}

 // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
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
