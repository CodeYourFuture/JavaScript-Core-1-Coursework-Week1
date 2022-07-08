// Start by creating a variables `numberOfStudents` and `numberOfMentors`
let numberOfStudents = 15 
let numberOfMentors = 8
let totalNumberOfStudentsMentors = numberOfStudents + numberOfMentors;

let percentageOfStudents = numberOfStudents * 100 /totalNumberOfStudentsMentors;
percentageOfStudents = Math.round(percentageOfStudents); 
console.log("Percentage of Students: " + percentageOfStudents + "%");


let percentageOfMentors = numberOfMentors * 100 /totalNumberOfStudentsMentors;
percentageOfMentors = Math.round(percentageOfMentors); 
console.log("Percentage of Mentors: " + percentageOfMentors + "%");