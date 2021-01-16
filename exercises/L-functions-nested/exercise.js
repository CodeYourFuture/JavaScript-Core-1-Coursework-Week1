var numberOfStudents = 15;
var numberOfMentors = 8;

function percentages(num1, num2) {
  var studentPerc = Math.round((num1 / (num1 + num2)) * 100);
  var mentorPerc = Math.round((num2 / (num1 + num2)) * 100);
  function greet(student, mentor) {
    return `${student} percentage :${studentPerc}"\n"${mentor} percentage: ${mentorPerc}`;
  }
  return greet("student", "mentor");
}
console.log(percentages(numberOfStudents, numberOfMentors));
