var numberOfStudents = 15;
var numberOfMentors = 8;

let preciseStudentPercentage = (numberOfStudents / 23) * 100;
roundedStudentPercentage = Math.round(preciseStudentPercentage);
let preciseMentorPercentage = (numberOfMentors / 23) * 100;
roundedMentorPercentage = Math.round(preciseMentorPercentage);

console.log("Percentage students: ", roundedStudentPercentage, "%");
console.log("Percentage mentors: ", roundedMentorPercentage, "%");
