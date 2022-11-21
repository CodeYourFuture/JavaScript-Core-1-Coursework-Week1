var numberOfStudents = 15;
var numberOfMentors = 8;

const totalNumber = numberOfMentors + numberOfStudents;

let percentageStudents = (numberOfStudents / totalNumber) * 100;
const roughPercentageStudents = Math.round(percentageStudents);

console.log(percentageStudents);
console.log(roughPercentageStudents);

let percentageMentors = (numberOfMentors / totalNumber) * 100;
const roughPercentageMentors = Math.round(percentageMentors);

console.log(percentageMentors);
console.log(roughPercentageMentors);
