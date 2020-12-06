var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

function CalculatePercentage(num, total) {
    return Math.round(num / total * 100);
}

function CreateMessage(num, str) {
    return "Percentage " + str + ": " + num + "%";
}

console.log(CreateMessage(CalculatePercentage(numberOfStudents, total), "students"));
console.log(CreateMessage(CalculatePercentage(numberOfMentors, total), "mentors"));