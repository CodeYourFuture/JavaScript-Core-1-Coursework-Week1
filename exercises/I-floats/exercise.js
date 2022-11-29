var numberOfStudents = 15;
var numberOfMentors = 8;

let totalNum = numberOfStudents + numberOfMentors;

let studentPercentage = (numberOfStudents / totalNum) * 100;
let mentorPercentage = (numberOfMentors / totalNum) * 100;

console.log(`Percentage students: ${Math.round(studentPercentage)}%`);
console.log(`Percentage mentors: ${Math.round(mentorPercentage)}%`);

//console.log("Percentage students: "+Math.round(studentPercentage)+"%");
//console.log("Percentage mentors: " +Math.round(mentorPercentage)+"%");