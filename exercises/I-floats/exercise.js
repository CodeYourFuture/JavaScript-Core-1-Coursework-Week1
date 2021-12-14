var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var percentageStudents = (numberOfStudents * 100) / total;
var percentageMentors = (numberOfMentors * 100) / total;

console.log('Percentage students: ' + Math.round(percentageStudents) + '%');
console.log('Percentage mentors: ' + Math.round(percentageMentors) + '%');
