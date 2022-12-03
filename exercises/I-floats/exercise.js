var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let percentageStudents =
  "Percentage students: " + Math.round((numberOfStudents / total) * 100) + "%";
let percentageMentors =
  "Percentage mentors: " + Math.round((numberOfMentors / total) * 100) + "%";
console.log(percentageStudents);
console.log(percentageMentors);
