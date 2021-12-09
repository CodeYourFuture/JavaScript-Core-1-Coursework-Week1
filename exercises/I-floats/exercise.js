var numberOfStudents = 15;
var numberOfMentors = 8;
let percentageOfStudents =
  (numberOfStudents / (numberOfMentors + numberOfStudents)) * 100;
let percentageOfMentors =
  (numberOfMentors / (numberOfMentors + numberOfStudents)) * 100;
let message1 = `Percentage students: ${Math.round(percentageOfStudents)}%`;
let message2 = `Percentage mentors: ${Math.round(percentageOfMentors)}%`;
console.log(message1);
console.log(message2);
