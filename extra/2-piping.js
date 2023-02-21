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

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function format(lonelyNumber) {
  return `£${lonelyNumber}`;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.

// So, I'm not too sure what bad code or good code looks like yet so I wrote this, it seems vague and repetitive:
// let badCode = add(10, startingValue); badCode = multiply(badCode, 2); badCode = format(badCode);

// Below, I wrote some more of what I interpret bad code to look like too. This way seems complicated for me to read functions nested in others (although not sure if that's down to me being a beginner!):
let badCode = format(multiply(add(10, startingValue), 2));


/* BETTER PRACTICE */
// This seems clearer as the variables say what they do on the tin.

let addNumbers = add(10, startingValue);
let multiplyNumbers = multiply(2, addNumbers);
let goodCode = format(multiplyNumbers);

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
