// Declare your function here

function createLongGreeting(name, age) {
  var greeting = "Hello, my name is ";
  greeting = greeting + name;
  greeting = greeting + " and I'm " + age + " years old";
  return greeting;
}
const greeting = createLongGreeting("Mohammed", 38);

console.log(greeting);
