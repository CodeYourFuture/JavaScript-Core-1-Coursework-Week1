var numberOfStudents = 15;
var numberOfMentors = 8;
let sum = numberOfStudents + numberOfMentors;
let percentageOfStudents = Math.round((numberOfStudents / sum) * 100);
let percentageOfMentors = Math.round((numberOfMentors / sum) * 100);

console.log(
  `Percentage of students: ${percentageOfStudents}%
Percentage of mentors:  ${percentageOfMentors}%`
);