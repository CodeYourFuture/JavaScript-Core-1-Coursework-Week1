var numberOfStudents = 15;
var numberOfMentors = 8;

function percentageCalc(number) {
    return Math.round((number/(numberOfMentors + numberOfStudents)) * 100) + "%";
}

console.log("Percentage students: ", percentageCalc( numberOfStudents));
console.log("Percentage mentors: ", percentageCalc(numberOfMentors));




