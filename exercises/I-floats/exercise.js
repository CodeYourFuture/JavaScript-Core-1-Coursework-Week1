var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNumber = numberOfMentors + numberOfStudents;

let percentageStudents = Math.round(numberOfStudents / totalNumber * 100);
let percentageMentors = Math.round(numberOfMentors / totalNumber * 100);

console.log(`Percentage students: ${percentageStudents}%`);

console.log(`Percentage mentors: ${percentageMentors}%`)