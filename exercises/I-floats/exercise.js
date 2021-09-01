var numberOfStudents = 15;
var numberOfMentors = 8;

console.log("Percentage of students: " + (Math.round(numberOfStudents * 100 / (numberOfStudents + numberOfMentors))) + '%');
console.log("Percentage of mentors: " + (Math.round(numberOfMentors * 100 / (numberOfStudents + numberOfMentors))) + '%');