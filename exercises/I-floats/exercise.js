var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumbers = numberOfStudents + numberOfMentors;
let studentsPercentage = Math.round((numberOfStudents / totalNumbers) * 100);
let mentorsPercentage = Math.round((numberOfMentors / totalNumbers) * 100);

console.log(`Percentage students: ${studentsPercentage}%`); //65%
console.log(`Percentage mentors: ${mentorsPercentage}%`); // 35%
