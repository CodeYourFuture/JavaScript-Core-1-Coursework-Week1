var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfMentors + numberOfStudents;
console.log("T " + total)
var percentage = (numberOfStudents / total) * 100;
var percentageRound = Math.round(percentage); // 30

console.log("Percentage Students :" + percentageRound);
console.log("Percentage Mentors :" + ( 100 - percentageRound));


