let numberOfStudents = 15;
let numberOfMentors = 8;

//calculate percentage
function calculatePercentage(numPersons, totalGroup) {
  let totalPerc = (numPersons / totalGroup) * 100;

  return totalPerc;
}

//create display percentage

function displayPercentage() {
  let totalGroup = numberOfStudents + numberOfMentors;
  console.log(
    "Percentage students: " +
      Math.round(calculatePercentage(numberOfStudents, totalGroup)) +
      "%"
  );
  console.log(
    "Percentage mentors: " +
      Math.round(calculatePercentage(numberOfMentors, totalGroup)) +
      "%"
  );
}

displayPercentage();
