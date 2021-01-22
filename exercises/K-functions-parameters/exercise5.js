// Declare your function here
function createLongGreeting (string1, number1) {
    var string0 = "Hello, my name is ";
    var string2 = " and I'm  ";
    var string3 = " years old";

    return string0 + string1 + string2 + number1 + string3;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
