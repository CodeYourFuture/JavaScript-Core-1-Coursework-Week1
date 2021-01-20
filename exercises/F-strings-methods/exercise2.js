// There are two variables, one to store a name plus the other one to store a message
// The .trim() method was applied to the name to reduce the unnecessary whitespace

const name = " Daniel  ";

const message = ' My name is ' + name.trim() + ' and my name is ' + name.trim().length + ' characters long';

console.log(message);
