var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// Exercise 1:
function percentageOfStudents(students, mentors) {
    let total = students + mentors;
    let percentageOfStudentsCalculation = (students / total) * 100; 
    return Math.round(percentageOfStudentsCalculation);
}
function percentageOfMentors(students, mentors) {
    let total = students + mentors;
    let percentageOfMentorsCalculation = (mentors / total) * 100;
    return Math.round(percentageOfMentorsCalculation);
}
function message(students, mentors) {
    let messageForStudents = "Percentage students: " + percentageOfStudents(15,8) + "%",
        messageForMentors = "Percentage Mentors: " + percentageOfMentors(15,8) +"%";
    return [messageForStudents, messageForMentors]
}
let messages = message(15, 8);
console.log(messages);

// ## Exercise 2
function capitalLetter(name) {
    let shoutyName = "Hello ".toUpperCase() + name.toUpperCase();
    return shoutyName; 
}

let nameInput1 = capitalLetter(mentor1);
console.log(nameInput1);
let nameInput2 = capitalLetter(mentor2);
console.log(nameInput2);
let nameInput3 = capitalLetter(mentor3);
console.log(nameInput3);
let nameInput4 = capitalLetter(mentor4);
console.log(nameInput4);
let nameInput5 = capitalLetter(mentor5);
console.log(nameInput5);

// - In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
// - Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// - Log each greeting to the console.