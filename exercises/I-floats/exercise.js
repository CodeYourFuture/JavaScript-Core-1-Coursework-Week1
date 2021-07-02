let numberOfStudents = 15;
let numberOfMentors = 8;
let percentValue = 100 / (numberOfStudents + numberOfMentors);
let percentageStudents = Math.round(percentValue * numberOfStudents);
let PercentageMentors = Math.round(percentValue * numberOfMentors);
let result = `
Percentage students: ${percentageStudents}%
Percentage mentors: ${PercentageMentors}% 
`;
console.log(result);