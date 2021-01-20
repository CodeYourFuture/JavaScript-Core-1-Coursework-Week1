
// Declare your function here
function myGreeting(name, age) {
    let myName = 'Hello, my name is ' + name;
    let myAge = ' and I am ' + age + ' years old.';
    let fullGreeting = myName + myAge;
    return fullGreeting;
}

// Store the value in a variable
const greeting = myGreeting("Daniel", 30);

// Call the variable
console.log(greeting);