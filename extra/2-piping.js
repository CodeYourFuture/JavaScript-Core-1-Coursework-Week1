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

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function format(number) {
  return `£${number}`;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.

let badCode = format(multiply(add(startingValue, 10), 2)); // This is bad code example because there are too many functions nested in each other and it's hard to understand what's happening.

/* BETTER PRACTICE */

let added = add(startingValue, 10); // Adds starting value to 10, using add function and referring it to a variable.
let multiplied = multiply(added, 2); // This line uses the result of above function which is assigned to a variable and then multiplies it to 2 by using multiply function and refer this whole process to a variable.
let formatted = format(multiplied); // This line formats the code into a string with £ sign with it.
let goodCode = formatted; // Writing code in above steps is easy to write and understand, that's why it's called good code.

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `npm run extraTo run the tests for just this one file, type `npm run extra-tests -- --testPathPattern 2-piping` into your terminal
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
