var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let percentageOfStudents = Math.round((numberOfStudents / total) * 100);
let percentageOfMentors = Math.round((numberOfMentors / total) * 100);

console.log(
  "Percentage of students: " +
    percentageOfStudents +
    "%" +
    "\n" +
    "Percentage of mentors: " +
    percentageOfMentors +
    "%"
);
