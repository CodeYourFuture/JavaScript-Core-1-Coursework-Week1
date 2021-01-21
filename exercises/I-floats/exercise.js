var numberOfStudents = 15;
var numberOfMentors = 8;

var totNum = numberOfMentors + numberOfStudents;
var numStudentPerc = numberOfStudents / totNum * 100;
var studentPercRound = Math.round(numStudentPerc);
var numMentorPerc = numberOfMentors / totNum * 100;
var mentorPercRound = Math.round(numMentorPerc);
console.log("The Percentage of Mentors is: ", mentorPercRound);
console.log("The percentage of Students is: ",studentPercRound);
