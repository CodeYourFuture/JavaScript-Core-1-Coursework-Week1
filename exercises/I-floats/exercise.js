let numberOfStudents = 30;
let numberOfMentors = 8;
let totalNumberOfStudentsMentors = numberOfStudents + numberOfMentors;
//Percentage of Students:
let percentageOfStudents = numberOfStudents * 100 / totalNumberOfStudentsMentors;
percentageOfStudents = Math.round(percentageOfStudents);
console.log("Percentage of Students: " + percentageOfStudents + " %")

//Percentage of Mentors:
let percentageOfMentors = numberOfMentors * 100 / totalNumberOfStudentsMentors;
percentageOfMentors = Math.round(percentageOfMentors);
console.log("Percentage of Mentors: " + percentageOfMentors + " %")