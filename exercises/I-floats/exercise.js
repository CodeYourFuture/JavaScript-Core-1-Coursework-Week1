var numberOfStudents = Math.round(14.488);
var numberOfMentors = Math.round(8.655);

let total = numberOfMentors + numberOfStudents
let students = numberOfStudents / total * 100;
let mentors = numberOfMentors / total * 100;


console.log('Percentage students: ' + Math.round(students) + '%');
console.log('Percentage students: ' + Math.round(mentors) + '%');