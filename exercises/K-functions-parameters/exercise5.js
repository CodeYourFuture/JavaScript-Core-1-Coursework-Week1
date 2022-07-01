// Declare your function here
function createLongGreeting(insertName, insertAge) {
	return (`Woah, ${insertName}, I can't believe you're only ${insertAge} years old!`);
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
