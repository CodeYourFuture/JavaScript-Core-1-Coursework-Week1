const numberOfStudents = 15;
const numberOfMentors = 8;
const totalNumber = numberOfStudents + numberOfMentors;

const studentsFloat = (numberOfStudents / totalNumber) * 100;
const studentsPercentage = Math.round(studentsFloat);
const studentsMessage = `Percentage students: ${studentsPercentage}%`;

const mentorsFloat = (numberOfMentors / totalNumber) * 100;
const mentorsPercentage = Math.round(mentorsFloat);
const mentorsMessage = `Percentage mentors: ${mentorsPercentage}$`;

console.log(studentsMessage);
console.log(mentorsMessage);