var numberOfStudents = 15;
var numberOfMentors = 8;
let studentPerc = Math.floor(numberOfMentors / numberOfStudents*100);
let mentorPerc = Math.abs(Math.floor(studentPerc-100));

console.log("Percent of student :"+" "+studentPerc+"%");
console.log("Percent of mentor :" + " " + mentorPerc + "%");