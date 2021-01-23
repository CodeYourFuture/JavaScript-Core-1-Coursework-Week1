// Declare your function here
function createLongGreeting (name, age) {
    const greetingMessage = "Hello my name is "+ name + " and I am " + age + " years old";
    return greetingMessage;
}
const greeting = createLongGreeting("Bis", 21);

console.log(greeting);
