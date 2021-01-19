var numberOfStudents = 15;
var numberOfMentors = 8;

const sum = numberOfStudents+ numberOfMentors;


const percentageStudents = numberOfStudents / sum *100;
const roughPercentageStudents = Math.round(percentageStudents);
console.log(roughPercentageStudents);

const percentageMentors = numberOfMentors / sum *100;
const roughPercentageMentors = Math.round(percentageMentors);
console.log(roughPercentageMentors);
