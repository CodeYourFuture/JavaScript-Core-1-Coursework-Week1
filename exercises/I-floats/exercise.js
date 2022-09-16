var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
var percentageOfStudents = Math.round((numberOfStudents/total)*100);
var percentageOfMentors = Math.round((numberOfMentors/total)*100);
console.log(`Percentage of mentors : ${percentageOfMentors}%`)
console.log(`Percentage if students : ${percentageOfStudents}%`)
