var numberOfStudents = 15;
var numberOfMentors = 8;
let totalClass = numberOfMentors + numberOfStudents;
let percentStudents = numberOfStudents / totalClass;
let percentMentors = numberOfMentors / totalClass;

console.log("Students:"+Math.round(percentStudents *100) +"%");

console.log("Mentors:"+Math.round(percentMentors *100)+"%");