// The syntax for this function is valid but it has an error, find it and fix it.

function trimWord(a) {
  return a;
}
const z = trimWord('   CodeYourFuture ')
console.log(z.trim())

const x = trimWord('  CodeYourFuture teaches coding    ')
console.log(x.trim())

function getStringLength(word) {
  return word;
}
const b = getStringLength('Turtles');
console.log(b.length);

const e = getStringLength('A wild sentence appeared!');
console.log(e.length);


function multiply(a, b, c) {
   return a * b * c; 
  }   
 
const c = multiply(2, 3, 6);
console.log(c)

const d = multiply(2, 3, 4);
console.log(d)



// // /* 
// // ===================================================
// // ======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

// // There are some Tests in this file that will help you work out if your code is working.

// // To run the tests for just this one file, type `npm test -- --testPathPattern 2-logic-error` into your terminal
// // (Reminder: You must have run `npm install` one time before this will work!)
// // ===================================================
// // */

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
