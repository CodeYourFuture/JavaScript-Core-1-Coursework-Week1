// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
  // the commas were missing
  return a + b + c;
}

function introduceMe(name, age) {//the curly brackets were missing
  return "Hello, my name is " + name + " and I am " + age + " years old"; //the plus operators were missing
}
function getTotal(a, b) {
  let total = a + b; // missing the let declaration + an additional plus

  return "The total is " + total; // the total variable was included in the string
}

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
