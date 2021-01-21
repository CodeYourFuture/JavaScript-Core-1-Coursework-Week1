// There are syntax errors in this code - can you fix it to pass the tests?

// you can not return param on its own if you expecting some results.
function addNumbers(a, b, c) {
    let sum = a + b + c;
    return sum;
}

//there were no curly braces and missing concatenation.
  function introduceMe(Name, age){
       let message = "Hello, my name is " + Name + " and I am " + age + " years old";
       return message;
  }


// ++ has no meaning also you can not just retune string we are expecting result.
 function getTotal(a, b) {
    let total = a + b;
    let result = total;
    let msg = "The total is " + result ;
     return msg;
 }

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 1-syntax-errors.js` into your terminal

===================================================
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

test("fixed addNumbers function - case 1", addNumbers(3, 4, 6), 13);
test("fixed introduceMe function", introduceMe("Sonjide", 27), "Hello, my name is Sonjide and I am 27 years old");
test("fixed getTotal function", getTotal(23, 5), "The total is 28");
