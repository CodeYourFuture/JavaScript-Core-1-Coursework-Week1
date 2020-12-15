var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var convertStudent = numberOfStudents/total*100;
var convertMentors = numberOfMentors/total*100;

var percentageOfStudents = Math.round(convertStudent);
var percentageOfMentors = Math.round(convertMentors);

console.log(`Student percentage: ${percentageOfStudents}%`);
console.log(`Student percentage: ${percentageOfMentors}%`);



