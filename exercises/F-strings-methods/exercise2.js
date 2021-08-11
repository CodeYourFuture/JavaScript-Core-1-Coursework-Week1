const myName = " Daniel  ";
// first I wanted to know the length of the given name with space inside quotation mark
const nameLength = myName.length;
console.log(nameLength); //9

// I wanna use the .trim function to get rid of the unwanted space
const correctedName = myName.trim();
const correctedNameLength = correctedName.length;

console.log(correctedNameLength); //7

//Now I type the message

const message =
  "My name is" +
  myName +
  "and my name is " +
  correctedNameLength +
  " characters long.";

console.log(message);
