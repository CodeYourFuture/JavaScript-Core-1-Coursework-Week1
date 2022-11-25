var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
console.log(total);

var percentageOfStudents = numberOfStudents * 100 / total;
var roundOfStudent = Math.round(percentageOfStudents);
console.log(roundOfStudent+"%");

var percentageOfMentors = numberOfMentors * 100 / total;
var roundOfMentors = Math.round(percentageOfMentors);
console.log(roundOfMentors+"%");


