var greeting = "My name is ";
var myName = "Senami";
var nameLength = " name.length";
var message = " and my name is ";
var length = " characters long.";

myName = myName.trim();

console.log(greeting + myName + message + myName.length + length);
console.log(`${greeting}${myName}${message}${myName.length}${length}`)
