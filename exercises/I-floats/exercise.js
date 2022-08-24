var numberOfStudents = 15;
var numberOfMentors = 8;

var result=numberOfMentors+numberOfStudents;

console.log("Total people in the class "+ result)

var percentageStudents=(numberOfStudents/result)*100;
var percentageMentors=(numberOfMentors/result)*100;

console.log("Percentage of mentors: " +percentageMentors)
console.log("Rounded percentage of mentors: " + Math.round(percentageMentors))
console.log("Percentage of students: " + percentageStudents)
console.log("Rounded percentage of students: " + Math.round(percentageStudents))