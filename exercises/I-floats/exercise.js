let numberOfStudents = 15;
let numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;

let pStudens = Math.round(numberOfStudents * 100 / total);
let pMentor = Math.round(numberOfMentors * 100 / total);

console.log("Percentage students: " + pStudens + "%");
console.log("Percentage mentors: " + pMentor + "%");