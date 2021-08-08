var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;

var percentageNumOfStudents = Math.round((numberOfStudents*100)/totalNumber);
var percentageNumOfMentors = Math.round((numberOfMentors*100)/totalNumber);

console.log("Percentage students: " + percentageNumOfStudents + "%");
console.log("Percentage mentors: " + percentageNumOfMentors + "%");

