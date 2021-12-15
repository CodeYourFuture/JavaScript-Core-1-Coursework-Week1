//Exercise 5

// - Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)
// ## Expected result
// Hello, my name is Daniel and I'm 30 years old

// Declare your function here

function createLongGreeting(userName, userAge) {
    return `Hello, my name is ${userName} and I'm ${userAge} years old`
}


const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
