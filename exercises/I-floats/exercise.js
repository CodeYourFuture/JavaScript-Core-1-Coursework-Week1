var numberOfStudents = 15;
var numberOfMentors = 8;

let studentPercentage = (numberOfStudents / 23) * 100;
let mentorsPercentage = (numberOfMentors / 23) * 100;
let studentsResult = Math.round(studentPercentage);
let mentorsResult = Math.round(mentorsPercentage);
console.log("Percentage students:", studentsResult + "%");
console.log("Percentage students:", mentorsResult + "%");
