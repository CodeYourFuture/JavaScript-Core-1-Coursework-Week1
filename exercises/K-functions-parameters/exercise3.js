// Write your function here
// option 1
function createGreeting(fname, salam) {
    return fname + salam;
}
var greeting = createGreeting(' Hi ', 'my name is Adam');
console.log(greeting);

// option 2
function createGreeting2(fname, salam) {
    fname = "Adam";
    salam = " Good morning "
    const morningGreeting = salam + fname;
    return morningGreeting;
}

console.log(createGreeting2())