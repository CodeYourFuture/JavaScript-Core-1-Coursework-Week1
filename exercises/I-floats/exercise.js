var numberOfStudents = 15;
var numberOfMentors = 8;
console.log("Percentage students: "+ Math.round((numberOfStudents*100)/(numberOfMentors+numberOfStudents))+"%");
console.log("Percentage mentors: "+ Math.round((numberOfMentors*100)/(numberOfMentors+numberOfStudents))+"%");