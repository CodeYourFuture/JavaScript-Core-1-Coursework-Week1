var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
var PercentageS = Math.round(numberOfStudents/sum *100);
var PercentageM = Math.round(numberOfMentors/sum *100);

console.log(`Percentage students: ${PercentageS}`);
console.log(`Percentage mentors: ${ PercentageM }`);