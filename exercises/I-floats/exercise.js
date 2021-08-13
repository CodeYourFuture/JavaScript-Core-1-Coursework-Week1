var numberOfStudents = 15;
var numberOfMentors = 8;

let percentageStudents =
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
let percentageMentors =
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;

let percentageStudentsMessage = `Percentage Students: ${Math.round(
  percentageStudents
)}%`;
let percentageMentorsMessage = `Percentage Mentors: ${Math.round(
  percentageMentors
)}%`;

console.log(percentageStudentsMessage);
console.log(percentageMentorsMessage);
