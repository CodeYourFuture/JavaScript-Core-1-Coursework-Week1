// Start by creating a variable `message`

let myName = "Israel";
let nameLength = myName.length;
//log
console.log(nameLength);

//Using string methods
let myNameInLowerCase = myName.toLowerCase();
//log
console.log(myNameInLowerCase);

let exerciseOne =
  "My name is " + myName + " and my name is " + nameLength + " characters long";
//log
console.log(exerciseOne);

const name = " Daniel  ";

//log
let exerciseTwo = "My name is " + name + " and my name is " + nameLength + " characters long";
console.log(exerciseTwo);
//With trim
exerciseTwo = "My name is " + name.trim() + " and my name is " + nameLength + " characters long";
console.log(exerciseTwo);

