// Program that outputs the value of `numberOfStudents`, `numberOfMentors` 
// and `totalStudentsAndMentors` after using template string literal syntax to concatenate 
// the string stored in `message`.

let numberOfStudents = 15;
let numberOfMentors = 8;
const totalStudentsAndMentors = numberOfStudents + numberOfMentors;

let message = `Number of students: ${numberOfStudents}
Number of mentors: ${numberOfMentors}
Total number of students and mentors: ${totalStudentsAndMentors}`;

console.log(message);
