// Declare your function here

// const greeting = createLongGreeting("Daniel", 30);

// console.log(greeting);

// Option 1
function getPerson(fname, age) {
  fname = "Ali";
  age = 50;
  const greeting = "Hello";
  return `${greeting} my is ${fname} and I'm ${age} years old`;
}

console.log(getPerson());

// Option 2

function createLongGreeting(fname, age) {
  const greeting = "Hello";
  return `${greeting} my is ${fname} and I'm ${age} years old`;
}
const greeting3 = createLongGreeting("Daniel", 30);
console.log(greeting3);
