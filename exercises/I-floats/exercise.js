var numberOfStudents = 15;
var numberOfMentors = 8;
const sum = numberOfStudents + numberOfMentors;

function percentageOf(num) {
    return (num / sum) * 100;
}
console.log(`Percentage of students: ${Math.round(percentageOf(numberOfStudents))}%
Percentage of mentors: ${Math.round(percentageOf(numberOfMentors))}%`)