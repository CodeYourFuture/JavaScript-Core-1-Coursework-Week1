var numberOfStudents = 15;
var numberOfMentors = 8;
let totalPeople = numberOfStudents+numberOfMentors;
console.log(
`Percentage students: ${Math.round(100*numberOfStudents/totalPeople)}%
Percentage mentors: ${Math.round(100*numberOfMentors/totalPeople)}%`
);