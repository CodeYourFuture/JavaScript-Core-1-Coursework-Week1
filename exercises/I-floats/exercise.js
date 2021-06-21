var numberOfStudents = 15;
var numberOfMentors = 8;

var totalNumber = numberOfMentors + numberOfStudents;

var studentPercentage = numberOfStudents / totalNumber * 100;
var mentorsPercentage = numberOfMentors / totalNumber * 100;

var roundedStudentPercentage = Math.round(studentPercentage);  
var roundedMentorsPercentage = Math.round(mentorsPercentage);

 console.log("Percentage student: " + roundedStudentPercentage + "%");
 console.log("Percentage mentors: " + roundedMentorsPercentage + "%");
