var numberOfStudents = 15;
var numberOfMentors = 8;

// Total amount of students and mentors
let total = numberOfStudents + numberOfMentors; //23

// Actual age of students and mentors
let percentOfStudents = numberOfStudents / total * 100;
let percentOfMentors = numberOfMentors / total * 100;

// Approx age of students and mentors
let roughAgeOfStudents = Math.round(percentOfStudents);
let roughAgeOfMentors = Math.round(percentOfMentors);

console.log(`Percentage students: ${roughAgeOfStudents}%`);
console.log(`Percentage mentors: ${roughAgeOfMentors}%`);

