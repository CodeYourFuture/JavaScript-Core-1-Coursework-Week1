let numberOfStudents = 15;
let numberOfMentors = 8;

let total = numberOfStudents + numberOfMentors;

let studentsPercentage = numberOfStudents / total * 100;
let mentorsPercentage = numberOfMentors / total * 100;


console.log(`Percentage students: ${Math.round(studentsPercentage)}%`);
console.log(`Percentage mentors: ${Math.round(mentorsPercentage)}%`);