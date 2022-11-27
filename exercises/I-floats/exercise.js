var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var percentStudents = numberOfStudents / total * 100;
var percentMentors = numberOfMentors / total * 100;

var roundedPercentStudents = Math.round(percentStudents);
var roundedPercentMentors = Math.round(percentMentors);

console.log(`${roundedPercentStudents}%`);
console.log(`${roundedPercentMentors}%`);
