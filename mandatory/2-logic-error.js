// The syntax for these functions is valid but there are some errors, find them and fix them

// I start with a let variable word that equals the string - space - Kate. To remove the space I use a function trimWord 
// with the argument word and return the word with the .trim method. It prints Kate

let word = "  Kate"

function trimWord(word) {
  return word.trim();
}

It prints: Kate

// I start with a let variable word equals the string What is up - space. To remove the space I use the function trimWord
// with the argument word and return the word with the trim method. It prints What is up

let word = "What is up  "
function trimWord(word) {
  return word.trim();
}

It prints: What is up

// I start with a let variable word that equals the string return - space. To remove the space I use the function trimWord
// with the argument word and return the word with the trim method t. It prints return

let word = "return  "
function trimWord(word) {
  return word.trim();
}

It prints: return

// I start with a let variable word that equals to the string - space We are free. To remove the space I use the function trimWord
// with the argument word and return the word with the trim method. It prinys We are free

let word = " We are free"
function trimWord(word) {
  return word.trim();
}

It prints: We are free

// I start with a let variable word that equals the string - space space A happy life. To remove the space I use the function trimWord
// with the argument word and return the word with the trim method. It prints A happy life

let word = "   A happy life"
function trimWord(word) {
  return word.trim();
}

It prints: A happy life

// I start with a let variable wordthat equals the string space A cool world space space. To remove the space I use the function trimWord
// with the argument word and the word with the trim method. It prints A cool world
let word = " A cool world   "
function trimWord(word) {
  return word.trim();
}

It prints: A cool world


// I start with the function getStringLength with the argument word. Inside the brackets i return word with the .length method.


function getStringLength(word) {
  return word.length;
}

// I start with the variable word that equals Jo. I use the function getStringLength with the argument word and inside the brackets
// I return the word with the .length method. It prints 2.

let word = "Jo";
function getStringLength(word) {
  return word.length;
}

It prints: 2


// I start with the variable word that equals Bulldog. I use the function getStringLength with the argument word and inside the brackets
// I return the word with .length method. It prints 7.

let word = "Bulldog";
function getStringLength(word) {
  return word.length;
}

It prints: 7


// I start with variable word that equals Late night. I use the function getStringLength with the argument word and inside the brackets
// I return the word with .length method. It prints 9.

let word = "Late night";
function getStringLenghth(word) {
  return word.length;
}

It prints: 9

// I start with the variable word that equals I had a few shots. I use the function getStringLength with the argument and inside the brackets
// I return the word with .length method. It prints 14.

let word = "I had a few shoots";
function getStringLength(word) {
  return word.lenght;
}

It prints: 14

// I start with the word that equals 14. I use the function getStringLength with the argument and inside the brackets 
// I return the word with .length method. It prints 2.

let word = "14";
function getStringLength(word) {
  return word.length;
}

It prints: 2

// I start with the function multiply and the arguments a, b, c. Inside he brackets I use a const variable answer that equals
// a * b * c and return the answer.

function multiply(a, b, c) {
  const answer = a * b * c;
  return answer;
}

// I start with the global let variables a that equals 2, b that equals 3, c that equals 4. I use the function multiply with the
// arguments a, b, c and inside the brackets I use the const variable answer that equals a * b * c and return answer. 
// It prints 24.

let a = 2;
let b = 3;
let c = 4;
function multiply(a, b, c) {
  const answer = a * b * c;
  return answer;
}
It prints: 24

// I start with the global let variables a that equals 1, b that equals 3, c that equals 2. I use the function multiply with the
// arguments a, b, c and inside the brackets I use the const variable answer the equals a * b * c and return answer.
// It prints 6.

let a = 1;
let b = 3;
let c = 2;
function multiply(a, b, c) {
  const answer = a * b * c;
  return answer;
}
It prints: 6


// I start with let variables a that equals 100, b that equals 1, c that equals 2. I use the function multiply with the
// arguments a, b, c and inside the brackets I use the const variable answer that equals a * b * c and return answer.
// It prints 200

let a = 100;
let b = 1;
let c = 2;
function multiply(a, b, c) {
  const answer = a * b * c;
  return answer;
}
It prints: 200

// I start with let variables a that equals 4, b that equals 2, c that equals 5. I use the function multiply with the
// arguments a, b, c and inside the brackets I use the const variable answer that equals a * b * c and return answer.
// It prints 40

let a = 4;
let b = 2;
let c = 5;
function multiply(a, b, c) {
  const answer = a * b * c;
  return answer;
}
It prints: 40

// I start with let variable a that equals 3, b that equals 10, c that equals 2. I use the function multiply with the
// arguments a, b, c and inside the brackets I use the const variable answer that equals a * b * c and return answer.
// It prints 60

let a = 3;
let b = 10;
let c = 2;
function multiply(a, b, c) {
  const answer = a * b * c;
  return answer;
}
It prints: 60

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
