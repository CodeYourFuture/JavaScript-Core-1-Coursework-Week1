// Write your function here
function createGreeting(fName) {
  return `Hello, my name is ${fName}`;
}
var greeting = createGreeting("Ibrahim");
console.log(greeting);
//------------------------------------------
// ! premetive solution
let firstName = "Ibrahim";
function createGreeting2() {
  return `Hello, my name is ` + firstName;
}
var greeting2 = createGreeting2();
console.log(greeting2);
