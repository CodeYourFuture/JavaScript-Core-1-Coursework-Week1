/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

// function add() {

// }

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

// const add = (numberOne, numberTwo) => numberOne + numberTwo;

// function multiply() {

// }

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

// const multiply = (numberOne, numberTwo) => numberOne * numberTwo;

// function format() {

// }

function format(number) {
  return `£${number}`
}

// const format = (number) => `£${number}`

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
let badCode = format(multiply(add(startingValue, 10), 2));
// this is calling 3 functions 2 of which are nested, its bad practice because its unreadable(?) and not easy to maintain(?)

console.log(badCode);
// £24

/* BETTER PRACTICE */

const pipe = (functionOne, functionTwo, functionThree) => (functionOneParameterOne, functionOneParameterTwo, functionTwoParameterTwo) => functionThree(functionTwo(functionOne(functionOneParameterOne, functionOneParameterTwo), functionTwoParameterTwo));
let goodCode = pipe(add, multiply, format)(startingValue, 10, 2);
// i don't neccessarily agree that pipe/piping is good code...

console.log(goodCode);
// £24

// I researched pipe/piping/compose/composing ...but all the examples use only a single parameter per function... unsure how to handle second parameters.


/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 2-piping` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
*/

test("add function - case 1 works", () => {
  expect(add(1, 3)).toEqual(4);
});

test("add function - case 2 works", () => {
  expect(add(2.4, 5)).toEqual(7.4);
});

test("multiply function works", () => {
  expect(multiply(2, 3)).toEqual(6);
});

test("format function works for whole number", () => {
  expect(format(16)).toEqual("£16");
});

test("format function works for decimal number", () => {
  expect(format(10.1)).toEqual("£10.1");
});

test("badCode variable correctly assigned", () => {
  expect(badCode).toEqual("£24");
});

test("goodCode variable correctly assigned", () => {
  expect(goodCode).toEqual("£24");
});
