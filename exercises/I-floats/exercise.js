let numberOfStudents = 15;
let numberOfMentors = 8;

let total =numberOfStudents + numberOfMentors;
console.log(`Total number of students and mentors: ${numberOfStudents + numberOfMentors}`);

let percentageStudents =(100/total)*numberOfStudents;
console.log(`Percentage of students: ${Math.round(percentageStudents)}%`);

let percentageMentors=(100/total)*numberOfMentors;
console.log(`Percentage of mentors: ${Math.round(percentageMentors)}%`);
