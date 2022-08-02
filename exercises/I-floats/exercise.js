var numberOfStudents = 15;
var numberOfMentors = 8;
let total=numberOfStudents+numberOfMentors;
const studentsPercentage=Math.round(numberOfStudents/total*100);
const mentorsPercentage=Math.round(numberOfMentors/total*100);

console.log("Percentage students: " +studentsPercentage+"%");
console.log("Percentage mentors: " +mentorsPercentage+"%");