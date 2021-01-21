
let total = 15 + 8;

function students (s) {
    return s / total * 100;
}
 function mentors (m) {
     return m / total * 100;
 }

 let studentPercent = Math.round(students(15)) + '%';
 let mentorPercent = Math.round(mentors(8)) + '%';

 console.log(`Percentage of students: ${studentPercent}`);
 console.log(`Percentage of mentors: ${mentorPercent}`);