var numberOfStudents = 15;
var numberOfMentors = 8;


let totalNumofStudentsndMentors = numberOfMentors + numberOfStudents;

let studentsPercentage = Math.round(numberOfStudents / totalNumofStudentsndMentors* 100);
let mentorsPercentage = Math.round(numberOfMentors / totalNumofStudentsndMentors * 100);

console.log(`Percentage students: ${studentsPercentage}`);
console.log(`Percentage mentors: ${mentorsPercentage}`);
