var numberOfStudents = 15;
var numberOfMentors = 8;
let percentageS = numberOfStudents / (numberOfStudents + numberOfMentors);
percentageS = percentageS * 100;
let percentageM = numberOfMentors / (numberOfMentors + numberOfStudents);
percentageM = percentageM * 100;
console.log("Percentage students: ", Math.round(percentageS),"%");
console.log("Percentage mentors: ", Math.round(percentageM),"%");