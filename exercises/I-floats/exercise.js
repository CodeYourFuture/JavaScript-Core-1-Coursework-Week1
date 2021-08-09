var numberOfStudents = 15;
var numberOfMentors = 8;
const totalNum = numberOfMentors + numberOfStudents;

const pStudents = Math.round((numberOfStudents/ totalNum)* 100); 
const pMentors = Math.round((numberOfMentors/ totalNum)* 100); 

console.log(`Percentage students ${pStudents}%`);
console.log(`Percentage mentors ${pMentors}%`);