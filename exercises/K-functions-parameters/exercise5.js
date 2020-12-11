// Declare your function here

function createLongGreeting(Str1, num, Str2) {
    var Str1 = "Hello, my name is Daniel and I am ";
    Str2 = "years old."
    return Str1 + num + " " + Str2;
} 

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
