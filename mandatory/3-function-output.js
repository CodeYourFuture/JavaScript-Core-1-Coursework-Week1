 // Add comments to explain what this function does. You're meant to use Google!
 function getNumber() {
   //It generate random number between  0 to 9 in decimal order. math.random generates number lower than 1 then it will multiply by 10
   // example of out put will be something like this 5.172328389151401 or 6.876018727361755
   return  Math.random() * 10; 
 }

 // Add comments to explain what this function does. You're meant to use Google!
 function s(w1, w2) {
   // The concat() method is used to join two or more arrays.
   // in this case we have w2 as a parameter what ever w1 is contact will add w2 to w1. 
   return w1.concat(w2);
   
 }


function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
let body = firstWord + " " + secondWord  + " " + thirdWord;
return body;
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
