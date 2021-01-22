var numberOfStudents = 15;
var numberOfMentors = 8;

let studentPercent = (numberOfStudents * 100)/(numberOfStudents + numberOfMentors);
let mentorsPercent = (numberOfMentors * 100)/(numberOfStudents + numberOfMentors);

console.log("Percentage students:", Math.round(studentPercent));
console.log("Percentage mentors:", Math.round(mentorsPercent));