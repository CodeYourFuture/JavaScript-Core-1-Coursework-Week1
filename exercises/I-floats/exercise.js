var numberOfStudents = 15;
var numberOfMentors = 8;
let totalNumbers = numberOfStudents + numberOfMentors;

console.log("Percentage students: " + Math.round((numberOfStudents / totalNumbers) * 100) + "%");
console.log("Percentage Mentors: " + Math.round((numberOfMentors / totalNumbers) * 100) + "%");