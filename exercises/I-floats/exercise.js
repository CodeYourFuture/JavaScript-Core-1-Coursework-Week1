var numberOfStudents = 15;
var numberOfMentors = 8;
var preciseAge = 30.612437;
var roughAge = Math.round(preciseAge); // 30
let percentageOfStudents = Math.round(
  (numberOfStudents * 100) / (numberOfMentors + numberOfStudents)
);
let percentageOfMentors = Math.round(
  (numberOfMentors * 100) / (numberOfMentors + numberOfStudents)
);

console.log("Percentage mentors: " + percentageOfMentors + "%");
console.log("Percentage students: " + percentageOfStudents + "%");
