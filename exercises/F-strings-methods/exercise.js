// Start by creating a variable `message`

// exercise 1
var myName = "Jude";
var nameLength = myName.length;
console.log(nameLength); // Logs 4

// exercise 2 a
var myName = `                JUDE RICKETTS                   `;
var nameLowerCase = myName.toLowerCase();
console.log(nameLowerCase.trim()); // "jude ricketts"

// exercise 2 b
let text = "                 Jude Ricketts                  ";
let result = text.replace(/^\s+|\s+$/gm, "");
console.log(result);

// exercise 3
// this needs to use a similar stucture to; console.log(str1.concat(' ', str2));
var myName = "Jude ";
var nameLength = myName.length;
var myChars = " characters long";

console.log(
  "My name is " + myName + "and my name is " + nameLength + myChars + "."
);

// str.trim()
