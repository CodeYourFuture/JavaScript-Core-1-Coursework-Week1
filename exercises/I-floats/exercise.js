var numberOfStudents = 15;
var numberOfMentors = 8;

var studentsPreciseRatio = (15/(15+8))*100;
var studentsRoughRatio = Math.round(studentsPreciseRatio);

var mentorsPreciseRatio = (8/(15+8))*100;
var mentorsRoughRatio = Math.round(mentorsPreciseRatio);

const message1 = "Percentage students: " + studentsRoughRatio + "%";
const message2 = "Percentage mentors: " + mentorsRoughRatio + "%";

console.log(message1);
console.log(message2);
