
const total = 15 + 8;

function studentGroup (students) {
    return students / total * 100;
}
let percentOfStudents = studentGroup(15);

function mentorGroup (mentors) {
    return mentors / total * 100;
}
let percentOfMentors = mentorGroup(8);
 

console.log('Percentage of students: ' + Math.round(percentOfStudents) + '%');
console.log('Percentage of mentors: ' + Math.round(percentOfMentors) + '%');
