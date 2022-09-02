var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors+numberOfStudents;

var roundPercentageOfStudents = Math.round((numberOfStudents*100)/total);
console.log("Percentage students: " + roundPercentageOfStudents+"%");

var roundPercentageOfMentors = Math.round((numberOfMentors*100)/total);
console.log("Percentage mentors: " + roundPercentageOfMentors+"%");



