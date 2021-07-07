var numberOfStudents = 15;
var numberOfMentors = 8;
var percentageOfStudents = Math.round(
    (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100
);
var percentageOfMentors = Math.round(
    (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100
);
console.log(`Percentage students: ${percentageOfStudents}%`);
console.log(`Percentage Mentors: ${percentageOfMentors}%`);