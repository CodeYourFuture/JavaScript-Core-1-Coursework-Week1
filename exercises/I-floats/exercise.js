var numberOfStudents = 15;
var numberOfMentors = 8;

// - Using the variables provided in the exercise calculate the percentage of mentors and students in the group //

let total = numberOfStudents + numberOfMentors;
let percentageOfStudents = Math.round((numberOfStudents / total) * 100);
let percentageOfMentors = Math.round((numberOfMentors / total) * 100);

console.log(`Percentage students: ${percentageOfStudents}%`);
console.log(`Percentage mentors: ${percentageOfMentors}%`);
