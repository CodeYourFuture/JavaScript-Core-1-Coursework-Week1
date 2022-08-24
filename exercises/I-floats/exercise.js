var numberOfStudents = 15;
var numberOfMentors = 8;

var percentStudents = numberOfStudents / (numberOfStudents + numberOfMentors);
var percentMentors = numberOfMentors / (numberOfMentors + numberOfStudents);

console.log("Percentage students: " + Math.round(percentStudents*100));
console.log("Percentage mentors: " + Math.round(percentMentors*100));
