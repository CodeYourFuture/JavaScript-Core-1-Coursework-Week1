const name = " Baz  ";
const nameLength = name.length;
const messagePartOne = "My name is ";
const messagePartTwo = " and my name is ";
const messagePartThree = " characters long";
const message = messagePartOne + name.trim() + messagePartTwo + name.length + messagePartThree;
console.log(message);
