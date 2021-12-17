var numberOfStudents = 15;
var numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;

let quotientOfStudents = numberOfStudents / totalNumber;
let quotientOfMentors = numberOfMentors / totalNumber;

let productOfStudents = quotientOfStudents * 100;
let productOfMentors = quotientOfMentors * 100;

let percentageOfStudents = productOfStudents;
let percentageOfMentors = productOfMentors;

console.log(`Percentage students: ${Math.round(percentageOfStudents)}%`)
console.log(`Percentage mentors: ${Math.round(percentageOfMentors)}%`)


