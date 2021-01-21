var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var studentPerc = "Percentage students: " + Math.round(numberOfStudents/total*100) + "%";
var studentMent = "Percentage mentors: " + Math.round(numberOfMentors/total*100) + "%";

console.log(studentPerc);
console.log(studentMent);