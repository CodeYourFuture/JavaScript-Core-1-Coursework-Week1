var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNum = numberOfMentors + numberOfStudents;
var percentageStud = Math.round(numberOfStudents/totalNum*100);
var percentageMent = Math.round((numberOfMentors / totalNum) * 100);

console.log("Student percentage: " + percentageStud + "%");

console.log("Mentor percentage: " + percentageMent + "%");