var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var percentStudents = (numberOfStudents/total) * 100;
var percentRStudents = Math.round(percentStudents);

var percentMentors = (numberOfMentors/total) * 100;
var percentRMentors = Math.round(percentMentors);

console.log(percentRStudents);
console.log(percentRMentors);