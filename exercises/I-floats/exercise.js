var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;
let pOfStudents = (numberOfStudents * 100) / total;
let pOfMentors = (numberOfMentors *100) / total;

console.log(`Percentage of students: ${Math.round(pOfStudents)}%`);
console.log(`Percentage of mentors: ${Math.round(pOfMentors)}%`);