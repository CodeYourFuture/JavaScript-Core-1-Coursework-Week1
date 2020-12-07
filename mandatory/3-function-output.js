// Add comments to explain what this function does. You're meant to use Google!
// This is random generator. So basically it is giving as pseudo-random numbers
// this Math.random() is giving numbers from 0 - 0.9999999999. 
// By multiply it to 10, we are going to get numbers from 0 to 9,9999999999999
function getNumber() {
  return Math.random() * 10;
}
console.log(getNumber())
// Add comments to explain what this function does. You're meant to use Google!
// concatenate addition of string, but I would rather call it sticking strings to each other 
function s(w1, w2) {
  return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
 return (firstWord + " " + secondWord + " " + thirdWord)
}

const { DH_NOT_SUITABLE_GENERATOR } = require('constants');
/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node 3-function-output` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate('code', 'your', 'future'),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate('I', 'like', 'pizza'),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate('I', 'am', 13),
  "I am 13"
);
