let numberOfStudents = 15;
let numberOfMentors = 8;
let totalpersons = numberOfStudents + numberOfMentors;
console.log(
  `Percentage students: ${Math.round((numberOfStudents * 100) / totalpersons)}`
);

console.log(
  `Percentage mentors: ${Math.round((numberOfMentors * 100) / totalpersons)}`
);
