let fName = "  Ibrahim     ";
let message = `My name is ${fName.trim()} and my name is ${
  fName.trim().length
} characters long`;
console.log(message);

let rName = "          Ibrahim     ";
let fUserName = rName.trim();
let fUserNameLength = fUserName.length;
message = `My name is ${fUserName} and my name is ${fUserNameLength} characters long`;
console.log(message);
