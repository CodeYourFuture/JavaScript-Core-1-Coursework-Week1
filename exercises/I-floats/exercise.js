let numberOfStudents = 15;
let numberOfMentors = 8;
let totalNum = 23;
let numberOfStudentsPercent = Math.round((numberOfStudents / totalNum) * 100);
let numberOfMentorsPercent = Math.round((numberOfMentors / totalNum) * 100);
let percentageOfStudents = "Percentage students:";
let percentageOfMentors = "Percentage mentors:"
console.log(`${percentageOfStudents} ${numberOfStudentsPercent}%`);
console.log(`${percentageOfMentors} ${numberOfMentorsPercent}%`);