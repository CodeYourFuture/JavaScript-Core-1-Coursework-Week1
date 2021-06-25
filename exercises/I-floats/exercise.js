const numberOfStudents = 29;
const numberOfMentors = 12;

const total = numberOfStudents + numberOfMentors ;

const pStudens = Math.round(numberOfStudents * 100 / total);
const pMentor = Math.round(numberOfMentors * 100 / total);

console.log("Percentage students: " + pStudens + "%");
console.log("Percentage mentors: " + pMentor + "%");