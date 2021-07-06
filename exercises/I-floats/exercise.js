var numberOfStudents = 15;
var numberOfMentors = 8;

let percentageStudents = (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
let percentageMentors = (numberOfMentors / (numberOfMentors + numberOfStudents)) * 100;

let roughPercentageStudents = Math.round(percentageStudents);
let roughPercentageMentors = Math.round(percentageMentors);

console.log("Percentage Students " + roughPercentageStudents + "%");
console.log("Percentage Mentors " + roughPercentageMentors + "%");

