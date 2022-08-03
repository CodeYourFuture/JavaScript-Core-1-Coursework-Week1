var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors ;

var percentageStudents = numberOfStudents / total * 100;

var percentageMentors = numberOfMentors / total * 100;

var percentStudents = "Percentage students: " + Math.round(percentageStudents) + "%";
var percentMentors = "Percentage mentors: " + Math.round(percentageMentors) + "%";


console.log(percentStudents);
console.log(percentMentors);


