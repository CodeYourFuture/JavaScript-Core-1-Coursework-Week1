var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var percent = 100 / total;

var numberOfStudentsPercent =  Math.round(percent * numberOfStudents);
var numberOfMentorsPercent =  Math.round(percent * numberOfMentors);

console.log("Number of students: " + numberOfStudentsPercent + "%")
console.log("Number of mentors: " + numberOfMentorsPercent + "%")
