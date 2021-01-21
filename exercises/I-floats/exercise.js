var numberOfStudents = 15;
var numberOfMentors = 25;
var total = numberOfStudents + numberOfMentors;

var percentageOfStudents = Math.round((numberOfStudents / total) * 100);
var percentageOfMentors = Math.round((numberOfMentors / total) * 100);

console.log(`
Percentage of students: ${percentageOfStudents}%
Percentage of mentors: ${percentageOfMentors}%`);
