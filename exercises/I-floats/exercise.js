var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;

console.log(
  "Percentage students: " +
    Math.round((numberOfStudents / totalNumber) * 100) +
    "%"
);

console.log(
  "Percentage mentors: " +
    Math.round((numberOfMentors / totalNumber) * 100) +
    "%"
);
