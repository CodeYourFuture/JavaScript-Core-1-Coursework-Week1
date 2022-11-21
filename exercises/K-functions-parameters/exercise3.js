function createGreeting(name) {
  return (message = `Hello, my name is ${name}`);
}

var greeting = createGreeting("Daniel");

console.log(greeting);

greeting = createGreeting("Day");

console.log(greeting);

greeting = createGreeting("Lewis");

console.log(greeting);

greeting = createGreeting("Junior");

console.log(greeting);
