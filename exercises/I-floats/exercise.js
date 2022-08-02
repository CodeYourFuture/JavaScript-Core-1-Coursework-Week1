var numberOfStudents = 15;
var numberOfMentors = 8;

var total=numberOfMentors+numberOfStudents;

var studentsPercentage=Math.round( (numberOfStudents/total)*100);
var mentorsPercentage=Math.round( (numberOfMentors/total)*100);
console.log(`Percentage students: ${studentsPercentage} % 
          \n Percentage mentors: ${mentorsPercentage} % `);
