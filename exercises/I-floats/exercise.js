var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNumber = numberOfMentors + numberOfStudents;

let percentOfStudents = numberOfStudents * 100 / totalNumber; 
let percentOfMentors = numberOfMentors * 100 / totalNumber;



let roughPerSt = Math.round(percentOfStudents);
let roughPerMent= Math.round(percentOfMentors);
console.log("Percentage students: " + roughPerMent + "%");
console.log("Percentage mentors: " + roughPerSt + "%");