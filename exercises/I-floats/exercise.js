var numberOfStudents = 15;
var numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;
const students = Math.round(numberOfStudents/total*100); 
const mentors = Math.round(numberOfMentors/total*100);

console.log(`Percentage students: ${students}% \nPercentage mentors: ${mentors}%`)

