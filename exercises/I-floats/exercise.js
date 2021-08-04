var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;
var percentageOfStudents = (numberOfStudents/totalNumber)*100;
var precentageOfMentors = (numberOfMentors/totalNumber)* 100;

console.log(" Percentage students:" + " " + Math.round(percentageOfStudents) + "%");
console.log(" Percentage mentors:" + " " + Math.round(precentageOfMentors) + "%");
