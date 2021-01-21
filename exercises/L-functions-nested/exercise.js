var numberOfStudents = 15;
var numberOfMentors = 8;

function getPercentage(num1, num2) {
  return Math.round((num1 / (num1 + num2)) * 100);
}

function createMessage(kind, percent) {
  console.log(`Percentage ${kind}: ${percent}%`);
}

createMessage("students", getPercentage(numberOfStudents, numberOfMentors));
createMessage("mentors", getPercentage(numberOfMentors, numberOfStudents));
