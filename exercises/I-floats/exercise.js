var numberOfStudents = 15;
var numberOfMentors = 8;

var studentPercentage = numberOfStudents/(numberOfStudents+numberOfMentors)*100;
var mentorPercentage = numberOfMentors/ (numberOfMentors + numberOfStudents) *100;

console.log("Student Percentage:", Math.round(studentPercentage));
console.log("Mentor Percentage:", Math.round(mentorPercentage));


