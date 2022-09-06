// There are syntax errors in this code - can you fix it to pass the tests?

// function addNumbers(a b c) {
//   return a + b + c;
// }

// function introduceMe(name, age)
//   return "Hello, my name is " + name "and I am " age + "years old";

// function getTotal(a, b) {
//   total = a ++ b;

//   return "The total is total";
// }


function addNumbers(a,b,c) {
  return a + b + c;
}
// commas between parameters are missing

// const addNumbers = (a,b,c) => a + b + c;

console.log(addNumbers(3, 4, 6))
// 13

function introduceMe(name, age) {
  // return "Hello, my name is " + name + " and I am " + age + " years old";
  return `Hello, my name is ${name} and I am ${age} years old`;
}
// string concatenation is missing + either side and some spacing, also missing { } on function body

// const introduceMe = (name, age) => `Hello, my name is ${name} and I am ${age} years old`;

console.log(introduceMe("Sonjide", 27))
// "Hello, my name is Sonjide and I am 27 years old"

function getTotal(a, b) {
  // const total = a + b;
  // return "The total is " + total;
  return `The total is ${a + b}`;
}
// no let/const used to initialise total, double ++ used, and return string doesnt include variable name

// const getTotal = (a,b) => `This total is ${a+b}`;

console.log(getTotal(23, 5))
// "The total is 28"


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

test("introduceMe function returns the correct string", () => {
  expect(introduceMe("Sonjide", 27)).toEqual(
    "Hello, my name is Sonjide and I am 27 years old"
  );
});

test("getTotal returns a string describing the total", () => {
  expect(getTotal(23, 5)).toEqual("The total is 28");
});