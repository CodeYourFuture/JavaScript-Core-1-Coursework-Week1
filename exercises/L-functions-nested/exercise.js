// function to calculate the percentage
function percentage(num, total) {
  return (num / total * 100);
}

// function to create the message
function createMessage(memberType, percentage) {
  message = `Percentage ${memberType}: ${Math.round(percentage)}%`;
  return message;
}

// variable initialization
var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var percentOfStudents = percentage(numberOfStudents, total);
var percentOfMentors = percentage(numberOfMentors, total);

// print the results
console.log(createMessage("students", percentOfStudents));
console.log(createMessage("mentors", percentOfMentors));