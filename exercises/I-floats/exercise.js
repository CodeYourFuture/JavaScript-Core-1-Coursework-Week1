var numberOfStudents = 15;
var numberOfMentors = 8;
console.log("Percentage students: " + Math.round(numberOfStudents /(numberOfMentors + numberOfStudents) * 100) + "%");
console.log("Percentage mentors: " + Math.round(numberOfMentors / (numberOfMentors + numberOfStudents) * 100) + "%");