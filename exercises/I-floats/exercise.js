var numberOfStudents = 15;
var numberOfMentors = 8;
var total= numberOfStudents/(numberOfStudents+numberOfMentors)

var percStudents = Math.round(total*100); 
console.log("Percentage students: " + percStudents + "%");
console.log("Percentage mentors: " + (100-percStudents) + "%");