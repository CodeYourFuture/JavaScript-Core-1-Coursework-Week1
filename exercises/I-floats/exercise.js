var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfMentors + numberOfStudents;

var studentsPercentage = (numberOfStudents / sum) * 100;
var mentorsPercentage = (numberOfMentors / sum) * 100;

console.log(`Percentage students:${Math.round(studentsPercentage)}%`);
console.log(`Percentage mentors: ${Math.round(mentorsPercentage)}%`);
