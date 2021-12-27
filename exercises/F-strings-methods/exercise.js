// Start by creating a variable `message`
var greetingStart = "My name is ";
var greetingMiddle = " and my name is ";
var greetingEnd = " characters long";

var myName = "Simon";
var nameLength = myName.length;

// =====String Concatenation=====
// console.log(greetingStart + myName + greetingMiddle + nameLength + greetingEnd);

//=====String Interpolation=====
console.log(
  `My name is ${myName} and my name is ${nameLength} characters long`
);
