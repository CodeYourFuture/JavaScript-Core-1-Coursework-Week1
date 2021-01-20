var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var studentsPercentage = (numberOfStudents/total)*100;
var mentorsPercentage = (numberOfMentors/total)*100;

var studentsPercentageMessage = "Percentage of students: " + Math.round(studentsPercentage) + "%";
var mentorsPercentageMessage = "Percentage of mentors: " + Math.round(mentorsPercentage) + "%";


console.log(studentsPercentageMessage);
console.log(mentorsPercentageMessage);