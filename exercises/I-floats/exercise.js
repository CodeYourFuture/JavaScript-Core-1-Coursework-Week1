var numberOfStudents = 15;
var numberOfMentors = 8;
const total = numberOfMentors + numberOfStudents;

let studentPct = numberOfStudents / total;
studentPct = Math.round(studentPct * 100) + "%";

let mentorsPct = numberOfMentors / total;
mentorsPct = Math.round(mentorsPct * 100) + "%";

console.log("Percentage students: " + studentPct);
console.log("Percentage mentors: " + mentorsPct);
