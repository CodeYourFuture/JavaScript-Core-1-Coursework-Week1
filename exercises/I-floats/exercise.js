let numberOfStudents = 15;
let numberOfMentors = 8;

function percent(x) {
  return Math.round((x / (numberOfMentors + numberOfStudents)) * 100);
}

let studentMessage = "Percentage students:";
let mentorMessage = "Percentage mentors:";

console.log(mentorMessage, percent(numberOfStudents) + "%");
console.log(studentMessage, percent(numberOfMentors) + "%");
