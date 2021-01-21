var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;
let precisePercentageOfMentors = ((numberOfMentors / totalNumber) * 100);
let precisePercentageOfStudents = ((numberOfStudents / totalNumber) * 100);
let percentageOfStudents = Math.round(precisePercentageOfStudents);
let percentageOfMentors = Math.round(precisePercentageOfMentors);
console.log("Percentage students: " + percentageOfStudents + "%");
console.log("Percentage mentors: " + percentageOfMentors + "%");

