var numberOfStudents = 15;
var numberOfMentors = 8;


var totalNumber = numberOfStudents + numberOfMentors;

var studentPrecentage = (numberOfStudents / totalNumber)* 100;
studentPrecentage = Math.round(studentPrecentage);

var mentorPrecentage = (numberOfMentors / totalNumber)* 100;
mentorPrecentage = Math.round(mentorPrecentage);

console.log("Percentage students: " + studentPrecentage + "%");
console.log("Percentage mentors: " + mentorPrecentage + "%");
