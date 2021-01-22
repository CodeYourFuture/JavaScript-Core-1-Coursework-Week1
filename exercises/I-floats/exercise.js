var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageOfStudent = Math.round(
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100
);
var percentageOfMentors = Math.round(
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100
);
var message = "Percentage students: " + percentageOfStudent + "%";
console.log(message);
message = "Percentage mentors: " + percentageOfMentors + "%";
console.log(message);
