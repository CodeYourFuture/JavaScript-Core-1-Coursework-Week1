var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageStudent = (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100
var perecentageMentors = (numberOfMentors / (numberOfStudents + numberOfMentors))*100
var roughPercentageStudent = Math.round(percentageStudent);
var roughPerecentageMentors = Math.round(perecentageMentors);
console.log("Perecentage student:", roughPercentageStudent, "%");
console.log("Percentage mentors:", roughPerecentageMentors, "%");