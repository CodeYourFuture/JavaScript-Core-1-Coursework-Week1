var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
// - Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// - Log each greeting to the console.

// ## Expected result

// ```
// HELLO DANIEL
// HELLO IRINA
// HELLO MIMI
// HELLO ROB
// HELLO YOHANNES

function changeNameToUpperCase(name) {
  return name.toUpperCase();
}

function greeting(name) {
  console.log(`HELLO ${changeNameToUpperCase(name)}`);
}
greeting(mentor1);
greeting(mentor2);
greeting(mentor3);
greeting(mentor4);
greeting(mentor5);
