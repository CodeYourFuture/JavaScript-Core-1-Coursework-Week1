var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;

const percentageOfStudents = Math.round((100 * numberOfStudents) / totalNumber);
const percentageOfMentors = Math.round((100 * numberOfMentors) / totalNumber);

console.log("Percentage Students:", percentageOfStudents, "%");
console.log("Percentage Mentors:", percentageOfMentors, "%");
