var numberOfStudents = 15;
var numberOfMentors = 8;
var porcentageStudents =
  (numberOfStudents * 100) / (numberOfStudents + numberOfMentors);
var porcentageMentors =
  (numberOfMentors * 100) / (numberOfStudents + numberOfMentors);

var students = Math.round(porcentageStudents);
var mentors = Math.round(porcentageMentors);

console.log("Percentage students: " + students + "%");
console.log("Percentage mentors: " + mentors + "%");
