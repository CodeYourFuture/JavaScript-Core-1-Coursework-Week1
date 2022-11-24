var numberOfStudents = 15;
var numberOfMentors = 8;
total=numberOfStudents+numberOfMentors;
console.log(`the total of number of people = ${total}`);
let percentageOfStudents= numberOfStudents*100/total;
let percentageOfMentors=(numberOfMentors*100)/total;
console.log(`The Percentage of students = ` , Math.round( percentageOfStudents)+"%");
console.log(`The Percentage of mentors = ` , Math.round( percentageOfMentors)+`%`);


