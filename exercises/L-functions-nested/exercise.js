var numberOfStudents = 15;
var numberOfMentors = 8;
// Calculates the percentage
function getPercentage(numberOfPerson, totalNumbers) {
  var percentage = Math.round((numberOfPerson / totalNumbers) * 100);
  return percentage;
}
// Create the message
function createMessage(person, numberOfPerson, totalNumbers) {
  var percentage = getPercentage(numberOfPerson, totalNumbers);
  var message = `Percentage ${person}: ${percentage} %`;
  return message;
}

var totalNumbers = numberOfStudents + numberOfMentors;
var result = createMessage("students", numberOfStudents, totalNumbers);
console.log(result);
result = createMessage("mentors", numberOfMentors, totalNumbers);
console.log(result);
