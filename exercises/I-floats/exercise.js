var numberOfStudents = 15;
var numberOfMentors = 8;
var numberOfTotal = numberOfStudents + numberOfMentors;
var percentageStudents = numberOfStudents / numberOfTotal*100;
var percentageMentors = numberOfMentors / numberOfTotal*100;
//var roughPercentageStudents = Math.round(percentageStudents);
//var roughPercentageMentors = Math.round(percentageMentors);
console.log("Percentage students: " + Math.round(percentageStudents) + "%");
console.log("Percentage mentors: " + Math.round(percentageMentors) + "%");
