//Percentage students: 65%
//Percentage mentors: 35%


var numberOfStudents = 15;
var numberOfMentors = 8;
var studentsPer = "Percentage students: ";
var mentorsPer = "Percentage mentors: ";
var per = "%"
var total = numberOfStudents + numberOfMentors; // 23
//function for percentage
function percentage (x,y) {
  return  x/y*100;

};
var perRoundStud = Math.round(percentage(numberOfStudents,total)); // rounded up
var perRoundMentor = Math.round(percentage(numberOfMentors,total)); // rounded up

console.log(studentsPer + percentage(numberOfStudents,total) + per);
console.log(mentorsPer + percentage(numberOfMentors,total) + per  );
console.log(studentsPer + perRoundStud + per); // round down
console.log(studentsPer + perRoundMentor + per); // round up