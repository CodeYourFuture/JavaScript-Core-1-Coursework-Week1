var numberOfStudents = 15;
var numberOfMentors = 8;
var wholeNumber = numberOfStudents + numberOfMentors;

var studentPercentage = Math.round(numberOfStudents*100/wholeNumber);
console.log("Percentage students: " + studentPercentage + "%");

var mentorsPercentage = Math.round(numberOfMentors*100/wholeNumber);
console.log("Percentage mentors: " + mentorsPercentage + "%");