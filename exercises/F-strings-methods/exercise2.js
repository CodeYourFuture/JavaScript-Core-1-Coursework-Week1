// This program performs the same basic function as exercise.js
// however using the string method .trim() to remove the white space
// at both sides of the string " Daniel ".

const myName = " Daniel  ".trim();
const nameLength = myName.length;
let message =
  "My name is " + myName + " and my name is " + nameLength + " characters long";

console.log(message);
