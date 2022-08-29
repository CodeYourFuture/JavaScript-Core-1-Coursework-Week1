var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(name) {
    let nameCaps = name.toUpperCase();
    let greeting = "HELLO " + nameCaps;
    return greeting;
}

var greetingOne = shoutyGreeting(mentor1);
var greetingTwo = shoutyGreeting(mentor2);
var greetingThree = shoutyGreeting(mentor3);
var greetingFour = shoutyGreeting(mentor4);
var greetingFive = shoutyGreeting(mentor5);

console.log(greetingOne);
console.log(greetingTwo);
console.log(greetingThree);
console.log(greetingFour);
console.log(greetingFive);