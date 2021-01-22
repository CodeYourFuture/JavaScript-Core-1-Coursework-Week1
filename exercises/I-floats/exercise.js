var numberOfStudents = 15;
var numberOfMentors = 8;

var percentageStudents = Math.round(numberOfStudents*100/(numberOfStudents+numberOfMentors))
var percentageMentors = Math.round(numberOfMentors*100/(numberOfMentors+numberOfStudents))
// Percentage students: 65%
// Percentage mentors: 35%

console.log(`Percentage students: ${percentageStudents}%`)
console.log(`Percentage mentors: ${percentageMentors}%`)
