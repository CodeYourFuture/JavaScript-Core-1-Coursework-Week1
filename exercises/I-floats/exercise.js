var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfMentors + numberOfStudents;

var percentageOfStudents = (numberOfStudents*100)/total;
var percentageOfMentors =(numberOfMentors*100)/total;

console.log(`Precentage students : ${Math.round(percentageOfStudents)}%`);
console.log(`Precentage mentors : ${Math.round(percentageOfMentors)}%`);
