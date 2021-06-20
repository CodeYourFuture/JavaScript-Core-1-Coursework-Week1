const numberOfStudents = 15;
const numberOfMentors = 8;
const studentsPercentage = Math.round(100 *(numberOfStudents / (numberOfStudents + numberOfMentors)));
const mentorsPercentage = Math.round(100 *
  (numberOfMentors / (numberOfStudents + numberOfMentors)));

const message = `Percentage students: ${studentsPercentage}%
Percentage mentors: ${mentorsPercentage}%`;

const message2 = `Percentage students: ${Math.round(
  100 * (numberOfStudents / (numberOfStudents + numberOfMentors))
)}%
Percentage mentors: ${Math.round(
  100 * (numberOfMentors / (numberOfStudents + numberOfMentors))
)}%`;

console.log(message);
console.log(message2);
