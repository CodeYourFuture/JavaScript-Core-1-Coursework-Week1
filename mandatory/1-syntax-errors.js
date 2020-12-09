

//Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

//## Expected result





// There are syntax errors in this code - can you fix it to pass the tests?
// addNumber adds a,b,c  missing comma's
function addNumbers(a , b  , c) {
    return a + b + c;
}
// introduce adds a string with age and name missing +   , missing curly brackets, added spaces
function introduceMe(name, age){
return "Hello, my name is " + name  + " and I am " + age + " years old";
}

// getTotal adds a,b
//removed a + (was a ++ b)
function getTotal(a, b) {
   return  "The total is " + (a+b);


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
