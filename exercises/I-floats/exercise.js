var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let studentPercentage = Math.round((numberOfStudents / total) * 100);
let mentorPercentage = Math.round((numberOfMentors / total) * 100);
console.log(studentPercentage + "%");
console.log(mentorPercentage + "%");
