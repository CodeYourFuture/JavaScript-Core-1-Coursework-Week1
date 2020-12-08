var numberOfStudents = 15;
var numberOfMentors = 8;
var percentage_1 = numberOfStudents / (numberOfStudents + numberOfMentors)*100;
var percentage_2 = numberOfMentors / (numberOfStudents + numberOfMentors)*100;
console.log("Percentage students:" + " " + Math.round(percentage_1) + "%");
console.log("Percentage mentors:" + " " + Math.round(percentage_2) + "%");
