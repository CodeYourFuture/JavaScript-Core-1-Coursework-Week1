// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
    let d= a + b + c;
    return a + b + c;
}
console.log(d);

function introduceMe(name, age)

let text= "Hello, my name is " + Lawrence + "and I am" + age + "31";

console.log(text);

function getTotal(a,c,b) {
    total = a + c + b;

    return "The total is total"
}
console.log(introduceMe,);

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
