var numberOfStudents = 15;
var numberOfMentors = 8;
let subtotal = numberOfStudents + numberOfMentors;
let mentorpercent = (numberOfMentors * 100) / subtotal;
let studentpercent = (numberOfStudents * 100) / subtotal;
console.log("percentage of students is :", Math.round(studentpercent));
console.log("percentage of mentors is :", Math.round(mentorpercent));
