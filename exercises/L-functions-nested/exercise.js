
function divide(num1, num2) {
    return num1/num2 *100
}

var resultMentors = divide(6, 17);
var resultStudents = divide(11, 17);

var percentMentors = "Percentage students: " + Math.round(resultMentors) + "%";
var percentStudents = "Percentage students: " + Math.round(resultStudents) + "%";

console.log(percentMentors);
console.log(percentStudents);

