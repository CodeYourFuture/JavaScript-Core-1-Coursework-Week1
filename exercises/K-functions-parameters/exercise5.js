// Declare your function here
function createLongGreeting(name, age){
    const sentence = "Hello, my name is " + name + " and I'm " + age + " years old";
    return sentence;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
