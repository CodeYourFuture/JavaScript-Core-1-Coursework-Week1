var numberOfStudents = 15;
var numberOfMentors = 8;

let perOfStudents = (100 / (numberOfStudents + numberOfMentors)) * 15;
let perOfMentors = (100 / (numberOfStudents + numberOfMentors)) * 8;
perOfStudents = Math.round(perOfStudents);
perOfMentors = Math.round(perOfMentors);
console.log("Percentage students: " + perOfStudents + "%");
console.log("Percentage mentors: " + perOfMentors + "%");
