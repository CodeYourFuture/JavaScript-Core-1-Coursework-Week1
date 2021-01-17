var numberOfStudents = 15;
var numberOfMentors = 8;

//* Using the variables provided in the exercise calculate the percentage of mentors and students in the group
let total = numberOfStudents + numberOfMentors;
let percentageStudents = Math.round((numberOfStudents / total) * 100);
let percentageMentors = Math.round((numberOfMentors / total) * 100);
console.log(`Percentage students: ${percentageStudents}%`);
console.log(`Percentage mentors: ${percentageMentors}%`);