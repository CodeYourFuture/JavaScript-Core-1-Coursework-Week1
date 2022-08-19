// Start by creating a variable `message`
var name = "Jade";
var start = "My name is ";
var middle = " and my name is ";
var nameLength = name.length;
var end = " characters long.";

console.log( start + name + middle + nameLength + end);

var nameLowerCase = name.toLowerCase();

console.log(nameLowerCase);

var trimMethod = start.trim() + name.trim() + middle.trim() + nameLength + end.trim();
console.log(trimMethod);