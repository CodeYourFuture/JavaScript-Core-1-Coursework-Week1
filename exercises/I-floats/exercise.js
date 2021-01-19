var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
var percentageOfMentors = Math.round(numberOfMentors / total * 100);
var percentageOfStudents = Math.round(numberOfStudents / total * 100);

console.log("Percentage of the Students: " + percentageOfStudents + "%");
console.log("Percentage of the Mentors: " + percentageOfMentors + "%");


