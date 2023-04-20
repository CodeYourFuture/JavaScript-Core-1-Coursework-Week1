// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
  return a + b + c;
}
console.log(addNumbers(1, 2, 3));

const name = "gary";
let age = "100";
function introduceMe(name, age) {
  return "Hello, my name is " + name + " and I am " + age + " years old";
}
console.log(introduceMe(name, age));

function getTotal(a, b) {
  let total = a + b; // a++  a+1
  {
    return "The total is total";
  }
}
console.log(getTotal(2, 3));

//Uncaught SyntaxError: Unexpected identifier return a + b + c;

//Uncaught SyntaxError: Illegal return statement }

//function introduceMe(name, age){return "Hello, my name is " + name "and I am " + age + "years old"; Uncaught SyntaxError: Unexpected string

//Uncaught SyntaxError: Unexpected token '}'

//Uncaught SyntaxError: Unexpected token 'return'

//function getTotal(a, b) { total = a ++ b;

//Uncaught SyntaxError: Unexpected identifier return "The total is total";

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 1-syntax-errors` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)

===================================================
*/

test("addNumbers adds numbers correctly", () => {
  expect(addNumbers(3, 4, 6)).toEqual(13);
});
//Uncaught ReferenceError: test is not defined

test("introduceMe function returns the correct string", () => {
  expect(introduceMe("Sonjide", 27)).toEqual(
    "Hello, my name is Sonjide and I am 27 years old"
  );
});

test("getTotal returns a string describing the total", () => {
  expect(getTotal(23, 5)).toEqual("The total is 28");
});
