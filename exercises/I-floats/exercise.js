var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors ;

var percentageStudents =  15 / totalNumber * 100;
var percentageStudents = Math.round (percentageStudents);


var percentageMentors = 8 / totalNumber * 100;
var percentageMentors = Math.round (percentageMentors);

console.log(percentageStudents + "%");
console.log(percentageMentors +"%");