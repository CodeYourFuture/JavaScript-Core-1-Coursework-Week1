// Declare your function here
function createLongGreeting (name, age) {
    var stringPartOne = "Hello, my name is";
    var stringPartTwo = "and I'm";
    var stringPArtThree = "years old";

    return `${stringPartOne} ${name} ${stringPartTwo} ${age} ${stringPArtThree}`;
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
