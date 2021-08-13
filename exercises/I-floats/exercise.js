var numberOfStudents = 15;
var numberOfMentors = 8;
let total = numberOfStudents + numberOfMentors;
function percentageOf(num) {
  var precisePercentage = (num / total) * 100;
  let roughPercentage = Math.round(precisePercentage);
  return roughPercentage;
}

console.log("Percentage students: " + percentageOf(numberOfStudents) + "%");
console.log("Percentage mentors: " + percentageOf(numberOfMentors) + "%");
