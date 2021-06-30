var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfMentors + numberOfStudents;

var mentorPercentage = Math.round((numberOfMentors/totalNumber)*100) + "%";
var studentPercentage = Math.round((numberOfStudents/totalNumber)*100) + "%";

console.log("Percentage of Students: "+ studentPercentage);
console.log("Percentage of Mentors: "+ mentorPercentage);