// This program performs the same basic function as exercise.js
// however using the string method .trim() to remove the white space
// at both sides of the string " Daniel ".

// Declare and initialise variables and constants
const MY_NAME = " Daniel  ".trim();
const NAME_LENGTH = MY_NAME.length;
let message = "";

// Update Message & output message
message =
  "My name is " +
  MY_NAME +
  " and my name is " +
  NAME_LENGTH +
  " characters long";

console.log(message);
