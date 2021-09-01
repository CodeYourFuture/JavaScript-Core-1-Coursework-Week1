var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
var pStudents = Math.round((numberOfStudents * 100) / sum);
var pMentors = Math.round((numberOfMentors * 100) / sum);

console.log(`Percentage students: ${pStudents}%`);
console.log(`Percentage mentors: ${pMentors}%`);
