var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;

var percentageStudents = (numberOfStudents / sum) * 100;
var students = Math.round(percentageStudents);

var percentageMentors = (numberOfMentors / sum) * 100;
var mentors = Math.round(percentageMentors);


console.log(`Percentage students: ${students}%`);
console.log(`Percentage mentors: ${mentors}%`);

