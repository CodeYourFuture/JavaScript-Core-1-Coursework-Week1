let numberOfStudents = 15;
let numberOfMentors = 8;
let sum = numberOfStudents+numberOfMentors;

let studentPercentage = (numberOfStudents/sum)*100;
let MentorsPercentage = (numberOfMentors/sum)*100;

console.log("The percentage of student is " + Math.round(studentPercentage)+"%");
console.log("The percentage of mentor is " + Math.round(MentorsPercentage)+"%");


