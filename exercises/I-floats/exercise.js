const numberOfStudents = 15;
const numberOfMentors = 8;
const totalNumber = numberOfMentors+numberOfStudents;


const percentageOfMentors =  (numberOfMentors/totalNumber)*100 ;
const percentageOfStudents = (numberOfStudents/totalNumber)*100 ;
const roundPercentageOfMentors = "Percentage Mentors:" + Math.round( percentageOfMentors) +"%";
const roundPercentageOfStudents = "Percentage students:" + Math.round( percentageOfStudents)+"%";

console.log( roundPercentageOfMentors);
console.log(roundPercentageOfStudents);


