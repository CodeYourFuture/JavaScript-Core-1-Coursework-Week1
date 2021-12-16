var numberOfStudents = 15;
var numberOfMentors = 8;

var percentageOfStudent = numberOfStudents / (numberOfStudents + numberOfMentors) * 100;
var studentMessage = "Percentage students: " + Math.round(percentageOfStudent) + "%";
console.log(studentMessage);

var percentageOfMentor = numberOfMentors / (numberOfStudents + numberOfMentors) * 100;
var mentorMessage = "Percentage mentor: " + Math.round(percentageOfMentor) + "%";
console.log(mentorMessage);
