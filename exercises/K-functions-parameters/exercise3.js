// Write your function here
//Write a function that takes a name (a string) and returns a greeting

var daniel ="Daniel";
var susan ="Susan";
var end = "!";
function createGreeting (name) {

return "Hello, my name is " + name + end;
}


var greeting = createGreeting(daniel);// added val Daniel
var greeting = createGreeting(susan); // replaces Daniel with susan

console.log(greeting);
