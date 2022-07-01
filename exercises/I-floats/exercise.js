var numberOfStudents = 15;
var numberOfMentors = 8;
var numberOfBoth = numberOfStudents + numberOfMentors;

var percentageOfStudents = (numberOfStudents / numberOfBoth)* 100;
var percentageOfMentors = (numberOfMentors / numberOfBoth)* 100;

var percentageRoundStudents =  Math.round(percentageOfStudents);
var percentageRoundMentors =  Math.round(percentageOfMentors);
var messageStudents = "Percentage students: " + percentageRoundStudents +"%";
var messageMentors = "Percentage mentors: " + percentageRoundMentors +"%";

console.log(messageStudents);
console.log(messageMentors);

