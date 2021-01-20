// Option B [I had help to do this task, because I couldn't work it out by myself]

// Created two separate functions
function getPercentage(subset, total) {
  let percentage = Math.round((subset * 100) / total);
  return percentage;
}
function getMessage(group, percentage) {
  let message = "Percentage of " + group + ": " + percentage + "%";
  return message;
}
// Created variables to store values from the functions and call them for the students
let studentsPercentage = getPercentage(16, 46);
let studentsMessage = getMessage("students", studentsPercentage);
console.log(studentsMessage);
// Created variables to store values from the functions and call them for the mentors
let mentorsPercentage = getPercentage(30, 46);
let mentorsMessage = getMessage("mentors", mentorsPercentage);
console.log(mentorsMessage);
