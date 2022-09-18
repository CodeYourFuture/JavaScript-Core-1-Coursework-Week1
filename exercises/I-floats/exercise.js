const numberOfStudents = 15;
const numberOfMentors = 8;

function percentageNumber(num1, num2, percentage) {
  const sum = num1 + num2;
  return Math.round((100 / sum) * percentage);
}

const students = percentageNumber(
  numberOfStudents,
  numberOfMentors,
  numberOfStudents
);

const mentors = percentageNumber(
  numberOfStudents,
  numberOfMentors,
  numberOfMentors
);
console.log(`Percentage students: ${students}%`);
console.log(`Percentage mentors: ${mentors}%`);
