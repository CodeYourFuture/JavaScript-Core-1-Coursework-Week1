let numberOfStudents = 15;
let numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
let percentOfStudents = (numberOfStudents * 100) / total;
let roundPercentStudents = Math.round(percentOfStudents);
let percentOfMentors = (numberOfMentors * 100) / total;
let roundPercentMentors = Math.round(percentOfMentors);

console.log(roundPercentStudents);

console.log(roundPercentMentors);
