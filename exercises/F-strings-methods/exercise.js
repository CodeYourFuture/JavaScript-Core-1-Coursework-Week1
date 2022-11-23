// Start by creating a variable `message`
var name1 = "Oleks";
var nameLength = name1.length;
var introduce1 = " My name is Oleks and my name is ";
var introduce2 = "characters long.";
var message = introduce1 + nameLength + " " + introduce2;
console.log(message);
// second way
var name1 = "Oleks";
var nameLength = name1.length;
var introduce1 = "      My name is ";
var introduce3 = "and my name is ";
var introduce2 = "characters long.";
var message = introduce1 + name1 + " "+ introduce3 + 
nameLength + " " + introduce2;
console.log(message);
// trim method
var name1 = "Oleks";
var nameLength = name1.length;
var introduce1 = " My name is ";
var introduce3 = "and my name is ";
var introduce2 = "characters long.";
var message =
  introduce1 + name1 + " " + introduce3 + nameLength + " " + introduce2;
console.log(message.trim());