var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
var PercentageS = Math.round((numberOfStudents * 100) / sum);
var PercentageM = Math.round((numberOfMentors * 100) / sum);
console.log("Percentage student: " + PercentageS + "%");
console.log("Percentage mentors: " + PercentageM + "%");
