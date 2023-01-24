var numberOfStudents = 15;
var numberOfMentors = 8;

var numberOfStudentsAndMentors = numberOfStudents + numberOfStudents;
var percentageOfStudents = numberOfStudents / numberOfStudentsAndMentors * 100;
var percentageOfMentors = numberOfMentors / numberOfStudentsAndMentors * 100;

console.log(`Percentage of students: ${Math.round(percentageOfStudents)}` + "%");
console.log(`Percentage of mentors: ${Math.round(percentageOfMentors)}` + "%");