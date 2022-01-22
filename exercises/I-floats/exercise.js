let numberOfStudents = 15;
let numberOfMentors = 8;

let percentageOfStudent = numberOfStudents / (numberOfStudents + numberOfMentors) * 100;
let studentMessage = "Percentage students: " + Math.round(percentageOfStudent) + "%";
console.log(studentMessage);

let percentageOfMentor = numberOfMentors / (numberOfStudents + numberOfMentors) * 100;
let mentorMessage = "Percentage mentor: " + Math.round(percentageOfMentor) + "%";
console.log(mentorMessage);
