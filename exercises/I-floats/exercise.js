var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;
var percentageStudents = Math.round((numberOfStudents / total) * 100);
var percentageMentors = Math.round((numberOfMentors / total) * 100);
var message = 'Percentage students: ' + percentageStudents + '%';
var message2 = 'Percentage mentors: ' + percentageMentors + '%';

console.log(message);
console.log(message2);
