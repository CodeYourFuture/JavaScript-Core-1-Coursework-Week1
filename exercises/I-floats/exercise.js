var numberOfStudents = 15;
var student = "Percentage of Students";

var numberOfMentors = 8;
var mentors = "Percentage of Mentors";

var total = numberOfStudents + numberOfMentors;

var percentageOfStudents = numberOfStudents * 100 / total;
var percentageOfMentors = numberOfMentors *100 / total;

var roundNumberStudent = Math.round(percentageOfStudents)
var roundNumberMentors = Math.round(percentageOfMentors)

console.log(`${student} ${roundNumberStudent}%`);
console.log(`${mentors} ${roundNumberMentors}%`)



