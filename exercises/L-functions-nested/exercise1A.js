// Option A [I had help to do this task, because I couldn't work it out by myself]

// First, created a function that calculated the percentage and round it
function getPercentage(subset, total) {
  let percentage = Math.round((subset * 100) / total);
  return percentage;
}
// After that, created another function that generated sentences using the percentage's function above
function getMessage(numberOfStudents, numberOfMentors) {
  let total = numberOfStudents + numberOfMentors;
  let studentPercentage = getPercentage(numberOfStudents, total);
  let mentorPercentage = getPercentage(numberOfMentors, total);
  let studentMessage = "Percentage of students: " + studentPercentage + "%";
  let mentorMessage = "Percentage of mentors: " + mentorPercentage + "%";
  return studentMessage + "\n" + mentorMessage;
}
// Called the last function to generate the sentences expected
console.log(getMessage(16, 30));
