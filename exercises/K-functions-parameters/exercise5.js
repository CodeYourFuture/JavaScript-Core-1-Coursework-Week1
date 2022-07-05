// Declare your function here
function createLongGreeting(name, age) {
  const message = "Hello my name is " + name + " I' m " + age + " years old";
  return message;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
