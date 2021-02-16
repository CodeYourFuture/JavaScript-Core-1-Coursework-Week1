var numberOfStudents = 15;
var numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;
var percentageOfStudents = (numberOfStudents / total) * 100;
var percentageOfMentors = (numberOfMentors / total) * 100;
var roundedPercentageOfStudents = Math.floor(percentageOfStudents);
var roundedPercentageOfMentors = Math.floor(percentageOfMentors);
console.log(`PercentageOfStudents: ${roundedPercentageOfStudents}%`);
console.log(`PercentageOfMentors: ${roundedPercentageOfMentors}%`);