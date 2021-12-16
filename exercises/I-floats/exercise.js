let numberOfStudents = 15;
let numberOfMentors = 8;
let percentageOfStudents = Math.round(
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100
);
let percentageOfMentors = Math.round(
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100
);
console.log(`Percentage students: ${percentageOfStudents}%
Percentage mentors: ${percentageOfMentors}%`);
