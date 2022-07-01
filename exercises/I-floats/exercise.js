var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let percentageStudents = (numberOfStudents / total) * 100;
let percentageMentors = (numberOfMentors / total) * 100;

console.log(`Percentage of students: ${Math.round(percentageStudents)}%`);
console.log(`Percentage of mentors: ${Math.round(percentageMentors)}%`);