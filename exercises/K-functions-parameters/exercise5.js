// Declare your function here
// - Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)
const createLongGreeting = (personName, age) => {
  return `Hello, my name is ${personName} and I'm ${age} years old`

}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
