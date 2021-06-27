var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var percentageStudents = Math.round((numberOfStudents / total) * 100);
var percentageMentors = Math.round((numberOfMentors / total) * 100);

console.log(`Percentage students: ${percentageStudents}%`);
console.log(`Percentage mentors: ${percentageMentors}%`);
