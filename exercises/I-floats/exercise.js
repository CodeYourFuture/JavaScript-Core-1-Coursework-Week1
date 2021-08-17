var numberOfStudents = 15;
var numberOfMentors = 8;

var percentageOfStudents = (numberOfStudents * 100) / (numberOfStudents + numberOfMentors);
var percentageOfMentors =
  (numberOfMentors * 100) / (numberOfStudents + numberOfMentors);

console.log( "Percantage students: " +
    Math.round(percentageOfStudents) 
    + "%" );
console.log( "Percentage mentors: " +
    Math.round(percentageOfMentors)
    + "%" );