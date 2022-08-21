const numberOfStudents = 15;
const numberOfMentors = 8;

const total = numberOfMentors + numberOfStudents;
const precentageOfstudents = Math.round((numberOfStudents * 100) / total) + "%";
console.log("precentageOfstudents:", precentageOfstudents);
const precentageOfMentors = Math.round((numberOfMentors * 100) / total) + "%";
console.log("precentageOfMentors:", precentageOfMentors);
