var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
var PercentageOfStudents = Math.round((numberOfStudents * 100) / sum);
var PercentageOfMentors = Math.round((numberOfMentors * 100) / sum);
console.log(`Percentage student:  ${PercentageOfStudents} %`);
console.log(`Percentage mentors:  ${PercentageOfMentors} %`);