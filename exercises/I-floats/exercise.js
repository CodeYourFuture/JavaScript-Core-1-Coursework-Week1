var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;

function percentage(sample, total) {
  let percentage = sample / total;
  percentage = percentage * 100;
  percentage = Math.round(percentage);
  return percentage;
}

console.log("percentage students " + percentage(numberOfStudents, sum) + "%");
console.log("percentage mentors " + percentage(numberOfMentors, sum) + "%");
