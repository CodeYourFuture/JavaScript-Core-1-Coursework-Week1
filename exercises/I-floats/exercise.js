var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let perStudent = Math.round((numberOfStudents * 100) / total);
let perMentor = Math.round((numberOfMentors * 100) / total);

console.log("Percentage students: " + perStudent + "%");
console.log("Percentage mentors: " + perMentor + "%");
