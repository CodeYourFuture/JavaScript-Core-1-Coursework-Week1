// Start by creating a variable `message`
var name = "Daniel";
var nameLength = name.length;
var messagePart;
if (name.length === 1) {
  var messagePart = "character";
} else {
  var messagePart = "characters";
}
var message =
  "My name is " +
  name +
  " and my name is " +
  nameLength +
  " " +
  messagePart +
  " long.";
console.log(message);
