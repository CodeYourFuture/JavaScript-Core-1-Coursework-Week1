let numberOfStudents = 15;
let numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;

let percentageOfStudents =
  "Percentage students: " + Math.round((numberOfStudents * 100) / total) + "%";
console.log(percentageOfStudents);

let percentageOfMentors =
  "Percentage mentors: " + Math.round((numberOfMentors / total) * 100) +  "%";
  console.log(percentageOfMentors);

