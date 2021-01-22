// Start by creating a variable `message`

// ## Exercise 1

//     * Log a message that includes the length of your name

// ## Expected result

//     ```
// My name is Daniel and my name is 6 characters long



// var myName = "Deniz"
// var nameLenght = myName.length 
// var message = `My name is Deniz and my name is ${nameLenght} characters long`
// console.log(message);
const myName = " Daniel  ";
const nameLenght = myName.length;
const noSpaceName = myName.trim();
var message = `My name is ${noSpaceName} and my name is ${nameLenght} characters long`;
console.log(message);
