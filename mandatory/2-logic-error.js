// The syntax for these functions is valid but there are some errors, find them and fix them
/*
let word ="   CodeYourFuture ";
function trimWord(word) {
  return word.trim();
}
*/

let word = " CodeYourFuture teaches coding     ";
let result= word.replace (' ');
function trimWord(word) {
  return word.trim();
}

/*
function getStringLength() {
  let text = "Turtles";
  return text.length;
}
*/

function getStringLength() {
  let phrase = "A wild sentence appeared!";
  return phrase.length;
}


/*
let a = 2;
let b = 3;
let c = 4;
function multiply(a, b, c) {
  return  a * b * c;
}
console.log(multiply);
*/

let x = 2;
let y = 3;
let z = 6;
function multiply(x, y, z) {
  return  x * y * z;
}
console.log(multiply);

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 2-logic-error` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("trimWord trims leading and trailing whitespace", () => {
  expect(trimWord("   CodeYourFuture ")).toEqual("CodeYourFuture");
});

test("trimWord doesn't remove whitespace in the middle of the string", () => {
  expect(trimWord(" CodeYourFuture teaches coding     ")).toEqual("CodeYourFuture teaches coding");
});

test("getStringLength returns the length of a word", () => {
  expect(getStringLength("Turtles")).toEqual(7);
});

test("getStringLength returns the length of a sentence", () => {
  expect(getStringLength("A wild sentence appeared!")).toEqual(25);
});

test("multiply multiplies numbers", () => {
  expect(multiply(2, 3, 6)).toEqual(36);
});

test("multiply multiplies different numbers", () => {
  expect(multiply(2, 3, 4)).toEqual(24);
});
