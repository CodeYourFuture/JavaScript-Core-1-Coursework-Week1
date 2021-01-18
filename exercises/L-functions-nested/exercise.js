//This function calculates the percentages.
//provide the name of group you wish to calculate its percentage on name parameter
function percentage(name, numberOfGroup, total) {
  let result = (numberOfGroup / total) * 100;
  function message() {
    return `Percentages of ${name}: ${result}`;
  }
  return message();
}
console.log(percentage("Student", 40, 400));
console.log(percentage("Mentors", 360, 400));
