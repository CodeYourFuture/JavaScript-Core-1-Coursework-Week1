var numberOfStudents = 15;
var numberOfMentors = 8;

// Variables created to generate the percentages and then the messages expected, which were then logged to the console

var numberOfAdults = numberOfMentors + numberOfStudents;

var percentageStudents = (numberOfStudents * 100) / numberOfAdults;
var percentageMentors = (numberOfMentors * 100) / numberOfAdults;

var totalStudents =
  "Percentage of students: " + Math.round(percentageStudents) + "%";
var totalMentors =
  "Percentage of mentors: " + Math.round(percentageMentors) + "%";

console.log(totalStudents);
console.log(totalMentors);
