var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNumber = numberOfMentors + numberOfStudents;
let percentOfStudents = numberOfStudents * 100 / totalNumber; 
let percentOfMentors = numberOfMentors * 100 / totalNumber;

console.log(percentOfMentors);
console.log(percentOfStudents);

let roughPerSt = Math.round(percentOfStudents);
let roughPerMent= Math.round(percentOfMentors);
console.log(roughPerMent);
console.log(roughPerSt);