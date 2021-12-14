var numberOfStudents = 15;
var numberOfMentors = 8;
const sum = numberOfStudents + numberOfMentors;
const studentsPercentage = (numberOfStudents / sum) * 100;
const mentorsPercentage = (numberOfMentors / sum) * 100;

const roughStudentsPercentage = Math.round(studentsPercentage);
const roughMentorsPercentage = Math.round(mentorsPercentage);

console.log(roughStudentsPercentage);
console.log(roughMentorsPercentage);