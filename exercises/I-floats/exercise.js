var numberOfStudents = 15;
var numberOfMentors = 8;
let totNum = numberOfStudents + numberOfMentors;

let perResult = `Percentage students: ${Math.round(
  (numberOfStudents / totNum) * 100
)}% \n Percentage of Mentors: ${Math.round((numberOfMentors / totNum) * 100)}%`;

console.log(perResult);
