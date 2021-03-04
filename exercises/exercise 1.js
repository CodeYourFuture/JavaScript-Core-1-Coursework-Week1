function percentage(sample, total) {
  let percentage = sample / total;
  percentage = percentage * 100;
  percentage = Math.round(percentage);
  return percentage;
}
var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
console.log("number of students " + numberOfStudents);
console.log("number of mentors " + numberOfMentors);
console.log("sum of students and mentors " + sum);

console.log("percentage students " + percentage(numberOfStudents, sum) + "%");
console.log("percentage mentors " + percentage(numberOfMentors, sum) + "%");

