const numberOfStudents = 15;
const numberOfMentors = 8;
const totalNumber = numberOfStudents + numberOfMentors;

studentsFloat = (numberOfStudents / totalNumber) * 100;
studentsPercentage = Math.round(studentsFloat);
studentsMessage = `Percentage students: ${studentsPercentage}%`;

mentorsFloat = (numberOfMentors / totalNumber) * 100;
mentorsPercentage = Math.round(mentorsFloat);
mentorsMessage = `Percentage mentors: ${mentorsPercentage}$`;

console.log(studentsMessage);
console.log(mentorsMessage);
