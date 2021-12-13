// Start by creating a variables `numberOfStudents` and `numberOfMentors` //
let numberOfStudents;
let numberOfMentors;

// - Create two variables `numberOfStudents` and `numberOfMentors` //
numberOfStudents = 15;
console.log(`Number of students: ${numberOfStudents}`);

numberOfMentors = 8;
console.log(`Number of mentors: ${numberOfMentors}`);

// - Log a message that displays the total number of students and mentors //
const sumOfClass = (students, mentors) => {
  let total = students + mentors;

  return `Total number of students and mentors: ${total}`;
}

let result = sumOfClass(numberOfStudents, numberOfMentors);
console.log(result);


