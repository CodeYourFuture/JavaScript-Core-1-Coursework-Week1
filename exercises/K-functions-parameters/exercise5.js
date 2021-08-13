// Declare your function here
//function greeting(greetingStart, name, age) {
function createLongGreeting(name, age) {
  return `Hello, my name is ${name} and I'm ${age} years old`;
}

//var greeting = createGreeting("Georgina");
const greeting = createLongGreeting("Georgina", 43);

console.log(greeting);
