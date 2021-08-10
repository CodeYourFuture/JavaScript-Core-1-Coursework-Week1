var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let percentageNumberOfStudents = Math.round((numberOfStudents * 100) / total);
let percentageNumberOfMentors = Math.round((numberOfMentors * 100) / total);

console.log(`percentage of students : ${percentageNumberOfStudents} %`);
console.log(`percentage of Mentors: ${percentageNumberOfMentors} % `);
