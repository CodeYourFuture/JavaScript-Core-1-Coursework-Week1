let numberOfStudents = 15;
let numberOfMentors = 8;
let studentPec =
  (numberOfStudents / (numberOfMentors + numberOfStudents)) * 100;

let mentorPec = (numberOfMentors / (numberOfMentors + numberOfStudents)) * 100;
console.log("Percentage of students: " + Math.round(studentPec)) + "%";
console.log("Percentage of mentors: " + Math.round(mentorPec)) + "%";
