// Add comments to explain what this function does. You're meant to use Google!
// Math.random() method will return a number between 0(inclusive) and 1(exclusive) - a floating-point. Every time when we call the function, it will return different values depending what number will generate the Math.random method. The result of the function will be equal to the number generated by Math.random() method multiplied by 10 (numbers between 0 and 9.9)
function getRandomNumber() {
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
//The concat() method is used to merge word1 and word2. This will not going to change the existing strings (word1 and word2) but instead it will return a new string that contains copies of both combined ("word1word2")
function combine2Words(word1, word2) {
  return word1.concat(word2);
}


// Write the body of this function to concatenate three words together.
// Look at the test case below to understand what this function is expected to return.

//The task wasn't very specific regarding what method I should use in order to pass the tests so I've been trying 2 methods and both of them passed the test (interpolation and .concat() method). 
function concatenate(firstWord, secondWord, thirdWord) {
  //1.concatenation using interpolation
  // return `${firstWord} ${secondWord} ${thirdWord}`; 

  //2.concatenation using .concat() Method
  return firstWord.concat(" ", secondWord, " ", thirdWord);

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
