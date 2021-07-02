let numberOfStudents = 15;
let numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;

let percentageOfStudents = (numberOfStudents / totalNumber) * 100;
percentageOfStudents = Math.round(percentageOfStudents);
let percentageOfMentors = (numberOfMentors / totalNumber) * 100;

console.log("Percentage students: " + percentageOfStudents + "%");
console.log("Percentage mentors: " + Math.round(percentageOfMentors) + "%");
