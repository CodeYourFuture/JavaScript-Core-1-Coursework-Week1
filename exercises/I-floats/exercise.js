var numberOfStudents = 15;
var numberOfMentors = 8;
var totalStudentsMentors = numberOfStudents + numberOfMentors;
let percentOfStudents = numberOfStudents / totalStudentsMentors * 100;
let percentOfMentors = numberOfMentors / totalStudentsMentors * 100;

let roughStudents = Math.round(percentOfStudents);
let roughOfMentors = Math.round(percentOfMentors);

console.log(`Percentage students: ${roughStudents}%`);
console.log(`Percentage mentors: ${roughOfMentors}%`);
