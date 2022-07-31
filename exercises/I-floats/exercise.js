var numberOfStudents = 15;
var numberOfMentors = 8;

let total = numberOfMentors + numberOfStudents;

let pNumberOfStudents = `${Math.round((numberOfStudents/total)*100)}%`;
let pNumberOfMentors = `${Math.round((numberOfMentors / total) * 100)}%`;

console.log(pNumberOfMentors);
console.log(pNumberOfStudents);
