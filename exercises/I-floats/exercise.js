var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

var studentPercent = "Percentage Students:" + Math.round((numberOfStudents / total) * 100 ) + "%";
var mentorPercent = "Percentage Mentors:" + Math.round((numberOfMentors / total) * 100) + "%";
console.log(studentPercent);
console.log(mentorPercent);
