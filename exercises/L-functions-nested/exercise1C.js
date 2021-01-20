// Option C

// Created a function with several variables that when called would return the expected output
function doPercentage(mentors, students) {
  let allStudents = students;
  let allMentors = mentors;
  let allAdults = allStudents + allMentors;
  let percentageStudents = (allStudents * 100) / allAdults;
  let percentageMentors = (allMentors * 100) / allAdults;
  let allPercentagesS =
    "Percentage of students: " + Math.round(percentageStudents) + "%.";
  let allPercentagesM =
    "Percentage of mentors: " + Math.round(percentageMentors) + "%.";
  let allPercentages = allPercentagesS + allPercentagesM;
  return allPercentages;
}

console.log(doPercentage(16, 30));
