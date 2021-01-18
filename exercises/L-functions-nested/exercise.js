// function percentage(num,total) {
//     return (num/total*100);
// }

// var numberOfStudents = 15;
// var numberOfMentors = 8;
// var total = numberOfStudents + numberOfMentors;
// var totalPercentage = percentage(numberOfStudents,numberOfMentors,total);

// function initialMessage(numberOfStudents, numberOfMentors){
//     message = `totalPercentage: ${numberOfStudents} ${numberOfMentors} ${Math.round(percentage)}%`;
//     return message;
// }

// console.log(totalPercentage);

// Function for calculating percentages.
function percentage(num, total) {
    return Math.round((num / total) * 100);
}

// Variables used for calculating the percentages.
var numberOfStudents = 33;
var numberOfMentors = 13;
let total = numberOfStudents + numberOfMentors;
let percentageStudents = percentage(numberOfStudents, total);
let percentageMentors = percentage(numberOfMentors, total);

// Function for creating the message.
function percentageType(groupName, percentageOfGroupName) {
    return groupName + percentageOfGroupName;
}

// Variables for creating the output message.
let students = percentageType("Percentage Students: ", percentageStudents);
let mentors = percentageType("Percentage Mentors: ", percentageMentors);

// This one is using the variables above to output the message.
console.log(students+"%");
console.log(mentors+"%");
// I need help with getting % added.

// This one is interpolation to create the message.
console.log(`Percentage Students: ${percentageStudents}%`);
console.log(`Pencentage Mentors: ${percentageMentors}%`);











// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";

// function shoutyGreeting(name){
//     var greeting = name.toUpperCase();
//     return greeting = `HELLO ${greeting}`;
// }

// var greeting1 = shoutyGreeting(mentor1);
// var greeting2 = shoutyGreeting(mentor2);
// var greeting3 = shoutyGreeting(mentor3);
// var greeting4 = shoutyGreeting(mentor4);
// var greeting5 = shoutyGreeting(mentor5);

let mentorA = "daniel";
let mentorB = "irina";
let mentorC = "mimi";
let mentorD = "rob";
let mentorE = "yohannes";

function shoutyGreeting(mentorName) {
    return "Hello " + mentorName + ".";
}

let greet1 = shoutyGreeting(mentorA.toUpperCase())
let greet2 = shoutyGreeting(mentorB.toUpperCase())
let greet3 = shoutyGreeting(mentorC.toUpperCase())
let greet4 = shoutyGreeting(mentorD.toUpperCase())
let greet5 = shoutyGreeting(mentorE.toUpperCase())

console.log(greet1);
console.log(greet2);
console.log(greet3);
console.log(greet4);
console.log(greet5);

// console.log(greeting1);
// console.log(greeting2);
// console.log(greeting3);
// console.log(greeting4);
// console.log(greeting5);