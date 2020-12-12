var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var convertStudents =  numberOfStudents / total * 100;
var convertMentors =  numberOfMentors / total * 100;
var percentageOfStudents = Math.round(convertStudents);
var percentageOfMentors = Math.round(convertMentors);

console.log(`Percentage students: ${percentageOfStudents}%`);
console.log(`Percentage students: ${percentageOfMentors}%`);