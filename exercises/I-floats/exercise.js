var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var percentStudent = numberOfStudents / total * 100;
var percentMentor = numberOfMentors / total * 100;

var studentRound = Math.round(percentStudent);
var mentorRound = Math.round(percentMentor);

var message = "Percentage students: " + studentRound + "%" + "\nPecentage mentors: " + mentorRound +"%";
console.log(message);