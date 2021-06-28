var numberOfStudents = 14;
var numberOfMentors = 8;
let totallStaff = numberOfStudents + numberOfMentors;
let perStudent = Math.round((numberOfStudents * 100) / totallStaff) + "%";
let perMentor = Math.round((numberOfMentors * 100) / totallStaff) + "%";

console.log(
  `Percentage students: ${perStudent}\nPercentage mentors: ${perMentor}`
);
