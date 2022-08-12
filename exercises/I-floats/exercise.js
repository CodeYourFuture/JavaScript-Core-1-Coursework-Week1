var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var percentageOfStudents = numberOfStudents / total * 100;
var percentageOfMentors = numberOfMentors / total * 100;

console.log(`Percentage of students: ${Math.round(percentageOfStudents)}%`);
console.log(`Percentage of mentors: ${Math.round(percentageOfMentors)}` + "%");
