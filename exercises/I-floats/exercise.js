let numberOfStudents = 15;
let numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
const pOfStudents = Math.round((numberOfStudents / total) * 100);
const pOfMentors = Math.round((numberOfMentors / total) * 100);
console.log(`Number of Students: ${numberOfStudents}`);
console.log(`Number of Mentors: ${numberOfMentors}`);
console.log(`percentage of students ${pOfStudents}%`);
console.log(`percentage of mentors ${pOfMentors}%`);
