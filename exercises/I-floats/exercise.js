const numberOfStudents = 15;
const numberOfMentors = 8;
const totalPeople = numberOfStudents+numberOfMentors;
console.log(
`Percentage students: ${Math.round(100*numberOfStudents/totalPeople)}%
Percentage mentors: ${Math.round(100*numberOfMentors/totalPeople)}%`
);