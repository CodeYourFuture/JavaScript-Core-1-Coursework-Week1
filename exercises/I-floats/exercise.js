var numberOfStudents = 15;
var numberOfMentors = 8;
var total =  numberOfStudents + numberOfMentors;
var pOfStudents = Math.round((numberOfStudents/total)*100);
var pOfMentors = Math.round((numberOfMentors/total)*100);
console.log(`Percentage of students: ${pOfStudents}%`);
console.log(`Percentage of mentors: ${pOfMentors}%`);
