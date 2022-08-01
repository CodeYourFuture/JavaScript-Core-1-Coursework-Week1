let numberOfStudents = 15;
let numberOfMentors = 8;

let total = numberOfStudents + numberOfMentors;

percent = 100 / total;

let numberOfStudentsPercent =  Math.round(percent * numberOfStudents);
let numberOfMentorsPercent =  Math.round(percent * numberOfMentors);

console.log("Number of students: " + numberOfStudentsPercent + "%")
console.log("Number of mentors: " + numberOfMentorsPercent + "%")
