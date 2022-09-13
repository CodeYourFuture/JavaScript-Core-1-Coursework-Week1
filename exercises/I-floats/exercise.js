let numberOfStudents = 47;
let numberOfMentors = 8;

let percentageStudents = Math.round(numberOfStudents * 100 / (numberOfStudents + numberOfMentors));
let percentageMentors = Math.round(numberOfMentors * 100 / (numberOfStudents + numberOfMentors));

console.log(`Percentage students: ${percentageStudents}%`);
console.log(`Percentage mentors: ${percentageMentors}%`);