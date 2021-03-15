var numberOfStudents = 15;
var numberOfMentors = 8;

var totalGroup = numberOfMentors + numberOfStudents;

var percentageStuds = (numberOfStudents / totalGroup) * 100;
var percentageMents = (numberOfMentors / totalGroup) * 100;

console.log(
  "The percentage of Students are " + Math.round(percentageStuds) + "%"
);
console.log(
  "The percentage of Mentors are " + Math.round(percentageMents) + "%"
);
