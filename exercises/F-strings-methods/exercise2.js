let name  = "Abdulqadir";
let addTrim = name.trim();
let newNameLength = addTrim.length;

console.log(`my name is ${addTrim} and my name is ${newNameLength} characters long`);

let myName = "  Douglas Trainee  ";
let myNameLength = myName.length;

let myNameTrim = myName.trim();
let myNewNameLength = myNameTrim.length;

// 19 characters for myName
console.log(`My name is ${myName} and my name is ${myNameLength} characters long`);

// The whitespaces are removed: 15 characters for myName
console.log(`My name is ${myNameTrim} and my name is ${myNewNameLength} characters long`);