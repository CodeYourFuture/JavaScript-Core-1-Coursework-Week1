var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageStudents = Math.round((numberOfStudents * 100) / (numberOfStudents + numberOfMentors));
var percentageMentors = Math.round(
  (numberOfMentors * 100) / (numberOfStudents + numberOfMentors)
);

console.log("Percentage students: " + percentageStudents + "%");
console.log("Percentage mentors: " + percentageMentors + "%");
