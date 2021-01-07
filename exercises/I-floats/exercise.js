let numberOfStudents = 15;
let numberOfMentors = 8;

let total = numberOfStudents + numberOfMentors;

let convertStudents =  numberOfStudents / total * 100;
let convertMentors =  numberOfMentors / total * 100;
let percentageOfStudents = Math.round(convertStudents);
let percentageOfMentors = Math.round(convertMentors);

console.log(`Percentage students: ${percentageOfStudents}%`);
console.log(`Percentage students: ${percentageOfMentors}%`);