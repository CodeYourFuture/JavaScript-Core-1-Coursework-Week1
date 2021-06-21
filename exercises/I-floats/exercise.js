var numberOfStudents = 15;
var numberOfMentors = 8;
let totalNumbers = numberOfStudents + numberOfMentors;
let percentageStudents = (numberOfStudents / totalNumbers) * 100;
let percentageMentors = (numberOfMentors / totalNumbers) * 100;

console.log(`Percentage students: ${Math.round(percentageStudents)}%`);
console.log(`Percentage mentors: ${Math.round(percentageMentors)}%`);
