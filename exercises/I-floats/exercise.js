var numberOfStudents = 15;
var numberOfMentors = 8;

var studentsPercent = numberOfStudents/(numberOfStudents + numberOfMentors)*100;
var mentorsPercent = numberOfMentors/(numberOfStudents + numberOfMentors)*100;
studentsPercent = Math.round(studentsPercent);
mentorsPercent = Math.round(mentorsPercent);

console.log ("Percentage of students: " + studentsPercent + "%");
console.log ("Percentage of mentors: " + mentorsPercent + "%");
