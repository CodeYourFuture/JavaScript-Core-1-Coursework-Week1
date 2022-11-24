// Start by creating a variables `numberOfStudents` and `numberOfMentors`
var numberOfStudents = 50;
var numberOfMentors = 10;
var stud = "Number of students: ";
console.log(stud + numberOfStudents);
var ment = "Number of mentors: ";
console.log(ment + numberOfMentors);
var total = "Total number of students and mentors: ";
var sum = numberOfMentors + numberOfStudents;
console.log(total + sum);


function addNumbers(a, b, c) {
  return a + b + c;
}
console.log(addNumbers(1,2,3))

function introduceMe(name, age) {
  return "Hello, my name is " + "${name}" + "and I am " + "${age}" + " years old";
}
function getTotal(a, b) {
  total = a + b;
  return "The total is ${total}";
}