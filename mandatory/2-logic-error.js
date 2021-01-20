// The syntax for this function is valid but it has an error, find it and fix it.

// wordtrim had no meaning correct way was to write word.trim()
function trimWord(word) {
  return word.trim();
}

//at end of the length we do not need ();
 function getWordLength(word) {
   return word.length;
 }

 //here we were not returning any result
function multiply(a, b, c) {
   let result = a * b * c;
   return result;
 }

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 2-logic-error` into your terminal
===================================================
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
  "fixed trimWord function",
  trimWord("  CodeYourFuture "),
  "CodeYourFuture"
);
 test(
   "fixed wordLength function",
   getWordLength("A wild sentence appeared!"),
   25
);
 test("fixed multiply function", multiply(2, 3, 6), 36);
