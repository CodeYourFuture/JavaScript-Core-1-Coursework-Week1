var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumberOfStudentsAndMentors = numberOfStudents + numberOfMentors;

function calculatePercentage(number, total) {
  var percentage = (number / total) * 100;
  var roundedPercentage = Math.round(percentage);

  return roundedPercentage;
}

function createMessage(role, number, total) {
  return calculatePercentage(number, total) + "% are " + role;
}

var percentageAreStudentsMessage = createMessage("students", numberOfStudents, totalNumberOfStudentsAndMentors);
var percentageAreMentorsMessage = createMessage("mentors", numberOfMentors, totalNumberOfStudentsAndMentors);

console.log(percentageAreStudentsMessage);
console.log(percentageAreMentorsMessage);
