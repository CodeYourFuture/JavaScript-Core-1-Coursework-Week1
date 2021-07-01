var numberOfStudents = 15;
var numberOfMentors = 8;
var stPerc= Math.round(numberOfStudents/(numberOfMentors+numberOfStudents)*100);
var mtPerc= Math.round(numberOfMentors/(numberOfMentors+numberOfStudents)*100);

console.log("percentage students: " + stPerc +"%"); 
console.log("percentage mentors: " + mtPerc +"%"); 
