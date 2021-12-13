// Start by creating a variable `message` //
let message = "Hello, my name is ";
console.log(message);

// - Write a program that logs a message with a greeting and your name //
const greetPerson = (person) => {
  return message + person;
}

let personOne = "Daniel";
let result = greetPerson(personOne);
console.log(result);
