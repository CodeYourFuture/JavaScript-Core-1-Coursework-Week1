var numberOfStudents = 15;
var numberOfMentors = 8;

let sum = numberOfStudents + numberOfMentors;
let percentageOfStudents = numberOfStudents / sum * 100;
let percentageOfMentors = numberOfMentors / sum * 100;

console.log('Percentage students: ' + Math.round(percentageOfStudents) + '%');
console.log('Percentage mentors: ' + Math.round(percentageOfMentors) + '%');