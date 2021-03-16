// Declare your function here

function createLongGreeting(name, age) {
  return "My name is " + name + " and I am " + age + " years old.";
}

const greeting = createLongGreeting("Daniel ", 30);
const greeting2 = createLongGreeting("Chezlin", 32);
console.log(greeting);
console.log(greeting2);
var greetingType = typeof greeting2;
console.log(greetingType);
