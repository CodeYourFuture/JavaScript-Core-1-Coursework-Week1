// Start by creating a variables `numberOfStudents` and `numberOfMentors`
var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfMentors + numberOfStudents;

console.log("Percentage students: "+ Math.round(numberOfStudents/total*100) + "%");
console.log("Percentage mentors: "+ Math.round(numberOfMentors/total*100) + "%");