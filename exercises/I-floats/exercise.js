var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;
var percentageStudents = (numberOfStudents / total) * 100;
var percentageMentors = (numberOfMentors / total) * 100;

console.log(`Percentage of Students: ${Math.round(percentageStudents)}%`);

console.log(`Percentage of Mentors: ${Math.round(percentageMentors)}% `);
