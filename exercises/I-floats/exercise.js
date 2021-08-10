var numberOfStudents = 15;
var numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;

const studentPercentage = `Percentage of students: ${Math.round(
  (numberOfStudents / totalNumber) * 100
)}%`;

const mentorsPercentage = `Percentage of mentors: ${Math.round(
  (numberOfMentors / totalNumber) * 100
)}%`;

console.log(studentPercentage);
console.log(mentorsPercentage);
