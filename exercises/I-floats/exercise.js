var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;

var PercentageStudents =  numberOfStudents / sum ;
var PercentageMentors = numberOfMentors / sum;


console.log("Percentage students: " + Math.round(PercentageStudents*100) + "%")
console.log("Percentage mentors: " + Math.round(PercentageMentors*100) + "%")

