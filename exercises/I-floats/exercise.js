// * Using the variables provided in the exercise calculate the percentage of mentors and students in the group

// ## Expected result

//     ```
// Percentage students: 65%
// Percentage mentors: 35%
// ```




var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

var percentageOfStudents = Math.round((numberOfStudents / total) * 100);
var sentenceOne = `Percentage students: ${percentageOfStudents}%`
var percentageOfMentors = Math.round((numberOfMentors / total) * 100);
var sentenceTwo = `Percentage mentors: ${percentageOfMentors}%`
console.log(sentenceOne);
console.log(sentenceTwo);
