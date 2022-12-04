// The syntax for this function is valid but it has an error, find it and fix it.

//in this exercise we use the mothod .trim() which help to eliminate leading and trailing spaces. 
 
function trimWord(phrase) {
  let string = phrase.trim(); 
  return string;
}

// the function .length will show the number of the string that we give by the parameter a
// we created a local variable where we store the result of the parameter 

function getStringLength(a) {
  let total = a.length;
  return total;
}


//we declared a variable total to store the  math operation then we sent the result in the return;

function multiply(a, b, c) {
  let total = a * b * c;
  return total;
}

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
