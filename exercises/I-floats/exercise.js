var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNumber = numberOfStudents + numberOfMentors;
let percOfStudents = (numberOfStudents / totalNumber) * 100;
let percOfMentors = (numberOfMentors / totalNumber) * 100;

percOfStudents = Math.round(percOfStudents);
percOfMentors = Math.round(percOfMentors);

console.log(`Percentage students: ${percOfStudents}%`);
console.log(`Percentage mentors: ${percOfMentors}%`);