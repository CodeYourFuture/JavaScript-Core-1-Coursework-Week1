// Declare and initialise variables
var numberOfStudents = 15;
var numberOfMentors = 8;
var numberOfParticipants = numberOfStudents + numberOfMentors;
var percentageOfStudents = Math.round(numberOfStudents / numberOfParticipants * 100);
var percentageOfMentors = Math.round(numberOfMentors / numberOfParticipants * 100);
// Output
console.log("Percentage of students: " + percentageOfStudents + "%");
console.log("Percentage of mentors: " + percentageOfMentors + "%");

