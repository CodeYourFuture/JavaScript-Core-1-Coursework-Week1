var numberOfStudents = 15;
var numberOfMentors = 8;
const totalNumber = numberOfMentors + numberOfStudents;
const numberOfStudentsPercentage = Math.round(
  (numberOfStudents / totalNumber) * 100
);
const numberofMentorsPercentage = Math.round(
  (numberOfMentors / totalNumber) * 100
);

console.log("Percentage students: " + numberOfStudentsPercentage + "%");
console.log("Percentage mentors: " + numberofMentorsPercentage + "%");
