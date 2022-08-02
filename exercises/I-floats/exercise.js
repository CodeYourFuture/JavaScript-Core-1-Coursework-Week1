var numberOfStudents = 15;
var numberOfMentors = 8;
var total= numberOfStudents+numberOfMentors;
var percentOfStudents= Math.round((numberOfStudents/total)*100) ;
var percentOfMentors= Math.round((numberOfMentors/total)*100) ;
console.log(`Percentage of students: ${percentOfStudents}%`);
console.log(`Percentage of Mentors: ${percentOfMentors}%`);