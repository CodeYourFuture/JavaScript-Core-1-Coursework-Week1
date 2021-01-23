// Math.random() can be used to return random integers/numbers
function getNumber(nim) {
  return Math.random(nim) * 10;
}
console.log(getNumber(23))

// .concat() is used to join two or more strings
function s(w1, w2) {
  return w1.concat(w1, w2);
}
console.log (s(34 + ' likes'))

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord+secondWord+thirdWord;
}
console.log(concatenate('I' + ' like' + ' you'));

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
