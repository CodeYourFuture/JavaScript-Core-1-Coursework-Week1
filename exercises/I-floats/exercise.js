var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageOfStudents = Math.round((numberOfStudents*100)/ (numberOfMentors + numberOfStudents));
var percentageOfMentors = Math.round(numberOfMentors*100/ (numberOfMentors + numberOfStudents));
console.log(percentageOfMentors);
console.log(percentageOfStudents);