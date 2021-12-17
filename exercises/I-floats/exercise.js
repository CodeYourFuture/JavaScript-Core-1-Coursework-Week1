let numberOfStudents = 15;
let numberOfMentors = 8;
let sum = numberOfStudents + numberOfMentors;

let percentageOfStudents = Math.round((100 / sum) * numberOfStudents);
let percentageOfMentors = Math.round((100 / sum) *numberOfMentors);

let ps = `percentage students: ${percentageOfStudents}%`;
let pm = `percentage mentors: ${percentageOfMentors}%`;

console.log(ps);
console.log(pm);