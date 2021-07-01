// Program that outputs a concatenated string stored in variable `message` containing constant `myName`
// and constant `nameLength` after calculating `myNames` character length using string method .length.
// I used constants here as `myName` will never change and consequently its length wont either, however
// the variable `message` concatenation may be updated so I declared it using let

// Declare and initialise variables and constants
const MY_NAME = "Andrew";
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
