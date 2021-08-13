const name = " Daniel  ";
var noSpaceName = name.trim();
var nameLength = noSpaceName.length;
var messagePart;
if (noSpaceName.length === 1) {
  var messagePart = "character";
} else {
  var messagePart = "characters";
}
var message =
  "My name is " +
  noSpaceName +
  " and my name is " +
  nameLength +
  " " +
  messagePart +
  " long.";
console.log(message);
