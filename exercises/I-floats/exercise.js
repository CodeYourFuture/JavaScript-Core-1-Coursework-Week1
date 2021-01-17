var numberOfStudents = 15;
var numberOfMentors = 8;
var totalStudentsAndMentors = numberOfMentors + numberOfStudents;
var percentageStudents = Math.round(numberOfStudents * 100 / totalStudentsAndMentors);
var percentageMentors = Math.round(numberOfMentors * 100 / totalStudentsAndMentors);

console.log(`Percentage students: ${percentageStudents}%
Percentage mentors: ${percentageMentors}%`);

