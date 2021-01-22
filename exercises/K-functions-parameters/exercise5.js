// Create a greeting message by name and age
function createLongGreeting(name, age) {
  var message = `Hello, my name is ${name} and I'm ${age} years old`;
  return message;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
