//this code console logs the number of students and mentors as well as the percentage total of each.
var numberOfStudents = 15;
var numberOfMentors = 8;

console.log("Number of students: " + numberOfStudents)
console.log("Number of mentors: " + numberOfMentors)
console.log("Percentage students: " + Math.round(((numberOfStudents / (numberOfStudents + numberOfMentors)) * 100))+"%");
console.log("Percentage mentors: " + Math.round(((numberOfMentors / (numberOfStudents + numberOfMentors)) * 100))+"%");
