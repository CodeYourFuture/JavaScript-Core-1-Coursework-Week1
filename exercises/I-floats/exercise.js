var numberOfStudents = 15;
var numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;
const studentsPercentage = Math.round((numberOfStudents * 100) / total);
const mentorsPercentage = Math.round((numberOfMentors * 100) / total);
console.log("Percentage Students: ".concat(studentsPercentage, "%"));
console.log("Percentage Mentors: ".concat(mentorsPercentage, "%"));
