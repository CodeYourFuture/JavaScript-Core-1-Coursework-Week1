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

function add(num1,num2) {
  return sum= num1 + num2; 
}
console.log(sum);

function multiply(num1, num2) {
  return product= num1 * num2;
}
console.log(product);

function format(number) {
  return format = "£" + number;
}
console.log(format);

const startingValue = 2;
function random(startingValue){
  return "£" + (startingValue + 10) * 2;
}
// Why can this code be seen as bad practice? Comment your answer.
let badCode = "£" + (startingValue + 10) *2;

/* BETTER PRACTICE */

let sum = startingValue + 10;
let total = sum *2;

let goodCode = "£" + total;

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
