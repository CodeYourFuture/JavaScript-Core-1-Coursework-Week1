var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;
console.log(totalNumber);

// Student percentage
const percentageOfStudents = (numberOfStudents / totalNumber) * 100;
console.log(percentageOfStudents);
const roundedStudentPercentage = Math.round(percentageOfStudents);
console.log(roundedStudentPercentage);

// Mentor percentage
const percentageOfMentors = (numberOfMentors / totalNumber) * 100;
console.log(percentageOfMentors);
const roundedMentorPercentage = Math.round(percentageOfMentors);
console.log(roundedMentorPercentage);

// Result
console.log(`Percentage students: ${roundedStudentPercentage}%`);
console.log(`Percentage mentors: ${roundedMentorPercentage}%`);
