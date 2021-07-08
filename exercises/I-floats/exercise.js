var numberOfStudents = 15;
var numberOfMentors = 8;

var percentValue = 100/(numberOfStudents + numberOfMentors);
var percentOfStudents = Math.round(numberOfStudents * percentValue);
var percentOfMentors = Math.round(numberOfMentors * percentValue);

console.log("Percentage students: " + percentOfStudents +"%");
console.log("Percentage mentors: " + percentOfMentors + "%");
