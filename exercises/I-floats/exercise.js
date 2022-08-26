

var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

// console.log(total)



var PercentageStudents = numberOfStudents / total;
var PercentageMentors = numberOfMentors / total;


var StudentsRound = Math.round(PercentageStudents * 100);
var MentorssRound = Math.round(PercentageMentors * 100);


console.log('Percentage students: ' + StudentsRound);
console.log('Percentage Mentors: ' + MentorssRound);


// // Percentage students: 65%
// // Percentage mentors: 35%
// // ```