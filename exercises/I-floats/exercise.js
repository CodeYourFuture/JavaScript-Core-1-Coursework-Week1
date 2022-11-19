var numberOfStudents = 15;
var numberOfMentors = 8;

var sum = numberOfStudents + numberOfMentors;

var studentPercent = Math.round((numberOfStudents/sum) * 100);
var mentorPercent = Math.round((numberOfMentors / sum) * 100);

console.log(`Percentage students: ${studentPercent}%`);
console.log(`Percentage mentors: ${mentorPercent}%`);


