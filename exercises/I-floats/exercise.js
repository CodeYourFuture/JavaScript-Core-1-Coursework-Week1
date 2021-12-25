var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let perStu = numberOfStudents / total * 100;
let perMen = numberOfMentors / total * 100;

console.log(`Percentage students: ${Math.round(perStu)}%`);
console.log(`Percentage mentors: ${Math.round(perMen)}%`);
