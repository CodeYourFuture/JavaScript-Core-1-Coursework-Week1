function createCal(num1, num2) {
  return num1 / (num1 + num2) * 100;
}

function createGreeting(num1, num2) {
  var percentStudent = Math.round(createCal(num1, num2));
  var percentMentor = Math.round(createCal(num2, num1));
  var message = "Percentage students: " + percentStudent + "%" + "\nPercentage mentors: " + percentMentor + "%";
  return message;
}
console.log(createGreeting(15, 8));
