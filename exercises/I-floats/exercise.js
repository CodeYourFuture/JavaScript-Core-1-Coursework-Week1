var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;

var studentPercentage = Math.round(numberOfStudents*100/totalNumber);
console.log("Percentage students: " + studentPercentage + "%");

var mentorsPercentage = Math.round(numberOfMentors*100/totalNumber);
console.log("Percentage mentors: " + mentorsPercentage + "%");