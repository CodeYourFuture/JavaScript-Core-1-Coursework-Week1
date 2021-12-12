var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNumber = numberOfStudents + numberOfMentors;
let studentPercentage = Math.round((numberOfStudents / totalNumber) * 100);
let mentorPercentage = Math.round((numberOfMentors / totalNumber) * 100);

let numbers = `Percentage students: ${studentPercentage}%
Percentage mentors: ${mentorPercentage}%`;

console.log(numbers);
// Percentage students: 65%
// Percentage mentors: 35%