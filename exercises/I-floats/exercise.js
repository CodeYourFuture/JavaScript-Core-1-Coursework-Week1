const numberOfStudents = 15;
const numberOfMentors = 8; 

console.log("Percentage students: " + Math.round(numberOfStudents/(numberOfStudents + numberOfMentors)*100)+"%");
console.log("Percentage mentors: " + Math.round(numberOfMentors/(numberOfStudents + numberOfMentors)*100)+"%");