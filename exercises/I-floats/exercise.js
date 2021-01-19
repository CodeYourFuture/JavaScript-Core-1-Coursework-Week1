var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var percentOfStudents = (numberOfStudents / total) * 100;
var percentOfMentors = (numberOfMentors / total) * 100;

console.log('Percentage of students: ' + Math.round(percentOfStudents) + '%');
console.log('Percentage of mentors: ' + Math.round(percentOfMentors) + '%');
