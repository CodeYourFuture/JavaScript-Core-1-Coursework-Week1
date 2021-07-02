let numberOfStudents = 15;
let numberOfMentors = 8;
let total = numberOfMentors + numberOfStudents;
let mentorPercent = numberOfMentors*100/total ;
let studentPercent = numberOfStudents*100/total;
console.log("Percentage of mentors: " + mentorPercent + "%");
console.log("Percentage of mentors: " + Math.round(mentorPercent) + "%");
console.log("Percentage of Students: " + Math.round(studentPercent) + "%");
