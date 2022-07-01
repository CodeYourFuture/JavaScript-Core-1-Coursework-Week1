var numberOfStudents = 15;
var numberOfMentors = 8;
let result = (65/100) * (numberOfStudents/1);
let prctg = result * 100;
let final = prctg/ numberOfStudents;

let rslt = (35/100) * (numberOfMentors/1);
let percentage = rslt * 100;
let fnl = percentage/ numberOfMentors;

console.log("Percentage students:" + final + "%");
console.log("Percentage mentors:" + Math.round(fnl) + "%");
