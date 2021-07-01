var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfMentors + numberOfStudents;
var studentsPercentage = Math.round((numberOfStudents / sum) * 100);
var mentorsPercentage = Math.round((numberOfMentors / sum) * 100);
var str = `Percentage students: ${studentsPercentage}%
Percentage mentors: ${mentorsPercentage}%`;
console.log(str);