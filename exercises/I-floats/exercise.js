var numberOfStudents = 15;
var numberOfMentors = 8;
const sum = numberOfStudents + numberOfMentors;

const perOfStudents = (numberOfStudents / sum) * 100;
const perOfMentors = (numberOfMentors / sum) * 100;

const roundedPerOfStudents = Math.round(perOfStudents);
const roundedPerOfMentors = Math.round(perOfMentors);



console.log("Percentage students: " + roundedPerOfStudents + "%");
console.log("Percentage mentors: " + roundedPerOfMentors + "%");



