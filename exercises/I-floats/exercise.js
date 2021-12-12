var numberOfStudents = 15;
var numberOfMentors = 8;

let total = numberOfMentors + numberOfStudents;

let percentageOfMentors = Math.round((100 / total) * numberOfMentors);
let percentageOfStudents = Math.round((100 / total) * numberOfStudents);

let messageStudents = `Percentage students: ${percentageOfStudents}%`;
let messageMentors = `Percentage mentors: ${percentageOfMentors}%`;

console.log(messageStudents);
console.log(messageMentors);
