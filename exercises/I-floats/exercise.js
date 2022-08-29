var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageStudents = (numberOfStudents / (numberOfStudents + numberOfMentors)) *100;
var roundedPercentStudents = Math.round(percentageStudents);
var percentageMentors = (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;
var roundedPercentMentors = Math.round(percentageMentors);
console.log("Percentage students: " + roundedPercentStudents + "%");
console.log("Percentage mentors: " + roundedPercentMentors + "%");