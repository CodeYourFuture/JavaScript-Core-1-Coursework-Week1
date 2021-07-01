var numberOfStudents = 15;
var numberOfMentors = 8;

let percentOfStudents = numberOfStudents * 100 / (numberOfStudents + numberOfMentors);

let percentOfMentors = numberOfMentors * 100 / (numberOfStudents + numberOfMentors);

console.log('Percentage students: ' + Math.round(percentOfStudents)+ '%');
console.log('Percentage mentors: ' + Math.round(percentOfMentors)+ '%');
