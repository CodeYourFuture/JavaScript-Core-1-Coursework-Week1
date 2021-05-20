var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var studentPercentage = (numberOfStudents / total) * 100;
var roundedStudentPercent = Math.round(studentPercentage);
var mentorPercentage = (numberOfMentors / total) * 100;
var roundedMentorPercent = Math.round(mentorPercentage);
console.log("The percentage of students is: " + roundedStudentPercent);
console.log("The percentage of mentors is: " + roundedMentorPercent);
