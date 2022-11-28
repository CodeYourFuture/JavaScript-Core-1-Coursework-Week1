var numberOfStudents = 15;
var numberOfMentors = 8;


let total = numberOfStudents + numberOfMentors;

let percentageOfStudents = (numberOfStudents / total) * 100;
console.log(`Percentage students: ${Math.round(percentageOfStudents)}%`);

let percentageOfMentors = (numberOfMentors / total) * 100;
console.log(`Percentage mentors: ${Math.round(percentageOfMentors)}%`);