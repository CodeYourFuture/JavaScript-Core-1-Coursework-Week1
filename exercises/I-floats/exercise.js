var numberOfStudents = 15;
var numberOfMentors = 8;
var studentPec =
  (numberOfStudents / (numberOfMentors + numberOfStudents)) * 100;

var mentorPec = (numberOfMentors / (numberOfMentors + numberOfStudents)) * 100;
console.log("Percentage of students: " + Math.round(studentPec)) + "%";
console.log("Percentage of mentors: " + Math.round(mentorPec)) + "%";
