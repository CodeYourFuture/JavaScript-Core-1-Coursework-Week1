var numberOfStudents = 15;
var numberOfMentors = 8;

var totalNumber = numberOfStudents + numberOfMentors; // 23

//students
var percentageOfStudents = numberOfStudents / totalNumber * 100;
var studentsRoundUp = Math.round(percentageOfStudents);

//mentors
var percentageOfMentors = numberOfMentors / totalNumber * 100;
var mentorsRoundUp = Math.round (percentageOfMentors);


console.log("Percentage students: " + studentsRoundUp + "%");
console.log("Percentage mentors: " + mentorsRoundUp + "%");