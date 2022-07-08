// Declare your function here
function createLongGreeting(name, age){
    let greeting = "Hello, my name is ${name} and I'm ${age} old"
    return greeting;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
