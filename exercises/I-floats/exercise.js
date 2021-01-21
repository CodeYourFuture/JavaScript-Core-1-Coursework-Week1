var numberOfStudents = 15;
var numberOfMentors = 8;

var sum = numberOfMentors + numberOfStudents;

var percentageOfStudents = Math.round(numberOfStudents / sum * 100);
var percentageOfMentors = Math.round(numberOfMentors / sum * 100);

console.log(percentageOfStudents+"%");
console.log(percentageOfMentors+"%");