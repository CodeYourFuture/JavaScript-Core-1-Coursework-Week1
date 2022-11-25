var numberOfStudents = 15;
var numberOfMentors = 8;
students = numberOfStudents;
mentors = numberOfMentors;

var totalInClass = students + mentors;
let percentageOfStudent = (students / totalInClass) * 100;
let percentageOfStudentRound = Math.round(percentageOfStudent);

console.log("Percentage students: " + percentageOfStudentRound);

let percentageOfMentorsRound = Math.round((mentors / totalInClass) * 100);
let messagePercentageOfMentors =
  "Percentage Mentors: " + percentageOfMentorsRound;
console.log(messagePercentageOfMentors);
