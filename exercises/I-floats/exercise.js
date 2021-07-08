
let numberOfStudents = 15;
let numberOfMentors = 8;

//Some test
let preciseAge = 30.612437;
//get that number rounded using Math.round
let roughAge = Math.round(preciseAge);
//log
//console.log(roughAge); //31

//lets sum both values Student and Mentors
let totalAmount = numberOfMentors+numberOfStudents;
//Divide - multiply and round
let percentageValue = Math.round((numberOfStudents/totalAmount)*100);
//log for students
console.log("Percentage students "+percentageValue+"%");

//Divide - multiply and round
percentageValue = Math.round((numberOfMentors/totalAmount)*100);
//log for metors
console.log("Percentage mentors "+percentageValue+"%");