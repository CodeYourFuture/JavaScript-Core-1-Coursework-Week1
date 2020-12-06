var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var studentPercentage = Math.round(numberOfStudents / total * 100);
var mentorPercentage = Math.round(numberOfMentors / total * 100);

console.log("Percentage students: " + studentPercentage + "%");
console.log("Percentage mentors: " + mentorPercentage + "%");