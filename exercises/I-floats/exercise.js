var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var percentageOfMentors = (numberOfMentors/total) * 100;
var percentageOfStudents = (numberOfStudents/total) * 100;
var roughPercentageOfStudents = Math.round(percentageOfStudents) + "%";
var roughPercentageOfMentors = Math.round(percentageOfMentors) + "%";

console.log(roughPercentageOfMentors);
console.log(roughPercentageOfStudents);