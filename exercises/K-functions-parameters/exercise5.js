function createLongGreeting(name, age) {
  return (message = `Hello, my name is ${name} and I'm ${age} years old`);
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
