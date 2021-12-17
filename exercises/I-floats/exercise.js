let numberOfStudents = 15;
let numberOfMentors = 8;

let studentsText = 'Percentage students: '
let percentageStudents = (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
let roughPercentageStudents = Math.round(percentageStudents) + '%';
console.log(studentsText + roughPercentageStudents);

let mentorsText = 'Percentage mentors: '
let percentageMentors = (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;
let roughPercentageMentors = Math.round (percentageMentors) + '%';
console.log(mentorsText + roughPercentageMentors);