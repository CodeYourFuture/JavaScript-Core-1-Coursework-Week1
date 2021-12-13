// - In `exercise.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
// - Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// - Log each greeting to the console.

// ## Expected result

// ```
// HELLO DANIEL
// HELLO IRINA
// HELLO MIMI
// HELLO ROB
// HELLO YOHANNES




function createShoutyMessage(name) {
    var largeName = makeCapital(name);
    return "HELLO " + largeName;
}
function makeCapital(str) {
    return str.toUpperCase();
}


var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";



const greetMentor1 = createShoutyMessage(mentor1);
const greetMentor2 = createShoutyMessage(mentor2);
const greetMentor3 = createShoutyMessage(mentor3);
const greetMentor4 = createShoutyMessage(mentor4);
const greetMentor5 = createShoutyMessage(mentor5);

console.log(greetMentor1)
console.log(greetMentor2)
console.log(greetMentor3)
console.log(greetMentor4)
console.log(greetMentor5)


