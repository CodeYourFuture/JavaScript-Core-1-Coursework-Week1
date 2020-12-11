var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageOfStudents = numberOfStudents * 100 / (numberOfMentors + numberOfStudents);
var percentageOfMentors = numberOfMentors * 100 / (numberOfStudents + numberOfMentors);
var message1 = "Percentage students: " + Math.round(percentageOfStudents) + "%";
var message2 = "Percentage mentors: " + Math.round(percentageOfMentors) + "%";

console.log(message1);
console.log(message2);