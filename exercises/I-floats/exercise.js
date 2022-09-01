var numberOfStudents = 15;
var numberOfMentors = 8;
var precentageOfStudents = (numberOfStudents / (numberOfStudents + numberOfMentors))*100;
var precentageOfMentors = (numberOfMentors / (numberOfStudents + numberOfMentors))*100;
console.log(Math.round(precentageOfStudents));
console.log(Math.round (precentageOfMentors));
