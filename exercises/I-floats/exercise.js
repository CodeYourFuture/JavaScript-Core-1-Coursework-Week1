var numberOfStudents = 15;
var numberOfMentors = 8;
var sumNumber = numberOfStudents + numberOfMentors;
let percentageStudents = Math.round((numberOfStudents / sumNumber) * 100);

console.log("Percentage student:"  + percentageStudents + "%");
 
let percentageMentors = Math.round((numberOfMentors / sumNumber) * 100);
console.log("Percentage mentors:" + percentageMentors + "%");