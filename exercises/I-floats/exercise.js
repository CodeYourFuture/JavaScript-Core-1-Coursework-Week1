var numberOfStudents = 15;
var numberOfMentors = 8;

// get percentage of students and mentors
var convertStudents = numberOfStudents + numberOfStudents * 0.15;
var convertMentors = numberOfMentors + numberOfMentors * 0.08;

// round the figues to a whole number
var percentageOfStudents = Math.round(convertStudents);
var percentageOfMentors = Math.round(convertMentors);

console.log(`Percentage students: ${percentageOfStudents}%`);
console.log(`Percentage students: ${percentageOfMentors}%`);

