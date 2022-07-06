var numberOfStudents = 15;
var numberOfMentors = 8;

let studentPercentage = numberOfStudents / 23 *  100;
let mentorsPercentage = numberOfMentors / 23 *  100;
let roundedStudents = Math.round(studentPercentage);
let roundedMentors = Math.round(mentorsPercentage);
console.log("Percentage students:", roundedStudents + "%")
console.log("Percentage students:", roundedMentors + "%")
