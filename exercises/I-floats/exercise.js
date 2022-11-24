let numberOfStudents = 15;
let numberOfMentors = 8;
// Using the variables provided in the exercise calculate the percentage of mentors and students in the group

let total = numberOfMentors + numberOfStudents;

console.log(Math.round((numberOfMentors / total) * 100) + "%");

console.log(Math.round((numberOfStudents / total) * 100) + "%");
