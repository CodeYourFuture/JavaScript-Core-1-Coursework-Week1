var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var studentCal = numberOfStudents / total * 100;
var mentorCal = numberOfMentors / total * 100;
var studentPercentage = Math.round(studentCal);
var mentorPercentage = Math.round(mentorCal);

console.log("Percentage students: " + studentPercentage + '%' + "\nPercentage mentors: " + mentorPercentage + '%');