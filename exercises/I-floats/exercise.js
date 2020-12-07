let numberOfStudents = 15;
let numberOfMentors = 8;

// total of students and mentors
let total = numberOfStudents + numberOfMentors;

// Get percentage of students and mentors
let studentsConvert = numberOfStudents / total * 100;
let mentorsConvert = numberOfMentors / total * 100;

// round the figure
let percentageOfStudents = Math.round(studentsConvert);
let percentageOfMentors = Math.round(mentorsConvert);

// console log
console.log(`Percentage of Students: ${percentageOfStudents}%`);
console.log(`Percentage of Mentors: ${percentageOfMentors}%`);