var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfMentors + numberOfStudents;

console.log(
  `Percentage students: ${Math.round((numberOfStudents / totalNumber) * 100)}%`
);
console.log(
  `Percentage mentors: ${Math.round((numberOfMentors / totalNumber) * 100)}%`
);
