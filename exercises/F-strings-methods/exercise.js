// Program that outputs a concatenated string stored in variable `message` containing constant `myName`
// and constant `nameLength` after calculating `myNames` character length using string method .length.
// I used constants here as `myName` will never change and consequently its length wont either, however
// the variable `message` concatenation may be updated so I declared it using let

const myName = "Andrew";
const nameLength = myName.length;
let message =
  "My name is " + myName + " and my name is " + nameLength + " characters long";

console.log(message);
