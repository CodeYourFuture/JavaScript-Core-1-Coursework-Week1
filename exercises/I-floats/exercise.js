var numberOfStudents = 15;
var numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;

let percentageOfStudents = numberOfStudents / totalNumber *100;
let percentageOfMentors = numberOfMentors / totalNumber *100;

console.log(`Percentage students: ${Math.round(percentageOfStudents)}%`)
console.log(`Percentage mentors: ${Math.round(percentageOfMentors)}%`)


