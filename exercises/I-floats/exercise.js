var numberOfStudents = 15;
var numberOfMentors = 8;
var total=numberOfStudents+numberOfMentors;
var percentage=(numberOfStudents/total)*100;
console.log("Percentage students: "+ Math.round(percentage)+"%");
percentage=(numberOfMentors/total)*100;
console.log("Percentage Mentors: "+Math.round(percentage)+"%");