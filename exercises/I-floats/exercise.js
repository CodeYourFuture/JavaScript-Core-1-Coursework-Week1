var numberOfStudents = 15;
var numberOfMentors = 8;

//Finding the total
var total = numberOfStudents + numberOfMentors;

//Finding the percentages
var percentageOfStudents = (numberOfStudents / total) * 100;
var percentageOfMentors = (numberOfMentors / total) * 100;

//Rounding the percentages
var roundPercentageOfStudents = Math.round(percentageOfStudents);
var roundPercentageOfMentors = Math.round(percentageOfMentors);

//Logging to the console
console.log("Percentage students: " + roundPercentageOfStudents + "%");
console.log("Percentage mentors: " + roundPercentageOfMentors + "%");
