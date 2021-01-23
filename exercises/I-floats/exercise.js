var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;

var PercentageStudents = Math.round((numberOfStudents/totalNumber) * 100);
var PercentageMentors =  Math.round((numberOfMentors/totalNumber) * 100);


console.log(`Percentage students: ${PercentageStudents}%`);
console.log(`Percentage mentors: ${PercentageMentors}%`);
