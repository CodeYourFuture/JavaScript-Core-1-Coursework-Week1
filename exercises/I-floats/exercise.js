var numberOfStudents = 15;
var numberOfMentors = 8;
let totalParticipants = numberOfStudents + numberOfMentors;

let studentPercentage = Math.round((numberOfStudents / totalParticipants) * 100);
let mentorPercentage = Math.round((numberOfMentors / totalParticipants) * 100);


console.log("Percentage students: " + studentPercentage + "%");
console.log("Percentage mentors: " + mentorPercentage+ "%");