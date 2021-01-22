var numberOfStudents = 15;
var numberOfMentors = 8;
var totalStudentsMentors = numberOfStudents + numberOfMentors

var quotientStudents = (numberOfStudents/totalStudentsMentors) * 100
var quotientMentors = (numberOfMentors/totalStudentsMentors) *100

//rounding the values up to it's nearest integer
var roundUpStudents = Math.round(quotientStudents); 
var roundUpMentors = Math.round(quotientMentors);

var percentageStudents = "Percentage students: " + roundUpStudents + "%";
var percentageMentors = "Percentage mentors: " + roundUpMentors + "%"

console.log(percentageStudents)
console.log(percentageMentors)
