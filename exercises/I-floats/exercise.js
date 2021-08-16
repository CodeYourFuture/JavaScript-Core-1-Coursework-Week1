var numberOfStudents = 15;
var numberOfMentors = 8;
let sum = numberOfMentors + numberOfStudents;
let pStudents = Math.round((numberOfStudents/sum)*100);
let pMentors = Math.round((numberOfMentors/sum)*100);

console.log(`Percentage of Students: ${pStudents}%`);
console.log(`Percentage of Mentors: ${pMentors}%`);
