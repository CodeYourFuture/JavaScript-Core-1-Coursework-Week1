// The syntax for this function is valid but it has an error, find it and fix it.

// function trimWord(word) {
//   return wordtrim();
// }

// function getStringLength(word) {
//   return "word".length();
// }

// function multiply(a, b, c) {
//   a * b * c;
//   return;
// }

function trimWord(word) {
  return word.trim();
}
// missing . for method .trim

// const trimWord = (word) => word.trim();

console.log(trimWord("   CodeYourFuture "))
// "CodeYourFuture"
console.log(trimWord(" CodeYourFuture teaches coding     "))
// "CodeYourFuture teaches coding"


function getStringLength(word) {
  return word.length;
}
// string instead of argument, length requires no ()

// const getStringLength = (word) => word.length;

console.log(getStringLength("Turtles"))
// 7
console.log(getStringLength("A wild sentence appeared!"))
// 25


function multiply(a, b, c) {
  return a * b * c;
}
// return incorrectly placed

// const multiply = (a,b,c) => a*b*c;

console.log(multiply(2, 3, 6))
// 36
console.log(multiply(2, 3, 4))
// 24


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
  expect(trimWord(" CodeYourFuture teaches coding     ")).toEqual(
    "CodeYourFuture teaches coding"
  );
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
