var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let student_percentage = numberOfStudents / total * 100;
let mentor_percentage = numberOfMentors / total * 100
console.log("Percentage students: "+Math.round(student_percentage)+"%");
console.log("Mentor students: "+Math.round(mentor_percentage)+"%");