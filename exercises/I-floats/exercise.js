var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let percentageOfstudents = (numberOfStudents / total)*100;
let percentageOfMentors = (numberOfMentors / total)*100;

console.log(`Percentage students: ${Math.round(percentageOfstudents)} %`);
console.log(`Percentage Mentors: ${Math.round(percentageOfMentors)} %`);

