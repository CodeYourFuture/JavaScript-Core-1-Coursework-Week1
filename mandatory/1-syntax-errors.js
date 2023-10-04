// There are syntax errors in this code - can you fix it to pass the tests?

// Below are functions with addNumbers ()and it holds 3 parameters a, b, c. Then I return the function by multiplying 
// the parameters. It prints the total of a + b + c.

function addNumbers(a, b, c) {
  return a + b + c;
}

Prints the total of a + b +c

function addNumbers(a, b, c) {
  return a + b + c;
}

Prints the total of a + b +c

function addNumbers(a, b, c,) {
  return a + b + c;
}

Prints the total of a + b + c

function addNumbers(a, b, c) {
  return a + b + c;
}

Prints the total of a + b + c

function addNumbers(a, b, c) {
  return a + b + c;
}

Prints the total of a + b +c

function addNumbers(a, b, c) {
  return a + b + c;
}

Prints the total of a + b + c

// Below I have the function intoduceMe with the parameters name and age. Inside the brackets I return the string and in the 
// string whatever name that has been put in will appear. 

function introduceMe(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old`;
}

// In the let variable name and the let variable age what we put in appears will be in the string. Then I use the function 
// introduceMe and inside the brackets I return the string and it insert name and age in the string.

let name = "Jan";
let age = 30;
function introduceMe(name, age) {
  return 'Hello, my name is ${name} and I am ${age} years old';
}

It prints: Hello, my name is Jan and I am 30 years old.

let name = "Lola";
let age = 78;
function introduceMe(name, age) {
  return 'Hello, my name is ${name} and I am ${age} years old';
}

It prints: 'Hello, my name is Lola and I am 78 years old'

let name = "Ben Dover";
let age = 34;
function introduceMe(name, age) {
  return 'Hello my name is ${name} and I am ${age} years old';
}

It prints: 'Hello, my name is Ben Dover and I am 34 years old'

let name = "Siri";
let age = 46;
function introduceMe(name, age) {
  return 'Hello my name is ${name} and I am ${age} years old';
}

It prints: 'Hello, my name is Siri and I am 46 years old'

const name = "Sam";
let age = 22;
function introduceMe(name, age) {
  return 'Hello my name is ${name} and I am ${age} years old';
}

It prints: 'Hello, my name is Sam and I am 22 years old'

// I start with two global let variables a and b. a = 2 and b = 1. I have a function called getTotal and the two parameters
// a, b. Inside the backets I have a local const variable total that sums the a + b. I then return the function with the string
// and insert the total of a + b. It will print the total is 3.

let a = 2;
let b = 1;
function getTotal(a, b) {
  const total = a + b;

  return `The total is ${total}`;
}
It prints: 'The total is 3'


//// I start with two global let variables a and b. a = 4 and b = 1. I have a function called getTotal and the two parameters
// a, b. Inside the backets I have a local const variable total that sums the a + b. I then return the function with the string
// and insert the total of a + b. It will print the total is 5.

let a = 4;
let b = 1;
function getTotal(a, b) {
  const total = a + b; 

  return `The total is ${total}`;
}

It prints: 'The total is 5'


// I start with two global let variables a and b. a = 2 and b = 3. I have a function called getTotal and the two parameters
// a, b. Inside the backets I have a local const variable total that sums the a + b. I then return the function with the string
// and insert the total of a + b. It will print the total is 5.


let a = 2;
let b = 3;
function getTotal(a, b) {
  const total = a + b;

  return `The total is ${total}`;
}

It prints: 'The total is 5'
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
