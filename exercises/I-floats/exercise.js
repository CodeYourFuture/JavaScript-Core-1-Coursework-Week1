var numberOfStudents = 15;
var numberOfMentors = 8;

let perOfStudents = numberOfStudents / (numberOfStudents + numberOfMentors);
let perOfMentors = numberOfMentors / (numberOfMentors + numberOfStudents);

console.log(`Percentage students : ${Math.round(perOfStudents * 100)} %`);

console.log(`Percentage mentors : ${Math.round(perOfMentors * 100)} %`);
