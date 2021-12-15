
// ## Exercise

// - Using the variables provided in the exercise calculate the percentage of mentors and students in the group

// ## Expected result


// Percentage students: 65%
// Percentage mentors: 35%




var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfMentors + numberOfStudents;

var studentsPercentage = Math.round((numberOfStudents/total)*100);
var mentorsPercentage = Math.round((numberOfMentors/total)*100);

console.log("Percentage students: " + studentsPercentage + "%");
console.log("Percentage mentors: " + mentorsPercentage + "%");
