let numberOfStudents = 15;
let numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;
let studentPercentage = (numberOfStudents * 100) / totalNumber;
let mentorsPercentage = (numberOfMentors * 100) / totalNumber;
let studentP = `percentage of students: ${Math.round(studentPercentage)}%`;
let mentorsP = `percentage of mentors: ${Math.round(mentorsPercentage)}%`;
console.log(studentP);
console.log(mentorsP);
