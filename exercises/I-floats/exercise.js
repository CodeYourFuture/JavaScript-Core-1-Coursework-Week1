var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

// get percentage of students and mentors
var convertStudents =  numberOfStudents / total * 100;
var convertMentors =  numberOfMentors / total * 100;

// round the figues to a whole number
var percentageOfStudents = Math.round(convertStudents);
var percentageOfMentors = Math.round(convertMentors);

console.log(`Percentage students: ${percentageOfStudents}%`);
console.log(`Percentage students: ${percentageOfMentors}%`);

