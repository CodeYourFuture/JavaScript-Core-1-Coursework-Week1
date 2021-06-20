var numberOfStudents = 15;
var numberOfMentors = 8;
const totalNumber = numberOfStudents + numberOfMentors;
const studentsPercentage = (numberOfStudents / totalNumber) * 100;
const studentsTotal = Math.round(studentsPercentage);
const mentorsPercentage = (numberOfMentors / totalNumber) * 100;
const mentorsTotal = Math.round(mentorsPercentage);
console.log(`Percentage students: ${studentsTotal}%`);
console.log(`Percentage mentors: ${mentorsTotal}%`);