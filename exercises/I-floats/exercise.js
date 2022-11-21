var numberOfStudents = 15;
var numberOfMentors = 8;
let totalNumber = numberOfMentors + numberOfStudents;
let percentageOfStudents = (numberOfStudents / totalNumber) * 100;
let roughPercentageOfStudents = Math.round(percentageOfStudents);
console.log(roughPercentageOfStudents);
let percentageOfMentors = (numberOfMentors / totalNumber) * 100;
console.log(Math.round(percentageOfMentors));
