function getNumber() {
  return Math.random() * 10;
} // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive): 


function s(w1, w2) {
  return w1.concat(w2);
} /* The concat() method concatenates (joins) two or more arrays. The concat() method returns a new array, 
containing the joined arrays. The concat() method does not change the existing arrays.*/

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(' ', secondWord, ' ', thirdWord);
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
