var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
let studentPerc = Math.round((numberOfMentors / total) * 100);
let mentorPerc = Math.round((numberOfStudents / total) * 100);

console.log("Percent of student :" + " " + studentPerc + "%");
console.log("Percent of mentor :" + " " + mentorPerc + "%");
