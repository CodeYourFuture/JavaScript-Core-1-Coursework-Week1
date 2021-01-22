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
    let messageForStudents = `Percentage students: ${percentageOfStudents(15,8)}%`
        messageForMentors = `Percentage Mentors: ${percentageOfMentors(15,8)}%`;
    return [messageForStudents, messageForMentors]
}
let messages = message(15, 8);
console.log(messages);

// ## Exercise 2
function capitalLetterMessage(name) {
    let shoutyComment = "Hello ".toUpperCase();
    return shoutyComment; 
}
function capitalLetterName(name) {
    let capitalName = capitalLetterMessage(name) + name.toUpperCase();
    return capitalName;
}
console.log(capitalLetterName(mentor1));
console.log(capitalLetterName(mentor2));
console.log(capitalLetterName(mentor3));
console.log(capitalLetterName(mentor4));
console.log(capitalLetterName(mentor2));

// - In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
// - Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// - Log each greeting to the console.